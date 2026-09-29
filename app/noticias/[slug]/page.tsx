import { notFound } from "next/navigation";

import { ArticleBlocks } from "@/components/ArticleBlocks";
import { store } from "@/lib/store";

export default async function ArticlePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
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
        src={article.heroImage}
        alt={article.heroCaption ?? article.title}
        style={{ borderRadius: 22, marginTop: 24 }}
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
