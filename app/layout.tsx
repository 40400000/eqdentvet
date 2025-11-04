import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "EQDent - Paardentandheelkunde | drs. Mark van Manen",
    template: "%s | EqDent"
  },
  description: "Professionele paardentandheelkunde bij het paard thuis door drs. Mark van Manen. Periodieke zorg, expertise behandelingen, extracties, EOTRH, sinusitis. Werkgebied 30 min vanaf Wezep. 15+ jaar ervaring.",
  keywords: "EqDent, paardentandheelkunde, tandarts paard, aan huis, mobile equine dentistry, paardentandarts, paardengebit, sedatie, extracties, periodieke zorg, expertise zorg, geavanceerde ingrepen, EOTRH, sinusitis, diastema, Mark van Manen, Wezep, Gelderland, Overijssel",
  authors: [{ name: "drs. Mark van Manen", url: "https://eqdent.nl" }],
  creator: "EqDent",
  publisher: "EqDent", 
  robots: "index, follow",
  metadataBase: new URL('https://eqdent.nl'),
  verification: {
    google: 'google-site-verification-code-here'
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://eqdent.nl',
    siteName: 'EqDent - Paardentandheelkunde aan Huis',
    title: 'EqDent - Paardentandheelkunde aan Huis | drs. Mark van Manen',
    description: 'Professionele paardentandheelkunde bij het paard thuis door drs. Mark van Manen. Periodieke zorg en expertise behandelingen. 15+ jaar ervaring. Werkgebied 30 min vanaf Wezep.',
    images: [
      {
        url: '/DTS_The_Farm_Richard_Smith_Photos_ID3394.jpg',
        width: 1200,
        height: 630,
        alt: 'EqDent - Paardentandheelkunde op de boerderij',
      },
      {
        url: '/eqdentlogo.png',
        width: 800,
        height: 600,
        alt: 'EqDent Logo - Paardentandheelkunde aan Huis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EqDent - Paardentandheelkunde aan Huis',
    description: 'Professionele paardentandheelkunde bij het paard thuis door drs. Mark van Manen. 15+ jaar ervaring.',
    images: ['/DTS_The_Farm_Richard_Smith_Photos_ID3394.jpg'],
    creator: '@eqdent',
    site: '@eqdent',
  },
  alternates: {
    canonical: 'https://eqdent.nl',
    languages: {
      'nl-NL': 'https://eqdent.nl',
    },
  },
  category: 'Health',
  classification: 'Veterinary Services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VeterinaryClinic",
    "name": "EqDent",
    "description": "Professionele paardentandheelkunde bij het paard thuis door drs. Mark van Manen. 15+ jaar ervaring in paardentandheelkunde.",
    "url": "https://eqdent.nl",
    "logo": "https://eqdent.nl/eqdentlogo.png",
    "telephone": "+31-6-82857060",
    "email": "contact@eqdent.nl",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wezep",
      "addressCountry": "NL"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 52.4568,
        "longitude": 6.0041
      },
      "geoRadius": "30000"
    },
    "medicalSpecialty": "Veterinary Medicine",
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Periodieke paardentandheelkundige zorg"
      },
      {
        "@type": "MedicalProcedure", 
        "name": "Extracties van kiezen en tanden"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Behandeling van sinusitis"
      },
      {
        "@type": "MedicalProcedure",
        "name": "EOTRH behandelingen"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Geavanceerde tandheelkundige ingrepen"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "drs. Mark van Manen",
      "jobTitle": "Tandheelkundig paardenarts"
    },
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Paardentandheelkundige diensten",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Periodieke tandheelkundige controle",
            "description": "Routinecontrole en behandeling van het paardengebit"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Expertise tandheelkundige zorg",
            "description": "Specialistische behandelingen voor complexe tandheelkundige problemen"
          }
        }
      ]
    }
  }

  return (
    <html lang="nl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
