import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import WhatsAppCTA from "@/components/WhatsAppCTA"
import BotonAgendar from "@/components/BotonAgendar"
import { JsonLd } from "@/components/JsonLd"
import { buildDoctorPageSchema } from "@/lib/internal-schemas"

export const metadata: Metadata = {
  title: "Dr. Hernán Vázquez González — Reumatólogo en Monterrey",
  description:
    "Médico reumatólogo certificado en Monterrey. 12 años como reumatólogo y 14 como internista. Certificado por el Colegio Mexicano de Reumatología. Cédulas 5563127, 7440332, 09076347.",
  alternates: {
    canonical: "/dr-hernan-vazquez-gonzalez",
  },
  openGraph: {
    title: "Dr. Hernán Vázquez González — Reumatólogo en Monterrey",
    description:
      "Reumatólogo certificado con 12 años de experiencia. Atención en Christus Muguerza Sur y CARE Medical Hub.",
    url: "/dr-hernan-vazquez-gonzalez",
    type: "profile",
  },
}

const CREDENTIALS = [
  {
    label: "Médico Cirujano Partero",
    institution: "Universidad Autónoma de Nuevo León (UANL)",
    cedula: "5563127",
  },
  {
    label: "Medicina Interna",
    institution: "Universidad Nacional Autónoma de México (UNAM)",
    cedula: "7440332",
  },
  {
    label: "Reumatología",
    institution: "Universidad Nacional Autónoma de México (UNAM)",
    cedula: "09076347",
  },
]

const CONSULTORIOS = [
  {
    nombre: "Hospital Christus Muguerza Sur",
    detalle: "Piso 6, Consultorio 616",
    ubicacion: "Monterrey, Nuevo León",
    diferenciador: "Único reumatólogo en la zona sur de Monterrey",
    href: "/consultorios/christus-muguerza-sur",
  },
  {
    nombre: "CARE Medical Hub",
    detalle: "Bolivia 103, Piso 12, Consultorio 14",
    ubicacion: "Balcones de Galerías, Monterrey, N.L. 64620",
    diferenciador: null,
    href: "/consultorios/care-medical-hub",
  },
]

export default function DoctorPage() {
  return (
    <>
      <JsonLd data={buildDoctorPageSchema()} />

      <article className="max-w-4xl mx-auto px-5 lg:px-8 py-8 lg:py-12">
        <Breadcrumbs
          items={[{ label: "Dr. Hernán Vázquez González", href: "/dr-hernan-vazquez-gonzalez" }]}
        />

        {/* Hero */}
        <section className="mt-8 flex flex-col md:flex-row gap-8 items-start">
          <Image
            src="/images/about-doctor.jpg"
            alt="Dr. Hernán Vázquez González — Reumatólogo en Monterrey"
            width={280}
            height={350}
            className="rounded-2xl w-full max-w-[280px] object-cover shadow-lg"
            priority
          />
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold text-navy heading-display">
              Dr. Hernán Vázquez González
            </h1>
            <p className="text-primary font-semibold text-lg mt-2">
              Reumatólogo en Monterrey
            </p>
            <p className="text-muted mt-4 text-base leading-relaxed">
              Médico reumatólogo certificado por el Colegio Mexicano de
              Reumatología con 12 años de experiencia como reumatólogo y 14
              como internista. Actualmente se desempeña como tesorero de la
              Mesa Directiva del Colegio Mexicano de Reumatología.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <BotonAgendar className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-5 py-2.5 rounded-full cta-primary text-sm">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Agendar cita
              </BotonAgendar>
              <WhatsAppCTA text="WhatsApp" />
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-1 mt-5 text-sm text-muted">
              <a href="tel:+528183178342" className="hover:text-primary transition-colors">
                Citas: 81 8317 8342
              </a>
              <a href="tel:+528120405582" className="hover:text-primary transition-colors">
                Urgencias: 81 2040 5582
              </a>
            </div>
          </div>
        </section>

        {/* Formación y cédulas */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy mb-6">
            Formación académica y cédulas profesionales
          </h2>
          <div className="grid gap-4">
            {CREDENTIALS.map((cred) => (
              <div
                key={cred.cedula}
                className="border border-gray-100 rounded-xl p-5 bg-light-blue/20"
              >
                <p className="font-semibold text-navy">{cred.label}</p>
                <p className="text-sm text-muted mt-1">{cred.institution}</p>
                <p className="text-sm text-primary font-medium mt-1">
                  Cédula profesional: {cred.cedula}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Certificaciones */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy mb-4">
            Certificaciones y membresías
          </h2>
          <ul className="space-y-3 text-base text-midnight/80">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
              <span>
                <strong>Certificado</strong> por el Colegio Mexicano de
                Reumatología
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
              <span>
                <strong>Tesorero</strong> de la Mesa Directiva del Colegio
                Mexicano de Reumatología
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
              <span>
                12 años de experiencia como reumatólogo y 14 como internista
              </span>
            </li>
          </ul>
        </section>

        {/* Consultorios */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy mb-6">Consultorios</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {CONSULTORIOS.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="block border border-gray-100 rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <p className="font-bold text-navy text-lg">{c.nombre}</p>
                <p className="text-sm text-muted mt-1">{c.detalle}</p>
                <p className="text-sm text-muted">{c.ubicacion}</p>
                {c.diferenciador && (
                  <p className="text-sm text-primary font-medium mt-3">
                    {c.diferenciador}
                  </p>
                )}
                <span className="inline-block mt-4 text-sm font-semibold text-primary">
                  Ver consultorio →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Consulta en línea */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy mb-4">
            Consulta en línea
          </h2>
          <p className="text-base text-midnight/80 leading-relaxed">
            El Dr. Vázquez González ofrece consulta de reumatología por
            videollamada con cobertura en toda la República Mexicana. Ideal
            para pacientes fuera de Monterrey o con dificultad para desplazarse.
          </p>
          <Link
            href="/consulta-en-linea"
            className="inline-block mt-4 text-primary font-semibold text-sm hover:underline"
          >
            Más información sobre la consulta en línea →
          </Link>
        </section>

        {/* Enfermedades */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy mb-6">
            Enfermedades que atiende
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: "Artritis reumatoide", slug: "artritis-reumatoide" },
              { label: "Lupus eritematoso sistémico", slug: "lupus" },
              { label: "Fibromialgia", slug: "fibromialgia" },
              { label: "Gota", slug: "gota" },
              { label: "Osteoporosis", slug: "osteoporosis" },
              { label: "Espondilitis anquilosante", slug: "espondilitis-anquilosante" },
              { label: "Artrosis (osteoartritis)", slug: "artrosis" },
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

        {/* Perfiles externos */}
        <section className="mt-12 border-t border-gray-100 pt-8">
          <h2 className="text-lg font-bold text-navy mb-3">
            Perfiles verificados
          </h2>
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href="https://www.doctoralia.com.mx/hernan-vazquez-gonzalez/internista-reumatologo/nuevo-leon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Doctoralia
            </a>
            <a
              href="https://www.topdoctors.mx/doctor/hernan-vazquez-gonzalez/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Top Doctors
            </a>
          </div>
        </section>
      </article>
    </>
  )
}
