import * as cheerio from "cheerio";

import type {
  DiscoverySource,
  DiscoveredLink,
  LiveStory
} from "./types";

import {
  cleanText,
  normalizeUrl,
  textHash
} from "./normalize";

import {
  isRobotsAllowed
} from "./robots";

import {
  firecrawlScrape
} from "./firecrawl";

function findJsonLdArticle(
  $: cheerio.CheerioAPI
) {

  let found: any = null;

  $("script[type='application/ld+json']")
    .each(
      (_, element) => {

        if (found) {
          return;
        }

        const raw =
          $(element).text();

        if (!raw) {
          return;
        }

        try {

          const parsed =
            JSON.parse(raw);

          const entries =
            Array.isArray(parsed)
              ? parsed
              : parsed?.["@graph"]
                ? parsed["@graph"]
                : [parsed];

          const article =
            entries.find(
              (entry: any) => {

                const type =
                  entry?.["@type"];

                if (Array.isArray(type)) {

                  return type.some(
                    value =>
                      [
                        "NewsArticle",
                        "Article",
                        "ReportageNewsArticle"
                      ].includes(value)
                  );
                }

                return [
                  "NewsArticle",
                  "Article",
                  "ReportageNewsArticle"
                ].includes(type);
              }
            );

          if (article) {
            found = article;
          }

        } catch {
          // JSON-LD roto: continuar.
        }
      }
    );

  return found;
}

function authorFromJsonLd(
  article: any
) {

  const author =
    article?.author;

  if (!author) {
    return "";
  }

  if (typeof author === "string") {
    return author;
  }

  if (Array.isArray(author)) {

    return author
      .map(
        item =>
          typeof item === "string"
            ? item
            : item?.name
      )
      .filter(Boolean)
      .join(", ");
  }

  return author?.name || "";
}

function imageFromJsonLd(
  article: any
) {

  const image =
    article?.image;

  if (!image) {
    return "";
  }

  if (typeof image === "string") {
    return image;
  }

  if (Array.isArray(image)) {

    const first =
      image[0];

    return typeof first === "string"
      ? first
      : first?.url || "";
  }

  return image?.url || "";
}

function extractBody(
  $: cheerio.CheerioAPI
) {

  $(
    "script,style,noscript,nav,footer,aside,form"
  ).remove();

  const selectors = [
    "article p",
    "[itemprop='articleBody'] p",
    ".article-body p",
    ".story-body p",
    ".entry-content p",
    "main p"
  ];

  for (const selector of selectors) {

    const paragraphs =
      $(selector)
        .map(
          (_, element) =>
            cleanText(
              $(element).text()
            )
        )
        .get()
        .filter(
          text =>
            text.length >= 35
        );

    const text =
      cleanText(
        paragraphs.join("\n\n")
      );

    if (text.length >= 300) {

      return text;
    }
  }

  return "";
}

async function directExtract(
  source: DiscoverySource,
  link: DiscoveredLink
) {

  const response =
    await fetch(
      link.url,
      {
        headers: {
          "user-agent":
            process.env.ACTUALIZARD_USER_AGENT ||
            "ActualizardBot/1.0",

          "accept-language":
            "es-DO,es;q=0.9,en;q=0.5"
        },

        signal:
          AbortSignal.timeout(20000),

        cache: "no-store"
      }
    );

  if (!response.ok) {

    throw new Error(
      `Article HTTP ${response.status}`
    );
  }

  const contentType =
    response.headers.get(
      "content-type"
    ) || "";

  if (
    !contentType.includes("text/html")
  ) {

    throw new Error(
      `Contenido no HTML: ${contentType}`
    );
  }

  const html =
    await response.text();

  const $ =
    cheerio.load(html);

  const jsonLd =
    findJsonLdArticle($);

  const title =
    cleanText(
      jsonLd?.headline ||
      $("meta[property='og:title']")
        .attr("content") ||
      $("h1").first().text() ||
      $("title").text() ||
      link.title
    );

  const description =
    cleanText(
      jsonLd?.description ||
      $("meta[name='description']")
        .attr("content") ||
      $("meta[property='og:description']")
        .attr("content") ||
      link.summary ||
      ""
    );

  const body =
    extractBody($);

  const canonicalRaw =
    $("link[rel='canonical']")
      .attr("href") ||
    $("meta[property='og:url']")
      .attr("content") ||
    link.url;

  let canonical =
    link.url;

  try {

    canonical =
      normalizeUrl(
        new URL(
          canonicalRaw,
          link.url
        ).toString()
      );

  } catch {
    canonical =
      normalizeUrl(link.url);
  }

  let image =
    imageFromJsonLd(jsonLd) ||
    $("meta[property='og:image']")
      .attr("content") ||
    $("article img")
      .first()
      .attr("src");

  if (image) {

    try {

      image =
        new URL(
          image,
          link.url
        ).toString();

    } catch {
      // conservar original
    }
  }

  let video =
    $("iframe[src*='youtube.com']")
      .first()
      .attr("src") ||
    $("iframe[src*='youtu.be']")
      .first()
      .attr("src") ||
    $("video source")
      .first()
      .attr("src") ||
    $("video")
      .first()
      .attr("src");

  if (video) {

    try {

      video =
        new URL(
          video,
          link.url
        ).toString();

    } catch {
      // conservar original
    }
  }

  return {
    title,
    description,
    body,
    canonical,
    image,
    video,

    author:
      cleanText(
        authorFromJsonLd(jsonLd)
      ),

    publishedAt:
      jsonLd?.datePublished ||
      link.publishedAt
  };
}

export async function extractStory(
  source: DiscoverySource,
  link: DiscoveredLink
): Promise<LiveStory | null> {

  const allowed =
    await isRobotsAllowed(
      link.url
    );

  if (!allowed) {

    return null;
  }

  let title =
    link.title;

  let summary =
    link.summary || "";

  let body = "";

  let canonicalUrl =
    normalizeUrl(link.url);

  let image: string | undefined;
  let video: string | undefined;
  let author: string | undefined;
  let publishedAt =
    link.publishedAt;

  let method:
    "direct" |
    "firecrawl" |
    "rss" =
    source.kind === "rss"
      ? "rss"
      : "direct";

  try {

    const direct =
      await directExtract(
        source,
        link
      );

    title =
      direct.title || title;

    summary =
      direct.description || summary;

    body =
      direct.body;

    canonicalUrl =
      direct.canonical;

    image =
      direct.image;

    video =
      direct.video;

    author =
      direct.author;

    publishedAt =
      direct.publishedAt ||
      publishedAt;

  } catch {

    // Firecrawl debajo.
  }

  if (body.length < 250) {

    try {

      const firecrawl =
        await firecrawlScrape(
          link.url
        );

      if (firecrawl) {

        method = "firecrawl";

        title =
          firecrawl.title ||
          title;

        summary =
          firecrawl.description ||
          summary;

        body =
          firecrawl.markdown ||
          body;

        image =
          image ||
          firecrawl.image;

        canonicalUrl =
          normalizeUrl(
            firecrawl.sourceUrl ||
            canonicalUrl
          );
      }

    } catch {
      // No bloqueamos toda la fuente.
    }
  }

  title =
    cleanText(title);

  summary =
    cleanText(summary);

  body =
    cleanText(body);

  if (
    title.length < 12 ||
    (
      body.length < 120 &&
      summary.length < 80
    )
  ) {

    return null;
  }

  const contentForHash =
    body ||
    summary ||
    title;

  return {

    id:
      `story-${textHash(
        canonicalUrl
      ).slice(0, 16)}`,

    sourceId:
      source.id,

    sourceName:
      source.name,

    sourceTrust:
      source.trustScore,

    officialSource:
      source.official,

    category:
      source.category,

    url:
      normalizeUrl(link.url),

    canonicalUrl,

    title,

    summary,

    body,

    author,

    image,

    video,

    publishedAt,

    discoveredAt:
      new Date().toISOString(),

    titleHash:
      textHash(title),

    bodyHash:
      textHash(contentForHash),

    extractionMethod:
      method
  };
}
