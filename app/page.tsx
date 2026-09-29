import Link from "next/link";

import { ArticleCard } from "@/components/ArticleCard";
import { store } from "@/lib/store";

export default function HomePage() {

  const published =
    store.articles.filter(
      article =>
        article.status === "published"
    );

  const [main, ...rest] = published;


  return (
    <main>

      <section className="hero-wrap">

        <div className="container">

          <div className="hero">

            <div className="eyebrow">

              <span className="live-dot" />

              Periodismo inteligente en tiempo real

            </div>


            <h1>
              Entiende lo que está pasando.
              Antes que el resto.
            </h1>


            <p>
              Actualizard descubre, contrasta,
              explica y transforma la actualidad
              en noticias, datos, imágenes y video
              desde una nueva generación de redacción.
            </p>


            <div className="hero-actions">

              <Link
                href="#actualidad"
                className="btn"
              >
                Ver noticias
              </Link>


              <Link
                href="/categoria/video"
                className="btn secondary"
              >
                Ver videos
              </Link>


              <Link
                href="/admin"
                className="btn secondary"
              >
                Command Center
              </Link>

            </div>

          </div>

        </div>

      </section>


      <section
        id="actualidad"
        className="section container"
      >

        <div className="section-title">

          <div>

            <div className="eyebrow">
              Actualidad
            </div>

            <h2>
              Lo más importante ahora
            </h2>

          </div>

          <span className="meta">
            Información verificada y actualizada
          </span>

        </div>


        <div className="grid grid-3">

          {main && (
            <ArticleCard
              article={main}
              featured
            />
          )}


          {rest
            .slice(0, 2)
            .map(article => (

              <ArticleCard
                key={article.id}
                article={article}
              />

            ))}

        </div>

      </section>


      <section className="section container">

        <div className="section-title">

          <div>

            <div className="eyebrow">
              En desarrollo
            </div>

            <h2>
              Última hora
            </h2>

          </div>

          <span className="meta">
            Actualización continua
          </span>

        </div>


        <div className="story-list">

          {published.map(
            (article, index) => (

              <div
                className="story-row"
                key={article.id}
              >

                <img
                  src={article.heroImage}
                  alt=""
                />


                <div>

                  <div className="eyebrow">
                    {article.category}
                  </div>

                  <Link
                    href={
                      `/noticias/${article.slug}`
                    }
                  >
                    <strong>
                      {article.title}
                    </strong>
                  </Link>

                  <div
                    className="meta"
                    style={{
                      marginTop: 7
                    }}
                  >
                    {article.sourceCount}
                    {" "}fuentes ·
                    {" "}consistencia editorial{" "}
                    {article.confidence}%
                  </div>

                </div>


                <div className="meta">
                  {10 + index * 7} min
                </div>

              </div>

            )
          )}

        </div>

      </section>


      <section className="section container">

        <div
          style={{
            padding: "34px",
            borderRadius: "26px",
            background:
              "linear-gradient(120deg,#031c46,#073b8c)",
            color: "white",
            boxShadow:
              "0 24px 60px rgba(3,28,70,.18)"
          }}
        >

          <div
            className="eyebrow"
            style={{
              color: "#ffd400"
            }}
          >
            Actualizard Intelligence
          </div>


          <h2
            style={{
              fontSize:
                "clamp(30px,5vw,52px)",
              letterSpacing: "-2px",
              margin:
                "10px 0 12px"
            }}
          >
            Una noticia.
            Muchas fuentes.
            Una historia clara.
          </h2>


          <p
            style={{
              maxWidth: 760,
              lineHeight: 1.7,
              color:
                "rgba(255,255,255,.75)"
            }}
          >
            El sistema analiza fuentes,
            elimina duplicados,
            agrupa acontecimientos,
            mide confianza y prepara
            contenido multimedia desde
            una sola historia.
          </p>

        </div>

      </section>

    </main>
  );
}
