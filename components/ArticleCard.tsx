import Link from "next/link";
import type { Article } from "@/lib/types";

export function ArticleCard({
  article,
  featured = false
}: {
  article: Article;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/noticias/${article.slug}`}
      className="article-card-link"
      aria-label={`Abrir artículo: ${article.title}`}
    >
      <article className="card">
        <img
          src={article.heroImage}
          alt={article.heroCaption ?? article.title}
        />

        <div className="card-pad">
          <span className="badge">{article.category}</span>

          {featured ? <h2>{article.title}</h2> : <h3>{article.title}</h3>}

          <p className="meta">{article.dek}</p>

          <p className="meta">
            {article.sourceCount} fuentes · consistencia editorial{" "}
            {article.confidence}%
          </p>

          <span className="btn secondary article-card-cta">
            Leer historia
          </span>
        </div>
      </article>
    </Link>
  );
}
