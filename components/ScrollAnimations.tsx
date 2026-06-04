"use client"

import { useEffect } from "react"

export default function ScrollAnimations() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const isMobile = navigator.maxTouchPoints > 0 && window.innerWidth < 768

    // For mobile: opacity only (no transform, avoids jump on momentum scroll)
    if (isMobile) {
      document.querySelectorAll("[data-reveal], [data-reveal-fast]").forEach((el) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                ;(entry.target as HTMLElement).setAttribute(
                  entry.target.hasAttribute("data-reveal") ? "data-reveal" : "data-reveal-fast",
                  "ready"
                )
                observer.unobserve(entry.target)
              }
            })
          },
          { threshold: 0.05 }
        )
        observer.observe(el)
      })

      // Cards: just fade, no stagger on mobile
      document.querySelectorAll(".card-item").forEach((el) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                ;(entry.target as HTMLElement).classList.add("revealed")
                observer.unobserve(entry.target)
              }
            })
          },
          { threshold: 0.05 }
        )
        observer.observe(el)
      })
      return
    }

    // Desktop: full animations
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            if (el.hasAttribute("data-reveal")) {
              el.setAttribute("data-reveal", "ready")
            } else if (el.hasAttribute("data-reveal-fast")) {
              el.setAttribute("data-reveal-fast", "ready")
            }
            revealObs.unobserve(el)
          }
        })
      },
      { threshold: mediaQuery.matches ? 0.05 : 0.12, rootMargin: "0px 0px -40px 0px" }
    )

    // Card grid stagger
    const cardGridObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll<HTMLElement>(".card-item")
            cards.forEach((card, i) => {
              const delay = mediaQuery.matches ? 0 : i * 70
              setTimeout(() => card.classList.add("revealed"), delay)
            })
            cardGridObs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    )

    // Credential stagger
    const credObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll<HTMLElement>(".cred-item")
            items.forEach((item, i) => {
              const delay = mediaQuery.matches ? 0 : i * 60
              setTimeout(() => item.classList.add("revealed"), delay)
            })
            credObs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    document
      .querySelectorAll("[data-reveal], [data-reveal-fast]")
      .forEach((el) => revealObs.observe(el))

    document.querySelectorAll(".card-grid").forEach((el) => cardGridObs.observe(el))
    document.querySelectorAll(".cred-list").forEach((el) => credObs.observe(el))

    return () => {
      revealObs.disconnect()
      cardGridObs.disconnect()
      credObs.disconnect()
    }
  }, [])

  return null
}
