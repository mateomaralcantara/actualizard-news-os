import {
  NextRequest,
  NextResponse
} from "next/server";

import {
  publishCluster
} from "@/lib/editorial-live/publish";

import {
  store
} from "@/lib/store";

export async function POST(
  request: NextRequest
) {
  try {
    const body =
      await request.json();

    const clusterId =
      String(body.clusterId || "");

    if (!clusterId) {
      return NextResponse.json(
        {
          error: "clusterId requerido"
        },
        {
          status: 400
        }
      );
    }

    const article =
      await publishCluster(
        clusterId
      );

    const exists =
      store.articles.some(
        item =>
          item.id === article.id ||
          item.slug === article.slug
      );

    if (!exists) {
      store.articles.unshift(
        article
      );
    }

    return NextResponse.json(
      article
    );

  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : String(error)
      },
      {
        status: 500
      }
    );
  }
}