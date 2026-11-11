# Catálogos del sitio

Este archivo documenta los catálogos de contenido recurrente del sitio.
Code lo lee para saber qué plantillas existen y cómo agregar nuevos ítems.

---

## Blog

**Rutas:**
- Listing: `/blog` — grid editorial con filtro por categoría
- Detalle: `/blog/[slug]` — artículo completo

**Schema del artículo:**

| Campo | Tipo | Requerido |
|---|---|---|
| titulo | string | sí |
| slug | string (kebab-case, sin acentos, inmutable) | sí |
| categoria | string (una principal) | sí |
| tags | string[] | no |
| extracto | string (max 160, usado como meta description) | sí |
| cuerpo | markdown | sí |
| imagen_portada | image (1 requerida) | sí |
| imagenes_apoyo | image[] | no |
| autor | string (default: Dr. Hernán Vázquez González) | sí |
| fecha_publicacion | date (fecha de push) | sí |

**Categorías existentes:**
<!-- Code actualiza esta lista al agregar artículos con categorías nuevas -->
- Guías para pacientes

**Autor por defecto:**
- Nombre: Dr. Hernán Vázquez González
- Especialidad: Reumatólogo certificado por el Colegio Mexicano de Reumatología
- Cédulas: 5563127, 7440332, 09076347
- Página: /dr-hernan-vazquez-gonzalez
- Enfermedades Reumáticas

**Reglas SEO:**
- Un solo H1 por artículo (= título)
- `<title>`: "{titulo} | Dr. Hernán Vázquez González — Reumatólogo Monterrey"
- `meta description`: extracto (max 160 chars)
- Schema.org Article: headline, author, datePublished, image
- FAQPage schema si el artículo incluye sección de preguntas frecuentes
- Alt text descriptivo en portada y todas las imágenes
- Slug limpio, inmutable post-publicación
- Open Graph tags (og:title, og:description, og:image dinámica)
- Entrada en sitemap.xml
- Enlazado interno sugerido hacia /enfermedades/[slug] relevantes

**Contenido MDX:**
- Archivos en `content/blog/[slug].mdx`
- Imágenes en `public/blog/[slug]/`
- Frontmatter con todos los campos del schema

**Renderer — requisitos obligatorios:**
- `remark-gfm` como plugin (tablas GFM, strikethrough, autolinks)
- Enlaces internos (`/blog/otro-articulo`, `/enfermedades/artritis-reumatoide`) usan `<Link>` de Next.js para navegación client-side con prefetching
- Enlaces externos (`http...`) abren en nueva pestaña con `target="_blank" rel="noopener"`
