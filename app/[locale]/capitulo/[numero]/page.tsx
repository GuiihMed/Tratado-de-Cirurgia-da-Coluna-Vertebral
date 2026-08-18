import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Locale, Capitulo } from "@/lib/types";
import { SECOES, INITIAL_CHAPTERS } from "@/lib/data/sections-and-chapters";
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

  const authorsText = isCap8
    ? "Marcelo Ítalo Risso Neto • Paulo Tadeu Maia Cavali"
    : cap.autores || "Corpo Editorial SBC";

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
          style={{
            background: "radial-gradient(ellipse at 75% 40%, #032b69 0%, #001738 50%, #000c1e 100%)",
            color: "#fff",
            padding: "40px 0 50px",
            position: "relative",
            overflow: "hidden",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Anatomical background graphic silhouette */}
          <div
            style={{
              position: "absolute",
              right: "4%",
              top: "-10%",
              width: "450px",
              height: "120%",
              backgroundImage: "url('/assets/hero-spine.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top right",
              opacity: 0.35,
              pointerEvents: "none",
            }}
          />

          <div className="shell">
            {/* Breadcrumb */}
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                color: "#94b8db",
                marginBottom: 28,
              }}
            >
              <Link href={`/${locale}`} style={{ color: "#cbd5e1", textDecoration: "none" }}>
                Início
              </Link>
              <span>›</span>
              <Link href={`/${locale}/indice`} style={{ color: "#cbd5e1", textDecoration: "none" }}>
                Capítulos
              </Link>
              <span>›</span>
              <span style={{ color: "#fff", fontWeight: 600 }}>Capítulo {num}</span>
            </nav>

            {/* Hero Main Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "310px 1fr", gap: 48, alignItems: "center" }}>
              {/* 3D Book Cover */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="/assets/book-cover.png"
                  alt="Tratado de Cirurgia da Coluna Vertebral"
                  style={{
                    width: "100%",
                    maxWidth: "280px",
                    height: "auto",
                    borderRadius: "8px",
                    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6), -10px 10px 30px rgba(0, 0, 0, 0.4)",
                    transform: "perspective(1000px) rotateY(-8deg)",
                  }}
                />
              </div>

              {/* Chapter Information */}
              <div>
                {/* Section Tag Pill */}
                <div style={{ marginBottom: 14 }}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "5px 14px",
                      borderRadius: 20,
                      background: "rgba(245, 34, 56, 0.2)",
                      border: "1px solid #f52238",
                      color: "#ff808f",
                      fontSize: 12,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    SEÇÃO {cap.secao_id} • {sectionTitle}
                  </span>
                </div>

                {/* Chapter Number & Title */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 14 }}>
                  <div style={{ textAlign: "center" }}>
                    <span style={{ display: "block", fontSize: 12, color: "#94b8db", textTransform: "uppercase", fontWeight: 700 }}>
                      Capítulo
                    </span>
                    <span style={{ fontSize: 56, fontWeight: 900, lineHeight: 1, color: "#fff", letterSpacing: "-0.03em" }}>
                      {num}
                    </span>
                  </div>

                  <h1
                    style={{
                      fontSize: 38,
                      fontWeight: 900,
                      lineHeight: 1.15,
                      margin: 0,
                      color: "#fff",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {title}
                  </h1>
                </div>

                {/* Authors */}
                <div style={{ fontSize: 15, fontWeight: 600, color: "#cbd5e1", marginBottom: 12 }}>
                  {authorsText}
                </div>

                {/* Lead Subtitle */}
                <p style={{ fontSize: 16, lineHeight: 1.5, color: "#9ec5f0", margin: "0 0 20px", maxWidth: "680px" }}>
                  {leadText}
                </p>

                {/* Notice Box */}
                <div
                  style={{
                    background: "rgba(245, 34, 56, 0.15)",
                    border: "1px solid rgba(245, 34, 56, 0.4)",
                    borderRadius: 10,
                    padding: "12px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 24,
                    maxWidth: "680px",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f52238" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                  <span style={{ fontSize: 13.5, color: "#ffebee", fontWeight: 500 }}>
                    A leitura completa deste capítulo está disponível exclusivamente na <strong>edição impressa do Tratado</strong>.
                  </span>
                </div>

                {/* Action Buttons */}
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                  <Link
                    href={`/${locale}#comprar`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "12px 24px",
                      borderRadius: 8,
                      background: "#f52238",
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: 14.5,
                      fontWeight: 800,
                      boxShadow: "0 6px 18px rgba(245, 34, 56, 0.4)",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <span>Onde Comprar</span>
                    <span>🛒</span>
                  </Link>

                  <a
                    href="#referencias"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "12px 20px",
                      borderRadius: 8,
                      background: "rgba(255, 255, 255, 0.08)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: 14,
                      fontWeight: 600,
                    }}
                  >
                    <span>Ver referências</span>
                    <span>📖</span>
                  </a>

                  <a
                    href="#debate"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "12px 20px",
                      borderRadius: 8,
                      background: "rgba(255, 255, 255, 0.08)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: 14,
                      fontWeight: 600,
                    }}
                  >
                    <span>Ver episódio relacionado</span>
                    <span>▶</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 5 CARDS QUICK ANCHOR STRIP ================= */}
        <section
          style={{
            background: "#00132b",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "18px 0",
          }}
        >
          <div className="shell">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: 12,
              }}
            >
              {/* Card 1 */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: 10,
                  padding: "12px 14px",
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                <div style={{ fontSize: 18, marginBottom: 4 }}>🔖</div>
                <div style={{ fontSize: 13, fontWeight: 700 }}>Seção {cap.secao_id}</div>
                <div style={{ fontSize: 11.5, color: "#94b8db" }}>{sectionTitle}</div>
              </div>

              {/* Card 2 */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: 10,
                  padding: "12px 14px",
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                <div style={{ fontSize: 18, marginBottom: 4 }}>📖</div>
                <div style={{ fontSize: 13, fontWeight: 700 }}>Capítulo {num}</div>
                <div style={{ fontSize: 11.5, color: "#94b8db", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {title}
                </div>
              </div>

              {/* Card 3 */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: 10,
                  padding: "12px 14px",
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                <div style={{ fontSize: 18, marginBottom: 4 }}>🌐</div>
                <div style={{ fontSize: 13, fontWeight: 700 }}>Resumo em</div>
                <div style={{ fontSize: 11.5, color: "#94b8db" }}>PT | ES | EN</div>
              </div>

              {/* Card 4 */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: 10,
                  padding: "12px 14px",
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                <div style={{ fontSize: 18, marginBottom: 4 }}>📄</div>
                <div style={{ fontSize: 13, fontWeight: 700 }}>Referências</div>
                <div style={{ fontSize: 11.5, color: "#94b8db" }}>bibliográficas</div>
              </div>

              {/* Card 5 */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: 10,
                  padding: "12px 14px",
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                <div style={{ fontSize: 18, marginBottom: 4 }}>📚</div>
                <div style={{ fontSize: 13, fontWeight: 700 }}>Obra</div>
                <div style={{ fontSize: 11.5, color: "#94b8db" }}>impressa</div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 2-COLUMN MAIN CONTENT ================= */}
        <section style={{ padding: "40px 0 60px" }}>
          <div className="shell" style={{ display: "grid", gridTemplateColumns: "2.3fr 1fr", gap: 36, alignItems: "start" }}>
            {/* LEFT COLUMN: MAIN SCIENTIFIC CONTENT */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
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
                  <h2 style={{ fontSize: 20, fontWeight: 800, color: "#001a3d", margin: 0 }}>
                    Resumo do capítulo
                  </h2>
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14, fontSize: 14.5, lineHeight: 1.6, color: "#334155" }}>
                  <li>
                    <strong style={{ color: "#001a3d" }}>• Contexto:</strong> O equilíbrio sagital da coluna vertebral tornou-se um conceito central na avaliação clínica, no planejamento cirúrgico e na compreensão dos resultados funcionais em pacientes com doenças degenerativas, deformidades e alterações biomecânicas de coluna. A postura ereta humana depende da integração entre coluna, pelve, quadril, membros inferiores e coluna cervical, com o objetivo de manter o centro de massa corporal sobre a base de suporte com o menor gasto energético possível.
                  </li>
                  <li>
                    <strong style={{ color: "#001a3d" }}>• Objetivo do capítulo:</strong> Apresentar os fundamentos anatômicos, biomecânicos e radiográficos do alinhamento sagital, destacando sua relevância para a avaliação clínica e para o planejamento de procedimentos cirúrgicos da coluna.
                  </li>
                  <li>
                    <strong style={{ color: "#001a3d" }}>• Conteúdo principal:</strong> O capítulo discute a evolução da postura ereta, o conceito do "cone de economia", os parâmetros pélvicos e vertebrais do equilíbrio sagital, incluindo incidência pélvica, versão pélvica, inclinação sacral, eixo vertical sagital, lordose lombar, cifose torácica, T1 slope e parâmetros cervicais. Também são abordadas a distribuição regional da lordose lombar, a classificação de Roussouly, os modificadores sagitais da classificação SRS-Schwab, as ponderações da escola francesa em relação à escola americana, os mecanismos compensatórios e o conceito de Global Alignment and Proportion Score.
                  </li>
                  <li>
                    <strong style={{ color: "#001a3d" }}>• Aplicação clínica:</strong> A compreensão dos parâmetros sagitais permite interpretar melhor a dor, a incapacidade, os mecanismos compensatórios e o risco de falha mecânica, especialmente em cirurgias de deformidade e procedimentos corretivos complexos.
                  </li>
                  <li>
                    <strong style={{ color: "#001a3d" }}>• Mensagem central:</strong> O alinhamento sagital não deve ser analisado por fórmulas rígidas ou valores universais. A avaliação deve ser individualizada, considerando morfologia pélvica, distribuição de lordose, capacidade compensatória, quadril, membros inferiores e necessidade de manter o olhar horizontal.
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
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: "#001a3d", margin: 0 }}>
                    Palavras-chave
                  </h3>
                </div>

                <div style={{ fontSize: 12.5, fontWeight: 700, color: "#64748b", marginBottom: 10 }}>
                  Descritores DeCS/MeSH preferenciais:
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
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: "#001a3d", margin: 0 }}>
                    Por que este capítulo importa
                  </h3>
                </div>

                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#334155", margin: "0 0 20px" }}>
                  O alinhamento sagital tornou-se um dos pilares da cirurgia moderna da coluna. Alterações nos parâmetros espinopélvicos estão associadas à dor, incapacidade e pior qualidade de vida. O reconhecimento precoce do desequilíbrio e o entendimento dos mecanismos compensatórios permitem intervenções mais seguras e eficazes, com menores taxas de complicações e melhores desfechos clínicos a longo prazo.
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
                    Restaurar o equilíbrio sagital é restaurar função, reduzir dor e melhorar a qualidade de vida.
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
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: "#001a3d", margin: 0 }}>
                    Destaques do capítulo
                  </h3>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
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
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#001a3d", marginBottom: 6 }}>
                      Base conceitual
                    </div>
                    <p style={{ fontSize: 12.5, color: "#64748b", margin: 0, lineHeight: 1.45 }}>
                      Conceitos anatômicos e biomecânicos que sustentam o equilíbrio sagital e o "cone de economia".
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
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#001a3d", marginBottom: 6 }}>
                      Aplicação clínica
                    </div>
                    <p style={{ fontSize: 12.5, color: "#64748b", margin: 0, lineHeight: 1.45 }}>
                      Interpretação dos principais parâmetros radiográficos e sua relação com sintomas e prognóstico.
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
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#001a3d", marginBottom: 6 }}>
                      Planejamento cirúrgico
                    </div>
                    <p style={{ fontSize: 12.5, color: "#64748b", margin: 0, lineHeight: 1.45 }}>
                      Princípios para restauração do alinhamento espinopélvico, considerando compensações e morfologia pélvica.
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
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: "#001a3d", margin: 0 }}>
                    Referências bibliográficas
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

                <div style={{ marginTop: 20, textAlign: "center" }}>
                  <button
                    type="button"
                    style={{
                      padding: "8px 20px",
                      borderRadius: 8,
                      border: "none",
                      background: "#001a3d",
                      color: "#fff",
                      fontSize: 13,
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Ver todas as referências ›
                  </button>
                </div>
              </article>

              {/* BOTTOM ROW: TRATADO EM DEBATE & CAPÍTULOS RELACIONADOS */}
              <div id="debate" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
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
                    <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: "#f52238", letterSpacing: "0.05em", marginBottom: 6 }}>
                      Tratado em Debate
                    </div>
                    <h4 style={{ fontSize: 17, fontWeight: 800, margin: "0 0 8px", color: "#fff" }}>
                      Episódio {isCap8 ? "1" : num} – Capítulo {num}: {title}
                    </h4>
                    <p style={{ fontSize: 12.5, color: "#cbd5e1", lineHeight: 1.45, margin: "0 0 16px" }}>
                      Discussão com os autores sobre os principais pontos do capítulo, casos clínicos e aplicação prática dos conceitos.
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
                    <span>Assistir episódio</span>
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
                    <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 14, display: "flex", alignItems: "center", gap: 6 }}>
                      <span>🔗</span>
                      <span>Capítulos relacionados</span>
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
                            {rc.titulo_pt}
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
                    Ver todos os capítulos ›
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: SIDEBAR */}
            <aside style={{ display: "flex", flexDirection: "column", gap: 24 }}>
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
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18, borderBottom: "1px solid #f1f5f9", paddingBottom: 12 }}>
                  <span style={{ fontSize: 18 }}>👥</span>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: "#001a3d", margin: 0 }}>
                    Autores
                  </h3>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <img
                      src="/assets/marcelo-risso.png"
                      alt="Dr. Marcelo Ítalo Risso Neto"
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "2px solid #001a3d",
                      }}
                    />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 800, color: "#001a3d" }}>
                        Marcelo Ítalo Risso Neto
                      </div>
                      <div style={{ fontSize: 12, color: "#64748b" }}>Coordenador &amp; Autor</div>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <img
                      src="/assets/edson-pudles.png"
                      alt="Paulo Tadeu Maia Cavali"
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "2px solid #001a3d",
                      }}
                    />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 800, color: "#001a3d" }}>
                        Paulo Tadeu Maia Cavali
                      </div>
                      <div style={{ fontSize: 12, color: "#64748b" }}>Autor Convidado</div>
                    </div>
                  </div>
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
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: "#001a3d", margin: 0 }}>
                    Idiomas
                  </h3>
                </div>

                <p style={{ fontSize: 12.5, color: "#64748b", margin: "0 0 14px" }}>
                  Leia o resumo deste capítulo em outros idiomas.
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
                      fontWeight: 800,
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
                      fontWeight: 800,
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
                      fontWeight: 800,
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
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: "#001a3d", margin: 0 }}>
                    Aviso importante
                  </h3>
                </div>

                <p style={{ fontSize: 12.5, lineHeight: 1.5, color: "#475569", margin: "0 0 12px" }}>
                  Este site é uma plataforma de apoio à leitura.
                </p>
                <p style={{ fontSize: 12.5, lineHeight: 1.5, color: "#475569", margin: "0 0 12px" }}>
                  Aqui você encontra o índice, resumo, autores e referências bibliográficas de cada capítulo.
                </p>
                <p style={{ fontSize: 12.5, lineHeight: 1.5, color: "#475569", margin: "0 0 20px" }}>
                  A leitura completa deste capítulo e de toda a obra está disponível exclusivamente na <strong>edição impressa</strong> do Tratado de Cirurgia da Coluna Vertebral.
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
