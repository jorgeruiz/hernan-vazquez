# Brief Técnico — Hernan Vazquez

**Generado por Constructor el 4 de junio de 2026**
**Cliente:** Reumatologo Hernan Vazquez | **Stack:** Next.js + Vercel | **Ambición visual:** Experiencial

Este documento describe las decisiones técnicas de implementación: librerías de motion, animaciones, arquitectura frontend y stack recomendado. Fue generado automáticamente a partir del Brief de Diseño del cliente.

---

# Technical Implementation Brief — Hernan Vazquez Reumatologo

**Project architecture**

Single-page Next.js 15 App Router project. All content renders on one scrollable route (`/`). Anchor-based navigation links scroll to named sections: `#inicio`, `#servicios`, `#autoridad`, `#testimonios`, `#faqs`, `#ubicacion`, `#contacto`. No dynamic routes required for the initial build.

Root layout loads the navigation (sticky, scroll-aware opacity transition) and footer. Typography via `next/font/google`: Inter or Plus Jakarta Sans for body and UI elements; a second display weight for section headings — confirm exact typeface from design screens. Tailwind CSS for all utilities; no CSS Modules.

Third-party integrations: WhatsApp CTA links use `https://wa.me/528183178342` with a pre-filled message parameter (URL-encoded appointment request string). No booking platform, no e-commerce. Google Maps embed for location section via `<iframe>` with `loading="lazy"`. No server-side form submission required; all contact actions are WhatsApp-initiated.

Analytics: install Google Tag Manager via `next/script` with `strategy="afterInteractive"`. Fire a custom `cta_click` event on every WhatsApp button interaction for conversion tracking against the `messages` success metric.

---

**Dependencies to install**

```
npm install gsap@^3.12 @gsap/react lenis@^1.1 react-hook-form@^7.0
```

- `gsap@^3.12`: ScrollTrigger for scroll-linked section reveals and pinned hero sequence; core timeline orchestration across sections
- `@gsap/react`: `useGSAP` hook for safe GSAP integration inside React components with automatic cleanup
- `lenis@^1.1`: smooth scroll required at `experiencial` level; integrates with GSAP ScrollTrigger via `lenis.on("scroll", ScrollTrigger.update)`
- `react-hook-form@^7.0`: FAQ accordion state management and any inline validation if a contact capture field is added later

Do NOT install:
- `framer-motion` — GSAP is the chosen library for this level; mixing both creates bundle and timing conflicts
- `@react-three/fiber` or `@react-three/drei` — design screens contain no 3D elements; parallax and scroll storytelling are achievable with GSAP + ScrollTrigger without Three.js overhead
- `swiper` or any carousel library — use CSS scroll snap for any image rows; no external carousel dependency
- Any custom cursor library — implement pointer tracking via `gsap.quickTo` if the design screens call for it; do not install a separate package

GSAP plugins to register:

```tsx
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Observer } from "gsap/Observer"
gsap.registerPlugin(ScrollTrigger, Observer)
```

`SplitText` is a Club GSAP plugin. Do not use it unless a license is confirmed. Use manual character splitting via `span` wrappers for any kinetic typography.

---

**Motion specifications**

Library: GSAP 3.x with ScrollTrigger. All animations operate exclusively on `transform` (`x`, `y`, `xPercent`, `yPercent`, `scale`, `rotation`) and `opacity`. Never animate `width`, `height`, `top`, `left`, `margin`, `padding`, or any layout-triggering property.

**Hero entrance sequence** (fires on page load, not on scroll):
```ts
gsap.timeline()
  .from(".hero-eyebrow", { opacity: 0, y: 20, duration: 0.6, ease: "power2.out" })
  .from(".hero-heading", { opacity: 0, y: 28, duration: 0.7, ease: "power2.out" }, "-=0.35")
  .from(".hero-subtext", { opacity: 0, y: 16, duration: 0.5, ease: "power2.out" }, "-=0.3")
  .from(".hero-cta", { opacity: 0, scale: 0.96, duration: 0.4, ease: "power2.out" }, "-=0.2")
```

**Section entrance** (applied to all non-hero sections via a reusable utility):
```ts
gsap.from(element, {
  opacity: 0, y: 40, duration: 0.65, ease: "power2.out",
  scrollTrigger: { trigger: element, start: "top 82%", once: true }
})
```

**Stagger on card grids** (services, testimonials):
```ts
gsap.from(".card-item", {
  opacity: 0, y: 32, duration: 0.55, ease: "power2.out",
  stagger: 0.09,
  scrollTrigger: { trigger: ".card-grid", start: "top 78%", once: true }
})
```

**WhatsApp CTA button hover** (CSS only — no GSAP on hover micro-interactions):
```css
.cta-primary { transition: background-color 150ms ease-out, transform 150ms ease-out; }
.cta-primary:hover { transform: translateY(-2px); }
```

Lenis initialization in root layout client component:
```tsx
useEffect(() => {
  const lenis = new Lenis({ duration: 1.1, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
  lenis.on("scroll", ScrollTrigger.update)
  gsap.ticker.add((time) => lenis.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)
  return () => { lenis.destroy(); gsap.ticker.remove((time) => lenis.raf(time * 1000)) }
}, [])
```

`prefers-reduced-motion` handling — place this check before any GSAP initialization:
```tsx
const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
if (mediaQuery.matches) {
  gsap.globalTimeline.timeScale(0)
  lenis?.destroy() // revert to native scroll
}
```

Do NOT animate: the sticky navigation bar, footer content, form labels, error states, phone number links, WhatsApp floating button, or the Google Maps embed. These are utility elements. Animating them produces fatigue and disrupts access to critical conversion touchpoints.

---

**Breakpoints and responsive strategy**

Desktop-first at `experiencial` level. The scroll-narrative experience targets desktop and large tablet. Breakpoint scale:

- `lg`: 1024px (primary desktop threshold)
- `md`: 768px (tablet, simplified layout)
- `sm`: 640px (mobile, static layout)

Major layout changes:
- Navigation: full horizontal links at `lg`; hamburger drawer below `lg`
- Hero: full-viewport two-column layout at `lg`; single column stacked at `md` and below
- Services grid: 3 columns at `lg`, 2 at `md`, 1 at `sm`
- Testimonials: horizontal scroll snap row at `lg`; vertical stack at `sm`
- FAQ accordion: unchanged across all breakpoints

Animation behavior below `md`:
- Disable Lenis on touch devices: check `navigator.maxTouchPoints > 0` before initialization; revert to native scroll
- Convert all ScrollTrigger animations to simple opacity fade-ins with `duration: 0.4` — remove `y` transforms to prevent content jumps on momentum scroll
- Disable all stagger delays on mobile; elements appear as a group
- Disable any scroll-pinning behavior entirely below `lg`

---

**Accessibility requirements**

Target: WCAG AA. This patient-facing medical site serves users 35+ through 65+, many managing chronic pain and potentially using assistive technologies.

Focus rings: never remove `outline`. Use `outline: 2px solid #009FE3; outline-offset: 3px` on all interactive elements.

WhatsApp links: each `<a href="https://wa.me/...">` must include `aria-label="Agendar cita por WhatsApp"`. Do not rely on icon alone.

FAQ accordion: each question is a `<button>` with `aria-expanded` toggling between `true` and `false`. The answer panel has `aria-hidden` inverse state. Connect via `aria-controls` and `id`.

Navigation: the mobile hamburger button requires `aria-label="Abrir menú"` / `aria-label="Cerrar menú"` based on state. Anchor links must skip to content correctly; include a visually hidden `<a href="#inicio" className="sr-only focus:not-sr-only">Ir al contenido principal</a>` as first element in the DOM.

`prefers-reduced-motion`: implemented via GSAP `globalTimeline.timeScale(0)` as specified in motion section. All GSAP timelines must honor this before execution, not after.

Phone numbers displayed as `<a href="tel:+528183178342">` for native dialing on mobile.

---

**Performance budget**

- Lighthouse Performance desktop: 78+
- Lighthouse Performance mobile: 65+
- LCP: under 3.0s — the hero section photograph or illustration is the LCP element; add `priority` prop to the above-fold `next/image`
- CLS: under 0.05 — every `next/image` must have explicit `width` and `height` props; never use `fill` without a parent with known dimensions and `position: relative`
- JS budget for animation stack: GSAP core + ScrollTrigger + Observer ≈ 65KB gzip; Lenis ≈ 10KB gzip; total 75KB acceptable for this level

Image strategy:
- Hero image: `<Image priority width={} height={} />` — dimensions confirmed from design screens
- Doctor portrait: `priority` if above the fold; `loading="lazy"` if below
- Testimonial avatars: `loading="lazy"`, `sizes="80px"`, WebP via Next.js default optimization
- No decorative images via `<img>`; use CSS `background-image` for texture or gradient overlays

Font strategy: `next/font/google` with `display: "swap"`. Load only the weights used in the design (typically 400, 500, 700). Do not load variable font if only 2–3 weights are needed — static subsets are smaller.

GTM script: `strategy="afterInteractive"` via `next/script`. Never `strategy="beforeInteractive"` for analytics.