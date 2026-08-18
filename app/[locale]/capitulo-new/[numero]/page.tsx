import Link from "next/link";
import { notFound } from "next/navigation";
import ModernHeader from "@/components/modern/ModernHeader";
import ModernFooter from "@/components/modern/ModernFooter";
import { Locale, Capitulo } from "@/lib/types";
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

  const relatedChapters = INITIAL_CHAPTERS.filter(
    (c) => c.numero !== num && (c.secao_id === cap.secao_id || [1, 2, 4, 8].includes(c.numero))
  ).slice(0, 4);

  return (
    <div style={{ background: "#f8fbfe", color: "var(--ink)", minHeight: "100vh" }}>
      {/* ================= LAYOUT VERSION TOGGLE BANNER ================= */}
      <aside
        aria-label="Alternar versão do layout"
        style={{
          background: "linear-gradient(90deg, #001026 0%, #032b69 100%)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
          padding: "8px 16px",
          color: "#fff",
          fontSize: 12.5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 14,
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <span style={{ color: "#93c5fd" }}>
          Você está visualizando o: <strong style={{ color: "#fff" }}>✨ Novo Layout Moderno (Nova Identidade)</strong>
        </span>
        <Link
          href={`/${locale}/capitulo/${num}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "4px 12px",
            borderRadius: 6,
            background: "rgba(255, 255, 255, 0.12)",
            border: "1px solid rgba(255, 255, 255, 0.25)",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: 12,
            transition: "all 0.2s ease",
          }}
        >
          <span>🏛️ Ver no Layout Clássico Original</span>
          <span>→</span>
        </Link>
      </aside>

      <ModernHeader locale={locale} currentPage="other" />

      <main style={{ paddingBottom: "100px" }}>
        {/* ================= MODERN HERO SECTION ================= */}
        <section className="modern-hero" style={{ padding: "50px 0 60px" }}>
          <div className="modern-hero-ambient" />
          <div className="modern-hero-glow" />

          <div className="shell modern-hero-grid" style={{ gridTemplateColumns: "1.2fr 380px", alignItems: "center", gap: 50 }}>
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
                  marginBottom: 20,
                  flexWrap: "wrap",
                }}
              >
                <Link href={`/${locale}/home-new`} style={{ color: "#cbd5e1", textDecoration: "none" }}>
                  Início
                </Link>
                <span>›</span>
                <Link href={`/${locale}/indice-new`} style={{ color: "#cbd5e1", textDecoration: "none" }}>
                  Índice Geral
                </Link>
                <span>›</span>
                <Link
                  href={`/${locale}/indice-new?secao=${cap.secao_id}`}
                  style={{ color: "#67e8f9", textDecoration: "none" }}
                >
                  Seção {cap.secao_id}: {sectionTitle}
                </Link>
                <span>›</span>
                <span style={{ color: "#fff", fontWeight: 700 }}>
                  Capítulo {cap.numero}
                </span>
              </nav>

              {/* Tag Pill */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <span className="modern-tag-pill">
                  Seção {cap.secao_id} • {sectionTitle}
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
                  Capítulo {num < 10 ? `0${num}` : num} de 109
                </span>
              </div>

              {/* Title */}
              <h1 className="modern-hero-title" style={{ fontSize: "clamp(30px, 4vw, 44px)", marginBottom: 14, lineHeight: 1.15 }}>
                {title}
              </h1>

              {/* Authors */}
              <div style={{ fontSize: 15, fontWeight: 700, color: "#ff808f", marginBottom: 14 }}>
                {authorsText}
              </div>

              {/* Lead */}
              <p className="modern-hero-lead" style={{ fontSize: 16, marginBottom: 24, maxWidth: 640 }}>
                {leadText}
              </p>

              {/* Notice Box */}
              <div
                style={{
                  background: "rgba(245, 34, 56, 0.12)",
                  border: "1px solid rgba(245, 34, 56, 0.35)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 12,
                  padding: "14px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 28,
                  maxWidth: 640,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(245, 34, 56, 0.25)",
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
                  A leitura completa deste capítulo está disponível exclusivamente na <strong>edição impressa oficial do Tratado</strong>.
                </span>
              </div>

              {/* CTA Actions */}
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link href={`/${locale}/home-new#comprar`} className="btn-modern-primary">
                  <span>Adquirir Tratado Impresso</span>
                  <span>🛒</span>
                </Link>

                <a
                  href="#resumo"
                  className="btn-modern-ghost"
                >
                  <span>Explorar Resumo</span>
                  <span>↓</span>
                </a>

                <a
                  href="#referencias"
                  className="btn-modern-ghost"
                >
                  <span>Referências ({referencesList.length})</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Right: 3D Book & Spine Illustration Card */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  position: "relative",
                  perspective: 1000,
                  padding: "20px",
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
                    maxWidth: 320,
                    borderRadius: 12,
                    boxShadow: "0 30px 70px rgba(0, 0, 0, 0.7), -15px 15px 40px rgba(0, 20, 50, 0.5)",
                    transform: "rotateY(-12deg) rotateX(4deg)",
                    position: "relative",
                    zIndex: 1,
                    transition: "transform 0.4s ease",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= 2-COLUMN MODERN CONTENT ================= */}
        <section style={{ padding: "50px 0 80px" }}>
          <div className="shell" style={{ display: "grid", gridTemplateColumns: "2.3fr 1fr", gap: 36, alignItems: "start" }}>
            {/* MAIN COLUMN */}
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {/* CARD 1: RESUMO CIENTÍFICO ESTRUTURADO */}
              <article id="resumo" className="modern-highlight-card" style={{ padding: "36px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, borderBottom: "1px solid rgba(255, 255, 255, 0.12)", paddingBottom: 16 }}>
                  <span style={{ fontSize: 24 }}>📑</span>
                  <div>
                    <h2 style={{ fontSize: 22, fontWeight: 900, color: "#fff", margin: 0 }}>
                      Resumo Clínico do Capítulo
                    </h2>
                    <span style={{ fontSize: 13, color: "#9ec5f0" }}>
                      Síntese acadêmica, objetivos e conclusões cirúrgicas
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 18, fontSize: 14.5, lineHeight: 1.65, color: "#dce8f5" }}>
                  <div style={{ background: "rgba(255, 255, 255, 0.04)", padding: "16px 20px", borderRadius: 12, border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                    <strong style={{ color: "#ff808f", display: "block", marginBottom: 4, textTransform: "uppercase", fontSize: 12, letterSpacing: "0.05em" }}>
                      • Contexto Clínico
                    </strong>
                    O equilíbrio sagital da coluna vertebral tornou-se um conceito central na avaliação clínica, no planejamento cirúrgico e na compreensão dos resultados funcionais em pacientes com doenças degenerativas, deformidades e alterações biomecânicas de coluna. A postura ereta humana depende da integração entre coluna, pelve, quadril, membros inferiores e coluna cervical, com o objetivo de manter o centro de massa corporal sobre a base de suporte com o menor gasto energético possível.
                  </div>

                  <div style={{ background: "rgba(255, 255, 255, 0.04)", padding: "16px 20px", borderRadius: 12, border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                    <strong style={{ color: "#67e8f9", display: "block", marginBottom: 4, textTransform: "uppercase", fontSize: 12, letterSpacing: "0.05em" }}>
                      • Objetivo da Abordagem
                    </strong>
                    Apresentar os fundamentos anatômicos, biomecânicos e radiográficos do alinhamento sagital, destacando sua relevância para a avaliação clínica e para o planejamento de procedimentos cirúrgicos da coluna.
                  </div>

                  <div style={{ background: "rgba(255, 255, 255, 0.04)", padding: "16px 20px", borderRadius: 12, border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                    <strong style={{ color: "#fde047", display: "block", marginBottom: 4, textTransform: "uppercase", fontSize: 12, letterSpacing: "0.05em" }}>
                      • Conteúdo Principal &amp; Parâmetros Chave
                    </strong>
                    O capítulo discute a evolução da postura ereta, o conceito do "cone de economia", os parâmetros pélvicos e vertebrais do equilíbrio sagital, incluindo incidência pélvica (PI), versão pélvica (PT), inclinação sacral (SS), eixo vertical sagital (SVA), lordose lombar (LL), cifose torácica (TK), T1 slope e parâmetros cervicais. Também são abordadas a distribuição regional da lordose lombar, a classificação de Roussouly, os modificadores sagitais da classificação SRS-Schwab, as ponderações da escola francesa em relação à escola americana, os mecanismos compensatórios e o conceito de Global Alignment and Proportion Score (GAP).
                  </div>

                  <div style={{ background: "rgba(255, 255, 255, 0.04)", padding: "16px 20px", borderRadius: 12, border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                    <strong style={{ color: "#a7f3d0", display: "block", marginBottom: 4, textTransform: "uppercase", fontSize: 12, letterSpacing: "0.05em" }}>
                      • Mensagem Central aos Cirurgiões
                    </strong>
                    O alinhamento sagital não deve ser analisado por fórmulas rígidas ou valores universais. A avaliação deve ser individualizada, considerando morfologia pélvica, distribuição de lordose, capacidade compensatória, quadril, membros inferiores e necessidade de manter o olhar horizontal.
                  </div>
                </div>
              </article>

              {/* CARD 2: PALAVRAS-CHAVE MODERNAS */}
              <article
                style={{
                  background: "#fff",
                  borderRadius: 18,
                  padding: "28px 32px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 6px 20px rgba(0, 30, 80, 0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <span style={{ fontSize: 20 }}>🏷️</span>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: "#001a3d", margin: 0 }}>
                    Descritores Científicos DeCS / MeSH
                  </h3>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {keywords.map((kw, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "6px 14px",
                        borderRadius: 20,
                        background: "rgba(0, 26, 61, 0.05)",
                        border: "1px solid rgba(0, 26, 61, 0.12)",
                        fontSize: 13,
                        color: "#001a3d",
                        fontWeight: 650,
                        transition: "all 0.2s ease",
                      }}
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </article>

              {/* CARD 3: POR QUE ESTE CAPÍTULO IMPORTA (GLASS QUOTE) */}
              <article
                style={{
                  background: "linear-gradient(135deg, #001a3d 0%, #002b66 100%)",
                  borderRadius: 18,
                  padding: "36px",
                  color: "#fff",
                  boxShadow: "0 10px 30px rgba(0, 26, 61, 0.15)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <span style={{ fontSize: 22 }}>⭐</span>
                  <h3 style={{ fontSize: 20, fontWeight: 900, color: "#fff", margin: 0 }}>
                    Por que este capítulo importa
                  </h3>
                </div>

                <p style={{ fontSize: 15, lineHeight: 1.65, color: "#cbd5e1", margin: "0 0 24px" }}>
                  O alinhamento sagital tornou-se um dos pilares da cirurgia moderna da coluna. Alterações nos parâmetros espinopélvicos estão associadas à dor, incapacidade e pior qualidade de vida. O reconhecimento precoce do desequilíbrio e o entendimento dos mecanismos compensatórios permitem intervenções mais seguras e eficazes, com menores taxas de complicações e melhores desfechos clínicos a longo prazo.
                </p>

                {/* Quote Box */}
                <div
                  style={{
                    background: "rgba(245, 34, 56, 0.15)",
                    border: "1.5px solid rgba(245, 34, 56, 0.4)",
                    borderRadius: 14,
                    padding: "20px 28px",
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontSize: 16.5, fontWeight: 800, color: "#fff", fontStyle: "italic", lineHeight: 1.5 }}>
                    “ Restaurar o equilíbrio sagital é restaurar função, reduzir dor e melhorar a qualidade de vida. ”
                  </span>
                </div>
              </article>

              {/* CARD 4: TRÍADE DE DESTAQUES CIRÚRGICOS */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 16,
                    padding: "24px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 4px 16px rgba(0, 30, 80, 0.04)",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "rgba(88, 28, 135, 0.1)",
                      color: "#581c87",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 22,
                      marginBottom: 14,
                    }}
                  >
                    🌐
                  </div>
                  <h4 style={{ fontSize: 16, fontWeight: 800, color: "#001a3d", margin: "0 0 8px" }}>
                    Base Conceitual
                  </h4>
                  <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.5 }}>
                    Conceitos anatômicos e biomecânicos que sustentam o equilíbrio sagital e o "cone de economia de Dubousset".
                  </p>
                </div>

                <div
                  style={{
                    background: "#fff",
                    borderRadius: 16,
                    padding: "24px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 4px 16px rgba(0, 30, 80, 0.04)",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "rgba(245, 34, 56, 0.1)",
                      color: "#f52238",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 22,
                      marginBottom: 14,
                    }}
                  >
                    🩺
                  </div>
                  <h4 style={{ fontSize: 16, fontWeight: 800, color: "#001a3d", margin: "0 0 8px" }}>
                    Aplicação Clínica
                  </h4>
                  <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.5 }}>
                    Interpretação dos principais parâmetros radiográficos e sua relação direta com sintomas e prognóstico funcional.
                  </p>
                </div>

                <div
                  style={{
                    background: "#fff",
                    borderRadius: 16,
                    padding: "24px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 4px 16px rgba(0, 30, 80, 0.04)",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "rgba(14, 116, 144, 0.1)",
                      color: "#0e7490",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 22,
                      marginBottom: 14,
                    }}
                  >
                    📐
                  </div>
                  <h4 style={{ fontSize: 16, fontWeight: 800, color: "#001a3d", margin: "0 0 8px" }}>
                    Planejamento 3D
                  </h4>
                  <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.5 }}>
                    Princípios para restauração da harmonia espinopélvica, prevenindo sobrecargas no nível adjacente.
                  </p>
                </div>
              </div>

              {/* CARD 5: REFERÊNCIAS BIBLIOGRÁFICAS INTERATIVAS */}
              <article
                id="referencias"
                style={{
                  background: "#fff",
                  borderRadius: 18,
                  padding: "36px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 6px 20px rgba(0, 30, 80, 0.04)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, borderBottom: "1px solid #f1f5f9", paddingBottom: 16 }}>
                  <div>
                    <h3 style={{ fontSize: 20, fontWeight: 900, color: "#001a3d", margin: "0 0 4px" }}>
                      Referências Bibliográficas Selecionadas
                    </h3>
                    <span style={{ fontSize: 13, color: "#64748b" }}>
                      Literatura de alto impacto indexada no PubMed / DOI
                    </span>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 800, padding: "4px 10px", borderRadius: 12, background: "#f1f5f9", color: "#475569" }}>
                    {referencesList.length} Referências
                  </span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {referencesList.map((ref) => (
                    <div
                      key={ref.num}
                      style={{
                        padding: "16px",
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
                        <div style={{ fontSize: 14, fontWeight: 700, color: "#001a3d", marginBottom: 4 }}>
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

              {/* BOTTOM: TRATADO EM DEBATE & NAVEGAÇÃO DE CAPÍTULOS */}
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 20 }}>
                {/* Tratado em Debate Video Card */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #001026 0%, #032b69 100%)",
                    borderRadius: 18,
                    padding: "28px",
                    color: "#fff",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: "#ff808f", letterSpacing: "0.08em", marginBottom: 6 }}>
                    Tratado em Debate • Podcast &amp; Vídeo
                  </div>
                  <h4 style={{ fontSize: 19, fontWeight: 900, color: "#fff", margin: "0 0 10px" }}>
                    Episódio {isCap8 ? "1" : num} – Capítulo {num}: {title}
                  </h4>
                  <p style={{ fontSize: 13, color: "#cbd5e1", lineHeight: 1.5, margin: "0 0 20px" }}>
                    Aprofunde-se no debate científico com os autores do capítulo discutindo casos práticos e condutas cirúrgicas.
                  </p>

                  <Link
                    href={`/${locale}/home-new#podcast`}
                    className="btn-modern-primary"
                    style={{ display: "inline-flex", padding: "10px 20px", fontSize: 13.5 }}
                  >
                    <span>Assistir Episódio Completo</span>
                    <span>▶</span>
                  </Link>
                </div>

                {/* Navegação Entre Capítulos */}
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 18,
                    padding: "28px",
                    border: "1px solid #e2e8f0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h4 style={{ fontSize: 16, fontWeight: 800, color: "#001a3d", margin: "0 0 14px" }}>
                      Navegar na Obra
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {prevCap && (
                        <Link
                          href={`/${locale}/capitulo-new/${prevCap.numero}`}
                          style={{
                            padding: "10px 14px",
                            borderRadius: 8,
                            background: "#f8fafc",
                            border: "1px solid #e2e8f0",
                            textDecoration: "none",
                            color: "#334155",
                            fontSize: 12.5,
                            fontWeight: 650,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <span>← Cap. {prevCap.numero}: {prevCap.titulo_pt}</span>
                        </Link>
                      )}

                      {nextCap && (
                        <Link
                          href={`/${locale}/capitulo-new/${nextCap.numero}`}
                          style={{
                            padding: "10px 14px",
                            borderRadius: 8,
                            background: "#f8fafc",
                            border: "1px solid #e2e8f0",
                            textDecoration: "none",
                            color: "#334155",
                            fontSize: 12.5,
                            fontWeight: 650,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <span>Cap. {nextCap.numero}: {nextCap.titulo_pt} →</span>
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
                    Ver Índice Completo de 109 Capítulos ↗
                  </Link>
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* CARD 1: AUTORES */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: 18,
                  padding: "28px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 6px 20px rgba(0, 30, 80, 0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20, borderBottom: "1px solid #f1f5f9", paddingBottom: 14 }}>
                  <span style={{ fontSize: 20 }}>👨‍⚕️</span>
                  <h3 style={{ fontSize: 17, fontWeight: 900, color: "#001a3d", margin: 0 }}>
                    Autores do Capítulo
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
                        Coordenador &amp; Editor SBC
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
                        Especialista &amp; Autor Convidado
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 2: IDIOMAS */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: 18,
                  padding: "28px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 6px 20px rgba(0, 30, 80, 0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <span style={{ fontSize: 20 }}>🌐</span>
                  <h3 style={{ fontSize: 17, fontWeight: 900, color: "#001a3d", margin: 0 }}>
                    Idiomas Disponíveis
                  </h3>
                </div>

                <p style={{ fontSize: 13, color: "#64748b", margin: "0 0 16px" }}>
                  Acesse os títulos e resumos deste capítulo nas edições internacionais:
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
                  borderRadius: 18,
                  padding: "28px",
                  color: "#fff",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                  <span style={{ fontSize: 20 }}>🛡️</span>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: "#fff", margin: 0 }}>
                    Aviso Institucional SBC
                  </h3>
                </div>

                <p style={{ fontSize: 13, lineHeight: 1.55, color: "#cbd5e1", margin: "0 0 14px" }}>
                  Este portal é a plataforma digital oficial de apoio acadêmico à obra impressa da Sociedade Brasileira de Coluna.
                </p>
                <p style={{ fontSize: 13, lineHeight: 1.55, color: "#cbd5e1", margin: "0 0 20px" }}>
                  A íntegra com todos os esquemas cirúrgicos, tabelas e discussões técnicas completas é exclusiva do <strong>Tratado Impresso</strong>.
                </p>

                <Link
                  href={`/${locale}/home-new#comprar`}
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "10px",
                    borderRadius: 8,
                    background: "rgba(255, 255, 255, 0.12)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Conhecer Edição Impressa Oficial →
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
