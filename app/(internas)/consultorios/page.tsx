import type { Metadata } from "next"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import BotonAgendar from "@/components/BotonAgendar"
import WhatsAppCTA from "@/components/WhatsAppCTA"

export const metadata: Metadata = {
  title: "Consultorios de Reumatología en Monterrey | Dr. Hernán Vázquez González",
  description:
    "Dos consultorios de reumatología en Monterrey: Hospital Christus Muguerza Sur (zona sur) y CARE Medical Hub (Balcones de Galerías). Tel. 81 8317 8342.",
  alternates: {
    canonical: "/consultorios",
  },
  openGraph: {
    title: "Consultorios de Reumatología en Monterrey | Dr. Hernán Vázquez González",
    description:
      "Atención reumatológica en dos ubicaciones: Christus Muguerza Sur y CARE Medical Hub.",
    url: "/consultorios",
  },
}

const CONSULTORIOS = [
  {
    nombre: "Hospital Christus Muguerza Sur",
    detalle: "Piso 6, Consultorio 616",
    ubicacion: "Monterrey, Nuevo León",
    diferenciador: "Único reumatólogo en la zona sur de Monterrey",
    zonas: "Carretera Nacional, Cumbres, Valle Alto y zonas aledañas",
    href: "/consultorios/christus-muguerza-sur",
  },
  {
    nombre: "CARE Medical Hub",
    detalle: "Bolivia 103, Piso 12, Consultorio 14",
    ubicacion: "Balcones de Galerías, Monterrey, N.L. 64620",
    diferenciador: null,
    zonas: "San Pedro Garza García, San Jerónimo, Valle Oriente y zonas aledañas",
    href: "/consultorios/care-medical-hub",
  },
]

export default function ConsultoriosPage() {
  return (
    <article className="max-w-4xl mx-auto px-5 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs items={[{ label: "Consultorios", href: "/consultorios" }]} />

      <header className="mt-8">
        <p className="section-label mb-3">Ubicaciones</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-navy heading-display">
          Consultorios de reumatología en Monterrey
        </h1>
        <p className="text-base text-midnight/80 leading-relaxed mt-4 max-w-2xl">
          El{" "}
          <Link
            href="/dr-hernan-vazquez-gonzalez"
            className="text-primary font-medium hover:underline"
          >
            Dr. Hernán Vázquez González
          </Link>{" "}
          atiende en dos consultorios en Monterrey, cubriendo la zona sur y la
          zona de Galerías para que acceda a atención reumatológica
          especializada cerca de usted.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 gap-6 mt-10">
        {CONSULTORIOS.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group block border border-gray-100 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all"
          >
            <h2 className="text-xl font-bold text-navy group-hover:text-primary transition-colors">
              {c.nombre}
            </h2>
            <address className="not-italic text-sm text-midnight/70 mt-2 space-y-0.5">
              <p>{c.detalle}</p>
              <p>{c.ubicacion}</p>
            </address>
            {c.diferenciador && (
              <p className="text-sm text-primary font-semibold mt-3">
                {c.diferenciador}
              </p>
            )}
            <p className="text-xs text-muted mt-3">
              Cobertura: {c.zonas}
            </p>
            <span className="inline-block mt-5 text-sm font-semibold text-primary group-hover:underline">
              Ver consultorio y mapa →
            </span>
          </Link>
        ))}
      </div>

      {/* Contacto rápido */}
      <section className="mt-12 bg-light-blue rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold text-navy mb-2">
          ¿En qué consultorio le queda mejor?
        </h2>
        <p className="text-sm text-midnight/70 mb-5">
          Contáctenos y le orientamos según su ubicación.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <BotonAgendar className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-5 py-2.5 rounded-full cta-primary">
            Agendar cita
          </BotonAgendar>
          <a
            href="tel:+528183178342"
            className="inline-flex items-center gap-2 border border-navy/20 text-navy font-medium px-5 py-2.5 rounded-full cta-secondary"
          >
            Llamar: 81 8317 8342
          </a>
          <WhatsAppCTA
            text="Enviar mensaje"
            className="inline-flex items-center gap-2 border border-navy/20 text-navy font-medium px-5 py-2.5 rounded-full cta-secondary"
          />
        </div>
      </section>
    </article>
  )
}
