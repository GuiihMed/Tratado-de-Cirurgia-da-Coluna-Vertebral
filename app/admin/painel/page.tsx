"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { Capitulo, AutorEditor, PerfilUsuario, UserRole, UserStatus } from "@/lib/types";
import { SECOES, INITIAL_CHAPTERS } from "@/lib/data/sections-and-chapters";
import {
  cadastrarCapituloAction,
  excluirCapituloAction,
  salvarAutorAction,
  excluirAutorAction,
  atualizarPerfilUsuarioAction,
  atualizarDadosCompletosUsuarioAction,
  excluirUsuarioAction,
} from "../actions";
import ScientificChapterEditor from "@/components/admin/ScientificChapterEditor";
import UsersManagementTab from "@/components/admin/UsersManagementTab";
import DashboardTab from "@/components/admin/DashboardTab";

// ============================================================================
// SVG ICONS (Medical & Modern UI)
// ============================================================================

function IconBook({ className = "w-5 h-5", size = 20 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function IconUsers({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconLayers({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function IconCheckCircle({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function IconEdit({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

function IconEye({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconTrash({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  );
}

function IconSearch({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconPlus({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function IconSave({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <polyline points="17 21 17 13 7 13 7 21" />
      <polyline points="7 3 7 8 15 8" />
    </svg>
  );
}

function IconSparkles({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
    </svg>
  );
}

function IconExternal({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function IconLogout({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}

function IconGrid({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

const DEFAULT_AUTHORS: AutorEditor[] = [
  {
    id: "1",
    ordem: 1,
    nome: "Dr. Edson Pudles",
    cargo: "Editor-Chefe / SBC",
    instituicao: "Sociedade Brasileira de Coluna",
    destaque: "Coordenação Editorial de 109 Capítulos",
    foto_url: "/assets/edson-pudles.png",
    bio_pt: "Presidente de Honra e Referência Nacional em Deformidades da Coluna Vertebral. Liderança editorial das diretrizes científicas e publicações acadêmicas da Sociedade Brasileira de Coluna.",
    especialidades: "Deformidades Complexas, Liderança Editorial, Diretrizes SBC",
  },
  {
    id: "2",
    ordem: 2,
    nome: "Dr. Helton Defino",
    cargo: "Editor / FMRP-USP",
    instituicao: "Faculdade de Medicina de Ribeirão Preto - USP",
    destaque: "Pioneiro da Fixação Pedicular no Brasil",
    foto_url: "/assets/helton-defino.png",
    bio_pt: "Professor Titular da USP Ribeirão Preto. Pioneiro na pesquisa biomecânica internacional, desenvolvimento de técnicas de instrumentação vertebral pedicular e traumatologia espinhal.",
    especialidades: "Biomecânica Espinhal, Fixação Pedicular, Trauma Raquimedular",
  },
  {
    id: "3",
    ordem: 3,
    nome: "Dr. Marcelo Risso",
    cargo: "Editor / SBC",
    instituicao: "Comitê de Educação e Publicações SBC",
    destaque: "Coordenador do Capítulo 8 (Plano Sagital)",
    foto_url: "/assets/marcelo-risso.png",
    bio_pt: "Especialista em Equilíbrio Sagital Global, Osteotomias Tridimensionais de Alta Complexidade e Cirurgia Minimamente Invasiva da Coluna Vertebral no Brasil.",
    especialidades: "Equilíbrio Sagital, Osteotomias 3D, Minimamente Invasiva",
  },
];


function IconShield({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconUserCheck({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>
  );
}

function IconUserX({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="18" y1="8" x2="23" y2="13" />
      <line x1="23" y1="8" x2="18" y2="13" />
    </svg>
  );
}

export type AdminTab = "dashboard" | "capitulos" | "autores" | "usuarios";

export default function AdminPainelPage() {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  // Active Tab & Layout
  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [currentUserRole, setCurrentUserRole] = useState<UserRole>("super_admin");
  const [currentUserName, setCurrentUserName] = useState<string>("");
  const [currentUserCargo, setCurrentUserCargo] = useState<string>("Super Admin • Coordenação Geral");
  const [currentUserFoto, setCurrentUserFoto] = useState<string>("");
  const [usuarios, setUsuarios] = useState<PerfilUsuario[]>([]);
  const [loadingUsuarios, setLoadingUsuarios] = useState(false);

  // Edit My Account Modal States
  const [showEditAccountModal, setShowEditAccountModal] = useState(false);
  const [editAccountNome, setEditAccountNome] = useState("");
  const [editAccountCargo, setEditAccountCargo] = useState("");
  const [editAccountEmail, setEditAccountEmail] = useState("");
  const [editAccountSenha, setEditAccountSenha] = useState("");
  const [editAccountFoto, setEditAccountFoto] = useState("");
  const [savingAccount, setSavingAccount] = useState(false);

  // Restore activeTab and custom profile on mount
  useEffect(() => {
    try {
      const savedTab = sessionStorage.getItem("sbc_admin_active_tab");
      if (savedTab && ["dashboard", "capitulos", "autores", "usuarios"].includes(savedTab)) {
        setActiveTab(savedTab as AdminTab);
      }
      const customP = localStorage.getItem("sbc_custom_user_profile");
      if (customP) {
        const p = JSON.parse(customP);
        if (p.nome) setCurrentUserName(p.nome);
        if (p.cargo) setCurrentUserCargo(p.cargo);
        if (p.email) setUserEmail(p.email);
        if (p.foto_url || p.foto) {
          setCurrentUserFoto(p.foto_url || p.foto);
          setEditAccountFoto(p.foto_url || p.foto);
        }
      }
    } catch (e) {}
  }, []);

  const switchTab = (tab: AdminTab) => {
    setActiveTab(tab);
    setMobileSidebarOpen(false);
    try {
      sessionStorage.setItem("sbc_admin_active_tab", tab);
    } catch (e) {}
    setFeedback({ type: null, message: "" });
  };

  // Chapter Form states
  const [editingChapterData, setEditingChapterData] = useState<Capitulo | undefined>(undefined);
  const [secaoId, setSecaoId] = useState("1");
  const [numero, setNumero] = useState("");
  const [tituloPt, setTituloPt] = useState("");
  const [tituloEn, setTituloEn] = useState("");
  const [tituloEs, setTituloEs] = useState("");
  const [autores, setAutores] = useState("");
  const [resumoPt, setResumoPt] = useState("");
  const [conteudoPt, setConteudoPt] = useState("");
  const [referencias, setReferencias] = useState("");
  const [status, setStatus] = useState("publicado");

  // Author Form states
  const [authorId, setAuthorId] = useState("");
  const [authorOrdem, setAuthorOrdem] = useState("1");
  const [authorNome, setAuthorNome] = useState("");
  const [authorCargo, setAuthorCargo] = useState("");
  const [authorInstituicao, setAuthorInstituicao] = useState("");
  const [authorDestaque, setAuthorDestaque] = useState("");
  const [authorFotoUrl, setAuthorFotoUrl] = useState("/assets/edson-pudles.png");
  const [authorBioPt, setAuthorBioPt] = useState("");
  const [authorEspecialidades, setAuthorEspecialidades] = useState("");

  const [feedback, setFeedback] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [isPending, startTransition] = useTransition();

  // Chapters & Authors listings
  const [chapters, setChapters] = useState<Capitulo[]>([]);
  const [authors, setAuthors] = useState<AutorEditor[]>(DEFAULT_AUTHORS);
  const [filterSecao, setFilterSecao] = useState<string>("all");
  const [authorCategoryFilter, setAuthorCategoryFilter] = useState<string>("todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [loadingList, setLoadingList] = useState(false);

  
  const DEFAULT_USERS: PerfilUsuario[] = [
    {
      id: "usr-1",
      email: "edson.pudles@sbc.med.br",
      nome: "Dr. Edson Pudles",
      cargo_instituicao: "Presidente SBC & Coordenador Geral",
      role: "super_admin",
      status: "aprovado",
      aprovado_em: "2026-01-10T10:00:00Z",
      created_at: "2026-01-10T10:00:00Z",
    },
    {
      id: "usr-2",
      email: "helton.defino@sbc.med.br",
      nome: "Dr. Helton Defino",
      cargo_instituicao: "FMRP-USP / Co-Editor do Tratado",
      role: "co_super_admin",
      status: "aprovado",
      aprovado_em: "2026-01-15T14:30:00Z",
      created_at: "2026-01-15T14:30:00Z",
    },
    {
      id: "usr-3",
      email: "cristiano.menezes@sbc.med.br",
      nome: "Dr. Cristiano Menezes",
      cargo_instituicao: "Editor de Seção Cirúrgica",
      role: "admin_escritor",
      status: "aprovado",
      aprovado_em: "2026-02-01T09:15:00Z",
      created_at: "2026-02-01T09:15:00Z",
    },
    {
      id: "usr-4",
      email: "mariana.oliveira@medicina.ufrj.br",
      nome: "Dra. Mariana Costa Oliveira",
      cargo_instituicao: "Especialista em Coluna / UFRJ",
      role: "escritor",
      status: "pendente",
      created_at: "2026-08-18T19:30:00Z",
    },
    {
      id: "usr-5",
      email: "rafael.silva.coluna@usp.br",
      nome: "Dr. Rafael Silva Santos",
      cargo_instituicao: "Cirurgião de Coluna / IOT-HCFMUSP",
      role: "escritor",
      status: "pendente",
      created_at: "2026-08-18T20:15:00Z",
    },
  ];

  const fetchUsuarios = async () => {
    setLoadingUsuarios(true);
    try {
      let list: PerfilUsuario[] = [];
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase
          .from("perfis")
          .select("*")
          .order("created_at", { ascending: false });

        if (!error && data && data.length > 0) {
          list = data as PerfilUsuario[];
        }
      }

      if (list.length === 0) {
        const local = localStorage.getItem("sbc_registered_users");
        if (local) {
          list = JSON.parse(local);
        } else {
          list = DEFAULT_USERS;
          localStorage.setItem("sbc_registered_users", JSON.stringify(DEFAULT_USERS));
        }
      }

      // Ensure the logged in user is always in the list with their custom name & Super Admin role
      const customP = typeof window !== "undefined" ? localStorage.getItem("sbc_custom_user_profile") : null;
      let customName = currentUserName;
      let customCargo = currentUserCargo;
      let customEmail = userEmail;
      let customFoto = currentUserFoto;
      if (customP) {
        try {
          const cp = JSON.parse(customP);
          if (cp.nome) customName = cp.nome;
          if (cp.cargo) customCargo = cp.cargo;
          if (cp.email) customEmail = cp.email;
          if (cp.foto_url || cp.foto) customFoto = cp.foto_url || cp.foto;
        } catch (e) {}
      }

      const loggedEmail = customEmail || userEmail || "atendimento@wdcom.com.br";

      if (loggedEmail) {
        const existingIdx = list.findIndex(
          (u) => u.email?.toLowerCase() === loggedEmail.toLowerCase()
        );

        if (existingIdx >= 0) {
          list[existingIdx] = {
            ...list[existingIdx],
            nome: customName || list[existingIdx].nome || "Super Admin",
            cargo_instituicao: customCargo || list[existingIdx].cargo_instituicao || "Super Admin • SBC",
            foto_url: customFoto || list[existingIdx].foto_url || null,
            role: "super_admin",
            status: "aprovado",
          };
        } else {
          const myProfile: PerfilUsuario = {
            id: "me-" + Date.now(),
            email: loggedEmail,
            nome: customName || "Super Admin",
            cargo_instituicao: customCargo || "Super Admin • Coordenação Geral SBC",
            foto_url: customFoto || null,
            role: "super_admin",
            status: "aprovado",
            created_at: new Date().toISOString(),
            aprovado_em: new Date().toISOString(),
          };
          list = [myProfile, ...list];
        }
        localStorage.setItem("sbc_registered_users", JSON.stringify(list));
      }

      setUsuarios(list);
    } catch (err) {
      console.warn("Error loading perfis:", err);
      const local = localStorage.getItem("sbc_registered_users");
      if (local) {
        setUsuarios(JSON.parse(local));
      } else {
        setUsuarios(DEFAULT_USERS);
      }
    } finally {
      setLoadingUsuarios(false);
    }
  };

  const handleOpenEditAccount = () => {
    setEditAccountNome(currentUserName || "Super Admin");
    setEditAccountCargo(currentUserCargo || "Super Admin • Coordenação Geral SBC");
    setEditAccountEmail(userEmail || "atendimento@wdcom.com.br");
    setEditAccountFoto(currentUserFoto || "");
    setEditAccountSenha("");
    setShowEditAccountModal(true);
  };

  const handleSaveMyAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editAccountNome.trim()) {
      alert("Por favor, informe seu nome completo.");
      return;
    }

    setSavingAccount(true);
    const newNome = editAccountNome.trim();
    const newCargo = editAccountCargo.trim() || "Super Admin • SBC";
    const newEmail = editAccountEmail.trim() || userEmail || "atendimento@wdcom.com.br";
    const newFoto = editAccountFoto.trim();

    setCurrentUserName(newNome);
    setCurrentUserCargo(newCargo);
    setUserEmail(newEmail);
    setCurrentUserFoto(newFoto);

    const profileData = {
      nome: newNome,
      cargo: newCargo,
      email: newEmail,
      foto_url: newFoto,
    };

    localStorage.setItem("sbc_custom_user_profile", JSON.stringify(profileData));

    // Update local admin session
    const localSess = localStorage.getItem("sbc_admin_session");
    if (localSess) {
      try {
        const parsed = JSON.parse(localSess);
        parsed.nome = newNome;
        parsed.email = newEmail;
        parsed.foto_url = newFoto;
        localStorage.setItem("sbc_admin_session", JSON.stringify(parsed));
      } catch (e) {}
    }

    // Update users list in state & local storage
    setUsuarios((prev) => {
      let found = false;
      const updated = prev.map((u) => {
        if (
          u.email?.toLowerCase() === newEmail.toLowerCase() ||
          (userEmail && u.email?.toLowerCase() === userEmail.toLowerCase()) ||
          (currentUserName && u.nome?.toLowerCase() === currentUserName.toLowerCase()) ||
          u.nome?.toLowerCase() === newNome.toLowerCase() ||
          u.id.startsWith("me-")
        ) {
          found = true;
          return {
            ...u,
            nome: newNome,
            cargo_instituicao: newCargo,
            email: newEmail,
            foto_url: newFoto || null,
            role: "super_admin" as UserRole,
            status: "aprovado" as UserStatus,
          };
        }
        return u;
      });

      if (!found) {
        updated.unshift({
          id: "me-" + Date.now(),
          email: newEmail,
          nome: newNome,
          cargo_instituicao: newCargo,
          foto_url: newFoto || null,
          role: "super_admin",
          status: "aprovado",
          created_at: new Date().toISOString(),
          aprovado_em: new Date().toISOString(),
        });
      }

      localStorage.setItem("sbc_registered_users", JSON.stringify(updated));
      return updated;
    });

    // Supabase update if configured
    if (isSupabaseConfigured()) {
      try {
        const { data: sessData } = await supabase.auth.getSession();
        if (sessData?.session?.user) {
          await supabase.auth.updateUser({
            data: {
              nome: newNome,
              cargo_instituicao: newCargo,
              foto_url: newFoto,
            },
            ...(editAccountSenha.trim() ? { password: editAccountSenha.trim() } : {}),
          });

          await supabase.from("perfis").upsert({
            id: sessData.session.user.id,
            email: newEmail,
            nome: newNome,
            cargo_instituicao: newCargo,
            foto_url: newFoto || null,
            role: "super_admin",
            status: "aprovado",
            updated_at: new Date().toISOString(),
          });
        }
      } catch (err) {
        console.warn("Supabase update profile error:", err);
      }
    }

    setSavingAccount(false);
    setShowEditAccountModal(false);
    setFeedback({
      type: "success",
      message: `✓ Sua conta foi atualizada com sucesso para "${newNome}"!`,
    });
  };

  const handleUpdateUserStatus = async (
    id: string,
    role: UserRole,
    status: UserStatus
  ) => {
    setUsuarios((prev) => {
      const updated = prev.map((u) =>
        u.id === id
          ? {
              ...u,
              role,
              status,
              aprovado_em: status === "aprovado" ? new Date().toISOString() : u.aprovado_em,
              updated_at: new Date().toISOString(),
            }
          : u
      );
      localStorage.setItem("sbc_registered_users", JSON.stringify(updated));
      return updated;
    });

    startTransition(async () => {
      const res = await atualizarPerfilUsuarioAction(id, role, status);
      setFeedback({
        type: res.success ? "success" : "error",
        message: res.success
          ? `Status do usuário atualizado para [${status.toUpperCase()}] com nível [${role}]!`
          : res.message,
      });
      if (isSupabaseConfigured()) {
        await fetchUsuarios();
      }
    });
  };

  const handleDeleteUser = async (id: string, nome: string) => {
    const confirmed = window.confirm(`Tem certeza que deseja remover o usuário "${nome}"?`);
    if (!confirmed) return;

    setUsuarios((prev) => {
      const updated = prev.filter((u) => u.id !== id);
      localStorage.setItem("sbc_registered_users", JSON.stringify(updated));
      return updated;
    });

    startTransition(async () => {
      const res = await excluirUsuarioAction(id);
      setFeedback({
        type: res.success ? "success" : "error",
        message: res.success ? `Usuário "${nome}" excluído com sucesso.` : res.message,
      });
      if (isSupabaseConfigured()) {
        await fetchUsuarios();
      }
    });
  };

  const handleAddUser = async (novo: PerfilUsuario) => {
    setUsuarios((prev) => {
      const updated = [novo, ...prev];
      localStorage.setItem("sbc_registered_users", JSON.stringify(updated));
      return updated;
    });

    setFeedback({
      type: "success",
      message: `Usuário "${novo.nome}" cadastrado com sucesso!`,
    });

    if (isSupabaseConfigured()) {
      try {
        await supabase.from("perfis").upsert(novo);
      } catch (e) {
        console.warn("Supabase upsert user:", e);
      }
    }
  };

  const handleEditOtherUser = async (usuario: PerfilUsuario, novaSenha?: string) => {
    if (currentUserRole !== "super_admin") {
      setFeedback({
        type: "error",
        message: "Apenas o Super Admin tem permissão para editar contas de outros usuários.",
      });
      return;
    }

    setUsuarios((prev) => {
      const updated = prev.map((u) => (u.id === usuario.id ? usuario : u));
      localStorage.setItem("sbc_registered_users", JSON.stringify(updated));
      return updated;
    });

    if (novaSenha && novaSenha.trim()) {
      try {
        const customPassMap = JSON.parse(localStorage.getItem("sbc_custom_passwords") || "{}");
        customPassMap[usuario.email.toLowerCase()] = novaSenha.trim();
        localStorage.setItem("sbc_custom_passwords", JSON.stringify(customPassMap));
      } catch (e) {}
    }

    startTransition(async () => {
      const res = await atualizarDadosCompletosUsuarioAction(usuario.id, {
        nome: usuario.nome,
        email: usuario.email,
        cargo_instituicao: usuario.cargo_instituicao || "Membro SBC",
        role: usuario.role,
        status: usuario.status,
        foto_url: usuario.foto_url || null,
        nova_senha: novaSenha?.trim(),
      });

      setFeedback({
        type: res.success ? "success" : "error",
        message: res.success
          ? `✓ Conta de "${usuario.nome}" atualizada com sucesso! ${novaSenha ? "🔑 Nova senha definida." : ""}`
          : res.message,
      });

      if (isSupabaseConfigured()) {
        await fetchUsuarios();
      }
    });
  };

  // 1. Check active session on mount
  useEffect(() => {
    async function checkSession() {
      try {
        if (isSupabaseConfigured()) {
          const { data } = await supabase.auth.getSession();
          if (!data.session) {
            router.push("/admin/login");
            return;
          }
          const email = data.session.user.email || "edson.pudles@sbc.med.br";
          setUserEmail(email);
          const metaName = data.session.user.user_metadata?.nome;
          if (metaName) setCurrentUserName(metaName);

          try {
            const { data: pData } = await supabase
              .from("perfis")
              .select("*")
              .eq("id", data.session.user.id)
              .single();
            if (pData) {
              if (pData.nome) setCurrentUserName(pData.nome);
              if (pData.role) setCurrentUserRole(pData.role);
            }
          } catch (e) {}
        } else {
          // Local fallback check
          const localSession = localStorage.getItem("sbc_admin_session");
          if (!localSession) {
            router.push("/admin/login");
            return;
          }
          const parsed = JSON.parse(localSession);
          setUserEmail(parsed.email || "edson.pudles@sbc.med.br");
          if (parsed.nome) setCurrentUserName(parsed.nome);
          if (parsed.role) setCurrentUserRole(parsed.role || "super_admin");
        }
        setCheckingAuth(false);
        fetchUsuarios();
      } catch (err) {
        router.push("/admin/login");
      }
    }

    checkSession();
  }, [router]);

  // 2. Fetch chapters for the table
  const fetchChapters = async () => {
    setLoadingList(true);
    try {
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase
          .from("capitulos")
          .select("*")
          .order("numero", { ascending: true });

        if (!error && data && data.length > 0) {
          setChapters(data as Capitulo[]);
          setLoadingList(false);
          return;
        }
      }
      // Fallback
      setChapters(INITIAL_CHAPTERS);
    } catch (e) {
      setChapters(INITIAL_CHAPTERS);
    } finally {
      setLoadingList(false);
    }
  };

  // 3. Fetch authors for the table
  const fetchAuthors = async () => {
    try {
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase
          .from("autores")
          .select("*")
          .order("ordem", { ascending: true });

        if (!error && data && data.length > 0) {
          setAuthors(data as AutorEditor[]);
          localStorage.setItem("sbc_custom_authors", JSON.stringify(data));
          return;
        }
      }
      const savedLocal = localStorage.getItem("sbc_custom_authors");
      if (savedLocal) {
        setAuthors(JSON.parse(savedLocal));
      } else {
        setAuthors(DEFAULT_AUTHORS);
      }
    } catch (e) {
      const savedLocal = localStorage.getItem("sbc_custom_authors");
      if (savedLocal) {
        setAuthors(JSON.parse(savedLocal));
      } else {
        setAuthors(DEFAULT_AUTHORS);
      }
    }
  };

  useEffect(() => {
    if (!checkingAuth) {
      fetchChapters();
      fetchAuthors();
    }
  }, [checkingAuth]);

  // Handle Logout
  const handleLogout = async () => {
    if (isSupabaseConfigured()) {
      await supabase.auth.signOut();
    }
    localStorage.removeItem("sbc_admin_session");
    router.push("/admin/login");
  };

  // Load a chapter into the form for editing
  const handleEditChapter = (cap: Capitulo) => {
    setEditingChapterData({ ...cap });
    setSecaoId(cap.secao_id.toString());
    setNumero(cap.numero.toString());
    setTituloPt(cap.titulo_pt || "");
    setTituloEn(cap.titulo_en || "");
    setTituloEs(cap.titulo_es || "");
    setAutores(cap.autores || "");
    setResumoPt(cap.resumo_pt || "");
    setConteudoPt(cap.conteudo_pt || "");
    setReferencias(cap.referencias || "");
    setStatus(cap.status || "publicado");

    window.scrollTo({ top: 180, behavior: "smooth" });
    setFeedback({
      type: "success",
      message: `Capítulo ${cap.numero} ("${cap.titulo_pt}") carregado no Editor Científico Avançado.`,
    });
  };

  // Submit Chapter Form via ScientificChapterEditor
  const handleChapterSubmit = async (formData: FormData) => {
    setFeedback({ type: null, message: "" });

    startTransition(async () => {
      const res = await cadastrarCapituloAction(null, formData);
      if (res.success) {
        setFeedback({ type: "success", message: res.message });
        await fetchChapters();
        window.scrollTo({ top: 140, behavior: "smooth" });
      } else {
        setFeedback({ type: "error", message: res.message });
      }
    });
  };

  // Delete Chapter
  const handleDelete = async (num: number, title: string) => {
    const confirm = window.confirm(
      `Tem certeza que deseja excluir o Capítulo ${num}: "${title}"?`
    );
    if (!confirm) return;

    const res = await excluirCapituloAction(num);
    if (res.success) {
      setFeedback({ type: "success", message: res.message });
      await fetchChapters();
    } else {
      setFeedback({ type: "error", message: res.message });
    }
  };

  // Load an author into form for editing
  const handleEditAuthor = (author: AutorEditor) => {
    setAuthorId(author.id || "");
    setAuthorOrdem((author.ordem || 1).toString());
    setAuthorNome(author.nome || "");
    setAuthorCargo(author.cargo || "");
    setAuthorInstituicao(author.instituicao || "");
    setAuthorDestaque(author.destaque || "");
    setAuthorFotoUrl(author.foto_url || "/assets/edson-pudles.png");
    setAuthorBioPt(author.bio_pt || "");
    setAuthorEspecialidades(author.especialidades || "");
    window.scrollTo({ top: 220, behavior: "smooth" });
    setFeedback({
      type: "success",
      message: `Autor "${author.nome}" carregado para edição. Faça as alterações e clique em Salvar.`,
    });
  };

  // Clear Author Form
  const handleClearAuthorForm = () => {
    setAuthorId("");
    setAuthorOrdem((authors.length + 1).toString());
    setAuthorNome("");
    setAuthorCargo("");
    setAuthorInstituicao("");
    setAuthorDestaque("");
    setAuthorFotoUrl("/assets/edson-pudles.png");
    setAuthorBioPt("");
    setAuthorEspecialidades("");
    setFeedback({ type: null, message: "" });
  };

  // Submit Author Form
  const handleAuthorSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback({ type: null, message: "" });
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const res = await salvarAutorAction(null, formData);

      const updatedAuthor: AutorEditor = {
        id: authorId || Date.now().toString(),
        ordem: parseInt(authorOrdem, 10) || 1,
        nome: authorNome,
        cargo: authorCargo,
        instituicao: authorInstituicao,
        destaque: authorDestaque,
        foto_url: authorFotoUrl,
        bio_pt: authorBioPt,
        especialidades: authorEspecialidades,
      };

      setAuthors((prev) => {
        const idx = prev.findIndex((a) => a.id === authorId || a.nome === authorNome);
        let nextList: AutorEditor[];
        if (idx >= 0) {
          nextList = [...prev];
          nextList[idx] = updatedAuthor;
        } else {
          nextList = [...prev, updatedAuthor];
        }
        nextList.sort((a, b) => a.ordem - b.ordem);
        localStorage.setItem("sbc_custom_authors", JSON.stringify(nextList));
        return nextList;
      });

      if (res.success) {
        setFeedback({ type: "success", message: res.message });
      } else {
        setFeedback({ type: "success", message: `Autor "${updatedAuthor.nome}" atualizado com sucesso no portal!` });
      }
      await fetchAuthors();
    });
  };

  // Delete Author
  const handleDeleteAuthor = async (id: string, name: string) => {
    const confirm = window.confirm(`Tem certeza que deseja remover o autor "${name}"?`);
    if (!confirm) return;

    await excluirAutorAction(id);
    setAuthors((prev) => {
      const nextList = prev.filter((a) => a.id !== id && a.nome !== name);
      localStorage.setItem("sbc_custom_authors", JSON.stringify(nextList));
      return nextList;
    });

    setFeedback({ type: "success", message: `Autor "${name}" removido com sucesso.` });
    await fetchAuthors();
  };

  // Filtered listing
  const displayedChapters = chapters.filter((c) => {
    const matchesSecao =
      filterSecao === "all" || c.secao_id.toString() === filterSecao;
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !q ||
      c.numero.toString().includes(q) ||
      c.titulo_pt.toLowerCase().includes(q) ||
      (c.autores && c.autores.toLowerCase().includes(q)) ||
      (c.titulo_en && c.titulo_en.toLowerCase().includes(q));

    return matchesSecao && matchesQuery;
  });

  if (checkingAuth) {
    return (
      <div style={{ display: "grid", placeItems: "center", minHeight: "100vh", background: "#001026" }}>
        <div style={{ textAlign: "center", color: "#fff" }}>
          <img src="/assets/sbc-logo-white.svg" alt="SBC" style={{ height: 48, margin: "0 auto 16px" }} />
          <p style={{ color: "#94a3b8", fontWeight: 600, fontSize: 15 }}>Autenticando acesso editorial...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", background: "#f8fafc", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* ================= MOBILE SIDEBAR BACKDROP ================= */}
      {mobileSidebarOpen && (
        <div
          onClick={() => setMobileSidebarOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 10, 25, 0.7)",
            backdropFilter: "blur(4px)",
            zIndex: 90,
          }}
        />
      )}

      {/* ================= LEFT MODERN SIDEBAR ================= */}
      <aside
        style={{
          width: 280,
          background: "linear-gradient(180deg, #001229 0%, #000c1c 60%, #00060f 100%)",
          color: "#fff",
          borderRight: "1px solid rgba(255, 255, 255, 0.08)",
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
          position: "sticky",
          top: 0,
          height: "100vh",
          zIndex: 100,
          overflowY: "auto",
        }}
      >
        {/* Brand Header */}
        <div style={{ padding: "24px 20px 20px", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img
              src="/assets/sbc-logo-white.svg"
              alt="SBC"
              style={{ height: 38, width: "auto", objectFit: "contain" }}
            />
            <div>
              <div style={{ fontSize: 14.5, fontWeight: 900, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
                Tratado de Coluna
              </div>
              <div style={{ fontSize: 11, color: "#94a3b8", display: "flex", alignItems: "center", gap: 5, marginTop: 2 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f43f5e" }} />
                <span>Painel Administrativo</span>
              </div>
            </div>
          </div>
        </div>

        {/* User Connected Card */}
        <div style={{ padding: "16px 20px", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
          <div
            onClick={handleOpenEditAccount}
            title="Clique para editar sua conta"
            style={{
              padding: "10px 12px",
              borderRadius: 12,
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 12,
              transition: "all 0.2s ease",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                overflow: "hidden",
                background: currentUserRole === "super_admin" ? "linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)" : "#0284c7",
                display: "grid",
                placeItems: "center",
                fontSize: 14,
                fontWeight: 800,
                flexShrink: 0,
                border: "2px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              {currentUserFoto ? (
                <img src={currentUserFoto} alt={currentUserName} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : currentUserName ? (
                currentUserName.split(" ").slice(0, 2).map((n) => n[0]).join("").toUpperCase()
              ) : (
                "SA"
              )}
            </div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {currentUserName || "Administrador Geral"}
              </div>
              <div style={{ fontSize: 10.5, color: "#38bdf8", fontWeight: 700, marginTop: 1 }}>
                {currentUserRole === "super_admin" ? "👑 Super Admin" : "🛡️ Editor SBC"}
              </div>
            </div>
            <span style={{ fontSize: 12, opacity: 0.6 }}>⚙️</span>
          </div>
        </div>

        {/* Navigation Categories */}
        <div style={{ padding: "20px 14px", flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
          {/* Category 1: VISÃO GERAL */}
          <div>
            <div style={{ fontSize: 10.5, fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em", padding: "0 10px", marginBottom: 8 }}>
              Visão Geral
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <button
                onClick={() => switchTab("dashboard")}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "none",
                  background: activeTab === "dashboard" ? "linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)" : "transparent",
                  color: activeTab === "dashboard" ? "#fff" : "#94a3b8",
                  fontSize: 13.5,
                  fontWeight: activeTab === "dashboard" ? 800 : 600,
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.15s ease",
                }}
              >
                <IconGrid size={18} />
                <span style={{ flex: 1 }}>Dashboard &amp; Métricas</span>
              </button>
            </div>
          </div>

          {/* Category 2: CONTEÚDO EDITORIAL */}
          <div>
            <div style={{ fontSize: 10.5, fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em", padding: "0 10px", marginBottom: 8 }}>
              Conteúdo Editorial
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <button
                onClick={() => switchTab("capitulos")}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "none",
                  background: activeTab === "capitulos" ? "linear-gradient(135deg, #002b66 0%, #001f4d 100%)" : "transparent",
                  color: activeTab === "capitulos" ? "#fff" : "#94a3b8",
                  fontSize: 13.5,
                  fontWeight: activeTab === "capitulos" ? 800 : 600,
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.15s ease",
                }}
              >
                <IconBook size={18} />
                <span style={{ flex: 1 }}>Capítulos</span>
                <span style={{ fontSize: 11, fontWeight: 800, padding: "1px 6px", borderRadius: 8, background: "rgba(255,255,255,0.15)", color: "#fff" }}>
                  {chapters.length}
                </span>
              </button>

              <button
                onClick={() => switchTab("autores")}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "none",
                  background: activeTab === "autores" ? "linear-gradient(135deg, #e11d48 0%, #be123c 100%)" : "transparent",
                  color: activeTab === "autores" ? "#fff" : "#94a3b8",
                  fontSize: 13.5,
                  fontWeight: activeTab === "autores" ? 800 : 600,
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.15s ease",
                }}
              >
                <IconUsers size={18} />
                <span style={{ flex: 1 }}>Autores &amp; Editores</span>
                <span style={{ fontSize: 11, fontWeight: 800, padding: "1px 6px", borderRadius: 8, background: "rgba(255,255,255,0.15)", color: "#fff" }}>
                  {authors.length}
                </span>
              </button>
            </div>
          </div>

          {/* Category 3: CONTROLE DE ACESSO */}
          <div>
            <div style={{ fontSize: 10.5, fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em", padding: "0 10px", marginBottom: 8 }}>
              Controle &amp; Segurança
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <button
                onClick={() => switchTab("usuarios")}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "none",
                  background: activeTab === "usuarios" ? "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)" : "transparent",
                  color: activeTab === "usuarios" ? "#fff" : "#94a3b8",
                  fontSize: 13.5,
                  fontWeight: activeTab === "usuarios" ? 800 : 600,
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.15s ease",
                }}
              >
                <IconShield size={18} />
                <span style={{ flex: 1 }}>Usuários &amp; Acessos</span>
                {usuarios.filter((u) => u.status === "pendente").length > 0 && (
                  <span style={{ fontSize: 10, fontWeight: 900, padding: "2px 6px", borderRadius: 10, background: "#ef4444", color: "#fff" }}>
                    {usuarios.filter((u) => u.status === "pendente").length}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Category 4: ATALHOS DO SITE */}
          <div>
            <div style={{ fontSize: 10.5, fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em", padding: "0 10px", marginBottom: 8 }}>
              Portal Público &amp; Vendas
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <Link
                href="/pt/home-new"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 14px",
                  borderRadius: 8,
                  color: "#94a3b8",
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <span>🌐</span>
                <span style={{ flex: 1 }}>Home New (4K)</span>
                <IconExternal size={12} />
              </Link>

              <Link
                href="/pt/indice-new"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 14px",
                  borderRadius: 8,
                  color: "#94a3b8",
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <span>📑</span>
                <span style={{ flex: 1 }}>Índice Interativo</span>
                <IconExternal size={12} />
              </Link>

              <a
                href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 14px",
                  borderRadius: 8,
                  color: "#fb7185",
                  fontSize: 13,
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                <span>🛒</span>
                <span style={{ flex: 1 }}>Loja DiLivros Oficial</span>
                <IconExternal size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 11, color: "#64748b" }}>
            SBC Tratado v2.4 • Next 15
          </div>
          <button
            onClick={handleLogout}
            title="Encerrar sessão"
            style={{
              background: "rgba(239, 68, 68, 0.15)",
              border: "1px solid rgba(239, 68, 68, 0.3)",
              color: "#fca5a5",
              borderRadius: 6,
              padding: "5px 10px",
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <IconLogout size={12} />
            <span>Sair</span>
          </button>
        </div>
      </aside>

      {/* ================= RIGHT MAIN WRAPPER ================= */}
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
        {/* ================= TOPBAR ================= */}
        <header
          style={{
            height: 70,
            background: "#fff",
            borderBottom: "1px solid #e2e8f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 28px",
            position: "sticky",
            top: 0,
            zIndex: 40,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {/* Breadcrumbs */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13.5, color: "#64748b" }}>
              <span style={{ fontWeight: 600 }}>Painel SBC</span>
              <span>/</span>
              <strong style={{ color: "#001a3d" }}>
                {activeTab === "dashboard"
                  ? "Dashboard & Métricas"
                  : activeTab === "capitulos"
                  ? "Gestão de Capítulos (109)"
                  : activeTab === "autores"
                  ? "Corpo Editorial & Autores"
                  : "Usuários & Acessos"}
              </strong>
            </div>
          </div>

          {/* Topbar Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* Status Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 12px",
                borderRadius: 20,
                background: isSupabaseConfigured() ? "#f0fdf4" : "#f0f9ff",
                border: `1px solid ${isSupabaseConfigured() ? "#bbf7d0" : "#bae6fd"}`,
                color: isSupabaseConfigured() ? "#166534" : "#0369a1",
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              <span>{isSupabaseConfigured() ? "🟢 Supabase Conectado" : "🔵 Armazenamento Local"}</span>
            </div>

            <Link
              href="/pt/indice-new"
              target="_blank"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12.5,
                fontWeight: 700,
                color: "#0284c7",
                textDecoration: "none",
                padding: "7px 12px",
                borderRadius: 8,
                background: "#f0f9ff",
                border: "1px solid #bae6fd",
              }}
            >
              <span>Ver Índice Público</span>
              <IconExternal size={12} />
            </Link>
          </div>
        </header>

        {/* ================= MAIN CONTENT CONTAINER ================= */}
        <main style={{ padding: "32px 28px", maxWidth: 1400, width: "100%", margin: "0 auto", boxSizing: "border-box" }}>
          {/* Feedback Alert */}
          {feedback.message && (
            <div
              style={{
                padding: "16px 20px",
                borderRadius: 12,
                marginBottom: 24,
                fontSize: 14,
                fontWeight: 600,
                background: feedback.type === "success" ? "#ecfdf5" : "#fef2f2",
                color: feedback.type === "success" ? "#065f46" : "#991b1b",
                border: feedback.type === "success" ? "1px solid #a7f3d0" : "1px solid #fecaca",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {feedback.type === "success" ? <IconCheckCircle size={20} /> : <IconTrash size={20} />}
                <span>{feedback.message}</span>
              </div>
              <button
                onClick={() => setFeedback({ type: null, message: "" })}
                style={{
                  background: "none",
                  border: "none",
                  color: "inherit",
                  cursor: "pointer",
                  fontWeight: 800,
                  fontSize: 16,
                  padding: "4px",
                }}
              >
                ✕
              </button>
            </div>
          )}

          {/* ================= ABA 0: DASHBOARD ================= */}
          {activeTab === "dashboard" && (
            <DashboardTab
              chapters={chapters}
              authors={authors}
              usuarios={usuarios}
              onNavigateToTab={(t) => switchTab(t)}
              onFilterSection={(sId) => {
                setFilterSecao(sId);
                switchTab("capitulos");
              }}
              onOpenNewChapter={() => {
                setEditingChapterData(undefined);
                switchTab("capitulos");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              onOpenNewAuthor={() => {
                setAuthorId("");
                setAuthorNome("");
                switchTab("autores");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              isSupabaseOnline={isSupabaseConfigured()}
            />
          )}

          {/* ================= ABA 1: GESTÃO DE CAPÍTULOS ================= */}
          {activeTab === "capitulos" && (
            <>
              {/* Editor de Conteúdo Científico Avançado */}
              <ScientificChapterEditor
                initialData={editingChapterData}
                onSubmit={handleChapterSubmit}
                isPending={isPending}
                onClear={() => setEditingChapterData(undefined)}
              />

              {/* ================= TABELA DE CAPÍTULOS ================= */}
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
                  alignItems: "center",
                  marginBottom: 24,
                  flexWrap: "wrap",
                  gap: 16,
                }}
              >
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 900, color: "#001a3d", margin: "0 0 4px" }}>
                    Catálogo Geral da Obra ({displayedChapters.length} de {chapters.length} Capítulos)
                  </h3>
                  <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>
                    Navegue por seções, busque títulos ou edite o conteúdo de qualquer capítulo em tempo real.
                  </p>
                </div>

                {/* Filtros e Busca */}
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ position: "absolute", left: 12, color: "#94a3b8" }}>
                      <IconSearch size={16} />
                    </div>
                    <input
                      type="text"
                      placeholder="Buscar por título ou autor..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{
                        padding: "9px 14px 9px 36px",
                        borderRadius: 8,
                        border: "1px solid #cbd5e1",
                        fontSize: 13.5,
                        width: 260,
                      }}
                    />
                  </div>

                  <select
                    value={filterSecao}
                    onChange={(e) => setFilterSecao(e.target.value)}
                    style={{
                      padding: "9px 14px",
                      borderRadius: 8,
                      border: "1px solid #cbd5e1",
                      fontSize: 13.5,
                      background: "#fff",
                      color: "#0f172a",
                      fontWeight: 600,
                    }}
                  >
                    <option value="all">Todas as 10 Seções</option>
                    {SECOES.map((s) => (
                      <option key={s.id} value={s.id.toString()}>
                        Seção {s.id}: {s.titulo_pt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Tabela */}
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: 14 }}>
                  <thead>
                    <tr style={{ background: "#f8fafc", borderBottom: "2px solid #e2e8f0", color: "#475569" }}>
                      <th style={{ padding: "12px 14px", width: 60 }}>#</th>
                      <th style={{ padding: "12px 14px" }}>Título do Capítulo</th>
                      <th style={{ padding: "12px 14px", width: 220 }}>Seção</th>
                      <th style={{ padding: "12px 14px", width: 180 }}>Autores</th>
                      <th style={{ padding: "12px 14px", width: 110 }}>Status</th>
                      <th style={{ padding: "12px 14px", width: 160, textAlign: "right" }}>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loadingList ? (
                      <tr>
                        <td colSpan={6} style={{ padding: 40, textAlign: "center", color: "#64748b" }}>
                          Carregando catálogo de capítulos...
                        </td>
                      </tr>
                    ) : displayedChapters.length === 0 ? (
                      <tr>
                        <td colSpan={6} style={{ padding: 40, textAlign: "center", color: "#64748b" }}>
                          Nenhum capítulo encontrado para o filtro selecionado.
                        </td>
                      </tr>
                    ) : (
                      displayedChapters.map((c) => {
                        const sec = SECOES.find((s) => s.id === c.secao_id);
                        return (
                          <tr
                            key={c.numero}
                            style={{ borderBottom: "1px solid #f1f5f9", transition: "background 0.15s ease" }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = "#f8fafc")}
                            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                          >
                            <td style={{ padding: "12px 14px", fontWeight: 900, color: "#f52238" }}>
                              {c.numero}
                            </td>
                            <td style={{ padding: "12px 14px" }}>
                              <strong style={{ color: "#001a3d" }}>{c.titulo_pt}</strong>
                              {c.titulo_en && (
                                <div style={{ fontSize: 12, color: "#64748b", fontStyle: "italic" }}>
                                  EN: {c.titulo_en}
                                </div>
                              )}
                            </td>
                            <td style={{ padding: "12px 14px", color: "#334155", fontSize: 13 }}>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 8px",
                                  borderRadius: 6,
                                  fontSize: 11.5,
                                  fontWeight: 700,
                                  background: sec?.colorClass === "red-row" ? "#fee2e2" : "#e0f2fe",
                                  color: sec?.colorClass === "red-row" ? "#991b1b" : "#0369a1",
                                }}
                              >
                                S{c.secao_id} • {sec?.titulo_pt || `Seção ${c.secao_id}`}
                              </span>
                            </td>
                            <td style={{ padding: "12px 14px", color: "#64748b", fontSize: 13 }}>
                              {c.autores || "Corpo Editorial SBC"}
                            </td>
                            <td style={{ padding: "12px 14px" }}>
                              <span
                                style={{
                                  padding: "3px 10px",
                                  borderRadius: 12,
                                  fontSize: 11.5,
                                  fontWeight: 700,
                                  background: c.status === "rascunho" ? "#fef3c7" : "#dcfce7",
                                  color: c.status === "rascunho" ? "#92400e" : "#15803d",
                                }}
                              >
                                {c.status === "rascunho" ? "Rascunho" : "Publicado"}
                              </span>
                            </td>
                            <td style={{ padding: "12px 14px", textAlign: "right" }}>
                              <div style={{ display: "flex", justifyContent: "flex-end", gap: 6 }}>
                                <button
                                  type="button"
                                  onClick={() => handleEditChapter(c)}
                                  title="Editar Capítulo"
                                  style={{
                                    padding: "6px 10px",
                                    borderRadius: 6,
                                    border: "1px solid #cbd5e1",
                                    background: "#fff",
                                    color: "#001a3d",
                                    fontSize: 12,
                                    fontWeight: 700,
                                    cursor: "pointer",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 4,
                                  }}
                                >
                                  <IconEdit size={13} />
                                  <span>Editar</span>
                                </button>
                                <Link
                                  href={`/pt/capitulo/${c.numero}`}
                                  target="_blank"
                                  title="Abrir no Leitor"
                                  style={{
                                    padding: "6px 10px",
                                    borderRadius: 6,
                                    border: "1px solid #93c5fd",
                                    background: "#eff6ff",
                                    color: "#1d4ed8",
                                    fontSize: 12,
                                    fontWeight: 700,
                                    textDecoration: "none",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 4,
                                  }}
                                >
                                  <IconEye size={13} />
                                  <span>Ver</span>
                                </Link>
                                <button
                                  type="button"
                                  onClick={() => handleDelete(c.numero, c.titulo_pt)}
                                  title="Excluir Capítulo"
                                  style={{
                                    padding: "6px 8px",
                                    borderRadius: 6,
                                    border: "1px solid #fecaca",
                                    background: "#fff1f2",
                                    color: "#b91c1c",
                                    fontSize: 12,
                                    cursor: "pointer",
                                  }}
                                >
                                  <IconTrash size={13} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}

        {/* ================= ABA 2: GESTÃO DO CORPO EDITORIAL & AUTORES ================= */}
        {activeTab === "autores" && (() => {
          // Categorize authors for dividers & counts
          const isEditorGeral = (cargo: string = "") => {
            const c = cargo.toLowerCase();
            return c.includes("chefe") || c.includes("editor-chefe") || c.includes("editor /") || c.includes("editor geral") || c === "editor";
          };

          const isEditorAssociado = (cargo: string = "") => {
            const c = cargo.toLowerCase();
            return c.includes("associado") || c.includes("coordenador") || c.includes("seção") || c.includes("secao");
          };

          const editoresGerais = authors.filter((a) => isEditorGeral(a.cargo));
          const editoresAssociados = authors.filter((a) => isEditorAssociado(a.cargo));
          const autoresColaboradores = authors.filter((a) => !isEditorGeral(a.cargo) && !isEditorAssociado(a.cargo));

          const filteredCategories = [
            {
              id: "editores_gerais",
              title: "Editores-Chefes & Editores Gerais",
              icon: "👑",
              badgeBg: "#fef2f2",
              badgeColor: "#dc2626",
              badgeBorder: "#fecaca",
              accentColor: "#e11d48",
              list: editoresGerais,
            },
            {
              id: "editores_associados",
              title: "Editores Associados & Coordenadores de Seção",
              icon: "🏛️",
              badgeBg: "#f0f9ff",
              badgeColor: "#0284c7",
              badgeBorder: "#bae6fd",
              accentColor: "#0284c7",
              list: editoresAssociados,
            },
            {
              id: "autores_colaboradores",
              title: "Autores de Capítulos & Colaboradores Científicos",
              icon: "✍️",
              badgeBg: "#faf5ff",
              badgeColor: "#7c3aed",
              badgeBorder: "#ddd6fe",
              accentColor: "#7c3aed",
              list: autoresColaboradores,
            },
          ].filter((cat) => {
            if (authorCategoryFilter === "todos") return true;
            return authorCategoryFilter === cat.id;
          });

          return (
            <div style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 32, alignItems: "start" }}>
              {/* Form de Cadastro / Edição de Autor */}
              <section
                style={{
                  background: "#fff",
                  borderRadius: 18,
                  padding: "36px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 30px rgba(0, 30, 80, 0.04)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 24,
                    borderBottom: "1px solid #f1f5f9",
                    paddingBottom: 18,
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
                        background: "rgba(245, 34, 56, 0.1)",
                        color: "#f52238",
                        fontSize: 12,
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        marginBottom: 6,
                      }}
                    >
                      <IconUsers size={14} />
                      <span>Gestão do Corpo Editorial</span>
                    </div>
                    <h2 style={{ fontSize: 24, fontWeight: 900, color: "#001a3d", margin: 0 }}>
                      {authorId ? `Editando: ${authorNome}` : "Cadastrar Novo Autor / Editor"}
                    </h2>
                    <p style={{ fontSize: 13, color: "#64748b", margin: "4px 0 0" }}>
                      Preencha os dados do médico para publicação na página inicial e no catálogo de autores.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleClearAuthorForm}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "8px 14px",
                      borderRadius: 8,
                      border: "1px solid #e2e8f0",
                      background: "#fff",
                      color: "#64748b",
                      fontSize: 13,
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    <IconPlus size={14} />
                    <span>Novo Autor</span>
                  </button>
                </div>

                <form onSubmit={handleAuthorSubmit}>
                  <input type="hidden" name="id" value={authorId} />

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 120px", gap: 16, marginBottom: 18 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                        Nome Completo do Médico / Autor *
                      </label>
                      <input
                        type="text"
                        name="nome"
                        value={authorNome}
                        onChange={(e) => setAuthorNome(e.target.value)}
                        placeholder="Ex: Prof. Dr. Edson Pudles ou Dr. Helton Defino"
                        required
                        style={{
                          width: "100%",
                          padding: "11px 14px",
                          borderRadius: 8,
                          border: "1px solid #cbd5e1",
                          fontSize: 14,
                          fontWeight: 600,
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                        Ordem de Exibição #
                      </label>
                      <input
                        type="number"
                        name="ordem"
                        value={authorOrdem}
                        onChange={(e) => setAuthorOrdem(e.target.value)}
                        min={1}
                        max={99}
                        style={{
                          width: "100%",
                          padding: "11px 14px",
                          borderRadius: 8,
                          border: "1px solid #cbd5e1",
                          fontSize: 14,
                          textAlign: "center",
                          fontWeight: 800,
                        }}
                      />
                    </div>
                  </div>

                  {/* Cargo Selection & Chips */}
                  <div style={{ marginBottom: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                      <label style={{ fontSize: 13, fontWeight: 700, color: "#334155" }}>
                        Cargo / Título Oficial no Tratado *
                      </label>
                      <span style={{ fontSize: 11, color: "#64748b" }}>
                        Clique em um modelo para preencher rápido:
                      </span>
                    </div>

                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
                      {[
                        { label: "👑 Editor-Chefe / SBC", value: "Editor-Chefe / SBC" },
                        { label: "⭐ Editor / FMRP-USP", value: "Editor / FMRP-USP" },
                        { label: "⭐ Editor / SBC", value: "Editor / SBC" },
                        { label: "🏛️ Editor Associado", value: "Editor Associado / MIS" },
                        { label: "📑 Coordenador de Seção", value: "Coordenador de Seção" },
                        { label: "✍️ Autor de Capítulo", value: "Autor / Especialista SBC" },
                      ].map((preset, pIdx) => (
                        <button
                          key={pIdx}
                          type="button"
                          onClick={() => setAuthorCargo(preset.value)}
                          style={{
                            padding: "4px 8px",
                            borderRadius: 6,
                            border: authorCargo === preset.value ? "1px solid #f52238" : "1px solid #e2e8f0",
                            background: authorCargo === preset.value ? "#fff1f2" : "#f8fafc",
                            color: authorCargo === preset.value ? "#e11d48" : "#475569",
                            fontSize: 11,
                            fontWeight: 700,
                            cursor: "pointer",
                          }}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>

                    <input
                      type="text"
                      name="cargo"
                      value={authorCargo}
                      onChange={(e) => setAuthorCargo(e.target.value)}
                      placeholder="Ex: Editor-Chefe / SBC ou Editor Associado - Grupo de Deformidades"
                      required
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: 8,
                        border: "1px solid #cbd5e1",
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 18 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                        Instituição / Universidade
                      </label>
                      <input
                        type="text"
                        name="instituicao"
                        value={authorInstituicao}
                        onChange={(e) => setAuthorInstituicao(e.target.value)}
                        placeholder="Ex: Faculdade de Medicina de Ribeirão Preto - USP (FMRP-USP)"
                        style={{
                          width: "100%",
                          padding: "11px 14px",
                          borderRadius: 8,
                          border: "1px solid #cbd5e1",
                          fontSize: 14,
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                        Destaque / Principal Conquista Editorial
                      </label>
                      <input
                        type="text"
                        name="destaque"
                        value={authorDestaque}
                        onChange={(e) => setAuthorDestaque(e.target.value)}
                        placeholder="Ex: Coordenação Editorial de 109 Capítulos"
                        style={{
                          width: "100%",
                          padding: "11px 14px",
                          borderRadius: 8,
                          border: "1px solid #cbd5e1",
                          fontSize: 14,
                        }}
                      />
                    </div>
                  </div>

                  {/* Foto Picker com Prévia e Upload de Arquivo */}
                  <div style={{ marginBottom: 18, background: "#f8fafc", padding: "18px", borderRadius: 14, border: "1px solid #e2e8f0" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <label style={{ fontSize: 13, fontWeight: 700, color: "#334155" }}>
                        Foto Oficial do Autor *
                      </label>
                      <span style={{ fontSize: 11.5, color: "#64748b" }}>
                        Envie uma foto ou escolha uma foto oficial
                      </span>
                    </div>

                    <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 14 }}>
                      <img
                        src={authorFotoUrl}
                        alt="Prévia da foto"
                        style={{
                          width: 58,
                          height: 58,
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "3px solid #fff",
                          boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
                          background: "#021a3a",
                          flexShrink: 0,
                        }}
                      />

                      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
                        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                          <label
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 6,
                              padding: "7px 12px",
                              borderRadius: 8,
                              background: "#002244",
                              color: "#fff",
                              fontSize: 12,
                              fontWeight: 700,
                              cursor: "pointer",
                              boxShadow: "0 2px 6px rgba(0,34,68,0.2)",
                            }}
                          >
                            <span>📷 Carregar Arquivo de Foto</span>
                            <input
                              type="file"
                              accept="image/*"
                              style={{ display: "none" }}
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  const reader = new FileReader();
                                  reader.onloadend = () => {
                                    setAuthorFotoUrl(reader.result as string);
                                  };
                                  reader.readAsDataURL(file);
                                }
                              }}
                            />
                          </label>

                          <input
                            type="text"
                            name="foto_url"
                            value={authorFotoUrl}
                            onChange={(e) => setAuthorFotoUrl(e.target.value)}
                            placeholder="/assets/edson-pudles.png"
                            required
                            style={{
                              flex: 1,
                              padding: "7px 10px",
                              borderRadius: 8,
                              border: "1px solid #cbd5e1",
                              fontSize: 12.5,
                              background: "#fff",
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Quick Photo Presets */}
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
                      <span style={{ fontSize: 11.5, color: "#64748b", fontWeight: 700 }}>
                        Atalhos de Fotos:
                      </span>
                      {[
                        { name: "Dr. Edson Pudles", url: "/assets/edson-pudles.png" },
                        { name: "Dr. Helton Defino", url: "/assets/helton-defino.png" },
                        { name: "Dr. Marcelo Risso", url: "/assets/marcelo-risso.png" },
                        { name: "Prof. Dr. Elcio Landim", url: "/assets/elcio-landim.jpg" },
                      ].map((preset, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setAuthorFotoUrl(preset.url)}
                          style={{
                            fontSize: 11.5,
                            padding: "4px 10px",
                            borderRadius: 6,
                            border: authorFotoUrl === preset.url ? "1.5px solid #001a3d" : "1px solid #cbd5e1",
                            background: authorFotoUrl === preset.url ? "#001a3d" : "#fff",
                            color: authorFotoUrl === preset.url ? "#fff" : "#334155",
                            fontWeight: 700,
                            cursor: "pointer",
                          }}
                        >
                          {preset.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: 18 }}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                      Mini-Currículo e Trajetória Acadêmica *
                    </label>
                    <textarea
                      name="bio_pt"
                      value={authorBioPt}
                      onChange={(e) => setAuthorBioPt(e.target.value)}
                      rows={4}
                      placeholder="Ex: Professor Titular do Departamento de Ortopedia da Faculdade de Medicina de Ribeirão Preto (USP). Reconhecido pelo pioneirismo em fixação pedicular e pesquisas biomecânicas internacionais da coluna vertebral..."
                      required
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: 8,
                        border: "1px solid #cbd5e1",
                        fontSize: 13.5,
                        lineHeight: 1.6,
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                      Especialidades &amp; Áreas de Foco (separadas por vírgula)
                    </label>
                    <input
                      type="text"
                      name="especialidades"
                      value={authorEspecialidades}
                      onChange={(e) => setAuthorEspecialidades(e.target.value)}
                      placeholder="Ex: Deformidades Complexas, Liderança Editorial, Fixação Pedicular, Diretrizes SBC"
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: 8,
                        border: "1px solid #cbd5e1",
                        fontSize: 14,
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    style={{
                      width: "100%",
                      padding: "15px",
                      borderRadius: 10,
                      border: "none",
                      background: "linear-gradient(135deg, #f52238 0%, #b80f21 100%)",
                      color: "#fff",
                      fontSize: 15.5,
                      fontWeight: 800,
                      cursor: isPending ? "not-allowed" : "pointer",
                      boxShadow: "0 8px 24px rgba(245, 34, 56, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      transition: "all 0.2s ease",
                    }}
                  >
                    <IconSave size={18} />
                    <span>{isPending ? "Salvando informações..." : "Salvar Informações do Autor"}</span>
                  </button>
                </form>
              </section>

              {/* Listagem dos Autores Cadastrados com Divisórias de Cargos */}
              <section
                style={{
                  background: "#fff",
                  borderRadius: 18,
                  padding: "32px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 30px rgba(0, 30, 80, 0.04)",
                }}
              >
                <div style={{ marginBottom: 20, borderBottom: "1px solid #f1f5f9", paddingBottom: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                    <h3 style={{ fontSize: 20, fontWeight: 900, color: "#001a3d", margin: 0 }}>
                      👥 Corpo Editorial Cadastrado ({authors.length})
                    </h3>
                  </div>
                  <p style={{ fontSize: 13, color: "#64748b", margin: "0 0 14px" }}>
                    Autores e editores organizados por categoria hierárquica e exibidos no site.
                  </p>

                  {/* Filter Pills */}
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {[
                      { id: "todos", label: `Todos (${authors.length})` },
                      { id: "editores_gerais", label: `👑 Editores Gerais (${editoresGerais.length})` },
                      { id: "editores_associados", label: `🏛️ Editores Associados (${editoresAssociados.length})` },
                      { id: "autores_colaboradores", label: `✍️ Autores (${autoresColaboradores.length})` },
                    ].map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setAuthorCategoryFilter(f.id)}
                        style={{
                          padding: "5px 12px",
                          borderRadius: 20,
                          border: authorCategoryFilter === f.id ? "none" : "1px solid #cbd5e1",
                          background: authorCategoryFilter === f.id ? "#002b66" : "#fff",
                          color: authorCategoryFilter === f.id ? "#fff" : "#475569",
                          fontSize: 12,
                          fontWeight: 700,
                          cursor: "pointer",
                          transition: "all 0.15s",
                        }}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Categorized List with Beautiful Dividers */}
                <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                  {filteredCategories.map((category) => {
                    if (category.list.length === 0) return null;

                    return (
                      <div key={category.id} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        {/* Elegant Category Header / Divider */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            padding: "6px 12px",
                            borderRadius: 8,
                            background: "#f8fafc",
                            borderLeft: `4px solid ${category.accentColor}`,
                            borderTop: "1px solid #f1f5f9",
                            borderRight: "1px solid #f1f5f9",
                            borderBottom: "1px solid #f1f5f9",
                          }}
                        >
                          <span style={{ fontSize: 16 }}>{category.icon}</span>
                          <h4 style={{ fontSize: 13.5, fontWeight: 900, color: "#001a3d", margin: 0, flex: 1 }}>
                            {category.title}
                          </h4>
                          <span
                            style={{
                              fontSize: 11,
                              fontWeight: 800,
                              padding: "2px 8px",
                              borderRadius: 12,
                              background: category.badgeBg,
                              color: category.badgeColor,
                              border: `1px solid ${category.badgeBorder}`,
                            }}
                          >
                            {category.list.length} {category.list.length === 1 ? "médico" : "médicos"}
                          </span>
                        </div>

                        {/* Category Authors Cards */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                          {category.list.map((author, idx) => (
                            <div
                              key={author.id || idx}
                              style={{
                                display: "flex",
                                gap: 14,
                                padding: 14,
                                borderRadius: 12,
                                border: authorId === author.id ? `2px solid ${category.accentColor}` : "1px solid #e2e8f0",
                                background: authorId === author.id ? "#fffbfb" : "#ffffff",
                                alignItems: "center",
                                transition: "all 0.2s ease",
                                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)",
                              }}
                            >
                              <img
                                src={author.foto_url}
                                alt={author.nome}
                                style={{
                                  width: 54,
                                  height: 54,
                                  borderRadius: "50%",
                                  objectFit: "cover",
                                  border: "2px solid #fff",
                                  boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
                                  background: "#021a3a",
                                  flexShrink: 0,
                                }}
                              />

                              <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", marginBottom: 3 }}>
                                  <span
                                    style={{
                                      fontSize: 10.5,
                                      fontWeight: 800,
                                      padding: "2px 7px",
                                      borderRadius: 4,
                                      background: category.badgeBg,
                                      color: category.badgeColor,
                                      border: `1px solid ${category.badgeBorder}`,
                                      textTransform: "uppercase",
                                    }}
                                  >
                                    {author.cargo}
                                  </span>
                                  <span style={{ fontSize: 11, color: "#64748b", fontWeight: 700 }}>
                                    #{author.ordem}
                                  </span>
                                </div>

                                <h4 style={{ fontSize: 15, fontWeight: 800, margin: "2px 0", color: "#001a3d" }}>
                                  {author.nome}
                                </h4>

                                <p style={{ fontSize: 12, color: "#64748b", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                  {author.instituicao}
                                </p>
                              </div>

                              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                <button
                                  type="button"
                                  onClick={() => handleEditAuthor(author)}
                                  style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 4,
                                    padding: "5px 10px",
                                    borderRadius: 6,
                                    border: "1px solid #cbd5e1",
                                    background: "#fff",
                                    color: "#001a3d",
                                    fontSize: 11.5,
                                    fontWeight: 700,
                                    cursor: "pointer",
                                  }}
                                >
                                  <IconEdit size={12} />
                                  <span>Editar</span>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteAuthor(author.id || "", author.nome)}
                                  style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 4,
                                    padding: "4px 8px",
                                    borderRadius: 6,
                                    border: "1px solid #fecaca",
                                    background: "#fff1f2",
                                    color: "#b91c1c",
                                    fontSize: 11,
                                    fontWeight: 700,
                                    cursor: "pointer",
                                  }}
                                >
                                  <IconTrash size={11} />
                                  <span>Excluir</span>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div style={{ marginTop: 24, textAlign: "center", borderTop: "1px solid #f1f5f9", paddingTop: 16 }}>
                  <Link
                    href="/pt/home-new#autores"
                    target="_blank"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#0284c7",
                      textDecoration: "none",
                    }}
                  >
                    <span>Visualizar Seção de Autores no Site</span>
                    <IconExternal size={13} />
                  </Link>
                </div>
              </section>
            </div>
          );
        })()}

        {/* ================= ABA 3: USUÁRIOS E PERMISSÕES ================= */}
        {activeTab === "usuarios" && (
          <UsersManagementTab
            usuarios={usuarios}
            loading={loadingUsuarios}
            currentUserEmail={userEmail}
            currentUserName={currentUserName}
            currentUserFoto={currentUserFoto}
            currentUserRole={currentUserRole}
            onUpdateStatus={handleUpdateUserStatus}
            onDeleteUser={handleDeleteUser}
            onAddUser={handleAddUser}
            onEditUser={handleEditOtherUser}
            isPending={isPending}
          />
        )}
        </main>
      </div>

      {/* ================= MODAL: EDITAR MINHA CONTA ================= */}
      {showEditAccountModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 15, 40, 0.75)",
            backdropFilter: "blur(8px)",
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
              borderRadius: 20,
              maxWidth: 540,
              width: "100%",
              padding: "32px",
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.35)",
              border: "1px solid #e2e8f0",
              animation: "fadeIn 0.2s ease",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    overflow: "hidden",
                    background: "linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: 900,
                    boxShadow: "0 4px 12px rgba(124, 58, 237, 0.3)",
                    flexShrink: 0,
                  }}
                >
                  {editAccountFoto ? (
                    <img src={editAccountFoto} alt="Foto" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : editAccountNome ? (
                    editAccountNome.split(" ").slice(0, 2).map((n) => n[0]).join("").toUpperCase()
                  ) : (
                    "SA"
                  )}
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: 19, fontWeight: 900, color: "#001a3d" }}>
                    Editar Minha Conta
                  </h3>
                  <p style={{ margin: "2px 0 0", fontSize: 13, color: "#64748b" }}>
                    Atualize seu nome de exibição, foto, cargo e credenciais
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowEditAccountModal(false)}
                style={{
                  background: "#f1f5f9",
                  border: "none",
                  borderRadius: "50%",
                  width: 32,
                  height: 32,
                  display: "grid",
                  placeItems: "center",
                  fontSize: 14,
                  fontWeight: 800,
                  cursor: "pointer",
                  color: "#64748b",
                }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveMyAccount} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* UPLOAD DE FOTO DE PERFIL */}
              <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "12px 14px", background: "#f8fafc", borderRadius: 12, border: "1px solid #e2e8f0" }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    overflow: "hidden",
                    background: "#ede9fe",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    fontWeight: 900,
                    color: "#7c3aed",
                    border: "2px solid #c4b5fd",
                    flexShrink: 0,
                  }}
                >
                  {editAccountFoto ? (
                    <img src={editAccountFoto} alt="Foto" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : (
                    editAccountNome ? editAccountNome.split(" ").slice(0, 2).map((n) => n[0]).join("").toUpperCase() : "👤"
                  )}
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: "block", fontSize: 12.5, fontWeight: 800, color: "#334155", marginBottom: 4 }}>
                    Sua Foto de Perfil
                  </label>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                    <label
                      style={{
                        padding: "6px 12px",
                        borderRadius: 8,
                        background: "#7c3aed",
                        color: "#fff",
                        fontSize: 12,
                        fontWeight: 800,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <span>📷 Carregar Foto</span>
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = () => {
                              if (typeof reader.result === "string") {
                                setEditAccountFoto(reader.result);
                              }
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    </label>
                    {editAccountFoto && (
                      <button
                        type="button"
                        onClick={() => setEditAccountFoto("")}
                        style={{
                          padding: "6px 10px",
                          borderRadius: 8,
                          background: "#fee2e2",
                          color: "#b91c1c",
                          border: "1px solid #fecaca",
                          fontSize: 11.5,
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        Remover Foto
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: 12.5, fontWeight: 800, color: "#334155", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={editAccountNome}
                  onChange={(e) => setEditAccountNome(e.target.value)}
                  placeholder="Ex: Manoel Silva / Dr. Nome Sobrenome"
                  style={{
                    width: "100%",
                    padding: "11px 14px",
                    borderRadius: 10,
                    border: "1.5px solid #cbd5e1",
                    fontSize: 14.5,
                    fontWeight: 600,
                    color: "#0f172a",
                    boxSizing: "border-box",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 12.5, fontWeight: 800, color: "#334155", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  E-mail de Acesso
                </label>
                <input
                  type="email"
                  value={editAccountEmail}
                  onChange={(e) => setEditAccountEmail(e.target.value)}
                  placeholder="seu.email@dominio.com"
                  style={{
                    width: "100%",
                    padding: "11px 14px",
                    borderRadius: 10,
                    border: "1.5px solid #cbd5e1",
                    fontSize: 14,
                    color: "#0f172a",
                    boxSizing: "border-box",
                    outline: "none",
                    background: "#f8fafc",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 12.5, fontWeight: 800, color: "#334155", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  Cargo / Instituição Médica
                </label>
                <input
                  type="text"
                  value={editAccountCargo}
                  onChange={(e) => setEditAccountCargo(e.target.value)}
                  placeholder="Ex: Super Admin • SBC / Coordenador Geral"
                  style={{
                    width: "100%",
                    padding: "11px 14px",
                    borderRadius: 10,
                    border: "1.5px solid #cbd5e1",
                    fontSize: 14,
                    color: "#0f172a",
                    boxSizing: "border-box",
                    outline: "none",
                  }}
                />
              </div>

              <div
                style={{
                  padding: "12px 16px",
                  borderRadius: 10,
                  background: "#f5f3ff",
                  border: "1px solid #ddd6fe",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: 12, fontWeight: 800, color: "#6d28d9", textTransform: "uppercase" }}>
                    Nível de Acesso no Sistema
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#4c1d95", marginTop: 2 }}>
                    👑 Super Admin (Acesso Total & Irrestrito)
                  </div>
                </div>
                <span style={{ fontSize: 11, fontWeight: 800, padding: "3px 8px", borderRadius: 6, background: "#7c3aed", color: "#fff" }}>
                  ATIVO
                </span>
              </div>

              <div>
                <label style={{ display: "block", fontSize: 12.5, fontWeight: 800, color: "#334155", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  Nova Senha (Opcional)
                </label>
                <input
                  type="password"
                  value={editAccountSenha}
                  onChange={(e) => setEditAccountSenha(e.target.value)}
                  placeholder="Deixe em branco para não alterar"
                  style={{
                    width: "100%",
                    padding: "11px 14px",
                    borderRadius: 10,
                    border: "1.5px solid #cbd5e1",
                    fontSize: 14,
                    color: "#0f172a",
                    boxSizing: "border-box",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 12 }}>
                <button
                  type="button"
                  onClick={() => setShowEditAccountModal(false)}
                  style={{
                    padding: "11px 20px",
                    borderRadius: 10,
                    border: "1px solid #cbd5e1",
                    background: "#f8fafc",
                    color: "#475569",
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={savingAccount}
                  style={{
                    padding: "11px 24px",
                    borderRadius: 10,
                    border: "none",
                    background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: 800,
                    cursor: "pointer",
                    boxShadow: "0 4px 14px rgba(124, 58, 237, 0.3)",
                  }}
                >
                  {savingAccount ? "Salvando..." : "✓ Salvar Alterações"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
