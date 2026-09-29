import { NextRequest, NextResponse } from "next/server";
import { store } from "@/lib/store";
import { createVideoJob } from "@/lib/video/pipeline";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const article = store.articles.find(a => a.id === body.articleId);
  if (!article) return NextResponse.json({ error: "Article not found" }, { status: 404 });
  const job = createVideoJob(article, body.format ?? "9:16");
  return NextResponse.json(job, { status: 201 });
}
