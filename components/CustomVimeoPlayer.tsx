"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Player from "@vimeo/player";
import {
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
  Volume1,
  Maximize,
  Minimize,
  Sparkles,
  Layers,
  PictureInPicture,
} from "lucide-react";
import { Locale } from "@/lib/types";

interface CustomVimeoPlayerProps {
  videoId?: string;
  url?: string;
  locale?: Locale;
  autoplay?: boolean;
  onPopOutMiniPlayer?: () => void;
  showPopOutButton?: boolean;
  className?: string;
  aspectRatio?: string;
}

const CHAPTER_MARKERS = [
  { time: 0, label: "Abertura & Apresentação", pct: 0 },
  { time: 480, label: "Parâmetros do Equilíbrio Sagital", pct: 17 },
  { time: 1140, label: "Incidência Pélvica & Lordose Lombar", pct: 40 },
  { time: 1820, label: "Indicações de Osteotomia", pct: 64 },
  { time: 2450, label: "Discussão de Casos Complexos", pct: 86 },
];

export default function CustomVimeoPlayer({
  videoId = "1220279985",
  url = "https://player.vimeo.com/video/1220279985",
  locale = "pt",
  autoplay = false,
  onPopOutMiniPlayer,
  showPopOutButton = true,
  className = "",
  aspectRatio = "16/9",
}: CustomVimeoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [bufferedPct, setBufferedPct] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [showChapterMenu, setShowChapterMenu] = useState(false);
  const [hoverTime, setHoverTime] = useState<{ time: number; pct: number } | null>(null);
  const [seeking, setSeeking] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const hideControlsTimer = useRef<NodeJS.Timeout | null>(null);

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return "00:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    const h = Math.floor(m / 60);
    if (h > 0) {
      const remM = m % 60;
      return `${h}:${remM < 10 ? "0" : ""}${remM}:${s < 10 ? "0" : ""}${s}`;
    }
    return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  };

  // Initialize Vimeo Player SDK
  useEffect(() => {
    if (!iframeRef.current) return;

    try {
      const player = new Player(iframeRef.current);
      playerRef.current = player;

      player.on("loaded", async () => {
        setIsLoading(false);
        try {
          const d = await player.getDuration();
          setDuration(d);
        } catch (e) {}
      });

      player.on("play", () => {
        setIsPlaying(true);
        setHasStarted(true);
        setIsLoading(false);
      });

      player.on("pause", () => {
        setIsPlaying(false);
      });

      player.on("timeupdate", (data) => {
        if (!seeking) {
          setCurrentTime(data.seconds);
          if (data.duration && duration === 0) {
            setDuration(data.duration);
          }
          if (data.percent) {
            setBufferedPct(Math.min(100, data.percent * 100 + 10));
          }
        }
      });

      player.on("ended", () => {
        setIsPlaying(false);
      });

      player.on("volumechange", (data) => {
        setVolume(data.volume);
        setIsMuted(data.volume === 0);
      });

      player.on("playbackratechange", (data) => {
        setPlaybackRate(data.playbackRate);
      });

      return () => {
        player.destroy();
      };
    } catch (err) {
      console.warn("Vimeo SDK init fallback:", err);
      setIsLoading(false);
    }
  }, []);

  const handlePlayPause = useCallback(async () => {
    if (!playerRef.current) return;
    try {
      if (isPlaying) {
        await playerRef.current.pause();
      } else {
        await playerRef.current.play();
        setHasStarted(true);
      }
    } catch (e) {
      console.warn(e);
    }
  }, [isPlaying]);

  const handleSkip = useCallback(
    async (seconds: number) => {
      if (!playerRef.current) return;
      try {
        const nextTime = Math.max(0, Math.min(duration, currentTime + seconds));
        await playerRef.current.setCurrentTime(nextTime);
        setCurrentTime(nextTime);
      } catch (e) {}
    },
    [currentTime, duration]
  );

  const handleVolumeChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    setIsMuted(val === 0);
    if (playerRef.current) {
      try {
        await playerRef.current.setVolume(val);
      } catch (e) {}
    }
  };

  const handleToggleMute = async () => {
    if (!playerRef.current) return;
    try {
      if (isMuted) {
        await playerRef.current.setVolume(volume || 0.8);
        setIsMuted(false);
      } else {
        await playerRef.current.setVolume(0);
        setIsMuted(true);
      }
    } catch (e) {}
  };

  const handleSetRate = async (rate: number) => {
    setPlaybackRate(rate);
    setShowSettings(false);
    if (playerRef.current) {
      try {
        await playerRef.current.setPlaybackRate(rate);
      } catch (e) {}
    }
  };

  const handleSeekToMarker = async (time: number) => {
    if (playerRef.current) {
      try {
        await playerRef.current.setCurrentTime(time);
        await playerRef.current.play();
        setShowChapterMenu(false);
      } catch (e) {}
    }
  };

  const handleToggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Auto-hide controls
  const handleMouseMove = () => {
    setControlsVisible(true);
    if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current);
    if (isPlaying) {
      hideControlsTimer.current = setTimeout(() => {
        if (!showSettings && !showChapterMenu) {
          setControlsVisible(false);
        }
      }, 3000);
    }
  };

  const handleMouseLeave = () => {
    if (isPlaying && !showSettings && !showChapterMenu) {
      setControlsVisible(false);
    }
  };

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (e.code === "Space" || e.key === "k") {
        e.preventDefault();
        handlePlayPause();
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        handleToggleFullscreen();
      } else if (e.key === "m" || e.key === "M") {
        e.preventDefault();
        handleToggleMute();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handleSkip(-10);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleSkip(10);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      if (container) {
        container.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [handlePlayPause, handleSkip, handleToggleMute]);

  const progressPct = duration > 0 ? (currentTime / duration) * 100 : 0;

  const t = {
    badge: locale === "en" ? "Official SBC Videocast" : locale === "es" ? "Videocast Oficial SBC" : "Videocast Oficial SBC",
    badgeShort: "Videocast SBC",
    epTitle: locale === "en" ? "Episode 01 – The Spine in the Sagittal Plane" : locale === "es" ? "Episodio 01 – Columna Vertebral en el Plano Sagital" : "Episódio 01 – Coluna Vertebral no Plano Sagital",
    guests: locale === "en" ? "Dr. Marcelo Risso & Dr. Paulo Cavali" : locale === "es" ? "Dr. Marcelo Risso y Dr. Paulo Cavali" : "Dr. Marcelo Risso e Dr. Paulo Cavali",
    clickToPlay: locale === "en" ? "Watch Videocast" : locale === "es" ? "Ver Videocast" : "Assistir Videocast",
    popOut: locale === "en" ? "Mini Player" : locale === "es" ? "Mini Player" : "Mini Player",
    speed: locale === "en" ? "Speed" : locale === "es" ? "Velocidad" : "Velocidade",
    chapters: locale === "en" ? "Moments" : locale === "es" ? "Momentos" : "Momentos",
  };

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`custom-vimeo-player-container relative w-full overflow-hidden rounded-2xl bg-black select-none group shadow-2xl border border-slate-700/50 ${className}`}
      style={{
        aspectRatio: isFullscreen ? "unset" : aspectRatio,
        height: isFullscreen ? "100vh" : "auto",
        width: isFullscreen ? "100vw" : "100%",
        outline: "none",
      }}
    >
      {/* 1. Underlying Vimeo Iframe (Chromeless & clean) */}
      <div className="absolute inset-0 w-full h-full pointer-events-auto">
        <iframe
          ref={iframeRef}
          src={`${url}?autoplay=${autoplay ? "1" : "0"}&badge=0&autopause=0&player_id=0&app_id=58479&controls=0`}
          className="w-full h-full border-0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          title="Tratado em Debate - Videocast Oficial SBC"
        />
      </div>

      {/* 2. Responsive Initial Poster Overlay (before playing) */}
      {!hasStarted && (
        <div
          onClick={handlePlayPause}
          className="absolute inset-0 z-20 cursor-pointer flex flex-col justify-between p-3 sm:p-5 md:p-6 bg-cover bg-center transition-all duration-500 hover:brightness-105"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 16, 38, 0.35) 0%, rgba(0, 10, 26, 0.75) 100%), url('/assets/debate-artwork.png')`,
          }}
        >
          {/* Top Row: Pill Badge + HD / Popout */}
          <div className="flex items-center justify-between gap-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-600/90 backdrop-blur-md text-white text-[10.5px] sm:text-xs font-bold uppercase tracking-wider shadow-lg shadow-rose-600/30">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="hidden sm:inline">{t.badge}</span>
              <span className="sm:hidden">{t.badgeShort}</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 text-[10px] text-sky-400 font-bold border border-sky-500/30 backdrop-blur-md">
                <Sparkles size={11} />
                <span>1080p HD</span>
              </div>

              {showPopOutButton && onPopOutMiniPlayer && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onPopOutMiniPlayer();
                  }}
                  className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 hover:bg-black/80 backdrop-blur-md text-slate-200 text-xs font-semibold border border-white/15 transition-all"
                  title="Abrir no Mini Player Flutuante"
                >
                  <PictureInPicture size={13} />
                  <span>{t.popOut}</span>
                </button>
              )}
            </div>
          </div>

          {/* Center Play Button & Compact CTA */}
          <div className="flex flex-col items-center justify-center my-auto">
            <div className="relative group/btn flex items-center justify-center">
              {/* Glowing animated background */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-rose-600 to-sky-500 opacity-60 blur-md group-hover/btn:opacity-90 animate-pulse transition-opacity duration-300" />

              {/* Main Play Circle */}
              <div className="relative w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-gradient-to-tr from-rose-600 via-rose-500 to-red-600 text-white flex items-center justify-center shadow-2xl shadow-rose-600/60 border-2 border-white/50 group-hover/btn:scale-110 transition-transform duration-300">
                <Play size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8 fill-current ml-0.5 sm:ml-1 drop-shadow" />
              </div>
            </div>

            <span className="mt-2.5 sm:mt-3 text-[11px] sm:text-xs font-bold text-white uppercase tracking-wider drop-shadow bg-black/60 px-3 py-1 rounded-full backdrop-blur-md border border-white/15 shadow-md">
              {t.clickToPlay}
            </span>
          </div>

          {/* Bottom Episode Line (Hidden on tiny height to prevent cut-off, visible on large screens) */}
          <div className="hidden lg:flex items-end justify-between gap-4">
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-extrabold text-white leading-tight drop-shadow-md truncate">
                {t.epTitle}
              </h3>
              <p className="text-xs text-slate-300 font-medium truncate mt-0.5">
                {t.guests}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 3. Interactive Transparent Click Area for Play/Pause */}
      {hasStarted && (
        <div
          onClick={handlePlayPause}
          className="absolute inset-0 z-10 cursor-pointer"
        />
      )}

      {/* 4. Top Overlay Bar (Episode title + Quick actions) */}
      {hasStarted && (
        <div
          className={`absolute top-0 inset-x-0 z-30 p-2.5 sm:p-4 flex items-center justify-between gap-2 bg-gradient-to-b from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
            controlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shadow-sm shadow-rose-500 shrink-0" />
            <div className="min-w-0">
              <h4 className="text-white text-xs sm:text-sm font-bold leading-none drop-shadow truncate">
                {t.epTitle}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {showPopOutButton && onPopOutMiniPlayer && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPopOutMiniPlayer();
                }}
                className="flex items-center gap-1 px-2 py-1 rounded-md bg-black/60 hover:bg-black/80 backdrop-blur-md text-slate-200 text-[11px] font-bold border border-white/15 transition-all shadow-md"
                title="Abrir no Mini Player Flutuante"
              >
                <PictureInPicture size={12} />
                <span className="hidden sm:inline">{t.popOut}</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* 5. Bottom Custom Controller Bar (Fully responsive) */}
      {hasStarted && (
        <div
          className={`absolute bottom-0 inset-x-0 z-30 px-2.5 sm:px-4 py-2 sm:py-3.5 bg-gradient-to-t from-black/95 via-black/80 to-transparent transition-opacity duration-300 ${
            controlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Progress / Timeline Bar */}
          <div
            className="relative w-full h-3.5 sm:h-4 flex items-center cursor-pointer group/progress mb-1.5 sm:mb-2"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pos = (e.clientX - rect.left) / rect.width;
              const time = Math.max(0, Math.min(duration, pos * duration));
              setHoverTime({ time, pct: pos * 100 });
            }}
            onMouseLeave={() => setHoverTime(null)}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pos = (e.clientX - rect.left) / rect.width;
              const val = Math.max(0, Math.min(duration, pos * duration));
              setCurrentTime(val);
              if (playerRef.current) {
                playerRef.current.setCurrentTime(val);
              }
            }}
          >
            {/* Background Rail */}
            <div className="w-full h-1 sm:h-1.5 rounded-full bg-white/20 backdrop-blur-sm relative overflow-hidden transition-all group-hover/progress:h-2">
              {/* Buffer Progress */}
              <div
                className="absolute left-0 top-0 bottom-0 bg-white/30 rounded-full transition-all duration-300"
                style={{ width: `${bufferedPct}%` }}
              />
              {/* Active Play Progress */}
              <div
                className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-rose-600 via-rose-500 to-red-500 rounded-full shadow-sm shadow-rose-500/80"
                style={{ width: `${progressPct}%` }}
              />
            </div>

            {/* Chapter Markers on Timeline */}
            {CHAPTER_MARKERS.map((mark, i) => (
              <div
                key={i}
                className="absolute w-1 sm:w-1.5 h-2.5 sm:h-3 bg-white/60 hover:bg-white hover:scale-125 rounded-full z-10 transition-transform -translate-x-1/2"
                style={{ left: `${mark.pct}%` }}
                title={mark.label}
              />
            ))}

            {/* Scrubber Handle */}
            <div
              className="absolute w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-white border-2 border-rose-600 shadow-md shadow-black/80 -translate-x-1/2 scale-0 group-hover/progress:scale-100 transition-transform duration-150"
              style={{ left: `${progressPct}%` }}
            />

            {/* Hover Tooltip */}
            {hoverTime && (
              <div
                className="absolute bottom-5 -translate-x-1/2 px-1.5 py-0.5 rounded bg-slate-900/95 border border-white/20 text-white text-[10px] font-mono shadow-lg pointer-events-none z-40 whitespace-nowrap"
                style={{ left: `${hoverTime.pct}%` }}
              >
                {formatTime(hoverTime.time)}
              </div>
            )}
          </div>

          {/* Controls Bottom Row */}
          <div className="flex items-center justify-between gap-1 sm:gap-3 text-white">
            {/* Left Controls: Play, Skip, Volume, Time */}
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              {/* Play / Pause Button */}
              <button
                onClick={handlePlayPause}
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-center shadow-md shadow-rose-600/40 transition-all active:scale-95 shrink-0"
                title={isPlaying ? "Pausar (Espaço)" : "Reproduzir (Espaço)"}
              >
                {isPlaying ? (
                  <Pause size={14} className="sm:w-4 sm:h-4 fill-current" />
                ) : (
                  <Play size={14} className="sm:w-4 sm:h-4 fill-current ml-0.5" />
                )}
              </button>

              {/* Skip -10s */}
              <button
                onClick={() => handleSkip(-10)}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0"
                title="Voltar 10s (←)"
              >
                <RotateCcw size={13} className="sm:w-3.5 sm:h-3.5" />
              </button>

              {/* Skip +10s */}
              <button
                onClick={() => handleSkip(10)}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0"
                title="Avançar 10s (→)"
              >
                <RotateCw size={13} className="sm:w-3.5 sm:h-3.5" />
              </button>

              {/* Volume & Mute */}
              <div className="hidden xs:flex items-center gap-0.5 group/vol relative">
                <button
                  onClick={handleToggleMute}
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0"
                  title={isMuted ? "Desmutar (M)" : "Mutar (M)"}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX size={15} />
                  ) : volume < 0.5 ? (
                    <Volume1 size={15} />
                  ) : (
                    <Volume2 size={15} />
                  )}
                </button>

                <div className="w-0 overflow-hidden group-hover/vol:w-12 sm:group-hover/vol:w-16 transition-all duration-200 flex items-center">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-12 sm:w-16 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-rose-500"
                  />
                </div>
              </div>

              {/* Time Display */}
              <div className="text-[10px] sm:text-[11.5px] font-mono text-slate-300 ml-0.5 select-none shrink-0">
                <span className="text-white font-bold">{formatTime(currentTime)}</span>
                <span className="opacity-40 mx-0.5 sm:mx-1">/</span>
                <span className="hidden sm:inline">{formatTime(duration || 2980)}</span>
              </div>
            </div>

            {/* Right Controls: Moments, Speed, Fullscreen */}
            <div className="flex items-center gap-1 sm:gap-1.5 relative shrink-0">
              {/* Chapters / Moments Button */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowChapterMenu(!showChapterMenu);
                    setShowSettings(false);
                  }}
                  className={`px-1.5 sm:px-2 py-1 rounded text-[11px] font-semibold flex items-center gap-1 transition-colors ${
                    showChapterMenu
                      ? "bg-rose-600 text-white"
                      : "bg-white/10 hover:bg-white/20 text-slate-200"
                  }`}
                  title="Momentos em Destaque"
                >
                  <Layers size={13} />
                  <span className="hidden md:inline">{t.chapters}</span>
                </button>

                {/* Chapter Menu Dropdown */}
                {showChapterMenu && (
                  <div className="absolute bottom-9 right-0 w-60 sm:w-72 bg-slate-900/95 backdrop-blur-xl border border-white/15 rounded-xl p-1.5 shadow-2xl z-50 animate-in fade-in slide-in-from-bottom-2">
                    <div className="text-[10.5px] font-bold text-slate-400 uppercase px-2.5 py-1 border-b border-white/10 mb-1">
                      {t.chapters}
                    </div>
                    <div className="flex flex-col gap-0.5 max-h-48 overflow-y-auto">
                      {CHAPTER_MARKERS.map((mark, i) => (
                        <button
                          key={i}
                          onClick={() => handleSeekToMarker(mark.time)}
                          className="flex items-center justify-between px-2.5 py-1.5 rounded text-left text-[11px] text-slate-200 hover:bg-white/10 transition-colors"
                        >
                          <span className="truncate pr-2">{mark.label}</span>
                          <span className="font-mono text-[10px] text-rose-400 font-bold shrink-0">
                            {formatTime(mark.time)}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Speed Settings Button */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowSettings(!showSettings);
                    setShowChapterMenu(false);
                  }}
                  className={`px-1.5 sm:px-2 py-1 rounded text-[11px] font-bold transition-colors ${
                    showSettings || playbackRate !== 1
                      ? "bg-rose-600 text-white"
                      : "bg-white/10 hover:bg-white/20 text-slate-200"
                  }`}
                  title="Velocidade"
                >
                  <span>{playbackRate}x</span>
                </button>

                {/* Speed Dropdown */}
                {showSettings && (
                  <div className="absolute bottom-9 right-0 w-32 bg-slate-900/95 backdrop-blur-xl border border-white/15 rounded-xl p-1 shadow-2xl z-50 animate-in fade-in slide-in-from-bottom-2">
                    <div className="text-[10px] font-bold text-slate-400 uppercase px-2 py-0.5 border-b border-white/10 mb-0.5">
                      {t.speed}
                    </div>
                    {[0.75, 1, 1.25, 1.5, 2].map((rate) => (
                      <button
                        key={rate}
                        onClick={() => handleSetRate(rate)}
                        className={`w-full flex items-center justify-between px-2.5 py-1 rounded text-[11px] font-semibold text-left transition-colors ${
                          playbackRate === rate
                            ? "bg-rose-600 text-white"
                            : "text-slate-200 hover:bg-white/10"
                        }`}
                      >
                        <span>{rate}x</span>
                        {playbackRate === rate && <span className="text-[10px]">✓</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Fullscreen Button */}
              <button
                onClick={handleToggleFullscreen}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title={isFullscreen ? "Sair da Tela Cheia (F)" : "Tela Cheia (F)"}
              >
                {isFullscreen ? <Minimize size={15} /> : <Maximize size={15} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
