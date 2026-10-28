# Auditoria SEO/AEO/GEO — reumamonterrey.com

**Fecha:** 2026-10-27
**Version del sitio:** 2.0 (post-implementacion estrategia SEO)
**URLs indexables:** 14

---

## 1. Resumen ejecutivo

El sitio paso de 1 URL (home one-page) a 14 URLs indexables con paginas dedicadas para el doctor, 2 consultorios, 7 enfermedades y 2 paginas indice. Cada pagina tiene metadata unica, JSON-LD, breadcrumbs y enlazado interno. El mega menu permite navegar toda la estructura del sitio. Los bots de IA (GPTBot, ClaudeBot, PerplexityBot) estan permitidos y existe /llms.txt.

---

## 2. Metadata y etiquetas — por pagina

### Home (/)

| Elemento | Valor | Estado |
|----------|-------|--------|
| title | "Reumatologo en Monterrey \| Dr. Hernan Vazquez" | OK — keyword primaria al inicio |
| description | 158 chars — incluye "reumatologo certificado", "Monterrey", "artritis, lupus, fibromialgia", tel | OK |
| canonical | https://reumamonterrey.com/ | OK |
| OG title/desc/image | Configurado, image: /og-default.jpg | PROBLEMA: og-default.jpg no existe |
| Twitter card | summary_large_image | OK |
| robots | index, follow | OK |
| lang | es | OK |
| keywords meta | 7 keywords | Presente (Google lo ignora, pero no dana) |
| JSON-LD | Physician+MedicalBusiness, Person, FAQPage, 3x MedicalTherapy | OK |
| Google verification | Presente | OK |
| hreflang /en/ | Apunta a /en/ que no existe | PROBLEMA |

### /dr-hernan-vazquez-gonzalez

| Elemento | Valor | Estado |
|----------|-------|--------|
| title | "Dr. Hernan Vazquez Gonzalez — Reumatologo en Monterrey" | OK — nombre completo + ciudad |
| description | Incluye "12 anos", "certificado", "CMR", cedulas | OK |
| canonical | /dr-hernan-vazquez-gonzalez | OK |
| OG | title, desc, url, type:profile | OK |
| JSON-LD | Physician con sameAs [Doctoralia, TopDoctors], hasCredential, workLocation | OK |
| BreadcrumbList | Inicio > Dr. Hernan Vazquez Gonzalez | OK |
| H1 | "Dr. Hernan Vazquez Gonzalez" | OK |

### /consultorios (indice)

| Elemento | Valor | Estado |
|----------|-------|--------|
| title | "Consultorios de Reumatologia en Monterrey \| Dr. Hernan Vazquez Gonzalez" | OK |
| description | Incluye ambas sedes, tel | OK |
| canonical | /consultorios | OK |
| H1 | "Consultorios de reumatologia en Monterrey" | OK — keyword local |

### /consultorios/christus-muguerza-sur

| Elemento | Valor | Estado |
|----------|-------|--------|
| title | "Reumatologo en Christus Muguerza Sur \| Dr. Hernan Vazquez Gonzalez" | OK |
| description | Incluye "Piso 6, Consultorio 616", "unico reumatologo zona sur", tel | OK |
| canonical | /consultorios/christus-muguerza-sur | OK |
| JSON-LD | MedicalClinic con doctor, address, geo | OK (TODO: calle exacta) |
| H1 | "Reumatologo en Hospital Christus Muguerza Sur" | OK — keyword hospital |
| Mapa Google | iframe embed | TODO: verificar URL exacta |

### /consultorios/care-medical-hub

| Elemento | Valor | Estado |
|----------|-------|--------|
| title | "Reumatologo en CARE Medical Hub, Galerias Monterrey \| Dr. Hernan Vazquez Gonzalez" | OK |
| description | Incluye direccion completa, CP 64620 | OK |
| canonical | /consultorios/care-medical-hub | OK |
| JSON-LD | MedicalClinic con streetAddress completa, geo | OK |
| Mapa Google | iframe embed | TODO: verificar URL exacta |

### /enfermedades (indice)

| Elemento | Valor | Estado |
|----------|-------|--------|
| title | "Enfermedades Reumaticas \| Dr. Hernan Vazquez Gonzalez — Reumatologo Monterrey" | OK |
| description | Lista las 7 condiciones + "diagnostico y tratamiento en Monterrey" | OK |
| canonical | /enfermedades | OK |

### /enfermedades/[slug] (7 paginas)

| Elemento | Valor | Estado |
|----------|-------|--------|
| title | "[Enfermedad] en Monterrey \| Dr. Hernan Vazquez Gonzalez" | OK — ciudad en title |
| description | Unica por enfermedad, incluye keyword + ciudad + tel | OK |
| canonical | /enfermedades/[slug] | OK |
| JSON-LD | MedicalWebPage + MedicalCondition + reviewedBy + lastReviewed | OK |
| JSON-LD | FAQPage con 3-4 preguntas por enfermedad | OK |
| BreadcrumbList | Inicio > Enfermedades > [Enfermedad] | OK |
| H1 | "[Enfermedad]: sintomas, diagnostico y tratamiento en Monterrey" | OK — formato AEO |
| Respuesta corta | 40-60 palabras bajo H1 | OK |
| H2s en pregunta | 3-4 secciones tipo "¿Cuales son los sintomas?" | OK |
| Author box | "Revisado por Dr. Hernan Vazquez Gonzalez" + cedulas + fecha | OK |
| Draft notice | "Contenido pendiente de revision" visible | OK |

---

## 3. Keywords cubiertas

### Tier 1 — Transaccional (cubiertas)

| Keyword | Pagina que la ataca |
|---------|-------------------|
| reumatologo monterrey | Home (H1, title, description) |
| reumatologo muguerza sur | /consultorios/christus-muguerza-sur (H1, title) |
| reumatologo galerias monterrey | /consultorios/care-medical-hub (title) |
| reumatologo zona sur monterrey | /consultorios/christus-muguerza-sur (body) |
| artritis reumatoide monterrey | /enfermedades/artritis-reumatoide (H1, title) |
| lupus monterrey | /enfermedades/lupus (title) |
| fibromialgia monterrey | /enfermedades/fibromialgia (title) |
| gota monterrey | /enfermedades/gota (title) |
| osteoporosis monterrey | /enfermedades/osteoporosis (title) |
| espondilitis anquilosante monterrey | /enfermedades/espondilitis-anquilosante (title) |
| artrosis monterrey | /enfermedades/artrosis (title) |
| hernan vazquez reumatologo | /dr-hernan-vazquez-gonzalez (H1, title) |

### Tier 2 — No cubiertas aun (oportunidades para blog)

| Keyword | Tipo | Pagina sugerida |
|---------|------|----------------|
| cuando ir al reumatologo | Informativa | Guia (blog) |
| reumatologo u ortopedista | Comercial | Guia comparativa |
| cuanto cuesta consulta reumatologo monterrey | Comercial | FAQ o guia |
| factor reumatoide alto | Informativa | Blog |
| anticuerpos antinucleares positivos | Informativa | Blog |
| dolor en articulaciones de las manos | Informativa (sintoma) | Blog → enlace a artritis |
| rigidez matutina | Informativa (sintoma) | Blog → enlace a artritis |
| acido urico alto que hacer | Informativa | Blog → enlace a gota |

---

## 4. Schema JSON-LD — inventario

| Pagina | Schemas | Estado |
|--------|---------|--------|
| Home (layout global) | Physician+MedicalBusiness, Person | OK |
| Home (page) | FAQPage (8 Qs), 3x MedicalTherapy | OK |
| /dr-hernan-vazquez-gonzalez | Physician (con sameAs, cedulas, workLocation) | OK |
| /consultorios/* | MedicalClinic (por sede) | OK (TODO: calle Muguerza, horarios) |
| /enfermedades/[slug] | MedicalWebPage+MedicalCondition, FAQPage, BreadcrumbList | OK |
| /consultorios (indice) | Ninguno | OK (no necesita) |
| /enfermedades (indice) | Ninguno | OK (no necesita) |

---

## 5. Problemas encontrados

### Criticos

| # | Problema | Archivo | Impacto |
|---|---------|---------|---------|
| 1 | **og-default.jpg no existe** | public/ (ref en layout.tsx) | Shares en redes sin imagen |
| 2 | **hreflang /en/ apunta a 404** | app/layout.tsx:43 | Senal confusa para Google |

### Importantes

| # | Problema | Archivo | Impacto |
|---|---------|---------|---------|
| 3 | **Home dice "+10 anos"** pero Doctoralia confirma 12 como reumatologo, 14 como internista | app/page.tsx (hero, trust strip, doctor section) | Inconsistencia de entidad |
| 4 | **Home dice "Hernan Vazquez"** sin "Gonzalez" | app/page.tsx, layout.tsx metadata | Nombre incompleto vs directorios |
| 5 | **Calle exacta de Muguerza Sur faltante** | Multiples archivos | NAP incompleto para SEO local |
| 6 | **Horarios de consulta no publicados** | Schemas + paginas de consultorio | Falta openingHoursSpecification |
| 7 | **Home schema Physician sin sameAs** | lib/schemas.ts | Sin enlace a Doctoralia/TopDoctors |
| 8 | **Home schema sin cedulas** | lib/schemas.ts | Sin credentialId |
| 9 | **Home footer usa anchor links** del home antiguo en vez de links a paginas | app/page.tsx footer | SEO interno desaprovechado |
| 10 | **Mapas de Google con URLs genericas** | Paginas de consultorio | Puede no mostrar ubicacion correcta |
| 11 | **Testimonios sin fuente verificable** | app/page.tsx TestimonialCarousel | Riesgo YMYL |
| 12 | **Sin aviso de privacidad** | Footer | Cumplimiento legal |

### Menores

| # | Problema | Archivo |
|---|---------|---------|
| 13 | Clase CSS .whatsapp-float sin usar | globals.css |
| 14 | Imagen logo horizontal sin usar | public/images/ |
| 15 | Schema "Consulta por Videollamada" como availableService en home | lib/schemas.ts (si no dan videollamada) |
| 16 | Meta description del home menciona "videollamada" | layout.tsx:26 |
| 17 | Texto del home menciona videollamada en multiples lugares | app/page.tsx |

---

## 6. Enlazado interno

### Flujo actual

```
Home
  ├─ Navigation mega menu → todas las paginas
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
  ├─ /consultorios/christus-muguerza-sur
  │    ├─ → /dr-hernan-vazquez-gonzalez
  │    ├─ → /enfermedades/[7 slugs]
  │    └─ → /consultorios/care-medical-hub
  │
  ├─ /consultorios/care-medical-hub (espejo)
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

**Bueno:** Enlazado denso y bidireccional entre entidades.
**Faltante:** Home (page.tsx) no enlaza a ninguna pagina interna — solo usa anclas. Las cards de enfermedades en el home no enlazan a /enfermedades/[slug].

---

## 7. SEO tecnico

| Aspecto | Estado |
|---------|--------|
| HTTPS | OK (Vercel) |
| www vs no-www | TODO: confirmar redirect 301 en Vercel |
| robots.txt | OK — bots IA permitidos |
| sitemap.xml | OK — 14 URLs |
| /llms.txt | OK — resumen del doctor + enlaces |
| Canonical por pagina | OK en todas las internas |
| Security headers | OK — CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy |
| Image optimization | OK — WebP + AVIF, next/image |
| Font loading | OK — Plus Jakarta Sans via next/font (self-hosted, swap) |
| Core Web Vitals | Probable OK (static pages), medir con PageSpeed |
| Google Search Console | Verificado |
| Bing Webmaster Tools | TODO: registrar |

---

## 8. Acciones recomendadas por prioridad

### P0 — Hacer ahora

1. Generar og-default.jpg (1200x630) con branding
2. Eliminar hreflang /en/ del layout.tsx
3. Si no dan videollamada: limpiar menciones en home, layout meta, schemas
4. Actualizar experiencia a "12 anos como reumatologo" en home
5. Usar nombre completo "Hernan Vazquez Gonzalez" en title y metadata del home

### P1 — Esta semana

6. Agregar sameAs (Doctoralia, TopDoctors) y cedulas al schema Physician del home (lib/schemas.ts)
7. Obtener direccion exacta de Muguerza Sur y completar en todos los archivos
8. Verificar/actualizar URLs de Google Maps embed
9. Agregar horarios de consulta a schemas (openingHoursSpecification)
10. Registrar sitio en Bing Webmaster Tools

### P2 — Proximo sprint

11. Agregar links del home (cards de enfermedades, doctor section) a paginas internas
12. Actualizar footer del home con links a paginas nuevas
13. Revision medica del contenido de enfermedades por el Dr. Vazquez
14. Crear aviso de privacidad
15. Iniciar blog con keywords tier 2

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
