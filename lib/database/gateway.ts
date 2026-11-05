import {
  getActualizardDatabasePath,
  getLocalDatabase
} from "@/lib/localdb/database";

import {
  getLocalDatabaseCountsSync
} from "@/lib/discovery/repository";

export function getDatabaseStatus() {
  const database = getLocalDatabase();
  const runningOnVercel = process.env.VERCEL === "1";
  const databasePath = getActualizardDatabasePath();
  const counts = getLocalDatabaseCountsSync();

  const journal = database
    .prepare("PRAGMA journal_mode")
    .get() as { journal_mode?: string } | undefined;

  return {
    driver: "sqlite",
    local: true,
    supabase: false,
    persistent: !runningOnVercel,
    persistenceMode: runningOnVercel ? "ephemeral" : "local",
    firecrawl: Boolean(process.env.FIRECRAWL_API_KEY),
    externalAI: Boolean(process.env.GEMINI_API_KEY),
    directBrowserDatabase: false,
    databasePath,
    databaseSizeBytes: null,
    journalMode: journal?.journal_mode || "unknown",
    counts
  };
}
