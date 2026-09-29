import { NextRequest, NextResponse } from "next/server";
import { store } from "@/lib/store";
import { generateEditorialDraft } from "@/lib/ai/editorial";

export async function POST(request: NextRequest) {
  const { storyIds } = await request.json();
  const selected = store.rawStories.filter(s => Array.isArray(storyIds) && storyIds.includes(s.id));
  if (!selected.length) return NextResponse.json({ error: "No stories selected" }, { status: 400 });
  const draft = await generateEditorialDraft(selected);
  return NextResponse.json(draft);
}
