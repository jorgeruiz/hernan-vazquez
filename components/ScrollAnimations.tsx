"use client"

import { useEffect } from "react"

export default function ScrollAnimations() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mediaQuery.matches) return

    const isMobile = navigator.maxTouchPoints > 0 && window.innerWidth < 768

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            if (el.hasAttribute("data-reveal")) {
              el.setAttribute("data-reveal", "ready")
              observer.unobserve(el)
            } else if (el.hasAttribute("data-reveal-fast")) {
              el.setAttribute("data-reveal-fast", "ready")
              observer.unobserve(el)
            }
          }
        })
      },
      { threshold: isMobile ? 0.05 : 0.12, rootMargin: "0px 0px -40px 0px" }
    )

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const parent = entry.target
            const cards = parent.querySelectorAll<HTMLElement>(".card-item")
            cards.forEach((card, i) => {
              setTimeout(() => card.classList.add("revealed"), isMobile ? 0 : i * 90)
            })
            cardObserver.unobserve(parent)
          }
        })
      },
      { threshold: isMobile ? 0.05 : 0.15, rootMargin: "0px 0px -30px 0px" }
    )

    document.querySelectorAll("[data-reveal], [data-reveal-fast]").forEach((el) =>
      observer.observe(el)
    )
    document.querySelectorAll(".card-grid").forEach((el) => cardObserver.observe(el))

    return () => {
      observer.disconnect()
      cardObserver.disconnect()
    }
  }, [])

  return null
}
