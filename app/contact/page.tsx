"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Mail, Phone, MapPin, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"
import { submitWaitlistForm } from "../actions"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      const result = await submitWaitlistForm(formData)
      setSubmitMessage(result.message)
    } catch (error) {
      setSubmitMessage("Er is een fout opgetreden. Probeer het opnieuw.")
    } finally {
      setIsSubmitting(false)
    }
  }

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
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Werkgebied</h3>
                      <p className="text-slate-600">
                        Wij komen naar uw locatie voor ambulante tandheelkundige zorg.<br />
                        Actief in heel Nederland.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-slate-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-blue-700" />
                  <h3 className="font-semibold text-slate-900">Beschikbaarheid</h3>
                </div>
                <div className="space-y-2 text-slate-600">
                  <p><strong>Afspraken:</strong> Maandag t/m vrijdag, flexibele tijden</p>
                  <p><strong>Spoedgevallen:</strong> 24/7 bereikbaar</p>
                  <p><strong>Reactietijd:</strong> Binnen 24 uur contact</p>
                </div>
              </div>

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
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
              className="bg-white rounded-lg shadow-sm border border-slate-200 p-8"
            >
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Maak een afspraak</h2>
              
              {submitMessage ? (
                <div className="text-center py-12">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-8">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <p className="text-green-800 text-xl font-semibold">{submitMessage}</p>
                  </div>
                </div>
              ) : (
                <form action={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-slate-700 font-medium">
                        Voornaam *
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Uw voornaam"
                        required
                        className="bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-500 focus:bg-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-slate-700 font-medium">
                        Achternaam *
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Uw achternaam"
                        required
                        className="bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700 font-medium">
                      E-mailadres *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="uw@email.nl"
                      required
                      className="bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-500 focus:bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-slate-700 font-medium">
                      Behandellocatie (adres van het paard) *
                    </Label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="Straat, huisnummer, postcode, plaats"
                      required
                      className="bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-500 focus:bg-white"
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full bg-blue-700 hover:bg-blue-600 text-white py-4 text-lg font-medium"
                    >
                      {isSubmitting ? "Bezig met verzenden..." : "Afspraak aanvragen"}
                      {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                    </Button>
                  </div>
                </form>
              )}

              <p className="text-sm text-slate-500 text-center mt-6">
                We respecteren uw privacy en nemen binnen 24 uur contact met u op voor het plannen van een afspraak.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}