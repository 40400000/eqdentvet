"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/ContactForm"

export default function ContactPage() {

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-950 border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="relative h-10 w-32">
              <Image
                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/mark/eqdent_logo.png"
                alt="Eqdent Logo"
                fill
                className="object-contain"
              />
            </Link>
            <Link href="/" className="text-white hover:text-blue-300 transition-colors">
              Terug naar homepage
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-light text-blue-900 mb-6">Contact</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Neem contact op voor afspraken, vragen of spoedgevallen. Wij zijn er voor u en uw paard.
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
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">Contactgegevens</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Telefoon</h3>
                      <p className="text-slate-600 mb-2">Voor afspraken en spoedgevallen</p>
                      <a href="tel:06-12345678" className="text-blue-700 hover:text-blue-800 font-medium">
                        06-12345678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">E-mail</h3>
                      <p className="text-slate-600 mb-2">Voor algemene vragen en informatie</p>
                      <a href="mailto:contact@eqdent.nl" className="text-blue-700 hover:text-blue-800 font-medium">
                        contact@eqdent.nl
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 mb-1">Werkgebied</h3>
                      <p className="text-slate-600 mb-4">
                        Ambulant (mobiel) in regio Veluwe.
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
              {/* Emergency */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-semibold text-red-900 mb-2">Spoedgeval?</h3>
                <p className="text-red-800 mb-3">
                  Bij urgente tandheelkundige problemen kunt u ons altijd direct bereiken.
                </p>
                <a 
                  href="tel:06-12345678"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Bel direct: 06-12345678
                </a>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}