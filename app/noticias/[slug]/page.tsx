import { notFound } from "next/navigation";
import { store } from "@/lib/store";
import { ArticleBlocks } from "@/components/ArticleBlocks";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = store.articles.find(a => a.slug === slug);
  if (!article) notFound();

  return (
    <main className="article-shell">
      <div className="eyebrow">{article.category}</div>
      <h1>{article.title}</h1>
      <p className="article-lead">{article.dek}</p>
      <p className="meta">
        {article.author} · {article.sourceCount} fuentes · confianza {article.confidence}% · {article.status}
      </p>
      <img src={article.heroImage} alt="" style={{borderRadius:22, marginTop:24}} />
      <ArticleBlocks blocks={article.blocks} />
      <section className="card card-pad block">
        <strong>Transparencia editorial</strong>
        <p className="meta">Esta historia conserva metadatos de fuentes, puntuación de confianza y trazabilidad del flujo editorial.</p>
      </section>
    </main>
  );
}
