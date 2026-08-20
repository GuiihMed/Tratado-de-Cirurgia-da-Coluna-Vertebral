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
import {
  BookOpen,
  Users,
  Shield,
  ShieldCheck,
  Crown,
  Settings,
  Globe,
  FileText,
  ShoppingCart,
  Eye,
  Edit3,
  Trash2,
  Plus,
  Sparkles,
  ExternalLink,
  LogOut,
  Check,
  X,
  Search,
  Lock,
  Layers,
  Award,
  Building2,
  Save,
  Camera,
  User,
} from "lucide-react";

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
    <div className="min-h-screen flex bg-slate-950 text-slate-100 font-sans selection:bg-rose-500 selection:text-white relative overflow-x-hidden">
      {/* Background Ambient Glows */}
      <div className="fixed -top-40 -right-40 w-96 h-96 rounded-full bg-rose-500/10 blur-[120px] pointer-events-none" />
      <div className="fixed -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />

      {/* ================= MOBILE SIDEBAR BACKDROP ================= */}
      {mobileSidebarOpen && (
        <div
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden"
        />
      )}

      {/* ================= LEFT MODERN SIDEBAR ================= */}
      <aside
        style={{
          width: 280,
          background: "rgba(2, 6, 23, 0.85)",
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
          backdropFilter: "blur(20px)",
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
                <span>Painel Executivo</span>
              </div>
            </div>
          </div>
        </div>

        {/* User Connected Card */}
        <div style={{ padding: "16px 20px", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
          <div
            onClick={handleOpenEditAccount}
            title="Clique para editar sua conta"
            className="group p-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 cursor-pointer flex items-center gap-3 transition-all duration-200"
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
              <div style={{ fontSize: 10.5, color: "#38bdf8", fontWeight: 700, marginTop: 1, display: "flex", alignItems: "center", gap: 4 }}>
                {currentUserRole === "super_admin" ? (
                  <>
                    <Crown size={12} className="text-amber-400" />
                    <span>Super Admin</span>
                  </>
                ) : (
                  <>
                    <Shield size={12} className="text-sky-400" />
                    <span>Editor SBC</span>
                  </>
                )}
              </div>
            </div>
            <Settings size={14} className="text-slate-400 opacity-70 group-hover:rotate-45 transition-transform duration-300" />
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
                className={`group w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === "dashboard"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-950/50"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
                }`}
              >
                <Layers size={18} className="transition-transform duration-200 group-hover:scale-110" />
                <span className="flex-1 text-left">Dashboard &amp; Métricas</span>
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
                className={`group w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === "capitulos"
                    ? "bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-lg shadow-cyan-950/50"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
                }`}
              >
                <BookOpen size={18} className="transition-transform duration-200 group-hover:scale-110" />
                <span className="flex-1 text-left">Capítulos</span>
                <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-full bg-white/15 text-white">
                  {chapters.length}
                </span>
              </button>

              <button
                onClick={() => switchTab("autores")}
                className={`group w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === "autores"
                    ? "bg-gradient-to-r from-rose-600 to-rose-700 text-white shadow-lg shadow-rose-950/50"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
                }`}
              >
                <Users size={18} className="transition-transform duration-200 group-hover:scale-110" />
                <span className="flex-1 text-left">Autores &amp; Editores</span>
                <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-full bg-white/15 text-white">
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
                className={`group w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === "usuarios"
                    ? "bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-lg shadow-purple-950/50"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
                }`}
              >
                <ShieldCheck size={18} className="transition-transform duration-200 group-hover:scale-110" />
                <span className="flex-1 text-left">Usuários &amp; Acessos</span>
                {usuarios.filter((u) => u.status === "pendente").length > 0 && (
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-rose-500 text-white animate-pulse">
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
                className="group flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-200"
              >
                <Globe size={15} className="transition-transform duration-200 group-hover:rotate-12" />
                <span className="flex-1">Home Portal</span>
                <ExternalLink size={12} className="opacity-60 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/pt/indice-new"
                target="_blank"
                className="group flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-blue-300 hover:bg-blue-500/10 transition-all duration-200"
              >
                <FileText size={15} className="transition-transform duration-200 group-hover:scale-110" />
                <span className="flex-1">Índice Interativo</span>
                <ExternalLink size={12} className="opacity-60 group-hover:translate-x-0.5" />
              </Link>

              <a
                href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-bold text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-all duration-200"
              >
                <ShoppingCart size={15} className="transition-transform duration-200 group-hover:scale-110" />
                <span className="flex-1">Loja DiLivros Oficial</span>
                <ExternalLink size={12} className="opacity-60 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 11, color: "#64748b" }}>
            SBC Tratado v2.4
          </div>
          <button
            onClick={handleLogout}
            title="Encerrar sessão"
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-bold transition-all duration-200 cursor-pointer"
          >
            <LogOut size={13} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
            <span>Sair</span>
          </button>
        </div>
      </aside>

      {/* ================= RIGHT MAIN WRAPPER ================= */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* ================= TOPBAR (GLASSMORPHISM) ================= */}
        <header className="h-16 bg-slate-900/60 backdrop-blur-xl border-b border-slate-800/80 flex items-center justify-between px-6 sm:px-8 sticky top-0 z-40 shadow-sm">
          <div className="flex items-center gap-3">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400">
              <span className="text-slate-500 font-bold uppercase tracking-wider text-[11px]">SBC Admin</span>
              <span>/</span>
              <strong className="text-white font-extrabold">
                {activeTab === "dashboard"
                  ? "Dashboard Executivo & Métricas"
                  : activeTab === "capitulos"
                  ? "Catálogo de Capítulos (109)"
                  : activeTab === "autores"
                  ? "Corpo Editorial & Autores"
                  : "Governança de Usuários"}
              </strong>
            </div>
          </div>

          {/* Topbar Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/pt/indice-new"
              target="_blank"
              className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-semibold text-slate-200 transition-all duration-200"
            >
              <span>Ver Índice Público</span>
              <ExternalLink size={12} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </header>

        {/* ================= MAIN CONTENT CONTAINER ================= */}
        <main className="p-6 sm:p-8 max-w-7xl w-full mx-auto box-border">
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
            <section className="rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl mt-8">
              <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
                <div>
                  <h3 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
                    <BookOpen size={20} className="text-cyan-400" />
                    <span>Catálogo Geral da Obra ({displayedChapters.length} de {chapters.length} Capítulos)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Navegue por seções, busque títulos ou edite o conteúdo de qualquer capítulo em tempo real.
                  </p>
                </div>

                {/* Filtros e Busca */}
                <div className="flex gap-3 flex-wrap items-center">
                  <div className="relative flex items-center">
                    <div className="absolute left-3.5 text-slate-400">
                      <Search size={15} />
                    </div>
                    <input
                      type="text"
                      placeholder="Buscar por título ou autor..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9 pr-4 py-2 rounded-xl bg-slate-800/60 border border-slate-700/80 text-white placeholder-slate-400 text-xs sm:text-sm w-64 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <select
                    value={filterSecao}
                    onChange={(e) => setFilterSecao(e.target.value)}
                    className="px-3.5 py-2 rounded-xl bg-slate-800/60 border border-slate-700/80 text-white text-xs sm:text-sm font-semibold focus:outline-none focus:border-cyan-500 transition-colors cursor-pointer"
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
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-wider">
                      <th className="py-3 px-3.5 w-14">#</th>
                      <th className="py-3 px-3.5">Título do Capítulo</th>
                      <th className="py-3 px-3.5 w-48">Seção</th>
                      <th className="py-3 px-3.5 w-44">Autores</th>
                      <th className="py-3 px-3.5 w-28">Status</th>
                      <th className="py-3 px-3.5 w-36 text-right">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {loadingList ? (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-slate-400 text-sm">
                          Carregando catálogo de capítulos...
                        </td>
                      </tr>
                    ) : displayedChapters.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-slate-400 text-sm">
                          Nenhum capítulo encontrado para o filtro selecionado.
                        </td>
                      </tr>
                    ) : (
                      displayedChapters.map((c) => {
                        const sec = SECOES.find((s) => s.id === c.secao_id);
                        return (
                          <tr
                            key={c.numero}
                            className="hover:bg-slate-800/30 transition-colors"
                          >
                            <td className="py-3.5 px-3.5 font-black text-rose-400">
                              {c.numero}
                            </td>
                            <td className="py-3.5 px-3.5">
                              <strong className="text-slate-100 font-bold">{c.titulo_pt}</strong>
                              {c.titulo_en && (
                                <div className="text-xs text-slate-400 italic mt-0.5">
                                  EN: {c.titulo_en}
                                </div>
                              )}
                            </td>
                            <td className="py-3.5 px-3.5 text-xs font-semibold">
                              <span className="inline-block px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-300">
                                S{c.secao_id} • {sec?.titulo_pt || `Seção ${c.secao_id}`}
                              </span>
                            </td>
                            <td className="py-3.5 px-3.5 text-xs text-slate-400 font-medium">
                              {c.autores || "Corpo Editorial SBC"}
                            </td>
                            <td className="py-3.5 px-3.5">
                              <span
                                className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold ${
                                  c.status === "rascunho"
                                    ? "bg-amber-500/10 border border-amber-500/30 text-amber-300"
                                    : "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
                                }`}
                              >
                                {c.status === "rascunho" ? "Rascunho" : "Publicado"}
                              </span>
                            </td>
                            <td className="py-3.5 px-3.5 text-right">
                              <div className="inline-flex items-center justify-end gap-1.5">
                                <button
                                  type="button"
                                  onClick={() => handleEditChapter(c)}
                                  title="Editar Capítulo"
                                  className="group p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-bold transition-all duration-150 inline-flex items-center gap-1 cursor-pointer"
                                >
                                  <Edit3 size={13} className="text-cyan-400 transition-transform group-hover:scale-110" />
                                  <span>Editar</span>
                                </button>
                                <Link
                                  href={`/pt/capitulo/${c.numero}`}
                                  target="_blank"
                                  title="Abrir no Leitor"
                                  className="group p-1.5 rounded-lg bg-blue-950/60 hover:bg-blue-900/60 border border-blue-800 text-blue-300 text-xs font-bold transition-all duration-150 inline-flex items-center gap-1"
                                >
                                  <Eye size={13} className="transition-transform group-hover:scale-110" />
                                  <span>Ver</span>
                                </Link>
                                <button
                                  type="button"
                                  onClick={() => handleDelete(c.numero, c.titulo_pt)}
                                  title="Excluir Capítulo"
                                  className="p-1.5 rounded-lg bg-rose-950/40 hover:bg-rose-900/60 border border-rose-900/80 text-rose-300 text-xs transition-all duration-150 cursor-pointer"
                                >
                                  <Trash2 size={13} />
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
              iconType: "crown",
              badgeBg: "#fef2f2",
              badgeColor: "#dc2626",
              badgeBorder: "#fecaca",
              accentColor: "#e11d48",
              list: editoresGerais,
            },
            {
              id: "editores_associados",
              title: "Editores Associados & Coordenadores de Seção",
              iconType: "building",
              badgeBg: "#f0f9ff",
              badgeColor: "#0284c7",
              badgeBorder: "#bae6fd",
              accentColor: "#0284c7",
              list: editoresAssociados,
            },
            {
              id: "autores_colaboradores",
              title: "Autores de Capítulos & Colaboradores Científicos",
              iconType: "pen",
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Form de Cadastro / Edição de Autor */}
              <section className="lg:col-span-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
                <div className="flex justify-between items-start mb-6 border-b border-slate-800 pb-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-black uppercase tracking-wider mb-2">
                      <Users size={13} />
                      <span>Gestão do Corpo Editorial</span>
                    </div>
                    <h2 className="text-xl font-black text-white tracking-tight">
                      {authorId ? `Editando: ${authorNome}` : "Cadastrar Novo Autor / Editor"}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Preencha os dados do médico para publicação na página inicial e no catálogo de autores.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleClearAuthorForm}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-xs font-bold transition-all cursor-pointer"
                  >
                    <Plus size={13} />
                    <span>Novo Autor</span>
                  </button>
                </div>

                <form onSubmit={handleAuthorSubmit} className="space-y-4">
                  <input type="hidden" name="id" value={authorId} />

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div className="sm:col-span-3">
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Nome Completo do Médico / Autor *
                      </label>
                      <input
                        type="text"
                        name="nome"
                        value={authorNome}
                        onChange={(e) => setAuthorNome(e.target.value)}
                        placeholder="Ex: Prof. Dr. Edson Pudles"
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/80 text-white placeholder-slate-500 text-sm font-semibold focus:outline-none focus:border-rose-500"
                      />
                    </div>

                    <div className="sm:col-span-1">
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Ordem #
                      </label>
                      <input
                        type="number"
                        name="ordem"
                        value={authorOrdem}
                        onChange={(e) => setAuthorOrdem(e.target.value)}
                        min={1}
                        max={99}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/80 text-white text-center text-sm font-black focus:outline-none focus:border-rose-500"
                      />
                    </div>
                  </div>

                  {/* Cargo Selection & Chips */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Cargo / Título Oficial no Tratado *
                      </label>
                      <span className="text-[11px] text-slate-400">
                        Atalhos de preenchimento rápido:
                      </span>
                    </div>

                    <div className="flex gap-1.5 flex-wrap mb-2">
                      {[
                        { label: "Editor-Chefe", value: "Editor-Chefe / SBC" },
                        { label: "Editor / USP", value: "Editor / FMRP-USP" },
                        { label: "Editor / SBC", value: "Editor / SBC" },
                        { label: "Editor Associado", value: "Editor Associado / MIS" },
                        { label: "Coordenador de Seção", value: "Coordenador de Seção" },
                        { label: "Autor de Capítulo", value: "Autor / Especialista SBC" },
                      ].map((preset, pIdx) => (
                        <button
                          key={pIdx}
                          type="button"
                          onClick={() => setAuthorCargo(preset.value)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            authorCargo === preset.value
                              ? "bg-rose-500/20 border border-rose-500 text-rose-300"
                              : "bg-slate-800/60 hover:bg-slate-800 border border-slate-700 text-slate-300"
                          }`}
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
                      placeholder="Ex: Editor-Chefe / SBC"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/80 text-white placeholder-slate-500 text-sm font-semibold focus:outline-none focus:border-rose-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Instituição / Universidade
                      </label>
                      <input
                        type="text"
                        name="instituicao"
                        value={authorInstituicao}
                        onChange={(e) => setAuthorInstituicao(e.target.value)}
                        placeholder="Ex: FMRP-USP"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-rose-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Destaque Principal
                      </label>
                      <input
                        type="text"
                        name="destaque"
                        value={authorDestaque}
                        onChange={(e) => setAuthorDestaque(e.target.value)}
                        placeholder="Ex: Coordenação de 109 Capítulos"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-rose-500"
                      />
                    </div>
                  </div>

                  {/* Foto Picker com Prévia e Upload */}
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Foto Oficial do Autor *
                      </label>
                      <span className="text-[11px] text-slate-400">
                        Upload ou seleção rápida
                      </span>
                    </div>

                    <div className="flex gap-3 items-center">
                      <img
                        src={authorFotoUrl}
                        alt="Prévia da foto"
                        className="w-14 h-14 rounded-full object-cover border-2 border-slate-700 bg-slate-900 shadow-md shrink-0"
                      />

                      <div className="flex-1 space-y-2">
                        <div className="flex gap-2 items-center">
                          <label className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs font-bold cursor-pointer transition-colors shrink-0">
                            <Camera size={13} className="text-rose-400" />
                            <span>Carregar Arquivo</span>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
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
                            className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-rose-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Quick Photo Presets */}
                    <div className="flex gap-2 flex-wrap items-center pt-1">
                      <span className="text-[11px] text-slate-400 font-bold">
                        Atalhos:
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
                          className={`text-xs px-2.5 py-1 rounded-lg border font-semibold transition-all cursor-pointer ${
                            authorFotoUrl === preset.url
                              ? "bg-rose-500/20 border-rose-500 text-rose-300"
                              : "bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800"
                          }`}
                        >
                          {preset.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Mini-Currículo e Trajetória Acadêmica *
                    </label>
                    <textarea
                      name="bio_pt"
                      value={authorBioPt}
                      onChange={(e) => setAuthorBioPt(e.target.value)}
                      rows={4}
                      placeholder="Ex: Professor Titular do Departamento de Ortopedia da Faculdade de Medicina de Ribeirão Preto (USP)..."
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm leading-relaxed focus:outline-none focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Especialidades &amp; Áreas de Foco (separadas por vírgula)
                    </label>
                    <input
                      type="text"
                      name="especialidades"
                      value={authorEspecialidades}
                      onChange={(e) => setAuthorEspecialidades(e.target.value)}
                      placeholder="Ex: Deformidades Complexas, Fixação Pedicular"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-rose-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-extrabold text-sm shadow-xl shadow-rose-950/50 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
                  >
                    <Save size={16} />
                    <span>{isPending ? "Salvando informações..." : "Salvar Informações do Autor"}</span>
                  </button>
                </form>
              </section>

              {/* Listagem dos Autores Cadastrados com Divisórias de Cargos */}
              <section className="lg:col-span-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
                <div className="mb-6 border-b border-slate-800 pb-4">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
                      <Users size={18} className="text-rose-400" />
                      <span>Corpo Editorial Cadastrado ({authors.length})</span>
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 mb-4">
                    Autores e editores organizados por categoria hierárquica e exibidos no site.
                  </p>

                  {/* Filter Pills */}
                  <div className="flex gap-2 flex-wrap">
                    {[
                      { id: "todos", label: `Todos (${authors.length})` },
                      { id: "editores_gerais", label: `Editores Gerais (${editoresGerais.length})` },
                      { id: "editores_associados", label: `Editores Associados (${editoresAssociados.length})` },
                      { id: "autores_colaboradores", label: `Autores (${autoresColaboradores.length})` },
                    ].map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setAuthorCategoryFilter(f.id)}
                        className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                          authorCategoryFilter === f.id
                            ? "bg-rose-500 text-white shadow-md shadow-rose-950/50"
                            : "bg-slate-800/60 hover:bg-slate-800 border border-slate-700 text-slate-400"
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Categorized List with Beautiful Dividers */}
                <div className="space-y-6">
                  {filteredCategories.map((category) => {
                    if (category.list.length === 0) return null;

                    return (
                      <div key={category.id} className="space-y-3">
                        {/* Category Header / Divider */}
                        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-800/40 border border-slate-800">
                          <div className="text-rose-400 flex items-center">
                            {category.iconType === "crown" && <Award size={16} />}
                            {category.iconType === "building" && <Building2 size={16} />}
                            {category.iconType === "pen" && <Users size={16} />}
                          </div>
                          <h4 className="text-xs sm:text-sm font-extrabold text-white flex-1">
                            {category.title}
                          </h4>
                          <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                            {category.list.length} {category.list.length === 1 ? "médico" : "médicos"}
                          </span>
                        </div>

                        {/* Category Authors Cards */}
                        <div className="space-y-2.5">
                          {category.list.map((author, idx) => (
                            <div
                              key={author.id || idx}
                              className={`flex gap-3.5 p-3.5 rounded-2xl border transition-all duration-200 items-center ${
                                authorId === author.id
                                  ? "bg-rose-950/20 border-rose-500 shadow-lg shadow-rose-950/30"
                                  : "bg-slate-800/30 hover:bg-slate-800/60 border-slate-800"
                              }`}
                            >
                              <img
                                src={author.foto_url}
                                alt={author.nome}
                                className="w-12 h-12 rounded-full object-cover border-2 border-slate-700 bg-slate-900 shrink-0"
                              />

                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap mb-0.5">
                                  <span className="text-[10.5px] font-black px-2 py-0.5 rounded-md bg-rose-500/10 border border-rose-500/20 text-rose-300 uppercase">
                                    {author.cargo}
                                  </span>
                                  <span className="text-[11px] text-slate-400 font-bold">
                                    #{author.ordem}
                                  </span>
                                </div>

                                <h4 className="text-sm font-extrabold text-white truncate">
                                  {author.nome}
                                </h4>

                                <p className="text-xs text-slate-400 truncate">
                                  {author.instituicao}
                                </p>
                              </div>

                              <div className="flex flex-col gap-1 shrink-0">
                                <button
                                  type="button"
                                  onClick={() => handleEditAuthor(author)}
                                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-bold transition-colors cursor-pointer"
                                >
                                  <Edit3 size={11} className="text-cyan-400" />
                                  <span>Editar</span>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteAuthor(author.id || "", author.nome)}
                                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-rose-950/40 hover:bg-rose-900/60 border border-rose-900/80 text-rose-300 text-xs font-bold transition-colors cursor-pointer"
                                >
                                  <Trash2 size={11} />
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

                <div className="mt-6 text-center border-t border-slate-800 pt-4">
                  <Link
                    href="/pt/home-new#autores"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Visualizar Seção de Autores no Site</span>
                    <ExternalLink size={12} />
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
        <div className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900/95 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl text-slate-100 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center text-sm font-black shadow-lg shadow-purple-950/50 shrink-0">
                  {editAccountFoto ? (
                    <img src={editAccountFoto} alt="Foto" className="w-full h-full object-cover" />
                  ) : editAccountNome ? (
                    editAccountNome.split(" ").slice(0, 2).map((n) => n[0]).join("").toUpperCase()
                  ) : (
                    "SA"
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">
                    Editar Minha Conta
                  </h3>
                  <p className="text-xs text-slate-400">
                    Atualize seus dados institucionais e de acesso
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowEditAccountModal(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveMyAccount} className="space-y-4">
              {/* UPLOAD DE FOTO DE PERFIL */}
              <div className="flex items-center gap-4 p-3.5 bg-slate-950/60 rounded-2xl border border-slate-800">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-purple-950/40 border-2 border-purple-500/40 flex items-center justify-center text-lg font-black text-purple-400 shrink-0">
                  {editAccountFoto ? (
                    <img src={editAccountFoto} alt="Foto" className="w-full h-full object-cover" />
                  ) : (
                    <User size={24} className="text-purple-400" />
                  )}
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Sua Foto de Perfil
                  </label>
                  <div className="flex items-center gap-2 flex-wrap">
                    <label className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold cursor-pointer inline-flex items-center gap-1.5 transition-colors">
                      <Camera size={13} />
                      <span>Carregar Foto</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
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
                        className="px-2.5 py-1.5 rounded-xl bg-rose-950/40 hover:bg-rose-900/60 border border-rose-900/80 text-rose-300 text-xs font-bold transition-colors cursor-pointer"
                      >
                        Remover Foto
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={editAccountNome}
                  onChange={(e) => setEditAccountNome(e.target.value)}
                  placeholder="Ex: Dr. Nome Sobrenome"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/80 text-white placeholder-slate-500 text-sm font-semibold focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  E-mail de Acesso
                </label>
                <input
                  type="email"
                  value={editAccountEmail}
                  onChange={(e) => setEditAccountEmail(e.target.value)}
                  placeholder="seu.email@dominio.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Cargo / Instituição Médica
                </label>
                <input
                  type="text"
                  value={editAccountCargo}
                  onChange={(e) => setEditAccountCargo(e.target.value)}
                  placeholder="Ex: Super Admin • SBC"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="p-3.5 rounded-2xl bg-purple-950/30 border border-purple-900/50 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-black text-purple-400 uppercase tracking-wider">
                    Nível de Acesso no Sistema
                  </div>
                  <div className="text-sm font-bold text-purple-200 mt-0.5 flex items-center gap-1.5">
                    <Shield size={14} className="text-purple-400" />
                    <span>Super Admin (Acesso Total & Irrestrito)</span>
                  </div>
                </div>
                <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-purple-600 text-white">
                  ATIVO
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Nova Senha (Opcional)
                </label>
                <input
                  type="password"
                  value={editAccountSenha}
                  onChange={(e) => setEditAccountSenha(e.target.value)}
                  placeholder="Deixe em branco para manter a atual"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="flex justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setShowEditAccountModal(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-xs font-bold transition-colors cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={savingAccount}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-black shadow-lg shadow-purple-950/50 flex items-center gap-1.5 cursor-pointer transition-all"
                >
                  <Save size={14} />
                  <span>{savingAccount ? "Salvando..." : "Salvar Alterações"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
