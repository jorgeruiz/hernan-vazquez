'use client'

import Script from 'next/script'
import { useEffect, useRef } from 'react'

const AGENT_ID = 'agent_8301kt4ym5cnem8b8y1ksvs8zgjs'

export default function ElevenLabsWidget() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || container.querySelector('elevenlabs-convai')) return
    const el = document.createElement('elevenlabs-convai')
    el.setAttribute('agent-id', AGENT_ID)
    container.appendChild(el)
  }, [])

  return (
    <>
      <div ref={containerRef} />
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
      />
    </>
  )
}
