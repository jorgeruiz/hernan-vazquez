// JSON-LD schemas for internal pages — separate from lib/schemas.ts (home)

const BASE_URL = "https://reumamonterrey.com"

const doctorReference = {
  "@type": "Physician",
  name: "Dr. Hernán Vázquez González",
  url: `${BASE_URL}/dr-hernan-vazquez-gonzalez`,
}

export function buildDoctorPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Hernán Vázquez González",
    alternateName: "Hernan Vazquez Gonzalez",
    description:
      "Médico reumatólogo certificado en Monterrey. 12 años de experiencia como reumatólogo y 14 como internista. Certificado por el Colegio Mexicano de Reumatología. Tesorero de su mesa directiva.",
    url: `${BASE_URL}/dr-hernan-vazquez-gonzalez`,
    telephone: "+52-81-8317-8342",
    medicalSpecialty: "Rheumatology",
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Médico Cirujano Partero",
        recognizedBy: {
          "@type": "EducationalOrganization",
          name: "Universidad Autónoma de Nuevo León (UANL)",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Medicina Interna",
        recognizedBy: {
          "@type": "EducationalOrganization",
          name: "Universidad Nacional Autónoma de México (UNAM)",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Reumatología",
        recognizedBy: {
          "@type": "EducationalOrganization",
          name: "Universidad Nacional Autónoma de México (UNAM)",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "Certificación en Reumatología",
        credentialId: "Cédulas: 5563127, 7440332, 09076347",
        recognizedBy: {
          "@type": "Organization",
          name: "Colegio Mexicano de Reumatología",
        },
      },
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Universidad Autónoma de Nuevo León (UANL)",
      },
      {
        "@type": "EducationalOrganization",
        name: "Universidad Nacional Autónoma de México (UNAM)",
      },
    ],
    memberOf: {
      "@type": "Organization",
      name: "Colegio Mexicano de Reumatología",
      roleName: "Tesorero de Mesa Directiva",
    },
    workLocation: [
      {
        "@type": "MedicalClinic",
        name: "Hospital Christus Muguerza Sur",
        address: {
          "@type": "PostalAddress",
          // TODO: Dirección de calle exacta de Muguerza Sur
          addressLocality: "Monterrey",
          addressRegion: "Nuevo León",
          addressCountry: "MX",
        },
      },
      {
        "@type": "MedicalClinic",
        name: "CARE Medical Hub",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Bolivia 103, Piso 12, Consultorio 14, Balcones de Galerías",
          postalCode: "64620",
          addressLocality: "Monterrey",
          addressRegion: "Nuevo León",
          addressCountry: "MX",
        },
      },
    ],
    sameAs: [
      "https://www.doctoralia.com.mx/hernan-vazquez-gonzalez/internista-reumatologo/nuevo-leon",
      "https://www.topdoctors.mx/doctor/hernan-vazquez-gonzalez/",
    ],
    knowsLanguage: ["es", "en"],
    areaServed: [
      { "@type": "City", name: "Monterrey" },
      { "@type": "City", name: "San Pedro Garza García" },
      { "@type": "AdministrativeArea", name: "Zona Citrícola de Nuevo León" },
    ],
  }
}

export function buildClinicSchema(options: {
  name: string
  description: string
  streetAddress?: string
  postalCode?: string
  locality: string
  region: string
  telephone: string
  url: string
  geo?: { lat: number; lng: number }
  // TODO: openingHoursSpecification
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: options.name,
    description: options.description,
    url: `${BASE_URL}${options.url}`,
    telephone: options.telephone,
    medicalSpecialty: "Rheumatology",
    ...(options.streetAddress && {
      address: {
        "@type": "PostalAddress",
        streetAddress: options.streetAddress,
        addressLocality: options.locality,
        addressRegion: options.region,
        postalCode: options.postalCode,
        addressCountry: "MX",
      },
    }),
    ...(!options.streetAddress && {
      address: {
        "@type": "PostalAddress",
        // TODO: Dirección de calle exacta
        addressLocality: options.locality,
        addressRegion: options.region,
        addressCountry: "MX",
      },
    }),
    ...(options.geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: options.geo.lat,
        longitude: options.geo.lng,
      },
    }),
    availableService: {
      "@type": "MedicalProcedure",
      name: "Consulta de Reumatología",
    },
    doctor: doctorReference,
    // TODO: openingHoursSpecification por sede
  }
}

export function buildConditionSchema(options: {
  name: string
  slug: string
  description: string
  lastReviewed: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: options.name,
    url: `${BASE_URL}/enfermedades/${options.slug}`,
    description: options.description,
    lastReviewed: options.lastReviewed,
    reviewedBy: doctorReference,
    about: {
      "@type": "MedicalCondition",
      name: options.name,
      relevantSpecialty: {
        "@type": "MedicalSpecialty",
        name: "Rheumatology",
      },
    },
    mainEntity: {
      "@type": "MedicalCondition",
      name: options.name,
    },
  }
}

export function buildFAQSchema(faqs: { pregunta: string; respuesta: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.pregunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.respuesta,
      },
    })),
  }
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  }
}

