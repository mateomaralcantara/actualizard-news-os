import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "actualizard-news-os",
    time: new Date().toISOString(),
    aiConfigured: Boolean(process.env.OPENAI_API_KEY),
    databaseMode: process.env.NEXT_PUBLIC_SUPABASE_URL ? "supabase-ready" : "memory-demo"
  });
}
