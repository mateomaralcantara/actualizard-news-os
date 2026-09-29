import { NextResponse } from "next/server";

import {
  loadClustersSync,
  loadStoriesSync,
  findDraftByClusterSync
} from "@/lib/discovery/repository";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  {
    params
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  const { id } = await params;

  const cluster = loadClustersSync().find(
    item => item.id === id
  );

  if (!cluster) {
    return NextResponse.json(
      {
        error: "Cluster not found"
      },
      {
        status: 404
      }
    );
  }

  const stories = loadStoriesSync().filter(
    story =>
      cluster.storyIds.includes(
        story.id
      )
  );

  const draft =
    findDraftByClusterSync(id) ??
    null;

  return NextResponse.json({
    cluster,
    stories,
    draft
  });
}