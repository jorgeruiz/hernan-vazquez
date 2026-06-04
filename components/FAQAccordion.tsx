"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "¿Cuándo debo consultar a un reumatólogo?",
    answer:
      "Debe consultar a un reumatólogo si presenta dolor articular persistente, rigidez en las articulaciones al despertar, inflamación o enrojecimiento en alguna articulación, fatiga inexplicable, o lesiones en la piel acompañadas de caída de cabello. Estos síntomas pueden indicar una enfermedad inflamatoria o autoinmune que requiere diagnóstico especializado. La automedicación solo enmascara los síntomas sin tratar la causa del problema.",
  },
  {
    question: "¿Qué enfermedades trata un reumatólogo?",
    answer:
      "Un reumatólogo trata enfermedades que afectan articulaciones, huesos, tendones, ligamentos y músculos, incluyendo artritis reumatoide, lupus eritematoso sistémico, osteoporosis, fibromialgia, espondilitis anquilosante, artritis psoriásica, síndrome de Sjögren, vasculitis y artrosis. También maneja condiciones como hernias de disco, gonartrosis, coxartrosis y dolor de hombro de origen articular.",
  },
  {
    question: "¿El Dr. Hernán Vázquez da consulta a domicilio o por videollamada?",
    answer:
      "Sí, el Dr. Vázquez ofrece consulta presencial, consulta por videollamada y consulta a domicilio en Monterrey y San Pedro Garza García. Para agendar cualquiera de estas modalidades, puede contactar directamente por WhatsApp al 81 8317 8342 o llamar al consultorio.",
  },
  {
    question: "¿Dónde tiene consultorio el Dr. Hernán Vázquez en Monterrey?",
    answer:
      "El Dr. Hernán Vázquez atiende en el Centro Médico Muguerza Hospital Sur en Monterrey, donde es el único reumatólogo disponible en esa unidad. También tiene cobertura en la zona de San Pedro Garza García. Para citas: Tel. 81 8317 8342 / Urgencias: 81 2040 5582.",
  },
  {
    question: "¿Qué diferencia hay entre artritis y artrosis?",
    answer:
      "La artritis es una inflamación activa de la articulación —puede ser autoinmune, infecciosa o metabólica— mientras que la artrosis es un desgaste progresivo del cartílago articular, sin inflamación sostenida. Ambas producen dolor articular, pero tienen causas, tratamientos y pronósticos distintos; el diagnóstico diferencial requiere evaluación por un reumatólogo.",
  },
  {
    question: "¿Qué credenciales tiene el Dr. Hernán Vázquez?",
    answer:
      "El Dr. Vázquez es médico cirujano partero egresado de la UANL, con especialidad en medicina interna y reumatología por la UNAM, y está certificado por el Colegio Mexicano de Reumatología. Actualmente se desempeña como tesorero de la mesa directiva del Colegio Mexicano de Reumatología y es el único reumatólogo en el Centro Médico Muguerza Hospital Sur.",
  },
  {
    question: "¿El dolor en las articulaciones por la mañana es signo de artritis?",
    answer:
      "La rigidez y el dolor articular al despertar —especialmente si dura más de 30 minutos— es uno de los síntomas más característicos de la artritis reumatoide y otras enfermedades inflamatorias. Si este síntoma es recurrente, se recomienda consultar con un reumatólogo para descartar una enfermedad autoinmune activa.",
  },
  {
    question: "¿Cómo es el proceso de atención con el Dr. Hernán Vázquez?",
    answer:
      "El Dr. Vázquez ofrece atención personalizada con acompañamiento antes de la consulta, durante la consulta —con tiempo suficiente para explicar el diagnóstico y resolver dudas— y seguimiento post-consulta para monitorear la evolución de la enfermedad. Este modelo de atención continua lo distingue del esquema estándar de consulta de 15 minutos.",
  },
]

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<number[]>([0, 1, 2])

  const toggle = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <div className="divide-y divide-gray-100">
      {faqs.map((faq, index) => {
        const isOpen = openItems.includes(index)
        const panelId = `faq-panel-${index}`
        const btnId = `faq-btn-${index}`

        return (
          <div key={index} className="py-1">
            <button
              id={btnId}
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex items-center justify-between gap-4 py-5 text-left group"
            >
              <span className="text-base font-semibold text-midnight group-hover:text-primary transition-colors leading-snug pr-4">
                {faq.question}
              </span>
              <span
                className={`flex-shrink-0 w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-200 ${
                  isOpen
                    ? "bg-primary border-primary text-white rotate-45"
                    : "text-gray-400 group-hover:border-primary group-hover:text-primary"
                }`}
                aria-hidden="true"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                  <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              aria-hidden={!isOpen}
              className={`faq-content ${isOpen ? "open" : ""}`}
            >
              <div className="faq-inner">
                <p className="pb-5 text-muted leading-relaxed text-sm md:text-base pr-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
