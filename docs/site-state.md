# Estado del Sitio — Dr. Hernan Vazquez Gonzalez

---

## Estado actual

**Ultima actualizacion:** 2026-10-27
**Version del sitio:** 2.0 (estrategia SEO/AEO/GEO implementada)
**URL de produccion:** https://reumamonterrey.com
**Repo:** https://github.com/jorgeruiz/hernan-vazquez
**Stack:** Next.js 16.2.7 + Tailwind CSS v4 + Vercel
**Total URLs indexables:** 14

---

## Arquitectura actual

### Paginas

| Ruta | Tipo | Schema JSON-LD |
|------|------|---------------|
| `/` | Home (landing one-page, Google Ads activo) | Physician+MedicalBusiness, Person, FAQPage, 3x MedicalTherapy |
| `/dr-hernan-vazquez-gonzalez` | Ficha del doctor | Physician (sameAs, cedulas, workLocation), BreadcrumbList |
| `/consultorios` | Indice de consultorios | BreadcrumbList |
| `/consultorios/christus-muguerza-sur` | Sede Muguerza Sur | MedicalClinic, BreadcrumbList |
| `/consultorios/care-medical-hub` | Sede CARE Medical Hub | MedicalClinic, BreadcrumbList |
| `/enfermedades` | Indice de enfermedades | BreadcrumbList |
| `/enfermedades/[7 slugs]` | 7 paginas de enfermedad (AEO) | MedicalWebPage+MedicalCondition, FAQPage, BreadcrumbList |
| `/llms.txt` | Resumen para bots IA | N/A |

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

### Widgets globales (en root layout)

- WhatsApp bubble + formulario de captacion (bottom-left)
- ElevenLabs bot de voz (bottom-right)
- Modal agendar cita multi-step (n8n + Google Calendar)

### Tracking

- GTM: GTM-NG9TD672
- GA4: G-JB4CFZ4QJL
- Google Ads: AW-16494564617
- Meta Pixel: 1723825835366857

### SEO tecnico

- robots.txt: permite *, GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended
- sitemap.xml: 14 URLs
- /llms.txt: resumen del doctor + enlaces
- Security headers: CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy
- Google Search Console: verificado

---

## Features implementadas (v2.0, oct 2026)

### SEO/AEO/GEO (nuevo)

- [x] Arquitectura multi-pagina: 1 URL → 14 URLs indexables
- [x] Pagina del doctor con nombre completo, 3 cedulas, sameAs Doctoralia + TopDoctors
- [x] 2 paginas de consultorio con MedicalClinic schema y mapa embebido
- [x] 2 paginas indice (consultorios, enfermedades)
- [x] 7 paginas de enfermedad con plantilla AEO:
  - H1 con ciudad, respuesta corta 40-60 palabras
  - H2s en forma de pregunta
  - FAQPage schema por pagina
  - MedicalWebPage + MedicalCondition + reviewedBy + lastReviewed
  - Author box con cedulas y fecha
  - CTA contextual a WhatsApp
- [x] BreadcrumbList schema en todas las paginas internas
- [x] Mega menu con dropdowns mostrando toda la estructura
- [x] Footer de internas con NAP, cedulas, links internos
- [x] robots.txt con bots de IA permitidos
- [x] /llms.txt con resumen y enlaces
- [x] Sitemap expandido a 14 URLs
- [x] Enlazado interno denso: condicion ↔ consultorio ↔ doctor

### Base (v1.0, jun 2026)

- [x] Landing page one-page con anchor navigation (9 secciones)
- [x] Tailwind CSS v4 con design system personalizado
- [x] Tipografia Plus Jakarta Sans via next/font/google
- [x] Navigation sticky scroll-aware con hamburger drawer mobile
- [x] Hero full-viewport con imagen de fondo + gradient overlay
- [x] Testimonios con carrusel (dots + arrows)
- [x] FAQ accordion con 8 preguntas (primeras 3 abiertas)
- [x] Google Maps embed
- [x] Sistema de agendado multi-step via n8n + Google Calendar
- [x] WhatsApp widget con formulario de captacion + contexto compartido
- [x] ElevenLabs ConvAI bot de voz
- [x] Email de leads via Nodemailer/Hostinger SMTP
- [x] GTM + GA4 + Google Ads + Meta Pixel
- [x] Schema.org JSON-LD completo
- [x] Scroll animations CSS puras via IntersectionObserver
- [x] Lenis smooth scroll (solo desktop non-touch)
- [x] Security headers completos
- [x] Accesibilidad: skip link, aria-labels, focus visible

---

## Issues conocidos

### Criticos

1. **og-default.jpg no existe** — shares en redes sin imagen
2. **hreflang /en/ apunta a ruta inexistente** — senal confusa para Google

### Importantes

3. **Home dice "+10 anos"** — dato desactualizado (confirmado: 12 como reumatologo, 14 como internista)
4. **Home dice "Hernan Vazquez" sin "Gonzalez"** — inconsistencia con directorios
5. **Calle exacta de Muguerza Sur faltante** — NAP incompleto
6. **Horarios no publicados** — falta openingHoursSpecification en schemas
7. **Home schema Physician sin sameAs ni cedulas** — lib/schemas.ts
8. **Home footer con anchor links** — no enlaza a paginas internas
9. **URLs de Google Maps embed sin verificar** — pueden mostrar ubicacion incorrecta
10. **Sin aviso de privacidad**
11. **Contenido de enfermedades pendiente de revision medica** — marcado como borrador
12. **Si no dan videollamada**: limpiar menciones en home, layout meta, schemas
13. **Bing Webmaster Tools no registrado**

### Menores

14. Clase CSS .whatsapp-float sin usar en globals.css
15. Imagen logo horizontal sin usar en public/images/

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
| 2026-06-15 | `cb4f197`–`f3cdd01` | Fixes ElevenLabs widget |
| 2026-06-15 | `44f690e` | CSP: n8n webhook host |
| 2026-06-15 | `fd3f873` | Reemplazar boton WhatsApp en FAQ por BotonAgendar |
| 2026-06-15 | `7c8ce9b` | Actualizar numero WhatsApp |
| 2026-06-25 | `56844d8` | ElevenLabs client tool track_lead_complete |
| 2026-06-25 | `49f7a9d` | Logos de marca, favicon, apple-touch-icon |
| 2026-06-25 | `d810c79` | Isotipo como logo en header |
| 2026-07-27 | `ae5b8ff` | CSP: GTM debug, Google Ads remarketing, ElevenLabs CDN |
| 2026-07-27 | `14ac8f7` | CSP: fonts.gstatic.com |
| 2026-10-27 | `02586f6` | Estrategia SEO/AEO/GEO: 12 paginas nuevas, schemas, sitemap, robots, llms.txt |
| 2026-10-27 | `a1c1789` | Paginas indice, mega menu, eliminar consulta-en-linea |
| 2026-10-27 | `50ff7b2` | WhatsApp buttons abren form popup, renombrar a "Enviar mensaje" |
