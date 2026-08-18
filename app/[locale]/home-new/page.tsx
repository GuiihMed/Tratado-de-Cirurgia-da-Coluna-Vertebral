"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import ModernHeader from "@/components/modern/ModernHeader";
import ModernFooter from "@/components/modern/ModernFooter";
import { Locale, AutorEditor } from "@/lib/types";
import { SECOES } from "@/lib/data/sections-and-chapters";
import { supabase, isSupabaseConfigured } from "@/lib/supabase/client";

interface HomeNewProps {
  params: Promise<{ locale: string }>;
}

const DEFAULT_AUTHORS = [
  {
    id: "1",
    num: "01",
    name: "Dr. Edson Pudles",
    role: "Editor-Chefe / SBC",
    institution: "Sociedade Brasileira de Coluna",
    highlight: "Coordenação Editorial de 109 Capítulos",
    photo: "/assets/edson-pudles.png",
    bio: "Presidente de Honra e Referência Nacional em Deformidades da Coluna Vertebral. Liderança editorial das diretrizes científicas e publicações acadêmicas da Sociedade Brasileira de Coluna.",
    specialties: ["Deformidades Complexas", "Liderança Editorial", "Diretrizes SBC"],
  },
  {
    id: "2",
    num: "02",
    name: "Dr. Helton Defino",
    role: "Editor / FMRP-USP",
    institution: "Faculdade de Medicina de Ribeirão Preto - USP",
    highlight: "Pioneiro da Fixação Pedicular no Brasil",
    photo: "/assets/helton-defino.png",
    bio: "Professor Titular da USP Ribeirão Preto. Pioneiro na pesquisa biomecânica internacional, desenvolvimento de técnicas de instrumentação vertebral pedicular e traumatologia espinhal.",
    specialties: ["Biomecânica Espinhal", "Fixação Pedicular", "Trauma Raquimedular"],
  },
  {
    id: "3",
    num: "03",
    name: "Dr. Marcelo Risso",
    role: "Editor / SBC",
    institution: "Comitê de Educação e Publicações SBC",
    highlight: "Coordenador do Capítulo 8 (Plano Sagital)",
    photo: "/assets/marcelo-risso.png",
    bio: "Especialista em Equilíbrio Sagital Global, Osteotomias Tridimensionais de Alta Complexidade e Cirurgia Minimamente Invasiva da Coluna Vertebral no Brasil.",
    specialties: ["Equilíbrio Sagital", "Osteotomias 3D", "Minimamente Invasiva"],
  },
];

export default function HomeNewPage({ params }: HomeNewProps) {
  const resolvedParams = use(params);
  const rawLocale = resolvedParams.locale;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  // Interactive Chapter 8 Sagittal Plane Parameter Explorer State
  const [activeSagittalTab, setActiveSagittalTab] = useState<
    "equilibrio" | "incidencia" | "cone" | "lordose" | "t1"
  >("equilibrio");

  // Interactive Author Hover State (null when not hovering)
  const [hoveredAuthor, setHoveredAuthor] = useState<number | null>(null);

  // Dynamic Authors list
  const [authorsList, setAuthorsList] = useState(DEFAULT_AUTHORS);

  useEffect(() => {
    async function loadAuthors() {
      try {
        if (isSupabaseConfigured()) {
          const { data, error } = await supabase
            .from("autores")
            .select("*")
            .order("ordem", { ascending: true });

          if (!error && data && data.length > 0) {
            const formatted = data.map((a: AutorEditor, i: number) => ({
              id: a.id || `autor-${i}`,
              num: (a.ordem < 10 ? `0${a.ordem}` : `${a.ordem}`),
              name: a.nome,
              role: a.cargo,
              institution: a.instituicao,
              highlight: a.destaque || "",
              photo: a.foto_url || "/assets/edson-pudles.png",
              bio: a.bio_pt,
              specialties: a.especialidades
                ? a.especialidades.split(",").map((s: string) => s.trim()).filter(Boolean)
                : [],
            }));
            setAuthorsList(formatted);
            return;
          }
        }

        const local = localStorage.getItem("sbc_custom_authors");
        if (local) {
          const parsed = JSON.parse(local);
          if (Array.isArray(parsed) && parsed.length > 0) {
            const formatted = parsed.map((a: AutorEditor, i: number) => ({
              id: a.id || `autor-${i}`,
              num: (a.ordem < 10 ? `0${a.ordem}` : `${a.ordem}`),
              name: a.nome,
              role: a.cargo,
              institution: a.instituicao,
              highlight: a.destaque || "",
              photo: a.foto_url || "/assets/edson-pudles.png",
              bio: a.bio_pt,
              specialties: a.especialidades
                ? a.especialidades.split(",").map((s: string) => s.trim()).filter(Boolean)
                : [],
            }));
            setAuthorsList(formatted);
          }
        }
      } catch (e) {
        // use DEFAULT_AUTHORS
      }
    }

    loadAuthors();
  }, []);

  const sagittalDetails = {
    equilibrio: {
      title: "Equilíbrio Sagital Global (SVA)",
      desc: "Alinhamento tridimensional que minimiza o gasto energético postural. A linha de prumo de C7 (Sagittal Vertical Axis - SVA) deve situar-se preferencialmente a ±3 cm do promontório sacral.",
      formula: "SVA ideal: < 40-50 mm em adultos",
      clinical: "Desbalanços positivos (> 5 cm) aumentam a fadiga muscular e correlacionam-se diretamente com piora nos escores ODI e SRS-22.",
    },
    incidencia: {
      title: "Incidência Pélvica (Pelvic Incidence - PI)",
      desc: "Parâmetro anatômico intrínseco fixo na vida adulta. É a soma do tilt pélvico (PT) com a inclinação sacral (SS).",
      formula: "PI = PT + SS (Normal: ~50° ± 10°)",
      clinical: "Fundamental para prever a quantidade exata de lordose lombar que a coluna necessita na cirurgia reconstrutiva.",
    },
    cone: {
      title: "Cone de Economia de Jean Dubousset",
      desc: "Conceito biomecânico clássico que descreve o corpo humano oscilando dentro de um cone imaginário de estabilidade sobre a base dos pés com mínimo consumo de energia.",
      formula: "Mínimo esforço muscular antigravitacional",
      clinical: "A cirurgia deve restaurar a postura ereta sem exigir mecanismos compensatórios exaustivos (retroversão pélvica, flexão de joelhos).",
    },
    lordose: {
      title: "Lordose Lombar e Distribuição Segmentar (LL)",
      desc: "Aproximadamente 65% a 70% da lordose lombar total localiza-se nos segmentos L4-L5 e L5-S1. O alinhamento correto deve respeitar a harmonia com a Incidência Pélvica.",
      formula: "Meta cirúrgica: LL = PI ± 9°",
      clinical: "Sub-correção da lordose em fusões lombares é a principal causa da Síndrome do Dorso Plano e degeneração do segmento adjacente.",
    },
    t1: {
      title: "T1 Slope & Balanço Cervical",
      desc: "Ângulo formado entre o platô superior de T1 e o plano horizontal. Determina o grau de lordose cervical necessário para manter o olhar horizontal.",
      formula: "Lordose Cervical = T1 Slope ± 10°",
      clinical: "Essencial no planejamento de osteotomias cervicais e no tratamento de deformidades complexas cervicotorácicas.",
    },
  };

  return (
    <div style={{ background: "#f8fbfe", color: "var(--ink)", minHeight: "100vh" }}>
      <ModernHeader locale={locale} currentPage="home-new" />

      <main>
        {/* ================= HERO SECTION (GLASSMORPHISM & 3D TILT) ================= */}
        <section className="modern-hero">
          <div className="modern-hero-ambient" />
          <div className="modern-hero-glow" />

          <div className="shell modern-hero-grid">
            <div>
              <div className="modern-hero-badge">
                <span className="pulse-dot" />
                <span>Sociedade Brasileira de Coluna • Edição Oficial</span>
              </div>

              <h1 className="modern-hero-title">
                Tratado de Cirurgia <br />
                <span className="gradient-text">da Coluna Vertebral</span>
              </h1>

              <p className="modern-hero-lead">
                O compêndio definitivo de referência científica e prática cirúrgica.
                10 seções temáticas, 109 capítulos detalhados e a colaboração dos maiores especialistas do país.
              </p>

              <div className="modern-hero-actions">
                <Link href={`/${locale}/indice-new`} className="modern-btn-glow">
                  <span>Explorar Índice Interativo</span>
                  <svg style={{ width: 20, height: 20 }}>
                    <use href="#i-arrow"></use>
                  </svg>
                </Link>

                <a href="#destaque" className="modern-btn-glass">
                  <span>Ver Destaque Científico</span>
                  <svg style={{ width: 18, height: 18 }}>
                    <use href="#i-spine"></use>
                  </svg>
                </a>

                <a href="#comprar" className="modern-btn-glass" style={{ borderColor: "rgba(245, 34, 56, 0.4)" }}>
                  <span>Adquirir Livro Impresso</span>
                  <svg style={{ width: 18, height: 18, color: "#ff5060" }}>
                    <use href="#i-cart"></use>
                  </svg>
                </a>
              </div>

              {/* Format Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 18px",
                  borderRadius: 12,
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  fontSize: 13,
                  color: "#d0e4f7",
                }}
              >
                <svg style={{ width: 20, height: 20, color: "#ff4d61" }}>
                  <use href="#i-book"></use>
                </svg>
                <span>A obra completa existe exclusivamente no formato impresso físico de alta qualidade.</span>
              </div>
            </div>

            {/* 3D Book Stage */}
            <div className="modern-book-stage">
              <div className="modern-book-3d">
                <img
                  src="/assets/book-cover.png"
                  alt="Capa do Tratado de Cirurgia da Coluna Vertebral"
                />
              </div>

              {/* Floating Glass Chips */}
              <div className="modern-floating-chip top-right">
                <svg>
                  <use href="#i-award"></use>
                </svg>
                <div>
                  <strong>Selo Oficial SBC</strong>
                  <div style={{ fontSize: 11, opacity: 0.8 }}>Padrão Ouro Editorial</div>
                </div>
              </div>

              <div className="modern-floating-chip bottom-left">
                <svg>
                  <use href="#i-grid"></use>
                </svg>
                <div>
                  <strong>10 Seções &amp; 109 Capítulos</strong>
                  <div style={{ fontSize: 11, opacity: 0.8 }}>Da base à robótica</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="shell">
            <div className="modern-stats-banner">
              <div className="modern-stat-box">
                <div className="modern-stat-icon">
                  <svg>
                    <use href="#i-book"></use>
                  </svg>
                </div>
                <div className="modern-stat-info">
                  <strong>109</strong>
                  <span>Capítulos Aprofundados</span>
                </div>
              </div>

              <div className="modern-stat-box">
                <div className="modern-stat-icon" style={{ background: "rgba(245, 34, 56, 0.2)", borderColor: "rgba(245, 34, 56, 0.4)", color: "#ff6675" }}>
                  <svg>
                    <use href="#i-grid"></use>
                  </svg>
                </div>
                <div className="modern-stat-info">
                  <strong>10</strong>
                  <span>Seções Temáticas</span>
                </div>
              </div>

              <div className="modern-stat-box">
                <div className="modern-stat-icon">
                  <svg>
                    <use href="#i-users"></use>
                  </svg>
                </div>
                <div className="modern-stat-info">
                  <strong>200+</strong>
                  <span>Autores Especialistas</span>
                </div>
              </div>

              <div className="modern-stat-box">
                <div className="modern-stat-icon" style={{ background: "rgba(26, 166, 190, 0.2)", borderColor: "rgba(26, 166, 190, 0.4)", color: "#4ae2fa" }}>
                  <svg>
                    <use href="#i-globe"></use>
                  </svg>
                </div>
                <div className="modern-stat-info">
                  <strong>3</strong>
                  <span>Idiomas (PT / EN / ES)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SOBRE A OBRA (PILLARS) ================= */}
        <section id="sobre" style={{ padding: "90px 0 70px" }}>
          <div className="shell">
            <div className="modern-section-header">
              <span className="modern-tag-pill">Conhecimento de Vanguarda</span>
              <h2 className="modern-section-title">Sobre o Tratado</h2>
              <p className="modern-section-subtitle">
                Uma realização editorial sem precedentes da Sociedade Brasileira de Coluna (SBC),
                consolidando décadas de experiência clínica, acadêmica e cirúrgica.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 30 }}>
              <div className="glass-card" style={{ padding: 36 }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: "linear-gradient(135deg, #093c78, #032147)",
                    color: "#fff",
                    display: "grid",
                    placeItems: "center",
                    marginBottom: 24,
                  }}
                >
                  <svg style={{ width: 28, height: 28 }}>
                    <use href="#i-brain"></use>
                  </svg>
                </div>
                <h3 style={{ fontSize: 22, margin: "0 0 12px", color: "var(--navy)" }}>
                  Fundamentação Rigorosa
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#4b627d", margin: 0 }}>
                  Desde embriologia, biomecânica e diagnóstico diferencial até neurofisiologia intraoperatória avançada.
                </p>
              </div>

              <div className="glass-card" style={{ padding: 36 }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: "linear-gradient(135deg, #f52238, #b80f21)",
                    color: "#fff",
                    display: "grid",
                    placeItems: "center",
                    marginBottom: 24,
                    boxShadow: "0 8px 20px rgba(245, 34, 56, 0.25)",
                  }}
                >
                  <svg style={{ width: 28, height: 28 }}>
                    <use href="#i-tools"></use>
                  </svg>
                </div>
                <h3 style={{ fontSize: 22, margin: "0 0 12px", color: "var(--navy)" }}>
                  Arsenal Cirúrgico Moderno
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#4b627d", margin: 0 }}>
                  Cobertura detalhada de técnicas minimamente invasivas, endoscopia uni/biportal, ALIF, OLIF, osteotomias, navegação e robótica.
                </p>
              </div>

              <div className="glass-card" style={{ padding: 36 }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: "linear-gradient(135deg, #0e65a2, #073a65)",
                    color: "#fff",
                    display: "grid",
                    placeItems: "center",
                    marginBottom: 24,
                  }}
                >
                  <svg style={{ width: 28, height: 28 }}>
                    <use href="#i-shield"></use>
                  </svg>
                </div>
                <h3 style={{ fontSize: 22, margin: "0 0 12px", color: "var(--navy)" }}>
                  Segurança &amp; Complicações
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#4b627d", margin: 0 }}>
                  Prevenção, diagnóstico precoce e manejo sistemático de lesões neurais, infecções, perda de sinal intraoperatório e falhas mecânicas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 10 SEÇÕES TEMÁTICAS (GRID INTERATIVO) ================= */}
        <section id="areas" style={{ padding: "40px 0 80px", background: "linear-gradient(180deg, #f8fbfe 0%, #edf4fc 100%)" }}>
          <div className="shell">
            <div className="modern-section-header">
              <span className="modern-tag-pill">Mapa Curricular da Obra</span>
              <h2 className="modern-section-title">Explore as 10 Seções Temáticas</h2>
              <p className="modern-section-subtitle">
                Uma organização didática e progressiva, pensada para o cirurgião em formação e para o especialista sênior.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }}>
              {SECOES.map((sec) => (
                <Link
                  key={sec.id}
                  href={`/${locale}/indice-new?secao=${sec.id}`}
                  className="glass-card"
                  style={{
                    padding: 24,
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: 220,
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                      <span
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 12,
                          background: sec.id <= 5 ? "rgba(245, 34, 56, 0.12)" : "rgba(14, 101, 162, 0.12)",
                          color: sec.id <= 5 ? "#f52238" : "#0e65a2",
                          display: "grid",
                          placeItems: "center",
                        }}
                      >
                        <svg style={{ width: 24, height: 24 }}>
                          <use href={`#${sec.iconId}`}></use>
                        </svg>
                      </span>
                      <span style={{ fontSize: 12, fontWeight: 800, color: sec.id <= 5 ? "#f52238" : "#0e65a2" }}>
                        #{sec.numero}
                      </span>
                    </div>

                    <h4 style={{ fontSize: 17, lineHeight: 1.25, margin: "0 0 8px", color: "var(--navy)", fontWeight: 750 }}>
                      {locale === "en" ? sec.titulo_en : locale === "es" ? sec.titulo_es : sec.titulo_pt}
                    </h4>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 12, borderTop: "1px solid rgba(0, 30, 80, 0.08)" }}>
                    <span style={{ fontSize: 12, color: "#627995", fontWeight: 600 }}>
                      {sec.totalCapitulos} capítulos
                    </span>
                    <span style={{ fontSize: 12, color: "#0e65a2", fontWeight: 700 }}>
                      Ver →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================= DESTAQUE CIENTÍFICO (CAPÍTULO 8 - PLANO SAGITAL) ================= */}
        <section id="destaque" style={{ padding: "80px 0" }}>
          <div className="shell">
            <div className="modern-section-header">
              <span className="modern-tag-pill" style={{ background: "rgba(245, 34, 56, 0.1)", color: "#f52238", borderColor: "rgba(245, 34, 56, 0.3)" }}>
                Capítulo em Evidência
              </span>
              <h2 className="modern-section-title">Coluna Vertebral no Plano Sagital</h2>
              <p className="modern-section-subtitle">
                Explore os princípios biomecânicos e radiográficos que transformaram o planejamento cirúrgico moderno da coluna.
              </p>
            </div>

            <div className="modern-highlight-card">
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span
                    style={{
                      background: "#f52238",
                      color: "#fff",
                      fontSize: 12,
                      fontWeight: 800,
                      padding: "4px 10px",
                      borderRadius: 6,
                      textTransform: "uppercase",
                    }}
                  >
                    Capítulo 08
                  </span>
                  <span style={{ fontSize: 14, color: "#506884", fontWeight: 600 }}>
                    Seção 1: Conceitos Básicos
                  </span>
                </div>

                <h3 style={{ fontSize: 32, lineHeight: 1.1, color: "var(--navy)", margin: "0 0 14px", letterSpacing: "-0.03em" }}>
                  Equilíbrio Espinopélvico &amp; Compensações
                </h3>

                <p style={{ fontSize: 15, color: "#284668", fontWeight: 600, margin: "0 0 18px" }}>
                  Autores: Marcelo Italo Risso Neto • Paulo Tadeu Maia Cavali
                </p>

                {/* Interactive Parameter Tabs */}
                <div className="modern-pill-tabs">
                  <button
                    onClick={() => setActiveSagittalTab("equilibrio")}
                    className={`modern-pill-tab ${activeSagittalTab === "equilibrio" ? "active" : ""}`}
                  >
                    Equilíbrio Sagital (SVA)
                  </button>
                  <button
                    onClick={() => setActiveSagittalTab("incidencia")}
                    className={`modern-pill-tab ${activeSagittalTab === "incidencia" ? "active" : ""}`}
                  >
                    Incidência Pélvica (PI)
                  </button>
                  <button
                    onClick={() => setActiveSagittalTab("cone")}
                    className={`modern-pill-tab ${activeSagittalTab === "cone" ? "active" : ""}`}
                  >
                    Cone de Economia
                  </button>
                  <button
                    onClick={() => setActiveSagittalTab("lordose")}
                    className={`modern-pill-tab ${activeSagittalTab === "lordose" ? "active" : ""}`}
                  >
                    Lordose Lombar (LL)
                  </button>
                  <button
                    onClick={() => setActiveSagittalTab("t1")}
                    className={`modern-pill-tab ${activeSagittalTab === "t1" ? "active" : ""}`}
                  >
                    T1 Slope
                  </button>
                </div>

                {/* Dynamic Parameter Details Box */}
                <div
                  style={{
                    padding: 24,
                    borderRadius: 16,
                    background: "#fff",
                    border: "1px solid #d4e3f3",
                    boxShadow: "0 8px 20px rgba(0, 30, 80, 0.04)",
                    marginBottom: 24,
                  }}
                >
                  <h4 style={{ fontSize: 18, color: "#063c79", margin: "0 0 8px" }}>
                    {sagittalDetails[activeSagittalTab].title}
                  </h4>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#3a516d", margin: "0 0 14px" }}>
                    {sagittalDetails[activeSagittalTab].desc}
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, paddingTop: 12, borderTop: "1px solid #edf4fb" }}>
                    <div>
                      <span style={{ fontSize: 11, textTransform: "uppercase", fontWeight: 700, color: "#f52238" }}>
                        Fórmula / Referência:
                      </span>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#0e345f", marginTop: 2 }}>
                        {sagittalDetails[activeSagittalTab].formula}
                      </div>
                    </div>
                    <div>
                      <span style={{ fontSize: 11, textTransform: "uppercase", fontWeight: 700, color: "#0e65a2" }}>
                        Implicação Clínica:
                      </span>
                      <div style={{ fontSize: 13, color: "#37506e", marginTop: 2 }}>
                        {sagittalDetails[activeSagittalTab].clinical}
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 14 }}>
                  <Link href={`/${locale}/indice-new?secao=1`} className="modern-btn-glow" style={{ height: 48, fontSize: 14 }}>
                    <span>Ver no Índice Completo</span>
                    <svg style={{ width: 16, height: 16 }}>
                      <use href="#i-arrow"></use>
                    </svg>
                  </Link>
                  <a href="#debate" className="modern-btn-glass" style={{ height: 48, fontSize: 14, color: "#073d77", borderColor: "#c2d8ed", background: "#fff" }}>
                    <span>Assistir Debate do Cap. 8</span>
                    <svg style={{ width: 16, height: 16, color: "#f52238" }}>
                      <use href="#i-play"></use>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Visual Radiograph illustration */}
              <div
                style={{
                  borderRadius: 18,
                  overflow: "hidden",
                  background: "linear-gradient(135deg, #021a3a, #063c78)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  position: "relative",
                  boxShadow: "0 14px 30px rgba(0, 20, 50, 0.2)",
                  padding: "20px 18px 18px",
                  alignSelf: "center",
                  height: "100%",
                  maxHeight: "480px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1, width: "100%", overflow: "hidden" }}>
                  <img
                    src="/assets/chapter-spine.png"
                    alt="Radiografia e alinhamento sagital"
                    style={{
                      maxHeight: "360px",
                      maxWidth: "100%",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                      opacity: 0.95,
                      filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.4))",
                    }}
                  />
                </div>
                <div
                  style={{
                    width: "100%",
                    marginTop: 12,
                    padding: "8px 12px",
                    borderRadius: 8,
                    background: "rgba(0, 16, 40, 0.85)",
                    backdropFilter: "blur(12px)",
                    fontSize: 12,
                    color: "#d0e4f7",
                    textAlign: "center",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  Esquema demonstrativo de balanço espinopélvico
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= VIDEOCAST TRATADO EM DEBATE ================= */}
        <section id="debate" style={{ padding: "40px 0 90px" }}>
          <div className="shell">
            <div className="modern-player-card">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 50, alignItems: "center" }}>
                <div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 12px", borderRadius: 20, background: "rgba(245, 34, 56, 0.25)", border: "1px solid rgba(245, 34, 56, 0.4)", color: "#ff8290", fontSize: 12, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f52238" }} />
                    Videocast Oficial SBC
                  </div>

                  <h3 style={{ fontSize: 36, letterSpacing: "-0.03em", margin: "0 0 12px", fontWeight: 800 }}>
                    Tratado em Debate
                  </h3>

                  <p style={{ fontSize: 16, lineHeight: 1.6, color: "#b9d4f2", margin: "0 0 24px" }}>
                    Discussões clínicas profundas com os autores de cada capítulo.
                    Apresentando controvérsias cirúrgicas, tomada de decisão e casos complexos.
                  </p>

                  <div style={{ padding: 18, borderRadius: 14, background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.12)", marginBottom: 24 }}>
                    <span style={{ fontSize: 12, color: "#ff6b7a", fontWeight: 800, textTransform: "uppercase" }}>
                      Episódio 01 em Destaque
                    </span>
                    <h4 style={{ fontSize: 17, margin: "4px 0 6px", color: "#fff" }}>
                      Capítulo 8 – Coluna Vertebral no Plano Sagital
                    </h4>
                    <p style={{ fontSize: 13.5, color: "#9fc0e5", margin: 0 }}>
                      Com Dr. Marcelo Risso e Dr. Paulo Cavali sobre parametrização e resultados a longo prazo.
                    </p>
                  </div>

                  {/* Simulated Waveform */}
                  <div className="modern-waveform">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div
                        key={i}
                        className="modern-wave-bar"
                        style={{
                          height: `${Math.max(20, (Math.sin(i * 0.4) + 1) * 45)}%`,
                          animationDelay: `${(i % 5) * 0.15}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div style={{ position: "relative" }}>
                  <img
                    src="/assets/tratado-em-debate-logo.png"
                    alt="Tratado em Debate Logo"
                    style={{ width: "100%", borderRadius: 16, boxShadow: "0 16px 40px rgba(0, 0, 0, 0.4)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= AUTORES E CORPO EDITORIAL (MINIMALISTA) ================= */}
        <section id="autores" style={{ padding: "80px 0 100px", background: "#fff" }}>
          <div className="shell">
            <div className="modern-section-header" style={{ marginBottom: 40 }}>
              <span className="modern-tag-pill">Corpo Editorial</span>
              <h2 className="modern-section-title">Autores &amp; Editores do Tratado</h2>
              <p className="modern-section-subtitle">
                Conheça os editores responsáveis pela coordenação acadêmica, diretrizes da SBC e rigor científico da obra.
              </p>
            </div>

            {/* Minimalist Interactive Accordion */}
            <div
              className="author-accordion-container"
              onMouseLeave={() => setHoveredAuthor(null)}
            >
              {authorsList.map((author, index) => {
                const isHovered = hoveredAuthor === index;
                return (
                  <article
                    key={author.id}
                    className={`author-accordion-card ${isHovered ? "active" : ""}`}
                    onMouseEnter={() => setHoveredAuthor(index)}
                    onClick={() => setHoveredAuthor(index)}
                  >
                    {/* High-Resolution Portrait */}
                    <img
                      src={author.photo}
                      alt={author.name}
                      className="author-accordion-bg"
                    />
                    <div className="author-accordion-overlay" />

                    <div className="author-accordion-content">
                      {/* Default Minimalist State (Visible when not hovered) */}
                      <div className="author-default-label">
                        <div>
                          <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "#fff" }}>
                            {author.name}
                          </h3>
                          <span style={{ fontSize: 12, color: "#ff808f", fontWeight: 600 }}>
                            {author.role}
                          </span>
                        </div>
                        <span
                          style={{
                            width: 28,
                            height: 28,
                            borderRadius: "50%",
                            background: "rgba(255, 255, 255, 0.12)",
                            display: "grid",
                            placeItems: "center",
                            fontSize: 14,
                            color: "#fff",
                          }}
                        >
                          +
                        </span>
                      </div>

                      {/* Hover / Expanded State (Visible on mouse hover) */}
                      <div className="author-accordion-glass-box">
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
                          <span
                            style={{
                              display: "inline-block",
                              padding: "4px 10px",
                              borderRadius: 6,
                              background: "#f52238",
                              color: "#fff",
                              fontSize: 11.5,
                              fontWeight: 800,
                              textTransform: "uppercase",
                              letterSpacing: "0.05em",
                            }}
                          >
                            {author.role}
                          </span>
                          <span style={{ fontSize: 12, color: "#9ec5f0", fontWeight: 600 }}>
                            {author.institution}
                          </span>
                        </div>

                        <h3
                          style={{
                            fontSize: 22,
                            fontWeight: 800,
                            margin: "0 0 10px",
                            letterSpacing: "-0.02em",
                            color: "#fff",
                          }}
                        >
                          {author.name}
                        </h3>

                        <p
                          style={{
                            fontSize: 13.5,
                            lineHeight: 1.55,
                            color: "#dce8f5",
                            margin: "0 0 14px",
                          }}
                        >
                          {author.bio}
                        </p>

                        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
                          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                            {author.specialties.map((spec, i) => (
                              <span
                                key={i}
                                style={{
                                  fontSize: 11,
                                  fontWeight: 600,
                                  padding: "3px 8px",
                                  borderRadius: 6,
                                  background: "rgba(255, 255, 255, 0.15)",
                                  backdropFilter: "blur(8px)",
                                  border: "1px solid rgba(255, 255, 255, 0.2)",
                                  color: "#f1f6fc",
                                }}
                              >
                                {spec}
                              </span>
                            ))}
                          </div>

                          <Link
                            href={`/${locale}/indice-new`}
                            style={{
                              fontSize: 12,
                              fontWeight: 700,
                              color: "#fff",
                              textDecoration: "none",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 4,
                              padding: "6px 12px",
                              borderRadius: 8,
                              background: "#f52238",
                              transition: "all 0.2s ease",
                            }}
                          >
                            Ver no Índice →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= COMPRA E ESPECIFICAÇÕES DA OBRA ================= */}
        <section id="comprar" style={{ padding: "80px 0", background: "linear-gradient(135deg, #021b3b 0%, #063773 100%)", color: "#fff" }}>
          <div className="shell">
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, alignItems: "center" }}>
              <div>
                <span className="modern-tag-pill" style={{ background: "rgba(255, 255, 255, 0.1)", color: "#fff", borderColor: "rgba(255, 255, 255, 0.2)" }}>
                  Adquira seu Exemplar
                </span>
                <h2 style={{ fontSize: 44, lineHeight: 1.1, margin: "14px 0 20px", fontWeight: 800 }}>
                  Uma obra indispensável para consulta e decisão cirúrgica.
                </h2>
                <p style={{ fontSize: 18, lineHeight: 1.6, color: "#bfdbfe", margin: "0 0 32px" }}>
                  Disponível exclusivamente em formato impresso de luxo com acabamento gráfico premium, encadernação especial e ilustrações anatômicas em alta resolução.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 36 }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <svg style={{ width: 28, height: 28, color: "#f52238" }}>
                      <use href="#i-check"></use>
                    </svg>
                    <span style={{ fontSize: 15, color: "#e2effe" }}>109 capítulos completos</span>
                  </div>
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <svg style={{ width: 28, height: 28, color: "#f52238" }}>
                      <use href="#i-check"></use>
                    </svg>
                    <span style={{ fontSize: 15, color: "#e2effe" }}>1.200+ páginas coloridas</span>
                  </div>
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <svg style={{ width: 28, height: 28, color: "#f52238" }}>
                      <use href="#i-check"></use>
                    </svg>
                    <span style={{ fontSize: 15, color: "#e2effe" }}>Capa dura de alta durabilidade</span>
                  </div>
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <svg style={{ width: 28, height: 28, color: "#f52238" }}>
                      <use href="#i-check"></use>
                    </svg>
                    <span style={{ fontSize: 15, color: "#e2effe" }}>Distribuição DiLivros</span>
                  </div>
                </div>

                <a
                  href="#comprar"
                  className="modern-btn-glow"
                  style={{ height: 60, padding: "0 40px", fontSize: 17 }}
                >
                  <span>Onde Comprar a Edição Impressa</span>
                  <svg style={{ width: 20, height: 20 }}>
                    <use href="#i-cart"></use>
                  </svg>
                </a>
              </div>

              <div style={{ textAlign: "center" }}>
                <img
                  src="/assets/book-cover.png"
                  alt="Tratado de Cirurgia da Coluna Vertebral Livro"
                  style={{ maxWidth: 380, width: "100%", borderRadius: 10, filter: "drop-shadow(0 30px 50px rgba(0, 0, 0, 0.6))" }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <ModernFooter locale={locale} />
    </div>
  );
}
