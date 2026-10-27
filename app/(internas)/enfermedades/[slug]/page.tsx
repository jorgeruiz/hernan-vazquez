import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import DoctorAuthorBox from "@/components/DoctorAuthorBox"
import WhatsAppCTA from "@/components/WhatsAppCTA"
import BotonAgendar from "@/components/BotonAgendar"
import { JsonLd } from "@/components/JsonLd"
import {
  buildConditionSchema,
  buildFAQSchema,
} from "@/lib/internal-schemas"
import {
  enfermedades,
  getAllSlugs,
  getEnfermedadBySlug,
} from "@/lib/enfermedades"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const enfermedad = getEnfermedadBySlug(slug)
  if (!enfermedad) return {}

  return {
    title: enfermedad.titleTag,
    description: enfermedad.metaDescription,
    alternates: {
      canonical: `/enfermedades/${enfermedad.slug}`,
    },
    openGraph: {
      title: enfermedad.titleTag,
      description: enfermedad.metaDescription,
      url: `/enfermedades/${enfermedad.slug}`,
    },
  }
}

const LAST_REVIEWED = "2026-10-27"

export default async function EnfermedadPage({ params }: Props) {
  const { slug } = await params
  const enfermedad = getEnfermedadBySlug(slug)
  if (!enfermedad) notFound()

  const conditionSchema = buildConditionSchema({
    name: enfermedad.nombre,
    slug: enfermedad.slug,
    description: enfermedad.metaDescription,
    lastReviewed: LAST_REVIEWED,
  })

  const faqSchema = buildFAQSchema(enfermedad.faqs)

  const relatedConditions = enfermedad.condicionesRelacionadas
    .map((s) => enfermedades.find((e) => e.slug === s))
    .filter(Boolean)

  return (
    <>
      <JsonLd data={conditionSchema} />
      <JsonLd data={faqSchema} />

      <article className="max-w-4xl mx-auto px-5 lg:px-8 py-8 lg:py-12">
        <Breadcrumbs
          items={[
            { label: "Enfermedades", href: `/enfermedades/${enfermedades[0].slug}` },
            { label: enfermedad.nombre, href: `/enfermedades/${enfermedad.slug}` },
          ]}
        />

        {/* H1 + respuesta corta (AEO) */}
        <header className="mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-navy heading-display">
            {enfermedad.h1}
          </h1>
          <p className="text-base sm:text-lg text-midnight/80 leading-relaxed mt-4 max-w-3xl">
            {enfermedad.respuestaCorta}
          </p>
        </header>

        {/* Secciones H2 en forma de pregunta */}
        <div className="mt-10 space-y-10">
          {enfermedad.secciones.map((seccion) => (
            <section key={seccion.pregunta}>
              <h2 className="text-xl sm:text-2xl font-bold text-navy mb-4">
                {seccion.pregunta}
              </h2>
              <div className="prose-internal text-midnight/80 leading-relaxed">
                {seccion.contenido.split("\n\n").map((paragraph, i) => {
                  if (paragraph.startsWith("- ")) {
                    const items = paragraph.split("\n").filter((l) => l.startsWith("- "))
                    return (
                      <ul key={i} className="list-disc pl-5 space-y-1.5 my-3">
                        {items.map((item, j) => (
                          <li key={j}>{item.replace(/^- /, "")}</li>
                        ))}
                      </ul>
                    )
                  }
                  if (paragraph.startsWith("**")) {
                    return (
                      <p key={i} className="font-semibold text-navy mt-4 mb-2">
                        {paragraph.replace(/\*\*/g, "")}
                      </p>
                    )
                  }
                  return (
                    <p key={i} className="mb-3">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            </section>
          ))}
        </div>

        {/* CTA contextual */}
        <section className="mt-10 bg-light-blue rounded-2xl p-6 sm:p-8">
          <p className="text-base text-navy font-medium mb-4">
            {enfermedad.ctaTexto}
          </p>
          <div className="flex flex-wrap gap-3">
            <BotonAgendar className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-5 py-2.5 rounded-full cta-primary text-sm">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Agendar cita
            </BotonAgendar>
            <WhatsAppCTA text="Enviar mensaje" />
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy mb-6">
            Preguntas frecuentes sobre {enfermedad.nombre.toLowerCase()}
          </h2>
          <div className="space-y-5">
            {enfermedad.faqs.map((faq) => (
              <div key={faq.pregunta} className="border-b border-gray-100 pb-5">
                <h3 className="font-semibold text-navy text-base">
                  {faq.pregunta}
                </h3>
                <p className="text-sm text-midnight/70 leading-relaxed mt-2">
                  {faq.respuesta}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Autoría */}
        <DoctorAuthorBox lastReviewed={LAST_REVIEWED} isDraft={true} />

        {/* Condiciones relacionadas */}
        {relatedConditions.length > 0 && (
          <section className="mt-10 border-t border-gray-100 pt-8">
            <h2 className="text-lg font-bold text-navy mb-4">
              Condiciones relacionadas
            </h2>
            <div className="flex flex-wrap gap-3">
              {relatedConditions.map((rel) => (
                <Link
                  key={rel!.slug}
                  href={`/enfermedades/${rel!.slug}`}
                  className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-midnight/70 hover:border-primary/30 hover:text-primary transition-all"
                >
                  {rel!.nombre}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Enlaces a consultorios */}
        <section className="mt-8 border-t border-gray-100 pt-8">
          <p className="text-sm text-muted mb-3">Consultorios disponibles:</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/consultorios/christus-muguerza-sur"
              className="text-primary font-semibold text-sm hover:underline"
            >
              Hospital Christus Muguerza Sur →
            </Link>
            <Link
              href="/consultorios/care-medical-hub"
              className="text-primary font-semibold text-sm hover:underline"
            >
              CARE Medical Hub →
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}
