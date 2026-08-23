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
