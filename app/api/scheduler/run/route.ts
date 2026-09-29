import { NextResponse } from "next/server";
import { runScheduler } from "@/lib/scheduler";

export async function GET(request: Request) {
  const secret = request.headers.get("x-cron-secret");
  const url = new URL(request.url);
  const allowDev = process.env.NODE_ENV !== "production" && url.hostname === "localhost";
  if (!allowDev && secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(runScheduler());
}
