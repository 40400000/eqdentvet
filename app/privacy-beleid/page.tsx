"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"

export default function PrivacyBeleid() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="white" />

      <div className="container mx-auto px-4 py-12 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-light mb-12 text-center" style={{color: 'var(--eqdent-green-dark)'}}>
            Privacybeleid
          </h1>

          <div className="prose prose-lg max-w-none" style={{color: 'var(--eqdent-text-grey)'}}>
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{color: 'var(--eqdent-green-dark)'}}>1. Inleiding</h2>
            <p className="mb-4">
              EQDent Veterinair (hierna: "EQDent"), gevestigd te Rietkamp 5, 8191TH Wapenveld, KvK-nummer 98546546,
              hecht groot belang aan de bescherming van uw persoonsgegevens. In dit privacybeleid leggen wij uit welke
              persoonsgegevens wij verzamelen en gebruiken, en met welk doel. Wij raden u aan dit privacybeleid zorgvuldig
              te lezen.
            </p>
            <p className="mb-4">
              EQDent verwerkt uw persoonsgegevens in overeenstemming met de Algemene Verordening Gegevensbescherming
              (AVG) en andere relevante wet- en regelgeving op het gebied van gegevensbescherming.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{color: 'var(--eqdent-green-dark)'}}>2. Welke gegevens verzamelen wij?</h2>
            <p className="mb-4">Wanneer u zich via ons contactformulier inschrijft voor een afspraak, verzamelen wij de volgende persoonsgegevens:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Naam:</strong> voornaam en achternaam</li>
              <li><strong>Adres:</strong> uw thuisadres (straat, huisnummer, postcode, plaats)</li>
              <li><strong>Staladres:</strong> het adres waar de behandeling dient plaats te vinden</li>
              <li><strong>E-mailadres:</strong> voor communicatie en afspraakbevestigingen</li>
              <li><strong>Telefoonnummer:</strong> voor telefonisch contact</li>
              <li><strong>Communicatiegegevens:</strong> correspondentie via e-mail en telefoon naar aanleiding van uw aanvraag</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{color: 'var(--eqdent-green-dark)'}}>3. Doel van de gegevensverwerking</h2>
            <p className="mb-4">Wij gebruiken uw persoonsgegevens uitsluitend voor de volgende doeleinden:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Afspraakbeheer:</strong> het maken, bevestigen en plannen van afspraken</li>
              <li><strong>Communicatie:</strong> contact opnemen om een afspraak in te plannen en u te informeren over de planning</li>
              <li><strong>Dienstverlening:</strong> het kunnen uitvoeren van de diergeneeskundige behandeling op de juiste locatie</li>
              <li><strong>Administratie:</strong> het bijhouden van contactgegevens en afspraken</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{color: 'var(--eqdent-green-dark)'}}>4. Grondslag voor gegevensverwerking</h2>
            <p className="mb-4">Wij verwerken uw persoonsgegevens op basis van:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Uitvoering van de overeenkomst:</strong> de verwerking is noodzakelijk voor het uitvoeren van de overeenkomst die u met ons aangaat</li>
              <li><strong>Wettelijke verplichting:</strong> wij zijn wettelijk verplicht bepaalde gegevens te bewaren (bijvoorbeeld voor fiscale doeleinden en conform de Wet op de Diergeneesmiddelen)</li>
              <li><strong>Gerechtvaardigd belang:</strong> voor het verbeteren van onze dienstverlening en bedrijfsvoering</li>
              <li><strong>Toestemming:</strong> voor nieuwsbrieven en andere marketingcommunicatie (indien van toepassing)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{color: 'var(--eqdent-green-dark)'}}>5. Gegevens delen met derden</h2>
            <p className="mb-4">
              EQDent deelt uw persoonsgegevens niet met derden, tenzij dit noodzakelijk is om te voldoen aan een
              wettelijke verplichting (bijvoorbeeld in geval van een gerechtelijk bevel).
            </p>
            <p className="mb-4">
              Wij verkopen uw persoonsgegevens nooit aan derden. Uw gegevens blijven uitsluitend bij EQDent en
              worden alleen gebruikt voor het doel waarvoor u ze heeft verstrekt: het maken van een afspraak.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{color: 'var(--eqdent-green-dark)'}}>6. Bewaartermijn</h2>
            <p className="mb-4">
              Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor de gegevens zijn
              verzameld. De bewaartermijn is als volgt:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Contactformuliergegevens:</strong> maximaal 2 jaar na ontvangst voor afspraakplanning en communicatie</li>
              <li><strong>Correspondentie:</strong> wij bewaren e-mailcorrespondentie en communicatie zolang dit noodzakelijk is voor de afwikkeling van de afspraak</li>
            </ul>
            <p className="mb-4">
              Na afloop van deze periode worden uw gegevens verwijderd, tenzij u aangeeft deze langer te willen bewaren
              voor toekomstige afspraken.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{color: 'var(--eqdent-green-dark)'}}>7. Beveiliging van gegevens</h2>
            <p className="mb-4">
              EQDent neemt de bescherming van uw persoonsgegevens serieus en heeft passende technische en organisatorische
              maatregelen genomen om uw persoonsgegevens te beschermen tegen verlies of onrechtmatige verwerking.
              Deze maatregelen omvatten onder meer:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Beveiligde opslag van fysieke en digitale dossiers</li>
              <li>Toegangsbeperking tot persoonsgegevens</li>
              <li>Gebruik van beveiligde internetverbindingen</li>
              <li>Regelmatige updates van beveiligingssoftware</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{color: 'var(--eqdent-green-dark)'}}>8. Uw rechten</h2>
            <p className="mb-4">
              U heeft op grond van de AVG verschillende rechten met betrekking tot uw persoonsgegevens:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Recht op inzage:</strong> u heeft het recht om te weten welke persoonsgegevens wij van u verwerken</li>
              <li><strong>Recht op correctie:</strong> u heeft het recht om onjuiste of onvolledige persoonsgegevens te laten corrigeren</li>
              <li><strong>Recht op verwijdering:</strong> u kunt verzoeken om verwijdering van uw persoonsgegevens, tenzij wij een wettelijke grond hebben om deze te bewaren</li>
              <li><strong>Recht op beperking:</strong> u kunt verzoeken om beperking van de verwerking van uw persoonsgegevens</li>
              <li><strong>Recht op overdraagbaarheid:</strong> u heeft het recht om uw persoonsgegevens in een gestructureerde, gangbare vorm te ontvangen</li>
              <li><strong>Recht van bezwaar:</strong> u heeft het recht om bezwaar te maken tegen de verwerking van uw persoonsgegevens</li>
              <li><strong>Recht om toestemming in te trekken:</strong> indien de verwerking is gebaseerd op toestemming, kunt u deze te allen tijde intrekken</li>
            </ul>
            <p className="mb-4">
              Om deze rechten uit te oefenen, kunt u contact met ons opnemen via de contactgegevens onderaan dit document.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{color: 'var(--eqdent-green-dark)'}}>9. Cookies en websitegebruik</h2>
            <p className="mb-4">
              Onze website maakt gebruik van functionele cookies die noodzakelijk zijn voor het functioneren van de website.
              Deze cookies verzamelen geen persoonsgegevens en vereisen geen toestemming. Voor analytische of
              marketingcookies vragen wij altijd eerst uw toestemming.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{color: 'var(--eqdent-green-dark)'}}>10. Gebruik van contactformulieren</h2>
            <p className="mb-4">
              Wanneer u gebruik maakt van het contactformulier op onze website, verzamelen wij de door u ingevulde
              gegevens uitsluitend voor het doel waarvoor u het formulier heeft ingevuld: het maken van een afspraak
              of het stellen van een vraag. Wij gebruiken deze gegevens niet voor andere doeleinden zonder uw
              uitdrukkelijke toestemming.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{color: 'var(--eqdent-green-dark)'}}>11. Wijzigingen in dit privacybeleid</h2>
            <p className="mb-4">
              EQDent behoudt zich het recht voor om wijzigingen aan te brengen in dit privacybeleid. Wij raden u aan
              dit privacybeleid regelmatig te raadplegen, zodat u op de hoogte blijft van eventuele wijzigingen.
              Dit privacybeleid is voor het laatst gewijzigd op 28 november 2025.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{color: 'var(--eqdent-green-dark)'}}>12. Klachten</h2>
            <p className="mb-4">
              Indien u een klacht heeft over de verwerking van uw persoonsgegevens, verzoeken wij u om direct contact
              met ons op te nemen. U heeft altijd het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens,
              de toezichthouder op het gebied van privacybescherming in Nederland.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{color: 'var(--eqdent-green-dark)'}}>13. Contactgegevens</h2>
            <p className="mb-4">
              Voor vragen over dit privacybeleid of over de verwerking van uw persoonsgegevens, kunt u contact met ons opnemen:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <p className="mb-2"><strong>EQDent Veterinair</strong></p>
              <p className="mb-1">Rietkamp 5</p>
              <p className="mb-1">8191TH Wapenveld</p>
              <p className="mb-1">KvK: 98546546</p>
              <p className="mb-1">CIBG: 140370</p>
              <p className="mb-1">E-mail: <a href="mailto:info@eqdent.nl" className="underline hover:text-green-700">info@eqdent.nl</a></p>
            </div>
          </div>
        </motion.div>
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

            {/* Partner logos */}
            <div className="flex justify-center items-center gap-8 my-8">
              <Link href="https://www.nvvgp.nl/" target="_blank" rel="noopener noreferrer" className="relative h-28 w-28">
                <Image
                  src="/Logo-NVVGP.png"
                  alt="NVVGP Logo"
                  fill
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </Link>
              <Link href="https://www.nced.se/" target="_blank" rel="noopener noreferrer" className="relative h-28 w-28">
                <Image
                  src="/logonced.avif"
                  alt="NCED Logo"
                  fill
                  className="object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                />
              </Link>
            </div>

            <div className="mb-4 space-y-2">
              <p className="text-sm text-primary-foreground/80">
                <Link href="/algemene-voorwaarden" className="hover:text-primary-foreground underline">
                  Algemene Voorwaarden
                </Link>
              </p>
              <p className="text-sm text-primary-foreground/80">
                <Link href="/privacy-beleid" className="hover:text-primary-foreground underline">
                  Privacybeleid
                </Link>
              </p>
              <p className="text-sm text-primary-foreground/80">KvK: 98546546</p>
              <p className="text-sm text-primary-foreground/80">CIBG: 140370</p>
            </div>
            <p className="text-sm text-primary-foreground/60">© 2025 EQDent. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
