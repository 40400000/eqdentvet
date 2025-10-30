import Image from "next/image"
import { CheckCircle, AlertTriangle } from "lucide-react"

export function GeavanceerdeIngrepenSection() {
  return (
    <section id="geavanceerde-ingrepen" className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-xs uppercase tracking-wider text-red-500 font-semibold bg-red-50 px-3 py-1 rounded-full">
              Ingrepen
            </span>
          </div>
          <h2 className="text-3xl font-light text-blue-900 mb-6">Expertise zorg</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Voor complexe tandheelkundige problemen bieden wij geavanceerde behandelingen 
            direct aan met de modernste technieken. Geen verwijzing nodig!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Wanneer uw paard een ernstige tandheelkundige aandoening ontwikkelt of een probleem 
                  wordt geïdentificeerd dat specialistische zorg vereist, kunnen wij deze direct behandelen 
                  met de modernste apparatuur en technieken.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Alle geavanceerde procedures worden uitgevoerd onder staande sedatie met zenuwblokken 
                  en lokale anesthesie voor een pijnvrije behandeling. Wij beschikken over jarenlange 
                  ervaring met complexe tandheelkundige ingrepen.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-medium text-blue-900 mb-6">Voorbeelden van specialistische behandelingen:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">

                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-600 text-sm">Orale extracties van kiezen en hoektanden</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-600 text-sm">Minimaal invasieve chirurgische technieken</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-600 text-sm">Sinuschirurgie en trephination</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-600 text-sm">Parodontale ziekte behandeling</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-600 text-sm">Caviteitsrestauraties (vullingen)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-600 text-sm">Endodontische (wortelkanaal) therapie</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-600 text-sm">Orthodontische therapie</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-600 text-sm">Maxillofaciale chirurgie</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-600 text-sm">Kaakfractuur reparatie</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="sticky top-24">
                <div className="relative h-[250px] rounded-xl overflow-hidden mb-6">
                  <Image
                    src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/susanne_website/horse-teeth-canva-4-4-22-2-577ykb1Jmv8jtKYWrExHr6uscDLeqv.jpg"
                    alt="Geavanceerde tandheelkundige ingreep"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <h3 className="text-lg font-medium text-green-900">Waarom EqDent?</h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-green-800 text-sm">
                      <strong>Direct beschikbaar:</strong> Complexe behandelingen zonder 
                      wachttijd of doorverwijzing.
                    </p>

                    <p className="text-green-800 text-sm">
                      <strong>Moderne apparatuur:</strong> Beschikking over de nieuwste 
                      tandheelkundige technologie.
                    </p>
                    <p className="text-green-800 text-sm">
                      <strong>Ambulante zorg:</strong> Geavanceerde behandelingen bij u 
                      thuis in vertrouwde omgeving.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-8 rounded-xl">
            <div className="text-center">
              <h3 className="text-xl font-medium text-blue-900 mb-4">
                Wanneer zijn geavanceerde ingrepen nodig?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <p className="text-blue-800">
                    <strong>Complexe extracties</strong><br />
                    Gebroken tanden, diepe wortels, of moeilijk bereikbare kiezen
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <p className="text-blue-800">
                    <strong>Ernstige infecties</strong><br />
                    Abcessen, sinusinfecties, of uitgebreide parodontale ziekte
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <p className="text-blue-800">
                    <strong>Structurele problemen</strong><br />
                    Kaakfracturen, ernstige malocclusies, of grote caviteiten
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}