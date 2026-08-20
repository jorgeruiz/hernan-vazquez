# Especificacion Tecnica del Sitio — Hernan Vazquez

**Ultima actualizacion:** 2026-08-20
**Construido por:** Claude Code / Click Society

---

## Stack

**Framework:** Next.js 16.2.7 (App Router)
**Runtime:** Node.js (version gestionada por Vercel)
**Package manager:** npm
**Deploy:** Vercel

**Dependencias principales:**

| Paquete | Version | Proposito |
|---------|---------|-----------|
| next | 16.2.7 | Framework principal (App Router, Server Components) |
| react / react-dom | 19.2.4 | UI |
| tailwindcss | ^4 | Estilos (v4 con `@theme` inline) |
| @tailwindcss/postcss | ^4 | Plugin PostCSS para Tailwind v4 |
| lenis | ^1.3.23 | Smooth scroll (solo desktop no-touch) |
| nodemailer | ^9.0.0 | Envio de emails de leads desde API route |
| gsap / @gsap/react | ^3.15.0 / ^2.1.2 | **Instalados pero NO usados** — dependencias muertas, candidatas a eliminar |
| typescript | ^5 | Tipado estatico |

---

## Design System

**Colores (definidos en `app/globals.css` via `@theme`):**

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-primary` | `#0273B5` | CTAs, enlaces, acentos, section-label |
| `--color-primary-dark` | `#0260a0` | Hover de primary (definido pero poco usado) |
| `--color-navy` | `#1A3874` | Fondos oscuros (trust strip, gradients hero) |
| `--color-navy-dark` | `#0F2550` | Variante mas oscura de navy |
| `--color-light-blue` | `#E8F4FB` | Fondos claros, cards, highlights |
| `--color-midnight` | `#0F1923` | Texto principal, fondos muy oscuros (footer, seccion doctor) |
| `--color-muted` | `#64748b` | Texto secundario |

**Tipografia:**
- Fuente unica: **Plus Jakarta Sans** via `next/font/google`
- Pesos: 400, 500, 600, 700
- Variable CSS: `--font-jakarta`, asignada a `--font-sans` en `@theme`
- Headings y body usan la misma fuente; diferenciados por peso y clase `.heading-display` (line-height: 1.1, letter-spacing: -0.02em)

**Breakpoints (Tailwind defaults):**
- Mobile: < 768px (`md:`)
- Tablet: 768px - 1024px (`lg:`)
- Desktop: > 1024px

---

## Componentes clave

| Componente | Ruta | Descripcion |
|-----------|------|-------------|
| Layout raiz | `app/layout.tsx` | Metadata, JSON-LD, GTM/GA4/Ads scripts, providers |
| Pagina principal | `app/page.tsx` | Landing one-page con todas las secciones |
| Navigation | `components/Navigation.tsx` | Client — sticky scroll-aware, hamburger drawer mobile, boton agendar |
| FAQ Accordion | `components/FAQAccordion.tsx` | Client — 8 preguntas, primeras 3 abiertas por defecto |
| Testimonial Carousel | `components/TestimonialCarousel.tsx` | Client — carrusel con dots + arrows |
| Smooth Scroll | `components/SmoothScrollProvider.tsx` | Client — Lenis (desktop non-touch only) |
| Scroll Animations | `components/ScrollAnimations.tsx` | Client — IntersectionObserver para `data-reveal` y `.card-item` |
| WhatsApp Widget | `components/WhatsAppWidget.tsx` | Client — burbuja flotante bottom-left con formulario pre-WhatsApp |
| ElevenLabs Widget | `components/ElevenLabsWidget.tsx` | Client — bot conversacional de voz (bottom-right) |
| Agenda Cita Context | `components/AgendaCitaContext.tsx` | Client — Context + Provider para estado del modal de agendado |
| Agenda Cita Modal | `components/AgendaCitaModal.tsx` | Client — modal multi-step (5 pasos) para reservar cita |
| Boton Agendar | `components/BotonAgendar.tsx` | Client — boton CTA reutilizable que dispara `openModal()` |
| JsonLd | `components/JsonLd.tsx` | Utilidad para inyectar `<script type="application/ld+json">` |
| Schemas | `lib/schemas.ts` | physicianSchema, personSchema, faqPageSchema, serviceSchemas |
| API Contacto | `app/api/contacto/route.ts` | POST — envia email de lead via Nodemailer/Hostinger SMTP |
| robots | `app/robots.ts` | Genera robots.txt |
| sitemap | `app/sitemap.ts` | Genera sitemap.xml |

---

## Estructura de paginas

| Ruta | Archivo | Descripcion |
|------|---------|-------------|
| `/` | `app/page.tsx` | Landing page unica (one-page con anchor navigation) |
| `/api/contacto` | `app/api/contacto/route.ts` | Endpoint POST para envio de emails de leads |

No hay mas paginas implementadas. La ruta `/en/` esta referenciada en metadata y sitemap pero **no existe**.

---

## Integraciones

### Sistema de agendado de citas (n8n + Google Calendar)

Flujo completo:

1. **`BotonAgendar`** — boton CTA reutilizable colocado en hero, cards de servicios, seccion doctor, FAQ, CTA final, y Navigation. Al hacer click llama a `openModal()` del context.
2. **`AgendaCitaContext`** (`AgendaCitaProvider` + `useAgendaCita()`) — Context de React que gestiona el estado abierto/cerrado del modal. Al abrir, dispara evento GTM `agendar_inicio`. El Provider envuelve todo el sitio en `layout.tsx`.
3. **`AgendaCitaModal`** — modal multi-step con 5 pasos:
   - **Paso 1 (Sede):** CARE Medical Hub (manana 10:30-12:00) o Muguerza Sur (tarde 15:00-18:30), Lun-Vie.
   - **Paso 2 (Fecha):** calendario visual, rango de manana+1 a +60 dias, solo Lun-Vie.
   - **Paso 3 (Horario):** llama al webhook de disponibilidad y muestra slots libres.
   - **Paso 4 (Datos):** nombre*, telefono*, correo*, motivo (opcional), recomendado por (opcional).
   - **Paso 5 (Confirmacion):** resumen completo, boton confirmar llama al webhook de reserva.
4. **Webhooks n8n** (host: `https://n8n-n8n.6lk5jx.easypanel.host/webhook`):
   - `POST /dr-vazquez-disponibilidad` — body: `{fecha, sede}` — respuesta: `{slots: [{hora, inicioISO, finISO}]}`
   - `POST /dr-vazquez-reservar` — body: `{nombre, telefono, correo, motivo, recomendado_por, sede, inicioISO, finISO}` — respuesta: `{reservado: true}` o `{ocupado: true}`
5. **Google Calendar** — backend gestionado por n8n; el frontend no interactua directamente con Calendar.

Eventos GTM del flujo: `agendar_inicio`, `agendar_paso` (con numero de paso y sede), `agendar_abandono`, `agendar_confirmada`, `cita_care` / `cita_muguerza`.

### ElevenLabs ConvAI (bot de voz)

- Widget: `components/ElevenLabsWidget.tsx`
- Agent ID: `agent_8301kt4ym5cnem8b8y1ksvs8zgjs`
- Script: `https://unpkg.com/@elevenlabs/convai-widget-embed` (cargado con `strategy="afterInteractive"`)
- Client tool registrado: **`track_lead_complete`** — cuando el agente de voz completa una captacion de lead, dispara `dataLayer.push({ event: 'lead_complete_chatbot' })` para que GTM pueda trackear la conversion.
- Posicion: esquina inferior derecha (gestionada por el widget mismo).

### WhatsApp Widget (formulario pre-WhatsApp)

- Widget: `components/WhatsAppWidget.tsx`
- Numero: `528125656698` (52 81 2565 6698)
- Posicion: bottom-left fijo (`left-6 bottom-6`)
- Flujo: formulario (nombre, correo, whatsapp, colonia) → envia datos a `/api/contacto` (email) → dispara eventos GTM (`lead_whatsapp`, `generate_lead`, `conversion`) → abre WhatsApp con datos prellenados.

### Email de leads (API route)

- Endpoint: `POST /api/contacto` (`app/api/contacto/route.ts`)
- Transporte: Nodemailer via Hostinger SMTP (puerto 465, SSL)
- Destinatarios: `hvazquezg@gmail.com`, `almarne72@hotmail.com`
- Requiere variables de entorno: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`

### Tracking y analytics

| Servicio | ID | Ubicacion |
|----------|-----|-----------|
| Google Tag Manager | `GTM-NG9TD672` | `layout.tsx` — `beforeInteractive` script + noscript iframe |
| Google Analytics 4 | `G-JB4CFZ4QJL` | `layout.tsx` — `afterInteractive` |
| Google Ads | `AW-16494564617` | `layout.tsx` — `afterInteractive`, conversion en WhatsApp widget |

### Schema.org (JSON-LD)

- `physicianSchema` — `Physician` + `MedicalBusiness` (inyectado en `<head>` via layout)
- `personSchema` — `Person` (inyectado en `<head>` via layout)
- `faqPageSchema` — `FAQPage` con 8 preguntas (inyectado en page.tsx)
- `serviceSchemas` — 3 `MedicalTherapy` (inyectados en page.tsx)

---

## Decisiones de arquitectura

- **Headers CSP en `next.config.ts`:** todos los security headers (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) estan configurados en `next.config.ts` via `async headers()`. El CSP es estricto y enumera cada dominio permitido. **Cualquier integracion nueva (script externo, API, embed) requiere actualizar el CSP** o el recurso sera bloqueado por el navegador. Esto ya ha causado incidentes con ElevenLabs y Google Ads (ver historial de commits: multiples fixes de CSP). HSTS esta omitido porque Vercel lo gestiona en el edge.

- **Lenis solo en desktop no-touch:** `SmoothScrollProvider` instancia Lenis solo cuando `window.matchMedia('(pointer: fine)')` es true y no hay soporte touch. Respeta `prefers-reduced-motion`. Esto evita conflictos con el scroll nativo en moviles.

- **Animaciones CSS puras, sin GSAP en runtime:** a pesar de que GSAP esta instalado en `package.json`, las animaciones del sitio son 100% CSS (`@keyframes` para el hero, `data-reveal` con `IntersectionObserver` para scroll reveals, stagger via `nth-child`). Esto fue una decision deliberada para mantener el bundle ligero. Las dependencias GSAP son residuales y pueden eliminarse.

- **One-page con anchor navigation:** el sitio es una sola pagina con navegacion por anclas (`#servicios`, `#autoridad`, etc.). No hay routing de Next.js entre paginas. Esto simplifica el SEO (una URL canonica) pero significa que todos los cambios de contenido impactan `app/page.tsx`.

- **Modal de agendado via Context:** el estado abierto/cerrado del modal de citas se gestiona con React Context (`AgendaCitaProvider`) en lugar de estado local, para que multiples CTAs en distintas secciones puedan abrir el mismo modal. El modal se renderiza via `createPortal` al body.

- **Formulario WhatsApp como pre-filtro:** el widget de WhatsApp no abre WhatsApp directamente — primero captura datos del lead (nombre, correo, whatsapp, colonia), los envia por email al doctor, y luego redirige a WhatsApp con los datos prellenados. Esto permite trackear leads incluso si el usuario no completa la conversacion en WhatsApp.

---

## Notas para mantenimiento

- Al agregar cualquier script externo, API, o embed: **actualizar CSP en `next.config.ts`** (objeto `cspDirectives`). Verificar `script-src`, `connect-src`, `frame-src`, `img-src` segun el caso.
- Variables de entorno requeridas para el email de leads: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`. Sin ellas, el formulario de WhatsApp falla silenciosamente (el email no se envia pero el usuario es redirigido a WhatsApp de todos modos).
- Los webhooks de n8n apuntan a `https://n8n-n8n.6lk5jx.easypanel.host/webhook`. Si el host de n8n cambia, hay que actualizar la constante `N8N` en `components/AgendaCitaModal.tsx` y el dominio en el CSP `connect-src`.
- El ElevenLabs agent ID (`agent_8301kt4ym5cnem8b8y1ksvs8zgjs`) esta hardcodeado en `components/ElevenLabsWidget.tsx`.
- `microphone=(self)` esta habilitado en `Permissions-Policy` para el bot de voz de ElevenLabs.
