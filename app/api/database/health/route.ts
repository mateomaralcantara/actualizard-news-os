import {
  NextResponse
} from "next/server";

import {
  createSupabaseServerClient,
  isSupabaseConfigured
} from "@/lib/supabase/server";

export const dynamic =
  "force-dynamic";

export async function GET() {

  if (!isSupabaseConfigured()) {

    return NextResponse.json(
      {
        ok: false,
        database: "supabase",
        configured: false,
        message:
          "Credenciales Supabase no configuradas."
      },
      {
        status: 503
      }
    );
  }

  try {

    const supabase =
      createSupabaseServerClient();

    const {
      count,
      error
    } =
      await supabase
        .from("sources")
        .select(
          "*",
          {
            count: "exact",
            head: true
          }
        );

    if (error) {
      throw error;
    }

    return NextResponse.json({
      ok: true,
      database: "supabase",
      configured: true,
      sources: count ?? 0,
      checkedAt:
        new Date().toISOString()
    });

  } catch (error) {

    return NextResponse.json(
      {
        ok: false,
        database: "supabase",
        configured: true,

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
