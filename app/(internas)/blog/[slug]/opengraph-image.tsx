import { ImageResponse } from "next/og"
import { getPostBySlug } from "@/lib/blog"

export const runtime = "nodejs"
export const alt = "Artículo del blog"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  const titulo = post?.frontmatter.titulo ?? "Blog — Dr. Hernán Vázquez González"
  const categoria = post?.frontmatter.categoria ?? ""

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
        {categoria && (
          <span
            style={{
              color: "#93c5fd",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase" as const,
              marginBottom: "24px",
            }}
          >
            {categoria}
          </span>
        )}
        <h1
          style={{
            color: "#ffffff",
            fontSize: "48px",
            fontWeight: 800,
            lineHeight: 1.15,
            margin: 0,
          }}
        >
          {titulo}
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "auto",
            paddingTop: "40px",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px" }}>
            Dr. Hernán Vázquez González — Reumatólogo Monterrey
          </span>
        </div>
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "14px", marginTop: "8px" }}>
          reumamonterrey.com/blog
        </span>
      </div>
    ),
    { ...size }
  )
}
