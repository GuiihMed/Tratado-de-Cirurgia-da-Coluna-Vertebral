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
          </div>
        </section>

        {/* ================= FLOATING 5-COLUMN STATS BAR ================= */}
        <div className="w-full px-4 sm:px-6 md:px-8 mx-auto max-w-7xl relative z-20 -mt-8 mb-4">
          <div className="stats-bar w-full">
            <div className="stat">
              <svg><use href="#i-grid"></use></svg>
              <strong>{locale === "en" ? `Sec. ${cap.secao_id}` : locale === "es" ? `Sec. ${cap.secao_id}` : `Seção ${cap.secao_id}`}</strong>
              <span className="truncate max-w-[130px]">{sectionTitle}</span>
            </div>
            <div className="stat">
              <svg><use href="#i-book"></use></svg>
              <strong>{locale === "en" ? `Cap. ${num}` : locale === "es" ? `Cap. ${num}` : `Cap. ${num}`}</strong>
              <span>{locale === "en" ? "Clinical Chapter" : locale === "es" ? "Capítulo Clínico" : "Capítulo Clínico"}</span>
            </div>
            <div className="stat">
              <svg><use href="#i-users"></use></svg>
              <span className="stat-text">{chapterAuthors.length} {locale === "en" ? "Authors &\nContributors" : locale === "es" ? "Autores y\nColaboradores" : "Autores e\nColaboradores"}</span>
            </div>
            <div className="stat">
              <svg><use href="#i-globe"></use></svg>
              <span className="stat-text">Português<br/>Español<br/>English</span>
            </div>
            <div className="stat">
              <svg><use href="#i-ref"></use></svg>
              <span className="stat-text">{locale === "en" ? "Scientific\nReferences" : locale === "es" ? "Referencias\nCientíficas" : "Referências\nCientíficas"}</span>
            </div>
          </div>
        </div>

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
                    {/* Thumbnail com arte oficial e botão play */}
                    <Link
                      href={`/${locale}#debate`}
                      style={{
                        position: "relative",
                        display: "block",
                        width: "100%",
                        borderRadius: 10,
                        overflow: "hidden",
                        aspectRatio: "16/9",
                        marginBottom: 14,
                        background: "#00132b",
                        textDecoration: "none",
                      }}
                      className="group"
                    >
                      <img
                        src="/assets/debate-artwork.png"
                        alt="Tratado em Debate - Episódio 01"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.3s ease",
                        }}
                        className="group-hover:scale-105"
                      />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)" }} />

                      {/* Badge Episódio 01 */}
                      <div style={{ position: "absolute", left: 12, bottom: 10, zIndex: 2 }}>
                        <small style={{ display: "block", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#cbd5e1" }}>
                          {locale === "en" ? "EPISODE" : locale === "es" ? "EPISODIO" : "EPISÓDIO"}
                        </small>
                        <strong style={{ display: "block", fontSize: 24, fontWeight: 800, color: "#fff", lineHeight: 1 }}>
                          01
                        </strong>
                      </div>

                      {/* Central Play Icon */}
                      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
                        <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255, 255, 255, 0.25)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #fff" }} className="group-hover:scale-110 transition-transform">
                          <svg style={{ width: 18, height: 18, fill: "#fff", marginLeft: 2 }} viewBox="0 0 24 24">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        </div>
                      </div>
                    </Link>

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
