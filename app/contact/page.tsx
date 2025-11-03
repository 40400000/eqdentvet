"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/ContactForm"
import { Navbar } from "@/components/Navbar"

export default function ContactPage() {

  return (
    <div className="min-h-screen bg-white">
      <Navbar showLogo={true} />

      <div className="container mx-auto px-4 py-12 pt-32">
        <div className="max-w-6xl mx-auto">
          
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-light mb-6" style={{color: 'var(--eqdent-green-dark)'}}>Contact</h1>
            <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--eqdent-text-grey)'}}>
              Neem contact op voor periodieke of expertise tandheelkundige zorg. Wij komen naar uw locatie.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-6" style={{color: 'var(--eqdent-green-dark)'}}>Contactgegevens</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: 'var(--eqdent-green)'}}>
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1" style={{color: 'var(--eqdent-dark-grey)'}}>Telefoon</h3>
                      <p className="mb-2" style={{color: 'var(--eqdent-text-grey)'}}>Voor afspraken en expertise zorg</p>
                      <a href="tel:06-12345678" className="font-medium hover:opacity-80 transition-opacity" style={{color: 'var(--eqdent-green)'}}>
                        06-12345678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: 'var(--eqdent-green)'}}>
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1" style={{color: 'var(--eqdent-dark-grey)'}}>E-mail</h3>
                      <p className="mb-2" style={{color: 'var(--eqdent-text-grey)'}}>Voor algemene vragen en informatie</p>
                      <a href="mailto:contact@eqdent.nl" className="font-medium hover:opacity-80 transition-opacity" style={{color: 'var(--eqdent-green)'}}>
                        contact@eqdent.nl
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: 'var(--eqdent-green)'}}>
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1" style={{color: 'var(--eqdent-dark-grey)'}}>Werkgebied</h3>
                      <p className="mb-4" style={{color: 'var(--eqdent-text-grey)'}}>
                        <strong>35 minuten vanaf Wezep.</strong> Woont u verder weg, dan bespreken we graag de mogelijkheden.
                      </p>
                      <div className="mt-4">
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
              className="space-y-8"
            >
              {/* Response time info */}
              <div className="rounded-lg p-6" style={{backgroundColor: 'var(--eqdent-green-light)'}}>
                <h3 className="font-semibold mb-2" style={{color: 'var(--eqdent-green-dark)'}}>Responstijd</h3>
                <p style={{color: 'var(--eqdent-text-grey)'}}>
                  Binnen twee werkdagen wordt er contact met u opgenomen voor het plannen van een afspraak.
                </p>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>

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