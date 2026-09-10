"use client";

import React, { useState, useMemo } from "react";
import { ExternalLink, Radio, Share2, Check } from "lucide-react";
import { Locale } from "@/lib/types";
import { DEBATE_EPISODES, DebateEpisode } from "@/lib/data/debate-episodes";
import CustomVimeoPlayer from "@/components/CustomVimeoPlayer";
import SpotifyIcon from "@/components/icons/SpotifyIcon";

interface DebateEmbedWidgetProps {
  initialEpisodeNumber?: number;
  locale?: Locale;
  theme?: "dark" | "light";
  showPlaylist?: boolean;
}

export default function DebateEmbedWidget({
  initialEpisodeNumber = 2,
  locale = "pt",
  theme = "dark",
  showPlaylist = true,
}: DebateEmbedWidgetProps) {
  const [activeEpNumber, setActiveEpNumber] = useState<number>(initialEpisodeNumber);
  const [copied, setCopied] = useState(false);

  const activeEpisode: DebateEpisode = useMemo(() => {
    return (
      DEBATE_EPISODES.find((ep) => ep.numero === activeEpNumber) ||
      DEBATE_EPISODES[DEBATE_EPISODES.length - 1] ||
      DEBATE_EPISODES[0]
    );
  }, [activeEpNumber]);

  const isDark = theme === "dark";

  const t = {
    pt: {
      badge: "Tratado em Debate • SBC",
      openTreatise: "Abrir no site oficial",
      series: "Episódios da Série",
      nowPlaying: "▶ Em reprodução",
      episode: "Episódio",
      duration: "min",
      listenSpotify: "Ouvir no Spotify",
      viewChapter: `Ver Resumo do Cap. ${activeEpisode.capituloNum}`,
      buyBook: "Adquirir Livro Físico",
      share: "Compartilhar",
      copied: "Copiado!",
    },
    en: {
      badge: "Treatise in Debate • SBC",
      openTreatise: "Open official site",
      series: "Series Episodes",
      nowPlaying: "▶ Now Playing",
      episode: "Episode",
      duration: "min",
      listenSpotify: "Listen on Spotify",
      viewChapter: `View Summary of Ch. ${activeEpisode.capituloNum}`,
      buyBook: "Acquire Printed Book",
      share: "Share",
      copied: "Copied!",
    },
    es: {
      badge: "Tratado en Debate • SBC",
      openTreatise: "Abrir sitio oficial",
      series: "Episodios de la Serie",
      nowPlaying: "▶ En reproducción",
      episode: "Episodio",
      duration: "min",
      listenSpotify: "Escuchar en Spotify",
      viewChapter: `Ver Resumen del Cap. ${activeEpisode.capituloNum}`,
      buyBook: "Comprar Tratado Impreso",
      share: "Compartir",
      copied: "¡Copiado!",
    },
  }[locale] || {
    badge: "Tratado em Debate • SBC",
    openTreatise: "Abrir no site oficial",
    series: "Episódios da Série",
    nowPlaying: "▶ Em reprodução",
    episode: "Episódio",
    duration: "min",
    listenSpotify: "Ouvir no Spotify",
    viewChapter: `Ver Resumo do Cap. ${activeEpisode.capituloNum}`,
    buyBook: "Adquirir Livro Físico",
    share: "Compartilhar",
    copied: "Copiado!",
  };

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

  const guests = activeEpisode.convidados.map((c) => c.nome).join(" & ");

  const handleCopyLink = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      const fullUrl = `https://www.tratadodecoluna.com.br/${locale}/debate`;
      navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
        background: isDark
          ? "linear-gradient(180deg, #001026 0%, #001838 100%)"
          : "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        color: isDark ? "#ffffff" : "#001026",
        fontFamily: "var(--font-montserrat), 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        boxSizing: "border-box",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      }}
    >
      {/* 1. Header do Widget de Embed */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          paddingBottom: "12px",
          borderBottom: isDark ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid #e2e8f0",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#f52238",
              boxShadow: "0 0 10px rgba(245, 34, 56, 0.8)",
            }}
          />
          <span
            style={{
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: isDark ? "#ffffff" : "#001e50",
            }}
          >
            {t.badge}
          </span>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              padding: "2px 8px",
              borderRadius: "12px",
              background: isDark ? "rgba(245, 34, 56, 0.2)" : "#fee2e2",
              color: isDark ? "#ff8290" : "#dc2626",
              border: isDark ? "1px solid rgba(245, 34, 56, 0.4)" : "1px solid #fecaca",
            }}
          >
            EP. 0{activeEpisode.numero}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            onClick={handleCopyLink}
            type="button"
            title={t.share}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              padding: "5px 10px",
              borderRadius: "8px",
              fontSize: "12px",
              fontWeight: 600,
              background: isDark ? "rgba(255, 255, 255, 0.08)" : "#f1f5f9",
              color: isDark ? "#cbd5e1" : "#475569",
              border: isDark ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid #e2e8f0",
              cursor: "pointer",
            }}
          >
            {copied ? <Check size={13} color="#22c55e" /> : <Share2 size={13} />}
            <span>{copied ? t.copied : t.share}</span>
          </button>

          <a
            href={`https://www.tratadodecoluna.com.br/${locale}/debate`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              padding: "5px 12px",
              borderRadius: "8px",
              fontSize: "12px",
              fontWeight: 700,
              background: "#002b66",
              color: "#ffffff",
              textDecoration: "none",
              border: "1px solid rgba(255, 255, 255, 0.15)",
            }}
          >
            <span>{t.openTreatise}</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </header>

      {/* 2. Custom Vimeo Player */}
      <div style={{ width: "100%", borderRadius: "14px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)" }}>
        <CustomVimeoPlayer
          key={activeEpisode.id}
          url={activeEpisode.vimeoUrl}
          videoId={activeEpisode.vimeoId}
          title={title}
          guests={guests}
          locale={locale}
          autoplay={false}
          showPopOutButton={false}
        />
      </div>

      {/* 3. Detalhes do Episódio Atual */}
      <div
        style={{
          background: isDark ? "rgba(255, 255, 255, 0.04)" : "#ffffff",
          borderRadius: "12px",
          padding: "16px",
          border: isDark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid #e2e8f0",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", flexWrap: "wrap" }}>
          <div>
            <h2
              style={{
                fontSize: "16px",
                fontWeight: 800,
                color: isDark ? "#ffffff" : "#001026",
                margin: "0 0 4px",
                lineHeight: 1.3,
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontSize: "12.5px",
                color: isDark ? "#94a3b8" : "#64748b",
                margin: 0,
                fontWeight: 600,
              }}
            >
              {guests}
            </p>
          </div>

          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
            {activeEpisode.spotifyUrl && (
              <a
                href={activeEpisode.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  background: "#1DB954",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                <SpotifyIcon size={14} color="#ffffff" />
                <span>Spotify</span>
              </a>
            )}

            <a
              href={`https://www.tratadodecoluna.com.br/${locale}/capitulo/${activeEpisode.capituloNum}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                borderRadius: "8px",
                background: "#f52238",
                color: "#ffffff",
                fontSize: "12px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              <span>{t.viewChapter}</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        <p
          style={{
            fontSize: "12.5px",
            lineHeight: 1.5,
            color: isDark ? "#cbd5e1" : "#475569",
            margin: 0,
          }}
        >
          {subtitle}
        </p>
      </div>

      {/* 4. Lista Interativa de Episódios da Série (Playlist) */}
      {showPlaylist && DEBATE_EPISODES.length > 1 && (
        <div
          style={{
            background: isDark ? "rgba(255, 255, 255, 0.02)" : "#ffffff",
            borderRadius: "12px",
            padding: "14px",
            border: isDark ? "1px solid rgba(255, 255, 255, 0.06)" : "1px solid #e2e8f0",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "10px",
            }}
          >
            <Radio size={14} color="#f52238" />
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                color: isDark ? "#cbd5e1" : "#475569",
              }}
            >
              {t.series} ({DEBATE_EPISODES.length})
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "10px",
            }}
          >
            {DEBATE_EPISODES.map((ep) => {
              const isActive = ep.numero === activeEpNumber;
              const epTitle =
                locale === "en" ? ep.titulo_en : locale === "es" ? ep.titulo_es : ep.titulo_pt;

              return (
                <div
                  key={ep.id}
                  onClick={() => setActiveEpNumber(ep.numero)}
                  style={{
                    padding: "10px 12px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    background: isActive
                      ? isDark
                        ? "rgba(245, 34, 56, 0.2)"
                        : "#fef2f2"
                      : isDark
                      ? "rgba(255, 255, 255, 0.04)"
                      : "#f8fafc",
                    border: isActive
                      ? "1.5px solid #f52238"
                      : isDark
                      ? "1px solid rgba(255, 255, 255, 0.08)"
                      : "1px solid #e2e8f0",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        padding: "2px 6px",
                        borderRadius: "4px",
                        background: isActive ? "#f52238" : isDark ? "rgba(255, 255, 255, 0.1)" : "#e2e8f0",
                        color: isActive ? "#ffffff" : isDark ? "#cbd5e1" : "#475569",
                      }}
                    >
                      {isActive ? t.nowPlaying : `${t.episode} 0${ep.numero}`}
                    </span>
                    <span style={{ fontSize: "11px", color: isDark ? "#94a3b8" : "#64748b", fontWeight: 600 }}>
                      {ep.duracao} {t.duration}
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: isActive ? (isDark ? "#ffffff" : "#b91c1c") : isDark ? "#e2e8f0" : "#1e293b",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {epTitle}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 5. Footer Institucional Discreto */}
      <footer
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
          paddingTop: "6px",
          fontSize: "11px",
          color: isDark ? "#64748b" : "#94a3b8",
          flexWrap: "wrap",
        }}
      >
        <span>Sociedade Brasileira de Coluna (SBC) • Tratado de Cirurgia da Coluna Vertebral</span>
        <a
          href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: isDark ? "#ff8290" : "#dc2626",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          {t.buyBook} ↗
        </a>
      </footer>
    </div>
  );
}
