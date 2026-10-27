import type { Metadata } from "next"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import WhatsAppCTA from "@/components/WhatsAppCTA"
import BotonAgendar from "@/components/BotonAgendar"
import { JsonLd } from "@/components/JsonLd"
import { buildClinicSchema } from "@/lib/internal-schemas"

export const metadata: Metadata = {
  title: "Reumatólogo en CARE Medical Hub, Galerías Monterrey | Dr. Hernán Vázquez González",
  description:
    "Consulta de reumatología en CARE Medical Hub, Bolivia 103, Piso 12, Consultorio 14, Balcones de Galerías, Monterrey. Tel. 81 8317 8342.",
  alternates: {
    canonical: "/consultorios/care-medical-hub",
  },
  openGraph: {
    title: "Reumatólogo en CARE Medical Hub | Dr. Hernán Vázquez González",
    description:
      "Consulta de reumatología en CARE Medical Hub, Balcones de Galerías, Monterrey.",
    url: "/consultorios/care-medical-hub",
  },
}

const clinicSchema = buildClinicSchema({
  name: "Consultorio de Reumatología — CARE Medical Hub",
  description:
    "Consulta de reumatología con el Dr. Hernán Vázquez González en CARE Medical Hub, Balcones de Galerías, Monterrey.",
  streetAddress: "Bolivia 103, Piso 12, Consultorio 14, Balcones de Galerías",
  postalCode: "64620",
  locality: "Monterrey",
  region: "Nuevo León",
  telephone: "+52-81-8317-8342",
  url: "/consultorios/care-medical-hub",
  geo: { lat: 25.6866, lng: -100.3571 },
})

export default function CareMedicalHubPage() {
  return (
    <>
      <JsonLd data={clinicSchema} />

      <article className="max-w-4xl mx-auto px-5 lg:px-8 py-8 lg:py-12">
        <Breadcrumbs
          items={[
            { label: "Consultorios", href: "/consultorios/christus-muguerza-sur" },
            { label: "CARE Medical Hub", href: "/consultorios/care-medical-hub" },
          ]}
        />

        <header className="mt-8">
          <p className="section-label mb-3">Consultorio</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy heading-display">
            Reumatólogo en CARE Medical Hub — Balcones de Galerías
          </h1>
        </header>

        <p className="text-base text-midnight/80 leading-relaxed mt-6">
          El{" "}
          <Link href="/dr-hernan-vazquez-gonzalez" className="text-primary font-medium hover:underline">
            Dr. Hernán Vázquez González
          </Link>{" "}
          atiende consulta de reumatología en CARE Medical Hub, ubicado en la
          zona de Galerías Monterrey. Este consultorio ofrece atención
          especializada en enfermedades reumáticas y autoinmunes para pacientes
          de San Pedro Garza García, San Jerónimo, Valle Oriente y zonas aledañas.
        </p>

        {/* Datos de contacto */}
        <section className="mt-10 grid sm:grid-cols-2 gap-6">
          <div className="border border-gray-100 rounded-xl p-6 bg-light-blue/20">
            <h2 className="font-bold text-navy text-lg mb-3">Ubicación</h2>
            <address className="not-italic text-sm text-midnight/80 space-y-1">
              <p className="font-medium">CARE Medical Hub</p>
              <p>Bolivia 103, Piso 12, Consultorio 14</p>
              <p>Balcones de Galerías</p>
              <p>Monterrey, Nuevo León, C.P. 64620</p>
            </address>
          </div>

          <div className="border border-gray-100 rounded-xl p-6">
            <h2 className="font-bold text-navy text-lg mb-3">Contacto</h2>
            <div className="text-sm space-y-2 text-midnight/80">
              <p>
                <strong>Citas:</strong>{" "}
                <a href="tel:+528183178342" className="text-primary hover:underline">
                  81 8317 8342
                </a>
              </p>
              <p>
                <strong>WhatsApp:</strong>{" "}
                <a href="https://wa.me/528125656698" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  81 2565 6698
                </a>
              </p>
              <p>
                <strong>Urgencias:</strong>{" "}
                <a href="tel:+528120405582" className="text-primary hover:underline">
                  81 2040 5582
                </a>
              </p>
              {/* TODO: Horarios de consulta */}
            </div>
          </div>
        </section>

        {/* Mapa */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-navy mb-4">
            ¿Cómo llegar?
          </h2>
          {/* TODO: Verificar URL del embed de Google Maps */}
          <div className="rounded-xl overflow-hidden border border-gray-100 aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.123!2d-100.3571!3d25.6866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCARE+Medical+Hub!5e0!3m2!1ses!2smx!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación CARE Medical Hub, Balcones de Galerías"
            />
          </div>
        </section>

        {/* Enfermedades atendidas */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-navy mb-4">
            Enfermedades que se atienden en este consultorio
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: "Artritis reumatoide", slug: "artritis-reumatoide" },
              { label: "Lupus", slug: "lupus" },
              { label: "Fibromialgia", slug: "fibromialgia" },
              { label: "Gota", slug: "gota" },
              { label: "Osteoporosis", slug: "osteoporosis" },
              { label: "Espondilitis anquilosante", slug: "espondilitis-anquilosante" },
              { label: "Artrosis", slug: "artrosis" },
            ].map((e) => (
              <Link
                key={e.slug}
                href={`/enfermedades/${e.slug}`}
                className="flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-100 hover:border-primary/30 hover:bg-light-blue/20 transition-all text-sm font-medium text-midnight/80 hover:text-primary"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {e.label}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-navy rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Agende su cita en CARE Medical Hub
          </h2>
          <p className="text-white/70 text-sm mb-6 max-w-lg mx-auto">
            Atención reumatológica en la zona de Galerías Monterrey.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <BotonAgendar className="inline-flex items-center gap-2 bg-white text-navy font-semibold px-6 py-3 rounded-full cta-primary text-sm">
              Agendar cita
            </BotonAgendar>
            <WhatsAppCTA
              text="WhatsApp"
              message="Hola, me gustaría agendar una cita en CARE Medical Hub con el Dr. Vázquez González."
            />
          </div>
        </section>

        {/* Otro consultorio */}
        <section className="mt-10 border-t border-gray-100 pt-8">
          <p className="text-sm text-muted mb-2">Otro consultorio disponible:</p>
          <Link
            href="/consultorios/christus-muguerza-sur"
            className="text-primary font-semibold hover:underline"
          >
            Hospital Christus Muguerza Sur — Zona sur de Monterrey →
          </Link>
        </section>
      </article>
    </>
  )
}
