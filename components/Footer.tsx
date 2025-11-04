import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <section style={{backgroundColor: 'var(--eqdent-green-dark)'}}>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <Link href="/" className="relative h-14 w-56 mx-auto mb-4 block">
            <Image
              src="/eqdentlogo.png"
              alt="EQDent Logo"
              fill
              className="object-contain cursor-pointer"
            />
          </Link>
          <p className="text-primary-foreground/80 mb-4">Professionele paardentandheelkunde aan huis</p>
          
          {/* Partner logos */}
          <div className="flex justify-center items-center gap-8 my-8">
            <Link href="https://www.nvvgp.nl/" target="_blank" rel="noopener noreferrer" className="relative h-28 w-28">
              <Image
                src="/Logo-NVVGP.png"
                alt="NVVGP Logo"
                fill
                className="object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>
            <Link href="https://www.nced.se/" target="_blank" rel="noopener noreferrer" className="relative h-28 w-28">
              <Image
                src="/logonced.avif"
                alt="NCED Logo"
                fill
                className="object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>
          </div>
          
          <div className="mb-4 space-y-2">
            <p className="text-sm text-primary-foreground/80">
              <Link href="/algemene-voorwaarden" className="hover:text-primary-foreground underline">
                Algemene Voorwaarden
              </Link>
            </p>
            <p className="text-sm text-primary-foreground/80">KvK: 98546546</p>
            <p className="text-sm text-primary-foreground/80">CIBG: 140370</p>
          </div>
          <p className="text-sm text-primary-foreground/60">© 2025 EQDent. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </section>
  )
}