import Image from "next/image"
import { CheckCircle, AlertTriangle } from "lucide-react"

export function GeavanceerdeIngrepenSection() {
  return (
    <section id="geavanceerde-ingrepen" className="py-16 lg:py-24" style={{backgroundColor: 'var(--eqdent-white-green)'}}>
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-3xl mx-auto text-center mb-16">

          <h2 className="text-3xl font-light text-primary mb-6">Expertise en gespecialiseerde zorg</h2>
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
                  Ook bij complexe tandheelkundige aandoeningen kunt u rechtstreeks bij ons terecht. Wij werken met geavanceerde technieken voor een veilige en effectieve behandeling.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Wanneer uw paard een tandheelkundig probleem heeft dat extra zorg of specialistische behandeling vraagt, voeren wij dit uit met moderne apparatuur en de nieuwste technieken. Is een behandeling niet op locatie mogelijk? Dan werken wij samen met gespecialiseerde klinieken, zodat uw paard veilig en vertrouwd kan worden doorverwezen.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Alle uitgebreide behandelingen worden uitgevoerd terwijl uw paard rustig blijft staan, onder lichte sedatie en met goede pijnstilling. Indien nodig gebruiken wij plaatselijke verdoving, zodat de behandeling volledig pijnvrij verloopt. Met jarenlange ervaring in complexe tandheelkundige ingrepen is uw paard bij EQDent in deskundige handen.
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
                        <strong>EQDent</strong> beschikt over de nieuwste tandheelkundige technologie en moderne apparatuur.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground text-sm">
                                              <strong>EQDent</strong> werkt hard aan de realisatie van een kliniekruimte om alle expertisezorg te kunnen bieden.

                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground text-sm">
                        <strong>EQDent</strong> voert sommige geavanceerde behandelingen uit bij u thuis in een vertrouwde omgeving.
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