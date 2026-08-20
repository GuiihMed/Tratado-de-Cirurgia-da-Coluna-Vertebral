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
  "1": { bg: "rgba(59, 130, 246, 0.12)", border: "rgba(59, 130, 246, 0.3)", text: "#60a5fa", bar: "#3b82f6" },
  "2": { bg: "rgba(34, 197, 94, 0.12)", border: "rgba(34, 197, 94, 0.3)", text: "#4ade80", bar: "#22c55e" },
  "3": { bg: "rgba(244, 63, 94, 0.12)", border: "rgba(244, 63, 94, 0.3)", text: "#fb7185", bar: "#f43f5e" },
  "4": { bg: "rgba(217, 70, 239, 0.12)", border: "rgba(217, 70, 239, 0.3)", text: "#e879f9", bar: "#d946ef" },
  "5": { bg: "rgba(249, 115, 22, 0.12)", border: "rgba(249, 115, 22, 0.3)", text: "#fb923c", bar: "#f97316" },
  "6": { bg: "rgba(168, 85, 247, 0.12)", border: "rgba(168, 85, 247, 0.3)", text: "#c084fc", bar: "#a855f7" },
  "7": { bg: "rgba(6, 182, 212, 0.12)", border: "rgba(6, 182, 212, 0.3)", text: "#22d3ee", bar: "#06b6d4" },
  "8": { bg: "rgba(20, 184, 166, 0.12)", border: "rgba(20, 184, 166, 0.3)", text: "#2dd4bf", bar: "#14b8a6" },
  "9": { bg: "rgba(245, 158, 11, 0.12)", border: "rgba(245, 158, 11, 0.3)", text: "#fbbf24", bar: "#f59e0b" },
  "10": { bg: "rgba(148, 163, 184, 0.12)", border: "rgba(148, 163, 184, 0.3)", text: "#cbd5e1", bar: "#94a3b8" },
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
    <div style={{ display: "flex", flexDirection: "column", gap: 32, width: "100%", boxSizing: "border-box" }}>
      {/* ========================================================================= */}
      {/* WELCOME HERO BANNER (DARK EXECUTIVE GLASSMORPHISM) */}
      {/* ========================================================================= */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 24,
          background: "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(2, 6, 23, 0.98) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "36px 36px",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 1px 1px rgba(255, 255, 255, 0.05) inset",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          color: "#fff",
        }}
      >
        <div style={{ position: "relative", zIndex: 10, maxWidth: 900, display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Top Badges */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "6px 14px",
                borderRadius: 999,
                background: "rgba(225, 29, 72, 0.15)",
                border: "1px solid rgba(225, 29, 72, 0.35)",
                color: "#fda4af",
                fontSize: 11.5,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              <Sparkles size={14} color="#f43f5e" />
              <span>Painel Executivo Editorial</span>
            </span>

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "6px 14px",
                borderRadius: 999,
                background: "rgba(16, 185, 129, 0.12)",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                color: "#6ee7b7",
                fontSize: 11.5,
                fontWeight: 700,
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#34d399" }} />
              <span>Edição Oficial SBC</span>
            </span>
          </div>

          {/* Heading */}
          <div>
            <h1
              style={{
                fontSize: 32,
                fontWeight: 900,
                color: "#ffffff",
                letterSpacing: "-0.03em",
                margin: 0,
                lineHeight: 1.15,
              }}
            >
              Tratado de Cirurgia da Coluna Vertebral
            </h1>
            <p
              style={{
                margin: "10px 0 0",
                fontSize: 14.5,
                color: "#94a3b8",
                lineHeight: 1.6,
                maxWidth: 680,
                fontWeight: 400,
              }}
            >
              Ambiente de curadoria acadêmica e gestão científica dos 109 capítulos, revisão do corpo editorial e governança de acessos institucionais.
            </p>
          </div>

          {/* Quick Action Navigation Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, paddingTop: 6 }}>
            <button
              onClick={() => onNavigateToTab("capitulos")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "11px 22px",
                borderRadius: 12,
                background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
                color: "#fff",
                fontWeight: 800,
                fontSize: 13.5,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(225, 29, 72, 0.4)",
              }}
            >
              <BookOpen size={16} />
              <span>Gerenciar Capítulos ({totalChapters})</span>
              <ArrowRight size={15} />
            </button>

            <button
              onClick={() => onNavigateToTab("usuarios")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "11px 20px",
                borderRadius: 12,
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#f1f5f9",
                fontWeight: 700,
                fontSize: 13.5,
                cursor: "pointer",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <Users size={16} color="#cbd5e1" />
              <span>Usuários ({usuarios.length})</span>
              {pendingUsers > 0 && (
                <span
                  style={{
                    padding: "2px 8px",
                    borderRadius: 999,
                    background: "rgba(245, 158, 11, 0.25)",
                    color: "#fcd34d",
                    border: "1px solid rgba(245, 158, 11, 0.4)",
                    fontSize: 11,
                    fontWeight: 800,
                  }}
                >
                  {pendingUsers} pendentes
                </span>
              )}
            </button>

            <Link
              href="/pt/home-new"
              target="_blank"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "11px 18px",
                borderRadius: 12,
                background: "rgba(6, 182, 212, 0.12)",
                border: "1px solid rgba(6, 182, 212, 0.3)",
                color: "#67e8f9",
                fontWeight: 700,
                fontSize: 13.5,
                textDecoration: "none",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <Globe size={16} />
              <span>Visualizar Portal</span>
              <ExternalLink size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4 MAIN KPI METRIC CARDS (GLASSMORPHISM & LUCIDE ICONS) */}
      {/* ========================================================================= */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: 20,
          width: "100%",
        }}
      >
        {/* Metric 1 */}
        <div
          style={{
            background: "rgba(15, 23, 42, 0.7)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: 20,
            padding: "22px 24px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "#94a3b8" }}>
                Capítulos Publicados
              </div>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#fff", marginTop: 4, letterSpacing: "-0.02em" }}>
                {totalChapters}
              </div>
            </div>
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 14,
                background: "rgba(59, 130, 246, 0.15)",
                border: "1px solid rgba(59, 130, 246, 0.3)",
                color: "#60a5fa",
                display: "grid",
                placeItems: "center",
              }}
            >
              <BookOpen size={22} />
            </div>
          </div>
          <div style={{ marginTop: 16, paddingTop: 12, borderTop: "1px solid rgba(255, 255, 255, 0.06)", display: "flex", alignItems: "center", gap: 7, fontSize: 12, fontWeight: 700, color: "#34d399" }}>
            <CheckCircle2 size={15} />
            <span>100% da Obra Catalogada</span>
          </div>
        </div>

        {/* Metric 2 */}
        <div
          style={{
            background: "rgba(15, 23, 42, 0.7)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: 20,
            padding: "22px 24px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "#94a3b8" }}>
                Seções Temáticas
              </div>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#fff", marginTop: 4, letterSpacing: "-0.02em" }}>
                {SECOES.length}
              </div>
            </div>
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 14,
                background: "rgba(244, 63, 94, 0.15)",
                border: "1px solid rgba(244, 63, 94, 0.3)",
                color: "#fb7185",
                display: "grid",
                placeItems: "center",
              }}
            >
              <Layers size={22} />
            </div>
          </div>
          <div style={{ marginTop: 16, paddingTop: 12, borderTop: "1px solid rgba(255, 255, 255, 0.06)", display: "flex", alignItems: "center", gap: 7, fontSize: 12, fontWeight: 600, color: "#cbd5e1" }}>
            <Activity size={15} color="#f43f5e" />
            <span>Da Base à Robótica Avançada</span>
          </div>
        </div>

        {/* Metric 3 */}
        <div
          style={{
            background: "rgba(15, 23, 42, 0.7)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: 20,
            padding: "22px 24px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "#94a3b8" }}>
                Corpo de Autores
              </div>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#fff", marginTop: 4, letterSpacing: "-0.02em" }}>
                {authors.length}+
              </div>
            </div>
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 14,
                background: "rgba(16, 185, 129, 0.15)",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                color: "#34d399",
                display: "grid",
                placeItems: "center",
              }}
            >
              <Users size={22} />
            </div>
          </div>
          <div style={{ marginTop: 16, paddingTop: 12, borderTop: "1px solid rgba(255, 255, 255, 0.06)", display: "flex", alignItems: "center", gap: 7, fontSize: 12, fontWeight: 600, color: "#cbd5e1" }}>
            <Award size={15} color="#10b981" />
            <span>Editores &amp; Especialistas SBC</span>
          </div>
        </div>

        {/* Metric 4 */}
        <div
          style={{
            background: "rgba(15, 23, 42, 0.7)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: 20,
            padding: "22px 24px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "#94a3b8" }}>
                Acessos &amp; Usuários
              </div>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#fff", marginTop: 4, letterSpacing: "-0.02em" }}>
                {usuarios.length}
              </div>
            </div>
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 14,
                background: "rgba(168, 85, 247, 0.15)",
                border: "1px solid rgba(168, 85, 247, 0.3)",
                color: "#c084fc",
                display: "grid",
                placeItems: "center",
              }}
            >
              <ShieldCheck size={22} />
            </div>
          </div>
          <div style={{ marginTop: 16, paddingTop: 12, borderTop: "1px solid rgba(255, 255, 255, 0.06)", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 11.5, fontWeight: 700 }}>
            <span style={{ color: "#34d399" }}>{approvedUsers} ativos</span>
            <span style={{ color: "#475569" }}>•</span>
            <span style={{ color: pendingUsers > 0 ? "#fbbf24" : "#94a3b8" }}>{pendingUsers} pendentes</span>
            <span style={{ color: "#475569" }}>•</span>
            <span style={{ color: "#c084fc" }}>{adminUsers} admins</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTIONS BREAKDOWN & EDITORIAL COMPLIANCE */}
      {/* ========================================================================= */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
          gap: 24,
          alignItems: "flex-start",
        }}
      >
        {/* Sections Distribution */}
        <div
          style={{
            background: "rgba(15, 23, 42, 0.7)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: 24,
            padding: "28px",
            boxShadow: "0 16px 40px rgba(0, 0, 0, 0.4)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 16, borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#fff", display: "flex", alignItems: "center", gap: 8 }}>
                <TrendingUp size={18} color="#38bdf8" />
                <span>Distribuição Curricular por Seção</span>
              </div>
              <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>
                Capítulos organizados nas 10 seções do Tratado
              </div>
            </div>

            <button
              onClick={() => onNavigateToTab("capitulos")}
              style={{
                background: "none",
                border: "none",
                color: "#38bdf8",
                fontSize: 12.5,
                fontWeight: 700,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <span>Ver Tabela Completa</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {sectionStats.map((sec) => {
              const colors = SECTION_COLORS[String(sec.id)] || SECTION_COLORS["1"];
              return (
                <div
                  key={sec.id}
                  onClick={() => {
                    onFilterSection(String(sec.id));
                    onNavigateToTab("capitulos");
                  }}
                  style={{
                    padding: "12px 16px",
                    borderRadius: 14,
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
                      <span
                        style={{
                          padding: "2px 8px",
                          borderRadius: 6,
                          fontSize: 11,
                          fontWeight: 800,
                          background: colors.bg,
                          color: colors.text,
                          border: `1px solid ${colors.border}`,
                          flexShrink: 0,
                        }}
                      >
                        Seção {sec.id}
                      </span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#f1f5f9", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {sec.titulo_pt}
                      </span>
                    </div>

                    <div style={{ fontSize: 12, fontWeight: 800, color: "#e2e8f0", flexShrink: 0, display: "flex", alignItems: "center", gap: 5 }}>
                      <span>{sec.count} cap.</span>
                      <span style={{ color: "#64748b", fontSize: 11, fontWeight: 500 }}>({sec.percentage}%)</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div style={{ width: "100%", height: 6, borderRadius: 999, background: "rgba(255, 255, 255, 0.08)", overflow: "hidden" }}>
                    <div
                      style={{
                        width: `${Math.max(sec.percentage * 4.5, 6)}%`,
                        height: "100%",
                        borderRadius: 999,
                        background: colors.bar,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Compliance & Quick Actions */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {/* Compliance Card */}
          <div
            style={{
              background: "rgba(15, 23, 42, 0.7)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: 24,
              padding: "28px",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.4)",
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            <div style={{ paddingBottom: 14, borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#fff", display: "flex", alignItems: "center", gap: 8 }}>
                <FileCheck2 size={18} color="#10b981" />
                <span>Conformidade &amp; Qualidade</span>
              </div>
              <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>
                Indexação médica e padronização científica
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { title: "Resumos Clínicos Estruturados", value: "109 / 109" },
                { title: "Descritores DeCS / MeSH", value: "100% Cobertos" },
                { title: "Referências Bibliográficas (DOI)", value: "Indexadas" },
                { title: "Suporte Multilíngue (PT, EN, ES)", value: "739 Páginas" },
                { title: "Link Direto DiLivros Oficial", value: "Ativo" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "11px 14px",
                    borderRadius: 12,
                    background: "rgba(16, 185, 129, 0.08)",
                    border: "1px solid rgba(16, 185, 129, 0.2)",
                    fontSize: 12.5,
                    fontWeight: 600,
                    color: "#a7f3d0",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <CheckCircle2 size={16} color="#34d399" />
                    <span>{item.title}</span>
                  </div>
                  <span style={{ fontWeight: 800, fontFamily: "monospace", color: "#6ee7b7" }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions Card */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(2, 6, 23, 0.95) 100%)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: 24,
              padding: "24px 28px",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.5)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, paddingBottom: 12, borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <Zap size={16} color="#fbbf24" />
              <span style={{ fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "#fff" }}>
                Ações Rápidas
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <button
                onClick={onOpenNewChapter}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  borderRadius: 12,
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Plus size={16} color="#f43f5e" />
                  <span>Cadastrar Novo Capítulo</span>
                </span>
                <ArrowRight size={14} color="#94a3b8" />
              </button>

              <button
                onClick={onOpenNewAuthor}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  borderRadius: 12,
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <UserPlus size={16} color="#38bdf8" />
                  <span>Cadastrar Novo Autor</span>
                </span>
                <ArrowRight size={14} color="#94a3b8" />
              </button>

              <a
                href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
                  border: "none",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 800,
                  textDecoration: "none",
                  boxShadow: "0 6px 20px rgba(225, 29, 72, 0.35)",
                  boxSizing: "border-box",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <ShoppingCart size={16} />
                  <span>Adquirir Edição Impressa</span>
                </span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
