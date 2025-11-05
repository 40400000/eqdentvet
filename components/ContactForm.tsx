"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react"
import { submitWaitlistForm } from "@/app/actions"
import { formSchema } from "@/lib/validations"
import { z } from "zod"

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
  const [stalAddress, setStalAddress] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validateField = (name: string, value: string) => {
    try {
      if (name === 'stalAddress' && sameAsHome) {
        // Use address value for stalAddress when same as home
        formSchema.shape[name as keyof typeof formSchema.shape].parse(address)
      } else {
        formSchema.shape[name as keyof typeof formSchema.shape].parse(value)
      }
      setErrors(prev => ({ ...prev, [name]: "" }))
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => ({ ...prev, [name]: error.issues[0].message }))
      }
    }
  }

  const handleFieldChange = (name: string, value: string) => {
    validateField(name, value)
    if (name === 'address') {
      setAddress(value)
      // Also validate stalAddress if same as home
      if (sameAsHome) {
        validateField('stalAddress', value)
      }
    }
  }

  const handleFieldBlur = (name: string, value: string) => {
    setTouched(prev => ({ ...prev, [name]: true }))
    validateField(name, value)
  }

  const validateForm = (formData: FormData) => {
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      address: formData.get("address") as string,
      stalAddress: formData.get("stalAddress") as string,
    }

    try {
      formSchema.parse(data)
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {}
        error.issues.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message
          }
        })
        setErrors(fieldErrors)
        // Mark all fields as touched to show errors
        setTouched({
          firstName: true,
          lastName: true,
          email: true,
          phone: true,
          address: true,
          stalAddress: true,
        })
      }
      return false
    }
  }

  const handleSubmit = async (formData: FormData) => {
    console.log("🎯 Client: Form submission started")
    
    // Log form data for debugging
    const formEntries = Array.from(formData.entries())
    console.log("📝 Client: Form data entries:", formEntries)
    
    if (!validateForm(formData)) {
      console.log("❌ Client: Form validation failed")
      return
    }

    console.log("✅ Client: Form validation passed")
    setIsSubmitting(true)
    
    try {
      console.log("🚀 Client: Calling server action...")
      const result = await submitWaitlistForm(formData)
      console.log("📨 Client: Server response:", result)
      
      setSubmitMessage(result.message)
      
      if (!result.success) {
        console.log("⚠️ Client: Server returned failure")
        return
      }
      
      console.log("🎉 Client: Form submission successful!")
    } catch (error) {
      console.error("❌ Client: Error during submission:", error)
      setSubmitMessage("Er is een fout opgetereden. Probeer het opnieuw.")
    } finally {
      console.log("🏁 Client: Setting isSubmitting to false")
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
          {/* Hidden input for stalAddress when same as home */}
          {sameAsHome && (
            <input type="hidden" name="stalAddress" value={address} />
          )}
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
                onChange={(e) => handleFieldChange('firstName', e.target.value)}
                onBlur={(e) => handleFieldBlur('firstName', e.target.value)}
                className={`bg-muted border text-foreground placeholder:text-muted-foreground focus:bg-white ${
                  touched.firstName && errors.firstName 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                    : 'border-border'
                }`}
              />
              {touched.firstName && errors.firstName && (
                <div className="flex items-center gap-1 text-red-600 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  {errors.firstName}
                </div>
              )}
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
                onChange={(e) => handleFieldChange('lastName', e.target.value)}
                onBlur={(e) => handleFieldBlur('lastName', e.target.value)}
                className={`bg-muted border text-foreground placeholder:text-muted-foreground focus:bg-white ${
                  touched.lastName && errors.lastName 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                    : 'border-border'
                }`}
              />
              {touched.lastName && errors.lastName && (
                <div className="flex items-center gap-1 text-red-600 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  {errors.lastName}
                </div>
              )}
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
              onChange={(e) => {
                setAddress(e.target.value)
                handleFieldChange('address', e.target.value)
              }}
              onBlur={(e) => handleFieldBlur('address', e.target.value)}
              className={`bg-muted border text-foreground placeholder:text-muted-foreground focus:bg-white ${
                touched.address && errors.address 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                  : 'border-border'
              }`}
            />
            {touched.address && errors.address && (
              <div className="flex items-center gap-1 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4" />
                {errors.address}
              </div>
            )}
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
              onChange={(e) => handleFieldChange('email', e.target.value)}
              onBlur={(e) => handleFieldBlur('email', e.target.value)}
              className={`bg-muted border text-foreground placeholder:text-muted-foreground focus:bg-white ${
                touched.email && errors.email 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                  : 'border-border'
              }`}
            />
            {touched.email && errors.email && (
              <div className="flex items-center gap-1 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4" />
                {errors.email}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground font-medium">
              Telefoonnummer *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Uw nummer"
              required
              onChange={(e) => handleFieldChange('phone', e.target.value)}
              onBlur={(e) => handleFieldBlur('phone', e.target.value)}
              className={`bg-muted border text-foreground placeholder:text-muted-foreground focus:bg-white ${
                touched.phone && errors.phone 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                  : 'border-border'
              }`}
            />
            {touched.phone && errors.phone && (
              <div className="flex items-center gap-1 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4" />
                {errors.phone}
              </div>
            )}
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
                  className="w-4 h-4 text-primary bg-muted border-border rounded focus:ring-primary cursor-pointer"
                />
                <Label htmlFor="sameAsHome" className="text-sm text-muted-foreground cursor-pointer">
                  Zelfde als thuisadres
                </Label>
              </div>
            </div>
            <Input
              id="stalAddress"
              name={sameAsHome ? "" : "stalAddress"}
              placeholder="Straat, huisnummer, postcode, plaats"
              required={!sameAsHome}
              value={sameAsHome ? address : stalAddress}
              disabled={sameAsHome}
              onChange={(e) => {
                if (!sameAsHome) {
                  setStalAddress(e.target.value)
                  handleFieldChange('stalAddress', e.target.value)
                }
              }}
              onBlur={(e) => {
                if (!sameAsHome) {
                  handleFieldBlur('stalAddress', e.target.value)
                }
              }}
              className={`bg-muted border text-foreground placeholder:text-muted-foreground focus:bg-white disabled:bg-muted disabled:text-muted-foreground ${
                touched.stalAddress && errors.stalAddress && !sameAsHome
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                  : 'border-border'
              }`}
            />
            {touched.stalAddress && errors.stalAddress && !sameAsHome && (
              <div className="flex items-center gap-1 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4" />
                {errors.stalAddress}
              </div>
            )}
          </div>

          {/* Werkgebied notification */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-sm font-medium text-slate-700 mb-1">Werkgebied</h4>
                <p className="text-sm text-slate-600">
                  30 minuten vanaf Wezep. Woont u verder weg, dan bespreken we graag de mogelijkheden.
                </p>
              </div>
            </div>
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
        We respecteren uw privacy en nemen binnen twee dagen contact met u op voor het plannen van een afspraak.
      </p>
    </div>
  )
}