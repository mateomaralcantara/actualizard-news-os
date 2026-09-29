import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Actualizard — La actualidad ahora",
  description:
    "Noticias, inteligencia, investigación, geopolítica, geoeconomía, tecnología, deportes y video en tiempo real."
};

const mainNavigation = [
  {
    label: "Última hora",
    href: "/"
  },
  {
    label: "RD",
    href: "/categoria/rd"
  },
  {
    label: "Mundo",
    href: "/categoria/mundo"
  },
  {
    label: "Política",
    href: "/categoria/politica"
  },
  {
    label: "Geopolítica",
    href: "/categoria/geopolitica"
  },
  {
    label: "Geoeconomía",
    href: "/categoria/geoeconomia"
  },
  {
    label: "Negocios",
    href: "/categoria/negocios"
  },
  {
    label: "Tecnología",
    href: "/categoria/tecnologia"
  },
  {
    label: "IA",
    href: "/categoria/ia"
  },
  {
    label: "Deportes",
    href: "/categoria/deportes"
  },
  {
    label: "Videos",
    href: "/categoria/video"
  }
];

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
    >
      <body>

        <div className="topbar">
          <div className="topbar-inner">

            <div className="topbar-live">
              <span className="live-dot" />

              ACTUALIZARD EN VIVO
            </div>

            <div className="topbar-tagline">
              Información · Inteligencia · Video · Análisis
            </div>

          </div>
        </div>


        <header className="nav">

          <div className="nav-inner actualizard-main-header">

            <div className="actualizard-brand-zone">

              <Link
                href="/"
                className="brand actualizard-brand"
                aria-label="Actualizard"
              >
                Actuali<span>zard</span>
              </Link>

              <span className="actualizard-brand-subtitle">
                NEWS INTELLIGENCE
              </span>

            </div>


            <nav
              className="nav-links actualizard-nav-links"
              aria-label="Navegación principal"
            >

              {
                mainNavigation.map(
                  item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="actualizard-nav-item"
                    >
                      {item.label}
                    </Link>
                  )
                )
              }


              <Link
                href="/admin"
                className="actualizard-command-link"
              >
                Command Center
              </Link>

            </nav>

          </div>

        </header>


        <div className="breaking-strip">

          <div className="breaking-inner">

            <span className="breaking-label">
              Última hora
            </span>

            <span className="breaking-text">
              Actualizard monitorea continuamente las historias más importantes de República Dominicana y el mundo.
            </span>

          </div>

        </div>


        {children}


        <footer className="footer">

          <div className="container">

            <div
              className="brand actualizard-footer-brand"
            >
              Actuali<span>zard</span>
            </div>

            <div>
              Noticias, inteligencia, análisis y multimedia en tiempo real.
            </div>

          </div>

        </footer>

      </body>
    </html>
  );
}