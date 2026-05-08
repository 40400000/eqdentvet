import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Algemene Voorwaarden",
  description: "Algemene Voorwaarden van EQDent voor paardentandheelkundige behandelingen. Lees hier alle voorwaarden voor tandheelkundige zorg aan uw paard door drs. Mark van Manen.",
  keywords: "algemene voorwaarden EQDent, paardentandheelkunde voorwaarden, tandheelkunde paard voorwaarden, diergeneeskunde voorwaarden",
  openGraph: {
    title: "Algemene Voorwaarden - EQDent",
    description: "Algemene Voorwaarden van EQDent voor paardentandheelkundige behandelingen door drs. Mark van Manen.",
    url: "https://eqdent.nl/algemene-voorwaarden",
    images: [
      {
        url: "/eqdentlogo.png",
        width: 800,
        height: 600,
        alt: "EQDent Algemene Voorwaarden",
      },
    ],
  },
  alternates: {
    canonical: "https://eqdent.nl/algemene-voorwaarden",
  },
  robots: "index, follow",
}

export default function AlgemeneVoorwaardenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}