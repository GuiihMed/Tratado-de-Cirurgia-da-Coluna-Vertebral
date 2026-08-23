import chaptersData from "./chapters-content-full.json";
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

export const ALL_FULL_CHAPTERS: Record<number, FullChapterContent> = chaptersData as unknown as Record<number, FullChapterContent>;

export function getFullChapterByNumber(numero: number): FullChapterContent | null {
  return ALL_FULL_CHAPTERS[numero] || (ALL_FULL_CHAPTERS[numero.toString() as unknown as number]) || null;
}
