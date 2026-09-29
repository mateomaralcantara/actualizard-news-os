import {
  NextResponse
} from "next/server";

import {
  getDatabaseStatus
} from "@/lib/database/gateway";

export const runtime =
  "nodejs";

export const dynamic =
  "force-dynamic";


export async function GET() {

  try {

    return NextResponse.json({
      ok: true,

      architecture:
        "Actualizard Local News OS",

      database:
        getDatabaseStatus(),

      message:
        "Actualizard esta usando SQLite local."
    });

  } catch (error) {

    return NextResponse.json(
      {
        ok: false,

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