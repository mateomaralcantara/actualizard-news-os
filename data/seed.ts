import type { Article, SourceRecord } from "@/lib/types";

export const sources: SourceRecord[] = [
  { id: "src-1", name: "Agencia Demo", domain: "example.com", url: "https://example.com/rss.xml", type: "rss", country: "DO", language: "es", trustScore: 90 },
  { id: "src-2", name: "Fuente Oficial Demo", domain: "example.org", url: "https://example.org/noticias", type: "html", country: "DO", language: "es", trustScore: 96 }
];

export const articles: Article[] = [
  {
    id: "art-001",
    slug: "actualizard-nace-como-redaccion-autonoma",
    title: "Actualizard nace como una redacción autónoma pensada para la era de la inteligencia artificial",
    dek: "Una arquitectura editorial que descubre, contrasta, redacta, enriquece y distribuye historias desde un único sistema.",
    category: "Tecnología",
    author: "Redacción Actualizard",
    heroImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1600&q=80",
    status: "published",
    confidence: 96,
    sourceCount: 7,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    tags: ["IA", "periodismo", "automatización"],
    blocks: [
      { type: "paragraph", text: "Actualizard está diseñado como un sistema operativo editorial y no simplemente como un CMS. Su arquitectura separa la adquisición de información, la inteligencia de historias, la producción editorial, los medios y la distribución." },
      { type: "image", url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80", caption: "Una redacción digital puede tratar cada noticia como un evento vivo." },
      { type: "paragraph", text: "El motor de descubrimiento puede combinar RSS, APIs y extracción HTML. Después normaliza el contenido y agrupa múltiples publicaciones que describen un mismo hecho." },
      { type: "quote", text: "La unidad editorial principal no es la URL: es el acontecimiento.", attribution: "Principio de diseño de Actualizard" },
      { type: "bullets", items: ["Múltiples fuentes por historia", "Puntuación de confianza", "Bloques multimedia", "Programación de publicación", "Producción de video"] },
      { type: "video", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", caption: "Bloque de video demostrativo." }
    ]
  },
  {
    id: "art-002",
    slug: "motor-descubrimiento-historias",
    title: "Un motor de descubrimiento convierte miles de URLs en historias útiles",
    dek: "La deduplicación y el clustering semántico permiten evitar una redacción llena de noticias repetidas.",
    category: "IA",
    author: "Actualizard Labs",
    heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    status: "published",
    confidence: 92,
    sourceCount: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    tags: ["scraping", "clustering"],
    blocks: [{ type: "paragraph", text: "La adquisición es solo el primer paso. Actualizard puntúa las fuentes, detecta similitudes y consolida las publicaciones relacionadas antes de generar contenido." }]
  },
  {
    id: "art-003",
    slug: "video-first",
    title: "De artículo a video: el flujo multimedia de Actualizard",
    dek: "Cada noticia puede convertirse en guion, storyboard, voz, subtítulos y formatos 16:9 o 9:16.",
    category: "Video",
    author: "Actualizard Studio",
    heroImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1400&q=80",
    status: "scheduled",
    confidence: 94,
    sourceCount: 4,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    scheduledFor: new Date(Date.now()+3600_000).toISOString(),
    tags: ["video", "automatización"],
    blocks: [{ type: "paragraph", text: "El pipeline audiovisual se desacopla del artículo para poder renderizar varios formatos sin bloquear la publicación web." }]
  }
];
