import { ImageResponse } from "next/og";

export const alt = "Tratado de Cirurgia da Coluna Vertebral | Sociedade Brasileira de Coluna (SBC)";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 70px",
          background: "linear-gradient(135deg, #021226 0%, #06264f 50%, #041838 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Ambient background glows */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(14, 101, 162, 0.5) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245, 34, 56, 0.4) 0%, rgba(0,0,0,0) 70%)",
          }}
        />

        {/* Top Bar: SBC Brand & Tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* Red & Blue Spine Icon */}
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "linear-gradient(135deg, #f52238 0%, #003382 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
                fontWeight: 900,
                color: "#ffffff",
                boxShadow: "0 8px 24px rgba(245, 34, 56, 0.4)",
              }}
            >
              SBC
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  color: "#ff808f",
                  textTransform: "uppercase",
                }}
              >
                Sociedade Brasileira de Coluna
              </span>
              <span style={{ fontSize: 18, fontWeight: 800, color: "#ffffff" }}>
                Publicação Científica Oficial
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 20px",
              borderRadius: 30,
              background: "rgba(245, 34, 56, 0.2)",
              border: "1px solid #f52238",
              color: "#ff99a8",
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            ⭐ 109 Capítulos • 10 Seções
          </div>
        </div>

        {/* Center Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            zIndex: 10,
            maxWidth: 950,
          }}
        >
          <h1
            style={{
              fontSize: 54,
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              margin: 0,
              color: "#ffffff",
            }}
          >
            Tratado de Cirurgia da Coluna Vertebral
          </h1>
          <p
            style={{
              fontSize: 22,
              lineHeight: 1.4,
              color: "#cbd5e1",
              margin: 0,
            }}
          >
            A maior obra de referência médica nacional. Diretrizes clínicas, técnicas cirúrgicas avançadas e coordenação científica da Sociedade Brasileira de Coluna.
          </p>
        </div>

        {/* Bottom Bar: Editors & URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 24,
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            width: "100%",
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <span style={{ fontSize: 16, color: "#94a3b8", fontWeight: 600 }}>
              Editores-Chefes: <strong style={{ color: "#ffffff" }}>Dr. Edson Pudles</strong> • <strong style={{ color: "#ffffff" }}>Dr. Helton Defino</strong> • <strong style={{ color: "#ffffff" }}>Dr. Marcelo Risso</strong>
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 16,
              fontWeight: 700,
              color: "#67e8f9",
            }}
          >
            <span>coluna.org.br</span>
            <span>→</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
