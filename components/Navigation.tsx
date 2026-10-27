"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useAgendaCita } from "./AgendaCitaContext"
import { NAV_SECTIONS, type NavSection } from "@/lib/nav-links"

export default function Navigation() {
  const { openModal } = useAgendaCita()
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNavClick = () => {
    setDrawerOpen(false)
    setOpenDropdown(null)
    setOpenMobileSection(null)
  }

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [drawerOpen])

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!openDropdown) return
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [openDropdown])

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenDropdown(label)
  }

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  const linkColor = (scrolled: boolean) =>
    scrolled ? "text-midnight/80" : "text-white/90"

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
            href="/"
            className="flex items-center gap-3 leading-none"
            onClick={handleNavClick}
          >
            <Image
              src="/images/isotipo-dr-hernan-vazquez-reumatologo.webp"
              alt="Dr. Hernán Vázquez — Reumatólogo en Monterrey"
              width={36}
              height={36}
              className="h-8 w-8 flex-shrink-0"
            />
            <span className="flex flex-col">
              <span className={`text-sm font-bold tracking-wide transition-colors ${scrolled ? "text-navy" : "text-white"}`}>
                Dr. Hernán Vázquez
              </span>
              <span className={`text-xs font-medium tracking-widest uppercase transition-colors ${scrolled ? "text-primary" : "text-blue-200"}`}>
                Reumatólogo
              </span>
            </span>
          </Link>

          {/* Desktop Mega Menu */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_SECTIONS.map((section) => (
              <DesktopDropdown
                key={section.label}
                section={section}
                scrolled={scrolled}
                isOpen={openDropdown === section.label}
                onMouseEnter={() => handleMouseEnter(section.label)}
                onMouseLeave={handleMouseLeave}
                onClick={handleNavClick}
              />
            ))}
            <li>
              <a
                href="#contacto"
                className={`nav-link text-sm font-medium px-3 py-2 transition-colors hover:text-primary ${linkColor(scrolled)}`}
              >
                Contacto
              </a>
            </li>
          </ul>

          {/* Desktop CTA */}
          <button
            type="button"
            onClick={openModal}
            aria-label="Agendar cita"
            className="hidden lg:inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full cta-primary"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Agendar cita
          </button>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className={`lg:hidden p-2 rounded-md transition-colors ${scrolled ? "text-midnight" : "text-white"}`}
            aria-label="Abrir menú"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
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
        className={`fixed top-0 right-0 bottom-0 w-80 bg-white z-50 flex flex-col transition-transform duration-300 overflow-y-auto ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100 flex-shrink-0">
          <span className="font-bold text-navy text-sm">Dr. Hernán Vázquez</span>
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            className="p-1 text-gray-500"
            aria-label="Cerrar menú"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="flex-1 px-5 py-5 space-y-1">
          {NAV_SECTIONS.map((section) => (
            <MobileSection
              key={section.label}
              section={section}
              isOpen={openMobileSection === section.label}
              onToggle={() =>
                setOpenMobileSection(
                  openMobileSection === section.label ? null : section.label
                )
              }
              onClick={handleNavClick}
            />
          ))}
          <a
            href="#contacto"
            onClick={handleNavClick}
            className="block px-3 py-2.5 text-base font-medium text-midnight/80 hover:text-primary transition-colors"
          >
            Contacto
          </a>
        </div>

        <div className="px-5 pb-6 pt-3 border-t border-gray-100 flex-shrink-0">
          <button
            type="button"
            onClick={() => { handleNavClick(); openModal() }}
            className="flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 rounded-full cta-primary w-full"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
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

/* ─── Desktop dropdown item ─── */

function DesktopDropdown({
  section,
  scrolled,
  isOpen,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: {
  section: NavSection
  scrolled: boolean
  isOpen: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onClick: () => void
}) {
  const isSingle = section.children.length === 1

  return (
    <li
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isSingle ? (
        <Link
          href={section.href}
          onClick={onClick}
          className={`nav-link text-sm font-medium px-3 py-2 transition-colors hover:text-primary ${
            scrolled ? "text-midnight/80" : "text-white/90"
          }`}
        >
          {section.label}
        </Link>
      ) : (
        <button
          type="button"
          className={`nav-link text-sm font-medium px-3 py-2 transition-colors hover:text-primary inline-flex items-center gap-1 ${
            scrolled ? "text-midnight/80" : "text-white/90"
          }`}
          aria-expanded={isOpen}
        >
          {section.label}
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      )}

      {/* Dropdown panel */}
      {!isSingle && (
        <div
          className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
            isOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-1"
          }`}
        >
          <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[260px]">
            <div className="px-4 py-1.5 mb-1">
              <Link
                href={section.href}
                onClick={onClick}
                className="text-xs font-semibold text-primary uppercase tracking-wider hover:underline"
              >
                Ver todo: {section.label}
              </Link>
            </div>
            {section.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={onClick}
                className="block px-4 py-2.5 hover:bg-light-blue/40 transition-colors"
              >
                <span className="text-sm font-medium text-navy">
                  {child.label}
                </span>
                {child.description && (
                  <span className="block text-xs text-muted mt-0.5">
                    {child.description}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </li>
  )
}

/* ─── Mobile expandable section ─── */

function MobileSection({
  section,
  isOpen,
  onToggle,
  onClick,
}: {
  section: NavSection
  isOpen: boolean
  onToggle: () => void
  onClick: () => void
}) {
  const isSingle = section.children.length === 1

  if (isSingle) {
    return (
      <Link
        href={section.href}
        onClick={onClick}
        className="block px-3 py-2.5 text-base font-medium text-midnight/80 hover:text-primary transition-colors"
      >
        {section.label}
      </Link>
    )
  }

  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center justify-between w-full px-3 py-2.5 text-base font-medium text-midnight/80 hover:text-primary transition-colors"
        aria-expanded={isOpen}
      >
        {section.label}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-250 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pl-5 pb-2 space-y-0.5">
          <Link
            href={section.href}
            onClick={onClick}
            className="block px-3 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider"
          >
            Ver todo
          </Link>
          {section.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onClick}
              className="block px-3 py-2 text-sm text-midnight/70 hover:text-primary transition-colors"
            >
              {child.label}
              {child.description && (
                <span className="block text-xs text-muted mt-0.5">
                  {child.description}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
