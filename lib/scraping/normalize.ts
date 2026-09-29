export function cleanText(input: string) {
  return input
    .replace(/\s+/g, " ")
    .replace(/\u00a0/g, " ")
    .trim();
}

export function normalizeUrl(input: string) {
  try {
    const url = new URL(input);
    ["utm_source","utm_medium","utm_campaign","utm_term","utm_content","fbclid","gclid"].forEach(k => url.searchParams.delete(k));
    url.hash = "";
    return url.toString();
  } catch {
    return input;
  }
}

export function fingerprint(text: string) {
  return cleanText(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 16)
    .join("-");
}
