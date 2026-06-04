"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Dr. Vázquez", href: "#autoridad" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Preguntas", href: "#faqs" },
  { label: "Contacto", href: "#contacto" },
]

const WA_URL =
  "https://wa.me/528183178342?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20con%20el%20Dr.%20V%C3%A1zquez."

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close drawer on route change (anchor click)
  const handleNavClick = () => setDrawerOpen(false)

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [drawerOpen])

  return (
    <>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded"
      >
        Ir al contenido principal
      </a>

      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          scrolled ? "nav-scrolled" : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-16 lg:h-18"
          aria-label="Navegación principal"
        >
          {/* Logo */}
          <Link
            href="#inicio"
            className="flex flex-col leading-none"
            onClick={handleNavClick}
          >
            <span
              className={`text-sm font-bold tracking-wide transition-colors ${
                scrolled ? "text-navy" : "text-white"
              }`}
            >
              Dr. Hernán Vázquez
            </span>
            <span
              className={`text-xs font-medium tracking-widest uppercase transition-colors ${
                scrolled ? "text-primary" : "text-blue-200"
              }`}
            >
              Reumatólogo
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link text-sm font-medium transition-colors hover:text-primary ${
                    scrolled ? "text-midnight/80" : "text-white/90"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar cita por WhatsApp"
            className="hidden lg:inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full cta-primary"
            onClick={() => {
              if (typeof window !== "undefined" && (window as Window & typeof globalThis & { dataLayer?: unknown[] }).dataLayer) {
                (window as Window & typeof globalThis & { dataLayer: unknown[] }).dataLayer.push({ event: "cta_click", method: "whatsapp" })
              }
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Agendar cita
          </a>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrolled ? "text-midnight" : "text-white"
            }`}
            aria-label="Abrir menú"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
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
          <span className="font-bold text-navy text-sm">Dr. Hernán Vázquez</span>
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            className="p-1 text-gray-500"
            aria-label="Cerrar menú"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <ul className="flex flex-col px-6 py-6 gap-5">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleNavClick}
                className="text-base font-medium text-midnight/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="px-6 pb-8 mt-auto">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar cita por WhatsApp"
            onClick={handleNavClick}
            className="flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 rounded-full cta-primary w-full"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Agendar cita por WhatsApp
          </a>
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
