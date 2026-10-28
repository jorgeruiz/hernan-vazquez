export const physicianSchema = {
  "@context": "https://schema.org",
  "@type": ["Physician", "MedicalBusiness"],
  "name": "Dr. Hernán Vázquez González — Reumatólogo en Monterrey",
  "alternateName": "Hernan Vazquez Gonzalez Reumatologo",
  "description": "Médico reumatólogo certificado con 12 años de experiencia como reumatólogo y 14 como internista. Especialista en artritis, lupus, fibromialgia y enfermedades reumáticas en Monterrey.",
  "url": "https://reumamonterrey.com",
  "telephone": "+52-81-8317-8342",
  "medicalSpecialty": "Rheumatology",
  "availableService": [
    { "@type": "MedicalProcedure", "name": "Consulta de Reumatología" },
    { "@type": "MedicalProcedure", "name": "Tratamiento de Artritis" },
    { "@type": "MedicalProcedure", "name": "Tratamiento de Dolor Articular" }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hospital Christus Muguerza Sur, Piso 6, Consultorio 616",
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
      "credentialId": "5563127",
      "name": "Médico Cirujano Partero",
      "recognizedBy": { "@type": "EducationalOrganization", "name": "Universidad Autónoma de Nuevo León (UANL)" }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "credentialId": "7440332",
      "name": "Medicina Interna",
      "recognizedBy": { "@type": "EducationalOrganization", "name": "Universidad Nacional Autónoma de México (UNAM)" }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "credentialId": "09076347",
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
  "sameAs": [
    "https://www.doctoralia.com.mx/hernan-vazquez-gonzalez/internista-reumatologo/nuevo-leon",
    "https://www.topdoctors.mx/doctor/hernan-vazquez-gonzalez/"
  ],
  "priceRange": "$$",
  "currenciesAccepted": "MXN"
}

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Hernán Vázquez González",
  "honorificPrefix": "Dr.",
  "jobTitle": "Médico Reumatólogo",
  "description": "Médico reumatólogo certificado con 12 años de experiencia. Cirujano Partero egresado de la UANL, especialista en Medicina Interna y Reumatología por la UNAM. Certificado por el Colegio Mexicano de Reumatología. Tesorero de su Mesa Directiva.",
  "url": "https://reumamonterrey.com",
  "telephone": "+52-81-8317-8342",
  "worksFor": {
    "@type": "MedicalBusiness",
    "name": "Consultorio Dr. Hernán Vázquez González",
    "url": "https://reumamonterrey.com"
  },
  "affiliation": [
    { "@type": "Organization", "name": "Colegio Mexicano de Reumatología" },
    { "@type": "Hospital", "name": "Hospital Christus Muguerza Sur" },
    { "@type": "MedicalClinic", "name": "CARE Medical Hub" }
  ],
  "alumniOf": [
    { "@type": "EducationalOrganization", "name": "Universidad Autónoma de Nuevo León (UANL)" },
    { "@type": "EducationalOrganization", "name": "Universidad Nacional Autónoma de México (UNAM)" }
  ],
  "sameAs": [
    "https://www.doctoralia.com.mx/hernan-vazquez-gonzalez/internista-reumatologo/nuevo-leon",
    "https://www.topdoctors.mx/doctor/hernan-vazquez-gonzalez/"
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
      "name": "¿Dónde tiene consultorio el Dr. Hernán Vázquez González en Monterrey?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El Dr. Hernán Vázquez González atiende en dos consultorios: Hospital Christus Muguerza Sur (Piso 6, Consultorio 616) en la zona sur de Monterrey, donde es el único reumatólogo, y CARE Medical Hub (Bolivia 103, Piso 12, Consultorio 14) en Balcones de Galerías. Para citas: Tel. 81 8317 8342 / WhatsApp: 81 2565 6698."
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
      "name": "¿Qué credenciales tiene el Dr. Hernán Vázquez González?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El Dr. Vázquez González es médico cirujano partero egresado de la UANL, con especialidad en medicina interna y reumatología por la UNAM, y está certificado por el Colegio Mexicano de Reumatología (cédulas 5563127, 7440332, 09076347). Actualmente se desempeña como tesorero de la mesa directiva del CMR. Tiene 12 años de experiencia como reumatólogo y 14 como internista."
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
      "name": "¿Cómo es el proceso de atención con el Dr. Hernán Vázquez González?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El Dr. Vázquez González ofrece atención personalizada con acompañamiento antes de la consulta, durante la consulta —con tiempo suficiente para explicar el diagnóstico y resolver dudas— y seguimiento post-consulta para monitorear la evolución de la enfermedad. Este modelo de atención continua lo distingue del esquema estándar de consulta de 15 minutos."
      }
    }
  ]
}

export const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "Consulta de Reumatología en Monterrey",
    "description": "Valoración, diagnóstico y tratamiento de enfermedades reumáticas. Consulta presencial con el Dr. Hernán Vázquez González, reumatólogo certificado con 12 años de experiencia en Monterrey.",
    "relevantSpecialty": "Rheumatology",
    "provider": { "@type": "Physician", "name": "Dr. Hernán Vázquez González", "url": "https://reumamonterrey.com" },
    "areaServed": ["Monterrey", "San Pedro Garza García"]
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "Tratamiento de Artritis y Dolor Articular",
    "description": "Diagnóstico y manejo integral de artritis reumatoide, osteoartritis, gota, espondilitis y otras causas de dolor articular crónico.",
    "relevantSpecialty": "Rheumatology",
    "provider": { "@type": "Physician", "name": "Dr. Hernán Vázquez González", "url": "https://reumamonterrey.com" },
    "areaServed": ["Monterrey", "San Pedro Garza García", "Zona Citrícola de Nuevo León"]
  }
]
