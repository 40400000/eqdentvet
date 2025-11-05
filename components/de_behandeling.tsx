import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function BehandelingSection() {
  return (
    <section id="behandeling" className="py-16 lg:py-24" style={{backgroundColor: 'var(--eqdent-white-green)'}}>
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-light text-primary mb-6">Periodieke zorg</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <div className="bg-background p-8 rounded-xl shadow-sm border border-border mb-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Goede paardentandheelkunde vraagt meer dan techniek alleen.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Het vraagt inzicht in de samenhang tussen gebit, voeding, training en gedrag.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Zo ontstaat periodieke zorg die niet alleen gebitsklachten voorkomt of verhelpt, maar ook bijdraagt aan algehele gezondheid, duurzame prestaties en welzijn.
                </p>
                <p className="text-muted-foreground leading-relaxed font-medium mt-6">
                  EQDent draagt daarmee zorg voor jouw verbinding met je paard.
                </p>
              </div>

              <div className="bg-background p-8 rounded-xl shadow-sm border border-border">
                <h3 className="text-xl font-medium text-primary mb-4">Wat gebeurt er tijdens een behandeling?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-medium text-primary">Grondige inspectie:</span> Elk paard wordt zorgvuldig onderzocht, zodat wij samen kunnen kijken wat het gebit nodig heeft. Bij deze inspectie wordt standaard gebruik gemaakt van sedatie.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-medium text-primary">Onderzoek afwijkingen:</span> De afwijkingen en behandelopties worden altijd grondig onderzocht, duidelijk besproken en in beeld gebracht.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-medium text-primary">Correcties:</span> Een gezond en functioneel gebit begint bij een onbelemmerde en pijnvrije kauwbeweging. Afwijkingen in tand- en kiesslijtage worden met precisie en aandacht gecorrigeerd.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-medium text-primary">Behandeling overige afwijkingen:</span> Problemen die veilig tijdens de afspraak kunnen worden aangepakt, worden direct behandeld. Grotere of complexe problemen vragen om zorg die nader onderzoek en behandeling tijdens een vervolgafspraak vereist.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-medium text-primary">Documentatie:</span> Je ontvangt na de behandeling een uitgebreid en duidelijk verslag van de bevindingen, de behandeling en tips voor verzorging en management.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="sticky top-24">
                <div className="relative h-[300px] rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/DTS_OFF_GRID_Lewis_FERRIS_Photos_ID10549.jpg"
                    alt="Paarden in natuurlijke omgeving"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 rounded-xl" style={{backgroundColor: 'var(--eqdent-green-light)'}}>
                  <h3 className="text-lg font-medium text-primary mb-4">EQDent</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground text-sm">
                        <strong>EQDent</strong> is gedreven om paarden zo lang mogelijk met een functioneel, pijnvrij en compleet gebit te laten leven.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground text-sm">
                        <strong>EQDent</strong> wordt gedragen door meer dan 15 jaar ervaring op het gebied van tandheelkunde bij paarden.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground text-sm">
                        <strong>EQDent</strong> stopt niet waar anderen opgeven.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}