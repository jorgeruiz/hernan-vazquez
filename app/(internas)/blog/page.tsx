import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Breadcrumbs from "@/components/Breadcrumbs"
import { getAllPosts, getCategories } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog de Reumatología | Dr. Hernán Vázquez González — Reumatólogo Monterrey",
  description:
    "Artículos sobre enfermedades reumáticas, síntomas articulares y cuándo consultar al reumatólogo. Información revisada por el Dr. Hernán Vázquez González.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog de Reumatología | Dr. Hernán Vázquez González",
    description:
      "Artículos sobre artritis, lupus, fibromialgia y más. Información médica revisada por reumatólogo certificado en Monterrey.",
    url: "/blog",
  },
}

interface Props {
  searchParams: Promise<{ categoria?: string }>
}

export default async function BlogPage({ searchParams }: Props) {
  const { categoria } = await searchParams
  const allPosts = getAllPosts()
  const categories = getCategories()
  const posts = categoria
    ? allPosts.filter((p) => p.frontmatter.categoria === categoria)
    : allPosts

  return (
    <article className="max-w-5xl mx-auto px-5 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />

      <header className="mt-8">
        <p className="section-label mb-3">Blog</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-navy heading-display">
          Artículos sobre reumatología
        </h1>
        <p className="text-base text-midnight/80 leading-relaxed mt-4 max-w-2xl">
          Información sobre enfermedades reumáticas, síntomas y cuándo consultar
          al especialista. Contenido revisado por el{" "}
          <Link
            href="/dr-hernan-vazquez-gonzalez"
            className="text-primary font-medium hover:underline"
          >
            Dr. Hernán Vázquez González
          </Link>
          .
        </p>
      </header>

      {/* Category filter */}
      {categories.length > 1 && (
        <div className="flex flex-wrap gap-2 mt-8">
          <Link
            href="/blog"
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              !categoria
                ? "bg-primary text-white"
                : "bg-gray-100 text-midnight/70 hover:bg-gray-200"
            }`}
          >
            Todos
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/blog?categoria=${encodeURIComponent(cat)}`}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                categoria === cat
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-midnight/70 hover:bg-gray-200"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>
      )}

      {/* Posts grid */}
      {posts.length === 0 ? (
        <p className="text-muted mt-12 text-center">
          No hay artículos publicados aún.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {posts.map((post) => (
            <Link
              key={post.frontmatter.slug}
              href={`/blog/${post.frontmatter.slug}`}
              className="group block border border-gray-100 rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <Image
                  src={post.frontmatter.imagen_portada}
                  alt={post.frontmatter.titulo}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-muted mb-3">
                  <span className="bg-light-blue text-primary font-medium px-2 py-0.5 rounded">
                    {post.frontmatter.categoria}
                  </span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="font-bold text-navy text-base group-hover:text-primary transition-colors line-clamp-2">
                  {post.frontmatter.titulo}
                </h2>
                <p className="text-sm text-midnight/70 leading-relaxed mt-2 line-clamp-3">
                  {post.frontmatter.extracto}
                </p>
                <span className="inline-block mt-4 text-sm font-semibold text-primary group-hover:underline">
                  Leer artículo →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </article>
  )
}
