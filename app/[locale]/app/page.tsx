"use client";

import { use, useState } from "react";
import Link from "next/link";
import { Locale } from "@/lib/types";
import { SECOES, INITIAL_CHAPTERS } from "@/lib/data/sections-and-chapters";

interface MobileAppProps {
  params: Promise<{ locale: string }>;
}

const APP_I18N = {
  pt: {
    officialTreatise: "Tratado Oficial",
    spineSurgery: "Cirurgia da Coluna",
    officialEdition: "Edição Oficial • SBC",
    titleLine1: "Tratado de Cirurgia",
    titleLine2: "da Coluna Vertebral",
    lead: "O compêndio definitivo de referência científica e prática cirúrgica da Sociedade Brasileira de Coluna.",
    exploreIndexBtn: "Explorar Índice dos 109 Capítulos",
    buyBookBtn: "Adquirir Livro Impresso 🛒",
    statChapters: "Capítulos",
    statSections: "Seções",
    statAuthors: "Autores",
    statLangs: "Idiomas",
    scientificPillars: "Pilares Científicos da Obra",
    pillar1Title: "Fundamentação Rigorosa",
    pillar1Desc: "Desde embriologia, biomecânica e diagnóstico diferencial até neurofisiologia intraoperatória avançada. Análise sistemática de imagens radiográficas, TC e RM para assertividade clínica absoluta.",
    pillar2Title: "Arsenal Cirúrgico Moderno",
    pillar2Desc: "Cobertura passo a passo de técnicas minimamente invasivas (MIS), cirurgia endoscópica uni e biportal, fusões intersomáticas (ALIF, LLIF, OLIF), osteotomias tridimensionais (PSO, VCR) e cirurgia guiada por navegação e robótica.",
    pillar3Title: "Segurança & Complicações",
    pillar3Desc: "Prevenção, diagnóstico precoce e manejo sistemático de lesões durais, déficits neurológicos intraoperatórios, infecções do sítio cirúrgico, falhas mecânicas de implantes e doença do nível adjacente.",
    pillar4Title: "Capítulo 8: Equilíbrio Sagital",
    pillar4Desc: "Princípios de alinhamento espinopélvico (Incidência Pélvica, Lordose Lombar, Tilt Pélvico, SVA), Cone de Economia de Dubousset e classificação morfométrica de Roussouly.",
    openCap8Btn: "Abrir Capítulo 8 Completo →",
    indexTitle: "Índice Oficial da Obra",
    indexSubtitle: "109 capítulos estruturados em 10 seções temáticas",
    searchPlaceholder: "Buscar por número, título ou palavra-chave...",
    capSuffix: "capítulos",
    viewBtn: "Ver →",
    aboutBadge: "Sociedade Brasileira de Coluna",
    aboutTitle: "Histórico & Autoridade Científica",
    aboutP1: "O Tratado de Cirurgia da Coluna Vertebral consolida a maior produção científica e cirúrgica da história da Sociedade Brasileira de Coluna (SBC).",
    aboutP2: "Com 109 capítulos redigidos por mais de 200 professores titulares e cirurgiões líderes em traumatologia, deformidades, cirurgia minimamente invasiva e reconstrução espinhal.",
    editorsLabel: "Editores do Tratado:",
    editor1: "Dr. Edson Pudles — Editor-Chefe / SBC",
    editor2: "Dr. Helton Defino — Editor / FMRP-USP",
    editor3: "Dr. Marcelo Risso — Editor / SBC",
    buyTitle: "Adquira a Obra Impressa",
    buyDesc: "O Tratado de Cirurgia da Coluna Vertebral é uma obra física de padrão luxo internacional, encadernação dura e ilustrações anatômicas em alta definição.",
    buyCta: "Adquirir Exemplar Impresso (DiLivros)",
    tabHome: "Início",
    tabIndex: "Índice",
    tabAbout: "Sobre",
    tabBuy: "Comprar",
  },
  en: {
    officialTreatise: "Official Treatise",
    spineSurgery: "Spine Surgery",
    officialEdition: "Official Edition • SBC",
    titleLine1: "Treatise on Spine",
    titleLine2: "Surgery",
    lead: "The definitive compendium of scientific reference and surgical practice from the Brazilian Spine Society.",
    exploreIndexBtn: "Explore 109 Chapters Index",
    buyBookBtn: "Acquire Printed Book 🛒",
    statChapters: "Chapters",
    statSections: "Sections",
    statAuthors: "Authors",
    statLangs: "Languages",
    scientificPillars: "Scientific Pillars of the Masterwork",
    pillar1Title: "Rigorous Foundations",
    pillar1Desc: "From embryology, biomechanics, and differential diagnosis to advanced intraoperative neurophysiology. Systematic analysis of X-rays, CT, and MRI for supreme clinical accuracy.",
    pillar2Title: "Modern Surgical Arsenal",
    pillar2Desc: "Step-by-step guidance on minimally invasive surgery (MIS), uni/biportal endoscopy, interbody fusions (ALIF, LLIF, OLIF), 3D osteotomies (PSO, VCR), and navigated robotic surgery.",
    pillar3Title: "Safety & Complications",
    pillar3Desc: "Prevention, early diagnosis, and systematic management of dural tears, intraoperative neural signal changes, surgical site infections, and adjacent segment disease.",
    pillar4Title: "Chapter 8: Sagittal Alignment",
    pillar4Desc: "Spinopelvic balance parameters (Pelvic Incidence, Lumbar Lordosis, Pelvic Tilt, SVA), Dubousset's Cone of Economy, and Roussouly morphometric classifications.",
    openCap8Btn: "Open Full Chapter 8 →",
    indexTitle: "Official Master Index",
    indexSubtitle: "109 chapters organized across 10 thematic sections",
    searchPlaceholder: "Search by number, title, or keyword...",
    capSuffix: "chapters",
    viewBtn: "View →",
    aboutBadge: "Brazilian Spine Society",
    aboutTitle: "History & Scientific Authority",
    aboutP1: "The Treatise on Spine Surgery represents the landmark surgical and academic production of the Brazilian Spine Society (SBC).",
    aboutP2: "Featuring 109 chapters authored by over 200 professors and lead surgeons in spine trauma, deformities, endoscopy, and complex reconstruction.",
    editorsLabel: "Treatise Editors:",
    editor1: "Dr. Edson Pudles — Editor-in-Chief / SBC",
    editor2: "Dr. Helton Defino — Editor / FMRP-USP",
    editor3: "Dr. Marcelo Risso — Editor / SBC",
    buyTitle: "Acquire the Printed Edition",
    buyDesc: "The Treatise on Spine Surgery is published exclusively in premium hardcover print with full-color anatomical illustrations and surgical plates.",
    buyCta: "Acquire Printed Copy (DiLivros)",
    tabHome: "Home",
    tabIndex: "Index",
    tabAbout: "About",
    tabBuy: "Buy",
  },
  es: {
    officialTreatise: "Tratado Oficial",
    spineSurgery: "Cirugía de Columna",
    officialEdition: "Edición Oficial • SBC",
    titleLine1: "Tratado de Cirugía",
    titleLine2: "de la Coluna Vertebral",
    lead: "El compendio definitivo de referencia científica y práctica quirúrgica de la Sociedad Brasileña de Columna.",
    exploreIndexBtn: "Explorar Índice de los 109 Capítulos",
    buyBookBtn: "Adquirir Libro Impreso 🛒",
    statChapters: "Capítulos",
    statSections: "Secciones",
    statAuthors: "Autores",
    statLangs: "Idiomas",
    scientificPillars: "Pilares Científicos de la Obra",
    pillar1Title: "Fundamentación Rigurosa",
    pillar1Desc: "Desde embriología, biomecánica y diagnóstico diferencial hasta neurofisiología intraoperatoria avanzada y análisis radiológico sistemático.",
    pillar2Title: "Arsenal Quirúrgico Moderno",
    pillar2Desc: "Abordaje paso a paso de cirugía mínimamente invasiva (MIS), endoscopía uni y biportal, artrodesis intersomática (ALIF, LLIF, OLIF), osteotomías 3D y robótica.",
    pillar3Title: "Seguridad & Complicaciones",
    pillar3Desc: "Prevención, diagnóstico precoz y manejo sistemático de fístulas durales, alertas neuromonitorizadas, infecciones y falla de implantes.",
    pillar4Title: "Capítulo 8: Equilibrio Sagital",
    pillar4Desc: "Principios de alineación espinopélvica (Incidencia Pélvica, Lordosis Lumbar, Tilt Pélvico, SVA), Cono de Economía y clasificación de Roussouly.",
    openCap8Btn: "Abrir Capítulo 8 Completo →",
    indexTitle: "Índice Oficial de la Obra",
    indexSubtitle: "109 capítulos organizados en 10 secciones temáticas",
    searchPlaceholder: "Buscar por número, título o palabra clave...",
    capSuffix: "capítulos",
    viewBtn: "Ver →",
    aboutBadge: "Sociedad Brasileña de Columna",
    aboutTitle: "Historia y Autoridad Científica",
    aboutP1: "El Tratado de Cirugía de la Columna Vertebral consolida la mayor producción científica y quirúrgica de la SBC.",
    aboutP2: "Con 109 capítulos escritos por más de 200 profesores titulares y cirujanos referentes en trauma, deformidades y reconstrucción espinal.",
    editorsLabel: "Editores del Tratado:",
    editor1: "Dr. Edson Pudles — Editor en Jefe / SBC",
    editor2: "Dr. Helton Defino — Editor / FMRP-USP",
    editor3: "Dr. Marcelo Risso — Editor / SBC",
    buyTitle: "Adquiera la Obra Impresa",
    buyDesc: "El Tratado de Cirugía de la Columna Vertebral es una obra física de lujo internacional, tapa dura e ilustraciones anatómicas en alta definición.",
    buyCta: "Adquirir Ejemplar Impreso (DiLivros)",
    tabHome: "Inicio",
    tabIndex: "Índice",
    tabAbout: "Acerca",
    tabBuy: "Comprar",
  },
};

export default function MobileAppPage({ params }: MobileAppProps) {
  const resolvedParams = use(params);
  const rawLocale = resolvedParams.locale;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";
  const t = APP_I18N[locale] || APP_I18N.pt;

  const [activeTab, setActiveTab] = useState<"home" | "indice" | "sobre" | "comprar">("home");
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    fundamentacao: false,
    arsenal: false,
    seguranca: false,
    sagital: false,
  });

  const [openSectionId, setOpenSectionId] = useState<number | null>(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSecaoFilter, setSelectedSecaoFilter] = useState<number | "all">("all");

  const toggleCard = (cardKey: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardKey]: !prev[cardKey],
    }));
  };

  const toggleSection = (id: number) => {
    setOpenSectionId((prev) => (prev === id ? null : id));
  };

  const getChapterTitle = (cap: (typeof INITIAL_CHAPTERS)[0]) => {
    if (locale === "en" && cap.titulo_en) return cap.titulo_en;
    if (locale === "es" && cap.titulo_es) return cap.titulo_es;
    return cap.titulo_pt;
  };

  const filteredChapters = INITIAL_CHAPTERS.filter((cap) => {
    const matchesSecao = selectedSecaoFilter === "all" || cap.secao_id === selectedSecaoFilter;
    const matchesSearch =
      !searchQuery ||
      cap.numero.toString() === searchQuery.trim() ||
      cap.titulo_pt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSecao && matchesSearch;
  });

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #021024 0%, #051a38 50%, #020c1c 100%)",
        color: "#ffffff",
        minHeight: "100vh",
        paddingBottom: 95,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        WebkitFontSmoothing: "antialiased",
        overflowX: "hidden",
      }}
    >
      {/* ================= APP TOP BAR ================= */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "rgba(2, 16, 38, 0.94)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "12px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href={`/${locale}/home-new`}
          style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}
        >
          <img
            src="/assets/sbc-logo-white.svg"
            alt="SBC"
            style={{ height: 32, width: "auto" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.06em", color: "#ff808f", textTransform: "uppercase" }}>
              {t.officialTreatise}
            </span>
            <strong style={{ fontSize: 13.5, color: "#ffffff", fontWeight: 700, lineHeight: 1.1 }}>
              {t.spineSurgery}
            </strong>
          </div>
        </Link>

        {/* Language Pills */}
        <div style={{ display: "flex", gap: 4, background: "rgba(0, 0, 0, 0.4)", padding: "3px", borderRadius: 10, border: "1px solid rgba(255, 255, 255, 0.12)" }}>
          {(["pt", "es", "en"] as const).map((lang) => (
            <Link
              key={lang}
              href={`/${lang}/app`}
              style={{
                padding: "4px 8px",
                borderRadius: 6,
                fontSize: 11,
                fontWeight: 700,
                textDecoration: "none",
                background: locale === lang ? "linear-gradient(135deg, #f52238 0%, #003382 100%)" : "transparent",
                color: locale === lang ? "#fff" : "#94a3b8",
              }}
            >
              {lang.toUpperCase()}
            </Link>
          ))}
        </div>
      </header>

      {/* ================= MAIN TAB CONTENT ================= */}
      <main style={{ padding: "18px 16px 24px" }}>
        {/* ================= TAB 1: HOME ================= */}
        {activeTab === "home" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Hero Card with 3D Book */}
            <div
              style={{
                borderRadius: 20,
                background: "linear-gradient(145deg, rgba(6, 38, 79, 0.7) 0%, rgba(2, 18, 38, 0.9) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 20px 50px rgba(0, 5, 25, 0.6)",
                padding: "24px 20px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background ambient glow */}
              <div
                style={{
                  position: "absolute",
                  top: "-40%",
                  left: "20%",
                  width: 250,
                  height: 250,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(245, 34, 56, 0.3) 0%, rgba(0,0,0,0) 70%)",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "5px 14px",
                  borderRadius: 20,
                  background: "rgba(245, 34, 56, 0.2)",
                  border: "1px solid rgba(245, 34, 56, 0.5)",
                  color: "#ff808f",
                  fontSize: 11.5,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: 16,
                }}
              >
                <span>⭐</span>
                <span>{t.officialEdition}</span>
              </div>

              {/* 3D Book Cover */}
              <div style={{ display: "flex", justifyContent: "center", margin: "10px 0 20px" }}>
                <img
                  src="/assets/capa-tratado-da-coluna.svg"
                  alt="Tratado de Cirurgia da Coluna Vertebral"
                  style={{
                    width: "100%",
                    maxWidth: 240,
                    height: "auto",
                    borderRadius: 10,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.7), 0 0 20px rgba(14, 101, 162, 0.3)",
                  }}
                />
              </div>

              <h1
                style={{
                  fontSize: 26,
                  fontWeight: 700,
                  lineHeight: 1.2,
                  margin: "0 0 10px",
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                }}
              >
                {t.titleLine1} <br />
                <span style={{ background: "linear-gradient(90deg, #ff4d61 0%, #60a5fa 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {t.titleLine2}
                </span>
              </h1>

              <p style={{ fontSize: 14.5, lineHeight: 1.5, color: "#cbd5e1", margin: "0 0 20px" }}>
                {t.lead}
              </p>

              {/* Action Buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <button
                  type="button"
                  onClick={() => setActiveTab("indice")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    height: 50,
                    borderRadius: 12,
                    background: "linear-gradient(135deg, #f52238 0%, #003382 100%)",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: 15,
                    border: "none",
                    boxShadow: "0 6px 20px rgba(245, 34, 56, 0.4)",
                    cursor: "pointer",
                  }}
                >
                  <span>{t.exploreIndexBtn}</span>
                  <span>→</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("comprar")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    height: 48,
                    borderRadius: 12,
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: 14.5,
                    cursor: "pointer",
                  }}
                >
                  <span>{t.buyBookBtn}</span>
                </button>
              </div>
            </div>

            {/* ================= COMPACT 2x2 STATS GRID ================= */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div
                style={{
                  background: "rgba(0, 16, 38, 0.8)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: 16,
                  padding: "16px 14px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 26, fontWeight: 700, color: "#ffffff", marginBottom: 2 }}>109</div>
                <div style={{ fontSize: 12.5, color: "#94a3b8", fontWeight: 600 }}>{t.statChapters}</div>
              </div>

              <div
                style={{
                  background: "rgba(0, 16, 38, 0.8)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: 16,
                  padding: "16px 14px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 26, fontWeight: 700, color: "#ffffff", marginBottom: 2 }}>10</div>
                <div style={{ fontSize: 12.5, color: "#94a3b8", fontWeight: 600 }}>{t.statSections}</div>
              </div>

              <div
                style={{
                  background: "rgba(0, 16, 38, 0.8)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: 16,
                  padding: "16px 14px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 26, fontWeight: 700, color: "#ffffff", marginBottom: 2 }}>200+</div>
                <div style={{ fontSize: 12.5, color: "#94a3b8", fontWeight: 600 }}>{t.statAuthors}</div>
              </div>

              <div
                style={{
                  background: "rgba(0, 16, 38, 0.8)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: 16,
                  padding: "16px 14px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 26, fontWeight: 700, color: "#ffffff", marginBottom: 2 }}>3</div>
                <div style={{ fontSize: 12.5, color: "#94a3b8", fontWeight: 600 }}>{t.statLangs}</div>
              </div>
            </div>

            {/* ================= EXPANDABLE CARDS (PILARES CLÍNICOS) ================= */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.06em", padding: "4px 2px" }}>
                {t.scientificPillars}
              </div>

              {/* CARD 1: FUNDAMENTAÇÃO */}
              <div
                style={{
                  background: "rgba(0, 16, 38, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderLeft: "4px solid #0e65a2",
                  borderRadius: 14,
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleCard("fundamentacao")}
                  style={{
                    width: "100%",
                    padding: "16px 18px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "transparent",
                    border: "none",
                    color: "#ffffff",
                    fontSize: 15.5,
                    fontWeight: 700,
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span>🧠</span>
                    <span>{t.pillar1Title}</span>
                  </div>
                  <span style={{ fontSize: 14, color: "#94a3b8" }}>
                    {expandedCards.fundamentacao ? "▲" : "▼"}
                  </span>
                </button>
                {expandedCards.fundamentacao && (
                  <div style={{ padding: "0 18px 18px", fontSize: 14, color: "#cbd5e1", lineHeight: 1.6, borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: 12 }}>
                    {t.pillar1Desc}
                  </div>
                )}
              </div>

              {/* CARD 2: ARSENAL CIRÚRGICO */}
              <div
                style={{
                  background: "rgba(0, 16, 38, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderLeft: "4px solid #f52238",
                  borderRadius: 14,
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleCard("arsenal")}
                  style={{
                    width: "100%",
                    padding: "16px 18px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "transparent",
                    border: "none",
                    color: "#ffffff",
                    fontSize: 15.5,
                    fontWeight: 700,
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span>🛠️</span>
                    <span>{t.pillar2Title}</span>
                  </div>
                  <span style={{ fontSize: 14, color: "#94a3b8" }}>
                    {expandedCards.arsenal ? "▲" : "▼"}
                  </span>
                </button>
                {expandedCards.arsenal && (
                  <div style={{ padding: "0 18px 18px", fontSize: 14, color: "#cbd5e1", lineHeight: 1.6, borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: 12 }}>
                    {t.pillar2Desc}
                  </div>
                )}
              </div>

              {/* CARD 3: SEGURANÇA */}
              <div
                style={{
                  background: "rgba(0, 16, 38, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderLeft: "4px solid #10b981",
                  borderRadius: 14,
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleCard("seguranca")}
                  style={{
                    width: "100%",
                    padding: "16px 18px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "transparent",
                    border: "none",
                    color: "#ffffff",
                    fontSize: 15.5,
                    fontWeight: 700,
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span>🛡️</span>
                    <span>{t.pillar3Title}</span>
                  </div>
                  <span style={{ fontSize: 14, color: "#94a3b8" }}>
                    {expandedCards.seguranca ? "▲" : "▼"}
                  </span>
                </button>
                {expandedCards.seguranca && (
                  <div style={{ padding: "0 18px 18px", fontSize: 14, color: "#cbd5e1", lineHeight: 1.6, borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: 12 }}>
                    {t.pillar3Desc}
                  </div>
                )}
              </div>

              {/* CARD 4: EQUILÍBRIO SAGITAL */}
              <div
                style={{
                  background: "rgba(0, 16, 38, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderLeft: "4px solid #a855f7",
                  borderRadius: 14,
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleCard("sagital")}
                  style={{
                    width: "100%",
                    padding: "16px 18px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "transparent",
                    border: "none",
                    color: "#ffffff",
                    fontSize: 15.5,
                    fontWeight: 700,
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span>📐</span>
                    <span>{t.pillar4Title}</span>
                  </div>
                  <span style={{ fontSize: 14, color: "#94a3b8" }}>
                    {expandedCards.sagital ? "▲" : "▼"}
                  </span>
                </button>
                {expandedCards.sagital && (
                  <div style={{ padding: "0 18px 18px", fontSize: 14, color: "#cbd5e1", lineHeight: 1.6, borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: 12 }}>
                    {t.pillar4Desc}
                    <div style={{ marginTop: 12 }}>
                      <Link
                        href={`/${locale}/capitulo-new/8`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          color: "#ff808f",
                          fontWeight: 700,
                          fontSize: 13.5,
                          textDecoration: "none",
                        }}
                      >
                        <span>{t.openCap8Btn}</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: ÍNDICE ================= */}
        {activeTab === "indice" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ textAlign: "center", marginBottom: 6 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: "#fff", margin: "0 0 6px" }}>
                {t.indexTitle}
              </h2>
              <p style={{ fontSize: 14, color: "#94a3b8", margin: 0 }}>
                {t.indexSubtitle}
              </p>
            </div>

            {/* Search Input */}
            <div style={{ position: "relative" }}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                style={{
                  width: "100%",
                  height: 52,
                  padding: "10px 16px 10px 42px",
                  borderRadius: 14,
                  background: "rgba(0, 16, 38, 0.85)",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  color: "#ffffff",
                  fontSize: 14.5,
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
              <span style={{ position: "absolute", left: 14, top: 16, fontSize: 16, color: "#94a3b8" }}>
                🔍
              </span>
            </div>

            {/* Sections List */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {SECOES.map((secao) => {
                const isOpen = openSectionId === secao.id;
                const secChapters = filteredChapters.filter((c) => c.secao_id === secao.id);

                if (searchQuery && secChapters.length === 0) return null;

                return (
                  <div
                    key={secao.id}
                    style={{
                      background: "rgba(0, 16, 38, 0.8)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderLeft: "4px solid #f52238",
                      borderRadius: 16,
                      overflow: "hidden",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleSection(secao.id)}
                      style={{
                        width: "100%",
                        padding: "16px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        background: "transparent",
                        border: "none",
                        color: "#fff",
                        cursor: "pointer",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: 8,
                            background: "linear-gradient(135deg, #f52238 0%, #003382 100%)",
                            color: "#fff",
                            display: "grid",
                            placeItems: "center",
                            fontSize: 14,
                            fontWeight: 700,
                            flexShrink: 0,
                          }}
                        >
                          {secao.numero}
                        </span>
                        <div style={{ textAlign: "left" }}>
                          <strong style={{ fontSize: 15.5, display: "block", color: "#ffffff", fontWeight: 700 }}>
                            {locale === "en" ? secao.titulo_en : locale === "es" ? secao.titulo_es : secao.titulo_pt}
                          </strong>
                          <span style={{ fontSize: 12, color: "#94a3b8" }}>
                            {secChapters.length} {t.capSuffix}
                          </span>
                        </div>
                      </div>
                      <span style={{ fontSize: 14, color: "#94a3b8" }}>
                        {isOpen ? "▲" : "▼"}
                      </span>
                    </button>

                    {isOpen && (
                      <div style={{ padding: "0 14px 14px", display: "flex", flexDirection: "column", gap: 8 }}>
                        {secChapters.map((cap) => (
                          <Link
                            key={cap.numero}
                            href={`/${locale}/capitulo-new/${cap.numero}`}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              padding: "12px 14px",
                              borderRadius: 10,
                              background: "rgba(255, 255, 255, 0.04)",
                              border: "1px solid rgba(255, 255, 255, 0.08)",
                              textDecoration: "none",
                              color: "#ffffff",
                            }}
                          >
                            <div style={{ display: "flex", alignItems: "center", gap: 8, overflow: "hidden" }}>
                              <b style={{ color: "#ff4d61", fontSize: 14, flexShrink: 0 }}>
                                {cap.numero}.
                              </b>
                              <span style={{ fontSize: 13.5, color: "#edf5ff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {getChapterTitle(cap)}
                              </span>
                            </div>
                            <span style={{ fontSize: 12, color: "#8da9cc", fontWeight: 600, flexShrink: 0, marginLeft: 8 }}>
                              {t.viewBtn}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= TAB 3: SOBRE ================= */}
        {activeTab === "sobre" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                borderRadius: 20,
                background: "rgba(0, 16, 38, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                padding: "24px 20px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  borderRadius: 20,
                  background: "rgba(245, 34, 56, 0.15)",
                  border: "1px solid rgba(245, 34, 56, 0.4)",
                  color: "#ff808f",
                  fontSize: 11.5,
                  fontWeight: 700,
                  marginBottom: 12,
                }}
              >
                {t.aboutBadge}
              </span>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: "#ffffff", margin: "0 0 14px" }}>
                {t.aboutTitle}
              </h2>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#cbd5e1", margin: "0 0 16px" }}>
                {t.aboutP1}
              </p>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#cbd5e1", margin: "0 0 20px" }}>
                {t.aboutP2}
              </p>

              <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: 16 }}>
                <strong style={{ fontSize: 15, color: "#fff", display: "block", marginBottom: 10 }}>
                  {t.editorsLabel}
                </strong>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, color: "#94a3b8", lineHeight: 1.7 }}>
                  <li><strong style={{ color: "#fff" }}>{t.editor1}</strong></li>
                  <li><strong style={{ color: "#fff" }}>{t.editor2}</strong></li>
                  <li><strong style={{ color: "#fff" }}>{t.editor3}</strong></li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 4: COMPRAR ================= */}
        {activeTab === "comprar" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                borderRadius: 20,
                background: "linear-gradient(145deg, rgba(6, 38, 79, 0.8) 0%, rgba(2, 18, 38, 0.95) 100%)",
                border: "1px solid rgba(245, 34, 56, 0.3)",
                padding: "24px 20px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 10 }}>📚</div>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: "#ffffff", margin: "0 0 10px" }}>
                {t.buyTitle}
              </h2>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "#cbd5e1", margin: "0 0 22px" }}>
                {t.buyDesc}
              </p>

              <a
                href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  height: 52,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #f52238 0%, #003382 100%)",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: 15.5,
                  textDecoration: "none",
                  boxShadow: "0 8px 25px rgba(245, 34, 56, 0.45)",
                }}
              >
                <span>{t.buyCta}</span>
                <span>🛒</span>
              </a>
            </div>
          </div>
        )}
      </main>

      {/* ================= FIXED BOTTOM NATIVE APP NAVIGATION BAR ================= */}
      <nav
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: 72,
          background: "rgba(1, 12, 28, 0.96)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          zIndex: 9999,
          padding: "0 10px",
          boxShadow: "0 -10px 30px rgba(0, 0, 0, 0.6)",
        }}
      >
        {/* TAB 1: HOME */}
        <button
          type="button"
          onClick={() => setActiveTab("home")}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            background: "transparent",
            border: "none",
            color: activeTab === "home" ? "#ffffff" : "#64748b",
            cursor: "pointer",
            position: "relative",
            padding: "8px 0",
          }}
        >
          {activeTab === "home" && (
            <div
              style={{
                position: "absolute",
                top: 0,
                width: 32,
                height: 3,
                borderRadius: 3,
                background: "linear-gradient(90deg, #f52238, #003382)",
                boxShadow: "0 0 10px #f52238",
              }}
            />
          )}
          <span style={{ fontSize: 20 }}>🏠</span>
          <span style={{ fontSize: 11.5, fontWeight: activeTab === "home" ? 800 : 600 }}>
            {t.tabHome}
          </span>
        </button>

        {/* TAB 2: ÍNDICE */}
        <button
          type="button"
          onClick={() => setActiveTab("indice")}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            background: "transparent",
            border: "none",
            color: activeTab === "indice" ? "#ffffff" : "#64748b",
            cursor: "pointer",
            position: "relative",
            padding: "8px 0",
          }}
        >
          {activeTab === "indice" && (
            <div
              style={{
                position: "absolute",
                top: 0,
                width: 32,
                height: 3,
                borderRadius: 3,
                background: "linear-gradient(90deg, #f52238, #003382)",
                boxShadow: "0 0 10px #f52238",
              }}
            />
          )}
          <span style={{ fontSize: 20 }}>📑</span>
          <span style={{ fontSize: 11.5, fontWeight: activeTab === "indice" ? 800 : 600 }}>
            {t.tabIndex}
          </span>
        </button>

        {/* TAB 3: SOBRE */}
        <button
          type="button"
          onClick={() => setActiveTab("sobre")}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            background: "transparent",
            border: "none",
            color: activeTab === "sobre" ? "#ffffff" : "#64748b",
            cursor: "pointer",
            position: "relative",
            padding: "8px 0",
          }}
        >
          {activeTab === "sobre" && (
            <div
              style={{
                position: "absolute",
                top: 0,
                width: 32,
                height: 3,
                borderRadius: 3,
                background: "linear-gradient(90deg, #f52238, #003382)",
                boxShadow: "0 0 10px #f52238",
              }}
            />
          )}
          <span style={{ fontSize: 20 }}>ℹ️</span>
          <span style={{ fontSize: 11.5, fontWeight: activeTab === "sobre" ? 800 : 600 }}>
            {t.tabAbout}
          </span>
        </button>

        {/* TAB 4: COMPRAR */}
        <button
          type="button"
          onClick={() => setActiveTab("comprar")}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            background: "transparent",
            border: "none",
            color: activeTab === "comprar" ? "#ffffff" : "#64748b",
            cursor: "pointer",
            position: "relative",
            padding: "8px 0",
          }}
        >
          {activeTab === "comprar" && (
            <div
              style={{
                position: "absolute",
                top: 0,
                width: 32,
                height: 3,
                borderRadius: 3,
                background: "linear-gradient(90deg, #f52238, #003382)",
                boxShadow: "0 0 10px #f52238",
              }}
            />
          )}
          <span style={{ fontSize: 20 }}>🛒</span>
          <span style={{ fontSize: 11.5, fontWeight: activeTab === "comprar" ? 800 : 600 }}>
            {t.tabBuy}
          </span>
        </button>
      </nav>
    </div>
  );
}
