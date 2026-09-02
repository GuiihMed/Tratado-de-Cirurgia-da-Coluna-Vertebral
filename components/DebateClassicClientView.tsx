"use client";

import { useState } from "react";
import Link from "next/link";
import { Locale } from "@/lib/types";
import { DEBATE_EPISODES, DebateEpisode } from "@/lib/data/debate-episodes";
import CustomVimeoPlayer from "@/components/CustomVimeoPlayer";
import SpotifyIcon from "@/components/icons/SpotifyIcon";
import {
  Play,
  BookOpen,
  Users,
  Calendar,
  Clock,
  Share2,
  Check,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Tv,
  Layers,
  Radio,
} from "lucide-react";

interface DebateClassicClientViewProps {
  locale: Locale;
  initialEpisodeNumber?: number;
}

export default function DebateClassicClientView({
  locale,
  initialEpisodeNumber = 1,
}: DebateClassicClientViewProps) {
  const [activeEpNumber, setActiveEpNumber] = useState<number>(initialEpisodeNumber);
  const [copiedLink, setCopiedLink] = useState(false);

  const activeEpisode: DebateEpisode =
    DEBATE_EPISODES.find((ep) => ep.numero === activeEpNumber) || DEBATE_EPISODES[0];

  const title =
    locale === "en"
      ? activeEpisode.titulo_en
      : locale === "es"
      ? activeEpisode.titulo_es
      : activeEpisode.titulo_pt;

  const subtitle =
    locale === "en"
      ? activeEpisode.subtitulo_en
      : locale === "es"
      ? activeEpisode.subtitulo_es
      : activeEpisode.subtitulo_pt;

  const description =
    locale === "en"
      ? activeEpisode.descricao_en
      : locale === "es"
      ? activeEpisode.descricao_es
      : activeEpisode.descricao_pt;

  const chapterTitle =
    locale === "en"
      ? activeEpisode.capituloTitulo_en
      : locale === "es"
      ? activeEpisode.capituloTitulo_es
      : activeEpisode.capituloTitulo_pt;

  const sectionTitle =
    locale === "en"
      ? activeEpisode.secaoTitulo_en
      : locale === "es"
      ? activeEpisode.secaoTitulo_es
      : activeEpisode.secaoTitulo_pt;

  const highlights =
    locale === "en"
      ? activeEpisode.destaques_en
      : locale === "es"
      ? activeEpisode.destaques_es
      : activeEpisode.destaques_pt;

  const handleShare = () => {
    if (typeof window !== "undefined") {
      const url = window.location.href;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      }
    }
  };

  return (
    <div className="shell px-3.5 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* ========================================================================= */}
        {/* COLUNA ESQUERDA: EPISÓDIO EM DESTAQUE / PRINCIPAL (8 COLS) */}
        {/* ========================================================================= */}
        <div className="lg:col-span-8 flex flex-col gap-4 sm:gap-6">
          {/* Main Video Player Container (Classic Dark Navy Frame) */}
          <div
            className="rounded-xl sm:rounded-2xl bg-[#001026] border border-[#00224d] shadow-[0_12px_35px_rgba(0,20,50,0.15)] overflow-hidden"
          >
            {/* Top Bar on Player */}
            <div
              className="flex items-center justify-between gap-2.5 sm:gap-3 px-3 py-2 sm:px-4 sm:py-2.5 bg-[#001633] border-b border-white/10 flex-wrap sm:flex-nowrap"
            >
              {/* Left: Episode Badge + Duration */}
              <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#f52238] text-[11px] font-bold text-white uppercase tracking-wide whitespace-nowrap shrink-0 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>
                    {locale === "en"
                      ? `Episode ${activeEpisode.numero < 10 ? `0${activeEpisode.numero}` : activeEpisode.numero}`
                      : locale === "es"
                      ? `Episodio ${activeEpisode.numero < 10 ? `0${activeEpisode.numero}` : activeEpisode.numero}`
                      : `Episódio ${activeEpisode.numero < 10 ? `0${activeEpisode.numero}` : activeEpisode.numero}`}
                  </span>
                  <span className="hidden md:inline font-semibold opacity-90">
                    {locale === "en" ? "• Now Playing" : locale === "es" ? "• En Reproducción" : "• Em Reprodução"}
                  </span>
                </span>
                <span className="text-xs sm:text-sm text-slate-300 font-semibold whitespace-nowrap shrink-0">
                  {activeEpisode.duracao} min
                </span>
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-2 shrink-0">
                {activeEpisode.spotifyUrl && (
                  <a
                    href={activeEpisode.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md bg-[#1DB954] hover:bg-[#1ed760] text-white text-xs font-bold shadow-sm transition-all active:scale-95 no-underline whitespace-nowrap"
                    title="Ouvir no Spotify"
                  >
                    <SpotifyIcon size={14} color="#ffffff" />
                    <span>Spotify</span>
                  </a>
                )}
                <button
                  onClick={handleShare}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition-all cursor-pointer active:scale-95 whitespace-nowrap"
                >
                  {copiedLink ? (
                    <>
                      <Check size={13} className="text-emerald-400" />
                      <span className="text-emerald-300">
                        {locale === "en" ? "Copied!" : locale === "es" ? "¡Copiado!" : "Copiado!"}
                      </span>
                    </>
                  ) : (
                    <>
                      <Share2 size={13} />
                      <span>{locale === "en" ? "Share" : locale === "es" ? "Compartir" : "Compartilhar"}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Custom Vimeo Player */}
            <CustomVimeoPlayer
              key={activeEpisode.id}
              url={activeEpisode.vimeoUrl}
              videoId={activeEpisode.vimeoId}
              locale={locale}
              autoplay={false}
              showPopOutButton={true}
            />
          </div>

          {/* Episode Info Card (Classic Light Design, Responsive Padding) */}
          <div
            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-[#dce4ed] shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
          >
            {/* Title & Badge */}
            <div className="mb-4 sm:mb-5">
              <div
                className="inline-flex items-center gap-1.5 sm:gap-2 text-[10.5px] sm:text-xs font-bold text-[#f52238] uppercase tracking-wider mb-2 flex-wrap"
              >
                <span>{locale === "en" ? "Official SBC Videocast" : locale === "es" ? "Videocast Oficial SBC" : "Videocast Oficial SBC"}</span>
                <span>•</span>
                <span>{locale === "en" ? `Section ${activeEpisode.secaoId}: ${sectionTitle}` : locale === "es" ? `Sección ${activeEpisode.secaoId}: ${sectionTitle}` : `Seção ${activeEpisode.secaoId}: ${sectionTitle}`}</span>
              </div>

              <h1
                className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#001733] leading-tight tracking-tight mb-2"
              >
                {title}
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed m-0 font-medium">
                {subtitle}
              </p>
            </div>

            {/* Overview Box with Red Left Accent Border (Classic SBC Pattern) */}
            <div
              className="p-3.5 sm:p-5 rounded-lg sm:rounded-xl bg-[#f8fafc] border-l-4 border-l-[#f52238] border border-slate-200 mb-5 sm:mb-6"
            >
              <h3 className="text-xs sm:text-[13px] font-bold uppercase text-[#f52238] tracking-wider mb-1.5">
                {locale === "en" ? "Episode Overview & Clinical Debate" : locale === "es" ? "Visión General y Debate Clínico" : "Visão Geral e Objetivos do Debate"}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700 m-0">
                {description}
              </p>
            </div>

            {/* Scientific Highlights List */}
            {highlights && highlights.length > 0 && (
              <div className="mb-5 sm:mb-7">
                <h4 className="text-sm sm:text-base font-bold text-[#001733] mb-3 flex items-center gap-2">
                  <Sparkles size={16} className="text-amber-500" />
                  <span>
                    {locale === "en"
                      ? "Key Scientific Points Covered"
                      : locale === "es"
                      ? "Puntos Científicos Clave Tratados"
                      : "Tópicos Científicos Essenciais Debatidos"}
                  </span>
                </h4>
                <div className="flex flex-col gap-2 sm:gap-2.5">
                  {highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-[#f8fafc] border border-slate-200"
                    >
                      <span
                        className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full bg-[#f52238] text-white text-[10px] sm:text-[11px] font-bold grid place-items-center shrink-0 mt-0.5"
                      >
                        {i + 1}
                      </span>
                      <span className="text-xs sm:text-[13.5px] text-slate-800 leading-normal">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Guests & Authors Card */}
            <div className="mb-5 sm:mb-7">
              <h4 className="text-sm sm:text-base font-bold text-[#001733] mb-3 flex items-center gap-2">
                <Users size={16} className="text-sky-600" />
                <span>
                  {locale === "en" ? "Participating Authors & Specialists" : locale === "es" ? "Autores y Especialistas Participantes" : "Especialistas e Autores Convidados"}
                </span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {activeEpisode.convidados.map((g, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 sm:gap-3.5 p-3 sm:p-3.5 rounded-xl bg-white border border-[#dce4ed] shadow-sm"
                  >
                    <img
                      src={g.foto_url || "/assets/avatar-placeholder.png"}
                      alt={g.nome}
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#f52238] shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <strong className="text-xs sm:text-sm font-bold text-[#001733] block mb-0.5 truncate">
                        {g.nome}
                      </strong>
                      <span className="text-[11px] sm:text-xs text-slate-500 block leading-tight mb-1 truncate">
                        {g.cargo}
                      </span>
                      {g.slug && (
                        <Link
                          href={`/${locale}/autor/${g.slug}`}
                          className="text-[11px] sm:text-xs font-bold text-[#f52238] hover:underline inline-flex items-center gap-1 no-underline"
                        >
                          <span>{locale === "en" ? "View bio" : locale === "es" ? "Ver perfil" : "Ver biografia"}</span>
                          <span>→</span>
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Chapter Callout Card (Responsive Stack on Mobile) */}
            <div
              className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#052b5b] to-[#001733] text-white"
            >
              <div className="min-w-0 flex-1">
                <span
                  className="inline-block px-2.5 py-0.5 rounded bg-[#f52238] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2"
                >
                  {locale === "en" ? "Related Chapter" : locale === "es" ? "Capítulo Relacionado" : "Capítulo Relacionado na Obra"}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white mb-1 leading-snug">
                  {locale === "en" ? `Chapter ${activeEpisode.capituloNum}: ${chapterTitle}` : locale === "es" ? `Capítulo ${activeEpisode.capituloNum}: ${chapterTitle}` : `Capítulo ${activeEpisode.capituloNum}: ${chapterTitle}`}
                </h4>
                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed m-0">
                  {locale === "en"
                    ? "Study clinical objectives, surgical steps, and referenced literature for this chapter."
                    : locale === "es"
                    ? "Consulte los objetivos clínicos, pasos quirúrgicos y referencias del capítulo."
                    : "Consulte os objetivos clínicos, esquemas anatômicos e referências oficiais do capítulo."}
                </p>
              </div>

              <div className="w-full md:w-auto flex flex-col xs:flex-row gap-2.5 sm:gap-3 shrink-0">
                {activeEpisode.spotifyUrl && (
                  <a
                    href={activeEpisode.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#1DB954] hover:bg-[#1ed760] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-[0.98] no-underline"
                  >
                    <SpotifyIcon size={16} color="#ffffff" />
                    <span>{locale === "en" ? "Listen on Spotify" : locale === "es" ? "Escuchar en Spotify" : "Ouvir no Spotify"}</span>
                  </a>
                )}

                <Link
                  href={`/${locale}/capitulo/${activeEpisode.capituloNum}`}
                  className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#f52238] hover:bg-[#db152a] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-[0.98] no-underline"
                >
                  <span>{locale === "en" ? `Access Chapter ${activeEpisode.capituloNum}` : locale === "es" ? `Ver Capítulo ${activeEpisode.capituloNum}` : `Acessar Capítulo ${activeEpisode.capituloNum}`}</span>
                  <ExternalLink size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COLUNA LATERAL / PLAYLIST (4 COLS) */}
        {/* ========================================================================= */}
        <aside className="lg:col-span-4 flex flex-col gap-4 sm:gap-6">
          {/* Playlist Card */}
          <div
            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#dce4ed] shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Radio size={16} className="text-red-600 animate-pulse" />
                <h3 className="text-base sm:text-lg font-bold text-[#001733] m-0">
                  {locale === "en" ? "Series Episodes" : locale === "es" ? "Episodios de la Serie" : "Episódios da Série"}
                </h3>
              </div>
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600"
              >
                {DEBATE_EPISODES.length} {locale === "en" ? "Ep." : "Ep."}
              </span>
            </div>

            {/* List of Episodes */}
            <div className="flex flex-col gap-2.5">
              {/* Episódio 1 (Atual) */}
              {DEBATE_EPISODES.map((ep) => {
                const isActive = ep.numero === activeEpNumber;
                const epTitle =
                  locale === "en" ? ep.titulo_en : locale === "es" ? ep.titulo_es : ep.titulo_pt;

                return (
                  <div
                    key={ep.id}
                    onClick={() => setActiveEpNumber(ep.numero)}
                    className={`p-3 sm:p-3.5 rounded-xl cursor-pointer transition-all active:scale-[0.99] select-none ${
                      isActive
                        ? "bg-[#f0f7ff] border-2 border-[#f52238] shadow-sm"
                        : "bg-[#f8fafc] border border-slate-200 hover:bg-[#f1f5f9] hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className={`text-[10.5px] font-bold uppercase px-2 py-0.5 rounded whitespace-nowrap shrink-0 ${
                          isActive ? "bg-[#f52238] text-white" : "bg-slate-200 text-slate-700"
                        }`}
                      >
                        {isActive
                          ? (locale === "en" ? "▶ Now Playing" : locale === "es" ? "▶ En Reproducción" : "▶ Reproduzindo Agora")
                          : (locale === "en" ? `Episode ${ep.numero}` : locale === "es" ? `Episodio ${ep.numero}` : `Episódio ${ep.numero}`)}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">
                        {ep.duracao} min
                      </span>
                    </div>

                    <h4
                      className={`text-xs sm:text-sm font-bold leading-snug mb-1 ${
                        isActive ? "text-[#001733]" : "text-slate-700"
                      }`}
                    >
                      {epTitle}
                    </h4>

                    <div className="text-[11px] sm:text-xs text-slate-500 truncate">
                      <span>{ep.convidados.map((c) => c.nome.replace("Dr. ", "")).join(" & ")}</span>
                    </div>
                  </div>
                );
              })}

              {/* Placeholder / Empty State for Future Episodes */}
              <div
                className="p-3.5 sm:p-4 rounded-xl bg-[#f8fafc] border border-dashed border-slate-300 text-center flex flex-col items-center gap-2 mt-1"
              >
                <div
                  className="w-8 h-8 rounded-full bg-slate-200 grid place-items-center text-slate-600"
                >
                  <Tv size={15} />
                </div>

                <div>
                  <strong className="text-xs sm:text-[13px] text-slate-700 block mb-0.5">
                    {locale === "en"
                      ? "Upcoming Episodes in Production"
                      : locale === "es"
                      ? "Próximos Episodios en Producción"
                      : "Próximos Episódios em Produção"}
                  </strong>
                  <p className="text-[11px] sm:text-xs text-slate-500 m-0 leading-relaxed">
                    {locale === "en"
                      ? "New episodes exploring the other chapters are currently being recorded by SBC."
                      : locale === "es"
                      ? "Nuevos episodios explorando los otros capítulos están siendo grabados por la SBC."
                      : "Novos episódios abordando os demais capítulos do Tratado serão disponibilizados em breve."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Institutional Info Card */}
          <div
            className="bg-[#001733] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
          >
            <h4 className="text-sm sm:text-base font-bold text-white mb-2">
              {locale === "en" ? "About the Videocast" : locale === "es" ? "Sobre el Videocast" : "Sobre o Tratado em Debate"}
            </h4>
            <p className="text-xs sm:text-[13px] leading-relaxed text-slate-300 mb-4">
              {locale === "en"
                ? "The official scientific videocast of the Brazilian Spine Society provides clinical debates and practical surgical insights directly with chapter authors."
                : locale === "es"
                ? "El videocast científico oficial de la Sociedade Brasileira de Coluna ofrece debates clínicos y enfoques prácticos con los autores de los capítulos."
                : "O videocast científico oficial da Sociedade Brasileira de Coluna traz debates aprofundados e condutas cirúrgicas práticas diretamente com os autores de cada capítulo."}
            </p>

            <a
              href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#f52238] hover:bg-[#db152a] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-[0.98] no-underline"
            >
              <span>{locale === "en" ? "Acquire Printed Book" : locale === "es" ? "Comprar Tratado Impreso" : "Adquirir Tratado Impresso"}</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
