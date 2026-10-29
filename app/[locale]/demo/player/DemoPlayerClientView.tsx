"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Locale } from "@/lib/types";
import { DEBATE_EPISODES } from "@/lib/data/debate-episodes";
import HarmoniousVimeoPlayer from "@/components/demo/HarmoniousVimeoPlayer";
import CustomVimeoPlayer from "@/components/CustomVimeoPlayer";
import {
  Sparkles,
  Monitor,
  Tablet,
  Smartphone,
  Layers,
  CheckCircle2,
  Tv,
  ArrowLeft,
  Sliders,
  Keyboard,
  ExternalLink,
} from "lucide-react";

interface DemoPlayerClientViewProps {
  locale: Locale;
}

export default function DemoPlayerClientView({ locale }: DemoPlayerClientViewProps) {
  // Episódio selecionado para teste (padrão é o episódio 9, conforme imagem do usuário)
  const [selectedEpNumber, setSelectedEpNumber] = useState(9);
  const [viewMode, setViewMode] = useState<"harmonious" | "standard" | "split">("harmonious");
  const [viewportWidth, setViewportWidth] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const currentEpisode =
    DEBATE_EPISODES.find((ep) => ep.numero === selectedEpNumber) || DEBATE_EPISODES[DEBATE_EPISODES.length - 1];

  const title = currentEpisode.titulo_pt;
  const guests = currentEpisode.convidados.map((c) => c.nome).join(" & ");

  return (
    <div className="min-h-screen bg-[#000814] text-white flex flex-col font-sans">
      {/* 1. Header do Ambiente Demonstrativo */}
      <header className="border-b border-white/10 bg-[#001026]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href={`/${locale}/debate`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs text-slate-300 hover:text-white transition-all no-underline"
            >
              <ArrowLeft size={14} />
              <span>Voltar ao Debate</span>
            </Link>

            <div className="h-4 w-px bg-white/20 hidden sm:block" />

            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f52238] animate-pulse" />
              <h1 className="text-sm sm:text-base font-bold tracking-tight text-white m-0">
                Ambiente Demonstrativo • Player Harmonioso SBC
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-[#f52238]/20 border border-[#f52238]/40 text-[#ff4d60] text-xs font-bold uppercase tracking-wider">
              Preview em Tempo Real
            </span>
          </div>
        </div>
      </header>

      {/* 2. Barra de Ferramentas / Controles de Demonstração */}
      <section className="border-b border-white/10 bg-[#001433]/70 px-4 sm:px-6 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          {/* Seletor de Modo de Visualização */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10">
            <button
              onClick={() => setViewMode("harmonious")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === "harmonious"
                  ? "bg-[#f52238] text-white shadow-md shadow-rose-600/30"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <Sparkles size={13} />
              <span>✨ Player Harmonioso SBC (Proposta)</span>
            </button>

            <button
              onClick={() => setViewMode("standard")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === "standard"
                  ? "bg-[#f52238] text-white shadow-md shadow-rose-600/30"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <Tv size={13} />
              <span>🎬 Player Padrão Vimeo (Atual)</span>
            </button>

            <button
              onClick={() => setViewMode("split")}
              className={`hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === "split"
                  ? "bg-[#f52238] text-white shadow-md shadow-rose-600/30"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <Layers size={13} />
              <span>↔️ Comparativo Lado a Lado</span>
            </button>
          </div>

          {/* Simulador de Viewport (Desktop, Tablet, Mobile) */}
          {viewMode !== "split" && (
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10">
              <span className="text-[11px] text-slate-400 font-semibold px-2 hidden sm:inline">
                Simular Tela:
              </span>
              <button
                onClick={() => setViewportWidth("desktop")}
                className={`p-1.5 rounded-lg text-xs transition-all ${
                  viewportWidth === "desktop"
                    ? "bg-white/20 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
                title="Desktop (100%)"
              >
                <Monitor size={15} />
              </button>
              <button
                onClick={() => setViewportWidth("tablet")}
                className={`p-1.5 rounded-lg text-xs transition-all ${
                  viewportWidth === "tablet"
                    ? "bg-white/20 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
                title="Tablet (768px)"
              >
                <Tablet size={15} />
              </button>
              <button
                onClick={() => setViewportWidth("mobile")}
                className={`p-1.5 rounded-lg text-xs transition-all ${
                  viewportWidth === "mobile"
                    ? "bg-white/20 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
                title="Mobile (420px)"
              >
                <Smartphone size={15} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. Seletor Rápido de Episódios */}
      <section className="border-b border-white/5 bg-[#000d20] px-4 sm:px-6 py-2.5 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs">
          <span className="text-slate-400 font-bold shrink-0">Episódio:</span>
          <div className="flex items-center gap-1.5">
            {DEBATE_EPISODES.map((ep) => (
              <button
                key={ep.id}
                onClick={() => setSelectedEpNumber(ep.numero)}
                className={`px-2.5 py-1 rounded-md font-bold transition-all shrink-0 ${
                  ep.numero === selectedEpNumber
                    ? "bg-[#f52238] text-white shadow-sm"
                    : "bg-white/5 hover:bg-white/10 text-slate-300"
                }`}
              >
                Ep 0{ep.numero}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Área Principal de Demonstração */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-10 flex-1 flex flex-col gap-8">
        {/* Banner Informativo do Episódio Atual */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#001633] via-[#001e47] to-[#001026] border border-white/15 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#f52238]/20 border border-[#f52238]/40 text-[#ff6b7a] text-xs font-bold uppercase mb-2">
              <span>Testando Episódio 0{currentEpisode.numero}</span>
              <span>•</span>
              <span>Duração: {currentEpisode.duracao} min</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white m-0">
              {currentEpisode.titulo_pt}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 m-0">
              Com {currentEpisode.convidados.map((c) => c.nome).join(" & ")}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-slate-400 font-mono">
              Vimeo ID: {currentEpisode.vimeoId}
            </span>
          </div>
        </div>

        {/* MODO: PLAYER HARMONIOSO SBC (PROPOSTA) */}
        {viewMode === "harmonious" && (
          <div className="flex flex-col gap-4 items-center">
            <div
              className="w-full transition-all duration-300 mx-auto"
              style={{
                maxWidth:
                  viewportWidth === "mobile"
                    ? "420px"
                    : viewportWidth === "tablet"
                    ? "768px"
                    : "100%",
              }}
            >
              <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
                <span className="font-bold text-[#ff6b7a] flex items-center gap-1.5">
                  <Sparkles size={13} />
                  Player Harmonioso SBC (Controles customizados, integração nativa Vimeo SDK)
                </span>
                <span>{viewportWidth.toUpperCase()}</span>
              </div>

              <HarmoniousVimeoPlayer
                key={`harmonious-${currentEpisode.id}`}
                videoId={currentEpisode.vimeoId}
                url={currentEpisode.vimeoUrl}
                title={title}
                guests={guests}
                episodeNumber={currentEpisode.numero}
                locale={locale}
                thumbnailUrl={currentEpisode.thumbnailUrl || currentEpisode.vimeoThumbnailUrl}
              />
            </div>
          </div>
        )}

        {/* MODO: PLAYER PADRÃO VIMEO (ATUAL) */}
        {viewMode === "standard" && (
          <div className="flex flex-col gap-4 items-center">
            <div
              className="w-full transition-all duration-300 mx-auto"
              style={{
                maxWidth:
                  viewportWidth === "mobile"
                    ? "420px"
                    : viewportWidth === "tablet"
                    ? "768px"
                    : "100%",
              }}
            >
              <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
                <span className="font-bold text-slate-300 flex items-center gap-1.5">
                  <Tv size={13} />
                  Player Padrão Nativo do Vimeo (Embed Genérico com barra preta/cinza)
                </span>
                <span>{viewportWidth.toUpperCase()}</span>
              </div>

              <CustomVimeoPlayer
                key={`standard-${currentEpisode.id}`}
                videoId={currentEpisode.vimeoId}
                url={currentEpisode.vimeoUrl}
                title={title}
                guests={guests}
                locale={locale}
                thumbnailUrl={currentEpisode.thumbnailUrl || currentEpisode.vimeoThumbnailUrl}
              />
            </div>
          </div>
        )}

        {/* MODO: LADO A LADO */}
        {viewMode === "split" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Lado Esquerdo: Harmonioso */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f52238]/20 border border-[#f52238]/40 text-[#ff6b7a] text-xs font-bold">
                  <Sparkles size={13} />
                  PROPOSTA: Player Harmonioso SBC
                </span>
              </div>
              <HarmoniousVimeoPlayer
                key={`split-harmonious-${currentEpisode.id}`}
                videoId={currentEpisode.vimeoId}
                url={currentEpisode.vimeoUrl}
                title={title}
                guests={guests}
                episodeNumber={currentEpisode.numero}
                locale={locale}
                thumbnailUrl={currentEpisode.thumbnailUrl || currentEpisode.vimeoThumbnailUrl}
              />
              <p className="text-xs text-slate-400 mt-2">
                ✓ Cores integradas (Rubro SBC `#f52238` e Navy `#001026`)<br />
                ✓ Scrubber moderno com prévia e buffer<br />
                ✓ HUD visual no centro ao avançar/retroceder
              </p>
            </div>

            {/* Lado Direito: Vimeo Padrão */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-slate-300 text-xs font-bold">
                  <Tv size={13} />
                  ATUAL: Player Padrão Vimeo
                </span>
              </div>
              <CustomVimeoPlayer
                key={`split-standard-${currentEpisode.id}`}
                videoId={currentEpisode.vimeoId}
                url={currentEpisode.vimeoUrl}
                title={title}
                guests={guests}
                locale={locale}
                thumbnailUrl={currentEpisode.thumbnailUrl || currentEpisode.vimeoThumbnailUrl}
              />
              <p className="text-xs text-slate-400 mt-2">
                • Barra preta e cinza padrão do Vimeo<br />
                • Sem identidade visual com o Tratado de Coluna<br />
                • Menos contraste com o tema do site
              </p>
            </div>
          </div>
        )}

        {/* 5. Painel Explicativo: Comparativo de Recursos e Comandos */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
          {/* Card 1: Mesmos Comandos & Atalhos Preservados */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#f52238]/20 border border-[#f52238]/30 text-[#ff4d60] flex items-center justify-center font-bold">
              <Keyboard size={18} />
            </div>
            <h3 className="text-sm font-bold text-white m-0">
              Todos os Comandos Preservados
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed m-0">
              O motor de reprodução continua sendo o <strong>Vimeo Player SDK Oficial</strong>. Todos os atalhos funcionam perfeitamente:
            </p>
            <ul className="text-xs text-slate-300 space-y-1.5 pl-4 m-0 list-disc">
              <li><kbd className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-white">Espaço</kbd> ou <kbd className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-white">K</kbd>: Play / Pause</li>
              <li><kbd className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-white">←</kbd> / <kbd className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-white">→</kbd> ou <kbd className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-white">J</kbd> / <kbd className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-white">L</kbd>: Pular ±10s</li>
              <li><kbd className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-white">↑</kbd> / <kbd className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-white">↓</kbd>: Volume ±10%</li>
              <li><kbd className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-white">M</kbd>: Mutar / Desmutar</li>
              <li><kbd className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-white">F</kbd>: Tela Cheia</li>
              <li><kbd className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-white">0-9</kbd>: Pular para 0% a 90%</li>
              <li><kbd className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-white">&lt;</kbd> e <kbd className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-white">&gt;</kbd>: Velocidade</li>
            </ul>
          </div>

          {/* Card 2: Harmonia Visual SBC */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center font-bold">
              <Sparkles size={18} />
            </div>
            <h3 className="text-sm font-bold text-white m-0">
              Harmonia Visual com a Plataforma
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed m-0">
              O design foi totalmente desenhado para pertencer ao ecossistema do Tratado da Coluna SBC:
            </p>
            <ul className="text-xs text-slate-300 space-y-1.5 pl-4 m-0 list-disc">
              <li>Barra de progresso no tom oficial <strong>Rubro SBC (`#f52238`)</strong> com indicador de buffer.</li>
              <li>Controles translúcidos em vidro escuro (<em>glassmorphism</em>) que desaparecem suavemente após 3s.</li>
              <li>Tipografia oficial e mostrador de tempo com alternância para tempo restante.</li>
              <li>Seletor de velocidade popover elegante (0.5x, 0.75x, 1x, 1.25x, 1.5x, 2x).</li>
            </ul>
          </div>

          {/* Card 3: Gestos e Feedback Visual */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold">
              <CheckCircle2 size={18} />
            </div>
            <h3 className="text-sm font-bold text-white m-0">
              Gestos Modernos &amp; Feedback HUD
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed m-0">
              Experiência fluida similar aos melhores players modernos (YouTube / Netflix):
            </p>
            <ul className="text-xs text-slate-300 space-y-1.5 pl-4 m-0 list-disc">
              <li><strong>Clique único no vídeo:</strong> Alterna Play / Pause com feedback visual.</li>
              <li><strong>Duplo clique na esquerda/direita:</strong> Avança ou retrocede 10s automaticamente.</li>
              <li><strong>HUD animado no centro:</strong> Mostra feedback visual elegante de volume, pulo e velocidade.</li>
              <li>Suporte a Picture-in-Picture nativo.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
