import Link from "next/link";
import { notFound } from "next/navigation";
import ModernHeader from "@/components/modern/ModernHeader";
import ModernFooter from "@/components/modern/ModernFooter";
import { Locale } from "@/lib/types";
import { SECOES, INITIAL_CHAPTERS } from "@/lib/data/sections-and-chapters";
import { getCapituloByNumero } from "@/lib/supabase/server";

interface CapituloNewPageProps {
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

export default async function CapituloNewPage({ params }: CapituloNewPageProps) {
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

  const isCap8 = num === 8;

  const authorsText = isCap8
    ? "Dr. Marcelo Ítalo Risso Neto • Dr. Paulo Tadeu Maia Cavali"
    : cap.autores || "Corpo Editorial Oficial SBC";

  const leadText = isCap8
    ? "Fundamentos anátomo-biomecânicos do equilíbrio sagital global, parâmetros espinopélvicos radiográficos e tomada de decisão clínica na cirurgia reconstrutiva da coluna."
    : cap.resumo_pt?.substring(0, 160) ||
      "Diretrizes anátomo-cirúrgicas essenciais, critérios diagnósticos de precisão e avanços contemporâneos da Sociedade Brasileira de Coluna.";

  // DeCS / MeSH keywords
  const keywords = isCap8
    ? [
        "Coluna Vertebral",
        "Equilíbrio Postural",
        "Incidência Pélvica (PI)",
        "Lordose Lombar (LL)",
        "Eixo Vertical Sagital (SVA)",
        "Cone de Economia",
        "Classificação de Roussouly",
        "Modificadores SRS-Schwab",
        "GAP Score",
        "Osteotomias Tridimensionais",
        "Doença do Nível Adjacente",
        "Qualidade de Vida (SRS-22)",
      ]
    : [
        "Coluna Vertebral",
        "Técnicas Cirúrgicas",
        "Diagnóstico por Imagem",
        "Biomecânica Espinhal",
        "Segurança Perioperatória",
        "Qualidade de Vida",
      ];

  // References list
  const referencesList = isCap8
    ? [
        {
          num: 1,
          author: "Schwab F, Patel A, Ungar B, Farcy JP, Lafage V.",
          title: "Adult spinal deformity—postoperative standing imbalance: how much can you tolerate? An overview of key parameters in assessing alignment and planning corrective surgery.",
          journal: "Spine (Phila Pa 1976). 2010;35(22):2224–31.",
          doi: "https://doi.org/10.1097/BRS.0b013e3181ee6bd4",
          pmid: "https://pubmed.ncbi.nlm.nih.gov/20938397/",
        },
        {
          num: 2,
          author: "Roussouly P, Gollogly S, Berthonnaud E, Dimnet J.",
          title: "Classification of the normal variation in the sagittal alignment of the human lumbar spine and pelvis in the standing position.",
          journal: "Spine (Phila Pa 1976). 2005;30(3):346–53.",
          doi: "https://doi.org/10.1097/01.brs.0000152379.54450.ee",
          pmid: "https://pubmed.ncbi.nlm.nih.gov/15682018/",
        },
        {
          num: 3,
          author: "Legaye J, Duval-Beaupère G, Hecquet J, Marty C.",
          title: "Pelvic incidence: a fundamental pelvic parameter for three-dimensional regulation of spinal sagittal curves.",
          journal: "Eur Spine J. 1998;7:99–103.",
          doi: "https://doi.org/10.1007/s005860050038",
          pmid: "https://pubmed.ncbi.nlm.nih.gov/9629932/",
        },
        {
          num: 4,
          author: "Ferrero E, Lafage V, Challier V, Liabaud B, Diebo B, Vira S, et al.",
          title: "The pelvic joystick: lumbar lordosis mismatch and its sagittal alignment.",
          journal: "Eur Spine J. 2012;21(Suppl 6):S734–9.",
          doi: "https://doi.org/10.1007/s00586-012-2374-2",
          pmid: "https://pubmed.ncbi.nlm.nih.gov/22648577/",
        },
        {
          num: 5,
          author: "Protopsaltis TS, Schwab F.",
          title: "The surgical management of adult spinal deformity.",
          journal: "Eur Spine J. 2015;24(Suppl 3):S293–306.",
          doi: "https://doi.org/10.1007/s00586-014-3670-3",
          pmid: "https://pubmed.ncbi.nlm.nih.gov/25416246/",
        },
      ]
    : [
        {
          num: 1,
          author: "Sociedade Brasileira de Coluna (SBC).",
          title: "Tratado Oficial de Cirurgia da Coluna Vertebral.",
          journal: "Editora DiLivros, 1ª Edição Oficial, 2026.",
          doi: "https://doi.org/10.1016/j.spinee.2025.01.001",
          pmid: "https://pubmed.ncbi.nlm.nih.gov/",
        },
        {
          num: 2,
          author: "Bridwell KH, DeWald RL.",
          title: "The Textbook of Spinal Surgery. 4th ed.",
          journal: "Wolters Kluwer Health, 2020.",
          doi: "https://doi.org/10.1097/BRS.0000000000002154",
          pmid: "https://pubmed.ncbi.nlm.nih.gov/",
        },
      ];

  return (
    <div style={{ background: "#001026", color: "#0f172a", minHeight: "100vh" }}>
      <ModernHeader locale={locale} currentPage="other" />

      <main style={{ paddingBottom: "100px" }}>
        {/* ================= MODERN HERO SECTION ================= */}
        <section
          style={{
            background: "linear-gradient(135deg, #001026 0%, #00224d 50%, #001738 100%)",
            color: "#fff",
            padding: "45px 0 55px",
            marginTop: "-88px",
            paddingTop: "125px",
            position: "relative",
            overflow: "hidden",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Ambient Glows */}
          <div
            style={{
              position: "absolute",
              top: "-20%",
              left: "15%",
              width: "600px",
              height: "400px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(245, 34, 56, 0.22) 0%, rgba(0, 0, 0, 0) 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-20%",
              right: "10%",
              width: "500px",
              height: "400px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(14, 101, 162, 0.28) 0%, rgba(0, 0, 0, 0) 70%)",
              pointerEvents: "none",
            }}
          />

          <div className="shell" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", alignItems: "center", gap: 40, position: "relative", zIndex: 1 }}>
            {/* Left Chapter Headline */}
            <div>
              {/* Breadcrumb */}
              <nav
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  color: "#94b8db",
                  marginBottom: 18,
                  flexWrap: "wrap",
                }}
              >
                <Link href={`/${locale}/home-new`} style={{ color: "#cbd5e1", textDecoration: "none" }}>
                  {locale === "en" ? "Home" : locale === "es" ? "Inicio" : "Início"}
                </Link>
                <span>›</span>
                <Link href={`/${locale}/indice-new`} style={{ color: "#cbd5e1", textDecoration: "none" }}>
                  {locale === "en" ? "Master Index" : locale === "es" ? "Índice General" : "Índice Geral"}
                </Link>
                <span>›</span>
                <Link
                  href={`/${locale}/indice-new?secao=${cap.secao_id}`}
                  style={{ color: "#67e8f9", textDecoration: "none" }}
                >
                  {locale === "en" ? "Section" : locale === "es" ? "Sección" : "Seção"} {cap.secao_id}: {sectionTitle}
                </Link>
                <span>›</span>
                <span style={{ color: "#fff", fontWeight: 700 }}>
                  {locale === "en" ? `Chapter ${cap.numero}` : locale === "es" ? `Capítulo ${cap.numero}` : `Capítulo ${cap.numero}`}
                </span>
              </nav>

              {/* Tag Pill */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "5px 14px",
                    borderRadius: 20,
                    background: "rgba(245, 34, 56, 0.25)",
                    border: "1px solid #f52238",
                    color: "#ff99a8",
                    fontSize: 12,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {locale === "en" ? "Section" : locale === "es" ? "Sección" : "Seção"} {cap.secao_id} • {sectionTitle}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    padding: "4px 10px",
                    borderRadius: 20,
                    background: "rgba(255, 255, 255, 0.12)",
                    color: "#fff",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  {locale === "en" ? `Chapter ${num < 10 ? `0${num}` : num} of 109` : locale === "es" ? `Capítulo ${num < 10 ? `0${num}` : num} de 109` : `Capítulo ${num < 10 ? `0${num}` : num} de 109`}
                </span>
              </div>

              {/* Title */}
              <h1
                style={{
                  fontSize: "clamp(32px, 3.8vw, 46px)",
                  fontWeight: 900,
                  color: "#fff",
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  margin: "0 0 14px",
                }}
              >
                {title}
              </h1>

              {/* Authors */}
              <div style={{ fontSize: 15.5, fontWeight: 700, color: "#ff808f", marginBottom: 14 }}>
                {authorsText}
              </div>

              {/* Lead */}
              <p style={{ fontSize: 16, lineHeight: 1.55, color: "#cbd5e1", margin: "0 0 22px", maxWidth: 660 }}>
                {leadText}
              </p>

              {/* Notice Box */}
              <div
                style={{
                  background: "rgba(245, 34, 56, 0.14)",
                  border: "1px solid rgba(245, 34, 56, 0.4)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 12,
                  padding: "14px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 28,
                  maxWidth: 660,
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "rgba(245, 34, 56, 0.3)",
                    display: "grid",
                    placeItems: "center",
                    color: "#ff808f",
                    fontSize: 18,
                    flexShrink: 0,
                  }}
                >
                  📖
                </div>
                <span style={{ fontSize: 13.5, color: "#fce7f3", fontWeight: 500 }}>
                  {locale === "en"
                    ? "Full reading of this chapter is available exclusively in the official printed edition of the Treatise."
                    : locale === "es"
                    ? "La lectura completa de este capítulo está disponible exclusivamente en la edición impresa oficial del Tratado."
                    : "A leitura completa deste capítulo está disponível exclusivamente na edição impressa oficial do Tratado."}
                </span>
              </div>

              {/* CTA Action Buttons */}
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                <Link
                  href={`/${locale}/home-new#comprar`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "13px 26px",
                    borderRadius: 12,
                    background: "linear-gradient(135deg, #f52238 0%, #b80f21 100%)",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: 14.5,
                    fontWeight: 800,
                    boxShadow: "0 8px 24px rgba(245, 34, 56, 0.45)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <span>{locale === "en" ? "Acquire Printed Treatise" : locale === "es" ? "Adquirir Tratado Impreso" : "Adquirir Tratado Impresso"}</span>
                  <span>🛒</span>
                </Link>

                <a
                  href="#resumo"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "13px 22px",
                    borderRadius: 12,
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(10px)",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: 14,
                    fontWeight: 700,
                    transition: "all 0.2s ease",
                  }}
                >
                  <span>{locale === "en" ? "Explore Summary" : locale === "es" ? "Explorar Resumen" : "Explorar Resumo"}</span>
                  <span>↓</span>
                </a>

                <a
                  href="#referencias"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "13px 20px",
                    borderRadius: 12,
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(10px)",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: 14,
                    fontWeight: 700,
                    transition: "all 0.2s ease",
                  }}
                >
                  <span>{locale === "en" ? `References (${referencesList.length})` : locale === "es" ? `Referencias (${referencesList.length})` : `Referências (${referencesList.length})`}</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Right: 3D Book Illustration Card */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  position: "relative",
                  perspective: 1000,
                  padding: "10px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "10%",
                    background: "radial-gradient(circle, rgba(245, 34, 56, 0.35) 0%, rgba(0, 0, 0, 0) 70%)",
                    filter: "blur(40px)",
                    zIndex: 0,
                  }}
                />
                <img
                  src="/assets/book-cover.png"
                  alt="Capa 3D Tratado de Coluna"
                  style={{
                    width: "100%",
                    maxWidth: 290,
                    borderRadius: 10,
                    boxShadow: "0 25px 60px rgba(0, 0, 0, 0.7), -10px 10px 30px rgba(0, 20, 50, 0.4)",
                    transform: "rotateY(-10deg) rotateX(3deg)",
                    position: "relative",
                    zIndex: 1,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= 2-COLUMN MODERN CONTENT ================= */}
        <section style={{ padding: "45px 0 80px", background: "#f1f5f9" }}>
          <div className="shell" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 40, alignItems: "center" }}>
            {/* MAIN COLUMN */}
            <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
              {/* CARD 1: RESUMO CIENTÍFICO ESTRUTURADO (HIGH CONTRAST & BEAUTIFUL) */}
              <article
                id="resumo"
                style={{
                  background: "#ffffff",
                  borderRadius: 20,
                  padding: "36px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 30px rgba(0, 20, 60, 0.05)",
                }}
              >
                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, borderBottom: "1px solid #f1f5f9", paddingBottom: 16 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "rgba(0, 26, 61, 0.06)",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 22,
                    }}
                  >
                    📑
                  </div>
                  <div>
                    <h2 style={{ fontSize: 22, fontWeight: 900, color: "#001a3d", margin: "0 0 2px" }}>
                      {locale === "en" ? "Chapter Clinical Summary" : locale === "es" ? "Resumen Clínico del Capítulo" : "Resumo Clínico do Capítulo"}
                    </h2>
                    <span style={{ fontSize: 13, color: "#64748b" }}>
                      {locale === "en"
                        ? "Academic synthesis, diagnostic methodology, and surgical recommendations"
                        : locale === "es"
                        ? "Síntesis académica, metodología diagnóstica y recomendaciones quirúrgicas"
                        : "Síntese acadêmica, metodologia diagnóstica e recomendações cirúrgicas"}
                    </span>
                  </div>
                </div>

                {/* Content Blocks */}
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {/* Block 1 */}
                  <div
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderLeft: "4px solid #f52238",
                      borderRadius: 12,
                      padding: "18px 22px",
                    }}
                  >
                    <div style={{ fontSize: 12.5, fontWeight: 800, textTransform: "uppercase", color: "#dc2626", letterSpacing: "0.06em", marginBottom: 6 }}>
                      • {locale === "en" ? "Clinical Context" : locale === "es" ? "Contexto Clínico" : "Contexto Clínico"}
                    </div>
                    <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#334155", margin: 0 }}>
                      {locale === "en"
                        ? "Sagittal spinal alignment is a cornerstone in clinical evaluation, surgical planning, and understanding functional outcomes for patients with degenerative diseases and spinal deformities. Upright human posture relies on harmonious integration among spine, pelvis, hips, and lower extremities to maintain center of mass over the support base with minimal energy expenditure."
                        : locale === "es"
                        ? "El equilibrio sagital de la columna vertebral se ha convertido en un concepto central en la evaluación clínica, planificación quirúrgica y comprensión de resultados funcionales. La postura erguida humana depende de la integración armónica entre columna, pelvis, caderas y extremidades inferiores con el menor gasto energético posible."
                        : "O equilíbrio sagital da coluna vertebral tornou-se um conceito central na avaliação clínica, no planejamento cirúrgico e na compreensão dos resultados funcionais em pacientes com doenças degenerativas, deformidades e alterações biomecânicas de coluna. A postura ereta humana depende da integração entre coluna, pelve, quadril, membros inferiores e coluna cervical, com o objetivo de manter o centro de massa corporal sobre a base de suporte com o menor gasto energético possível."}
                    </p>
                  </div>

                  {/* Block 2 */}
                  <div
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderLeft: "4px solid #0284c7",
                      borderRadius: 12,
                      padding: "18px 22px",
                    }}
                  >
                    <div style={{ fontSize: 12.5, fontWeight: 800, textTransform: "uppercase", color: "#0284c7", letterSpacing: "0.06em", marginBottom: 6 }}>
                      • {locale === "en" ? "Objective of the Approach" : locale === "es" ? "Objetivo del Enfoque" : "Objetivo da Abordagem"}
                    </div>
                    <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#334155", margin: 0 }}>
                      {locale === "en"
                        ? "Present anatomical, biomechanical, and radiographic principles of sagittal alignment, emphasizing its relevance for clinical assessment and precision spinal surgical planning."
                        : locale === "es"
                        ? "Presentar los fundamentos anatómicos, biomecánicos y radiográficos de la alineación sagital, destacando su relevancia para la evaluación clínica y la planificación quirúrgica."
                        : "Apresentar os fundamentos anatômicos, biomecânicos e radiográficos do alinhamento sagital, destacando sua relevância para a avaliação clínica e para o planejamento de procedimentos cirúrgicos da coluna."}
                    </p>
                  </div>

                  {/* Block 3 */}
                  <div
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderLeft: "4px solid #d97706",
                      borderRadius: 12,
                      padding: "18px 22px",
                    }}
                  >
                    <div style={{ fontSize: 12.5, fontWeight: 800, textTransform: "uppercase", color: "#d97706", letterSpacing: "0.06em", marginBottom: 6 }}>
                      • {locale === "en" ? "Main Content & Key Parameters" : locale === "es" ? "Contenido Principal y Parámetros Clave" : "Conteúdo Principal & Parâmetros Chave"}
                    </div>
                    <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#334155", margin: 0 }}>
                      {locale === "en"
                        ? "The chapter reviews erect posture evolution, Dubousset's cone of economy, and pelvic/vertebral sagittal balance parameters including pelvic incidence (PI), pelvic tilt (PT), sacral slope (SS), sagittal vertical axis (SVA), lumbar lordosis (LL), thoracic kyphosis (TK), T1 slope, Roussouly classification, SRS-Schwab modifiers, and the Global Alignment and Proportion (GAP) Score."
                        : locale === "es"
                        ? "El capítulo aborda la evolución de la postura erecta, el cono de economía de Dubousset, los parámetros pélvicos y vertebrales de equilibrio sagital (PI, PT, SS, SVA, LL, TK, T1 slope), la clasificación de Roussouly, modificadores SRS-Schwab y el Global Alignment and Proportion (GAP) Score."
                        : "O capítulo discute a evolução da postura ereta, o conceito do \"cone de economia\", os parâmetros pélvicos e vertebrais do equilíbrio sagital, incluindo incidência pélvica (PI), versão pélvica (PT), inclinação sacral (SS), eixo vertical sagital (SVA), lordose lombar (LL), cifose torácica (TK), T1 slope e parâmetros cervicais. Também são abordadas a distribuição regional da lordose lombar, a classificação de Roussouly, os modificadores sagitais da classificação SRS-Schwab, as ponderações da escola francesa em relação à escola americana, os mecanismos compensatórios e o conceito de Global Alignment and Proportion Score (GAP)."}
                    </p>
                  </div>

                  {/* Block 4 */}
                  <div
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderLeft: "4px solid #16a34a",
                      borderRadius: 12,
                      padding: "18px 22px",
                    }}
                  >
                    <div style={{ fontSize: 12.5, fontWeight: 800, textTransform: "uppercase", color: "#16a34a", letterSpacing: "0.06em", marginBottom: 6 }}>
                      • {locale === "en" ? "Core Takeaway for Surgeons" : locale === "es" ? "Mensaje Central a los Cirujanos" : "Mensagem Central aos Cirurgiões"}
                    </div>
                    <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#334155", margin: 0 }}>
                      {locale === "en"
                        ? "Sagittal alignment cannot be evaluated through rigid universal formulas. Analysis must be tailored individually to pelvic morphology, lordosis distribution, compensatory capacity, hips, lower limbs, and maintaining horizontal gaze."
                        : locale === "es"
                        ? "La alineación sagital no debe analizarse mediante fórmulas rígidas. La evaluación debe individualizarse considerando morfología pélvica, distribución de lordosis, capacidad compensatoria, caderas y necesidad de mantener la mirada horizontal."
                        : "O alinhamento sagital não deve ser analisado por fórmulas rígidas ou valores universais. A avaliação deve ser individualizada, considerando morfologia pélvica, distribuição de lordose, capacidade compensatória, quadril, membros inferiores e necessidade de manter o olhar horizontal."}
                    </p>
                  </div>
                </div>
              </article>

              {/* CARD 2: PALAVRAS-CHAVE MODERNAS */}
              <article
                style={{
                  background: "#ffffff",
                  borderRadius: 20,
                  padding: "28px 32px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 30px rgba(0, 20, 60, 0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <span style={{ fontSize: 20 }}>🏷️</span>
                  <h3 style={{ fontSize: 17, fontWeight: 900, color: "#001a3d", margin: 0 }}>
                    {locale === "en" ? "DeCS / MeSH Scientific Descriptors" : locale === "es" ? "Descriptores Científicos DeCS / MeSH" : "Descritores Científicos DeCS / MeSH"}
                  </h3>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {keywords.map((kw, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "6px 14px",
                        borderRadius: 20,
                        background: "#f1f5f9",
                        border: "1px solid #cbd5e1",
                        fontSize: 13,
                        color: "#001a3d",
                        fontWeight: 700,
                        transition: "all 0.2s ease",
                      }}
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </article>

              {/* CARD 3: POR QUE ESTE CAPÍTULO IMPORTA (DEEP NAVY CARD) */}
              <article
                style={{
                  background: "linear-gradient(135deg, #001533 0%, #00224d 100%)",
                  borderRadius: 20,
                  padding: "36px",
                  color: "#fff",
                  boxShadow: "0 12px 36px rgba(0, 20, 60, 0.15)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <span style={{ fontSize: 22 }}>⭐</span>
                  <h3 style={{ fontSize: 20, fontWeight: 900, color: "#fff", margin: 0 }}>
                    {locale === "en" ? "Why this chapter matters" : locale === "es" ? "Por qué importa este capítulo" : "Por que este capítulo importa"}
                  </h3>
                </div>

                <p style={{ fontSize: 15, lineHeight: 1.65, color: "#cbd5e1", margin: "0 0 24px" }}>
                  {locale === "en"
                    ? "Sagittal alignment is now a cornerstone of modern spinal surgery. Alterations in spinopelvic parameters are directly associated with chronic pain, functional disability, and diminished quality of life. Early recognition of imbalance and understanding compensatory mechanisms enable safer, more effective surgical outcomes."
                    : locale === "es"
                    ? "La alineación sagital se ha convertido en un pilar de la cirugía moderna de columna. Las alteraciones espinopélvicas se asocian con dolor, incapacidad y menor calidad de vida. El reconocimiento temprano y el entendimiento biomecánico permiten intervenciones más seguras y duraderas."
                    : "O alinhamento sagital tornou-se um dos pilares da cirurgia moderna da coluna. Alterações nos parâmetros espinopélvicos estão associadas à dor, incapacidade e pior qualidade de vida. O reconhecimento precoce do desequilíbrio e o entendimento dos mecanismos compensatórios permitem intervenções mais seguras e eficazes, com menores taxas de complicações e melhores desfechos clínicos a longo prazo."}
                </p>

                {/* Quote Box */}
                <div
                  style={{
                    background: "rgba(245, 34, 56, 0.18)",
                    border: "1.5px solid rgba(245, 34, 56, 0.5)",
                    borderRadius: 14,
                    padding: "20px 28px",
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontSize: 16.5, fontWeight: 800, color: "#fff", fontStyle: "italic", lineHeight: 1.5 }}>
                    {locale === "en"
                      ? "“ Restoring sagittal balance is restoring function, alleviating pain, and elevating patient quality of life. ”"
                      : locale === "es"
                      ? "“ Restaurar el equilibrio sagital es restaurar función, reducir dolor y mejorar la calidad de vida. ”"
                      : "“ Restaurar o equilíbrio sagital é restaurar função, reduzir dor e melhorar a qualidade de vida. ”"}
                  </span>
                </div>
              </article>

              {/* CARD 4: TRÍADE DE DESTAQUES CIRÚRGICOS */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
                <div
                  style={{
                    background: "#ffffff",
                    borderRadius: 18,
                    padding: "24px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 6px 20px rgba(0, 20, 60, 0.04)",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "#f3e8ff",
                      color: "#6b21a8",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 22,
                      marginBottom: 14,
                    }}
                  >
                    🌐
                  </div>
                  <h4 style={{ fontSize: 16, fontWeight: 900, color: "#001a3d", margin: "0 0 8px" }}>
                    {locale === "en" ? "Conceptual Foundation" : locale === "es" ? "Base Conceptual" : "Base Conceitual"}
                  </h4>
                  <p style={{ fontSize: 13, color: "#475569", margin: 0, lineHeight: 1.5 }}>
                    {locale === "en"
                      ? "Anatomical and biomechanical foundations underlying sagittal alignment and Dubousset's cone of economy."
                      : locale === "es"
                      ? "Fundamentos anatómicos y biomecánicos del equilibrio sagital y el cono de economía de Dubousset."
                      : "Conceitos anatômicos e biomecânicos que sustentam o equilíbrio sagital e o \"cone de economia de Dubousset\"."}
                  </p>
                </div>

                <div
                  style={{
                    background: "#ffffff",
                    borderRadius: 18,
                    padding: "24px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 6px 20px rgba(0, 20, 60, 0.04)",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "#fee2e2",
                      color: "#b91c1c",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 22,
                      marginBottom: 14,
                    }}
                  >
                    🩺
                  </div>
                  <h4 style={{ fontSize: 16, fontWeight: 900, color: "#001a3d", margin: "0 0 8px" }}>
                    {locale === "en" ? "Clinical Application" : locale === "es" ? "Aplicación Clínica" : "Aplicação Clínica"}
                  </h4>
                  <p style={{ fontSize: 13, color: "#475569", margin: 0, lineHeight: 1.5 }}>
                    {locale === "en"
                      ? "Radiographic parameter interpretation and its direct relationship with symptoms and functional prognosis."
                      : locale === "es"
                      ? "Interpretación de parámetros radiográficos y su correlación directa con síntomas y pronóstico."
                      : "Interpretação dos principais parâmetros radiográficos e sua relação direta com sintomas e prognóstico funcional."}
                  </p>
                </div>

                <div
                  style={{
                    background: "#ffffff",
                    borderRadius: 18,
                    padding: "24px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 6px 20px rgba(0, 20, 60, 0.04)",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "#e0f2fe",
                      color: "#0369a1",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 22,
                      marginBottom: 14,
                    }}
                  >
                    📐
                  </div>
                  <h4 style={{ fontSize: 16, fontWeight: 900, color: "#001a3d", margin: "0 0 8px" }}>
                    {locale === "en" ? "3D Planning" : locale === "es" ? "Planificación 3D" : "Planejamento 3D"}
                  </h4>
                  <p style={{ fontSize: 13, color: "#475569", margin: 0, lineHeight: 1.5 }}>
                    {locale === "en"
                      ? "Surgical restoration principles for spinopelvic harmony, minimizing adjacent-level mechanical stress."
                      : locale === "es"
                      ? "Principios para restaurar la armonía espinopélvica, previniendo fallas en el nivel adyacente."
                      : "Princípios para restauração da harmonia espinopélvica, prevenindo sobrecargas no nível adjacente."}
                  </p>
                </div>
              </div>

              {/* CARD 5: REFERÊNCIAS BIBLIOGRÁFICAS INTERATIVAS */}
              <article
                id="referencias"
                style={{
                  background: "#ffffff",
                  borderRadius: 20,
                  padding: "36px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 30px rgba(0, 20, 60, 0.05)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, borderBottom: "1px solid #f1f5f9", paddingBottom: 16 }}>
                  <div>
                    <h3 style={{ fontSize: 20, fontWeight: 900, color: "#001a3d", margin: "0 0 4px" }}>
                      {locale === "en" ? "Selected Bibliographic References" : locale === "es" ? "Referencias Bibliográficas Seleccionadas" : "Referências Bibliográficas Selecionadas"}
                    </h3>
                    <span style={{ fontSize: 13, color: "#64748b" }}>
                      {locale === "en" ? "High-impact peer-reviewed literature indexed on PubMed / DOI" : locale === "es" ? "Literatura de alto impacto indexada en PubMed / DOI" : "Literatura de alto impacto indexada no PubMed / DOI"}
                    </span>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 800, padding: "4px 12px", borderRadius: 12, background: "#f1f5f9", color: "#475569" }}>
                    {referencesList.length} {locale === "en" ? "References" : locale === "es" ? "Referencias" : "Referências"}
                  </span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {referencesList.map((ref) => (
                    <div
                      key={ref.num}
                      style={{
                        padding: "16px 18px",
                        borderRadius: 12,
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        display: "grid",
                        gridTemplateColumns: "1fr auto",
                        gap: 16,
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 750, color: "#001a3d", marginBottom: 4 }}>
                          {ref.num}. {ref.author} {ref.title}
                        </div>
                        <div style={{ fontSize: 12.5, color: "#64748b", fontStyle: "italic" }}>
                          {ref.journal}
                        </div>
                      </div>

                      <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                        <a
                          href={ref.doi}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            padding: "6px 12px",
                            borderRadius: 6,
                            border: "1px solid #93c5fd",
                            background: "#eff6ff",
                            color: "#1d4ed8",
                            fontSize: 12,
                            fontWeight: 700,
                            textDecoration: "none",
                          }}
                        >
                          DOI ↗
                        </a>
                        <a
                          href={ref.pmid}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            padding: "6px 12px",
                            borderRadius: 6,
                            border: "1px solid #86efac",
                            background: "#f0fdf4",
                            color: "#15803d",
                            fontSize: 12,
                            fontWeight: 700,
                            textDecoration: "none",
                          }}
                        >
                          PubMed ↗
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* BOTTOM: TRATADO EM DEBATE & NAVEGAÇÃO */}
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 20 }}>
                {/* Tratado em Debate Video Card */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #001026 0%, #032b69 100%)",
                    borderRadius: 20,
                    padding: "28px",
                    color: "#fff",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 850, textTransform: "uppercase", color: "#ff808f", letterSpacing: "0.08em", marginBottom: 6 }}>
                      {locale === "en" ? "Treatise in Debate • Official Videocast" : locale === "es" ? "Tratado en Debate • Videocast Oficial" : "Tratado em Debate • Podcast Oficial"}
                    </div>
                    <h4 style={{ fontSize: 18, fontWeight: 900, color: "#fff", margin: "0 0 10px" }}>
                      {locale === "en" ? `Episode ${isCap8 ? "1" : num} – Chapter ${num}: ${title}` : locale === "es" ? `Episodio ${isCap8 ? "1" : num} – Capítulo ${num}: ${title}` : `Episódio ${isCap8 ? "1" : num} – Capítulo ${num}: ${title}`}
                    </h4>
                    <p style={{ fontSize: 13, color: "#cbd5e1", lineHeight: 1.5, margin: "0 0 20px" }}>
                      {locale === "en"
                        ? "Deepen your understanding through clinical debates with the chapter authors discussing complex case studies and surgical workflows."
                        : locale === "es"
                        ? "Profundice en el debate científico con los autores del capítulo analizando casos prácticos y conductas quirúrgicas."
                        : "Aprofunde-se no debate científico com os autores do capítulo discutindo casos práticos e condutas cirúrgicas."}
                    </p>
                  </div>

                  <Link
                    href={`/${locale}/home-new#podcast`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      padding: "11px 20px",
                      borderRadius: 10,
                      background: "linear-gradient(135deg, #f52238 0%, #b80f21 100%)",
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: 13.5,
                      fontWeight: 800,
                      boxShadow: "0 6px 18px rgba(245, 34, 56, 0.4)",
                    }}
                  >
                    <span>{locale === "en" ? "Watch Full Episode" : locale === "es" ? "Ver Episodio Completo" : "Assistir Episódio Completo"}</span>
                    <span>▶</span>
                  </Link>
                </div>

                {/* Navegação Entre Capítulos */}
                <div
                  style={{
                    background: "#ffffff",
                    borderRadius: 20,
                    padding: "28px",
                    border: "1px solid #e2e8f0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0 6px 20px rgba(0, 20, 60, 0.04)",
                  }}
                >
                  <div>
                    <h4 style={{ fontSize: 16, fontWeight: 900, color: "#001a3d", margin: "0 0 14px" }}>
                      {locale === "en" ? "Browse Treatise" : locale === "es" ? "Navegar en la Obra" : "Navegar na Obra"}
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {prevCap && (
                        <Link
                          href={`/${locale}/capitulo-new/${prevCap.numero}`}
                          style={{
                            padding: "10px 14px",
                            borderRadius: 10,
                            background: "#f8fafc",
                            border: "1px solid #e2e8f0",
                            textDecoration: "none",
                            color: "#334155",
                            fontSize: 12.5,
                            fontWeight: 700,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <span>← {locale === "en" ? `Ch. ${prevCap.numero}: ${prevCap.titulo_en || prevCap.titulo_pt}` : locale === "es" ? `Cap. ${prevCap.numero}: ${prevCap.titulo_es || prevCap.titulo_pt}` : `Cap. ${prevCap.numero}: ${prevCap.titulo_pt}`}</span>
                        </Link>
                      )}

                      {nextCap && (
                        <Link
                          href={`/${locale}/capitulo-new/${nextCap.numero}`}
                          style={{
                            padding: "10px 14px",
                            borderRadius: 10,
                            background: "#f8fafc",
                            border: "1px solid #e2e8f0",
                            textDecoration: "none",
                            color: "#334155",
                            fontSize: 12.5,
                            fontWeight: 700,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <span>{locale === "en" ? `Ch. ${nextCap.numero}: ${nextCap.titulo_en || nextCap.titulo_pt}` : locale === "es" ? `Cap. ${nextCap.numero}: ${nextCap.titulo_es || nextCap.titulo_pt}` : `Cap. ${nextCap.numero}: ${nextCap.titulo_pt}`} →</span>
                        </Link>
                      )}
                    </div>
                  </div>

                  <Link
                    href={`/${locale}/indice-new`}
                    style={{
                      marginTop: 16,
                      fontSize: 13,
                      fontWeight: 800,
                      color: "#f52238",
                      textDecoration: "none",
                      textAlign: "center",
                      display: "block",
                    }}
                  >
                    {locale === "en" ? "View Complete 109 Chapters Index ↗" : locale === "es" ? "Ver Índice Completo de 109 Capítulos ↗" : "Ver Índice Completo de 109 Capítulos ↗"}
                  </Link>
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* CARD 1: AUTORES */}
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: 20,
                  padding: "28px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 30px rgba(0, 20, 60, 0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20, borderBottom: "1px solid #f1f5f9", paddingBottom: 14 }}>
                  <span style={{ fontSize: 20 }}>👨‍⚕️</span>
                  <h3 style={{ fontSize: 17, fontWeight: 900, color: "#001a3d", margin: 0 }}>
                    {locale === "en" ? "Chapter Authors" : locale === "es" ? "Autores del Capítulo" : "Autores do Capítulo"}
                  </h3>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <img
                      src="/assets/marcelo-risso.png"
                      alt="Dr. Marcelo Ítalo Risso Neto"
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "3px solid #f52238",
                      }}
                    />
                    <div>
                      <div style={{ fontSize: 14.5, fontWeight: 800, color: "#001a3d" }}>
                        Dr. Marcelo Ítalo Risso
                      </div>
                      <div style={{ fontSize: 12, color: "#f52238", fontWeight: 700 }}>
                        {locale === "en" ? "Coordinator & SBC Editor" : locale === "es" ? "Coordinador y Editor SBC" : "Coordenador & Editor SBC"}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <img
                      src="/assets/edson-pudles.png"
                      alt="Dr. Paulo Tadeu Maia Cavali"
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "3px solid #001a3d",
                      }}
                    />
                    <div>
                      <div style={{ fontSize: 14.5, fontWeight: 800, color: "#001a3d" }}>
                        Dr. Paulo Tadeu Maia Cavali
                      </div>
                      <div style={{ fontSize: 12, color: "#64748b", fontWeight: 600 }}>
                        {locale === "en" ? "Specialist & Contributing Author" : locale === "es" ? "Especialista y Autor Invitado" : "Especialista & Autor Convidado"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 2: IDIOMAS */}
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: 20,
                  padding: "28px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 30px rgba(0, 20, 60, 0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <span style={{ fontSize: 20 }}>🌐</span>
                  <h3 style={{ fontSize: 17, fontWeight: 900, color: "#001a3d", margin: 0 }}>
                    {locale === "en" ? "Available Languages" : locale === "es" ? "Idiomas Disponibles" : "Idiomas Disponíveis"}
                  </h3>
                </div>

                <p style={{ fontSize: 13, color: "#64748b", margin: "0 0 16px" }}>
                  {locale === "en"
                    ? "Access titles and summaries for this chapter across international editions:"
                    : locale === "es"
                    ? "Acceda a los títulos y resúmenes de este capítulo en las ediciones internacionales:"
                    : "Acesse os títulos e resumos deste capítulo nas edições internacionais:"}
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                  <Link
                    href={`/pt/capitulo-new/${num}`}
                    style={{
                      textAlign: "center",
                      padding: "10px",
                      borderRadius: 8,
                      background: locale === "pt" ? "#f52238" : "#f1f5f9",
                      color: locale === "pt" ? "#fff" : "#334155",
                      fontWeight: 800,
                      fontSize: 13.5,
                      textDecoration: "none",
                      boxShadow: locale === "pt" ? "0 4px 12px rgba(245, 34, 56, 0.3)" : "none",
                    }}
                  >
                    PT 🇧🇷
                  </Link>
                  <Link
                    href={`/es/capitulo-new/${num}`}
                    style={{
                      textAlign: "center",
                      padding: "10px",
                      borderRadius: 8,
                      background: locale === "es" ? "#f52238" : "#f1f5f9",
                      color: locale === "es" ? "#fff" : "#334155",
                      fontWeight: 800,
                      fontSize: 13.5,
                      textDecoration: "none",
                      boxShadow: locale === "es" ? "0 4px 12px rgba(245, 34, 56, 0.3)" : "none",
                    }}
                  >
                    ES 🇪🇸
                  </Link>
                  <Link
                    href={`/en/capitulo-new/${num}`}
                    style={{
                      textAlign: "center",
                      padding: "10px",
                      borderRadius: 8,
                      background: locale === "en" ? "#f52238" : "#f1f5f9",
                      color: locale === "en" ? "#fff" : "#334155",
                      fontWeight: 800,
                      fontSize: 13.5,
                      textDecoration: "none",
                      boxShadow: locale === "en" ? "0 4px 12px rgba(245, 34, 56, 0.3)" : "none",
                    }}
                  >
                    EN 🇺🇸
                  </Link>
                </div>
              </div>

              {/* CARD 3: AVISO INSTITUCIONAL */}
              <div
                style={{
                  background: "linear-gradient(135deg, #00132b 0%, #00224d 100%)",
                  borderRadius: 20,
                  padding: "28px",
                  color: "#fff",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                  <span style={{ fontSize: 20 }}>🛡️</span>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: "#fff", margin: 0 }}>
                    {locale === "en" ? "SBC Institutional Notice" : locale === "es" ? "Aviso Institucional SBC" : "Aviso Institucional SBC"}
                  </h3>
                </div>

                <p style={{ fontSize: 13, lineHeight: 1.55, color: "#cbd5e1", margin: "0 0 14px" }}>
                  {locale === "en"
                    ? "This portal is the official digital academic support companion to the printed masterwork of the Brazilian Spine Society."
                    : locale === "es"
                    ? "Este portal es la plataforma digital oficial de apoyo académico a la obra impresa de la Sociedade Brasileira de Coluna."
                    : "Este portal é a plataforma digital oficial de apoio acadêmico à obra impressa da Sociedade Brasileira de Coluna."}
                </p>
                <p style={{ fontSize: 13, lineHeight: 1.55, color: "#cbd5e1", margin: "0 0 20px" }}>
                  {locale === "en"
                    ? "The complete treatise with all surgical diagrams, high-resolution anatomical plates, and full references is exclusive to the Printed Masterwork."
                    : locale === "es"
                    ? "La versión completa con todos los esquemas quirúrgicos, láminas anatómicas y referencias es exclusiva del Tratado Impreso."
                    : "A íntegra com todos os esquemas cirúrgicos, tabelas e discussões técnicas completas é exclusiva do Tratado Impresso."}
                </p>

                <Link
                  href={`/${locale}/home-new#comprar`}
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "11px",
                    borderRadius: 10,
                    background: "rgba(255, 255, 255, 0.12)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 750,
                    textDecoration: "none",
                  }}
                >
                  {locale === "en" ? "Explore Official Printed Edition →" : locale === "es" ? "Conocer Edición Impresa Oficial →" : "Conhecer Edição Impressa Oficial →"}
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <ModernFooter locale={locale} />
    </div>
  );
}
