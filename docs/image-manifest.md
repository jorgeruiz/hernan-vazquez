# Image Manifest — Hernan Vazquez

> **Cliente:** Reumatologo Hernan Vazquez · **Generado:** 4 de junio de 2026 · **Bundle:** Constructor / Click Society

---


# Image Manifest — Hernan Vazquez Reumatologo

> Inventario de imágenes para el sitio. Filenames exactos — Code los usa tal cual en los componentes. Jorge genera las imágenes en Higgsfield y las coloca en `public/images/` del repo.

## Imágenes del sitio

### hero-home.jpg

- **Tipo:** Hero / Above the fold
- **Ubicación en código:** `app/page.tsx`, sección Hero
- **Dimensiones:** 1920×1080 (16:9)
- **Formato:** WebP (fallback JPG)
- **Prompt Higgsfield:**
  > Cinematic wide shot of a modern, warmly lit medical consultation room in Monterrey, Mexico. A doctor's desk with subtle medical instruments in the foreground, large window with soft diffused afternoon light filtering through. Deep blues and cool whites. Atmospheric depth of field, film grain, editorial healthcare photography. No people. Calm, trustworthy, experiential mood.
- **Alt text:** "Consultorio reumatológico moderno en Monterrey — Dr. Hernán Vázquez Reumatólogo"
- **Placeholder:** Gradient de #1A3874 a #0273B5, texto blanco tenue "Hero principal"

---

### about-doctor.jpg

- **Tipo:** Fotografía de perfil / autoridad profesional
- **Ubicación en código:** `app/page.tsx`, sección Sobre el Doctor
- **Dimensiones:** 800×1000 (4:5 vertical)
- **Formato:** WebP
- **Prompt Higgsfield:**
  > Editorial portrait of a confident Latin male doctor in his 50s, wearing a white coat, soft directional studio lighting, warm neutral background with subtle bokeh, professional and approachable expression, shallow depth of field, cinematic medical photography, trustworthy and close atmosphere. No text, no logos.
- **Alt text:** "Dr. Hernán Vázquez, Reumatólogo con más de 10 años de experiencia en Monterrey"
- **Placeholder:** Gradient de #f0f4f8 a #dce6f0, texto gris medio "Foto del doctor"

---

### service-artritis.jpg

- **Tipo:** Imagen de servicio / card
- **Ubicación en código:** `app/page.tsx`, sección Servicios — card Artritis
- **Dimensiones:** 800×600 (4:3)
- **Formato:** WebP
- **Prompt Higgsfield:**
  > Close-up editorial photograph of aged hands gently held together, soft warm light from the side, shallow depth of field, muted blue and warm skin tones, cinematic medical storytelling. Empathetic and intimate mood. No clinical instruments visible. Film grain texture.
- **Alt text:** "Tratamiento de artritis y dolor articular — especialista en Monterrey"
- **Placeholder:** Gradient de #e8f4fb a #c8e4f5, texto gris "Artritis y dolor articular"

---

### service-consulta.jpg

- **Tipo:** Imagen de servicio / card
- **Ubicación en código:** `app/page.tsx`, sección Servicios — card Consulta
- **Dimensiones:** 800×600 (4:3)
- **Formato:** WebP
- **Prompt Higgsfield:**
  > Cinematic medium shot of a modern medical consultation in progress, warm clinical lighting, doctor and patient seated across from each other, soft blue ambient tones, clean minimal environment, editorial healthcare photography style, depth of field, no visible faces, calm and professional atmosphere.
- **Alt text:** "Consulta médica reumatológica personalizada en Monterrey"
- **Placeholder:** Gradient de #e8f4fb a #d0e8f5, texto gris "Consulta médica"

---

### testimonials-bg.jpg

- **Tipo:** Background de sección
- **Ubicación en código:** `app/page.tsx`, sección Testimonios
- **Dimensiones:** 1920×800 (amplio, casi panorámico)
- **Formato:** WebP
- **Prompt Higgsfield:**
  > Cinematic wide shot of a serene, softly lit waiting room in a modern medical office. Minimal furniture, large blurred background, cool blue and white palette with warm accent light. Abstract and atmospheric. Designed for text overlay. No people. Editorial and calm. Film grain, experiential mood.
- **Alt text:** "Pacientes satisfechos del Dr. Hernán Vázquez, Reumatólogo en Monterrey"
- **Placeholder:** Gradient oscuro de #1A3874 a #0a1f4a, opacidad 85%, texto blanco tenue "Background testimonios"

---

### contact-bg.jpg

- **Tipo:** Background de sección Contacto / Agendar Cita
- **Ubicación en código:** `app/page.tsx`, sección Contacto y CTA final
- **Dimensiones:** 1920×1080 (16:9)
- **Formato:** WebP
- **Prompt Higgsfield:**
  > Aerial cinematic view of Monterrey cityscape at dusk, warm city lights beginning to glow, cool blue sky transitioning to deep navy, editorial and atmospheric. Wide shot with strong depth. Designed for text overlay. Film grain. No people. Experiential and grounded mood.
- **Alt text:** "Agenda tu cita con el Dr. Hernán Vázquez, Reumatólogo en Monterrey"
- **Placeholder:** Gradient de #0273B5 a #1A3874, texto blanco tenue "Background contacto"

---

## Resumen

- **Total de imágenes:** 6
- **Tiempo estimado en Higgsfield:** ~5 minutos (30-45 seg por imagen)
- **Carpeta destino:** `public/images/`

---

## Instrucciones para Jorge

1. Genera las imágenes en [Higgsfield](https://higgsfield.ai) copiando cada prompt.
2. Descarga cada imagen con el **filename EXACTO** que aparece arriba (ej: `hero-home.jpg`).
3. Coloca todas en `public/images/` del repositorio del cliente.
4. Haz push — el sitio quedará con las imágenes reales sin cambiar código.
5. **Nota especial para `about-doctor.jpg`:** Si el Dr. Vázquez provee una foto real suya, úsala en lugar del generado — es un activo de autoridad crítico para este sitio.

---

## Instrucciones para Code

- Crea la carpeta `public/images/` con un `.gitkeep` vacío.
- Para cada imagen del manifest, crea la referencia `<Image>` con `src`, `width`, `height`, y `alt` exactos de este archivo.
- Usa `priority` solo en `hero-home.jpg` (above the fold). El resto: lazy loading default.
- Mientras las imágenes no existan, usa el placeholder descrito (div con gradient + texto).
- `about-doctor.jpg` es 4:5 vertical — respeta ese aspect ratio en el componente, no lo recortes a 16:9.
- NO inventes imágenes que no estén en este manifest.