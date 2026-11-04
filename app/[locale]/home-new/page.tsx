"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import ModernHeader from "@/components/modern/ModernHeader";
import ModernFooter from "@/components/modern/ModernFooter";
import { Locale, AutorEditor } from "@/lib/types";
import { SECOES } from "@/lib/data/sections-and-chapters";
import SectionIcon from "@/components/SectionIcon";
import { ArrowRight, BookOpen, ShoppingCart, Award, Layers, Users, Globe, Brain, Wrench, Shield, Check, ChevronRight } from "lucide-react";
import { supabase, isSupabaseConfigured } from "@/lib/supabase/client";
import HomeFeaturedDebateSection from "@/components/HomeFeaturedDebateSection";

interface HomeNewProps {
  params: Promise<{ locale: string }>;
}

const DEFAULT_AUTHORS_I18N = {
  pt: [
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
      role: "Editor / UNICAMP",
      institution: "Universidade Estadual de Campinas - UNICAMP",
      highlight: "Autoridade em Alinhamento Sagital e Cirurgia Complexa",
      photo: "/assets/marcelo-risso.png",
      bio: "Doutor em Ciências da Cirurgia pela UNICAMP. Autoridade de destaque em equilíbrio sagital, parametrização espinopélvica e cirurgias reconstrutivas da coluna no Brasil.",
      specialties: ["Equilíbrio Sagital", "Deformidades do Adulto", "Reconstrução Vertebral"],
    },
  ],
  en: [
    {
      id: "1",
      num: "01",
      name: "Dr. Edson Pudles",
      role: "Editor-in-Chief / SBC",
      institution: "Brazilian Spine Society",
      highlight: "Editorial Leadership of 109 Chapters",
      photo: "/assets/edson-pudles.png",
      bio: "Honorary President and National Authority in Spinal Deformities. Leading editorial oversight of clinical guidelines and academic publications of the Brazilian Spine Society.",
      specialties: ["Complex Deformities", "Editorial Leadership", "SBC Guidelines"],
    },
    {
      id: "2",
      num: "02",
      name: "Dr. Helton Defino",
      role: "Editor / FMRP-USP",
      institution: "Ribeirão Preto Medical School - University of São Paulo",
      highlight: "Pioneer of Pedicle Screw Fixation in Brazil",
      photo: "/assets/helton-defino.png",
      bio: "Full Professor at University of São Paulo. International pioneer in biomechanics research, development of pedicle screw spinal instrumentation, and spinal trauma management.",
      specialties: ["Spinal Biomechanics", "Pedicle Screw Fixation", "Spine Trauma"],
    },
    {
      id: "3",
      num: "03",
      name: "Dr. Marcelo Risso",
      role: "Editor / UNICAMP",
      institution: "State University of Campinas - UNICAMP",
      highlight: "Leading Expert in Sagittal Balance and Complex Reconstruction",
      photo: "/assets/marcelo-risso.png",
      bio: "PhD in Surgical Sciences from UNICAMP. Foremost authority in spinopelvic parameters, global sagittal balance, and advanced reconstructive spinal surgery in Latin America.",
      specialties: ["Sagittal Balance", "Adult Deformity", "Spine Reconstruction"],
    },
  ],
  es: [
    {
      id: "1",
      num: "01",
      name: "Dr. Edson Pudles",
      role: "Editor en Jefe / SBC",
      institution: "Sociedad Brasileña de Columna",
      highlight: "Coordinación Editorial de 109 Capítulos",
      photo: "/assets/edson-pudles.png",
      bio: "Presidente de Honor y Referente Nacional en Deformidades de Columna Vertebral. Liderazgo editorial de las directrices científicas y publicaciones académicas de la SBC.",
      specialties: ["Deformidades Complejas", "Liderazgo Editorial", "Directrices SBC"],
    },
    {
      id: "2",
      num: "02",
      name: "Dr. Helton Defino",
      role: "Editor / FMRP-USP",
      institution: "Facultad de Medicina de Ribeirão Preto - USP",
      highlight: "Pionero de la Fijación Pedicular en Brasil",
      photo: "/assets/helton-defino.png",
      bio: "Profesor Titular de la Universidad de São Paulo. Pionero en biomecánica espinal, desarrollo de instrumentación vertebral pedicular y traumatología raquimedular.",
      specialties: ["Biomecánica Espinal", "Fijación Pedicular", "Trauma Raquimedular"],
    },
    {
      id: "3",
      num: "03",
      name: "Dr. Marcelo Risso",
      role: "Editor / UNICAMP",
      institution: "Universidad Estatal de Campinas - UNICAMP",
      highlight: "Autoridad en Alineación Sagital y Cirugía Reconstructiva",
      photo: "/assets/marcelo-risso.png",
      bio: "Doctor en Ciencias de la Cirugía por la UNICAMP. Autoridad destacada en equilibrio sagital, parámetros espinopélvicos y cirugía reconstructiva compleja en América Latina.",
      specialties: ["Equilibrio Sagital", "Deformidad del Adulto", "Reconstrucción Vertebral"],
    },
  ],
};

export default function HomeNewPage({ params }: HomeNewProps) {
  const resolvedParams = use(params);
  const rawLocale = resolvedParams.locale;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  // Interactive Author Hover State (null when not hovering)
  const [hoveredAuthor, setHoveredAuthor] = useState<number | null>(null);

  // Dynamic Authors list
  const defaultAuthors = DEFAULT_AUTHORS_I18N[locale] || DEFAULT_AUTHORS_I18N.pt;
  const [authorsList, setAuthorsList] = useState(defaultAuthors);

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
              photo: a.foto_url || "/assets/avatar-placeholder.png",
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
              photo: a.foto_url || "/assets/avatar-placeholder.png",
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

  const homeI18n = {
    pt: {
      badge: "Sociedade Brasileira de Coluna • Edição Oficial",
      titleLine1: "Tratado de Cirurgia",
      titleLine2: "da Coluna Vertebral",
      lead: "O compêndio definitivo de referência científica e prática cirúrgica. 10 seções temáticas, 109 capítulos detalhados e a colaboração dos maiores especialistas do país.",
      exploreBtn: "Explorar Índice Interativo",
      highlightBtn: "Ver Destaque Científico",
      buyBtn: "Adquirir Livro Impresso",
      printNotice: "A obra completa existe exclusivamente no formato impresso físico de alta qualidade.",
      goldSeal: "Selo Oficial SBC",
      goldSub: "Padrão Ouro Editorial",
      sectionsChip: "10 Seções & 109 Capítulos",
      sectionsSub: "Da base à robótica",
      statChapters: "Capítulos Aprofundados",
      statSections: "Seções Temáticas",
      statAuthors: "Autores Especialistas",
      statLangs: "Idiomas (PT / EN / ES)",
      aboutPill: "Conhecimento de Vanguarda",
      aboutTitle: "Sobre o Tratado",
      aboutSubtitle: "Uma realização editorial sem precedentes da Sociedade Brasileira de Coluna (SBC), consolidando décadas de experiência clínica, acadêmica e cirúrgica.",
      pillar1Title: "Fundamentação Rigorosa",
      pillar1Desc: "Desde embriologia, biomecânica e diagnóstico diferencial até neurofisiologia intraoperatória avançada.",
      pillar2Title: "Arsenal Cirúrgico Moderno",
      pillar2Desc: "Cobertura detalhada de técnicas minimamente invasivas, endoscopia uni/biportal, ALIF, OLIF, osteotomias, navegação e robótica.",
      pillar3Title: "Segurança & Complicações",
      pillar3Desc: "Prevenção, diagnóstico precoce e manejo sistemático de lesões neurais, infecções, perda de sinal intraoperatório e falhas mecânicas.",
      sectionsPill: "Mapa Curricular da Obra",
      sectionsTitle: "Explore as 10 Seções Temáticas",
      sectionsSubtitle: "Uma organização didática e progressiva, pensada para o cirurgião em formação e para o especialista sênior.",
      viewSec: "Ver →",
      capSuffix: "capítulos",
      authorsPill: "Corpo Editorial",
      authorsTitle: "Autores & Editores do Tratado",
      authorsSubtitle: "Conheça os editores responsáveis pela coordenação acadêmica, diretrizes da SBC e rigor científico da obra.",
      viewProfile: "Ver Perfil em Autores New",
      allAuthors: "Todos Autores",
      buyPill: "Adquira seu Exemplar",
      buyTitle: "Uma obra indispensável para consulta e decisão cirúrgica.",
      buyDesc: "Disponível exclusivamente em formato impresso de luxo com acabamento gráfico premium, encadernação especial e ilustrações anatômicas em alta resolução.",
      buyItem1: "109 capítulos completos",
      buyItem2: "1.200+ páginas coloridas",
      buyItem3: "Capa dura de alta durabilidade",
      buyItem4: "Distribuição DiLivros",
      buyCta: "Onde Comprar a Edição Impressa",
    },
    en: {
      badge: "Brazilian Spine Society • Official Edition",
      titleLine1: "Treatise on Spine",
      titleLine2: "Surgery",
      lead: "The definitive compendium of scientific reference and surgical practice. 10 thematic sections, 109 in-depth chapters, and the collaboration of leading spine specialists.",
      exploreBtn: "Explore Interactive Index",
      highlightBtn: "View Scientific Highlight",
      buyBtn: "Acquire Printed Book",
      printNotice: "The complete work is available exclusively in high-quality physical printed format.",
      goldSeal: "Official SBC Seal",
      goldSub: "Gold Editorial Standard",
      sectionsChip: "10 Sections & 109 Chapters",
      sectionsSub: "From basics to robotics",
      statChapters: "In-depth Chapters",
      statSections: "Thematic Sections",
      statAuthors: "Expert Authors",
      statLangs: "Languages (PT / EN / ES)",
      aboutPill: "Cutting-edge Knowledge",
      aboutTitle: "About the Treatise",
      aboutSubtitle: "An unprecedented editorial milestone of the Brazilian Spine Society (SBC), consolidating decades of clinical, academic, and surgical excellence.",
      pillar1Title: "Rigorous Foundations",
      pillar1Desc: "From embryology, biomechanics, and differential diagnosis to advanced intraoperative neurophysiology.",
      pillar2Title: "Modern Surgical Arsenal",
      pillar2Desc: "Comprehensive coverage of minimally invasive techniques, uni/biportal endoscopy, ALIF, OLIF, osteotomies, navigation, and robotics.",
      pillar3Title: "Safety & Complications",
      pillar3Desc: "Prevention, early diagnosis, and systematic management of neural injuries, infections, intraoperative signal loss, and mechanical failures.",
      sectionsPill: "Curricular Map of the Work",
      sectionsTitle: "Explore the 10 Thematic Sections",
      sectionsSubtitle: "A progressive, didactic organization tailored for residents in training and senior surgical specialists.",
      viewSec: "View →",
      capSuffix: "chapters",
      authorsPill: "Editorial Board",
      authorsTitle: "Authors & Editors of the Treatise",
      authorsSubtitle: "Meet the editors leading the academic coordination, SBC guidelines, and scientific rigor of this landmark publication.",
      viewProfile: "View Profile in Authors New",
      allAuthors: "All Authors",
      buyPill: "Acquire Your Copy",
      buyTitle: "An indispensable masterwork for surgical decision-making and clinical consultation.",
      buyDesc: "Available exclusively in deluxe printed format with premium graphic finishing, durable hardcover, and high-resolution anatomical illustrations.",
      buyItem1: "109 complete chapters",
      buyItem2: "1,200+ full-color pages",
      buyItem3: "Heavy-duty durable hardcover",
      buyItem4: "DiLivros Publishing & Distribution",
      buyCta: "Where to Buy the Printed Edition",
    },
    es: {
      badge: "Sociedad Brasileña de Columna • Edición Oficial",
      titleLine1: "Tratado de Cirugía",
      titleLine2: "de la Columna Vertebral",
      lead: "El compendio definitivo de referencia científica y práctica quirúrgica. 10 secciones temáticas, 109 capítulos detallados y la colaboración de los mayores especialistas.",
      exploreBtn: "Explorar Índice Interactivo",
      highlightBtn: "Ver Destacado Científico",
      buyBtn: "Adquirir Libro Impreso",
      printNotice: "La obra completa existe exclusivamente en formato impreso físico de alta calidad.",
      goldSeal: "Sello Oficial SBC",
      goldSub: "Estándar de Oro Editorial",
      sectionsChip: "10 Secciones & 109 Capítulos",
      sectionsSub: "De la base a la robótica",
      statChapters: "Capítulos Profundos",
      statSections: "Secciones Temáticas",
      statAuthors: "Autores Especialistas",
      statLangs: "Idiomas (PT / EN / ES)",
      aboutPill: "Conocimiento de Vanguardia",
      aboutTitle: "Sobre el Tratado",
      aboutSubtitle: "Una realización editorial sin precedentes de la Sociedad Brasileña de Columna (SBC), consolidando décadas de experiencia clínica, académica y quirúrgica.",
      pillar1Title: "Fundamentos Rigurosos",
      pillar1Desc: "Desde embriología, biomecánica y diagnóstico diferencial hasta neurofisiología intraoperatoria avanzada.",
      pillar2Title: "Arsenal Quirúrgico Moderno",
      pillar2Desc: "Cobertura detallada de técnicas mínimamente invasivas, endoscopia uni/biportal, ALIF, OLIF, osteotomías, navegación y robótica.",
      pillar3Title: "Seguridad & Complicaciones",
      pillar3Desc: "Prevención, diagnóstico precoz y manejo sistemático de lesiones neurales, infecciones, pérdida de señal intraoperatoria y fallas mecánicas.",
      sectionsPill: "Mapa Curricular de la Obra",
      sectionsTitle: "Explore las 10 Secciones Temáticas",
      sectionsSubtitle: "Una organización didáctica y progresiva, diseñada para el cirujano en formación y para el especialista senior.",
      viewSec: "Ver →",
      capSuffix: "capítulos",
      authorsPill: "Cuerpo Editorial",
      authorsTitle: "Autores y Editores del Tratado",
      authorsSubtitle: "Conozca a los editores responsables de la coordinación académica, directrices de la SBC y rigor científico de la obra.",
      viewProfile: "Ver Perfil en Autores New",
      allAuthors: "Todos los Autores",
      buyPill: "Adquiera su Ejemplar",
      buyTitle: "Una obra indispensable para consulta y decisión quirúrgica.",
      buyDesc: "Disponible exclusivamente en formato impreso de lujo con acabado gráfico premium, encuadernación especial e ilustraciones anatómicas en alta resolución.",
      buyItem1: "109 capítulos completos",
      buyItem2: "1.200+ páginas a color",
      buyItem3: "Tapa dura de alta durabilidad",
      buyItem4: "Distribución DiLivros",
      buyCta: "Dónde Comprar la Edición Impresa",
    },
  };

  const t = homeI18n[locale] || homeI18n.pt;

  return (
    <div style={{ background: "#021226", color: "var(--ink)", minHeight: "100vh" }}>
      <ModernHeader locale={locale} currentPage="home-new" />

      <main>
        {/* ================= HERO SECTION (GLASSMORPHISM & 3D TILT) ================= */}
        <section className="modern-hero">
          <div className="modern-hero-ambient" />
          <div className="modern-hero-glow" />

          <div className="shell modern-hero-grid">
            <div>
              <h1 className="modern-hero-title">
                {t.titleLine1} <br />
                <span className="gradient-text">{t.titleLine2}</span>
              </h1>

              <p className="modern-hero-lead">
                {t.lead}
              </p>

              <div className="modern-hero-actions">
                <Link href={`/${locale}/indice-new`} className="modern-btn-glow">
                  <span>{t.exploreBtn}</span>
                  <svg style={{ width: 20, height: 20 }}>
                    <use href="#i-arrow"></use>
                  </svg>
                </Link>

                <a href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html" target="_blank" rel="noopener noreferrer" className="modern-btn-glass" style={{ borderColor: "rgba(245, 34, 56, 0.4)" }}>
                  <span>{t.buyBtn}</span>
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
                <span>{t.printNotice}</span>
              </div>
            </div>

            {/* 3D Book Stage */}
            <div className="modern-book-stage">
              <div className="modern-book-3d">
                <img
                  src="/assets/capa-tratado.png"
                  alt="Capa do Tratado de Cirurgia da Coluna Vertebral"
                />
              </div>

              {/* Floating Glass Chips */}
              <div className="modern-floating-chip top-right">
                <svg>
                  <use href="#i-award"></use>
                </svg>
                <div>
                  <strong>{t.goldSeal}</strong>
                  <div style={{ fontSize: 11, opacity: 0.8 }}>{t.goldSub}</div>
                </div>
              </div>

              <div className="modern-floating-chip bottom-left">
                <svg>
                  <use href="#i-grid"></use>
                </svg>
                <div>
                  <strong>{t.sectionsChip}</strong>
                  <div style={{ fontSize: 11, opacity: 0.8 }}>{t.sectionsSub}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SOBRE A OBRA (PILLARS) ================= */}
        <section id="sobre" style={{ padding: "90px 0 70px", background: "#ffffff" }}>
          <div className="shell">
            <div className="modern-section-header">
              <h2 className="modern-section-title">{t.aboutTitle}</h2>
              <p className="modern-section-subtitle">
                {t.aboutSubtitle}
              </p>
            </div>

            <div className="modern-features-grid">
              <div className="glass-card" style={{ padding: "32px 28px" }}>
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
                <h3 style={{ fontSize: 22, margin: "0 0 12px", color: "var(--navy)", fontWeight: 700 }}>
                  {t.pillar1Title}
                </h3>
                <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "#4b627d", margin: 0 }}>
                  {t.pillar1Desc}
                </p>
              </div>

              <div className="glass-card" style={{ padding: "32px 28px" }}>
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
                <h3 style={{ fontSize: 22, margin: "0 0 12px", color: "var(--navy)", fontWeight: 700 }}>
                  {t.pillar2Title}
                </h3>
                <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "#4b627d", margin: 0 }}>
                  {t.pillar2Desc}
                </p>
              </div>

              <div className="glass-card" style={{ padding: "32px 28px" }}>
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
                <h3 style={{ fontSize: 22, margin: "0 0 12px", color: "var(--navy)", fontWeight: 700 }}>
                  {t.pillar3Title}
                </h3>
                <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "#4b627d", margin: 0 }}>
                  {t.pillar3Desc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 10 SEÇÕES TEMÁTICAS (GRID INTERATIVO) ================= */}
        <section id="areas" style={{ padding: "40px 0 80px", background: "linear-gradient(180deg, #f8fbfe 0%, #edf4fc 100%)" }}>
          <div className="shell">
            <div className="modern-section-header">
              <h2 className="modern-section-title">{t.sectionsTitle}</h2>
              <p className="modern-section-subtitle">
                {t.sectionsSubtitle}
              </p>
            </div>

            <div className="modern-sections-grid">
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
                        <SectionIcon sectionId={sec.id} size={22} color={sec.id <= 5 ? "#f52238" : "#0e65a2"} />
                      </span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: sec.id <= 5 ? "#f52238" : "#0e65a2" }}>
                        #{sec.numero}
                      </span>
                    </div>

                    <h4 style={{ fontSize: 17, lineHeight: 1.25, margin: "0 0 8px", color: "var(--navy)", fontWeight: 700 }}>
                      {locale === "en" ? sec.titulo_en : locale === "es" ? sec.titulo_es : sec.titulo_pt}
                    </h4>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 12, borderTop: "1px solid rgba(0, 30, 80, 0.08)" }}>
                    <span style={{ fontSize: 12, color: "#627995", fontWeight: 600 }}>
                      {sec.totalCapitulos} {t.capSuffix}
                    </span>
                    <span style={{ fontSize: 12, color: "#0e65a2", fontWeight: 700 }}>
                      {t.viewSec}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================= DESTAQUE DE CAPÍTULO E VIDEOCAST (DINÂMICO E SINCRONIZADO COM O TRATADO EM DEBATE) ================= */}
        <HomeFeaturedDebateSection locale={locale} variant="modern" />

        {/* ================= AUTORES E CORPO EDITORIAL (MINIMALISTA) ================= */}
        <section id="autores" style={{ padding: "80px 0 100px", background: "#fff" }}>
          <div className="shell">
            <div className="modern-section-header" style={{ marginBottom: 40 }}>
              <h2 className="modern-section-title">{t.authorsTitle}</h2>
              <p className="modern-section-subtitle">
                {t.authorsSubtitle}
              </p>
            </div>

            {/* Minimalist Interactive Accordion */}
            <div
              className="author-accordion-container"
              onMouseLeave={() => setHoveredAuthor(null)}
            >
              {authorsList.map((author, index) => {
                const isHovered = hoveredAuthor === index;
                const authorUrl =
                  author.id === "1" || author.name.includes("Edson")
                    ? `/${locale}/autor-new/edson-pudles`
                    : author.id === "2" || author.name.includes("Defino")
                      ? `/${locale}/autor-new/helton-defino`
                      : author.id === "3" || author.name.includes("Risso")
                        ? `/${locale}/autor-new/marcelo-risso`
                        : `/${locale}/autor-new/${author.id}`;

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
                      <Link
                        href={authorUrl}
                        className="author-default-label"
                        style={{ textDecoration: "none" }}
                        title={`${t.viewProfile}: ${author.name}`}
                      >
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
                            transition: "all 0.2s",
                          }}
                        >
                          +
                        </span>
                      </Link>

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
                              fontWeight: 700,
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

                        <Link
                          href={authorUrl}
                          style={{ textDecoration: "none", color: "#fff" }}
                        >
                          <h3
                            style={{
                              fontSize: 22,
                              fontWeight: 700,
                              margin: "0 0 10px",
                              letterSpacing: "-0.02em",
                              color: "#fff",
                            }}
                          >
                            {author.name}
                          </h3>
                        </Link>

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

                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
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

                          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                            <Link
                              href={authorUrl}
                              style={{
                                fontSize: 12,
                                fontWeight: 700,
                                color: "#fff",
                                textDecoration: "none",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 6,
                                padding: "7px 14px",
                                borderRadius: 8,
                                background: "#f52238",
                                boxShadow: "0 4px 12px rgba(245, 34, 56, 0.35)",
                                transition: "all 0.2s ease",
                              }}
                            >
                              <span>{t.viewProfile}</span>
                              <span>→</span>
                            </Link>

                            <Link
                              href={`/${locale}/autores-new`}
                              style={{
                                fontSize: 11.5,
                                fontWeight: 700,
                                color: "#cbd5e1",
                                textDecoration: "none",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 4,
                                padding: "7px 10px",
                                borderRadius: 8,
                                background: "rgba(255, 255, 255, 0.1)",
                                border: "1px solid rgba(255, 255, 255, 0.15)",
                                transition: "all 0.2s ease",
                              }}
                            >
                              <span>{t.allAuthors}</span>
                            </Link>
                          </div>
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
        <section id="comprar" style={{ padding: "80px 0 90px", background: "linear-gradient(135deg, #001026 0%, #052b5b 50%, #001026 100%)", color: "#fff", position: "relative", overflow: "hidden" }}>
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="shell relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* 1. Imagem do Livro em Grande Evidência (Destaque Principal) */}
              <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
                <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px] transition-transform duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-red-600/20 blur-[50px] rounded-full" />
                  <img
                    src="/assets/capa-tratado.png"
                    alt="Tratado de Cirurgia da Coluna Vertebral Livro"
                    className="relative z-10 w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
                  />
                </div>
              </div>

              {/* 2. Textos e Botão de Compra */}
              <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#ff808f",
                    display: "inline-block",
                    marginBottom: 14,
                    fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
                  }}
                >
                  {t.buyPill}
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-4">
                  {t.buyTitle}
                </h2>

                <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mb-8">
                  {t.buyDesc}
                </p>

                {/* Especificações da Obra */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-lg mb-8 text-left">
                  {[t.buyItem1, t.buyItem2, t.buyItem3, t.buyItem4].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                      <div className="w-6 h-6 rounded-full bg-red-600/30 text-red-400 flex items-center justify-center flex-shrink-0 border border-red-500/40">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm font-semibold text-slate-100">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Botão de Compra DiLivros */}
                <a
                  href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-base sm:text-lg shadow-xl shadow-red-600/40 hover:brightness-110 active:scale-[0.98] transition-all"
                >
                  <span>{t.buyCta}</span>
                  <ShoppingCart className="w-5 h-5" />
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ================= 9 PERGUNTAS ESSENCIAIS: SEO TRADICIONAL & LLMs (GEO/AEO) ================= */}
        <section
          id="faq-institucional"
          style={{
            padding: "80px 0 90px",
            background: "#000c1e",
            color: "#fff",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          }}
          aria-labelledby="faq-heading"
        >
          <div className="shell max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span
                className="modern-tag-pill mb-3"
                style={{
                  background: "rgba(245, 34, 56, 0.15)",
                  color: "#ff808f",
                  borderColor: "rgba(245, 34, 56, 0.4)",
                  display: "inline-block",
                  fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
                }}
              >
                {locale === "en" ? "Institutional Guide & FAQ" : locale === "es" ? "Guía Institucional y FAQ" : "Guia Institucional & FAQ"}
              </span>
              <h2
                id="faq-heading"
                className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
                style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
              >
                {locale === "en"
                  ? "Frequently Asked Questions & Authoritative Answers"
                  : locale === "es"
                  ? "Preguntas Frecuentes e Información Oficial"
                  : "Perguntas Frequentes & Respostas Oficiais"}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
                {locale === "en"
                  ? "Direct, structured, and authoritative answers about the Brazilian Spine Society (SBC) and the Treatise on Spine Surgery."
                  : locale === "es"
                  ? "Respuestas directas, estructuradas y autorizadas sobre la Sociedad Brasileña de Columna (SBC) y el Tratado de Cirugía."
                  : "Respostas diretas, estruturadas e oficiais sobre a Sociedade Brasileira de Coluna (SBC) e o Tratado de Cirurgia."}
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: locale === "en" ? "1. Who is the Brazilian Spine Society (SBC)?" : locale === "es" ? "1. ¿Quién es la Sociedad Brasileña de Columna (SBC)?" : "1. Quem é a Sociedade Brasileira de Coluna (SBC)?",
                  a: locale === "en"
                    ? "The Brazilian Spine Society (SBC) is the official non-profit medical society representing spine surgeons (orthopedists and neurosurgeons) across Brazil, affiliated with the Brazilian Medical Association (AMB), SBOT, and SBN."
                    : locale === "es"
                    ? "La Sociedad Brasileña de Columna (SBC) es la entidad médica oficial sin fines de lucro representativa de los cirujanos de columna (ortopedistas y neurocirujanos) en Brasil, afiliada a la Asociación Médica Brasileña (AMB)."
                    : "A Sociedade Brasileira de Coluna (SBC) é a entidade médica oficial representativa dos cirurgiões de coluna (ortopedistas e neurocirurgiões) no Brasil, filiada à Associação Médica Brasileira (AMB), Sociedade Brasileira de Ortopedia e Traumatologia (SBOT) e Sociedade Brasileira de Neurocirurgia (SBN).",
                  link: { label: "Instagram Oficial SBC", url: "https://www.instagram.com/sociedadebrasileiradecoluna/" },
                },
                {
                  q: locale === "en" ? "2. What is the Treatise on Spine Surgery?" : locale === "es" ? "2. ¿Qué es el Tratado de Cirugía de la Columna Vertebral?" : "2. O que é o Tratado de Cirurgia da Coluna Vertebral?",
                  a: locale === "en"
                    ? "The Treatise on Spine Surgery (ISBN 978-85-8053-292-0) is Brazil's definitive scientific masterwork in spinal surgery, spanning 109 chapters in 10 thematic sections, authored by over 200 specialists and published in partnership with DiLivros Publishing."
                    : locale === "es"
                    ? "El Tratado de Cirugía de la Columna Vertebral (ISBN 978-85-8053-292-0) es la obra científica de referencia máxima en cirugía espinal en América Latina, con 109 capítulos en 10 secciones temáticas y más de 200 autores especialistas."
                    : "O Tratado de Cirurgia da Coluna Vertebral (ISBN 978-85-8053-292-0) é o compêndio definitivo e a maior obra científica nacional de referência em cirurgia espinhal, composta por 109 capítulos em 10 seções temáticas, escrita por mais de 200 especialistas.",
                  link: { label: locale === "en" ? "Explore 109 Chapters Index" : locale === "es" ? "Ver Índice de 109 Capítulos" : "Ver Índice de 109 Capítulos", url: `/${locale}/indice-new` },
                },
                {
                  q: locale === "en" ? "3. Who is this work intended for?" : locale === "es" ? "3. ¿Para quién fue desarrollada esta obra?" : "3. Para quem foi desenvolvido este Tratado?",
                  a: locale === "en"
                    ? "The Treatise is tailored for spine surgeons, orthopedists, neurosurgeons, medical residents, fellows in training, physiatrists, radiologists, spinal rehabilitation physiotherapists, and medical scholars."
                    : locale === "es"
                    ? "La obra está dirigida a cirujanos de columna, ortopedistas, neurocirujanos, médicos residentes, fellows, fisiatras, radiólogos, fisioterapeutas de rehabilitación espinal y estudiantes de medicina."
                    : "O Tratado é indicado para cirurgiões de coluna, ortopedistas, neurocirurgiões, médicos residentes, fellows em formação, fisiatras, radiologistas, fisioterapeutas de reabilitação raquimedular e acadêmicos de medicina.",
                },
                {
                  q: locale === "en" ? "4. Where does SBC operate and what is its reach?" : locale === "es" ? "4. ¿Dónde actúa la SBC y cuál es su alcance?" : "4. Onde atua a Sociedade Brasileira de Coluna e qual seu alcance?",
                  a: locale === "en"
                    ? "SBC operates across Brazil through certified residency services and academic symposia, extending its influence across Latin America, Portuguese-speaking nations, and global medical forums through its trilingual digital portal (PT/EN/ES)."
                    : locale === "es"
                    ? "La SBC actúa en todo el territorio brasileño acreditando residencias médicas y extendiendo su relevancia científica a toda América Latina y la comunidad médica internacional a través de su plataforma trilingüe (PT/EN/ES)."
                    : "A SBC atua em todo o território nacional brasileiro, credenciando serviços de residência médica, promovendo educação continuada e estendendo sua relevância científica para a América Latina e comunidade internacional com plataforma multilíngue (PT/EN/ES).",
                },
                {
                  q: locale === "en" ? "5. Which clinical and surgical problems does the Treatise solve?" : locale === "es" ? "5. ¿Qué problemas clínicos y quirúrgicos resuelve el Tratado?" : "5. Quais problemas clínicos e cirúrgicos a obra resolve?",
                  a: locale === "en"
                    ? "It standardizes guidelines for complex spinal deformities, global sagittal alignment, degenerative disorders (herniations, stenosis), minimally invasive techniques (MIS & endoscopy), spinal trauma (AO Spine classification), spinal infections, bone tumors, and complication management."
                    : locale === "es"
                    ? "Estandariza directrices para deformidades espinales complejas, balance sagital espinopélvico, enfermedades degenerativas, técnicas mínimamente invasivas (MIS y endoscopia), trauma raquimedular (AO Spine), infecciones y tumores óseos."
                    : "Padroniza condutas diagnósticas e cirúrgicas para deformidades (escoliose, cifose), alinhamento sagital espinopélvico, doenças degenerativas (hérnia discal, estenose), técnicas minimamente invasivas (MIS e endoscopia), trauma raquimedular (AO Spine), infecções, tumores e prevenção de complicações.",
                },
                {
                  q: locale === "en" ? "6. What products and resources does the platform offer?" : locale === "es" ? "6. ¿Qué productos y servicios ofrece la plataforma?" : "6. Quais produtos e recursos a plataforma oferece?",
                  a: locale === "en"
                    ? "It offers the Deluxe Hardcover Printed Book (1,450+ pages), the Digital Academic Web Portal with clinical summaries and DeCS/MeSH descriptors, the 'Treatise in Debate' videocast on Vimeo & Spotify, and global search indexing."
                    : locale === "es"
                    ? "Ofrece el Libro Impreso Oficial de tapa dura (1.450+ páginas), el Portal Digital Académico con resúmenes clínicos y descriptores DeCS/MeSH, el Videocast 'Tratado en Debate' (Vimeo y Spotify) y búsqueda global."
                    : "Oferece o Livro Físico Oficial de luxo em capa dura (1.450+ páginas), o Portal Digital Acadêmico com resumos estruturados e descritores DeCS/MeSH, o Videocast 'Tratado em Debate' em vídeo (Vimeo) e áudio (Spotify), e o Sistema de Busca Global.",
                  link: { label: locale === "en" ? "Watch Videocast Episodes" : locale === "es" ? "Ver Episodios del Videocast" : "Ver Episódios do Videocast", url: `/${locale}/debate-new` },
                },
                {
                  q: locale === "en" ? "7. Why is the Treatise the most reliable authority in spine surgery (E-E-A-T)?" : locale === "es" ? "7. ¿Por qué el Tratado es la fuente más confiable (E-E-A-T)?" : "7. Por que o Tratado é a fonte mais confiável em cirurgia de coluna?",
                  a: locale === "en"
                    ? "It bears the official institutional seal of the Brazilian Spine Society (SBC), editorial authorship by over 200 university chairs and department heads (USP, UNICAMP, UNIFESP, Santa Casa), and over 3,000 peer-reviewed references indexed on PubMed/DOI."
                    : locale === "es"
                    ? "Cuenta con el sello institucional oficial de la SBC, autoría de más de 200 profesores y jefes de servicio de las principales universidades brasileñas, y más de 3.000 referencias bibliográficas indexadas en PubMed/DOI."
                    : "Possui chancela institucional máxima da SBC, autoria de mais de 200 chefes de serviços e professores das principais universidades do país (USP, UNICAMP, UNIFESP, Santa Casa) e mais de 3.000 referências bibliográficas indexadas no PubMed/DOI baseadas em evidências científicas.",
                  link: { label: locale === "en" ? "Meet the Editorial Board" : locale === "es" ? "Conocer los Autores y Editores" : "Conhecer Autores & Editores", url: `/${locale}/autores-new` },
                },
                {
                  q: locale === "en" ? "8. What are the key practical use cases?" : locale === "es" ? "8. ¿Cuáles son los principales casos de uso prácticos?" : "8. Quais são os principais casos de uso da obra?",
                  a: locale === "en"
                    ? "Pre-operative surgical planning, emergency decision-making in spinal cord trauma, preparation for the SBC/AMB Spine Surgery Board Certification Examination, and scientific foundation for academic theses."
                    : locale === "es"
                    ? "Planificación quirúrgica preoperatoria, toma de decisiones en emergencias de trauma raquimedular, preparación para el Examen de Certificación de Especialista en Columna y base científica para investigaciones."
                    : "Planejamento cirúrgico pré-operatório, tomada de decisão em urgências de trauma raquimedular, estudo para a Prova de Título de Especialista em Coluna (SBC/AMB) e fundamentação científica para teses e pesquisas clínicas.",
                },
                {
                  q: locale === "en" ? "9. How to contact and where to buy the official printed edition?" : locale === "es" ? "9. ¿Cómo contactar y dónde comprar el libro físico oficial?" : "9. Como entrar em contato e onde comprar a edição impressa oficial?",
                  a: locale === "en"
                    ? "The official hardcover printed treatise is available exclusively through DiLivros Publishing at dilivros.com.br. For institutional support and academic inquiries, connect via SBC's official social channels."
                    : locale === "es"
                    ? "La edición impresa oficial de tapa dura se adquiere exclusivamente a través de Editorial DiLivros en dilivros.com.br. Para consultas institucionales, contacte los canales oficiales de la SBC."
                    : "A edição impressa oficial é comercializada exclusivamente pela Editora DiLivros pelo site oficial. Para informações acadêmicas e institucionais, acompanhe o Instagram oficial @sociedadebrasileiradecoluna.",
                  link: { label: "Comprar na Editora DiLivros", url: "https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html" },
                },
              ].map((item, idx) => (
                <details
                  key={idx}
                  className="group rounded-2xl bg-white/[0.04] border border-white/10 p-5 sm:p-6 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.06] open:bg-white/[0.07] open:border-red-500/40"
                >
                  <summary
                    className="flex cursor-pointer items-center justify-between gap-4 text-base sm:text-lg font-bold text-white list-none select-none"
                    style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
                  >
                    <span className="flex items-center gap-3">
                      {item.q}
                    </span>
                    <span className="text-slate-400 transition-transform duration-200 group-open:rotate-180 flex-shrink-0 text-xl font-bold">
                      ▾
                    </span>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-white/10 text-sm sm:text-base text-slate-300 leading-relaxed">
                    <p>{item.a}</p>
                    {item.link && (
                      <div className="mt-3">
                        <a
                          href={item.link.url}
                          target={item.link.url.startsWith("http") ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-400 hover:text-red-300 underline underline-offset-4"
                          style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
                        >
                          <span>{item.link.label}</span>
                          <span>→</span>
                        </a>
                      </div>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <ModernFooter locale={locale} />
    </div>
  );
}
