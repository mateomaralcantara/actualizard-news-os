import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ClusterActions
} from "@/components/discovery/ClusterActions";

import {
  loadClustersSync,
  loadStoriesSync,
  findDraftByClusterSync
} from "@/lib/discovery/repository";

export const dynamic =
  "force-dynamic";

export default async function ClusterPage({
  params
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } =
    await params;

  const cluster =
    loadClustersSync().find(
      item => item.id === id
    );

  if (!cluster) {
    notFound();
  }

  const stories =
    loadStoriesSync().filter(
      story =>
        cluster.storyIds.includes(
          story.id
        )
    );

  const draft =
    findDraftByClusterSync(id);

  return (
    <main className="admin-shell">

      <div className="section-title">

        <div>
          <div className="eyebrow">
            STORY CLUSTER
          </div>

          <h1
            style={{
              maxWidth: 1100,
              fontSize: 44
            }}
          >
            {cluster.title}
          </h1>
        </div>

        <Link
          href="/admin/discovery"
          className="btn"
        >
          Volver
        </Link>

      </div>


      <div className="kpi-grid">

        <div className="kpi">
          <span className="meta">
            Fuentes
          </span>

          <strong>
            {cluster.sourceCount}
          </strong>
        </div>


        <div className="kpi">
          <span className="meta">
            Confianza
          </span>

          <strong>
            {cluster.confidence}%
          </strong>
        </div>


        <div className="kpi">
          <span className="meta">
            Confirmación oficial
          </span>

          <strong>
            {
              cluster
                .officialConfirmation
                ? "SÍ"
                : "NO"
            }
          </strong>
        </div>


        <div className="kpi">
          <span className="meta">
            Categoría
          </span>

          <strong
            style={{
              fontSize: 22
            }}
          >
            {cluster.category}
          </strong>
        </div>

      </div>


      <section className="section">

        <div className="card card-pad">

          <div className="eyebrow">
            AI NEWSROOM
          </div>

          <h2>
            Preparar noticia
          </h2>

          <p className="meta">
            El borrador se produce únicamente
            a partir de las evidencias
            almacenadas en este cluster.
          </p>

          <ClusterActions
            clusterId={cluster.id}
            confidence={
              cluster.confidence
            }
          />

        </div>

      </section>


      {
        draft && (
          <section className="section">

            <div className="section-title">
              <h2>
                Borrador editorial
              </h2>
            </div>

            <div className="card card-pad">

              <div className="badge">
                {
                  draft.generatedBy ===
                  "ai"
                    ? "GENERADO CON IA"
                    : "BORRADOR FALLBACK"
                }
              </div>

              <h2>
                {draft.title}
              </h2>

              <p
                style={{
                  fontSize: 19,
                  lineHeight: 1.6
                }}
              >
                {draft.dek}
              </p>

              {
                draft.paragraphs.map(
                  (
                    paragraph,
                    index
                  ) => (
                    <p
                      key={index}
                      style={{
                        lineHeight: 1.75
                      }}
                    >
                      {paragraph}
                    </p>
                  )
                )
              }

              {
                draft.bullets.length > 0 && (
                  <ul>
                    {
                      draft.bullets.map(
                        item => (
                          <li key={item}>
                            {item}
                          </li>
                        )
                      )
                    }
                  </ul>
                )
              }

            </div>

          </section>
        )
      }


      <section className="section">

        <div className="section-title">
          <div>
            <div className="eyebrow">
              EVIDENCIA
            </div>

            <h2>
              Fuentes de la historia
            </h2>
          </div>
        </div>


        <div
          style={{
            display: "grid",
            gap: 16
          }}
        >

          {
            stories.map(
              story => (
                <article
                  key={story.id}
                  className="card card-pad"
                >

                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      flexWrap: "wrap"
                    }}
                  >

                    <span className="badge">
                      {story.sourceName}
                    </span>

                    {
                      story.officialSource && (
                        <span className="badge">
                          OFICIAL
                        </span>
                      )
                    }

                    <span className="status">
                      {story.extractionMethod}
                    </span>

                    <span className="status">
                      trust {story.sourceTrust}
                    </span>

                  </div>


                  <h3>
                    {story.title}
                  </h3>


                  {
                    story.summary && (
                      <p className="meta">
                        {story.summary}
                      </p>
                    )
                  }


                  {
                    story.image && (
                      <img
                        src={story.image}
                        alt=""
                        style={{
                          maxWidth: 420,
                          borderRadius: 14,
                          marginBottom: 18
                        }}
                      />
                    )
                  }


                  <a
                    href={story.canonicalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn secondary"
                  >
                    Abrir fuente original
                  </a>

                </article>
              )
            )
          }

        </div>

      </section>


      <section className="section">

        <div className="section-title">
          <div>
            <div className="eyebrow">
              VERIFICACIÓN
            </div>

            <h2>
              Fact Matrix V1
            </h2>
          </div>
        </div>


        <div className="grid grid-3">

          <div className="card card-pad">
            <strong>
              Dinero
            </strong>

            {
              cluster.facts.money.length
                ? cluster.facts.money.map(
                    value => (
                      <p
                        key={value}
                        className="meta"
                      >
                        {value}
                      </p>
                    )
                  )
                : (
                    <p className="meta">
                      Sin cantidades monetarias detectadas.
                    </p>
                  )
            }
          </div>


          <div className="card card-pad">
            <strong>
              Porcentajes
            </strong>

            {
              cluster.facts.percentages.length
                ? cluster.facts.percentages.map(
                    value => (
                      <p
                        key={value}
                        className="meta"
                      >
                        {value}
                      </p>
                    )
                  )
                : (
                    <p className="meta">
                      Sin porcentajes detectados.
                    </p>
                  )
            }
          </div>


          <div className="card card-pad">
            <strong>
              Entidades
            </strong>

            {
              cluster.facts.entities.length
                ? cluster.facts.entities
                    .slice(0, 20)
                    .map(
                      value => (
                        <p
                          key={value}
                          className="meta"
                        >
                          {value}
                        </p>
                      )
                    )
                : (
                    <p className="meta">
                      Sin entidades detectadas.
                    </p>
                  )
            }
          </div>

        </div>

      </section>

    </main>
  );
}