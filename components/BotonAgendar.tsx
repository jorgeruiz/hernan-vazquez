'use client'

import { useAgendaCita } from './AgendaCitaContext'

interface Props {
  className?: string
  children: React.ReactNode
}

/**
 * Botón CTA reutilizable que abre el modal de agendado.
 * El caller controla todo el estilo mediante className y children.
 */
export default function BotonAgendar({ className, children }: Props) {
  const { openModal } = useAgendaCita()
  return (
    <button type="button" onClick={openModal} className={className}>
      {children}
    </button>
  )
}
