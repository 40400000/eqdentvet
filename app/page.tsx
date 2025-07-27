"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Shield, Clock, RefreshCw, Mail, CheckCircle, Star } from "lucide-react"
import { submitWaitlistForm } from "./actions"

export default function EqdentLanding() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const productImages = [
    "/product-image.png",
    null, // Placeholder for additional angles
    null, // Placeholder for detail shots
    null, // Placeholder for in-use shots
  ]

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
            <div className="relative h-10 w-32">
              <Image
                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/mark/eqdent_logo.png"
                alt="Eqdent Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center gap-6 text-white text-sm">
                <button
                  onClick={() => document.getElementById("product")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-blue-300 transition-colors"
                >
                  Product
                </button>
                <button
                  onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-blue-300 transition-colors"
                >
                  Voordelen
                </button>
                <button
                  onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-blue-300 transition-colors"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-blue-300 transition-colors"
                >
                  FAQ
                </button>
              </div>
              <div className="hidden lg:block h-6 w-px bg-slate-700"></div>
              <div className="flex items-center gap-2 text-sm">
                <button className="text-white font-semibold hover:text-blue-300 transition-colors">NL</button>
                <span className="text-slate-500">|</span>
                <button className="text-slate-400 hover:text-white transition-colors">EN</button>
                <span className="text-slate-500">|</span>
                <button className="text-slate-400 hover:text-white transition-colors">DE</button>
                <span className="text-slate-500">|</span>
                <button className="text-slate-400 hover:text-white transition-colors">IT</button>
              </div>
              <button
                onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
                className="text-white hover:text-blue-300 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
          <source
            src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/mark/istockphoto-1487819282-640_adpp_is.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-950/60"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              className="max-w-2xl space-y-8"
            >
              <h1 className="text-5xl md:text-7xl font-normal text-white leading-tight">
                <div className="flex flex-col items-start gap-y-2">
                  <div className="relative h-22 w-64 shrink-0">
                    <Image
                      src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/mark/eqdent_logo.png"
                      alt="Eqdent Logo"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <span className="text-blue-300 font-bold tracking-widest uppercase text-4xl md:text-5xl ml-1">
                    NoTeeth
                  </span>
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-white leading-relaxed">
                Het eerste gereedschap in zijn soort voor veiligere paardentandheelkunde
              </p>
              <Button
                size="lg"
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 text-lg"
                onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
              >
                Schrijf je in voor de wachtlijst
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <motion.section
        id="product"
        className="bg-white py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Het <span className="text-blue-700">product</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Ontdek EqDent NoTeeth in detail</p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-16 items-start">
              {/* Product Gallery - Now takes 2 columns */}
              <div className="lg:col-span-2 space-y-4">
                {/* Main Image */}
                <div className="aspect-square bg-slate-50 border border-slate-200 p-8 flex items-center justify-center">
                  {productImages[selectedImage] ? (
                    <Image
                      src={productImages[selectedImage] || "/placeholder.svg"}
                      alt="EqDent NoTeeth product"
                      width={500}
                      height={500}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-16 h-16 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-4 gap-3">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square bg-white border p-3 transition-all flex items-center justify-center ${
                        selectedImage === index
                          ? "border-blue-700 ring-2 ring-blue-200"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {image ? (
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`EqDent NoTeeth view ${index + 1}`}
                          width={120}
                          height={120}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Details - Now takes 3 columns */}
              <div className="lg:col-span-3 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-blue-700 text-white border-0">Eerste van zijn soort</Badge>
                    <Badge className="bg-green-100 text-green-800 border-green-200">Binnenkort beschikbaar</Badge>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">EqDent NoTeeth</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Het revolutionaire gereedschap voor veiligere paardentandheelkunde. Speciaal ontworpen voor
                    professionals die geen compromissen willen sluiten op het gebied van veiligheid en kwaliteit.
                  </p>
                </div>

                {/* Core Functions - Condensed */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-slate-900">Kernfuncties</h4>

                  <div className="grid gap-3">
                    <div className="flex items-center gap-3 p-3 bg-slate-50">
                      <Shield className="h-5 w-5 text-blue-700 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-slate-900">Veiligere werkpraktijk</span>
                        <p className="text-sm text-slate-600">Vermindert risico's voor paard en behandelaar</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-slate-50">
                      <Clock className="h-5 w-5 text-blue-700 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-slate-900">Langdurige duurzaamheid</span>
                        <p className="text-sm text-slate-600">Gebouwd voor jarenlang intensief gebruik</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-slate-50">
                      <RefreshCw className="h-5 w-5 text-blue-700 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-slate-900">Uitwisselbare rubbers</span>
                        <p className="text-sm text-slate-600">Modulair systeem voor verschillende behandelingen</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Specs */}
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-slate-900">Belangrijkste specificaties</h4>
                  <div className="text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Materiaal:</span>
                      <span className="font-medium">Roestvrij staal 316L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Gewicht:</span>
                      <span className="font-medium">450 gram</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Garantie:</span>
                      <span className="font-medium">5 jaar</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-slate-200">
                  <Button
                    size="lg"
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 text-lg font-semibold mb-3"
                    onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Schrijf je in voor de wachtlijst
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-sm text-slate-500 text-center">
                    Krijg als eerste toegang wanneer het product beschikbaar komt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
   {/* Founder's Story Section */}
   <motion.section
     className="bg-slate-50 py-20"
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.6, ease: "easeInOut" }}
     viewport={{ once: true, amount: 0.1 }}
   >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Een woord van de <span className="text-blue-700">oprichter</span>
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
              <blockquote className="border-l-4 border-blue-700 pl-6 italic text-slate-700 text-lg leading-relaxed">
                <p>
                  "Na jaren in het veld te hebben gewerkt, zag ik steeds weer dezelfde risico's terugkomen, zowel voor
                  het paard als voor de behandelaar. Ik wist dat er een betere, veiligere manier moest zijn. EqDent
                  NoTeeth is het antwoord op die zoektocht: een stuk gereedschap dat is geboren uit noodzaak en
                  geperfectioneerd door ervaring. Mijn missie is om elke paardentandarts het vertrouwen en de middelen
                  te geven om de best mogelijke zorg te bieden."
                </p>
              </blockquote>
              <div>
                <p className="font-bold text-slate-900 text-lg">Dr. Mark van Manen</p>
                <p className="text-blue-700">Oprichter & Paardentandarts</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Grid */}
      <motion.section
        id="features"
        className="bg-white py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Waarom kiezen voor <span className="text-blue-700">EqDent NoTeeth</span>?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ontworpen door professionals, voor professionals. Elke functie is doordacht om de beste zorg voor paarden
              mogelijk te maken.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-200">
              <div className="bg-blue-700 w-12 h-12 flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Maximale Veiligheid</h3>
              <p className="text-slate-600 mb-6">
                Geavanceerd ontwerp dat het risico op ongevallen drastisch vermindert
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-700" />
                  Ergonomische grip
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-700" />
                  Anti-slip coating
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-700" />
                  Veiligheidsbeugel
                </li>
              </ul>
            </div>

            <div className="p-8 border border-slate-200">
              <div className="bg-blue-700 w-12 h-12 flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Langdurige Kwaliteit</h3>
              <p className="text-slate-600 mb-6">
                Gebouwd met premium materialen voor jarenlange betrouwbare prestaties
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-700" />
                  Roestvrij staal
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-700" />
                  Slijtvaste coating
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-700" />5 jaar garantie
                </li>
              </ul>
            </div>

            <div className="p-8 border border-slate-200">
              <div className="bg-blue-700 w-12 h-12 flex items-center justify-center mb-6">
                <RefreshCw className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Modulair Systeem</h3>
              <p className="text-slate-600 mb-6">
                Uitwisselbare onderdelen voor verschillende behandelingen en eenvoudig onderhoud
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-700" />
                  Verschillende rubbers
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-700" />
                  Snelle wisseling
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-700" />
                  Kosteneffectief
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Two Images Section */}
      <motion.section
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
      </motion.section>

      {/* Product Specifications */}
      <motion.section
        className="bg-slate-50 py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Technische <span className="text-blue-700">specificaties</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Alle details die je nodig hebt om een weloverwogen beslissing te maken
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Afmetingen & Gewicht */}
            <div className="border-l-4 border-blue-700 pl-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Afmetingen & Gewicht</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide mb-2">Lengte</p>
                  <p className="text-2xl font-bold text-slate-900">32 cm</p>
                </div>
                <div>
                  <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide mb-2">Breedte</p>
                  <p className="text-2xl font-bold text-slate-900">8 cm</p>
                </div>
                <div>
                  <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide mb-2">Hoogte</p>
                  <p className="text-2xl font-bold text-slate-900">4 cm</p>
                </div>
                <div>
                  <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide mb-2">Gewicht</p>
                  <p className="text-2xl font-bold text-slate-900">450 gram</p>
                </div>
              </div>
            </div>

            {/* Materialen & Certificering */}
            <div className="border-l-4 border-blue-700 pl-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Materialen & Certificering</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide mb-2">Hoofdmateriaal</p>
                  <p className="text-lg text-slate-700 mb-4">Medisch roestvrij staal (316L)</p>
                  <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide mb-2">Rubbers</p>
                  <p className="text-lg text-slate-700">Medische silicone (FDA goedgekeurd)</p>
                </div>
                <div>
                  <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide mb-2">Certificering</p>
                  <p className="text-lg text-slate-700 mb-4">CE-markering, ISO 13485</p>
                  <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide mb-2">Sterilisatie</p>
                  <p className="text-lg text-slate-700">Autoclaaf compatibel tot 134°C</p>
                </div>
              </div>
            </div>

            {/* Inclusief bij levering */}
            <div className="border-l-4 border-blue-700 pl-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Inclusief bij levering</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
                  <span className="text-lg text-slate-700">EqDent NoTeeth hoofdgereedschap</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
                  <span className="text-lg text-slate-700">Set van 4 verschillende rubbers</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
                  <span className="text-lg text-slate-700">Sterilisatie-etui</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
                  <span className="text-lg text-slate-700">Gebruiksaanwijzing (NL/EN)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
                  <span className="text-lg text-slate-700">5 jaar garantiecertificaat</span>
                </div>
              </div>
            </div>

            {/* Onderhoud & Service */}
            <div className="border-l-4 border-blue-700 pl-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Onderhoud & Service</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
                  <span className="text-lg text-slate-700">Eenvoudige reiniging</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
                  <span className="text-lg text-slate-700">Vervangingsrubbers beschikbaar</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
                  <span className="text-lg text-slate-700">24/7 technische ondersteuning</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
                  <span className="text-lg text-slate-700">Gratis reparatieservice (garantie)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
                  <span className="text-lg text-slate-700">Online training beschikbaar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
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
          <h2 className="text-4xl font-bold text-white mb-6">Klaar om de volgende stap te zetten?</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Word lid van de groeiende groep professionals die kiezen voor veiligheid en efficiëntie.
          </p>
          <Button
            size="lg"
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 text-lg"
            onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
          >
            Vraag nu toegang aan
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
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Wat <span className="text-blue-700">professionals</span> zeggen
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ontdek waarom veterinaire professionals enthousiast zijn over EqDent NoTeeth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-700 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DR</span>
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold">Dr. Sarah van der Berg</h4>
                  <p className="text-blue-700 text-sm">Paardentandarts, Amsterdam</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-blue-700 text-blue-700" />
                ))}
              </div>
              <p className="text-slate-700 italic">
                "Dit gereedschap heeft mijn praktijk volledig veranderd. De veiligheid en precisie zijn ongeëvenaard. Ik
                kan me niet voorstellen nog terug te gaan naar de oude methoden."
              </p>
            </div>

            <div className="p-8 border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-700 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MJ</span>
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold">Mark Jansen</h4>
                  <p className="text-blue-700 text-sm">Dierenarts, Utrecht</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-blue-700 text-blue-700" />
                ))}
              </div>
              <p className="text-slate-700 italic">
                "De uitwisselbare rubbers maken het verschil. Ik kan nu elke behandeling optimaal aanpassen. De
                investering heeft zich al binnen een maand terugverdiend."
              </p>
            </div>

            <div className="p-8 border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-700 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">LK</span>
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold">Lisa Konings</h4>
                  <p className="text-blue-700 text-sm">Paardenkliniek, Eindhoven</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-blue-700 text-blue-700" />
                ))}
              </div>
              <p className="text-slate-700 italic">
                "Eindelijk een gereedschap dat echt is ontworpen voor onze dagelijkse praktijk. Mijn team en ik voelen
                ons veel veiliger tijdens behandelingen."
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        id="faq"
        className="bg-slate-50 py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Veelgestelde <span className="text-blue-700">vragen</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Alles wat je wilt weten over EqDent NoTeeth</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white border border-slate-200 px-6">
                <AccordionTrigger className="text-slate-900 hover:text-blue-700">
                  Wanneer wordt EqDent NoTeeth beschikbaar?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  We verwachten EqDent NoTeeth in het vierde kwartaal van 2025 te lanceren. Wachtlijstleden krijgen als
                  eerste toegang tot het product en ontvangen regelmatige updates over de voortgang.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white border border-slate-200 px-6">
                <AccordionTrigger className="text-slate-900 hover:text-blue-700">
                  Wat zijn de kosten van EqDent NoTeeth?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  De definitieve prijs wordt binnenkort bekendgemaakt. Wachtlijstleden ontvangen exclusieve early-bird
                  prijzen en speciale aanbiedingen. We streven naar een concurrerende prijs die de waarde van het
                  product weergeeft.
                </AccordionContent>
              </AccordionItem>


              <AccordionItem value="item-4" className="bg-white border border-slate-200 px-6">
                <AccordionTrigger className="text-slate-900 hover:text-blue-700">
                  Hoe vaak moeten de rubbers worden vervangen?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Dit hangt af van de gebruiksfrequentie, maar gemiddeld gaan de rubbers 6-12 maanden mee bij normaal
                  gebruik. Vervangingsrubbers zijn eenvoudig te bestellen en binnen 24 uur geleverd in Nederland.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white border border-slate-200 px-6">
                <AccordionTrigger className="text-slate-900 hover:text-blue-700">
                  Is EqDent NoTeeth geschikt voor alle paardenrassen?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Ja, EqDent NoTeeth is ontworpen voor gebruik bij alle paardenrassen, van pony's tot trekpaarden. De
                  verschillende rubber-opzetstukken maken aanpassing aan verschillende mondgroottes mogelijk.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white border border-slate-200 px-6">
                <AccordionTrigger className="text-slate-900 hover:text-blue-700">
                  Welke garantie krijg ik op het product?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  EqDent NoTeeth komt met een uitgebreide 5-jaar garantie op alle onderdelen behalve de rubbers
                  (slijtageonderdelen). Dit dekt materiaalfouten en fabricagegebreken. Daarnaast bieden we levenslange
                  technische ondersteuning.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </motion.section>

      {/* Waitlist Section */}
      <motion.section
        id="waitlist"
        className="bg-slate-950 py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-12 border border-slate-200">
              <div className="text-center mb-8">
                <div className="bg-blue-700 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Krijg het product bij de lancering</h2>
                <p className="text-lg text-slate-600">
                  Schrijf je in voor onze wachtlijst en ontvang EqDent NoTeeth zodra het beschikbaar is. Plus exclusieve
                  updates over de ontwikkeling.
                </p>
              </div>

              {submitMessage ? (
                <div className="text-center py-8">
                  <div className="bg-green-50 border border-green-200 p-6">
                    <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <p className="text-green-800 text-lg font-semibold">{submitMessage}</p>
                  </div>
                </div>
              ) : (
                <form action={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-slate-700 font-semibold">
                        Voornaam
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Jouw voornaam"
                        required
                        className="bg-white border border-slate-300 text-slate-900 placeholder:text-slate-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-slate-700 font-semibold">
                        Achternaam
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Jouw achternaam"
                        required
                        className="bg-white border border-slate-300 text-slate-900 placeholder:text-slate-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700 font-semibold">
                      E-mailadres
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jouw@email.nl"
                      required
                      className="bg-white border border-slate-300 text-slate-900 placeholder:text-slate-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="practice" className="text-slate-700 font-semibold">
                      Praktijk/Organisatie (optioneel)
                    </Label>
                    <Input
                      id="practice"
                      name="practice"
                      placeholder="Naam van je praktijk"
                      className="bg-white border border-slate-300 text-slate-900 placeholder:text-slate-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 text-lg font-semibold"
                  >
                    {isSubmitting ? "Bezig met inschrijven..." : "Schrijf me in voor de wachtlijst"}
                    {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                  </Button>
                </form>
              )}

              <p className="text-sm text-slate-500 text-center mt-6">
                We respecteren je privacy. Geen spam, alleen belangrijke updates over EqDent NoTeeth.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-slate-950 py-12 border-t border-slate-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
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
            <p className="text-slate-400 mb-4">Revolutionaire tandheelkundige zorg voor paarden</p>
            <p className="text-sm text-slate-500">© 2025 Eqdent. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
