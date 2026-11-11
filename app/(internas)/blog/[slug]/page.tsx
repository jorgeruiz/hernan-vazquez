import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Breadcrumbs from "@/components/Breadcrumbs"
import DoctorAuthorBox from "@/components/DoctorAuthorBox"
import MdxRenderer from "@/components/MdxRenderer"
import { JsonLd } from "@/components/JsonLd"
import { buildArticleSchema } from "@/lib/blog-schemas"
import { getAllSlugs, getPostBySlug } from "@/lib/blog"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const { frontmatter: fm } = post
  return {
    title: `${fm.titulo} | Dr. Hernán Vázquez González — Reumatólogo Monterrey`,
    description: fm.extracto,
    alternates: { canonical: `/blog/${fm.slug}` },
    openGraph: {
      title: `${fm.titulo} | Dr. Hernán Vázquez González`,
      description: fm.extracto,
      url: `/blog/${fm.slug}`,
      type: "article",
      images: [{ url: fm.imagen_portada, width: 1200, height: 630, alt: fm.titulo }],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const { frontmatter: fm, content, readingTime } = post
  const articleSchema = buildArticleSchema(fm)

  return (
    <>
      <JsonLd data={articleSchema} />

      <article className="max-w-3xl mx-auto px-5 lg:px-8 py-8 lg:py-12">
        <Breadcrumbs
          items={[
            { label: "Blog", href: "/blog" },
            { label: fm.titulo, href: `/blog/${fm.slug}` },
          ]}
        />

        <header className="mt-8">
          <div className="flex items-center gap-3 text-sm text-muted mb-4">
            <span className="bg-light-blue text-primary font-medium px-2.5 py-0.5 rounded">
              {fm.categoria}
            </span>
            <span>{readingTime}</span>
            <span>
              {new Date(fm.fecha_publicacion).toLocaleDateString("es-MX", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-navy heading-display">
            {fm.titulo}
          </h1>

          <p className="text-base sm:text-lg text-midnight/80 leading-relaxed mt-4">
            {fm.extracto}
          </p>
        </header>

        {/* Article body */}
        <div className="mt-10">
          <MdxRenderer source={content} />
        </div>

        {/* Author box */}
        <DoctorAuthorBox lastReviewed={fm.fecha_publicacion} isDraft={false} />

        {/* Tags */}
        {fm.tags && fm.tags.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {fm.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-midnight/60"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Back to blog */}
        <div className="mt-10 border-t border-gray-100 pt-8">
          <a
            href="/blog"
            className="text-primary font-semibold text-sm hover:underline"
          >
            ← Todos los artículos
          </a>
        </div>
      </article>
    </>
  )
}
