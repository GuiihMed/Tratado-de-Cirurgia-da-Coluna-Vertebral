"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Player from "@vimeo/player";
import {
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume2,
  Volume1,
  VolumeX,
  Maximize,
  Minimize,
  PictureInPicture,
  Sparkles,
  Settings,
  HelpCircle,
  X,
  FastForward,
  Rewind,
  Check,
} from "lucide-react";
import { Locale } from "@/lib/types";

interface HarmoniousVimeoPlayerProps {
  videoId?: string;
  url?: string;
  title?: string;
  guests?: string;
  episodeNumber?: number;
  locale?: Locale;
  autoplay?: boolean;
  className?: string;
  aspectRatio?: string;
  thumbnailUrl?: string;
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
  return "1240418291";
}

export default function HarmoniousVimeoPlayer({
  videoId,
  url,
  title = "Tratado em Debate • Videocast Oficial SBC",
  guests,
  episodeNumber = 9,
  locale = "pt",
  autoplay = false,
  className = "",
  aspectRatio = "16/9",
  thumbnailUrl,
}: HarmoniousVimeoPlayerProps) {
  const cleanVideoId = extractVimeoId(videoId, url);

  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);

  // Estados do Player sincronizados diretamente com a API do Vimeo
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
  const [showShortcutsModal, setShowShortcutsModal] = useState(false);
  const [showRemainingTime, setShowRemainingTime] = useState(false);
  const [hoverTime, setHoverTime] = useState<{ time: number; pct: number } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // HUD Visual Feedback (Centro da tela)
  const [hudFeedback, setHudFeedback] = useState<{
    type: "play" | "pause" | "forward" | "rewind" | "volume" | "mute" | "rate";
    value?: string;
    id: number;
  } | null>(null);
  const hudTimerRef = useRef<NodeJS.Timeout | null>(null);

  const triggerHud = useCallback(
    (type: "play" | "pause" | "forward" | "rewind" | "volume" | "mute" | "rate", value?: string) => {
      if (hudTimerRef.current) clearTimeout(hudTimerRef.current);
      setHudFeedback({ type, value, id: Date.now() });
      hudTimerRef.current = setTimeout(() => {
        setHudFeedback(null);
      }, 750);
    },
    []
  );

  // Inatividade para ocultar controles
  const hideControlsTimer = useRef<NodeJS.Timeout | null>(null);
  const resetControlsTimeout = useCallback(() => {
    setControlsVisible(true);
    if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current);
    if (isPlaying && !showSettings && !showShortcutsModal) {
      hideControlsTimer.current = setTimeout(() => {
        setControlsVisible(false);
      }, 2800);
    }
  }, [isPlaying, showSettings, showShortcutsModal]);

  // Scrubbing/Timeline
  const [isScrubbing, setIsScrubbing] = useState(false);
  const [scrubTime, setScrubTime] = useState(0);
  const isScrubbingRef = useRef(false);
  const scrubTimeRef = useRef(0);
  const durationRef = useRef(0);

  useEffect(() => {
    durationRef.current = duration;
  }, [duration]);

  // Thumbnail dinâmica
  const [coverUrl, setCoverUrl] = useState<string>(() => {
    if (thumbnailUrl) return thumbnailUrl;
    return `https://vimeocdn.com/video/${cleanVideoId}`;
  });

  useEffect(() => {
    let active = true;
    fetch(`https://vimeo.com/api/oembed.json?url=https://player.vimeo.com/video/${cleanVideoId}`)
      .then((r) => r.json())
      .then((d) => {
        if (!active || !d?.thumbnail_url) return;
        const high = d.thumbnail_url.replace(/_\d+x\d+/, "_1280x720");
        setCoverUrl(high);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [cleanVideoId]);

  // Inicialização do SDK do Vimeo
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
          durationRef.current = d;
          const v = await player.getVolume();
          setVolume(v);
          const m = await player.getMuted();
          setIsMuted(m);
        } catch (_) {}
      });

      player.on("play", () => {
        setIsPlaying(true);
        setHasStarted(true);
        setIsLoading(false);
      });

      player.on("pause", () => {
        setIsPlaying(false);
        setControlsVisible(true);
      });

      player.on("timeupdate", (data) => {
        if (!isScrubbingRef.current) {
          setCurrentTime(data.seconds);
          if (data.duration && (duration === 0 || durationRef.current === 0)) {
            setDuration(data.duration);
            durationRef.current = data.duration;
          }
          if (data.percent) {
            setBufferedPct(Math.min(100, data.percent * 100 + 8));
          }
        }
      });

      player.on("progress", (data) => {
        if (data && typeof data.percent === "number") {
          setBufferedPct(Math.min(100, data.percent * 100));
        }
      });

      player.on("volumechange", (data) => {
        setVolume(data.volume);
        setIsMuted(data.volume === 0);
      });

      player.on("playbackratechange", (data) => {
        setPlaybackRate(data.playbackRate);
      });

      player.on("ended", () => {
        setIsPlaying(false);
        setControlsVisible(true);
      });

      return () => {
        if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current);
        if (hudTimerRef.current) clearTimeout(hudTimerRef.current);
        player.destroy().catch(() => {});
      };
    } catch (e) {
      console.warn("Vimeo SDK load fallback:", e);
      setIsLoading(false);
    }
  }, [cleanVideoId]);

  // Comandos Principais
  const handlePlayPause = useCallback(async () => {
    if (!playerRef.current) return;
    try {
      const paused = await playerRef.current.getPaused();
      if (paused) {
        await playerRef.current.setMuted(false).catch(() => {});
        await playerRef.current.setVolume(volume > 0 ? volume : 1).catch(() => {});
        await playerRef.current.play();
        setIsPlaying(true);
        setHasStarted(true);
        triggerHud("play");
      } else {
        await playerRef.current.pause();
        setIsPlaying(false);
        triggerHud("pause");
      }
    } catch (_) {}
  }, [volume, triggerHud]);

  const handleSkip = useCallback(
    async (secondsDelta: number) => {
      if (!playerRef.current) return;
      try {
        const cur = await playerRef.current.getCurrentTime();
        const dur = durationRef.current || duration || 2600;
        const target = Math.max(0, Math.min(dur, cur + secondsDelta));
        await playerRef.current.setCurrentTime(target);
        setCurrentTime(target);
        triggerHud(secondsDelta > 0 ? "forward" : "rewind", `${Math.abs(secondsDelta)}s`);
      } catch (_) {}
    },
    [duration, triggerHud]
  );

  const handleToggleMute = useCallback(async () => {
    if (!playerRef.current) return;
    try {
      if (isMuted || volume === 0) {
        const targetVol = volume > 0 ? volume : 0.8;
        await playerRef.current.setMuted(false);
        await playerRef.current.setVolume(targetVol);
        setIsMuted(false);
        setVolume(targetVol);
        triggerHud("volume", `${Math.round(targetVol * 100)}%`);
      } else {
        await playerRef.current.setMuted(true);
        await playerRef.current.setVolume(0);
        setIsMuted(true);
        triggerHud("mute");
      }
    } catch (_) {}
  }, [isMuted, volume, triggerHud]);

  const handleVolumeChange = useCallback(
    async (newVol: number) => {
      if (!playerRef.current) return;
      const clamped = Math.max(0, Math.min(1, newVol));
      setVolume(clamped);
      setIsMuted(clamped === 0);
      try {
        await playerRef.current.setVolume(clamped);
        await playerRef.current.setMuted(clamped === 0);
        triggerHud(clamped === 0 ? "mute" : "volume", `${Math.round(clamped * 100)}%`);
      } catch (_) {}
    },
    [triggerHud]
  );

  const handleSetRate = useCallback(
    async (rate: number) => {
      if (!playerRef.current) return;
      try {
        await playerRef.current.setPlaybackRate(rate);
        setPlaybackRate(rate);
        setShowSettings(false);
        triggerHud("rate", `${rate}x`);
      } catch (_) {}
    },
    [triggerHud]
  );

  const handleToggleFullscreen = useCallback(async () => {
    if (!containerRef.current) return;
    try {
      if (!document.fullscreenElement) {
        if (containerRef.current.requestFullscreen) {
          await containerRef.current.requestFullscreen();
        } else if ((containerRef.current as any).webkitRequestFullscreen) {
          await (containerRef.current as any).webkitRequestFullscreen();
        }
        setIsFullscreen(true);
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        }
        setIsFullscreen(false);
      }
    } catch (_) {
      // Toggle CSS fallback
      setIsFullscreen((prev) => !prev);
    }
  }, []);

  const handleTogglePiP = useCallback(async () => {
    if (!playerRef.current) return;
    try {
      // @vimeo/player PictureInPicture API
      const pip = await (playerRef.current as any).getPictureInPicture();
      if (pip) {
        await (playerRef.current as any).exitPictureInPicture();
      } else {
        await (playerRef.current as any).requestPictureInPicture();
      }
    } catch (_) {}
  }, []);

  // Monitora Fullscreen
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    document.addEventListener("webkitfullscreenchange", handleFsChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFsChange);
      document.removeEventListener("webkitfullscreenchange", handleFsChange);
    };
  }, []);

  // Atalhos de Teclado Globais quando focado no player
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      if (
        activeEl?.tagName === "INPUT" ||
        activeEl?.tagName === "TEXTAREA" ||
        activeEl?.getAttribute("contenteditable")
      ) {
        return;
      }

      // Atalhos
      if (e.code === "Space" || e.key === "k" || e.key === "K") {
        e.preventDefault();
        handlePlayPause();
        resetControlsTimeout();
      } else if (e.key === "ArrowLeft" || e.key === "j" || e.key === "J") {
        e.preventDefault();
        handleSkip(-10);
        resetControlsTimeout();
      } else if (e.key === "ArrowRight" || e.key === "l" || e.key === "L") {
        e.preventDefault();
        handleSkip(10);
        resetControlsTimeout();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        handleVolumeChange(volume + 0.1);
        resetControlsTimeout();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        handleVolumeChange(volume - 0.1);
        resetControlsTimeout();
      } else if (e.key === "m" || e.key === "M") {
        e.preventDefault();
        handleToggleMute();
        resetControlsTimeout();
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        handleToggleFullscreen();
      } else if (e.key === "p" || e.key === "P") {
        e.preventDefault();
        handleTogglePiP();
      } else if (e.key === "?" || (e.shiftKey && e.key === "/")) {
        e.preventDefault();
        setShowShortcutsModal((prev) => !prev);
      } else if (e.key >= "0" && e.key <= "9") {
        e.preventDefault();
        const pct = parseInt(e.key, 10) / 10;
        const dur = durationRef.current || duration || 2600;
        const target = dur * pct;
        if (playerRef.current) {
          playerRef.current.setCurrentTime(target).catch(() => {});
        }
        setCurrentTime(target);
        triggerHud("forward", `${e.key}0%`);
        resetControlsTimeout();
      } else if (e.key === ">" || (e.shiftKey && e.key === ".")) {
        e.preventDefault();
        const rates = [0.5, 0.75, 1, 1.25, 1.5, 2];
        const next = rates.find((r) => r > playbackRate) || rates[rates.length - 1];
        handleSetRate(next);
      } else if (e.key === "<" || (e.shiftKey && e.key === ",")) {
        e.preventDefault();
        const rates = [0.5, 0.75, 1, 1.25, 1.5, 2];
        const prev = [...rates].reverse().find((r) => r < playbackRate) || rates[0];
        handleSetRate(prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    handlePlayPause,
    handleSkip,
    handleVolumeChange,
    handleToggleMute,
    handleToggleFullscreen,
    handleTogglePiP,
    handleSetRate,
    volume,
    playbackRate,
    duration,
    resetControlsTimeout,
    triggerHud,
  ]);

  // Duplo clique na área de vídeo: esquerda -10s, direita +10s
  const lastClickRef = useRef<{ time: number; x: number }>({ time: 0, x: 0 });
  const handleVideoAreaClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const isDouble = now - lastClickRef.current.time < 300;

    if (isDouble) {
      if (x < rect.width * 0.35) {
        handleSkip(-10);
      } else if (x > rect.width * 0.65) {
        handleSkip(10);
      } else {
        handlePlayPause();
      }
      lastClickRef.current = { time: 0, x: 0 };
    } else {
      lastClickRef.current = { time: now, x };
      setTimeout(() => {
        if (lastClickRef.current.time === now) {
          handlePlayPause();
        }
      }, 240);
    }
    resetControlsTimeout();
  };

  // Formatação de Tempo
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

  const displayTime = isScrubbing ? scrubTime : currentTime;
  const progressPct = duration > 0 ? (displayTime / duration) * 100 : 0;

  return (
    <div
      ref={containerRef}
      onMouseMove={resetControlsTimeout}
      onMouseEnter={resetControlsTimeout}
      className={`harmonious-vimeo-player relative w-full overflow-hidden select-none bg-black group ${
        isFullscreen
          ? "fixed inset-0 z-[999999] h-screen w-screen rounded-none"
          : "rounded-2xl shadow-2xl border border-slate-700/60"
      } ${className}`}
      style={{
        aspectRatio: isFullscreen ? "unset" : aspectRatio || "16/9",
      }}
    >
      {/* 1. Underlying Vimeo Iframe (Controls=0 Chromeless) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none bg-black">
        <iframe
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${cleanVideoId}?controls=0&badge=0&autopause=0&player_id=0&app_id=58479&dnt=1&playsinline=1&title=0&byline=0&portrait=0&muted=0`}
          className="w-full h-full border-0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; speaker-selection"
          allowFullScreen
          title={title}
        />
      </div>

      {/* 2. Capa Inicial com Play Button da SBC (antes do primeiro play) */}
      {!hasStarted && (
        <div
          onClick={handlePlayPause}
          className="absolute inset-0 z-20 cursor-pointer flex flex-col justify-between p-4 sm:p-8 bg-cover bg-center overflow-hidden transition-all duration-300 group/cover"
          style={{ backgroundImage: `url(${coverUrl})` }}
        >
          {/* Dark Glass Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/50 backdrop-blur-[1px] group-hover/cover:backdrop-blur-none transition-all" />

          {/* Top Bar na capa */}
          <div className="relative z-10 flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f52238] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-rose-600/40">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>Videocast Oficial SBC</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 border border-white/20 text-sky-400 text-xs font-bold backdrop-blur-md">
              <Sparkles size={13} />
              <span>1080p Full HD</span>
            </div>
          </div>

          {/* Center Play Button com pulso SBC */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center px-4">
            <div className="relative flex items-center justify-center mb-4">
              <div className="absolute -inset-4 rounded-full bg-[#f52238]/40 blur-lg animate-pulse" />
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#f52238] text-white flex items-center justify-center shadow-2xl shadow-rose-600/60 border-2 border-white/90 group-hover/cover:scale-110 transition-transform duration-300">
                <Play size={30} className="fill-current ml-1" />
              </div>
            </div>

            <span className="text-white text-sm sm:text-base font-bold uppercase tracking-wider drop-shadow bg-black/70 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/15">
              {locale === "en" ? "Watch Episode" : locale === "es" ? "Ver Episodio" : "Assistir Episódio"}
            </span>

            {title && (
              <h3 className="mt-3 text-white text-base sm:text-lg md:text-xl font-bold max-w-xl drop-shadow line-clamp-2">
                {title}
              </h3>
            )}
            {guests && (
              <p className="text-slate-300 text-xs sm:text-sm font-medium mt-1 drop-shadow">
                {guests}
              </p>
            )}
          </div>

          {/* Bottom info */}
          <div className="relative z-10 flex items-center justify-between text-xs text-slate-300">
            <span>Episódio 0{episodeNumber}</span>
            <span className="flex items-center gap-1 text-slate-400">
              Pressione <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-white">Espaço</kbd> para iniciar
            </span>
          </div>
        </div>
      )}

      {/* 3. Área Interativa de Clique e Gestos (Single e Double Click) */}
      {hasStarted && (
        <div
          onClick={handleVideoAreaClick}
          className="absolute inset-0 z-10 cursor-pointer"
        />
      )}

      {/* 4. Top Header Overlay (Aparece no hover / pausa) */}
      {hasStarted && (
        <div
          className={`absolute top-0 inset-x-0 z-30 p-3 sm:p-5 flex items-center justify-between gap-3 bg-gradient-to-b from-black/85 via-black/45 to-transparent transition-opacity duration-300 pointer-events-auto ${
            controlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#f52238]" />
            </span>
            <span className="text-white text-xs sm:text-sm font-bold truncate drop-shadow">
              {title}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setShowShortcutsModal(true)}
              className="p-1.5 rounded-lg bg-black/60 hover:bg-black/90 text-slate-300 hover:text-white border border-white/15 backdrop-blur-md transition-all text-xs flex items-center gap-1"
              title="Atalhos de Teclado (?)"
            >
              <HelpCircle size={14} />
              <span className="hidden sm:inline">Atalhos</span>
            </button>
          </div>
        </div>
      )}

      {/* 5. Center HUD Visual Feedback (+10s, -10s, Volume, Play/Pause) */}
      {hudFeedback && (
        <div
          key={hudFeedback.id}
          className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="flex flex-col items-center justify-center gap-1 px-5 py-3.5 rounded-2xl bg-black/80 backdrop-blur-md border border-white/20 text-white shadow-2xl">
            {hudFeedback.type === "play" && <Play size={36} className="fill-current text-[#f52238]" />}
            {hudFeedback.type === "pause" && <Pause size={36} className="fill-current text-[#f52238]" />}
            {hudFeedback.type === "forward" && (
              <>
                <FastForward size={36} className="fill-current text-[#f52238]" />
                <span className="text-xs font-bold font-mono">+{hudFeedback.value}</span>
              </>
            )}
            {hudFeedback.type === "rewind" && (
              <>
                <Rewind size={36} className="fill-current text-[#f52238]" />
                <span className="text-xs font-bold font-mono">-{hudFeedback.value}</span>
              </>
            )}
            {hudFeedback.type === "volume" && (
              <>
                <Volume2 size={36} className="text-[#f52238]" />
                <span className="text-xs font-bold font-mono">{hudFeedback.value}</span>
              </>
            )}
            {hudFeedback.type === "mute" && (
              <>
                <VolumeX size={36} className="text-rose-400" />
                <span className="text-xs font-bold">Mudo</span>
              </>
            )}
            {hudFeedback.type === "rate" && (
              <span className="text-lg font-black font-mono text-[#f52238]">
                {hudFeedback.value}
              </span>
            )}
          </div>
        </div>
      )}

      {/* 6. Barra de Controles Inferior (Design Harmonioso SBC) */}
      {hasStarted && (
        <div
          className={`absolute bottom-0 inset-x-0 z-30 px-3 sm:px-5 py-2.5 sm:py-3.5 bg-gradient-to-t from-black/95 via-black/80 to-transparent transition-opacity duration-300 pointer-events-auto ${
            controlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Progress / Timeline Bar com Buffer e Scrubber */}
          <div
            className="relative w-full h-3.5 sm:h-4 flex items-center cursor-pointer group/timeline mb-2 touch-none select-none"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
              const t = pos * (durationRef.current || duration || 2600);
              setHoverTime({ time: t, pct: pos * 100 });
            }}
            onMouseLeave={() => setHoverTime(null)}
            onPointerDown={(e) => {
              e.currentTarget.setPointerCapture(e.pointerId);
              isScrubbingRef.current = true;
              setIsScrubbing(true);
              const rect = e.currentTarget.getBoundingClientRect();
              const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
              const t = pos * (durationRef.current || duration || 2600);
              scrubTimeRef.current = t;
              setScrubTime(t);
            }}
            onPointerMove={(e) => {
              if (isScrubbingRef.current) {
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                const t = pos * (durationRef.current || duration || 2600);
                scrubTimeRef.current = t;
                setScrubTime(t);
              }
            }}
            onPointerUp={(e) => {
              try {
                e.currentTarget.releasePointerCapture(e.pointerId);
              } catch (_) {}
              if (isScrubbingRef.current) {
                isScrubbingRef.current = false;
                setIsScrubbing(false);
                const finalTime = scrubTimeRef.current;
                if (playerRef.current) {
                  playerRef.current.setCurrentTime(finalTime).catch(() => {});
                }
                setCurrentTime(finalTime);
              }
            }}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
              const t = pos * (durationRef.current || duration || 2600);
              if (playerRef.current) {
                playerRef.current.setCurrentTime(t).catch(() => {});
              }
              setCurrentTime(t);
            }}
          >
            {/* Rail de Fundo */}
            <div className="w-full h-1 sm:h-1.5 rounded-full bg-white/20 backdrop-blur-sm relative overflow-hidden transition-all group-hover/timeline:h-2">
              {/* Buffer Progress */}
              <div
                className="absolute left-0 top-0 bottom-0 bg-white/30 rounded-full transition-all duration-300"
                style={{ width: `${bufferedPct}%` }}
              />
              {/* Active Play Progress (Vermelho SBC #f52238) */}
              <div
                className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#f52238] to-[#ff4757] rounded-full shadow-sm shadow-rose-600/80"
                style={{ width: `${progressPct}%` }}
              />
            </div>

            {/* Scrubber Knob */}
            <div
              className={`absolute w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white border-2 border-[#f52238] shadow-md shadow-black/80 -translate-x-1/2 transition-transform duration-100 ${
                isScrubbing ? "scale-125" : "scale-0 group-hover/timeline:scale-100"
              }`}
              style={{ left: `${progressPct}%` }}
            />

            {/* Hover Tooltip com tempo exato */}
            {hoverTime && (
              <div
                className="absolute bottom-6 -translate-x-1/2 px-2 py-0.5 rounded-md bg-slate-900/95 border border-white/20 text-white text-[11px] font-mono shadow-xl pointer-events-none z-40 whitespace-nowrap"
                style={{ left: `${hoverTime.pct}%` }}
              >
                {formatTime(hoverTime.time)}
              </div>
            )}
          </div>

          {/* Linha de Controles */}
          <div className="flex items-center justify-between gap-2 text-white">
            {/* Esquerda: Play/Pause, -10s, +10s, Volume, Tempo */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              {/* Play / Pause Button */}
              <button
                onClick={handlePlayPause}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#f52238] hover:bg-[#db152a] text-white flex items-center justify-center shadow-lg shadow-rose-600/40 transition-all active:scale-95 shrink-0"
                title={isPlaying ? "Pausar (Espaço / K)" : "Reproduzir (Espaço / K)"}
              >
                {isPlaying ? (
                  <Pause size={15} className="fill-current" />
                ) : (
                  <Play size={15} className="fill-current ml-0.5" />
                )}
              </button>

              {/* Voltar 10s */}
              <button
                onClick={() => handleSkip(-10)}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="Voltar 10s (← / J)"
              >
                <RotateCcw size={15} />
              </button>

              {/* Avançar 10s */}
              <button
                onClick={() => handleSkip(10)}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="Avançar 10s (→ / L)"
              >
                <RotateCw size={15} />
              </button>

              {/* Controle de Volume */}
              <div className="flex items-center gap-1 group/vol">
                <button
                  onClick={handleToggleMute}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  title={isMuted ? "Desmutar (M)" : "Mutar (M)"}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX size={16} className="text-rose-400" />
                  ) : volume < 0.5 ? (
                    <Volume1 size={16} />
                  ) : (
                    <Volume2 size={16} />
                  )}
                </button>

                {/* Slider de Volume deslizante */}
                <div className="w-0 overflow-hidden group-hover/vol:w-16 sm:group-hover/vol:w-20 transition-all duration-200 flex items-center">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                    className="w-16 sm:w-20 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-[#f52238]"
                  />
                </div>
              </div>

              {/* Mostrador de Tempo */}
              <button
                onClick={() => setShowRemainingTime(!showRemainingTime)}
                className="text-[11px] sm:text-xs font-mono text-slate-300 ml-1 hover:text-white select-none transition-colors"
                title="Alternar entre tempo total e restante"
              >
                <span className="text-white font-bold">{formatTime(displayTime)}</span>
                <span className="opacity-40 mx-1">/</span>
                <span>
                  {showRemainingTime
                    ? `-${formatTime(Math.max(0, (duration || 2600) - displayTime))}`
                    : formatTime(duration || 2600)}
                </span>
              </button>
            </div>

            {/* Direita: Velocidade, PiP, Fullscreen */}
            <div className="flex items-center gap-1 sm:gap-2 shrink-0 relative">
              {/* Menu de Velocidade */}
              <div className="relative">
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className={`px-2 py-1 rounded-md text-xs font-bold transition-all ${
                    playbackRate !== 1 || showSettings
                      ? "bg-[#f52238] text-white"
                      : "bg-white/10 hover:bg-white/20 text-slate-200"
                  }`}
                  title="Velocidade de Reprodução (< e >)"
                >
                  <span>{playbackRate}x</span>
                </button>

                {showSettings && (
                  <div className="absolute bottom-10 right-0 w-32 bg-slate-900/95 backdrop-blur-xl border border-white/15 rounded-xl p-1.5 shadow-2xl z-50 animate-in fade-in slide-in-from-bottom-2">
                    <div className="text-[10px] font-bold text-slate-400 uppercase px-2 py-1 border-b border-white/10 mb-1">
                      Velocidade
                    </div>
                    {[0.5, 0.75, 1, 1.25, 1.5, 2].map((rate) => (
                      <button
                        key={rate}
                        onClick={() => handleSetRate(rate)}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                          playbackRate === rate
                            ? "bg-[#f52238] text-white"
                            : "text-slate-300 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <span>{rate}x</span>
                        {playbackRate === rate && <Check size={12} />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Picture in Picture */}
              <button
                onClick={handleTogglePiP}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="Picture-in-Picture (P)"
              >
                <PictureInPicture size={15} />
              </button>

              {/* Fullscreen Button */}
              <button
                onClick={handleToggleFullscreen}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title={isFullscreen ? "Sair da Tela Cheia (F / Esc)" : "Tela Cheia (F)"}
              >
                {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 7. Modal de Ajuda com Atalhos de Teclado */}
      {showShortcutsModal && (
        <div
          className="absolute inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowShortcutsModal(false)}
        >
          <div
            className="w-full max-w-sm bg-slate-900 border border-white/20 rounded-2xl p-5 shadow-2xl text-white animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
              <h4 className="text-sm font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#f52238]" />
                Atalhos de Teclado do Player
              </h4>
              <button
                onClick={() => setShowShortcutsModal(false)}
                className="p-1 rounded-md hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-slate-300">Reproduzir / Pausar</span>
                <span className="font-mono bg-white/10 px-2 py-0.5 rounded text-white font-bold">
                  Espaço ou K
                </span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-slate-300">Retroceder / Avançar 10s</span>
                <span className="font-mono bg-white/10 px-2 py-0.5 rounded text-white font-bold">
                  ← / → ou J / L
                </span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-slate-300">Aumentar / Diminuir Volume</span>
                <span className="font-mono bg-white/10 px-2 py-0.5 rounded text-white font-bold">
                  ↑ / ↓
                </span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-slate-300">Ativar / Desativar Mudo</span>
                <span className="font-mono bg-white/10 px-2 py-0.5 rounded text-white font-bold">
                  M
                </span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-slate-300">Tela Cheia</span>
                <span className="font-mono bg-white/10 px-2 py-0.5 rounded text-white font-bold">
                  F
                </span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-slate-300">Picture-in-Picture</span>
                <span className="font-mono bg-white/10 px-2 py-0.5 rounded text-white font-bold">
                  P
                </span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-slate-300">Alterar Velocidade</span>
                <span className="font-mono bg-white/10 px-2 py-0.5 rounded text-white font-bold">
                  &lt; e &gt;
                </span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-300">Pular para 0% a 90%</span>
                <span className="font-mono bg-white/10 px-2 py-0.5 rounded text-white font-bold">
                  0 a 9
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 text-center">
              <button
                onClick={() => setShowShortcutsModal(false)}
                className="w-full py-1.5 rounded-lg bg-[#f52238] hover:bg-[#db152a] text-white font-bold text-xs transition-colors"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
