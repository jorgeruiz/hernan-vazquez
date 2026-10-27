import Image from "next/image"
import Link from "next/link"

interface Props {
  lastReviewed: string
  isDraft?: boolean
}

export default function DoctorAuthorBox({ lastReviewed, isDraft = true }: Props) {
  return (
    <aside className="border border-light-blue rounded-xl p-5 sm:p-6 bg-light-blue/30 mt-10">
      {isDraft && (
        <p className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-1.5 mb-4 inline-block">
          Contenido pendiente de revision por el Dr. Hernan Vazquez Gonzalez
        </p>
      )}
      <div className="flex items-start gap-4">
        <Image
          src="/images/about-doctor.jpg"
          alt="Dr. Hernán Vázquez González"
          width={64}
          height={64}
          className="rounded-full w-14 h-14 sm:w-16 sm:h-16 object-cover flex-shrink-0"
        />
        <div className="min-w-0">
          <p className="text-sm text-muted mb-1">Escrito y revisado por</p>
          <Link
            href="/dr-hernan-vazquez-gonzalez"
            className="text-base font-bold text-navy hover:text-primary transition-colors"
          >
            Dr. Hernan Vazquez Gonzalez
          </Link>
          <p className="text-sm text-muted mt-1">
            Reumatologo certificado por el Colegio Mexicano de Reumatologia.
            <br />
            Cedulas profesionales: 5563127, 7440332, 09076347.
          </p>
          <p className="text-xs text-muted mt-2">
            Ultima revision: {lastReviewed}
          </p>
        </div>
      </div>
    </aside>
  )
}
