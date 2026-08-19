"use client";

import { use, useState } from "react";
import Link from "next/link";
import ModernHeader from "@/components/modern/ModernHeader";
import ModernFooter from "@/components/modern/ModernFooter";
import { Locale } from "@/lib/types";
import { getPrefacioData, EDITORES_TRATADO } from "@/lib/data/institutional-data";

interface PrefacioNewProps {
  params: Promise<{ locale: string }>;
}

export default function PrefacioNewPage({ params }: PrefacioNewProps) {
  const resolvedParams = use(params);
  const rawLocale = resolvedParams.locale;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";
  const PREFACIO_DATA = getPrefacioData(locale);

  const [fontSizeMultiplier, setFontSizeMultiplier] = useState<number>(1);
  const [highlightKeyConcepts, setHighlightKeyConcepts] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-[#000814] text-white flex flex-col selection:bg-rose-500 selection:text-white font-sans antialiased">
      <ModernHeader locale={locale} />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* HERO SECTION (MODERN 4K GLASSMORPHIC) */}
        {/* ========================================================================= */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          {/* Ambient Lighting Glows */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-rose-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
          <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/30 via-transparent to-transparent pointer-events-none -z-10" />

          {/* Background spine texture */}
          <div
            className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-20 pointer-events-none bg-no-repeat bg-contain bg-right-top -z-10"
            style={{ backgroundImage: "url('/assets/hero-spine.png')" }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Top Navigation Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Link href={`/${locale}/home-new`} className="hover:text-white transition-colors">
                  Início
                </Link>
                <span>›</span>
                <span className="text-slate-400">O Tratado</span>
                <span>›</span>
                <span className="text-rose-400 font-semibold">Prefácio</span>
              </div>
            </div>

            {/* Hero Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* 3D Book Visual */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-rose-500 to-blue-600 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500" />
                  <img
                    src="/assets/book-cover.png"
                    alt="Tratado de Cirurgia da Coluna Vertebral"
                    className="relative w-64 md:w-72 h-auto rounded-xl shadow-2xl shadow-black/80 transform -rotate-1 hover:rotate-0 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Hero Details */}
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  {PREFACIO_DATA.badge}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                  {PREFACIO_DATA.titulo}
                </h1>

                <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-3xl">
                  {PREFACIO_DATA.subtitulo}
                </p>

                <p className="text-sm font-semibold text-slate-400">
                  {PREFACIO_DATA.autoresLinha}
                </p>

                {/* Print Notice Glass Card */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-slate-900/90 to-blue-950/60 border border-slate-700/60 backdrop-blur-md max-w-2xl shadow-xl">
                  <span className="text-2xl text-rose-400">📖</span>
                  <span className="text-sm text-slate-300">
                    {PREFACIO_DATA.avisoImpresso}
                  </span>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="https://www.dilivros.com.br/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-sm shadow-xl shadow-rose-600/30 transition-all hover:scale-[1.02]"
                  >
                    <span>Adquirir Edição Impressa</span>
                    <span>🛒</span>
                  </a>

                  <Link
                    href={`/${locale}/apresentacao-new`}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm backdrop-blur-md transition-all"
                  >
                    <span>Ver Apresentação New</span>
                    <span>📄</span>
                  </Link>

                  <Link
                    href={`/${locale}/indice-new`}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm backdrop-blur-md transition-all"
                  >
                    <span>Explorar Índice</span>
                    <span>📑</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BODY CONTENT GRID */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Reading Column (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              {/* Text Card with Reading Controls */}
              <div className="p-8 md:p-10 rounded-3xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-xl shadow-2xl space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <span className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 text-xl border border-rose-500/20">
                      📄
                    </span>
                    <h2 className="text-2xl font-bold text-white tracking-tight">
                      Texto do Prefácio
                    </h2>
                  </div>

                  {/* Reading Size Controls */}
                  <div className="flex items-center gap-2 bg-slate-950/80 p-1 rounded-xl border border-slate-800 text-xs">
                    <button
                      onClick={() => setFontSizeMultiplier(0.9)}
                      className={`px-2.5 py-1 rounded-lg transition-all ${
                        fontSizeMultiplier === 0.9 ? "bg-rose-600 text-white font-bold" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      A-
                    </button>
                    <button
                      onClick={() => setFontSizeMultiplier(1)}
                      className={`px-2.5 py-1 rounded-lg transition-all ${
                        fontSizeMultiplier === 1 ? "bg-rose-600 text-white font-bold" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      A
                    </button>
                    <button
                      onClick={() => setFontSizeMultiplier(1.15)}
                      className={`px-2.5 py-1 rounded-lg transition-all ${
                        fontSizeMultiplier === 1.15 ? "bg-rose-600 text-white font-bold" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      A+
                    </button>
                  </div>
                </div>

                {/* Paragraphs */}
                <div
                  className="space-y-6 text-slate-300 font-light leading-relaxed transition-all"
                  style={{ fontSize: `${16 * fontSizeMultiplier}px` }}
                >
                  {PREFACIO_DATA.paragrafos.map((p, idx) => (
                    <p key={idx} className="leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              {/* Central Quote Card */}
              <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-rose-950/30 border border-blue-800/40 backdrop-blur-xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 text-9xl text-blue-500/10 font-serif select-none pointer-events-none">
                  “
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl text-blue-400 font-serif leading-none">❝</span>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest font-bold text-blue-400 mb-2">
                      Mensagem Central da SBC
                    </h3>
                    <p className="text-lg md:text-xl font-medium text-blue-100 leading-relaxed">
                      {PREFACIO_DATA.mensagemCentral}
                    </p>
                  </div>
                </div>
              </div>

              {/* Highlights 3-Card Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {PREFACIO_DATA.destaques.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all hover:translate-y-[-2px] space-y-3"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${
                        item.cor === "red"
                          ? "bg-rose-500/15 text-rose-400 border border-rose-500/30"
                          : item.cor === "blue"
                          ? "bg-sky-500/15 text-sky-400 border border-sky-500/30"
                          : "bg-indigo-500/15 text-indigo-400 border border-indigo-500/30"
                      }`}
                    >
                      {item.cor === "red" ? "🏛️" : item.cor === "blue" ? "👥" : "🔬"}
                    </div>
                    <h4 className="text-base font-bold text-white">
                      {item.titulo}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.descricao}
                    </p>
                  </div>
                ))}
              </div>

              {/* About the Work Card */}
              <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800/70 space-y-3">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                  <span>📖</span>
                  <span>Sobre a Obra & Plataforma Digital</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {PREFACIO_DATA.sobreAObra}
                </p>
              </div>
            </div>

            {/* Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Editors Card */}
              <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-xl shadow-xl space-y-5">
                <h3 className="text-base font-bold text-white flex items-center gap-2 pb-3 border-b border-slate-800">
                  <span>👥</span>
                  <span>Autores do Prefácio (Editores)</span>
                </h3>

                <div className="space-y-4">
                  {EDITORES_TRATADO.map((editor, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-800/40 transition-colors">
                      <img
                        src={editor.foto_url}
                        alt={editor.nome}
                        className="w-12 h-12 rounded-full object-cover border-2 border-rose-500/30"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-white">
                          {editor.nome}
                        </h4>
                        <p className="text-xs text-rose-400 font-semibold">
                          {editor.role}
                        </p>
                        <span className="text-[11px] text-slate-400 font-mono">
                          ORCID: {editor.orcid}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/${locale}/autores-new`}
                  className="block text-center py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-xs font-bold text-slate-200 transition-colors border border-slate-700"
                >
                  Ver Todos os Autores da Obra →
                </Link>
              </div>

              {/* Content Type Card */}
              <div className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800 space-y-3 text-sm">
                <h4 className="text-xs uppercase font-bold tracking-widest text-slate-400">
                  Estrutura do Conteúdo
                </h4>
                <div className="space-y-2 text-slate-300 text-xs font-semibold">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/40">
                    <span>📄</span>
                    <span>Texto Institucional Oficial</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/40">
                    <span>📖</span>
                    <span>Prefácio dos Editores</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/40">
                    <span>📚</span>
                    <span>Guia de Apoio à Leitura</span>
                  </div>
                </div>
              </div>

              {/* Warning Notice Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-rose-950/40 to-slate-900/80 border border-rose-900/40 space-y-3">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                  <span>🛡️</span>
                  <span>Aviso Importante</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  O conteúdo integral e detalhado dos capítulos, com ilustrações cirúrgicas de alta definição, está disponível exclusivamente na edição impressa do Tratado.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ModernFooter locale={locale} />
    </div>
  );
}
