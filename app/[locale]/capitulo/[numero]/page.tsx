import Link from "next/link";
import { notFound } from "next/navigation";
import ModernHeader from "@/components/modern/ModernHeader";
import ModernFooter from "@/components/modern/ModernFooter";
import { Locale } from "@/lib/types";
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

export default async function CapituloPage({ params }: CapituloPageProps) {
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

  // Default rich scientific content if not yet customized in database
  const defaultSummary =
    cap.resumo_pt ||
    `Este capítulo discute aprofundadamente os princípios anatômicos, fisiopatológicos e as indicações cirúrgicas essenciais para o manejo da patologia. Destacam-se os critérios de tomada de decisão, as opções de vias de acesso e as estratégias baseadas em evidências para otimização dos desfechos clínicos e redução de complicações.`;

  const defaultContent =
    cap.conteudo_pt ||
    `## 1. Fundamentos & Relevância Clínica
A abordagem sistemática deste tópico representa um dos eixos centrais da prática moderna na cirurgia da coluna vertebral. O domínio anatômico tridimensional e a correta indicação operatória são determinantes diretos da eficácia e segurança a longo prazo.

## 2. Avaliação Pré-Operatória e Diagnóstico por Imagem
- Avaliação detalhada do histórico de sintomas e exame neurológico minucioso.
- Radiografias dinâmicas em ortostase para quantificação do alinhamento sagital e coronal.
- Ressonância Magnética e Tomografia Computadorizada multislice para delimitação precisa das estruturas neurais e qualidade óssea.

## 3. Planejamento Cirúrgico e Princípios Técnicos
1. Posicionamento e alívio das pressões corporais em mesa cirúrgica radiotransparente.
2. Identificação fluoroscópica do nível operatório e marcação milimétrica.
3. Descompressão microcirúrgica com técnica atraumática preservando a estabilidade intrínseca.
4. Reconstrução ou fixação quando indicada, respeitando os parâmetros de harmonia espinopélvica.

## 4. Prevenção e Manejo de Complicações
O monitoramento neurofisiológico intraoperatório contínuo, hemostasia meticulosa e o fechamento hermético por planos são medidas fundamentais para mitigar riscos de lesão neural, infecção e fístula liquórica.

## 5. Reabilitação e Cuidados Pós-Operatórios
Protocolo de mobilização assistida nas primeiras 24 horas, controle analgésico multimodal e seguimento clínico-radiográfico programado.`;

  const defaultReferences =
    cap.referencias ||
    `1. Sociedade Brasileira de Coluna (SBC). Tratado Oficial de Cirurgia da Coluna Vertebral. DiLivros, 2026.
2. Bridwell KH, DeWald RL. The Textbook of Spinal Surgery. 4th ed. Wolters Kluwer.
3. European Spine Journal & Journal of Neurosurgery: Spine. Diretrizes Contemporâneas.`;

  // Simple Markdown-like Parser for the chapter content
  const renderFormattedContent = (content: string) => {
    const lines = content.split("\n");
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) {
        return <div key={idx} style={{ height: "14px" }} />;
      }
      if (trimmed.startsWith("## ")) {
        return (
          <h2
            key={idx}
            style={{
              fontSize: "24px",
              fontWeight: 800,
              color: "#001a3d",
              margin: "32px 0 14px",
              letterSpacing: "-0.02em",
              borderBottom: "1.5px solid #e2e8f0",
              paddingBottom: "8px",
            }}
          >
            {trimmed.replace("## ", "")}
          </h2>
        );
      }
      if (trimmed.startsWith("# ")) {
        return (
          <h2
            key={idx}
            style={{
              fontSize: "26px",
              fontWeight: 800,
              color: "#001a3d",
              margin: "36px 0 16px",
            }}
          >
            {trimmed.replace("# ", "")}
          </h2>
        );
      }
      if (trimmed.startsWith("- ")) {
        return (
          <li
            key={idx}
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#334155",
              marginLeft: "24px",
              marginBottom: "6px",
            }}
          >
            {trimmed.replace("- ", "")}
          </li>
        );
      }
      if (/^\d+\.\s/.test(trimmed)) {
        return (
          <div
            key={idx}
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#334155",
              marginLeft: "12px",
              marginBottom: "8px",
              display: "flex",
              gap: "8px",
            }}
          >
            <strong style={{ color: "#f52238" }}>
              {trimmed.split(" ")[0]}
            </strong>
            <span>{trimmed.substring(trimmed.indexOf(" ") + 1)}</span>
          </div>
        );
      }
      return (
        <p
          key={idx}
          style={{
            fontSize: "16.5px",
            lineHeight: 1.75,
            color: "#334155",
            margin: "0 0 16px",
          }}
        >
          {line}
        </p>
      );
    });
  };

  return (
    <div style={{ background: "#f8fafc", color: "#0f172a", minHeight: "100vh" }}>
      <ModernHeader locale={locale} currentPage="other" />

      <main style={{ paddingBottom: "100px" }}>
        {/* ================= BREADCRUMBS & TOP HEADER ================= */}
        <section
          style={{
            background: "linear-gradient(135deg, #00132b 0%, #062b59 60%, #001b3d 100%)",
            color: "#fff",
            padding: "80px 0 45px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            position: "relative",
          }}
        >
          <div className="shell">
            {/* Breadcrumb links */}
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
                Índice
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

            {/* Chapter Header */}
            <div style={{ maxWidth: 900 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <span
                  style={{
                    padding: "6px 14px",
                    borderRadius: 20,
                    background: cap.secao_id <= 5 ? "#f52238" : "#0e65a2",
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    boxShadow: "0 4px 12px rgba(245, 34, 56, 0.3)",
                  }}
                >
                  Capítulo {cap.numero < 10 ? `0${cap.numero}` : cap.numero}
                </span>

                <span style={{ fontSize: 14, color: "#cbd5e1", fontWeight: 600 }}>
                  Seção {cap.secao_id} • {sectionTitle}
                </span>
              </div>

              <h1
                style={{
                  fontSize: 44,
                  lineHeight: 1.15,
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  margin: "0 0 16px",
                  color: "#fff",
                }}
              >
                {title}
              </h1>

              {/* Multilingual Titles Subtitle */}
              {locale !== "en" && cap.titulo_en && (
                <div style={{ fontSize: 15, color: "#94b8db", fontStyle: "italic", marginBottom: 14 }}>
                  EN: {cap.titulo_en}
                </div>
              )}

              {/* Authors Bar */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 18px",
                  borderRadius: 12,
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                <svg style={{ width: 20, height: 20, color: "#ff5b6e" }}>
                  <use href="#i-users"></use>
                </svg>
                <span style={{ fontSize: 14, color: "#e2effe" }}>
                  Autoria: <strong>{cap.autores || "Corpo Editorial SBC"}</strong>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CHAPTER ARTICLE CONTENT ================= */}
        <section style={{ maxWidth: 900, margin: "40px auto 0", padding: "0 20px" }}>
          {/* Resumo Executivo / Abstract Box */}
          <div
            style={{
              padding: "28px 32px",
              borderRadius: "16px",
              background: "#fff",
              border: "1px solid #dbeafe",
              boxShadow: "0 10px 25px rgba(14, 101, 162, 0.06)",
              marginBottom: "36px",
              position: "relative",
              borderLeft: "5px solid #0e65a2",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <span
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "rgba(14, 101, 162, 0.1)",
                  color: "#0e65a2",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 14,
                  fontWeight: 800,
                }}
              >
                i
              </span>
              <strong style={{ fontSize: 16, color: "#001a3d", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Resumo Executivo &amp; Objetivos de Aprendizagem
              </strong>
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "#334155", margin: 0 }}>
              {defaultSummary}
            </p>
          </div>

          {/* Full Formatted Chapter Text */}
          <article
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: "40px 48px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
              marginBottom: "36px",
            }}
          >
            {renderFormattedContent(defaultContent)}
          </article>

          {/* Bibliographic References Section */}
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: "32px 40px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.02)",
              marginBottom: "40px",
            }}
          >
            <h3 style={{ fontSize: 18, fontWeight: 800, color: "#001a3d", margin: "0 0 16px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
              Referências Bibliográficas Recomendadas
            </h3>
            <div style={{ fontSize: 14, lineHeight: 1.7, color: "#475569", whiteSpace: "pre-line" }}>
              {defaultReferences}
            </div>
          </div>

          {/* Physical Edition Notice Box */}
          <div
            style={{
              padding: "24px 32px",
              borderRadius: 14,
              background: "linear-gradient(135deg, #001a3d 0%, #063773 100%)",
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "40px",
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <div>
              <strong style={{ fontSize: 18, display: "block", marginBottom: 4 }}>
                Edição Impressa Completa • SBC
              </strong>
              <p style={{ fontSize: 14, color: "#c9ddf5", margin: 0, maxWidth: 520 }}>
                Os algoritmos cirúrgicos diagramados em alta resolução, fotografias intraoperatórias e pranchas anatômicas completas constam na obra física.
              </p>
            </div>
            <Link
              href={`/${locale}/home-new#comprar`}
              className="modern-btn-glow"
              style={{ height: 46, fontSize: 14, textDecoration: "none" }}
            >
              Adquirir Exemplar Impresso
            </Link>
          </div>

          {/* ================= PREV / NEXT NAVIGATION ================= */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {prevCap ? (
              <Link
                href={`/${locale}/capitulo/${prevCap.numero}`}
                style={{
                  padding: "20px 24px",
                  borderRadius: 12,
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  transition: "all 0.2s ease",
                }}
              >
                <span style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>
                  ← Capítulo Anterior ({prevCap.numero})
                </span>
                <strong style={{ fontSize: 15, color: "#001a3d" }}>
                  {prevCap.titulo_pt}
                </strong>
              </Link>
            ) : (
              <div />
            )}

            {nextCap ? (
              <Link
                href={`/${locale}/capitulo/${nextCap.numero}`}
                style={{
                  padding: "20px 24px",
                  borderRadius: 12,
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: 6,
                  textAlign: "right",
                  transition: "all 0.2s ease",
                }}
              >
                <span style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>
                  Próximo Capítulo ({nextCap.numero}) →
                </span>
                <strong style={{ fontSize: 15, color: "#001a3d" }}>
                  {nextCap.titulo_pt}
                </strong>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </section>
      </main>

      <ModernFooter locale={locale} />
    </div>
  );
}
