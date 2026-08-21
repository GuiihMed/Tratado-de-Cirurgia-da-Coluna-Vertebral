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
  Sun,
  Moon,
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
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("sbc_admin_theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        setTheme(savedTheme);
      }
    } catch (e) {}
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("sbc_admin_theme", next);
    } catch (e) {}
  };

  const isDark = theme === "dark";

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
    // Co-Super Admin cannot edit Super Admin or promote to Super Admin
    if (currentUserRole !== "super_admin" && (usuario.role === "super_admin" || usuario.id === "1")) {
      setFeedback({
        type: "error",
        message: "Permissão Negada: Apenas o Super Admin pode conceder ou alterar contas de Super Admin.",
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
      <div style={{ display: "grid", placeItems: "center", minHeight: "100vh", background: isDark ? "#001026" : "#f1f5f9" }}>
        <div style={{ textAlign: "center", color: isDark ? "#fff" : "#0f172a" }}>
          <img src={isDark ? "/assets/sbc-logo-white.png" : "/assets/sbc-logo.png"} alt="SBC" style={{ height: 48, margin: "0 auto 16px", objectFit: "contain" }} />
          <p style={{ color: isDark ? "#94a3b8" : "#64748b", fontWeight: 600, fontSize: 15 }}>Autenticando acesso editorial...</p>
        </div>
      </div>
    );
  }

  const pageBg = isDark ? "#020617" : "#f8fafc";
  const pageBgImage = isDark
    ? "radial-gradient(at 100% 0%, rgba(244, 63, 94, 0.08) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(14, 165, 233, 0.08) 0px, transparent 50%), radial-gradient(at 50% 50%, rgba(15, 23, 42, 0.6) 0px, transparent 100%)"
    : "radial-gradient(at 100% 0%, rgba(244, 63, 94, 0.04) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(14, 165, 233, 0.05) 0px, transparent 50%), radial-gradient(at 50% 50%, rgba(241, 245, 249, 0.6) 0px, transparent 100%)";
  const sidebarBg = isDark ? "rgba(2, 6, 23, 0.92)" : "rgba(255, 255, 255, 0.96)";
  const sidebarBorder = isDark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid #e2e8f0";
  const topbarBg = isDark ? "rgba(15, 23, 42, 0.8)" : "rgba(255, 255, 255, 0.92)";
  const topbarBorder = isDark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid #e2e8f0";
  const cardBg = isDark ? "rgba(15, 23, 42, 0.65)" : "rgba(255, 255, 255, 0.92)";
  const cardBorder = isDark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid #e2e8f0";
  const textPrimary = isDark ? "#ffffff" : "#0f172a";
  const textSecondary = isDark ? "#cbd5e1" : "#334155";
  const textMuted = isDark ? "#94a3b8" : "#64748b";
  const inputBg = isDark ? "rgba(15, 23, 42, 0.85)" : "#ffffff";
  const inputBorder = isDark ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid #cbd5e1";

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        background: pageBg,
        backgroundImage: pageBgImage,
        color: textPrimary,
        fontFamily: "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Background Ambient Glows */}
      <div style={{ position: "fixed", top: -160, right: -160, width: 380, height: 380, borderRadius: "50%", background: "rgba(244, 63, 94, 0.08)", filter: "blur(120px)", pointerEvents: "none" }} />
      <div style={{ position: "fixed", bottom: -160, left: -160, width: 380, height: 380, borderRadius: "50%", background: "rgba(14, 165, 233, 0.08)", filter: "blur(120px)", pointerEvents: "none" }} />

      {/* Mobile Sidebar Backdrop */}
      {mobileSidebarOpen && (
        <div
          onClick={() => setMobileSidebarOpen(false)}
          style={{ position: "fixed", inset: 0, background: "rgba(0, 0, 0, 0.7)", backdropFilter: "blur(10px)", zIndex: 90 }}
        />
      )}

      {/* ================= LEFT SIDEBAR (FIXED POSITION) ================= */}
      <aside
        className={mobileSidebarOpen ? "admin-sidebar-mobile-open" : "admin-sidebar-mobile-closed"}
        style={{
          width: 280,
          background: sidebarBg,
          color: textPrimary,
          borderRight: sidebarBorder,
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          height: "100vh",
          zIndex: 100,
          overflow: "hidden",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow: isDark ? "none" : "4px 0 20px rgba(0, 30, 80, 0.03)",
          transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Brand Header */}
        <div style={{ padding: "20px 18px 16px", borderBottom: sidebarBorder, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img
              src={isDark ? "/assets/sbc-logo-white.png" : "/assets/sbc-logo.png"}
              alt="SBC"
              style={{ height: 36, width: "auto", objectFit: "contain" }}
            />
            <div>
              <div style={{ fontSize: 14.5, fontWeight: 700, color: textPrimary, lineHeight: 1.2, letterSpacing: "-0.01em" }}>
                Tratado de Coluna
              </div>
              <div style={{ fontSize: 11, color: textMuted, display: "flex", alignItems: "center", gap: 5, marginTop: 2 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f43f5e" }} />
                <span>Painel Executivo</span>
              </div>
            </div>
          </div>

          {/* Close Sidebar button on mobile */}
          <button
            type="button"
            onClick={() => setMobileSidebarOpen(false)}
            className="lg:hidden flex items-center justify-center w-8 h-8 rounded-lg text-slate-400 hover:text-white bg-white/5 border border-white/10"
            aria-label="Fechar menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* User Connected Card */}
        <div style={{ padding: "16px 20px", borderBottom: sidebarBorder }}>
          <div
            onClick={handleOpenEditAccount}
            title="Clique para editar sua conta"
            style={{
              padding: 12,
              borderRadius: 16,
              background: isDark ? "rgba(255, 255, 255, 0.04)" : "#f1f5f9",
              border: isDark ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid #e2e8f0",
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
                fontWeight: 700,
                color: "#fff",
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
              <div style={{ fontSize: 13, fontWeight: 700, color: textPrimary, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {currentUserName || "Administrador Geral"}
              </div>
              <div style={{ fontSize: 10.5, color: isDark ? "#38bdf8" : "#0284c7", fontWeight: 700, marginTop: 1, display: "flex", alignItems: "center", gap: 4 }}>
                {currentUserRole === "super_admin" ? (
                  <>
                    <Crown size={12} color="#f59e0b" />
                    <span>Super Admin</span>
                  </>
                ) : (
                  <>
                    <Shield size={12} color="#0284c7" />
                    <span>Editor SBC</span>
                  </>
                )}
              </div>
            </div>
            <Settings size={14} color={textMuted} />
          </div>
        </div>

        {/* Navigation Categories */}
        <div style={{ padding: "20px 14px", flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 22 }}>
          {/* Category 1: VISÃO GERAL */}
          <div>
            <div style={{ fontSize: 10.5, fontWeight: 700, color: textMuted, textTransform: "uppercase", letterSpacing: "0.08em", padding: "0 10px", marginBottom: 8 }}>
              Visão Geral
            </div>
            <button
              onClick={() => switchTab("dashboard")}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 14px",
                borderRadius: 12,
                border: activeTab === "dashboard" ? "1px solid rgba(255, 255, 255, 0.15)" : "none",
                background: activeTab === "dashboard" ? "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)" : "transparent",
                color: activeTab === "dashboard" ? "#ffffff" : textMuted,
                fontSize: 13.5,
                fontWeight: activeTab === "dashboard" ? 800 : 600,
                cursor: "pointer",
                boxShadow: activeTab === "dashboard" ? "0 6px 20px rgba(37, 99, 235, 0.35)" : "none",
                textAlign: "left",
                transition: "all 0.2s ease",
              }}
            >
              <Layers size={18} />
              <span style={{ flex: 1 }}>Dashboard &amp; Métricas</span>
            </button>
          </div>

          {/* Category 2: CONTEÚDO EDITORIAL */}
          <div>
            <div style={{ fontSize: 10.5, fontWeight: 700, color: textMuted, textTransform: "uppercase", letterSpacing: "0.08em", padding: "0 10px", marginBottom: 8 }}>
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
                  borderRadius: 12,
                  border: activeTab === "capitulos" ? "1px solid rgba(255, 255, 255, 0.15)" : "none",
                  background: activeTab === "capitulos" ? "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)" : "transparent",
                  color: activeTab === "capitulos" ? "#ffffff" : textMuted,
                  fontSize: 13.5,
                  fontWeight: activeTab === "capitulos" ? 800 : 600,
                  cursor: "pointer",
                  boxShadow: activeTab === "capitulos" ? "0 6px 20px rgba(2, 132, 199, 0.35)" : "none",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                }}
              >
                <BookOpen size={18} />
                <span style={{ flex: 1 }}>Capítulos</span>
                <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 999, background: activeTab === "capitulos" ? "rgba(255, 255, 255, 0.2)" : isDark ? "rgba(255, 255, 255, 0.08)" : "#e2e8f0", color: activeTab === "capitulos" ? "#fff" : textMuted }}>
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
                  borderRadius: 12,
                  border: activeTab === "autores" ? "1px solid rgba(255, 255, 255, 0.15)" : "none",
                  background: activeTab === "autores" ? "linear-gradient(135deg, #e11d48 0%, #be123c 100%)" : "transparent",
                  color: activeTab === "autores" ? "#ffffff" : textMuted,
                  fontSize: 13.5,
                  fontWeight: activeTab === "autores" ? 800 : 600,
                  cursor: "pointer",
                  boxShadow: activeTab === "autores" ? "0 6px 20px rgba(225, 29, 72, 0.35)" : "none",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                }}
              >
                <Users size={18} />
                <span style={{ flex: 1 }}>Autores &amp; Editores</span>
                <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 999, background: activeTab === "autores" ? "rgba(255, 255, 255, 0.2)" : isDark ? "rgba(255, 255, 255, 0.08)" : "#e2e8f0", color: activeTab === "autores" ? "#fff" : textMuted }}>
                  {authors.length}
                </span>
              </button>
            </div>
          </div>

          {/* Category 3: CONTROLE DE ACESSO */}
          <div>
            <div style={{ fontSize: 10.5, fontWeight: 700, color: textMuted, textTransform: "uppercase", letterSpacing: "0.08em", padding: "0 10px", marginBottom: 8 }}>
              Controle &amp; Segurança
            </div>
            <button
              onClick={() => switchTab("usuarios")}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 14px",
                borderRadius: 12,
                border: activeTab === "usuarios" ? "1px solid rgba(255, 255, 255, 0.15)" : "none",
                background: activeTab === "usuarios" ? "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)" : "transparent",
                color: activeTab === "usuarios" ? "#ffffff" : textMuted,
                fontSize: 13.5,
                fontWeight: activeTab === "usuarios" ? 800 : 600,
                cursor: "pointer",
                boxShadow: activeTab === "usuarios" ? "0 6px 20px rgba(124, 58, 237, 0.35)" : "none",
                textAlign: "left",
                transition: "all 0.2s ease",
              }}
            >
              <ShieldCheck size={18} />
              <span style={{ flex: 1 }}>Usuários &amp; Acessos</span>
              {usuarios.filter((u) => u.status === "pendente").length > 0 && (
                <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 999, background: "#f43f5e", color: "#fff" }}>
                  {usuarios.filter((u) => u.status === "pendente").length}
                </span>
              )}
            </button>
          </div>


        </div>

        {/* Sidebar Footer (FIX FOR IMAGE 2) */}
        <div style={{ padding: "16px 20px", borderTop: sidebarBorder }}>
          <button
            onClick={handleLogout}
            title="Encerrar sessão"
            style={{
              width: "100%",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "10px 16px",
              borderRadius: 12,
              background: isDark ? "rgba(225, 29, 72, 0.12)" : "#ffe4e6",
              border: isDark ? "1px solid rgba(225, 29, 72, 0.3)" : "1px solid #fecdd3",
              color: isDark ? "#fda4af" : "#be123c",
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <LogOut size={14} />
            <span>Encerrar Sessão</span>
          </button>
        </div>
      </aside>

      {/* ================= RIGHT MAIN WRAPPER (INDEPENDENT SCROLL) ================= */}
      <div
        className="admin-main-content-wrapper"
        style={{
          marginLeft: 280,
          width: "calc(100% - 280px)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* ================= TOPBAR (RESPONSIVO COM HAMBURGER MENU) ================= */}
        <header
          className="h-16 sticky top-0 z-40 flex items-center justify-between px-3 sm:px-6 lg:px-8 backdrop-blur-xl transition-all"
          style={{
            background: topbarBg,
            borderBottom: topbarBorder,
            boxShadow: isDark ? "0 4px 20px rgba(0, 0, 0, 0.2)" : "0 2px 10px rgba(0, 30, 80, 0.03)",
          }}
        >
          {/* Left: Mobile Hamburger Toggle + Breadcrumbs */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            {/* Hamburger Button for Mobile */}
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-xl border transition-all active:scale-95 flex-shrink-0"
              style={{
                background: isDark ? "rgba(255, 255, 255, 0.08)" : "#f1f5f9",
                borderColor: isDark ? "rgba(255, 255, 255, 0.15)" : "#cbd5e1",
                color: textPrimary,
              }}
              aria-label="Abrir Menu Lateral"
            >
              <Layers size={18} />
            </button>

            {/* Breadcrumb Title */}
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-400 min-w-0">
              <span className="hidden sm:inline font-bold uppercase tracking-wider text-[11px]">
                SBC Admin
              </span>
              <span className="hidden sm:inline">/</span>
              <strong className="text-sm font-bold truncate max-w-[140px] sm:max-w-[240px] md:max-w-none" style={{ color: textPrimary }}>
                {activeTab === "dashboard"
                  ? "Dashboard Executivo"
                  : activeTab === "capitulos"
                  ? "Capítulos (109)"
                  : activeTab === "autores"
                  ? "Autores & Editores"
                  : "Usuários & Acessos"}
              </strong>
            </div>
          </div>

          {/* Right: Topbar Actions (Theme Toggle + Public Link) */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              title={isDark ? "Alternar para Tema Claro" : "Alternar para Tema Escuro"}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all active:scale-95"
              style={{
                background: isDark ? "rgba(255, 255, 255, 0.08)" : "#f1f5f9",
                borderColor: isDark ? "rgba(255, 255, 255, 0.15)" : "#cbd5e1",
                color: textPrimary,
              }}
            >
              {isDark ? <Sun size={15} color="#f59e0b" /> : <Moon size={15} color="#6366f1" />}
              <span className="hidden md:inline">{isDark ? "Tema Claro" : "Tema Escuro"}</span>
            </button>

            {/* Public Link Button */}
            <Link
              href="/pt/indice-new"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all active:scale-95"
              style={{
                background: isDark ? "rgba(255, 255, 255, 0.08)" : "#f1f5f9",
                borderColor: isDark ? "rgba(255, 255, 255, 0.15)" : "#cbd5e1",
                color: textPrimary,
                textDecoration: "none",
              }}
            >
              <Globe size={14} color={isDark ? "#38bdf8" : "#0284c7"} />
              <span className="hidden sm:inline">Índice Público</span>
              <ExternalLink size={12} color={textMuted} className="hidden sm:inline" />
            </Link>
          </div>
        </header>

        {/* ================= MAIN CONTENT CONTAINER ================= */}
        <main className="p-3 sm:p-6 lg:p-8 pb-24 md:pb-12 max-w-[1440px] w-full mx-auto box-border">
          {/* Feedback Alert */}
          {feedback.message && (
            <div
              style={{
                padding: "16px 20px",
                borderRadius: 14,
                marginBottom: 24,
                fontSize: 14,
                fontWeight: 700,
                background: feedback.type === "success" ? (isDark ? "rgba(16, 185, 129, 0.15)" : "#ecfdf5") : (isDark ? "rgba(225, 29, 72, 0.15)" : "#fef2f2"),
                color: feedback.type === "success" ? (isDark ? "#6ee7b7" : "#065f46") : (isDark ? "#fda4af" : "#991b1b"),
                border: feedback.type === "success" ? "1px solid #10b981" : "1px solid #f43f5e",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
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
                  fontWeight: 700,
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
              theme={theme}
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

              {/* ================= TABELA DE CAPÍTULOS (FIX FOR IMAGE 4) ================= */}
              <section
                style={{
                  borderRadius: 24,
                  background: cardBg,
                  border: cardBorder,
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  padding: "28px 32px",
                  boxShadow: isDark ? "0 20px 45px rgba(0, 0, 0, 0.5)" : "0 10px 30px rgba(0, 30, 80, 0.04)",
                  marginTop: 32,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
                  <div>
                    <h3 style={{ fontSize: 20, fontWeight: 700, color: textPrimary, letterSpacing: "-0.02em", margin: 0, display: "flex", alignItems: "center", gap: 10 }}>
                      <BookOpen size={22} color="#0284c7" />
                      <span>Catálogo Geral da Obra ({displayedChapters.length} de {chapters.length} Capítulos)</span>
                    </h3>
                    <p style={{ fontSize: 13, color: textMuted, margin: "4px 0 0" }}>
                      Navegue por seções, busque títulos ou edite o conteúdo de qualquer capítulo em tempo real.
                    </p>
                  </div>

                  {/* Filtros e Busca */}
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                    <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                      <div style={{ position: "absolute", left: 12, color: textMuted, display: "flex", alignItems: "center", pointerEvents: "none" }}>
                        <Search size={15} />
                      </div>
                      <input
                        type="text"
                        placeholder="Buscar por título ou autor..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                          padding: "9px 14px 9px 36px",
                          borderRadius: 12,
                          background: inputBg,
                          border: inputBorder,
                          color: textPrimary,
                          fontSize: 13,
                          width: 260,
                          outline: "none",
                        }}
                      />
                    </div>

                    <select
                      value={filterSecao}
                      onChange={(e) => setFilterSecao(e.target.value)}
                      style={{
                        padding: "9px 14px",
                        borderRadius: 12,
                        background: inputBg,
                        border: inputBorder,
                        color: textPrimary,
                        fontSize: 13,
                        fontWeight: 700,
                        outline: "none",
                        cursor: "pointer",
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

                {/* Tabela de Capítulos */}
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: 13.5, color: textSecondary }}>
                    <thead>
                      <tr style={{ borderBottom: isDark ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid #e2e8f0", color: textMuted, fontSize: 11.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                        <th style={{ padding: "12px 14px", width: 50 }}>#</th>
                        <th style={{ padding: "12px 14px" }}>Título do Capítulo</th>
                        <th style={{ padding: "12px 14px", width: 190 }}>Seção</th>
                        <th style={{ padding: "12px 14px", width: 170 }}>Autores</th>
                        <th style={{ padding: "12px 14px", width: 110 }}>Status</th>
                        <th style={{ padding: "12px 14px", width: 180, textAlign: "right" }}>Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loadingList ? (
                        <tr>
                          <td colSpan={6} style={{ padding: "40px 20px", textAlign: "center", color: textMuted, fontSize: 14 }}>
                            Carregando catálogo de capítulos...
                          </td>
                        </tr>
                      ) : displayedChapters.length === 0 ? (
                        <tr>
                          <td colSpan={6} style={{ padding: "40px 20px", textAlign: "center", color: textMuted, fontSize: 14 }}>
                            Nenhum capítulo encontrado para o filtro selecionado.
                          </td>
                        </tr>
                      ) : (
                        displayedChapters.map((c) => {
                          const sec = SECOES.find((s) => s.id === c.secao_id);
                          return (
                            <tr
                              key={c.numero}
                              style={{
                                borderBottom: isDark ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid #f1f5f9",
                                transition: "background 0.15s ease",
                              }}
                            >
                              <td style={{ padding: "14px", fontWeight: 700, color: "#f43f5e" }}>
                                {c.numero}
                              </td>
                              <td style={{ padding: "14px" }}>
                                <strong style={{ color: textPrimary, fontWeight: 700 }}>{c.titulo_pt}</strong>
                                {c.titulo_en && (
                                  <div style={{ fontSize: 12, color: textMuted, fontStyle: "italic", marginTop: 2 }}>
                                    EN: {c.titulo_en}
                                  </div>
                                )}
                              </td>
                              <td style={{ padding: "14px", fontSize: 12.5, fontWeight: 700 }}>
                                <span
                                  style={{
                                    display: "inline-block",
                                    padding: "3px 9px",
                                    borderRadius: 6,
                                    background: isDark ? "rgba(59, 130, 246, 0.15)" : "#eff6ff",
                                    border: isDark ? "1px solid rgba(59, 130, 246, 0.3)" : "1px solid #bfdbfe",
                                    color: isDark ? "#60a5fa" : "#1d4ed8",
                                  }}
                                >
                                  S{c.secao_id} • {sec?.titulo_pt || `Seção ${c.secao_id}`}
                                </span>
                              </td>
                              <td style={{ padding: "14px", fontSize: 12.5, color: textMuted, fontWeight: 500 }}>
                                {c.autores || "Corpo Editorial SBC"}
                              </td>
                              <td style={{ padding: "14px" }}>
                                <span
                                  style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    padding: "3px 10px",
                                    borderRadius: 999,
                                    fontSize: 11,
                                    fontWeight: 700,
                                    background: c.status === "rascunho" ? (isDark ? "rgba(245, 158, 11, 0.15)" : "#fffbeb") : (isDark ? "rgba(16, 185, 129, 0.15)" : "#f0fdf4"),
                                    border: c.status === "rascunho" ? "1px solid #f59e0b" : "1px solid #10b981",
                                    color: c.status === "rascunho" ? "#f59e0b" : "#10b981",
                                  }}
                                >
                                  {c.status === "rascunho" ? "Rascunho" : "Publicado"}
                                </span>
                              </td>
                              <td style={{ padding: "14px", textAlign: "right" }}>
                                <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "flex-end", gap: 6, whiteSpace: "nowrap" }}>
                                  <Link
                                    href={`/admin/editar/${c.numero}`}
                                    title="Editar Capítulo"
                                    style={{
                                      display: "inline-flex",
                                      alignItems: "center",
                                      gap: 5,
                                      padding: "6px 11px",
                                      borderRadius: 8,
                                      background: isDark ? "rgba(255, 255, 255, 0.08)" : "#f1f5f9",
                                      border: isDark ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid #cbd5e1",
                                      color: textPrimary,
                                      fontSize: 12,
                                      fontWeight: 700,
                                      cursor: "pointer",
                                    }}
                                  >
                                    <Edit3 size={13} color="#0284c7" />
                                    <span>Editar</span>
                                  </Link>
                                  <Link
                                    href={`/pt/capitulo/${c.numero}`}
                                    target="_blank"
                                    title="Abrir no Leitor"
                                    style={{
                                      display: "inline-flex",
                                      alignItems: "center",
                                      gap: 5,
                                      padding: "6px 11px",
                                      borderRadius: 8,
                                      background: isDark ? "rgba(2, 132, 199, 0.15)" : "#e0f2fe",
                                      border: isDark ? "1px solid rgba(2, 132, 199, 0.3)" : "1px solid #bae6fd",
                                      color: isDark ? "#38bdf8" : "#0284c7",
                                      fontSize: 12,
                                      fontWeight: 700,
                                      textDecoration: "none",
                                    }}
                                  >
                                    <Eye size={13} />
                                    <span>Ver</span>
                                  </Link>
                                  <button
                                    type="button"
                                    onClick={() => handleDelete(c.numero, c.titulo_pt)}
                                    title="Excluir Capítulo"
                                    style={{
                                      display: "inline-flex",
                                      alignItems: "center",
                                      padding: "6px 9px",
                                      borderRadius: 8,
                                      background: isDark ? "rgba(225, 29, 72, 0.15)" : "#ffe4e6",
                                      border: isDark ? "1px solid rgba(225, 29, 72, 0.3)" : "1px solid #fecdd3",
                                      color: isDark ? "#fda4af" : "#be123c",
                                      fontSize: 12,
                                      cursor: "pointer",
                                    }}
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

          {/* ================= ABA 2: GESTÃO DO CORPO EDITORIAL & AUTORES (FIX FOR IMAGE 5) ================= */}
          {activeTab === "autores" && (() => {
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
                list: editoresGerais,
              },
              {
                id: "editores_associados",
                title: "Editores Associados & Coordenadores de Seção",
                iconType: "building",
                list: editoresAssociados,
              },
              {
                id: "autores_colaboradores",
                title: "Autores de Capítulos & Colaboradores Científicos",
                iconType: "pen",
                list: autoresColaboradores,
              },
            ].filter((cat) => {
              if (authorCategoryFilter === "todos") return true;
              return authorCategoryFilter === cat.id;
            });

            return (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: 32, alignItems: "flex-start" }}>
                {/* Form de Cadastro / Edição de Autor */}
                <section
                  style={{
                    borderRadius: 24,
                    background: cardBg,
                    border: cardBorder,
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    padding: "28px 32px",
                    boxShadow: isDark ? "0 20px 45px rgba(0, 0, 0, 0.5)" : "0 10px 30px rgba(0, 30, 80, 0.04)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24, borderBottom: isDark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid #e2e8f0", paddingBottom: 18 }}>
                    <div>
                      <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px", borderRadius: 6, background: "rgba(225, 29, 72, 0.12)", border: "1px solid rgba(225, 29, 72, 0.3)", color: "#f43f5e", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
                        <Users size={13} />
                        <span>Gestão do Corpo Editorial</span>
                      </div>
                      <h2 style={{ fontSize: 20, fontWeight: 700, color: textPrimary, letterSpacing: "-0.02em", margin: "0 0 4px" }}>
                        {authorId ? `Editando: ${authorNome}` : "Cadastrar Novo Autor / Editor"}
                      </h2>
                      <p style={{ fontSize: 13, color: textMuted, margin: 0 }}>
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
                        borderRadius: 10,
                        background: isDark ? "rgba(255, 255, 255, 0.08)" : "#f1f5f9",
                        border: isDark ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid #cbd5e1",
                        color: textPrimary,
                        fontSize: 12,
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      <Plus size={13} />
                      <span>Novo Autor</span>
                    </button>
                  </div>

                  <form onSubmit={handleAuthorSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <input type="hidden" name="id" value={authorId} />

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 90px", gap: 16 }}>
                      <div>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted, marginBottom: 6 }}>
                          Nome Completo do Médico / Autor *
                        </label>
                        <input
                          type="text"
                          name="nome"
                          value={authorNome}
                          onChange={(e) => setAuthorNome(e.target.value)}
                          placeholder="Ex: Prof. Dr. Edson Pudles"
                          required
                          style={{
                            width: "100%",
                            padding: "10px 14px",
                            borderRadius: 12,
                            background: inputBg,
                            border: inputBorder,
                            color: textPrimary,
                            fontSize: 13.5,
                            fontWeight: 700,
                            outline: "none",
                            boxSizing: "border-box",
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted, marginBottom: 6 }}>
                          Ordem #
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
                            padding: "10px 8px",
                            borderRadius: 12,
                            background: inputBg,
                            border: inputBorder,
                            color: textPrimary,
                            textAlign: "center",
                            fontSize: 14,
                            fontWeight: 700,
                            outline: "none",
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                    </div>

                    {/* Cargo Selection & Chips */}
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted }}>
                          Cargo / Título Oficial no Tratado *
                        </label>
                        <span style={{ fontSize: 11, color: textMuted }}>
                          Atalhos rápidos:
                        </span>
                      </div>

                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
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
                            style={{
                              padding: "4px 10px",
                              borderRadius: 8,
                              fontSize: 11.5,
                              fontWeight: 700,
                              cursor: "pointer",
                              background: authorCargo === preset.value ? (isDark ? "rgba(225, 29, 72, 0.25)" : "#ffe4e6") : (isDark ? "rgba(255, 255, 255, 0.05)" : "#f1f5f9"),
                              border: authorCargo === preset.value ? "1px solid #f43f5e" : isDark ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid #e2e8f0",
                              color: authorCargo === preset.value ? "#f43f5e" : textSecondary,
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
                        placeholder="Ex: Editor-Chefe / SBC"
                        required
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          borderRadius: 12,
                          background: inputBg,
                          border: inputBorder,
                          color: textPrimary,
                          fontSize: 13.5,
                          fontWeight: 600,
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                      <div>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted, marginBottom: 6 }}>
                          Instituição / Universidade
                        </label>
                        <input
                          type="text"
                          name="instituicao"
                          value={authorInstituicao}
                          onChange={(e) => setAuthorInstituicao(e.target.value)}
                          placeholder="Ex: FMRP-USP"
                          style={{
                            width: "100%",
                            padding: "10px 14px",
                            borderRadius: 12,
                            background: inputBg,
                            border: inputBorder,
                            color: textPrimary,
                            fontSize: 13,
                            outline: "none",
                            boxSizing: "border-box",
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted, marginBottom: 6 }}>
                          Destaque Principal
                        </label>
                        <input
                          type="text"
                          name="destaque"
                          value={authorDestaque}
                          onChange={(e) => setAuthorDestaque(e.target.value)}
                          placeholder="Ex: Coordenação de 109 Capítulos"
                          style={{
                            width: "100%",
                            padding: "10px 14px",
                            borderRadius: 12,
                            background: inputBg,
                            border: inputBorder,
                            color: textPrimary,
                            fontSize: 13,
                            outline: "none",
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                    </div>

                    {/* Foto Picker com Prévia e Upload (IMAGE 5 FIX: STRICTLY CONSTRAINED PHOTO) */}
                    <div style={{ padding: 18, borderRadius: 16, background: isDark ? "rgba(2, 6, 23, 0.6)" : "#f8fafc", border: isDark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid #e2e8f0" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted }}>
                          Foto Oficial do Autor *
                        </label>
                        <span style={{ fontSize: 11, color: textMuted }}>
                          Upload ou seleção rápida
                        </span>
                      </div>

                      <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                        <img
                          src={authorFotoUrl}
                          alt="Prévia da foto"
                          style={{
                            width: 64,
                            height: 64,
                            borderRadius: "50%",
                            objectFit: "cover",
                            border: "2px solid #e11d48",
                            background: "#0f172a",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                            flexShrink: 0,
                          }}
                        />

                        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                            <label style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 10, background: isDark ? "rgba(255, 255, 255, 0.08)" : "#f1f5f9", border: isDark ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid #cbd5e1", color: textPrimary, fontSize: 12, fontWeight: 700, cursor: "pointer", flexShrink: 0 }}>
                              <Camera size={14} color="#f43f5e" />
                              <span>Carregar Foto</span>
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
                                padding: "8px 12px",
                                borderRadius: 10,
                                background: inputBg,
                                border: inputBorder,
                                color: textPrimary,
                                fontSize: 12,
                                outline: "none",
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Quick Photo Presets */}
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center", marginTop: 12, paddingTop: 10, borderTop: isDark ? "1px solid rgba(255, 255, 255, 0.06)" : "1px solid #e2e8f0" }}>
                        <span style={{ fontSize: 11, color: textMuted, fontWeight: 700 }}>
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
                            style={{
                              fontSize: 11.5,
                              padding: "4px 9px",
                              borderRadius: 8,
                              border: authorFotoUrl === preset.url ? "1px solid #f43f5e" : isDark ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid #cbd5e1",
                              fontWeight: 600,
                              cursor: "pointer",
                              background: authorFotoUrl === preset.url ? (isDark ? "rgba(225, 29, 72, 0.2)" : "#ffe4e6") : (isDark ? "rgba(255, 255, 255, 0.05)" : "#ffffff"),
                              color: authorFotoUrl === preset.url ? "#f43f5e" : textSecondary,
                            }}
                          >
                            {preset.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted, marginBottom: 6 }}>
                        Mini-Currículo e Trajetória Acadêmica *
                      </label>
                      <textarea
                        name="bio_pt"
                        value={authorBioPt}
                        onChange={(e) => setAuthorBioPt(e.target.value)}
                        rows={4}
                        placeholder="Ex: Professor Titular do Departamento de Ortopedia da Faculdade de Medicina de Ribeirão Preto (USP)..."
                        required
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          borderRadius: 12,
                          background: inputBg,
                          border: inputBorder,
                          color: textPrimary,
                          fontSize: 13,
                          lineHeight: 1.6,
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted, marginBottom: 6 }}>
                        Especialidades &amp; Áreas de Foco (separadas por vírgula)
                      </label>
                      <input
                        type="text"
                        name="especialidades"
                        value={authorEspecialidades}
                        onChange={(e) => setAuthorEspecialidades(e.target.value)}
                        placeholder="Ex: Deformidades Complexas, Fixação Pedicular"
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          borderRadius: 12,
                          background: inputBg,
                          border: inputBorder,
                          color: textPrimary,
                          fontSize: 13,
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isPending}
                      style={{
                        width: "100%",
                        padding: "13px 20px",
                        borderRadius: 12,
                        background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
                        border: "none",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: 14,
                        boxShadow: "0 8px 24px rgba(225, 29, 72, 0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        cursor: "pointer",
                      }}
                    >
                      <Save size={16} />
                      <span>{isPending ? "Salvando informações..." : "Salvar Informações do Autor"}</span>
                    </button>
                  </form>
                </section>

                {/* Listagem dos Autores Cadastrados (IMAGE 5 FIX) */}
                <section
                  style={{
                    borderRadius: 24,
                    background: cardBg,
                    border: cardBorder,
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    padding: "28px 32px",
                    boxShadow: isDark ? "0 20px 45px rgba(0, 0, 0, 0.5)" : "0 10px 30px rgba(0, 30, 80, 0.04)",
                  }}
                >
                  <div style={{ marginBottom: 24, borderBottom: isDark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid #e2e8f0", paddingBottom: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                      <h3 style={{ fontSize: 20, fontWeight: 700, color: textPrimary, letterSpacing: "-0.02em", margin: 0, display: "flex", alignItems: "center", gap: 8 }}>
                        <Users size={20} color="#f43f5e" />
                        <span>Corpo Editorial Cadastrado ({authors.length})</span>
                      </h3>
                    </div>
                    <p style={{ fontSize: 13, color: textMuted, margin: "0 0 16px" }}>
                      Autores e editores organizados por categoria hierárquica e exibidos no site.
                    </p>

                    {/* Filter Pills */}
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
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
                          style={{
                            padding: "5px 14px",
                            borderRadius: 999,
                            fontSize: 12,
                            fontWeight: 700,
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            background: authorCategoryFilter === f.id ? "#e11d48" : isDark ? "rgba(255, 255, 255, 0.06)" : "#f1f5f9",
                            border: authorCategoryFilter === f.id ? "1px solid #f43f5e" : isDark ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid #e2e8f0",
                            color: authorCategoryFilter === f.id ? "#ffffff" : textMuted,
                          }}
                        >
                          {f.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Categorized List with Beautiful Dividers */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    {filteredCategories.map((category) => {
                      if (category.list.length === 0) return null;

                      return (
                        <div key={category.id} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                          {/* Category Header / Divider */}
                          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderRadius: 12, background: isDark ? "rgba(255, 255, 255, 0.04)" : "#f1f5f9", border: isDark ? "1px solid rgba(255, 255, 255, 0.06)" : "1px solid #e2e8f0" }}>
                            <div style={{ color: "#f43f5e", display: "flex", alignItems: "center" }}>
                              {category.iconType === "crown" && <Award size={16} />}
                              {category.iconType === "building" && <Building2 size={16} />}
                              {category.iconType === "pen" && <Users size={16} />}
                            </div>
                            <h4 style={{ fontSize: 13, fontWeight: 700, color: textPrimary, margin: 0, flex: 1 }}>
                              {category.title}
                            </h4>
                            <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 999, background: isDark ? "rgba(255, 255, 255, 0.1)" : "#e2e8f0", color: textMuted }}>
                              {category.list.length} {category.list.length === 1 ? "médico" : "médicos"}
                            </span>
                          </div>

                          {/* Category Authors Cards (IMAGE 5 FIX: STRICTLY 52px CIRCULAR AVATARS) */}
                          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            {category.list.map((author, idx) => (
                              <div
                                key={author.id || idx}
                                style={{
                                  display: "flex",
                                  gap: 14,
                                  padding: 14,
                                  borderRadius: 16,
                                  alignItems: "center",
                                  background: authorId === author.id ? (isDark ? "rgba(225, 29, 72, 0.15)" : "#fff1f2") : isDark ? "rgba(255, 255, 255, 0.03)" : "#f8fafc",
                                  border: authorId === author.id ? "1px solid #f43f5e" : isDark ? "1px solid rgba(255, 255, 255, 0.06)" : "1px solid #e2e8f0",
                                }}
                              >
                                <img
                                  src={author.foto_url}
                                  alt={author.nome}
                                  style={{
                                    width: 52,
                                    height: 52,
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    border: "2px solid rgba(255, 255, 255, 0.2)",
                                    background: "#0f172a",
                                    flexShrink: 0,
                                  }}
                                />

                                <div style={{ flex: 1, minWidth: 0 }}>
                                  <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", marginBottom: 2 }}>
                                    <span style={{ fontSize: 10.5, fontWeight: 700, padding: "2px 7px", borderRadius: 6, background: "rgba(225, 29, 72, 0.15)", border: "1px solid rgba(225, 29, 72, 0.3)", color: "#f43f5e", textTransform: "uppercase" }}>
                                      {author.cargo}
                                    </span>
                                    <span style={{ fontSize: 11, color: textMuted, fontWeight: 700 }}>
                                      #{author.ordem}
                                    </span>
                                  </div>

                                  <h4 style={{ fontSize: 14, fontWeight: 700, color: textPrimary, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                    {author.nome}
                                  </h4>

                                  <p style={{ fontSize: 12, color: textMuted, margin: "2px 0 0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                    {author.instituicao}
                                  </p>
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", gap: 5, flexShrink: 0 }}>
                                  <button
                                    type="button"
                                    onClick={() => handleEditAuthor(author)}
                                    style={{
                                      display: "inline-flex",
                                      alignItems: "center",
                                      gap: 4,
                                      padding: "5px 10px",
                                      borderRadius: 8,
                                      background: isDark ? "rgba(255, 255, 255, 0.08)" : "#f1f5f9",
                                      border: isDark ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid #cbd5e1",
                                      color: textPrimary,
                                      fontSize: 11.5,
                                      fontWeight: 700,
                                      cursor: "pointer",
                                    }}
                                  >
                                    <Edit3 size={11} color="#0284c7" />
                                    <span>Editar</span>
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteAuthor(author.id || "", author.nome)}
                                    style={{
                                      display: "inline-flex",
                                      alignItems: "center",
                                      gap: 4,
                                      padding: "5px 10px",
                                      borderRadius: 8,
                                      background: isDark ? "rgba(225, 29, 72, 0.15)" : "#ffe4e6",
                                      border: isDark ? "1px solid rgba(225, 29, 72, 0.3)" : "1px solid #fecdd3",
                                      color: isDark ? "#fda4af" : "#be123c",
                                      fontSize: 11.5,
                                      fontWeight: 700,
                                      cursor: "pointer",
                                    }}
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

                  <div style={{ marginTop: 24, textAlign: "center", borderTop: isDark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid #e2e8f0", paddingTop: 16 }}>
                    <Link
                      href="/pt/home-new#autores"
                      target="_blank"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        fontSize: 12.5,
                        fontWeight: 700,
                        color: isDark ? "#38bdf8" : "#0284c7",
                        textDecoration: "none",
                      }}
                    >
                      <span>Visualizar Seção de Autores no Site</span>
                      <ExternalLink size={13} />
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
        <div style={{ position: "fixed", inset: 0, background: "rgba(0, 0, 0, 0.8)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, padding: 16 }}>
          <div style={{ background: isDark ? "rgba(15, 23, 42, 0.95)" : "#ffffff", border: isDark ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid #cbd5e1", borderRadius: 24, maxWidth: 520, width: "100%", padding: 32, boxShadow: "0 25px 60px rgba(0, 0, 0, 0.6)", color: textPrimary }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", overflow: "hidden", background: "linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700, flexShrink: 0 }}>
                  {editAccountFoto ? (
                    <img src={editAccountFoto} alt="Foto" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : editAccountNome ? (
                    editAccountNome.split(" ").slice(0, 2).map((n) => n[0]).join("").toUpperCase()
                  ) : (
                    "SA"
                  )}
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: textPrimary, margin: 0 }}>
                    Editar Minha Conta
                  </h3>
                  <p style={{ fontSize: 12, color: textMuted, margin: "2px 0 0" }}>
                    Atualize seus dados institucionais e de acesso
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowEditAccountModal(false)}
                style={{ width: 32, height: 32, borderRadius: "50%", background: isDark ? "rgba(255, 255, 255, 0.08)" : "#f1f5f9", border: "none", color: textMuted, cursor: "pointer", fontWeight: 700, fontSize: 14 }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveMyAccount} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* UPLOAD DE FOTO DE PERFIL */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, padding: 14, background: isDark ? "rgba(2, 6, 23, 0.6)" : "#f8fafc", borderRadius: 16, border: isDark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid #e2e8f0" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", overflow: "hidden", background: "rgba(124, 58, 237, 0.2)", border: "2px solid #7c3aed", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {editAccountFoto ? (
                    <img src={editAccountFoto} alt="Foto" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : (
                    <User size={24} color="#7c3aed" />
                  )}
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted, marginBottom: 4 }}>
                    Sua Foto de Perfil
                  </label>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                    <label style={{ padding: "6px 12px", borderRadius: 8, background: "#7c3aed", color: "#fff", fontSize: 11.5, fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 }}>
                      <Camera size={13} />
                      <span>Carregar Foto</span>
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
                        style={{ padding: "6px 10px", borderRadius: 8, background: isDark ? "rgba(225, 29, 72, 0.15)" : "#ffe4e6", border: isDark ? "1px solid rgba(225, 29, 72, 0.3)" : "1px solid #fecdd3", color: isDark ? "#fda4af" : "#be123c", fontSize: 11.5, fontWeight: 700, cursor: "pointer" }}
                      >
                        Remover Foto
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted, marginBottom: 6 }}>
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={editAccountNome}
                  onChange={(e) => setEditAccountNome(e.target.value)}
                  placeholder="Ex: Dr. Nome Sobrenome"
                  style={{ width: "100%", padding: "10px 14px", borderRadius: 12, background: inputBg, border: inputBorder, color: textPrimary, fontSize: 13.5, fontWeight: 600, outline: "none", boxSizing: "border-box" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted, marginBottom: 6 }}>
                  E-mail de Acesso
                </label>
                <input
                  type="email"
                  value={editAccountEmail}
                  onChange={(e) => setEditAccountEmail(e.target.value)}
                  placeholder="seu.email@dominio.com"
                  style={{ width: "100%", padding: "10px 14px", borderRadius: 12, background: inputBg, border: inputBorder, color: textPrimary, fontSize: 13, outline: "none", boxSizing: "border-box" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted, marginBottom: 6 }}>
                  Cargo / Instituição Médica
                </label>
                <input
                  type="text"
                  value={editAccountCargo}
                  onChange={(e) => setEditAccountCargo(e.target.value)}
                  placeholder="Ex: Super Admin • SBC"
                  style={{ width: "100%", padding: "10px 14px", borderRadius: 12, background: inputBg, border: inputBorder, color: textPrimary, fontSize: 13, outline: "none", boxSizing: "border-box" }}
                />
              </div>

              <div style={{ padding: 14, borderRadius: 14, background: isDark ? "rgba(124, 58, 237, 0.15)" : "#faf5ff", border: isDark ? "1px solid rgba(124, 58, 237, 0.3)" : "1px solid #e9d5ff", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#7c3aed", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Nível de Acesso no Sistema
                  </div>
                  <div style={{ fontSize: 13.5, fontWeight: 700, color: isDark ? "#e9d5ff" : "#581c87", marginTop: 2, display: "flex", alignItems: "center", gap: 6 }}>
                    <Shield size={14} color="#7c3aed" />
                    <span>Super Admin (Acesso Total &amp; Irrestrito)</span>
                  </div>
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 999, background: "#7c3aed", color: "#fff" }}>
                  ATIVO
                </span>
              </div>

              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted, marginBottom: 6 }}>
                  Nova Senha (Opcional)
                </label>
                <input
                  type="password"
                  value={editAccountSenha}
                  onChange={(e) => setEditAccountSenha(e.target.value)}
                  placeholder="Deixe em branco para manter a atual"
                  style={{ width: "100%", padding: "10px 14px", borderRadius: 12, background: inputBg, border: inputBorder, color: textPrimary, fontSize: 13, outline: "none", boxSizing: "border-box" }}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, paddingTop: 8 }}>
                <button
                  type="button"
                  onClick={() => setShowEditAccountModal(false)}
                  style={{ padding: "10px 18px", borderRadius: 10, background: isDark ? "rgba(255, 255, 255, 0.08)" : "#f1f5f9", border: isDark ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid #cbd5e1", color: textPrimary, fontSize: 12.5, fontWeight: 700, cursor: "pointer" }}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={savingAccount}
                  style={{ padding: "10px 22px", borderRadius: 10, background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)", border: "none", color: "#fff", fontSize: 12.5, fontWeight: 700, cursor: "pointer", boxShadow: "0 6px 20px rgba(124, 58, 237, 0.35)", display: "inline-flex", alignItems: "center", gap: 6 }}
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
