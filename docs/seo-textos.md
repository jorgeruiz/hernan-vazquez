# Textos SEO — Hernan Vazquez

**Generado por Constructor el 4 de junio de 2026**
**Cliente:** Reumatologo Hernan Vazquez

Este documento contiene los textos del sitio optimizados para SEO: meta titles, meta descriptions, headings H1/H2/H3, copy por sección y página. Usa estos textos directamente en el código — no escribas copy de relleno ni generes texto placeholder.

---

# Hernan Vazquez Reumatologo — SEO: Configuración Técnica Global

## Resumen para Code

Sitio de una sola página (single-page) para el Dr. Hernán Vázquez, reumatólogo con consultorio físico en Monterrey, México. El sitio es **bilingüe español/inglés** — esto es la alerta técnica crítica: se requiere estructura de subdirectorio `/en/`, hreflang en todas las rutas, y metadata duplicada por idioma desde el inicio. El dominio `reumamonterrey.com` ya está en propiedad del cliente. Este documento define los estándares técnicos SEO del sitio. Aplícalos globalmente. Los meta tags, schema por página y copy se generarán cuando se cree cada página en Brief 4.

---

## Schema Organization

Schema de tipo `LocalBusiness` (negocio con ubicación física y atención presencial en Monterrey). Colocar en el `<head>` del layout raíz como script global.

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Dr. Hernán Vázquez — Reumatólogo Monterrey",
  "url": "https://reumamonterrey.com",
  "logo": "https://reumamonterrey.com/logo.png",
  "description": "Médico especialista en reumatología con más de 10 años de experiencia en el tratamiento de artritis, lupus, fibromialgia y enfermedades autoinmunes. Consultorio en Monterrey, Nuevo León.",
  "medicalSpecialty": "Rheumatology",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+52-81-8317-8342",
      "contactType": "customer service",
      "availableLanguage": ["Spanish", "English"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+52-81-2040-5582",
      "contactType": "emergency",
      "availableLanguage": ["Spanish", "English"]
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Monterrey",
    "addressRegion": "Nuevo León",
    "addressCountry": "MX"
  },
  "sameAs": [
    "[COMPLETAR: URL de Facebook si existe]",
    "[COMPLETAR: URL de Instagram si existe]",
    "[COMPLETAR: URL de Google Business Profile si existe]"
  ]
}
```

**Notas al schema:**
- Se usa `LocalBusiness` con `medicalSpecialty` para reforzar el contexto médico sin requerir schema `Physician` completo (que necesita más datos clínicos verificables).
- La dirección física completa (calle, número, CP) debe completarse con datos que proporcione el cliente — no están en el brief.
- Los dos teléfonos se separan en `ContactPoint` distintos por tipo: servicio general y urgencias.

---

## Configuración técnica global

### Idioma y hreflang

El sitio es **bilingüe español/inglés** (`bilingual_es_en`). Se requiere implementación hreflang en todas las rutas.

**Estructura recomendada: subdirectorio `/en/`**
Justificación: al ser un sitio de una sola página, el subdirectorio consolida toda la autoridad de dominio bajo `reumamonterrey.com` sin fragmentarla en un subdominio separado.

```html
<!-- Implementación en Next.js — agregar en el layout raíz o por página via metadata -->
<link rel="alternate" hreflang="es" href="https://reumamonterrey.com/" />
<link rel="alternate" hreflang="en" href="https://reumamonterrey.com/en/" />
<link rel="alternate" hreflang="x-default" href="https://reumamonterrey.com/" />
```

En Next.js App Router, implementar via `metadata.alternates.languages` en cada ruta:

```ts
alternates: {
  canonical: 'https://reumamonterrey.com/',
  languages: {
    'es': 'https://reumamonterrey.com/',
    'en': 'https://reumamonterrey.com/en/',
  },
},
```

**Alerta para Code:** la versión `/en/` debe ser una ruta real con su propio contenido traducido, no un redirect. Si se usa i18n routing de Next.js (`next-intl` o similar), configurar `es` como locale por defecto sin prefijo de URL.

### Canonical strategy

Sitio monolingüe en estructura (cada idioma es su propia ruta). Regla: cada ruta auto-referencia su canonical en su propio idioma.

```
ES: <link rel="canonical" href="https://reumamonterrey.com/" />
EN: <link rel="canonical" href="https://reumamonterrey.com/en/" />
```

No hay parámetros de URL ni paginación previstos en un sitio de página única. Si en el futuro se agregan filtros o anclas con parámetros (`?seccion=contacto`), la canonical debe apuntar siempre a la URL limpia sin parámetros.

### Robots

```txt
User-agent: *
Allow: /

Disallow: /api/
Disallow: /admin/

Sitemap: https://reumamonterrey.com/sitemap.xml
```

**Páginas que deben llevar `noindex`:**
- Cualquier página de confirmación de formulario o "gracias por su mensaje" si se implementa.
- Rutas de preview o staging si se exponen bajo el mismo dominio.

En Next.js, aplicar `noindex` vía:
```ts
robots: {
  index: false,
  follow: false,
}
```

### Open Graph — defaults globales

```
og:site_name:   Dr. Hernán Vázquez — Reumatólogo Monterrey
og:type:        website
og:locale:      es_MX
og:locale:alternate: en_US
og:image:       https://reumamonterrey.com/og-default.jpg  (1200×630)
twitter:card:   summary_large_image
```

**Nota para Code:** crear una imagen `og-default.jpg` de 1200×630 px usando los colores de marca (`#0273B5` / `#1A3874`) con el nombre del doctor y especialidad como fallback visual. Cada sección o ruta debe sobreescribir estos defaults con `og:title` y `og:description` propios cuando se construya en Brief 4.

---

## Sitemap.xml — estructura y reglas

Generación automática vía `app/sitemap.ts` en Next.js. El contenido concreto se construye conforme se crean las rutas; estas son las reglas que aplican a todas.

**Reglas de prioridad:**

| Tipo de página | `<priority>` | `<changefreq>` |
|---|---|---|
| Home ES (`/`) | 1.0 | weekly |
| Home EN (`/en/`) | 1.0 | weekly |
| Páginas legales (Privacy, Terms) | 0.3 | yearly |

**Excluir del sitemap:**
- Rutas `/api/*`
- Cualquier ruta con `noindex` configurado
- Páginas de confirmación o "gracias"

**Nota:** al ser un sitio de una sola página con dos versiones de idioma, el sitemap será mínimo en su lanzamiento. Si en el futuro se agregan rutas de blog o servicios individuales, aplicar las reglas de prioridad estándar (servicios: 0.8, blog: 0.5).

---

## Convenciones de URLs y slugs

**Formato global:**
- Minúsculas, sin acentos, sin caracteres especiales.
- Separador: guion medio (`-`), nunca guion bajo ni espacios.
- Máximo 3–5 palabras por slug.
- Español para rutas ES, inglés para rutas EN.

**Ejemplos correctos vs incorrectos:**

| ✓ Correcto | ✗ Incorrecto |
|---|---|
| `/` | `/inicio`, `/home` |
| `/en/` | `/EN/`, `/english/` |
| `/aviso-de-privacidad` | `/AvisoDePrivacidad`, `/aviso_privacidad` |
| `/en/privacy-policy` | `/en/Privacy_Policy` |

**Slugs sugeridos para las páginas actuales del proyecto:**

| Página | Slug ES | Slug EN |
|---|---|---|
| Home (single-page) | `/` | `/en/` |
| Aviso de privacidad (si aplica) | `/aviso-de-privacidad` | `/en/privacy-policy` |

> El sitio es `single_page`, por lo que todas las secciones (servicios, testimonios, contacto, FAQ) son anclas internas (`/#servicios`, `/#contacto`), no rutas separadas. Las anclas no se incluyen en sitemap ni requieren canonical propio.

---

## Recomendaciones de implementación

**Meta tags — manejo global:**
- Patrón de title recomendado: `[Especialidad o tema] | Dr. Hernán Vázquez — Reumatólogo Monterrey`
- Nunca heredar el mismo `<title>` en ambas versiones de idioma; ES y EN deben tener titles independientes.
- En Next.js: usar `metadata` export en cada `page.tsx` o `generateMetadata()`.
- Límites: title 55–60 caracteres, description 150–160 caracteres.

**Indexación:**
- Verificar que el deploy de producción no tenga `noindex` global — error común al migrar de un entorno de staging.
- Confirmar que `reumamonterrey.com` y `www.reumamonterrey.com` resuelven a la misma URL con redirect 301 (preferiblemente sin `www` como canonical).

**Core Web Vitals:**
- La imagen hero debe usar `loading="eager"` y `fetchPriority="high"` — no lazy loading en el elemento LCP.
- Todas las imágenes secundarias deben tener `width` y `height` explícitos para evitar CLS.
- Scripts de analytics (Google Analytics, Meta Pixel si aplica) deben cargarse con `defer` o `async`.
- Dado el perfil del paciente objetivo (35–65+ años), el sitio debe mantener un rendimiento limpio en móvil — priorizar esto en la implementación de animaciones o efectos visuales del diseño experiencial.

**Sitio bilingüe — checklist crítico para Code:**
- Implementar i18n routing desde el inicio del proyecto, no como añadido posterior.
- Cada ruta (`/` y `/en/`) debe tener su propio archivo `page.tsx` o equivalente con metadata independiente.
- Asegurarse de que el par hreflang esté presente en **ambas** versiones de cada ruta — si solo está en una, Google ignora la directiva.
- No usar Google Translate automático ni traducción en cliente para generar la versión EN; el contenido debe estar en el repositorio como texto estático o en un CMS estructurado.

**Restricción editorial (Do not):**
- Ningún texto del sitio, en ninguno de los dos idiomas, debe sugerir automedicación ni tratamientos sin supervisión médica. Aplicar esta restricción también a cualquier texto generado dinámicamente o placeholders de contenido.

---

## Estrategia SEO

# Hernan Vazquez Reumatologo — SEO: Estrategia

---

## Resumen estratégico

**Hernán Vázquez Reumatólogo** es un consultorio médico especializado ubicado en Monterrey, dirigido principalmente a mujeres de 35 a 65+ años con poder adquisitivo medio-alto que buscan tratamiento para dolor articular y enfermedades autoinmunes. El sitio opera en español neutro con versión en inglés, y el objetivo de conversión único es generar citas vía WhatsApp. El set contiene 21 keywords (19 seleccionadas + 2 adicionales), distribuidas en cuatro ejes temáticos: identidad geográfica del especialista, condiciones tratadas, síntomas/intención informacional, y audiencia específica. La alerta estratégica más importante es que el sitio es de una sola página — esto limita severamente la cobertura SEO orgánica; keywords de alta intención como "tratamiento lupus Monterrey" o "espondilitis anquilosante tratamiento" merecen páginas propias, y Jorge debería evaluar con el cliente si se permite crecer la arquitectura en el mediano plazo. Gap principal del brief: no se recibieron credenciales del especialista (universidad, certificaciones, asociaciones médicas) ni volúmenes reales de búsqueda, lo que obliga a estimaciones relativas. **Nivel de confianza: Media** — keyword set funcional pero sin análisis competitivo profundo ni datos de volumen verificables.

---

## Keywords del proyecto por tema

---

### Tema 1: Identidad geográfica del especialista

Keywords que posicionan al doctor como la opción local en Monterrey. Son las de mayor peso transaccional y las que un paciente usa cuando ya decidió buscar un especialista.

| Keyword | Tipo | Intención | Volumen estimado |
|---|---|---|---|
| Reumatólogo en Monterrey | Primaria | Transaccional | Alto |
| Reumatologo de Monterrey | Primaria | Transaccional | Alto |
| Especialista en artritis Monterrey | Primaria | Transaccional | Alto |
| Consulta reumatología Monterrey | Primaria | Transaccional | Medio |
| Doctor artritis Monterrey | Secundaria | Transaccional | Medio |
| Tratamiento lupus Monterrey | Secundaria | Transaccional | Medio |
| Médico para dolor en rodillas Monterrey | Long-tail | Transaccional | Bajo |
| Reumatólogo para adultos mayores Monterrey | Long-tail | Transaccional | Bajo |

**Cuándo usar este grupo:** Son las keywords de conversión directa. Pertenecen al inicio del sitio y a cualquier página de servicio que eventualmente se cree. En un sitio de una sola página, deben estar presentes en el título H1, en la sección de servicios y en el área de contacto.

**Notas de uso:** Competencia media-baja en Monterrey para reumatología especializada. La oportunidad real está aquí: los competidores identificados (reumatika.com, puntoclinico.com.mx) tienen sitios desactualizados, lo que deja espacio para posicionarse con un sitio técnicamente sólido.

---

### Tema 2: Condiciones y tratamientos específicos

Keywords organizadas por enfermedad o condición tratada. Representan búsquedas de pacientes que ya tienen un diagnóstico o sospecha diagnóstica y buscan un especialista que lo trate.

| Keyword | Tipo | Intención | Volumen estimado |
|---|---|---|---|
| Médico de la artritis | Primaria | Comercial | Alto |
| Tratamiento de artritis | Primaria | Comercial | Alto |
| Dolor articular tratamiento Monterrey | Primaria | Transaccional | Medio |
| Médico de lupus | Secundaria | Comercial | Medio |
| Médico de fibromialgia | Secundaria | Comercial | Medio |
| Enfermedades autoinmunes reumatológicas | Secundaria | Informacional-comercial | Medio |
| Espondilitis anquilosante tratamiento | Long-tail | Comercial | Bajo |
| Médico del dolor | Secundaria | Comercial | Alto |
| Dolor de hombro | Long-tail | Informacional-comercial | Medio |
| Médico para el dolor de hombro | Long-tail | Transaccional | Bajo |

**Cuándo usar este grupo:** Relevante para la sección de servicios/condiciones del sitio. En estructura de una sola página, estas keywords anclan la sección donde se listan las condiciones tratadas. Si se crean páginas por condición, cada una absorbería su subconjunto de estas keywords.

**Notas de uso:** "Médico del dolor" tiene volumen pero compite con especialidades distintas (anestesiología, clínicas del dolor). Usar en contexto reumatológico siempre para evitar confusión semántica. "Fibromialgia" y "espondilitis anquilosante" tienen menor volumen pero altísima intención — el paciente que busca esto ya tiene diagnóstico y está listo para agendar.

---

### Tema 3: Síntomas e intención informacional

Keywords que usan personas que aún no saben que necesitan un reumatólogo pero describen sus síntomas. Alto potencial de captación en el tope del funnel.

| Keyword | Tipo | Intención | Volumen estimado |
|---|---|---|---|
| Síntomas artritis reumatoide | Primaria | Informacional | Alto |
| Dolor en las articulaciones por la mañana qué es | Long-tail | Informacional | Medio |
| Cuándo ver a un reumatólogo | Long-tail | Informacional | Medio |

**Cuándo usar este grupo:** Estas keywords no convierten directamente pero generan tráfico calificado. En un sitio de una sola página, pueden cubrirse en una sección de FAQ o en un bloque explicativo. Su potencial real está en artículos de blog que Jorge puede proponer al cliente en el mediano plazo.

**Notas de uso:** Este grupo tiene la competencia más alta porque compite con portales de salud (Healthline, MedlinePlus, Mayo Clinic en español). Difícil posicionarse en los primeros lugares de forma orgánica sin contenido de profundidad real. En el sitio actual, se recomienda usarlas en FAQs o secciones educativas, no como keywords principales del H1.

---

### Tema 4: Audiencia segmentada

Keyword específica por perfil de paciente. Diferencia al consultorio al comunicar que atiende a un segmento con necesidades particulares.

| Keyword | Tipo | Intención | Volumen estimado |
|---|---|---|---|
| Reumatólogo para adultos mayores Monterrey | Long-tail | Transaccional | Bajo |

**Cuándo usar este grupo:** Aplica en secciones de "quiénes son mis pacientes" o en copy de la página de inicio donde se describe la audiencia atendida. También útil como argumento de confianza si se crean testimoniales segmentados por perfil.

**Notas de uso:** Volumen bajo pero intención altísima. Un familiar de un adulto mayor buscando esta keyword está a un paso de agendar. No ignorar por el volumen bajo.

---

### Narrativa estratégica

El ángulo SEO del proyecto es **especialista local de alta confianza en Monterrey para condiciones reumáticas complejas** — no un médico general, no una clínica multiservicio. La keyword de mayor potencial de conversión es **"reumatólogo en Monterrey"** porque combina alta intención transaccional, especificidad geográfica y un panorama competitivo débil en el mercado local. El riesgo de canibalización más relevante existe entre el Tema 1 y el Tema 2: keywords como "especialista en artritis Monterrey" y "tratamiento de artritis" compiten por una intención similar; en una arquitectura de una sola página esto no genera problema técnico, pero si el sitio crece con páginas por condición, será necesario diferenciar la intención de cada URL explícitamente.

---

## Estructura sugerida del sitio

La arquitectura actual es de una sola página. Esta tabla representa lo que existe hoy y lo que sería estratégicamente valioso agregar.

| Página sugerida | Keywords relevantes | Prioridad |
|---|---|---|
| Inicio (one-page) | Reumatólogo en Monterrey, Médico del dolor, Tratamiento de artritis, Síntomas artritis, Cuándo ver a un reumatólogo | Alta |
| Página de condición: Artritis y dolor articular | Tratamiento de artritis, Doctor artritis Monterrey, Dolor articular tratamiento Monterrey, Síntomas artritis reumatoide | Media |
| Página de condición: Lupus y enfermedades autoinmunes | Médico de lupus, Tratamiento lupus Monterrey, Enfermedades autoinmunes reumatológicas | Media |
| Página de condición: Fibromialgia | Médico de fibromialgia | Media |
| Página de condición: Dolor de hombro | Dolor de hombro, Médico para el dolor de hombro | Media |
| Página de condición: Espondilitis anquilosante | Espondilitis anquilosante tratamiento | Media |
| Blog / Recursos (futuro) | Síntomas artritis reumatoide, Cuándo ver a un reumatólogo, Dolor en las articulaciones por la mañana | Futura |

**Nota para Jorge:** El cliente pidió sitio de una sola página y no hay urgencia de lanzamiento. La prioridad actual es construir la one-page bien ejecutada. Las páginas de condición son una conversación para el mediano plazo — cada una captaría tráfico de intención específica que la one-page no puede cubrir en profundidad.

---

## Estrategia de internal linking

**Principios para este proyecto:**

1. **Flujo hacia conversión único:** Toda sección de la one-page debe tener una ruta visible hacia el CTA de WhatsApp ("Agendar cita"). Cada mención de una condición específica (artritis, lupus, fibromialgia) debe terminar con un enlace o botón de agendamiento, nunca en un texto informativo sin salida.

2. **Autoridad desde el inicio hacia condiciones:** Si en el futuro se crean páginas por condición, la página de inicio debe enlazar explícitamente a cada una. Esto distribuye la autoridad del dominio hacia páginas más específicas y comunica la amplitud del expertise del especialista.

3. **Contexto semántico estricto en medicina:** En sitios de salud, los enlaces internos deben aparecer en contexto natural — nunca como listas de "Ver también" genéricas. Si una sección menciona lupus y existe una página de lupus, el enlace va en la mención, no al final de la página.

4. **Anchors de marca en sitio bilingüe:** En la versión en inglés del sitio, los anchors de internal linking deben usar las keywords en inglés correspondientes (ej. "rheumatologist in Monterrey", no el término en español). Mantener consistencia semántica por idioma para evitar señales mixtas a Google.

5. **Breadcrumbs cuando el sitio escale:** Si se crean páginas de condición bajo una estructura tipo `/condiciones/artritis/`, implementar breadcrumbs desde el primer día de esa expansión.

---

## Ideas de contenido futuro

**Blog / artículos (6 temas sugeridos):**

- **¿Cuándo debo ir al reumatólogo?** — Cubre directamente la keyword informacional de mayor volumen del Tema 3; capta pacientes en etapa de duda antes de que lleguen a la competencia.
- **Dolor en las articulaciones por la mañana: causas y qué hacer** — Long-tail de alta especificidad; paciente con este síntoma tiene alta probabilidad de tener artritis reumatoide o una condición autoinmune.
- **Diferencia entre artritis y artrosis: lo que debes saber** — Tema de altísima confusión entre pacientes; posiciona al doctor como autoridad educativa y capta búsquedas informacionales de ambos términos.
- **Fibromialgia: síntomas, diagnóstico y tratamiento** — Condición frecuentemente mal diagnosticada; pacientes buscan activamente información específica y tienen alta frustración con el sistema médico general.
- **Espondilitis anquilosante: señales tempranas que no debes ignorar** — Keyword de baja competencia con intención comercial alta; pacientes que llegan tarde al diagnóstico son un segmento con urgencia real.
- **Artritis en adultos mayores: qué esperar del tratamiento** — Alineado con el segmento demográfico principal del consultorio (65+); artículo que genera confianza con familiares que toman la decisión de agendar.

**Páginas adicionales o landings:**

- **Landing por condición: Lupus** — El término "tratamiento lupus Monterrey" tiene intención transaccional alta y una página dedicada lo captura con mucha más eficiencia que una sección dentro de la one-page.
- **Landing para adultos mayores** — Segmento con keyword propia y lógica de decisión distinta (muchas veces el familiar busca, no el paciente); una página enfocada en este perfil puede convertir mejor con copy y testimoniales específicos.

**Recursos o contenido de autoridad:**

- **FAQ médica estructurada** — Una sección de preguntas frecuentes con schema FAQ markup (implementado en Brief 4 técnico) cubre múltiples keywords informacionales de Tema 3 sin requerir artículos individuales; es la opción más eficiente para la one-page actual.
- **Hoja de síntomas descargable (PDF)** — "Síntomas que indican que debes ver a un reumatólogo" — genera backlinks naturales, refuerza autoridad de dominio en nicho médico, y puede usarse como pieza de relaciones públicas con medios locales de salud.