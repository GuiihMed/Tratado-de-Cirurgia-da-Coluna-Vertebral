"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Locale } from "@/lib/types";
import { X, Maximize2, Minimize2, ExternalLink, Play, ChevronDown, Tv } from "lucide-react";
import CustomVimeoPlayer from "@/components/CustomVimeoPlayer";
import SpotifyIcon from "@/components/icons/SpotifyIcon";

interface DebateMiniPlayerProps {
  locale: Locale;
  isOpen: boolean;
  onClose: () => void;
  isModern?: boolean;
}

export const VIMEO_DEBATE_URL = "https://player.vimeo.com/video/1220279985";

export default function DebateMiniPlayer({
  locale,
  isOpen,
  onClose,
  isModern = true,
}: DebateMiniPlayerProps) {
  const [viewMode, setViewMode] = useState<"floating" | "modal" | "minimized">("floating");

  // Keyboard shortcut (Escape to close or exit modal)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        if (viewMode === "modal") {
          setViewMode("floating");
        } else {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, viewMode, onClose]);

  if (!isOpen) return null;

  const t = {
    badge: locale === "en" ? "Official SBC Videocast" : locale === "es" ? "Videocast Oficial SBC" : "Videocast Oficial SBC",
    title: locale === "en" ? "Treatise in Debate • Episode 01" : locale === "es" ? "Tratado en Debate • Episodio 01" : "Tratado em Debate • Episódio 01",
    chapterTitle: locale === "en"
      ? "Chapter 8 – The Spine in the Sagittal Plane"
      : locale === "es"
      ? "Capítulo 8 – Columna Vertebral en el Plano Sagital"
      : "Capítulo 8 – Coluna Vertebral no Plano Sagital",
    guests: locale === "en"
      ? "With Dr. Marcelo Risso & Dr. Paulo Cavali"
      : locale === "es"
      ? "Con el Dr. Marcelo Risso y el Dr. Paulo Cavali"
      : "Com Dr. Marcelo Risso e Dr. Paulo Cavali",
    viewChapter: locale === "en" ? "Study Chapter 8" : locale === "es" ? "Ver Capítulo 8" : "Acessar Capítulo 8",
    allEpisodes: locale === "en" ? "Other Episodes" : locale === "es" ? "Otros Episodios" : "Outros Episódios",
    seeOtherEpisodes: locale === "en" ? "See other episodes" : locale === "es" ? "Ver otros episodios" : "Ver outros episódios",
    minimize: locale === "en" ? "Minimize" : locale === "es" ? "Minimizar" : "Minimizar",
    maximize: locale === "en" ? "Maximize" : locale === "es" ? "Maximizar" : "Maximizar",
    close: locale === "en" ? "Close" : locale === "es" ? "Cerrar" : "Fechar",
  };

  const chapterUrl = isModern ? `/${locale}/capitulo-new/8` : `/${locale}/capitulo/8`;
  const debateUrl = isModern ? `/${locale}/debate-new` : `/${locale}/debate`;

  // 1. Minimized Mode (Small bar in bottom-right)
  if (viewMode === "minimized") {
    return (
      <div
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 9999,
          background: "linear-gradient(135deg, #021a3a 0%, #001026 100%)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: 14,
          padding: "10px 16px",
          boxShadow: "0 12px 35px rgba(0, 0, 0, 0.5), 0 0 20px rgba(245, 34, 56, 0.25)",
          display: "flex",
          alignItems: "center",
          gap: 12,
          color: "#fff",
          maxWidth: 360,
          backdropFilter: "blur(16px)",
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: "#f52238",
            display: "grid",
            placeItems: "center",
            flexShrink: 0,
            cursor: "pointer",
          }}
          onClick={() => setViewMode("floating")}
          title="Restaurar Player"
        >
          <Play size={16} className="text-white fill-current ml-0.5" />
        </div>

        <div style={{ flex: 1, minWidth: 0, cursor: "pointer" }} onClick={() => setViewMode("floating")}>
          <div style={{ fontSize: 11, color: "#ff8290", fontWeight: 700, textTransform: "uppercase" }}>
            {t.badge}
          </div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {t.chapterTitle}
          </div>
        </div>

        <button
          onClick={() => setViewMode("floating")}
          style={{ background: "transparent", border: "none", color: "#94a3b8", cursor: "pointer", padding: 4 }}
          title={t.maximize}
        >
          <Maximize2 size={16} />
        </button>
        <button
          onClick={onClose}
          style={{ background: "transparent", border: "none", color: "#94a3b8", cursor: "pointer", padding: 4 }}
          title={t.close}
        >
          <X size={16} />
        </button>
      </div>
    );
  }

  // 2. Maximized Modal Mode
  if (viewMode === "modal") {
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99999,
          background: "rgba(0, 10, 25, 0.88)",
          backdropFilter: "blur(12px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px 16px",
        }}
        onClick={() => setViewMode("floating")}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 960,
            background: "#001026",
            borderRadius: 22,
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 30px 80px rgba(0, 0, 0, 0.7), 0 0 40px rgba(245, 34, 56, 0.2)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 22px",
              background: "rgba(255, 255, 255, 0.04)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f52238", boxShadow: "0 0 10px #f52238" }} />
              <strong style={{ fontSize: 15, color: "#fff", fontWeight: 700 }}>
                {t.title}
              </strong>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <button
                onClick={() => setViewMode("floating")}
                style={{
                  padding: "6px 12px",
                  borderRadius: 8,
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#cbd5e1",
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <Minimize2 size={14} />
                <span>{t.minimize}</span>
              </button>
              <button
                onClick={onClose}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#fff",
                  display: "grid",
                  placeItems: "center",
                  cursor: "pointer",
                }}
                title={t.close}
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Custom Vimeo Player */}
          <CustomVimeoPlayer
            locale={locale}
            autoplay={true}
            showPopOutButton={false}
          />

          {/* Footer Info */}
          <div
            style={{
              padding: "18px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              background: "rgba(255, 255, 255, 0.02)",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h4 style={{ margin: "0 0 4px", fontSize: 16, color: "#fff", fontWeight: 700 }}>
                {t.chapterTitle}
              </h4>
              <p style={{ margin: 0, fontSize: 13, color: "#94a3b8" }}>
                {t.guests}
              </p>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
              <a
                href="https://open.spotify.com/episode/7hhh4RRDMS4xfx67QkUEZY?si=mkVupBTQSUOdg64qlboZ3Q"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 18px",
                  borderRadius: 10,
                  background: "#1DB954",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(29, 185, 84, 0.4)",
                  transition: "all 0.2s ease",
                }}
                className="hover:bg-[#1ed760] hover:scale-105"
              >
                <SpotifyIcon size={18} color="#ffffff" />
                <span>Spotify</span>
              </a>
              <Link
                href={debateUrl}
                onClick={onClose}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 18px",
                  borderRadius: 10,
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                className="hover:bg-white/15"
              >
                <Tv size={14} />
                <span>{t.seeOtherEpisodes}</span>
              </Link>
              <Link
                href={chapterUrl}
                onClick={onClose}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 18px",
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #f52238 0%, #d9142a 100%)",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(245, 34, 56, 0.4)",
                }}
              >
                <span>{t.viewChapter}</span>
                <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. Standard Floating Mini Player (Default)
  return (
    <div
      className="debate-mini-player-floating"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 9999,
        width: 400,
        maxWidth: "calc(100vw - 32px)",
        background: "rgba(2, 20, 48, 0.95)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        borderRadius: 18,
        boxShadow: "0 20px 50px rgba(0, 10, 30, 0.6), 0 0 25px rgba(245, 34, 56, 0.25)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        animation: "fadeInMiniPlayer 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      }}
    >
      {/* Top Header Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 14px",
          background: "rgba(255, 255, 255, 0.05)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#f52238", boxShadow: "0 0 8px #f52238", flexShrink: 0 }} />
          <span style={{ fontSize: 12, fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.04em", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {t.title}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
          <button
            onClick={() => setViewMode("minimized")}
            style={{
              width: 26,
              height: 26,
              borderRadius: 6,
              background: "transparent",
              border: "none",
              color: "#cbd5e1",
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
            }}
            title={t.minimize}
            className="hover:bg-white/10"
          >
            <ChevronDown size={16} />
          </button>
          <button
            onClick={() => setViewMode("modal")}
            style={{
              width: 26,
              height: 26,
              borderRadius: 6,
              background: "transparent",
              border: "none",
              color: "#cbd5e1",
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
            }}
            title={t.maximize}
            className="hover:bg-white/10"
          >
            <Maximize2 size={14} />
          </button>
          <button
            onClick={onClose}
            style={{
              width: 26,
              height: 26,
              borderRadius: 6,
              background: "rgba(255, 255, 255, 0.08)",
              border: "none",
              color: "#fff",
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
            }}
            title={t.close}
            className="hover:bg-rose-600/80"
          >
            <X size={15} />
          </button>
        </div>
      </div>

      {/* Custom Vimeo Player */}
      <CustomVimeoPlayer
        locale={locale}
        autoplay={true}
        showPopOutButton={false}
      />

      {/* Mini Footer info with Chapter Link */}
      <div
        style={{
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
          background: "rgba(0, 10, 26, 0.7)",
        }}
      >
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ fontSize: 12.5, fontWeight: 700, color: "#e2effe", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {t.chapterTitle}
          </div>
          <div style={{ fontSize: 11, color: "#94a3b8", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {t.guests}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
          <a
            href="https://open.spotify.com/episode/7hhh4RRDMS4xfx67QkUEZY?si=mkVupBTQSUOdg64qlboZ3Q"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#fff",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              padding: "5px 9px",
              borderRadius: 7,
              background: "#1DB954",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              transition: "background 0.2s ease",
            }}
            className="hover:bg-[#1ed760] hover:scale-105"
            title="Ouvir no Spotify"
          >
            <SpotifyIcon size={13} color="#ffffff" />
            <span>Spotify</span>
          </a>

          <Link
            href={debateUrl}
            onClick={onClose}
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#e2effe",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              padding: "5px 9px",
              borderRadius: 7,
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              transition: "background 0.2s ease",
            }}
            className="hover:bg-white/15"
            title={t.seeOtherEpisodes}
          >
            <Tv size={12} />
            <span>{t.allEpisodes}</span>
          </Link>

          <Link
            href={chapterUrl}
            onClick={onClose}
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              color: "#fff",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              padding: "5px 10px",
              borderRadius: 7,
              background: "#f52238",
              flexShrink: 0,
              boxShadow: "0 2px 8px rgba(245, 34, 56, 0.4)",
            }}
          >
            <span>Cap. 8</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
