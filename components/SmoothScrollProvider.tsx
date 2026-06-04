"use client"

import { useEffect } from "react"

export default function SmoothScrollProvider() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mediaQuery.matches) return

    const isTouchDevice = navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let lenis: any = null
    let rafId: number

    const init = async () => {
      const { default: Lenis } = await import("lenis")
      lenis = new Lenis({
        duration: 1.1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })

      const raf = (time: number) => {
        lenis?.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)
    }

    init()

    return () => {
      lenis?.destroy()
      cancelAnimationFrame(rafId)
    }
  }, [])

  return null
}
