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
    <div className="shell" style={{ padding: "40px 0 80px" }}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ========================================================================= */}
        {/* COLUNA ESQUERDA: EPISÓDIO EM DESTAQUE / PRINCIPAL (8 COLS) */}
        {/* ========================================================================= */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Main Video Player Container (Classic Dark Navy Frame) */}
          <div
            style={{
              background: "#001026",
              borderRadius: 14,
              border: "1px solid #00224d",
              boxShadow: "0 12px 35px rgba(0, 20, 50, 0.15)",
              overflow: "hidden",
            }}
          >
            {/* Top Bar on Player */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 18px",
                background: "#001633",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "4px 10px",
                    borderRadius: 4,
                    background: "#f52238",
                    fontSize: 11.5,
                    fontWeight: 700,
                    color: "#ffffff",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span>
                    {locale === "en"
                      ? `Episode ${activeEpisode.numero < 10 ? `0${activeEpisode.numero}` : activeEpisode.numero} • Now Playing`
                      : locale === "es"
                      ? `Episodio ${activeEpisode.numero < 10 ? `0${activeEpisode.numero}` : activeEpisode.numero} • En Reproducción`
                      : `Episódio ${activeEpisode.numero < 10 ? `0${activeEpisode.numero}` : activeEpisode.numero} • Em Reprodução`}
                  </span>
                </span>
                <span style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.8)", fontWeight: 600 }}>
                  {activeEpisode.duracao} min
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {activeEpisode.spotifyUrl && (
                  <a
                    href={activeEpisode.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 12px",
                      borderRadius: 6,
                      background: "#1DB954",
                      color: "#fff",
                      fontSize: 12,
                      fontWeight: 700,
                      textDecoration: "none",
                      boxShadow: "0 2px 8px rgba(29, 185, 84, 0.4)",
                      transition: "all 0.2s ease",
                    }}
                    className="hover:bg-[#1ed760] hover:scale-105"
                    title="Ouvir no Spotify"
                  >
                    <SpotifyIcon size={15} color="#ffffff" />
                    <span>Spotify</span>
                  </a>
                )}
                <button
                  onClick={handleShare}
                  type="button"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "6px 12px",
                    borderRadius: 6,
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  className="hover:bg-white/20"
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

          {/* Episode Info Card (Classic Light Design) */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: 14,
              padding: "32px",
              border: "1px solid #dce4ed",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
            }}
          >
            {/* Title & Badge */}
            <div style={{ marginBottom: 20 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#f52238",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: 8,
                }}
              >
                <span>{locale === "en" ? "Official SBC Videocast" : locale === "es" ? "Videocast Oficial SBC" : "Videocast Oficial SBC"}</span>
                <span>•</span>
                <span>{locale === "en" ? `Section ${activeEpisode.secaoId}: ${sectionTitle}` : locale === "es" ? `Sección ${activeEpisode.secaoId}: ${sectionTitle}` : `Seção ${activeEpisode.secaoId}: ${sectionTitle}`}</span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(24px, 2.8vw, 34px)",
                  fontWeight: 800,
                  color: "#001733",
                  lineHeight: 1.25,
                  margin: "0 0 10px",
                  letterSpacing: "-0.02em",
                }}
              >
                {title}
              </h1>

              <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.55, margin: 0, fontWeight: 500 }}>
                {subtitle}
              </p>
            </div>

            {/* Overview Box with Red Left Accent Border (Classic SBC Pattern) */}
            <div
              style={{
                background: "#f8fafc",
                borderRadius: 10,
                padding: "20px 24px",
                borderLeft: "4px solid #f52238",
                borderTop: "1px solid #e2e8f0",
                borderRight: "1px solid #e2e8f0",
                borderBottom: "1px solid #e2e8f0",
                marginBottom: 26,
              }}
            >
              <h3 style={{ fontSize: 13.5, fontWeight: 700, textTransform: "uppercase", color: "#f52238", letterSpacing: "0.05em", margin: "0 0 8px" }}>
                {locale === "en" ? "Episode Overview & Clinical Debate" : locale === "es" ? "Visión General y Debate Clínico" : "Visão Geral e Objetivos do Debate"}
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "#334155", margin: 0 }}>
                {description}
              </p>
            </div>

            {/* Scientific Highlights List */}
            {highlights && highlights.length > 0 && (
              <div style={{ marginBottom: 28 }}>
                <h4 style={{ fontSize: 16, fontWeight: 700, color: "#001733", margin: "0 0 14px", display: "flex", alignItems: "center", gap: 8 }}>
                  <Sparkles size={17} className="text-amber-500" />
                  <span>
                    {locale === "en"
                      ? "Key Scientific Points Covered"
                      : locale === "es"
                      ? "Puntos Científicos Clave Tratados"
                      : "Tópicos Científicos Essenciais Debatidos"}
                  </span>
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {highlights.map((h, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        padding: "10px 14px",
                        borderRadius: 8,
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                      }}
                    >
                      <span
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: "50%",
                          background: "#f52238",
                          color: "#ffffff",
                          display: "grid",
                          placeItems: "center",
                          fontSize: 11,
                          fontWeight: 800,
                          flexShrink: 0,
                          marginTop: 1,
                        }}
                      >
                        {i + 1}
                      </span>
                      <span style={{ fontSize: 13.5, color: "#1e293b", lineHeight: 1.55 }}>
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Guests & Authors Card */}
            <div style={{ marginBottom: 28 }}>
              <h4 style={{ fontSize: 16, fontWeight: 700, color: "#001733", margin: "0 0 14px", display: "flex", alignItems: "center", gap: 8 }}>
                <Users size={17} className="text-sky-600" />
                <span>
                  {locale === "en" ? "Participating Authors & Specialists" : locale === "es" ? "Autores y Especialistas Participantes" : "Especialistas e Autores Convidados"}
                </span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeEpisode.convidados.map((g, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "14px 16px",
                      borderRadius: 10,
                      background: "#ffffff",
                      border: "1px solid #dce4ed",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.03)",
                    }}
                  >
                    <img
                      src={g.foto_url || "/assets/avatar-placeholder.png"}
                      alt={g.nome}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "2px solid #f52238",
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <strong style={{ fontSize: 14, color: "#001733", display: "block", marginBottom: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {g.nome}
                      </strong>
                      <span style={{ fontSize: 12, color: "#64748b", display: "block", lineHeight: 1.3, marginBottom: 4 }}>
                        {g.cargo}
                      </span>
                      {g.slug && (
                        <Link
                          href={`/${locale}/autor/${g.slug}`}
                          style={{
                            fontSize: 11.5,
                            fontWeight: 700,
                            color: "#f52238",
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 3,
                          }}
                          className="hover:underline"
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

            {/* Related Chapter Callout Card (Classic Blue Background) */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 18,
                padding: "20px 24px",
                borderRadius: 12,
                background: "linear-gradient(135deg, #052b5b 0%, #001733 100%)",
                color: "#ffffff",
                flexWrap: "wrap",
              }}
            >
              <div style={{ minWidth: 0, flex: 1 }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "3px 8px",
                    borderRadius: 4,
                    background: "#f52238",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    marginBottom: 6,
                  }}
                >
                  {locale === "en" ? "Related Chapter" : locale === "es" ? "Capítulo Relacionado" : "Capítulo Relacionado na Obra"}
                </span>
                <h4 style={{ fontSize: 16, fontWeight: 700, color: "#ffffff", margin: "0 0 4px" }}>
                  {locale === "en" ? `Chapter ${activeEpisode.capituloNum}: ${chapterTitle}` : locale === "es" ? `Capítulo ${activeEpisode.capituloNum}: ${chapterTitle}` : `Capítulo ${activeEpisode.capituloNum}: ${chapterTitle}`}
                </h4>
                <p style={{ fontSize: 12.5, color: "#cbd5e1", margin: 0 }}>
                  {locale === "en"
                    ? "Study clinical objectives, surgical steps, and referenced literature for this chapter."
                    : locale === "es"
                    ? "Consulte los objetivos clínicos, pasos quirúrgicos y referencias del capítulo."
                    : "Consulte os objetivos clínicos, esquemas anatômicos e referências oficiais do capítulo."}
                </p>
              </div>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                {activeEpisode.spotifyUrl && (
                  <a
                    href={activeEpisode.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "10px 18px",
                      borderRadius: 6,
                      background: "#1DB954",
                      color: "#ffffff",
                      fontSize: 13,
                      fontWeight: 700,
                      textDecoration: "none",
                      boxShadow: "0 2px 10px rgba(29, 185, 84, 0.4)",
                      transition: "all 0.2s ease",
                    }}
                    className="hover:bg-[#1ed760] hover:scale-105"
                  >
                    <SpotifyIcon size={18} color="#ffffff" />
                    <span>{locale === "en" ? "Listen on Spotify" : locale === "es" ? "Escuchar en Spotify" : "Ouvir no Spotify"}</span>
                  </a>
                )}

                <Link
                  href={`/${locale}/capitulo/${activeEpisode.capituloNum}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 18px",
                    borderRadius: 6,
                    background: "#f52238",
                    color: "#ffffff",
                    fontSize: 13,
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "0 2px 10px rgba(245, 34, 56, 0.4)",
                  }}
                  className="hover:bg-[#db152a]"
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
        <aside className="lg:col-span-4 flex flex-col gap-6">
          {/* Playlist Card */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: 14,
              padding: "24px",
              border: "1px solid #dce4ed",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, borderBottom: "1px solid #e2e8f0", paddingBottom: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Radio size={18} className="text-red-600 animate-pulse" />
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#001733", margin: 0 }}>
                  {locale === "en" ? "Series Episodes" : locale === "es" ? "Episodios de la Serie" : "Episódios da Série"}
                </h3>
              </div>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  padding: "3px 8px",
                  borderRadius: 6,
                  background: "#f1f5f9",
                  color: "#475569",
                }}
              >
                {DEBATE_EPISODES.length} {locale === "en" ? "Ep." : "Ep."}
              </span>
            </div>

            {/* List of Episodes */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {/* Episódio 1 (Atual) */}
              {DEBATE_EPISODES.map((ep) => {
                const isActive = ep.numero === activeEpNumber;
                const epTitle =
                  locale === "en" ? ep.titulo_en : locale === "es" ? ep.titulo_es : ep.titulo_pt;

                return (
                  <div
                    key={ep.id}
                    onClick={() => setActiveEpNumber(ep.numero)}
                    style={{
                      padding: "14px",
                      borderRadius: 10,
                      background: isActive ? "#f0f7ff" : "#f8fafc",
                      border: isActive ? "2px solid #f52238" : "1px solid #e2e8f0",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                    className={!isActive ? "hover:bg-[#f1f5f9] hover:border-slate-300" : ""}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          padding: "2px 6px",
                          borderRadius: 4,
                          background: isActive ? "#f52238" : "#e2e8f0",
                          color: isActive ? "#ffffff" : "#475569",
                        }}
                      >
                        {isActive
                          ? (locale === "en" ? "▶ Now Playing" : locale === "es" ? "▶ En Reproducción" : "▶ Reproduzindo Agora")
                          : (locale === "en" ? `Episode ${ep.numero}` : locale === "es" ? `Episodio ${ep.numero}` : `Episódio ${ep.numero}`)}
                      </span>
                      <span style={{ fontSize: 12, color: "#64748b", fontWeight: 600 }}>
                        {ep.duracao}
                      </span>
                    </div>

                    <h4
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: isActive ? "#001733" : "#334155",
                        margin: "0 0 4px",
                        lineHeight: 1.35,
                      }}
                    >
                      {epTitle}
                    </h4>

                    <div style={{ fontSize: 12, color: "#64748b" }}>
                      <span>{ep.convidados.map((c) => c.nome.replace("Dr. ", "")).join(" & ")}</span>
                    </div>
                  </div>
                );
              })}

              {/* Placeholder / Empty State for Future Episodes */}
              <div
                style={{
                  padding: "20px 16px",
                  borderRadius: 10,
                  background: "#f8fafc",
                  border: "1px dashed #cbd5e1",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 4,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "#e2e8f0",
                    display: "grid",
                    placeItems: "center",
                    color: "#64748b",
                  }}
                >
                  <Tv size={16} />
                </div>

                <div>
                  <strong style={{ fontSize: 13, color: "#334155", display: "block", marginBottom: 3 }}>
                    {locale === "en"
                      ? "Upcoming Episodes in Production"
                      : locale === "es"
                      ? "Próximos Episodios en Producción"
                      : "Próximos Episódios em Produção"}
                  </strong>
                  <p style={{ fontSize: 12, color: "#64748b", margin: 0, lineHeight: 1.45 }}>
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
            style={{
              background: "#001733",
              borderRadius: 14,
              padding: "24px",
              color: "#ffffff",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h4 style={{ fontSize: 15, fontWeight: 700, color: "#ffffff", margin: "0 0 8px" }}>
              {locale === "en" ? "About the Videocast" : locale === "es" ? "Sobre el Videocast" : "Sobre o Tratado em Debate"}
            </h4>
            <p style={{ fontSize: 12.5, lineHeight: 1.6, color: "#cbd5e1", margin: "0 0 16px" }}>
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
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                width: "100%",
                padding: "10px 14px",
                borderRadius: 6,
                background: "#f52238",
                color: "#ffffff",
                fontSize: 13,
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              className="hover:bg-[#db152a]"
            >
              <span>{locale === "en" ? "Acquire Printed Book" : locale === "es" ? "Comprar Tratado Impreso" : "Adquirir Tratado Impresso"}</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
