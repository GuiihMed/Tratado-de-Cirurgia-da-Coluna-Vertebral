import { Locale } from "@/lib/types";

export interface DebateGuest {
  nome: string;
  cargo: string;
  instituicao: string;
  slug?: string;
  foto_url?: string;
  orcid?: string;
}

export interface DebateEpisode {
  id: string;
  numero: number;
  slug: string;
  titulo_pt: string;
  titulo_en: string;
  titulo_es: string;
  subtitulo_pt: string;
  subtitulo_en: string;
  subtitulo_es: string;
  descricao_pt: string;
  descricao_en: string;
  descricao_es: string;
  vimeoId: string;
  vimeoUrl: string;
  thumbnailUrl?: string;
  vimeoThumbnailUrl?: string;
  spotifyUrl?: string;
  capituloNum: number;
  capituloTitulo_pt: string;
  capituloTitulo_en: string;
  capituloTitulo_es: string;
  secaoId: number;
  secaoTitulo_pt: string;
  secaoTitulo_en: string;
  secaoTitulo_es: string;
  duracao: string;
  dataPublicacao: string;
  convidados: DebateGuest[];
  destaques_pt: string[];
  destaques_en: string[];
  destaques_es: string[];
  tags: string[];
  status: "publicado" | "em_breve";
}

export const DEBATE_EPISODES: DebateEpisode[] = [
  {
    id: "1",
    numero: 1,
    slug: "episodio-01-coluna-vertebral-no-plano-sagital",
    titulo_pt: "Episódio 01 – Coluna Vertebral no Plano Sagital",
    titulo_en: "Episode 01 – The Spine in the Sagittal Plane",
    titulo_es: "Episodio 01 – Columna Vertebral en el Plano Sagital",
    subtitulo_pt: "Debate científico sobre equilíbrio espinopélvico, classificações contemporâneas e planejamento cirúrgico",
    subtitulo_en: "Scientific debate on spinopelvic balance, contemporary classifications, and surgical planning",
    subtitulo_es: "Debate científico sobre equilibrio espinopélvico, clasificaciones contemporáneas y planificación quirúrgica",
    descricao_pt:
      "Neste episódio de estreia do Tratado em Debate, o Dr. Marcelo Risso e o Dr. Paulo Cavali aprofundam a discussão sobre os conceitos anátomo-biomecânicos essenciais do Capítulo 8 do Tratado da SBC. Abordam os parâmetros radiográficos espinopélvicos (Incidência Pélvica, Versão Pélvica, Inclinação Sacral, SVA e Lordose Lombar), o conceito de cone de economia de Jean Dubousset, a classificação morfológica de Roussouly, os modificadores SRS-Schwab e como esses fundamentos norteiam a tomada de decisão cirúrgica para restauração do alinhamento global e prevenção de complicações como falha mecânica e doença do segmento adjacente.",
    descricao_en:
      "In this premiere episode of the Treatise in Debate, Dr. Marcelo Risso and Dr. Paulo Cavali discuss essential anatomical and biomechanical concepts from Chapter 8 of the SBC Treatise. They examine radiographic spinopelvic parameters (Pelvic Incidence, Pelvic Tilt, Sacral Slope, SVA, and Lumbar Lordosis), Dubousset's cone of economy, Roussouly morphological classification, SRS-Schwab modifiers, and how these principles guide surgical decision-making for restoring global alignment and preventing mechanical failures.",
    descricao_es:
      "En este episodio de estreno del Tratado en Debate, el Dr. Marcelo Risso y el Dr. Paulo Cavali profundizan en los conceptos anátomo-biomecánicos esenciales del Capítulo 8 del Tratado de la SBC. Abordan los parámetros radiográficos espinopélvicos (Incidencia Pélvica, Versión Pélvica, Pendiente Sacra, SVA y Lordosis Lumbar), el cono de economía de Jean Dubousset, la clasificación de Roussouly, modificadores SRS-Schwab y cómo guían la decisión quirúrgica para restaurar el alineamiento global y prevenir fallas mecánicas.",
    vimeoId: "1220279985",
    vimeoUrl: "https://player.vimeo.com/video/1220279985",
    thumbnailUrl: "/assets/debate-ep1-cover.jpg",
    vimeoThumbnailUrl:
      "https://i.vimeocdn.com/video/2199863320-754ffaa4403daf6290f5953e4fa3c856c7b64d1bca3133a296046bf97f7fc56a-d_1280x720?region=us",
    spotifyUrl: "https://open.spotify.com/episode/7hhh4RRDMS4xfx67QkUEZY?si=mkVupBTQSUOdg64qlboZ3Q",
    capituloNum: 8,
    capituloTitulo_pt: "Coluna Vertebral no Plano Sagital",
    capituloTitulo_en: "The Spine in the Sagittal Plane",
    capituloTitulo_es: "Columna Vertebral en el Plano Sagital",
    secaoId: 1,
    secaoTitulo_pt: "Ciências Básicas e Fundamentos",
    secaoTitulo_en: "Basic Concepts",
    secaoTitulo_es: "Conceptos Básicos",
    duracao: "45:54",
    dataPublicacao: "2026",
    convidados: [
      {
        nome: "Dr. Marcelo Italo Risso Neto",
        cargo: "Editor-Chefe do Tratado SBC • Prof. Dr. UNICAMP",
        instituicao: "UNICAMP • Hospital Alemão Oswaldo Cruz",
        slug: "marcelo-italo-risso-neto",
        foto_url: "/assets/marcelo-risso.png",
        orcid: "0000-0003-0990-6901",
      },
      {
        nome: "Dr. Paulo Tadeu Maia Cavali",
        cargo: "Coordenador de Deformidades • Doutor em Cirurgia",
        instituicao: "FCM-Unicamp • AACD • Hospital Sírio-Libanês",
        slug: "paulo-tadeu-maia-cavali",
        foto_url: "/assets/avatar-placeholder.png",
        orcid: "0000-0001-5226-505X",
      },
    ],
    destaques_pt: [
      "Parâmetros espinopélvicos fundamentais: PI, PT, SS e cálculo da Lordose Lombar ideal.",
      "Cone de Economia de Dubousset e gasto energético no equilíbrio postural.",
      "Tipos de curvatura de Roussouly e restauração proporcional da lordose.",
      "Critérios SRS-Schwab e GAP Score na prevenção de falhas mecânicas.",
      "Correlações clínicas em artrodeses curtas e correções de deformidades complexas.",
    ],
    destaques_en: [
      "Key spinopelvic parameters: PI, PT, SS, and ideal Lumbar Lordosis formula.",
      "Dubousset's Cone of Economy and energetic expenditure in postural balance.",
      "Roussouly curve types and proportional lordosis reconstruction.",
      "SRS-Schwab criteria and GAP Score in preventing hardware failures.",
      "Clinical correlation in short fusions and complex adult deformity surgery.",
    ],
    destaques_es: [
      "Parámetros espinopélvicos clave: PI, PT, SS y cálculo de la lordosis lumbar ideal.",
      "Cono de Economía de Dubousset y gasto energético en el balance postural.",
      "Tipos de curvatura de Roussouly y reconstrucción proporcional de lordosis.",
      "Criterios SRS-Schwab y puntuación GAP en la prevención de fallas mecánicas.",
      "Correlación clínica en fusiones cortas y deformidades complejas del adulto.",
    ],
    tags: [
      "Equilíbrio Sagital",
      "Incidência Pélvica",
      "Lordose Lombar",
      "Cone de Economia",
      "Roussouly",
      "SRS-Schwab",
      "Cirurgia de Coluna",
      "SBC",
    ],
    status: "publicado",
  },
  {
    id: "2",
    numero: 2,
    slug: "episodio-02-principios-da-artrodese-biologia-do-enxerto-e-substitutos-osseos",
    titulo_pt: "Episódio 02 – Princípios da Artrodese, Biologia do Enxerto e Substitutos Ósseos",
    titulo_en: "Episode 02 – Principles of Arthrodesis, Graft Biology, and Bone Substitutes",
    titulo_es: "Episodio 02 – Principios de la Artrodesis, Biología del Injerto y Sustitutos Óseos",
    subtitulo_pt: "Debate aprofundado sobre osteogênese, osteoindução, osteocondução, preparo do leito cirúrgico e prevenção de pseudoartrose",
    subtitulo_en: "In-depth clinical debate on osteogenesis, osteoinduction, osteoconduction, surgical bed preparation, and pseudarthrosis prevention",
    subtitulo_es: "Debate clínico en profundidad sobre osteogénesis, osteoinducción, osteoconducción, preparación del lecho quirúrgico y prevención de seudoartrosis",
    descricao_pt:
      "Neste segundo episódio do Tratado em Debate, o Dr. Marcelo Risso recebe o Dr. Raphael Martus Marcon, autor do Capítulo 9 do Tratado da SBC, para discutir os fundamentos biológicos e mecânicos que determinam o sucesso da artrodese da coluna vertebral. Abordam a tríade de consolidação óssea (osteogênese, osteoindução e osteocondução), as indicações e limitações do autoenxerto, aloenxertos, matriz óssea desmineralizada (DBM), proteínas morfogenéticas (rhBMP-2) e cerâmicas sintéticas. Discutem também a importância da decorticação cirúrgica minuciosa, o impacto de fatores sistêmicos do paciente e as condutas para prevenção e manejo da pseudoartrose.",
    descricao_en:
      "In this second episode of the Treatise in Debate, Dr. Marcelo Risso hosts Dr. Raphael Martus Marcon, author of Chapter 9 of the SBC Treatise, to discuss the biological and biomechanical foundations determining spinal arthrodesis success. They explore the bone healing triad (osteogenesis, osteoinduction, osteoconduction), indications and limitations of autografts, allografts, demineralized bone matrix (DBM), bone morphogenetic proteins (rhBMP-2), and synthetic ceramics, emphasizing meticulous surgical bed preparation and pseudarthrosis prevention.",
    descricao_es:
      "En este segundo episodio del Tratado en Debate, el Dr. Marcelo Risso recibe al Dr. Raphael Martus Marcon, autor del Capítulo 9 del Tratado de la SBC, para debatir los fundamentos biológicos y biomecánicos del éxito de la artrodesis vertebral. Analizan la tríada de consolidación ósea (osteogénesis, osteoinducción y osteoconducción), las indicaciones y limitaciones del autoinjerto, aloinjertos, matriz ósea desmineralizada (DBM), proteínas morfogenéticas (rhBMP-2) y cerámicas sintéticas, con énfasis en la preparación meticulosa del lecho y la prevención de la seudoartrosis.",
    vimeoId: "1225402821",
    vimeoUrl: "https://player.vimeo.com/video/1225402821",
    thumbnailUrl: "/assets/debate-ep2-cover.jpg",
    vimeoThumbnailUrl:
      "https://i.vimeocdn.com/video/2199115788-6aa45ed6065c88cca8cf44c9a320e314a39275887fe5eaf0834650a0af3754f9-d_1280x720?region=us",
    spotifyUrl: "https://open.spotify.com/episode/2kaOBpTY0aGjXUnb0FkcIA",
    capituloNum: 9,
    capituloTitulo_pt: "Princípios da Artrodese, Biologia do Enxerto e Substitutos Ósseos na Coluna",
    capituloTitulo_en: "Principles of Arthrodesis, Graft Biology, and Bone Substitutes in Spine Surgery",
    capituloTitulo_es: "Principios de la Artrodesis, Biología del Injerto y Sustitutos Óseos en la Columna",
    secaoId: 1,
    secaoTitulo_pt: "Ciências Básicas e Fundamentos",
    secaoTitulo_en: "Basic Concepts",
    secaoTitulo_es: "Conceptos Básicos",
    duracao: "52:10",
    dataPublicacao: "2026",
    convidados: [
      {
        nome: "Dr. Marcelo Italo Risso Neto",
        cargo: "Editor-Chefe do Tratado SBC • Prof. Dr. UNICAMP",
        instituicao: "UNICAMP • Hospital Alemão Oswaldo Cruz",
        slug: "marcelo-italo-risso-neto",
        foto_url: "/assets/marcelo-risso.png",
        orcid: "0000-0003-0990-6901",
      },
      {
        nome: "Dr. Raphael Martus Marcon",
        cargo: "Chefe do Grupo de Coluna IOT-HC-FMUSP • Prof. Associado FMUSP",
        instituicao: "Faculdade de Medicina da USP (FMUSP)",
        slug: "raphael-martus-marcon",
        foto_url: "/assets/avatar-placeholder.png",
        orcid: "0000-0001-5958-5646",
      },
    ],
    destaques_pt: [
      "A tríade biológica da fusão: osteogênese, osteoindução e osteocondução.",
      "Autoenxerto da crista ilíaca vs. enxerto local: quando o padrão-ouro é indispensável.",
      "Substitutos ósseos sintéticos e biológicos: DBM, cerâmicas e aspirado de medula óssea (BMAC).",
      "Uso criterioso de rhBMP-2: eficácia, dosagem e precauções no segmento cervical.",
      "Decorticação e preparo do leito cirúrgico como determinante chave contra a pseudoartrose.",
    ],
    destaques_en: [
      "The biological triad of fusion: osteogenesis, osteoinduction, and osteoconduction.",
      "Autologous iliac crest vs. local bone graft: when the gold standard is essential.",
      "Synthetic and biological bone substitutes: DBM, ceramics, and BMAC.",
      "Judicious use of rhBMP-2: efficacy, dosage, and cervical precautions.",
      "Meticulous decortication and bed preparation as key factors against pseudarthrosis.",
    ],
    destaques_es: [
      "La tríada biológica de fusión: osteogénesis, osteoinducción y osteoconducción.",
      "Autoinjerto de cresta ilíaca vs. injerto local: cuándo el estándar de oro es indispensable.",
      "Sustitutos óseos sintéticos y biológicos: DBM, cerámicas y aspirado de médula ósea (BMAC).",
      "Uso juicioso de rhBMP-2: eficacia, dosificación y precauciones en la columna cervical.",
      "Decorticado y preparación del lecho quirúrgico como factores clave contra la seudoartrosis.",
    ],
    tags: [
      "Artrodese",
      "Biologia do Enxerto",
      "Substitutos Ósseos",
      "Osteogênese",
      "Osteoindução",
      "BMP",
      "Pseudoartrose",
      "Cirurgia de Coluna",
      "SBC",
    ],
    status: "publicado",
  },
  {
    id: "3",
    numero: 3,
    slug: "episodio-03-monitorizacao-neurofisiologica-intraoperatoria-em-cirurgia-de-coluna",
    titulo_pt: "Episódio 03 – Monitorização Neurofisiológica Intraoperatória em Cirurgia de Coluna",
    titulo_en: "Episode 03 – Intraoperative Neurophysiological Monitoring in Spine Surgery",
    titulo_es: "Episodio 03 – Monitorización Neurofisiológica Intraoperatoria en Cirugía de Columna",
    subtitulo_pt:
      "Debate científico sobre monitoramento multimodal, PEM córtico-miogênico, PESS, onda D, mapeamento radicular e resposta sistematizada a alertas cirúrgicos",
    subtitulo_en:
      "Scientific debate on multimodal monitoring, transcranial MEPs, SSEP, D-wave, radicular mapping, and response protocols for intraoperative alerts",
    subtitulo_es:
      "Debate científico sobre monitoreo multimodal, PEM córtico-miogénico, PESS, onda D, mapeo radicular y protocolos de respuesta ante alertas quirúrgicas",
    descricao_pt:
      "Neste terceiro episódio do Tratado em Debate, o Dr. Marcelo Risso recebe o Dr. Ricardo José Rodriguez Ferreira, autor principal do Capítulo 14 do Tratado da SBC, para aprofundar os princípios e as diretrizes clínicas da monitorização neurofisiológica intraoperatória (MNIO) em cirurgias de coluna. Eles debatem a essencial distinção entre monitoramento contínuo e mapeamento anatômico, as aplicações e limitações do potencial evocado motor córtico-miogênico (PEMcm), potencial evocado somatossensitivo (PESS), eletromiografia livre e estimulada (frEMG e tEMG), reflexos sacrais e o valor prognóstico da onda D. Discutem também os requisitos da anestesia venosa total (TIVA), o impacto de fatores hemodinâmicos e sistêmicos, e o protocolo de ação imediata diante da queda de potenciais durante instrumentações e correções de deformidades.",
    descricao_en:
      "In this third episode of the Treatise in Debate, Dr. Marcelo Risso hosts Dr. Ricardo José Rodriguez Ferreira, lead author of Chapter 14 of the SBC Treatise, to examine the principles and clinical guidelines of intraoperative neurophysiological monitoring (IONM) in spine surgery. They explore the fundamental difference between continuous monitoring and anatomical mapping, indications and nuances of transcranial motor evoked potentials (tcMEP), somatosensory evoked potentials (SSEP), free-running and triggered electromyography (frEMG and tEMG), sacral reflexes, and the prognostic value of the D-wave. They also address total intravenous anesthesia (TIVA) requirements, systemic factors, and the standardized multidisciplinary protocol for managing signal loss during instrumentation and deformity correction.",
    descricao_es:
      "En este tercer episodio del Tratado en Debate, el Dr. Marcelo Risso recibe al Dr. Ricardo José Rodriguez Ferreira, autor principal del Capítulo 14 del Tratado de la SBC, para profundizar en los principios y directrices de la monitorización neurofisiológica intraoperatoria (MNIO) en cirugía de columna. Analizan la diferencia crítica entre monitoreo continuo y mapeo anatómico, las indicaciones del potencial evocado motor córtico-miogénico (PEMcm), potenciales evocados somatosensoriales (PESS), electromiografía libre y estimulada (frEMG y tEMG), reflejos sacros y el valor pronóstico de la onda D. También examinan la anestesia intravenosa total (TIVA), factores sistémicos y el protocolo de respuesta inmediata ante alertas durante instrumentaciones y corrección de deformidades.",
    vimeoId: "1225996397",
    vimeoUrl: "https://player.vimeo.com/video/1225996397",
    thumbnailUrl: "/assets/debate-ep3-cover.jpg",
    vimeoThumbnailUrl:
      "https://i.vimeocdn.com/video/2199859507-b3f4b5f3c119944d7f8b7b93ab7f58a4190211c94499d047642316d7d02384cb-d_1280x720?region=us",
    spotifyUrl: "https://open.spotify.com/episode/2fHhe1AJwqKziYaZpqoXaN?si=AqujIb1qR6eHWBWkZGaFEw",
    capituloNum: 14,
    capituloTitulo_pt: "Monitorização Neurofisiológica Intraoperatória em Cirurgia de Coluna",
    capituloTitulo_en: "Intraoperative Neurophysiological Monitoring in Spine Surgery",
    capituloTitulo_es: "Monitorización Neurofisiológica Intraoperatoria en Cirugía de Columna",
    secaoId: 2,
    secaoTitulo_pt: "Diagnóstico",
    secaoTitulo_en: "Diagnosis",
    secaoTitulo_es: "Diagnóstico",
    duracao: "45:41",
    dataPublicacao: "2026",
    convidados: [
      {
        nome: "Dr. Marcelo Italo Risso Neto",
        cargo: "Editor-Chefe do Tratado SBC • Prof. Dr. UNICAMP",
        instituicao: "UNICAMP • Hospital Alemão Oswaldo Cruz",
        slug: "marcelo-italo-risso-neto",
        foto_url: "/assets/marcelo-risso.png",
        orcid: "0000-0003-0990-6901",
      },
      {
        nome: "Dr. Ricardo José Rodriguez Ferreira",
        cargo: "Médico Fisiatra e Neurofisiologista • Coord. MNIO IOT-FMUSP",
        instituicao: "Instituto de Ortopedia e Traumatologia (IOT-HC-FMUSP) • SBNC",
        slug: "ricardo-jose-rodriguez-ferreira",
        foto_url: "/assets/avatar-placeholder.png",
        orcid: "0000-0003-1415-6324",
      },
    ],
    destaques_pt: [
      "Diferenciação prática: monitoramento da integridade funcional vs. mapeamento cirúrgico de raízes e nervos periféricos.",
      "Avaliação multimodal: associação mandatória de PEM córtico-miogênico, PESS, frEMG e tEMG em procedimentos de alto risco.",
      "Valor prognóstico da onda D em cirurgias medulares e tumores intramedulares: lesão transitória vs. permanente.",
      "Influência anestésica e sistêmica: requisitos da anestesia venosa total (TIVA), controle pressórico (PAM) e temperatura.",
      "Protocolo sistematizado de alarme: reversão de manobras cirúrgicas, otimização hemodinâmica e condutas coordenadas pela equipe.",
    ],
    destaques_en: [
      "Core distinction: continuous functional pathway monitoring vs. intraoperative anatomical neural mapping.",
      "Multimodal surveillance: mandatory combination of transcranial MEP, SSEP, frEMG, and triggered EMG in complex cases.",
      "Prognostic power of the D-wave in spinal cord procedures: distinguishing transient impairment from permanent deficit.",
      "Anesthetic and systemic optimization: total intravenous anesthesia (TIVA) protocols, MAP maintenance, and normothermia.",
      "Standardized alert checklist: surgical maneuver reversal, hemodynamic correction, and coordinated team interventions.",
    ],
    destaques_es: [
      "Diferencia crucial: monitoreo de la integridad funcional vs. mapeo anatómico de raíces y nervios en el campo quirúrgico.",
      "Abordaje multimodal: combinación esencial de PEM córtico-miogénico, PESS, frEMG y tEMG en cirugías de alto riesgo.",
      "Valor pronóstico de la onda D en patología medular: diferenciación entre déficit funcional transitorio y lesión permanente.",
      "Interacción anestésica y factores sistémicos: protocolos con TIVA, manejo de la presión arterial media (PAM) y temperatura.",
      "Algoritmo coordinado ante alertas: reversión de maniobras, optimización hemodinámica y toma de decisiones en equipo.",
    ],
    tags: [
      "Monitorização Neurofisiológica",
      "MNIO",
      "Potencial Evocado Motor",
      "PESS",
      "Onda D",
      "Eletromiografia",
      "Mapeamento Neural",
      "Segurança Cirúrgica",
      "Cirurgia de Coluna",
      "SBC",
    ],
    status: "publicado",
  },
];

export function getDebateEpisodes(): DebateEpisode[] {
  return DEBATE_EPISODES;
}

export function getPublishedDebateEpisodes(): DebateEpisode[] {
  return DEBATE_EPISODES.filter((ep) => ep.status === "publicado");
}

export function getDebateEpisodeByNumber(numero: number): DebateEpisode | undefined {
  return DEBATE_EPISODES.find((ep) => ep.numero === numero);
}

export function getDebateEpisodeBySlug(slug: string): DebateEpisode | undefined {
  return DEBATE_EPISODES.find((ep) => ep.slug === slug || ep.id === slug);
}
