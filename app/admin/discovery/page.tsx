import Link from "next/link";

import {
  DiscoveryRunButton
} from "@/components/discovery/DiscoveryRunButton";

import {
  discoverySources
} from "@/lib/discovery/source-registry";

import {
  loadStoriesSync,
  loadClustersSync,
  loadRunsSync,
  loadDraftsSync,
  loadPublishedArticlesSync
} from "@/lib/discovery/repository";

export const dynamic =
  "force-dynamic";

export default function DiscoveryPage() {
  const stories =
    loadStoriesSync();

  const clusters =
    loadClustersSync();

  const runs =
    loadRunsSync();

  const drafts =
    loadDraftsSync();

  const published =
    loadPublishedArticlesSync();

  const latest =
    runs[0];

  const enabledSources =
    discoverySources.filter(
      source => source.enabled
    );

  const officialSources =
    enabledSources.filter(
      source => source.official
    );

  return (
    <main className="admin-shell">

      <div className="section-title">
        <div>
          <div className="eyebrow">
            ACTUALIZARD INTELLIGENCE
          </div>

          <h1
            style={{
              margin: "8px 0",
              fontSize: 48
            }}
          >
            Discovery Engine
          </h1>

          <p
            style={{
              maxWidth: 900,
              color:
                "rgba(255,255,255,.78)",
              lineHeight: 1.6
            }}
          >
            Descubrimiento,
            scraping,
            deduplicación,
            clustering,
            análisis de hechos
            y producción editorial.
          </p>
        </div>

        <Link
          href="/admin"
          className="btn"
        >
          Command Center
        </Link>
      </div>


      <div className="kpi-grid">

        <div className="kpi">
          <span className="meta">
            Fuentes activas
          </span>

          <strong>
            {enabledSources.length}
          </strong>
        </div>


        <div className="kpi">
          <span className="meta">
            Historias capturadas
          </span>

          <strong>
            {stories.length}
          </strong>
        </div>


        <div className="kpi">
          <span className="meta">
            Story clusters
          </span>

          <strong>
            {clusters.length}
          </strong>
        </div>


        <div className="kpi">
          <span className="meta">
            Publicadas
          </span>

          <strong>
            {published.length}
          </strong>
        </div>

      </div>


      <section className="section">

        <div className="card card-pad">

          <div className="eyebrow">
            LIVE ENGINE
          </div>

          <h2>
            Escanear fuentes ahora
          </h2>

          <p className="meta">
            Actualizard buscará contenido nuevo,
            comprobará robots.txt,
            extraerá artículos,
            descartará duplicados
            y reconstruirá los clusters.
          </p>

          <DiscoveryRunButton />

          <div
            style={{
              display: "flex",
              gap: 20,
              flexWrap: "wrap",
              marginTop: 22
            }}
            className="meta"
          >
            <span>
              Oficiales:{" "}
              {officialSources.length}
            </span>

            <span>
              Borradores:{" "}
              {drafts.length}
            </span>

            <span>
              Firecrawl:{" "}
              {
                process.env
                  .FIRECRAWL_API_KEY
                  ? "CONECTADO"
                  : "NO CONFIGURADO"
              }
            </span>

            <span>
              IA:{" "}
              {
                process.env
                  .OPENAI_API_KEY
                  ? "CONECTADA"
                  : "MODO FALLBACK"
              }
            </span>
          </div>

        </div>

      </section>


      {
        latest && (
          <section className="section">

            <div className="section-title">
              <div>
                <div className="eyebrow">
                  ÚLTIMA EJECUCIÓN
                </div>

                <h2>
                  Estado del motor
                </h2>
              </div>
            </div>


            <div className="kpi-grid">

              <div className="kpi">
                <span className="meta">
                  Fuentes revisadas
                </span>

                <strong>
                  {latest.sourcesChecked}
                </strong>
              </div>


              <div className="kpi">
                <span className="meta">
                  URLs detectadas
                </span>

                <strong>
                  {latest.candidatesFound}
                </strong>
              </div>


              <div className="kpi">
                <span className="meta">
                  Nuevas
                </span>

                <strong>
                  {latest.storiesAdded}
                </strong>
              </div>


              <div className="kpi">
                <span className="meta">
                  Duplicadas
                </span>

                <strong>
                  {latest.duplicatesRejected}
                </strong>
              </div>

            </div>


            {
              latest.errors.length > 0 && (
                <div
                  className="card card-pad"
                  style={{
                    marginTop: 18
                  }}
                >
                  <strong>
                    Incidencias parciales
                  </strong>

                  {
                    latest.errors
                      .slice(0, 10)
                      .map(
                        (error, index) => (
                          <p
                            className="meta"
                            key={index}
                          >
                            {error}
                          </p>
                        )
                      )
                  }
                </div>
              )
            }

          </section>
        )
      }


      <section className="section">

        <div className="section-title">
          <div>
            <div className="eyebrow">
              STORY INTELLIGENCE
            </div>

            <h2>
              Historias detectadas
            </h2>
          </div>

          <span className="meta">
            {clusters.length} clusters
          </span>
        </div>


        <table className="table">

          <thead>
            <tr>
              <th>Historia</th>
              <th>Fuentes</th>
              <th>Confianza</th>
              <th>Oficial</th>
              <th>Categoría</th>
              <th>Acción</th>
            </tr>
          </thead>

          <tbody>

            {
              clusters
                .slice(0, 100)
                .map(
                  cluster => (
                    <tr key={cluster.id}>

                      <td>
                        <strong>
                          {cluster.title}
                        </strong>
                      </td>

                      <td>
                        {cluster.sourceCount}
                      </td>

                      <td>
                        {cluster.confidence}%
                      </td>

                      <td>
                        {
                          cluster
                            .officialConfirmation
                            ? "Sí"
                            : "No"
                        }
                      </td>

                      <td>
                        {cluster.category}
                      </td>

                      <td>
                        <Link
                          href={
                            `/admin/discovery/${cluster.id}`
                          }
                          className="btn secondary"
                        >
                          Abrir
                        </Link>
                      </td>

                    </tr>
                  )
                )
            }

          </tbody>

        </table>

      </section>


      <section className="section">

        <div className="section-title">
          <div>
            <div className="eyebrow">
              SOURCE REGISTRY
            </div>

            <h2>
              Fuentes activas
            </h2>
          </div>
        </div>


        <table className="table">

          <thead>
            <tr>
              <th>Fuente</th>
              <th>Tipo</th>
              <th>Categoría</th>
              <th>Trust</th>
              <th>Oficial</th>
              <th>Estado</th>
            </tr>
          </thead>

          <tbody>

            {
              discoverySources.map(
                source => (
                  <tr key={source.id}>

                    <td>
                      {source.name}
                    </td>

                    <td>
                      {source.kind}
                    </td>

                    <td>
                      {source.category}
                    </td>

                    <td>
                      {source.trustScore}
                    </td>

                    <td>
                      {
                        source.official
                          ? "Sí"
                          : "No"
                      }
                    </td>

                    <td>
                      {
                        source.enabled
                          ? "ACTIVA"
                          : "PAUSADA"
                      }
                    </td>

                  </tr>
                )
              )
            }

          </tbody>

        </table>

      </section>

    </main>
  );
}