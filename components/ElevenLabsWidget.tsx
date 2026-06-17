'use client'

import Script from 'next/script'
import { useEffect, useRef } from 'react'

export default function ElevenLabsWidget() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container || container.querySelector('elevenlabs-convai')) return
    const el = document.createElement('elevenlabs-convai')
    el.setAttribute('agent-id', 'agent_8301kt4ym5cnem8b8y1ksvs8zgjs')
    container.appendChild(el)
  }, [])

  return (
    <>
      <div ref={ref} />
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
      />
    </>
  )
}
