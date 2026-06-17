'use client'

import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { useAgendaCita } from './AgendaCitaContext'

// ─── Types ───────────────────────────────────────────────────────────────────
type Sede = 'CARE' | 'MUGUERZA'
interface Slot { hora: string; inicioISO: string; finISO: string }
interface FormData {
  sede: Sede | null
  fecha: string | null
  slot: Slot | null
  nombre: string
  telefono: string
  correo: string
  motivo: string
  recomendado_por: string
}
type FieldErrors = Partial<Record<'nombre' | 'telefono' | 'correo', string>>

// ─── Constants ───────────────────────────────────────────────────────────────
const SEDES = {
  CARE: {
    id: 'CARE' as const,
    nombre: 'CARE Medical Hub',
    turno: 'Mañana',
    horario: 'Lun – Vie  ·  10:30 – 12:00',
  },
  MUGUERZA: {
    id: 'MUGUERZA' as const,
    nombre: 'Muguerza Sur',
    turno: 'Tarde',
    horario: 'Lun – Vie  ·  15:00 – 18:30',
  },
}

const N8N = 'https://n8n-n8n.6lk5jx.easypanel.host/webhook'
const STEP_LABELS = ['Sede', 'Fecha', 'Horario', 'Tus datos', 'Confirmación']
const MESES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
]
const DIAS = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do']

// ─── Helpers ─────────────────────────────────────────────────────────────────
function getMinDate() {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  d.setHours(0, 0, 0, 0)
  return d
}
function getMaxDate() {
  const d = new Date()
  d.setDate(d.getDate() + 60)
  return d
}
function toDateStr(d: Date) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}
function isSelectable(d: Date, min: Date, max: Date) {
  const dow = d.getDay()
  if (dow === 0 || dow === 6) return false
  const s = toDateStr(d)
  return s >= toDateStr(min) && s <= toDateStr(max)
}
function getCalDays(year: number, month: number): (Date | null)[] {
  const first = new Date(year, month, 1)
  const last = new Date(year, month + 1, 0)
  let dow = first.getDay()
  dow = dow === 0 ? 6 : dow - 1 // Mon = 0
  const days: (Date | null)[] = []
  for (let i = 0; i < dow; i++) days.push(null)
  for (let d = 1; d <= last.getDate(); d++) days.push(new Date(year, month, d))
  return days
}
function formatFechaES(s: string) {
  const [y, m, d] = s.split('-').map(Number)
  return new Intl.DateTimeFormat('es-MX', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  }).format(new Date(y, m - 1, d))
}
function gtm(event: string, data?: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  type W = Window & { dataLayer?: Record<string, unknown>[] }
  const w = window as W
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({ event, ...data })
}
const validateEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
const validateTel = (t: string) => t.replace(/\D/g, '').length >= 10

const INITIAL: FormData = {
  sede: null, fecha: null, slot: null,
  nombre: '', telefono: '', correo: '', motivo: '', recomendado_por: '',
}

// ─── SVG icons ───────────────────────────────────────────────────────────────
const IconChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)
const IconChevronLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)
const IconCheck = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)
const IconX = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

// ─── Component ───────────────────────────────────────────────────────────────
export default function AgendaCitaModal() {
  const { isOpen, closeModal } = useAgendaCita()
  const [mounted, setMounted] = useState(false)

  // Form & step state
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FormData>(INITIAL)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [showConfirm, setShowConfirm] = useState(false)
  const [success, setSuccess] = useState(false)

  // Slot fetching
  const [slots, setSlots] = useState<Slot[]>([])
  const [loadingSlots, setLoadingSlots] = useState(false)
  const [slotsMsg, setSlotsMsg] = useState('')

  // Booking confirmation
  const [confirming, setConfirming] = useState(false)
  const [bookingErr, setBookingErr] = useState('')

  // Calendar navigation
  const initMin = getMinDate()
  const [calYear, setCalYear] = useState(initMin.getFullYear())
  const [calMonth, setCalMonth] = useState(initMin.getMonth())

  useEffect(() => { setMounted(true) }, [])

  // Reset on every open
  useEffect(() => {
    if (!isOpen) return
    const min = getMinDate()
    setStep(1)
    setForm(INITIAL)
    setErrors({})
    setSlots([])
    setSlotsMsg('')
    setSuccess(false)
    setBookingErr('')
    setShowConfirm(false)
    setCalYear(min.getFullYear())
    setCalMonth(min.getMonth())
  }, [isOpen])

  // Body scroll lock
  useEffect(() => {
    if (isOpen) { document.body.style.overflow = 'hidden'; return }
    document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // beforeunload warning when progress exists
  useEffect(() => {
    const hasProgress = !success && (step > 1 || !!form.sede)
    const handler = (e: BeforeUnloadEvent) => { e.preventDefault(); e.returnValue = '' }
    if (isOpen && hasProgress) window.addEventListener('beforeunload', handler)
    return () => window.removeEventListener('beforeunload', handler)
  }, [isOpen, step, form.sede, success])

  // ── Attempt close ──────────────────────────────────────────────────────────
  const handleAttemptClose = useCallback(() => {
    if (success) { closeModal(); return }
    if (step > 1 || !!form.sede) setShowConfirm(true)
    else closeModal()
  }, [success, step, form.sede, closeModal])

  // ESC key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'Escape' || !isOpen) return
      if (showConfirm) { setShowConfirm(false); return }
      handleAttemptClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [isOpen, showConfirm, handleAttemptClose])

  const handleConfirmClose = () => {
    gtm('agendar_abandono', {
      paso: step,
      consultorio: form.sede ? SEDES[form.sede].nombre : undefined,
      sede_id: form.sede,
    })
    setShowConfirm(false)
    closeModal()
  }

  // ── GTM step tracking ──────────────────────────────────────────────────────
  const pushStep = (n: number, sede?: Sede | null) => {
    gtm('agendar_paso', {
      paso: n,
      consultorio: sede ? SEDES[sede].nombre : undefined,
      sede_id: sede,
    })
  }

  // ── Fetch available slots ──────────────────────────────────────────────────
  const fetchSlots = useCallback(async (fecha: string, sede: Sede) => {
    setLoadingSlots(true)
    setSlotsMsg('')
    setSlots([])
    try {
      const res = await fetch(`${N8N}/dr-vazquez-disponibilidad`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fecha, sede }),
      })
      const data = await res.json()
      if (Array.isArray(data.slots) && data.slots.length > 0) {
        setSlots(data.slots)
      } else {
        setSlotsMsg(data.message || 'No hay horarios disponibles para este día. Elige otra fecha.')
      }
    } catch {
      setSlotsMsg('Error al cargar horarios. Por favor intenta de nuevo.')
    } finally {
      setLoadingSlots(false)
    }
  }, [])

  // ── Step navigation ────────────────────────────────────────────────────────
  const next1 = () => {
    if (!form.sede) return
    pushStep(2, form.sede)
    setStep(2)
  }

  const next2 = () => {
    if (!form.fecha || !form.sede) return
    fetchSlots(form.fecha, form.sede)
    pushStep(3, form.sede)
    setStep(3)
  }

  const next3 = () => {
    if (!form.slot) return
    pushStep(4, form.sede)
    setStep(4)
  }

  const next4 = () => {
    const errs: FieldErrors = {}
    if (!form.nombre.trim()) errs.nombre = 'El nombre es requerido.'
    if (!validateTel(form.telefono)) errs.telefono = 'Mínimo 10 dígitos.'
    if (!validateEmail(form.correo)) errs.correo = 'Correo electrónico no válido.'
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    pushStep(5, form.sede)
    setStep(5)
  }

  const goBack = () => {
    setBookingErr('')
    setStep(s => s - 1)
  }

  // ── Confirm booking ────────────────────────────────────────────────────────
  const handleConfirmar = async () => {
    setConfirming(true)
    setBookingErr('')
    try {
      const res = await fetch(`${N8N}/dr-vazquez-reservar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: form.nombre,
          telefono: form.telefono,
          correo: form.correo,
          motivo: form.motivo,
          recomendado_por: form.recomendado_por,
          sede: form.sede,
          inicioISO: form.slot!.inicioISO,
          finISO: form.slot!.finISO,
        }),
      })
      const data = await res.json()

      if (data.reservado === true) {
        setSuccess(true)
        const ev = {
          consultorio: SEDES[form.sede!].nombre,
          sede_id: form.sede,
          fecha: form.fecha,
          hora: form.slot!.hora,
        }
        gtm('agendar_confirmada', ev)
        gtm(form.sede === 'CARE' ? 'cita_care' : 'cita_muguerza', ev)

      } else if (data.ocupado || data.slotOcupado || data.error === 'ocupado') {
        // Slot already taken — go back to step 3 and reload
        setForm(f => ({ ...f, slot: null }))
        await fetchSlots(form.fecha!, form.sede!)
        pushStep(3, form.sede)
        setStep(3)
        setBookingErr('Ese horario ya fue tomado. Por favor elige otro.')

      } else {
        setBookingErr(data.message || 'Error al confirmar la cita. Por favor intenta de nuevo.')
      }
    } catch {
      setBookingErr('Error de conexión. Por favor intenta de nuevo.')
    } finally {
      setConfirming(false)
    }
  }

  // ── Calendar helpers ───────────────────────────────────────────────────────
  const minDate = getMinDate()
  const maxDate = getMaxDate()
  const canPrev =
    calYear > minDate.getFullYear() ||
    (calYear === minDate.getFullYear() && calMonth > minDate.getMonth())
  const canNext =
    calYear < maxDate.getFullYear() ||
    (calYear === maxDate.getFullYear() && calMonth < maxDate.getMonth())

  const prevMonth = () => {
    if (!canPrev) return
    if (calMonth === 0) { setCalYear(y => y - 1); setCalMonth(11) }
    else setCalMonth(m => m - 1)
  }
  const nextMonth = () => {
    if (!canNext) return
    if (calMonth === 11) { setCalYear(y => y + 1); setCalMonth(0) }
    else setCalMonth(m => m + 1)
  }

  // ── Render guard ───────────────────────────────────────────────────────────
  if (!mounted || !isOpen) return null

  const calDays = getCalDays(calYear, calMonth)

  const inputCls = (err?: string) =>
    `w-full border rounded-xl px-4 py-3 text-sm text-midnight placeholder:text-gray-400 focus:outline-none transition-colors ${
      err
        ? 'border-red-400 focus:border-red-500 bg-red-50/40'
        : 'border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10'
    }`

  // ── Step title ─────────────────────────────────────────────────────────────
  const stepTitle = [
    'Elige dónde quieres tu cita',
    'Selecciona una fecha',
    'Elige un horario disponible',
    'Tus datos de contacto',
    'Revisa y confirma tu cita',
  ][step - 1]

  const modal = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Agendar cita con el Dr. Hernán Vázquez"
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-midnight/60 backdrop-blur-sm"
        onClick={handleAttemptClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className="relative z-10 bg-white w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        style={{ maxHeight: 'min(90vh, 680px)' }}
        onClick={e => e.stopPropagation()}
      >

        {/* ── Header ─────────────────────────────────────────────────────── */}
        {!success && (
          <div className="px-5 sm:px-6 pt-5 pb-4 border-b border-gray-100 flex-shrink-0">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-primary">
                  Paso {step} de 5 &middot; {STEP_LABELS[step - 1]}
                </p>
                <p className="font-bold text-midnight text-base mt-0.5">{stepTitle}</p>
              </div>
              <button
                type="button"
                onClick={handleAttemptClose}
                aria-label="Cerrar"
                className="p-1.5 -mr-1 -mt-0.5 text-gray-400 hover:text-midnight hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
              >
                <IconX />
              </button>
            </div>
            {/* Progress bar */}
            <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full motion-safe:transition-all motion-safe:duration-300"
                style={{ width: `${(step / 5) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* ── Body ───────────────────────────────────────────────────────── */}
        <div className="flex-1 overflow-y-auto overscroll-contain">

          {/* ══ SUCCESS SCREEN ════════════════════════════════════════════ */}
          {success ? (
            <div className="flex flex-col items-center justify-center text-center px-6 py-12">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-midnight mb-2">¡Solicitud enviada!</h2>
              <p className="text-muted text-sm leading-relaxed max-w-xs mb-6">
                El consultorio se comunicará contigo para confirmar tu cita.
              </p>
              {/* Summary */}
              <div className="bg-light-blue rounded-xl p-4 text-left w-full max-w-xs mb-8 space-y-1.5">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Resumen</p>
                <p className="text-sm font-semibold text-midnight">{form.sede ? SEDES[form.sede].nombre : ''}</p>
                {form.fecha && (
                  <p className="text-sm text-muted capitalize">{formatFechaES(form.fecha)}</p>
                )}
                <p className="text-sm text-muted">{form.slot?.hora}</p>
                <p className="text-sm text-midnight font-medium">{form.nombre}</p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="bg-primary text-white font-semibold px-8 py-3 rounded-full cta-primary"
              >
                Cerrar
              </button>
            </div>

          ) : (
            <div className="p-5 sm:p-6">

              {/* ══ STEP 1: SEDE ═══════════════════════════════════════════ */}
              {step === 1 && (
                <div className="flex flex-col gap-3">
                  {(Object.values(SEDES) as (typeof SEDES[keyof typeof SEDES])[]).map(sede => (
                    <button
                      key={sede.id}
                      type="button"
                      onClick={() => setForm(f => ({ ...f, sede: sede.id }))}
                      className={`flex items-start gap-4 p-5 rounded-xl border-2 text-left transition-all ${
                        form.sede === sede.id
                          ? 'border-primary bg-light-blue'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      {/* Radio indicator */}
                      <span
                        className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                          form.sede === sede.id ? 'border-primary' : 'border-gray-300'
                        }`}
                      >
                        {form.sede === sede.id && (
                          <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                        )}
                      </span>
                      <span className="flex flex-col">
                        <span className="font-bold text-midnight text-sm">{sede.nombre}</span>
                        <span className="text-xs font-semibold text-primary uppercase tracking-wide mt-0.5">
                          {sede.turno}
                        </span>
                        <span className="text-sm text-muted mt-1">{sede.horario}</span>
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {/* ══ STEP 2: FECHA ══════════════════════════════════════════ */}
              {step === 2 && (
                <div>
                  {/* Month navigation */}
                  <div className="flex items-center justify-between mb-4">
                    <button
                      type="button"
                      onClick={prevMonth}
                      disabled={!canPrev}
                      aria-label="Mes anterior"
                      className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      <IconChevronLeft />
                    </button>
                    <span className="font-semibold text-midnight text-sm">
                      {MESES[calMonth]} {calYear}
                    </span>
                    <button
                      type="button"
                      onClick={nextMonth}
                      disabled={!canNext}
                      aria-label="Mes siguiente"
                      className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      <IconChevronRight />
                    </button>
                  </div>

                  {/* Day-of-week headers */}
                  <div className="grid grid-cols-7 mb-1">
                    {DIAS.map(d => (
                      <div key={d} className="text-center text-xs font-semibold text-muted py-1">
                        {d}
                      </div>
                    ))}
                  </div>

                  {/* Calendar grid */}
                  <div className="grid grid-cols-7 gap-y-1">
                    {calDays.map((day, i) => {
                      if (!day) return <div key={`e${i}`} />
                      const sel = isSelectable(day, minDate, maxDate)
                      const ds = toDateStr(day)
                      const isSelected = form.fecha === ds
                      return (
                        <button
                          key={ds}
                          type="button"
                          disabled={!sel}
                          onClick={() => sel && setForm(f => ({ ...f, fecha: ds, slot: null }))}
                          className={`mx-auto w-9 h-9 flex items-center justify-center rounded-full text-sm transition-all ${
                            !sel
                              ? 'text-gray-200 cursor-not-allowed'
                              : isSelected
                              ? 'bg-primary text-white font-bold'
                              : 'text-midnight hover:bg-light-blue cursor-pointer'
                          }`}
                        >
                          {day.getDate()}
                        </button>
                      )
                    })}
                  </div>

                  {form.fecha && (
                    <div className="mt-4 px-4 py-3 bg-light-blue rounded-xl text-sm text-primary font-medium capitalize">
                      {formatFechaES(form.fecha)}
                    </div>
                  )}
                </div>
              )}

              {/* ══ STEP 3: HORARIO ════════════════════════════════════════ */}
              {step === 3 && (
                <div>
                  {bookingErr && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl">
                      {bookingErr}
                    </div>
                  )}

                  {loadingSlots ? (
                    <div className="flex flex-col items-center justify-center py-12 gap-3">
                      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                      <p className="text-sm text-muted">Cargando horarios disponibles…</p>
                    </div>
                  ) : slotsMsg ? (
                    <div className="py-10 text-center">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                      </div>
                      <p className="text-sm text-muted max-w-xs mx-auto">{slotsMsg}</p>
                      <button
                        type="button"
                        onClick={() => { setBookingErr(''); setStep(2) }}
                        className="mt-4 text-primary text-sm font-semibold hover:underline"
                      >
                        Elegir otra fecha
                      </button>
                    </div>
                  ) : (
                    <>
                      <p className="text-xs text-muted mb-4 capitalize">
                        {form.fecha && formatFechaES(form.fecha)}
                        {form.fecha && form.sede && ' · '}
                        {form.sede && SEDES[form.sede].nombre}
                      </p>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                        {slots.map(slot => (
                          <button
                            key={slot.inicioISO}
                            type="button"
                            onClick={() => setForm(f => ({ ...f, slot }))}
                            className={`py-3 rounded-xl text-sm font-medium border transition-all ${
                              form.slot?.inicioISO === slot.inicioISO
                                ? 'bg-primary text-white border-primary shadow-sm'
                                : 'bg-white text-midnight border-gray-200 hover:border-primary hover:text-primary'
                            }`}
                          >
                            {slot.hora}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* ══ STEP 4: DATOS ══════════════════════════════════════════ */}
              {step === 4 && (
                <div className="flex flex-col gap-4">
                  {/* Nombre */}
                  <div>
                    <label className="text-xs font-semibold text-midnight/70 mb-1.5 block">
                      Nombre completo <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. María González Martínez"
                      value={form.nombre}
                      autoComplete="name"
                      onChange={e => {
                        setForm(f => ({ ...f, nombre: e.target.value }))
                        setErrors(er => ({ ...er, nombre: undefined }))
                      }}
                      className={inputCls(errors.nombre)}
                    />
                    {errors.nombre && (
                      <p className="text-red-500 text-xs mt-1" role="alert">{errors.nombre}</p>
                    )}
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label className="text-xs font-semibold text-midnight/70 mb-1.5 block">
                      Teléfono / WhatsApp <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Ej. 81 1234 5678"
                      value={form.telefono}
                      autoComplete="tel"
                      onChange={e => {
                        setForm(f => ({ ...f, telefono: e.target.value }))
                        setErrors(er => ({ ...er, telefono: undefined }))
                      }}
                      className={inputCls(errors.telefono)}
                    />
                    {errors.telefono && (
                      <p className="text-red-500 text-xs mt-1" role="alert">{errors.telefono}</p>
                    )}
                  </div>

                  {/* Correo */}
                  <div>
                    <label className="text-xs font-semibold text-midnight/70 mb-1.5 block">
                      Correo electrónico <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="nombre@correo.com"
                      value={form.correo}
                      autoComplete="email"
                      onChange={e => {
                        setForm(f => ({ ...f, correo: e.target.value }))
                        setErrors(er => ({ ...er, correo: undefined }))
                      }}
                      className={inputCls(errors.correo)}
                    />
                    {errors.correo && (
                      <p className="text-red-500 text-xs mt-1" role="alert">{errors.correo}</p>
                    )}
                  </div>

                  {/* Motivo */}
                  <div>
                    <label className="text-xs font-semibold text-midnight/70 mb-1.5 block">
                      Motivo de consulta{' '}
                      <span className="text-gray-400 font-normal">(opcional)</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="¿Cuál es el motivo principal de su visita?"
                      value={form.motivo}
                      onChange={e => setForm(f => ({ ...f, motivo: e.target.value }))}
                      className={inputCls() + ' resize-none'}
                    />
                  </div>

                  {/* Recomendado por */}
                  <div>
                    <label className="text-xs font-semibold text-midnight/70 mb-1.5 block">
                      ¿Quién lo recomendó?{' '}
                      <span className="text-gray-400 font-normal">(opcional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nombre de quien lo refirió"
                      value={form.recomendado_por}
                      onChange={e => setForm(f => ({ ...f, recomendado_por: e.target.value }))}
                      className={inputCls()}
                    />
                  </div>
                </div>
              )}

              {/* ══ STEP 5: CONFIRMACIÓN ═══════════════════════════════════ */}
              {step === 5 && (
                <div>
                  <div className="bg-light-blue rounded-xl p-5 mb-5 space-y-4">

                    {/* Sede */}
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0273B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                          <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-muted">Sede</p>
                        <p className="text-sm font-semibold text-midnight">
                          {form.sede && SEDES[form.sede].nombre}
                        </p>
                        <p className="text-xs text-muted mt-0.5">
                          {form.sede && SEDES[form.sede].horario}
                        </p>
                      </div>
                    </div>

                    {/* Fecha & hora */}
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0273B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="3" y="4" width="18" height="18" rx="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-muted">Fecha y hora</p>
                        <p className="text-sm font-semibold text-midnight capitalize">
                          {form.fecha && formatFechaES(form.fecha)}
                        </p>
                        <p className="text-sm text-muted">{form.slot?.hora}</p>
                      </div>
                    </div>

                    {/* Paciente */}
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0273B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-muted">Paciente</p>
                        <p className="text-sm font-semibold text-midnight">{form.nombre}</p>
                        <p className="text-sm text-muted">{form.telefono}</p>
                        <p className="text-sm text-muted">{form.correo}</p>
                      </div>
                    </div>

                    {/* Motivo (if provided) */}
                    {form.motivo && (
                      <div className="flex gap-3 items-start">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0273B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-muted">Motivo</p>
                          <p className="text-sm text-midnight">{form.motivo}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {bookingErr && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl" role="alert">
                      {bookingErr}
                    </div>
                  )}

                  <p className="text-xs text-muted text-center leading-relaxed">
                    El consultorio confirmará tu cita por teléfono o WhatsApp.
                  </p>
                </div>
              )}

            </div>
          )}
        </div>

        {/* ── Footer ─────────────────────────────────────────────────────── */}
        {!success && (
          <div className="px-5 sm:px-6 py-4 border-t border-gray-100 flex items-center gap-3 flex-shrink-0">
            {step > 1 && (
              <button
                type="button"
                onClick={goBack}
                className="inline-flex items-center gap-1.5 border border-gray-200 text-midnight font-medium text-sm px-4 py-2.5 rounded-full hover:bg-gray-50 transition-colors"
              >
                <IconChevronLeft />
                Atrás
              </button>
            )}

            <div className="flex-1" />

            {step === 1 && (
              <button
                type="button"
                onClick={next1}
                disabled={!form.sede}
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-6 py-2.5 rounded-full cta-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:[transform:none]"
              >
                Siguiente <IconChevronRight />
              </button>
            )}
            {step === 2 && (
              <button
                type="button"
                onClick={next2}
                disabled={!form.fecha}
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-6 py-2.5 rounded-full cta-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:[transform:none]"
              >
                Ver horarios <IconChevronRight />
              </button>
            )}
            {step === 3 && (
              <button
                type="button"
                onClick={next3}
                disabled={!form.slot || loadingSlots}
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-6 py-2.5 rounded-full cta-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:[transform:none]"
              >
                Siguiente <IconChevronRight />
              </button>
            )}
            {step === 4 && (
              <button
                type="button"
                onClick={next4}
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-6 py-2.5 rounded-full cta-primary"
              >
                Revisar cita <IconChevronRight />
              </button>
            )}
            {step === 5 && (
              <button
                type="button"
                onClick={handleConfirmar}
                disabled={confirming}
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-6 py-2.5 rounded-full cta-primary disabled:opacity-60 disabled:cursor-not-allowed disabled:[transform:none]"
              >
                {confirming ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Confirmando…
                  </>
                ) : (
                  <>
                    Confirmar cita <IconCheck size={14} />
                  </>
                )}
              </button>
            )}
          </div>
        )}
      </div>

      {/* ── Close confirmation dialog ───────────────────────────────────── */}
      {showConfirm && (
        <div
          className="absolute inset-0 z-20 flex items-center justify-center p-4"
          aria-live="assertive"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full">
            <p className="font-bold text-midnight text-base mb-2">¿Deseas salir?</p>
            <p className="text-muted text-sm mb-6 leading-relaxed">
              Si sales ahora puedes perder tu cita. ¿Seguro que deseas cerrar?
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowConfirm(false)}
                className="flex-1 border border-gray-200 text-midnight font-medium text-sm py-2.5 rounded-full hover:bg-gray-50 transition-colors"
              >
                Continuar
              </button>
              <button
                type="button"
                onClick={handleConfirmClose}
                className="flex-1 bg-red-500 text-white font-semibold text-sm py-2.5 rounded-full hover:bg-red-600 transition-colors"
              >
                Salir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  return createPortal(modal, document.body)
}
