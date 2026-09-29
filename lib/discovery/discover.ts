import * as cheerio from "cheerio";

import {
  XMLParser
} from "fast-xml-parser";

import type {
  DiscoverySource,
  DiscoveredLink
} from "./types";

import {
  cleanText,
  normalizeUrl
} from "./normalize";

import {
  isRobotsAllowed
} from "./robots";


function looksLikeArticleUrl(
  value: string,
  source: DiscoverySource
) {
  try {
    const url =
      new URL(value);

    const hostname =
      url.hostname
        .replace(/^www\./, "");

    const sourceDomain =
      source.domain
        .replace(/^www\./, "");

    if (
      !hostname.endsWith(
        sourceDomain
      )
    ) {
      return false;
    }

    const pathname =
      url.pathname.toLowerCase();

    const badParts = [
      "/tag/",
      "/tags/",
      "/author/",
      "/autores/",
      "/login",
      "/registro",
      "/suscripcion",
      "/contact",
      "/contacto",
      "/search",
      "/buscar",
      "/newsletter",
      "/privacy",
      "/politica-de-privacidad",
      "/terminos",
      "/cookies"
    ];

    if (
      badParts.some(
        part =>
          pathname.includes(part)
      )
    ) {
      return false;
    }

    if (
      pathname === "/" ||
      pathname.length <= 4
    ) {
      return false;
    }

    return true;

  } catch {
    return false;
  }
}


async function discoverHtml(
  source: DiscoverySource
): Promise<DiscoveredLink[]> {

  const allowed =
    await isRobotsAllowed(
      source.url
    );

  if (!allowed) {
    throw new Error(
      "robots.txt no permite acceder a la pagina de descubrimiento"
    );
  }

  const response =
    await fetch(
      source.url,
      {
        headers: {
          "user-agent":
            process.env.ACTUALIZARD_USER_AGENT ||
            "ActualizardBot/1.0",

          "accept-language":
            "es-DO,es;q=0.9,en;q=0.5"
        },

        signal:
          AbortSignal.timeout(
            20000
          ),

        cache:
          "no-store"
      }
    );

  if (!response.ok) {
    throw new Error(
      `Discovery HTML HTTP ${response.status}`
    );
  }

  const html =
    await response.text();

  const $ =
    cheerio.load(html);

  const discovered =
    new Map<
      string,
      DiscoveredLink
    >();

  const selectors = [
    "article a",
    "h1 a",
    "h2 a",
    "h3 a",
    "main a"
  ];

  $(selectors.join(",")).each(
    (_, element) => {

      const node =
        $(element);

      const href =
        node.attr("href");

      if (!href) {
        return;
      }

      let resolvedUrl: string;

      try {
        resolvedUrl =
          new URL(
            href,
            source.url
          ).toString();

      } catch {
        return;
      }

      resolvedUrl =
        normalizeUrl(
          resolvedUrl
        );

      if (
        !looksLikeArticleUrl(
          resolvedUrl,
          source
        )
      ) {
        return;
      }

      const title =
        cleanText(
          node.attr("aria-label") ||
          node.attr("title") ||
          node.text()
        );

      if (
        title.length < 20 ||
        title.length > 260
      ) {
        return;
      }

      const parent =
        node.closest(
          "article,li,section,div"
        );

      const summary =
        cleanText(
          parent
            .find("p")
            .first()
            .text()
        );

      if (
        discovered.has(
          resolvedUrl
        )
      ) {
        return;
      }

      const item:
        DiscoveredLink = {

        sourceId:
          source.id,

        sourceName:
          source.name,

        url:
          resolvedUrl,

        title,

        discoveredAt:
          new Date()
            .toISOString()
      };

      if (summary) {
        item.summary =
          summary;
      }

      discovered.set(
        resolvedUrl,
        item
      );
    }
  );

  return Array.from(
    discovered.values()
  )
    .slice(
      0,
      Math.max(
        source.maxItems * 4,
        15
      )
    );
}


function resolveRssLink(
  rawLink: unknown
): string | null {

  if (
    typeof rawLink === "string"
  ) {
    return rawLink;
  }

  if (
    rawLink &&
    typeof rawLink === "object"
  ) {
    const candidate =
      rawLink as Record<
        string,
        unknown
      >;

    const href =
      candidate["@_href"];

    if (
      typeof href === "string"
    ) {
      return href;
    }
  }

  return null;
}


function extractRssTitle(
  rawTitle: unknown
): string {

  if (
    typeof rawTitle === "string"
  ) {
    return cleanText(
      rawTitle
    );
  }

  if (
    rawTitle &&
    typeof rawTitle === "object"
  ) {
    const candidate =
      rawTitle as Record<
        string,
        unknown
      >;

    const text =
      candidate["#text"];

    if (
      typeof text === "string"
    ) {
      return cleanText(
        text
      );
    }
  }

  return "";
}


async function discoverRss(
  source: DiscoverySource
): Promise<DiscoveredLink[]> {

  const allowed =
    await isRobotsAllowed(
      source.url
    );

  if (!allowed) {
    throw new Error(
      "robots.txt bloquea RSS"
    );
  }

  const response =
    await fetch(
      source.url,
      {
        headers: {
          "user-agent":
            process.env.ACTUALIZARD_USER_AGENT ||
            "ActualizardBot/1.0"
        },

        signal:
          AbortSignal.timeout(
            20000
          ),

        cache:
          "no-store"
      }
    );

  if (!response.ok) {
    throw new Error(
      `RSS HTTP ${response.status}`
    );
  }

  const xml =
    await response.text();

  const parser =
    new XMLParser({
      ignoreAttributes:
        false
    });

  const data:
    unknown =
    parser.parse(xml);

  const document =
    data as Record<
      string,
      any
    >;

  const rawItems =
    document?.rss
      ?.channel
      ?.item ??
    document?.feed
      ?.entry ??
    [];

  const items:
    unknown[] =
    Array.isArray(
      rawItems
    )
      ? rawItems
      : [rawItems];

  const results:
    DiscoveredLink[] = [];

  for (
    const rawItem
    of items
  ) {

    if (
      !rawItem ||
      typeof rawItem !== "object"
    ) {
      continue;
    }

    const item =
      rawItem as Record<
        string,
        any
      >;

    const rawLink =
      resolveRssLink(
        item.link
      );

    if (!rawLink) {
      continue;
    }

    const title =
      extractRssTitle(
        item.title
      );

    if (
      title.length < 10
    ) {
      continue;
    }

    let resolvedUrl: string;

    try {
      resolvedUrl =
        normalizeUrl(
          new URL(
            rawLink,
            source.url
          ).toString()
        );

    } catch {
      continue;
    }

    const summary =
      cleanText(
        typeof item.description ===
          "string"
          ? item.description
          : typeof item.summary ===
              "string"
            ? item.summary
            : typeof item[
                "content:encoded"
              ] === "string"
              ? item[
                  "content:encoded"
                ]
              : ""
      );

    const discovered:
      DiscoveredLink = {

      sourceId:
        source.id,

      sourceName:
        source.name,

      url:
        resolvedUrl,

      title,

      discoveredAt:
        new Date()
          .toISOString()
    };

    if (summary) {
      discovered.summary =
        summary;
    }

    const publishedAt =
      typeof item.pubDate ===
        "string"
        ? item.pubDate
        : typeof item.published ===
            "string"
          ? item.published
          : typeof item.updated ===
              "string"
            ? item.updated
            : undefined;

    if (publishedAt) {
      discovered.publishedAt =
        publishedAt;
    }

    results.push(
      discovered
    );
  }

  return results;
}


export async function discoverSource(
  source: DiscoverySource
): Promise<DiscoveredLink[]> {

  if (
    source.kind === "rss"
  ) {
    return discoverRss(
      source
    );
  }

  return discoverHtml(
    source
  );
}