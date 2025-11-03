"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { BehandelingSection } from "@/components/de_behandeling"
import { GeavanceerdeIngrepenSection } from "@/components/geavanceerde_ingrepen"
import { DutchFAQSection } from "@/components/FAQ_Dutch"
import { ContactForm } from "@/components/ContactForm"
import { Navbar } from "@/components/Navbar"
import { useState, useEffect } from "react"

export default function EqdentLanding() {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setHasScrolled(scrollPosition > 100)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar showLogo={hasScrolled} />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-64px)] pt-4 lg:pt-16" style={{background: 'linear-gradient(135deg, var(--eqdent-green) 0%, var(--eqdent-green-dark) 100%)'}}>
        <div className="container mx-auto px-4 h-full">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 min-h-[calc(100vh-120px)] lg:min-h-[calc(100vh-64px)] items-start lg:items-center py-4 lg:py-0">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              className="space-y-4 lg:space-y-6 py-4 lg:py-12"
            >
              <motion.div 
                className="hidden lg:block mb-6"
                initial={{ opacity: 1, y: 0 }}
                animate={{ 
                  opacity: hasScrolled ? 0 : 1,
                  y: hasScrolled ? -30 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-24 w-80 lg:h-32 lg:w-96 mb-4">
                  <Image
                    src="/eqdentlogo.png"
                    alt="EQDent Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <p className="text-white/80 text-lg font-light tracking-wide">Tandheelkundige zorg voor paarden</p>
              </motion.div>
              
              {/* Mobile tagline */}
              <p className="lg:hidden text-white/80 text-lg font-light tracking-wide mb-4">Tandheelkundige zorg voor paarden</p>
              
              {/* Kernwoorden */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <span className="text-white font-semibold text-lg">Expertise</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <span className="text-white font-semibold text-lg">Aandacht</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <span className="text-white font-semibold text-lg">Zorg</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <span className="text-white font-semibold text-lg">Vertrouwen</span>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl text-white leading-tight font-light">
                Professionele paardentandheelkunde - bij het paard thuis
              </h2>
              
              <Button
                size="lg"
                className="text-white px-8 py-4 text-lg hover:opacity-90 transition-opacity"
                style={{backgroundColor: 'var(--eqdent-green-dark)'}}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Inschrijven en afspraak maken
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
              className="relative aspect-[4/3] lg:aspect-square mt-0 lg:mt-0"
            >
              <Image
                src="/3cfb2af6-cc96-4ad1-b965-ca3920d9caef_thumb1920.jpg"
                alt="Equine dentistry procedure"
                fill
                className="object-cover rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

   {/* Founder's Story Section */}
   <motion.section
     id="about"
     className="py-20" style={{backgroundColor: 'var(--eqdent-white-green)'}}
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.6, ease: "easeInOut" }}
     viewport={{ once: true, amount: 0.1 }}
   >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-primary mb-6">
              Over EQDent
            </h2>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[5/3.5] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/mark/Paardenarts.nl-profielfoto-Mark-van-Manen-1000x602-1-768x462.jpg"
                alt="Dr. Mark van Manen, oprichter van EQDent"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Bij EQDent geloven we dat tandheelkunde meer is dan het verzorgen van een gebit.
                  Het is een essentieel onderdeel van het welzijn, de gezondheid en de duurzame prestaties van elk paard.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Vanuit jarenlange ervaring in de paardentandheelkunde combineren we medische expertise op tweedelijns niveau met een persoonlijke aanpak die zorgt voor vertrouwen en rust — voor paard én eigenaar.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  EQDent biedt tandheelkundige zorg op locatie, met dezelfde aandacht en precisie als in een klinische setting.
                </p>
                <div>
                  <p className="font-bold text-foreground text-lg">drs. Mark van Manen</p>
                  <p className="text-primary">oprichter en tandheelkundig paardenarts - EQDent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>


      {/* Two Images Section */}
      {/* <motion.section
        className="bg-white py-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3]">
              <Image
                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/mark/1409_Equine%20Practice_171.jpg"
                alt="Image 1"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/mark/Caldwell-Equine-Dental-Scope-4.jpg"
                alt="Image 2"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </motion.section> */}

      {/* Periodieke Zorg Section */}
      <BehandelingSection />

      {/* Expertise Zorg Section */}
      <GeavanceerdeIngrepenSection />

      <motion.section
        className="relative py-30" style={{background: 'linear-gradient(135deg, var(--eqdent-green) 0%, var(--eqdent-green-dark) 100%)'}}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <Image
          src="https://fei-fan-production.s3.amazonaws.com/s3fs-public/160920-irish-2.jpg"
          alt="Horse in a field"
          fill
          className="absolute inset-0 z-0 object-cover opacity-30"
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Sluit je aan bij paardenhouders die kiezen voor persoonlijke tandheelkundige zorg op locatie</h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            Met de kwaliteit en precisie van kliniekzorg
          </p>
          <Button
            size="lg"
            className="text-white px-8 py-4 text-lg hover:opacity-90 transition-opacity"
            style={{backgroundColor: 'var(--eqdent-green-dark)'}}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
             Inschrijven en afspraak maken
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </motion.section>
      {/* Testimonials Section */}
      {/* <motion.section
        id="testimonials"
        className="bg-white py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-blue-900 mb-6">
              Ervaring van paardenhouders
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ontdek waarom paardenhouders kiezen voor onze professionele tandheelkundige zorg
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">AM</span>
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <h4 className="text-slate-900 font-semibold text-lg">Anna Mertens</h4>
                    <p className="text-blue-700">Dressuurruiter, Gelderland</p>
                  </div>
                  <p className="text-slate-700 leading-relaxed italic text-lg">
                    "Mijn paard had moeite met kauwen en toonde weerstand tegen het bit. Dr. van Manen kwam naar onze stal en ontdekte scherpe randen die pijn veroorzaakten. Na de behandeling was het verschil meteen merkbaar - mijn paard eet weer met plezier en is veel relaxter onder het zadel."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">PH</span>
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <h4 className="text-slate-900 font-semibold text-lg">Pieter Hendrikx</h4>
                    <p className="text-blue-700">Pensionstal eigenaar, Noord-Brabant</p>
                  </div>
                  <p className="text-slate-700 leading-relaxed italic text-lg">
                    "Voor onze pensionstal is EqDent de perfecte partner. Ze komen naar ons toe, wat veel stress bespaart voor de paarden. De eigenaars waarderen de transparantie - je ziet precies wat er gebeurt door de camera. Professioneel en betrouwbaar."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">MK</span>
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <h4 className="text-slate-900 font-semibold text-lg">Marieke Kuiper</h4>
                    <p className="text-blue-700">Eventingamazone, Overijssel</p>
                  </div>
                  <p className="text-slate-700 leading-relaxed italic text-lg">
                    "Mijn 18-jarige eventer had complexe tandproblemen die andere praktijken niet konden behandelen. EqDent heeft alles ter plekke opgelost met moderne technieken. Geen verwijzingen, geen extra reizen - gewoon vakkundige zorg aan huis."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section> */}

      {/* FAQ Section */}
      {/* <DutchFAQSection /> */}

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20" style={{backgroundColor: 'var(--eqdent-green-light)'}}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-primary mb-6">Inschrijven en afspraak maken</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Neem contact op voor periodieke of expertise tandheelkundige zorg. Wij komen naar uw locatie.
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                Binnen twee werkdagen wordt er contact met u opgenomen.
              </p>
              <div className="rounded-lg p-6 mt-8 max-w-2xl mx-auto" style={{backgroundColor: 'var(--eqdent-beige)'}}>
                <h3 className="text-xl font-medium mb-4" style={{color: 'var(--eqdent-green-dark)'}}>Werkgebied</h3>
                <p style={{color: 'var(--eqdent-dark-grey)'}}>
                  <strong>35 minuten vanaf Wezep.</strong> Woont u verder weg, dan bespreken we graag de mogelijkheden.
                </p>
              </div>
            </div>

            <ContactForm showHeader={false} />
          </div>
        </div>
      </motion.section>

      {/* Footer */}
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
            <p className="text-sm text-primary-foreground/60">© 2025 EQDent. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </section>

    </div>
  )
}
