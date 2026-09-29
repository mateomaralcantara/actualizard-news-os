import { XMLParser } from "fast-xml-parser";
import type { RawStory, SourceRecord } from "@/lib/types";
import { cleanText, normalizeUrl } from "./normalize";

export async function scrapeRss(source: SourceRecord): Promise<RawStory[]> {
  const res = await fetch(source.url, { headers: { "user-agent": "ActualizardBot/0.1 (+editorial discovery)" }, cache: "no-store" });
  if (!res.ok) throw new Error(`RSS ${source.name}: ${res.status}`);
  const xml = await res.text();
  const parser = new XMLParser({ ignoreAttributes: false });
  const data = parser.parse(xml);
  const items = data?.rss?.channel?.item ?? data?.feed?.entry ?? [];
  const list = Array.isArray(items) ? items : [items];

  return list.slice(0, 30).map((item: any, index: number) => {
    const link = typeof item.link === "string" ? item.link : item.link?.["@_href"] ?? source.url;
    const title = cleanText(item.title?.["#text"] ?? item.title ?? "Sin título");
    const summary = cleanText(item.description ?? item.summary ?? item["content:encoded"] ?? "");
    return {
      id: `${source.id}-${Date.now()}-${index}`,
      sourceId: source.id,
      sourceName: source.name,
      url: normalizeUrl(link),
      title,
      summary,
      text: summary,
      publishedAt: item.pubDate ?? item.published ?? item.updated,
      discoveredAt: new Date().toISOString()
    };
  });
}
