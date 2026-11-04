"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Locale } from "@/lib/types";
import {
  DEBATE_EPISODES,
  getDefaultFeaturedEpisodeNumber,
  getDebateEpisodeByNumber,
} from "@/lib/data/debate-episodes";
import { useVimeoThumbnails } from "@/lib/hooks/useVimeoThumbnails";
import CustomVimeoPlayer from "@/components/CustomVimeoPlayer";
import SpotifyIcon from "@/components/icons/SpotifyIcon";
import { FileText, ArrowRight, ExternalLink } from "lucide-react";

interface ChapterHighlightData {
  capituloNum: number;
  title_pt: string;
  title_en: string;
  title_es: string;
  authors: string[];
  summary_pt: string;
  summary_en: string;
  summary_es: string;
  chips_pt: string[];
  chips_en: string[];
  chips_es: string[];
}

const CHAPTER_HIGHLIGHTS_BY_EPISODE: Record<number, ChapterHighlightData> = {
  1: {
    capituloNum: 8,
    title_pt: "Coluna Vertebral no Plano Sagital",
    title_en: "The Spine in the Sagittal Plane",
    title_es: "Columna Vertebral en el Plano Sagital",
    authors: ["Marcelo Italo Risso Neto", "Paulo Tadeu Maia Cavali"],
    summary_pt:
      "Este capítulo aborda os fundamentos do equilíbrio sagital da coluna, parâmetros espinopélvicos, mecanismos compensatórios e sua aplicação no planejamento cirúrgico.",
    summary_en:
      "This chapter covers the foundations of sagittal spinal balance, spinopelvic parameters, compensatory mechanisms, and their critical application in surgical planning.",
    summary_es:
      "Este capítulo aborda los fundamentos del equilibrio sagital de la columna, parámetros espinopélvicos, mecanismos compensatorios y su aplicación en la planificación quirúrgica.",
    chips_pt: ["Equilíbrio sagital", "Incidência pélvica", "Cone de economia", "Lordose lombar", "T1 slope"],
    chips_en: ["Sagittal balance", "Pelvic incidence", "Cone of economy", "Lumbar lordosis", "T1 slope"],
    chips_es: ["Equilibrio sagital", "Incidencia pélvica", "Cono de economía", "Lordosis lumbar", "T1 slope"],
  },
  2: {
    capituloNum: 9,
    title_pt: "Princípios da Artrodese, Biologia do Enxerto e Substitutos Ósseos",
    title_en: "Principles of Arthrodesis, Graft Biology, and Bone Substitutes",
    title_es: "Principios de Artrodesis, Biología del Injerto y Sustitutos Óseos",
    authors: ["Raphael Martus Marcon", "Matheus Augusto Maciel Santiago"],
    summary_pt:
      "A consolidação biológica exige integração entre osteogênese, osteoindução e osteocondução sob estabilidade mecânica. Diretrizes modernas para escolha de autoenxerto, aloenxerto e substitutos sintéticos.",
    summary_en:
      "Biological fusion requires a triad of osteogenesis, osteoinduction, and osteoconduction under mechanical stability. Contemporary guidance on bone grafts and biological substitutes.",
    summary_es:
      "La consolidación biológica exige la integración entre osteogénesis, osteoinducción y osteoconducción bajo estabilidad mecánica. Pautas para la selección de injertos y sustitutos óseos.",
    chips_pt: ["Artrodese", "Biologia Óssea", "Enxerto Ósseo", "Substitutos Ósseos", "Consolidação"],
    chips_en: ["Arthrodesis", "Bone Biology", "Bone Graft", "Bone Substitutes", "Fusion"],
    chips_es: ["Artrodesis", "Biología Ósea", "Injerto Óseo", "Sustitutos Óseos", "Fusión"],
  },
  3: {
    capituloNum: 14,
    title_pt: "Monitorização Neurofisiológica Intraoperatória em Cirurgia de Coluna",
    title_en: "Intraoperative Neurophysiological Monitoring in Spine Surgery",
    title_es: "Monitorización Neurofisiológica Intraoperatoria en Cirugía de Columna",
    authors: ["Ricardo José Rodriguez Ferreira", "Patrícia Toscano Barreto Nogueira"],
    summary_pt:
      "Avaliação funcional contínua de vias motoras e sensitivas sob anestesia geral. Protocolos de alerta para prevenção de déficits neurológicos e mapeamento radicular de segurança.",
    summary_en:
      "Continuous functional assessment of motor and sensory tracts under general anesthesia. Warning criteria for neurological preservation and safe pedicle instrumentation.",
    summary_es:
      "Evaluación funcional continua de vías motoras y sensitivas bajo anestesia general. Criterios de alarma para prevenir lesiones neurológicas y colocación segura de tornillos.",
    chips_pt: ["MNIO", "Potencial Evocado Motor", "EMG Disparada", "Segurança Neurológica", "Cirurgia de Coluna"],
    chips_en: ["IONM", "Motor Evoked Potentials", "Triggered EMG", "Neurological Safety", "Spine Surgery"],
    chips_es: ["MNIO", "Potenciales Evocados Motores", "EMG Estimulada", "Seguridad Neurológica", "Cirugía de Columna"],
  },
  4: {
    capituloNum: 18,
    title_pt: "Avaliação da Coluna do Paciente Politraumatizado",
    title_en: "Spine Assessment in the Polytrauma Patient",
    title_es: "Evaluación de la Columna en el Paciente Politraumatizado",
    authors: ["Charbel Jacob Júnior", "Igor de Barcellos Zanon"],
    summary_pt:
      "Abordagem sistematizada da coluna vertebral no suporte avançado de vida no trauma (ATLS). Triagem de fraturas instáveis, restrição segura de movimento e priorização terapêutica.",
    summary_en:
      "Systematic evaluation of spinal injuries in Advanced Trauma Life Support (ATLS). Triage of unstable fractures, spinal immobilization, and timing of surgical stabilization.",
    summary_es:
      "Evaluación sistemática de la columna en soporte vital avanzado en trauma (ATLS). Clasificación de fracturas inestables, inmovilización segura y priorización quirúrgica.",
    chips_pt: ["Politrauma", "ATLS", "Trauma Raquimedular", "Instabilidade Traumática", "Tomografia"],
    chips_en: ["Polytrauma", "ATLS", "Spinal Cord Injury", "Traumatic Instability", "CT Scan"],
    chips_es: ["Politrauma", "ATLS", "Traumatismo Raquimedular", "Inestabilidad Traumática", "Tomografía"],
  },
  5: {
    capituloNum: 22,
    title_pt: "Lesões Traumáticas da Coluna Torácica e Lombar",
    title_en: "Traumatic Injuries of the Thoracic and Lumbar Spine",
    title_es: "Lesiones Traumáticas de la Columna Torácica y Lumbar",
    authors: ["Alexandre Philippe Boss Jaccard", "Carlos Andres Amelunge Rodriguez"],
    summary_pt:
      "Classificação AO Spine das fraturas toracolombares, avaliação da integridade do complexo ligamentar posterior (PLC) e tomada de decisão entre descompressão aberta versus fixação percutânea.",
    summary_en:
      "AO Spine classification of thoracolumbar fractures, posterior ligamentous complex (PLC) evaluation, and critical decision-making between open decompression and percutaneous instrumentation.",
    summary_es:
      "Clasificación AO Spine de fracturas toracolumbares, evaluación del complejo ligamentario posterior (PLC) y decisión entre descompresión abierta frente a fijación percutánea.",
    chips_pt: ["AO Spine", "Complexo Ligamentar", "Fratura por Explosão", "Fixação Percutânea", "Junção Toracolombar"],
    chips_en: ["AO Spine", "PLC Integrity", "Burst Fracture", "Percutaneous Fixation", "Thoracolumbar Junction"],
    chips_es: ["AO Spine", "Complejo Ligamentario", "Fractura por Estallido", "Fijación Percutánea", "Unión Toracolumbar"],
  },
  6: {
    capituloNum: 28,
    title_pt: "Escoliose de Início Precoce",
    title_en: "Early-Onset Scoliosis",
    title_es: "Escoliosis de Inicio Temprano",
    authors: ["Alexandre Fogaça Cristante", "Caio César Nogueira de Figueiredo"],
    summary_pt:
      "Manejo das deformidades vertebrais antes dos 10 anos de idade. Estratégias para preservar o potencial de crescimento da coluna torácica e permitir o desenvolvimento alveolar pulmonar.",
    summary_en:
      "Management of progressive spinal deformities in children under 10 years. Growth-friendly techniques designed to protect thoracic growth and pulmonary alveolar development.",
    summary_es:
      "Manejo de deformidades de columna antes de los 10 años. Técnicas para preservar el crecimiento vertebral torácico y permitir el desarrollo alveolar pulmonar.",
    chips_pt: ["Escoliose Infantil", "Hastes de Crescimento", "Função Pulmonar", "Gesso Seriado", "Deformidade Pediátrica"],
    chips_en: ["Early-Onset Scoliosis", "Growing Rods", "Pulmonary Function", "Serial Casting", "Pediatric Deformity"],
    chips_es: ["Escoliosis Infantil", "Barras de Crecimiento", "Función Pulmonar", "Yeso Seriador", "Deformidad Pediátrica"],
  },
  7: {
    capituloNum: 29,
    title_pt: "Tratamento Não Cirúrgico das Escolioses",
    title_en: "Non-Surgical Treatment of Scoliosis",
    title_es: "Tratamiento No Quirúrgico de las Escoliosis",
    authors: ["Túlio Albuquerque de Moura Rangel", "Marcelo Paulo Melo de Souza"],
    summary_pt:
      "Indicações, biomecânica e acompanhamento do uso de coletes na escoliose idiopática do adolescente (EIA). Critérios SOSORT, correção tridimensional e papel dos exercícios fisioterapêuticos específicos.",
    summary_en:
      "Indications, biomechanics, and brace compliance in adolescent idiopathic scoliosis (AIS). SOSORT criteria, three-dimensional correction, and physiotherapeutic scoliosis-specific exercises.",
    summary_es:
      "Indicaciones, biomecánica y seguimiento con corsés en escoliosis idiopática del adolescente (EIA). Criterios SOSORT, corrección tridimensional y ejercicios fisioterapéuticos.",
    chips_pt: ["Colete TLSO", "SOSORT", "Tratamento Conservador", "EIA", "Maturação Esquelética"],
    chips_en: ["TLSO Bracing", "SOSORT", "Conservative Care", "AIS", "Skeletal Maturity"],
    chips_es: ["Corsé TLSO", "SOSORT", "Tratamiento Conservador", "EIA", "Maduración Esquelética"],
  },
  8: {
    capituloNum: 34,
    title_pt: "Escoliose Idiopática do Adolescente",
    title_en: "Adolescent Idiopathic Scoliosis",
    title_es: "Escoliosis Idiopática del Adolescente",
    authors: ["Helton L. A. Defino", "Matheus Pippa Defino"],
    summary_pt:
      "Etiologia, diagnóstico diferencial e planejamento cirúrgico minucioso. Aplicação da classificação de Lenke para definição dos níveis de fusão, poupando segmentos móveis lombares.",
    summary_en:
      "Etiology, differential diagnosis, and surgical strategy in adolescent idiopathic scoliosis. Application of Lenke classification to determine fusion levels while sparing mobile lumbar segments.",
    summary_es:
      "Etiología, diagnóstico diferencial y planificación quirúrgica en escoliosis idiopática. Aplicación de la clasificación de Lenke para seleccionar niveles de fusión ahorrando movilidad lumbar.",
    chips_pt: ["Classificação de Lenke", "EIA", "Níveis de Fusão", "Vértebra Estável", "Alinhamento Coronal"],
    chips_en: ["Lenke Classification", "AIS", "Fusion Levels", "Stable Vertebra", "Coronal Alignment"],
    chips_es: ["Clasificación de Lenke", "EIA", "Niveles de Fusión", "Vértebra Estable", "Alineación Coronal"],
  },
  9: {
    capituloNum: 42,
    title_pt: "Fisiopatologia da Degeneração Discal",
    title_en: "Pathophysiology of Intervertebral Disc Degeneration",
    title_es: "Fisiopatología de la Degeneración Discal",
    authors: ["Orlando Righesso Neto", "Asdrubal Falavigna"],
    summary_pt:
      "Processo multifatorial da cascata degenerativa discal: disfunção celular da matriz extracelular, perda de hidratação, classificação de Pfirrmann, alterações de Modic e medicina regenerativa.",
    summary_en:
      "Multifactorial cascade of disc degeneration: cellular matrix breakdown, dehydration, Pfirrmann grading, Modic changes, and therapeutic horizons of regenerative medicine.",
    summary_es:
      "Cascada multifactorial de la degeneración discal: alteración de la matriz celular, deshidratación, clasificación de Pfirrmann, cambios de Modic y perspectivas en medicina regenerativa.",
    chips_pt: ["Degeneração Discal", "Pfirrmann", "Alterações de Modic", "Matriz Extracelular", "Medicina Regenerativa"],
    chips_en: ["Disc Degeneration", "Pfirrmann Grade", "Modic Changes", "Extracellular Matrix", "Regenerative Medicine"],
    chips_es: ["Degeneración Discal", "Pfirrmann", "Cambios de Modic", "Matriz Extracelular", "Medicina Regenerativa"],
  },
  10: {
    capituloNum: 47,
    title_pt: "Instabilidade Vertebral",
    title_en: "Vertebral Instability",
    title_es: "Inestabilidad Vertebral",
    authors: ["Edson Pudles", "Helton L. A. Defino"],
    summary_pt:
      "Instabilidade vertebral é um conceito biomecânico que não se traduz automaticamente em dor. Avaliação em carga (bipedestação), espondilolistese degenerativa e critérios de indicação para descompressão versus artrodese.",
    summary_en:
      "Vertebral instability is a biomechanical concept distinct from clinical pain alone. Weight-bearing dynamic imaging, degenerative spondylolisthesis, and precise indications for decompression versus arthrodesis.",
    summary_es:
      "La inestabilidad vertebral es un concepto biomecánico que no se traduce automáticamente en dolor. Evaluación en bipedestación, espondilolistesis degenerativa y criterios para descompresión frente a artrodesis.",
    chips_pt: ["Instabilidade Vertebral", "Espondilolistese", "Radiografia Funcional", "Descompressão", "Artrodese"],
    chips_en: ["Vertebral Instability", "Spondylolisthesis", "Functional X-ray", "Decompression", "Arthrodesis"],
    chips_es: ["Inestabilidad Vertebral", "Espondilolistesis", "Radiografía Funcional", "Descompresión", "Artrodesis"],
  },
};

interface HomeFeaturedDebateSectionProps {
  locale: Locale;
}

export default function HomeFeaturedDebateSection({ locale }: HomeFeaturedDebateSectionProps) {
  const liveThumbnails = useVimeoThumbnails(DEBATE_EPISODES);
  const [activeEpNumber, setActiveEpNumber] = useState<number>(() => {
    return getDefaultFeaturedEpisodeNumber();
  });

  // Atualização dinâmica em tempo real (ex: quando o relógio atinge 18h00 no dia de estreia)
  useEffect(() => {
    const timer = setInterval(() => {
      const currentDefault = getDefaultFeaturedEpisodeNumber();
      if (currentDefault !== activeEpNumber) {
        setActiveEpNumber(currentDefault);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [activeEpNumber]);

  const episode = getDebateEpisodeByNumber(activeEpNumber) || DEBATE_EPISODES[DEBATE_EPISODES.length - 1];
  const highlightData = CHAPTER_HIGHLIGHTS_BY_EPISODE[episode.numero] || {
    capituloNum: episode.capituloNum,
    title_pt: episode.capituloTitulo_pt,
    title_en: episode.capituloTitulo_en || episode.capituloTitulo_pt,
    title_es: episode.capituloTitulo_es || episode.capituloTitulo_pt,
    authors: episode.convidados.map((c) => c.nome),
    summary_pt: episode.descricao_pt,
    summary_en: episode.descricao_en || episode.descricao_pt,
    summary_es: episode.descricao_es || episode.descricao_pt,
    chips_pt: episode.tags.slice(0, 5),
    chips_en: episode.tags.slice(0, 5),
    chips_es: episode.tags.slice(0, 5),
  };

  const chapterTitle =
    locale === "en"
      ? highlightData.title_en
      : locale === "es"
      ? highlightData.title_es
      : highlightData.title_pt;

  const chapterSummary =
    locale === "en"
      ? highlightData.summary_en
      : locale === "es"
      ? highlightData.summary_es
      : highlightData.summary_pt;

  const chapterChips =
    locale === "en"
      ? highlightData.chips_en
      : locale === "es"
      ? highlightData.chips_es
      : highlightData.chips_pt;

  const episodeTitle =
    locale === "en"
      ? episode.titulo_en
      : locale === "es"
      ? episode.titulo_es
      : episode.titulo_pt;

  const episodeSubtitle =
    locale === "en"
      ? episode.subtitulo_en || episode.capituloTitulo_en
      : locale === "es"
      ? episode.subtitulo_es || episode.capituloTitulo_es
      : episode.subtitulo_pt || episode.capituloTitulo_pt;

  const episodeDescription =
    locale === "en"
      ? episode.descricao_en
      : locale === "es"
      ? episode.descricao_es
      : episode.descricao_pt;

  const t = {
    badge: locale === "en" ? "Chapter" : locale === "es" ? "Capítulo" : "Capítulo",
    btnSummary: locale === "en" ? "View chapter summary" : locale === "es" ? "Ver resumen del capítulo" : "Ver resumo do capítulo",
    btnRef: locale === "en" ? "View references" : locale === "es" ? "Ver referencias" : "Ver referências",
    videocastBadge: locale === "en" ? "TRATISE IN DEBATE" : locale === "es" ? "TRATADO EN DEBATE" : "TRATADO EM DEBATE",
    videocastKicker:
      locale === "en"
        ? "OFFICIAL SBC VIDEOCAST DERIVED FROM THE TREATISE CHAPTERS."
        : locale === "es"
        ? "VIDEOCAST OFICIAL DERIVADO DE LOS CAPÍTULOS DEL TRATADO."
        : "VIDEOCAST OFICIAL DERIVADO DOS CAPÍTULOS DO TRATADO.",
    watchEpisode: locale === "en" ? "Watch on Videocast" : locale === "es" ? "Ver en Videocast" : "Assistir no Videocast",
    listenSpotify: locale === "en" ? "Listen on Spotify" : locale === "es" ? "Escuchar en Spotify" : "Ouvir no Spotify",
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. DESTAQUE DE CAPÍTULO VINCULADO AO EPISÓDIO ATUAL DO VIDEOCAST */}
      {/* ========================================================================= */}
      <section id="capitulo" className="py-12 sm:py-16 bg-slate-50 relative overflow-hidden">
        <div className="shell">
          <div
            className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl p-6 sm:p-8 lg:p-10 text-white"
            style={{
              background:
                "radial-gradient(circle at 8% 25%, rgba(220, 20, 50, 0.55), transparent 38%), linear-gradient(110deg, #38173f 0%, #08295b 45%, #003875 100%)",
              boxShadow: "0 25px 60px rgba(0, 20, 55, 0.25)",
            }}
          >
            {/* Spine Graphic Background Overlay */}
            <img
              src="/assets/chapter-spine.png"
              alt=""
              className="absolute right-10 top-0 bottom-0 h-full w-auto max-w-[45%] object-contain pointer-events-none opacity-20 hidden md:block"
              style={{ mixBlendMode: "screen" }}
            />

            {/* Grid: 3 columns on Desktop / Clean stacked flow on Mobile */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* 1. Chapter Number Badge */}
              <div className="lg:col-span-2 flex flex-row lg:flex-col items-center justify-start lg:justify-center gap-3 lg:gap-1 pb-4 lg:pb-0 border-b lg:border-b-0 lg:border-r border-white/20 lg:pr-6">
                <span className="text-sm sm:text-base font-bold uppercase tracking-wider text-slate-200">
                  {t.badge}
                </span>
                <strong className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-none">
                  {highlightData.capituloNum}
                </strong>
              </div>

              {/* 2. Chapter Content & Chips */}
              <div className="lg:col-span-7 flex flex-col justify-center lg:px-2">
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white leading-tight tracking-tight mb-3">
                  {chapterTitle}
                </h2>

                {/* Authors with red squares */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm font-semibold text-slate-200 mb-3">
                  {highlightData.authors.map((autor, idx) => (
                    <span key={idx} className="inline-flex items-center gap-2">
                      <span className="w-2 h-2 rounded-[2px] bg-[#f52238] inline-block" />
                      {autor}
                    </span>
                  ))}
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mb-4 font-normal">
                  {chapterSummary}
                </p>

                {/* Keyword Chips */}
                <div className="flex flex-wrap gap-2">
                  {chapterChips.map((chip, index) => (
                    <span
                      key={index}
                      className="text-xs font-semibold px-3 py-1 rounded-md bg-white/10 hover:bg-white/15 border border-white/25 text-white transition-colors"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3. Action Buttons */}
              <div className="lg:col-span-3 flex flex-col gap-3 justify-center w-full pt-2 lg:pt-0">
                <Link
                  href={`/${locale}/capitulo/${highlightData.capituloNum}`}
                  className="w-full h-12 px-5 rounded-xl bg-[#f52238] hover:bg-[#db152a] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all active:scale-[0.98]"
                  style={{ textDecoration: "none" }}
                >
                  <span>{t.btnSummary}</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href={`/${locale}/referencias`}
                  className="w-full h-12 px-5 rounded-xl bg-[#001f4d]/60 hover:bg-[#001f4d]/90 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 border border-white/30 backdrop-blur-sm transition-all active:scale-[0.98]"
                  style={{ textDecoration: "none" }}
                >
                  <span>{t.btnRef}</span>
                  <FileText size={16} className="text-sky-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. VIDEOCAST TRATADO EM DEBATE COM PLAYER E INFORMAÇÕES SINCRONIZADAS */}
      {/* ========================================================================= */}
      <section id="debate" className="py-10 sm:py-16 bg-slate-50 relative">
        <div className="shell">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* 1. Player do Vimeo Customizado e Oficial */}
              <div className="lg:col-span-6 order-1 flex justify-center w-full">
                <CustomVimeoPlayer
                  key={episode.id}
                  url={episode.vimeoUrl}
                  videoId={episode.vimeoId}
                  thumbnailUrl={
                    liveThumbnails[episode.vimeoId] ||
                    episode.vimeoThumbnailUrl ||
                    episode.thumbnailUrl
                  }
                  premiereDate={episode.dataEstreia}
                  spotifyUrl={episode.spotifyUrl}
                  title={episodeTitle}
                  guests={episode.convidados.map((c) => c.nome).join(" & ")}
                  locale={locale}
                  autoplay={false}
                  showPopOutButton={true}
                />
              </div>

              {/* 2. Textos e Informações do Episódio */}
              <div className="lg:col-span-6 order-2 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#093c78] text-xs font-bold uppercase tracking-wider mb-3.5 w-max">
                  <span className="w-2 h-2 rounded-full bg-[#f52238] animate-pulse" />
                  <span>{t.videocastBadge}</span>
                </div>

                <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wide mb-1.5">
                  {t.videocastKicker}
                </p>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#001026] leading-tight tracking-tight mb-2">
                  {episodeTitle}
                </h3>

                <p className="text-sm sm:text-base font-semibold text-[#093c78] mb-3">
                  {episodeSubtitle}
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mb-6">
                  {episodeDescription}
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`/${locale}/debate?ep=${episode.numero}`}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#002654] hover:bg-[#001838] text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-950/25 transition-all active:scale-[0.98]"
                    style={{ textDecoration: "none" }}
                  >
                    <span>{t.watchEpisode}</span>
                    <span className="text-base font-bold">→</span>
                  </Link>

                  <a
                    href={episode.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#1DB954] hover:bg-[#1ed760] text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    style={{ textDecoration: "none" }}
                  >
                    <SpotifyIcon size={20} color="#ffffff" />
                    <span>{t.listenSpotify}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
