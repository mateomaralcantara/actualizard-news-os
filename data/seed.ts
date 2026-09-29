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
    id: "launch-20260929-diligencias",
    slug: "diligencias-lanzamiento-plataforma-mandados-entregas-trabajo-independiente",
    title:
      "DILIGENCIAS inicia operaciones con una apuesta por transformar los mandados, las entregas y el trabajo independiente",
    dek:
      "La nueva plataforma busca conectar personas y negocios que necesitan resolver gestiones cotidianas con trabajadores independientes y propietarios de vehículos disponibles para ejecutarlas, bajo una visión centrada en tiempo, movilidad y nuevas oportunidades de ingreso.",
    category: "Negocios",
    author: "Redacción Actualizard",
    heroImage:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1600&q=80",
    heroCaption:
      "Imagen editorial ilustrativa. El artículo presenta los objetivos, la propuesta y las expectativas declaradas para el lanzamiento de DILIGENCIAS.",
    status: "published",
    confidence: 90,
    sourceCount: 1,
    createdAt: "2026-09-29T08:00:00-04:00",
    updatedAt: "2026-09-29T08:00:00-04:00",
    publishedAt: "2026-09-29T08:00:00-04:00",
    tags: [
      "DILIGENCIAS",
      "emprendimiento",
      "economía digital",
      "mensajería",
      "movilidad",
      "trabajo independiente",
      "República Dominicana"
    ],
    blocks: [
      {
        type: "paragraph",
        text:
          "DILIGENCIAS inicia operaciones con una idea sencilla en su formulación, pero ambiciosa en su alcance: que una persona o una empresa no tenga que detener su día para resolver cada compra, entrega, envío, trámite o gestión que aparece en la vida cotidiana. La plataforma pretende organizar digitalmente una actividad que ya existe en las ciudades —hacer diligencias para otros— y convertirla en una red capaz de conectar necesidades concretas con personas disponibles para resolverlas."
      },
      {
        type: "paragraph",
        text:
          "El proyecto parte de un problema reconocible. Buscar un documento, recoger una compra, entregar mercancía, llevar un paquete, retirar un artículo, realizar una gestión administrativa o mover un producto de un punto a otro puede consumir una o varias horas entre tránsito, desplazamientos y espera. Para quien trabaja, estudia, administra un negocio o tiene responsabilidades familiares, ese tiempo tiene un valor económico y personal. DILIGENCIAS quiere convertir esa pérdida de tiempo en una tarea delegable."
      },
      {
        type: "paragraph",
        text:
          "La propuesta no se limita a la mensajería tradicional. Su visión contempla un ecosistema de servicios de proximidad en el que una solicitud pueda ser atendida según el tipo de diligencia, la ubicación, la disponibilidad y el medio de transporte necesario. Una bicicleta puede resolver una entrega corta; una motocicleta o una passola puede atender documentos y compras pequeñas; un automóvil puede cubrir necesidades de mayor distancia o capacidad; y vehículos de mayor tamaño podrían incorporarse en servicios que requieran volumen adicional."
      },
      {
        type: "quote",
        text:
          "La idea central de DILIGENCIAS es conectar una necesidad real con una persona disponible para resolverla, utilizando la tecnología para organizar tiempo, movilidad y capacidad ociosa.",
        attribution: "Concepto de lanzamiento de DILIGENCIAS"
      },
      {
        type: "paragraph",
        text:
          "Uno de los objetivos centrales de la plataforma es devolver tiempo al usuario. En este modelo, el servicio no consiste únicamente en transportar un objeto: consiste en permitir que otra persona continúe con su jornada mientras una tarea concreta se ejecuta por ella. Para un profesional puede significar no abandonar una oficina; para una familia, evitar un desplazamiento innecesario; para un comerciante, mantener una operación funcionando mientras una entrega o gestión ocurre en paralelo."
      },
      {
        type: "paragraph",
        text:
          "El segundo objetivo está del lado de quienes prestarán los servicios. Miles de personas poseen motocicletas, passolas, bicicletas, automóviles u otros vehículos que permanecen parte del día sin producir ingresos. DILIGENCIAS aspira a convertir parte de esa capacidad disponible en oportunidades de trabajo flexible. La expectativa es que una persona pueda conectarse cuando tenga disponibilidad, aceptar servicios compatibles con su ubicación y su medio de transporte y generar ingresos sin depender necesariamente de una jornada rígida."
      },
      {
        type: "paragraph",
        text:
          "La plataforma también mira hacia pequeños negocios, profesionales y empresas que necesitan logística, pero que no siempre justifican mantener una flotilla propia o un mensajero permanente. Una tienda puede requerir entregas durante determinadas horas; una oficina puede necesitar mover documentos; un emprendimiento digital puede despachar productos; y una empresa puede requerir gestiones específicas sin ampliar su estructura fija. En ese segmento, DILIGENCIAS busca funcionar como una red logística bajo demanda."
      },
      {
        type: "paragraph",
        text:
          "La tecnología será el mecanismo de coordinación, pero la confianza será el verdadero capital de la plataforma. Para crecer, DILIGENCIAS tendrá que demostrar que puede identificar adecuadamente a los participantes, registrar operaciones, permitir seguimiento, manejar incidencias y construir reputación entre usuarios y prestadores. La rapidez es importante, pero una plataforma que mueve productos, documentos y encargos personales necesita combinar velocidad con trazabilidad y responsabilidad."
      },
      {
        type: "paragraph",
        text:
          "Otro desafío será alcanzar densidad operativa. Una plataforma de dos lados necesita suficientes solicitudes para que quienes ofrecen el servicio encuentren oportunidades y suficientes prestadores para que quien solicita una diligencia reciba respuesta rápida. Tener cobertura nominal en muchas zonas vale menos que disponer de una red activa en los lugares donde se promete servicio. El crecimiento, por tanto, dependerá de equilibrar oferta y demanda."
      },
      {
        type: "bullets",
        items: [
          "Reducir el tiempo que personas y negocios dedican a gestiones que pueden delegarse.",
          "Crear oportunidades de ingreso flexible para propietarios de distintos medios de transporte.",
          "Ofrecer a comercios y empresas una red logística utilizable cuando la necesiten.",
          "Organizar mediante tecnología un mercado de mandados y diligencias que hoy funciona de forma fragmentada.",
          "Construir una marca asociada a rapidez, confianza, disponibilidad y trazabilidad.",
          "Desarrollar progresivamente una red capaz de atender desde encargos simples hasta necesidades logísticas más amplias."
        ]
      },
      {
        type: "paragraph",
        text:
          "La expectativa de largo plazo es que DILIGENCIAS deje de percibirse únicamente como una aplicación que se utiliza para enviar paquetes y se convierta en una herramienta cotidiana para resolver necesidades urbanas. El escenario al que apunta es sencillo de describir: cuando una persona piense «necesito que alguien me resuelva esto», la plataforma quiere estar entre las primeras opciones que considere."
      },
      {
        type: "paragraph",
        text:
          "Ese objetivo abre un mercado mayor que el de las entregas. Una red suficientemente amplia podría atender rutas programadas, encargos recurrentes, distribución de última milla, apoyo logístico a comercios y otras actividades que todavía se coordinan mediante llamadas, contactos informales o soluciones dispersas. En ese punto, el activo más importante de DILIGENCIAS no sería una función específica de la aplicación, sino la calidad y amplitud de su red."
      },
      {
        type: "paragraph",
        text:
          "El lanzamiento, sin embargo, es apenas el comienzo. El éxito no puede medirse solamente por descargas, registros o presencia en redes sociales. La prueba real será operativa: cuántas solicitudes pueden resolverse, cuánto tarda la respuesta, qué tan confiable es el servicio, cuánto valor genera para los prestadores y cuántos usuarios deciden volver después de su primera experiencia."
      },
      {
        type: "paragraph",
        text:
          "DILIGENCIAS entra así en un espacio donde convergen economía digital, movilidad urbana, logística y trabajo independiente. Su propuesta parte de una premisa concreta: en una ciudad existen simultáneamente personas con necesidades por resolver y personas con tiempo, movilidad y capacidad para resolverlas. La plataforma quiere convertirse en el puente entre ambas."
      },
      {
        type: "paragraph",
        text:
          "Si logra construir una red suficiente, ofrecer tiempos razonables, mantener costos competitivos y desarrollar mecanismos sólidos de confianza, DILIGENCIAS podría evolucionar de un servicio de mandados hacia una infraestructura flexible de soluciones cotidianas para personas y empresas. Esa es, por ahora, su principal expectativa y también su mayor desafío."
      },
      {
        type: "paragraph",
        text:
          "Este artículo de lanzamiento se basa en la descripción, objetivos y expectativas declaradas para el proyecto DILIGENCIAS. Las metas de crecimiento, cobertura y adopción corresponden a aspiraciones de la plataforma y deberán evaluarse conforme avance su operación."
      }
    ]
  },

  {
    id: "live-20260929-markets",
    slug: "mercados-globales-presion-bonos-petroleo-29-septiembre-2026",
    title:
      "Bonos y petróleo elevan la presión sobre los mercados globales al cierre de septiembre",
    dek:
      "Los rendimientos soberanos de Estados Unidos subieron con fuerza mientras el crudo siguió encareciéndose, una combinación que vuelve a colocar inflación, tasas y costo del financiamiento en el centro de la agenda económica.",
    category: "Geoeconomía",
    author: "Redacción Actualizard",
    heroImage:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80",
    heroCaption: ILLUSTRATIVE,
    status: "published",
    confidence: 94,
    sourceCount: 2,
    createdAt: "2026-09-29T08:00:00-04:00",
    updatedAt: "2026-09-29T09:30:00-04:00",
    publishedAt: "2026-09-29T08:00:00-04:00",
    tags: ["mercados", "bonos", "petróleo", "tasas", "inflación"],
    blocks: [
      {
        type: "paragraph",
        text:
          "Los mercados globales cerraron septiembre bajo una combinación particularmente incómoda para inversionistas y bancos centrales: petróleo caro y rendimientos de bonos soberanos en niveles no vistos en muchos años. Reuters informó que el rendimiento del bono del Tesoro estadounidense a 10 años superó 5.27 %, un máximo de 19 años, mientras el bono a dos años se acercó a 5 %. Cuando los rendimientos suben de esa manera, el mercado está exigiendo una mayor compensación por prestar dinero y, al mismo tiempo, está reflejando expectativas de inflación y tasas más altas durante más tiempo."
      },
      {
        type: "paragraph",
        text:
          "Ese movimiento no se queda dentro de Wall Street. Los bonos del Tesoro sirven como referencia para gran parte del sistema financiero mundial. Una subida sostenida puede trasladarse al costo de las hipotecas, al financiamiento corporativo, a la deuda pública y a las condiciones de crédito. Para los gobiernos también significa una factura de intereses mayor cuando refinancian obligaciones; para las empresas, proyectos de inversión más costosos; y para los hogares, menos margen para consumir o endeudarse."
      },
      {
        type: "paragraph",
        text:
          "El segundo frente es la energía. El Brent cotizaba alrededor de US$106.77 por barril y el WTI cerca de US$93.94 durante la jornada, según Reuters. Aunque las exportaciones de grandes productores de Oriente Medio han mostrado recuperación, parte de ese flujo depende de rutas y operaciones más costosas. La incertidumbre sobre el estrecho de Ormuz mantiene una prima de riesgo sobre el petróleo porque se trata de una de las principales vías marítimas para el comercio global de crudo y gas."
      },
      {
        type: "paragraph",
        text:
          "La relación entre petróleo y tasas es clave. Cuando suben de forma persistente los combustibles y los costos de transporte, pueden aumentar los precios de bienes, producción y logística. Si los bancos centrales interpretan ese impulso como una amenaza para la estabilidad de precios, disponen de menos espacio para reducir tasas. El resultado puede ser una economía que enfrenta simultáneamente energía cara y crédito caro."
      },
      {
        type: "paragraph",
        text:
          "En renta variable, ese escenario suele castigar especialmente a empresas cuyo valor depende de ganancias esperadas a largo plazo, porque esas ganancias se descuentan a tasas más elevadas. También puede favorecer temporalmente activos con flujos más inmediatos o sectores relacionados con energía. No obstante, la reacción del mercado no es automática: depende de la duración del choque, del crecimiento económico y de cómo respondan la Reserva Federal y otros bancos centrales."
      },
      {
        type: "bullets",
        items: [
          "Tesoro estadounidense a 10 años: por encima de 5.27 % durante la jornada.",
          "Brent: alrededor de US$106.77 por barril; WTI: cerca de US$93.94.",
          "El mercado mantiene expectativas de política monetaria restrictiva durante más tiempo.",
          "La energía y el estrecho de Ormuz siguen siendo factores relevantes para inflación y comercio mundial."
        ]
      },
      {
        type: "paragraph",
        text:
          "Para economías importadoras de combustibles, incluida República Dominicana, el punto de observación no es solo el precio internacional del barril. También importan el dólar, los costos de transporte, los mecanismos internos de fijación de combustibles y el efecto indirecto sobre electricidad, alimentos y logística. Por eso un movimiento prolongado en petróleo y tasas internacionales puede terminar sintiéndose lejos de los grandes centros financieros."
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
      "Los contactos indirectos buscan reducir un conflicto que ha alterado rutas energéticas y comercio internacional; sanciones, activos congelados, seguridad marítima y el programa nuclear siguen entre los puntos centrales.",
    category: "Geopolítica",
    author: "Redacción Actualizard",
    heroImage:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1600&q=80",
    heroCaption: ILLUSTRATIVE,
    status: "published",
    confidence: 92,
    sourceCount: 2,
    createdAt: "2026-09-29T07:40:00-04:00",
    updatedAt: "2026-09-29T09:30:00-04:00",
    publishedAt: "2026-09-29T07:40:00-04:00",
    tags: ["Estados Unidos", "Irán", "Ormuz", "diplomacia"],
    blocks: [
      {
        type: "paragraph",
        text:
          "Estados Unidos e Irán volvieron a utilizar mediadores para explorar una salida negociada a un conflicto que lleva meses y que ha tenido efectos más allá del terreno militar. Reuters y Associated Press informaron que representantes de ambas partes hablaron por separado con intermediarios mientras se discutía una versión revisada de una propuesta iraní presentada durante la Asamblea General de las Naciones Unidas."
      },
      {
        type: "paragraph",
        text:
          "El centro de la negociación es más amplio que un simple alto el fuego. La propuesta iraní vincula el cese de hostilidades con el levantamiento de sanciones sobre ventas de petróleo, el desbloqueo de activos iraníes y cambios en el bloqueo estadounidense de puertos. Irán plantea a cambio restablecer el paso marítimo por el estrecho de Ormuz y reanudar conversaciones sobre su programa nuclear. Washington ha mostrado reservas sobre varias de esas condiciones."
      },
      {
        type: "paragraph",
        text:
          "El estrecho de Ormuz explica por qué una negociación regional tiene consecuencias globales. Es una vía esencial para el movimiento de petróleo y gas desde el Golfo Pérsico hacia mercados internacionales. Cuando su funcionamiento se reduce o se vuelve incierto, suben los costos de transporte, seguros y desvíos de cargamentos; esa presión puede trasladarse a combustibles e inflación en países que no participan directamente en el conflicto."
      },
      {
        type: "paragraph",
        text:
          "La desconfianza acumulada complica la negociación. Reuters señala que dos ceses de hostilidades anteriores, alcanzados mediante mediación en abril y junio, se deshicieron rápidamente. Ese antecedente significa que un nuevo entendimiento tendría que resolver no solo qué promete cada parte, sino también cómo se verifica el cumplimiento, qué ocurre primero y qué mecanismos se activarían ante una nueva violación."
      },
      {
        type: "paragraph",
        text:
          "El componente nuclear sigue siendo otro punto sensible. La discusión abarca la posibilidad de reanudar conversaciones sobre el programa iraní, las inspecciones y el material altamente enriquecido. Para Estados Unidos, cualquier arreglo sostenible tendría que responder a sus preocupaciones sobre proliferación. Para Irán, las sanciones, los activos congelados y su capacidad de comerciar petróleo son elementos fundamentales de la negociación."
      },
      {
        type: "paragraph",
        text:
          "Por ahora, el dato central es que existe un canal diplomático, no que exista un acuerdo. Los mediadores intentan acercar posiciones que siguen alejadas y las declaraciones públicas de ambos gobiernos continúan siendo duras. En una negociación de este tipo, la reapertura estable de rutas marítimas o un calendario verificable de medidas tendría más peso que las señales retóricas aisladas."
      },
      {
        type: "bullets",
        items: [
          "Las conversaciones son indirectas y están siendo facilitadas por mediadores.",
          "Ormuz, sanciones petroleras, activos congelados y el programa nuclear forman parte del paquete negociador.",
          "Acuerdos anteriores de cese de hostilidades no se mantuvieron.",
          "No existe todavía un acuerdo definitivo anunciado por ambas partes."
        ]
      },
      {
        type: "sources",
        items: [
          {
            name: "Reuters — U.S., Iran separately talk with mediators",
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
      "La 81.ª sesión llega marcada por reclamos de mayor representación, cuestionamientos al funcionamiento del Consejo de Seguridad y una agenda internacional dominada por guerras, inteligencia artificial y presiones sobre el multilateralismo.",
    category: "Mundo",
    author: "Redacción Actualizard",
    heroImage:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1600&q=80",
    heroCaption: ILLUSTRATIVE,
    status: "published",
    confidence: 93,
    sourceCount: 3,
    createdAt: "2026-09-29T07:20:00-04:00",
    updatedAt: "2026-09-29T09:30:00-04:00",
    publishedAt: "2026-09-29T07:20:00-04:00",
    tags: ["ONU", "Asamblea General", "multilateralismo", "reforma"],
    blocks: [
      {
        type: "paragraph",
        text:
          "La 81.ª sesión de la Asamblea General de las Naciones Unidas comenzó el 8 de septiembre de 2026 y se desarrollará hasta septiembre de 2027. El tema elegido para el período es restaurar la confianza y gestionar la transformación para que la ONU produzca resultados para todos, una formulación que refleja una preocupación de fondo: la organización sigue siendo el foro universal más amplio del sistema internacional, pero enfrenta cuestionamientos sobre su capacidad para responder con rapidez a crisis cada vez más complejas."
      },
      {
        type: "paragraph",
        text:
          "A diferencia del Consejo de Seguridad, la Asamblea General reúne a los 193 Estados miembros en condiciones formales de igualdad, con un voto por país. Esa amplitud le da legitimidad política y capacidad para fijar agendas, aunque muchas de sus resoluciones no tengan el carácter obligatorio de las decisiones adoptadas por el Consejo de Seguridad bajo determinadas disposiciones de la Carta."
      },
      {
        type: "paragraph",
        text:
          "Uno de los debates estructurales volvió a ser la reforma del Consejo de Seguridad. El presidente de la Asamblea General ha defendido un órgano más representativo, transparente y ajustado a la realidad geopolítica actual, con especial atención a la subrepresentación africana. La discusión no es nueva, pero cobra más fuerza cuando conflictos prolongados dejan expuestas las limitaciones del sistema de veto y la dificultad para producir consensos entre las grandes potencias."
      },
      {
        type: "paragraph",
        text:
          "La semana de alto nivel tampoco produjo soluciones inmediatas para los principales conflictos. Reuters describió avances modestos en contactos vinculados con Irán y Ucrania, pero sin grandes rupturas diplomáticas. Esa diferencia entre la intensidad de la actividad diplomática y la dificultad para cerrar acuerdos explica parte del debate sobre la efectividad del multilateralismo."
      },
      {
        type: "paragraph",
        text:
          "La inteligencia artificial ganó una visibilidad excepcional dentro de la agenda. Gobiernos, organismos internacionales y líderes empresariales discutieron riesgos, seguridad y cooperación internacional. Esto muestra una ampliación del concepto tradicional de seguridad: además de guerras, armas y fronteras, los Estados están tratando como asuntos internacionales tecnologías capaces de afectar infraestructura, información, economía y administración pública."
      },
      {
        type: "paragraph",
        text:
          "La ONU también enfrenta un problema de capacidad institucional. Presiones financieras, menor confianza entre bloques políticos y múltiples crisis simultáneas limitan su margen de acción. Reformar el sistema, sin embargo, exige acuerdos entre los mismos Estados cuyos intereses son diferentes. Esa paradoja explica por qué muchas propuestas de reforma acumulan años de discusión."
      },
      {
        type: "paragraph",
        text:
          "El punto a observar durante esta sesión no será únicamente la cantidad de discursos o reuniones, sino si los Estados logran convertir algunos de esos consensos generales en mecanismos concretos: reglas sobre inteligencia artificial, acuerdos humanitarios, reformas de representación o compromisos verificables en conflictos abiertos."
      },
      {
        type: "sources",
        items: [
          {
            name: "Naciones Unidas — 81.º período de sesiones",
            url: "https://www.un.org/es/ga/81/"
          },
          {
            name: "Presidencia de la Asamblea General — Apertura del debate general",
            url:
              "https://www.un.org/pga/81/documents/speeches/general-debate-opening-22-september-2026/"
          },
          {
            name: "Reuters — Six big takeaways from a turbulent week of UN diplomacy",
            url:
              "https://www.reuters.com/world/americas/six-big-takeaways-turbulent-week-un-diplomacy-2026-09-26/"
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
      "La propuesta remitida al Congreso combina una proyección de crecimiento real de 4.75 % con mayores partidas sociales y obras de transporte, agua, vivienda y energía; ahora comienza su discusión legislativa.",
    category: "Política",
    author: "Redacción Actualizard",
    heroImage:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1600&q=80",
    heroCaption: ILLUSTRATIVE,
    status: "published",
    confidence: 96,
    sourceCount: 2,
    createdAt: "2026-09-25T11:30:00-04:00",
    updatedAt: "2026-09-29T09:30:00-04:00",
    publishedAt: "2026-09-25T11:30:00-04:00",
    tags: ["Presupuesto 2027", "Congreso", "educación", "salud", "República Dominicana"],
    blocks: [
      {
        type: "paragraph",
        text:
          "El Poder Ejecutivo remitió al Congreso Nacional el Proyecto de Ley de Presupuesto General del Estado para 2027. La entrega inicia la etapa legislativa de un documento que no solo autoriza gastos: también revela las prioridades del Gobierno, los supuestos con los que espera que se comporte la economía y la forma en que pretende financiar los compromisos del próximo año."
      },
      {
        type: "paragraph",
        text:
          "En términos consolidados, la Presidencia informó erogaciones por RD$2.084 billones, ingresos por RD$1.620 billones y un techo de gasto de RD$1.945 billones. El proyecto utiliza como escenario una expansión real de la economía de 4.75 % y una inflación promedio de 4.5 % en 2027. Como toda proyección presupuestaria, estas cifras dependen de que variables como crecimiento, recaudación, tasas y precios internacionales no se desvíen de forma significativa."
      },
      {
        type: "paragraph",
        text:
          "La dimensión social ocupa una parte importante de la propuesta. Los servicios sociales concentran RD$907,116.9 millones, equivalentes al 46.6 % del techo de gasto consolidado del Gobierno General Nacional. Educación, salud y protección social representan conjuntamente cerca del 43 % del presupuesto, según la información oficial."
      },
      {
        type: "paragraph",
        text:
          "En educación, la función recibe RD$364,399.5 millones. El Ministerio de Educación y el Mescyt concentran RD$391,303.1 millones a nivel del Gobierno central. La propuesta incluye RD$30,814.5 millones para alimentación escolar dirigida a cerca de 1.96 millones de estudiantes y RD$4,134 millones para servicios de apoyo estudiantil a población vulnerable."
      },
      {
        type: "paragraph",
        text:
          "Para Salud Pública se contemplan RD$198,727 millones, con énfasis en el primer nivel de atención y la red hospitalaria. En protección social, incluyendo pensiones, asistencia y vivienda social, la propuesta señala RD$317,340.6 millones. Estas asignaciones ayudan a entender la orientación del proyecto, pero su impacto final dependerá de la ejecución efectiva y no únicamente del monto aprobado."
      },
      {
        type: "paragraph",
        text:
          "El componente de infraestructura incluye RD$6,371 millones para el monorriel de Santiago, RD$1,465.6 millones para la ampliación de la Línea 2 del Metro de Santo Domingo y RD$1,565 millones para obras de resiliencia climática en infraestructura vial. La función transporte recibe RD$113,434.2 millones. También aparecen partidas para redes eléctricas, la presa Monte Grande, reducción de pérdidas técnicas, agua potable y el programa habitacional Mi Vivienda."
      },
      {
        type: "paragraph",
        text:
          "El proyecto debe ser evaluado ahora por el Congreso. Durante esa etapa pueden discutirse montos, prioridades, fuentes de financiamiento y modificaciones. Por eso conviene distinguir entre el presupuesto depositado y el presupuesto finalmente aprobado y ejecutado: son tres momentos distintos del ciclo fiscal."
      },
      {
        type: "paragraph",
        text:
          "El contexto macroeconómico será determinante. El Banco Central reportó inflación interanual de 5.13 % en agosto y mantiene una tasa de política monetaria de 5.25 % en septiembre. Si el costo del financiamiento internacional, el petróleo o la inflación cambian de forma importante, pueden afectar tanto ingresos como gastos públicos y modificar el escenario sobre el cual fue elaborado el presupuesto."
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
      "Banco Central reporta inflación interanual de 5.13 % y mantiene la atención sobre precios y actividad",
    dek:
      "El IPC subió 0.38 % en agosto y la inflación interanual descendió por segundo mes consecutivo, mientras la economía mantiene señales de crecimiento y la política monetaria continúa siendo restrictiva.",
    category: "RD",
    author: "Redacción Actualizard",
    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    heroCaption: ILLUSTRATIVE,
    status: "published",
    confidence: 98,
    sourceCount: 2,
    createdAt: "2026-09-29T06:40:00-04:00",
    updatedAt: "2026-09-29T09:30:00-04:00",
    publishedAt: "2026-09-29T06:40:00-04:00",
    tags: ["Banco Central", "inflación", "IMAE", "tasa de interés", "RD"],
    blocks: [
      {
        type: "paragraph",
        text:
          "El índice de precios al consumidor aumentó 0.38 % en agosto de 2026 y la inflación interanual se situó en 5.13 %, según el Banco Central de la República Dominicana. Aunque esa tasa sigue ligeramente por encima del límite superior de la meta de 4.0 % ± 1.0 %, el BCRD destacó que la inflación interanual bajó por segundo mes consecutivo desde el 5.67 % registrado en junio."
      },
      {
        type: "paragraph",
        text:
          "La inflación subyacente, una medida que excluye algunos componentes de alta volatilidad o precios regulados para observar mejor la tendencia interna, se situó en 4.76 % interanual. Esa diferencia entre inflación general y subyacente ayuda a separar movimientos temporales de combustibles o alimentos de presiones más persistentes dentro de la economía."
      },
      {
        type: "paragraph",
        text:
          "Los grupos que más incidieron en la inflación mensual fueron alimentos y bebidas no alcohólicas, educación, transporte, bienes y servicios diversos, restaurantes y hoteles, y muebles y artículos para el hogar. En alimentos, el Banco Central señaló aumentos en productos como papas, pollo fresco, arroz, agua purificada, hortalizas, guandules verdes, refrescos y chinolas."
      },
      {
        type: "paragraph",
        text:
          "El comportamiento tampoco fue idéntico en todo el país. El BCRD reportó una variación mensual de 0.49 % en la región Norte o Cibao, 0.46 % en el Sur, 0.34 % en el Este y 0.29 % en la región Ozama. Esto importa porque una tasa nacional promedio puede ocultar diferencias en el costo de vida según territorio, composición del consumo y precios de productos específicos."
      },
      {
        type: "paragraph",
        text:
          "En actividad económica, el Banco Central había informado que el IMAE creció 4.6 % interanual en julio y 4.5 % en promedio durante los primeros siete meses del año. Entre los sectores con mejor desempeño figuraban construcción, manufactura de zonas francas, manufactura local y varios servicios, incluidos financieros, hoteles, bares y restaurantes."
      },
      {
        type: "paragraph",
        text:
          "La tasa de política monetaria aparece en 5.25 % para septiembre. Esa tasa funciona como una referencia para las condiciones monetarias y termina influyendo, junto con la liquidez, el riesgo y la competencia bancaria, sobre tasas de préstamos y depósitos. El propio portal del Banco Central muestra para agosto tasas activas promedio de la banca múltiple superiores a la tasa de política monetaria, lo que recuerda que la transmisión hacia consumidores y empresas no es uno a uno."
      },
      {
        type: "paragraph",
        text:
          "Para hogares y empresas, la lectura más útil es doble: la inflación está mostrando señales de moderación desde niveles recientes más altos, pero todavía no ha desaparecido como problema. Al mismo tiempo, el crecimiento económico ofrece soporte a ingresos y empleo, aunque tasas elevadas pueden limitar crédito, inversión y consumo."
      },
      {
        type: "sources",
        items: [
          {
            name: "BCRD — IPC de agosto 2026",
            url:
              "https://www.bancentral.gov.do/a/d/6653-bcrd-informa-que-la-variacion-del-ipc-en-agosto-2026-fue-de-038-"
          },
          {
            name: "BCRD — Economía dominicana creció 4.6 % interanual en julio",
            url:
              "https://bancentral.gov.do/a/d/6644-economia-dominicana-experimento-un-crecimiento-interanual-de-46--en-julio"
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
      "La DGA reportó RD$66.45 millones en diferencias de impuestos determinadas entre enero y agosto y explicó que mantiene fiscalizaciones posteriores al despacho para revisar declaraciones y obligaciones aduaneras.",
    category: "RD",
    author: "Redacción Actualizard",
    heroImage:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1600&q=80",
    heroCaption: ILLUSTRATIVE,
    status: "published",
    confidence: 97,
    sourceCount: 1,
    createdAt: "2026-09-22T15:00:00-04:00",
    updatedAt: "2026-09-29T09:30:00-04:00",
    publishedAt: "2026-09-22T15:00:00-04:00",
    tags: ["Aduanas", "impuestos", "fiscalización", "La Vega"],
    blocks: [
      {
        type: "paragraph",
        text:
          "La Dirección General de Aduanas informó que las fiscalizaciones post despacho realizadas entre enero y agosto de 2026 determinaron RD$66,451,346 en diferencias de impuestos en operaciones relacionadas con empresas de capital asiático. Al momento del reporte, la institución registraba 14 casos finalizados y 51 casos todavía en proceso."
      },
      {
        type: "paragraph",
        text:
          "La fiscalización post despacho ocurre después de que una mercancía ya ha sido liberada. Su propósito es comprobar posteriormente si la clasificación, el valor declarado, el origen, las exenciones y los impuestos aplicados fueron correctos. Este tipo de revisión permite a una administración aduanera controlar operaciones sin detener físicamente cada carga durante largos períodos en puertos y aeropuertos."
      },
      {
        type: "paragraph",
        text:
          "La DGA informó además intervenciones de fiscalización en establecimientos comerciales ubicados en Moca, provincia Espaillat, y en La Vega. Estas actuaciones forman parte de sus mecanismos de verificación tributaria y aduanera y pueden implicar revisión documental, trazabilidad de importaciones y comparación entre declaraciones y operaciones comerciales."
      },
      {
        type: "paragraph",
        text:
          "Es importante interpretar correctamente la cifra divulgada. Una diferencia de impuestos determinada por la autoridad administrativa indica que la DGA entiende que existe una obligación fiscal adicional, pero no equivale automáticamente a una condena penal ni permite generalizar sobre todos los negocios de un origen nacional o de capital determinado. Cada expediente tiene que ser analizado conforme al procedimiento correspondiente."
      },
      {
        type: "paragraph",
        text:
          "Para el comercio formal, la fiscalización post despacho tiene otro efecto: busca reducir ventajas obtenidas mediante subvaloración, clasificación incorrecta u otras inconsistencias que puedan afectar la competencia. El desafío institucional es aplicar estos controles con criterios técnicos, trazabilidad y debido proceso para evitar que la fiscalización se convierta en incertidumbre para operadores que cumplen."
      },
      {
        type: "paragraph",
        text:
          "La noticia también muestra cómo ha evolucionado el control aduanero. El enfoque moderno no depende únicamente de inspeccionar contenedores en frontera; combina gestión de riesgo, datos, auditoría posterior y verificación de operaciones. Eso permite concentrar recursos en transacciones consideradas de mayor riesgo y facilitar las de operadores con historial de cumplimiento."
      },
      {
        type: "sources",
        items: [
          {
            name: "Dirección General de Aduanas — Fiscalizaciones post despacho, 22 de septiembre de 2026",
            url:
              "https://www.aduanas.gob.do/noticias/dga-determina-mas-de-rd-66-millones-en-diferencias-de-impuestos-a-comercios-de-capital-asiatico/"
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
      "Los nuevos modelos apuntan a agentes de voz que pueden mantener conversaciones fluidas, interpretar contexto visual, cambiar entre idiomas y ejecutar herramientas mientras la conversación continúa.",
    category: "IA",
    author: "Actualizard Tecnología",
    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    heroCaption: ILLUSTRATIVE,
    status: "published",
    confidence: 98,
    sourceCount: 2,
    createdAt: "2026-09-15T13:00:00-04:00",
    updatedAt: "2026-09-29T09:30:00-04:00",
    publishedAt: "2026-09-15T13:00:00-04:00",
    tags: ["Gemini", "Google", "IA", "voz", "agentes"],
    blocks: [
      {
        type: "paragraph",
        text:
          "Google presentó Gemini 3.8 Live y Gemini 3.8 Live Extended Thinking como una nueva generación de modelos orientados a diálogo de voz y ejecución de tareas en tiempo casi real. La diferencia principal frente a un chatbot tradicional no es solamente que responden por voz: están diseñados para mantener una conversación mientras interpretan información visual y coordinan acciones mediante herramientas."
      },
      {
        type: "paragraph",
        text:
          "Gemini 3.8 Live está orientado a escala y eficiencia, mientras Extended Thinking se enfoca en tareas de mayor complejidad y razonamiento de varios pasos. En la práctica, eso permite separar experiencias que necesitan mucha concurrencia y baja latencia de aquellas donde el usuario acepta más procesamiento a cambio de una respuesta más elaborada."
      },
      {
        type: "paragraph",
        text:
          "Uno de los cambios más relevantes es la ejecución asíncrona de herramientas. Google explica que el modelo puede iniciar llamadas a herramientas o APIs y continuar la conversación mientras esas operaciones terminan. Para un agente real esto es importante: evita que cada consulta externa convierta la experiencia en una secuencia de silencios y esperas."
      },
      {
        type: "paragraph",
        text:
          "También incorpora grounding visual en tiempo casi real. Eso significa que una cámara o flujo visual puede convertirse en parte del contexto de la conversación. Un sistema de soporte podría, por ejemplo, observar un equipo, una interfaz o un documento y utilizar esa información para responder de manera más situada."
      },
      {
        type: "paragraph",
        text:
          "Google afirma que Gemini 3.8 Live puede detectar y cambiar entre 97 idiomas durante una misma conversación. Esa capacidad tiene especial valor para productos globales, centros de atención, educación y asistentes personales, donde el usuario puede mezclar idiomas o cambiar de lengua sin reiniciar el contexto."
      },
      {
        type: "paragraph",
        text:
          "Extended Thinking añade una capa de razonamiento más profundo para flujos complejos. La compañía muestra ejemplos como coordinación de reservas, transformación de bocetos y retroalimentación verbal en componentes funcionales y generación de planes de negocio mientras la conversación se mantiene activa."
      },
      {
        type: "paragraph",
        text:
          "Para empresas y desarrolladores, la oportunidad viene acompañada de nuevos retos: control de permisos, registro de acciones, manejo de errores, privacidad de audio y video y límites sobre qué herramientas puede ejecutar un agente. El modelo puede ser más capaz, pero la seguridad de un sistema productivo depende también de la arquitectura que rodea al modelo."
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
      "Gemini amplía sus aplicaciones conectadas y avanza hacia un asistente que opera sobre servicios externos",
    dek:
      "La nueva ola de integraciones incluye herramientas de productividad, creatividad y estilo de vida; el cambio refuerza la transición desde el chatbot que responde hacia el asistente que también ejecuta tareas.",
    category: "Tecnología",
    author: "Actualizard Tecnología",
    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    heroCaption: ILLUSTRATIVE,
    status: "published",
    confidence: 98,
    sourceCount: 1,
    createdAt: "2026-09-23T14:00:00-04:00",
    updatedAt: "2026-09-29T09:30:00-04:00",
    publishedAt: "2026-09-23T14:00:00-04:00",
    tags: ["Gemini", "apps", "productividad", "Adobe", "Webflow"],
    blocks: [
      {
        type: "paragraph",
        text:
          "Google comenzó a desplegar una nueva ola de aplicaciones conectadas dentro de Gemini. La lista incluye Airtable, Linear, monday.com, PandaDoc, Wispr AI y Zoho para productividad; Adobe, Picsart, Squarespace y Webflow para creatividad; y servicios como apartments.com, Experian, Peloton y SeatGeek en categorías de vida cotidiana."
      },
      {
        type: "paragraph",
        text:
          "La importancia del anuncio no está únicamente en la cantidad de marcas. El modelo de uso cambia cuando la inteligencia artificial puede trabajar con una aplicación externa en lugar de limitarse a explicar qué debería hacer el usuario. El objetivo es reducir cambios de contexto entre pestañas, copiar y pegar información y repetir instrucciones en múltiples interfaces."
      },
      {
        type: "paragraph",
        text:
          "En productividad, una integración puede permitir que una conversación termine convertida en una tarea, un registro estructurado o una acción dentro de una herramienta de gestión. En creatividad, el flujo puede pasar de una idea escrita a un activo visual o una actualización de un sitio web. El valor real dependerá de qué acciones estén disponibles en cada integración y de los permisos concedidos por el usuario."
      },
      {
        type: "paragraph",
        text:
          "Ese último punto es fundamental. Un asistente conectado a servicios externos puede ser más útil, pero también maneja más contexto y puede actuar sobre sistemas que contienen información personal o empresarial. Por eso la experiencia debe dejar claro qué aplicación se está usando, qué datos recibe y qué acción se va a ejecutar."
      },
      {
        type: "paragraph",
        text:
          "Google indica que las conexiones se administran desde la configuración de Gemini y también pueden invocarse desde el chat mediante menciones o peticiones directas. El despliegue es progresivo, por lo que no todas las integraciones necesariamente aparecen al mismo tiempo para todos los usuarios, cuentas o regiones."
      },
      {
        type: "paragraph",
        text:
          "A nivel de industria, la tendencia es clara: los grandes asistentes de IA compiten cada vez menos solo por la calidad de una respuesta aislada y más por su capacidad para convertirse en una capa de trabajo entre distintas aplicaciones. Esa evolución acerca el concepto de agente digital, pero también vuelve más importantes la autenticación, los permisos, la trazabilidad y la confirmación de acciones sensibles."
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
      "Gemini 3.8 Live with Live Avatar combina conversación, visión y presencia visual en tiempo casi real",
    dek:
      "La propuesta de Google une diálogo en vivo con video de baja latencia para crear agentes visuales capaces de escuchar, observar, hablar y ejecutar herramientas sin detener la conversación.",
    category: "Video",
    author: "Actualizard Video",
    heroImage:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=80",
    heroCaption: ILLUSTRATIVE,
    status: "published",
    confidence: 98,
    sourceCount: 1,
    createdAt: "2026-09-24T13:00:00-04:00",
    updatedAt: "2026-09-29T09:30:00-04:00",
    publishedAt: "2026-09-24T13:00:00-04:00",
    tags: ["video", "avatar", "Gemini", "IA generativa"],
    blocks: [
      {
        type: "paragraph",
        text:
          "Gemini 3.8 Live with Live Avatar lleva la conversación con inteligencia artificial a una interfaz donde la respuesta no es solo texto o audio. Google combina diálogo en vivo con generación de video de baja latencia para producir una presencia visual que puede escuchar, observar y responder con voz, movimiento facial y sincronización labial."
      },
      {
        type: "paragraph",
        text:
          "La diferencia frente a un avatar tradicional es que la representación visual está conectada al mismo sistema que interpreta la conversación y el contexto. Google describe procesamiento simultáneo de entradas de audio y video, lo que permite que la respuesta visual se adapte a lo que el agente oye y ve."
      },
      {
        type: "paragraph",
        text:
          "La compañía plantea casos empresariales como atención al cliente y recorridos interactivos. Además, el sistema puede ejecutar herramientas de manera asíncrona: mientras una llamada externa consulta datos o completa una tarea, el avatar puede mantener el diálogo y comunicar progreso al usuario."
      },
      {
        type: "paragraph",
        text:
          "Live Avatar admite transiciones entre 97 idiomas y ajusta voz, sincronización labial y expresiones al cambio de idioma. Para organizaciones internacionales, esa combinación puede reducir la necesidad de crear una experiencia visual distinta para cada lengua, aunque la calidad real deberá evaluarse según acento, contexto y dominio específico."
      },
      {
        type: "paragraph",
        text:
          "Las organizaciones también pueden personalizar avatares a partir de imágenes de referencia, aunque Google señala que la creación de avatares personalizados está limitada mediante allowlisting empresarial. Esto introduce una cuestión especialmente sensible: identidad y representación. Cuanto más realista es un avatar, más importante es informar al usuario de que interactúa con contenido generado por IA."
      },
      {
        type: "paragraph",
        text:
          "Google afirma que el contenido generado por Live Avatar incorpora SynthID, su sistema de marca de agua para contenido de IA. Esa medida busca facilitar detección y reducir riesgos de atribución errónea, aunque la transparencia también depende de cómo cada empresa presente la experiencia al usuario."
      },
      {
        type: "paragraph",
        text:
          "Para medios, educación, ventas o servicio al cliente, la tecnología abre posibilidades importantes, pero no elimina la necesidad de diseño editorial y control. Un avatar convincente puede mejorar presencia y accesibilidad; también puede amplificar errores si el sistema que lo alimenta responde con información incorrecta o ejecuta acciones sin controles adecuados."
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
      "MLB abre la ronda de Wild Card con cuatro series y una jornada completa este 29 de septiembre",
    dek:
      "La postemporada comienza con Phillies-Braves, White Sox-Astros, Red Sox-Yankees y Cubs-Padres en un formato al mejor de tres que concentra toda la presión en pocos partidos.",
    category: "Deportes",
    author: "Actualizard Deportes",
    heroImage:
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1600&q=80",
    heroCaption: ILLUSTRATIVE,
    status: "published",
    confidence: 99,
    sourceCount: 2,
    createdAt: "2026-09-29T05:10:00-04:00",
    updatedAt: "2026-09-29T09:30:00-04:00",
    publishedAt: "2026-09-29T05:10:00-04:00",
    tags: ["MLB", "Wild Card", "postemporada", "béisbol"],
    blocks: [
      {
        type: "paragraph",
        text:
          "La postemporada de Grandes Ligas comienza este martes 29 de septiembre con cuatro Series de Wild Card. El formato es al mejor de tres partidos, lo que convierte cada decisión de pitcheo, bullpen y alineación en un factor inmediato: dos derrotas terminan la temporada y dos victorias abren la puerta a la siguiente ronda."
      },
      {
        type: "bullets",
        items: [
          "Phillies vs. Braves — 2:00 p. m. ET, NBC/Peacock.",
          "White Sox vs. Astros — 5:00 p. m. ET, Peacock/NBCSN.",
          "Red Sox vs. Yankees — 8:00 p. m. ET, NBC/Peacock.",
          "Cubs vs. Padres — 10:00 p. m. ET, Peacock/NBCSN."
        ]
      },
      {
        type: "paragraph",
        text:
          "La serie entre Boston y Nueva York concentra una parte importante de la atención por la historia de la rivalidad y porque ambos equipos llegan a una fase en la que una mala entrada puede cambiar una temporada completa. En un formato corto, el margen para corregir errores es mucho menor que en una serie de siete juegos."
      },
      {
        type: "paragraph",
        text:
          "Chicago y San Diego también aparecen en una ventana nocturna de alta exposición, mientras Philadelphia visita Atlanta en el primer turno. Los White Sox viajan a Houston para completar el cuadro de cuatro enfrentamientos. Todas las series están programadas de martes a jueves, con el tercer partido únicamente si es necesario."
      },
      {
        type: "paragraph",
        text:
          "MLB programó toda la ronda sobre plataformas de NBC Sports. También habrá opciones en español: Universo ofrecerá cobertura televisiva y Univision Radio audio en español, mientras ESPN Radio mantendrá cobertura nacional de la postemporada."
      },
      {
        type: "paragraph",
        text:
          "El formato al mejor de tres modifica la estrategia habitual. Los equipos tienen menos incentivos para reservar sus mejores relevistas y pueden tratar cada juego como una situación de eliminación potencial. El manejo del abridor, el uso temprano del bullpen y la defensa adquieren un peso mayor porque no existe una serie larga para absorber un mal comienzo."
      },
      {
        type: "paragraph",
        text:
          "Para seguir la jornada conviene revisar el calendario oficial cerca de la hora de juego. MLB advierte que horarios, transmisiones y asignaciones pueden cambiar, especialmente si condiciones meteorológicas o ajustes operativos obligan a modificar la programación."
      },
      {
        type: "sources",
        items: [
          {
            name: "MLB — Calendario oficial, 29 de septiembre de 2026",
            url: "https://www.mlb.com/schedule/2026-09-29"
          },
          {
            name: "MLB — 2026 Wild Card Series game times and broadcast schedule",
            url:
              "https://www.mlb.com/news/2026-mlb-playoff-and-world-series-schedule"
          }
        ]
      }
    ]
  }
];
