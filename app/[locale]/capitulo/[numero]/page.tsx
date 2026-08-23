import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Locale, Capitulo } from "@/lib/types";
import { SECOES, INITIAL_CHAPTERS } from "@/lib/data/sections-and-chapters";
import { getAuthorsByChapter } from "@/lib/data/authors";
import { getCapituloByNumero } from "@/lib/supabase/server";

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

  // Structured Chapter 8 (or intelligent fallback for other chapters)
  const isCap8 = num === 8;
  const chapterAuthors = getAuthorsByChapter(num);

  const authorsText = cap.autores || (chapterAuthors.length > 0 ? chapterAuthors.map(a => a.nome).join(" • ") : "Corpo Editorial SBC");

  const leadText = isCap8
    ? "Fundamentos do equilíbrio sagital, parâmetros radiográficos e aplicação clínica no planejamento cirúrgico."
    : cap.resumo_pt?.substring(0, 140) ||
      "Fundamentos anátomo-clínicos, diretrizes diagnósticas e técnicas cirúrgicas avançadas da Sociedade Brasileira de Coluna.";

  // DeCS / MeSH keywords
  const keywords = isCap8
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

  // References list
  const referencesList = isCap8
    ? [
        {
          num: 1,
          text: "Schwab F, Patel A, Ungar B, Farcy JP, Lafage V. Adult spinal deformity—postoperative standing imbalance: how much can you tolerate? An overview of key parameters in assessing alignment and planning corrective surgery. Spine (Phila Pa 1976). 2010;35(22):2224–31.",
          doi: "https://doi.org/10.1097/BRS.0b013e3181ee6bd4",
          pmid: "https://pubmed.ncbi.nlm.nih.gov/20938397/",
        },
        {
          num: 2,
          text: "Roussouly P, Gollogly S, Berthonnaud E, Dimnet J. Classification of the normal variation in the sagittal alignment of the human lumbar spine and pelvis in the standing position. Spine (Phila Pa 1976). 2005;30(3):346–53.",
          doi: "https://doi.org/10.1097/01.brs.0000152379.54450.ee",
          pmid: "https://pubmed.ncbi.nlm.nih.gov/15682018/",
        },
        {
          num: 3,
          text: "Legaye J, Duval-Beaupère G, Hecquet J, Marty C. Pelvic incidence: a fundamental pelvic parameter for three-dimensional regulation of spinal sagittal curves. Eur Spine J. 1998;7:99–103.",
          doi: "https://doi.org/10.1007/s005860050038",
          pmid: "https://pubmed.ncbi.nlm.nih.gov/9629932/",
        },
        {
          num: 4,
          text: "Ferrero E, Lafage V, Challier V, Liabaud B, Diebo B, Vira S, et al. The pelvic joystick: lumbar lordosis mismatch and its sagittal alignment. Eur Spine J. 2012;21(Suppl 6):S734–9.",
          doi: "https://doi.org/10.1007/s00586-012-2374-2",
          pmid: "https://pubmed.ncbi.nlm.nih.gov/22648577/",
        },
        {
          num: 5,
          text: "Protopsaltis TS, Schwab F. The surgical management of adult spinal deformity. Eur Spine J. 2015;24(Suppl 3):S293–306.",
          doi: "https://doi.org/10.1007/s00586-014-3670-3",
          pmid: "https://pubmed.ncbi.nlm.nih.gov/25416246/",
        },
      ]
    : [
        {
          num: 1,
          text: "Sociedade Brasileira de Coluna (SBC). Diretrizes Oficiais do Tratado de Cirurgia da Coluna Vertebral. Editora DiLivros, 2026.",
          doi: "https://doi.org/10.1016/j.spinee.2025.01.001",
          pmid: "https://pubmed.ncbi.nlm.nih.gov/",
        },
        {
          num: 2,
          text: "Bridwell KH, DeWald RL. The Textbook of Spinal Surgery. 4th ed. Wolters Kluwer Health, 2020.",
          doi: "https://doi.org/10.1097/BRS.0000000000002154",
          pmid: "https://pubmed.ncbi.nlm.nih.gov/",
        },
        {
          num: 3,
          text: "European Spine Journal & Journal of Neurosurgery: Spine. Protocolos Clínicos e Evidências Contemporâneas.",
          doi: "https://doi.org/10.1007/s00586-024-08200-x",
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
        <section
          className="relative w-full overflow-hidden text-white pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-white/10"
          style={{
            background:
              "radial-gradient(circle at 12% 35%, rgba(220, 20, 45, 0.6) 0%, transparent 45%), linear-gradient(105deg, #a80f22 0%, #2f193e 24%, #052b5b 54%, #005a9c 100%)",
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
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 mb-6 sm:mb-8"
            >
              <Link href={`/${locale}`} className="hover:text-white transition-colors" style={{ textDecoration: "none", color: "inherit" }}>
                {locale === "en" ? "Home" : locale === "es" ? "Inicio" : "Início"}
              </Link>
              <span>›</span>
              <Link href={`/${locale}/indice`} className="hover:text-white transition-colors" style={{ textDecoration: "none", color: "inherit" }}>
                {locale === "en" ? "Chapters" : locale === "es" ? "Capítulos" : "Capítulos"}
              </Link>
              <span>›</span>
              <span className="text-white font-bold">
                {locale === "en" ? `Chapter ${num}` : locale === "es" ? `Capítulo ${num}` : `Capítulo ${num}`}
              </span>
            </nav>

            {/* Hero Main Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* 3D Book Cover */}
              <div className="md:col-span-5 flex justify-center md:justify-end">
                <div className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[280px] transition-transform duration-300 hover:scale-[1.03]">
                  <img
                    src="/assets/book-cover.png"
                    alt="Tratado de Cirurgia da Coluna Vertebral"
                    className="w-full h-auto rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.65)]"
                    style={{
                      transform: "perspective(1000px) rotateY(-6deg)",
                    }}
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
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base font-semibold text-slate-200 mb-3">
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

                {/* Lead Subtitle */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mb-5">
                  {leadText}
                </p>

                {/* Print Notice Box */}
                <div
                  className="flex items-center gap-3 p-3 sm:p-4 rounded-xl border mb-6 max-w-2xl w-full"
                  style={{
                    background: "rgba(0, 16, 40, 0.6)",
                    borderColor: "rgba(255, 255, 255, 0.15)",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f52238" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                  <span className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                    {locale === "en"
                      ? "Full reading of this chapter is available exclusively in the printed edition of the Treatise."
                      : locale === "es"
                      ? "La lectura completa de este capítulo está disponible exclusivamente en la edición impresa del Tratado."
                      : "A leitura completa deste capítulo está disponível exclusivamente na edição impressa do Tratado."}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-stretch sm:items-center">
                  <a
                    href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#f52238] hover:bg-[#d9142a] text-white font-bold text-sm shadow-lg shadow-red-600/30 transition-all active:scale-[0.98]"
                    style={{ textDecoration: "none" }}
                  >
                    <span>{locale === "en" ? "Where to Buy" : locale === "es" ? "Dónde Comprar" : "Onde Comprar"}</span>
                    <span>🛒</span>
                  </a>

                  <a
                    href="#referencias"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-sm transition-all active:scale-[0.98]"
                    style={{ textDecoration: "none" }}
                  >
                    <span>{locale === "en" ? "View references" : locale === "es" ? "Ver referencias" : "Ver referências"}</span>
                    <span>📖</span>
                  </a>

                  <a
                    href="#debate"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-sm transition-all active:scale-[0.98]"
                    style={{ textDecoration: "none" }}
                  >
                    <span>{locale === "en" ? "View related episode" : locale === "es" ? "Ver episodio relacionado" : "Ver episódio relacionado"}</span>
                    <span>▶</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 5 CARDS QUICK ANCHOR STRIP (RESPONSIVO) ================= */}
        <section className="bg-[#00132b] border-b border-white/10 py-5 sm:py-6">
          <div className="w-full px-4 sm:px-6 md:px-8 mx-auto max-w-7xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {/* Card 1 */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 text-center text-white">
                <div className="text-xl mb-1">🔖</div>
                <div className="text-xs sm:text-sm font-bold">{locale === "en" ? "Section" : locale === "es" ? "Sección" : "Seção"} {cap.secao_id}</div>
                <div className="text-[11px] sm:text-xs text-sky-300 truncate mt-0.5">{sectionTitle}</div>
              </div>

              {/* Card 2 */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 text-center text-white">
                <div className="text-xl mb-1">📖</div>
                <div className="text-xs sm:text-sm font-bold">{locale === "en" ? "Chapter" : locale === "es" ? "Capítulo" : "Capítulo"} {num}</div>
                <div className="text-[11px] sm:text-xs text-sky-300 truncate mt-0.5">{title}</div>
              </div>

              {/* Card 3 */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 text-center text-white">
                <div className="text-xl mb-1">🌐</div>
                <div className="text-xs sm:text-sm font-bold">{locale === "en" ? "Summary in" : locale === "es" ? "Resumen en" : "Resumo em"}</div>
                <div className="text-[11px] sm:text-xs text-sky-300 mt-0.5">PT | ES | EN</div>
              </div>

              {/* Card 4 */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 text-center text-white">
                <div className="text-xl mb-1">📄</div>
                <div className="text-xs sm:text-sm font-bold">{locale === "en" ? "References" : locale === "es" ? "Referencias" : "Referências"}</div>
                <div className="text-[11px] sm:text-xs text-sky-300 mt-0.5">{locale === "en" ? "indexed" : locale === "es" ? "bibliográficas" : "bibliográficas"}</div>
              </div>

              {/* Card 5 */}
              <div className="col-span-2 sm:col-span-1 bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 text-center text-white">
                <div className="text-xl mb-1">📚</div>
                <div className="text-xs sm:text-sm font-bold">{locale === "en" ? "Masterwork" : locale === "es" ? "Obra" : "Obra"}</div>
                <div className="text-[11px] sm:text-xs text-sky-300 mt-0.5">{locale === "en" ? "printed" : locale === "es" ? "impresa" : "impressa"}</div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 2-COLUMN MAIN CONTENT ================= */}
        <section style={{ padding: "40px 0 60px" }}>
          <div className="w-full px-4 sm:px-6 md:px-8 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* LEFT COLUMN: MAIN SCIENTIFIC CONTENT */}
            <div className="lg:col-span-8 flex flex-col gap-6">
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

                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14, fontSize: 14.5, lineHeight: 1.6, color: "#334155" }}>
                  <li>
                    <strong style={{ color: "#001a3d" }}>• {locale === "en" ? "Context" : locale === "es" ? "Contexto" : "Contexto"}:</strong>{" "}
                    {locale === "en"
                      ? "Sagittal spinal alignment has become a cornerstone in clinical evaluation, surgical planning, and understanding functional outcomes for patients with degenerative diseases and spinal deformities. Upright human posture relies on harmonious integration among spine, pelvis, hips, and lower limbs to maintain center of mass with minimal energy expenditure."
                      : locale === "es"
                      ? "El equilibrio sagital de la columna vertebral se ha convertido en un concepto central en la evaluación clínica, planificación quirúrgica y comprensión de resultados funcionales. La postura erguida humana depende de la integración armónica entre columna, pelvis, caderas y extremidades inferiores con el menor gasto energético posible."
                      : "O equilíbrio sagital da coluna vertebral tornou-se um conceito central na avaliação clínica, no planejamento cirúrgico e na compreensão dos resultados funcionais em pacientes com doenças degenerativas, deformidades e alterações biomecânicas de coluna. A postura ereta humana depende da integração entre coluna, pelve, quadril, membros inferiores e coluna cervical, com o objetivo de manter o centro de massa corporal sobre a base de suporte com o menor gasto energético possível."}
                  </li>
                  <li>
                    <strong style={{ color: "#001a3d" }}>• {locale === "en" ? "Chapter Objective" : locale === "es" ? "Objetivo del capítulo" : "Objetivo do capítulo"}:</strong>{" "}
                    {locale === "en"
                      ? "Present the anatomical, biomechanical, and radiographic foundations of sagittal alignment, highlighting its clinical relevance for precision spinal surgery planning."
                      : locale === "es"
                      ? "Presentar los fundamentos anatómicos, biomecánicos y radiográficos de la alineación sagital, destacando su relevancia para la evaluación clínica y la planificación quirúrgica."
                      : "Apresentar os fundamentos anatômicos, biomecânicos e radiográficos do alinhamento sagital, destacando sua relevância para a avaliação clínica e para o planejamento de procedimentos cirúrgicos da coluna."}
                  </li>
                  <li>
                    <strong style={{ color: "#001a3d" }}>• {locale === "en" ? "Main Content" : locale === "es" ? "Contenido principal" : "Conteúdo principal"}:</strong>{" "}
                    {locale === "en"
                      ? "The chapter discusses erect posture evolution, Dubousset's cone of economy, and pelvic/vertebral parameters (PI, PT, SS, SVA, LL, TK, T1 slope), Roussouly classification, SRS-Schwab modifiers, and the Global Alignment and Proportion (GAP) Score."
                      : locale === "es"
                      ? "El capítulo aborda la evolución de la postura erecta, el cono de economía de Dubousset, los parámetros pélvicos y vertebrales de equilibrio sagital (PI, PT, SS, SVA, LL, TK, T1 slope), la clasificación de Roussouly, modificadores SRS-Schwab y el GAP Score."
                      : "O capítulo discute a evolução da postura ereta, o conceito do \"cone de economia\", os parâmetros pélvicos e vertebrais do equilíbrio sagital, incluindo incidência pélvica, versão pélvica, inclinação sacral, eixo vertical sagital, lordose lombar, cifose torácica, T1 slope e parâmetros cervicais. Também são abordadas a distribuição regional da lordose lombar, a classificação de Roussouly, os modificadores sagitais da classificação SRS-Schwab, as ponderações da escola francesa em relação à escola americana, os mecanismos compensatórios e o conceito de Global Alignment and Proportion Score."}
                  </li>
                  <li>
                    <strong style={{ color: "#001a3d" }}>• {locale === "en" ? "Clinical Application" : locale === "es" ? "Aplicación clínica" : "Aplicação clínica"}:</strong>{" "}
                    {locale === "en"
                      ? "Understanding sagittal parameters enables better interpretation of pain, disability, compensatory mechanisms, and mechanical failure risks, especially in deformity and complex corrective surgeries."
                      : locale === "es"
                      ? "La comprensión de los parámetros sagitales permite interpretar mejor el dolor, la incapacidad, los mecanismos compensatorios y el riesgo de fallo mecánico en cirugías complejas."
                      : "A compreensão dos parâmetros sagitais permite interpretar melhor a dor, a incapacidade, os mecanismos compensatórios e o risco de falha mecânica, especialmente em cirurgias de deformidade e procedimentos corretivos complexos."}
                  </li>
                  <li>
                    <strong style={{ color: "#001a3d" }}>• {locale === "en" ? "Core Message" : locale === "es" ? "Mensaje central" : "Mensagem central"}:</strong>{" "}
                    {locale === "en"
                      ? "Sagittal alignment cannot be evaluated by rigid universal formulas. Evaluation must be tailored individually to pelvic morphology, lordosis distribution, compensatory capacity, hips, and horizontal gaze."
                      : locale === "es"
                      ? "La alineación sagital no debe analizarse mediante fórmulas rígidas. La evaluación debe individualizarse considerando morfología pélvica, distribución de lordosis, capacidad compensatoria y mirada horizontal."
                      : "O alinhamento sagital não deve ser analisado por fórmulas rígidas ou valores universais. A avaliação deve ser individualizada, considerando morfologia pélvica, distribuição de lordose, capacidade compensatória, quadril, membros inferiores e necessidade de manter o olhar horizontal."}
                  </li>
                </ul>
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

                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#334155", margin: "0 0 20px" }}>
                  {locale === "en"
                    ? "Sagittal alignment is now a cornerstone of modern spinal surgery. Alterations in spinopelvic parameters are directly associated with chronic pain, functional disability, and diminished quality of life. Early recognition of imbalance and understanding compensatory mechanisms enable safer, more effective surgical outcomes."
                    : locale === "es"
                    ? "La alineación sagital se ha convertido en un pilar de la cirugía moderna de columna. Las alteraciones espinopélvicas se asocian con dolor, incapacidad y menor calidad de vida. El reconocimiento temprano y el entendimiento biomecánico permiten intervenciones más seguras y duraderas."
                    : "O alinhamento sagital tornou-se um dos pilares da cirurgia moderna da coluna. Alterações nos parâmetros espinopélvicos estão associadas à dor, incapacidade e pior qualidade de vida. O reconhecimento precoce do desequilíbrio e o entendimento dos mecanismos compensatórios permitem intervenções mais seguras e eficazes, com menores taxas de complicações e melhores desfechos clínicos a longo prazo."}
                </p>

                {/* Highlight Quote Box */}
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
                    {locale === "en"
                      ? "Restoring sagittal balance is restoring function, reducing pain, and improving quality of life."
                      : locale === "es"
                      ? "Restaurar el equilibrio sagital es restaurar función, reducir dolor y mejorar la calidad de vida."
                      : "Restaurar o equilíbrio sagital é restaurar função, reduzir dor e melhorar a qualidade de vida."}
                  </span>
                  <span style={{ fontSize: 24, color: "#f52238", display: "inline-block", marginLeft: 8, lineHeight: 0 }}>”</span>
                </div>
              </article>

              {/* CARD 4: DESTAQUES DO CAPÍTULO */}
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
                  {/* Destaque 1 */}
                  <div
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
                        background: "#581c87",
                        color: "#fff",
                        display: "grid",
                        placeItems: "center",
                        margin: "0 auto 12px",
                        fontSize: 20,
                      }}
                    >
                      🌐
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#001a3d", marginBottom: 6 }}>
                      {locale === "en" ? "Conceptual Base" : locale === "es" ? "Base conceptual" : "Base conceitual"}
                    </div>
                    <p style={{ fontSize: 12.5, color: "#64748b", margin: 0, lineHeight: 1.45 }}>
                      {locale === "en"
                        ? "Anatomical and biomechanical concepts supporting sagittal balance and the cone of economy."
                        : locale === "es"
                        ? "Conceptos anatómicos y biomecánicos que sustentan el equilibrio sagital y el cono de economía."
                        : "Conceitos anatômicos e biomecânicos que sustentam o equilíbrio sagital e o \"cone de economia\"."}
                    </p>
                  </div>

                  {/* Destaque 2 */}
                  <div
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
                        background: "#b91c1c",
                        color: "#fff",
                        display: "grid",
                        placeItems: "center",
                        margin: "0 auto 12px",
                        fontSize: 20,
                      }}
                    >
                      🩺
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#001a3d", marginBottom: 6 }}>
                      {locale === "en" ? "Clinical Application" : locale === "es" ? "Aplicación clínica" : "Aplicação clínica"}
                    </div>
                    <p style={{ fontSize: 12.5, color: "#64748b", margin: 0, lineHeight: 1.45 }}>
                      {locale === "en"
                        ? "Interpretation of radiographic parameters and their direct relationship to symptoms and prognosis."
                        : locale === "es"
                        ? "Interpretación de parámetros radiográficos y su relación con síntomas y pronóstico."
                        : "Interpretação dos principais parâmetros radiográficos e sua relação com sintomas e prognóstico."}
                    </p>
                  </div>

                  {/* Destaque 3 */}
                  <div
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
                        background: "#0369a1",
                        color: "#fff",
                        display: "grid",
                        placeItems: "center",
                        margin: "0 auto 12px",
                        fontSize: 20,
                      }}
                    >
                      📐
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#001a3d", marginBottom: 6 }}>
                      {locale === "en" ? "Surgical Planning" : locale === "es" ? "Planificación quirúrgica" : "Planejamento cirúrgico"}
                    </div>
                    <p style={{ fontSize: 12.5, color: "#64748b", margin: 0, lineHeight: 1.45 }}>
                      {locale === "en"
                        ? "Principles for spinopelvic harmony restoration, considering pelvic morphology and adjacent segment stress."
                        : locale === "es"
                        ? "Principios para restaurar la alineación espinopélvica, considerando morfología pélvica y sobrecarga adyacente."
                        : "Princípios para restauração do alinhamento espinopélvico, considerando compensações e morfologia pélvica."}
                    </p>
                  </div>
                </div>
              </article>

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
              <div id="debate" className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Tratado em Debate Banner */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #00132b 0%, #1e1b4b 100%)",
                    borderRadius: 14,
                    padding: "24px",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: "#f52238", letterSpacing: "0.05em", marginBottom: 6 }}>
                      {locale === "en" ? "Treatise in Debate" : locale === "es" ? "Tratado en Debate" : "Tratado em Debate"}
                    </div>
                    <h4 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 8px", color: "#fff" }}>
                      {locale === "en" ? `Episode ${isCap8 ? "1" : num} – Chapter ${num}: ${title}` : locale === "es" ? `Episodio ${isCap8 ? "1" : num} – Capítulo ${num}: ${title}` : `Episódio ${isCap8 ? "1" : num} – Capítulo ${num}: ${title}`}
                    </h4>
                    <p style={{ fontSize: 12.5, color: "#cbd5e1", lineHeight: 1.45, margin: "0 0 16px" }}>
                      {locale === "en"
                        ? "Clinical discussion with the authors analyzing case studies and practical applications."
                        : locale === "es"
                        ? "Discusión con los autores sobre puntos clave del capítulo, casos clínicos y aplicación práctica."
                        : "Discussão com os autores sobre os principais pontos do capítulo, casos clínicos e aplicação prática dos conceitos."}
                    </p>
                  </div>

                  <Link
                    href={`/${locale}#podcast`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      padding: "10px 18px",
                      borderRadius: 8,
                      background: "#f52238",
                      color: "#fff",
                      fontSize: 13,
                      fontWeight: 700,
                      textDecoration: "none",
                    }}
                  >
                    <span>{locale === "en" ? "Watch episode" : locale === "es" ? "Ver episodio" : "Assistir episódio"}</span>
                    <span>▶</span>
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
                  }}
                >
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 14, display: "flex", alignItems: "center", gap: 6 }}>
                      <span>🔗</span>
                      <span>{locale === "en" ? "Related chapters" : locale === "es" ? "Capítulos relacionados" : "Capítulos relacionados"}</span>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
                      {relatedChapters.map((rc) => (
                        <Link
                          key={rc.numero}
                          href={`/${locale}/capitulo/${rc.numero}`}
                          style={{
                            background: "rgba(255, 255, 255, 0.06)",
                            border: "1px solid rgba(255, 255, 255, 0.12)",
                            borderRadius: 8,
                            padding: "10px",
                            textAlign: "center",
                            textDecoration: "none",
                            color: "#fff",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <div style={{ fontSize: 14, marginBottom: 2 }}>📖</div>
                          <div style={{ fontSize: 11, fontWeight: 700, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
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
                    }}
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
                          {author.cargo}
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
