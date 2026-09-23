"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Player from "@vimeo/player";
import {
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  FastForward,
  Rewind,
  Volume2,
  VolumeX,
  Volume1,
  Maximize,
  Minimize,
  Sparkles,
  PictureInPicture,
} from "lucide-react";
import SpotifyIcon from "@/components/icons/SpotifyIcon";
import { Locale } from "@/lib/types";

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
}

export default function CustomVimeoPlayer({
  videoId = "1228104091",
  url = "https://player.vimeo.com/video/1228104091",
  title,
  guests,
  locale = "pt",
  autoplay = false,
  onPopOutMiniPlayer,
  showPopOutButton = true,
  className = "",
  aspectRatio = "16/9",
  thumbnailUrl,
  premiereDate,
  spotifyUrl,
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
  const [hoverTime, setHoverTime] = useState<{ time: number; pct: number } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initial and dynamic thumbnail resolution from Vimeo
  const getInitialThumbnail = () => {
    if (typeof window !== "undefined" && videoId) {
      try {
        const cached = sessionStorage.getItem(`vimeo_thumb_${videoId}`);
        if (cached) return cached;
      } catch (_) {}
    }
    if (thumbnailUrl) return thumbnailUrl;
    if (videoId === "1228104091") return "/assets/debate-ep4-cover.jpg";
    if (videoId === "1225996397") return "/assets/debate-ep3-cover.jpg";
    if (videoId === "1225402821") return "/assets/debate-ep2-cover.jpg";
    if (videoId === "1220279985") return "/assets/debate-ep1-cover.jpg";
    return "";
  };

  const [resolvedThumbnail, setResolvedThumbnail] = useState<string>(getInitialThumbnail);

  useEffect(() => {
    if (!videoId) return;

    // Atualiza base inicial se thumbnailUrl for fornecido
    if (thumbnailUrl) {
      setResolvedThumbnail(thumbnailUrl);
    }

    // Sempre busca a capa mais recente diretamente da API do Vimeo em tempo real
    let isMounted = true;
    fetch(`https://vimeo.com/api/oembed.json?url=https://player.vimeo.com/video/${videoId}`)
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
            sessionStorage.setItem(`vimeo_thumb_${videoId}`, highRes);
          } catch (_) {}
        }
      })
      .catch(() => {});

    return () => {
      isMounted = false;
    };
  }, [thumbnailUrl, videoId]);

  // Premiere Countdown logic
  const [mounted, setMounted] = useState(false);
  const [nowMs, setNowMs] = useState<number>(() => Date.now());

  useEffect(() => {
    setMounted(true);
    if (!premiereDate) return;

    setNowMs(Date.now());
    const timer = setInterval(() => {
      const current = Date.now();
      setNowMs(current);
      if (new Date(premiereDate).getTime() <= current) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [premiereDate]);

  const premiereTarget = premiereDate ? new Date(premiereDate).getTime() : 0;
  // If premiereDate is in the future, premiere countdown is active
  const isPremiereActive = Boolean(premiereDate && premiereTarget > nowMs);

  const diffMs = Math.max(0, premiereTarget - nowMs);
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const diffSeconds = Math.floor((diffMs % (1000 * 60)) / 1000);

  // 60FPS Drag/Scrubbing states
  const [isScrubbing, setIsScrubbing] = useState(false);
  const [scrubTime, setScrubTime] = useState(0);
  const isScrubbingRef = useRef(false);
  const scrubTimeRef = useRef(0);

  // On-screen Skip HUD feedback (Accumulated Seconds - YouTube/Netflix style)
  const [skipFeedback, setSkipFeedback] = useState<{
    direction: "forward" | "backward";
    seconds: number;
    id: number;
  } | null>(null);
  const skipAccumulatorRef = useRef<{
    direction: "forward" | "backward";
    seconds: number;
    timer: NodeJS.Timeout | null;
  }>({
    direction: "forward",
    seconds: 0,
    timer: null,
  });

  // Optimistic refs for 0ms latency seeking and skipping
  const currentTimeRef = useRef(0);
  const durationRef = useRef(0);
  const isSeekingRef = useRef(false);
  const seekDebounceTimer = useRef<NodeJS.Timeout | null>(null);
  const seekReleaseTimer = useRef<NodeJS.Timeout | null>(null);
  const hideControlsTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    currentTimeRef.current = currentTime;
  }, [currentTime]);

  useEffect(() => {
    durationRef.current = duration;
  }, [duration]);

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

  // Instant Seek logic with 0ms UI delay and Vimeo throttling
  const seekTo = useCallback((targetTime: number, debounceMs = 150) => {
    const dur = durationRef.current || duration || 2980;
    const clamped = Math.max(0, Math.min(dur, targetTime));

    // 1. Instant 0ms UI response
    currentTimeRef.current = clamped;
    setCurrentTime(clamped);

    // 2. Lock timeupdate so Vimeo's stale frames don't bounce the scrubber back
    isSeekingRef.current = true;
    if (seekReleaseTimer.current) clearTimeout(seekReleaseTimer.current);
    seekReleaseTimer.current = setTimeout(() => {
      isSeekingRef.current = false;
    }, 1000);

    // 3. Dispatch to Vimeo iframe asynchronously
    if (seekDebounceTimer.current) clearTimeout(seekDebounceTimer.current);
    if (debounceMs <= 0) {
      if (playerRef.current) {
        playerRef.current.setCurrentTime(clamped).catch(() => {});
      }
    } else {
      seekDebounceTimer.current = setTimeout(() => {
        if (playerRef.current) {
          playerRef.current.setCurrentTime(clamped).catch(() => {});
        }
      }, debounceMs);
    }
  }, [duration]);

  // Click Accumulator: Shows +10s, +20s, +30s on screen with zero lag
  const triggerSkipFeedback = useCallback((delta: number) => {
    const dir = delta > 0 ? "forward" : "backward";
    const absDelta = Math.abs(delta);

    if (skipAccumulatorRef.current.timer) {
      clearTimeout(skipAccumulatorRef.current.timer);
    }

    if (skipAccumulatorRef.current.direction === dir) {
      skipAccumulatorRef.current.seconds += absDelta;
    } else {
      skipAccumulatorRef.current.direction = dir;
      skipAccumulatorRef.current.seconds = absDelta;
    }

    const currentTotal = skipAccumulatorRef.current.seconds;

    setSkipFeedback({
      direction: dir,
      seconds: currentTotal,
      id: Date.now(),
    });

    skipAccumulatorRef.current.timer = setTimeout(() => {
      setSkipFeedback(null);
      skipAccumulatorRef.current.seconds = 0;
      skipAccumulatorRef.current.timer = null;
    }, 850);
  }, []);

  const handleSkip = useCallback(
    (seconds: number) => {
      // 1. Exibir instantaneamente os segundos acumulados na tela
      triggerSkipFeedback(seconds);

      // 2. Calcular e atualizar interface com 0ms de delay
      const base = isScrubbingRef.current ? scrubTimeRef.current : currentTimeRef.current;
      seekTo(base + seconds, 150);
    },
    [seekTo, triggerSkipFeedback]
  );

  // Timeline Scrubbing Handlers (Butter-smooth 60FPS drag)
  const handleScrubStart = useCallback((clientX: number, rect: DOMRect) => {
    isScrubbingRef.current = true;
    setIsScrubbing(true);
    isSeekingRef.current = true;

    const pos = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const dur = durationRef.current || duration || 2980;
    const newTime = pos * dur;

    scrubTimeRef.current = newTime;
    setScrubTime(newTime);
    currentTimeRef.current = newTime;
    setCurrentTime(newTime);
  }, [duration]);

  const handleScrubMove = useCallback((clientX: number, rect: DOMRect) => {
    if (!isScrubbingRef.current) return;
    const pos = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const dur = durationRef.current || duration || 2980;
    const newTime = pos * dur;

    scrubTimeRef.current = newTime;
    setScrubTime(newTime);
    currentTimeRef.current = newTime;
    setCurrentTime(newTime);
  }, [duration]);

  const handleScrubEnd = useCallback(() => {
    if (!isScrubbingRef.current) return;
    isScrubbingRef.current = false;
    setIsScrubbing(false);

    const finalTime = scrubTimeRef.current;
    if (playerRef.current) {
      playerRef.current.setCurrentTime(finalTime).catch(() => {});
    }

    if (seekReleaseTimer.current) clearTimeout(seekReleaseTimer.current);
    seekReleaseTimer.current = setTimeout(() => {
      isSeekingRef.current = false;
    }, 1000);
  }, []);

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
          durationRef.current = d;
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

      player.on("seeking", () => {
        isSeekingRef.current = true;
      });

      player.on("seeked", (data) => {
        if (seekReleaseTimer.current) clearTimeout(seekReleaseTimer.current);
        seekReleaseTimer.current = setTimeout(() => {
          isSeekingRef.current = false;
          if (data && typeof data.seconds === "number") {
            setCurrentTime(data.seconds);
            currentTimeRef.current = data.seconds;
          }
        }, 80);
      });

      player.on("timeupdate", (data) => {
        // Ignore stale timeupdate packets while user is actively advancing
        if (!isSeekingRef.current) {
          setCurrentTime(data.seconds);
          currentTimeRef.current = data.seconds;
          if (data.duration && (duration === 0 || durationRef.current === 0)) {
            setDuration(data.duration);
            durationRef.current = data.duration;
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
        if (seekDebounceTimer.current) clearTimeout(seekDebounceTimer.current);
        if (seekReleaseTimer.current) clearTimeout(seekReleaseTimer.current);
        if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current);
        player.destroy();
      };
    } catch (err) {
      console.warn("Vimeo SDK init fallback:", err);
      setIsLoading(false);
    }
  }, [videoId, isPremiereActive]);

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
        if (!showSettings) {
          setControlsVisible(false);
        }
      }, 3000);
    }
  };

  const handleMouseLeave = () => {
    if (isPlaying && !showSettings) {
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

  const displayCurrentTime = isScrubbing ? scrubTime : currentTime;
  const progressPct = duration > 0 ? (displayCurrentTime / duration) * 100 : 0;

  const t = {
    badge: locale === "en" ? "Official SBC Videocast" : locale === "es" ? "Videocast Oficial SBC" : "Videocast Oficial SBC",
    badgeShort: "Videocast SBC",
    epTitle:
      title ||
      (locale === "en"
        ? "Episode 01 – The Spine in the Sagittal Plane"
        : locale === "es"
        ? "Episodio 01 – Columna Vertebral en el Plano Sagital"
        : "Episódio 01 – Coluna Vertebral no Plano Sagital"),
    guests:
      guests ||
      (locale === "en"
        ? "Dr. Marcelo Risso & Dr. Paulo Cavali"
        : locale === "es"
        ? "Dr. Marcelo Risso y Dr. Paulo Cavali"
        : "Dr. Marcelo Risso e Dr. Paulo Cavali"),
    clickToPlay: locale === "en" ? "Watch Videocast" : locale === "es" ? "Ver Videocast" : "Assistir Videocast",
    popOut: locale === "en" ? "Mini Player" : locale === "es" ? "Mini Player" : "Mini Player",
    speed: locale === "en" ? "Speed" : locale === "es" ? "Velocidad" : "Velocidade",
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
      {/* 1. Underlying Vimeo Iframe (Chromeless & clean) - only loaded when premiere is active/ready */}
      {!isPremiereActive && (
        <div className="absolute inset-0 w-full h-full pointer-events-auto">
          <iframe
            ref={iframeRef}
            src={`${url}?autoplay=${autoplay ? "1" : "0"}&badge=0&autopause=0&player_id=0&app_id=58479&controls=0`}
            className="w-full h-full border-0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="Tratado em Debate - Videocast Oficial SBC"
          />
        </div>
      )}

      {/* 2. Responsive Premiere Countdown Overlay (before release date) */}
      {isPremiereActive ? (
        <div className="absolute inset-0 z-20 flex flex-col justify-between overflow-hidden select-none">
          {/* Background cover */}
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
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-600/90 backdrop-blur-md text-white text-[10.5px] sm:text-xs font-bold uppercase tracking-wider shadow-lg shadow-rose-600/30">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>{locale === "en" ? "Premiere Countdown" : locale === "es" ? "Cuenta Regresiva" : "Contagem Regressiva"}</span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 text-[10px] text-sky-400 font-bold border border-sky-500/30 backdrop-blur-md">
              <Sparkles size={11} />
              <span>1080p Full HD</span>
            </div>
          </div>

          {/* Center: Live Countdown Cards */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto px-3 sm:px-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-[11px] sm:text-xs md:text-sm font-bold shadow-lg mb-2 sm:mb-3.5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              <span>
                {locale === "en"
                  ? "Exclusive Premiere • Wed, Sep 23 at 6:00 PM (BRT)"
                  : locale === "es"
                  ? "Estreno Exclusivo • Mié, 23 de Septiembre a las 18:00 (BRT)"
                  : "Pré-Estreia Exclusiva • Quarta-feira, 23 de Setembro às 18h00"}
              </span>
            </div>

            {/* Countdown Grid */}
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

            <p className="mt-2 sm:mt-3 text-[11px] sm:text-xs md:text-[13px] text-slate-300 max-w-lg leading-relaxed drop-shadow font-medium px-2">
              {locale === "en"
                ? "The full videocast will premiere automatically in this player on Wednesday at 6:00 PM BRT."
                : locale === "es"
                ? "El videocast completo se transmitirá automáticamente en este reproductor el miércoles a las 18:00 BRT."
                : "O videocast completo será liberado automaticamente neste player na quarta-feira (23/09) às 18h00 (horário de Brasília)."}
            </p>

            {spotifyUrl && (
              <div className="mt-2 sm:mt-2.5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-sm text-slate-300 text-[10px] sm:text-xs">
                <SpotifyIcon size={13} color="#1DB954" />
                <span>
                  {locale === "en"
                    ? "Also premiering on Spotify at 6:00 PM"
                    : locale === "es"
                    ? "Disponible en Spotify a partir de las 18:00"
                    : "Disponível no Spotify a partir das 18h00"}
                </span>
              </div>
            )}
          </div>

          {/* Bottom spacer for balance */}
          <div className="relative z-10 p-2 sm:p-3 pointer-events-none" />
        </div>
      ) : !hasStarted ? (
        <div
          onClick={handlePlayPause}
          className="absolute inset-0 z-20 cursor-pointer flex flex-col justify-between overflow-hidden group select-none transition-all duration-300"
        >
          {/* Cover image from Vimeo */}
          {resolvedThumbnail ? (
            <img
              src={resolvedThumbnail}
              alt={title || "Tratado em Debate"}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          ) : (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('/assets/debate-artwork.png')` }}
            />
          )}

          {/* Subtle contrast gradient at top/bottom for badges and UI */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/20 pointer-events-none" />

          {/* Top Row: Pill Badge + HD / Popout */}
          <div className="relative z-10 flex items-center justify-between gap-2 p-3 sm:p-5 md:p-6">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-600/90 backdrop-blur-md text-white text-[10.5px] sm:text-xs font-bold uppercase tracking-wider shadow-lg shadow-rose-600/30">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="hidden sm:inline">{t.badge}</span>
              <span className="sm:hidden">{t.badgeShort}</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 text-[10px] text-sky-400 font-bold border border-sky-500/30 backdrop-blur-md">
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
          <div className="relative z-10 flex flex-col items-center justify-center my-auto">
            <div className="relative flex items-center justify-center">
              {/* Glowing animated background */}
              <div className="absolute -inset-3 rounded-full bg-rose-600/40 opacity-70 blur-md group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" />

              {/* Main Play Circle */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[#f52238] text-white flex items-center justify-center shadow-2xl shadow-rose-600/50 border-2 border-white/80 group-hover:scale-110 transition-transform duration-300">
                <Play size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8 fill-current ml-0.5 sm:ml-1 drop-shadow" />
              </div>
            </div>

            <span className="mt-2.5 sm:mt-3 text-[11px] sm:text-xs font-bold text-white uppercase tracking-wider drop-shadow bg-black/75 px-3.5 py-1 rounded-full backdrop-blur-md border border-white/20 shadow-md">
              {t.clickToPlay}
            </span>
          </div>

          {/* Bottom spacer for balance */}
          <div className="relative z-10 p-2 sm:p-3 pointer-events-none" />
        </div>
      ) : null}

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

      {/* On-Screen Skip Feedback HUD (Accumulated Seconds - YouTube / Netflix Style) */}
      {skipFeedback && (
        <div
          key={skipFeedback.id}
          className={`absolute top-1/2 -translate-y-1/2 z-40 pointer-events-none flex items-center justify-center transition-all duration-200 ${
            skipFeedback.direction === "forward" ? "right-6 sm:right-16" : "left-6 sm:left-16"
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-1 sm:gap-1.5 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/25 text-white shadow-[0_12px_40px_rgba(0,0,0,0.7)] animate-pulse">
            <div className="flex items-center gap-1.5 text-rose-500">
              {skipFeedback.direction === "forward" ? (
                <FastForward size={24} className="fill-current" />
              ) : (
                <Rewind size={24} className="fill-current" />
              )}
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-tight font-mono text-white">
              {skipFeedback.direction === "forward" ? `+${skipFeedback.seconds}s` : `-${skipFeedback.seconds}s`}
            </span>
            <span className="text-[10px] sm:text-[11px] text-white/80 font-bold uppercase tracking-wider">
              {skipFeedback.seconds >= 60
                ? `${Math.floor(skipFeedback.seconds / 60)}m ${skipFeedback.seconds % 60 ? `${skipFeedback.seconds % 60}s` : ""}`
                : skipFeedback.direction === "forward"
                ? "Avançar"
                : "Retroceder"}
            </span>
          </div>
        </div>
      )}

      {/* 5. Bottom Custom Controller Bar */}
      {hasStarted && (
        <div
          className={`absolute bottom-0 inset-x-0 z-30 px-2.5 sm:px-4 py-2 sm:py-3.5 bg-gradient-to-t from-black/95 via-black/80 to-transparent transition-opacity duration-300 ${
            controlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Progress / Timeline Bar */}
          <div
            className="relative w-full h-3.5 sm:h-4 flex items-center cursor-pointer group/progress mb-1.5 sm:mb-2 touch-none select-none"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pos = (e.clientX - rect.left) / rect.width;
              const time = Math.max(0, Math.min(duration, pos * duration));
              setHoverTime({ time, pct: pos * 100 });
            }}
            onMouseLeave={() => setHoverTime(null)}
            onPointerDown={(e) => {
              e.currentTarget.setPointerCapture(e.pointerId);
              handleScrubStart(e.clientX, e.currentTarget.getBoundingClientRect());
            }}
            onPointerMove={(e) => {
              if (isScrubbing || e.buttons === 1) {
                handleScrubMove(e.clientX, e.currentTarget.getBoundingClientRect());
              }
            }}
            onPointerUp={(e) => {
              try {
                e.currentTarget.releasePointerCapture(e.pointerId);
              } catch (err) {}
              handleScrubEnd();
            }}
            onPointerCancel={() => {
              handleScrubEnd();
            }}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
              const dur = durationRef.current || duration || 2980;
              seekTo(pos * dur, 0);
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

            {/* Scrubber Handle */}
            <div
              className={`absolute w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white border-2 border-rose-600 shadow-md shadow-black/80 -translate-x-1/2 transition-transform duration-100 ${
                isScrubbing ? "scale-125" : "scale-0 group-hover/progress:scale-100"
              }`}
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
                <span className="text-white font-bold">{formatTime(displayCurrentTime)}</span>
                <span className="opacity-40 mx-0.5 sm:mx-1">/</span>
                <span className="hidden sm:inline">{formatTime(duration || 2980)}</span>
              </div>
            </div>

            {/* Right Controls: Speed, Fullscreen */}
            <div className="flex items-center gap-1 sm:gap-1.5 relative shrink-0">
              {/* Speed Settings Button */}
              <div className="relative">
                <button
                  onClick={() => setShowSettings(!showSettings)}
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
