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

function IconArrowRight({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function AdminLoginPage() {
  const router = useRouter();

  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  // Status state
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoading(true);

    try {
      if (!email.trim() || !password.trim()) {
        setErrorMessage("Por favor, preencha o e-mail e a senha.");
        setLoading(false);
        return;
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
        const customPassMap = JSON.parse(localStorage.getItem("sbc_custom_passwords") || "{}");
        const requiredPass = customPassMap[email.toLowerCase()];
        if (requiredPass && requiredPass !== password) {
          setErrorMessage("Senha incorreta. Verifique a senha com o Super Admin da SBC.");
          setLoading(false);
          return;
        }

        const registered = JSON.parse(localStorage.getItem("sbc_registered_users") || "[]");
        const userProfile = registered.find((u: any) => u.email?.toLowerCase() === email.toLowerCase());
        if (userProfile) {
          if (userProfile.status === "pendente") {
            setErrorMessage("Sua conta está cadastrada, mas ainda aguarda aprovação de um Super Admin.");
            setLoading(false);
            return;
          }
          if (userProfile.status === "bloqueado") {
            setErrorMessage("Seu acesso foi temporariamente suspenso. Contate a administração da SBC.");
            setLoading(false);
            return;
          }
        }

        localStorage.setItem(
          "sbc_admin_session",
          JSON.stringify({
            email,
            nome: userProfile?.nome || "Membro SBC",
            role: userProfile?.role || "escritor",
            authenticatedAt: new Date().toISOString(),
          })
        );
      }

      router.push("/admin/painel");
    } catch (err: any) {
      setErrorMessage(err.message || "Erro inesperado ao processar o login.");
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #000a1a 0%, #001433 50%, #011f4d 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 16px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "15%",
          width: 550,
          height: 550,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 80, 200, 0.2) 0%, rgba(0, 0, 0, 0) 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "15%",
          width: 550,
          height: 550,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245, 34, 56, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Main Container Card */}
      <div
        style={{
          width: "100%",
          maxWidth: 1040,
          background: "#ffffff",
          borderRadius: 28,
          boxShadow: "0 30px 80px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.12)",
          display: "grid",
          gridTemplateColumns: "1fr 1.08fr",
          padding: 20,
          gap: 28,
          position: "relative",
          zIndex: 10,
        }}
        className="login-card-container"
      >
        {/* LEFT COLUMN: Deep Blue 3D Book Showcase */}
        <div
          style={{
            background: "linear-gradient(160deg, #000e24 0%, #001c44 50%, #003382 100%)",
            borderRadius: 22,
            padding: "40px 32px",
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
                padding: "7px 16px",
                background: "rgba(255, 255, 255, 0.12)",
                backdropFilter: "blur(8px)",
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 0.5,
                textTransform: "uppercase",
                color: "#ff8090",
                marginBottom: 22,
              }}
            >
              Sociedade Brasileira de Coluna
            </div>

            <h2
              style={{
                fontSize: 32,
                fontWeight: 700,
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
                fontSize: 15,
                lineHeight: 1.55,
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
              padding: "24px 0",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(0, 102, 255, 0.4) 0%, rgba(0,0,0,0) 70%)",
                filter: "blur(24px)",
              }}
            />
            <img
              src="/assets/capa-tratado.png"
              alt="Tratado de Cirurgia da Coluna Vertebral"
              style={{
                maxHeight: 260,
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
              paddingTop: 18,
              fontSize: 13,
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
            padding: "28px 24px 28px 12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "#0f172a",
          }}
        >
          {/* Logo Section */}
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <Link href="/pt" style={{ display: "inline-block", marginBottom: 20 }}>
              <img
                src="/assets/sbc-logo.png"
                alt="Logo SBC"
                style={{ height: 48, width: "auto", objectFit: "contain" }}
              />
            </Link>

            <h1
              style={{
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                margin: "0 0 6px 0",
                color: "#0f172a",
              }}
            >
              Acesso Restrito
            </h1>
            <p
              style={{
                fontSize: 14,
                color: "#64748b",
                margin: 0,
              }}
            >
              Preencha seus dados para acessar o painel editorial SBC.
            </p>
          </div>

          {/* Feedback Alerts */}
          {errorMessage && (
            <div
              style={{
                background: "#fef2f2",
                border: "1px solid #fecaca",
                color: "#dc2626",
                padding: "12px 16px",
                borderRadius: 14,
                fontSize: 13.5,
                lineHeight: 1.45,
                marginBottom: 18,
              }}
            >
              {errorMessage}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#334155",
                  marginBottom: 6,
                }}
              >
                E-mail
              </label>
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    left: 16,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#94a3b8",
                  }}
                >
                  <IconMail size={18} />
                </div>
                <input
                  type="email"
                  required
                  placeholder="Digite seu e-mail institucional"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "100%",
                    height: 48,
                    padding: "0 16px 0 46px",
                    borderRadius: 24,
                    border: "1.5px solid #e2e8f0",
                    fontSize: 14,
                    color: "#0f172a",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#003382")}
                  onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                />
              </div>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#334155",
                  marginBottom: 6,
                }}
              >
                Senha
              </label>
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    left: 16,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#94a3b8",
                  }}
                >
                  <IconLock size={18} />
                </div>
                <input
                  type="password"
                  required
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: "100%",
                    height: 48,
                    padding: "0 16px 0 46px",
                    borderRadius: 24,
                    border: "1.5px solid #e2e8f0",
                    fontSize: 14,
                    color: "#0f172a",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#003382")}
                  onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: 13,
                marginTop: -2,
              }}
            >
              <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", color: "#64748b" }}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={{ accentColor: "#003382", width: 16, height: 16 }}
                />
                Lembrar de mim
              </label>
              <button
                type="button"
                onClick={() => alert("Para redefinir sua senha, contate a administração da SBC.")}
                style={{
                  background: "none",
                  border: "none",
                  color: "#003382",
                  fontWeight: 700,
                  cursor: "pointer",
                  padding: 0,
                  fontSize: 13,
                }}
              >
                Esqueceu a senha?
              </button>
            </div>

            {/* Primary Action Button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                height: 50,
                borderRadius: 25,
                background: "linear-gradient(135deg, #003382 0%, #004dc4 100%)",
                color: "#ffffff",
                border: "none",
                fontSize: 15,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                cursor: loading ? "wait" : "pointer",
                marginTop: 8,
                boxShadow: "0 4px 16px rgba(0, 51, 130, 0.35)",
                transition: "all 0.2s ease",
              }}
            >
              {loading ? (
                "Acessando..."
              ) : (
                <>
                  Entrar no Painel <IconArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <div style={{ textAlign: "center", marginTop: 24 }}>
            <Link
              href="/pt"
              style={{
                fontSize: 13,
                color: "#64748b",
                fontWeight: 600,
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
            padding: 14px !important;
          }
        }
      `}</style>
    </div>
  );
}
