'use client'

import { useState } from 'react'

// Tipado mínimo para gtag / dataLayer
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
    gtag?: (...args: unknown[]) => void
  }
}

const WA_NUMBER = '528125656698'

type FormData = {
  nombre: string
  correo: string
  whatsapp: string
  colonia: string
}

const WaIcon = ({ size = 26 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="white" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const inputClass =
  'w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 ' +
  'focus:outline-none focus:ring-2 focus:ring-[#0273B5]/20 focus:border-[#0273B5] ' +
  'placeholder:text-gray-400 transition-colors'

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false)
  const [sending, setSending] = useState(false)
  const [form, setForm] = useState<FormData>({ nombre: '', correo: '', whatsapp: '', colonia: '' })

  const handleChange =
    (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm(f => ({ ...f, [field]: e.target.value }))

  const fireConversionEvents = () => {
    // dataLayer → GTM puede activar conversiones desde aquí
    window.dataLayer?.push({
      event: 'lead_whatsapp',
      lead_nombre: form.nombre,
      lead_colonia: form.colonia,
    })
    // GA4: evento estándar "generate_lead"
    window.gtag?.('event', 'generate_lead', {
      event_category: 'WhatsApp',
      event_label: 'Formulario WhatsApp',
    })
    // Google Ads: conversión genérica (configura el label en Google Ads)
    window.gtag?.('event', 'conversion', { send_to: 'AW-16494564617' })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)

    // Enviar datos al servidor (email a hvazquezg@gmail.com)
    try {
      await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch {
      // No bloqueamos el flujo si el email falla
    }

    // Conversiones
    fireConversionEvents()

    // Abrir WhatsApp con datos prellenados
    const msg = encodeURIComponent(
      `Hola, me gustaría agendar una cita con el Dr. Vázquez.\n\n` +
        `Nombre: ${form.nombre}\n` +
        `Correo: ${form.correo}\n` +
        `WhatsApp: ${form.whatsapp}\n` +
        `Colonia: ${form.colonia}`
    )
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank', 'noopener,noreferrer')
    setSending(false)
    setOpen(false)
    setForm({ nombre: '', correo: '', whatsapp: '', colonia: '' })
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      {/* Form card */}
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-72 overflow-hidden">
          {/* WhatsApp-style header */}
          <div className="bg-[#075E54] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#25D366] rounded-full flex items-center justify-center shrink-0">
                <WaIcon size={18} />
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-tight">Agendar cita</p>
                <p className="text-[#25D366] text-xs">Dr. Hernán Vázquez</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              className="text-white/60 hover:text-white transition-colors ml-2 shrink-0"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Form body */}
          <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-3">
            <p className="text-xs text-gray-500 leading-relaxed">
              Déjanos tus datos y te redirigiremos a WhatsApp para confirmar tu cita.
            </p>

            <input
              type="text"
              placeholder="Nombre completo *"
              required
              value={form.nombre}
              onChange={handleChange('nombre')}
              className={inputClass}
            />
            <input
              type="email"
              placeholder="Correo electrónico *"
              required
              value={form.correo}
              onChange={handleChange('correo')}
              className={inputClass}
            />
            <input
              type="tel"
              placeholder="WhatsApp (ej. 8183178342) *"
              required
              value={form.whatsapp}
              onChange={handleChange('whatsapp')}
              className={inputClass}
            />
            <input
              type="text"
              placeholder="Colonia *"
              required
              value={form.colonia}
              onChange={handleChange('colonia')}
              className={inputClass}
            />

            <button
              type="submit"
              disabled={sending}
              className="w-full py-2.5 bg-[#25D366] hover:bg-[#1ebe5d] disabled:opacity-60
                         text-white font-semibold text-sm rounded-xl transition-colors
                         flex items-center justify-center gap-2 mt-1"
            >
              <WaIcon size={16} />
              {sending ? 'Enviando…' : 'Enviar por WhatsApp'}
            </button>
          </form>
        </div>
      )}

      {/* Bubble */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Agendar cita por WhatsApp"
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center
                   shadow-[0_4px_20px_rgba(37,211,102,0.4)]
                   hover:shadow-[0_8px_28px_rgba(37,211,102,0.5)] hover:scale-105
                   active:scale-95 transition-all duration-150"
      >
        <WaIcon size={26} />
      </button>
    </div>
  )
}
