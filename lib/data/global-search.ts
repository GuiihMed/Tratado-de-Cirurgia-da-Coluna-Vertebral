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

function normalize(text: string): string {
  return (text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export function searchTreatise(rawQuery: string, locale: Locale = "pt", isModern: boolean = true): SearchResults {
  const query = normalize(rawQuery);
  if (!query) {
    return {
      query: rawQuery,
      total: 0,
      chapters: [],
      authors: [],
      episodes: [],
      sections: [],
    };
  }

  const queryTokens = query.split(/\s+/).filter(Boolean);

  const textMatchesQuery = (text: string) => {
    const norm = normalize(text);
    return queryTokens.every((token) => norm.includes(token));
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

    const matchesNum = numStr === query || query === `capitulo ${numStr}` || query === `cap ${numStr}` || query === `chapter ${numStr}`;
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
