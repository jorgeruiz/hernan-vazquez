export const physicianSchema = {
  "@context": "https://schema.org",
  "@type": ["Physician", "MedicalBusiness"],
  "name": "Dr. Hernán Vázquez — Reumatólogo en Monterrey",
  "alternateName": "Hernan Vazquez Reumatologo",
  "description": "Médico reumatólogo certificado con más de 10 años de experiencia. Especialista en tratamiento de artritis, dolor articular y enfermedades reumáticas en Monterrey y San Pedro Garza García.",
  "url": "https://reumamonterrey.com",
  "telephone": "+52-81-8317-8342",
  "medicalSpecialty": "Rheumatology",
  "availableService": [
    { "@type": "MedicalProcedure", "name": "Consulta de Reumatología" },
    { "@type": "MedicalProcedure", "name": "Consulta por Videollamada" },
    { "@type": "MedicalProcedure", "name": "Tratamiento de Artritis" },
    { "@type": "MedicalProcedure", "name": "Tratamiento de Dolor Articular" }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Centro Médico Muguerza Hospital Sur",
    "addressLocality": "Monterrey",
    "addressRegion": "Nuevo León",
    "addressCountry": "MX"
  },
  "areaServed": [
    { "@type": "City", "name": "Monterrey" },
    { "@type": "City", "name": "San Pedro Garza García" },
    { "@type": "AdministrativeArea", "name": "Zona Citrícola de Nuevo León" }
  ],
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
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "Médico Cirujano Partero",
      "recognizedBy": { "@type": "EducationalOrganization", "name": "Universidad Autónoma de Nuevo León (UANL)" }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "Medicina Interna",
      "recognizedBy": { "@type": "EducationalOrganization", "name": "Universidad Nacional Autónoma de México (UNAM)" }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "Reumatología",
      "recognizedBy": { "@type": "EducationalOrganization", "name": "Universidad Nacional Autónoma de México (UNAM)" }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "Certificación en Reumatología",
      "recognizedBy": { "@type": "Organization", "name": "Colegio Mexicano de Reumatología" }
    }
  ],
  "memberOf": {
    "@type": "Organization",
    "name": "Colegio Mexicano de Reumatología",
    "roleName": "Tesorero de Mesa Directiva"
  },
  "priceRange": "$$",
  "currenciesAccepted": "MXN"
}

export const personSchema = {
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
    { "@type": "Organization", "name": "Colegio Mexicano de Reumatología" },
    { "@type": "Hospital", "name": "Centro Médico Muguerza Hospital Sur" }
  ],
  "alumniOf": [
    { "@type": "EducationalOrganization", "name": "Universidad Autónoma de Nuevo León (UANL)" },
    { "@type": "EducationalOrganization", "name": "Universidad Nacional Autónoma de México (UNAM)" }
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

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuándo debo consultar a un reumatólogo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Debe consultar a un reumatólogo si presenta dolor articular persistente, rigidez en las articulaciones al despertar, inflamación o enrojecimiento en alguna articulación, fatiga inexplicable, o lesiones en la piel acompañadas de caída de cabello. Estos síntomas pueden indicar una enfermedad inflamatoria o autoinmune que requiere diagnóstico especializado. La automedicación solo enmascara los síntomas sin tratar la causa del problema."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué enfermedades trata un reumatólogo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un reumatólogo trata enfermedades que afectan articulaciones, huesos, tendones, ligamentos y músculos, incluyendo artritis reumatoide, lupus eritematoso sistémico, osteoporosis, fibromialgia, espondilitis anquilosante, artritis psoriásica, síndrome de Sjögren, vasculitis y artrosis. También maneja condiciones como hernias de disco, gonartrosis, coxartrosis y dolor de hombro de origen articular."
      }
    },
    {
      "@type": "Question",
      "name": "¿El Dr. Hernán Vázquez da consulta por videollamada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, el Dr. Vázquez ofrece consulta presencial y consulta por videollamada. Para agendar, puede contactar directamente por WhatsApp o llamar al consultorio."
      }
    },
    {
      "@type": "Question",
      "name": "¿Dónde tiene consultorio el Dr. Hernán Vázquez en Monterrey?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El Dr. Hernán Vázquez atiende en el Centro Médico Muguerza Hospital Sur en Monterrey, donde es el único reumatólogo disponible en esa unidad. También tiene cobertura en la zona de San Pedro Garza García. Para citas: Tel. 81 8317 8342 / Urgencias: 81 2040 5582."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué diferencia hay entre artritis y artrosis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La artritis es una inflamación activa de la articulación —puede ser autoinmune, infecciosa o metabólica— mientras que la artrosis es un desgaste progresivo del cartílago articular, sin inflamación sostenida. Ambas producen dolor articular, pero tienen causas, tratamientos y pronósticos distintos; el diagnóstico diferencial requiere evaluación por un reumatólogo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué credenciales tiene el Dr. Hernán Vázquez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El Dr. Vázquez es médico cirujano partero egresado de la UANL, con especialidad en medicina interna y reumatología por la UNAM, y está certificado por el Colegio Mexicano de Reumatología. Actualmente se desempeña como tesorero de la mesa directiva del Colegio Mexicano de Reumatología y es el único reumatólogo en el Centro Médico Muguerza Hospital Sur."
      }
    },
    {
      "@type": "Question",
      "name": "¿El dolor en las articulaciones por la mañana es signo de artritis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La rigidez y el dolor articular al despertar —especialmente si dura más de 30 minutos— es uno de los síntomas más característicos de la artritis reumatoide y otras enfermedades inflamatorias. Si este síntoma es recurrente, se recomienda consultar con un reumatólogo para descartar una enfermedad autoinmune activa."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo es el proceso de atención con el Dr. Hernán Vázquez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El Dr. Vázquez ofrece atención personalizada con acompañamiento antes de la consulta, durante la consulta —con tiempo suficiente para explicar el diagnóstico y resolver dudas— y seguimiento post-consulta para monitorear la evolución de la enfermedad. Este modelo de atención continua lo distingue del esquema estándar de consulta de 15 minutos."
      }
    }
  ]
}

export const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "Consulta de Reumatología en Monterrey",
    "description": "Valoración, diagnóstico y tratamiento de enfermedades reumáticas. Consulta presencial con el Dr. Hernán Vázquez, reumatólogo certificado con más de 10 años de experiencia en Monterrey.",
    "relevantSpecialty": "Rheumatology",
    "provider": { "@type": "Physician", "name": "Dr. Hernán Vázquez", "url": "https://reumamonterrey.com" },
    "areaServed": ["Monterrey", "San Pedro Garza García"]
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "Consulta de Reumatología por Videollamada",
    "description": "Consulta médica reumatológica a distancia mediante videollamada. Ideal para pacientes fuera de Monterrey o con dificultad para desplazarse.",
    "relevantSpecialty": "Rheumatology",
    "provider": { "@type": "Physician", "name": "Dr. Hernán Vázquez", "url": "https://reumamonterrey.com" },
    "areaServed": "México"
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "Tratamiento de Artritis y Dolor Articular",
    "description": "Diagnóstico y manejo integral de artritis reumatoide, osteoartritis, gota, espondilitis y otras causas de dolor articular crónico.",
    "relevantSpecialty": "Rheumatology",
    "provider": { "@type": "Physician", "name": "Dr. Hernán Vázquez", "url": "https://reumamonterrey.com" },
    "areaServed": ["Monterrey", "San Pedro Garza García", "Zona Citrícola de Nuevo León"]
  }
]
