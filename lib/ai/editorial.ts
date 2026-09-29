import OpenAI from "openai";
import type { RawStory } from "@/lib/types";

export interface EditorialDraft {
  title: string;
  dek: string;
  summary: string;
  bullets: string[];
  tags: string[];
}

function fallback(stories: RawStory[]): EditorialDraft {
  const lead = stories[0];
  return {
    title: lead?.title ?? "Historia en desarrollo",
    dek: lead?.summary?.slice(0, 220) || "Actualizard está consolidando varias fuentes sobre esta historia.",
    summary: stories.map(s => `${s.sourceName}: ${s.summary || s.title}`).join("\n\n").slice(0, 1800),
    bullets: stories.slice(0, 5).map(s => s.title),
    tags: ["actualidad"]
  };
}

export async function generateEditorialDraft(stories: RawStory[]): Promise<EditorialDraft> {
  if (!process.env.OPENAI_API_KEY) return fallback(stories);

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const evidence = stories.map((s, i) => ({
    n: i + 1,
    source: s.sourceName,
    title: s.title,
    summary: s.summary,
    url: s.url
  }));

  const response = await client.responses.create({
    model: process.env.OPENAI_MODEL || "gpt-5.6",
    input: [
      {
        role: "system",
        content: "Eres el editor de Actualizard. Escribe solo con la evidencia proporcionada. No inventes datos. Si las fuentes discrepan, dilo. Devuelve JSON."
      },
      {
        role: "user",
        content: JSON.stringify({
          task: "Genera title, dek, summary, bullets[3-5], tags[3-6].",
          evidence
        })
      }
    ],
    text: { format: { type: "json_object" } }
  });

  try {
    return JSON.parse(response.output_text) as EditorialDraft;
  } catch {
    return fallback(stories);
  }
}
