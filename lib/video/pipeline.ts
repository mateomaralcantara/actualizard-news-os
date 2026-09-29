import type { Article } from "@/lib/types";

export interface VideoJob {
  id: string;
  articleId: string;
  format: "16:9" | "9:16" | "1:1";
  status: "queued" | "script" | "assets" | "rendering" | "ready" | "failed";
  script: string;
  outputUrl?: string;
}

export function createVideoJob(article: Article, format: VideoJob["format"] = "9:16"): VideoJob {
  const paragraphs = article.blocks
    .filter(b => b.type === "paragraph")
    .map(b => b.type === "paragraph" ? b.text : "")
    .join(" ");

  return {
    id: `video-${article.id}-${Date.now()}`,
    articleId: article.id,
    format,
    status: "script",
    script: `${article.title}. ${article.dek}. ${paragraphs}`.slice(0, 2400)
  };
}

/**
 * Producción real:
 * 1. convertir article -> script/storyboard
 * 2. resolver B-roll / imágenes / clips IA
 * 3. TTS (ElevenLabs u otro)
 * 4. composición Remotion
 * 5. render FFmpeg
 * 6. upload R2/Mux
 * 7. distribución social
 */
