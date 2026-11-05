import Link from "next/link";
import { store } from "@/lib/store";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noticias de Yaenqui Paredes | ActualizaRD",
  description: "Tres noticias de actualidad y análisis de Yaenqui Paredes en ActualizaRD."
};

export default function YaenquiPage() {
  const posts = store.articles
    .filter(article => article.author === "Yaenqui Paredes" && article.status === "published")
    .sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""));
  return (
    <main className="article-shell">
      <div className="eyebrow">ACTUALIZARD · SECCIÓN DE COMUNICADORES</div>
      <h1>Noticias de Yaenqui Paredes</h1>
      {posts[0]?.authorImage && (
        <img src={posts[0].authorImage} alt="Yaenqui Paredes"
          width={96} height={96}
          style={{ borderRadius: "50%", display: "block", margin: "16px auto",
                   border: "4px solid #00a9a3", objectFit: "cover" }} />
      )}
      <p className="article-lead">
        Tres artículos de actualidad con análisis y fuentes consultadas.
        Selecciona cualquiera para leer su contenido completo.
      </p>
      <section className="story-list">
        {posts.map(article => (
          <Link key={article.slug} href={`/noticias/${article.slug}`}
            className="story-row story-row-link">
            <div>
              <div className="eyebrow">{article.category}</div>
              <strong>{article.title}</strong>
              <p className="meta">{article.dek}</p>
              <p className="meta">Leer noticia completa</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
