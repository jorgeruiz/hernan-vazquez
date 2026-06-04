# Estado del Sitio — Hernan Vazquez

---

## Estado actual

**Última actualización:** 2026-06-04
**Versión del sitio:** 1.0.0
**URL de producción:** https://reumamonterrey.com (pendiente de deploy)
**Repo:** Pendiente de configurar remote origin en GitHub

---

## Construcción inicial

**Fecha:** 2026-06-04
**Path de construcción:** Standalone (sin DESIGN.md previo — design system generado por Code)
**Stack:** Next.js 16.2.7 + Tailwind CSS v4 + Vercel

**Features implementadas:**
- [x] Proyecto Next.js 15+ App Router inicializado
- [x] Tailwind CSS v4 con design system personalizado (paleta navy/primary/light-blue)
- [x] Tipografía Plus Jakarta Sans via next/font/google
- [x] Navigation sticky scroll-aware con hamburger drawer mobile
- [x] Hero section full-viewport con hero-home.jpg + gradient overlay
- [x] Trust strip con 4 stats de credenciales
- [x] Servicios section con 3 cards (artritis, lupus, condiciones adicionales) + modalidades
- [x] Sobre el Doctor section con foto real del Dr. Vázquez + credenciales
- [x] Testimonios section con background image y 3 cards
- [x] FAQ accordion con 8 preguntas (primeras 3 abiertas por defecto)
- [x] Ubicación y contacto con Google Maps embed + datos de contacto en texto plano
- [x] CTA final section con contact-bg.jpg (vista aérea de Monterrey)
- [x] Footer con datos de contacto en texto plano para AEO
- [x] WhatsApp floating button (bottom-right fijo)
- [x] Scroll animations via IntersectionObserver (CSS-based, sin GSAP heavy runtime)
- [x] Lenis smooth scroll (solo desktop, respeta prefers-reduced-motion y touch devices)
- [x] SEO: metadata completo (title, description, og, twitter, alternates, canonical)
- [x] Schema.org: Physician + MedicalBusiness + Person + FAQPage + 4 Service schemas
- [x] robots.ts — robots.txt generado
- [x] sitemap.ts — sitemap.xml generado
- [x] Todas las imágenes del manifest implementadas con width/height y alt correcto
- [x] hero-home.jpg con priority (above the fold); resto lazy loading
- [x] public/images/ con todas las imágenes colocadas
- [x] Accesibilidad: skip link, aria-labels en CTAs y nav, aria-expanded en FAQ
- [x] Foco visible en elementos interactivos (outline 2px blue)
- [x] Teléfonos como <a href="tel:">
- [x] WhatsApp CTA links con aria-label="Agendar cita por WhatsApp"
- [x] Build limpio: npm run build sin errores ni warnings de TypeScript

**Pendientes o issues conocidos:**
- Remote origin de GitHub no configurado — Jorge debe crear el repo y configurar `git remote add origin [URL]`
- og-default.jpg (1200×630) no generada — crear con colores de marca (#0273B5 / #1A3874)
- Dirección exacta del consultorio en Muguerza Hospital Sur — completar en schema-org.md cuando el cliente la proporcione
- Google Maps embed URL puede requerir ajuste cuando se tenga la ubicación exacta del consultorio
- openingHours del schema de negocio pendiente de confirmar con el cliente
- Redes sociales (Facebook, Instagram, Google Business) pendientes de agregar en schema.org cuando el cliente proporcione URLs
- Versión /en/ (inglés) no implementada — requiere sesión separada

---

## Historial de cambios

_Sin cambios registrados aún. Esta es la versión inicial 1.0.0._
