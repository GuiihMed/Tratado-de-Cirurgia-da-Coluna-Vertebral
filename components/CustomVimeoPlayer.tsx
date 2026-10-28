"use client";

import { useEffect, useState } from "react";
import { Sparkles, PictureInPicture, Calendar } from "lucide-react";
import SpotifyIcon from "@/components/icons/SpotifyIcon";
import { Locale } from "@/lib/types";
import {
  isCountdownActive,
  formatPremiereFullDate,
  formatPremiereNotice,
} from "@/lib/data/debate-episodes";

interface CustomVimeoPlayerProps {
  videoId?: string;
  url?: string;
  title?: string;
  guests?: string;
  locale?: Locale;
  autoplay?: boolean;
  onPopOutMiniPlayer?: () => void;
  showPopOutButton?: boolean;
  className?: string;
  aspectRatio?: string;
  thumbnailUrl?: string;
  premiereDate?: string;
  spotifyUrl?: string;
  onPremiereUnlocked?: () => void;
}

function extractVimeoId(videoId?: string, url?: string): string {
  if (videoId && /^\d+$/.test(videoId.trim())) {
    return videoId.trim();
  }
  if (url) {
    const match = url.match(/(?:video\/|vimeo\.com\/)(\d+)/);
    if (match && match[1]) {
      return match[1];
    }
  }
  return "1220279985";
}

export default function CustomVimeoPlayer({
  videoId,
  url,
  title,
  guests,
  locale = "pt",
  autoplay = false,
  onPopOutMiniPlayer,
  showPopOutButton = false,
  className = "",
  aspectRatio = "16/9",
  thumbnailUrl,
  premiereDate,
  spotifyUrl,
  onPremiereUnlocked,
}: CustomVimeoPlayerProps) {
  const cleanVideoId = extractVimeoId(videoId, url);

  // Dynamic thumbnail resolution from Vimeo for premiere background cover
  const getInitialThumbnail = () => {
    if (typeof window !== "undefined" && cleanVideoId) {
      try {
        const cached = sessionStorage.getItem(`vimeo_thumb_${cleanVideoId}`);
        if (cached) return cached;
      } catch (_) {}
    }
    if (thumbnailUrl) return thumbnailUrl;
    if (cleanVideoId === "1240418291") return "/assets/debate-ep9-cover.jpg";
    if (cleanVideoId === "1238004890") return "/assets/debate-ep8-cover.jpg";
    if (cleanVideoId === "1234198018") return "/assets/debate-ep7-cover.jpg";
    if (cleanVideoId === "1231004387") return "/assets/debate-ep6-cover.jpg";
    if (cleanVideoId === "1231004388") return "/assets/debate-ep5-cover.jpg";
    if (cleanVideoId === "1228104091") return "/assets/debate-ep4-cover.jpg";
    if (cleanVideoId === "1225996397") return "/assets/debate-ep3-cover.jpg";
    if (cleanVideoId === "1225402821") return "/assets/debate-ep2-cover.jpg";
    if (cleanVideoId === "1220279985") return "/assets/debate-ep1-cover.jpg";
    return "";
  };

  const [resolvedThumbnail, setResolvedThumbnail] = useState<string>(getInitialThumbnail);

  useEffect(() => {
    if (!cleanVideoId) return;

    if (thumbnailUrl) {
      setResolvedThumbnail(thumbnailUrl);
    }

    let isMounted = true;
    fetch(`https://vimeo.com/api/oembed.json?url=https://player.vimeo.com/video/${cleanVideoId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Vimeo oEmbed response not ok");
        return res.json();
      })
      .then((data) => {
        if (!isMounted) return;
        if (data && data.thumbnail_url) {
          const highRes = data.thumbnail_url.replace(/_\d+x\d+/, "_1280x720");
          setResolvedThumbnail(highRes);
          try {
            sessionStorage.setItem(`vimeo_thumb_${cleanVideoId}`, highRes);
          } catch (_) {}
        }
      })
      .catch(() => {});

    return () => {
      isMounted = false;
    };
  }, [thumbnailUrl, cleanVideoId]);

  // Premiere Countdown logic
  const [nowMs, setNowMs] = useState<number>(() => Date.now());

  useEffect(() => {
    if (!premiereDate) return;

    setNowMs(Date.now());
    const timer = setInterval(() => {
      const current = Date.now();
      setNowMs(current);
      if (new Date(premiereDate).getTime() <= current) {
        clearInterval(timer);
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("treatise:premiere-unlocked"));
        }
        onPremiereUnlocked?.();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [premiereDate, onPremiereUnlocked]);

  const premiereTarget = premiereDate ? new Date(premiereDate).getTime() : 0;
  const isPremiereActive = Boolean(premiereDate && premiereTarget > nowMs);
  const showLiveCountdown = Boolean(isPremiereActive && isCountdownActive(premiereDate, nowMs));

  const diffMs = Math.max(0, premiereTarget - nowMs);
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const diffSeconds = Math.floor((diffMs % (1000 * 60)) / 1000);

  // Player de Vimeo Oficial com controles completos, tema personalizado e reprodução sem bloqueios
  const embedUrl = `https://player.vimeo.com/video/${cleanVideoId}?color=f52238&autoplay=${autoplay ? "1" : "0"}&badge=0&autopause=0&player_id=0&app_id=58479&dnt=1&playsinline=1&title=0&byline=0&portrait=0`;

  const videoTitle =
    title ||
    (locale === "en"
      ? "Treatise in Debate • Official SBC Videocast"
      : locale === "es"
      ? "Tratado en Debate • Videocast Oficial SBC"
      : "Tratado em Debate • Videocast Oficial SBC");

  return (
    <div
      tabIndex={0}
      className={`custom-vimeo-player-container relative w-full overflow-hidden rounded-2xl bg-black select-none shadow-2xl border border-slate-700/50 ${className}`}
      style={{
        aspectRatio: aspectRatio || "16/9",
        width: "100%",
        outline: "none",
      }}
    >
      {/* 1. Player Oficial do Vimeo */}
      {!isPremiereActive && (
        <div className="absolute inset-0 w-full h-full bg-black">
          <iframe
            src={embedUrl}
            className="w-full h-full border-0 absolute inset-0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; speaker-selection; web-share"
            allowFullScreen
            title={videoTitle}
          />
        </div>
      )}

      {/* 2. Overlay de Contagem Regressiva para Pré-Estreia */}
      {isPremiereActive && (
        <div className="absolute inset-0 z-20 flex flex-col justify-between overflow-hidden select-none">
          {/* Capa de Fundo do Vimeo */}
          {resolvedThumbnail ? (
            <img
              src={resolvedThumbnail}
              alt={title || "Tratado em Debate"}
              className="absolute inset-0 w-full h-full object-cover scale-105 filter blur-[2px] brightness-[0.45]"
            />
          ) : (
            <div
              className="absolute inset-0 bg-cover bg-center filter blur-[2px] brightness-[0.45]"
              style={{ backgroundImage: `url('/assets/debate-artwork.png')` }}
            />
          )}

          {/* Dark Glass Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/65" />

          {/* Top Row: Badge */}
          <div className="relative z-10 flex items-center justify-between gap-2 p-3 sm:p-5 md:p-6">
            <div
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${
                showLiveCountdown
                  ? "bg-rose-600/90 text-white shadow-rose-600/30"
                  : "bg-indigo-600/90 text-white shadow-indigo-600/30"
              } backdrop-blur-md text-[10.5px] sm:text-xs font-bold uppercase tracking-wider shadow-lg`}
            >
              {showLiveCountdown ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span>
                    {locale === "en"
                      ? "Premiere Countdown"
                      : locale === "es"
                      ? "Cuenta Regresiva"
                      : "Contagem Regressiva"}
                  </span>
                </>
              ) : (
                <>
                  <Calendar size={13} className="text-white" />
                  <span>
                    {locale === "en"
                      ? "Scheduled Premiere"
                      : locale === "es"
                      ? "Estreno Programado"
                      : "Estreia Agendada"}
                  </span>
                </>
              )}
            </div>

            <div className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 text-[10px] text-sky-400 font-bold border border-sky-500/30 backdrop-blur-md">
              <Sparkles size={11} />
              <span>1080p Full HD</span>
            </div>
          </div>

          {/* Center: Live Countdown Cards OR Scheduled Date Display */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto px-3 sm:px-4 text-center">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full ${
                showLiveCountdown
                  ? "bg-rose-500/20 border-rose-500/40 text-rose-300"
                  : "bg-indigo-500/20 border-indigo-500/40 text-indigo-300"
              } border text-[11px] sm:text-xs md:text-sm font-bold shadow-lg mb-2 sm:mb-3.5 backdrop-blur-md`}
            >
              {showLiveCountdown ? (
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              ) : (
                <Calendar size={13} className="text-indigo-400" />
              )}
              <span>
                {locale === "en"
                  ? `Exclusive Premiere • ${formatPremiereFullDate(premiereDate, "en")}`
                  : locale === "es"
                  ? `Estreno Exclusivo • ${formatPremiereFullDate(premiereDate, "es")}`
                  : `Pré-Estreia Exclusiva • ${formatPremiereFullDate(premiereDate, "pt")}`}
              </span>
            </div>

            {showLiveCountdown ? (
              /* Countdown Grid */
              <div className="flex items-center justify-center gap-1.5 sm:gap-3 md:gap-4 my-1 sm:my-2">
                <div className="flex flex-col items-center justify-center bg-slate-900/85 backdrop-blur-md border border-white/15 rounded-xl sm:rounded-2xl px-2 py-1.5 sm:px-4 sm:py-2.5 min-w-[52px] sm:min-w-[72px] md:min-w-[84px] shadow-2xl">
                  <span className="text-xl sm:text-3xl md:text-4xl font-black text-white font-mono tracking-tight leading-none">
                    {String(diffDays).padStart(2, "0")}
                  </span>
                  <span className="text-[8px] sm:text-[9.5px] md:text-xs font-bold text-rose-300 uppercase tracking-widest mt-1">
                    {locale === "en" ? "Days" : locale === "es" ? "Días" : "Dias"}
                  </span>
                </div>

                <span className="text-base sm:text-2xl font-bold text-white/40 pb-1.5 select-none">:</span>

                <div className="flex flex-col items-center justify-center bg-slate-900/85 backdrop-blur-md border border-white/15 rounded-xl sm:rounded-2xl px-2 py-1.5 sm:px-4 sm:py-2.5 min-w-[52px] sm:min-w-[72px] md:min-w-[84px] shadow-2xl">
                  <span className="text-xl sm:text-3xl md:text-4xl font-black text-white font-mono tracking-tight leading-none">
                    {String(diffHours).padStart(2, "0")}
                  </span>
                  <span className="text-[8px] sm:text-[9.5px] md:text-xs font-bold text-rose-300 uppercase tracking-widest mt-1">
                    {locale === "en" ? "Hours" : locale === "es" ? "Horas" : "Horas"}
                  </span>
                </div>

                <span className="text-base sm:text-2xl font-bold text-white/40 pb-1.5 select-none">:</span>

                <div className="flex flex-col items-center justify-center bg-slate-900/85 backdrop-blur-md border border-white/15 rounded-xl sm:rounded-2xl px-2 py-1.5 sm:px-4 sm:py-2.5 min-w-[52px] sm:min-w-[72px] md:min-w-[84px] shadow-2xl">
                  <span className="text-xl sm:text-3xl md:text-4xl font-black text-white font-mono tracking-tight leading-none">
                    {String(diffMinutes).padStart(2, "0")}
                  </span>
                  <span className="text-[8px] sm:text-[9.5px] md:text-xs font-bold text-rose-300 uppercase tracking-widest mt-1">
                    {locale === "en" ? "Mins" : locale === "es" ? "Min" : "Min"}
                  </span>
                </div>

                <span className="text-base sm:text-2xl font-bold text-white/40 pb-1.5 select-none">:</span>

                <div className="flex flex-col items-center justify-center bg-slate-900/85 backdrop-blur-md border border-rose-500/40 rounded-xl sm:rounded-2xl px-2 py-1.5 sm:px-4 sm:py-2.5 min-w-[52px] sm:min-w-[72px] md:min-w-[84px] shadow-2xl shadow-rose-600/20">
                  <span className="text-xl sm:text-3xl md:text-4xl font-black text-rose-400 font-mono tracking-tight leading-none">
                    {String(diffSeconds).padStart(2, "0")}
                  </span>
                  <span className="text-[8px] sm:text-[9.5px] md:text-xs font-bold text-rose-300 uppercase tracking-widest mt-1">
                    {locale === "en" ? "Secs" : locale === "es" ? "Seg" : "Seg"}
                  </span>
                </div>
              </div>
            ) : (
              /* Scheduled Date Display */
              <div className="my-2 sm:my-3 flex flex-col items-center justify-center px-4 py-3 sm:px-6 sm:py-4 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-white/15 shadow-2xl max-w-md">
                <div className="text-base sm:text-xl md:text-2xl font-black text-white tracking-tight leading-tight">
                  {formatPremiereFullDate(premiereDate, locale)}
                </div>
                <div className="mt-2 text-[11px] sm:text-xs text-slate-300 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>
                    {locale === "en"
                      ? "The live countdown will be activated on the eve of the premiere."
                      : locale === "es"
                      ? "La cuenta regresiva en vivo se activará la víspera del estreno."
                      : "O contador regressivo ao vivo será ativado na véspera da estreia."}
                  </span>
                </div>
              </div>
            )}

            <p className="mt-2 sm:mt-3 text-[11px] sm:text-xs md:text-[13px] text-slate-300 max-w-lg leading-relaxed drop-shadow font-medium px-2">
              {locale === "en"
                ? `The full videocast will premiere automatically in this player on ${formatPremiereNotice(premiereDate, "en")}.`
                : locale === "es"
                ? `El videocast completo se transmitirá automáticamente en este reproductor el ${formatPremiereNotice(premiereDate, "es")}.`
                : `O videocast completo será liberado automaticamente neste player na ${formatPremiereNotice(premiereDate, "pt")}.`}
            </p>

            {spotifyUrl && (
              <div className="mt-2 sm:mt-2.5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-sm text-slate-300 text-[10px] sm:text-xs">
                <SpotifyIcon size={13} color="#1DB954" />
                <span>
                  {locale === "en"
                    ? "Also premiering on Spotify"
                    : locale === "es"
                    ? "Disponible en Spotify en el estreno"
                    : "Disponível no Spotify no dia da estreia"}
                </span>
              </div>
            )}
          </div>

          {/* Bottom spacer for balance */}
          <div className="relative z-10 p-2 sm:p-3 pointer-events-none" />
        </div>
      )}

      {/* PopOut MiniPlayer button (apenas se callback for fornecido) */}
      {showPopOutButton && onPopOutMiniPlayer && !isPremiereActive && (
        <button
          onClick={onPopOutMiniPlayer}
          className="absolute top-3 right-3 z-20 hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/70 hover:bg-black/90 backdrop-blur-md text-white text-xs font-semibold border border-white/20 transition-all shadow-md"
          title="Abrir no Mini Player Flutuante"
        >
          <PictureInPicture size={13} />
          <span>{locale === "en" ? "Mini Player" : "Mini Player"}</span>
        </button>
      )}
    </div>
  );
}
