import type { Article } from "@/lib/types";

const publishedAt = "2026-11-04T22:30:00-04:00";

export const currentNewsArticles: Article[] = [
  {
    id: "rd-20261104-autopista-ambar-inicio-15-dias",
    slug: "abinader-anuncia-inicio-autopista-ambar-en-15-dias",
    title: "Abinader anuncia primer picazo de la Autopista del Ámbar dentro de 15 días",
    dek: "El Gobierno informó que entregó RD$5,780 millones como primera partida; la vía de unos 35 kilómetros conectaría Santiago y Puerto Plata.",
    category: "Infraestructura",
    author: "Redacción Actualizard",
    heroImage: "https://www.presidencia.gob.do/sites/default/files/news/2023-10/Palacio-Nacional2%20%282%29%20%281%29.jpg",
    heroCaption: "Palacio Nacional, fotografía de archivo. Fuente: Presidencia de la República.",
    status: "published",
    confidence: 96,
    sourceCount: 1,
    createdAt: publishedAt,
    updatedAt: publishedAt,
    publishedAt,
    tags: ["Autopista del Ámbar", "Santiago", "Puerto Plata", "infraestructura"],
    blocks: [
      { type: "paragraph", text: "El presidente Luis Abinader anunció el 4 de noviembre que el primer picazo para construir la Autopista del Ámbar se daría dentro de 15 días. La Presidencia informó que el proyecto cuenta con una primera partida gubernamental de RD$5,780 millones." },
      { type: "paragraph", text: "La obra tendría cerca de 35 kilómetros y busca conectar Santiago con Puerto Plata en unos 35 minutos. Según el anuncio oficial, ya comenzó la preparación del terreno en Montellano y fueron obtenidas licencias ambientales iniciales para dos tramos. El anuncio no equivale a la conclusión de la obra ni a la apertura de la vía." },
      { type: "sources", items: [{ name: "Presidencia de la República Dominicana", url: "https://presidencia.gob.do/noticias/presidente-luis-abinader-anuncia-para-dentro-de-15-dias-primer-picazo-construccion" }] }
    ]
  },
  {
    id: "rd-20261104-codigo-etica-ia-publica",
    slug: "gobierno-aprueba-codigo-etica-ia-servicios-publicos",
    title: "Gobierno aprueba código de ética para el uso de inteligencia artificial en servicios públicos",
    dek: "El Decreto 787-26 establece pautas para aplicar IA en la Administración Pública con transparencia, protección de derechos y supervisión humana.",
    category: "Tecnología",
    author: "Redacción Actualizard",
    heroImage: "https://resources.diariolibre.com/images/2026/06/25/rd-aprobara-codigo-de-etica-para-inteligencia-artificial-d49c9f03-focus-0-0-896-504.jpg",
    heroCaption: "Imagen de archivo de una actividad pública sobre ética de IA. Fuente: Diario Libre.",
    status: "published",
    confidence: 96,
    sourceCount: 1,
    createdAt: publishedAt,
    updatedAt: publishedAt,
    publishedAt,
    tags: ["inteligencia artificial", "servicios públicos", "Decreto 787-26", "República Dominicana"],
    blocks: [
      { type: "paragraph", text: "El Poder Ejecutivo aprobó mediante el Decreto 787-26 un Código de Ética para el uso de inteligencia artificial en los servicios públicos. La Consultoría Jurídica indicó que la norma busca orientar el uso responsable de estas tecnologías en la Administración Pública." },
      { type: "paragraph", text: "Entre los principios citados están la protección de los derechos fundamentales, la transparencia y la supervisión humana. La disposición crea un marco de referencia para las instituciones; su aplicación concreta dependerá de las medidas y procedimientos que adopte cada organismo." },
      { type: "sources", items: [{ name: "Consultoría Jurídica del Poder Ejecutivo", url: "https://consultoria.gov.do/" }] }
    ]
  },
  {
    id: "rd-20261104-indotel-mesas-ley-telecom",
    slug: "indotel-abre-mesas-tecnicas-nueva-ley-telecomunicaciones",
    title: "Indotel abre mesas técnicas para debatir una nueva ley de telecomunicaciones",
    dek: "La discusión revisará un anteproyecto que actualizaría la legislación vigente desde 1998; la iniciativa aún debe pasar por el Congreso.",
    category: "Tecnología",
    author: "Redacción Actualizard",
    heroImage: "https://presidencia.gob.do/sites/default/files/styles/large/public/news/2025-05/Fachada%20del%20INDOTEL%20%281%29.jpg?itok=wRa7YBCR",
    heroCaption: "Fachada del Indotel. Fotografía de archivo: Presidencia de la República.",
    status: "published",
    confidence: 96,
    sourceCount: 1,
    createdAt: publishedAt,
    updatedAt: publishedAt,
    publishedAt,
    tags: ["Indotel", "telecomunicaciones", "conectividad", "ley"],
    blocks: [
      { type: "paragraph", text: "El Instituto Dominicano de las Telecomunicaciones inició mesas técnicas para recibir y discutir aportes al borrador del Anteproyecto de Ley General de Telecomunicaciones, Infraestructura Digital y Conectividad." },
      { type: "paragraph", text: "El Indotel sostiene que la norma vigente data de 1998 y requiere actualizarse ante los cambios tecnológicos. La entidad describió el proceso como abierto a los sectores vinculados; el texto no es todavía una ley y deberá continuar su trámite legislativo en el Congreso." },
      { type: "sources", items: [{ name: "Presidencia de la República Dominicana", url: "https://presidencia.gob.do/noticias/indotel-abre-mesas-tecnicas-para-debatir-anteproyecto-de-nueva-ley-general-de" }] }
    ]
  },
  {
    id: "rd-20261104-sns-servicios-salud-enero-septiembre",
    slug: "sns-reporta-47-millones-servicios-salud-enero-septiembre",
    title: "SNS reporta más de 47.5 millones de servicios de salud entre enero y septiembre",
    dek: "El balance oficial incluye consultas, emergencias, pruebas y cirugías; también informa la contratación de 4,068 médicos durante esos nueve meses.",
    category: "Salud",
    author: "Redacción Actualizard",
    heroImage: "https://presidencia.gob.do/sites/default/files/styles/large/public/news/2026-09/WhatsApp%20Image%202026-09-17%20at%2012.47.55%20PM.jpeg?itok=4QPz9ue3",
    heroCaption: "El director del SNS presenta resultados institucionales, fotografía de archivo. Fuente: Presidencia de la República.",
    status: "published",
    confidence: 95,
    sourceCount: 1,
    createdAt: publishedAt,
    updatedAt: publishedAt,
    publishedAt,
    tags: ["SNS", "salud pública", "hospitales", "servicios de salud"],
    blocks: [
      { type: "paragraph", text: "El Servicio Nacional de Salud informó que la red pública ofreció 47,588,248 servicios entre enero y septiembre de 2026. La institución desglosó atenciones de laboratorio, consultas, emergencias, imágenes diagnósticas, cirugías y hospitalizaciones." },
      { type: "paragraph", text: "El balance también reporta la incorporación de 4,068 médicos y la existencia de 59 unidades de salud mental. Son cifras divulgadas por el propio SNS; la nota resume el reporte institucional y no constituye una evaluación independiente de calidad o tiempos de espera." },
      { type: "sources", items: [{ name: "Presidencia de la República Dominicana", url: "https://presidencia.gob.do/noticias/sns-prioriza-la-humanizacion-en-los-servicios-de-salud-y-ofrece-mas-de-475-millones-de" }] }
    ]
  },
  {
    id: "rd-20261104-cumbre-iberoamericana-madrid",
    slug: "abinader-participa-inauguracion-cumbre-iberoamericana-madrid",
    title: "Abinader participa en la inauguración de la Cumbre Iberoamericana en Madrid",
    dek: "La XXX edición reunió a representantes de los países iberoamericanos; en el acto inaugural se destacaron el diálogo, la cooperación y la solidaridad.",
    category: "Internacionales",
    author: "Redacción Actualizard",
    heroImage: "https://idmphsmkuxkn.compat.objectstorage.us-ashburn-1.oraclecloud.com/cdn-bucket/uploads/2023/03/WhatsApp-Image-2023-03-24-at-7.01.56-PM.jpeg",
    heroCaption: "Fotografía de archivo de una cumbre iberoamericana anterior. Fuente: CDN.",
    status: "published",
    confidence: 94,
    sourceCount: 1,
    createdAt: publishedAt,
    updatedAt: publishedAt,
    publishedAt,
    tags: ["Cumbre Iberoamericana", "Madrid", "Luis Abinader", "relaciones exteriores"],
    blocks: [
      { type: "paragraph", text: "El presidente Luis Abinader participó el miércoles 4 de noviembre en la inauguración de la XXX Cumbre Iberoamericana, celebrada en el Teatro Real de Madrid. Asistieron el rey Felipe VI, el presidente del Gobierno español, Pedro Sánchez, y representantes de los países de la comunidad iberoamericana." },
      { type: "paragraph", text: "La Presidencia dominicana destacó los llamados al diálogo, la cooperación y la solidaridad regional. La agenda de la cumbre continúa el jueves 5 de noviembre." },
      { type: "sources", items: [{ name: "Presidencia de la República Dominicana", url: "https://presidencia.gob.do/noticias/en-inauguracion-xxx-cumbre-iberoamericana-se-reafirma-que-el-dialogo-la-cooperacion-y-la" }] }
    ]
  },
  {
    id: "rd-20261104-transicion-suprema-corte",
    slug: "henry-molina-justiniano-montero-inician-transicion-suprema-corte",
    title: "Henry Molina y Justiniano Montero inician transición en la Suprema Corte",
    dek: "El encuentro busca facilitar un relevo ordenado y mantener la continuidad del servicio judicial antes de la juramentación prevista para el 10 de noviembre.",
    category: "Justicia",
    author: "Redacción Actualizard",
    heroImage: "https://resources.diariolibre.com/images/binrepository/image_content_9333683_20180102200106.jpg",
    heroCaption: "Fachada de la Suprema Corte de Justicia, fotografía de archivo. Fuente: Diario Libre.",
    status: "published",
    confidence: 97,
    sourceCount: 1,
    createdAt: publishedAt,
    updatedAt: publishedAt,
    publishedAt,
    tags: ["Suprema Corte de Justicia", "Henry Molina", "Justiniano Montero", "Poder Judicial"],
    blocks: [
      { type: "paragraph", text: "El presidente saliente de la Suprema Corte de Justicia, Henry Molina, y el presidente electo, Justiniano Montero Montero, sostuvieron una reunión para iniciar la transición institucional." },
      { type: "paragraph", text: "El Poder Judicial informó que conversaron sobre la situación de la institución y sus retos. Montero fue elegido por unanimidad por el Consejo Nacional de la Magistratura el 2 de noviembre; su juramentación está prevista para el día 10." },
      { type: "sources", items: [{ name: "Poder Judicial de la República Dominicana", url: "https://poderjudicial.gob.do/henry-molina-y-justiniano-montero-inician-proceso-de-transicion-en-la-suprema-corte-de-justicia/" }] }
    ]
  },
  {
    id: "rd-20261104-dgm-detenciones-3-noviembre",
    slug: "dgm-reporta-1344-detenciones-en-operativos-del-3-de-noviembre",
    title: "Migración reporta 1,344 detenciones durante operativos del martes",
    dek: "La Dirección General de Migración indicó que las intervenciones se realizaron en varias provincias y que 960 personas fueron deportadas ese día.",
    category: "Nacionales",
    author: "Redacción Actualizard",
    heroImage: "https://idmphsmkuxkn.compat.objectstorage.us-ashburn-1.oraclecloud.com/elcaribe-bucket/uploads/2025/07/foto-nota-de-prensa-2-del-16-de-julio-del-ano-2025-2048x1366-1.jpg.webp",
    heroCaption: "Imagen de archivo de un operativo migratorio; no corresponde a las detenciones reportadas el 3 de noviembre. Fuente: El Caribe.",
    status: "published",
    confidence: 95,
    sourceCount: 1,
    createdAt: publishedAt,
    updatedAt: publishedAt,
    publishedAt,
    tags: ["Migración", "DGM", "operativos", "Dajabón", "La Vega"],
    blocks: [
      { type: "paragraph", text: "La Dirección General de Migración informó que detuvo a 1,344 extranjeros en condición migratoria irregular durante operativos realizados el martes 3 de noviembre en distintas localidades. La institución indicó que 192 detenciones ocurrieron en Santo Domingo y 177 en Dajabón." },
      { type: "paragraph", text: "La Vega registró 42 detenidos, según el desglose divulgado por la DGM. La institución también reportó 960 deportaciones por los puntos fronterizos ese día. Estas cifras corresponden al informe oficial de Migración." },
      { type: "sources", items: [{ name: "Dirección General de Migración", url: "https://migracion.gob.do/forum/Debate/dgm-reporta-1344-detenidos-este-martes-192-en-santo-domingo-y-177-en-dajabon/" }] }
    ]
  },
  {
    id: "rd-20261104-proyecto-peajes-electronicos",
    slug: "senado-recibe-proyecto-modernizar-peajes-y-sancionar-evasion",
    title: "Senado recibe proyecto para modernizar peajes y sancionar la evasión",
    dek: "La propuesta plantea cobro electrónico sin barreras y multas; será estudiada por una comisión antes de continuar su trámite legislativo.",
    category: "Política",
    author: "Redacción Actualizard",
    heroImage: "https://resources.diariolibre.com/images/2026/11/04/ley-peajes-busca-sanciones-por-evasion-y-cobro-electronico-dae23ce1.jpg",
    heroCaption: "Entrega del proyecto en el Senado, fotografía cedida por esa institución. Fuente: Diario Libre.",
    status: "published",
    confidence: 96,
    sourceCount: 1,
    createdAt: publishedAt,
    updatedAt: publishedAt,
    publishedAt,
    tags: ["Senado", "peajes", "RD Vial", "transporte"],
    blocks: [
      { type: "paragraph", text: "El Poder Ejecutivo depositó en el Senado un proyecto para modificar la Ley 63-17 y establecer un sistema de peajes con cobro electrónico. La propuesta contempla modalidades de flujo libre, que permitirían cruzar sin detenerse en una barrera." },
      { type: "paragraph", text: "La iniciativa también plantea sanciones para la evasión del pago y asigna funciones de administración y fiscalización a RD Vial. El Senado anunció que la enviaría a comisión para estudio: todavía no ha sido aprobada como ley." },
      { type: "sources", items: [{ name: "Diario Libre", url: "https://www.diariolibre.com/politica/gobierno/2026/11/04/ley-peajes-busca-sanciones-por-evasion-y-cobro-electronico/3710922" }] }
    ]
  },
  {
    id: "rd-20261104-puente-barquita-restricciones",
    slug: "mopc-mantiene-restricciones-transito-puente-la-barquita",
    title: "MOPC mantiene restricciones de tránsito en el puente de La Barquita",
    dek: "Los vehículos pesados siguen fuera de la estructura; los livianos enfrentan cierres nocturnos y limitaciones durante el fin de semana por mantenimiento.",
    category: "Tránsito",
    author: "Redacción Actualizard",
    heroImage: "https://listindiario.com/files/article_main_microformat/uploads/2025/05/12/682289cca841e.jpeg",
    heroCaption: "Puente Gregorio Luperón, fotografía de archivo. Fuente: Listín Diario.",
    status: "published",
    confidence: 95,
    sourceCount: 1,
    createdAt: publishedAt,
    updatedAt: publishedAt,
    publishedAt,
    tags: ["La Barquita", "MOPC", "tránsito", "Santo Domingo Este"],
    blocks: [
      { type: "paragraph", text: "El Ministerio de Obras Públicas y Comunicaciones mantiene restricciones de circulación en el puente Gregorio Luperón, conocido como La Barquita, mientras ejecuta trabajos de mantenimiento y reforzamiento preventivo." },
      { type: "paragraph", text: "Diario Libre reportó que los vehículos pesados tienen prohibido circular por la estructura. Los vehículos livianos enfrentan cierres nocturnos de lunes a viernes y cierres desde el sábado en la tarde hasta el lunes a las 5:00 a. m. Durante esas ventanas solo pueden pasar motocicletas y peatones. Conviene confirmar avisos oficiales antes de trasladarse." },
      { type: "sources", items: [{ name: "Diario Libre", url: "https://www.diariolibre.com/actualidad/ciudad/2026/11/04/mopc-mantiene-restricciones-al-transito-en-el-puente-de-la-barquita/3711034" }] }
    ]
  },
  {
    id: "rd-20261104-interpol-operaciones-republica-dominicana",
    slug: "policia-captura-tres-requeridos-por-interpol-y-recibe-extraditado",
    title: "Policía captura a tres requeridos por Interpol y recibe un extraditado desde Argentina",
    dek: "La institución informó de arrestos vinculados a solicitudes de Francia, Países Bajos y Chile, además de la recepción de un dominicano extraditado.",
    category: "Seguridad",
    author: "Redacción Actualizard",
    heroImage: "https://almomento.net/wp-content/uploads/2022/06/Operativo-antidelincuencia-en-un-barrio-de-la-capital-dominicana..jpg",
    heroCaption: "Imagen de archivo de un patrullaje policial; no corresponde a estas capturas. Fuente: AlMomento.",
    status: "published",
    confidence: 95,
    sourceCount: 1,
    createdAt: publishedAt,
    updatedAt: publishedAt,
    publishedAt,
    tags: ["Policía Nacional", "Interpol", "cooperación internacional", "extradición"],
    blocks: [
      { type: "paragraph", text: "La Policía Nacional informó que capturó en el país a tres personas requeridas por autoridades judiciales de Francia, Países Bajos y Chile, y que recibió a un dominicano extraditado desde Argentina." },
      { type: "paragraph", text: "Los arrestos se realizaron en fechas y lugares distintos y responden a solicitudes judiciales internacionales. Las personas quedaron bajo custodia de las autoridades competentes para seguir los procedimientos legales. Las acusaciones mencionadas por la Policía no equivalen a una declaración de culpabilidad." },
      { type: "sources", items: [{ name: "Policía Nacional de la República Dominicana", url: "https://www.policianacional.gob.do/policia-captura-a-tres-profugos-buscados-por-interpol-en-francia-paises-bajos-y-chile-recibe-extraditado-desde-argentina/" }] }
    ]
  },
  {
    id: "rd-20261104-dominicanos-congreso-eeuu",
    slug: "tres-politicos-origen-dominicano-llegan-camara-representantes-eeuu",
    title: "Tres políticos de origen dominicano llegan a la Cámara de Representantes de EE. UU.",
    dek: "Manny Rutinel, Darializa Ávila Chevalier y Analilia Mejía obtuvieron representación por Colorado, Nueva York y Nueva Jersey.",
    category: "Diáspora",
    author: "Redacción Actualizard",
    heroImage: "https://resources.diariolibre.com/images/2026/11/04/tres-representantes-de-origen-dominicano-llegan-al-congreso-de-eeuu-89f01c47.png",
    heroCaption: "Manny Rutinel, Darializa Ávila Chevalier y Analilia Mejía. Foto tomada de sus redes, vía Diario Libre.",
    status: "published",
    confidence: 96,
    sourceCount: 1,
    createdAt: publishedAt,
    updatedAt: publishedAt,
    publishedAt,
    tags: ["diáspora dominicana", "elecciones de EE. UU.", "Congreso", "Cámara de Representantes"],
    blocks: [
      { type: "paragraph", text: "Tres políticos de ascendencia dominicana obtuvieron escaños en la Cámara de Representantes de Estados Unidos: Manny Rutinel por Colorado, Darializa Ávila Chevalier por Nueva York y Analilia Mejía por Nueva Jersey." },
      { type: "paragraph", text: "Diario Libre reportó que el resultado representa la mayor presencia dominicana simultánea en la Cámara Baja federal. Los escaños corresponden a distritos y campañas distintos, celebrados durante las elecciones de medio término del 3 de noviembre." },
      { type: "sources", items: [{ name: "Diario Libre", url: "https://diariolibre.com/usa/actualidad/2026/11/04/tres-representantes-de-origen-dominicano-llegan-al-congreso-de-eeuu/3710071" }] }
    ]
  },
  {
    id: "rd-20261104-fitch-calificacion-bb",
    slug: "fitch-eleva-calificacion-dominicana-bb-perspectiva-estable",
    title: "Fitch eleva la calificación soberana dominicana a BB con perspectiva estable",
    dek: "La agencia subió la nota desde BB- y proyectó un crecimiento económico de 4.5 % para 2026; también señaló desafíos fiscales pendientes.",
    category: "Economía",
    author: "Redacción Actualizard",
    heroImage: "https://resources.diariolibre.com/images/2026/04/28/10052025--crecimiento-de-la-ciudad-con-la-edificacion-en-santo-domingo-dania-acevedo21-a4664f1b.jpg",
    heroCaption: "Panorama urbano de Santo Domingo, fotografía de archivo. Fuente: Diario Libre.",
    status: "published",
    confidence: 95,
    sourceCount: 1,
    createdAt: publishedAt,
    updatedAt: publishedAt,
    publishedAt,
    tags: ["Fitch Ratings", "calificación soberana", "economía", "finanzas públicas"],
    blocks: [
      { type: "paragraph", text: "Fitch Ratings elevó la calificación de deuda soberana de largo plazo de República Dominicana de BB- a BB y mantuvo una perspectiva estable. La Presidencia informó que la agencia proyecta un crecimiento de 4.5 % para 2026." },
      { type: "paragraph", text: "La revisión reconoce perspectivas de crecimiento y fortalezas externas, pero la lectura de la calificadora también incluye riesgos estructurales y fiscales. Una mejora de nota es una evaluación de riesgo crediticio; no significa que hayan desaparecido los retos presupuestarios." },
      { type: "sources", items: [{ name: "Fitch Ratings, según publicación de la Presidencia", url: "https://www.presidencia.gob.do/noticias/fitch-ratings-eleva-la-calificacion-crediticia-de-la-republica-dominicana-bb-con" }] }
    ]
  },
  {
    id: "rd-20261104-pronostico-vaguada-5-noviembre",
    slug: "indomet-preve-aguaceros-y-tormentas-este-jueves-en-varias-provincias",
    title: "Indomet prevé aguaceros y tormentas este jueves en varias provincias",
    dek: "La vaguada y la humedad podrían generar lluvias moderadas a fuertes y ráfagas de viento; el organismo dijo que un sistema atlántico no amenaza al país.",
    category: "Meteorología",
    author: "Redacción Actualizard",
    heroImage: "https://resources.diariolibre.com/images/2026/10/09/08102026-recorrido-por-lluvia-en-santo-domingo-adriana-suels--29-772e57f7.jpg",
    heroCaption: "Una peatona se protege de la lluvia, fotografía de archivo. Fuente: Diario Libre.",
    status: "published",
    confidence: 95,
    sourceCount: 1,
    createdAt: publishedAt,
    updatedAt: publishedAt,
    publishedAt,
    tags: ["Indomet", "vaguada", "lluvias", "pronóstico", "República Dominicana"],
    blocks: [
      { type: "paragraph", text: "El Instituto Dominicano de Meteorología pronosticó aguaceros moderados a fuertes, tormentas eléctricas y ráfagas de viento para la tarde del jueves 5 de noviembre en varias provincias, debido a una vaguada y a la humedad atmosférica." },
      { type: "paragraph", text: "El pronóstico citado por Diario Libre incluye zonas del norte y noreste, entre otras demarcaciones. Indomet indicó que un área de baja presión en el Atlántico, por su ubicación y desplazamiento previsto, no representa peligro para República Dominicana. Las condiciones pueden cambiar; se recomienda consultar los boletines oficiales más recientes." },
      { type: "sources", items: [{ name: "Diario Libre, con pronóstico del Indomet", url: "https://diariolibre.azurewebsites.net/planeta/clima/2026/11/04/indomet-preve-aguaceros-para-esta-tarde-en-el-clima-en-rd/3710350" }] }
    ]
  },
  {
    id: "rd-20261104-subasta-aguacate-ocoa",
    slug: "subasta-80000-kilos-aguacate-ocoa-se-fijo-para-8-noviembre",
    title: "Ocoa prepara subasta de 80,000 kilos de aguacate para el 8 de noviembre",
    dek: "La venta judicial de frutos pendientes de cosecha busca cubrir una acreencia superior a RD$5 millones; no incluye la propiedad de la finca.",
    category: "Economía",
    author: "Redacción Actualizard",
    heroImage: "https://resources.diariolibre.com/images/2026/11/04/se-pueden-subastar-aguacates-que-siguen-en-los-arboles-a5a7a880.jpg",
    heroCaption: "Aguacates incluidos en el proceso judicial, fotografía de archivo. Fuente: Diario Libre.",
    status: "published",
    confidence: 95,
    sourceCount: 1,
    createdAt: publishedAt,
    updatedAt: publishedAt,
    publishedAt,
    tags: ["San José de Ocoa", "aguacate", "agricultura", "subasta judicial"],
    blocks: [
      { type: "paragraph", text: "Un proceso de ejecución judicial en San José de Ocoa contempla la subasta de 80,000 kilogramos de aguacates que permanecen en los árboles, prevista para el domingo 8 de noviembre. Diario Libre reportó que la medida busca saldar una acreencia superior a RD$5 millones." },
      { type: "paragraph", text: "El procedimiento se refiere a los frutos pendientes de cosecha y no implica por sí mismo la venta de la finca ni de los árboles. La subasta está sujeta a las formalidades legales correspondientes." },
      { type: "sources", items: [{ name: "Diario Libre", url: "https://b879be244561.diariolibre.com/actualidad/justicia/2026/11/04/se-pueden-subastar-aguacates-que-siguen-en-los-arboles/3709643" }] }
    ]
  },
  {
    id: "rd-20261104-ameripol-summit",
    slug: "santo-domingo-sera-sede-cumbre-ameripol-11-y-12-noviembre",
    title: "Santo Domingo será sede de la cumbre de Ameripol los días 11 y 12 de noviembre",
    dek: "La Policía Nacional anunció que autoridades de más de 30 países abordarán cooperación e intercambio de información frente al crimen organizado transnacional.",
    category: "Seguridad",
    author: "Redacción Actualizard",
    heroImage: "https://ameripol.org/media/image/publications/Respublica_Dominicana.jpeg",
    heroCaption: "Reunión regional de AMERIPOL en República Dominicana, fotografía de archivo. Fuente: AMERIPOL.",
    status: "published",
    confidence: 96,
    sourceCount: 1,
    createdAt: publishedAt,
    updatedAt: publishedAt,
    publishedAt,
    tags: ["Ameripol", "cooperación policial", "Santo Domingo", "seguridad regional"],
    blocks: [
      { type: "paragraph", text: "La Policía Nacional anunció que Santo Domingo acogerá la XVI Cumbre Ordinaria de la Comunidad de Policías de América (Ameripol) los días 11 y 12 de noviembre." },
      { type: "paragraph", text: "El encuentro reunirá a autoridades policiales de América Latina y el Caribe para intercambiar información y experiencias sobre amenazas transnacionales. El lema anunciado es «Respuesta regional ante las amenazas que desestabilizan la seguridad interior de los Estados»." },
      { type: "sources", items: [{ name: "Policía Nacional de la República Dominicana", url: "https://www.policianacional.gob.do/policia-nacional-anuncia-xvi-cumbre-ordinaria-de-ameripol-que-reunira-en-santo-domingo-a-jefes-policiales-de-america-latina-y-el-caribe/" }] }
    ]
  }
];
