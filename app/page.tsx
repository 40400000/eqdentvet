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

export default function EqdentLanding() {

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-950 border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="relative h-20 w-60">
              <Image
                src="/eqdentlogo.png"
                alt="Eqdent Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center gap-6 text-white text-base">
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-blue-300 transition-colors"
                >
                  Over ons
                </button>
                <button
                  onClick={() => document.getElementById("behandeling")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-blue-300 transition-colors"
                >
                  Periodieke zorg
                </button>
                <button
                  onClick={() => document.getElementById("geavanceerde-ingrepen")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-blue-300 transition-colors"
                >
                  Expertise zorg
                </button>
              </div>
              <div className="hidden lg:block h-6 w-px bg-slate-700"></div>
              <div className="flex items-center gap-2 text-sm">
                <button className="text-white font-semibold hover:text-blue-300 transition-colors">NL</button>
                <span className="text-slate-500">|</span>
                <button className="text-slate-400 hover:text-white transition-colors">EN</button>
              </div>
              <Link
                href="/contact"
                className="text-white hover:text-blue-300 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 min-h-screen items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              className="space-y-8 py-20"
            >
              <div className="relative h-20 w-56">
                <Image
                  src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/mark/eqdent_logo.png"
                  alt="EqDent Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              
              <h1 className="text-3xl md:text-4xl text-white leading-tight font-light">
                Professionele paardentandheelkunde - bij het paard thuis
              </h1>
              
              <Button
                size="lg"
                className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 text-lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Inschrijven & afspraak maken
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
              className="relative aspect-[4/3] lg:aspect-square"
            >
              <Image
                src="/3cfb2af6-cc96-4ad1-b965-ca3920d9caef_thumb1920.jpg"
                alt="Paardentandheelkunde behandeling"
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
     className="bg-slate-50 py-20"
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.6, ease: "easeInOut" }}
     viewport={{ once: true, amount: 0.1 }}
   >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-blue-900 mb-6">
              Over EqDent
            </h2>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[5/3.5] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/mark/Paardenarts.nl-profielfoto-Mark-van-Manen-1000x602-1-768x462.jpg"
                alt="Dr. Mark van Manen, oprichter van Eqdent"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-6">
                <blockquote className="border-l-4 border-blue-700 pl-6 italic text-slate-700 text-lg leading-relaxed">
                  <p>
                    "Voorkomen is beter dan genezen - dit spreekwoord ligt aan de basis van onze filosofie. Goede tandheelkundige 
                    zorg draait om preventie, net als bij mensen. Problemen moeten vroeg worden geïdentificeerd tijdens routine 
                    controles, ruim voordat ze ongemak veroorzaken of sportprestaties beïnvloeden."
                  </p>
                </blockquote>
                <p className="text-slate-600 leading-relaxed">
                  Bij EqDent leveren wij moderne, competitieve paardentandheelkunde direct bij het paard thuis. 
                  Onze ambulante dienst zorgt ervoor dat uw paard behandeld wordt in zijn vertrouwde omgeving, wat stress 
                  vermindert en betere resultaten oplevert.
                </p>
                <div>
                  <p className="font-bold text-slate-900 text-lg">Dr. Mark van Manen</p>
                  <p className="text-blue-700">Oprichter & Paardentandarts - EqDent</p>
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
        className="relative bg-slate-950 py-30"
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
          <h2 className="text-4xl font-bold text-white mb-6">Klaar voor professionele tandheelkundige zorg?</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Sluit je aan bij paardenhouders die kiezen voor preventieve tandheelkundige zorg aan huis.
          </p>
          <Button
            size="lg"
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 text-lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
             Inschrijven & afspraak maken
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </motion.section>
      {/* Testimonials Section */}
      <motion.section
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
      </motion.section>

      {/* FAQ Section */}
      <DutchFAQSection />

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="bg-slate-50 py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-blue-900 mb-6">  Inschrijven & afspraak maken</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Neem contact op voor routinecontroles of urgente tandheelkundige problemen. Wij komen naar uw locatie.
              </p>
            </div>

            <ContactForm showHeader={false} />
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <section className="bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="relative h-40 w-40 mx-auto mb-4">
              <Image
                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/mark/ChatGPT%20Image%2027%20jul%202025%2C%2017_29_53_bria.png"
                alt="Eqdent Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-slate-400 mb-4">Professionele paardentandheelkunde aan huis</p>
            <p className="text-sm text-slate-500">© 2025 Eqdent. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </section>

    </div>
  )
}
