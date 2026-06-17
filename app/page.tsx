import Image from "next/image"
import FAQAccordion from "@/components/FAQAccordion"
import TestimonialCarousel from "@/components/TestimonialCarousel"
import { JsonLd } from "@/components/JsonLd"
import { faqPageSchema, serviceSchemas } from "@/lib/schemas"
import BotonAgendar from "@/components/BotonAgendar"

const WA_URL =
  "https://wa.me/528183178342?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20con%20el%20Dr.%20V%C3%A1zquez."

const CONDITIONS = [
  "Artritis reumatoide",
  "Lupus eritematoso sistémico",
  "Osteoporosis",
  "Fibromialgia",
  "Espondilitis anquilosante",
  "Síndrome de Sjögren",
  "Artritis psoriásica",
  "Vasculitis",
  "Artrosis (osteoartritis)",
  "Dolor de hombro",
  "Gota",
  "Hernias de disco",
]

const CREDENTIALS = [
  {
    label: "Médico Cirujano Partero",
    institution: "Universidad Autónoma de Nuevo León (UANL)",
  },
  {
    label: "Especialidad en Medicina Interna",
    institution: "Universidad Nacional Autónoma de México (UNAM)",
  },
  {
    label: "Especialidad en Reumatología",
    institution: "Universidad Nacional Autónoma de México (UNAM)",
  },
  {
    label: "Certificado por el Colegio Mexicano de Reumatología",
    institution: "Colegio Mexicano de Reumatología",
  },
  {
    label: "Tesorero de la Mesa Directiva",
    institution: "Colegio Mexicano de Reumatología",
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPageSchema} />
      {serviceSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center overflow-hidden"
        aria-label="Presentación"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/hero-home.jpg"
            alt="Consultorio reumatológico moderno en Monterrey — Dr. Hernán Vázquez Reumatólogo"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(26,56,116,0.92) 0%, rgba(26,56,116,0.78) 45%, rgba(2,115,181,0.45) 75%, rgba(2,115,181,0.15) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-28 pb-20 lg:py-0 w-full">
          <div className="max-w-2xl xl:max-w-3xl">
            <p className="hero-eyebrow inline-flex items-center gap-2 text-blue-200 text-xs font-semibold tracking-widest uppercase mb-6">
              <span className="w-6 h-px bg-blue-300 flex-shrink-0" />
              Reumatólogo certificado · Monterrey, N.L.
            </p>

            <h1 className="hero-heading heading-display text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6">
              Especialista en Artritis, Lupus y{" "}
              <span className="text-blue-300">Dolor Articular</span> en Monterrey
            </h1>

            <p className="hero-subtext text-blue-100/90 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              El Dr. Hernán Vázquez es médico reumatólogo certificado con más de 10 años de
              experiencia en el diagnóstico y tratamiento de enfermedades del sistema
              musculoesquelético. Atiende en el Centro Médico Muguerza Hospital Sur
              y ofrece consulta por videollamada a nivel nacional.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row gap-4">
              <BotonAgendar className="inline-flex items-center justify-center gap-3 bg-primary text-white font-semibold text-base px-7 py-4 rounded-full cta-primary shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Agendar mi cita
              </BotonAgendar>
              <a
                href="tel:+528183178342"
                className="inline-flex items-center justify-center gap-2 border border-white/50 text-white font-medium text-base px-7 py-4 rounded-full cta-secondary hover:bg-white/10"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.81 19.79 19.79 0 01.01 2.22 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
                </svg>
                Tel. 81 8317 8342
              </a>
            </div>

            <div className="hero-trust flex flex-wrap gap-x-6 gap-y-2 mt-10">
              {["+10 años de experiencia", "Certificado CMR", "Muguerza Hospital Sur"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2 text-blue-200 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-300 flex-shrink-0" />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase">Explorar</span>
          <div className="w-px h-8 bg-white/30 animate-pulse" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TRUST STRIP
      ══════════════════════════════════════════ */}
      <section className="bg-navy py-8" aria-label="Credenciales destacadas" data-reveal>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
            {[
              { value: "+10 años", label: "de experiencia clínica en reumatología" },
              { value: "Único", label: "reumatólogo en Muguerza Hospital Sur" },
              { value: "CMR", label: "Certificado por el Colegio Mexicano de Reumatología" },
              { value: "UNAM", label: "Especialidades en Medicina Interna y Reumatología" },
            ].map((stat) => (
              <div key={stat.value} className="text-center lg:px-8">
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-blue-200 text-xs leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICIOS / CONDICIONES
      ══════════════════════════════════════════ */}
      <section
        id="servicios"
        className="py-20 md:py-28 lg:py-32"
        aria-label="Servicios y condiciones tratadas"
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-2xl mb-16" data-reveal>
            <p className="section-label mb-4">Especialidades</p>
            <h2 className="heading-display text-3xl md:text-4xl font-bold text-midnight mb-5">
              Condiciones que tratamos
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed">
              Más de 10 años de experiencia en el diagnóstico y tratamiento de enfermedades
              reumáticas complejas. Desde la primera consulta hasta el seguimiento a largo
              plazo, usted tendrá el tiempo y la atención que merece.
            </p>
          </div>

          <div className="card-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Card 1 — Artritis */}
            <article className="card-item service-card rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/service-artritis.jpg"
                  alt="Tratamiento de artritis y dolor articular — especialista en Monterrey"
                  fill
                  className="card-image object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className="section-label text-xs mb-3">Condición principal</p>
                <h3 className="text-xl font-bold text-midnight mb-3">
                  Artritis y Dolor Articular
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-5">
                  Diagnóstico y tratamiento personalizado de artritis reumatoide, osteoartritis,
                  gota y dolor articular crónico. Si tiene dolor que persiste más de seis semanas,
                  la valoración reumatológica es el primer paso.
                </p>
                <BotonAgendar className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all">
                  Agendar cita
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </BotonAgendar>
              </div>
            </article>

            {/* Card 2 — Lupus & Autoinmunes */}
            <article className="card-item service-card rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/service-consulta.jpg"
                  alt="Consulta médica reumatológica personalizada en Monterrey"
                  fill
                  className="card-image object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className="section-label text-xs mb-3">Enfermedades autoinmunes</p>
                <h3 className="text-xl font-bold text-midnight mb-3">
                  Lupus y Enfermedades Autoinmunes
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-5">
                  El Dr. Vázquez está formado como internista y reumatólogo, lo que le permite
                  manejar el compromiso multiorgánico del lupus, espondilitis anquilosante,
                  síndrome de Sjögren y vasculitis.
                </p>
                <BotonAgendar className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all">
                  Agendar cita
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </BotonAgendar>
              </div>
            </article>

            {/* Card 3 — Condiciones adicionales */}
            <article className="card-item rounded-2xl overflow-hidden bg-light-blue p-6 md:col-span-2 lg:col-span-1">
              <p className="section-label text-xs mb-3">Y también tratamos</p>
              <h3 className="text-xl font-bold text-midnight mb-5">
                Otras Condiciones Reumáticas
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {CONDITIONS.map((cond) => (
                  <li key={cond} className="flex items-start gap-2 text-sm text-midnight/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {cond}
                  </li>
                ))}
              </ul>
              <BotonAgendar className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-3 rounded-full mt-6 cta-primary">
                Consultar disponibilidad
              </BotonAgendar>
            </article>
          </div>

          {/* Modalidades */}
          <div className="grid grid-cols-2 gap-6 border-t border-gray-100 pt-10 max-w-xl mx-auto" data-reveal>
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                ),
                label: "Consulta presencial",
                detail: "Centro Médico Muguerza Hospital Sur, Monterrey",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="23 7 16 12 23 17 23 7"/>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                  </svg>
                ),
                label: "Videollamada",
                detail: "Cobertura nacional. Misma calidad de atención",
              },
            ].map((mode) => (
              <div key={mode.label} className="text-center px-2">
                <div className="w-12 h-12 rounded-xl bg-light-blue flex items-center justify-center mx-auto mb-3 text-primary">
                  {mode.icon}
                </div>
                <p className="font-semibold text-midnight text-sm">{mode.label}</p>
                <p className="text-muted text-xs mt-1 leading-snug">{mode.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SOBRE EL DOCTOR (AUTORIDAD)
      ══════════════════════════════════════════ */}
      <section
        id="autoridad"
        className="py-20 md:py-28 lg:py-32 bg-midnight overflow-hidden"
        aria-label="Sobre el Dr. Hernán Vázquez"
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative" data-reveal>
              <div className="relative aspect-[4/5] max-w-sm mx-auto lg:max-w-none rounded-2xl overflow-hidden">
                <Image
                  src="/images/about-doctor.jpg"
                  alt="Dr. Hernán Vázquez, Reumatólogo con más de 10 años de experiencia en Monterrey"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 80vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-primary text-white rounded-xl px-5 py-4 shadow-xl">
                <p className="text-2xl font-bold leading-none">+10</p>
                <p className="text-xs text-blue-200 mt-0.5">años de experiencia</p>
              </div>
            </div>

            <div data-reveal>
              <p className="section-label mb-4" style={{ color: "#60a5fa" }}>
                Acerca del especialista
              </p>
              <h2 className="heading-display text-3xl md:text-4xl font-bold text-white mb-6">
                Dr. Hernán Vázquez
                <br />
                <span className="text-blue-300">Médico Reumatólogo</span>
              </h2>

              <p className="text-blue-100/80 leading-relaxed mb-8">
                El Dr. Hernán Vázquez es médico reumatólogo certificado por el Colegio Mexicano
                de Reumatología con más de 10 años de experiencia clínica. Egresado como médico
                cirujano partero de la UANL, realizó sus especialidades en Medicina Interna y
                Reumatología en la UNAM. Atiende en el Centro Médico Muguerza Hospital Sur,
                donde es el único reumatólogo disponible, y ofrece también consulta por
                videollamada para pacientes a nivel nacional.
              </p>

              <div className="mb-8">
                <p className="text-xs font-semibold tracking-widest uppercase text-blue-300/70 mb-4">
                  Formación y certificaciones
                </p>
                <ul className="cred-list space-y-3">
                  {CREDENTIALS.map((cred) => (
                    <li key={cred.label} className="cred-item flex gap-3 items-start">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>
                        <span className="text-white font-medium text-sm">{cred.label}</span>
                        <span className="text-blue-200/60 text-xs block mt-0.5">
                          {cred.institution}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <blockquote className="border-l-2 border-primary pl-5 text-blue-100/70 italic text-sm leading-relaxed mb-8">
                &ldquo;Mi compromiso no termina en la consulta. El seguimiento continuo —antes,
                durante y después— es lo que marca la diferencia en enfermedades crónicas
                como la artritis o el lupus.&rdquo;
              </blockquote>

              <BotonAgendar className="inline-flex items-center gap-3 bg-primary text-white font-semibold px-7 py-4 rounded-full cta-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Agendar consulta
              </BotonAgendar>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIOS
      ══════════════════════════════════════════ */}
      <section
        id="testimonios"
        className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
        aria-label="Testimonios de pacientes"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/testimonials-bg.jpg"
            alt="Pacientes satisfechos del Dr. Hernán Vázquez, Reumatólogo en Monterrey"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12" data-reveal>
            <p className="section-label mb-4" style={{ color: "#93c5fd" }}>
              Pacientes
            </p>
            <h2 className="heading-display text-3xl md:text-4xl font-bold text-white">
              Lo que dicen nuestros pacientes
            </h2>
          </div>

          <div data-reveal>
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQs
      ══════════════════════════════════════════ */}
      <section
        id="faqs"
        className="py-20 md:py-28 lg:py-32 bg-gray-50"
        aria-label="Preguntas frecuentes"
      >
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14" data-reveal>
            <p className="section-label mb-4">Preguntas frecuentes</p>
            <h2 className="heading-display text-3xl md:text-4xl font-bold text-midnight mb-5">
              Resolvemos sus dudas
            </h2>
            <p className="text-muted leading-relaxed max-w-xl mx-auto">
              Si tiene dolor articular persistente, rigidez matutina o sospecha de una enfermedad
              autoinmune, aquí encontrará respuestas claras. No reemplazan la consulta médica.
            </p>
          </div>

          <div
            className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 md:px-10 py-2"
            data-reveal
          >
            <FAQAccordion />
          </div>

          <div className="text-center mt-10" data-reveal-fast>
            <p className="text-muted text-sm mb-5">¿Listo para dar el primer paso?</p>
            <BotonAgendar className="inline-flex items-center gap-3 bg-primary text-white font-semibold px-7 py-4 rounded-full cta-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Agendar una cita
            </BotonAgendar>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          UBICACIÓN Y CONTACTO
      ══════════════════════════════════════════ */}
      <section
        id="ubicacion"
        className="py-20 md:py-28 lg:py-32"
        aria-label="Ubicación y datos de contacto"
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div data-reveal>
              <p className="section-label mb-4">Ubicación</p>
              <h2 className="heading-display text-3xl md:text-4xl font-bold text-midnight mb-6">
                Consulta en Monterrey
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                El Dr. Hernán Vázquez atiende en el Centro Médico Muguerza Hospital Sur,
                donde es el único reumatólogo disponible en esa unidad. También ofrece
                consulta por videollamada para pacientes en todo el país.
              </p>

              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-light-blue flex items-center justify-center text-primary flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-midnight text-sm">Consultorio principal</p>
                    <p className="text-muted text-sm mt-0.5">
                      Centro Médico Muguerza Hospital Sur
                      <br />
                      Monterrey, Nuevo León, México
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-light-blue flex items-center justify-center text-primary flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.81 19.79 19.79 0 01.01 2.22 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-midnight text-sm">Teléfonos</p>
                    <p className="text-muted text-sm mt-0.5">
                      Citas:{" "}
                      <a href="tel:+528183178342" className="text-primary hover:underline font-medium">
                        81 8317 8342
                      </a>
                    </p>
                    <p className="text-muted text-sm">
                      Urgencias:{" "}
                      <a href="tel:+528120405582" className="text-primary hover:underline font-medium">
                        81 2040 5582
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-light-blue flex items-center justify-center text-primary flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-midnight text-sm">WhatsApp</p>
                    <a
                      href={WA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Agendar cita por WhatsApp"
                      className="text-primary hover:underline font-medium text-sm"
                    >
                      Enviar mensaje al consultorio
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-light-blue flex items-center justify-center text-primary flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 8v4l3 3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-midnight text-sm">Cobertura geográfica</p>
                    <p className="text-muted text-sm mt-0.5">
                      Monterrey · San Pedro Garza García ·
                      <br />
                      Zona Citrícola de N.L. · Videollamada nacional
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div
              className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-96 lg:h-[480px]"
              data-reveal
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57552.19!2d-100.3161!3d25.6866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662be4db55edc71%3A0xe6bed43ab7afe9c7!2sHospital%20Muguerza%20Sur!5e0!3m2!1ses!2smx!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del consultorio Dr. Hernán Vázquez en Monterrey"
                aria-label="Mapa de ubicación del consultorio reumatológico en Monterrey"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA FINAL / CONTACTO
      ══════════════════════════════════════════ */}
      <section
        id="contacto"
        className="relative py-24 md:py-32 overflow-hidden"
        aria-label="Agendar cita"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/contact-bg.jpg"
            alt="Agenda tu cita con el Dr. Hernán Vázquez, Reumatólogo en Monterrey"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(26,56,116,0.95) 0%, rgba(26,56,116,0.88) 50%, rgba(2,115,181,0.75) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 lg:px-8 text-center" data-reveal>
          <p className="section-label mb-5" style={{ color: "#93c5fd" }}>
            Dar el primer paso
          </p>
          <h2 className="heading-display text-3xl md:text-5xl font-bold text-white mb-6">
            ¿Tiene dolor en las articulaciones
            <br className="hidden md:block" />
            que no desaparece?
          </h2>
          <p className="text-blue-100/85 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            No espere a que el dolor se vuelva insoportable. Un diagnóstico temprano puede
            detener el daño articular y mejorar su calidad de vida de forma significativa.
            Agendamos su cita en menos de 24 horas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BotonAgendar className="inline-flex items-center justify-center gap-3 bg-white text-navy font-bold text-base px-8 py-4 rounded-full cta-primary shadow-xl">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Agendar mi cita
            </BotonAgendar>
            <a
              href="tel:+528183178342"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold text-base px-8 py-4 rounded-full cta-secondary hover:border-white/70 hover:bg-white/10"
            >
              Llamar: 81 8317 8342
            </a>
          </div>

          <p className="mt-8 text-blue-200/60 text-xs">
            Respondemos en horario de consulta · Lunes a sábado · Consulta presencial y
            videollamada
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer className="bg-midnight text-white/60 py-12" aria-label="Pie de página">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-10 pb-10 border-b border-white/10">
            <div>
              <p className="text-white font-bold text-base mb-1">Dr. Hernán Vázquez</p>
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
                Médico Reumatólogo
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                Especialista en artritis, lupus, fibromialgia y enfermedades autoinmunes.
                Certificado por el Colegio Mexicano de Reumatología. Más de 10 años de
                experiencia en Monterrey, Nuevo León.
              </p>
            </div>

            <div>
              <p className="text-white text-sm font-semibold mb-4">Navegación</p>
              <ul className="space-y-2">
                {[
                  { label: "Servicios", href: "#servicios" },
                  { label: "Dr. Vázquez", href: "#autoridad" },
                  { label: "Testimonios", href: "#testimonios" },
                  { label: "Preguntas frecuentes", href: "#faqs" },
                  { label: "Ubicación y contacto", href: "#ubicacion" },
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-white text-sm font-semibold mb-4">Contacto y datos</p>
              <address className="not-italic space-y-3 text-sm">
                <div>
                  <span className="text-white/40 text-xs block mb-0.5">Consultorio</span>
                  <span>
                    Centro Médico Muguerza Hospital Sur
                    <br />
                    Monterrey, Nuevo León, México
                  </span>
                </div>
                <div>
                  <span className="text-white/40 text-xs block mb-0.5">Citas</span>
                  <a href="tel:+528183178342" className="hover:text-white transition-colors">
                    81 8317 8342
                  </a>
                </div>
                <div>
                  <span className="text-white/40 text-xs block mb-0.5">Urgencias</span>
                  <a href="tel:+528120405582" className="hover:text-white transition-colors">
                    81 2040 5582
                  </a>
                </div>
                <div>
                  <span className="text-white/40 text-xs block mb-0.5">Cobertura</span>
                  <span>
                    Monterrey · San Pedro Garza García
                    <br />
                    Videollamada nacional
                  </span>
                </div>
              </address>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
            <p>
              &copy; {new Date().getFullYear()} Dr. Hernán Vázquez — Reumatólogo Monterrey.
              Todos los derechos reservados.
            </p>
            <p>
              La información de este sitio es orientativa y no sustituye la consulta médica
              profesional.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
