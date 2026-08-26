import chaptersDataPt from "./chapters-content-full.json";
import chaptersDataEn from "./chapters-content-en.json";
import chaptersDataEs from "./chapters-content-es.json";
import { Locale } from "@/lib/types";

export interface ChapterSubtopic {
  subtitulo: string;
  texto: string;
}

export interface ChapterCard {
  tipo: string;
  titulo: string;
  texto: string;
}

export interface ChapterSeo {
  titulo: string;
  meta_descricao: string;
  resumo_chamada: string;
  slug: string;
}

export interface FullChapterContent {
  numero: number;
  titulo: string;
  secao: string;
  autores: string[];
  autores_vancouver?: string;
  pagina_inicial?: number;
  pagina_final?: number;
  paginas?: string;
  referencia_vancouver?: string;
  contexto: string;
  objetivo: string;
  conteudo_principal: ChapterSubtopic[];
  aplicacao_clinica: string;
  mensagem_central: string;
  por_que_importa: string;
  decs: string[];
  mesh: string[];
  palavras_chave_livres: string[];
  cards_destaque: ChapterCard[];
  referencias: string[];
  seo: ChapterSeo;
}

export const ALL_FULL_CHAPTERS_PT: Record<number, FullChapterContent> = chaptersDataPt as unknown as Record<number, FullChapterContent>;
export const ALL_FULL_CHAPTERS_EN: Record<number, FullChapterContent> = chaptersDataEn as unknown as Record<number, FullChapterContent>;
export const ALL_FULL_CHAPTERS_ES: Record<number, FullChapterContent> = chaptersDataEs as unknown as Record<number, FullChapterContent>;

export function getFullChapterByNumber(numero: number, locale: Locale = "pt"): FullChapterContent | null {
  const dataset =
    locale === "en"
      ? ALL_FULL_CHAPTERS_EN
      : locale === "es"
      ? ALL_FULL_CHAPTERS_ES
      : ALL_FULL_CHAPTERS_PT;

  return dataset[numero] || (dataset[numero.toString() as unknown as number]) || ALL_FULL_CHAPTERS_PT[numero] || null;
}
