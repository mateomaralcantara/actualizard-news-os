import { createHmac } from "node:crypto";

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { isSupabaseConfigured, createSupabaseServerClient } from "@/lib/supabase/server";
import { store } from "@/lib/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type RouteContext = { params: Promise<{ slug: string }> };

const CommentInput = z.object({
  author_name: z.string().trim().min(2).max(60),
  content: z.string().trim().min(5).max(1500),
  parent_id: z.string().uuid().nullable().optional(),
  website: z.string().max(200).optional()
}).strict();

const fields = "id,author_name,content,parent_id,created_at";

function articleExists(slug: string) {
  return store.articles.some(
    (article) => article.slug === slug && article.status === "published"
  );
}

function responseError(message: string, status: number) {
  return NextResponse.json(
    { error: message },
    { status, headers: { "Cache-Control": "no-store" } }
  );
}

function database() {
  return isSupabaseConfigured() ? createSupabaseServerClient() : null;
}

function logSafeCommentError(action: string, error: unknown) {
  // No imprimir el objeto de error: algunos errores de Headers.set incluyen
  // el valor completo del encabezado y pueden revelar claves de Supabase.
  const candidate = (error && typeof error === "object")
    ? error as Record<string, unknown>
    : {};
  const name = typeof candidate.name === "string" &&
    /^[A-Za-z]{1,40}$/.test(candidate.name)
    ? candidate.name
    : "UnknownError";
  const code = typeof candidate.code === "string" &&
    /^[A-Za-z0-9_-]{1,32}$/.test(candidate.code)
    ? candidate.code
    : undefined;
  const status = typeof candidate.status === "number" &&
    candidate.status >= 100 && candidate.status <= 599
    ? candidate.status
    : undefined;
  console.error("Error en comentarios:", { action, name, code, status });
}

export async function GET(_request: NextRequest, context: RouteContext) {
  const { slug } = await context.params;
  if (!articleExists(slug)) return responseError("Noticia no encontrada.", 404);
  try {
    const db = database();
    if (!db) return responseError("Comentarios pendientes de configuración.", 503);
    const { data, error } = await db.from("article_comments")
      .select(fields)
      .eq("article_slug", slug)
      .eq("status", "approved")
      .order("created_at", { ascending: false })
      .limit(200);

    if (error) throw error;
    return NextResponse.json(
      { comments: (data ?? []).reverse(), available: true },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    logSafeCommentError("lectura", error);
    return responseError("No se pudieron cargar los comentarios.", 503);
  }
}

export async function POST(request: NextRequest, context: RouteContext) {
  const { slug } = await context.params;
  if (!articleExists(slug)) return responseError("Noticia no encontrada.", 404);
  let db: ReturnType<typeof database>;
  try {
    db = database();
  } catch (error) {
    logSafeCommentError("configuracion", error);
    return responseError("Configuración de comentarios inválida.", 503);
  }
  if (!db) return responseError("Comentarios pendientes de configuración.", 503);

  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return responseError("Origen no autorizado.", 403);
  }
  if (!(request.headers.get("content-type") || "").startsWith("application/json")) {
    return responseError("Se requiere JSON.", 415);
  }
  if (Number(request.headers.get("content-length") || "0") > 5000) {
    return responseError("Comentario demasiado extenso.", 413);
  }

  let data: z.infer<typeof CommentInput>;
  try {
    const raw = await request.text();
    if (raw.length > 5000) return responseError("Comentario demasiado extenso.", 413);
    const parsed = CommentInput.safeParse(JSON.parse(raw));
    if (!parsed.success) return responseError("Nombre o comentario no válido.", 400);
    data = parsed.data;
  } catch {
    return responseError("Solicitud JSON inválida.", 400);
  }

  // El campo trampa captura bots que rellenan formularios ocultos.
  if (data.website) return responseError("No se pudo publicar.", 400);
  if (/(?:https?:\/\/|www\.|t\.me\/|wa\.me\/)/i.test(data.content)) {
    return responseError("Por seguridad, no se aceptan enlaces en los comentarios.", 400);
  }

  const secret = process.env.COMMENTS_RATE_LIMIT_SALT ||
    process.env.SUPABASE_SECRET_KEY ||
    process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!secret) return responseError("Comentarios pendientes de configuración.", 503);

  const forwarded = request.headers.get("x-vercel-forwarded-for") ||
    request.headers.get("x-forwarded-for") || "unknown";
  const address = forwarded.split(",")[0]?.trim().slice(0, 150) || "unknown";
  const ipHash = createHmac("sha256", secret).update(address).digest("hex");

  try {
    const hourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const fifteenSecondsAgo = new Date(Date.now() - 15 * 1000).toISOString();
    const { count, error: rateError } = await db.from("article_comments")
      .select("id", { count: "exact", head: true })
      .eq("ip_hash", ipHash)
      .gte("created_at", hourAgo);
    if (rateError) throw rateError;
    if ((count ?? 0) >= 10) {
      return responseError("Has alcanzado el límite de 10 comentarios por hora.", 429);
    }

    const { data: recent, error: recentError } = await db.from("article_comments")
      .select("id")
      .eq("ip_hash", ipHash)
      .gte("created_at", fifteenSecondsAgo)
      .limit(1);
    if (recentError) throw recentError;
    if (recent?.length) {
      return responseError("Espera unos segundos antes de comentar otra vez.", 429);
    }

    if (data.parent_id) {
      const { data: parent, error: parentError } = await db.from("article_comments")
        .select("id")
        .eq("id", data.parent_id)
        .eq("article_slug", slug)
        .eq("status", "approved")
        .maybeSingle();
      if (parentError) throw parentError;
      if (!parent) return responseError("La respuesta debe pertenecer a esta noticia.", 400);
    }

    const { data: created, error: createError } = await db.from("article_comments")
      .insert({
        article_slug: slug,
        author_name: data.author_name,
        content: data.content,
        parent_id: data.parent_id ?? null,
        ip_hash: ipHash,
        status: "approved"
      })
      .select(fields)
      .single();
    if (createError) throw createError;

    return NextResponse.json(
      { comment: created },
      { status: 201, headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    logSafeCommentError("escritura", error);
    return responseError("No se pudo publicar el comentario.", 503);
  }
}
