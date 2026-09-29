import {
  NextResponse
} from "next/server";

import {
  loadClustersSync
} from "@/lib/discovery/repository";

export async function GET() {

  return NextResponse.json(
    loadClustersSync()
  );
}
