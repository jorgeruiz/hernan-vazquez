import { ImageResponse } from "next/og"

export const runtime = "nodejs"
export const alt = "Dr. Hernán Vázquez González — Reumatólogo en Monterrey"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1A3874 0%, #0F2550 50%, #0273B5 100%)",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "2px",
              background: "#60a5fa",
            }}
          />
          <span
            style={{
              color: "#93c5fd",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase" as const,
            }}
          >
            Reumatólogo certificado
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            color: "#ffffff",
            fontSize: "64px",
            fontWeight: 800,
            lineHeight: 1.1,
            margin: 0,
            letterSpacing: "-1px",
          }}
        >
          Dr. Hernán Vázquez
          <br />
          <span style={{ color: "#60a5fa" }}>González</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: "#93c5fd",
            fontSize: "24px",
            fontWeight: 500,
            marginTop: "20px",
            marginBottom: "0",
          }}
        >
          Especialista en Artritis, Lupus y Enfermedades Reumáticas
        </p>

        {/* Bottom info */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            marginTop: "auto",
            paddingTop: "40px",
          }}
        >
          {[
            "Monterrey, N.L.",
            "12 años de experiencia",
            "Certificado CMR",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#60a5fa",
                }}
              />
              <span
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Domain */}
        <p
          style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: "14px",
            marginTop: "16px",
            fontWeight: 500,
          }}
        >
          reumamonterrey.com
        </p>
      </div>
    ),
    { ...size }
  )
}
