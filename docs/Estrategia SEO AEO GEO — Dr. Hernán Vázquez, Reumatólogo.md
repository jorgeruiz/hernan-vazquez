# Estrategia SEO / AEO / GEO — Dr. Hernán Vázquez, Reumatólogo

Oct 27, 2026 · @Jorge

## Resumen ejecutivo

El sitio tiene buena base (Next.js, metadatos correctos, FAQs útiles), pero es una sola página: compite por "reumatólogo Monterrey" con una URL y no tiene ninguna página que pueda posicionar o ser citada por IA para cada enfermedad. La mayor autoridad del doctor hoy vive fuera del sitio: 429 opiniones en Doctoralia y perfil en Top Doctors.

Contexto: Google Ads restringe la segmentación y las keywords de salud, así que el canal orgánico y las respuestas de chatbots son la vía principal de captación. El diferenciador más fuerte es geográfico: es el único reumatólogo en la zona sur de Monterrey, con un segundo consultorio en Care Medical Hub (Balcones de Galerías).

Las cinco apuestas:

1. **Pasar de one-page a sitio por entidades**: una página por condición (artritis reumatoide, lupus, fibromialgia, gota, osteoporosis, espondilitis, artrosis), una del doctor y una por consultorio.
2. **Unificar la entidad "Dr. Hernán Vázquez González"**: mismo nombre, años de experiencia, direcciones y teléfono en sitio, Google Business Profile, Doctoralia, Top Doctors y Muguerza.
3. **SEO local con dos consultorios**: Christus Muguerza Sur (Piso 6, Cons. 616) y Care Medical Hub (Bolivia 103, Balcones de Galerías), hoy ausente del sitio.
4. **Contenido AEO**: respuestas de 40–60 palabras a preguntas de síntomas, con schema FAQPage, MedicalCondition y Physician.
5. **GEO**: hacer al doctor citable por ChatGPT, Gemini y Perplexity con autoría médica revisada, datos verificables y menciones en fuentes de terceros.

## Diagnóstico del sitio actual

La home está bien escrita para conversión, pero la arquitectura limita el SEO y hay inconsistencias de datos que confunden a Google y a los LLMs.

| Área | Hallazgo | Impacto | Acción |
| --- | --- | --- | --- |
| Arquitectura | Todo en una URL; menú solo con anclas (#servicios, #faqs) | Alto | Crear páginas por condición, doctor, consultorios y blog |
| Entidad / nombre | Sitio dice "Hernán Vázquez"; directorios dicen "Hernán Vázquez González" | Alto | Usar nombre completo en H1 de /dr-hernan-vazquez, schema y footer |
| Experiencia | Sitio: +10 años. Doctoralia: 12 años como reumatólogo y 14 como internista | Medio | Confirmado: usar 12 años como reumatólogo y 14 como internista en sitio, GBP y directorios |
| Ubicación | Solo "Muguerza Hospital Sur, Monterrey", sin piso, consultorio, calle ni mapa | Alto | NAP completo + Google Maps embebido |
| Segundo consultorio | Care Medical Hub (Bolivia 103, Balcones de Galerías) no aparece | Alto | Confirmado: añadir al sitio con página propia + ficha GBP |
| Teléfonos | Citas 81 8317 8342, WhatsApp 81 2565 6698, urgencias 81 2040 5582 | Medio | Definir un teléfono principal para NAP; explicar los demás |
| Cédulas | No se muestran (Doctoralia publica 5563127, 7440332, 09076347) | Alto (YMYL) | Mostrarlas en página del doctor y footer |
| Canonical | Canonical a reumamonterrey.com; el sitio sirve en www | Medio | Elegir una versión, redirigir 301 y alinear canonical |
| Testimonios | Nombres + diagnóstico, sin fuente verificable | Riesgo | Ver sección de cumplimiento |
| Afirmación "único reumatólogo en Muguerza Sur" | Repetida 4 veces | Bajo/medio | Confirmado: único reumatólogo en la zona sur de Monterrey. Usarlo como diferenciador principal en H1 de consultorio, GBP y schema; revisarlo cada trimestre |
| Meta keywords | Presente | Nulo | Ignorar |

Fortalezas a conservar: metadatos y OG correctos, FAQs con respuestas claras, credenciales (UANL, UNAM, CMR, Tesorero del CMR), CTA a WhatsApp, videollamada nacional.

## Competencia y keywords objetivo

En "reumatólogo Monterrey" la SERP la dominan directorios (Doctoralia, Top Doctors, TocDoc), no sitios de médicos. La oportunidad está en ganar el Local Pack y las búsquedas por condición + ciudad, donde los directorios tienen páginas genéricas.

Competidores directos en directorios: Dra. Tayde Gracia Arechiga, Dr. Jaime Cantú Pompa, Dr. Jorge Medina Castillo, Dra. Selene Delgado Ayala, Dr. Luciano Ortiz Treviño, Dr. Daniel Xibille. El doctor ya compite fuerte ahí: 429 opiniones en Doctoralia, más que la mayoría.

| Clúster | Keywords ejemplo | Intención | Página destino | Prioridad |
| --- | --- | --- | --- | --- |
| Core local | reumatólogo Monterrey, reumatólogo cerca de mí, reumatólogo San Pedro, reumatólogo zona sur Monterrey | Transaccional | Home + páginas de consultorio | 1 |
| Hospital | reumatólogo Muguerza Sur, reumatólogo Christus Muguerza, reumatólogo Galerías Monterrey | Transaccional | Páginas de consultorio | 1 |
| Condición + ciudad | especialista en artritis reumatoide Monterrey, médico lupus Monterrey, tratamiento fibromialgia Monterrey, gota Monterrey | Transaccional | Páginas de condición | 1 |
| Síntomas | dolor en articulaciones de las manos, rigidez matutina, dolor en todo el cuerpo y cansancio, dedos hinchados | Informativa → consulta | Blog / guías + enlace a condición | 2 |
| Decisión | cuándo ir al reumatólogo, reumatólogo u ortopedista, cuánto cuesta consulta reumatólogo Monterrey, qué hace un reumatólogo | Comercial | Guías + FAQ | 2 |
| Diagnóstico | factor reumatoide alto, anticuerpos antinucleares positivos, ácido úrico alto qué hacer | Informativa | Blog | 3 |
| Nacional | reumatólogo en línea, consulta reumatología por videollamada | Transaccional | /consulta-en-linea | 2 |

Validar volúmenes en Keyword Planner y Search Console antes de priorizar la producción del blog.

## Arquitectura de sitio propuesta

De 1 URL a unas 20 páginas indexables: cada enfermedad, consultorio y guía puede posicionar y ser citada por separado.

&#91;embedded content: arquitectura propuesta · 4 secciones bajo la home\]

URLs sugeridas: `/dr-hernan-vazquez-gonzalez`, `/consultorios/christus-muguerza-sur`, `/consultorios/care-medical-hub`, `/consulta-en-linea`, `/enfermedades/artritis-reumatoide` (una por condición), `/guias/cuando-ir-al-reumatologo`. La home conserva el resumen actual y enlaza a cada sección.

## SEO técnico y SEO local

El Local Pack es donde se gana la cita: dos fichas de Google Business Profile bien trabajadas valen más que cualquier artículo.

**Técnico**

- Resolver www vs. no-www: una sola versión, 301 y canonical alineado.
- sitemap.xml y robots.txt generados por Next.js; enviar a Search Console.
- Breadcrumbs visibles + BreadcrumbList.
- Imágenes: el hero se sirve a 3840 px; limitar `sizes`, usar `priority` solo en el LCP. Meta: LCP < 2.5 s en móvil.
- Página 404 útil y enlazado interno condición ↔ síntomas ↔ consultorio.

**Schema (JSON-LD)**

- Home: `Physician` + `MedicalOrganization` con `medicalSpecialty: Rheumatology`, `hasCredential`, `alumniOf` (UANL, UNAM), `memberOf` (Colegio Mexicano de Reumatología), `sameAs` (Doctoralia, Top Doctors, GBP, redes).
- Consultorios: `MedicalClinic` con dirección, geo, horario y teléfono por sede.
- Condiciones: `MedicalWebPage` + `MedicalCondition` (`signOrSymptom`, `possibleTreatment`) + `reviewedBy` el doctor y `lastReviewed`.
- FAQs: `FAQPage` en cada página que tenga preguntas.

**Local**

- [ ] Google Business Profile por consultorio (Muguerza Sur Piso 6 Cons. 616; Care Medical Hub Bolivia 103 Piso 12 Cons. 14). Categoría principal "Reumatólogo", secundaria "Internista".
- [ ] Nombre en GBP: "Dr. Hernán Vázquez González — Reumatólogo" (sin keywords extra, para evitar suspensión).
- [ ] Fotos reales del consultorio y del doctor; publicaciones semanales con enlace a páginas de condición.
- [ ] Sistema de reseñas en Google: QR/WhatsApp post-consulta. Meta: 50 reseñas en 90 días.
- [ ] NAP idéntico en Doctoralia, Top Doctors, TocDoc, directorio Christus Muguerza, Colegio Mexicano de Reumatología, Facebook.
- [ ] Enlazar desde Doctoralia y Top Doctors al sitio (campo de web).

## AEO: respuestas directas y AI Overviews

Cada página de condición debe responder en las primeras líneas la pregunta exacta que escribe el paciente; eso es lo que Google extrae para snippets y AI Overviews.

Plantilla por página de condición:

1. **H1**: "Artritis reumatoide: síntomas, diagnóstico y tratamiento en Monterrey".
2. **Respuesta corta (40–60 palabras)** bajo el H1: qué es, a quién afecta, cuándo consultar.
3. **H2 en forma de pregunta**: ¿Cuáles son los síntomas?, ¿Cómo se diagnostica?, ¿Tiene cura?, ¿Qué tratamientos existen?, ¿Cuándo ir al reumatólogo?
4. Cada H2 abre con una respuesta de 1–2 oraciones y luego desarrolla.
5. **Listas y tablas** para síntomas, estudios de laboratorio y diferencias (artritis vs. artrosis; reumatólogo vs. ortopedista).
6. **Caja de autoría**: "Escrito y revisado por el Dr. Hernán Vázquez González, reumatólogo certificado por el CMR. Cédula …. Última revisión: fecha".
7. **FAQ** de 4–6 preguntas "People Also Ask" + `FAQPage`.
8. CTA contextual: "Si tiene rigidez matutina de más de 30 minutos, agende una valoración".

Fuentes de preguntas: People Also Ask, Search Console (consultas con impresiones sin clic), preguntas que el doctor ya responde en Doctoralia, y las dudas reales que llegan por WhatsApp al consultorio.

## GEO: visibilidad en ChatGPT, Gemini, Perplexity y Claude

Cuando alguien pregunte a una IA "¿qué reumatólogo me recomiendas en Monterrey?", el modelo responde con la entidad que aparece de forma consistente en varias fuentes confiables. El objetivo es que el Dr. Vázquez González sea esa entidad.

- **Consistencia de entidad**: mismo nombre completo, especialidad, sedes, años y credenciales en sitio, GBP, Doctoralia, Top Doctors, LinkedIn, Christus Muguerza y CMR.
- **Página "Sobre el doctor" tipo ficha**: datos atómicos y verificables (cédulas, universidades, año de certificación, cargo en el CMR, hospitales, idiomas, seguros aceptados). Los LLMs citan hechos, no frases de marketing.
- **Menciones de terceros**: entrevistas en medios locales (Milenio Monterrey, El Norte, ABC Noticias), podcasts de salud, pláticas para pacientes con asociaciones de lupus/artritis, notas del CMR. Cada mención con nombre completo + "reumatólogo en Monterrey".
- **Contenido citable**: datos propios ("en mi consulta, X de cada 10 pacientes con dolor de manos…"), tablas comparativas y definiciones claras que un modelo pueda tomar como fuente.
- **Rastreo por bots de IA**: permitir en robots.txt a GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot y Google-Extended; publicar `/llms.txt` con resumen del doctor y enlaces a páginas clave (beneficio aún incierto, costo nulo).
- **Bing Webmaster Tools**: ChatGPT search se apoya en el índice de Bing; registrar el sitio y enviar sitemap.
- **Medición mensual**: 15 prompts fijos ("mejor reumatólogo Monterrey", "reumatólogo lupus Monterrey", "reumatólogo Muguerza Sur"…) en ChatGPT, Gemini, Perplexity y AI Overviews; registrar si aparece, posición y fuente citada.

Prompts prioritarios para medir y para escribir contenido que los responda: "reumatólogo zona sur Monterrey", "reumatólogo cerca de Carretera Nacional", "reumatólogo Muguerza Sur", "reumatólogo Galerías Monterrey", "reumatólogo en línea México". En estas consultas el doctor no compite con 30 reumatólogos del centro, sino casi solo.

## Cumplimiento y E-E-A-T (YMYL)

Salud es contenido YMYL: Google y los LLMs exigen más señales de confianza, y en México la publicidad médica está regulada. Esto debe revisarse con el doctor antes de escalar contenido.

- **Cédulas y especialidad visibles**: la Ley General de Salud pide que la publicidad de profesionales muestre cédula y la institución que la expidió. Ponerlas en header/footer y en la página del doctor.
- **Aviso de publicidad COFEPRIS**: confirmar si el consultorio tiene el aviso/permiso de publicidad para servicios de salud y mostrar el número.
- **Testimonios**: los actuales usan nombre + diagnóstico + resultado. Recomendación: reemplazarlos por reseñas reales de Google/Doctoralia embebidas (verificables) y evitar promesas de resultado. Validar con asesor legal.
- **Sin promesas**: evitar "cura", "garantizado" o tiempos de mejoría.
- **Aviso de privacidad** enlazado en footer y en formularios/WhatsApp.
- **Autoría y revisión médica** con fecha en cada página de salud; referencias a guías (ACR, EULAR, CMR) en artículos.

## Roadmap 90 días y KPIs

Primero entidad y local (resultados en semanas), luego arquitectura, luego contenido y autoridad.

**Días 1–30 · Base**

- [ ] Validar con el doctor: nombre oficial, cédulas, teléfonos, horarios y seguros (experiencia, sedes y claim de zona sur ya confirmados)
- [ ] Search Console, Bing Webmaster, GA4 con eventos (WhatsApp, llamada, agendar)
- [ ] Fix www/canonical, sitemap, robots con bots de IA, llms.txt
- [ ] 2 fichas GBP optimizadas + arranque de reseñas
- [ ] Unificar NAP en Doctoralia, Top Doctors, TocDoc, Christus Muguerza

**Días 31–60 · Arquitectura**

- [ ] Publicar /dr-hernan-vazquez-gonzalez, 2 páginas de consultorio, /consulta-en-linea
- [ ] 7 páginas de condición con plantilla AEO y schema
- [ ] Reemplazar testimonios por reseñas verificables

**Días 61–90 · Contenido y autoridad**

- [ ] 8 artículos de síntomas/decisión (2 por semana), revisados por el doctor
- [ ] 2–3 menciones externas (medio local, podcast, asociación de pacientes)
- [ ] Primera medición GEO con los 15 prompts

| KPI | Línea base | Meta 90 días |
| --- | --- | --- |
| Reseñas Google (suma 2 fichas) | Por medir | +50 |
| Posición Local Pack "reumatólogo Monterrey" | Por medir | Top 3 en zona sur |
| Clics orgánicos/mes (Search Console) | Por medir | x2 |
| Keywords condición + Monterrey en top 10 | Por medir | 5 de 7 |
| Conversiones (WhatsApp + llamada) desde orgánico | Por medir | Medido y creciendo |
| Aparición en respuestas de IA (15 prompts × 4 motores) | Por medir | ≥ 20% |

## Fuentes

- [Sitio actual: reumamonterrey.com](https://www.reumamonterrey.com/)
- [Doctoralia: Dr. Hernán Vázquez González](https://www.doctoralia.com.mx/hernan-vazquez-gonzalez/internista-reumatologo/nuevo-leon)
- [Doctoralia: consultorios](https://www.doctoralia.com.mx/perfil/hernan-vazquez-gonzalez)
- [Top Doctors: Dr. Hernán Vázquez González](https://www.topdoctors.mx/doctor/hernan-vazquez-gonzalez/)
- [Doctoralia: reumatólogos en Monterrey](https://www.doctoralia.com.mx/reumatologo/monterrey/sin-nombre-de-colonia-58)
- [Top Doctors: reumatólogos en Monterrey](https://www.topdoctors.mx/monterrey/reumatologia/reumatismo/)
