'use client'

import Script from 'next/script'
import { useRef } from 'react'

export default function ElevenLabsWidget() {
  const ref = useRef<HTMLDivElement>(null)

  const handleLoad = () => {
    const container = ref.current
    if (!container || container.querySelector('elevenlabs-convai')) return
    const el = document.createElement('elevenlabs-convai')
    el.setAttribute('agent-id', 'agent_8301kt4ym5cnem8b8y1ksvs8zgjs')

    // Intercept the call event to inject clientTools before the conversation starts
    el.addEventListener('elevenlabs-convai:call', ((e: CustomEvent) => {
      const config = e.detail?.config
      if (config) {
        config.clientTools = {
          ...config.clientTools,
          track_lead_complete: () => {
            const w = window as Window & { dataLayer?: Record<string, unknown>[] }
            w.dataLayer = w.dataLayer || []
            w.dataLayer.push({ event: 'lead_complete_chatbot' })
            return 'Lead tracked successfully'
          },
        }
      }
    }) as EventListener)

    container.appendChild(el)
  }

  return (
    <>
      <div ref={ref} />
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
        onLoad={handleLoad}
      />
    </>
  )
}
