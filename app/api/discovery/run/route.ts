import {
  NextRequest,
  NextResponse
} from "next/server";

import {
  runDiscoveryEngine
} from "@/lib/discovery/engine";

function authorized(
  request: NextRequest
) {

  if (
    process.env.NODE_ENV !==
    "production"
  ) {

    return true;
  }

  const secret =
    request.headers.get(
      "x-discovery-secret"
    ) ||
    request.nextUrl.searchParams.get(
      "secret"
    );

  return (
    Boolean(secret) &&
    secret ===
      process.env
        .DISCOVERY_SECRET
  );
}

async function execute(
  request: NextRequest
) {

  if (!authorized(request)) {

    return NextResponse.json(
      {
        error:
          "Unauthorized"
      },
      {
        status: 401
      }
    );
  }

  try {

    const result =
      await runDiscoveryEngine();

    return NextResponse.json(
      result
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

export async function GET(
  request: NextRequest
) {

  return execute(request);
}

export async function POST(
  request: NextRequest
) {

  return execute(request);
}
