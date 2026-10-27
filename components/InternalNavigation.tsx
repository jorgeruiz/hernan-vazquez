"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useAgendaCita } from "./AgendaCitaContext"

const NAV_LINKS = [
  { label: "Dr. Vázquez", href: "/dr-hernan-vazquez-gonzalez" },
  { label: "Consultorios", href: "/consultorios/christus-muguerza-sur" },
  { label: "Enfermedades", href: "/enfermedades/artritis-reumatoide" },
  { label: "Consulta en línea", href: "/consulta-en-linea" },
  { label: "Contacto", href: "/#contacto" },
]

export default function InternalNavigation() {
  const { openModal } = useAgendaCita()
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNavClick = () => setDrawerOpen(false)

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [drawerOpen])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded"
      >
        Ir al contenido principal
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          scrolled
            ? "nav-scrolled"
            : "bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-16 lg:h-18"
          aria-label="Navegación principal"
        >
          {/* Logo → home */}
          <Link
            href="/"
            className="flex items-center gap-3 leading-none"
          >
            <Image
              src="/images/isotipo-dr-hernan-vazquez-reumatologo.webp"
              alt="Dr. Hernán Vázquez — Reumatólogo en Monterrey"
              width={36}
              height={36}
              className="h-8 w-8 flex-shrink-0"
            />
            <span className="flex flex-col">
              <span className="text-sm font-bold tracking-wide text-navy">
                Dr. Hernán Vázquez
              </span>
              <span className="text-xs font-medium tracking-widest uppercase text-primary">
                Reumatólogo
              </span>
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="nav-link text-sm font-medium text-midnight/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button
            type="button"
            onClick={openModal}
            aria-label="Agendar cita"
            className="hidden lg:inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full cta-primary"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Agendar cita
          </button>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="lg:hidden p-2 rounded-md text-midnight"
            aria-label="Abrir menú"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`drawer-overlay ${drawerOpen ? "open" : ""}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-72 bg-white z-50 flex flex-col transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100">
          <span className="font-bold text-navy text-sm">
            Dr. Hernán Vázquez
          </span>
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            className="p-1 text-gray-500"
            aria-label="Cerrar menú"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col px-6 py-6 gap-5">
          <li>
            <Link
              href="/"
              onClick={handleNavClick}
              className="text-base font-medium text-midnight/80 hover:text-primary transition-colors"
            >
              Inicio
            </Link>
          </li>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={handleNavClick}
                className="text-base font-medium text-midnight/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="px-6 pb-8 mt-auto">
          <button
            type="button"
            onClick={() => {
              handleNavClick()
              openModal()
            }}
            className="flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 rounded-full cta-primary w-full"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Agendar cita
          </button>
          <a
            href="tel:+528183178342"
            className="flex items-center justify-center gap-2 text-navy font-medium py-3 mt-3 border border-navy/20 rounded-full text-sm"
          >
            Tel. 81 8317 8342
          </a>
        </div>
      </div>
    </>
  )
}
