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
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-12 sm:pb-16 lg:pt-24" style={{backgroundColor: 'var(--eqdent-white-green)'}}>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            >
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-light leading-tight text-foreground sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl">
                  Professionele paardentandheelkunde bij het paard thuis
                </h1>
                <p className="mt-2 text-lg text-muted-foreground sm:mt-8">
                  <span className="font-medium">Expertise • Aandacht • Zorg</span><br />
                  Tandheelkundige expertise op locatie met dezelfde aandacht en precisie als in een klinische setting. Voor het welzijn en de duurzame prestaties van uw paard.
                </p>

                <div className="mt-8 sm:mt-10">
                  <Button
                    size="lg"
                    className="inline-flex px-8 py-4 text-lg font-medium text-white transition-all duration-200 rounded-lg focus:outline-none hover:opacity-90"
                    style={{backgroundColor: 'var(--eqdent-green-dark)'}}
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Inschrijven en afspraak maken
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                <div className="flex items-center">
                  <p className="text-3xl font-medium text-foreground sm:text-4xl">15+</p>
                  <p className="ml-3 text-sm text-muted-foreground">Jaren<br />Ervaring</p>
                </div>

                <div className="hidden sm:block">
                  <div className="text-muted-foreground text-2xl">•</div>
                </div>

                <div className="flex items-center">
                  <p className="text-3xl font-medium text-foreground sm:text-4xl">35 min</p>
                  <p className="ml-3 text-sm text-muted-foreground">Werkgebied<br />Vanaf Wezep</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
              className="flex justify-center lg:justify-end"
            >
              <div className="w-4/5 lg:w-5/6">
                <Image
                  src="/3cfb2af6-cc96-4ad1-b965-ca3920d9caef_thumb1920.jpg"
                  alt="Equine dentistry procedure"
                  width={500}
                  height={600}
                  className="w-full object-cover rounded-lg shadow-xl aspect-[4/5]"
                />
              </div>
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

      {/* Horse Gallery Section */}
      <motion.section
        className="py-16" style={{backgroundColor: 'var(--eqdent-white-green)'}}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:h-[500px]">
            {/* Left column - tall portrait image */}
            <div className="relative aspect-[2/3] lg:aspect-auto lg:h-full">
              <Image
                src="/DTS_LIFE_IN_LILAC_Mar_Boerr_Photos_ID7446.jpg"
                alt="Horses grazing in peaceful pasture"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Right column - single landscape image */}
            <div className="lg:col-span-2 lg:h-full">
              <div className="relative aspect-[3/2] lg:aspect-auto lg:h-full">
                <Image
                  src="/DTS_The_Farm_Richard_Smith_Photos_ID3395.jpg"
                  alt="Horse in golden morning light"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Expertise Zorg Section */}
      <GeavanceerdeIngrepenSection />

      <motion.section
        className="relative py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <Image
          src="/DTS_The_Farm_Richard_Smith_Photos_ID1358.jpg"
          alt="Horse in a field"
          fill
          className="absolute inset-0 z-0 object-cover"
        />
        <div className="absolute inset-0 z-1 bg-primary/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Sluit je aan bij paardenhouders die kiezen voor persoonlijke tandheelkundige zorg op locatie</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
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
        className="py-20" style={{backgroundColor: 'var(--eqdent-white-green)'}}
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
