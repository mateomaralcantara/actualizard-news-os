import { ImageResponse } from "next/og";

import { absoluteUrl } from "@/lib/site-url";
import { store } from "@/lib/store";

export const alt = "Actualizard";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default async function OpenGraphImage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = store.articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#073B8C",
            color: "white",
            fontSize: 72,
            fontWeight: 800
          }}
        >
          Actualizard
        </div>
      ),
      size
    );
  }

  const heroImage = absoluteUrl(article.heroImage);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#061a3a",
          overflow: "hidden"
        }}
      >
        <img
          src={heroImage}
          alt=""
          width={1200}
          height={630}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
      </div>
    ),
    size
  );
}
