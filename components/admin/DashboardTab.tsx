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
  theme?: "dark" | "light";
  currentUserRole?: string;
}

const SECTION_COLORS: Record<string, { bgDark: string; borderDark: string; textDark: string; bgLight: string; borderLight: string; textLight: string; bar: string }> = {
  "1": { bgDark: "rgba(59, 130, 246, 0.15)", borderDark: "rgba(59, 130, 246, 0.35)", textDark: "#60a5fa", bgLight: "#eff6ff", borderLight: "#bfdbfe", textLight: "#1d4ed8", bar: "#3b82f6" },
  "2": { bgDark: "rgba(34, 197, 94, 0.15)", borderDark: "rgba(34, 197, 94, 0.35)", textDark: "#4ade80", bgLight: "#f0fdf4", borderLight: "#bbf7d0", textLight: "#15803d", bar: "#22c55e" },
  "3": { bgDark: "rgba(244, 63, 94, 0.15)", borderDark: "rgba(244, 63, 94, 0.35)", textDark: "#fb7185", bgLight: "#fff1f2", borderLight: "#fecdd3", textLight: "#be123c", bar: "#f43f5e" },
  "4": { bgDark: "rgba(217, 70, 239, 0.15)", borderDark: "rgba(217, 70, 239, 0.35)", textDark: "#e879f9", bgLight: "#fdf4ff", borderLight: "#f5d0fe", textLight: "#a21caf", bar: "#d946ef" },
  "5": { bgDark: "rgba(249, 115, 22, 0.15)", borderDark: "rgba(249, 115, 22, 0.35)", textDark: "#fb923c", bgLight: "#fff7ed", borderLight: "#fed7aa", textLight: "#c2410c", bar: "#f97316" },
  "6": { bgDark: "rgba(168, 85, 247, 0.15)", borderDark: "rgba(168, 85, 247, 0.35)", textDark: "#c084fc", bgLight: "#faf5ff", borderLight: "#e9d5ff", textLight: "#7e22ce", bar: "#a855f7" },
  "7": { bgDark: "rgba(6, 182, 212, 0.15)", borderDark: "rgba(6, 182, 212, 0.35)", textDark: "#22d3ee", bgLight: "#ecfeff", borderLight: "#a5f3fc", textLight: "#0e7490", bar: "#06b6d4" },
  "8": { bgDark: "rgba(20, 184, 166, 0.15)", borderDark: "rgba(20, 184, 166, 0.35)", textDark: "#2dd4bf", bgLight: "#f0fdfa", borderLight: "#99f6e4", textLight: "#0f766e", bar: "#14b8a6" },
  "9": { bgDark: "rgba(245, 158, 11, 0.15)", borderDark: "rgba(245, 158, 11, 0.35)", textDark: "#fbbf24", bgLight: "#fffbeb", borderLight: "#fde68a", textLight: "#b45309", bar: "#f59e0b" },
  "10": { bgDark: "rgba(148, 163, 184, 0.15)", borderDark: "rgba(148, 163, 184, 0.35)", textDark: "#cbd5e1", bgLight: "#f8fafc", borderLight: "#cbd5e1", textLight: "#334155", bar: "#64748b" },
};

export default function DashboardTab({
  chapters,
  authors,
  usuarios,
  onNavigateToTab,
  onFilterSection,
  onOpenNewChapter,
  onOpenNewAuthor,
  theme = "dark",
  currentUserRole = "super_admin",
}: DashboardTabProps) {
  const isDark = theme === "dark";
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

  const cardBg = isDark ? "rgba(15, 23, 42, 0.7)" : "rgba(255, 255, 255, 0.92)";
  const cardBorder = isDark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid #e2e8f0";
  const textPrimary = isDark ? "#ffffff" : "#0f172a";
  const textSecondary = isDark ? "#cbd5e1" : "#334155";
  const textMuted = isDark ? "#94a3b8" : "#64748b";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, width: "100%", boxSizing: "border-box" }}>
      {/* ========================================================================= */}
      {/* WELCOME HERO BANNER */}
      {/* ========================================================================= */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 24,
          background: isDark
            ? "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(2, 6, 23, 0.98) 100%)"
            : "linear-gradient(135deg, #001a3d 0%, #002b59 100%)",
          border: isDark ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 43, 89, 0.3)",
          padding: "36px 36px",
          boxShadow: isDark
            ? "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 1px 1px rgba(255, 255, 255, 0.05) inset"
            : "0 20px 40px rgba(0, 26, 61, 0.18)",
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
                background: "rgba(225, 29, 72, 0.2)",
                border: "1px solid rgba(225, 29, 72, 0.4)",
                color: "#fda4af",
                fontSize: 11.5,
                fontWeight: 700,
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
                background: "rgba(16, 185, 129, 0.15)",
                border: "1px solid rgba(16, 185, 129, 0.35)",
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
                fontWeight: 700,
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
                color: "#cbd5e1",
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
                fontWeight: 700,
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

            {currentUserRole === "super_admin" && (
              <button
                onClick={() => onNavigateToTab("usuarios")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  padding: "11px 20px",
                  borderRadius: 12,
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
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
                      background: "rgba(245, 158, 11, 0.3)",
                      color: "#fcd34d",
                      border: "1px solid rgba(245, 158, 11, 0.5)",
                      fontSize: 11,
                      fontWeight: 700,
                    }}
                  >
                    {pendingUsers} pendentes
                  </span>
                )}
              </button>
            )}

            <Link
              href="/pt/home-new"
              target="_blank"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "11px 18px",
                borderRadius: 12,
                background: "rgba(6, 182, 212, 0.15)",
                border: "1px solid rgba(6, 182, 212, 0.35)",
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
      {/* 4 MAIN KPI METRIC CARDS */}
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
            background: cardBg,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: cardBorder,
            borderRadius: 20,
            padding: "22px 24px",
            boxShadow: isDark ? "0 10px 30px rgba(0, 0, 0, 0.35)" : "0 8px 24px rgba(0, 30, 80, 0.04)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted }}>
                Capítulos Publicados
              </div>
              <div style={{ fontSize: 32, fontWeight: 700, color: textPrimary, marginTop: 4, letterSpacing: "-0.02em" }}>
                {totalChapters}
              </div>
            </div>
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 14,
                background: isDark ? "rgba(59, 130, 246, 0.15)" : "#eff6ff",
                border: isDark ? "1px solid rgba(59, 130, 246, 0.3)" : "1px solid #bfdbfe",
                color: isDark ? "#60a5fa" : "#2563eb",
                display: "grid",
                placeItems: "center",
              }}
            >
              <BookOpen size={22} />
            </div>
          </div>
          <div style={{ marginTop: 16, paddingTop: 12, borderTop: isDark ? "1px solid rgba(255, 255, 255, 0.06)" : "1px solid #f1f5f9", display: "flex", alignItems: "center", gap: 7, fontSize: 12, fontWeight: 700, color: "#10b981" }}>
            <CheckCircle2 size={15} />
            <span>100% da Obra Catalogada</span>
          </div>
        </div>

        {/* Metric 2 */}
        <div
          style={{
            background: cardBg,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: cardBorder,
            borderRadius: 20,
            padding: "22px 24px",
            boxShadow: isDark ? "0 10px 30px rgba(0, 0, 0, 0.35)" : "0 8px 24px rgba(0, 30, 80, 0.04)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted }}>
                Seções Temáticas
              </div>
              <div style={{ fontSize: 32, fontWeight: 700, color: textPrimary, marginTop: 4, letterSpacing: "-0.02em" }}>
                {SECOES.length}
              </div>
            </div>
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 14,
                background: isDark ? "rgba(244, 63, 94, 0.15)" : "#fff1f2",
                border: isDark ? "1px solid rgba(244, 63, 94, 0.3)" : "1px solid #fecdd3",
                color: isDark ? "#fb7185" : "#e11d48",
                display: "grid",
                placeItems: "center",
              }}
            >
              <Layers size={22} />
            </div>
          </div>
          <div style={{ marginTop: 16, paddingTop: 12, borderTop: isDark ? "1px solid rgba(255, 255, 255, 0.06)" : "1px solid #f1f5f9", display: "flex", alignItems: "center", gap: 7, fontSize: 12, fontWeight: 600, color: textSecondary }}>
            <Activity size={15} color="#f43f5e" />
            <span>Da Base à Robótica Avançada</span>
          </div>
        </div>

        {/* Metric 3 */}
        <div
          style={{
            background: cardBg,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: cardBorder,
            borderRadius: 20,
            padding: "22px 24px",
            boxShadow: isDark ? "0 10px 30px rgba(0, 0, 0, 0.35)" : "0 8px 24px rgba(0, 30, 80, 0.04)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted }}>
                Corpo de Autores
              </div>
              <div style={{ fontSize: 32, fontWeight: 700, color: textPrimary, marginTop: 4, letterSpacing: "-0.02em" }}>
                {authors.length}+
              </div>
            </div>
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 14,
                background: isDark ? "rgba(16, 185, 129, 0.15)" : "#f0fdf4",
                border: isDark ? "1px solid rgba(16, 185, 129, 0.3)" : "1px solid #bbf7d0",
                color: isDark ? "#34d399" : "#16a34a",
                display: "grid",
                placeItems: "center",
              }}
            >
              <Users size={22} />
            </div>
          </div>
          <div style={{ marginTop: 16, paddingTop: 12, borderTop: isDark ? "1px solid rgba(255, 255, 255, 0.06)" : "1px solid #f1f5f9", display: "flex", alignItems: "center", gap: 7, fontSize: 12, fontWeight: 600, color: textSecondary }}>
            <Award size={15} color="#10b981" />
            <span>Editores &amp; Especialistas SBC</span>
          </div>
        </div>

        {/* Metric 4 */}
        <div
          style={{
            background: cardBg,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: cardBorder,
            borderRadius: 20,
            padding: "22px 24px",
            boxShadow: isDark ? "0 10px 30px rgba(0, 0, 0, 0.35)" : "0 8px 24px rgba(0, 30, 80, 0.04)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted }}>
                Acessos &amp; Usuários
              </div>
              <div style={{ fontSize: 32, fontWeight: 700, color: textPrimary, marginTop: 4, letterSpacing: "-0.02em" }}>
                {usuarios.length}
              </div>
            </div>
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 14,
                background: isDark ? "rgba(168, 85, 247, 0.15)" : "#faf5ff",
                border: isDark ? "1px solid rgba(168, 85, 247, 0.3)" : "1px solid #e9d5ff",
                color: isDark ? "#c084fc" : "#9333ea",
                display: "grid",
                placeItems: "center",
              }}
            >
              <ShieldCheck size={22} />
            </div>
          </div>
          <div style={{ marginTop: 16, paddingTop: 12, borderTop: isDark ? "1px solid rgba(255, 255, 255, 0.06)" : "1px solid #f1f5f9", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 11.5, fontWeight: 700 }}>
            <span style={{ color: "#10b981" }}>{approvedUsers} ativos</span>
            <span style={{ color: textMuted }}>•</span>
            <span style={{ color: pendingUsers > 0 ? "#f59e0b" : textMuted }}>{pendingUsers} pendentes</span>
            <span style={{ color: textMuted }}>•</span>
            <span style={{ color: isDark ? "#c084fc" : "#7c3aed" }}>{adminUsers} admins</span>
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
            background: cardBg,
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: cardBorder,
            borderRadius: 24,
            padding: "28px",
            boxShadow: isDark ? "0 16px 40px rgba(0, 0, 0, 0.4)" : "0 10px 30px rgba(0, 30, 80, 0.04)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 16, borderBottom: isDark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid #f1f5f9" }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: textPrimary, display: "flex", alignItems: "center", gap: 8 }}>
                <TrendingUp size={18} color="#38bdf8" />
                <span>Distribuição Curricular por Seção</span>
              </div>
              <div style={{ fontSize: 12, color: textMuted, marginTop: 2 }}>
                Capítulos organizados nas 10 seções do Tratado
              </div>
            </div>

            <button
              onClick={() => onNavigateToTab("capitulos")}
              style={{
                background: "none",
                border: "none",
                color: isDark ? "#38bdf8" : "#0284c7",
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
              const secBg = isDark ? colors.bgDark : colors.bgLight;
              const secBorder = isDark ? colors.borderDark : colors.borderLight;
              const secText = isDark ? colors.textDark : colors.textLight;

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
                    background: isDark ? "rgba(255, 255, 255, 0.03)" : "#f8fafc",
                    border: isDark ? "1px solid rgba(255, 255, 255, 0.06)" : "1px solid #e2e8f0",
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
                          fontWeight: 700,
                          background: secBg,
                          color: secText,
                          border: `1px solid ${secBorder}`,
                          flexShrink: 0,
                        }}
                      >
                        Seção {sec.id}
                      </span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {sec.titulo_pt}
                      </span>
                    </div>

                    <div style={{ fontSize: 12, fontWeight: 700, color: textPrimary, flexShrink: 0, display: "flex", alignItems: "center", gap: 5 }}>
                      <span>{sec.count} cap.</span>
                      <span style={{ color: textMuted, fontSize: 11, fontWeight: 500 }}>({sec.percentage}%)</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div style={{ width: "100%", height: 6, borderRadius: 999, background: isDark ? "rgba(255, 255, 255, 0.08)" : "#e2e8f0", overflow: "hidden" }}>
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
              background: cardBg,
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: cardBorder,
              borderRadius: 24,
              padding: "28px",
              boxShadow: isDark ? "0 16px 40px rgba(0, 0, 0, 0.4)" : "0 10px 30px rgba(0, 30, 80, 0.04)",
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            <div style={{ paddingBottom: 14, borderBottom: isDark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid #f1f5f9" }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: textPrimary, display: "flex", alignItems: "center", gap: 8 }}>
                <FileCheck2 size={18} color="#10b981" />
                <span>Conformidade &amp; Qualidade</span>
              </div>
              <div style={{ fontSize: 12, color: textMuted, marginTop: 2 }}>
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
                    background: isDark ? "rgba(16, 185, 129, 0.08)" : "#f0fdf4",
                    border: isDark ? "1px solid rgba(16, 185, 129, 0.2)" : "1px solid #bbf7d0",
                    fontSize: 12.5,
                    fontWeight: 600,
                    color: isDark ? "#a7f3d0" : "#15803d",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <CheckCircle2 size={16} color="#10b981" />
                    <span>{item.title}</span>
                  </div>
                  <span style={{ fontWeight: 700, fontFamily: "monospace", color: isDark ? "#6ee7b7" : "#166534" }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions Card */}
          <div
            style={{
              background: isDark
                ? "linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(2, 6, 23, 0.95) 100%)"
                : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: isDark ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid #e2e8f0",
              borderRadius: 24,
              padding: "24px 28px",
              boxShadow: isDark ? "0 16px 40px rgba(0, 0, 0, 0.5)" : "0 10px 30px rgba(0, 30, 80, 0.04)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, paddingBottom: 12, borderBottom: isDark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid #f1f5f9" }}>
              <Zap size={16} color="#f59e0b" />
              <span style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textPrimary }}>
                Ações Rápidas
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <button
                onClick={() => window.location.href = "/admin/editar/novo"}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  borderRadius: 12,
                  background: isDark ? "rgba(255, 255, 255, 0.06)" : "#f1f5f9",
                  border: isDark ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid #e2e8f0",
                  color: textPrimary,
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Plus size={16} color="#f43f5e" />
                  <span>Cadastrar Novo Capítulo</span>
                </span>
                <ArrowRight size={14} color={textMuted} />
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
                  background: isDark ? "rgba(255, 255, 255, 0.06)" : "#f1f5f9",
                  border: isDark ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid #e2e8f0",
                  color: textPrimary,
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <UserPlus size={16} color="#0284c7" />
                  <span>Cadastrar Novo Autor</span>
                </span>
                <ArrowRight size={14} color={textMuted} />
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
                  fontWeight: 700,
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
