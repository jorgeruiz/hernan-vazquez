import type { Metadata } from "next"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import WhatsAppCTA from "@/components/WhatsAppCTA"
import { enfermedades } from "@/lib/enfermedades"

export const metadata: Metadata = {
  title: "Enfermedades Reumáticas | Dr. Hernán Vázquez González — Reumatólogo Monterrey",
  description:
    "Información sobre artritis reumatoide, lupus, fibromialgia, gota, osteoporosis, espondilitis anquilosante y artrosis. Diagnóstico y tratamiento en Monterrey.",
  alternates: {
    canonical: "/enfermedades",
  },
  openGraph: {
    title: "Enfermedades Reumáticas | Dr. Hernán Vázquez González",
    description:
      "Guía de enfermedades reumáticas con síntomas, diagnóstico y tratamiento por reumatólogo certificado en Monterrey.",
    url: "/enfermedades",
  },
}

export default function EnfermedadesPage() {
  return (
    <article className="max-w-4xl mx-auto px-5 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs items={[{ label: "Enfermedades", href: "/enfermedades" }]} />

      <header className="mt-8">
        <p className="section-label mb-3">Enfermedades reumáticas</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-navy heading-display">
          Enfermedades que atiende el reumatólogo
        </h1>
        <p className="text-base text-midnight/80 leading-relaxed mt-4 max-w-2xl">
          El{" "}
          <Link
            href="/dr-hernan-vazquez-gonzalez"
            className="text-primary font-medium hover:underline"
          >
            Dr. Hernán Vázquez González
          </Link>{" "}
          diagnostica y trata enfermedades que afectan articulaciones, huesos,
          músculos y el sistema inmunológico. Conozca cada condición, sus
          síntomas y cuándo consultar.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 gap-5 mt-10">
        {enfermedades.map((e) => (
          <Link
            key={e.slug}
            href={`/enfermedades/${e.slug}`}
            className="group block border border-gray-100 rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all"
          >
            <h2 className="text-lg font-bold text-navy group-hover:text-primary transition-colors">
              {e.nombre}
            </h2>
            <p className="text-sm text-midnight/70 leading-relaxed mt-2 line-clamp-3">
              {e.respuestaCorta}
            </p>
            <span className="inline-block mt-4 text-sm font-semibold text-primary group-hover:underline">
              Leer más →
            </span>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <section className="mt-12 bg-navy rounded-2xl p-6 sm:p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">
          ¿Tiene síntomas articulares o musculares?
        </h2>
        <p className="text-white/70 text-sm mb-5 max-w-lg mx-auto">
          El diagnóstico temprano es clave para controlar las enfermedades
          reumáticas y prevenir complicaciones.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <WhatsAppCTA
            text="Enviar mensaje"
            className="inline-flex items-center gap-2 bg-white text-navy font-semibold px-6 py-3 rounded-full cta-primary text-sm"
          />
          <a
            href="tel:+528183178342"
            className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-6 py-3 rounded-full cta-secondary text-sm"
          >
            Llamar: 81 8317 8342
          </a>
        </div>
      </section>
    </article>
  )
}
