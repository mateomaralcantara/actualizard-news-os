import {
  NextResponse
} from "next/server";

import {
  discoverySources
} from "@/lib/discovery/source-registry";

import {
  loadStoriesSync,
  loadClustersSync,
  loadRunsSync,
  loadDraftsSync,
  loadPublishedArticlesSync
} from "@/lib/discovery/repository";

export async function GET() {

  const stories =
    loadStoriesSync();

  const clusters =
    loadClustersSync();

  const runs =
    loadRunsSync();

  const drafts =
    loadDraftsSync();

  const published =
    loadPublishedArticlesSync();

  return NextResponse.json({
    sources: {
      total:
        discoverySources.length,

      enabled:
        discoverySources.filter(
          source =>
            source.enabled
        ).length
    },

    stories:
      stories.length,

    clusters:
      clusters.length,

    drafts:
      drafts.length,

    published:
      published.length,

    latestRun:
      runs[0] || null,

    firecrawlConfigured:
      Boolean(
        process.env
          .FIRECRAWL_API_KEY
      ),

    aiConfigured:
      Boolean(
        process.env
          .OPENAI_API_KEY
      )
  });
}
