import { sources, store } from "@/lib/store";
import type { RawStory } from "@/lib/types";
import { scrapeRss } from "./rss";
import { scrapeHtml } from "./html";
import { clusterStories } from "@/lib/stories/cluster";

export async function runDiscovery() {
  const discovered: RawStory[] = [];
  const errors: string[] = [];

  for (const source of sources) {
    try {
      const items = source.type === "rss" ? await scrapeRss(source) : await scrapeHtml(source);
      discovered.push(...items);
    } catch (error) {
      errors.push(`${source.name}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  const known = new Set(store.rawStories.map(s => s.url));
  const fresh = discovered.filter(s => !known.has(s.url));
  store.rawStories.push(...fresh);

  const clusters = clusterStories(store.rawStories);
  store.clusters = clusters;

  return {
    scannedSources: sources.length,
    discovered: discovered.length,
    fresh: fresh.length,
    clusters: clusters.length,
    errors
  };
}
