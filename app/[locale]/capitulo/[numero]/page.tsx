import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Locale, Capitulo } from "@/lib/types";
import { SECOES, INITIAL_CHAPTERS } from "@/lib/data/sections-and-chapters";
import { getAuthorsByChapter, translateAuthorRole, translateAuthorDestaque } from "@/lib/data/authors";
import { ALL_CHAPTER_REFERENCES } from "@/lib/data/references";
import { getCapituloByNumero } from "@/lib/supabase/server";
import CustomVimeoPlayer from "@/components/CustomVimeoPlayer";
import { getFullChapterByNumber } from "@/lib/data/chapters-content";

interface CapituloPageProps {
  params: Promise<{
    locale: string;
    numero: string;
  }>;
}

export async function generateStaticParams() {
  const locales = ["pt", "en", "es"];
  const params: { locale: string; numero: string }[] = [];

  for (const locale of locales) {
    for (let i = 1; i <= 109; i++) {
      params.push({ locale, numero: i.toString() });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: CapituloPageProps): Promise<Metadata> {
  const { locale: rawLocale, numero } = await params;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";
  const num = parseInt(numero, 10);
  const fullChapter = getFullChapterByNumber(num, locale);
  const { data: cap } = await getCapituloByNumero(num);

  const titlePt = fullChapter?.titulo || cap?.titulo_pt || `Capítulo ${num}`;
  const title =
    locale === "en" && cap?.titulo_en
      ? cap.titulo_en
      : locale === "es" && cap?.titulo_es
      ? cap.titulo_es
      : titlePt;

  const authors =
    (fullChapter?.autores && fullChapter.autores.length > 0
      ? fullChapter.autores.join(", ")
      : cap?.autores) || "Sociedade Brasileira de Coluna (SBC)";

  const rawDesc =
    fullChapter?.seo?.meta_descricao ||
    fullChapter?.contexto ||
    fullChapter?.objetivo ||
    cap?.resumo_pt ||
    `Consulte o Capítulo ${num}: ${title}. Diretrizes clínicas, técnicas cirúrgicas e referências oficiais do Tratado SBC.`;
  const description =
    rawDesc.length > 200 ? `${rawDesc.slice(0, 197)}...` : rawDesc;

  const pageUrl = `https://livro-sbc.vercel.app/${locale}/capitulo/${num}`;
  const fullTitle = `Capítulo ${num}: ${title} | Tratado de Cirurgia da Coluna Vertebral`;

  return {
    title: fullTitle,
    description,
    keywords: [
      `Capítulo ${num}`,
      title,
      "Tratado de Cirurgia da Coluna Vertebral",
      "SBC",
      "Sociedade Brasileira de Coluna",
      ...(fullChapter?.decs || []),
      ...(fullChapter?.mesh || []),
    ],
    authors: (fullChapter?.autores || []).map((name) => ({ name })),
    alternates: {
      canonical: pageUrl,
      languages: {
        pt: `https://livro-sbc.vercel.app/pt/capitulo/${num}`,
        en: `https://livro-sbc.vercel.app/en/capitulo/${num}`,
        es: `https://livro-sbc.vercel.app/es/capitulo/${num}`,
      },
    },
    openGraph: {
      type: "article",
      locale: locale === "en" ? "en_US" : locale === "es" ? "es_ES" : "pt_BR",
      url: pageUrl,
      siteName: "Tratado de Cirurgia da Coluna Vertebral - SBC",
      title: `Capítulo ${num}: ${title} — Tratado SBC`,
      description,
      images: [
        {
          url: "https://livro-sbc.vercel.app/assets/og-cover.png",
          width: 1200,
          height: 630,
          type: "image/png",
          alt: `Capítulo ${num}: ${title} - Tratado de Cirurgia da Coluna Vertebral (SBC)`,
        },
        {
          url: "https://livro-sbc.vercel.app/assets/book-cover.png",
          width: 964,
          height: 1244,
          type: "image/png",
          alt: "Capa do Livro Tratado de Cirurgia da Coluna Vertebral",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Capítulo ${num}: ${title} — Tratado SBC`,
      description,
      images: ["https://livro-sbc.vercel.app/assets/og-cover.png"],
    },
  };
}

export default async function CapituloClassicPage({ params }: CapituloPageProps) {
  const resolvedParams = await params;
  const rawLocale = resolvedParams.locale;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  const num = parseInt(resolvedParams.numero, 10);
  if (isNaN(num) || num < 1 || num > 109) {
    notFound();
  }

  const { data: cap } = await getCapituloByNumero(num);
  if (!cap) {
    notFound();
  }

  const secao = SECOES.find((s) => s.id === cap.secao_id);

  // Dynamic previous and next chapters
  const prevChapterNum = num > 1 ? num - 1 : null;
  const nextChapterNum = num < 109 ? num + 1 : null;

  const prevCap = prevChapterNum
    ? INITIAL_CHAPTERS.find((c) => c.numero === prevChapterNum)
    : null;
  const nextCap = nextChapterNum
    ? INITIAL_CHAPTERS.find((c) => c.numero === nextChapterNum)
    : null;

  // Title in active locale
  const title =
    locale === "en" && cap.titulo_en
      ? cap.titulo_en
      : locale === "es" && cap.titulo_es
      ? cap.titulo_es
      : cap.titulo_pt;

  const sectionTitle = secao
    ? locale === "en"
      ? secao.titulo_en
      : locale === "es"
      ? secao.titulo_es
      : secao.titulo_pt
    : `Seção ${cap.secao_id}`;

  // Structured full chapter data
  const isCap8 = num === 8;
  const fullChapter = getFullChapterByNumber(num, locale);
  const chapterAuthors = getAuthorsByChapter(num);

  const authorsText =
    (fullChapter?.autores && fullChapter.autores.length > 0
      ? fullChapter.autores.join(" • ")
      : cap.autores) ||
    (chapterAuthors.length > 0
      ? chapterAuthors.map((a) => a.nome).join(" • ")
      : "Corpo Editorial SBC");

  const leadText =
    fullChapter?.contexto ||
    (isCap8
      ? "Fundamentos do equilíbrio sagital, parâmetros radiográficos e aplicação clínica no planejamento cirúrgico."
      : cap.resumo_pt?.substring(0, 140) ||
        "Fundamentos anátomo-clínicos, diretrizes diagnósticas e técnicas cirúrgicas avançadas da Sociedade Brasileira de Coluna.");

  const objectiveText = fullChapter?.objetivo || "Apresentar os fundamentos diagnósticos, biomecânicos e diretrizes cirúrgicas aplicáveis às patologias da coluna vertebral.";
  const clinicalAppText = fullChapter?.aplicacao_clinica || "";
  const subtopics = fullChapter?.conteudo_principal || [];
  const cardsDestaque = fullChapter?.cards_destaque || [];
  const centralMessageText = fullChapter?.mensagem_central || "";
  const whyItMattersText = fullChapter?.por_que_importa || "";

  // DeCS / MeSH keywords
  const keywords =
    fullChapter?.decs && fullChapter.decs.length > 0
      ? fullChapter.decs
      : isCap8
      ? [
          "Coluna Vertebral",
          "Equilíbrio Postural",
          "Postura",
          "Lordose",
          "Cifose",
          "Curvaturas da Coluna Vertebral",
          "Pelve",
          "Fenômenos Biomecânicos",
          "Radiografia",
          "Qualidade de Vida",
          "Doenças da Coluna Vertebral",
          "Fusão Vertebral",
        ]
      : [
          "Coluna Vertebral",
          "Procedimentos Cirúrgicos Operatórios",
          "Diagnóstico por Imagem",
          "Artrodese",
          "Biomecânica",
          "Qualidade de Vida",
          "Reabilitação",
        ];

  // References list from curated catalog
  const chapterRefData = ALL_CHAPTER_REFERENCES.find((r) => r.numero === num);
  const referencesList =
    fullChapter?.referencias && fullChapter.referencias.length > 0
      ? fullChapter.referencias.map((r, i) => ({
          num: i + 1,
          text: r,
          doi: `https://scholar.google.com/scholar?q=${encodeURIComponent(r.slice(0, 140))}`,
          pmid: `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(
            r.replace(/[^a-zA-Z0-9\s]/g, " ").slice(0, 120)
          )}`,
        }))
      : chapterRefData && chapterRefData.referencias.length > 0
      ? chapterRefData.referencias.map((r, i) => ({
          num: r.num || i + 1,
          text: r.text,
          doi:
            r.doi ||
            `https://scholar.google.com/scholar?q=${encodeURIComponent(r.text.slice(0, 140))}`,
          pmid:
            r.pmid ||
            `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(
              r.text.replace(/[^a-zA-Z0-9\s]/g, " ").slice(0, 120)
            )}`,
        }))
      : [
          {
            num: 1,
            text: "Sociedade Brasileira de Coluna (SBC). Diretrizes Oficiais do Tratado de Cirurgia da Coluna Vertebral. Editora DiLivros, 2026.",
            doi: "https://doi.org/10.1016/j.spinee.2025.01.001",
            pmid: "https://pubmed.ncbi.nlm.nih.gov/",
          },
        ];

  // Related chapters
  const relatedChapters = INITIAL_CHAPTERS.filter(
    (c) => c.numero !== num && (c.secao_id === cap.secao_id || [1, 2, 4, 8].includes(c.numero))
  ).slice(0, 4);

  return (
    <div style={{ background: "#f4f7fb", color: "#1e293b", minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* Classic Top Header */}
      <Header locale={locale} currentPage="other" />

      <main style={{ paddingBottom: "80px" }}>
        {/* ================= HERO SECTION FIDEDIGNA ================= */}
        {/* ========================================================================= */}
        {/* HERO SECTION (PADRÃO HOME) */}
        {/* ========================================================================= */}
        <section
          className="relative w-full overflow-hidden text-white pt-8 pb-16 border-b border-white/10"
          style={{
            background:
              "radial-gradient(circle at 19% 24%, rgba(255, 87, 86, 0.45), transparent 34%), linear-gradient(105deg, #c9142a 0%, #39244c 28%, #052b5b 58%, #0062a7 100%)",
          }}
        >
          {/* Anatomical background graphic silhouette */}
          <img
            src="/assets/hero-spine.png"
            alt=""
            className="absolute right-0 top-0 h-full w-auto max-w-[62%] object-contain pointer-events-none opacity-25 hidden md:block"
            style={{ mixBlendMode: "screen", filter: "contrast(1.2) brightness(1.1)" }}
          />

          <div className="w-full px-4 sm:px-6 md:px-8 mx-auto max-w-7xl relative z-10">
            {/* Breadcrumb */}
            <div style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.7)", marginBottom: 24, display: "flex", alignItems: "center", gap: 8 }}>
              <Link href={`/${locale}`} style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "none" }}>
                {locale === "en" ? "Home" : locale === "es" ? "Inicio" : "Início"}
              </Link>
              <span>›</span>
              <span style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                {locale === "en" ? "The Treatise" : locale === "es" ? "El Tratado" : "O Tratado"}
              </span>
              <span>›</span>
              <Link href={`/${locale}/indice`} style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "none" }}>
                {locale === "en" ? "Chapters" : locale === "es" ? "Capítulos" : "Capítulos"}
              </Link>
              <span>›</span>
              <span style={{ color: "#fff", fontWeight: 700 }}>
                {locale === "en" ? `Chapter ${num}` : locale === "es" ? `Capítulo ${num}` : `Capítulo ${num}`}
              </span>
            </div>

            {/* Hero Main Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Book Cover Photo */}
              <div className="md:col-span-5 flex justify-center md:justify-end">
                <div className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] transition-transform duration-300 hover:scale-[1.02]">
                  <img
                    src="/assets/book-cover.png"
                    alt="Tratado de Cirurgia da Coluna Vertebral"
                    className="w-full h-auto rounded-xl drop-shadow-[0_25px_50px_rgba(0,0,0,0.65)]"
                  />
                </div>
              </div>

              {/* Chapter Information */}
              <div className="md:col-span-7 flex flex-col items-start text-left">
                {/* Section Tag Pill */}
                <div className="mb-3.5">
                  <span
                    className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border"
                    style={{
                      background: "rgba(245, 34, 56, 0.2)",
                      borderColor: "rgba(245, 34, 56, 0.5)",
                      color: "#ff94a2",
                    }}
                  >
                    {locale === "en" ? "SECTION" : locale === "es" ? "SECCIÓN" : "SEÇÃO"} {cap.secao_id} • {sectionTitle}
                  </span>
                </div>

                {/* Chapter Number & Title */}
                <div className="flex items-start gap-4 mb-3.5">
                  <div className="text-center flex-shrink-0">
                    <span className="block text-[11px] uppercase font-bold tracking-widest text-slate-300">
                      {locale === "en" ? "Chapter" : locale === "es" ? "Capítulo" : "Capítulo"}
                    </span>
                    <span className="text-4xl sm:text-5xl font-bold leading-none text-white">
                      {num}
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white tracking-tight m-0">
                    {title}
                  </h1>
                </div>

                {/* Authors (com links para os perfis dos autores) */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base font-semibold text-slate-200 mb-5">
                  <span className="text-slate-300 font-normal">
                    {locale === "en" ? "Authors:" : locale === "es" ? "Autores:" : "Autores:"}
                  </span>
                  {chapterAuthors.length > 0 ? (
                    chapterAuthors.map((author, i) => (
                      <span key={author.slug} className="inline-flex items-center">
                        <Link
                          href={`/${locale}/autor/${author.slug}`}
                          className="text-white hover:text-red-300 font-bold underline-offset-2 hover:underline transition-colors"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                          title={`Ver perfil e currículo de ${author.nome}`}
                        >
                          {author.nome}
                        </Link>
                        {i < chapterAuthors.length - 1 && <span className="text-slate-400 ml-1.5">•</span>}
                      </span>
                    ))
                  ) : (
                    <span>{authorsText}</span>
                  )}
                </div>

                {/* Print Notice Box */}
                <div
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-white/40 mb-6 max-w-2xl w-full text-xs sm:text-sm font-semibold"
                  style={{
                    background: "rgba(0, 20, 50, 0.4)",
                    color: "#ffffff",
                  }}
                >
                  <svg className="w-5 h-5 text-[#f52238] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                  <span>
                    {locale === "en"
                      ? "Full reading of this chapter is available exclusively in the printed edition of the Treatise."
                      : locale === "es"
                      ? "La lectura completa de este capítulo está disponible exclusivamente en la edición impresa del Tratado."
                      : "A leitura completa deste capítulo está disponível exclusivamente na edição impressa do Tratado."}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 w-full sm:w-auto items-center">
                  <a
                    href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#f52238] hover:bg-[#d9142a] text-white font-bold text-sm shadow-lg shadow-red-600/30 transition-all active:scale-[0.98]"
                    style={{ textDecoration: "none" }}
                  >
                    <span>{locale === "en" ? "Where to Buy" : locale === "es" ? "Dónde Comprar" : "Onde Comprar"}</span>
                    <span>🛒</span>
                  </a>

                  <a
                    href="#referencias"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/40 backdrop-blur-sm transition-all active:scale-[0.98]"
                    style={{ textDecoration: "none" }}
                  >
                    <span>{locale === "en" ? "View references" : locale === "es" ? "Ver referencias" : "Ver referências"}</span>
                    <span>📖</span>
                  </a>

                  <a
                    href="#debate"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/40 backdrop-blur-sm transition-all active:scale-[0.98]"
                    style={{ textDecoration: "none" }}
                  >
                    <span>{locale === "en" ? "Treatise in Debate" : locale === "es" ? "Tratado en Debate" : "Tratado em Debate"}</span>
                    <span>▶</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom 5-Item Stats Bar (Idêntico ao design da Home) */}
            <div className="w-full rounded-2xl bg-[#001533]/85 border border-white/15 backdrop-blur-xl p-4 sm:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.4)] mt-10 sm:mt-12">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-0 md:divide-x md:divide-white/10 text-center">
                
                {/* 1. Seção */}
                <div className="flex flex-col items-center justify-center px-2 py-1">
                  <svg className="w-6 h-6 text-red-400 mb-1.5"><use href="#i-grid"></use></svg>
                  <strong className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                    {locale === "en" ? `Sec. ${cap.secao_id}` : locale === "es" ? `Sec. ${cap.secao_id}` : `Seção ${cap.secao_id}`}
                  </strong>
                  <span className="text-xs text-slate-300 font-semibold mt-0.5 truncate max-w-[130px]">{sectionTitle}</span>
                </div>

                {/* 2. Capítulo */}
                <div className="flex flex-col items-center justify-center px-2 py-1">
                  <svg className="w-6 h-6 text-sky-400 mb-1.5"><use href="#i-book"></use></svg>
                  <strong className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                    {locale === "en" ? `Cap. ${num}` : locale === "es" ? `Cap. ${num}` : `Cap. ${num}`}
                  </strong>
                  <span className="text-xs text-slate-300 font-semibold mt-0.5">
                    {locale === "en" ? "Clinical Chapter" : locale === "es" ? "Capítulo Clínico" : "Capítulo Clínico"}
                  </span>
                </div>

                {/* 3. Autores */}
                <div className="flex flex-col items-center justify-center px-2 py-1">
                  <svg className="w-6 h-6 text-indigo-400 mb-1.5"><use href="#i-users"></use></svg>
                  <strong className="text-2xl sm:text-3xl font-bold text-white leading-tight">{chapterAuthors.length}</strong>
                  <span className="text-xs text-slate-300 font-semibold mt-0.5">
                    {locale === "en" ? "authors" : locale === "es" ? "autores" : "autores"}
                  </span>
                </div>

                {/* 4. Idiomas */}
                <div className="flex flex-col items-center justify-center px-2 py-1">
                  <svg className="w-6 h-6 text-teal-400 mb-1.5"><use href="#i-globe"></use></svg>
                  <div className="text-xs text-slate-200 font-bold leading-tight mt-0.5">
                    <div>Português</div>
                    <div>Español</div>
                    <div>English</div>
                  </div>
                </div>

                {/* 5. Referências */}
                <div className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center px-2 py-1">
                  <svg className="w-6 h-6 text-amber-400 mb-1.5"><use href="#i-ref"></use></svg>
                  <strong className="text-base sm:text-lg font-bold text-white leading-snug mt-1">Referências</strong>
                  <span className="text-xs text-slate-300 font-semibold">
                    {locale === "en" ? "scientific citations" : locale === "es" ? "citas científicas" : "científicas"}
                  </span>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ================= 2-COLUMN MAIN CONTENT ================= */}
        <section style={{ padding: "40px 0 60px" }}>
          <div className="w-full px-4 sm:px-6 md:px-8 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* LEFT COLUMN: MAIN SCIENTIFIC CONTENT */}
            <div className="lg:col-span-8 flex flex-col gap-6 min-w-0 w-full">
              {/* CARD 1: RESUMO DO CAPÍTULO */}
              <article
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  padding: "32px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 16px rgba(0, 30, 80, 0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, borderBottom: "1px solid #f1f5f9", paddingBottom: 14 }}>
                  <span style={{ fontSize: 20 }}>📑</span>
                  <h2 style={{ fontSize: 20, fontWeight: 700, color: "#001a3d", margin: 0 }}>
                    {locale === "en" ? "Chapter Summary" : locale === "es" ? "Resumen del capítulo" : "Resumo do capítulo"}
                  </h2>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 14.5, lineHeight: 1.6, color: "#334155" }}>
                  <div>
                    <strong style={{ color: "#001a3d" }}>• {locale === "en" ? "Context" : locale === "es" ? "Contexto" : "Contexto"}:</strong>{" "}
                    {leadText}
                  </div>
                  <div>
                    <strong style={{ color: "#001a3d" }}>• {locale === "en" ? "Chapter Objective" : locale === "es" ? "Objetivo del capítulo" : "Objetivo do capítulo"}:</strong>{" "}
                    {objectiveText}
                  </div>

                  {/* Subtopics */}
                  {subtopics.map((st, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "#f8fafc",
                        borderLeft: `3px solid ${idx % 2 === 0 ? "#4338ca" : "#0d9488"}`,
                        padding: "12px 16px",
                        borderRadius: "0 8px 8px 0",
                      }}
                    >
                      <strong style={{ color: idx % 2 === 0 ? "#3730a3" : "#0f766e", display: "block", marginBottom: 4 }}>
                        • {st.subtitulo}
                      </strong>
                      <span>{st.texto}</span>
                    </div>
                  ))}

                  {clinicalAppText && (
                    <div>
                      <strong style={{ color: "#001a3d" }}>• {locale === "en" ? "Clinical Application" : locale === "es" ? "Aplicación clínica" : "Aplicação clínica"}:</strong>{" "}
                      {clinicalAppText}
                    </div>
                  )}
                </div>
              </article>

              {/* CARD 2: PALAVRAS-CHAVE */}
              <article
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  padding: "24px 32px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 16px rgba(0, 30, 80, 0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <span style={{ fontSize: 18 }}>🏷️</span>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#001a3d", margin: 0 }}>
                    {locale === "en" ? "Keywords" : locale === "es" ? "Palabras clave" : "Palavras-chave"}
                  </h3>
                </div>

                <div style={{ fontSize: 12.5, fontWeight: 700, color: "#64748b", marginBottom: 10 }}>
                  {locale === "en" ? "Preferred DeCS/MeSH Descriptors:" : locale === "es" ? "Descriptores DeCS/MeSH preferenciales:" : "Descritores DeCS/MeSH preferenciais:"}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {keywords.map((kw, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "5px 12px",
                        borderRadius: 20,
                        background: "#f1f5f9",
                        border: "1px solid #e2e8f0",
                        fontSize: 12.5,
                        color: "#334155",
                        fontWeight: 600,
                      }}
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </article>

              {/* CARD 3: POR QUE ESTE CAPÍTULO IMPORTA */}
              {(whyItMattersText || centralMessageText) && (
                <article
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    padding: "32px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 4px 16px rgba(0, 30, 80, 0.04)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <span style={{ fontSize: 18 }}>⭐</span>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: "#001a3d", margin: 0 }}>
                      {locale === "en" ? "Why this chapter matters" : locale === "es" ? "Por qué importa este capítulo" : "Por que este capítulo importa"}
                    </h3>
                  </div>

                  {whyItMattersText && (
                    <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#334155", margin: "0 0 20px" }}>
                      {whyItMattersText}
                    </p>
                  )}

                  {/* Highlight Quote Box */}
                  {centralMessageText && (
                    <div
                      style={{
                        background: "rgba(245, 34, 56, 0.04)",
                        border: "1.5px solid rgba(245, 34, 56, 0.25)",
                        borderRadius: 10,
                        padding: "16px 24px",
                        textAlign: "center",
                      }}
                    >
                      <span style={{ fontSize: 24, color: "#f52238", display: "inline-block", marginRight: 8, lineHeight: 0 }}>“</span>
                      <span style={{ fontSize: 15, fontWeight: 700, color: "#b91c1c" }}>
                        {centralMessageText}
                      </span>
                      <span style={{ fontSize: 24, color: "#f52238", display: "inline-block", marginLeft: 8, lineHeight: 0 }}>”</span>
                    </div>
                  )}
                </article>
              )}

              {/* CARD 4: DESTAQUES DO CAPÍTULO */}
              {cardsDestaque.length > 0 && (
                <article
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    padding: "32px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 4px 16px rgba(0, 30, 80, 0.04)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                    <span style={{ fontSize: 18 }}>✨</span>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: "#001a3d", margin: 0 }}>
                      {locale === "en" ? "Chapter Highlights" : locale === "es" ? "Destacados del capítulo" : "Destaques do capítulo"}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {cardsDestaque.map((card, cIdx) => {
                      const isPurple = cIdx === 0;
                      const isRed = cIdx === 1;
                      const iconBg = isPurple ? "#581c87" : isRed ? "#b91c1c" : "#0369a1";
                      return (
                        <div
                          key={cIdx}
                          style={{
                            background: "#f8fafc",
                            border: "1px solid #e2e8f0",
                            borderRadius: 12,
                            padding: "20px 16px",
                            textAlign: "center",
                          }}
                        >
                          <div
                            style={{
                              width: 48,
                              height: 48,
                              borderRadius: "50%",
                              background: iconBg,
                              color: "#fff",
                              display: "grid",
                              placeItems: "center",
                              margin: "0 auto 12px",
                              fontSize: 20,
                            }}
                          >
                            {isPurple ? "🌐" : isRed ? "🩺" : "📐"}
                          </div>
                          <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: iconBg, marginBottom: 4 }}>
                            {card.tipo}
                          </div>
                          <div style={{ fontSize: 13.5, fontWeight: 700, color: "#001a3d", marginBottom: 6 }}>
                            {card.titulo}
                          </div>
                          <p style={{ fontSize: 12.5, color: "#64748b", margin: 0, lineHeight: 1.45 }}>
                            {card.texto}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </article>
              )}

              {/* CARD 5: REFERÊNCIAS BIBLIOGRÁFICAS */}
              <article
                id="referencias"
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  padding: "32px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 16px rgba(0, 30, 80, 0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, borderBottom: "1px solid #f1f5f9", paddingBottom: 14 }}>
                  <span style={{ fontSize: 20 }}>📚</span>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#001a3d", margin: 0 }}>
                    {locale === "en" ? "Bibliographic References" : locale === "es" ? "Referencias bibliográficas" : "Referências bibliográficas"}
                  </h3>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {referencesList.map((ref) => (
                    <div
                      key={ref.num}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr auto",
                        gap: 14,
                        alignItems: "center",
                        padding: "10px 0",
                        borderBottom: "1px solid #f8fafc",
                        fontSize: 13.5,
                        lineHeight: 1.55,
                        color: "#334155",
                      }}
                    >
                      <div>
                        <strong>{ref.num}.</strong> {ref.text}
                      </div>

                      <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                        <a
                          href={ref.doi}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            padding: "4px 8px",
                            borderRadius: 6,
                            border: "1px solid #e2e8f0",
                            background: "#f8fafc",
                            fontSize: 11,
                            fontWeight: 700,
                            color: "#0369a1",
                            textDecoration: "none",
                          }}
                        >
                          doi ↗
                        </a>
                        <a
                          href={ref.pmid}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            padding: "4px 8px",
                            borderRadius: 6,
                            border: "1px solid #e2e8f0",
                            background: "#f8fafc",
                            fontSize: 11,
                            fontWeight: 700,
                            color: "#059669",
                            textDecoration: "none",
                          }}
                        >
                          PMID ↗
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* BOTTOM ROW: TRATADO EM DEBATE & CAPÍTULOS RELACIONADOS */}
              <div id="debate" className="grid grid-cols-1 md:grid-cols-2 gap-5 min-w-0 w-full">
                {/* Tratado em Debate Banner (Episódio 1 - Cap. 8 Oficial) */}
                <div
                  style={{
                    background: "#ffffff",
                    borderRadius: 14,
                    border: "1px solid #e2e8f0",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minWidth: 0,
                    width: "100%",
                    boxSizing: "border-box",
                    boxShadow: "0 4px 16px rgba(0, 30, 80, 0.04)",
                  }}
                >
                  <div>
                    {/* Custom Vimeo Player */}
                    <div style={{ marginBottom: 14 }}>
                      <CustomVimeoPlayer locale={locale} />
                    </div>

                    {/* Badge & Textos */}
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "3px 10px", borderRadius: 20, background: "#f0f7ff", border: "1px solid #dbeafe", color: "#003382", fontSize: 11, fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f52238" }} />
                      <span>{locale === "en" ? "Treatise in Debate" : locale === "es" ? "Tratado en Debate" : "Tratado em Debate"}</span>
                    </div>

                    <p style={{ fontSize: 10.5, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.04em", margin: "0 0 6px" }}>
                      {locale === "en"
                        ? "Official videocast derived from the treatise chapters."
                        : locale === "es"
                        ? "Videocast oficial derivado de los capítulos del tratado."
                        : "Videocast oficial derivado dos capítulos do tratado."}
                    </p>

                    <h4 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 8px", color: "#001a3d", lineHeight: 1.3 }}>
                      {locale === "en"
                        ? "Episode 1 – Chapter 8: Sagittal Plane Spinal Alignment"
                        : locale === "es"
                        ? "Episodio 1 – Capítulo 8: Columna Vertebral en el Plano Sagital"
                        : "Episódio 1 – Capítulo 8: Coluna Vertebral no Plano Sagital"}
                    </h4>

                    <p style={{ fontSize: 12.5, color: "#475569", lineHeight: 1.45, margin: "0 0 16px" }}>
                      {locale === "en"
                        ? "Discussion with the authors on fundamental concepts of sagittal alignment, radiographic parameters, and clinical significance."
                        : locale === "es"
                        ? "Discusión con los autores sobre los conceptos fundamentales del equilibrio sagital, parámetros radiográficos y su importancia clínica."
                        : "Discussão com os autores sobre os conceitos fundamentais do equilíbrio sagital, parâmetros radiográficos e sua importância no planejamento cirúrgico e nos resultados clínicos."}
                    </p>
                  </div>

                  <Link
                    href={`/${locale}#debate`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      padding: "10px 18px",
                      borderRadius: 8,
                      background: "#001a3d",
                      color: "#fff",
                      fontSize: 13,
                      fontWeight: 700,
                      textDecoration: "none",
                      transition: "background 0.2s ease",
                    }}
                    className="hover:bg-[#002b66]"
                  >
                    <span>{locale === "en" ? "Watch episode" : locale === "es" ? "Ver episodio" : "Assistir episódio"}</span>
                    <span>→</span>
                  </Link>
                </div>

                {/* Capítulos Relacionados Grid */}
                <div
                  style={{
                    background: "#001a3d",
                    borderRadius: 14,
                    padding: "24px",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minWidth: 0,
                    width: "100%",
                    boxSizing: "border-box",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ minWidth: 0, width: "100%" }}>
                    <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 14, display: "flex", alignItems: "center", gap: 6 }}>
                      <span>🔗</span>
                      <span>{locale === "en" ? "Related chapters" : locale === "es" ? "Capítulos relacionados" : "Capítulos relacionados"}</span>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 10, marginBottom: 16, minWidth: 0, width: "100%" }}>
                      {relatedChapters.map((rc) => (
                        <Link
                          key={rc.numero}
                          href={`/${locale}/capitulo/${rc.numero}`}
                          style={{
                            background: "rgba(255, 255, 255, 0.08)",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            borderRadius: 8,
                            padding: "10px 8px",
                            textAlign: "center",
                            textDecoration: "none",
                            color: "#fff",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: 0,
                            width: "100%",
                            boxSizing: "border-box",
                            transition: "background 0.2s ease, border-color 0.2s ease",
                          }}
                          className="hover:bg-white/15 hover:border-white/30"
                        >
                          <div style={{ fontSize: 14, marginBottom: 4 }}>📖</div>
                          <div
                            style={{
                              fontSize: 11,
                              fontWeight: 700,
                              lineHeight: 1.25,
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              wordBreak: "break-word",
                              width: "100%",
                              textAlign: "center",
                            }}
                          >
                            {locale === "en" ? (rc.titulo_en || rc.titulo_pt) : locale === "es" ? (rc.titulo_es || rc.titulo_pt) : rc.titulo_pt}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/${locale}/indice`}
                    style={{
                      display: "block",
                      textAlign: "center",
                      fontSize: 12.5,
                      fontWeight: 700,
                      color: "#94b8db",
                      textDecoration: "none",
                      paddingTop: "6px",
                    }}
                    className="hover:text-white"
                  >
                    {locale === "en" ? "View all chapters ›" : locale === "es" ? "Ver todos los capítulos ›" : "Ver todos os capítulos ›"}
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: SIDEBAR */}
            <aside className="lg:col-span-4 flex flex-col gap-6">
              {/* CARD 1: AUTORES */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  padding: "24px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 16px rgba(0, 30, 80, 0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18, borderBottom: "1px solid #f1f5f9", paddingBottom: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 18 }}>👥</span>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "#001a3d", margin: 0 }}>
                      {locale === "en" ? "Chapter Authors" : locale === "es" ? "Autores del Capítulo" : "Autores do Capítulo"}
                    </h3>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#64748b", background: "#f1f5f9", padding: "2px 8px", borderRadius: 12 }}>
                    {chapterAuthors.length}
                  </span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {chapterAuthors.map((author) => (
                    <div
                      key={author.slug}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "10px 12px",
                        borderRadius: 10,
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                      }}
                    >
                      <img
                        src={author.foto_url}
                        alt={author.nome}
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "2px solid #001a3d",
                          flexShrink: 0,
                        }}
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <Link
                          href={`/${locale}/autor/${author.slug}`}
                          style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: "#001a3d",
                            textDecoration: "none",
                            display: "block",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                          className="hover:underline hover:text-blue-700"
                        >
                          {author.nome}
                        </Link>
                        <div style={{ fontSize: 11.5, color: "#64748b", marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {translateAuthorRole(author.cargo, locale)}
                        </div>
                        <Link
                          href={`/${locale}/autor/${author.slug}`}
                          style={{
                            fontSize: 11.5,
                            fontWeight: 700,
                            color: "#e11d48",
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 3,
                            marginTop: 4,
                          }}
                        >
                          <span>{locale === "en" ? "View profile & bio" : locale === "es" ? "Ver perfil y currículo" : "Ver perfil & currículo"}</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CARD 2: IDIOMAS */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  padding: "24px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 16px rgba(0, 30, 80, 0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <span style={{ fontSize: 18 }}>🌐</span>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#001a3d", margin: 0 }}>
                    {locale === "en" ? "Languages" : locale === "es" ? "Idiomas" : "Idiomas"}
                  </h3>
                </div>

                <p style={{ fontSize: 12.5, color: "#64748b", margin: "0 0 14px" }}>
                  {locale === "en" ? "Read this chapter summary in other languages." : locale === "es" ? "Lea el resumen de este capítulo en otros idiomas." : "Leia o resumo deste capítulo em outros idiomas."}
                </p>

                <div style={{ display: "flex", gap: 8 }}>
                  <Link
                    href={`/pt/capitulo/${num}`}
                    style={{
                      flex: 1,
                      textAlign: "center",
                      padding: "8px",
                      borderRadius: 6,
                      background: locale === "pt" ? "#001a3d" : "#f1f5f9",
                      color: locale === "pt" ? "#fff" : "#334155",
                      fontWeight: 700,
                      fontSize: 13,
                      textDecoration: "none",
                    }}
                  >
                    PT
                  </Link>
                  <Link
                    href={`/es/capitulo/${num}`}
                    style={{
                      flex: 1,
                      textAlign: "center",
                      padding: "8px",
                      borderRadius: 6,
                      background: locale === "es" ? "#001a3d" : "#f1f5f9",
                      color: locale === "es" ? "#fff" : "#334155",
                      fontWeight: 700,
                      fontSize: 13,
                      textDecoration: "none",
                    }}
                  >
                    ES
                  </Link>
                  <Link
                    href={`/en/capitulo/${num}`}
                    style={{
                      flex: 1,
                      textAlign: "center",
                      padding: "8px",
                      borderRadius: 6,
                      background: locale === "en" ? "#001a3d" : "#f1f5f9",
                      color: locale === "en" ? "#fff" : "#334155",
                      fontWeight: 700,
                      fontSize: 13,
                      textDecoration: "none",
                    }}
                  >
                    EN
                  </Link>
                </div>
              </div>

              {/* CARD 3: AVISO IMPORTANTE */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  padding: "24px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 16px rgba(0, 30, 80, 0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <span style={{ fontSize: 18 }}>🛡️</span>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#001a3d", margin: 0 }}>
                    {locale === "en" ? "Important Notice" : locale === "es" ? "Aviso importante" : "Aviso importante"}
                  </h3>
                </div>

                <p style={{ fontSize: 12.5, lineHeight: 1.5, color: "#475569", margin: "0 0 12px" }}>
                  {locale === "en"
                    ? "This website is a reading support platform."
                    : locale === "es"
                    ? "Este sitio es una plataforma de apoyo a la lectura."
                    : "Este site é uma plataforma de apoio à leitura."}
                </p>
                <p style={{ fontSize: 12.5, lineHeight: 1.5, color: "#475569", margin: "0 0 12px" }}>
                  {locale === "en"
                    ? "Here you find the index, summary, authors, and bibliographic references for each chapter."
                    : locale === "es"
                    ? "Aquí encontrará el índice, resumen, autores y referencias bibliográficas de cada capítulo."
                    : "Aqui você encontra o índice, resumo, autores e referências bibliográficas de cada capítulo."}
                </p>
                <p style={{ fontSize: 12.5, lineHeight: 1.5, color: "#475569", margin: "0 0 20px" }}>
                  {locale === "en"
                    ? "Full reading of this chapter and the complete treatise is available exclusively in the printed edition of the Treatise on Spine Surgery."
                    : locale === "es"
                    ? "La lectura completa de este capítulo y de toda la obra está disponible exclusivamente en la edición impresa del Tratado de Cirugía de Columna Vertebral."
                    : "A leitura completa deste capítulo e de toda a obra está disponível exclusivamente na edição impressa do Tratado de Cirurgia da Coluna Vertebral."}
                </p>

                <div style={{ textAlign: "center", color: "#f52238" }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto" }}>
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
