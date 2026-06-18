import type { NextConfig } from "next";
import path from "path";

// ─── Security Headers ────────────────────────────────────────────────────────
// Stack: Next.js en Vercel (HSTS omitido — Vercel lo gestiona en el edge)
// Servicios: GTM, GA4, ElevenLabs bot, Google Maps embed
// Nota: Google Fonts omitido de CSP — next/font self-hostea las fuentes
// ─────────────────────────────────────────────────────────────────────────────

const cspDirectives: Record<string, string[]> = {
  "default-src":     ["'self'"],
  "script-src":      [
    "'self'",
    "'unsafe-inline'", // Requerido por GTM
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://ssl.google-analytics.com",
    "https://elevenlabs.io",
    "https://unpkg.com", // ElevenLabs widget CDN alternativo
  ],
  "style-src":       ["'self'", "'unsafe-inline'"],
  "img-src":         [
    "'self'",
    "data:",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://maps.gstatic.com", // Google Maps static tiles
  ],
  "font-src":        ["'self'"], // next/font self-hostea las fuentes
  "connect-src":     [
    "'self'",
    "https://*.google-analytics.com",
    "https://*.analytics.google.com",
    "https://stats.g.doubleclick.net",
    "https://region1.google-analytics.com",
    "https://*.elevenlabs.io",             // ElevenLabs (api, api.us, api.eu, etc.)
    "wss://*.elevenlabs.io",               // ElevenLabs audio streaming (todos los dominios regionales)
    "https://googleads.g.doubleclick.net", // Google Ads conversiones
    "https://www.googleadservices.com",    // Google Ads conversiones
    "https://www.googletagmanager.com",    // GTM tag firing (XHR/fetch)
    "https://n8n-n8n.6lk5jx.easypanel.host", // n8n webhooks (disponibilidad + reservar cita)
    "https://www.google.com",               // Google Ads remarketing hits
  ],
  "media-src":       ["'self'", "https://*.elevenlabs.io"], // audio del bot (todos los dominios regionales)
  "frame-src":       [
    "https://www.google.com",        // Google Maps embed
    "https://maps.google.com",
    "https://www.googletagmanager.com", // GTM noscript iframe
  ],
  "worker-src":      ["'self'", "blob:"],          // ElevenLabs AudioWorklet
  "object-src":      ["'none'"],
  "base-uri":        ["'self'"],
  "form-action":     ["'self'"],
  "frame-ancestors": ["'none'"],
};

const cspValue =
  Object.entries(cspDirectives)
    .map(([key, values]) => `${key} ${values.join(" ")}`)
    .join("; ") + "; upgrade-insecure-requests";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: cspValue,
  },
  {
    // SAMEORIGIN (no DENY) porque hay iframes de Google Maps
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    // microphone=(self) habilitado para el bot de voz ElevenLabs
    value: "camera=(), microphone=(self), geolocation=(), interest-cohort=(), payment=(), usb=()",
  },
  // HSTS omitido — Vercel lo gestiona automáticamente en el edge
];

// ─────────────────────────────────────────────────────────────────────────────

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  images: {
    formats: ["image/webp", "image/avif"],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
