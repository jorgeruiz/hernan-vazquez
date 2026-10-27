import type { Metadata } from "next"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import WhatsAppCTA from "@/components/WhatsAppCTA"
import BotonAgendar from "@/components/BotonAgendar"
import { JsonLd } from "@/components/JsonLd"
import { buildTelemedicineSchema } from "@/lib/internal-schemas"

export const metadata: Metadata = {
  title: "Consulta de Reumatología en Línea | Dr. Hernán Vázquez González",
  description:
    "Consulta de reumatología por videollamada con cobertura nacional. Diagnóstico y seguimiento de artritis, lupus, fibromialgia y más. Tel. 81 8317 8342.",
  alternates: {
    canonical: "/consulta-en-linea",
  },
  openGraph: {
    title: "Consulta de Reumatología en Línea | Dr. Hernán Vázquez González",
    description:
      "Consulta de reumatología por videollamada. Cobertura en toda la República Mexicana.",
    url: "/consulta-en-linea",
  },
}

const BENEFITS = [
  {
    title: "Cobertura nacional",
    description:
      "Atienda su consulta desde cualquier estado de la República Mexicana, sin necesidad de trasladarse.",
  },
  {
    title: "Misma calidad de atención",
    description:
      "El Dr. Vázquez González dedica el mismo tiempo y atención que en una consulta presencial: revisión de estudios, diagnóstico y plan de tratamiento.",
  },
  {
    title: "Seguimiento continuo",
    description:
      "Ideal para pacientes que ya tienen diagnóstico y requieren seguimiento, ajuste de medicamento o revisión de estudios de laboratorio.",
  },
  {
    title: "Sin desplazamiento",
    description:
      "Especialmente útil para pacientes con movilidad limitada, adultos mayores o quienes viven lejos de Monterrey.",
  },
]

const SUITABLE_FOR = [
  "Seguimiento de artritis reumatoide, lupus, fibromialgia y otras enfermedades reumáticas",
  "Revisión de estudios de laboratorio e imagen",
  "Ajuste de tratamiento y medicamentos",
  "Segunda opinión reumatológica",
  "Valoración inicial de síntomas reumáticos",
]

export default function ConsultaEnLineaPage() {
  return (
    <>
      <JsonLd data={buildTelemedicineSchema()} />

      <article className="max-w-4xl mx-auto px-5 lg:px-8 py-8 lg:py-12">
        <Breadcrumbs
          items={[{ label: "Consulta en línea", href: "/consulta-en-linea" }]}
        />

        <header className="mt-8">
          <p className="section-label mb-3">Telemedicina</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy heading-display">
            Consulta de reumatología por videollamada
          </h1>
          <p className="text-base text-midnight/80 leading-relaxed mt-4 max-w-2xl">
            El{" "}
            <Link href="/dr-hernan-vazquez-gonzalez" className="text-primary font-medium hover:underline">
              Dr. Hernán Vázquez González
            </Link>{" "}
            ofrece consulta de reumatología por videollamada con cobertura en
            toda la República Mexicana. El mismo nivel de atención especializada,
            desde la comodidad de su hogar.
          </p>
        </header>

        {/* Beneficios */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-navy mb-6">
            ¿Por qué consultar en línea?
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="border border-gray-100 rounded-xl p-5"
              >
                <h3 className="font-bold text-navy text-base mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-midnight/70 leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Para qué sirve */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-navy mb-4">
            ¿Para qué casos es adecuada la videollamada?
          </h2>
          <ul className="space-y-3">
            {SUITABLE_FOR.map((item) => (
              <li key={item} className="flex items-start gap-3 text-midnight/80">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted mt-4">
            Para exploración física articular detallada o procedimientos como
            infiltraciones, se recomienda la{" "}
            <Link href="/consultorios/christus-muguerza-sur" className="text-primary hover:underline">
              consulta presencial
            </Link>
            .
          </p>
        </section>

        {/* Cómo funciona */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-navy mb-6">
            ¿Cómo funciona?
          </h2>
          <ol className="space-y-5">
            {[
              {
                step: "1",
                title: "Agende su cita",
                desc: "Contacte por WhatsApp o teléfono para programar su videollamada.",
              },
              {
                step: "2",
                title: "Envíe sus estudios",
                desc: "Comparta sus estudios de laboratorio e imagen previos por WhatsApp antes de la cita.",
              },
              {
                step: "3",
                title: "Consulta por videollamada",
                desc: "El Dr. Vázquez González revisará su caso, hará preguntas sobre sus síntomas y le dará su diagnóstico y plan de tratamiento.",
              },
              {
                step: "4",
                title: "Seguimiento",
                desc: "Recibirá su receta y solicitudes de laboratorio de forma digital. Se programará una cita de seguimiento según su caso.",
              },
            ].map((s) => (
              <li key={s.step} className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {s.step}
                </span>
                <div>
                  <p className="font-bold text-navy">{s.title}</p>
                  <p className="text-sm text-midnight/70 mt-0.5">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-navy rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Agende su consulta en línea
          </h2>
          <p className="text-white/70 text-sm mb-6 max-w-lg mx-auto">
            Atención reumatológica desde cualquier parte de México.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <BotonAgendar className="inline-flex items-center gap-2 bg-white text-navy font-semibold px-6 py-3 rounded-full cta-primary text-sm">
              Agendar videollamada
            </BotonAgendar>
            <WhatsAppCTA
              text="WhatsApp"
              message="Hola, me gustaría agendar una consulta por videollamada con el Dr. Vázquez González."
            />
          </div>
        </section>

        {/* Consultorios presenciales */}
        <section className="mt-10 border-t border-gray-100 pt-8">
          <p className="text-sm text-muted mb-3">
            ¿Prefiere consulta presencial? El Dr. Vázquez atiende en dos
            consultorios en Monterrey:
          </p>
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
