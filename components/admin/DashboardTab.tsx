"use client";

import { Capitulo, AutorEditor, PerfilUsuario } from "@/lib/types";
import { SECOES } from "@/lib/data/sections-and-chapters";
import Link from "next/link";
import {
  BookOpen,
  Layers,
  Users,
  ShieldCheck,
  Globe,
  ExternalLink,
  CheckCircle2,
  Plus,
  UserPlus,
  ShoppingCart,
  Zap,
  ArrowRight,
  Sparkles,
  Activity,
  Award,
  TrendingUp,
  FileCheck2,
} from "lucide-react";

interface DashboardTabProps {
  chapters: Capitulo[];
  authors: AutorEditor[];
  usuarios: PerfilUsuario[];
  onNavigateToTab: (tab: "capitulos" | "autores" | "usuarios") => void;
  onFilterSection: (secaoId: string) => void;
  onOpenNewChapter: () => void;
  onOpenNewAuthor: () => void;
  isSupabaseOnline: boolean;
}

const SECTION_COLORS: Record<string, { bg: string; border: string; text: string; bar: string }> = {
  "1": { bg: "rgba(59, 130, 246, 0.08)", border: "rgba(59, 130, 246, 0.25)", text: "#2563eb", bar: "#3b82f6" },
  "2": { bg: "rgba(34, 197, 94, 0.08)", border: "rgba(34, 197, 94, 0.25)", text: "#16a34a", bar: "#22c55e" },
  "3": { bg: "rgba(244, 63, 94, 0.08)", border: "rgba(244, 63, 94, 0.25)", text: "#e11d48", bar: "#f43f5e" },
  "4": { bg: "rgba(217, 70, 239, 0.08)", border: "rgba(217, 70, 239, 0.25)", text: "#c026d3", bar: "#d946ef" },
  "5": { bg: "rgba(249, 115, 22, 0.08)", border: "rgba(249, 115, 22, 0.25)", text: "#ea580c", bar: "#f97316" },
  "6": { bg: "rgba(168, 85, 247, 0.08)", border: "rgba(168, 85, 247, 0.25)", text: "#9333ea", bar: "#a855f7" },
  "7": { bg: "rgba(6, 182, 212, 0.08)", border: "rgba(6, 182, 212, 0.25)", text: "#0891b2", bar: "#06b6d4" },
  "8": { bg: "rgba(20, 184, 166, 0.08)", border: "rgba(20, 184, 166, 0.25)", text: "#0d9488", bar: "#14b8a6" },
  "9": { bg: "rgba(245, 158, 11, 0.08)", border: "rgba(245, 158, 11, 0.25)", text: "#d97706", bar: "#f59e0b" },
  "10": { bg: "rgba(100, 116, 139, 0.08)", border: "rgba(100, 116, 139, 0.25)", text: "#475569", bar: "#64748b" },
};

export default function DashboardTab({
  chapters,
  authors,
  usuarios,
  onNavigateToTab,
  onFilterSection,
  onOpenNewChapter,
  onOpenNewAuthor,
}: DashboardTabProps) {
  const totalChapters = chapters.length;
  const approvedUsers = usuarios.filter((u) => u.status === "aprovado").length;
  const pendingUsers = usuarios.filter((u) => u.status === "pendente").length;
  const adminUsers = usuarios.filter(
    (u) => u.role === "super_admin" || u.role === "co_super_admin" || u.role === "admin_escritor"
  ).length;

  const sectionStats = SECOES.map((secao) => {
    const count = chapters.filter((c) => String(c.secao_id) === String(secao.id)).length;
    const percentage = totalChapters > 0 ? Math.round((count / totalChapters) * 100) : 0;
    return {
      ...secao,
      count,
      percentage,
    };
  });

  return (
    <div className="flex flex-col gap-8">
      {/* ========================================================================= */}
      {/* WELCOME HERO BANNER (GLASSMORPHISM & SUBTLE GLOW) */}
      {/* ========================================================================= */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800/80 p-8 sm:p-10 shadow-2xl backdrop-blur-2xl">
        {/* Ambient Glows */}
        <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
              <span>Painel Executivo Editorial</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Edição Oficial SBC</span>
            </span>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Tratado de Cirurgia da Coluna Vertebral
            </h1>
            <p className="mt-2.5 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl font-normal">
              Ambiente de curadoria acadêmica e gestão científica dos 109 capítulos, revisão do corpo editorial e governança de acessos institucionais.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigateToTab("capitulos")}
              className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-sm shadow-lg shadow-rose-950/50 hover:shadow-rose-900/60 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
              <span>Gerenciar Capítulos ({totalChapters})</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onNavigateToTab("usuarios")}
              className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 hover:border-slate-600 text-slate-100 font-semibold text-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <Users className="w-4 h-4 text-slate-300 transition-transform duration-300 group-hover:scale-110" />
              <span>Usuários ({usuarios.length})</span>
              {pendingUsers > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold animate-pulse">
                  {pendingUsers} pendentes
                </span>
              )}
            </button>

            <Link
              href="/pt/home-new"
              target="_blank"
              className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-semibold text-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <Globe className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
              <span>Visualizar Portal</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4 MAIN KPI METRIC CARDS (GLASSMORPHISM & ANIMATED ICONS) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Metric 1 */}
        <div className="group relative p-6 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Capítulos Publicados
              </span>
              <div className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {totalChapters}
              </div>
            </div>
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <BookOpen className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span>100% da Obra Catalogada</span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="group relative p-6 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Seções Temáticas
              </span>
              <div className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {SECOES.length}
              </div>
            </div>
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-900/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Layers className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
            <Activity className="w-4 h-4 text-rose-500 flex-shrink-0" />
            <span>Da Base à Robótica Avançada</span>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="group relative p-6 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Corpo de Autores
              </span>
              <div className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {authors.length}+
              </div>
            </div>
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Users className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
            <Award className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span>Editores & Especialistas SBC</span>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="group relative p-6 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Acessos & Usuários
              </span>
              <div className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {usuarios.length}
              </div>
            </div>
            <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs font-semibold">
            <span className="text-emerald-600 dark:text-emerald-400">{approvedUsers} ativos</span>
            <span className="text-slate-400">•</span>
            <span className={pendingUsers > 0 ? "text-amber-600 dark:text-amber-400 font-bold" : "text-slate-400"}>
              {pendingUsers} pendentes
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-purple-600 dark:text-purple-400">{adminUsers} admins</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTIONS DISTRIBUTION & QUALITY COMPLIANCE */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left (7 cols): Sections Breakdown */}
        <div className="lg:col-span-7 p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl shadow-sm space-y-5">
          <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-slate-100 dark:border-slate-800/70">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                <span>Distribuição Curricular por Seção</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Capítulos organizados nas 10 seções do Tratado
              </p>
            </div>

            <button
              onClick={() => onNavigateToTab("capitulos")}
              className="group inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors cursor-pointer"
            >
              <span>Ver Tabela Completa</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          <div className="space-y-2.5">
            {sectionStats.map((sec) => {
              const colors = SECTION_COLORS[String(sec.id)] || SECTION_COLORS["1"];
              return (
                <div
                  key={sec.id}
                  onClick={() => {
                    onFilterSection(String(sec.id));
                    onNavigateToTab("capitulos");
                  }}
                  className="group p-3 sm:p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30 hover:bg-slate-100/70 dark:hover:bg-slate-800/60 cursor-pointer transition-all duration-200"
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className="px-2 py-0.5 rounded text-[11px] font-black tracking-wide flex-shrink-0"
                        style={{
                          background: colors.bg,
                          color: colors.text,
                          border: `1px solid ${colors.border}`,
                        }}
                      >
                        Seção {sec.id}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 truncate">
                        {sec.titulo_pt}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-slate-700 dark:text-slate-300 flex-shrink-0 flex items-center gap-1.5">
                      <span>{sec.count} cap.</span>
                      <span className="text-[11px] text-slate-400 font-medium">({sec.percentage}%)</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500 group-hover:brightness-110"
                      style={{
                        width: `${Math.max(sec.percentage * 4.5, 6)}%`,
                        background: colors.bar,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right (5 cols): Editorial Compliance & Quick Tools */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quality Checklist Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl shadow-sm space-y-4">
            <div className="pb-3 border-b border-slate-100 dark:border-slate-800/70">
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-emerald-500" />
                <span>Conformidade & Qualidade</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Indexação médica e padronização científica
              </p>
            </div>

            <div className="space-y-2.5">
              {[
                { title: "Resumos Clínicos Estruturados", value: "109 / 109", status: "ok" },
                { title: "Descritores DeCS / MeSH", value: "100% Cobertos", status: "ok" },
                { title: "Referências Bibliográficas (DOI)", value: "Indexadas", status: "ok" },
                { title: "Suporte Multilíngue (PT, EN, ES)", value: "739 Páginas", status: "ok" },
                { title: "Link Direto DiLivros Oficial", value: "Ativo", status: "ok" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-700 dark:text-emerald-300"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className="truncate">{item.title}</span>
                  </div>
                  <span className="font-extrabold font-mono text-emerald-800 dark:text-emerald-200 flex-shrink-0">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="relative overflow-hidden p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-white shadow-xl space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
              <Zap className="w-4 h-4 text-amber-400 animate-pulse" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Ações Rápidas
              </h4>
            </div>

            <div className="space-y-2.5">
              <button
                onClick={onOpenNewChapter}
                className="group w-full flex items-center justify-between p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-bold text-slate-100 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span className="flex items-center gap-2.5">
                  <Plus className="w-4 h-4 text-rose-400 transition-transform duration-200 group-hover:scale-125" />
                  <span>Cadastrar Novo Capítulo</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenNewAuthor}
                className="group w-full flex items-center justify-between p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-bold text-slate-100 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span className="flex items-center gap-2.5">
                  <UserPlus className="w-4 h-4 text-blue-400 transition-transform duration-200 group-hover:scale-125" />
                  <span>Cadastrar Novo Autor</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-xs font-bold text-white shadow-md shadow-rose-950/50 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span className="flex items-center gap-2.5">
                  <ShoppingCart className="w-4 h-4 transition-transform duration-200 group-hover:scale-125" />
                  <span>Adquirir Edição Impressa</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
