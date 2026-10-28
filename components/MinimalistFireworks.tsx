"use client";

import React, { useEffect, useRef, useState } from "react";

interface MinimalistFireworksProps {
  /** Se passado true, dispara a animação */
  active?: boolean;
  /** Duração total dos disparos em milissegundos antes da remoção completa */
  durationMs?: number;
  /** Mensagem comemorativa opcional para exibir em destaque */
  message?: string;
  /** Callback opcional quando todos os fogos terminam */
  onComplete?: () => void;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  alpha: number;
  decay: number;
  gravity: number;
  flicker: boolean;
}

const CELEBRATION_COLORS = [
  "#F59E0B", // Âmbar Dourado
  "#FBBF24", // Ouro Claro
  "#10B981", // Esmeralda / Spotify Green
  "#34D399", // Menta Brilhante
  "#F43F5E", // Carmesim Tratado
  "#FB7185", // Rosa Vibrante
  "#38BDF8", // Ciano / Azul Céu
  "#818CF8", // Índigo Suave
  "#FFFFFF", // Branco Diamante
];

export default function MinimalistFireworks({
  active = false,
  durationMs = 4500,
  message,
  onComplete,
}: MinimalistFireworksProps) {
  const [isRunning, setIsRunning] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Escuta tanto a prop `active` quanto o evento global `treatise:premiere-unlocked`
  useEffect(() => {
    if (active) {
      setIsRunning(true);
    }
  }, [active]);

  useEffect(() => {
    const handleGlobalUnlock = () => {
      setIsRunning(true);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("treatise:premiere-unlocked", handleGlobalUnlock);
      return () => {
        window.removeEventListener("treatise:premiere-unlocked", handleGlobalUnlock);
      };
    }
  }, []);

  useEffect(() => {
    if (!isRunning) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isCancelled = false;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: Particle[] = [];

    // Cria uma explosão minimalista e elegante
    const createBurst = (originX: number, originY: number, count = 55) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1.8 + Math.random() * 4.8;
        const color =
          CELEBRATION_COLORS[Math.floor(Math.random() * CELEBRATION_COLORS.length)];

        particles.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color,
          size: 1.5 + Math.random() * 2.2,
          alpha: 1,
          decay: 0.012 + Math.random() * 0.016,
          gravity: 0.045 + Math.random() * 0.025,
          flicker: Math.random() > 0.4,
        });
      }
    };

    const startTime = Date.now();
    const burstTimeouts: NodeJS.Timeout[] = [];

    const scheduleBursts = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      const bursts = [
        { delay: 50, x: w * 0.5, y: h * 0.32, count: 65 },
        { delay: 350, x: w * 0.32, y: h * 0.26, count: 50 },
        { delay: 650, x: w * 0.68, y: h * 0.28, count: 55 },
        { delay: 1100, x: w * 0.42, y: h * 0.22, count: 60 },
        { delay: 1450, x: w * 0.58, y: h * 0.24, count: 55 },
        { delay: 1900, x: w * 0.5, y: h * 0.20, count: 70 },
      ];

      bursts.forEach(({ delay, x, y, count }) => {
        const t = setTimeout(() => {
          if (!isCancelled) {
            createBurst(x, y, count);
          }
        }, delay);
        burstTimeouts.push(t);
      });
    };

    scheduleBursts();

    const render = () => {
      if (isCancelled || !ctx || !canvas) return;

      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0, 0, 0, 0.22)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "lighter";

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.965;
        p.vy = p.vy * 0.965 + p.gravity;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const currentAlpha = p.flicker && Math.random() < 0.25 ? p.alpha * 0.4 : p.alpha;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, currentAlpha);
        ctx.shadowBlur = 4;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();
      }

      const elapsed = Date.now() - startTime;
      if (elapsed > durationMs && particles.length === 0) {
        setIsRunning(false);
        onComplete?.();
        return;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    const safetyTimeout = setTimeout(() => {
      setIsRunning(false);
      onComplete?.();
    }, durationMs + 2500);

    return () => {
      isCancelled = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      burstTimeouts.forEach(clearTimeout);
      clearTimeout(safetyTimeout);
    };
  }, [isRunning, durationMs, onComplete]);

  if (!isRunning) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden transition-opacity duration-700"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ pointerEvents: "none" }}
      />
      {message && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 pointer-events-none z-10 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full bg-slate-950/90 border border-emerald-500/50 shadow-2xl backdrop-blur-md flex items-center gap-2.5 animate-bounce">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
            {message}
          </span>
        </div>
      )}
    </div>
  );
}
