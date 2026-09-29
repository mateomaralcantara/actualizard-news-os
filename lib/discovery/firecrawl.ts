import { cleanText } from "./normalize";

export interface FirecrawlResult {
  title: string;
  description: string;
  markdown: string;
  image?: string;
  sourceUrl?: string;
}

export async function firecrawlScrape(
  url: string
): Promise<FirecrawlResult | null> {

  const apiKey =
    process.env.FIRECRAWL_API_KEY;

  if (!apiKey) {
    return null;
  }

  const response =
    await fetch(
      "https://api.firecrawl.dev/v2/scrape",
      {
        method: "POST",

        headers: {
          Authorization:
            `Bearer ${apiKey}`,

          "Content-Type":
            "application/json"
        },

        body:
          JSON.stringify({
            url,

            formats: [
              "markdown"
            ],

            onlyMainContent: true,

            blockAds: true,

            removeBase64Images: true,

            storeInCache: true,

            timeout: 30000
          }),

        signal:
          AbortSignal.timeout(45000)
      }
    );

  if (!response.ok) {

    throw new Error(
      `Firecrawl HTTP ${response.status}`
    );
  }

  const result =
    await response.json() as {
      success?: boolean;

      data?: {
        markdown?: string;

        metadata?: {
          title?: string;
          description?: string;
          sourceURL?: string;
          url?: string;
          ogImage?: string;
          image?: string;
        };
      };
    };

  if (
    !result.success ||
    !result.data
  ) {

    return null;
  }

  return {

    title:
      cleanText(
        result.data.metadata?.title
      ),

    description:
      cleanText(
        result.data.metadata?.description
      ),

    markdown:
      cleanText(
        result.data.markdown
      ),

    image:
      result.data.metadata?.ogImage ||
      result.data.metadata?.image,

    sourceUrl:
      result.data.metadata?.sourceURL ||
      result.data.metadata?.url
  };
}
