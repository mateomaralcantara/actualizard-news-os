import { ArticleCard } from "@/components/ArticleCard";
import { store } from "@/lib/store";

function normalizeCategory(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export default async function CategoryPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const normalizedSlug = normalizeCategory(slug);

  const published = store.articles.filter(
    (article) => article.status === "published"
  );

  const matches = published.filter(
    (article) => normalizeCategory(article.category) === normalizedSlug
  );

  const labels: Record<string, string> = {
    rd: "RD",
    mundo: "Mundo",
    politica: "Política",
    geopolitica: "Geopolítica",
    geoeconomia: "Geoeconomía",
    tecnologia: "Tecnología",
    ia: "IA",
    deportes: "Deportes",
    video: "Videos"
  };

  const label =
    labels[normalizedSlug] ??
    slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <main className="container section">
      <div className="eyebrow">Sección</div>

      <h1 style={{ fontSize: 52 }}>{label}</h1>

      {matches.length > 0 ? (
        <div className="grid grid-3">
          {matches.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <section className="card card-pad">
          <strong>Todavía no hay historias publicadas en esta sección.</strong>
          <p className="meta">
            Actualizard mostrará aquí únicamente las noticias correspondientes a{" "}
            {label}.
          </p>
        </section>
      )}
    </main>
  );
}
