import {
  NextResponse
} from "next/server";

import fs from "node:fs";

import {
  getActualizardDatabasePath
} from "@/lib/localdb/database";

import {
  getLocalDatabaseCountsSync
} from "@/lib/discovery/repository";


export const runtime =
  "nodejs";

export const dynamic =
  "force-dynamic";


export async function GET() {

  const path =
    getActualizardDatabasePath();

  let size = 0;

  if (
    fs.existsSync(path)
  ) {

    size =
      fs.statSync(
        path
      ).size;
  }


  return NextResponse.json({

    ok: true,

    engine:
      "SQLite",

    file:
      path,

    sizeBytes:
      size,

    counts:
      getLocalDatabaseCountsSync(),

    persistent:
      true,

    remoteDatabase:
      false
  });
}