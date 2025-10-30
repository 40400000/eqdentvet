"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, CheckCircle } from "lucide-react"
import { submitWaitlistForm } from "@/app/actions"

interface ContactFormProps {
  title?: string
  subtitle?: string
  showHeader?: boolean
}

export function ContactForm({ 
  title = "Inschrijven en afspraak maken", 
  subtitle = "Neem contact op voor routine of expertise zorg problemen. Wij komen naar uw locatie.",
  showHeader = true 
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [sameAsHome, setSameAsHome] = useState(false)
  const [address, setAddress] = useState("")

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      const result = await submitWaitlistForm(formData)
      setSubmitMessage(result.message)
    } catch (error) {
      setSubmitMessage("Er is een fout opgetereden. Probeer het opnieuw.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
      {showHeader && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">{title}</h2>
          {subtitle && (
            <p className="text-slate-600">{subtitle}</p>
          )}
        </div>
      )}
      
      {submitMessage ? (
        <div className="text-center py-12">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <p className="text-green-800 text-xl font-semibold">{submitMessage}</p>
          </div>
        </div>
      ) : (
        <form action={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
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
            <Label htmlFor="address" className="text-slate-700 font-medium">
              Adres *
            </Label>
            <Input
              id="address"
              name="address"
              placeholder="Straat, huisnummer, postcode, plaats"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-500 focus:bg-white"
            />
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
            <Label htmlFor="phone" className="text-slate-700 font-medium">
              Telefoonnummer *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="06-12345678"
              required
              className="bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-500 focus:bg-white"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="stalAddress" className="text-slate-700 font-medium">
                Staladres *
              </Label>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="sameAsHome"
                  checked={sameAsHome}
                  onChange={(e) => setSameAsHome(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-slate-50 border-slate-300 rounded focus:ring-blue-500"
                />
                <Label htmlFor="sameAsHome" className="text-sm text-slate-600">
                  Zelfde als thuisadres
                </Label>
              </div>
            </div>
            <Input
              id="stalAddress"
              name="stalAddress"
              placeholder="Straat, huisnummer, postcode, plaats"
              required
              value={sameAsHome ? address : ""}
              disabled={sameAsHome}
              className="bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-500 focus:bg-white disabled:bg-slate-100 disabled:text-slate-600"
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
    </div>
  )
}