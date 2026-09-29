import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { store } from "@/lib/store";

const ArticleInput = z.object({
  title: z.string().min(5),
  dek: z.string().min(5),
  category: z.string().default("Actualidad"),
  heroImage: z.string().url().optional(),
  scheduledFor: z.string().datetime().optional()
});

export async function GET() {
  return NextResponse.json(store.articles);
}

export async function POST(request: NextRequest) {
  const parsed = ArticleInput.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const now = new Date().toISOString();
  const slug = parsed.data.title
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const article = {
    id: `art-${Date.now()}`,
    slug,
    title: parsed.data.title,
    dek: parsed.data.dek,
    category: parsed.data.category,
    author: "Redacción Actualizard",
    heroImage: parsed.data.heroImage ?? "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
    status: parsed.data.scheduledFor ? "scheduled" as const : "draft" as const,
    confidence: 0,
    sourceCount: 0,
    createdAt: now,
    updatedAt: now,
    scheduledFor: parsed.data.scheduledFor,
    blocks: [{ type: "paragraph" as const, text: parsed.data.dek }],
    tags: []
  };

  store.articles.unshift(article);
  return NextResponse.json(article, { status: 201 });
}
