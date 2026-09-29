function tokens(text: string) {
  return new Set(
    text.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9 ]/g, " ")
      .split(/\s+/)
      .filter(x => x.length > 3)
  );
}

export function jaccard(a: string, b: string) {
  const A = tokens(a), B = tokens(b);
  if (!A.size || !B.size) return 0;
  let intersection = 0;
  for (const x of A) if (B.has(x)) intersection++;
  const union = new Set([...A, ...B]).size;
  return intersection / union;
}
