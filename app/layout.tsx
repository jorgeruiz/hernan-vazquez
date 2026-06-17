import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import Navigation from "@/components/Navigation"
import SmoothScrollProvider from "@/components/SmoothScrollProvider"
import ScrollAnimations from "@/components/ScrollAnimations"
import { JsonLd } from "@/components/JsonLd"
import { physicianSchema, personSchema } from "@/lib/schemas"
import WhatsAppWidget from "@/components/WhatsAppWidget"
import ElevenLabsWidget from "@/components/ElevenLabsWidget"
import { AgendaCitaProvider } from "@/components/AgendaCitaContext"
import AgendaCitaModal from "@/components/AgendaCitaModal"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Reumatólogo en Monterrey | Dr. Hernán Vázquez",
  description:
    "Médico reumatólogo certificado en Monterrey con más de 10 años de experiencia. Especialista en artritis, lupus, fibromialgia y enfermedades autoinmunes. Consulta presencial y videollamada. Tel. 81 8317 8342.",
  keywords: [
    "reumatólogo en Monterrey",
    "especialista en artritis Monterrey",
    "médico lupus Monterrey",
    "tratamiento artritis Monterrey",
    "reumatólogo Muguerza",
    "médico dolor articular Monterrey",
    "fibromialgia Monterrey",
  ],
  authors: [{ name: "Dr. Hernán Vázquez" }],
  creator: "Dr. Hernán Vázquez",
  metadataBase: new URL("https://reumamonterrey.com"),
  alternates: {
    canonical: "https://reumamonterrey.com/",
    languages: {
      es: "https://reumamonterrey.com/",
      en: "https://reumamonterrey.com/en/",
    },
  },
  openGraph: {
    siteName: "Dr. Hernán Vázquez — Reumatólogo Monterrey",
    type: "website",
    locale: "es_MX",
    alternateLocale: ["en_US"],
    title: "Reumatólogo en Monterrey | Dr. Hernán Vázquez",
    description:
      "Médico reumatólogo certificado en Monterrey. Artritis, lupus, fibromialgia y más. Consulta presencial y videollamada.",
    url: "https://reumamonterrey.com/",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Hernán Vázquez — Reumatólogo Monterrey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reumatólogo en Monterrey | Dr. Hernán Vázquez",
    description:
      "Médico reumatólogo certificado con más de 10 años de experiencia en Monterrey.",
    images: ["/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${jakarta.variable}`}>
      <head>
        <JsonLd data={physicianSchema} />
        <JsonLd data={personSchema} />
      </head>
      <body className="min-h-full bg-white">
        {/* GTM noscript — debe ir inmediatamente después del opening <body> */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NG9TD672" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NG9TD672');`,
          }}
        />

        {/* Google Ads (AW-16494564617) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16494564617"
          strategy="afterInteractive"
        />
        <Script
          id="gads-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-16494564617');`,
          }}
        />

        {/* GA4 (G-JB4CFZ4QJL) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JB4CFZ4QJL"
          strategy="afterInteractive"
        />
        <Script
          id="ga4-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-JB4CFZ4QJL');`,
          }}
        />

        <AgendaCitaProvider>
          <SmoothScrollProvider />
          <ScrollAnimations />
          <Navigation />
          <main id="inicio">{children}</main>

          {/* WhatsApp — burbuja izquierda con formulario previo */}
          <WhatsAppWidget />

          {/* ElevenLabs bot — se posiciona automáticamente en la esquina derecha */}
          <ElevenLabsWidget />

          {/* Modal de agendado de citas */}
          <AgendaCitaModal />
        </AgendaCitaProvider>
      </body>
    </html>
  )
}
