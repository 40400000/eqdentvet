"use client"

import { motion } from "framer-motion"
import { CheckCircle, AlertTriangle, ArrowLeft, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DevPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-950 border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 text-white hover:text-blue-300 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              Terug naar homepage
            </Link>
            <h1 className="text-white text-xl font-semibold">Dev - Email Voorbeelden</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Internal Notifications */}
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Standard Internal Email */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="bg-white rounded-lg shadow-sm border border-slate-200 p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Mail className="h-6 w-6 text-blue-500" />
                <h2 className="text-xl font-semibold text-slate-900">Nieuwe Afspraakaanvraag</h2>
              </div>
              
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm">
                <div className="space-y-3">
                  <div className="border-b border-slate-300 pb-3">
                    <p><strong>Aan:</strong> mark@eqdent.nl</p>
                    <p><strong>Onderwerp:</strong> Nieuwe afspraakaanvraag - Anna Mertens</p>
                  </div>
                  
                  <div className="space-y-3">
                    <p><strong>Nieuwe afspraakaanvraag ontvangen:</strong></p>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded p-3">
                      <div className="grid grid-cols-1 gap-2 text-sm">
                        <p><strong>Naam:</strong> Anna Mertens</p>
                        <p><strong>E-mail:</strong> anna.mertens@example.com</p>
                        <p><strong>Locatie:</strong> Staldijk 42, 6852 AB Huissen</p>
                        <p><strong>Datum/tijd:</strong> 30 okt 2025, 14:32</p>
                      </div>
                    </div>
                    
                    <p className="text-xs text-slate-500">
                      Log in op het admin panel om de afspraak te bevestigen.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Warning Internal Email */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
              className="bg-white rounded-lg shadow-sm border border-slate-200 p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-6 w-6 text-amber-500" />
                <h2 className="text-xl font-semibold text-slate-900">Afspraak - Concurrentiebeding</h2>
              </div>
              
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm">
                <div className="space-y-3">
                  <div className="border-b border-slate-300 pb-3">
                    <p><strong>Aan:</strong> mark@eqdent.nl</p>
                    <p><strong>Onderwerp:</strong> ⚠️ Afspraakaanvraag - Mogelijk concurrentiebeding</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-amber-50 border border-amber-300 rounded p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-4 w-4 text-amber-600" />
                        <p className="font-semibold text-amber-900">Concurrentiebeding waarschuwing</p>
                      </div>
                      <p className="text-amber-800 text-sm">Dit adres valt mogelijk onder het concurrentiebeding.</p>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded p-3">
                      <div className="grid grid-cols-1 gap-2 text-sm">
                        <p><strong>Naam:</strong> Pieter Hendrikx</p>
                        <p><strong>E-mail:</strong> pieter.hendrikx@example.com</p>
                        <p><strong>Locatie:</strong> Paardenweg 15, 5091 AA Middelbeers</p>
                        <p><strong>Datum/tijd:</strong> 30 okt 2025, 15:45</p>
                      </div>
                    </div>
                    
                    <p className="text-xs text-slate-500">
                      Controleer het concurrentiebeding voordat je contact opneemt.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Client Confirmation Email */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
            className="bg-white rounded-lg shadow-sm border border-slate-200 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <h2 className="text-2xl font-semibold text-slate-900">Klant Bevestigingsemail</h2>
            </div>
            
            {/* Email Preview */}
            <div className="bg-white border border-slate-300 rounded-lg overflow-hidden">
              {/* Email Header */}
              <div className="bg-slate-950 p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-32">
                    <Image
                      src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/mark/eqdent_logo.png"
                      alt="EqDent Logo"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <div className="text-right">
                    <p className="text-blue-300 text-sm">Professionele paardentandheelkunde</p>
                  </div>
                </div>
              </div>
              
              {/* Email Body */}
              <div className="p-8 space-y-6">
                <div>
                  <h1 className="text-2xl font-light text-blue-900 mb-2">Bedankt voor uw afspraakaanvraag</h1>
                  <p className="text-slate-600">Wij nemen binnen 24 uur contact met u op</p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-slate-700">Beste Anna,</p>
                  
                  <p className="text-slate-700 leading-relaxed">
                    Hartelijk dank voor uw vertrouwen in EqDent. Wij hebben uw afspraakaanvraag 
                    ontvangen en zullen binnen 24 uur telefonisch contact met u opnemen om een geschikte 
                    tijd in te plannen voor de tandheelkundige controle van uw paard.
                  </p>
                  
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                    <h3 className="font-semibold text-slate-900 mb-3">Wat kunt u verwachten:</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Telefonisch contact binnen 24 uur</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Ambulante behandeling op uw locatie</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Moderne apparatuur en transparante behandeling</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Professionele nazorg en advies</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="font-semibold text-blue-900 mb-2">Spoedgeval?</h3>
                    <p className="text-blue-800">
                      Voor urgente tandheelkundige problemen kunt u ons direct bereiken op 
                      <strong> 06-12345678</strong>
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-slate-200 pt-6">
                  <p className="text-slate-700">Met vriendelijke groet,</p>
                  <div className="mt-3">
                    <p className="font-semibold text-slate-900">Dr. Mark van Manen</p>
                    <p className="text-slate-600">EqDent</p>
                    <p className="text-blue-700 text-sm">www.eqdent.nl</p>
                  </div>
                </div>
              </div>
              
              {/* Email Footer */}
              <div className="bg-slate-100 p-4 text-center">
                <p className="text-xs text-slate-500">
                  Dit is een automatisch gegenereerd bericht. Voor vragen kunt u contact opnemen via onze website.
                </p>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  )
}