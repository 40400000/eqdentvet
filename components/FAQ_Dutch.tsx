"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqData = [
  {
    id: "hoe-vaak-tandarts",
    question: "Hoe vaak moet mijn paard naar de tandarts?",
    answer: "Volwassen paarden jaarlijks, jonge paarden (2-5 jaar) en senioren (15+) vaker. Wij stellen een persoonlijk controleplan op."
  },
  {
    id: "tandpijn-herkennen",
    question: "Hoe herken ik tandpijn bij mijn paard?",
    answer: "Moeilijk kauwen, voer laten vallen, hoofdschudden tijdens rijden, weerstand tegen het bit of gewichtsverlies."
  },
  {
    id: "sedatie-behandeling",
    question: "Wordt er sedatie gebruikt tijdens behandelingen?",
    answer: "Ja, voor veiligheid en comfort gebruiken wij lichte sedatie. Dit zorgt voor een stressvrije en grondige behandeling."
  },
  {
    id: "rijden-na-behandeling",
    question: "Kan mijn paard rijden na een behandeling?",
    answer: "Na routinebehandelingen meestal dezelfde dag licht werk. Na uitgebreidere ingrepen 24-48 uur rust."
  },
  {
    id: "tanden-vijlen",
    question: "Waarom moeten paardentanden gevijld worden?",
    answer: "Paardentanden groeien continu en ontwikkelen scherpe randen. Vijlen zorgt voor gelijkmatige bijtfunctie en voorkomt pijn."
  },
  {
    id: "wolftanden",
    question: "Wat zijn wolftanden en moeten ze weg?",
    answer: "Kleine tanden voor de kiezen die kunnen interfereren met het bit. Verwijdering hangt af van positie en klachten."
  },
  {
    id: "kosten-behandeling",
    question: "Wat kosten behandelingen?",
    answer: "Routinecontrole €150-250. Complexere behandelingen meer. Transparante offerte vooraf."
  },
  {
    id: "afspraak-maken",
    question: "Hoe maak ik een afspraak?",
    answer: "Via ons contactformulier of telefoon. Wij komen naar uw locatie. Planning binnen 1-2 weken, spoed dezelfde dag."
  },
  {
    id: "gaatjes-tanden",
    question: "Krijgen paarden gaatjes in hun tanden?",
    answer: "Zelden klassieke gaatjes, maar wel tandinfecties. Regelmatige controles detecteren problemen vroeg."
  },
  {
    id: "oude-paarden",
    question: "Welke tandproblemen hebben oudere paarden?",
    answer: "Versleten tanden, EOTRH, losse tanden. Aangepaste voeding en intensievere controles helpen."
  }
]

export function DutchFAQSection() {
  return (
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
          <h2 className="text-3xl font-light text-blue-900 mb-6">
            Veelgestelde vragen
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">Alles wat je wilt weten over paardentandheelkunde</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="bg-white border border-slate-200 px-6">
                <AccordionTrigger className="text-slate-900 hover:text-blue-700">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </motion.section>
  )
}