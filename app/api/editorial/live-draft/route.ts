import {
  NextRequest,
  NextResponse
} from "next/server";

import {
  createEditorialDraft
} from "@/lib/editorial-live/draft";

export async function POST(
  request: NextRequest
) {
  try {
    const body = await request.json();

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

    const draft =
      await createEditorialDraft(
        clusterId
      );

    return NextResponse.json(
      draft
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