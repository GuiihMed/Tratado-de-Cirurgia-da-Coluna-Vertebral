"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase, isSupabaseConfigured } from "@/lib/supabase/client";

function IconLock({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function IconMail({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconUser({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function IconBriefcase({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function IconArrowRight({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function IconCheckCircle({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

export default function AdminLoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "register">("login");

  // Form state
  const [nome, setNome] = useState("");
  const [cargoInstituicao, setCargoInstituicao] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  // Status state
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);

    try {
      if (!email.trim() || !password.trim()) {
        setErrorMessage("Por favor, preencha todos os campos obrigatórios.");
        setLoading(false);
        return;
      }

      if (mode === "register") {
        if (!nome.trim()) {
          setErrorMessage("Por favor, informe seu nome completo.");
          setLoading(false);
          return;
        }

        if (password !== confirmPassword) {
          setErrorMessage("As senhas digitadas não coincidem.");
          setLoading(false);
          return;
        }

        if (password.length < 6) {
          setErrorMessage("A senha deve conter no mínimo 6 caracteres.");
          setLoading(false);
          return;
        }

        if (isSupabaseConfigured()) {
          const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
              data: {
                nome,
                cargo_instituicao: cargoInstituicao || "Membro SBC",
              },
            },
          });

          if (error) {
            setErrorMessage(error.message || "Não foi possível criar a conta.");
            setLoading(false);
            return;
          }

          if (data?.user) {
            try {
              await supabase.from("perfis").upsert({
                id: data.user.id,
                nome,
                email,
                role: "escritor",
                status: "pendente",
                cargo_instituicao: cargoInstituicao || "Membro SBC",
              });
            } catch (pErr) {
              console.warn("Perfil trigger auto or manual upsert:", pErr);
            }
          }

          setSuccessMessage(
            "Cadastro realizado com sucesso! Sua solicitação está pendente de aprovação por um Super Admin."
          );
          setMode("login");
          setLoading(false);
          return;
        } else {
          setSuccessMessage("Cadastro efetuado em modo de demonstração.");
          setMode("login");
          setLoading(false);
          return;
        }
      }

      // Mode: Login
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          setErrorMessage(error.message || "Credenciais inválidas. Verifique seu e-mail e senha.");
          setLoading(false);
          return;
        }

        // Checar perfil e status do usuário
        if (data?.user) {
          const { data: perfil } = await supabase
            .from("perfis")
            .select("*")
            .eq("id", data.user.id)
            .single();

          if (perfil) {
            if (perfil.status === "pendente") {
              setErrorMessage(
                "Sua conta está cadastrada, mas ainda aguarda aprovação de um Super Admin. Por favor, aguarde a liberação."
              );
              await supabase.auth.signOut();
              setLoading(false);
              return;
            }

            if (perfil.status === "bloqueado") {
              setErrorMessage("Seu acesso foi temporariamente suspenso. Contate a administração da SBC.");
              await supabase.auth.signOut();
              setLoading(false);
              return;
            }
          }
        }
      } else {
        localStorage.setItem(
          "sbc_admin_session",
          JSON.stringify({
            email,
            authenticatedAt: new Date().toISOString(),
          })
        );
      }

      router.push("/admin/painel");
    } catch (err: any) {
      setErrorMessage(err.message || "Erro inesperado ao processar.");
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #000c1e 0%, #001533 50%, #01214d 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "20%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 77, 196, 0.22) 0%, rgba(0, 0, 0, 0) 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "20%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245, 34, 56, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Main Container Card (Dual Column Reference Design) */}
      <div
        style={{
          width: "100%",
          maxWidth: 980,
          background: "#ffffff",
          borderRadius: 28,
          boxShadow: "0 30px 70px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.1)",
          display: "grid",
          gridTemplateColumns: "1.05fr 1fr",
          padding: 16,
          gap: 20,
          position: "relative",
          zIndex: 10,
        }}
        className="login-card-container"
      >
        {/* LEFT COLUMN: Deep Blue 3D Book Showcase */}
        <div
          style={{
            background: "linear-gradient(160deg, #000e24 0%, #001b44 50%, #003382 100%)",
            borderRadius: 20,
            padding: "36px 32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            color: "#ffffff",
            position: "relative",
            overflow: "hidden",
            boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.2)",
          }}
        >
          {/* Subtle curtain / glow texture effect */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 1px, transparent 1px, transparent 32px)",
              pointerEvents: "none",
            }}
          />

          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                background: "rgba(255, 255, 255, 0.12)",
                backdropFilter: "blur(8px)",
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 0.5,
                textTransform: "uppercase",
                color: "#ff8090",
                marginBottom: 20,
              }}
            >
              Sociedade Brasileira de Coluna
            </div>

            <h2
              style={{
                fontSize: 30,
                fontWeight: 850,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                margin: "0 0 12px 0",
                color: "#ffffff",
              }}
            >
              Tratado de Cirurgia da Coluna Vertebral.
            </h2>

            <p
              style={{
                fontSize: 14.5,
                lineHeight: 1.5,
                color: "#94a3b8",
                margin: 0,
              }}
            >
              Plataforma científica oficial de gestão editorial, 109 capítulos e corpo docente SBC.
            </p>
          </div>

          {/* Centerpiece 3D Book Graphic */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px 0",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 180,
                height: 180,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(0, 102, 255, 0.4) 0%, rgba(0,0,0,0) 70%)",
                filter: "blur(20px)",
              }}
            />
            <img
              src="/assets/book-cover.png"
              alt="Tratado de Cirurgia da Coluna Vertebral"
              style={{
                maxHeight: 240,
                width: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 20px 30px rgba(0, 0, 0, 0.75))",
                transform: "perspective(800px) rotateY(-8deg) rotateX(4deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </div>

          {/* Bottom badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid rgba(255, 255, 255, 0.12)",
              paddingTop: 16,
              fontSize: 12.5,
              color: "#cbd5e1",
            }}
          >
            <span>Edição 2026 • 109 Capítulos</span>
            <span style={{ color: "#38bdf8", fontWeight: 700 }}>Acesso Restrito</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Form Card */}
        <div
          style={{
            padding: "28px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "#0f172a",
          }}
        >
          {/* Logo & Header */}
          <div style={{ textAlign: "center", marginBottom: 18 }}>
            <Link href="/pt" style={{ display: "inline-block", marginBottom: 12 }}>
              <img
                src="/assets/sbc-logo.png"
                alt="Logo SBC"
                style={{ height: 44, width: "auto", objectFit: "contain" }}
              />
            </Link>

            {/* Mode Switcher Tabs */}
            <div
              style={{
                display: "inline-flex",
                background: "#f1f5f9",
                padding: 4,
                borderRadius: 30,
                gap: 4,
                marginBottom: 14,
              }}
            >
              <button
                type="button"
                onClick={() => {
                  setMode("login");
                  setErrorMessage(null);
                  setSuccessMessage(null);
                }}
                style={{
                  padding: "8px 20px",
                  borderRadius: 24,
                  border: "none",
                  fontWeight: 700,
                  fontSize: 13.5,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  background: mode === "login" ? "#003382" : "transparent",
                  color: mode === "login" ? "#ffffff" : "#64748b",
                  boxShadow: mode === "login" ? "0 2px 8px rgba(0, 51, 130, 0.3)" : "none",
                }}
              >
                Entrar
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode("register");
                  setErrorMessage(null);
                  setSuccessMessage(null);
                }}
                style={{
                  padding: "8px 20px",
                  borderRadius: 24,
                  border: "none",
                  fontWeight: 700,
                  fontSize: 13.5,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  background: mode === "register" ? "#003382" : "transparent",
                  color: mode === "register" ? "#ffffff" : "#64748b",
                  boxShadow: mode === "register" ? "0 2px 8px rgba(0, 51, 130, 0.3)" : "none",
                }}
              >
                Criar Conta
              </button>
            </div>

            <h1
              style={{
                fontSize: 23,
                fontWeight: 800,
                letterSpacing: "-0.02em",
                margin: "0 0 6px 0",
                color: "#0f172a",
              }}
            >
              {mode === "login" ? "Acesse sua conta" : "Solicitar Cadastro"}
            </h1>
            <p
              style={{
                fontSize: 13.5,
                color: "#64748b",
                margin: 0,
              }}
            >
              {mode === "login"
                ? "Preencha seus dados para acessar o painel editorial."
                : "Informe seus dados institucionais para solicitar acesso."}
            </p>
          </div>

          {/* Feedback Alerts */}
          {errorMessage && (
            <div
              style={{
                background: "#fef2f2",
                border: "1px solid #fecaca",
                color: "#dc2626",
                padding: "10px 14px",
                borderRadius: 12,
                fontSize: 13,
                lineHeight: 1.4,
                marginBottom: 14,
              }}
            >
              {errorMessage}
            </div>
          )}

          {successMessage && (
            <div
              style={{
                background: "#f0fdf4",
                border: "1px solid #bbf7d0",
                color: "#16a34a",
                padding: "12px 14px",
                borderRadius: 12,
                fontSize: 13,
                lineHeight: 1.4,
                marginBottom: 14,
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
              }}
            >
              <IconCheckCircle size={20} />
              <span>{successMessage}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {mode === "register" && (
              <>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 12.5,
                      fontWeight: 700,
                      color: "#334155",
                      marginBottom: 5,
                    }}
                  >
                    Nome Completo
                  </label>
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        position: "absolute",
                        left: 14,
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#94a3b8",
                      }}
                    >
                      <IconUser size={16} />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Dr. Carlos Eduardo"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      style={{
                        width: "100%",
                        height: 44,
                        padding: "0 14px 0 40px",
                        borderRadius: 24,
                        border: "1.5px solid #e2e8f0",
                        fontSize: 13.5,
                        color: "#0f172a",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 12.5,
                      fontWeight: 700,
                      color: "#334155",
                      marginBottom: 5,
                    }}
                  >
                    Cargo / Instituição
                  </label>
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        position: "absolute",
                        left: 14,
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#94a3b8",
                      }}
                    >
                      <IconBriefcase size={16} />
                    </div>
                    <input
                      type="text"
                      placeholder="Ex: Cirurgião de Coluna / USP / Membro SBC"
                      value={cargoInstituicao}
                      onChange={(e) => setCargoInstituicao(e.target.value)}
                      style={{
                        width: "100%",
                        height: 44,
                        padding: "0 14px 0 40px",
                        borderRadius: 24,
                        border: "1.5px solid #e2e8f0",
                        fontSize: 13.5,
                        color: "#0f172a",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 12.5,
                  fontWeight: 700,
                  color: "#334155",
                  marginBottom: 5,
                }}
              >
                E-mail
              </label>
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    left: 14,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#94a3b8",
                  }}
                >
                  <IconMail size={16} />
                </div>
                <input
                  type="email"
                  required
                  placeholder="seuemail@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "100%",
                    height: 44,
                    padding: "0 14px 0 40px",
                    borderRadius: 24,
                    border: "1.5px solid #e2e8f0",
                    fontSize: 13.5,
                    color: "#0f172a",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 12.5,
                  fontWeight: 700,
                  color: "#334155",
                  marginBottom: 5,
                }}
              >
                Senha
              </label>
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    left: 14,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#94a3b8",
                  }}
                >
                  <IconLock size={16} />
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: "100%",
                    height: 44,
                    padding: "0 14px 0 40px",
                    borderRadius: 24,
                    border: "1.5px solid #e2e8f0",
                    fontSize: 13.5,
                    color: "#0f172a",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            {mode === "register" && (
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: 12.5,
                    fontWeight: 700,
                    color: "#334155",
                    marginBottom: 5,
                  }}
                >
                  Confirmar Senha
                </label>
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      position: "absolute",
                      left: 14,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#94a3b8",
                    }}
                  >
                    <IconLock size={16} />
                  </div>
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={{
                      width: "100%",
                      height: 44,
                      padding: "0 14px 0 40px",
                      borderRadius: 24,
                      border: "1.5px solid #e2e8f0",
                      fontSize: 13.5,
                      color: "#0f172a",
                      outline: "none",
                    }}
                  />
                </div>
              </div>
            )}

            {mode === "login" && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: 12.5,
                }}
              >
                <label style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer", color: "#64748b" }}>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    style={{ accentColor: "#003382" }}
                  />
                  Lembrar de mim
                </label>
                <button
                  type="button"
                  onClick={() => alert("Para redefinir sua senha, contate o Super Admin da SBC.")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#003382",
                    fontWeight: 600,
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  Esqueceu a senha?
                </button>
              </div>
            )}

            {/* Primary Action Button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                height: 46,
                borderRadius: 24,
                background: "linear-gradient(135deg, #003382 0%, #004dc4 100%)",
                color: "#ffffff",
                border: "none",
                fontSize: 14.5,
                fontWeight: 750,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                cursor: loading ? "wait" : "pointer",
                marginTop: 4,
                boxShadow: "0 4px 14px rgba(0, 51, 130, 0.35)",
                transition: "all 0.2s ease",
              }}
            >
              {loading ? (
                "Processando..."
              ) : mode === "login" ? (
                <>
                  Entrar no Painel <IconArrowRight size={16} />
                </>
              ) : (
                <>
                  Solicitar Cadastro <IconArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          {/* Footer toggle prompt */}
          <div
            style={{
              textAlign: "center",
              marginTop: 18,
              fontSize: 13,
              color: "#64748b",
            }}
          >
            {mode === "login" ? (
              <span>
                Não possui uma conta?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setMode("register");
                    setErrorMessage(null);
                    setSuccessMessage(null);
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#003382",
                    fontWeight: 750,
                    cursor: "pointer",
                    padding: 0,
                    textDecoration: "underline",
                  }}
                >
                  Criar Conta
                </button>
              </span>
            ) : (
              <span>
                Já possui uma conta?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setMode("login");
                    setErrorMessage(null);
                    setSuccessMessage(null);
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#003382",
                    fontWeight: 750,
                    cursor: "pointer",
                    padding: 0,
                    textDecoration: "underline",
                  }}
                >
                  Fazer Login
                </button>
              </span>
            )}
          </div>

          <div style={{ textAlign: "center", marginTop: 12 }}>
            <Link
              href="/pt"
              style={{
                fontSize: 12,
                color: "#94a3b8",
                textDecoration: "none",
              }}
            >
              ← Voltar ao site principal
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 860px) {
          .login-card-container {
            grid-template-columns: 1fr !important;
            padding: 12px !important;
          }
        }
      `}</style>
    </div>
  );
}
