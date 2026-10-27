"use client"

import { useEffect } from "react"

/**
 * Hides the root layout Navigation on internal pages.
 * The root Navigation uses anchor links (#servicios, etc.) meant for the home.
 * Internal pages use InternalNavigation with real page links instead.
 *
 * Strategy: the root nav has links with href="#servicios" etc.
 * We find the header containing those anchor links and hide it + its drawer.
 */
export default function HideRootNav() {
  useEffect(() => {
    // Find the root nav by its anchor links (unique to home nav)
    const allHeaders = document.querySelectorAll("header.fixed")
    allHeaders.forEach((header) => {
      const hasAnchorLinks = header.querySelector('a[href="#servicios"]')
      if (hasAnchorLinks) {
        ;(header as HTMLElement).style.display = "none"
      }
    })
    // Also hide root drawer overlay and drawer (siblings of header)
    // They use the same anchor pattern
    return () => {
      allHeaders.forEach((header) => {
        const hasAnchorLinks = header.querySelector('a[href="#servicios"]')
        if (hasAnchorLinks) {
          ;(header as HTMLElement).style.display = ""
        }
      })
    }
  }, [])
  return null
}
