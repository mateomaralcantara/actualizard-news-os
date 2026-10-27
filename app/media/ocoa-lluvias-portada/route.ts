import { ocoaCoverPart1 } from "../../../lib/media/ocoa-cover-part1";
import { ocoaCoverPart2 } from "../../../lib/media/ocoa-cover-part2";
import { ocoaCoverPart3 } from "../../../lib/media/ocoa-cover-part3";
import { ocoaCoverPart4 } from "../../../lib/media/ocoa-cover-part4";
import { ocoaCoverPart5 } from "../../../lib/media/ocoa-cover-part5";
import { ocoaCoverPart6 } from "../../../lib/media/ocoa-cover-part6";

export const runtime = "nodejs";

const imageBase64 =
  ocoaCoverPart1 +
  ocoaCoverPart2 +
  ocoaCoverPart3 +
  ocoaCoverPart4 +
  ocoaCoverPart5 +
  ocoaCoverPart6;

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
