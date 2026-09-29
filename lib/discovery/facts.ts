import type {
  ExtractedFacts,
  LiveStory
} from "./types";

function unique(
  values: string[]
) {

  return Array.from(
    new Set(
      values
        .map(
          value =>
            value.trim()
        )
        .filter(Boolean)
    )
  );
}

function matchAll(
  text: string,
  regex: RegExp
) {

  return Array.from(
    text.matchAll(regex)
  )
    .map(
      match =>
        match[0]
    );
}

export function extractFacts(
  stories: LiveStory[]
): ExtractedFacts {

  const text =
    stories
      .map(
        story =>
          [
            story.title,
            story.summary,
            story.body
          ].join(" ")
      )
      .join(" ");

  const percentages =
    unique(
      matchAll(
        text,
        /\b\d+(?:[.,]\d+)?\s?%/g
      )
    )
      .slice(0, 30);

  const money =
    unique(
      matchAll(
        text,
        /\b(?:RD\$|US\$|\$|USD|DOP)\s?[\d,.]+(?:\s?(?:millones|mil millones|MM))?/gi
      )
    )
      .slice(0, 30);

  const dates =
    unique(
      matchAll(
        text,
        /\b\d{1,2}\s+de\s+(?:enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)(?:\s+de\s+\d{4})?/gi
      )
    )
      .slice(0, 30);

  const numbers =
    unique(
      matchAll(
        text,
        /\b\d{1,3}(?:[.,]\d{3})+(?:[.,]\d+)?\b/g
      )
    )
      .slice(0, 30);

  const entities =
    unique(
      matchAll(
        text,
        /\b[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?:\s+[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+){1,4}\b/g
      )
    )
      .filter(
        value =>
          value.length >= 7
      )
      .slice(0, 40);

  return {
    percentages,
    money,
    dates,
    numbers,
    entities
  };
}
