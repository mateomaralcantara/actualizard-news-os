import fs from "node:fs";

import {
  getActualizardDatabasePath,
  getLocalDatabase
} from "@/lib/localdb/database";

import {
  getLocalDatabaseCountsSync
} from "@/lib/discovery/repository";


export function getDatabaseStatus() {

  const database =
    getLocalDatabase();

  const databasePath =
    getActualizardDatabasePath();

  const counts =
    getLocalDatabaseCountsSync();

  let sizeBytes = 0;

  try {

    sizeBytes =
      fs.statSync(
        databasePath
      ).size;

  } catch {
    // Archivo recien creado.
  }


  const journal =
    database
      .prepare(
        "PRAGMA journal_mode"
      )
      .get() as
      | {
          journal_mode?:
            string;
        }
      | undefined;


  return {

    driver:
      "sqlite",

    local:
      true,

    supabase:
      false,

    firecrawl:
      false,

    externalAI:
      false,

    directBrowserDatabase:
      false,

    databasePath,

    databaseSizeBytes:
      sizeBytes,

    journalMode:
      journal?.journal_mode ||
      "unknown",

    counts
  };
}