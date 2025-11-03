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
  subtitle = "Neem contact op voor periodieke of expertise tandheelkundige zorg. Wij komen naar uw locatie.",
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
    <div className="bg-background rounded-lg shadow-sm border border-border p-8">
      {showHeader && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">{title}</h2>
          {subtitle && (
            <p className="text-muted-foreground">{subtitle}</p>
          )}
        </div>
      )}
      
      {submitMessage ? (
        <div className="text-center py-12">
          <div className="border rounded-lg p-8" style={{backgroundColor: 'var(--eqdent-green-light)', borderColor: 'var(--eqdent-green)'}}>
            <CheckCircle className="h-16 w-16 mx-auto mb-4" style={{color: 'var(--eqdent-green)'}} />
            <p className="text-xl font-semibold" style={{color: 'var(--eqdent-green-dark)'}}>{submitMessage}</p>
          </div>
        </div>
      ) : (
        <form action={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-foreground font-medium">
                Voornaam *
              </Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="Uw voornaam"
                required
                className="bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-foreground font-medium">
                Achternaam *
              </Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Uw achternaam"
                required
                className="bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:bg-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="text-foreground font-medium">
              Adres *
            </Label>
            <Input
              id="address"
              name="address"
              placeholder="Straat, huisnummer, postcode, plaats"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-medium">
              E-mailadres *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="uw@email.nl"
              required
              className="bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground font-medium">
              Telefoonnummer *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="06-12345678"
              required
              className="bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:bg-white"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="stalAddress" className="text-foreground font-medium">
                Staladres *
              </Label>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="sameAsHome"
                  checked={sameAsHome}
                  onChange={(e) => setSameAsHome(e.target.checked)}
                  className="w-4 h-4 text-primary bg-muted border-border rounded focus:ring-primary"
                />
                <Label htmlFor="sameAsHome" className="text-sm text-muted-foreground">
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
              className="bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:bg-white disabled:bg-muted disabled:text-muted-foreground"
            />
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full text-white py-4 text-lg font-medium hover:opacity-90 transition-opacity" style={{backgroundColor: 'var(--eqdent-green)'}}
            >
              {isSubmitting ? "Bezig met verzenden..." : "Inschrijven en afspraak maken"}
              {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
            </Button>
          </div>
        </form>
      )}

      <p className="text-sm text-muted-foreground text-center mt-6">
        We respecteren uw privacy en nemen binnen 24 uur contact met u op voor het plannen van een afspraak.
      </p>
    </div>
  )
}