import { weatherCoverPart1 } from "../../../lib/media/weather-cover-part1";
import { weatherCoverPart2 } from "../../../lib/media/weather-cover-part2";
import { weatherCoverPart3 } from "../../../lib/media/weather-cover-part3";
import { weatherCoverPart4 } from "../../../lib/media/weather-cover-part4";
import { weatherCoverPart5 } from "../../../lib/media/weather-cover-part5";
import { weatherCoverPart6 } from "../../../lib/media/weather-cover-part6";

export const runtime = "nodejs";

const imageBase64 =
  weatherCoverPart1 +
  weatherCoverPart2 +
  weatherCoverPart3 +
  weatherCoverPart4 +
  weatherCoverPart5 +
  weatherCoverPart6;

export async function GET() {
  const bytes = Buffer.from(imageBase64, "base64");

  return new Response(bytes, {
    headers: {
      "Content-Type": "image/avif",
      "Content-Length": String(bytes.length),
      "Cache-Control": "public, max-age=31536000, immutable",
      "X-Content-Type-Options": "nosniff"
    }
  });
}
