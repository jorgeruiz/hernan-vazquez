# Auditoria SEO/AEO/GEO — reumamonterrey.com

**Fecha:** 2026-10-27
**Version del sitio:** 2.1 (P0 resueltos, bootstrap completo)
**URLs indexables:** 14

---

## 1. Resumen ejecutivo

El sitio paso de 1 URL (home one-page) a 14 URLs indexables. Todas las paginas tienen metadata unica, JSON-LD, breadcrumbs y enlazado interno. El mega menu expone toda la estructura. Los bots de IA estan permitidos y existe /llms.txt. Los P0 estan resueltos: OG image dinamica, nombre completo consistente, experiencia actualizada, schemas con sameAs y cedulas, videollamada eliminada, y home enlazado a paginas internas.

---

## 2. Metadata y etiquetas — por pagina

### Home (/)

| Elemento | Valor | Estado |
|----------|-------|--------|
| title | "Reumatologo en Monterrey \| Dr. Hernan Vazquez Gonzalez" | OK |
| description | Incluye "12 anos", "certificado", "artritis, lupus, fibromialgia", cedulas, tel | OK |
| canonical | https://reumamonterrey.com/ | OK |
| OG image | Generada dinamicamente por app/opengraph-image.tsx (1200x630) | OK |
| Twitter card | summary_large_image | OK |
| robots | index, follow | OK |
| lang | es | OK |
| keywords meta | 9 keywords (incluye "Hernan Vazquez Gonzalez", "Muguerza Sur", "zona sur") | OK |
| JSON-LD | Physician+MedicalBusiness (sameAs, cedulas), Person, FAQPage (7 Qs), 2x MedicalTherapy | OK |
| Google verification | Presente | OK |
| hreflang | Ninguno (eliminado /en/) | OK |

### /dr-hernan-vazquez-gonzalez

| Elemento | Valor | Estado |
|----------|-------|--------|
| title | "Dr. Hernan Vazquez Gonzalez — Reumatologo en Monterrey" | OK |
| description | Incluye "12 anos", "certificado", "CMR", cedulas | OK |
| canonical | /dr-hernan-vazquez-gonzalez | OK |
| OG | title, desc, url, type:profile | OK |
| JSON-LD | Physician con sameAs [Doctoralia, TopDoctors], hasCredential, workLocation | OK |
| BreadcrumbList | Inicio > Dr. Hernan Vazquez Gonzalez | OK |

### /consultorios (indice)

| Elemento | Valor | Estado |
|----------|-------|--------|
| title | "Consultorios de Reumatologia en Monterrey \| Dr. Hernan Vazquez Gonzalez" | OK |
| description | Incluye ambas sedes, tel | OK |
| canonical | /consultorios | OK |

### /consultorios/christus-muguerza-sur

| Elemento | Valor | Estado |
|----------|-------|--------|
| title | "Reumatologo en Christus Muguerza Sur \| Dr. Hernan Vazquez Gonzalez" | OK |
| description | Incluye "Piso 6, Consultorio 616", "unico reumatologo zona sur", tel | OK |
| JSON-LD | MedicalClinic con doctor, address, geo | OK (TODO: calle exacta) |
| Mapa Google | iframe embed | TODO: verificar URL exacta |

### /consultorios/care-medical-hub

| Elemento | Valor | Estado |
|----------|-------|--------|
| title | "Reumatologo en CARE Medical Hub, Galerias Monterrey \| Dr. Hernan Vazquez Gonzalez" | OK |
| description | Incluye direccion completa, CP 64620 | OK |
| JSON-LD | MedicalClinic con streetAddress completa, geo | OK |
| Mapa Google | iframe embed | TODO: verificar URL exacta |

### /enfermedades (indice)

| Elemento | Valor | Estado |
|----------|-------|--------|
| title | "Enfermedades Reumaticas \| Dr. Hernan Vazquez Gonzalez — Reumatologo Monterrey" | OK |
| description | Lista las 7 condiciones | OK |
| canonical | /enfermedades | OK |

### /enfermedades/[slug] (7 paginas)

| Elemento | Valor | Estado |
|----------|-------|--------|
| title | "[Enfermedad] en Monterrey \| Dr. Hernan Vazquez Gonzalez" | OK |
| description | Unica por enfermedad, incluye keyword + ciudad + tel | OK |
| JSON-LD | MedicalWebPage + MedicalCondition + reviewedBy + lastReviewed + FAQPage + BreadcrumbList | OK |
| H1 | "[Enfermedad]: sintomas, diagnostico y tratamiento en Monterrey" | OK (AEO) |
| Respuesta corta | 40-60 palabras bajo H1 | OK |
| Author box | "Revisado por Dr. Hernan Vazquez Gonzalez" + cedulas + fecha | OK |
| Draft notice | "Contenido pendiente de revision" visible | OK |

---

## 3. Keywords cubiertas

### Tier 1 — Transaccional (todas cubiertas)

| Keyword | Pagina |
|---------|--------|
| reumatologo monterrey | Home (H1, title, description) |
| reumatologo hernan vazquez gonzalez | Home (title) + /dr-hernan-vazquez-gonzalez |
| reumatologo muguerza sur | /consultorios/christus-muguerza-sur (H1, title) |
| reumatologo galerias monterrey | /consultorios/care-medical-hub (title) |
| reumatologo zona sur monterrey | /consultorios/christus-muguerza-sur (body, keywords) |
| artritis reumatoide monterrey | /enfermedades/artritis-reumatoide (H1, title) |
| lupus monterrey | /enfermedades/lupus (title) |
| fibromialgia monterrey | /enfermedades/fibromialgia (title) |
| gota monterrey | /enfermedades/gota (title) |
| osteoporosis monterrey | /enfermedades/osteoporosis (title) |
| espondilitis anquilosante monterrey | /enfermedades/espondilitis-anquilosante (title) |
| artrosis monterrey | /enfermedades/artrosis (title) |

### Tier 2 — Oportunidades para blog (no cubiertas)

| Keyword | Tipo | Pagina sugerida |
|---------|------|----------------|
| cuando ir al reumatologo | Informativa | Guia (blog) |
| reumatologo u ortopedista | Comercial | Guia comparativa |
| cuanto cuesta consulta reumatologo monterrey | Comercial | FAQ o guia |
| factor reumatoide alto | Informativa | Blog |
| anticuerpos antinucleares positivos | Informativa | Blog |
| dolor en articulaciones de las manos | Informativa (sintoma) | Blog → artritis |
| rigidez matutina | Informativa (sintoma) | Blog → artritis |
| acido urico alto que hacer | Informativa | Blog → gota |

---

## 4. Schema JSON-LD — inventario

| Pagina | Schemas | Estado |
|--------|---------|--------|
| Home (layout global) | Physician+MedicalBusiness (sameAs, credentialId), Person (sameAs) | OK |
| Home (page) | FAQPage (7 Qs), 2x MedicalTherapy | OK |
| /dr-hernan-vazquez-gonzalez | Physician (sameAs, cedulas, workLocation), BreadcrumbList | OK |
| /consultorios/* | MedicalClinic (por sede), BreadcrumbList | OK (TODO: calle Muguerza, horarios) |
| /enfermedades/[slug] | MedicalWebPage+MedicalCondition, FAQPage, BreadcrumbList | OK |
| /consultorios (indice) | BreadcrumbList | OK |
| /enfermedades (indice) | BreadcrumbList | OK |

---

## 5. Issues resueltos (esta sesion)

| # | Problema | Solucion |
|---|---------|----------|
| 1 | og-default.jpg no existia | app/opengraph-image.tsx genera OG image dinamica |
| 2 | hreflang /en/ apuntaba a 404 | Eliminado de layout.tsx |
| 3 | Home decia "+10 anos" | Actualizado a "12 anos como reumatologo" (6 ocurrencias) |
| 4 | Nombre sin "Gonzalez" | "Hernan Vazquez Gonzalez" en title, meta, OG, H2, footer, alts, schemas |
| 5 | Home schema sin sameAs ni cedulas | Agregados sameAs [Doctoralia, TopDoctors] y credentialId |
| 6 | Videollamada mencionada | Eliminadas todas las menciones (home, schemas, FAQs) |
| 7 | Home footer con anchor links | Links reales a paginas via next/link |
| 8 | Enfermedades del home sin links | 7 de 12 condiciones enlazan a /enfermedades/[slug] |
| 9 | CSS muerto .whatsapp-float | Eliminado de globals.css |
| 10 | Imagen sin usar | Eliminada logo horizontal |

---

## 6. Issues pendientes (necesitan datos del cliente)

| # | Problema | Quien lo resuelve |
|---|---------|-------------------|
| 1 | Calle exacta de Muguerza Sur | Preguntar al Dr. Vazquez |
| 2 | Horarios de consulta por sede | Preguntar al Dr. Vazquez |
| 3 | URLs de Google Maps embed | Verificar con direccion real |
| 4 | Revision medica del contenido | El doctor revisa y aprueba |
| 5 | Aviso de privacidad | Asesor legal / cliente |
| 6 | Testimonios sin fuente verificable | Reemplazar por resenas reales |
| 7 | Bing Webmaster Tools | Cuenta de Bing |
| 8 | Google Business Profile (2 fichas) | Cuenta de Google |

---

## 7. Enlazado interno

```
Home
  ├─ Mega menu → todas las paginas
  ├─ Lista de condiciones → 7x /enfermedades/[slug]
  ├─ Footer → /dr-hernan-vazquez-gonzalez, /consultorios, /enfermedades
  │
  ├─ /dr-hernan-vazquez-gonzalez
  │    ├─ → /consultorios/christus-muguerza-sur
  │    ├─ → /consultorios/care-medical-hub
  │    └─ → /enfermedades/[7 slugs]
  │
  ├─ /consultorios (indice)
  │    ├─ → /consultorios/christus-muguerza-sur
  │    └─ → /consultorios/care-medical-hub
  │
  ├─ /consultorios/[sede]
  │    ├─ → /dr-hernan-vazquez-gonzalez
  │    ├─ → /enfermedades/[7 slugs]
  │    └─ → /consultorios/[otra sede]
  │
  ├─ /enfermedades (indice)
  │    └─ → /enfermedades/[7 slugs]
  │
  └─ /enfermedades/[slug]
       ├─ → Condiciones relacionadas (2-3 links)
       ├─ → /consultorios/christus-muguerza-sur
       ├─ → /consultorios/care-medical-hub
       └─ → /dr-hernan-vazquez-gonzalez (author box)
```

Enlazado denso y bidireccional. Home ahora participa activamente con links a paginas internas.

---

## 8. SEO tecnico

| Aspecto | Estado |
|---------|--------|
| HTTPS | OK (Vercel) |
| OG image | OK — generada dinamicamente (1200x630) |
| robots.txt | OK — bots IA permitidos |
| sitemap.xml | OK — 14 URLs |
| /llms.txt | OK |
| Canonical por pagina | OK |
| Security headers | OK — CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy |
| Image optimization | OK — WebP + AVIF, next/image |
| Font loading | OK — Plus Jakarta Sans self-hosted, swap |
| Google Search Console | Verificado |
| Bing Webmaster Tools | TODO: registrar |

---

## 9. Metricas a medir

| KPI | Herramienta | Linea base |
|-----|-------------|------------|
| Keywords en top 10 | Search Console | Por medir |
| Clics organicos/mes | Search Console | Por medir |
| Paginas indexadas | Search Console | 14 esperadas |
| Core Web Vitals | PageSpeed Insights | Por medir |
| Aparicion en respuestas IA | Manual (15 prompts) | Por medir |
| Resenas Google (2 fichas) | GBP | Por medir |
