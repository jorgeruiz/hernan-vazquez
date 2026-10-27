"use client"

import { createContext, useContext, useState, useCallback } from "react"

interface WhatsAppFormContextValue {
  isOpen: boolean
  openForm: () => void
  closeForm: () => void
}

const WhatsAppFormContext = createContext<WhatsAppFormContextValue>({
  isOpen: false,
  openForm: () => {},
  closeForm: () => {},
})

export function WhatsAppFormProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const openForm = useCallback(() => setIsOpen(true), [])
  const closeForm = useCallback(() => setIsOpen(false), [])

  return (
    <WhatsAppFormContext.Provider value={{ isOpen, openForm, closeForm }}>
      {children}
    </WhatsAppFormContext.Provider>
  )
}

export function useWhatsAppForm() {
  return useContext(WhatsAppFormContext)
}
