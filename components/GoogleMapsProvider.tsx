"use client"

import Script from 'next/script'

export function GoogleMapsProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API}&libraries=places&region=NL&language=nl`}
        strategy="lazyOnload"
      />
      {children}
    </>
  )
}
