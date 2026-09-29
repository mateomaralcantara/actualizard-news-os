import * as cheerio from "cheerio";
import type { RawStory, SourceRecord } from "@/lib/types";
import { cleanText, normalizeUrl } from "./normalize";

export async function scrapeHtml(source: SourceRecord): Promise<RawStory[]> {
  const res = await fetch(source.url, {
    headers: {
      "user-agent": "ActualizardBot/0.1 (+editorial discovery)",
      "accept-language": "es,en;q=0.8"
    },
    cache: "no-store"
  });
  if (!res.ok) throw new Error(`HTML ${source.name}: ${res.status}`);
  const html = await res.text();
  const $ = cheerio.load(html);
  const stories: RawStory[] = [];

  $("article").slice(0, 30).each((index, el) => {
    const node = $(el);
    const a = node.find("a").first();
    const href = a.attr("href");
    const title = cleanText(node.find("h1,h2,h3").first().text() || a.text());
    if (!href || !title) return;
    const url = new URL(href, source.url).toString();
    const summary = cleanText(node.find("p").first().text());
    const image = node.find("img").first().attr("src");
    stories.push({
      id: `${source.id}-${Date.now()}-${index}`,
      sourceId: source.id,
      sourceName: source.name,
      url: normalizeUrl(url),
      title,
      summary,
      text: summary,
      image: image ? new URL(image, source.url).toString() : undefined,
      discoveredAt: new Date().toISOString()
    });
  });

  return stories;
}
