import { Locale, Capitulo, SecaoInfo } from "@/lib/types";
import { INITIAL_CHAPTERS, SECOES } from "@/lib/data/sections-and-chapters";
import { AUTHORS_DIRECTORY, AuthorProfile } from "@/lib/data/authors";
import { DEBATE_EPISODES, DebateEpisode } from "@/lib/data/debate-episodes";

export interface SearchResultChapter {
  type: "chapter";
  numero: number;
  titulo: string;
  secaoNumero: number;
  secaoNome: string;
  autores: string[];
  url: string;
  snippet?: string;
}

export interface SearchResultAuthor {
  type: "author";
  id: string;
  slug: string;
  name: string;
  role: string;
  institution: string;
  fotoUrl?: string;
  chaptersCount: number;
  url: string;
}

export interface SearchResultDebate {
  type: "debate";
  episodeNumber: string;
  title: string;
  chapterNumber: number;
  chapterTitle: string;
  guests: string[];
  description: string;
  url: string;
}

export interface SearchResultSection {
  type: "section";
  numero: number;
  nome: string;
  range: string;
  chaptersCount: number;
  url: string;
}

export interface SearchResults {
  query: string;
  total: number;
  chapters: SearchResultChapter[];
  authors: SearchResultAuthor[];
  episodes: SearchResultDebate[];
  sections: SearchResultSection[];
}

/**
 * Conjunto abrangente de honoríficos médicos e acadêmicos comuns
 * Trata variações como: Dr, Dr., Dra, Dra., Doutor, Doutora, Doctor, Prof, Professor, etc.
 */
export const MEDICAL_HONORIFICS = new Set([
  "dr",
  "dra",
  "drs",
  "dras",
  "doutor",
  "doutora",
  "doutores",
  "doutoras",
  "doctor",
  "doctora",
  "prof",
  "profa",
  "professor",
  "professora",
  "doc",
]);

export function normalize(text: string): string {
  return (text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

/**
 * Remove pontuações mantendo palavras separadas por espaço
 */
export function cleanPunctuation(text: string): string {
  return (text || "")
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Extrai tokens inteligentes de busca considerando títulos médicos.
 * Se o usuário pesquisar "Dr. Marcelo Risso" ou "Doutor Helton",
 * a função filtra o prefixo "dr" / "doutor" e foca nos termos significativos ["marcelo", "risso"],
 * garantindo que o autor seja encontrado mesmo que seu nome no banco não tenha "Dr.".
 */
export function extractSearchTokens(rawQuery: string): string[] {
  const norm = normalize(rawQuery);
  if (!norm) return [];

  const cleaned = cleanPunctuation(norm);
  const allTokens = cleaned.split(/\s+/).filter(Boolean);

  const meaningfulTokens = allTokens.filter((token) => !MEDICAL_HONORIFICS.has(token));

  // Se o usuário digitou palavras além do honorífico (ex: "Dr. Marcelo Risso"),
  // usamos apenas os termos relevantes
  if (meaningfulTokens.length > 0) {
    return meaningfulTokens;
  }

  // Se o usuário digitou APENAS "Dr" ou "Doutor", mantemos o termo para não zerar a busca
  return allTokens;
}

export function searchTreatise(rawQuery: string, locale: Locale = "pt", isModern: boolean = true): SearchResults {
  const queryTokens = extractSearchTokens(rawQuery);
  const query = normalize(rawQuery);

  if (!query || queryTokens.length === 0) {
    return {
      query: rawQuery,
      total: 0,
      chapters: [],
      authors: [],
      episodes: [],
      sections: [],
    };
  }

  const textMatchesQuery = (text: string) => {
    if (!text) return false;
    const cleanNorm = cleanPunctuation(normalize(text));
    return queryTokens.every((token) => cleanNorm.includes(token));
  };

  // 1. Chapters search
  const chapters: SearchResultChapter[] = [];
  INITIAL_CHAPTERS.forEach((ch: Capitulo) => {
    const titlePt = ch.titulo_pt || "";
    const titleEn = ch.titulo_en || "";
    const titleEs = ch.titulo_es || "";
    const currentTitle = locale === "en" ? titleEn : locale === "es" ? titleEs : titlePt;
    const secao = SECOES.find((s) => s.id === ch.secao_id);
    const secaoNome = secao ? (locale === "en" ? secao.titulo_en : locale === "es" ? secao.titulo_es : secao.titulo_pt) : `Seção ${ch.secao_id}`;
    
    // Authors string parse
    const autoresRaw = ch.autores || "";
    const autoresArray = typeof autoresRaw === "string" ? autoresRaw.split(",").map((a) => a.trim()).filter(Boolean) : [];
    const numStr = ch.numero.toString();
    const resumo = (locale === "en" ? ch.resumo_en : locale === "es" ? ch.resumo_es : ch.resumo_pt) || ch.resumo_pt || "";

    const matchesNum =
      numStr === rawQuery.trim() ||
      (queryTokens.length === 1 && queryTokens[0] === numStr) ||
      (queryTokens.includes(numStr) && (queryTokens.includes("capitulo") || queryTokens.includes("cap") || queryTokens.includes("chapter")));

    const matchesTitle = textMatchesQuery(currentTitle) || textMatchesQuery(titlePt) || textMatchesQuery(titleEn) || textMatchesQuery(titleEs);
    const matchesAuthors = textMatchesQuery(autoresRaw);
    const matchesSecao = textMatchesQuery(secaoNome);
    const matchesResumo = resumo ? textMatchesQuery(resumo) : false;

    if (matchesNum || matchesTitle || matchesAuthors || matchesSecao || matchesResumo) {
      chapters.push({
        type: "chapter",
        numero: ch.numero,
        titulo: currentTitle || titlePt,
        secaoNumero: ch.secao_id,
        secaoNome: secaoNome,
        autores: autoresArray,
        url: `/${locale}/${isModern ? "capitulo-new" : "capitulo"}/${ch.numero}`,
        snippet: resumo ? (resumo.length > 130 ? resumo.substring(0, 130) + "..." : resumo) : undefined,
      });
    }
  });

  // 2. Authors search
  const authors: SearchResultAuthor[] = [];
  AUTHORS_DIRECTORY.forEach((a: AuthorProfile) => {
    const matchesName = textMatchesQuery(a.nome) || textMatchesQuery(a.nome_vancouver || "");
    const matchesDetails =
      textMatchesQuery(a.cargo || "") ||
      textMatchesQuery(a.instituicao || "") ||
      textMatchesQuery(a.destaque || "") ||
      textMatchesQuery(a.bio_completa || "") ||
      textMatchesQuery((a.especialidades || []).join(" "));

    if (matchesName || matchesDetails) {
      authors.push({
        type: "author",
        id: a.id,
        slug: a.slug || a.id,
        name: a.nome,
        role: a.cargo || "",
        institution: a.instituicao || "",
        fotoUrl: a.foto_url,
        chaptersCount: (a.capitulos_tratado || []).length,
        url: `/${locale}/${isModern ? "autor-new" : "autor"}/${a.slug || a.id}`,
      });
    }
  });

  // 3. Debate episodes search
  const episodes: SearchResultDebate[] = [];
  DEBATE_EPISODES.forEach((ep: DebateEpisode) => {
    const epTitle = locale === "en" ? ep.titulo_en : locale === "es" ? ep.titulo_es : ep.titulo_pt;
    const chTitle = locale === "en" ? ep.capituloTitulo_en : locale === "es" ? ep.capituloTitulo_es : ep.capituloTitulo_pt;
    const desc = (locale === "en" ? ep.descricao_en : locale === "es" ? ep.descricao_es : ep.descricao_pt) || "";
    const guestsNames = (ep.convidados || []).map((g) => g.nome);
    const guestsStr = guestsNames.join(" ");
    const epNumStr = ep.numero.toString();

    const matches =
      epNumStr === query ||
      textMatchesQuery(epTitle) ||
      textMatchesQuery(chTitle) ||
      textMatchesQuery(desc) ||
      textMatchesQuery(guestsStr) ||
      query.includes("debate") ||
      query.includes("videocast") ||
      query.includes("podcast");

    if (matches) {
      episodes.push({
        type: "debate",
        episodeNumber: ep.numero < 10 ? `0${ep.numero}` : `${ep.numero}`,
        title: epTitle,
        chapterNumber: ep.capituloNum,
        chapterTitle: chTitle,
        guests: guestsNames,
        description: desc,
        url: `/${locale}/${isModern ? "debate-new" : "debate"}`,
      });
    }
  });

  // 4. Sections search
  const sections: SearchResultSection[] = [];
  SECOES.forEach((sec: SecaoInfo) => {
    const secNome = locale === "en" ? sec.titulo_en : locale === "es" ? sec.titulo_es : sec.titulo_pt;
    const secNum = sec.numero.toString();

    if (secNum === query || textMatchesQuery(secNome) || textMatchesQuery(sec.range || "")) {
      sections.push({
        type: "section",
        numero: sec.numero,
        nome: secNome,
        range: sec.range || "",
        chaptersCount: sec.totalCapitulos || 0,
        url: `/${locale}/${isModern ? "indice-new" : "indice"}#secao-${sec.numero}`,
      });
    }
  });

  return {
    query: rawQuery,
    total: chapters.length + authors.length + episodes.length + sections.length,
    chapters,
    authors,
    episodes,
    sections,
  };
}
