import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleBlocks } from "@/components/ArticleBlocks";
import { absoluteUrl } from "@/lib/site-url";
import { store } from "@/lib/store";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;

  const article = store.articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return {};
  }

  const articleUrl = absoluteUrl(
    `/noticias/${article.slug}`
  );

  const socialImage = absoluteUrl(
    `/noticias/${article.slug}/opengraph-image`
  );

  return {
    title: article.title,
    description: article.dek,
    alternates: {
      canonical: articleUrl
    },
    openGraph: {
      type: "article",
      locale: "es_DO",
      siteName: "Actualizard",
      url: articleUrl,
      title: article.title,
      description: article.dek,
      publishedTime:
        article.publishedAt ?? article.createdAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      section: article.category,
      tags: article.tags,
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: article.heroCaption ?? article.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.dek,
      images: [socialImage]
    }
  };
}

export default async function ArticlePage({
  params
}: ArticlePageProps) {
  const { slug } = await params;

  const article = store.articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    notFound();
  }

  return (
    <main className="article-shell">
      <div className="eyebrow">{article.category}</div>

      <h1>{article.title}</h1>

      <p className="article-lead">{article.dek}</p>

      <p className="meta">
        {article.author} · {article.sourceCount} fuentes · consistencia editorial{" "}
        {article.confidence}% · {article.status}
      </p>

      <img
        className="article-hero-image"
        src={article.heroImage}
        alt={article.heroCaption ?? article.title}
      />

      {article.heroCaption && (
        <p className="meta" style={{ marginTop: 8 }}>
          {article.heroCaption}
        </p>
      )}

      <ArticleBlocks blocks={article.blocks} />

      <section className="card card-pad block">
        <strong>Transparencia editorial</strong>
        <p className="meta">
          Esta historia conserva sus fuentes consultadas y la trazabilidad de su
          elaboración. La puntuación mostrada expresa consistencia entre las
          evidencias utilizadas, no una garantía absoluta de verdad.
        </p>
      </section>
    </main>
  );
}
