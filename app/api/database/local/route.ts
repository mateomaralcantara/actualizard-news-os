import {
  NextResponse
} from "next/server";

import {
  getActualizardDatabasePath
} from "@/lib/localdb/database";

import {
  getLocalDatabaseCountsSync
} from "@/lib/discovery/repository";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const runningOnVercel = process.env.VERCEL === "1";

  return NextResponse.json({
    ok: true,
    engine: "SQLite",
    file: getActualizardDatabasePath(),
    counts: getLocalDatabaseCountsSync(),
    persistent: !runningOnVercel,
    persistenceMode: runningOnVercel ? "ephemeral" : "local",
    remoteDatabase: false
  });
}
