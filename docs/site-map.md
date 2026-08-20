# Mapa del Sitio — Hernan Vazquez

**Ultima actualizacion:** 2026-08-20

---

## Paginas y secciones

### Inicio (`/`)

**ID de pagina:** `home`

| ID de seccion | Etiqueta para el cliente | Ancla HTML |
|--------------|--------------------------|------------|
| `home_hero` | Hero principal (titulo, botones de cita y telefono) | `#inicio` |
| `home_trust_strip` | Barra de credenciales (anos de experiencia, CMR, UNAM) | Sin ancla |
| `home_servicios` | Condiciones que tratamos (cards de artritis, lupus, lista de condiciones) | `#servicios` |
| `home_doctor` | Sobre el Dr. Hernan Vazquez (foto, formacion, cita) | `#autoridad` |
| `home_testimonios` | Testimonios de pacientes (carrusel) | `#testimonios` |
| `home_faqs` | Preguntas frecuentes (acordeon de 8 preguntas) | `#faqs` |
| `home_ubicacion` | Ubicacion y contacto (datos, telefonos, mapa de Google) | `#ubicacion` |
| `home_cta_final` | Llamada a la accion final (fondo con imagen de Monterrey) | `#contacto` |
| `home_footer` | Pie de pagina (logo, navegacion, datos de contacto) | Sin ancla |

### Widgets flotantes

**ID de pagina:** `widgets`

| ID de seccion | Etiqueta para el cliente | Ubicacion |
|--------------|--------------------------|-----------|
| `widget_whatsapp` | Boton y formulario de WhatsApp | Esquina inferior izquierda |
| `widget_elevenlabs` | Asistente de voz (chatbot) | Esquina inferior derecha |
| `widget_agendar_modal` | Modal de agendar cita (los 5 pasos) | Ventana emergente central |

---

## Notas

- El sitio es una sola pagina (one-page) con navegacion por anclas. No hay paginas adicionales.
- La ruta `/en/` esta referenciada en metadata y sitemap pero no esta implementada.
- La navegacion principal (desktop y mobile drawer) enlaza a: `#servicios`, `#autoridad`, `#testimonios`, `#faqs`, `#contacto`.
- El `widget_agendar_modal` se activa desde multiples CTAs repartidos por toda la pagina, no tiene posicion fija visible hasta que se abre.
- La API route `/api/contacto` no es una pagina visible para el cliente; es un endpoint interno del formulario de WhatsApp.
