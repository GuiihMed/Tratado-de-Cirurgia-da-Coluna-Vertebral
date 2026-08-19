"use client";

import { Capitulo, AutorEditor, PerfilUsuario } from "@/lib/types";
import { SECOES } from "@/lib/data/sections-and-chapters";
import Link from "next/link";

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

const SECTION_COLORS: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  "1": { bg: "#eff6ff", border: "#bfdbfe", text: "#1d4ed8", glow: "rgba(59, 130, 246, 0.15)" },
  "2": { bg: "#f0fdf4", border: "#bbf7d0", text: "#15803d", glow: "rgba(34, 197, 94, 0.15)" },
  "3": { bg: "#fff1f2", border: "#fecdd3", text: "#be123c", glow: "rgba(244, 63, 94, 0.15)" },
  "4": { bg: "#fdf4ff", border: "#f5d0fe", text: "#a21caf", glow: "rgba(217, 70, 239, 0.15)" },
  "5": { bg: "#fff7ed", border: "#fed7aa", text: "#c2410c", glow: "rgba(249, 115, 22, 0.15)" },
  "6": { bg: "#faf5ff", border: "#e9d5ff", text: "#7e22ce", glow: "rgba(168, 85, 247, 0.15)" },
  "7": { bg: "#ecfeff", border: "#a5f3fc", text: "#0e7490", glow: "rgba(6, 182, 212, 0.15)" },
  "8": { bg: "#f0fdfa", border: "#99f6e4", text: "#0f766e", glow: "rgba(20, 184, 166, 0.15)" },
  "9": { bg: "#fffbeb", border: "#fde68a", text: "#b45309", glow: "rgba(245, 158, 11, 0.15)" },
  "10": { bg: "#f8fafc", border: "#cbd5e1", text: "#334155", glow: "rgba(100, 116, 139, 0.15)" },
};

export default function DashboardTab({
  chapters,
  authors,
  usuarios,
  onNavigateToTab,
  onFilterSection,
  onOpenNewChapter,
  onOpenNewAuthor,
  isSupabaseOnline,
}: DashboardTabProps) {
  const totalChapters = chapters.length;
  const approvedUsers = usuarios.filter((u) => u.status === "aprovado").length;
  const pendingUsers = usuarios.filter((u) => u.status === "pendente").length;
  const adminUsers = usuarios.filter(
    (u) => u.role === "super_admin" || u.role === "co_super_admin" || u.role === "admin_escritor"
  ).length;

  // Calculate chapters per section
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
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      {/* ========================================================================= */}
      {/* TOP WELCOME BANNER */}
      {/* ========================================================================= */}
      <div
        style={{
          background: "linear-gradient(135deg, #001f4d 0%, #00122b 60%, #000917 100%)",
          borderRadius: 20,
          padding: "32px 36px",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 12px 36px rgba(0, 18, 43, 0.25)",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-20px",
            top: "-20px",
            width: "320px",
            height: "100%",
            backgroundImage: "url('/assets/hero-spine.png')",
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            opacity: 0.2,
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 820 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 10px",
                borderRadius: 20,
                background: "rgba(244, 63, 94, 0.2)",
                border: "1px solid rgba(244, 63, 94, 0.4)",
                color: "#fda4af",
                fontSize: 12,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f43f5e" }} />
              Painel de Controle Editorial
            </span>

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 10px",
                borderRadius: 20,
                background: isSupabaseOnline ? "rgba(34, 197, 94, 0.15)" : "rgba(56, 189, 248, 0.15)",
                border: `1px solid ${isSupabaseOnline ? "rgba(34, 197, 94, 0.35)" : "rgba(56, 189, 248, 0.35)"}`,
                color: isSupabaseOnline ? "#86efac" : "#7dd3fc",
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              <span>{isSupabaseOnline ? "🟢 Supabase Cloud Live" : "🔵 Armazenamento Local Sincronizado"}</span>
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 900, margin: "0 0 10px", letterSpacing: "-0.02em" }}>
            Tratado de Cirurgia da Coluna Vertebral
          </h1>

          <p style={{ fontSize: 15, lineHeight: 1.55, color: "#cbd5e1", margin: "0 0 24px" }}>
            Gerenciamento centralizado de conteúdos clínicos, 10 seções temáticas, 109 capítulos completos com indexação DeCS/MeSH, corpo de autores e controle de acessos da Sociedade Brasileira de Coluna (SBC).
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              onClick={() => onNavigateToTab("capitulos")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                borderRadius: 10,
                background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
                color: "#fff",
                fontWeight: 800,
                fontSize: 13.5,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 16px rgba(225, 29, 72, 0.4)",
                transition: "all 0.2s ease",
              }}
            >
              <span>📚 Gerenciar Capítulos ({totalChapters})</span>
            </button>

            <button
              onClick={() => onNavigateToTab("usuarios")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 18px",
                borderRadius: 10,
                background: "rgba(255, 255, 255, 0.12)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 13.5,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <span>👥 Usuários ({usuarios.length})</span>
              {pendingUsers > 0 && (
                <span
                  style={{
                    background: "#f59e0b",
                    color: "#000",
                    fontSize: 11,
                    fontWeight: 900,
                    padding: "2px 7px",
                    borderRadius: 10,
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
                padding: "10px 18px",
                borderRadius: 10,
                background: "rgba(14, 165, 233, 0.15)",
                border: "1px solid rgba(14, 165, 233, 0.35)",
                color: "#38bdf8",
                fontWeight: 700,
                fontSize: 13.5,
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
            >
              <span>🌐 Visualizar Portal 4K</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4 MAIN KPI METRICS */}
      {/* ========================================================================= */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
        {/* Metric 1 */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "22px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.03)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 14,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Capítulos Publicados
              </div>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#001a3d", marginTop: 4 }}>
                {totalChapters}
              </div>
            </div>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "#eff6ff",
                color: "#1d4ed8",
                display: "grid",
                placeItems: "center",
                fontSize: 20,
              }}
            >
              📖
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "#059669", fontWeight: 600 }}>
            <span>✓ 100% da Obra Impressa Catalogada</span>
          </div>
        </div>

        {/* Metric 2 */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "22px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.03)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 14,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Seções Curriculares
              </div>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#001a3d", marginTop: 4 }}>
                {SECOES.length}
              </div>
            </div>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "#fdf2f8",
                color: "#be185d",
                display: "grid",
                placeItems: "center",
                fontSize: 20,
              }}
            >
              📑
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "#64748b", fontWeight: 600 }}>
            <span>Módulos de Ciências Básicas a Cirurgia 3D</span>
          </div>
        </div>

        {/* Metric 3 */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "22px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.03)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 14,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Corpo de Autores
              </div>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#001a3d", marginTop: 4 }}>
                {authors.length}+
              </div>
            </div>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "#f0fdf4",
                color: "#15803d",
                display: "grid",
                placeItems: "center",
                fontSize: 20,
              }}
            >
              👨‍⚕️
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "#0284c7", fontWeight: 600 }}>
            <span>Editores SBC e Especialistas A-Z</span>
          </div>
        </div>

        {/* Metric 4 */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "22px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.03)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 14,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Usuários & Permissões
              </div>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#001a3d", marginTop: 4 }}>
                {usuarios.length}
              </div>
            </div>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "#faf5ff",
                color: "#7e22ce",
                display: "grid",
                placeItems: "center",
                fontSize: 20,
              }}
            >
              🔐
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12, fontWeight: 700 }}>
            <span style={{ color: "#059669" }}>{approvedUsers} ativos</span>
            <span>•</span>
            <span style={{ color: pendingUsers > 0 ? "#ea580c" : "#64748b" }}>{pendingUsers} pendentes</span>
            <span>•</span>
            <span style={{ color: "#7c3aed" }}>{adminUsers} admins</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTIONS DISTRIBUTION & HEALTH CHECKLIST */}
      {/* ========================================================================= */}
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 24, alignItems: "start" }}>
        {/* Left: Sections Breakdown Chart */}
        <div
          style={{
            background: "#fff",
            borderRadius: 18,
            padding: "28px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 900, color: "#001a3d", margin: "0 0 4px" }}>
                Distribuição Curricular por Seção
              </h3>
              <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>
                Densidade de capítulos distribuídos nas 10 seções do Tratado
              </p>
            </div>
            <button
              onClick={() => onNavigateToTab("capitulos")}
              style={{
                fontSize: 12.5,
                fontWeight: 700,
                color: "#0284c7",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              Ver Tabela Completa →
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
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
                    borderRadius: 12,
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.border;
                    e.currentTarget.style.background = colors.bg;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#e2e8f0";
                    e.currentTarget.style.background = "#f8fafc";
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 900,
                          padding: "2px 6px",
                          borderRadius: 4,
                          background: colors.bg,
                          color: colors.text,
                          border: `1px solid ${colors.border}`,
                        }}
                      >
                        Seção {sec.id}
                      </span>
                      <strong style={{ fontSize: 13.5, color: "#1e293b" }}>{sec.titulo_pt}</strong>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 800, color: "#001a3d" }}>
                      {sec.count} capítulos <span style={{ fontSize: 11, color: "#64748b", fontWeight: 600 }}>({sec.percentage}%)</span>
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div style={{ height: 6, borderRadius: 3, background: "#e2e8f0", overflow: "hidden" }}>
                    <div
                      style={{
                        height: "100%",
                        width: `${Math.max(sec.percentage * 4, 8)}%`,
                        background: colors.text,
                        borderRadius: 3,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Scientific Quality Checklist & Quick Tools */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {/* Quality Checklist */}
          <div
            style={{
              background: "#fff",
              borderRadius: 18,
              padding: "28px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
            }}
          >
            <h3 style={{ fontSize: 17, fontWeight: 900, color: "#001a3d", margin: "0 0 6px" }}>
              Qualidade & Conformidade Editorial
            </h3>
            <p style={{ fontSize: 12.5, color: "#64748b", margin: "0 0 18px" }}>
              Padrões acadêmicos e indexação médica
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 12px", borderRadius: 8, background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#166534" }}>
                  ✓ Resumos Clínicos Estruturados
                </span>
                <span style={{ fontSize: 12, fontWeight: 900, color: "#166534" }}>109 / 109</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 12px", borderRadius: 8, background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#166534" }}>
                  ✓ Descritores DeCS / MeSH
                </span>
                <span style={{ fontSize: 12, fontWeight: 900, color: "#166534" }}>100% Cobertos</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 12px", borderRadius: 8, background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#166534" }}>
                  ✓ Referências Bibliográficas (DOI)
                </span>
                <span style={{ fontSize: 12, fontWeight: 900, color: "#166534" }}>Indexadas</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 12px", borderRadius: 8, background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#166534" }}>
                  ✓ Suporte Multilíngue (PT, EN, ES)
                </span>
                <span style={{ fontSize: 12, fontWeight: 900, color: "#166534" }}>739 Páginas</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 12px", borderRadius: 8, background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#166534" }}>
                  ✓ Link Direto DiLivros Oficial
                </span>
                <span style={{ fontSize: 12, fontWeight: 900, color: "#166534" }}>Ativo</span>
              </div>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div
            style={{
              background: "linear-gradient(135deg, #001a3d 0%, #001026 100%)",
              borderRadius: 18,
              padding: "24px",
              color: "#fff",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <h4 style={{ fontSize: 15, fontWeight: 800, margin: "0 0 14px", color: "#fff" }}>
              ⚡ Ações Rápidas do Editor
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <button
                onClick={onOpenNewChapter}
                style={{
                  padding: "10px 14px",
                  borderRadius: 8,
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>➕ Cadastrar Novo Capítulo</span>
                <span>→</span>
              </button>

              <button
                onClick={onOpenNewAuthor}
                style={{
                  padding: "10px 14px",
                  borderRadius: 8,
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>👤 Cadastrar Novo Autor</span>
                <span>→</span>
              </button>

              <a
                href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "10px 14px",
                  borderRadius: 8,
                  background: "#e11d48",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 800,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>🛒 Comprar Tratado na DiLivros</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
