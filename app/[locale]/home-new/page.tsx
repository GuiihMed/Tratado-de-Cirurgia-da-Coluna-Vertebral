"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import ModernHeader from "@/components/modern/ModernHeader";
import ModernFooter from "@/components/modern/ModernFooter";
import { Locale, AutorEditor } from "@/lib/types";
import { SECOES } from "@/lib/data/sections-and-chapters";
import SectionIcon from "@/components/SectionIcon";
import { ArrowRight, BookOpen, ShoppingCart, Award, Layers, Users, Globe, Brain, Wrench, Shield, Play, Check, ChevronRight } from "lucide-react";
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
      highlightPill: "Capítulo em Evidência",
      highlightTitle: "Coluna Vertebral no Plano Sagital",
      highlightSubtitle: "Explore os princípios biomecânicos e radiográficos que transformaram o planejamento cirúrgico moderno da coluna.",
      capBadge: "Capítulo 08",
      capSection: "Seção 1: Conceitos Básicos",
      capAuthors: "Autores: Marcelo Italo Risso Neto • Paulo Tadeu Maia Cavali",
      formulaLabel: "Fórmula / Referência:",
      clinicalLabel: "Implicação Clínica:",
      viewIndexBtn: "Ver no Índice Completo",
      watchDebateBtn: "Assistir Debate do Cap. 8",
      radiographCaption: "Esquema demonstrativo de balanço espinopélvico",
      debatePill: "Videocast Oficial SBC",
      debateTitle: "Tratado em Debate",
      debateDesc: "Discussões clínicas profundas com os autores de cada capítulo. Apresentando controvérsias cirúrgicas, tomada de decisão e casos complexos.",
      debateFeatured: "Episódio 01 em Destaque",
      debateEpTitle: "Capítulo 8 – Coluna Vertebral no Plano Sagital",
      debateEpDesc: "Com Dr. Marcelo Risso e Dr. Paulo Cavali sobre parametrização e resultados a longo prazo.",
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
      tabEquilibrio: "Equilíbrio Sagital (SVA)",
      tabIncidencia: "Incidência Pélvica (PI)",
      tabCone: "Cone de Economia",
      tabLordose: "Lordose Lombar (LL)",
      tabT1: "T1 Slope",
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
      highlightPill: "Featured Chapter",
      highlightTitle: "The Spine in the Sagittal Plane",
      highlightSubtitle: "Explore the biomechanical and radiographic principles that revolutionized modern spinal surgical planning.",
      capBadge: "Chapter 08",
      capSection: "Section 1: Basic Concepts",
      capAuthors: "Authors: Marcelo Italo Risso Neto • Paulo Tadeu Maia Cavali",
      formulaLabel: "Formula / Reference:",
      clinicalLabel: "Clinical Implication:",
      viewIndexBtn: "View in Full Index",
      watchDebateBtn: "Watch Ch. 8 Debate",
      radiographCaption: "Demonstrative diagram of spinopelvic balance",
      debatePill: "Official SBC Videocast",
      debateTitle: "Treatise in Debate",
      debateDesc: "In-depth clinical discussions with chapter authors. Addressing surgical controversies, decision-making algorithms, and complex cases.",
      debateFeatured: "Featured Episode 01",
      debateEpTitle: "Chapter 8 – The Spine in the Sagittal Plane",
      debateEpDesc: "With Dr. Marcelo Risso and Dr. Paulo Cavali discussing radiographic parametrization and long-term surgical outcomes.",
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
      tabEquilibrio: "Sagittal Balance (SVA)",
      tabIncidencia: "Pelvic Incidence (PI)",
      tabCone: "Cone of Economy",
      tabLordose: "Lumbar Lordosis (LL)",
      tabT1: "T1 Slope",
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
      highlightPill: "Capítulo en Evidencia",
      highlightTitle: "Columna Vertebral en el Plano Sagital",
      highlightSubtitle: "Explore los principios biomecánicos y radiográficos que transformaron la planificación quirúrgica moderna de la columna.",
      capBadge: "Capítulo 08",
      capSection: "Sección 1: Conceptos Básicos",
      capAuthors: "Autores: Marcelo Italo Risso Neto • Paulo Tadeu Maia Cavali",
      formulaLabel: "Fórmula / Referencia:",
      clinicalLabel: "Implicación Clínica:",
      viewIndexBtn: "Ver en Índice Completo",
      watchDebateBtn: "Ver Debate del Cap. 8",
      radiographCaption: "Esquema demostrativo de balance espinopélvico",
      debatePill: "Videocast Oficial SBC",
      debateTitle: "Tratado en Debate",
      debateDesc: "Discusiones clínicas profundas con los autores de cada capítulo. Presentando controversias quirúrgicas, toma de decisiones y casos complejos.",
      debateFeatured: "Episodio 01 Destacado",
      debateEpTitle: "Capítulo 8 – Columna Vertebral en el Plano Sagital",
      debateEpDesc: "Con el Dr. Marcelo Risso y el Dr. Paulo Cavali sobre parametrización y resultados a largo plazo.",
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
      tabEquilibrio: "Equilibrio Sagital (SVA)",
      tabIncidencia: "Incidencia Pélvica (PI)",
      tabCone: "Cono de Economía",
      tabLordose: "Lordosis Lumbar (LL)",
      tabT1: "T1 Slope",
    },
  };

  const t = homeI18n[locale] || homeI18n.pt;

  const sagittalDetails = {
    equilibrio: {
      title: locale === "en" ? "Global Sagittal Balance (SVA)" : locale === "es" ? "Equilibrio Sagital Global (SVA)" : "Equilíbrio Sagital Global (SVA)",
      desc: locale === "en"
        ? "Three-dimensional alignment minimizing postural energetic expenditure. The C7 plumb line (Sagittal Vertical Axis - SVA) should ideally sit within ±3 cm of the sacral promontory."
        : locale === "es"
        ? "Alineación tridimensional que minimiza el gasto energético postural. La línea de plomada de C7 (Sagittal Vertical Axis - SVA) debe situarse preferentemente a ±3 cm del promontorio sacro."
        : "Alinhamento tridimensional que minimiza o gasto energético postural. A linha de prumo de C7 (Sagittal Vertical Axis - SVA) deve situar-se preferencialmente a ±3 cm do promontório sacral.",
      formula: locale === "en" ? "Ideal SVA: < 40-50 mm in adults" : locale === "es" ? "SVA ideal: < 40-50 mm en adultos" : "SVA ideal: < 40-50 mm em adultos",
      clinical: locale === "en"
        ? "Positive imbalances (> 5 cm) increase muscular fatigue and directly correlate with worsening ODI and SRS-22 scores."
        : locale === "es"
        ? "Desbalances positivos (> 5 cm) aumentan la fatiga muscular y se correlacionan directamente con empeoramiento en las escalas ODI y SRS-22."
        : "Desbalanços positivos (> 5 cm) aumentam a fadiga muscular e correlacionam-se diretamente com piora nos escores ODI e SRS-22.",
    },
    incidencia: {
      title: locale === "en" ? "Pelvic Incidence (PI)" : locale === "es" ? "Incidencia Pélvica (PI)" : "Incidência Pélvica (Pelvic Incidence - PI)",
      desc: locale === "en"
        ? "Intrinsic anatomical parameter fixed in adulthood. It is the sum of pelvic tilt (PT) and sacral slope (SS)."
        : locale === "es"
        ? "Parámetro anatómico intrínseco fijo en la vida adulta. Es la suma del tilt pélvico (PT) con la inclinación sacra (SS)."
        : "Parâmetro anatômico intrínseco fixo na vida adulta. É a soma do tilt pélvico (PT) com a inclinação sacral (SS).",
      formula: "PI = PT + SS (Normal: ~50° ± 10°)",
      clinical: locale === "en"
        ? "Essential for predicting the exact amount of lumbar lordosis required in reconstructive spine surgery."
        : locale === "es"
        ? "Fundamental para prever la cantidad exacta de lordosis lumbar que la columna necesita en la cirugía reconstructiva."
        : "Fundamental para prever a quantidade exata de lordose lombar que a coluna necessita na cirurgia reconstrutiva.",
    },
    cone: {
      title: locale === "en" ? "Jean Dubousset's Cone of Economy" : locale === "es" ? "Cono de Economía de Jean Dubousset" : "Cone de Economia de Jean Dubousset",
      desc: locale === "en"
        ? "Classic biomechanical concept describing the human body oscillating within an imaginary cone of stability over the feet with minimal energy expenditure."
        : locale === "es"
        ? "Concepto biomecánico clásico que describe el cuerpo humano oscilando dentro de un cono imaginario de estabilidad sobre los pies con mínimo consumo de energía."
        : "Conceito biomecânico clássico que descreve o corpo humano oscilando dentro de um cone imaginário de estabilidade sobre a base dos pés com mínimo consumo de energia.",
      formula: locale === "en" ? "Minimal antigravity muscular effort" : locale === "es" ? "Mínimo esfuerzo muscular antigravitacional" : "Mínimo esforço muscular antigravitacional",
      clinical: locale === "en"
        ? "Surgery must restore erect posture without requiring exhausting compensatory mechanisms (pelvic retroversion, knee flexion)."
        : locale === "es"
        ? "La cirugía debe restaurar la postura erecta sin exigir mecanismos compensatorios exhaustivos (retroversión pélvica, flexión de rodillas)."
        : "A cirurgia deve restaurar a postura ereta sem exigir mecanismos compensatórios exaustivos (retroversão pélvica, flexão de joelhos).",
    },
    lordose: {
      title: locale === "en" ? "Lumbar Lordosis & Segmental Distribution (LL)" : locale === "es" ? "Lordosis Lumbar y Distribución Segmentaria (LL)" : "Lordose Lombar e Distribuição Segmentar (LL)",
      desc: locale === "en"
        ? "Approximately 65% to 70% of total lumbar lordosis is located at L4-L5 and L5-S1. Correct alignment must maintain harmony with Pelvic Incidence."
        : locale === "es"
        ? "Aproximadamente el 65% al 70% de la lordosis lumbar total se localiza en los segmentos L4-L5 y L5-S1. La alineación debe respetar la armonía con la Incidencia Pélvica."
        : "Aproximadamente 65% a 70% da lordose lombar total localiza-se nos segmentos L4-L5 e L5-S1. O alinhamento correto deve respeitar a harmonia com a Incidência Pélvica.",
      formula: locale === "en" ? "Surgical target: LL = PI ± 9°" : locale === "es" ? "Meta quirúrgica: LL = PI ± 9°" : "Meta cirúrgica: LL = PI ± 9°",
      clinical: locale === "en"
        ? "Under-correction of lordosis in lumbar fusion is the main cause of Flat Back Syndrome and adjacent segment degeneration."
        : locale === "es"
        ? "La subcorrección de la lordosis en fusiones lumbares es la causa principal del Síndrome de Espalda Plana y degeneración de segmento adyacente."
        : "Sub-correção da lordose em fusões lombares é a principal causa da Síndrome do Dorso Plano e degeneração do segmento adjacente.",
    },
    t1: {
      title: locale === "en" ? "T1 Slope & Cervical Balance" : locale === "es" ? "T1 Slope y Balance Cervical" : "T1 Slope & Balanço Cervical",
      desc: locale === "en"
        ? "Angle formed between T1 upper endplate and the horizontal plane. Determines the degree of cervical lordosis required to maintain horizontal gaze."
        : locale === "es"
        ? "Ángulo formado entre el platillo superior de T1 y el plano horizontal. Determina el grado de lordosis cervical necesario para mantener la mirada horizontal."
        : "Ângulo formado entre o platô superior de T1 e o plano horizontal. Determina o grau de lordose cervical necessário para manter o olhar horizontal.",
      formula: locale === "en" ? "Cervical Lordosis = T1 Slope ± 10°" : locale === "es" ? "Lordosis Cervical = T1 Slope ± 10°" : "Lordose Cervical = T1 Slope ± 10°",
      clinical: locale === "en"
        ? "Essential in planning cervical osteotomies and treating complex cervicothoracic spinal deformities."
        : locale === "es"
        ? "Esencial en la planificación de osteotomías cervicales y en el tratamiento de deformidades cervicotorácicas complejas."
        : "Essencial no planejamento de osteotomias cervicais e no tratamento de deformidades complexas cervicotorácicas.",
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
                <span>{t.badge}</span>
              </div>

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

                <a href="#destaque" className="modern-btn-glass">
                  <span>{t.highlightBtn}</span>
                  <svg style={{ width: 18, height: 18 }}>
                    <use href="#i-spine"></use>
                  </svg>
                </a>

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
                  <span>{t.statChapters}</span>
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
                  <span>{t.statSections}</span>
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
                  <span>{t.statAuthors}</span>
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
                  <span>{t.statLangs}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SOBRE A OBRA (PILLARS) ================= */}
        <section id="sobre" style={{ padding: "90px 0 70px", background: "#ffffff" }}>
          <div className="shell">
            <div className="modern-section-header">
              <span className="modern-tag-pill">{t.aboutPill}</span>
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
                <h3 style={{ fontSize: 22, margin: "0 0 12px", color: "var(--navy)", fontWeight: 800 }}>
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
                <h3 style={{ fontSize: 22, margin: "0 0 12px", color: "var(--navy)", fontWeight: 800 }}>
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
                <h3 style={{ fontSize: 22, margin: "0 0 12px", color: "var(--navy)", fontWeight: 800 }}>
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
              <span className="modern-tag-pill">{t.sectionsPill}</span>
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

        {/* ================= DESTAQUE CIENTÍFICO (CAPÍTULO 8 - PLANO SAGITAL) ================= */}
        <section id="destaque" style={{ padding: "70px 0 80px", background: "#f8fbfe" }}>
          <div className="shell">
            <div className="modern-section-header" style={{ marginBottom: 36, textAlign: "center" }}>
              <span className="modern-tag-pill" style={{ background: "rgba(245, 34, 56, 0.1)", color: "#f52238", borderColor: "rgba(245, 34, 56, 0.3)", display: "inline-block", margin: "0 auto 12px" }}>
                {t.highlightPill}
              </span>
              <h2 className="modern-section-title" style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 900, color: "#00122e", margin: "0 0 10px" }}>
                {t.highlightTitle}
              </h2>
              <p className="modern-section-subtitle" style={{ fontSize: "clamp(14px, 2vw, 16px)", color: "#475569", maxWidth: 700, margin: "0 auto" }}>
                {t.highlightSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/50">
              
              {/* Left Column: Info, Tabs & Parameters */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
                    <span
                      style={{
                        background: "#f52238",
                        color: "#fff",
                        fontSize: 11.5,
                        fontWeight: 800,
                        padding: "4px 10px",
                        borderRadius: 6,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {t.capBadge}
                    </span>
                    <span style={{ fontSize: 13.5, color: "#64748b", fontWeight: 700 }}>
                      {t.capSection}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "clamp(24px, 3.5vw, 32px)", lineHeight: 1.15, color: "#00122e", fontWeight: 900, margin: "0 0 10px", letterSpacing: "-0.02em" }}>
                    {locale === "en" ? "Spinopelvic Balance & Compensations" : locale === "es" ? "Equilibrio Espinopélvico y Compensaciones" : "Equilíbrio Espinopélvico & Compensações"}
                  </h3>

                  <p style={{ fontSize: 14.5, color: "#093c78", fontWeight: 700, margin: "0 0 20px" }}>
                    {t.capAuthors}
                  </p>

                  {/* Interactive Parameter Tabs (Responsive wrap without clipping) */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                    {[
                      { id: "equilibrio", label: t.tabEquilibrio },
                      { id: "incidencia", label: t.tabIncidencia },
                      { id: "cone", label: t.tabCone },
                      { id: "lordose", label: t.tabLordose },
                      { id: "t1", label: t.tabT1 },
                    ].map((tab) => {
                      const isActive = activeSagittalTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setActiveSagittalTab(tab.id as any)}
                          style={{
                            padding: "8px 14px",
                            borderRadius: 10,
                            fontSize: 12.5,
                            fontWeight: 750,
                            border: isActive ? "1.5px solid #001f4d" : "1px solid #e2e8f0",
                            background: isActive ? "#001f4d" : "#f1f5f9",
                            color: isActive ? "#ffffff" : "#334155",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            boxShadow: isActive ? "0 4px 12px rgba(0, 31, 77, 0.2)" : "none",
                          }}
                          className="hover:scale-[1.02] active:scale-[0.98]"
                        >
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Dynamic Parameter Details Box */}
                  <div
                    style={{
                      padding: "20px 22px",
                      borderRadius: 16,
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      marginBottom: 24,
                    }}
                  >
                    <h4 style={{ fontSize: 17, fontWeight: 800, color: "#001f4d", margin: "0 0 8px" }}>
                      {sagittalDetails[activeSagittalTab].title}
                    </h4>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: "#475569", margin: "0 0 16px" }}>
                      {sagittalDetails[activeSagittalTab].desc}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-200">
                      <div>
                        <span style={{ fontSize: 11, textTransform: "uppercase", fontWeight: 800, color: "#f52238", letterSpacing: "0.04em" }}>
                          {t.formulaLabel}
                        </span>
                        <div style={{ fontSize: 13, fontWeight: 750, color: "#0f172a", marginTop: 2 }}>
                          {sagittalDetails[activeSagittalTab].formula}
                        </div>
                      </div>
                      <div>
                        <span style={{ fontSize: 11, textTransform: "uppercase", fontWeight: 800, color: "#0284c7", letterSpacing: "0.04em" }}>
                          {t.clinicalLabel}
                        </span>
                        <div style={{ fontSize: 13, color: "#334155", marginTop: 2 }}>
                          {sagittalDetails[activeSagittalTab].clinical}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Link
                    href={`/${locale}/capitulo/8`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "11px 20px",
                      borderRadius: 10,
                      background: "#f52238",
                      color: "#fff",
                      fontWeight: 750,
                      fontSize: 14,
                      textDecoration: "none",
                      boxShadow: "0 4px 14px rgba(245, 34, 56, 0.3)",
                    }}
                  >
                    <span>{t.viewIndexBtn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="#debate"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "11px 18px",
                      borderRadius: 10,
                      background: "#fff",
                      color: "#001f4d",
                      border: "1px solid #cbd5e1",
                      fontWeight: 750,
                      fontSize: 14,
                      textDecoration: "none",
                    }}
                  >
                    <Play className="w-4 h-4 text-red-600 fill-current" />
                    <span>{t.watchDebateBtn}</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Radiograph (Fit 100% inside container without cutoffs) */}
              <div className="lg:col-span-5 w-full flex flex-col items-center justify-between rounded-2xl p-5 bg-gradient-to-b from-[#001026] via-[#021d42] to-[#001026] border border-white/15 text-white shadow-xl">
                <div className="w-full flex items-center justify-center p-2 overflow-hidden min-h-[260px] sm:min-h-[320px]">
                  <img
                    src="/assets/chapter-spine.png"
                    alt="Radiografia e alinhamento sagital"
                    className="max-h-[280px] sm:max-h-[340px] max-w-full w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
                  />
                </div>
                <div className="w-full mt-4 py-2 px-3 rounded-lg bg-black/40 border border-white/10 backdrop-blur-md text-xs text-slate-300 text-center font-medium">
                  {t.radiographCaption}
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
                    {t.debatePill}
                  </div>

                  <h3 style={{ fontSize: 36, letterSpacing: "-0.03em", margin: "0 0 12px", fontWeight: 800 }}>
                    {t.debateTitle}
                  </h3>

                  <p style={{ fontSize: 16, lineHeight: 1.6, color: "#b9d4f2", margin: "0 0 24px" }}>
                    {t.debateDesc}
                  </p>

                  <div style={{ padding: 18, borderRadius: 14, background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.12)", marginBottom: 24 }}>
                    <span style={{ fontSize: 12, color: "#ff6b7a", fontWeight: 800, textTransform: "uppercase" }}>
                      {t.debateFeatured}
                    </span>
                    <h4 style={{ fontSize: 17, margin: "4px 0 6px", color: "#fff" }}>
                      {t.debateEpTitle}
                    </h4>
                    <p style={{ fontSize: 13.5, color: "#9fc0e5", margin: 0 }}>
                      {t.debateEpDesc}
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
                    src="/assets/debate-artwork.png"
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
              <span className="modern-tag-pill">{t.authorsPill}</span>
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

                        <Link
                          href={authorUrl}
                          style={{ textDecoration: "none", color: "#fff" }}
                        >
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
                                fontWeight: 800,
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
                    src="/assets/book-cover.png"
                    alt="Tratado de Cirurgia da Coluna Vertebral Livro"
                    className="relative z-10 w-full h-auto rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.85)] border border-white/20"
                  />
                </div>
              </div>

              {/* 2. Textos e Botão de Compra */}
              <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="modern-tag-pill mb-4" style={{ background: "rgba(255, 255, 255, 0.12)", color: "#fff", borderColor: "rgba(255, 255, 255, 0.25)", display: "inline-block" }}>
                  {t.buyPill}
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white mb-4">
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
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-black text-base sm:text-lg shadow-xl shadow-red-600/40 hover:brightness-110 active:scale-[0.98] transition-all"
                >
                  <span>{t.buyCta}</span>
                  <ShoppingCart className="w-5 h-5" />
                </a>
              </div>

            </div>
          </div>
        </section>
      </main>

      <ModernFooter locale={locale} />
    </div>
  );
}
