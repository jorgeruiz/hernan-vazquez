# Mapa del Sitio — Dr. Hernan Vazquez Gonzalez

**Ultima actualizacion:** 2026-10-27

---

## Arquitectura de rutas

### Home (`/`)

**Layout:** Root layout (app/layout.tsx) + Navigation (home)
**ID de pagina:** `home`

| ID de seccion | Etiqueta | Ancla HTML |
|--------------|----------|------------|
| `home_hero` | Hero principal (titulo, CTA agendar cita, telefono) | `#inicio` |
| `home_trust_strip` | Barra de credenciales (+10 anos, CMR, UNAM, unico en Muguerza) | Sin ancla |
| `home_servicios` | Condiciones que tratamos (3 cards + lista + modalidades) | `#servicios` |
| `home_doctor` | Sobre el Dr. Hernan Vazquez (foto, formacion, cita) | `#autoridad` |
| `home_testimonios` | Testimonios de pacientes (carrusel) | `#testimonios` |
| `home_faqs` | Preguntas frecuentes (acordeon 8 preguntas) | `#faqs` |
| `home_ubicacion` | Ubicacion y contacto (datos, mapa Google) | `#ubicacion` |
| `home_cta_final` | CTA final (fondo imagen Monterrey) | `#contacto` |
| `home_footer` | Footer con logo, navegacion, datos de contacto | Sin ancla |

### Paginas internas (route group `app/(internas)/`)

**Layout:** Root layout + Internal layout (InternalNavigation + InternalFooter)

| Ruta | Pagina | Tipo |
|------|--------|------|
| `/dr-hernan-vazquez-gonzalez` | Ficha del doctor (credenciales, cedulas, consultorios, sameAs) | Estatica |
| `/consultorios` | Indice de consultorios (2 sedes) | Estatica |
| `/consultorios/christus-muguerza-sur` | Consultorio Muguerza Sur (MedicalClinic schema, mapa) | Estatica |
| `/consultorios/care-medical-hub` | Consultorio CARE Medical Hub (MedicalClinic schema, mapa) | Estatica |
| `/enfermedades` | Indice de enfermedades (7 condiciones) | Estatica |
| `/enfermedades/artritis-reumatoide` | Artritis reumatoide (AEO template) | SSG |
| `/enfermedades/lupus` | Lupus eritematoso sistemico (AEO template) | SSG |
| `/enfermedades/fibromialgia` | Fibromialgia (AEO template) | SSG |
| `/enfermedades/gota` | Gota (AEO template) | SSG |
| `/enfermedades/osteoporosis` | Osteoporosis (AEO template) | SSG |
| `/enfermedades/espondilitis-anquilosante` | Espondilitis anquilosante (AEO template) | SSG |
| `/enfermedades/artrosis` | Artrosis / osteoartritis (AEO template) | SSG |

### Archivos tecnicos

| Ruta | Descripcion |
|------|-------------|
| `/sitemap.xml` | Generado por app/sitemap.ts (14 URLs) |
| `/robots.txt` | Generado por app/robots.ts (bots IA permitidos) |
| `/llms.txt` | Resumen del doctor para bots de IA (app/llms.txt/route.ts) |
| `/api/contacto` | Endpoint interno del formulario WhatsApp |

### Widgets flotantes

| Widget | Ubicacion | Comportamiento |
|--------|-----------|---------------|
| WhatsApp (burbuja + form) | Esquina inferior izquierda | Popup con formulario de captacion, luego redirige a wa.me |
| ElevenLabs bot de voz | Esquina inferior derecha | Chat de voz con IA |
| Modal agendar cita | Ventana emergente central | Multi-step (5 pasos) via n8n + Google Calendar |

### Navegacion

**Mega menu** (compartido por Navigation.tsx y InternalNavigation.tsx via lib/nav-links.ts):

- **Dr. Vazquez** → /dr-hernan-vazquez-gonzalez (link directo, sin dropdown)
- **Consultorios** → dropdown:
  - Ver todo: /consultorios
  - Christus Muguerza Sur: /consultorios/christus-muguerza-sur
  - CARE Medical Hub: /consultorios/care-medical-hub
- **Enfermedades** → dropdown:
  - Ver todo: /enfermedades
  - 7 condiciones individuales
- **Contacto** → #contacto (ancla al CTA final del home)
- **CTA:** Boton "Agendar cita" (abre modal)

---

## Total de URLs indexables: 14

Home (1) + Doctor (1) + Consultorios (3) + Enfermedades (8) + llms.txt (1, no indexada pero rastreable)
