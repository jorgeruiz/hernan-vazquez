import Link from "next/link"

const CONDITION_LINKS = [
  { label: "Artritis reumatoide", href: "/enfermedades/artritis-reumatoide" },
  { label: "Lupus", href: "/enfermedades/lupus" },
  { label: "Fibromialgia", href: "/enfermedades/fibromialgia" },
  { label: "Gota", href: "/enfermedades/gota" },
  { label: "Osteoporosis", href: "/enfermedades/osteoporosis" },
  { label: "Espondilitis anquilosante", href: "/enfermedades/espondilitis-anquilosante" },
  { label: "Artrosis", href: "/enfermedades/artrosis" },
]

const QUICK_LINKS = [
  { label: "Dr. Hernán Vázquez González", href: "/dr-hernan-vazquez-gonzalez" },
  { label: "Hospital Christus Muguerza Sur", href: "/consultorios/christus-muguerza-sur" },
  { label: "CARE Medical Hub", href: "/consultorios/care-medical-hub" },
  { label: "Consulta en línea", href: "/consulta-en-linea" },
]

export default function InternalFooter() {
  return (
    <footer className="bg-midnight text-white/80">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Columna 1: Doctor */}
          <div>
            <p className="text-white font-bold text-base mb-1">
              Dr. Hernán Vázquez González
            </p>
            <p className="text-sm text-white/60 mb-4">
              Reumatólogo certificado por el CMR
            </p>
            <div className="text-sm space-y-1.5">
              <p>Cédulas: 5563127, 7440332, 09076347</p>
              <p>
                <a href="tel:+528183178342" className="hover:text-white transition-colors">
                  Citas: 81 8317 8342
                </a>
              </p>
              <p>
                <a href="https://wa.me/528125656698" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: 81 2565 6698
                </a>
              </p>
              <p>
                <a href="tel:+528120405582" className="hover:text-white transition-colors">
                  Urgencias: 81 2040 5582
                </a>
              </p>
            </div>
          </div>

          {/* Columna 2: Consultorios */}
          <div>
            <p className="text-white font-semibold text-sm mb-3">Consultorios</p>
            <ul className="space-y-2 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Enfermedades */}
          <div>
            <p className="text-white font-semibold text-sm mb-3">Enfermedades</p>
            <ul className="space-y-2 text-sm">
              {CONDITION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Ubicaciones */}
          <div>
            <p className="text-white font-semibold text-sm mb-3">Ubicaciones</p>
            <div className="text-sm space-y-4">
              <div>
                <p className="text-white/90 font-medium">Christus Muguerza Sur</p>
                {/* TODO: Dirección de calle exacta */}
                <p>Piso 6, Consultorio 616</p>
                <p>Monterrey, N.L.</p>
              </div>
              <div>
                <p className="text-white/90 font-medium">CARE Medical Hub</p>
                <p>Bolivia 103, Piso 12, Cons. 14</p>
                <p>Balcones de Galerías</p>
                <p>Monterrey, N.L. 64620</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            {new Date().getFullYear()} Dr. Hernán Vázquez González. Todos los derechos reservados.
          </p>
          {/* TODO: Enlace a aviso de privacidad */}
          <Link href="/" className="hover:text-white/60 transition-colors">
            Inicio
          </Link>
        </div>
      </div>
    </footer>
  )
}
