import type { Article, SourceRecord } from "@/lib/types";

const ILLUSTRATIVE =
  "Imagen ilustrativa. La información de esta historia procede de las fuentes enlazadas.";

export const sources: SourceRecord[] = [
  {
    id: "src-presidencia-rd",
    name: "Presidencia de la República Dominicana",
    domain: "presidencia.gob.do",
    url: "https://presidencia.gob.do/noticias",
    type: "html",
    country: "DO",
    language: "es",
    trustScore: 90
  },
  {
    id: "src-bcrd",
    name: "Banco Central de la República Dominicana",
    domain: "bancentral.gov.do",
    url: "https://www.bancentral.gov.do/",
    type: "html",
    country: "DO",
    language: "es",
    trustScore: 90
  },
  {
    id: "src-dga",
    name: "Dirección General de Aduanas",
    domain: "aduanas.gob.do",
    url: "https://www.aduanas.gob.do/noticias/",
    type: "html",
    country: "DO",
    language: "es",
    trustScore: 90
  },
  {
    id: "src-reuters",
    name: "Reuters",
    domain: "reuters.com",
    url: "https://www.reuters.com/",
    type: "html",
    language: "en",
    trustScore: 90
  },
  {
    id: "src-ap",
    name: "Associated Press",
    domain: "apnews.com",
    url: "https://apnews.com/",
    type: "html",
    language: "en",
    trustScore: 90
  },
  {
    id: "src-un",
    name: "Naciones Unidas",
    domain: "un.org",
    url: "https://www.un.org/es/ga/81/",
    type: "html",
    language: "es",
    trustScore: 90
  },
  {
    id: "src-google-ai",
    name: "Google AI",
    domain: "blog.google",
    url: "https://blog.google/innovation-and-ai/",
    type: "html",
    language: "en",
    trustScore: 90
  },
  {
    id: "src-gemini-api",
    name: "Gemini API",
    domain: "ai.google.dev",
    url: "https://ai.google.dev/gemini-api/docs/changelog",
    type: "html",
    language: "en",
    trustScore: 90
  },
  {
    id: "src-mlb",
    name: "MLB",
    domain: "mlb.com",
    url: "https://www.mlb.com/schedule",
    type: "html",
    language: "en",
    trustScore: 90
  }
];

export const articles: Article[] = [
  {
    id: "live-20260929-markets",
    slug: "mercados-globales-presion-bonos-petroleo-29-septiembre-2026",
    title:
      "Bonos y petróleo elevan la presión sobre los mercados globales al cierre de septiembre",
    dek:
      "Los rendimientos soberanos de Estados Unidos subieron con fuerza mientras el crudo siguió encareciéndose, una combinación que vuelve a poner la inflación y las tasas de interés en el centro del mercado.",
    category: "Geoeconomía",
    author: "Redacción Actualizard",
    heroImage:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80",
    heroCaption: ILLUSTRATIVE,
    status: "published",
    confidence: 94,
    sourceCount: 2,
    createdAt: "2026-09-29T08:00:00-04:00",
    updatedAt: "2026-09-29T08:00:00-04:00",
    publishedAt: "2026-09-29T08:00:00-04:00",
    tags: ["mercados", "bonos", "petróleo", "tasas", "inflación"],
    blocks: [
      {
        type: "paragraph",
        text:
          "Los mercados globales comenzaron el 29 de septiembre bajo una nueva combinación de presión: mayores rendimientos de los bonos soberanos y petróleo más caro. Reuters informó que el rendimiento del bono del Tesoro estadounidense a 10 años alcanzó 5.27 %, su nivel más alto en 19 años, mientras los inversionistas ajustaban sus expectativas sobre la trayectoria de las tasas."
      },
      {
        type: "paragraph",
        text:
          "Al mismo tiempo, el Brent avanzó por segunda sesión consecutiva y Reuters lo situó en torno a US$106.77 por barril durante la jornada. El aumento sigue vinculado a los riesgos de suministro en Oriente Medio y a la incertidumbre sobre el tránsito energético por el estrecho de Ormuz."
      },
      {
        type: "paragraph",
        text:
          "La combinación importa porque un petróleo persistentemente caro puede alimentar la inflación, mientras mayores rendimientos soberanos encarecen el financiamiento de gobiernos, empresas y hogares. Ese escenario aumenta la sensibilidad de los mercados a los próximos datos de empleo, consumo e inflación de Estados Unidos."
      },
      {
        type: "bullets",
        items: [
          "Bono del Tesoro de EE. UU. a 10 años: 5.27 % según Reuters.",
          "Brent: alrededor de US$106.77 por barril durante la jornada.",
          "Los mercados siguen atentos al riesgo de nuevas alzas de tasas.",
          "El conflicto y las restricciones en rutas energéticas continúan siendo un factor de riesgo."
        ]
      },
      {
        type: "sources",
        items: [
          {
            name: "Reuters — Global Markets, 29 de septiembre de 2026",
            url:
              "https://www.reuters.com/world/china/global-markets-global-markets-2026-09-29/"
          },
          {
            name: "Reuters — Oil prices, 29 de septiembre de 2026",
            url:
              "https://www.reuters.com/business/energy/oil-prices-rise-second-session-continued-middle-east-supply-concern-2026-09-29/"
          }
        ]
      }
    ]
  },
  {
    id: "live-20260929-us-iran",
    slug: "mediadores-impulsan-nuevas-conversaciones-estados-unidos-iran",
    title:
      "Mediadores impulsan nuevas conversaciones entre Estados Unidos e Irán, pero persisten grandes diferencias",
    dek:
      "Los contactos indirectos buscan reducir una confrontación que ha afectado el tránsito energético y el comercio; las posiciones sobre sanciones, activos y el programa nuclear siguen separadas.",
    category: "Geopolítica",
    author: "Redacción Actualizard",
    heroImage:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1600&q=80",
    heroCaption: ILLUSTRATIVE,
    status: "published",
    confidence: 92,
    sourceCount: 2,
    createdAt: "2026-09-29T07:40:00-04:00",
    updatedAt: "2026-09-29T07:40:00-04:00",
    publishedAt: "2026-09-29T07:40:00-04:00",
    tags: ["Estados Unidos", "Irán", "Ormuz", "diplomacia"],
    blocks: [
      {
        type: "paragraph",
        text:
          "Estados Unidos e Irán mantuvieron conversaciones separadas con mediadores en un nuevo intento por reducir el conflicto. Reuters informó que las discusiones se concentran en una propuesta revisada de cese de hostilidades presentada durante la Asamblea General de la ONU."
      },
      {
        type: "paragraph",
        text:
          "La propuesta iraní incluye demandas relacionadas con sanciones, activos congelados y restricciones sobre puertos. A cambio, Teherán plantea reabrir el estrecho de Ormuz y retomar conversaciones sobre su programa nuclear. Washington ha rechazado parte de esas condiciones y ambas partes mantienen diferencias sustanciales."
      },
      {
        type: "paragraph",
        text:
          "Associated Press también informó sobre esfuerzos de mediación y señaló que el estrecho de Ormuz sigue siendo un punto central por su importancia para el comercio energético mundial. Las conversaciones están en curso y no existe todavía un acuerdo anunciado."
      },
      {
        type: "sources",
        items: [
          {
            name: "Reuters — U.S., Iran talks with mediators",
            url:
              "https://www.reuters.com/world/middle-east/us-iran-set-hold-separate-talks-with-mediators-monday-or-tuesday-official-says-2026-09-28/"
          },
          {
            name: "Associated Press — Mediators work on U.S.-Iran deal",
            url:
              "https://apnews.com/article/871504dbd98d9b08b226b9805d8f4606"
          }
        ]
      }
    ]
  },
  {
    id: "live-20260929-un",
    slug: "asamblea-general-onu-reabre-debate-reforma-confianza",
    title:
      "La Asamblea General reabre el debate sobre la reforma de la ONU y la representación global",
    dek:
      "La 81.ª sesión llega marcada por reclamos de mayor representación, cuestionamientos al Consejo de Seguridad y llamados a recuperar la confianza en el multilateralismo.",
    category: "Mundo",
    author: "Redacción Actualizard",
    heroImage:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1600&q=80",
    heroCaption: ILLUSTRATIVE,
    status: "published",
    confidence: 93,
    sourceCount: 2,
    createdAt: "2026-09-29T07:20:00-04:00",
    updatedAt: "2026-09-29T07:20:00-04:00",
    publishedAt: "2026-09-29T07:20:00-04:00",
    tags: ["ONU", "Asamblea General", "multilateralismo", "reforma"],
    blocks: [
      {
        type: "paragraph",
        text:
          "La 81.ª sesión de la Asamblea General de las Naciones Unidas se desarrolla bajo el lema de restaurar la confianza y gestionar la transformación para producir resultados para todos. El debate general se celebró del 22 al 28 de septiembre en Nueva York."
      },
      {
        type: "paragraph",
        text:
          "Associated Press reportó que numerosos líderes utilizaron la semana de alto nivel para reclamar cambios en la estructura de gobernanza global, particularmente en el Consejo de Seguridad. Entre los planteamientos más reiterados aparece una mayor representación para África y otras regiones."
      },
      {
        type: "paragraph",
        text:
          "El debate refleja una tensión de fondo: los Estados reclaman mayor capacidad soberana al mismo tiempo que problemas como el cambio climático, la inteligencia artificial, la seguridad y el comercio requieren coordinación internacional."
      },
      {
        type: "sources",
        items: [
          {
            name: "Naciones Unidas — 81.º período de sesiones",
            url: "https://www.un.org/es/ga/81/"
          },
          {
            name: "Associated Press — Debate sobre cooperación y reforma de la ONU",
            url:
              "https://apnews.com/article/9998d2175f7a3b47301497f74c7aad2d"
          }
        ]
      }
    ]
  },
  {
    id: "live-20260925-budget-rd",
    slug: "poder-ejecutivo-deposita-presupuesto-2027-congreso-rd",
    title:
      "Poder Ejecutivo deposita el proyecto de Presupuesto 2027 con énfasis en gasto social e infraestructura",
    dek:
      "La propuesta remitida al Congreso proyecta crecimiento real de 4.75 % para 2027 y asigna una parte relevante del gasto a educación, salud y protección social.",
    category: "Política",
    author: "Redacción Actualizard",
    heroImage:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1600&q=80",
    heroCaption: ILLUSTRATIVE,
    status: "published",
    confidence: 95,
    sourceCount: 2,
    createdAt: "2026-09-25T11:30:00-04:00",
    updatedAt: "2026-09-29T06:50:00-04:00",
    publishedAt: "2026-09-25T11:30:00-04:00",
    tags: ["Presupuesto 2027", "Congreso", "educación", "salud", "República Dominicana"],
    blocks: [
      {
        type: "paragraph",
        text:
          "El Poder Ejecutivo remitió al Congreso Nacional el proyecto de Ley de Presupuesto General del Estado para 2027. De acuerdo con la Presidencia, la propuesta contempla erogaciones consolidadas por RD$2.084 billones, ingresos por RD$1.620 billones y un techo de gasto de RD$1.945 billones."
      },
      {
        type: "paragraph",
        text:
          "El documento utiliza como supuestos una expansión real de la economía de 4.75 % y una inflación promedio de 4.5 % para 2027. La Presidencia informó que los servicios sociales concentran RD$907,116.9 millones, equivalentes a 46.6 % del techo de gasto consolidado del Gobierno General Nacional."
      },
      {
        type: "paragraph",
        text:
          "En educación, el Gobierno señala que el Ministerio de Educación y el Mescyt concentrarían RD$391,303.1 millones. Para Salud Pública se contemplan RD$198,727 millones. Las cifras son parte de una propuesta que ahora debe seguir el proceso legislativo correspondiente."
      },
      {
        type: "paragraph",
        text:
          "Como contexto macroeconómico, el Banco Central reporta una inflación interanual de 5.13 % en agosto de 2026, crecimiento acumulado del IMAE de 4.5 % entre enero y agosto y una tasa de política monetaria de 5.25 % en septiembre."
      },
      {
        type: "sources",
        items: [
          {
            name: "Presidencia de la República Dominicana — Proyecto de Presupuesto 2027",
            url:
              "https://presidencia.gob.do/noticias/poder-ejecutivo-deposita-ante-el-congreso-nacional-proyecto-de-ley-presupuesto-2027-con"
          },
          {
            name: "Banco Central de la República Dominicana — Variables macroeconómicas",
            url: "https://www.bancentral.gov.do/"
          }
        ]
      }
    ]
  },
  {
    id: "live-20260929-bcrd",
    slug: "banco-central-inflacion-agosto-actividad-economica-rd-2026",
    title:
      "Banco Central reporta inflación interanual de 5.13 % y crecimiento acumulado de 4.5 % hasta agosto",
    dek:
      "Los indicadores oficiales muestran inflación por encima del centro de la meta y una expansión acumulada del IMAE de 4.5 % entre enero y agosto de 2026.",
    category: "RD",
    author: "Redacción Actualizard",
    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    heroCaption: ILLUSTRATIVE,
    status: "published",
    confidence: 97,
    sourceCount: 1,
    createdAt: "2026-09-29T06:40:00-04:00",
    updatedAt: "2026-09-29T06:40:00-04:00",
    publishedAt: "2026-09-29T06:40:00-04:00",
    tags: ["Banco Central", "inflación", "IMAE", "tasa de interés", "RD"],
    blocks: [
      {
        type: "paragraph",
        text:
          "El Banco Central de la República Dominicana publica para agosto de 2026 una inflación interanual de 5.13 %, inflación acumulada de 2.60 % y una variación mensual de 0.38 %. La inflación subyacente interanual se situó en 4.76 %."
      },
      {
        type: "paragraph",
        text:
          "En actividad económica, el IMAE original registró un crecimiento interanual de 3.8 % en agosto y de 4.5 % en el período enero-agosto. La tasa de política monetaria para septiembre figura en 5.25 %."
      },
      {
        type: "paragraph",
        text:
          "El Banco Central mantiene una meta de inflación de 4.0 % ± 1.0 %. Los datos actuales colocan la inflación interanual ligeramente por encima del límite superior de ese rango, por lo que la evolución de precios y tasas seguirá siendo una referencia central para hogares, empresas y decisiones de política económica."
      },
      {
        type: "sources",
        items: [
          {
            name: "Banco Central de la República Dominicana — Variables macroeconómicas",
            url: "https://www.bancentral.gov.do/"
          }
        ]
      }
    ]
  },
  {
    id: "live-20260922-dga",
    slug: "aduanas-detecta-diferencias-impuestos-comercios-capital-asiatico",
    title:
      "Aduanas informa diferencias fiscales por más de RD$66 millones en fiscalizaciones post despacho",
    dek:
      "La DGA reportó RD$66.45 millones en diferencias de impuestos determinadas entre enero y agosto en operaciones vinculadas a comercios de capital asiático.",
    category: "RD",
    author: "Redacción Actualizard",
    heroImage:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1600&q=80",
    heroCaption: ILLUSTRATIVE,
    status: "published",
    confidence: 96,
    sourceCount: 1,
    createdAt: "2026-09-22T15:00:00-04:00",
    updatedAt: "2026-09-29T06:20:00-04:00",
    publishedAt: "2026-09-22T15:00:00-04:00",
    tags: ["Aduanas", "impuestos", "fiscalización", "La Vega"],
    blocks: [
      {
        type: "paragraph",
        text:
          "La Dirección General de Aduanas informó que sus fiscalizaciones post despacho determinaron RD$66,451,346 en diferencias de impuestos entre enero y agosto de 2026 en operaciones vinculadas a comercios de capital asiático."
      },
      {
        type: "paragraph",
        text:
          "Según la institución, al momento del reporte había 14 casos finalizados y 51 en proceso. La DGA enmarca estas actuaciones en sus mecanismos de control posterior al despacho y cumplimiento tributario y aduanero."
      },
      {
        type: "paragraph",
        text:
          "La cifra corresponde a diferencias determinadas por la autoridad aduanera y no debe interpretarse, por sí sola, como una sentencia judicial ni como una conclusión general sobre todos los comercios de un origen determinado."
      },
      {
        type: "sources",
        items: [
          {
            name: "Dirección General de Aduanas — Noticias, 22 de septiembre de 2026",
            url: "https://www.aduanas.gob.do/noticias/"
          }
        ]
      }
    ]
  },
  {
    id: "live-20260915-gemini-live",
    slug: "google-presenta-gemini-3-8-live-y-extended-thinking",
    title:
      "Google presenta Gemini 3.8 Live y una variante de razonamiento extendido para interacción en tiempo real",
    dek:
      "Los nuevos modelos de diálogo en vivo están orientados a conversaciones más fluidas, contexto visual y tareas complejas ejecutadas mientras continúa la interacción.",
    category: "IA",
    author: "Actualizard Tecnología",
    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    heroCaption: ILLUSTRATIVE,
    status: "published",
    confidence: 98,
    sourceCount: 2,
    createdAt: "2026-09-15T13:00:00-04:00",
    updatedAt: "2026-09-29T06:00:00-04:00",
    publishedAt: "2026-09-15T13:00:00-04:00",
    tags: ["Gemini", "Google", "IA", "voz", "agentes"],
    blocks: [
      {
        type: "paragraph",
        text:
          "Google presentó Gemini 3.8 Live y Gemini 3.8 Live Extended Thinking, dos modelos orientados a interacción de voz en tiempo casi real. La compañía afirma que incorporan mejoras en razonamiento paralelo, contexto visual y ejecución de tareas durante una conversación."
      },
      {
        type: "paragraph",
        text:
          "Gemini 3.8 Live está planteado para escala y eficiencia, mientras la variante Extended Thinking se enfoca en tareas de mayor complejidad y razonamiento de varios pasos."
      },
      {
        type: "paragraph",
        text:
          "El cambio es relevante para productos que requieren asistentes de voz, agentes conversacionales y experiencias multimodales en las que el modelo debe escuchar, interpretar contexto visual y mantener acciones en segundo plano."
      },
      {
        type: "sources",
        items: [
          {
            name: "Google AI — Introducing Gemini 3.8 Live and Extended Thinking",
            url:
              "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/"
          },
          {
            name: "Gemini API — Release notes",
            url: "https://ai.google.dev/gemini-api/docs/changelog"
          }
        ]
      }
    ]
  },
  {
    id: "live-20260923-gemini-connected-apps",
    slug: "gemini-amplia-apps-conectadas-productividad-creatividad-servicios",
    title:
      "Gemini amplía sus aplicaciones conectadas con herramientas de productividad, creatividad y servicios",
    dek:
      "Google anunció integraciones con plataformas como Airtable, Linear, monday.com, Adobe, Webflow, Peloton y otras para ejecutar tareas desde Gemini.",
    category: "Tecnología",
    author: "Actualizard Tecnología",
    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    heroCaption: ILLUSTRATIVE,
    status: "published",
    confidence: 98,
    sourceCount: 1,
    createdAt: "2026-09-23T14:00:00-04:00",
    updatedAt: "2026-09-29T05:45:00-04:00",
    publishedAt: "2026-09-23T14:00:00-04:00",
    tags: ["Gemini", "apps", "productividad", "Adobe", "Webflow"],
    blocks: [
      {
        type: "paragraph",
        text:
          "Google comenzó a desplegar una nueva ola de aplicaciones conectadas a Gemini. La lista anunciada incluye herramientas de productividad como Airtable, Linear, monday.com, PandaDoc y Zoho; servicios creativos como Adobe, Picsart, Squarespace y Webflow; y aplicaciones de estilo de vida como Peloton y SeatGeek."
      },
      {
        type: "paragraph",
        text:
          "La estrategia apunta a que Gemini funcione menos como una ventana de consulta aislada y más como una capa capaz de operar sobre servicios externos desde una misma conversación."
      },
      {
        type: "paragraph",
        text:
          "El despliegue es gradual y la disponibilidad puede variar por producto, cuenta, región y plan. Google indica que las conexiones pueden gestionarse desde la configuración de Gemini o mediante menciones directas dentro del chat."
      },
      {
        type: "sources",
        items: [
          {
            name: "Google — New connected apps roll out to Gemini",
            url:
              "https://blog.google/innovation-and-ai/products/gemini-app/new-connected-apps-gemini/"
          }
        ]
      }
    ]
  },
  {
    id: "live-20260924-live-avatar",
    slug: "gemini-3-8-live-avatar-presencia-visual-tiempo-real",
    title:
      "Gemini 3.8 Live with Live Avatar combina conversación y presencia visual en tiempo casi real",
    dek:
      "Google presentó una capacidad que une diálogo en vivo y generación de video de baja latencia para crear una persona visual que escucha, observa y responde.",
    category: "Video",
    author: "Actualizard Video",
    heroImage:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=80",
    heroCaption: ILLUSTRATIVE,
    status: "published",
    confidence: 98,
    sourceCount: 1,
    createdAt: "2026-09-24T13:00:00-04:00",
    updatedAt: "2026-09-29T05:30:00-04:00",
    publishedAt: "2026-09-24T13:00:00-04:00",
    tags: ["video", "avatar", "Gemini", "IA generativa"],
    blocks: [
      {
        type: "paragraph",
        text:
          "Google presentó Gemini 3.8 Live with Live Avatar, una función que combina sus modelos de diálogo en vivo con generación de video de baja latencia. El objetivo es producir interacciones en las que una presencia visual responda de forma sincronizada a la conversación."
      },
      {
        type: "paragraph",
        text:
          "La compañía describe la función como una experiencia capaz de escuchar, ver y hablar mediante una persona visual dinámica. El anuncio se apoya en Gemini 3.8 Live, presentado una semana antes."
      },
      {
        type: "paragraph",
        text:
          "Para medios, formación, atención al cliente y productos conversacionales, este tipo de tecnología abre una nueva categoría de interfaces donde el usuario no solo oye una voz sintética, sino que interactúa con una representación visual generada."
      },
      {
        type: "sources",
        items: [
          {
            name: "Google AI — Gemini 3.8 Live with Live Avatar",
            url:
              "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-with-live-avatar/"
          }
        ]
      }
    ]
  },
  {
    id: "live-20260929-mlb",
    slug: "mlb-abre-ronda-wild-card-cuatro-series-29-septiembre-2026",
    title:
      "MLB abre la ronda de Wild Card con cuatro partidos este 29 de septiembre",
    dek:
      "El calendario oficial incluye Phillies-Braves, White Sox-Astros, Red Sox-Yankees y Cubs-Padres en la primera jornada de la postemporada.",
    category: "Deportes",
    author: "Actualizard Deportes",
    heroImage:
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1600&q=80",
    heroCaption: ILLUSTRATIVE,
    status: "published",
    confidence: 99,
    sourceCount: 1,
    createdAt: "2026-09-29T05:10:00-04:00",
    updatedAt: "2026-09-29T05:10:00-04:00",
    publishedAt: "2026-09-29T05:10:00-04:00",
    tags: ["MLB", "Wild Card", "postemporada", "béisbol"],
    blocks: [
      {
        type: "paragraph",
        text:
          "La postemporada de Grandes Ligas abre este martes 29 de septiembre con cuatro partidos de Wild Card, de acuerdo con el calendario oficial de MLB."
      },
      {
        type: "bullets",
        items: [
          "Phillies vs. Braves — 2:00 p. m. ET.",
          "White Sox vs. Astros — 5:00 p. m. ET.",
          "Red Sox vs. Yankees — 8:00 p. m. ET.",
          "Cubs vs. Padres — 10:00 p. m. ET."
        ]
      },
      {
        type: "paragraph",
        text:
          "Los horarios están publicados en hora del Este y pueden estar sujetos a cambios. MLB mantiene en su calendario oficial las actualizaciones de sede, transmisión y abridores."
      },
      {
        type: "sources",
        items: [
          {
            name: "MLB — Calendario oficial, 29 de septiembre de 2026",
            url: "https://www.mlb.com/schedule"
          }
        ]
      }
    ]
  }
];
