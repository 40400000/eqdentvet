"use client"

import { useState } from "react"
import Image from "next/image"
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
      <header className="bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              Eq<span className="text-blue-400">dent</span>
            </div>
            <div className="flex items-center gap-6">
              <button className="text-white hover:text-blue-400 transition-colors">Contact</button>
              <Badge className="bg-blue-600 text-white border-0">Binnenkort beschikbaar</Badge>
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
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                EqDent <span className="text-blue-400">NoTeeth</span>
              </h1>
              <p className="text-xl md:text-2xl text-white leading-relaxed">
                Het eerste gereedschap in zijn soort voor veiligere paardentandheelkunde
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
              >
                Schrijf je in voor de wachtlijst
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Het <span className="text-blue-600">product</span>
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
                          ? "border-blue-600 ring-2 ring-blue-200"
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
                    <Badge className="bg-blue-600 text-white border-0">Eerste van zijn soort</Badge>
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
                      <Shield className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-slate-900">Veiligere werkpraktijk</span>
                        <p className="text-sm text-slate-600">Vermindert risico's voor paard en behandelaar</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-slate-50">
                      <Clock className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-slate-900">Langdurige duurzaamheid</span>
                        <p className="text-sm text-slate-600">Gebouwd voor jarenlang intensief gebruik</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-slate-50">
                      <RefreshCw className="h-5 w-5 text-blue-600 flex-shrink-0" />
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
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold mb-3"
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
      </section>

      {/* Features Grid */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Waarom kiezen voor <span className="text-blue-600">EqDent NoTeeth</span>?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ontworpen door professionals, voor professionals. Elke functie is doordacht om de beste zorg voor paarden
              mogelijk te maken.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-200">
              <div className="bg-blue-600 w-12 h-12 flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Maximale Veiligheid</h3>
              <p className="text-slate-600 mb-6">
                Geavanceerd ontwerp dat het risico op ongevallen drastisch vermindert
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  Ergonomische grip
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  Anti-slip coating
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  Veiligheidsbeugel
                </li>
              </ul>
            </div>

            <div className="p-8 border border-slate-200">
              <div className="bg-blue-600 w-12 h-12 flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Langdurige Kwaliteit</h3>
              <p className="text-slate-600 mb-6">
                Gebouwd met premium materialen voor jarenlange betrouwbare prestaties
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  Roestvrij staal
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  Slijtvaste coating
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />5 jaar garantie
                </li>
              </ul>
            </div>

            <div className="p-8 border border-slate-200">
              <div className="bg-blue-600 w-12 h-12 flex items-center justify-center mb-6">
                <RefreshCw className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Modulair Systeem</h3>
              <p className="text-slate-600 mb-6">
                Uitwisselbare onderdelen voor verschillende behandelingen en eenvoudig onderhoud
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  Verschillende rubbers
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  Snelle wisseling
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  Kosteneffectief
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Technische <span className="text-blue-600">specificaties</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Alle details die je nodig hebt om een weloverwogen beslissing te maken
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Afmetingen & Gewicht */}
            <div className="border-l-4 border-blue-600 pl-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Afmetingen & Gewicht</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">Lengte</p>
                  <p className="text-2xl font-bold text-slate-900">32 cm</p>
                </div>
                <div>
                  <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">Breedte</p>
                  <p className="text-2xl font-bold text-slate-900">8 cm</p>
                </div>
                <div>
                  <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">Hoogte</p>
                  <p className="text-2xl font-bold text-slate-900">4 cm</p>
                </div>
                <div>
                  <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">Gewicht</p>
                  <p className="text-2xl font-bold text-slate-900">450 gram</p>
                </div>
              </div>
            </div>

            {/* Materialen & Certificering */}
            <div className="border-l-4 border-blue-600 pl-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Materialen & Certificering</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">Hoofdmateriaal</p>
                  <p className="text-lg text-slate-700 mb-4">Medisch roestvrij staal (316L)</p>
                  <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">Rubbers</p>
                  <p className="text-lg text-slate-700">Medische silicone (FDA goedgekeurd)</p>
                </div>
                <div>
                  <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">Certificering</p>
                  <p className="text-lg text-slate-700 mb-4">CE-markering, ISO 13485</p>
                  <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">Sterilisatie</p>
                  <p className="text-lg text-slate-700">Autoclaaf compatibel tot 134°C</p>
                </div>
              </div>
            </div>

            {/* Inclusief bij levering */}
            <div className="border-l-4 border-blue-600 pl-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Inclusief bij levering</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-slate-700">EqDent NoTeeth hoofdgereedschap</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-slate-700">Set van 4 verschillende rubbers</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-slate-700">Sterilisatie-etui</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-slate-700">Gebruiksaanwijzing (NL/EN)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-slate-700">5 jaar garantiecertificaat</span>
                </div>
              </div>
            </div>

            {/* Onderhoud & Service */}
            <div className="border-l-4 border-blue-600 pl-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Onderhoud & Service</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-slate-700">Eenvoudige reiniging</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-slate-700">Vervangingsrubbers beschikbaar</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-slate-700">24/7 technische ondersteuning</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-slate-700">Gratis reparatieservice (garantie)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-slate-700">Online training beschikbaar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Wat <span className="text-blue-600">professionals</span> zeggen
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ontdek waarom veterinaire professionals enthousiast zijn over EqDent NoTeeth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DR</span>
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold">Dr. Sarah van der Berg</h4>
                  <p className="text-blue-600 text-sm">Paardentandarts, Amsterdam</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-blue-600 text-blue-600" />
                ))}
              </div>
              <p className="text-slate-700 italic">
                "Dit gereedschap heeft mijn praktijk volledig veranderd. De veiligheid en precisie zijn ongeëvenaard. Ik
                kan me niet voorstellen nog terug te gaan naar de oude methoden."
              </p>
            </div>

            <div className="p-8 border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MJ</span>
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold">Mark Jansen</h4>
                  <p className="text-blue-600 text-sm">Dierenarts, Utrecht</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-blue-600 text-blue-600" />
                ))}
              </div>
              <p className="text-slate-700 italic">
                "De uitwisselbare rubbers maken het verschil. Ik kan nu elke behandeling optimaal aanpassen. De
                investering heeft zich al binnen een maand terugverdiend."
              </p>
            </div>

            <div className="p-8 border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">LK</span>
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold">Lisa Konings</h4>
                  <p className="text-blue-600 text-sm">Paardenkliniek, Eindhoven</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-blue-600 text-blue-600" />
                ))}
              </div>
              <p className="text-slate-700 italic">
                "Eindelijk een gereedschap dat echt is ontworpen voor onze dagelijkse praktijk. Mijn team en ik voelen
                ons veel veiliger tijdens behandelingen."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Veelgestelde <span className="text-blue-600">vragen</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Alles wat je wilt weten over EqDent NoTeeth</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white border border-slate-200 px-6">
                <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                  Wanneer wordt EqDent NoTeeth beschikbaar?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  We verwachten EqDent NoTeeth in het tweede kwartaal van 2024 te lanceren. Wachtlijstleden krijgen als
                  eerste toegang tot het product en ontvangen regelmatige updates over de voortgang.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white border border-slate-200 px-6">
                <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                  Wat zijn de kosten van EqDent NoTeeth?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  De definitieve prijs wordt binnenkort bekendgemaakt. Wachtlijstleden ontvangen exclusieve early-bird
                  prijzen en speciale aanbiedingen. We streven naar een concurrerende prijs die de waarde van het
                  product weergeeft.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white border border-slate-200 px-6">
                <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                  Is training vereist voor het gebruik van EqDent NoTeeth?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Hoewel EqDent NoTeeth intuïtief is ontworpen, bieden we gratis online training aan voor alle
                  gebruikers. Dit zorgt voor optimaal gebruik en maximale veiligheid. Ervaren paardentandartsen kunnen
                  direct aan de slag.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white border border-slate-200 px-6">
                <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                  Hoe vaak moeten de rubbers worden vervangen?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Dit hangt af van de gebruiksfrequentie, maar gemiddeld gaan de rubbers 6-12 maanden mee bij normaal
                  gebruik. Vervangingsrubbers zijn eenvoudig te bestellen en binnen 24 uur geleverd in Nederland.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white border border-slate-200 px-6">
                <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                  Is EqDent NoTeeth geschikt voor alle paardenrassen?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Ja, EqDent NoTeeth is ontworpen voor gebruik bij alle paardenrassen, van pony's tot trekpaarden. De
                  verschillende rubber-opzetstukken maken aanpassing aan verschillende mondgroottes mogelijk.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white border border-slate-200 px-6">
                <AccordionTrigger className="text-slate-900 hover:text-blue-600">
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
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-12 border border-slate-200">
              <div className="text-center mb-8">
                <div className="bg-blue-600 w-16 h-16 flex items-center justify-center mx-auto mb-6">
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
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold"
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
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-4">
              Eq<span className="text-blue-400">dent</span>
            </div>
            <p className="text-slate-400 mb-4">Revolutionaire tandheelkundige zorg voor paarden</p>
            <p className="text-sm text-slate-500">© 2024 Eqdent. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
