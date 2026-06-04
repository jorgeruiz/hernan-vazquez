"use client"

import { useState, useRef, useCallback, useEffect } from "react"

const TESTIMONIALS = [
  {
    quote:
      "Llevaba dos años con dolor en las manos sin diagnóstico claro. El Dr. Vázquez me explicó exactamente qué tenía, por qué me dolía y qué iba a hacer. Salí de la consulta con más claridad de la que había tenido en dos años.",
    name: "María G.",
    detail: "Monterrey, N.L.",
    condition: "Artritis reumatoide",
  },
  {
    quote:
      "Lo que más me sorprendió fue que dedicó el tiempo necesario para explicarme todo. Nada de salir corriendo en 10 minutos. Tres meses después de iniciar el tratamiento, el dolor mejoró considerablemente.",
    name: "Roberto S.",
    detail: "San Pedro Garza García",
    condition: "Dolor articular crónico",
  },
  {
    quote:
      "Tenía miedo de que mi diagnóstico de lupus significara una vida limitada. El Dr. Vázquez me mostró que con el tratamiento correcto y seguimiento continuo, se puede vivir muy bien. Sigo en control y cada vez mejor.",
    name: "Carmen L.",
    detail: "Monterrey, N.L.",
    condition: "Lupus eritematoso sistémico",
  },
  {
    quote:
      "Tenía osteoporosis severa y nadie me había explicado por qué. El Dr. Vázquez no solo me dio un tratamiento claro, sino que me enseñó a entender mi enfermedad. Mis hijos me acompañaron y quedaron igual de tranquilos que yo.",
    name: "Patricia M.",
    detail: "Monterrey, N.L.",
    condition: "Osteoporosis",
  },
  {
    quote:
      "Con espondilitis anquilosante pasé años sin un diagnóstico correcto. El Dr. Vázquez lo identificó en la primera consulta. Lo que más valoro es que siempre me responde cuando tengo dudas entre citas.",
    name: "Jorge A.",
    detail: "San Pedro Garza García",
    condition: "Espondilitis anquilosante",
  },
  {
    quote:
      "La fibromialgia es difícil de explicar porque no se ve. El Dr. Vázquez fue el primer médico que me escuchó sin hacerme sentir que era algo psicológico. Su enfoque fue completamente distinto a todo lo que había vivido antes.",
    name: "Sofía R.",
    detail: "Monterrey, N.L.",
    condition: "Fibromialgia",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const dragStartX = useRef(0)
  const dragStartTime = useRef(0)
  const pointerCaptured = useRef(false)

  const total = TESTIMONIALS.length

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return
      const clamped = Math.max(0, Math.min(total - 1, index))
      if (clamped === current) return
      setIsAnimating(true)
      setCurrent(clamped)
      setTimeout(() => setIsAnimating(false), 480)
    },
    [current, total, isAnimating]
  )

  const prev = useCallback(() => goTo(current - 1), [current, goTo])
  const next = useCallback(() => goTo(current + 1), [current, goTo])

  // Pointer drag handlers
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (e.button !== 0) return
    dragStartX.current = e.clientX
    dragStartTime.current = Date.now()
    setIsDragging(true)
    e.currentTarget.setPointerCapture(e.pointerId)
    pointerCaptured.current = true
  }, [])

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return
      const delta = e.clientX - dragStartX.current
      // Apply damping at boundaries
      const damped =
        (current === 0 && delta > 0) || (current === total - 1 && delta < 0)
          ? delta * 0.25
          : delta
      setDragOffset(damped)
    },
    [isDragging, current, total]
  )

  const onPointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return
      setIsDragging(false)
      pointerCaptured.current = false

      const elapsed = Date.now() - dragStartTime.current
      const distance = e.clientX - dragStartX.current
      const velocity = Math.abs(distance) / elapsed

      // Velocity-based or distance-based dismissal (Emil's recommendation)
      const threshold = 60
      if (Math.abs(distance) > threshold || velocity > 0.25) {
        if (distance < 0) next()
        else prev()
      }

      setDragOffset(0)
    },
    [isDragging, next, prev]
  )

  const onPointerCancel = useCallback(() => {
    setIsDragging(false)
    setDragOffset(0)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [prev, next])

  const trackStyle = {
    transform: `translateX(calc(${-current * 100}% + ${dragOffset}px))`,
    transition: isDragging ? "none" : "transform 480ms cubic-bezier(0.23, 1, 0.32, 1)",
    cursor: isDragging ? "grabbing" : "grab",
  }

  return (
    <div
      className="relative"
      role="region"
      aria-label="Testimonios de pacientes"
      aria-roledescription="carrusel"
    >
      {/* Track container */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="carousel-track flex"
          style={trackStyle}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
          aria-live="polite"
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 px-1"
              role="group"
              aria-roledescription="diapositiva"
              aria-label={`Testimonio ${i + 1} de ${total}`}
              aria-hidden={i !== current}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col min-h-[280px] select-none">
                {/* Stars */}
                <div className="flex gap-1 mb-6" aria-label="Calificación: 5 estrellas">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <svg
                      key={si}
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="#FBBF24"
                      aria-hidden="true"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-white/88 text-base md:text-lg leading-relaxed flex-1 mb-8 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <footer className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-white font-semibold">{t.name}</p>
                    <p className="text-blue-300 text-sm mt-0.5">{t.detail}</p>
                  </div>
                  <span className="inline-block text-xs bg-white/10 text-blue-200 px-3 py-1.5 rounded-full whitespace-nowrap">
                    {t.condition}
                  </span>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-5 mt-8">
        {/* Prev */}
        <button
          type="button"
          onClick={prev}
          disabled={current === 0}
          className="carousel-arrow w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-white/10 hover:text-white"
          aria-label="Testimonio anterior"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2" role="tablist" aria-label="Diapositivas">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Ir al testimonio ${i + 1}`}
              onClick={() => goTo(i)}
              className={`carousel-dot ${i === current ? "active" : ""}`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          type="button"
          onClick={next}
          disabled={current === total - 1}
          className="carousel-arrow w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-white/10 hover:text-white"
          aria-label="Testimonio siguiente"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Counter */}
      <p className="text-center text-white/30 text-xs mt-3 tabular-nums">
        {current + 1} / {total}
      </p>
    </div>
  )
}
