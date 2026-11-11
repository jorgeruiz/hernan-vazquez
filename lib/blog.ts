import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

export interface BlogFrontmatter {
  titulo: string
  slug: string
  categoria: string
  tags?: string[]
  extracto: string
  imagen_portada: string
  imagenes_apoyo?: string[]
  autor: string
  fecha_publicacion: string
}

export interface BlogPost {
  frontmatter: BlogFrontmatter
  content: string
  readingTime: string
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"))

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8")
      const { data, content } = matter(raw)
      const rt = readingTime(content)

      // gray-matter parses YAML dates as Date objects — normalize to string
      const fecha = data.fecha_publicacion instanceof Date
        ? data.fecha_publicacion.toISOString().slice(0, 10)
        : String(data.fecha_publicacion)

      return {
        frontmatter: { ...data, fecha_publicacion: fecha } as BlogFrontmatter,
        content,
        readingTime: `${Math.ceil(rt.minutes)} min de lectura`,
      }
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.fecha_publicacion).getTime() -
        new Date(a.frontmatter.fecha_publicacion).getTime()
    )
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts()
  return posts.find((p) => p.frontmatter.slug === slug)
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.frontmatter.slug)
}

export function getCategories(): string[] {
  const cats = getAllPosts().map((p) => p.frontmatter.categoria)
  return [...new Set(cats)]
}
