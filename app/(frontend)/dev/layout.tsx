import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dev - Email Voorbeelden",
  description: "Development page voor email voorbeelden - niet voor publiek gebruik",
  robots: "noindex, nofollow",
}

export default function DevLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}