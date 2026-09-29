import { store } from "@/lib/store";
import { ArticleCard } from "@/components/ArticleCard";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const label = slug.charAt(0).toUpperCase() + slug.slice(1);
  const matches = store.articles.filter(a => a.status === "published" && a.category.toLowerCase().includes(slug.toLowerCase()));
  const data = matches.length ? matches : store.articles.filter(a => a.status === "published");

  return (
    <main className="container section">
      <div className="eyebrow">Sección</div>
      <h1 style={{fontSize:52}}>{label}</h1>
      <div className="grid grid-3">
        {data.map(a => <ArticleCard key={a.id} article={a} />)}
      </div>
    </main>
  );
}
