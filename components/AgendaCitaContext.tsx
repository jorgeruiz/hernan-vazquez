'use client'

import { createContext, useContext, useState, useCallback } from 'react'

interface AgendaCitaContextValue {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const AgendaCitaContext = createContext<AgendaCitaContextValue | null>(null)

export function AgendaCitaProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = useCallback(() => {
    setIsOpen(true)
    if (typeof window !== 'undefined') {
      type W = Window & { dataLayer?: Record<string, unknown>[] }
      const w = window as W
      w.dataLayer = w.dataLayer || []
      w.dataLayer.push({ event: 'agendar_inicio' })
    }
  }, [])

  const closeModal = useCallback(() => setIsOpen(false), [])

  return (
    <AgendaCitaContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </AgendaCitaContext.Provider>
  )
}

export function useAgendaCita() {
  const ctx = useContext(AgendaCitaContext)
  if (!ctx) throw new Error('useAgendaCita debe usarse dentro de AgendaCitaProvider')
  return ctx
}
