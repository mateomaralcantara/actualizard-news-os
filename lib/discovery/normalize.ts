import { createHash } from "node:crypto";

export function cleanText(value: string | undefined | null) {

  if (!value) {
    return "";
  }

  return value
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function normalizeUrl(value: string) {

  try {

    const url = new URL(value);

    const garbageParams = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "fbclid",
      "gclid",
      "mc_cid",
      "mc_eid"
    ];

    for (const param of garbageParams) {

      url.searchParams.delete(param);
    }

    url.hash = "";

    if (url.pathname !== "/") {

      url.pathname =
        url.pathname.replace(/\/+$/, "");
    }

    return url.toString();

  } catch {

    return value;
  }
}

export function textHash(value: string) {

  return createHash("sha256")
    .update(cleanText(value).toLowerCase())
    .digest("hex");
}

export function normalizeForComparison(value: string) {

  return cleanText(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9áéíóúñü ]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function slugify(value: string) {

  return normalizeForComparison(value)
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120);
}
