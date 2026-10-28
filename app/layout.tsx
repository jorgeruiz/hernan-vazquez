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
import { WhatsAppFormProvider } from "@/components/WhatsAppFormContext"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Reumatólogo en Monterrey | Dr. Hernán Vázquez González",
  description:
    "Médico reumatólogo certificado en Monterrey con 12 años de experiencia. Especialista en artritis, lupus, fibromialgia y enfermedades autoinmunes. Cédulas 5563127, 7440332, 09076347. Tel. 81 8317 8342.",
  keywords: [
    "reumatólogo en Monterrey",
    "reumatólogo Hernán Vázquez González",
    "especialista en artritis Monterrey",
    "médico lupus Monterrey",
    "tratamiento artritis Monterrey",
    "reumatólogo Muguerza Sur",
    "reumatólogo zona sur Monterrey",
    "médico dolor articular Monterrey",
    "fibromialgia Monterrey",
  ],
  authors: [{ name: "Dr. Hernán Vázquez González" }],
  creator: "Dr. Hernán Vázquez González",
  metadataBase: new URL("https://reumamonterrey.com"),
  alternates: {
    canonical: "https://reumamonterrey.com/",
  },
  openGraph: {
    siteName: "Dr. Hernán Vázquez González — Reumatólogo Monterrey",
    type: "website",
    locale: "es_MX",
    title: "Reumatólogo en Monterrey | Dr. Hernán Vázquez González",
    description:
      "Médico reumatólogo certificado en Monterrey. 12 años de experiencia. Artritis, lupus, fibromialgia y más.",
    url: "https://reumamonterrey.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reumatólogo en Monterrey | Dr. Hernán Vázquez González",
    description:
      "Médico reumatólogo certificado con 12 años de experiencia en Monterrey.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: "9VIQeNub_TOmOaOkfvxsyhfI3BBLoYQhB8F-NxTXd48",
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

        {/* Meta Pixel (Facebook) */}
        <Script
          id="meta-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1723825835366857');
fbq('track', 'PageView');`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1723825835366857&ev=PageView&noscript=1" />`,
          }}
        />
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
        <WhatsAppFormProvider>
          <SmoothScrollProvider />
          <ScrollAnimations />
          <Navigation />
          <main>{children}</main>

          {/* WhatsApp — burbuja izquierda con formulario previo */}
          <WhatsAppWidget />

          {/* ElevenLabs bot — se posiciona automáticamente en la esquina derecha */}
          <ElevenLabsWidget />

          {/* Modal de agendado de citas */}
          <AgendaCitaModal />
        </WhatsAppFormProvider>
        </AgendaCitaProvider>
      </body>
    </html>
  )
}
