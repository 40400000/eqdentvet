import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met EQDent voor paardentandheelkunde aan huis. Bel 06-82857060 of stuur een email naar contact@eqdent.nl. Binnen twee werkdagen contact opnemen.",
  keywords: "contact EQDent, afspraak maken, paardentandarts contact, tandheelkunde paard afspraak, 06-82857060, contact@eqdent.nl, Wezep",
  openGraph: {
    title: "Contact - EQDent",
    description: "Neem contact op met EQDent voor paardentandheelkunde aan huis. Binnen twee werkdagen wordt er contact met u opgenomen.",
    url: "https://eqdent.nl/contact",
    images: [
      {
        url: "/eqdentlogo.png",
        width: 800,
        height: 600,
        alt: "EQDent Contact - Paardentandheelkunde aan Huis",
      },
    ],
  },
  alternates: {
    canonical: "https://eqdent.nl/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}