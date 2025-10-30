import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function BehandelingSection() {
  return (
    <section id="behandeling" className="py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-xs uppercase tracking-wider text-orange-500 font-semibold bg-orange-50 px-3 py-1 rounded-full">
              Aanpak
            </span>
          </div>
          <h2 className="text-3xl font-light text-blue-900 mb-6">Periodieke zorg</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Regelmatige gebitscontroles zijn essentieel voor de gezondheid en prestaties van uw paard. 
                  Paardentanden groeien continu en kunnen zonder regelmatige zorg scherpe randen, haken en 
                  andere problemen ontwikkelen die pijn, eetproblemen en gedragsissues veroorzaken.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Ik kom naar uw locatie voor een stressvrije behandeling. Na lichte sedatie wordt het gebit 
                  grondig onderzocht en gecorrigeerd met moderne apparatuur. Voor complexe behandelingen werk 
                  ik samen met gespecialiseerde collega's.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-medium text-blue-900 mb-4">Wat gebeurt er tijdens een behandeling?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <p className="text-gray-600">
                      <span className="font-medium text-blue-900">Grondige inspectie:</span> Elk paard wordt zorgvuldig 
                      onderzocht, zodat wij samen kunnen kijken wat het gebit nodig heeft.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <p className="text-gray-600">
                      <span className="font-medium text-blue-900">Correctie en balanceren:</span> Het gebit balanceren 
                      en corrigeren waar nodig, zoals het verwijderen van scherpe punten en misvormingen.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <p className="text-gray-600">
                      <span className="font-medium text-blue-900">Onderzoek afwijkingen:</span> Identificatie van vroege 
                      veranderingen zoals cariës, gaten tussen tanden of ontwikkelingsproblemen met behandelopties.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <p className="text-gray-600">
                      <span className="font-medium text-blue-900">Behandeling kleine problemen:</span> Problemen die 
                      veilig tijdens de afspraak kunnen worden aangepakt, worden direct behandeld.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <p className="text-gray-600">
                      <span className="font-medium text-blue-900">Preventieve zorg:</span> Advies en vroege interventie 
                      om te voorkomen dat kleine problemen uitgroeien tot ernstige aandoeningen.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="sticky top-24">
                <div className="relative h-[300px] rounded-xl overflow-hidden mb-6">
                  <Image
                    src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/susanne_website/horse-teeth-canva-4-4-22-2-577ykb1Jmv8jtKYWrExHr6uscDLeqv.jpg"
                    alt="Gebitsbehandeling bij een paard"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-medium text-blue-900 mb-4">Wist u dat?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-orange-500 text-xs font-medium">1</span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Paarden kunnen tot 40-42 tanden hebben, inclusief snijtanden, hoektanden, premolaren en
                        molaren.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-orange-500 text-xs font-medium">2</span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        De tanden van een paard groeien hun hele leven door, ongeveer 2-3 mm per jaar.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-orange-500 text-xs font-medium">3</span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Paarden kauwen in een cirkelvormige beweging, wat kan leiden tot ongelijkmatige slijtage als
                        het gebit niet regelmatig wordt gecontroleerd.
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