import type { BlogFrontmatter } from "./blog"

const BASE_URL = "https://reumamonterrey.com"

export function buildArticleSchema(post: BlogFrontmatter) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.titulo,
    description: post.extracto,
    image: `${BASE_URL}${post.imagen_portada}`,
    datePublished: post.fecha_publicacion,
    author: {
      "@type": "Person",
      name: "Dr. Hernán Vázquez González",
      url: `${BASE_URL}/dr-hernan-vazquez-gonzalez`,
      jobTitle: "Médico Reumatólogo",
    },
    publisher: {
      "@type": "Organization",
      name: "Dr. Hernán Vázquez González — Reumatólogo Monterrey",
      url: BASE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
  }
}

export function buildBlogFAQSchema(
  faqs: { pregunta: string; respuesta: string }[]
) {
  if (faqs.length === 0) return null
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
