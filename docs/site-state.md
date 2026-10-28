# Estado del Sitio — Dr. Hernan Vazquez Gonzalez

---

## Estado actual

**Ultima actualizacion:** 2026-10-27
**Version del sitio:** 2.1 (P0 resueltos, bootstrap completo)
**URL de produccion:** https://reumamonterrey.com
**Repo:** https://github.com/jorgeruiz/hernan-vazquez
**Stack:** Next.js 16.2.7 + Tailwind CSS v4 + Vercel
**Total URLs indexables:** 14
**Solo consulta presencial** (no videollamada)

---

## Arquitectura actual

### Paginas

| Ruta | Tipo | Schema JSON-LD |
|------|------|---------------|
| `/` | Home (landing, Google Ads activo) | Physician+MedicalBusiness (sameAs, cedulas), Person, FAQPage (7 Qs), 2x MedicalTherapy |
| `/dr-hernan-vazquez-gonzalez` | Ficha del doctor | Physician (sameAs, cedulas, workLocation), BreadcrumbList |
| `/consultorios` | Indice de consultorios | BreadcrumbList |
| `/consultorios/christus-muguerza-sur` | Sede Muguerza Sur | MedicalClinic, BreadcrumbList |
| `/consultorios/care-medical-hub` | Sede CARE Medical Hub | MedicalClinic, BreadcrumbList |
| `/enfermedades` | Indice de enfermedades | BreadcrumbList |
| `/enfermedades/[7 slugs]` | 7 paginas de enfermedad (AEO) | MedicalWebPage+MedicalCondition, FAQPage, BreadcrumbList |
| `/llms.txt` | Resumen para bots IA | N/A |
| `/opengraph-image` | OG image dinamica (1200x630) | N/A |

### Navegacion

Mega menu con dropdowns (desktop hover, mobile expandible):
- Dr. Vazquez (link directo)
- Consultorios (dropdown: indice + 2 sedes)
- Enfermedades (dropdown: indice + 7 condiciones)
- Contacto (#contacto)
- CTA: Agendar cita (modal)

Dos variantes:
- `Navigation.tsx` — home (fondo transparente → blanco al scroll)
- `InternalNavigation.tsx` — paginas internas (siempre blanco)
- Datos centralizados en `lib/nav-links.ts`

Home footer: links a paginas reales (Dr. Vazquez, Consultorios, Enfermedades) + anclas (#faqs, #contacto)

### Widgets globales (en root layout)

- WhatsApp bubble + formulario de captacion (bottom-left) — WhatsAppFormContext compartido
- Todos los botones "Enviar mensaje" abren el mismo popup con formulario
- ElevenLabs bot de voz (bottom-right)
- Modal agendar cita multi-step (n8n + Google Calendar)

### Tracking

- GTM: GTM-NG9TD672
- GA4: G-JB4CFZ4QJL
- Google Ads: AW-16494564617
- Meta Pixel: 1723825835366857

### SEO tecnico

- OG image: generada dinamicamente via app/opengraph-image.tsx (1200x630)
- robots.txt: permite *, GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended
- sitemap.xml: 14 URLs
- /llms.txt: resumen del doctor + enlaces
- Security headers: CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy
- Google Search Console: verificado
- Nombre completo "Hernan Vazquez Gonzalez" consistente en todo el sitio
- Experiencia: "12 anos como reumatologo, 14 como internista" consistente
- Schemas con sameAs (Doctoralia, TopDoctors) y credentialId (3 cedulas)
- Cero menciones de videollamada en todo el codebase

---

## Features implementadas

### v2.1 — P0 y bootstrap (oct 2026)

- [x] OG image dinamica via Next.js ImageResponse (reemplaza og-default.jpg inexistente)
- [x] Eliminado hreflang /en/ (ruta no existe)
- [x] Nombre completo "Hernan Vazquez Gonzalez" en title, meta, OG, schemas, textos, alts
- [x] Experiencia actualizada a "12 anos" en hero, trust strip, badge, doctor section, footer
- [x] Schemas home con sameAs [Doctoralia, TopDoctors] y credentialId por cedula
- [x] Eliminadas todas las menciones de videollamada (home, schemas, FAQs)
- [x] FAQ de videollamada reemplazada por FAQ de consultorios con direcciones
- [x] Home footer con links a paginas reales via next/link
- [x] Lista de enfermedades del home enlaza a /enfermedades/[slug] (7 de 12 con link)
- [x] Modalidad presencial muestra ambos consultorios
- [x] Ubicacion y footer muestran ambos consultorios con piso y consultorio
- [x] Eliminada clase CSS muerta .whatsapp-float
- [x] Eliminada imagen sin usar (logo horizontal)

### v2.0 — Estrategia SEO/AEO/GEO (oct 2026)

- [x] Arquitectura multi-pagina: 1 URL → 14 URLs indexables
- [x] Pagina del doctor con nombre completo, 3 cedulas, sameAs
- [x] 2 paginas de consultorio con MedicalClinic schema y mapa embebido
- [x] 2 paginas indice (consultorios, enfermedades)
- [x] 7 paginas de enfermedad con plantilla AEO
- [x] BreadcrumbList schema en todas las paginas internas
- [x] Mega menu con dropdowns
- [x] Footer de internas con NAP, cedulas, links internos
- [x] robots.txt con bots de IA permitidos
- [x] /llms.txt con resumen y enlaces
- [x] Sitemap expandido a 14 URLs
- [x] Enlazado interno denso: condicion <-> consultorio <-> doctor
- [x] WhatsApp: todos los CTAs abren popup con formulario (WhatsAppFormContext)
- [x] Botones renombrados a "Enviar mensaje"
- [x] Eliminada /consulta-en-linea (servicio no ofrecido)

### v1.0 — Base (jun 2026)

- [x] Landing page one-page con 9 secciones
- [x] Tailwind CSS v4 con design system personalizado
- [x] Plus Jakarta Sans via next/font/google
- [x] Navigation sticky scroll-aware con hamburger drawer mobile
- [x] Hero full-viewport con imagen + gradient
- [x] Testimonios con carrusel
- [x] FAQ accordion (7 preguntas, primeras 3 abiertas)
- [x] Google Maps embed
- [x] Sistema de agendado multi-step via n8n + Google Calendar
- [x] WhatsApp widget con formulario de captacion
- [x] ElevenLabs ConvAI bot de voz
- [x] Email de leads via Nodemailer/Hostinger SMTP
- [x] GTM + GA4 + Google Ads + Meta Pixel
- [x] Schema.org JSON-LD completo
- [x] Scroll animations CSS puras via IntersectionObserver
- [x] Lenis smooth scroll (solo desktop non-touch)
- [x] Security headers completos
- [x] Accesibilidad: skip link, aria-labels, focus visible

---

## Issues pendientes (necesitan datos del cliente)

| # | Problema | Quien lo resuelve |
|---|---------|-------------------|
| 1 | **Calle exacta de Muguerza Sur faltante** | Preguntar al Dr. Vazquez |
| 2 | **Horarios de consulta no publicados** | Preguntar al Dr. Vazquez |
| 3 | **URLs de Google Maps embed sin verificar** | Verificar con direccion real |
| 4 | **Contenido de enfermedades pendiente de revision medica** | El doctor revisa y aprueba |
| 5 | **Sin aviso de privacidad** | Asesor legal / cliente |
| 6 | **Testimonios sin fuente verificable** | Reemplazar por resenas reales |
| 7 | **Bing Webmaster Tools no registrado** | Cuenta de Bing |
| 8 | **Google Business Profile (2 fichas)** | Cuenta de Google |

---

## Historial de cambios

| Fecha | Commit | Descripcion |
|-------|--------|-------------|
| 2026-06-04 | `b613576` | Construccion inicial del sitio |
| 2026-06-04 | `30cdbd3` | Animaciones, carrusel de testimonios |
| 2026-06-04 | `2f2885c` | GTM/GA4/Ads tracking, ElevenLabs bot, WhatsApp form |
| 2026-06-04 | `f1fb584` | Conversiones GA4/Ads, email de leads |
| 2026-06-04 | `972d2f8` | Hostinger SMTP, numero WA actualizado |
| 2026-06-15 | `3778805` | Sistema de agendado multi-step con n8n |
| 2026-06-15 | `cb4f197`-`f3cdd01` | Fixes ElevenLabs widget |
| 2026-06-15 | `44f690e` | CSP: n8n webhook host |
| 2026-06-15 | `fd3f873` | Reemplazar boton WhatsApp en FAQ por BotonAgendar |
| 2026-06-15 | `7c8ce9b` | Actualizar numero WhatsApp |
| 2026-06-25 | `56844d8` | ElevenLabs client tool track_lead_complete |
| 2026-06-25 | `49f7a9d` | Logos de marca, favicon, apple-touch-icon |
| 2026-06-25 | `d810c79` | Isotipo como logo en header |
| 2026-07-27 | `ae5b8ff` | CSP: GTM debug, Google Ads remarketing, ElevenLabs CDN |
| 2026-07-27 | `14ac8f7` | CSP: fonts.gstatic.com |
| 2026-10-27 | `02586f6` | SEO/AEO/GEO: 12 paginas nuevas, schemas, sitemap, robots, llms.txt |
| 2026-10-27 | `a1c1789` | Paginas indice, mega menu, eliminar consulta-en-linea |
| 2026-10-27 | `50ff7b2` | WhatsApp buttons abren form popup, renombrar a "Enviar mensaje" |
| 2026-10-27 | `6c83b84` | Auditoria SEO completa, actualizar docs |
| 2026-10-27 | `b10b230` | P0: OG image, hreflang, nombre completo, experiencia, schemas con sameAs/cedulas |
| 2026-10-27 | `81805f2` | Eliminar todas las menciones de videollamada |
| 2026-10-27 | `871c9fd` | Enlazar enfermedades del home, footer con links reales, cleanup CSS/imagen |
