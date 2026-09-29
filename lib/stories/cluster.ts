import type { RawStory, StoryCluster } from "@/lib/types";
import { fingerprint } from "@/lib/scraping/normalize";
import { jaccard } from "./similarity";

export function clusterStories(stories: RawStory[], threshold = 0.38): StoryCluster[] {
  const clusters: StoryCluster[] = [];

  for (const story of stories) {
    let best: StoryCluster | undefined;
    let bestScore = 0;

    for (const cluster of clusters) {
      const score = jaccard(story.title, cluster.title);
      if (score > bestScore) { best = cluster; bestScore = score; }
    }

    if (best && bestScore >= threshold) {
      best.storyIds.push(story.id);
      best.sourceCount += 1;
      best.confidence = Math.min(99, Math.round(58 + best.sourceCount * 8 + bestScore * 12));
    } else {
      clusters.push({
        id: `cluster-${clusters.length + 1}-${Date.now()}`,
        fingerprint: fingerprint(story.title),
        title: story.title,
        storyIds: [story.id],
        sourceCount: 1,
        confidence: 64,
        createdAt: new Date().toISOString()
      });
    }
  }

  return clusters.sort((a,b) => b.sourceCount - a.sourceCount);
}
