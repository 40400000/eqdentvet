import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacybeleid",
  description: "Privacybeleid van EQDent. Lees hier hoe wij omgaan met uw persoonsgegevens en welke gegevens wij verzamelen voor het maken van afspraken en behandelingen.",
  keywords: "privacybeleid EQDent, privacy paardentandheelkunde, AVG paardendierenarts, gegevensbescherming paard",
  openGraph: {
    title: "Privacybeleid - EQDent",
    description: "Privacybeleid van EQDent",
    url: "https://eqdent.nl/privacy-beleid",
    images: [
      {
        url: "/eqdentlogo.png",
        width: 800,
        height: 600,
        alt: "EQDent Privacybeleid",
      },
    ],
  },
  alternates: {
    canonical: "https://eqdent.nl/privacy-beleid",
  },
  robots: "index, follow",
}

export default function PrivacyBeleidLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
