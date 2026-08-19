"use client";

import React, { useState, useMemo } from "react";
import { PerfilUsuario, UserRole, UserStatus } from "@/lib/types";

interface UsersManagementTabProps {
  usuarios: PerfilUsuario[];
  loading: boolean;
  currentUserEmail?: string | null;
  onUpdateStatus: (id: string, role: UserRole, status: UserStatus) => void | Promise<void>;
  onDeleteUser: (id: string, nome: string) => void | Promise<void>;
  onAddUser: (usuario: PerfilUsuario) => void | Promise<void>;
  isPending: boolean;
}

export const ROLE_LABELS: Record<UserRole, { label: string; badgeBg: string; badgeColor: string; desc: string }> = {
  super_admin: {
    label: "Super Admin",
    badgeBg: "rgba(124, 58, 237, 0.12)",
    badgeColor: "#7c3aed",
    desc: "Acesso total irrestrito, gerencia usuários e permissões",
  },
  co_super_admin: {
    label: "Co-Super Admin",
    badgeBg: "rgba(30, 58, 138, 0.12)",
    badgeColor: "#1e3a8a",
    desc: "Controla tudo, aprova cadastros e edita a obra",
  },
  admin_escritor: {
    label: "Admin Escritor (Editor)",
    badgeBg: "rgba(2, 132, 199, 0.12)",
    badgeColor: "#0284c7",
    desc: "Cria e edita seções e capítulos da obra",
  },
  escritor: {
    label: "Escritor (Autor)",
    badgeBg: "rgba(71, 85, 105, 0.12)",
    badgeColor: "#334155",
    desc: "Redige e submete capítulos atribuídos",
  },
};

export const STATUS_LABELS: Record<UserStatus, { label: string; badgeBg: string; badgeColor: string; border: string }> = {
  pendente: {
    label: "Aguardando Aprovação",
    badgeBg: "#fffbeb",
    badgeColor: "#b45309",
    border: "#fde68a",
  },
  aprovado: {
    label: "Acesso Aprovado",
    badgeBg: "#f0fdf4",
    badgeColor: "#15803d",
    border: "#bbf7d0",
  },
  bloqueado: {
    label: "Acesso Suspenso",
    badgeBg: "#fef2f2",
    badgeColor: "#b91c1c",
    border: "#fecaca",
  },
};

export default function UsersManagementTab({
  usuarios,
  loading,
  currentUserEmail,
  onUpdateStatus,
  onDeleteUser,
  onAddUser,
  isPending,
}: UsersManagementTabProps) {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterRole, setFilterRole] = useState<string>("all");
  const [showSqlModal, setShowSqlModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);

  // Form for adding new user directly
  const [newNome, setNewNome] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newCargo, setNewCargo] = useState("");
  const [newRole, setNewRole] = useState<UserRole>("admin_escritor");
  const [newStatus, setNewStatus] = useState<UserStatus>("aprovado");

  // Filtered list
  const filteredUsers = useMemo(() => {
    return usuarios.filter((u) => {
      const matchSearch =
        u.nome.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase()) ||
        (u.cargo_instituicao && u.cargo_instituicao.toLowerCase().includes(search.toLowerCase()));

      const matchStatus = filterStatus === "all" || u.status === filterStatus;
      const matchRole = filterRole === "all" || u.role === filterRole;

      return matchSearch && matchStatus && matchRole;
    });
  }, [usuarios, search, filterStatus, filterRole]);

  // Metrics
  const countTotal = usuarios.length;
  const countPendentes = usuarios.filter((u) => u.status === "pendente").length;
  const countAprovados = usuarios.filter((u) => u.status === "aprovado").length;
  const countBloqueados = usuarios.filter((u) => u.status === "bloqueado").length;
  const countSuperAdmins = usuarios.filter((u) => u.role === "super_admin" || u.role === "co_super_admin").length;

  const handleCreateUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNome.trim() || !newEmail.trim()) return;

    const novo: PerfilUsuario = {
      id: `usr-${Date.now()}`,
      nome: newNome.trim(),
      email: newEmail.trim().toLowerCase(),
      cargo_instituicao: newCargo.trim() || "Membro SBC",
      role: newRole,
      status: newStatus,
      aprovado_em: newStatus === "aprovado" ? new Date().toISOString() : null,
      created_at: new Date().toISOString(),
    };

    onAddUser(novo);
    setShowAddModal(false);
    setNewNome("");
    setNewEmail("");
    setNewCargo("");
  };

  const sqlSchemaCode = `-- ============================================================
-- SCRIPT DE CRIAÇÃO DA TABELA DE USUÁRIOS E PERMISSÕES NO SUPABASE
-- Execute no SQL Editor do seu Dashboard Supabase (https://supabase.com)
-- ============================================================

-- 1. Criação da tabela de Perfis
CREATE TABLE IF NOT EXISTS public.perfis (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  nome TEXT NOT NULL,
  cargo_instituicao TEXT,
  role TEXT NOT NULL DEFAULT 'escritor', -- 'super_admin', 'co_super_admin', 'admin_escritor', 'escritor'
  status TEXT NOT NULL DEFAULT 'pendente', -- 'pendente', 'aprovado', 'bloqueado'
  aprovado_em TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Habilitação de RLS (Row Level Security)
ALTER TABLE public.perfis ENABLE ROW LEVEL SECURITY;

-- 3. Políticas de Leitura e Edição
CREATE POLICY "Permitir leitura pública de perfis" 
ON public.perfis FOR SELECT 
USING (true);

CREATE POLICY "Permitir gerenciamento de perfis" 
ON public.perfis FOR ALL 
USING (true);

-- 4. Trigger automático: Quando um novo usuário se cadastrar no Auth,
-- cria automaticamente um registro correspondente na tabela 'perfis' com status 'pendente'
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.perfis (id, email, nome, cargo_instituicao, role, status)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'nome', split_part(new.email, '@', 1)),
    COALESCE(new.raw_user_meta_data->>'cargo_instituicao', 'Membro SBC'),
    'escritor',
    'pendente'
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
`;

  const copySqlToClipboard = () => {
    navigator.clipboard.writeText(sqlSchemaCode);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 3000);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      {/* HEADER DA ABA */}
      <section
        style={{
          background: "#fff",
          borderRadius: 18,
          padding: "32px",
          border: "1px solid #e2e8f0",
          boxShadow: "0 10px 30px rgba(0, 30, 80, 0.04)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 10px",
                borderRadius: 6,
                background: "rgba(124, 58, 237, 0.1)",
                color: "#7c3aed",
                fontSize: 12,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: 8,
              }}
            >
              <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Controle de Permissões e Acessos Hierárquicos</span>
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 900, color: "#001a3d", margin: "0 0 6px", letterSpacing: "-0.02em" }}>
              Gestão de Usuários & Aprovação de Cadastros
            </h2>
            <p style={{ fontSize: 13.5, color: "#64748b", margin: 0, maxWidth: 750, lineHeight: 1.5 }}>
              Aprove ou recuse novos cadastros de médicos e autores, defina níveis de permissão (<strong>Super Admin</strong>, <strong>Co-Super Admin</strong>, <strong>Admin Escritor</strong> ou <strong>Escritor</strong>) e controle os acessos ao Tratado de Cirurgia da Coluna.
            </p>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={() => setShowSqlModal(true)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "10px 16px",
                borderRadius: 8,
                border: "1px solid #cbd5e1",
                background: "#f8fafc",
                color: "#334155",
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              </svg>
              <span>Configurar SQL Supabase</span>
            </button>

            <button
              type="button"
              onClick={() => setShowAddModal(true)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "10px 18px",
                borderRadius: 8,
                border: "none",
                background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
                color: "#fff",
                fontSize: 13.5,
                fontWeight: 800,
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(124, 58, 237, 0.3)",
                transition: "all 0.2s ease",
              }}
            >
              <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
                <line x1="19" y1="8" x2="19" y2="14" />
                <line x1="22" y1="11" x2="16" y2="11" />
              </svg>
              <span>+ Cadastrar / Convidar Usuário</span>
            </button>
          </div>
        </div>

        {/* ALERTA DE PENDÊNCIAS SE HOUVER */}
        {countPendentes > 0 && (
          <div
            style={{
              marginTop: 24,
              padding: "16px 20px",
              borderRadius: 12,
              background: "#fffbeb",
              border: "1px solid #fde68a",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  background: "#fef3c7",
                  color: "#d97706",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  fontWeight: 900,
                  flexShrink: 0,
                }}
              >
                ⏳
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: 14.5, fontWeight: 800, color: "#92400e" }}>
                  {countPendentes === 1
                    ? "Existe 1 nova solicitação de cadastro pendente de aprovação!"
                    : `Existem ${countPendentes} novas solicitações de cadastro pendentes de aprovação!`}
                </h4>
                <p style={{ margin: "2px 0 0", fontSize: 13, color: "#b45309" }}>
                  Clique no botão <strong>"Aceitar / Aprovar Acesso"</strong> na tabela abaixo para liberar a conta para publicação no Tratado.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setFilterStatus("pendente")}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                background: "#d97706",
                color: "#fff",
                border: "none",
                fontSize: 12.5,
                fontWeight: 800,
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(217, 119, 6, 0.3)",
              }}
            >
              Ver Solicitações Pendentes ({countPendentes})
            </button>
          </div>
        )}

        {/* CARDS DE MÉTRICAS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
            marginTop: 24,
          }}
        >
          <div
            onClick={() => setFilterStatus("all")}
            style={{
              padding: "16px 20px",
              borderRadius: 12,
              background: filterStatus === "all" ? "#f1f5f9" : "#f8fafc",
              border: filterStatus === "all" ? "1.5px solid #94a3b8" : "1px solid #e2e8f0",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>
              Total de Usuários
            </span>
            <div style={{ fontSize: 26, fontWeight: 900, color: "#001a3d", marginTop: 4 }}>
              {countTotal}
            </div>
          </div>

          <div
            onClick={() => setFilterStatus("pendente")}
            style={{
              padding: "16px 20px",
              borderRadius: 12,
              background: filterStatus === "pendente" ? "#fef3c7" : "#fffbeb",
              border: filterStatus === "pendente" ? "1.5px solid #d97706" : "1px solid #fde68a",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 12, fontWeight: 800, color: "#b45309", textTransform: "uppercase" }}>
                ⏳ Aguardando Aprovação
              </span>
              {countPendentes > 0 && (
                <span
                  style={{
                    padding: "2px 7px",
                    borderRadius: 10,
                    background: "#f52238",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 800,
                  }}
                >
                  Novo
                </span>
              )}
            </div>
            <div style={{ fontSize: 26, fontWeight: 900, color: "#b45309", marginTop: 4 }}>
              {countPendentes}
            </div>
          </div>

          <div
            onClick={() => setFilterStatus("aprovado")}
            style={{
              padding: "16px 20px",
              borderRadius: 12,
              background: filterStatus === "aprovado" ? "#dcfce7" : "#f0fdf4",
              border: filterStatus === "aprovado" ? "1.5px solid #16a34a" : "1px solid #bbf7d0",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 700, color: "#166534", textTransform: "uppercase" }}>
              ✅ Aprovados & Ativos
            </span>
            <div style={{ fontSize: 26, fontWeight: 900, color: "#15803d", marginTop: 4 }}>
              {countAprovados}
            </div>
          </div>

          <div
            onClick={() => setFilterRole("super_admin")}
            style={{
              padding: "16px 20px",
              borderRadius: 12,
              background: filterRole === "super_admin" ? "#ede9fe" : "#f5f3ff",
              border: filterRole === "super_admin" ? "1.5px solid #7c3aed" : "1px solid #ddd6fe",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 700, color: "#6d28d9", textTransform: "uppercase" }}>
              👑 Super & Co-Admins
            </span>
            <div style={{ fontSize: 26, fontWeight: 900, color: "#7c3aed", marginTop: 4 }}>
              {countSuperAdmins}
            </div>
          </div>
        </div>
      </section>

      {/* TABELA DE USUÁRIOS E CONTROLE */}
      <section
        style={{
          background: "#fff",
          borderRadius: 18,
          padding: "32px",
          border: "1px solid #e2e8f0",
          boxShadow: "0 10px 30px rgba(0, 30, 80, 0.04)",
        }}
      >
        {/* BARRA DE PESQUISA E FILTROS */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          {/* SEARCH */}
          <div style={{ position: "relative", minWidth: 280, flex: 1 }}>
            <span
              style={{
                position: "absolute",
                left: 14,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#94a3b8",
              }}
            >
              🔍
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por nome, e-mail ou instituição..."
              style={{
                width: "100%",
                padding: "10px 14px 10px 38px",
                borderRadius: 8,
                border: "1px solid #cbd5e1",
                fontSize: 13.5,
                background: "#f8fafc",
              }}
            />
          </div>

          {/* STATUS FILTER */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontSize: 12.5, fontWeight: 700, color: "#64748b" }}>Status:</span>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              style={{
                padding: "9px 12px",
                borderRadius: 8,
                border: "1px solid #cbd5e1",
                fontSize: 13,
                fontWeight: 600,
                background: "#fff",
                color: "#0f172a",
              }}
            >
              <option value="all">Todos os Status ({countTotal})</option>
              <option value="pendente">⏳ Pendentes ({countPendentes})</option>
              <option value="aprovado">✅ Aprovados ({countAprovados})</option>
              <option value="bloqueado">🚫 Suspensos ({countBloqueados})</option>
            </select>

            <span style={{ fontSize: 12.5, fontWeight: 700, color: "#64748b", marginLeft: 8 }}>Função:</span>
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              style={{
                padding: "9px 12px",
                borderRadius: 8,
                border: "1px solid #cbd5e1",
                fontSize: 13,
                fontWeight: 600,
                background: "#fff",
                color: "#0f172a",
              }}
            >
              <option value="all">Todas as Funções</option>
              <option value="super_admin">Super Admin</option>
              <option value="co_super_admin">Co-Super Admin</option>
              <option value="admin_escritor">Admin Escritor</option>
              <option value="escritor">Escritor (Autor)</option>
            </select>
          </div>
        </div>

        {/* LISTAGEM / TABELA */}
        {loading ? (
          <div style={{ padding: "60px 20px", textAlign: "center", color: "#64748b" }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>🔄</div>
            <p style={{ margin: 0, fontWeight: 600 }}>Carregando dados de usuários...</p>
          </div>
        ) : filteredUsers.length === 0 ? (
          <div
            style={{
              padding: "48px 20px",
              textAlign: "center",
              background: "#f8fafc",
              borderRadius: 12,
              border: "1px dashed #cbd5e1",
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 8 }}>👥</div>
            <h4 style={{ margin: "0 0 6px", fontSize: 16, fontWeight: 800, color: "#001a3d" }}>
              Nenhum usuário encontrado com os filtros atuais
            </h4>
            <p style={{ margin: 0, fontSize: 13.5, color: "#64748b" }}>
              Tente redefinir a busca ou clique em "+ Cadastrar / Convidar Usuário".
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setFilterStatus("all");
                setFilterRole("all");
              }}
              style={{
                marginTop: 14,
                padding: "7px 14px",
                borderRadius: 6,
                border: "1px solid #cbd5e1",
                background: "#fff",
                fontSize: 12.5,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Limpar Filtros
            </button>
          </div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 10px" }}>
              <thead>
                <tr style={{ color: "#64748b", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "left" }}>
                  <th style={{ padding: "8px 16px", fontWeight: 800 }}>Usuário / Autor</th>
                  <th style={{ padding: "8px 16px", fontWeight: 800 }}>Papel / Nível de Acesso</th>
                  <th style={{ padding: "8px 16px", fontWeight: 800 }}>Status da Conta</th>
                  <th style={{ padding: "8px 16px", fontWeight: 800 }}>Data Cadastro</th>
                  <th style={{ padding: "8px 16px", fontWeight: 800, textAlign: "right" }}>Ações & Decisões</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => {
                  const roleConfig = ROLE_LABELS[user.role] || ROLE_LABELS.escritor;
                  const statusConfig = STATUS_LABELS[user.status] || STATUS_LABELS.pendente;
                  const initials = user.nome
                    .split(" ")
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase();

                  const isPendingStatus = user.status === "pendente";

                  return (
                    <tr
                      key={user.id}
                      style={{
                        background: isPendingStatus ? "#fffdf5" : "#f8fafc",
                        border: isPendingStatus ? "1px solid #fde68a" : "1px solid #e2e8f0",
                        boxShadow: isPendingStatus ? "0 2px 8px rgba(217, 119, 6, 0.08)" : "none",
                        borderRadius: 12,
                        transition: "all 0.2s ease",
                      }}
                    >
                      {/* USUÁRIO */}
                      <td style={{ padding: "16px", borderTopLeftRadius: 12, borderBottomLeftRadius: 12 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                          <div
                            style={{
                              width: 44,
                              height: 44,
                              borderRadius: "50%",
                              background: isPendingStatus
                                ? "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
                                : user.role === "super_admin"
                                ? "linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)"
                                : "linear-gradient(135deg, #002244 0%, #004080 100%)",
                              color: "#fff",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: 15,
                              fontWeight: 900,
                              flexShrink: 0,
                              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.12)",
                            }}
                          >
                            {initials || "U"}
                          </div>
                          <div>
                            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                              <h4 style={{ margin: 0, fontSize: 15, fontWeight: 800, color: "#001a3d" }}>
                                {user.nome}
                              </h4>
                              {user.role === "super_admin" && (
                                <span title="Super Administrador" style={{ fontSize: 13 }}>👑</span>
                              )}
                              {(currentUserEmail && user.email.toLowerCase() === currentUserEmail.toLowerCase()) ||
                              (!currentUserEmail && user.id === "usr-1") ? (
                                <span
                                  style={{
                                    padding: "2px 8px",
                                    borderRadius: 12,
                                    background: "linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)",
                                    color: "#6d28d9",
                                    fontSize: 10.5,
                                    fontWeight: 900,
                                    border: "1px solid #c4b5fd",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 3,
                                  }}
                                >
                                  ⭐ Sua Conta
                                </span>
                              ) : null}
                            </div>
                            <div style={{ fontSize: 12.5, color: "#64748b", margin: "2px 0 0" }}>
                              {user.email}
                            </div>
                            {user.cargo_instituicao && (
                              <div style={{ fontSize: 11.5, color: "#0284c7", fontWeight: 700, margin: "2px 0 0" }}>
                                🏥 {user.cargo_instituicao}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* ROLE SELECTOR */}
                      <td style={{ padding: "16px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                          <select
                            value={user.role}
                            disabled={isPending}
                            onChange={(e) =>
                              onUpdateStatus(user.id, e.target.value as UserRole, user.status)
                            }
                            style={{
                              padding: "6px 10px",
                              borderRadius: 6,
                              fontSize: 12.5,
                              fontWeight: 800,
                              background: roleConfig.badgeBg,
                              color: roleConfig.badgeColor,
                              border: `1px solid ${roleConfig.badgeColor}33`,
                              cursor: "pointer",
                            }}
                          >
                            <option value="super_admin">👑 Super Admin (Total)</option>
                            <option value="co_super_admin">🛡️ Co-Super Admin</option>
                            <option value="admin_escritor">✍️ Admin Escritor (Editor)</option>
                            <option value="escritor">📝 Escritor (Autor)</option>
                          </select>
                          <span style={{ fontSize: 10.5, color: "#64748b" }}>
                            {roleConfig.desc}
                          </span>
                        </div>
                      </td>

                      {/* STATUS BADGE */}
                      <td style={{ padding: "16px" }}>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            padding: "6px 12px",
                            borderRadius: 20,
                            background: statusConfig.badgeBg,
                            color: statusConfig.badgeColor,
                            border: `1px solid ${statusConfig.border}`,
                            fontSize: 12,
                            fontWeight: 800,
                          }}
                        >
                          <span
                            style={{
                              width: 7,
                              height: 7,
                              borderRadius: "50%",
                              background: statusConfig.badgeColor,
                              display: "inline-block",
                            }}
                          />
                          <span>{statusConfig.label}</span>
                        </span>
                      </td>

                      {/* DATA CADASTRO */}
                      <td style={{ padding: "16px", fontSize: 12.5, color: "#64748b", fontWeight: 600 }}>
                        {user.created_at
                          ? new Date(user.created_at).toLocaleDateString("pt-BR", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })
                          : "Recente"}
                      </td>

                      {/* AÇÕES DE DECISÃO */}
                      <td style={{ padding: "16px", textAlign: "right", borderTopRightRadius: 12, borderBottomRightRadius: 12 }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, flexWrap: "wrap", justifyContent: "flex-end" }}>
                          {/* BOTÃO ACEITAR / APROVAR SE ESTIVER PENDENTE */}
                          {isPendingStatus ? (
                            <>
                              <button
                                type="button"
                                disabled={isPending}
                                onClick={() => onUpdateStatus(user.id, user.role, "aprovado")}
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: 6,
                                  padding: "8px 14px",
                                  borderRadius: 8,
                                  background: "#16a34a",
                                  color: "#fff",
                                  border: "none",
                                  fontSize: 12.5,
                                  fontWeight: 800,
                                  cursor: "pointer",
                                  boxShadow: "0 2px 8px rgba(22, 163, 74, 0.3)",
                                  transition: "all 0.2s",
                                }}
                              >
                                <span>✓ Aceitar / Aprovar Acesso</span>
                              </button>

                              <button
                                type="button"
                                disabled={isPending}
                                onClick={() => onUpdateStatus(user.id, user.role, "bloqueado")}
                                style={{
                                  padding: "8px 12px",
                                  borderRadius: 8,
                                  background: "#fee2e2",
                                  color: "#b91c1c",
                                  border: "1px solid #fecaca",
                                  fontSize: 12,
                                  fontWeight: 700,
                                  cursor: "pointer",
                                }}
                              >
                                Recusar
                              </button>
                            </>
                          ) : (
                            <>
                              {user.status === "aprovado" ? (
                                <button
                                  type="button"
                                  disabled={isPending}
                                  onClick={() => onUpdateStatus(user.id, user.role, "bloqueado")}
                                  style={{
                                    padding: "6px 12px",
                                    borderRadius: 6,
                                    background: "#fff",
                                    color: "#b91c1c",
                                    border: "1px solid #fecaca",
                                    fontSize: 11.5,
                                    fontWeight: 700,
                                    cursor: "pointer",
                                  }}
                                >
                                  Suspender
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  disabled={isPending}
                                  onClick={() => onUpdateStatus(user.id, user.role, "aprovado")}
                                  style={{
                                    padding: "6px 12px",
                                    borderRadius: 6,
                                    background: "#dcfce7",
                                    color: "#15803d",
                                    border: "1px solid #bbf7d0",
                                    fontSize: 11.5,
                                    fontWeight: 800,
                                    cursor: "pointer",
                                  }}
                                >
                                  Reativar
                                </button>
                              )}
                            </>
                          )}

                          {/* BOTÃO EXCLUIR */}
                          <button
                            type="button"
                            disabled={isPending}
                            onClick={() => onDeleteUser(user.id, user.nome)}
                            title="Excluir Usuário"
                            style={{
                              padding: "6px 10px",
                              borderRadius: 6,
                              background: "#fff",
                              color: "#64748b",
                              border: "1px solid #e2e8f0",
                              fontSize: 12,
                              cursor: "pointer",
                            }}
                          >
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* MODAL: CADASTRO MANUAL DE USUÁRIO */}
      {showAddModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 15, 40, 0.7)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: 20,
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 18,
              maxWidth: 520,
              width: "100%",
              padding: "32px",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
              border: "1px solid #e2e8f0",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 900, color: "#001a3d" }}>
                ➕ Convidar / Cadastrar Novo Usuário
              </h3>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                style={{ background: "none", border: "none", fontSize: 18, cursor: "pointer", color: "#64748b" }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateUser} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                  Nome Completo do Médico / Autor *
                </label>
                <input
                  type="text"
                  value={newNome}
                  onChange={(e) => setNewNome(e.target.value)}
                  placeholder="Ex: Dr. Roberto Guimarães"
                  required
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: "1px solid #cbd5e1",
                    fontSize: 14,
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                  E-mail de Acesso *
                </label>
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="Ex: roberto.guimaraes@sbc.med.br"
                  required
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: "1px solid #cbd5e1",
                    fontSize: 14,
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                  Cargo / Instituição Médica
                </label>
                <input
                  type="text"
                  value={newCargo}
                  onChange={(e) => setNewCargo(e.target.value)}
                  placeholder="Ex: Cirurgião de Coluna / HC-FMUSP"
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: "1px solid #cbd5e1",
                    fontSize: 14,
                  }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                    Nível de Acesso (Papel)
                  </label>
                  <select
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value as UserRole)}
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: 8,
                      border: "1px solid #cbd5e1",
                      fontSize: 13,
                      fontWeight: 700,
                    }}
                  >
                    <option value="super_admin">👑 Super Admin</option>
                    <option value="co_super_admin">🛡️ Co-Super Admin</option>
                    <option value="admin_escritor">✍️ Admin Escritor</option>
                    <option value="escritor">📝 Escritor</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                    Status Inicial
                  </label>
                  <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value as UserStatus)}
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: 8,
                      border: "1px solid #cbd5e1",
                      fontSize: 13,
                      fontWeight: 700,
                    }}
                  >
                    <option value="aprovado">✅ Liberado / Aprovado</option>
                    <option value="pendente">⏳ Pendente de Validação</option>
                  </select>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 12 }}>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  style={{
                    padding: "10px 16px",
                    borderRadius: 8,
                    border: "1px solid #cbd5e1",
                    background: "#fff",
                    color: "#64748b",
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  style={{
                    padding: "10px 20px",
                    borderRadius: 8,
                    border: "none",
                    background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
                    color: "#fff",
                    fontSize: 13.5,
                    fontWeight: 800,
                    cursor: "pointer",
                  }}
                >
                  Salvar e Criar Usuário
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: SCRIPT SQL PARA SUPABASE */}
      {showSqlModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 15, 40, 0.7)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: 20,
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 18,
              maxWidth: 700,
              width: "100%",
              padding: "32px",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
              border: "1px solid #e2e8f0",
              maxHeight: "85vh",
              overflowY: "auto",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <div>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 900, color: "#001a3d" }}>
                  ⚡ Script SQL para Supabase (Tabela `perfis` & RLS)
                </h3>
                <p style={{ margin: "4px 0 0", fontSize: 13, color: "#64748b" }}>
                  Copie e cole este código no <strong>SQL Editor</strong> do painel Supabase para ativar a sincronização na nuvem.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowSqlModal(false)}
                style={{ background: "none", border: "none", fontSize: 18, cursor: "pointer", color: "#64748b" }}
              >
                ✕
              </button>
            </div>

            <div style={{ position: "relative", marginBottom: 18 }}>
              <pre
                style={{
                  background: "#0f172a",
                  color: "#e2e8f0",
                  padding: "16px",
                  borderRadius: 10,
                  fontSize: 12,
                  fontFamily: "monospace",
                  overflowX: "auto",
                  lineHeight: 1.5,
                  maxHeight: 340,
                }}
              >
                {sqlSchemaCode}
              </pre>

              <button
                type="button"
                onClick={copySqlToClipboard}
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  padding: "6px 12px",
                  borderRadius: 6,
                  background: copiedSql ? "#16a34a" : "#3b82f6",
                  color: "#fff",
                  border: "none",
                  fontSize: 12,
                  fontWeight: 800,
                  cursor: "pointer",
                }}
              >
                {copiedSql ? "✓ Copiado!" : "📋 Copiar SQL"}
              </button>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                type="button"
                onClick={() => setShowSqlModal(false)}
                style={{
                  padding: "9px 18px",
                  borderRadius: 8,
                  background: "#001a3d",
                  color: "#fff",
                  border: "none",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
