import Link from "next/link";
import { notFound } from "next/navigation";
import ModernHeader from "@/components/modern/ModernHeader";
import ModernFooter from "@/components/modern/ModernFooter";
import { Locale } from "@/lib/types";
import { SECOES, INITIAL_CHAPTERS, getChapterApproachObjective } from "@/lib/data/sections-and-chapters";
import { getAuthorsByChapter } from "@/lib/data/authors";
import { ALL_CHAPTER_REFERENCES } from "@/lib/data/references";
import { getCapituloByNumero } from "@/lib/supabase/server";
import CustomVimeoPlayer from "@/components/CustomVimeoPlayer";
import {
  BookOpen,
  ShoppingCart,
  ArrowDown,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  FileText,
  Tag,
  Award,
  Check,
  Building2,
  Users,
  Globe,
  Stethoscope,
  Compass,
  Play,
  ShieldCheck,
} from "lucide-react";

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
  const chapterAuthors = getAuthorsByChapter(num);
  const authorsText = cap.autores || (chapterAuthors.length > 0 ? chapterAuthors.map(a => a.nome).join(" • ") : "Corpo Editorial Oficial SBC");
  const approachData = getChapterApproachObjective(num, cap.secao_id, locale);

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

  // References list from curated catalog
  const chapterRefData = ALL_CHAPTER_REFERENCES.find((r) => r.numero === num);
  const referencesList =
    chapterRefData && chapterRefData.referencias.length > 0
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  color: "rgba(255, 255, 255, 0.75)",
                  marginBottom: 20,
                  flexWrap: "wrap",
                }}
              >
                <Link href={`/${locale}/home-new`} style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "none" }}>
                  {locale === "en" ? "Home" : locale === "es" ? "Inicio" : "Início"}
                </Link>
                <span>›</span>
                <span style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                  {locale === "en" ? "The Treatise" : locale === "es" ? "El Tratado" : "O Tratado"}
                </span>
                <span>›</span>
                <Link href={`/${locale}/indice-new`} style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "none" }}>
                  {locale === "en" ? "Chapters" : locale === "es" ? "Capítulos" : "Capítulos"}
                </Link>
                <span>›</span>
                <span style={{ color: "#fff", fontWeight: 700 }}>
                  {locale === "en" ? `Chapter ${cap.numero}` : locale === "es" ? `Capítulo ${cap.numero}` : `Capítulo ${cap.numero}`}
                </span>
              </div>

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
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {locale === "en" ? "Section" : locale === "es" ? "Sección" : "Seção"} {cap.secao_id} • {sectionTitle}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
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
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  margin: "0 0 14px",
                }}
              >
                {title}
              </h1>

              {/* Authors with clickable links */}
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 10px", fontSize: 15.5, fontWeight: 700, color: "#ff808f", marginBottom: 14 }}>
                <span style={{ color: "#94a3b8", fontWeight: 500 }}>
                  {locale === "en" ? "Authors:" : locale === "es" ? "Autores:" : "Autores:"}
                </span>
                {chapterAuthors.length > 0 ? (
                  chapterAuthors.map((author, i) => (
                    <span key={author.slug} style={{ display: "inline-flex", alignItems: "center" }}>
                      <Link
                        href={`/${locale}/autor-new/${author.slug}`}
                        style={{ color: "#ffffff", textDecoration: "none" }}
                        className="hover:underline hover:text-red-300 transition-colors"
                      >
                        {author.nome}
                      </Link>
                      {i < chapterAuthors.length - 1 && <span style={{ color: "#64748b", marginLeft: 8 }}>•</span>}
                    </span>
                  ))
                ) : (
                  <span>{authorsText}</span>
                )}
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
                    flexShrink: 0,
                  }}
                >
                  <BookOpen size={20} />
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
                <a
                  href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
                  target="_blank"
                  rel="noopener noreferrer"
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
                    fontWeight: 700,
                    boxShadow: "0 8px 24px rgba(245, 34, 56, 0.45)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <span>{locale === "en" ? "Acquire Printed Treatise" : locale === "es" ? "Adquirir Tratado Impreso" : "Adquirir Tratado Impresso"}</span>
                  <ShoppingCart size={16} />
                </a>

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
                  <ArrowDown size={14} />
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
                  <ExternalLink size={14} />
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
                      color: "#001a3d",
                    }}
                  >
                    <FileText size={22} />
                  </div>
                  <div>
                    <h2 style={{ fontSize: 22, fontWeight: 700, color: "#001a3d", margin: "0 0 2px" }}>
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
                    <div style={{ fontSize: 12.5, fontWeight: 700, textTransform: "uppercase", color: "#dc2626", letterSpacing: "0.06em", marginBottom: 6 }}>
                      • {locale === "en" ? "Clinical Context" : locale === "es" ? "Contexto Clínico" : "Contexto Clínico"}
                    </div>
                    <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#334155", margin: 0 }}>
                      {isCap8
                        ? (locale === "en"
                          ? "Sagittal spinal alignment is a cornerstone in clinical evaluation, surgical planning, and understanding functional outcomes for patients with degenerative diseases and spinal deformities. Upright human posture relies on harmonious integration among spine, pelvis, hips, and lower extremities to maintain center of mass over the support base with minimal energy expenditure."
                          : locale === "es"
                          ? "El equilibrio sagital de la columna vertebral se ha convertido en un concepto central en la evaluación clínica, planificación quirúrgica y comprensión de resultados funcionales. La postura erguida humana depende de la integración armónica entre columna, pelvis, caderas y extremidades inferiores con el menor gasto energético posible."
                          : "O equilíbrio sagital da coluna vertebral tornou-se um conceito central na avaliação clínica, no planejamento cirúrgico e na compreensão dos resultados funcionais em pacientes com doenças degenerativas, deformidades e alterações biomecânicas de coluna. A postura ereta humana depende da integração entre coluna, pelve, quadril, membros inferiores e coluna cervical, com o objetivo de manter o centro de massa corporal sobre a base de suporte com o menor gasto energético possível.")
                        : (cap.resumo_pt || leadText)}
                    </p>
                  </div>

                  {/* Block 2: Objetivo da Abordagem */}
                  <div
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderLeft: "4px solid #0284c7",
                      borderRadius: 12,
                      padding: "18px 22px",
                    }}
                  >
                    <div style={{ fontSize: 12.5, fontWeight: 700, textTransform: "uppercase", color: "#0284c7", letterSpacing: "0.06em", marginBottom: 6 }}>
                      • {locale === "en" ? "Objective of the Approach" : locale === "es" ? "Objetivo del Abordaje" : "Objetivo da Abordagem"}
                    </div>
                    <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#334155", margin: 0 }}>
                      {approachData.objetivo}
                    </p>
                  </div>

                  {/* Block 3: Foco Clínico & Cirúrgico */}
                  <div
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderLeft: "4px solid #d97706",
                      borderRadius: 12,
                      padding: "18px 22px",
                    }}
                  >
                    <div style={{ fontSize: 12.5, fontWeight: 700, textTransform: "uppercase", color: "#d97706", letterSpacing: "0.06em", marginBottom: 6 }}>
                      • {locale === "en" ? "Clinical & Surgical Focus" : locale === "es" ? "Enfoque Clínico y Quirúrgico" : "Foco Clínico & Cirúrgico"}
                    </div>
                    <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#334155", margin: 0 }}>
                      {approachData.focoClinico}
                    </p>
                  </div>

                  {/* Block 4: Principais Indicações */}
                  <div
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderLeft: "4px solid #16a34a",
                      borderRadius: 12,
                      padding: "18px 22px",
                    }}
                  >
                    <div style={{ fontSize: 12.5, fontWeight: 700, textTransform: "uppercase", color: "#16a34a", letterSpacing: "0.06em", marginBottom: 6 }}>
                      • {locale === "en" ? "Core Indications & Clinical Guidance" : locale === "es" ? "Indicaciones Principales y Guía Clínica" : "Principais Indicações & Diretrizes Clínicas"}
                    </div>
                    <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#334155", margin: 0 }}>
                      {approachData.indicacoes}
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
                  <Tag size={18} className="text-rose-600" />
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#001a3d", margin: 0 }}>
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
                  <Award size={20} className="text-amber-400" />
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#fff", margin: 0 }}>
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
                  <span style={{ fontSize: 16.5, fontWeight: 700, color: "#fff", fontStyle: "italic", lineHeight: 1.5 }}>
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
                      marginBottom: 14,
                    }}
                  >
                    <Globe size={22} />
                  </div>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: "#001a3d", margin: "0 0 8px" }}>
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
                      marginBottom: 14,
                    }}
                  >
                    <Stethoscope size={22} />
                  </div>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: "#001a3d", margin: "0 0 8px" }}>
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
                      marginBottom: 14,
                    }}
                  >
                    <Compass size={22} />
                  </div>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: "#001a3d", margin: "0 0 8px" }}>
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
                    <h3 style={{ fontSize: 20, fontWeight: 700, color: "#001a3d", margin: "0 0 4px" }}>
                      {locale === "en" ? "Selected Bibliographic References" : locale === "es" ? "Referencias Bibliográficas Seleccionadas" : "Referências Bibliográficas Selecionadas"}
                    </h3>
                    <span style={{ fontSize: 13, color: "#64748b" }}>
                      {locale === "en" ? "High-impact peer-reviewed literature indexed on PubMed / DOI" : locale === "es" ? "Literatura de alto impacto indexada en PubMed / DOI" : "Literatura de alto impacto indexada no PubMed / DOI"}
                    </span>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 12, background: "#f1f5f9", color: "#475569" }}>
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
                        <div style={{ fontSize: 13.5, lineHeight: 1.6, color: "#1e293b", fontFamily: "Georgia, serif" }}>
                          <span style={{ fontWeight: 700, color: "#001a3d", marginRight: 6 }}>{ref.num}.</span>
                          {ref.text}
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
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                          }}
                        >
                          <span>DOI</span>
                          <ExternalLink size={12} />
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
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                          }}
                        >
                          <span>PubMed</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* BOTTOM: TRATADO EM DEBATE & NAVEGAÇÃO */}
              <div className="modern-chapter-bottom-grid">
                {/* Tratado em Debate Video Card */}
                <div
                  style={{
                    background: "#ffffff",
                    borderRadius: 20,
                    padding: "24px",
                    border: "1px solid #e2e8f0",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0 6px 20px rgba(0, 20, 60, 0.04)",
                  }}
                >
                  <div>
                    {/* Custom Vimeo Player */}
                    <div style={{ marginBottom: 14 }}>
                      <CustomVimeoPlayer locale={locale} />
                    </div>

                    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "3px 10px", borderRadius: 20, background: "#f0f7ff", border: "1px solid #dbeafe", color: "#003382", fontSize: 11, fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f52238" }} />
                      <span>{locale === "en" ? "Treatise in Debate • Videocast" : locale === "es" ? "Tratado en Debate • Videocast" : "Tratado em Debate • Videocast"}</span>
                    </div>

                    <h4 style={{ fontSize: 16, fontWeight: 700, color: "#001a3d", margin: "0 0 8px", lineHeight: 1.3 }}>
                      {locale === "en"
                        ? "Episode 1 – Chapter 8: Sagittal Plane Spinal Alignment"
                        : locale === "es"
                        ? "Episodio 1 – Capítulo 8: Columna Vertebral en el Plano Sagital"
                        : "Episódio 1 – Capítulo 8: Coluna Vertebral no Plano Sagital"}
                    </h4>
                    <p style={{ fontSize: 12.5, color: "#475569", lineHeight: 1.45, margin: "0 0 16px" }}>
                      {locale === "en"
                        ? "Deepen your understanding through clinical debates with the chapter authors discussing complex case studies and surgical workflows."
                        : locale === "es"
                        ? "Profundice en el debate científico con los autores del capítulo analizando casos prácticos y conductas quirúrgicas."
                        : "Aprofunde-se no debate científico com os autores do capítulo discutindo casos práticos e condutas cirúrgicas."}
                    </p>
                  </div>

                  <Link
                    href={`/${locale}/home-new#debate`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      padding: "10px 18px",
                      borderRadius: 10,
                      background: "#001a3d",
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: 13,
                      fontWeight: 700,
                      transition: "background 0.2s ease",
                    }}
                    className="hover:bg-[#002b66]"
                  >
                    <span>{locale === "en" ? "Watch episode" : locale === "es" ? "Ver episodio" : "Assistir episódio"}</span>
                    <Play size={13} className="fill-current" />
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
                    <h4 style={{ fontSize: 16, fontWeight: 700, color: "#001a3d", margin: "0 0 14px" }}>
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
                            alignItems: "center",
                            gap: 6,
                          }}
                        >
                          <ArrowLeft size={13} />
                          <span>{locale === "en" ? `Ch. ${prevCap.numero}: ${prevCap.titulo_en || prevCap.titulo_pt}` : locale === "es" ? `Cap. ${prevCap.numero}: ${prevCap.titulo_es || prevCap.titulo_pt}` : `Cap. ${prevCap.numero}: ${prevCap.titulo_pt}`}</span>
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
                            gap: 6,
                          }}
                        >
                          <span>{locale === "en" ? `Ch. ${nextCap.numero}: ${nextCap.titulo_en || nextCap.titulo_pt}` : locale === "es" ? `Cap. ${nextCap.numero}: ${nextCap.titulo_es || nextCap.titulo_pt}` : `Cap. ${nextCap.numero}: ${nextCap.titulo_pt}`}</span>
                          <ArrowRight size={13} />
                        </Link>
                      )}
                    </div>
                  </div>

                  <Link
                    href={`/${locale}/indice-new`}
                    style={{
                      marginTop: 16,
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#f52238",
                      textDecoration: "none",
                      textAlign: "center",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                    }}
                  >
                    <span>{locale === "en" ? "View Complete 109 Chapters Index" : locale === "es" ? "Ver Índice Completo de 109 Capítulos" : "Ver Índice Completo de 109 Capítulos"}</span>
                    <ExternalLink size={13} />
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
                  <Users size={18} className="text-blue-700" />
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#001a3d", margin: 0 }}>
                    {locale === "en" ? "Chapter Authors" : locale === "es" ? "Autores del Capítulo" : "Autores do Capítulo"}
                  </h3>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {chapterAuthors.map((author) => (
                    <div
                      key={author.slug}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "10px 14px",
                        borderRadius: 12,
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                      }}
                    >
                      <img
                        src={author.foto_url}
                        alt={author.nome}
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "2px solid #001a3d",
                          flexShrink: 0,
                        }}
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <Link
                          href={`/${locale}/autor-new/${author.slug}`}
                          style={{
                            fontSize: 14.5,
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
                        <div style={{ fontSize: 12, color: "#64748b", marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {author.cargo}
                        </div>
                        <Link
                          href={`/${locale}/autor-new/${author.slug}`}
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
                  background: "#ffffff",
                  borderRadius: 20,
                  padding: "28px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 30px rgba(0, 20, 60, 0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <Globe size={18} className="text-blue-700" />
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#001a3d", margin: 0 }}>
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
                      fontWeight: 700,
                      fontSize: 13.5,
                      textDecoration: "none",
                      boxShadow: locale === "pt" ? "0 4px 12px rgba(245, 34, 56, 0.3)" : "none",
                    }}
                  >
                    PT
                  </Link>
                  <Link
                    href={`/es/capitulo-new/${num}`}
                    style={{
                      textAlign: "center",
                      padding: "10px",
                      borderRadius: 8,
                      background: locale === "es" ? "#f52238" : "#f1f5f9",
                      color: locale === "es" ? "#fff" : "#334155",
                      fontWeight: 700,
                      fontSize: 13.5,
                      textDecoration: "none",
                      boxShadow: locale === "es" ? "0 4px 12px rgba(245, 34, 56, 0.3)" : "none",
                    }}
                  >
                    ES
                  </Link>
                  <Link
                    href={`/en/capitulo-new/${num}`}
                    style={{
                      textAlign: "center",
                      padding: "10px",
                      borderRadius: 8,
                      background: locale === "en" ? "#f52238" : "#f1f5f9",
                      color: locale === "en" ? "#fff" : "#334155",
                      fontWeight: 700,
                      fontSize: 13.5,
                      textDecoration: "none",
                      boxShadow: locale === "en" ? "0 4px 12px rgba(245, 34, 56, 0.3)" : "none",
                    }}
                  >
                    EN
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
                  <ShieldCheck size={18} className="text-blue-400" />
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fff", margin: 0 }}>
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

                <a
                  href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    width: "100%",
                    boxSizing: "border-box",
                    textAlign: "center",
                    padding: "11px",
                    borderRadius: 10,
                    background: "rgba(255, 255, 255, 0.12)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  <span>{locale === "en" ? "Explore Official Printed Edition" : locale === "es" ? "Conocer Edición Impresa Oficial" : "Conhecer Edição Impressa Oficial"}</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <ModernFooter locale={locale} />
    </div>
  );
}
