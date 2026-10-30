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
    id: "rd-20261029-geovanny-arias-maniel-fm-radiotelemaraton",
    slug: "juan-geovanny-arias-maniel-fm-retransmite-radiotelemaraton-yaser-melo",
    title: "Ing. Juan Geovanny Arias cede Maniel FM para retransmitir RadioTelemaratón en favor de Yaser Melo",
    dek: "La emisora se suma a la jornada solidaria prevista para este viernes 30 de octubre, ampliando por radio el alcance del llamado comunitario en favor de Yaser Melo.",
    category: "RD",
    author: "Redacción Actualizard",
    heroImage: "/uploads/ocoa-unida-telemaraton-30-octubre.webp",
    heroCaption: "Convocatoria del RadioTelemaratón Ocoa Unida, cuya retransmisión contará también con Maniel FM.",
    status: "published",
    confidence: 90,
    sourceCount: 1,
    createdAt: "2026-10-29T23:01:00-04:00",
    updatedAt: "2026-10-29T23:01:00-04:00",
    publishedAt: "2026-10-29T23:01:00-04:00",
    tags: [
      "Juan Geovanny Arias",
      "Maniel FM",
      "RadioTelemaratón",
      "Yaser Melo",
      "San José de Ocoa",
      "Ocoa Unida",
      "solidaridad"
    ],
    blocks: [
      {
        type: "paragraph",
        text: "**SAN JOSÉ DE OCOA.** El ingeniero **Juan Geovanny Arias** anunció la disposición de **Maniel FM** para retransmitir el RadioTelemaratón que se realizará este viernes **30 de octubre** en apoyo a **Yaser Melo**, cuya familia y comunidad impulsan una jornada solidaria para contribuir con los gastos asociados a su tratamiento y proceso de trasplante renal."
      },
      {
        type: "paragraph",
        text: "La integración de Maniel FM amplía considerablemente el alcance de la actividad, originalmente concebida con transmisión a través de **Canal 12 de Telecable Ocoa**, y permitirá que el mensaje llegue también a la audiencia radial de San José de Ocoa y comunidades cercanas."
      },
      {
        type: "paragraph",
        text: "La jornada está programada de **5:00 de la tarde a 10:00 de la noche** y busca movilizar a ciudadanos, comerciantes, empresarios, instituciones y ocoeños residentes dentro y fuera del país."
      },
      {
        type: "heading",
        text: "Una historia que ha movilizado a Ocoa",
        level: 2
      },
      {
        type: "paragraph",
        text: "Detrás del RadioTelemaratón existe una historia familiar que ha generado una amplia reacción de solidaridad. Yaser Melo atraviesa un proceso de salud renal que requiere un trasplante, mientras su hermano, **Alejandro Ivanovich Melo Castillo**, se ha presentado como donante propuesto para contribuir a salvar la vida de su hermano."
      },
      {
        type: "paragraph",
        text: "El presupuesto base relacionado con el procedimiento ha sido estimado en aproximadamente **RD$1.5 millones**, razón por la cual familiares, amigos y sectores de San José de Ocoa han promovido diferentes iniciativas para ayudar a cubrir los costos y necesidades asociadas."
      },
      {
        type: "paragraph",
        text: "La historia de los hermanos fue presentada anteriormente por Actualizard bajo el título **«Cuando un hermano ofrece un riñón y un pueblo responde: la historia de Yaser, Alejandro y Ocoa Unida»**, destacando no solamente la necesidad económica, sino también la dimensión humana de una familia acompañada por su comunidad."
      },
      {
        type: "heading",
        text: "Maniel FM se suma a la causa",
        level: 2
      },
      {
        type: "paragraph",
        text: "La decisión del Ing. Juan Geovanny Arias de poner la plataforma de **Maniel FM** al servicio de la retransmisión fortalece la capacidad de convocatoria del RadioTelemaratón y suma la radio a una cadena de medios locales alrededor de una causa humana."
      },
      {
        type: "paragraph",
        text: "La participación de la estación permitirá que personas que no tengan acceso a la señal televisiva puedan seguir la actividad por radio, conocer el desarrollo de la jornada y sumarse al llamado de solidaridad."
      },
      {
        type: "heading",
        text: "Medios unidos por una misma causa",
        level: 2
      },
      {
        type: "paragraph",
        text: "La incorporación de Maniel FM refuerza una característica que comienza a definir esta jornada: la coordinación entre televisión, radio, plataformas digitales y redes sociales para multiplicar el alcance de la convocatoria."
      },
      {
        type: "paragraph",
        text: "El objetivo no es únicamente alcanzar una cifra económica. También se busca que la historia de Yaser llegue a cada comunidad de Ocoa y a los miles de ocoeños que viven en Santo Domingo, otras provincias y el extranjero."
      },
      {
        type: "heading",
        text: "Un gesto que trasciende la radio",
        level: 2
      },
      {
        type: "paragraph",
        text: "La decisión de Geovanny Arias representa además un aporte logístico y comunicacional. En una actividad de este tipo, cada minuto de transmisión aumenta las posibilidades de encontrar nuevos colaboradores. La radio conserva una capacidad especial para llegar a hogares, vehículos, comercios y comunidades rurales."
      },
      {
        type: "heading",
        text: "Ocoa vuelve a responder",
        level: 2
      },
      {
        type: "paragraph",
        text: "San José de Ocoa ha demostrado en diferentes ocasiones una fuerte capacidad de movilización frente a situaciones que afectan a miembros de su comunidad. Ahora, la historia de Yaser y Alejandro vuelve a colocar a la provincia frente a uno de esos momentos."
      },
      {
        type: "quote",
        text: "Un hermano está dispuesto a donar. Una familia lucha. Una comunidad se organiza. Y los medios comienzan a unirse para multiplicar el mensaje.",
        attribution: "Actualizard"
      },
      {
        type: "paragraph",
        text: "Este viernes, durante cinco horas de transmisión, **Canal 12 de Telecable Ocoa y Maniel FM** formarán parte de una jornada cuyo objetivo será transformar solidaridad en una oportunidad concreta para Yaser."
      },
      {
        type: "sources",
        items: [
          {
            name: "Actualizard — Cuando un hermano ofrece un riñón y un pueblo responde: la historia de Yaser, Alejandro y Ocoa Unida",
            url: "https://www.actualizard.com/noticias/cuando-un-hermano-ofrece-un-rinon-y-un-pueblo-responde-yaser-alejandro-ocoa"
          }
        ]
      }
    ]
  },


  {
    id: "cronica-20261027-ocoa-yaser-alejandro-telemaraton",
    slug: "cuando-un-hermano-ofrece-un-rinon-y-un-pueblo-responde-yaser-alejandro-ocoa",
    title: "Cuando un hermano ofrece un riñón y un pueblo responde: la historia de Yaser, Alejandro y Ocoa Unida",
    dek: "Yaser Melo enfrenta una enfermedad renal; su hermano Alejandro Ivanovich se ha ofrecido como donante. Una familia con raíces ocoeñas convoca a un telemaratón el viernes 30 de octubre, entre la esperanza, el sacrificio y la solidaridad.",
    category: "RD",
    author: "Redacción Actualizard",
    heroImage: "/uploads/ocoa-yaser-alejandro-cronica-portada.webp",
    heroCaption: "Leandro Yaser Melo Castillo (izquierda), paciente renal, y Alejandro Ivanovich Melo Castillo (derecha), su hermano y donante propuesto. Composición editorial con fotografías suministradas por los organizadores.",
    status: "published",
    confidence: 89,
    sourceCount: 5,
    createdAt: "2026-10-27T19:45:00-04:00",
    updatedAt: "2026-10-27T19:45:00-04:00",
    publishedAt: "2026-10-27T19:45:00-04:00",
    tags: [
      "San José de Ocoa",
      "Leandro Yaser Melo",
      "Alejandro Ivanovich Melo Castillo",
      "Ocoa Unida",
      "trasplante renal",
      "telemaratón",
      "solidaridad",
      "familia",
      "30 octubre 2026"
    ],
    blocks: [
      {
        type: "paragraph",
        text: "**SAN JOSÉ DE OCOA, 27 DE OCTUBRE DE 2026.** El próximo viernes, cuando las cámaras de Canal 12 de Telecable Ocoa se enciendan para transmitir el gran telemaratón **«Ocoa Unida»**, el país conocerá una causa que tiene un rostro, una familia y dos hermanos. Uno necesita un trasplante de riñón para procurar una vida con menos limitaciones; el otro ha manifestado su voluntad de ofrecerle uno de sus propios riñones."
      },
      {
        type: "paragraph",
        text: "No es solamente una historia de medicina. Es el relato de lo que ocurre cuando la fragilidad de la vida se presenta en una casa, cuando una madre debe mirar con preocupación a dos de sus hijos y cuando una comunidad decide que el dolor de una familia merece algo más que un mensaje de ánimo."
      },
      {
        type: "paragraph",
        text: "Los protagonistas son **Leandro Yaser Melo Castillo**, de 42 años, y **Alejandro Ivanovich Melo Castillo —Iván para quienes así lo llaman—**. La documentación clínica facilitada a esta redacción describe a Yaser como paciente con enfermedad renal crónica avanzada y tratamiento de diálisis, y a Alejandro como donante vivo relacionado propuesto. La inclusión en un programa de trasplante no garantiza que la cirugía se realice: el proceso está sujeto a las evaluaciones y decisiones médicas correspondientes."
      },
      {
        type: "heading",
        text: "Yaser: el hombre que trabajó para construir un futuro",
        level: 2
      },
      {
        type: "image",
        url: "/uploads/yaser-melo-ocoa-retrato.webp",
        caption: "Leandro Yaser Melo Castillo. Fotografía aportada a la redacción."
      },
      {
        type: "paragraph",
        text: "Mucho antes de que la diálisis se convirtiera en parte de su rutina, Yaser era un niño que, según sus allegados, había aprendido a combinar los estudios con el trabajo. Creció con la idea de que el futuro no se espera: se construye. Con los años se dedicó a las ventas, particularmente a los negocios inmobiliarios, y formó una familia."
      },
      {
        type: "paragraph",
        text: "Para sus seres queridos, esa trayectoria importa porque recuerda que una enfermedad nunca puede reducir a una persona a un diagnóstico. Yaser es también padre, trabajador y miembro de una familia que ha conocido el valor del esfuerzo. Detrás de los tratamientos hay días que se reorganizan, oportunidades laborales que se aplazan y personas que esperan volver a compartir una vida cotidiana menos condicionada por los procedimientos médicos."
      },
      {
        type: "paragraph",
        text: "Los materiales de la campaña familiar relatan años de insuficiencia renal, con diálisis peritoneal y nuevos estudios después de interrupciones relacionadas con la pandemia y períodos sin seguro médico. No se trata de un desenlace anunciado, sino de una búsqueda de atención y de una oportunidad de tratamiento que requiere seguimiento especializado."
      },
      {
        type: "heading",
        text: "Alejandro Ivanovich: la decisión que cambió la conversación familiar",
        level: 2
      },
      {
        type: "image",
        url: "/uploads/alejandro-ivanovich-melo-retrato.webp",
        caption: "Alejandro Ivanovich Melo Castillo, conocido también como Iván, identificado por la familia como donante propuesto."
      },
      {
        type: "paragraph",
        text: "Alejandro Ivanovich aparece identificado en la constancia clínica como **hermano y donante vivo relacionado**. Sus familiares lo describen como un joven inteligente, reflexivo y dedicado a sus proyectos. Todavía no ha tenido hijos, una circunstancia personal que vuelve especialmente íntima la conversación sobre el futuro, la salud y las responsabilidades que implica una intervención quirúrgica."
      },
      {
        type: "paragraph",
        text: "Su decisión no debe narrarse a partir de un supuesto médico incorrecto: **donar un riñón no implica perder la posibilidad de ser padre**. El Servicio Nacional de Donación de Órganos del Reino Unido señala que no existe evidencia de que la extracción de un riñón afecte la fertilidad masculina. Eso no elimina los riesgos de una cirugía mayor ni la necesidad de una evaluación completa del donante."
      },
      {
        type: "paragraph",
        text: "El significado real del gesto es otro: estar dispuesto a pasar por estudios, consultas, una operación, recuperación y controles futuros con el propósito de ayudar a otra persona. Alejandro tiene derecho a decidir libremente, a recibir toda la información y a retirar su consentimiento si así lo considera. El afecto entre hermanos no debe convertirse nunca en presión."
      },
      {
        type: "quote",
        text: "Hay actos de amor que no se cuentan por lo que prometen, sino por la responsabilidad con la que alguien decide estar al lado de otra persona.",
        attribution: "Reflexión editorial de Actualizard"
      },
      {
        type: "heading",
        text: "Francia Castillo: una vida dedicada a cuidar a otros",
        level: 2
      },
      {
        type: "paragraph",
        text: "En el corazón de esta familia está **Francia Castillo**, una enfermera de larga trayectoria en el Hospital San José, de acuerdo con el relato de sus allegados. La vida la llevó a acompañar a pacientes y familias que atravesaban momentos difíciles. Hoy le corresponde vivir, desde su propia casa, la incertidumbre de una enfermedad grave."
      },
      {
        type: "paragraph",
        text: "De un lado está Yaser, el hijo que recibe diálisis y espera acceder al tratamiento indicado. Del otro está Alejandro, el hijo dispuesto a someterse al proceso de evaluación para una donación. No hace falta imaginar conversaciones privadas ni inventar lágrimas para comprender el peso emocional de ese escenario. Una madre conoce el valor de la esperanza y también la necesidad de proteger la vida y la salud de sus dos hijos."
      },
      {
        type: "heading",
        text: "Una familia de Ocoa que conservó sus raíces en Santo Domingo",
        level: 2
      },
      {
        type: "paragraph",
        text: "La familia recuerda con afecto al padre, ya fallecido, a quien sus allegados describen como un hombre sereno, honrado y de fuertes convicciones cristianas. Aunque más tarde se establecieron en Santo Domingo, conservaron sus vínculos con San José de Ocoa y una manera de entender el trabajo, la fe y la convivencia."
      },
      {
        type: "paragraph",
        text: "Junto a Yaser y Alejandro forman parte de esta historia **Sandy Rosado**, conocido en ambientes cristianos y comunitarios de Ocoa; **Robertico Melo**, asesor y vendedor inmobiliario; y **la doctora Carolina Melo**. Sus trayectorias son distintas, pero en el relato familiar aparece un mismo hilo: acompañarse cuando las circunstancias dejan de ser sencillas."
      },
      {
        type: "paragraph",
        text: "Ninguna familia es perfecta ni está obligada a serlo. Su dignidad se manifiesta en algo más cotidiano: permanecer presente ante la dificultad y pedir ayuda cuando los recursos propios dejan de ser suficientes."
      },
      {
        type: "heading",
        text: "La cifra del presupuesto y lo que realmente queda por financiar",
        level: 2
      },
      {
        type: "paragraph",
        text: "Un presupuesto del **Instituto Dominicano de Trasplantes Renales**, fechado el 1 de octubre de 2026 y facilitado a esta redacción, asciende a **RD$1,500,000** para servicios quirúrgicos relacionados con el receptor y el donante. Incluye preparación, hospitalización, intervenciones, honorarios y laboratorios señalados en el documento. Se contemplan tres días de hospitalización del donante y seis del receptor."
      },
      {
        type: "paragraph",
        text: "La propuesta **excluye** determinados gastos por complicaciones posteriores, reintervenciones, cuidados intensivos extraordinarios, pruebas y medicamentos fuera del procedimiento previsto. Por tanto, RD$1.5 millones es el **presupuesto base presentado**, no una cifra final ni el saldo efectivamente pendiente de recaudar."
      },
      {
        type: "paragraph",
        text: "Hay una cuestión de transparencia que merece atención. La **SISALRIL** informa que existe cobertura integral de trasplante renal dentro del Seguro Familiar de Salud, con condiciones de afiliación, centros autorizados y límites aplicables; la cobertura también contempla a donantes bajo reglas específicas. Aún no se ha documentado ante esta redacción qué cobertura corresponde a Yaser ni qué montos ya fueron autorizados o pagados. Es indispensable aclararlo con la familia, el prestador y la ARS antes de presentar la totalidad del presupuesto como deuda."
      },
      {
        type: "heading",
        text: "¿Cuánto puede hacer una comunidad cuando se organiza?",
        level: 2
      },
      {
        type: "paragraph",
        text: "Para dimensionar la cifra presupuestada, imaginemos aportes voluntarios dirigidos a una meta hipotética de RD$1,500,000: **3,000 personas dando RD$500**, **1,500 aportando RD$1,000**, **500 aportando RD$3,000**, **300 aportando RD$5,000** o **150 aportando RD$10,000**. Cada combinación alcanza el mismo total. Son ejemplos matemáticos y no representan aportes recibidos ni una estimación de la recaudación real."
      },
      {
        type: "image",
        url: "/uploads/ocoa-unida-escenarios-solidarios.svg",
        caption: "Escenarios ilustrativos de contribución colectiva calculados sobre el presupuesto base de RD$1.5 millones. No son aportes registrados ni reflejan coberturas de seguro."
      },
      {
        type: "paragraph",
        text: "La transmisión anunciada durará **cinco horas**, de 5:00 a 10:00 de la noche del viernes 30 de octubre. Dividir el presupuesto base entre ese tiempo equivale a **RD$300,000 por hora** o **RD$5,000 por minuto**. Es una referencia matemática, no una obligación para los organizadores ni un pronóstico de ingresos; la meta real debe definirse después de descontar las coberturas y aportes existentes."
      },
      {
        type: "heading",
        text: "Ocoa Unida: una cita que va más allá de las cámaras",
        level: 2
      },
      {
        type: "image",
        url: "/uploads/ocoa-unida-telemaraton-30-octubre.webp",
        caption: "Afiche de la convocatoria al Gran Telemaratón Ocoa Unida para el viernes 30 de octubre de 2026, por Canal 12 de Telecable Ocoa. Verifique los datos de aportes con los organizadores."
      },
      {
        type: "paragraph",
        text: "La convocatoria difundida por la familia anuncia el **Gran Telemaratón Ocoa Unida**, el **viernes 30 de octubre de 2026**, de **5:00 p. m. a 10:00 p. m.**, por **Canal 12 de Telecable Ocoa**. El llamado busca reunir a comerciantes, empresarios, iglesias, comunicadores, vecinos y ocoeños que viven dentro y fuera de la provincia."
      },
      {
        type: "paragraph",
        text: "Una contribución no tiene que ser grande para ser importante. Alguien puede brindar recursos, otro puede prestar equipos, otros pueden abrir un espacio en sus medios, confirmar una información médica o ayudar a divulgar la jornada sin caer en cifras o promesas engañosas. La solidaridad también consiste en acompañar con respeto."
      },
      {
        type: "paragraph",
        text: "Este encuentro todavía no tiene un resultado escrito. Nadie sabe cuánto se recaudará ni cuál será el desenlace clínico. Pero la simple disposición de organizarse alrededor de una familia recuerda que la identidad de un pueblo se construye tanto con sus logros como con su capacidad de responder ante el sufrimiento."
      },
      {
        type: "heading",
        text: "Una carta abierta a los medios: el llamado de esta redacción",
        level: 2
      },
      {
        type: "paragraph",
        text: "Desde **Actualizard** invitamos a los medios de comunicación de Ocoa y de todo el país a dar visibilidad responsable a esta causa. Las cámaras y los micrófonos no solo sirven para registrar una noticia: también pueden ayudar a que una historia llegue hasta personas e instituciones dispuestas a colaborar. La cobertura debe respetar la privacidad médica, la voluntad del donante y el derecho de la audiencia a conocer el destino de los fondos."
      },
      {
        type: "paragraph",
        text: "Extendemos una invitación especial al **ingeniero Geovanny Arias**, a quien esta columna reconoce por su sensibilidad hacia iniciativas comunitarias. Su participación, así como la de cualquier otra persona convocada, dependerá de su propia decisión."
      },
      {
        type: "paragraph",
        text: "También reconocemos la trayectoria solidaria del **exsenador Pedro José Alegría Soto**, conocido en Ocoa como el «senador histórico». La familia señala que ha contribuido a esta causa; este dato corresponde al testimonio recibido y no a una cuantificación independiente de los aportes. Su condición de exsenador está documentada en los registros históricos del Senado de la República."
      },
      {
        type: "heading",
        text: "Un viernes que podría permanecer en la memoria",
        level: 2
      },
      {
        type: "paragraph",
        text: "Cuando termine la transmisión, quedarán números por contar, autorizaciones por comprobar y necesidades médicas a las que habrá que seguir dando respuesta. Pero quedará también una pregunta: **¿qué hicimos cuando alguien de nuestra comunidad necesitó que estuviéramos presentes?**"
      },
      {
        type: "paragraph",
        text: "Yaser espera una oportunidad médica. Alejandro ha expresado la voluntad de ayudarlo a través de una posible donación. Su familia intenta sostener a ambos. Ocoa está convocada a acompañarlos."
      },
      {
        type: "paragraph",
        text: "Ojalá que el viernes no sea recordado únicamente por una cifra. Ojalá sea recordado como un día en que la esperanza de una familia consiguió despertar lo mejor de un pueblo: **que el amor entre hermanos encuentre una comunidad capaz de responder con solidaridad y con responsabilidad.**"
      },
      {
        type: "heading",
        text: "Cómo participar y qué verificar",
        level: 2
      },
      {
        type: "bullets",
        items: [
          "**Actividad anunciada:** Gran Telemaratón Ocoa Unida.",
          "**Fecha y horario:** viernes 30 de octubre de 2026, de 5:00 p. m. a 10:00 p. m.",
          "**Medio anunciado:** Canal 12, Telecable Ocoa.",
          "**Objetivo:** ayudar a financiar las necesidades documentadas del proceso de trasplante y atención médica.",
          "**Antes de transferir:** confirmar beneficiarios, cuentas, saldo pendiente, cobertura de ARS y mecanismos de rendición de cuentas con los organizadores."
        ]
      },
      {
        type: "paragraph",
        text: "**Nota de transparencia y respeto:** los retratos y el afiche de campaña fueron facilitados para esta cobertura. No se publican números de cédula ni copias completas de constancias clínicas. Los detalles familiares corresponden al relato facilitado a la redacción y requieren corroboración testimonial independiente; la información de costos proviene del presupuesto presentado. No se afirma que ya exista autorización definitiva para el trasplante ni que se haya confirmado la totalidad del importe como saldo sin cobertura."
      },
      {
        type: "sources",
        items: [
          {
            name: "NHS Organ Donation — Donación renal, embarazo y fertilidad",
            url: "https://www.organdonation.nhs.uk/become-a-living-donor/donating-your-kidney/who-can-become-a-living-kidney-donor/kidney-donation-pregnancy-and-fertility/"
          },
          {
            name: "SISALRIL — Cobertura integral de trasplante renal",
            url: "https://www.sisalril.gob.do/sisalril-actualiza-a-medicos-nefrologos-sobre-la-cobertura-integral-en-trasplante-renal/"
          },
          {
            name: "SISALRIL — Información de coberturas del Seguro Familiar de Salud",
            url: "https://www.sisalril.gob.do/seguro-familiar-de-salud/"
          },
          {
            name: "SenadoRD — Registro histórico de Pedro José Alegría Soto",
            url: "https://memoriahistorica.senadord.gob.do/items/9191ae00-a123-433b-b741-60b1b389388a"
          }
        ]
      }
    ]
  },
  {
    id: "weather-20261027-radiografia-rd-vaguada",
    slug: "radiografia-tiempo-republica-dominicana-vaguada-lluvias-tormentas-27-octubre-2026",
    title:
      "Radiografía del tiempo en República Dominicana: vaguada mantiene lluvias, tormentas y riesgo de inundaciones",
    dek:
      "El panorama meteorológico de este martes 27 de octubre está marcado por una vaguada que mantiene condiciones húmedas e inestables en buena parte del país, con aguaceros moderados a fuertes, tormentas eléctricas, ráfagas de viento y provincias bajo alerta y aviso.",
    category: "Meteorología",
    author: "Redacción Actualizard",
    heroImage: "/media/meteorologia-la-vega-portada",
    heroCaption: "Panorámica editorial de La Vega bajo fuertes lluvias y nubosidad intensa, utilizada como imagen principal de la cobertura meteorológica nacional de Actualizard.",
    status: "published",
    confidence: 97,
    sourceCount: 3,
    createdAt: "2026-10-27T10:45:00-04:00",
    updatedAt: "2026-10-27T10:45:00-04:00",
    publishedAt: "2026-10-27T10:45:00-04:00",
    tags: [
      "Meteorología",
      "República Dominicana",
      "INDOMET",
      "vaguada",
      "lluvias",
      "tormentas eléctricas",
      "alerta meteorológica",
      "La Vega",
      "Santo Domingo",
      "Santiago"
    ],
    blocks: [
      {
        type: "paragraph",
        text:
          "República Dominicana transita este martes **27 de octubre de 2026** bajo un patrón de alta humedad e inestabilidad asociado a una vaguada en distintos niveles de la troposfera. El Instituto Dominicano de Meteorología (INDOMET) prevé aguaceros de moderados a fuertes, tormentas eléctricas y ráfagas de viento en numerosas provincias, con riesgo de inundaciones urbanas repentinas y crecidas de ríos, arroyos y cañadas en zonas vulnerables."
      },
      {
        type: "paragraph",
        text:
          "La situación no afecta al territorio de manera uniforme. La radiografía nacional muestra un país dividido entre zonas con lluvias activas desde la mañana, áreas donde la inestabilidad aumentará durante la tarde y regiones que, aunque reciban menos precipitación, continúan bajo un ambiente caluroso y húmedo por el flujo de viento del sur/sureste."
      },
      {
        type: "paragraph",
        text:
          "**Durante la mañana**, las precipitaciones de moderadas a fuertes se concentran principalmente sobre La Altagracia, La Romana, San Pedro de Macorís, el Gran Santo Domingo, Pedernales, Puerto Plata y Santiago, entre otras localidades. En estos puntos pueden producirse ráfagas de viento y reducciones temporales de visibilidad."
      },
      {
        type: "paragraph",
        text:
          "**Para la tarde**, el foco de mayor inestabilidad se desplaza hacia Monseñor Nouel, San José de Ocoa, La Vega, San Juan y Monte Plata. INDOMET anticipa aguaceros fuertes en ocasiones, acompañados de tormentas eléctricas y ráfagas de viento."
      },
      {
        type: "paragraph",
        text:
          "==La Vega figura entre las provincias bajo alerta meteorológica==, por lo que las condiciones de lluvia deben seguirse con especial atención en sectores urbanos, comunidades próximas a ríos y cañadas y zonas con antecedentes de inundaciones o deslizamientos."
      },
      {
        type: "paragraph",
        text:
          "Según el reporte oficial, permanecen bajo **Alerta Meteorológica** San Juan, La Vega, Monseñor Nouel, Monte Plata, Elías Piña y Sánchez Ramírez. Bajo **Aviso Meteorológico** se encuentran Barahona, Pedernales, Bahoruco, Azua, el Gran Santo Domingo, San Cristóbal, Independencia, Peravia y San José de Ocoa."
      },
      {
        type: "paragraph",
        text:
          "La diferencia entre alerta y aviso es importante para la lectura del riesgo: ambas categorías indican necesidad de vigilancia y prevención, pero los avisos corresponden a escenarios en los que el peligro meteorológico puede tener una probabilidad o impacto más inmediato según la evaluación oficial."
      },
      {
        type: "paragraph",
        text:
          "### Radiografía por regiones"
      },
      {
        type: "paragraph",
        text:
          "**Cibao y norte:** Santiago y Puerto Plata presentan episodios de lluvia desde horas matutinas. Hacia la tarde, La Vega y Monseñor Nouel aparecen entre los puntos de mayor actividad. La combinación de relieve montañoso, humedad disponible y desarrollo convectivo puede favorecer aguaceros intensos de corta duración."
      },
      {
        type: "paragraph",
        text:
          "**Gran Santo Domingo y sureste:** el Gran Santo Domingo, San Pedro de Macorís, La Romana y La Altagracia están dentro del corredor de precipitaciones matutinas. Las lluvias pueden provocar acumulaciones rápidas de agua en vías con drenaje deficiente y reducir la visibilidad durante los desplazamientos."
      },
      {
        type: "paragraph",
        text:
          "**Sur y suroeste:** Pedernales, Barahona, Bahoruco, Azua, Independencia, Peravia y San José de Ocoa están entre las provincias con niveles de alerta o aviso. En el suroeste, la vigilancia debe concentrarse además en cauces, pasos vulnerables y comunidades cercanas a zonas montañosas."
      },
      {
        type: "paragraph",
        text:
          "**Cordillera Central:** La Vega, Monseñor Nouel y San José de Ocoa forman parte de una franja donde la orografía puede reforzar la formación de nubes y la intensidad local de las precipitaciones. Los sectores próximos a pendientes y cursos de agua requieren especial precaución."
      },
      {
        type: "paragraph",
        text:
          "**Zona fronteriza:** San Juan y Elías Piña se mantienen bajo alerta meteorológica. Los episodios fuertes pueden ser puntuales, por lo que una localidad puede registrar lluvias intensas mientras otra cercana recibe acumulados menores."
      },
      {
        type: "paragraph",
        text:
          "### Temperaturas: lluvia no significa ambiente fresco"
      },
      {
        type: "paragraph",
        text:
          "A pesar de la nubosidad y los aguaceros, INDOMET prevé que continúe un ambiente caluroso debido al viento cálido del sur/sureste. Las temperaturas mínimas se sitúan aproximadamente entre **22 °C y 23 °C**, mientras que las máximas rondan **29 °C a 31 °C**."
      },
      {
        type: "paragraph",
        text:
          "La recomendación oficial es mantener una adecuada hidratación, utilizar ropa ligera y evitar la exposición prolongada al sol entre las 11:00 de la mañana y las 4:00 de la tarde, especialmente en el caso de niños, adultos mayores y embarazadas."
      },
      {
        type: "paragraph",
        text:
          "### El mar también requiere vigilancia"
      },
      {
        type: "paragraph",
        text:
          "En la costa atlántica, INDOMET recomienda a operadores de embarcaciones frágiles, pequeñas y medianas navegar con precaución cerca del perímetro costero y evitar aventurarse mar adentro por vientos fuertes y oleaje anormal. Desde **Cabo San Rafael, en La Altagracia, hasta Cabo Cabrón, en Samaná**, la recomendación oficial es permanecer en puerto."
      },
      {
        type: "paragraph",
        text:
          "En la costa caribeña se mantiene la precaución por aguaceros, descargas eléctricas, ráfagas de viento y reducción de visibilidad durante los episodios de precipitación."
      },
      {
        type: "paragraph",
        text:
          "### Qué se espera para miércoles y jueves"
      },
      {
        type: "paragraph",
        text:
          "Para el **miércoles 28**, el patrón lluvioso continuará. Durante la madrugada y la mañana se esperan lluvias débiles a moderadas en el Gran Santo Domingo, San Cristóbal y San Pedro de Macorís. En la tarde, los aguaceros podrían intensificarse sobre Santiago, Santiago Rodríguez, Puerto Plata, Monte Cristi, Dajabón y Pedernales."
      },
      {
        type: "paragraph",
        text:
          "Para el **jueves 29**, la vaguada todavía ejercerá influencia, aunque los pronósticos apuntan a una disminución de la cantidad y frecuencia de las precipitaciones. Aun así, durante la tarde podrían desarrollarse aguaceros con tronadas y ráfagas aisladas sobre localidades próximas a zonas montañosas, incluyendo Monseñor Nouel, La Vega, Santiago Rodríguez, Santiago y San Juan."
      },
      {
        type: "paragraph",
        text:
          "### La lectura de Actualizard"
      },
      {
        type: "paragraph",
        text:
          "El dato más importante de la jornada no es únicamente que está lloviendo. La combinación de **suelo húmedo, aguaceros intensos localizados, actividad eléctrica, ráfagas y provincias bajo niveles de alerta o aviso** convierte la situación en un escenario que requiere seguimiento continuo."
      },
      {
        type: "paragraph",
        text:
          "Para la ciudadanía, la prioridad debe ser evitar cruzar ríos, cañadas o pasos inundados, reducir desplazamientos innecesarios durante tormentas fuertes y prestar atención a las actualizaciones de INDOMET y los organismos de protección civil. En meteorología, una tormenta localizada puede cambiar rápidamente la realidad de una comunidad aunque el resto de la provincia mantenga condiciones relativamente tranquilas."
      },
      {
        type: "paragraph",
        text:
          "Actualizard mantendrá esta sección de **Meteorología** como un espacio para interpretar el tiempo desde una perspectiva nacional: qué sistema está actuando, qué regiones concentran el mayor riesgo, cómo evolucionan las temperaturas y qué puede esperarse durante las siguientes horas."
      },
      {
        type: "sources",
        items: [
          {
            name: "INDOMET — Instituto Dominicano de Meteorología",
            url: "https://indomet.gob.do/"
          },
          {
            name: "Presidencia de la República Dominicana — reporte meteorológico del 27 de octubre de 2026",
            url: "https://presidencia.gob.do/noticias/vaguada-seguira-provocando-aguaceros-moderados-fuertes-tormentas-electricas-y-rafagas-de"
          },
          {
            name: "Diario Libre — Vaguada provocará lluvias, tormentas eléctricas y ráfagas de viento este martes",
            url: "https://www.diariolibre.com/planeta/clima/2026/10/27/vaguada-provocara-lluvias-y-tormentas-electricas-en-el-clima-en-rd/3701928"
          }
        ]
      }
    ]
  },

  {
    id: "weather-20261027-ocoa-lluvias-riesgo",
    slug: "san-jose-de-ocoa-lluvias-alerta-amarilla-crecidas-deslizamientos",
    title:
      "San José de Ocoa bajo vigilancia: lluvias elevan riesgo de crecidas y deslizamientos",
    dek:
      "La provincia permanece en alerta amarilla mientras una vaguada mantiene aguaceros fuertes, tormentas eléctricas y ráfagas; el desbordamiento de Arroyo La Piedra ya afectó temporalmente varias comunidades.",
    category: "Meteorología",
    author: "Redacción Actualizard",
    heroImage: "/media/ocoa-lluvias-portada",
    heroCaption: "Imagen aportada para ilustrar la cobertura de las lluvias, crecidas y riesgo de deslizamientos en San José de Ocoa.",
    status: "published",
    confidence: 96,
    sourceCount: 2,
    createdAt: "2026-10-27T18:06:00-04:00",
    updatedAt: "2026-10-27T19:10:00-04:00",
    publishedAt: "2026-10-27T18:06:00-04:00",
    tags: [
      "Meteorología",
      "San José de Ocoa",
      "lluvias",
      "alerta amarilla",
      "vaguada",
      "crecidas",
      "deslizamientos"
    ],
    blocks: [
      {
        type: "paragraph",
        text:
          "San José de Ocoa permanece este martes **27 de octubre de 2026** bajo **alerta amarilla** ante la continuidad de las lluvias. INDOMET prevé para la provincia aguaceros que pueden ser fuertes en ocasiones, acompañados de tormentas eléctricas y ráfagas de viento."
      },
      {
        type: "paragraph",
        text:
          "Las precipitaciones ya han dejado efectos concretos. El desbordamiento del **río Arroyo La Piedra** afectó temporalmente la comunicación terrestre con La Ciénega, Los Tramojos, Los Limones, Los Negros, Mesa de Domingo, Sabana Abajo, El Cercado, El Mancebo, Arroyo Hondo y Palo Esquina. La comunicación fue restablecida, pero las autoridades mantienen vigilancia por la saturación de los suelos."
      },
      {
        type: "image",
        url: "/uploads/grafico-meteorologico-ocoa-2026-10-27.svg",
        caption:
          "Gráfico meteorológico de Actualizard basado en los reportes de INDOMET y COE disponibles este 27 de octubre de 2026."
      },
      {
        type: "paragraph",
        text:
          "La geografía montañosa de Ocoa aumenta la sensibilidad ante episodios de lluvia persistente. Con terrenos ya húmedos, nuevos aguaceros pueden favorecer **crecidas repentinas, deslizamientos y bloqueos temporales de carreteras**, especialmente cerca de ríos, arroyos y laderas."
      },
      {
        type: "paragraph",
        text:
          "El panorama seguirá requiriendo atención durante **miércoles 28 y jueves 29**, cuando las lluvias continuarán en distintas regiones del país. Las autoridades meteorológicas esperan una disminución más significativa de los aguaceros hacia el **viernes 30 de octubre**."
      },
      {
        type: "bullets",
        items: [
          "**Evitar** cruzar ríos, arroyos y cañadas con alto volumen de agua.",
          "**Vigilar** taludes, caminos rurales y zonas con antecedentes de deslizamientos.",
          "**Seguir** los boletines de INDOMET, COE y organismos de protección civil."
        ]
      },
      {
        type: "sources",
        items: [
          {
            name: "Presidencia RD / INDOMET — Vaguada seguirá provocando aguaceros fuertes",
            url: "https://presidencia.gob.do/noticias/vaguada-seguira-provocando-aguaceros-moderados-fuertes-tormentas-electricas-y-rafagas-de"
          },
          {
            name: "Diario Libre — Lluvias dejan comunidades incomunicadas y suelos saturados",
            url: "https://www.diariolibre.com/planeta/medioambiente/2026/10/27/mas-de-485-mil-hogares-se-quedan-sin-agua-por-las-lluvias/3702453"
          }
        ]
      }
    ]
  },


  {
    id: "column-20261027-francelis-turismo-mas-alla-sol-playa",
    slug: "republica-dominicana-mas-alla-sol-playa-proximo-gran-salto-turismo",
    title: "República Dominicana más allá del sol y playa: el próximo gran salto del turismo",
    dek: "Francelis Solís analiza por qué el próximo salto del turismo dominicano debe combinar el éxito de los resorts con cultura, gastronomía, naturaleza, ciudades y una mayor integración de las comunidades.",
    category: "Turismo",
    author: "Francelis Solís",
    authorImage: "/uploads/francelis-solis-autora-v2.jpg",
    heroImage: "/uploads/francelis-turismo-diversificacion.svg",
    heroCaption: "Ilustración editorial de Actualizard sobre la diversificación del turismo dominicano más allá del modelo tradicional de sol y playa.",
    status: "published",
    confidence: 94,
    sourceCount: 3,
    createdAt: "2026-10-27T21:05:00-04:00",
    updatedAt: "2026-10-27T21:05:00-04:00",
    publishedAt: "2026-10-27T21:05:00-04:00",
    tags: ["turismo","República Dominicana","diversificación turística","gastronomía","cultura","ecoturismo","comunidades","Francelis Solís"],
    blocks: [
      {
        type: "paragraph",
        text: "Durante décadas, **República Dominicana ha construido una de las marcas turísticas más reconocidas del Caribe** sobre una combinación extraordinariamente poderosa: playas, clima tropical, hospitalidad, conectividad aérea y una infraestructura hotelera capaz de competir con algunos de los destinos más importantes del continente."
      },
      {
        type: "paragraph",
        text: "Ese modelo ha funcionado y continúa funcionando. El Banco Central informó que el país recibió alrededor de **US$9,700 millones en ingresos por turismo entre enero y septiembre de 2026**, un dato que confirma el peso que la actividad conserva dentro de la economía nacional."
      },
      {
        type: "paragraph",
        text: "Sin embargo, precisamente porque hemos tenido éxito, ha llegado el momento de plantearnos una pregunta diferente: **¿cuál debe ser la próxima etapa del turismo dominicano?**"
      },
      {
        type: "paragraph",
        text: "Mi respuesta es clara: debemos continuar fortaleciendo el turismo de sol y playa, pero simultáneamente convertir a República Dominicana en un país de **experiencias turísticas múltiples**. El visitante contemporáneo ya no necesariamente quiere permanecer todos sus días dentro de un mismo complejo hotelero. Cada vez existe mayor interés por conocer cómo vive la población, qué come, qué produce, cuáles son sus tradiciones y qué particularidades distinguen a una comunidad de otra."
      },
      {
        type: "paragraph",
        text: "Ahí el país posee una enorme riqueza todavía subutilizada. Punta Cana puede representar resorts y playas; Puerto Plata puede integrar historia, costa, aventura y patrimonio urbano; Samaná combina naturaleza, montañas, gastronomía y experiencias marinas; Santo Domingo posee historia, arquitectura, cultura y vida urbana; Jarabacoa y Constanza representan montañas, agricultura, clima y ecoturismo; Pedernales abre una nueva frontera asociada a naturaleza y conservación; y Santiago tiene potencial para profundizar el turismo empresarial, cultural, gastronómico y de eventos."
      },
      {
        type: "paragraph",
        text: "El desafío consiste en dejar de entender estos lugares únicamente como localidades y comenzar a gestionarlos como **productos turísticos diferenciados**, con identidad, conectividad, señalización, experiencias comercializables y estándares de servicio."
      },
      {
        type: "paragraph",
        text: "Existe una enorme diferencia económica entre recibir un turista y lograr que ese turista consuma la diversidad del territorio. Un visitante puede hospedarse en un hotel, comer dentro del hotel y consumir prácticamente todos sus servicios dentro de una misma propiedad. Ese modelo genera empleo e inversión y debe seguir siendo importante. Pero otro modelo puede multiplicar el impacto."
      },
      {
        type: "paragraph",
        text: "Imagine un visitante que llega a Punta Cana, pero dedica un día a conocer una comunidad agrícola, compra productos artesanales, visita un restaurante dominicano, contrata a un guía local y posteriormente pasa dos noches en Santo Domingo. Ese mismo turista ha creado una cadena económica mucho más extensa: el dinero llega al hotel, pero también al transportista, al restaurante, al guía, al agricultor, al artesano y al pequeño comerciante."
      },
      {
        type: "paragraph",
        text: "==Ese debería ser uno de los grandes objetivos de la próxima década turística dominicana: aumentar el valor económico que cada visitante deja distribuido en la sociedad.=="
      },
      {
        type: "paragraph",
        text: "La gastronomía tiene condiciones para convertirse en una marca internacional mucho más poderosa. Mangú, sancocho, pescado con coco, chivo, casabe, cacao, café, ron y una gran diversidad de platos regionales forman parte de un patrimonio que puede convertirse en experiencia turística. Pero para lograrlo no basta con tener buena comida: hay que construir rutas gastronómicas, documentar historias, identificar productos territoriales y profesionalizar la oferta."
      },
      {
        type: "paragraph",
        text: "Lo mismo ocurre con la cultura. Música, artesanía, museos, fiestas patronales, carnaval, tradiciones religiosas y arquitectura pueden formar parte de experiencias comercializables sin convertir nuestra identidad en una representación artificial. El objetivo no debe ser modificar la cultura para entretener al turista, sino **permitir que el visitante conozca la República Dominicana auténtica**."
      },
      {
        type: "paragraph",
        text: "Diversificar también exige conectar al pequeño empresario con la gran cadena turística. Miles de negocios dominicanos todavía operan lejos de los circuitos de compra de hoteles, operadores y grandes plataformas. Necesitamos mecanismos que conecten hoteles con productores agrícolas, visitantes con experiencias locales y restaurantes con proveedores nacionales."
      },
      {
        type: "paragraph",
        text: "Esa inclusión debe venir acompañada de estándares. El pequeño empresario necesita dominar calidad, puntualidad, higiene, servicio al cliente, pagos electrónicos, idiomas, marketing digital y manejo de reservas. La inclusión turística no consiste simplemente en permitir que alguien venda un producto: consiste en ayudarlo a convertirse en una empresa competitiva."
      },
      {
        type: "paragraph",
        text: "Diversificar no significa abandonar Punta Cana ni cuestionar el modelo de grandes hoteles. Sería un error. Los grandes complejos turísticos han ayudado a construir conectividad aérea, reconocimiento internacional, empleos e inversión. El objetivo debe ser utilizar esa plataforma como punto de partida para algo todavía mayor."
      },
      {
        type: "paragraph",
        text: "**El resort puede ser la puerta de entrada; República Dominicana completa debe convertirse en el destino.** Tenemos playas, montañas, historia, gastronomía, música, ciudades, naturaleza y, fundamentalmente, una hospitalidad que continúa siendo uno de los principales activos del país."
      },
      {
        type: "paragraph",
        text: "La siguiente revolución turística dominicana no necesariamente consistirá en recibir únicamente más personas. Consistirá en lograr que quienes nos visiten descubran más lugares, permanezcan más tiempo, consuman más productos dominicanos y regresen porque comprendieron que República Dominicana es mucho más que una extraordinaria playa."
      },
      {
        type: "sources",
        items: [
          { name: "Banco Central de la República Dominicana — contexto macroeconómico y turismo 2026", url: "https://www.bancentral.gov.do/a/d/6705" },
          { name: "SITUR — Ministerio de Turismo de la República Dominicana", url: "https://situr.mitur.gob.do/informes/reporte-semanal/" },
          { name: "Ministerio de Turismo de la República Dominicana", url: "https://www.mitur.gob.do/" }
        ]
      }
    ]
  },
  {
    id: "column-20261027-francelis-ia-turismo",
    slug: "inteligencia-artificial-turismo-revolucion-cambiara-forma-viajar",
    title: "Inteligencia artificial y turismo: la revolución que cambiará la forma de viajar",
    dek: "La IA está entrando en cada etapa del viaje. Francelis Solís plantea que República Dominicana debe pasar de utilizar tecnología turística a construir un verdadero destino inteligente.",
    category: "Turismo",
    author: "Francelis Solís",
    authorImage: "/uploads/francelis-solis-autora-v2.jpg",
    heroImage: "/uploads/francelis-turismo-ia.svg",
    heroCaption: "Ilustración editorial de Actualizard sobre inteligencia artificial, datos, planificación y experiencias personalizadas aplicadas al turismo dominicano.",
    status: "published",
    confidence: 91,
    sourceCount: 3,
    createdAt: "2026-10-27T21:10:00-04:00",
    updatedAt: "2026-10-27T21:10:00-04:00",
    publishedAt: "2026-10-27T21:10:00-04:00",
    tags: ["turismo","inteligencia artificial","tecnología","datos","hotelería","innovación","República Dominicana","Francelis Solís"],
    blocks: [
      {
        type: "paragraph",
        text: "La próxima gran competencia entre destinos turísticos posiblemente no se decidirá únicamente por quién tenga mejores hoteles, playas más atractivas o aeropuertos más modernos. También se decidirá por **quién conozca mejor al viajero y pueda responder con mayor precisión a sus necesidades**."
      },
      {
        type: "paragraph",
        text: "La inteligencia artificial, el análisis de datos, la automatización y los asistentes digitales están modificando prácticamente todas las etapas de un viaje: inspiración, búsqueda, reservación, transporte, alojamiento, entretenimiento, consumo y evaluación posterior de la experiencia."
      },
      {
        type: "paragraph",
        text: "República Dominicana tiene ante sí una oportunidad extraordinaria. Somos una potencia turística regional y, por esa misma razón, no deberíamos limitarnos a observar la transformación tecnológica del sector. **Debemos participar en ella.**"
      },
      {
        type: "paragraph",
        text: "Durante muchos años, el proceso de elegir vacaciones comenzaba visitando una agencia de viajes o comparando hoteles y vuelos en diferentes páginas. Hoy un viajero puede pedir a un asistente digital un itinerario de siete días, especificar presupuesto, intereses, edades, restricciones alimentarias y estilo de viaje, y obtener en segundos una propuesta completa."
      },
      {
        type: "paragraph",
        text: "Eso significa que los destinos turísticos tendrán que competir también dentro de los sistemas digitales que ayudan al consumidor a decidir dónde viajar. Si una experiencia dominicana no tiene información estructurada, fotografías adecuadas, ubicación correcta, reputación digital y sistemas de reserva accesibles, corre el riesgo de convertirse en invisible para este nuevo viajero."
      },
      {
        type: "paragraph",
        text: "La promoción turística también puede evolucionar. No todos los visitantes quieren lo mismo: una pareja puede buscar romance; una familia, seguridad y actividades infantiles; un joven, aventura; un adulto mayor, tranquilidad y accesibilidad; un empresario, conectividad; y un amante de la naturaleza puede preferir Samaná, Jarabacoa o Pedernales antes que un gran resort."
      },
      {
        type: "paragraph",
        text: "Con suficientes datos, el marketing puede dejar de vender exactamente el mismo país a todo el mundo y comenzar a mostrar **la República Dominicana específica que corresponde a cada perfil de visitante**."
      },
      {
        type: "paragraph",
        text: "La transformación también llegará con más fuerza a los hoteles. La IA puede ayudar a anticipar ocupación, organizar inventarios, optimizar consumo energético, identificar preferencias, responder preguntas frecuentes, gestionar reservas internas y detectar patrones de satisfacción antes de que un problema termine convertido en una mala evaluación pública."
      },
      {
        type: "paragraph",
        text: "Pero aquí debemos evitar un error: **automatizar el turismo no significa eliminar la hospitalidad humana**. Una máquina puede confirmar una reservación o recomendar un restaurante; existen momentos, sin embargo, donde una conversación, una sonrisa o la sensibilidad de un trabajador continúan siendo insustituibles."
      },
      {
        type: "paragraph",
        text: "El turismo es tecnología, pero también es emoción. La gran ventaja competitiva será combinar ambas."
      },
      {
        type: "paragraph",
        text: "Cada visitante genera información: cómo llegó, dónde se hospedó, cuánto tiempo permaneció, qué lugares visitó, qué actividades realizó y qué valoró positiva o negativamente. Analizados correctamente y respetando la privacidad, esos datos pueden convertirse en una extraordinaria herramienta de planificación."
      },
      {
        type: "paragraph",
        text: "Podemos comprender qué mercados crecen, qué destinos necesitan infraestructura, qué temporadas requieren promoción adicional, qué experiencias generan mayor gasto y qué servicios necesitan mejorar. La política turística del futuro deberá apoyarse cada vez menos exclusivamente en intuiciones y cada vez más en **inteligencia de datos**."
      },
      {
        type: "paragraph",
        text: "La revolución tecnológica tampoco puede quedarse únicamente dentro de las grandes cadenas hoteleras. Una pequeña empresa de excursiones puede utilizar IA para traducir su oferta; una artesana puede crear un catálogo digital; un restaurante puede organizar reservaciones; un guía puede preparar contenidos multilingües; una casa rural puede optimizar precios y disponibilidad."
      },
      {
        type: "paragraph",
        text: "La tecnología puede democratizar herramientas que antes estaban reservadas a grandes organizaciones. Pero para conseguirlo necesitamos formación. Los profesionales del turismo de los próximos años necesitarán combinar servicio al cliente e idiomas con análisis de datos, inteligencia artificial, comercio electrónico, reputación digital y ciberseguridad."
      },
      {
        type: "paragraph",
        text: "También existen riesgos: los algoritmos pueden equivocarse, los datos personales pueden utilizarse incorrectamente y una dependencia excesiva de plataformas puede perjudicar a pequeños negocios. La estrategia debe ser responsable."
      },
      {
        type: "paragraph",
        text: "==El objetivo no es construir hoteles donde nadie hable con nadie. Es construir un turismo donde la tecnología sea casi invisible porque todo funciona mejor.=="
      },
      {
        type: "paragraph",
        text: "República Dominicana ya posee una formidable base turística. La siguiente etapa debe incorporar una dimensión tecnológica más profunda: no solamente promocionar destinos digitalmente, sino convertirnos en un **destino inteligente**, capaz de entender al visitante, anticipar necesidades, gestionar recursos, integrar pequeños empresarios y mejorar utilizando información."
      },
      {
        type: "paragraph",
        text: "La inteligencia artificial no sustituirá aquello que hace especial al país. No reemplazará nuestras playas, gastronomía, música ni hospitalidad. Pero puede ayudarnos a conseguir que millones de personas las descubran de una manera más personalizada, eficiente y memorable."
      },
      {
        type: "paragraph",
        text: "La pregunta ya no es si la inteligencia artificial llegará al turismo. **Ya llegó.** La verdadera pregunta es si República Dominicana será simplemente usuaria de esa transformación o decidirá convertirse en uno de sus protagonistas."
      },
      {
        type: "sources",
        items: [
          { name: "SITUR — Sistema de Inteligencia Turística de República Dominicana", url: "https://situr.mitur.gob.do/" },
          { name: "ONU Turismo — innovación y transformación digital", url: "https://www.unwto.org/innovation-investment-and-digital-transformation" },
          { name: "Banco Central de la República Dominicana", url: "https://www.bancentral.gov.do/" }
        ]
      }
    ]
  },
  {
    id: "column-20261027-francelis-turismo-sostenible",
    slug: "turismo-sostenible-crecer-sin-destruir-lo-que-vienen-a-conocer",
    title: "Turismo sostenible: crecer sin destruir aquello que vienen a conocer",
    dek: "Francelis Solís analiza por qué el crecimiento turístico dominicano debe proteger playas, agua, comunidades y ecosistemas si quiere seguir siendo competitivo durante las próximas décadas.",
    category: "Turismo",
    author: "Francelis Solís",
    authorImage: "/uploads/francelis-solis-autora-v2.jpg",
    heroImage: "/uploads/francelis-turismo-sostenible.svg",
    heroCaption: "Ilustración editorial de Actualizard sobre turismo responsable, conservación, comunidades y desarrollo sostenible en República Dominicana.",
    status: "published",
    confidence: 92,
    sourceCount: 3,
    createdAt: "2026-10-27T21:15:00-04:00",
    updatedAt: "2026-10-27T21:15:00-04:00",
    publishedAt: "2026-10-27T21:15:00-04:00",
    tags: ["turismo","sostenibilidad","medio ambiente","comunidades","agua","economía circular","República Dominicana","Francelis Solís"],
    blocks: [
      {
        type: "paragraph",
        text: "Existe una paradoja que todo gran destino turístico debe enfrentar tarde o temprano: **el éxito puede convertirse en una amenaza para aquello que produjo el éxito**."
      },
      {
        type: "paragraph",
        text: "Una playa atrae visitantes porque está limpia. Una montaña porque conserva su naturaleza. Una comunidad porque mantiene su identidad. Una ciudad histórica porque preserva su patrimonio. Pero si el crecimiento turístico aumenta sin planificación, también puede aumentar el consumo de agua, la producción de residuos, la presión inmobiliaria, el tránsito y la transformación del territorio."
      },
      {
        type: "paragraph",
        text: "Por eso hablar de **turismo sostenible** ya no es una moda ambiental. Es hablar de supervivencia económica. República Dominicana continúa mostrando en 2026 el enorme peso de la actividad turística en la generación de divisas, inversión y empleo. Proteger esa industria significa también proteger el territorio del cual depende."
      },
      {
        type: "paragraph",
        text: "Durante muchos años, uno de los principales indicadores del éxito turístico ha sido sencillo: ¿cuántos visitantes llegaron? Naturalmente, ese número importa. Pero no debería ser el único."
      },
      {
        type: "paragraph",
        text: "También debemos preguntarnos cuánto gastó cada visitante, cuántos empleos formales generó, cuánto dinero permaneció dentro de las comunidades, cuánta agua consumió la actividad, cuántos residuos produjo, cómo afectó los ecosistemas y si mejoró o empeoró la calidad de vida de quienes residen en el destino."
      },
      {
        type: "paragraph",
        text: "Un país puede aumentar la cantidad de turistas mientras reduce la calidad de su producto. Incluso puede aumentar ingresos en el corto plazo destruyendo valor a largo plazo. Por eso necesitamos indicadores más sofisticados."
      },
      {
        type: "paragraph",
        text: "Cuando pensamos en infraestructura turística imaginamos aeropuertos, carreteras, hoteles y puertos. Pero también son infraestructura **los arrecifes, manglares, playas, ríos, bosques, montañas y la biodiversidad**."
      },
      {
        type: "paragraph",
        text: "La diferencia es que muchas de estas infraestructuras naturales tardaron siglos o miles de años en formarse y algunas no pueden reconstruirse después de ser destruidas. Una playa erosionada afecta directamente el valor de los hoteles que dependen de ella. Un río contaminado elimina oportunidades ecoturísticas. Un bosque degradado reduce el atractivo de una región."
      },
      {
        type: "paragraph",
        text: "Por eso conservación y rentabilidad turística no son objetivos opuestos. En numerosos casos son exactamente la misma cosa."
      },
      {
        type: "paragraph",
        text: "El agua será uno de los grandes debates del desarrollo turístico. Hoteles, piscinas, jardines, lavanderías, restaurantes y campos de golf pueden requerir cantidades significativas, pero las comunidades también necesitan agua. El crecimiento debe incorporar tecnologías de ahorro, tratamiento y reutilización, detección de fugas y paisajismo adaptado a cada zona."
      },
      {
        type: "paragraph",
        text: "Otro desafío está en los residuos. Un destino turístico genera alimentos, envases, botellas y materiales de todo tipo. La respuesta no puede seguir siendo simplemente recogerlos y trasladarlos a otro lugar. Tenemos que avanzar hacia separación, reciclaje, compostaje y reducción de productos desechables."
      },
      {
        type: "paragraph",
        text: "Aquí también existe una oportunidad económica: los residuos orgánicos pueden convertirse en compost; materiales reciclables pueden alimentar nuevas industrias; hoteles y restaurantes pueden modificar sus compras y sus proveedores pueden rediseñar envases. El turismo puede convertirse en un laboratorio de **economía circular**."
      },
      {
        type: "paragraph",
        text: "Existe además una dimensión social de la sostenibilidad que recibe menos atención. Un destino no puede considerarse verdaderamente sostenible si los hoteles prosperan mientras las comunidades cercanas permanecen excluidas. La población local debe encontrar oportunidades reales dentro de la economía turística."
      },
      {
        type: "paragraph",
        text: "Empleos, empresas, proveedores, restaurantes, transporte, agricultura, artesanía, excursiones y servicios culturales deben formar parte de esa integración. Cuando las comunidades reciben beneficios, también existe mayor incentivo para proteger los recursos turísticos."
      },
      {
        type: "paragraph",
        text: "Una de las grandes oportunidades consiste en profundizar la relación entre turismo y producción dominicana. Cada hotel necesita alimentos y servicios. Cuanto mayor sea la cantidad de productos nacionales que puedan integrarse a esa cadena cumpliendo estándares de calidad y suministro, mayor será el impacto económico del turismo."
      },
      {
        type: "paragraph",
        text: "Los países del Caribe tienen otra razón para tomarse seriamente la sostenibilidad: su exposición a fenómenos meteorológicos extremos, erosión costera y otras presiones climáticas. La resiliencia debe formar parte del diseño turístico, desde códigos de construcción y sistemas energéticos hasta gestión de emergencias y ordenamiento territorial."
      },
      {
        type: "paragraph",
        text: "En ocasiones se presenta el debate ambiental como si existieran solamente dos opciones: desarrollar o conservar. Esa es una falsa disyuntiva. La verdadera pregunta es **cómo desarrollar**."
      },
      {
        type: "paragraph",
        text: "Una inversión bien planificada puede crear miles de empleos y simultáneamente proteger el ambiente. Un hotel energéticamente eficiente puede reducir costos. Una playa limpia tiene mayor valor económico. Un ecosistema protegido puede producir experiencias turísticas durante generaciones."
      },
      {
        type: "paragraph",
        text: "==La sostenibilidad bien implementada no debe entenderse como un obstáculo al empresario, sino como una forma de proteger su inversión a largo plazo.=="
      },
      {
        type: "paragraph",
        text: "República Dominicana está construyendo hoy el turismo que existirá dentro de veinte años. Las decisiones sobre costas, montañas, agua, residuos y urbanización determinarán la calidad de ese futuro."
      },
      {
        type: "paragraph",
        text: "Queremos más turismo, inversión y empleos. Pero también debemos querer mejores ciudades, playas protegidas, comunidades prósperas y recursos naturales conservados. Porque existe una verdad sencilla: **nadie viaja miles de kilómetros para conocer un destino que destruyó precisamente aquello que lo hacía especial**."
      },
      {
        type: "sources",
        items: [
          { name: "Ministerio de Turismo de la República Dominicana", url: "https://www.mitur.gob.do/" },
          { name: "SITUR — Sistema de Inteligencia Turística", url: "https://situr.mitur.gob.do/" },
          { name: "ONU Turismo — desarrollo sostenible", url: "https://www.unwto.org/sustainable-development" }
        ]
      }
    ]
  },
  {
    id: "analysis-20261006-poner-en-29-derechos-humanos",
    slug: "poner-en-29-delincuencia-seguridad-derechos-humanos-republica-dominicana",
    title:
      "El “29” frente al crimen: seguridad, derechos humanos y el límite del poder policial en República Dominicana",
    dek:
      "La expresión popular resume una demanda social de respuestas contundentes frente a la delincuencia, pero también abre un debate sobre uso legítimo de la fuerza, debido proceso, percepción de impunidad y los límites que debe conservar el Estado.",
    category: "RD",
    author: "Redacción Actualizard",
    heroImage: "/uploads/29-seguridad-derechos-humanos-rd.svg",
    heroCaption:
      "Ilustración editorial de Actualizard sobre el debate entre seguridad ciudadana, actuación policial, justicia y derechos fundamentales en República Dominicana.",
    status: "published",
    confidence: 92,
    sourceCount: 4,
    createdAt: "2026-10-06T22:00:00-04:00",
    updatedAt: "2026-10-06T22:00:00-04:00",
    publishedAt: "2026-10-06T22:00:00-04:00",
    tags: [
      "República Dominicana",
      "seguridad ciudadana",
      "Policía Nacional",
      "derechos humanos",
      "debido proceso",
      "delincuencia",
      "uso de la fuerza",
      "análisis"
    ],
    blocks: [
      {
        type: "paragraph",
        text:
          "En República Dominicana, la expresión popular **“poner en 29”** se utiliza para describir, de manera cruda, la muerte de presuntos delincuentes durante actuaciones policiales. Para una parte de la sociedad, cansada de atracos, homicidios y estructuras criminales, la frase puede representar autoridad, respuesta inmediata y una forma de justicia frente a un sistema penal que muchas veces se percibe lento o insuficiente."
      },
      {
        type: "paragraph",
        text:
          "Sin embargo, detrás de esa aparente solución existe un debate mucho más complejo sobre **seguridad pública, derechos humanos y los límites del poder del Estado**. El punto central es que combatir con firmeza la delincuencia no es lo mismo que legitimar ejecuciones extrajudiciales."
      },
      {
        type: "paragraph",
        text:
          "Un agente policial puede utilizar fuerza letal cuando su vida o la de terceros se encuentra ante una amenaza real e inmediata. Esa facultad forma parte del deber estatal de proteger a la población. Pero si una persona podía ser detenida y, en cambio, es eliminada deliberadamente por considerársele delincuente, la actuación deja de ser una respuesta defensiva y entra en un terreno incompatible con el debido proceso."
      },
      {
        type: "paragraph",
        text:
          "La Constitución dominicana protege el derecho a la vida, prohíbe la pena de muerte y reconoce garantías de debido proceso y presunción de inocencia. Eso significa que una persona buscada por homicidio, robo, narcotráfico u otro delito continúa siendo jurídicamente un acusado o sospechoso hasta que los tribunales determinen su responsabilidad."
      },
      {
        type: "paragraph",
        text:
          "==La aceptación social del llamado “29” no surge de la nada.== Se alimenta de la frustración frente a la inseguridad, de casos de reincidencia y de la percepción de que algunos procesos judiciales no producen consecuencias suficientemente rápidas. Cuando el ciudadano cree que el delincuente entra por una puerta y sale por otra, aumenta la tolerancia hacia respuestas extremas."
      },
      {
        type: "paragraph",
        text:
          "Ese razonamiento, aunque comprensible desde el miedo o la indignación, contiene un riesgo institucional serio: **la Policía podría pasar de detener a decidir quién merece vivir y quién merece morir**. El problema no afecta solamente a quienes son señalados como delincuentes. También alcanza a cualquier ciudadano que pueda ser confundido, acusado erróneamente o colocado bajo sospecha."
      },
      {
        type: "paragraph",
        text:
          "En un Estado democrático, las funciones están separadas deliberadamente. La Policía investiga y detiene; el Ministerio Público acusa; los tribunales juzgan; y el sistema penitenciario ejecuta las condenas. Cuando una persona es eliminada fuera de una situación estrictamente necesaria para proteger una vida, esas funciones terminan concentrándose en segundos y sin posibilidad de defensa, revisión judicial o apelación."
      },
      {
        type: "paragraph",
        text:
          "También existe un efecto cultural. Si una sociedad comienza a celebrar sistemáticamente las muertes de sospechosos como evidencia de eficacia, la muerte puede convertirse en un indicador informal de éxito policial. Una operación con varios fallecidos puede percibirse como más contundente que una captura realizada sin disparos, aunque desde el punto de vista institucional la segunda pueda demostrar mayor capacidad operativa."
      },
      {
        type: "paragraph",
        text:
          "La seguridad pública debería medirse por otros resultados: reducción de homicidios y robos, captura de prófugos, desmantelamiento de estructuras criminales, calidad de las investigaciones, recuperación de armas, protección de víctimas y condenas obtenidas mediante expedientes sólidos."
      },
      {
        type: "paragraph",
        text:
          "Otro error frecuente consiste en presentar los derechos humanos como una protección exclusiva del delincuente. **No lo son.** Los derechos fundamentales limitan el poder del Estado precisamente porque ese poder puede ejercerse contra cualquier persona. Exigir que un sospechoso sea detenido y juzgado no implica pedir que un policía se deje matar frente a una agresión armada."
      },
      {
        type: "paragraph",
        text:
          "La diferencia decisiva está en determinar si la muerte fue consecuencia inevitable de una confrontación en la que existía un peligro inmediato para una vida, o si la muerte era el objetivo de la operación. Esa frontera debe ser investigable, documentada y sometida a control institucional."
      },
      {
        type: "paragraph",
        text:
          "Reducir la aceptación social del “29” requiere algo más que discursos sobre derechos humanos. Requiere una justicia que funcione: investigaciones profesionales, fiscales capaces de construir expedientes robustos, tribunales eficientes, sanciones proporcionales y un sistema penitenciario que reduzca la reincidencia."
      },
      {
        type: "paragraph",
        text:
          "República Dominicana necesita una Policía fuerte, bien equipada y capaz de actuar con rapidez. Pero **fuerza institucional no significa mayor cantidad de muertos**. Una Policía moderna debería poder localizar al delincuente, neutralizar una amenaza cuando sea indispensable, capturar cuando sea posible, preservar evidencias y entregar al sospechoso a la justicia."
      },
      {
        type: "paragraph",
        text:
          "Incluso desde una perspectiva estratégica, capturar a un integrante de una organización criminal puede resultar más útil que matarlo: un detenido puede aportar información sobre armas, cómplices, estructuras financieras, rutas y cadenas de mando."
      },
      {
        type: "paragraph",
        text:
          "El verdadero dilema dominicano no debería reducirse a escoger entre policías y delincuentes. La pregunta de fondo es si el país puede construir un sistema de seguridad suficientemente firme para enfrentar al criminal **sin entregar al Estado un poder ilimitado para decidir quién vive y quién muere**."
      },
      {
        type: "paragraph",
        text:
          "La respuesta debería ser afirmativa. El país necesita autoridad, inteligencia policial, mejores investigaciones y consecuencias reales para quien delinque. Pero también necesita preservar una frontera institucional que no puede desaparecer: ==la Policía puede neutralizar una amenaza, pero no sustituir al tribunal==."
      },
      {
        type: "sources",
        items: [
          {
            name: "Constitución de la República Dominicana",
            url: "https://www.consultoria.gov.do/Consulta/Home/FileManagement?documentId=3403197&managementType=1"
          },
          {
            name: "Ley Orgánica de la Policía Nacional núm. 590-16",
            url: "https://transparencia.policianacional.gob.do/wp-content/uploads/2022/10/LEY-590-16-ORGANICA-DE-LA-POLICIA-NACIONAL.pdf"
          },
          {
            name: "Naciones Unidas — Principios básicos sobre el empleo de la fuerza y de armas de fuego",
            url: "https://www.ohchr.org/es/instruments-mechanisms/instruments/basic-principles-use-force-and-firearms-law-enforcement"
          },
          {
            name: "Comisión Interamericana de Derechos Humanos",
            url: "https://www.oas.org/es/cidh/"
          }
        ]
      }
    ]
  },

  {
    id: "news-20261005-rd-debate-salud-mental",
    slug: "rd-debate-salud-mental-familia-escuela-pobreza-autodiagnostico",
    title:
      "RD Debate pone bajo foco la prevención, la desigualdad y el autodiagnóstico en salud mental",
    dek:
      "Especialistas reunidos en la edición dedicada a la salud mental coincidieron en fortalecer la prevención desde la familia y la escuela, ampliar el acceso a atención profesional y enfrentar la desinformación que circula en redes y herramientas digitales.",
    category: "Salud",
    author: "Redacción Actualizard",
    heroImage: "/uploads/rd-debate-salud-mental-portada-v3.webp",
    heroCaption: "Imagen de la edición de RD Debate dedicada a la salud mental. Fotografía aportada a Actualizard.",
    status: "published",
    confidence: 92,
    sourceCount: 5,
    createdAt: "2026-10-05T08:00:00-04:00",
    updatedAt: "2026-10-05T09:30:00-04:00",
    publishedAt: "2026-10-05T08:00:00-04:00",
    tags: [
      "RD Debate",
      "salud mental",
      "República Dominicana",
      "prevención",
      "familia",
      "escuela",
      "ansiedad",
      "autodiagnóstico"
    ],
    blocks: [
      {
        type: "paragraph",
        text:
          "**La salud mental fue colocada en el centro del debate público dominicano** durante la edición de RD Debate dedicada a este tema, en la que especialistas analizaron prevención, acceso a tratamiento, desigualdad social y el impacto de la información psicológica que circula en internet."
      },
      {
        type: "paragraph",
        text:
          "El intercambio dejó una idea transversal: ==la salud mental no puede abordarse únicamente desde el consultorio==. Los participantes defendieron una mirada que incorpore familia, escuela, comunidad, condiciones económicas y políticas públicas como parte del entorno que influye en el bienestar emocional."
      },
      {
        type: "paragraph",
        text:
          "Uno de los ejes principales fue la **prevención desde la familia y la escuela**. El psiquiatra **José Dunker** planteó que estos espacios deben funcionar como primera línea de apoyo antes de que determinadas situaciones evolucionen hasta requerir atención especializada."
      },
      {
        type: "paragraph",
        text:
          "La discusión también subrayó la importancia de detectar señales tempranas y normalizar la conversación sobre el sufrimiento emocional. La prevención, según el enfoque expuesto, implica crear condiciones para que niños, adolescentes y adultos puedan pedir ayuda antes de que una crisis alcance niveles más difíciles de manejar."
      },
      {
        type: "paragraph",
        text:
          "La psicoterapeuta **Vanessa Espaillat** vinculó el deterioro del bienestar emocional con factores como pobreza, marginalidad y falta de oportunidades. Su planteamiento amplió la discusión más allá del diagnóstico clínico y situó las condiciones de vida como un componente que puede aumentar la presión sobre individuos y familias."
      },
      {
        type: "paragraph",
        text:
          "Ese enfoque abrió otro punto central del programa: ==el acceso desigual a la atención profesional==. Recibir terapia, mantener consultas continuas o acceder a especialistas puede convertirse en una barrera para quienes disponen de menos recursos, lo que obliga a pensar la salud mental también desde la cobertura, la prevención comunitaria y la respuesta institucional."
      },
      {
        type: "paragraph",
        text:
          "Espaillat también advirtió sobre un fenómeno cada vez más visible: el uso de redes sociales y herramientas digitales para realizar **autodiagnósticos**. La disponibilidad inmediata de información puede ayudar a reconocer determinados síntomas, pero no sustituye una evaluación profesional capaz de considerar historia clínica, contexto y evolución de cada caso."
      },
      {
        type: "paragraph",
        text:
          "La advertencia adquiere especial relevancia en un momento en que conceptos psicológicos circulan masivamente en videos cortos, publicaciones virales, buscadores y sistemas de inteligencia artificial. El riesgo aparece cuando una descripción general termina siendo interpretada como un diagnóstico personal sin evaluación clínica."
      },
      {
        type: "paragraph",
        text:
          "Por su parte, el psicólogo **Noel de la Rosa** llamó la atención sobre la comercialización y banalización de conceptos de salud mental en las redes sociales. Ansiedad, trauma, depresión o trastorno son términos utilizados con creciente frecuencia, pero su popularidad no garantiza que estén siendo empleados con el rigor necesario."
      },
      {
        type: "paragraph",
        text:
          "La discusión dejó así dos retos simultáneos: ampliar el conocimiento público sobre salud mental y, al mismo tiempo, evitar que la divulgación termine simplificando problemas complejos. ==Hablar más del tema es positivo, pero la información debe estar acompañada de responsabilidad y orientación profesional==."
      },
      {
        type: "paragraph",
        text:
          "Otro componente importante fue el papel de las instituciones. El debate apuntó hacia una respuesta en la que centros educativos, servicios de salud, familias, empleadores y organismos públicos puedan actuar de manera más coordinada, especialmente en prevención y detección temprana."
      },
      {
        type: "paragraph",
        text:
          "Para República Dominicana, el desafío planteado por los especialistas no consiste solamente en disponer de más profesionales, sino también en reducir barreras de acceso, fortalecer la educación emocional y construir redes de apoyo capaces de intervenir antes de que una situación alcance niveles críticos."
      },
      {
        type: "paragraph",
        text:
          "La principal conclusión de la jornada fue que **hablar más de salud mental no basta**. El reto es traducir la conversación en prevención real, acceso a atención, acompañamiento oportuno y mayor responsabilidad frente a la información que circula en internet sobre el bienestar emocional."
      },
      {
        type: "sources",
        items: [
          {
            name: "RD Debate anuncia edición sobre salud mental",
            url: "https://2028.do/noticias/rd-debate-dedicara-su-proxima-edicion-a-la-salud-mental-con-seis-espec-918d50"
          },
          {
            name: "José Dunker: familia y escuela como primera línea",
            url: "https://deultimominuto.com/nacionales/dunker-apuesta/"
          },
          {
            name: "Vanessa Espaillat: pobreza y falta de oportunidades",
            url: "https://deultimominuto.com/nacionales/vanessa-espaillat/"
          },
          {
            name: "Vanessa Espaillat sobre autodiagnóstico y salud mental",
            url: "https://www.touringdominicanrepublic.com/2026/10/04/psicologa-vanessa-espaillat-alerta-sobre-uso-de-chatgpt-para-autodiagnostico-de-salud-mental/"
          },
          {
            name: "Noel de la Rosa sobre salud mental y redes sociales",
            url: "https://despiertaquisqueya.com/sociales/2026/10/noel-de-la-rosa-alerta-sobre-comercializacion-de-la-salud-mental-en-las-redes-sociales/"
          }
        ]
      }
    ]
  },

  {
    id: "launch-20260929-tserv-libroseller-57",
    slug: "tserv-lanzo-libroseller-57-ecosistema-crear-maquetar-vender-libros",
    title:
      "TServ lanzó Libroseller 5.7, un ecosistema para crear, maquetar y vender libros",
    dek:
      "La plataforma integra generación de libros, maquetación profesional y comercialización web. Martín Mateo, CEO de TServ, presentó además su visión sobre la superinteligencia y el futuro de la automatización.",
    category: "Tecnología",
    author: "Redacción Actualizard",
    heroImage: "/uploads/tserv-libroseller-57-martin-mateo.jpg",
    heroCaption:
      "Imagen editorial a partir de referencias aportadas para representar la presentación de Martín Mateo, CEO de TServ, durante la cobertura de Libroseller 5.7.",
    status: "published",
    confidence: 88,
    sourceCount: 1,
    createdAt: "2026-09-29T10:00:00-04:00",
    updatedAt: "2026-10-05T01:10:00-04:00",
    publishedAt: "2026-09-29T10:00:00-04:00",
    tags: [
      "TServ",
      "Libroseller 5.7",
      "Martín Mateo",
      "inteligencia artificial",
      "superinteligencia",
      "automatización",
      "tecnología editorial"
    ],
    blocks: [
      {
        type: "paragraph",
        text:
          "**TServ lanzó oficialmente el 29 de septiembre de 2026 Libroseller 5.7**, un ecosistema tecnológico diseñado para integrar en una sola plataforma tres etapas clave de la producción editorial: ==generación de libros, maquetación profesional y venta mediante una aplicación web==."
      },
      {
        type: "paragraph",
        text:
          "La propuesta busca reducir la fragmentación que obliga a autores y pequeñas editoriales a utilizar herramientas diferentes para desarrollar un manuscrito, organizarlo, convertirlo en una publicación profesional y finalmente comercializarlo. El flujo planteado por la plataforma puede resumirse como **idea → manuscrito → maquetación → publicación → venta**."
      },
      {
        type: "paragraph",
        text:
          "Detrás del proyecto se encuentra **Martín Mateo, CEO de TServ**, presentado en el marco de la iniciativa como ==filántropo de la Inteligencia Artificial y científico de datos==. Durante la presentación, Mateo sostuvo que la aceleración de los sistemas de IA está llevando a la sociedad hacia una nueva etapa tecnológica que describió como la **era de la superinteligencia**."
      },
      {
        type: "quote",
        text:
          "Para 2030, más del 45 % de las tareas cotidianas estarán cerca de un 85 % de automatización.",
        attribution:
          "Martín Mateo, CEO de TServ — proyección presentada durante el lanzamiento"
      },
      {
        type: "paragraph",
        text:
          "La cifra corresponde a una **proyección formulada por Mateo** sobre la velocidad de adopción de la automatización. El ejecutivo también instó a los nuevos profesionales a estudiar inteligencia artificial y desarrollar competencias en estas tecnologías, al considerar que serán determinantes para desenvolverse en el mercado laboral de los próximos años."
      },
      {
        type: "paragraph",
        text:
          "Con Libroseller 5.7, TServ apuesta por convertir la inteligencia artificial en una capa transversal del proceso editorial y no únicamente en una herramienta para generar texto. El reto de la plataforma será demostrar que esa integración puede traducirse en ==producción editorial más rápida, profesional y accesible== para autores, instituciones y pequeñas editoriales."
      },
      {
        type: "sources",
        items: [
          {
            name: "Libroseller — plataforma oficial",
            url: "https://www.libroseller.com/"
          }
        ]
      }
    ]
  },

  {
    id: "launch-20260929-diligencias",
    slug: "diligencias-lanzamiento-plataforma-mandados-entregas-trabajo-independiente",
    title:
      "DILIGENCIAS inicia operaciones con una apuesta por transformar los mandados, las entregas y el trabajo independiente",
    dek:
      "La nueva plataforma busca conectar personas y negocios que necesitan resolver gestiones cotidianas con trabajadores independientes y propietarios de vehículos disponibles para ejecutarlas, bajo una visión centrada en tiempo, movilidad y nuevas oportunidades de ingreso.",
    category: "Negocios",
    author: "Redacción Actualizard",
    heroImage: "/uploads/diligencias-portada.jpg",
    heroCaption:
      "Imagen editorial ilustrativa. El artículo presenta los objetivos, la propuesta y las expectativas declaradas para el lanzamiento de DILIGENCIAS.",
    status: "published",
    confidence: 90,
    sourceCount: 1,
    createdAt: "2026-09-29T08:00:00-04:00",
    updatedAt: "2026-09-29T18:34:00-04:00",
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
          "**DILIGENCIAS inicia operaciones** con una idea sencilla en su formulación, pero ambiciosa en su alcance: que una persona o una empresa no tenga que detener su día para resolver cada compra, entrega, envío, trámite o gestión que aparece en la vida cotidiana. La plataforma pretende organizar digitalmente una actividad que ya existe en las ciudades —hacer diligencias para otros— y convertirla en una red capaz de ==conectar necesidades concretas con personas disponibles para resolverlas==."
      },
      {
        type: "paragraph",
        text:
          "El proyecto parte de un **problema reconocible**. Buscar un documento, recoger una compra, entregar mercancía, llevar un paquete, retirar un artículo, realizar una gestión administrativa o mover un producto de un punto a otro puede consumir una o varias horas entre tránsito, desplazamientos y espera. Para quien trabaja, estudia, administra un negocio o tiene responsabilidades familiares, **ese tiempo tiene un valor económico y personal**. DILIGENCIAS quiere ==convertir esa pérdida de tiempo en una tarea delegable==."
      },
      {
        type: "paragraph",
        text:
          "La propuesta **no se limita a la mensajería tradicional**. Su visión contempla un ==ecosistema de servicios de proximidad== en el que una solicitud pueda ser atendida según el tipo de diligencia, la ubicación, la disponibilidad y el medio de transporte necesario. Una bicicleta puede resolver una entrega corta; una motocicleta o una passola puede atender documentos y compras pequeñas; un automóvil puede cubrir necesidades de mayor distancia o capacidad; y vehículos de mayor tamaño podrían incorporarse en servicios que requieran volumen adicional."
      },
      {
        type: "quote",
        text:
          "La idea central de DILIGENCIAS es **conectar una necesidad real con una persona disponible para resolverla**, utilizando la tecnología para organizar ==tiempo, movilidad y capacidad ociosa==.",
        attribution: "Concepto de lanzamiento de DILIGENCIAS"
      },
      {
        type: "paragraph",
        text:
          "Uno de los objetivos centrales de la plataforma es ==devolver tiempo al usuario==. En este modelo, el servicio no consiste únicamente en transportar un objeto: consiste en permitir que otra persona continúe con su jornada mientras una tarea concreta se ejecuta por ella. Para un profesional puede significar no abandonar una oficina; para una familia, evitar un desplazamiento innecesario; para un comerciante, mantener una operación funcionando mientras una entrega o gestión ocurre en paralelo."
      },
      {
        type: "paragraph",
        text:
          "El segundo objetivo está del lado de quienes prestarán los servicios. Miles de personas poseen motocicletas, passolas, bicicletas, automóviles u otros vehículos que permanecen parte del día sin producir ingresos. DILIGENCIAS aspira a convertir parte de esa capacidad disponible en **oportunidades de trabajo flexible**. La expectativa es que una persona pueda conectarse cuando tenga disponibilidad, aceptar servicios compatibles con su ubicación y su medio de transporte y ==generar ingresos sin depender necesariamente de una jornada rígida==."
      },
      {
        type: "paragraph",
        text:
          "La plataforma también mira hacia **pequeños negocios, profesionales y empresas** que necesitan logística, pero que no siempre justifican mantener una flotilla propia o un mensajero permanente. Una tienda puede requerir entregas durante determinadas horas; una oficina puede necesitar mover documentos; un emprendimiento digital puede despachar productos; y una empresa puede requerir gestiones específicas sin ampliar su estructura fija. En ese segmento, DILIGENCIAS busca funcionar como una ==red logística bajo demanda==."
      },
      {
        type: "paragraph",
        text:
          "La tecnología será el mecanismo de coordinación, pero **la confianza será el verdadero capital de la plataforma**. Para crecer, DILIGENCIAS tendrá que demostrar que puede identificar adecuadamente a los participantes, registrar operaciones, permitir seguimiento, manejar incidencias y construir reputación entre usuarios y prestadores. La rapidez es importante, pero una plataforma que mueve productos, documentos y encargos personales necesita ==combinar velocidad con trazabilidad y responsabilidad==."
      },
      {
        type: "paragraph",
        text:
          "Otro desafío será **alcanzar densidad operativa**. Una plataforma de dos lados necesita suficientes solicitudes para que quienes ofrecen el servicio encuentren oportunidades y suficientes prestadores para que quien solicita una diligencia reciba respuesta rápida. Tener cobertura nominal en muchas zonas vale menos que disponer de una red activa en los lugares donde se promete servicio. El crecimiento, por tanto, dependerá de ==equilibrar oferta y demanda==."
      },
      {
        type: "bullets",
        items: [
          "**Ahorrar tiempo:** reducir las horas que personas y negocios dedican a gestiones que pueden delegarse.",
          "**Generar ingresos:** crear oportunidades flexibles para propietarios de distintos medios de transporte.",
          "**Logística bajo demanda:** ofrecer a comercios y empresas una red utilizable cuando la necesiten.",
          "**Organizar el mercado:** utilizar tecnología para estructurar un ecosistema de mandados y diligencias hoy fragmentado.",
          "**Construir confianza:** asociar la marca a rapidez, disponibilidad y trazabilidad.",
          "**Escalar la red:** avanzar desde encargos simples hacia necesidades logísticas más amplias."
        ]
      },
      {
        type: "paragraph",
        text:
          "La expectativa de largo plazo es que DILIGENCIAS deje de percibirse únicamente como una aplicación que se utiliza para enviar paquetes y se convierta en una **herramienta cotidiana para resolver necesidades urbanas**. El escenario al que apunta es sencillo de describir: cuando una persona piense ==«necesito que alguien me resuelva esto»==, la plataforma quiere estar entre las primeras opciones que considere."
      },
      {
        type: "paragraph",
        text:
          "Ese objetivo abre **un mercado mayor que el de las entregas**. Una red suficientemente amplia podría atender rutas programadas, encargos recurrentes, distribución de última milla, apoyo logístico a comercios y otras actividades que todavía se coordinan mediante llamadas, contactos informales o soluciones dispersas. En ese punto, el activo más importante de DILIGENCIAS no sería una función específica de la aplicación, sino ==la calidad y amplitud de su red==."
      },
      {
        type: "paragraph",
        text:
          "El lanzamiento, sin embargo, es apenas el comienzo. El éxito no puede medirse solamente por descargas, registros o presencia en redes sociales. ==La prueba real será operativa==: cuántas solicitudes pueden resolverse, cuánto tarda la respuesta, qué tan confiable es el servicio, cuánto valor genera para los prestadores y cuántos usuarios deciden volver después de su primera experiencia."
      },
      {
        type: "paragraph",
        text:
          "DILIGENCIAS entra así en un espacio donde convergen **economía digital, movilidad urbana, logística y trabajo independiente**. Su propuesta parte de una premisa concreta: en una ciudad existen simultáneamente personas con necesidades por resolver y personas con tiempo, movilidad y capacidad para resolverlas. La plataforma quiere convertirse en ==el puente entre ambas==."
      },
      {
        type: "paragraph",
        text:
          "Si logra construir una red suficiente, ofrecer tiempos razonables, mantener costos competitivos y desarrollar mecanismos sólidos de confianza, DILIGENCIAS podría evolucionar de un servicio de mandados hacia una **infraestructura flexible de soluciones cotidianas para personas y empresas**. Esa es, por ahora, ==su principal expectativa y también su mayor desafío==."
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
    heroImage: "/uploads/onu-reforma-representacion-global.svg",
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
    heroImage: "/uploads/bcrd-inflacion-actividad-economica.svg",
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
    heroImage: "/uploads/aduanas-fiscalizacion-comercio.svg",
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
    heroImage: "/uploads/gemini-live-razonamiento-tiempo-real.svg",
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
    heroImage: "/uploads/gemini-apps-conectadas.svg",
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
