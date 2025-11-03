import Image from "next/image"
import { CheckCircle, AlertTriangle } from "lucide-react"

export function GeavanceerdeIngrepenSection() {
  return (
    <section id="geavanceerde-ingrepen" className="py-16 lg:py-24" style={{backgroundColor: 'var(--eqdent-white-green)'}}>
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-3xl mx-auto text-center mb-16">

          <h2 className="text-3xl font-light text-primary mb-6">Expertise zorg</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Voor complexe tandheelkundige problemen bieden wij geavanceerde behandelingen 
            direct aan met de modernste technieken. Geen verwijzing nodig!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="bg-background p-8 rounded-xl shadow-sm border border-border mb-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Wanneer uw paard een ernstige tandheelkundige aandoening ontwikkelt of een probleem wordt geïdentificeerd dat specialistische zorg vereist, kunnen deze worden behandeld met de modernste apparatuur en technieken. Als de behandeling niet op locatie plaats kan vinden zijn er goede contacten met gespecialiseerde klinieken om uw paard veilig en vertrouwd te verwijzen.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Alle geavanceerde procedures worden uitgevoerd onder staande sedatie met pijnstilling en zonodig lokale verdovingen voor een pijnvrije behandeling. EQDent beschikt over jarenlange ervaring met complexe tandheelkundige ingrepen.
                </p>
              </div>

              <div className="bg-background p-8 rounded-xl shadow-sm border border-border">
                <h3 className="text-xl font-medium text-primary mb-6">Voorbeelden van specialistische behandelingen:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">

                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground text-sm">Extracties van kiezen en (hoek)tanden</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground text-sm">Minimaal invasieve chirurgische technieken</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground text-sm">Behandeling van bijhoofdsholteontstekingen (sinusitis)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground text-sm">Behandeling van diastema's en tandvleesontstekingen</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground text-sm">Complexe gebitscorrecties (bij grote slijtageproblemen)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground text-sm">EOTRH behandelingen</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground text-sm">Kaakfractuur reparatie</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground text-sm">Unieke tandheelkundige lasertherapie</p>
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
                
                <div className="p-6 rounded-xl" style={{backgroundColor: 'var(--eqdent-green-light)'}}>
                  <h3 className="text-lg font-medium text-primary mb-4">EQDent</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground text-sm">
                        <strong>EQDent</strong> biedt complexe behandelingen direct beschikbaar zonder wachttijd of doorverwijzing.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground text-sm">
                        <strong>EQDent</strong> beschikt over de nieuwste tandheelkundige technologie en moderne apparatuur.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground text-sm">
                        <strong>EQDent</strong> voert geavanceerde behandelingen uit bij u thuis in een vertrouwde omgeving.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background border border-border p-8 rounded-xl">
            <div className="text-center">
              <h3 className="text-xl font-medium text-primary mb-4">
                Wanneer zijn geavanceerde ingrepen nodig?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-3">
                    <span className="text-accent-foreground font-bold">1</span>
                  </div>
                  <p className="text-foreground">
                    <strong>Complexe extracties</strong><br />
                    <span className="text-muted-foreground">Gebroken tanden, diepe wortels, of moeilijk bereikbare kiezen</span>
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-3">
                    <span className="text-accent-foreground font-bold">2</span>
                  </div>
                  <p className="text-foreground">
                    <strong>Ernstige infecties</strong><br />
                    <span className="text-muted-foreground">Abcessen, sinusinfecties, of uitgebreide parodontale ziekte</span>
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-3">
                    <span className="text-accent-foreground font-bold">3</span>
                  </div>
                  <p className="text-foreground">
                    <strong>Structurele problemen</strong><br />
                    <span className="text-muted-foreground">Kaakfracturen, ernstige malocclusies, of grote caviteiten</span>
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