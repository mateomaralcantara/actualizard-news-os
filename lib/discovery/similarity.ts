import type {
  LiveStory
} from "./types";

import {
  normalizeForComparison
} from "./normalize";

function tokens(
  value: string
) {

  return new Set(
    normalizeForComparison(value)
      .split(" ")
      .filter(
        token =>
          token.length >= 4
      )
  );
}

export function jaccardSimilarity(
  a: string,
  b: string
) {

  const left =
    tokens(a);

  const right =
    tokens(b);

  if (
    !left.size ||
    !right.size
  ) {

    return 0;
  }

  let intersection = 0;

  for (const token of left) {

    if (right.has(token)) {

      intersection++;
    }
  }

  const union =
    new Set([
      ...left,
      ...right
    ]).size;

  if (!union) {

    return 0;
  }

  return intersection / union;
}

export function isDuplicateStory(
  candidate: LiveStory,
  existing: LiveStory[]
) {

  for (const story of existing) {

    if (
      story.canonicalUrl ===
      candidate.canonicalUrl
    ) {

      return true;
    }

    if (
      story.bodyHash ===
      candidate.bodyHash
    ) {

      return true;
    }

    if (
      story.titleHash ===
      candidate.titleHash
    ) {

      return true;
    }

    const titleSimilarity =
      jaccardSimilarity(
        story.title,
        candidate.title
      );

    if (
      titleSimilarity >= 0.92
    ) {

      return true;
    }
  }

  return false;
}
