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

  // Una sola fuente para Facebook, WhatsApp, X y otros previsualizadores.
  // La versión cambia al actualizar la noticia y evita reutilizar la portada anterior.
  const socialImage = absoluteUrl(
    `/api/social-image/${encodeURIComponent(article.slug)}?v=${encodeURIComponent(article.updatedAt || article.createdAt)}`
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
          type: "image/jpeg",
          alt: article.heroCaption ?? article.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.dek,
      images: [
        {
          url: socialImage,
          alt: article.heroCaption ?? article.title
        }
      ]
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

      <div
        className="article-author-profile"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          margin: "22px auto 28px",
          textAlign: "left"
        }}
      >
        {article.authorImage && (
          <img
            src={article.authorImage}
            alt={article.author}
            width={76}
            height={76}
            style={{
              width: 76,
              height: 76,
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center 30%",
              border: "3px solid white",
              boxShadow: "0 8px 24px rgba(0,0,0,.16)"
            }}
          />
        )}

        <div>
          <strong style={{ display: "block", fontSize: 19 }}>
            {article.author}
          </strong>
          <span className="meta">
            {article.category === "Turismo" ? "Columnista de Turismo · " : ""}
            {article.sourceCount} fuentes · consistencia editorial{" "}
            {article.confidence}% · {article.status}
          </span>
        </div>
      </div>

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

      {article.authorImage && (
        <section
          className="card card-pad block"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18
          }}
        >
          <img
            src={article.authorImage}
            alt={article.author}
            width={88}
            height={88}
            style={{
              width: 88,
              height: 88,
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center 30%"
            }}
          />
          <div>
            <div className="eyebrow">Sobre la autora</div>
            <strong style={{ display: "block", fontSize: 21 }}>
              {article.author}
            </strong>
            <p className="meta" style={{ margin: "5px 0 0" }}>
              Columna de análisis sobre turismo, innovación y desarrollo.
            </p>
          </div>
        </section>
      )}

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
