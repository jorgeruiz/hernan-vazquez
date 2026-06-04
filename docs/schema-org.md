# Hernan Vazquez — Schema.org: Structured Data

> **Generado el 4 de junio de 2026 por Constructor / Click Society**
> **Cliente:** Reumatologo Hernan Vazquez

---

<!-- El contenido generado por IA se agrega a continuación -->

# Hernan Vazquez Reumatologo — Schema.org: Structured Data

## Schema del tipo de negocio (BusinessType especializado)

El Brief 2 indica `LocalBusiness` como tipo base, pero para un médico reumatólogo el tipo más específico y semánticamente correcto en Schema.org es `Physician` (subtype de `MedicalBusiness > LocalBusiness`). Se usa `Physician` para maximizar elegibilidad en rich results de Google para búsquedas médicas.

```json
{
  "@context": "https://schema.org",
  "@type": ["Physician", "MedicalBusiness"],
  "name": "Dr. Hernán Vázquez — Reumatólogo en Monterrey",
  "alternateName": "Hernan Vazquez Reumatologo",
  "description": "Médico reumatólogo certificado con más de 10 años de experiencia. Especialista en tratamiento de artritis, dolor articular y enfermedades reumáticas en Monterrey y San Pedro Garza García.",
  "url": "https://reumamonterrey.com",
  "telephone": "+52-81-8317-8342",
  "medicalSpecialty": "Rheumatology",
  "availableService": [
    {
      "@type": "MedicalProcedure",
      "name": "Consulta de Reumatología"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Consulta por Videollamada"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Consulta a Domicilio"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Tratamiento de Artritis"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Tratamiento de Dolor Articular"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[COMPLETAR: calle y número del consultorio]",
    "addressLocality": "Monterrey",
    "addressRegion": "Nuevo León",
    "postalCode": "[COMPLETAR]",
    "addressCountry": "MX"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[COMPLETAR]",
    "longitude": "[COMPLETAR]"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Monterrey"
    },
    {
      "@type": "City",
      "name": "San Pedro Garza García"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Zona Citrícola de Nuevo León"
    }
  ],
  "openingHours": "[COMPLETAR: ej. Mo-Fr 09:00-18:00]",
  "hasMap": "[COMPLETAR: URL Google Maps del consultorio]",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+52-81-8317-8342",
      "contactType": "customer service",
      "availableLanguage": ["Spanish", "English"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+52-81-2040-5582",
      "contactType": "emergency",
      "availableLanguage": ["Spanish", "English"]
    }
  ],
  "sameAs": [
    "[COMPLETAR: URL Google Business Profile]",
    "[COMPLETAR: Facebook si aplica]",
    "[COMPLETAR: Instagram si aplica]",
    "[COMPLETAR: LinkedIn si aplica]"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "Médico Cirujano Partero",
      "recognizedBy": {
        "@type": "EducationalOrganization",
        "name": "Universidad Autónoma de Nuevo León (UANL)"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "Medicina Interna",
      "recognizedBy": {
        "@type": "EducationalOrganization",
        "name": "Universidad Nacional Autónoma de México (UNAM)"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "Reumatología",
      "recognizedBy": {
        "@type": "EducationalOrganization",
        "name": "Universidad Nacional Autónoma de México (UNAM)"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "Certificación en Reumatología",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Colegio Mexicano de Reumatología"
      }
    }
  ],
  "memberOf": {
    "@type": "Organization",
    "name": "Colegio Mexicano de Reumatología",
    "roleName": "Tesorero de Mesa Directiva"
  },
  "priceRange": "$$",
  "currenciesAccepted": "MXN",
  "paymentAccepted": "[COMPLETAR: efectivo, tarjeta, etc.]"
}
```

**Nota para Code:** Este schema reemplaza (y es más específico que) el schema `Organization/LocalBusiness` base de `seo-tecnico.md`. Usar `Physician` + `MedicalBusiness` como `@type` array. Va en `app/layout.tsx` de forma global.

---

## FAQPage Schema

El Brief 2 no entrega FAQs explícitas. Se generan 8 preguntas basadas en el tipo de negocio, servicios, y diferenciadores declarados. **El texto de las preguntas y respuestas debe coincidir exactamente con el texto visible en el HTML del sitio.** Ajustar redacción al aprobar el copy del sitio.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué enfermedades trata un reumatólogo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El Dr. Hernán Vázquez trata enfermedades que afectan articulaciones, huesos y tejidos blandos: artritis reumatoide, lupus, gota, osteoporosis, fibromialgia, espondilitis anquilosante, síndrome de Sjögren y dolor articular crónico, entre otras. Si tienes dolor en articulaciones que persiste por más de 6 semanas, una valoración reumatológica es el primer paso."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo puedo agendar una cita con el Dr. Hernán Vázquez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puedes agendar tu cita directamente por WhatsApp al 81 8317 8342. El proceso es rápido: nos escribes, te confirmamos disponibilidad y recibes los datos de tu cita en minutos. También ofrecemos consultas por videollamada y visitas a domicilio."
      }
    },
    {
      "@type": "Question",
      "name": "¿El Dr. Vázquez ofrece consultas por videollamada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Ofrecemos consulta de reumatología por videollamada para pacientes que no pueden desplazarse al consultorio o que se encuentran fuera de Monterrey. La calidad de atención y el seguimiento son los mismos que en consulta presencial. Agenda tu cita virtual por WhatsApp al 81 8317 8342."
      }
    },
    {
      "@type": "Question",
      "name": "¿El doctor hace consultas a domicilio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. El Dr. Hernán Vázquez ofrece consultas a domicilio para pacientes con movilidad limitada o en situaciones que dificulten el traslado. Este servicio está disponible en Monterrey y San Pedro Garza García. Contáctanos por WhatsApp para verificar disponibilidad y coordinar tu visita."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuáles son las credenciales del Dr. Hernán Vázquez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El Dr. Vázquez es Médico Cirujano Partero egresado de la UANL, con especialidad en Medicina Interna y Reumatología por la UNAM. Está certificado por el Colegio Mexicano de Reumatología y actualmente se desempeña como Tesorero de su Mesa Directiva. Es el único reumatólogo del Centro Médico Muguerza Hospital Sur y de la Zona Citrícola de Nuevo León."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto dura la consulta de reumatología?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El Dr. Vázquez dedica el tiempo necesario a cada paciente para explicar el diagnóstico, resolver dudas y establecer un plan de tratamiento claro. A diferencia de consultas apresuradas, aquí tendrás el espacio para entender tu condición y salir con certeza de los pasos a seguir."
      }
    },
    {
      "@type": "Question",
      "name": "¿El Dr. Vázquez tiene consulta en algún hospital?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. El Dr. Hernán Vázquez es el único reumatólogo del Centro Médico Muguerza Hospital Sur en Monterrey. También cuenta con consultorio propio. Para información sobre horarios y ubicación, contáctanos por WhatsApp al 81 8317 8342."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué incluye el seguimiento después de la consulta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La atención del Dr. Vázquez no termina en la consulta. Ofrecemos seguimiento activo de tu enfermedad, atención post-consulta para resolver dudas que surjan durante tu tratamiento, y ajuste del plan terapéutico según tu evolución. El objetivo es que tengas un acompañamiento real, no solo una receta."
      }
    }
  ]
}
```

**Ubicación:** Homepage (`app/page.tsx`), dentro de la sección de FAQs visible. El texto del schema debe actualizarse si el copy de la sección FAQ cambia.

---

## Service Schemas

Cuatro schemas de servicio basados en los diferenciadores del Brief 2. Se agrupan por modalidad de entrega.

### Servicio 1 — Consulta Presencial de Reumatología

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "name": "Consulta de Reumatología en Monterrey",
  "description": "Valoración, diagnóstico y tratamiento de enfermedades reumáticas. Consulta presencial con el Dr. Hernán Vázquez, reumatólogo certificado con más de 10 años de experiencia en Monterrey y San Pedro Garza García.",
  "relevantSpecialty": "Rheumatology",
  "provider": {
    "@type": "Physician",
    "name": "Dr. Hernán Vázquez",
    "url": "https://reumamonterrey.com"
  },
  "areaServed": [
    "Monterrey",
    "San Pedro Garza García"
  ],
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceType": "Presencial",
    "availableLanguage": ["Spanish", "English"]
  }
}
```

### Servicio 2 — Consulta por Videollamada

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "name": "Consulta de Reumatología por Videollamada",
  "description": "Consulta médica reumatológica a distancia mediante videollamada. Ideal para pacientes fuera de Monterrey o con dificultad para desplazarse. Misma calidad de atención y seguimiento que la consulta presencial.",
  "relevantSpecialty": "Rheumatology",
  "provider": {
    "@type": "Physician",
    "name": "Dr. Hernán Vázquez",
    "url": "https://reumamonterrey.com"
  },
  "areaServed": "México",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceType": "Telemedicina",
    "availableLanguage": ["Spanish", "English"]
  }
}
```

### Servicio 3 — Consulta a Domicilio

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "name": "Consulta de Reumatología a Domicilio",
  "description": "Visita médica domiciliaria con el Dr. Hernán Vázquez para pacientes con movilidad reducida o imposibilidad de traslado. Disponible en Monterrey y San Pedro Garza García.",
  "relevantSpecialty": "Rheumatology",
  "provider": {
    "@type": "Physician",
    "name": "Dr. Hernán Vázquez",
    "url": "https://reumamonterrey.com"
  },
  "areaServed": [
    "Monterrey",
    "San Pedro Garza García"
  ],
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceType": "Domicilio"
  }
}
```

### Servicio 4 — Tratamiento de Artritis y Dolor Articular

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "name": "Tratamiento de Artritis y Dolor Articular",
  "description": "Diagnóstico y manejo integral de artritis reumatoide, osteoartritis, gota, espondilitis y otras causas de dolor articular crónico. Tratamiento personalizado con seguimiento continuo.",
  "relevantSpecialty": "Rheumatology",
  "medicineSystem": "WesternConventional",
  "provider": {
    "@type": "Physician",
    "name": "Dr. Hernán Vázquez",
    "url": "https://reumamonterrey.com"
  },
  "areaServed": [
    "Monterrey",
    "San Pedro Garza García",
    "Zona Citrícola de Nuevo León"
  ]
}
```

---

## BreadcrumbList

No aplica: sitio de profundidad única (single-page). No hay rutas internas con jerarquía `/sección/subsección`.

---

## Schemas adicionales

### Person Schema — Para el médico como individuo

Dado que el negocio es una práctica médica personal (el médico es la marca), se agrega un schema `Person` que refuerza las credenciales individuales. Este schema mejora la autoridad en búsquedas de nombre propio ("Dr. Hernán Vázquez reumatólogo").

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Hernán Vázquez",
  "honorificPrefix": "Dr.",
  "jobTitle": "Médico Reumatólogo",
  "description": "Médico Cirujano Partero egresado de la UANL, especialista en Medicina Interna y Reumatología por la UNAM. Certificado por el Colegio Mexicano de Reumatología. Tesorero de la Mesa Directiva del Colegio Mexicano de Reumatología.",
  "url": "https://reumamonterrey.com",
  "telephone": "+52-81-8317-8342",
  "worksFor": {
    "@type": "MedicalBusiness",
    "name": "Consultorio Dr. Hernán Vázquez",
    "url": "https://reumamonterrey.com"
  },
  "affiliation": [
    {
      "@type": "Organization",
      "name": "Colegio Mexicano de Reumatología"
    },
    {
      "@type": "Hospital",
      "name": "Centro Médico Muguerza Hospital Sur"
    }
  ],
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Universidad Autónoma de Nuevo León (UANL)"
    },
    {
      "@type": "EducationalOrganization",
      "name": "Universidad Nacional Autónoma de México (UNAM)"
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Médico Cirujano Partero",
      "credentialCategory": "degree"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Especialidad en Medicina Interna",
      "credentialCategory": "degree"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Especialidad en Reumatología",
      "credentialCategory": "degree"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Certificado por el Colegio Mexicano de Reumatología",
      "credentialCategory": "certification"
    }
  ],
  "knowsLanguage": ["es", "en"],
  "gender": "Male",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Monterrey",
    "addressRegion": "Nuevo León",
    "addressCountry": "MX"
  }
}
```

---

## Implementación en Next.js

### Componente base reutilizable

Crear en `components/JsonLd.tsx`:

```tsx
interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[]
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
```

### Archivo de constantes

Crear `lib/schemas.ts` con todos los schemas exportados:

```ts
export const physicianSchema = {
  "@context": "https://schema.org",
  "@type": ["Physician", "MedicalBusiness"],
  // ... schema completo del tipo de negocio
}

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  // ... schema Person completo
}

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  // ... schema FAQPage completo
}

export const serviceSchemas = [
  { /* consulta presencial */ },
  { /* videollamada */ },
  { /* domicilio */ },
  { /* artritis y dolor articular */ }
]
```

### Dónde inyectar cada schema

| Schema | Archivo | Notas |
|--------|---------|-------|
| `Physician` + `MedicalBusiness` | `app/layout.tsx` | Global, va en `<head>` en todas las páginas |
| `Person` (Dr. Vázquez) | `app/layout.tsx` | Global, refuerza autoridad del médico en todas las páginas |
| `FAQPage` | `app/page.tsx` | Solo si la sección FAQ está visible en homepage |
| Service schemas (los 4) | `app/page.tsx` | Solo si las secciones de servicios están visibles |

### Implementación en `app/layout.tsx`

```tsx
import { JsonLd } from '@/components/JsonLd'
import { physicianSchema, personSchema } from '@/lib/schemas'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <JsonLd data={physicianSchema} />
        <JsonLd data={personSchema} />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Implementación en `app/page.tsx`

```tsx
import { JsonLd } from '@/components/JsonLd'
import { faqPageSchema, serviceSchemas } from '@/lib/schemas'

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPageSchema} />
      {serviceSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      {/* Contenido de la página */}
    </>
  )
}
```

### Validación obligatoria antes del deploy

Validar cada schema en: **https://search.google.com/test/rich-results**

Schemas con rich results elegibles para este proyecto:

| Schema | Rich Result esperado |
|--------|---------------------|
| `FAQPage` | Preguntas expandibles en SERP (alto impacto en CTR) |
| `Physician` | Knowledge panel médico en Google + datos en Google Maps |
| `Person` | Knowledge panel individual del doctor |
| `MedicalTherapy` | No genera rich result visual, pero sí señales de relevancia médica |

**Prioridad de validación:** FAQPage primero (más impacto visual en SERP), luego Physician.