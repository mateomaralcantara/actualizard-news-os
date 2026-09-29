import Link from "next/link";
import { store, sources } from "@/lib/store";

export default function AdminPage() {
  const published = store.articles.filter(a => a.status === "published").length;
  const scheduled = store.articles.filter(a => a.status === "scheduled").length;

  return (
    <main className="admin-shell">
      <div className="section-title">
        <div>
          <div className="eyebrow">Actualizard Command Center</div>
          <h1 style={{fontSize:46, margin:"8px 0"}}>Redacción</h1>
        </div>
        <Link className="btn" href="/admin/nueva">+ Nueva historia</Link>
      </div>

      <div className="kpi-grid">
        <div className="kpi"><span className="meta">Fuentes</span><strong>{sources.length}</strong></div>
        <div className="kpi"><span className="meta">Historias crudas</span><strong>{store.rawStories.length}</strong></div>
        <div className="kpi"><span className="meta">Publicadas</span><strong>{published}</strong></div>
        <div className="kpi"><span className="meta">Programadas</span><strong>{scheduled}</strong></div>
      </div>

      <div className="toolbar">
        <Link className="btn" href="/admin/discovery">Discovery Engine</Link>
        <a className="btn secondary" href="/api/discovery/run">Ejecutar discovery</a>
        <a className="btn secondary" href="/api/scheduler/run">Ejecutar scheduler</a>
        <a className="btn secondary" href="/api/health">Health</a>
      </div>

      <section className="section">
        <h2>Pipeline editorial</h2>
        <table className="table">
          <thead><tr><th>Título</th><th>Estado</th><th>Confianza</th><th>Fuentes</th></tr></thead>
          <tbody>
            {store.articles.map(a => (
              <tr key={a.id}>
                <td>{a.title}</td>
                <td><span className="status">{a.status}</span></td>
                <td>{a.confidence}%</td>
                <td>{a.sourceCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
