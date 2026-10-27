import { readFile } from "node:fs/promises";
import { join } from "node:path";

import sharp from "sharp";

import { absoluteUrl } from "@/lib/site-url";
import { store } from "@/lib/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Meta, WhatsApp, X y LinkedIn admiten ampliamente JPEG en 1200 x 630.
const WIDTH = 1200;
const HEIGHT = 630;
const MAX_SOURCE_BYTES = 12 * 1024 * 1024;

async function readFeaturedImage(source: string): Promise<Buffer> {
  // Preferir el archivo original. En despliegues serverless puede no estar
  // disponible en el filesystem; en ese caso se obtiene desde la URL pública.
  if (/^\/uploads\/[a-zA-Z0-9._-]+$/.test(source)) {
    try {
      const filename = source.slice("/uploads/".length);
      const local = await readFile(join(process.cwd(), "public", "uploads", filename));
      if (local.length > MAX_SOURCE_BYTES) {
        throw new Error("La imagen destacada supera el limite permitido");
      }
      return local;
    } catch (error) {
      if (error instanceof Error && error.message.includes("limite permitido")) {
        throw error;
      }
      // El contenido estático puede servirse por CDN sin existir en la función.
    }
  }

  const url = new URL(absoluteUrl(source));
  if (
    url.protocol !== "https:" &&
    !(process.env.NODE_ENV !== "production" && url.hostname === "localhost")
  ) {
    throw new Error("La imagen destacada debe estar disponible mediante HTTPS");
  }

  const response = await fetch(url, {
    cache: "no-store",
    signal: AbortSignal.timeout(15000),
    headers: { Accept: "image/jpeg,image/png,image/webp,image/avif,image/svg+xml" }
  });

  if (!response.ok) {
    throw new Error(`No se pudo obtener la portada: HTTP ${response.status}`);
  }

  const advertisedSize = Number(response.headers.get("content-length") || 0);
  if (advertisedSize > MAX_SOURCE_BYTES) {
    throw new Error("La imagen destacada supera el limite permitido");
  }

  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length === 0 || bytes.length > MAX_SOURCE_BYTES) {
    throw new Error("La imagen destacada no tiene un tamaño valido");
  }

  return bytes;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const article = store.articles.find(
    (item) => item.slug === slug && item.status === "published"
  );

  if (!article?.heroImage) {
    return new Response("Articulo o imagen no disponible", { status: 404 });
  }

  try {
    const source = await readFeaturedImage(article.heroImage);
    const image = await sharp(source, { limitInputPixels: 50_000_000 })
      .rotate()
      .resize(WIDTH, HEIGHT, { fit: "cover", position: "centre" })
      .flatten({ background: "#ffffff" })
      .jpeg({ quality: 88, mozjpeg: true, progressive: true })
      .toBuffer();

    return new Response(new Uint8Array(image), {
      status: 200,
      headers: {
        "Content-Type": "image/jpeg",
        "Content-Length": String(image.length),
        "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=3600",
        "X-Content-Type-Options": "nosniff"
      }
    });
  } catch (error) {
    console.error("No se pudo generar la imagen social para", slug, error);
    return new Response("No se pudo procesar la imagen destacada", {
      status: 502,
      headers: { "Cache-Control": "no-store" }
    });
  }
}
