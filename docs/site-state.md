# Estado del Sitio — Hernan Vazquez

---

## Estado actual

**Ultima actualizacion:** 2026-08-20
**Version del sitio:** 1.0.0
**URL de produccion:** https://reumamonterrey.com
**Repo:** https://github.com/jorgeruiz/hernan-vazquez

---

## Construccion inicial

**Fecha:** 2026-06-04
**Path de construccion:** Standalone (sin DESIGN.md previo — design system generado por Code)
**Stack:** Next.js 16.2.7 + Tailwind CSS v4 + Vercel

**Features implementadas:**

- [x] Landing page one-page con anchor navigation (9 secciones)
- [x] Tailwind CSS v4 con design system personalizado (paleta navy/primary/light-blue)
- [x] Tipografia Plus Jakarta Sans via next/font/google (400/500/600/700)
- [x] Navigation sticky scroll-aware con hamburger drawer mobile
- [x] Hero full-viewport con imagen de fondo + gradient overlay
- [x] Trust strip con 4 stats de credenciales
- [x] Seccion servicios con 3 cards + modalidades (presencial/videollamada)
- [x] Seccion doctor con foto real, credenciales, cita, CTA
- [x] Testimonios con carrusel (dots + arrows)
- [x] FAQ accordion con 8 preguntas (primeras 3 abiertas)
- [x] Ubicacion y contacto con Google Maps embed + datos en texto plano
- [x] CTA final con imagen de fondo (vista aerea de Monterrey)
- [x] Footer con logo, navegacion, datos de contacto
- [x] Sistema de agendado de citas multi-step (5 pasos) via n8n webhooks + Google Calendar
- [x] WhatsApp widget (bottom-left) con formulario de captacion de leads
- [x] ElevenLabs ConvAI bot de voz con client tool track_lead_complete
- [x] Email de leads via Nodemailer/Hostinger SMTP a hvazquezg@gmail.com y almarne72@hotmail.com
- [x] GTM (GTM-NG9TD672) + GA4 (G-JB4CFZ4QJL) + Google Ads (AW-16494564617)
- [x] Eventos GTM para flujo de agendado (agendar_inicio, agendar_paso, agendar_abandono, agendar_confirmada)
- [x] Schema.org JSON-LD: Physician, MedicalBusiness, Person, FAQPage, 3x MedicalTherapy
- [x] Scroll animations CSS puras via IntersectionObserver (data-reveal, card-item stagger)
- [x] Lenis smooth scroll (solo desktop non-touch, respeta prefers-reduced-motion)
- [x] Security headers completos en next.config.ts (CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy)
- [x] robots.ts y sitemap.ts
- [x] Favicon, apple-touch-icon, logos (isotipo header, logotipo blanco footer)
- [x] Accesibilidad: skip link, aria-labels, aria-expanded, focus visible

---

## Issues conocidos

### Bloqueantes

**1. Dos elementos con `id="inicio"` (HTML invalido)**
En `layout.tsx:139` el `<main>` tiene `id="inicio"` y en `page.tsx:61` la seccion hero tambien tiene `id="inicio"`. Esto es HTML invalido (IDs duplicados) y puede romper la navegacion por anclas, el skip link, y el scroll de Lenis. Eliminar el `id` del `<main>` en layout.tsx y dejarlo solo en la seccion hero.

**2. Variables de entorno SMTP sin documentar ni `.env.example`**
La API route `/api/contacto` requiere `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` pero no existe `.env.example` ni documentacion. Si alguien redespliega sin estas variables, el formulario de WhatsApp falla en silencio (el email no se envia, sin error visible para el usuario). Crear `.env.example` con los nombres de las variables (sin valores) y documentar en README.

### Importantes

**3. og-default.jpg no existe**
La metadata OG y Twitter en `layout.tsx` referencia `/og-default.jpg` (1200x630) pero el archivo no existe en `public/`. Compartir el sitio en redes sociales muestra imagen rota. Crear la imagen con colores de marca (#0273B5 / #1A3874).

**4. sitemap.ts incluye `/en/` que no existe**
`app/sitemap.ts` genera una entrada para `https://reumamonterrey.com/en/` con `priority: 1.0`, pero no hay ninguna pagina `/en/` implementada. Esto envia a los crawlers a un 404. Eliminar la entrada de `/en/` del sitemap hasta que se implemente.

**5. GSAP instalado pero no usado (dependencias muertas)**
`gsap` (^3.15.0) y `@gsap/react` (^2.1.2) estan en `package.json` pero ningun componente los importa. Son ~250KB de dependencias sin uso. Ejecutar `npm uninstall gsap @gsap/react`.

### Menores

**6. Clase CSS `.whatsapp-float` sin usar**
En `globals.css:317` existe la clase `.whatsapp-float` (posicionada en bottom-right) pero el componente `WhatsAppWidget.tsx` usa clases Tailwind inline (bottom-left). La clase CSS es codigo muerto.

**7. Imagen de logo horizontal sin usar**
`public/images/logo-dr-hernan-vazquez-reumatologo-monterrey.webp` existe pero no se referencia en ningun componente (el header usa el isotipo, el footer usa la version blanca).

**8. Direccion exacta del consultorio pendiente**
El schema.org y la seccion de ubicacion solo dicen "Centro Medico Muguerza Hospital Sur, Monterrey" sin calle ni numero. La URL del embed de Google Maps usa coordenadas genericas. Completar cuando el cliente proporcione la direccion exacta.

---

## Historial de cambios

| Fecha | Commit | Descripcion |
|-------|--------|-------------|
| 2026-06-04 | `b613576` | Construccion inicial del sitio |
| 2026-06-04 | `30cdbd3` | Animaciones Emil-style, carrusel de testimonios, eliminar consulta a domicilio |
| 2026-06-04 | `2f2885c` | GTM/GA4/Ads tracking, ElevenLabs bot, WhatsApp form widget |
| 2026-06-04 | `f1fb584` | Conversiones GA4/Ads, email de leads a hvazquezg@gmail.com |
| 2026-06-04 | `972d2f8` | Hostinger SMTP, numero WA actualizado, CC a almarne72@hotmail.com |
| 2026-06-15 | `3778805` | Sistema de agendado multi-step con n8n y Google Calendar |
| 2026-06-15 | `cb4f197` – `f3cdd01` | Fixes de ElevenLabs widget (timing, CSP) |
| 2026-06-15 | `44f690e` | CSP: agregar n8n webhook host a connect-src |
| 2026-06-15 | `fd3f873` | Reemplazar boton WhatsApp en FAQ por BotonAgendar |
| 2026-06-15 | `7c8ce9b` | Actualizar numero WhatsApp a +52 81 2565 6698 |
| 2026-06-25 | `56844d8` | Registrar client tool track_lead_complete en ElevenLabs widget |
| 2026-06-25 | `49f7a9d` | Agregar logos de marca (header + footer), favicon, apple-touch-icon |
| 2026-06-25 | `d810c79` | Usar isotipo como logo en header en lugar de logotipo horizontal |
| 2026-07-27 | `ae5b8ff` | CSP: agregar dominios faltantes para GTM debug, Google Ads remarketing, ElevenLabs CDN |
| 2026-07-27 | `14ac8f7` | CSP: agregar fonts.gstatic.com a font-src para fuentes de GTM debug |
