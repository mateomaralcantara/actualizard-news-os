import Link from "next/link";
import type { Article } from "@/lib/types";

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <article className="card">
      <img src={article.heroImage} alt="" />
      <div className="card-pad">
        <span className="badge">{article.category}</span>
        {featured ? <h2>{article.title}</h2> : <h3>{article.title}</h3>}
        <p className="meta">{article.dek}</p>
        <p className="meta">{article.sourceCount} fuentes · confianza {article.confidence}%</p>
        <Link href={`/noticias/${article.slug}`} className="btn secondary">Leer historia</Link>
      </div>
    </article>
  );
}
