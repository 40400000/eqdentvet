"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"

export default function AlgemeneVoorwaarden() {
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
            Algemene Voorwaarden
          </h1>

          <div className="prose prose-lg max-w-none" style={{color: 'var(--eqdent-text-grey)'}}>
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{color: 'var(--eqdent-green-dark)'}}>Artikel 1: Definities</h2>
            <p className="mb-4">In deze Algemene Voorwaarden wordt verstaan onder:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Algemene Voorwaarden:</strong> alle bepalingen uit deze algemene voorwaarden d.d. 01-11-2025</li>
              <li><strong>Arts:</strong> EQDent Veterinair gevestigd en kantoorhoudende te 'Rietkamp 5, 8191TH te Wapenveld' geregistreerd in het handelsregister van de Kamer van Koophandel onder nummer 98546546 die lid is van de Coöperatie Zelfstandige Paardendierenartsen U.A. en die in opdracht van de Cliënt (i) diergeneeskundige behandelingen verricht; (ii) in het kader van een behandeling(en), middelen levert, verkoopt en/of toedient; (iii) overige diergeneeskundige adviezen geeft; en/of (iv) diergeneeskundige diensten verricht;</li>
              <li><strong>Cliënt:</strong> de eigenaar en/of de aanbieder van de te behandelen Patiënt in wiens opdracht de Arts (i) diergeneeskundige behandelingen verricht; (ii) in het kader van (een) behandeling(en) middelen levert, verkoopt en/of toedient; (iii) overige diergeneeskundige adviezen geeft en/of (iv) diergeneeskundige diensten verricht;</li>
              <li><strong>Debiteur:</strong> degene op wiens naam de factuur van de Arts is gesteld;</li>
              <li><strong>Overeenkomst:</strong> de overeenkomst van opdracht tussen de Arts en de Cliënt tot het verrichten van diergeneeskundige behandelingen, het leveren en/of toedienen van middelen en/of het geven van adviezen en/of het verrichten van (aankoop)keuringen; en</li>
              <li><strong>Patiënt(en):</strong> het (de) door de Cliënt ter behandeling aangeboden paard(en) waarover en/of ten behoeve waarvan middelen worden geleverd en/of toegediend, overige diergeneeskundige adviezen worden gegeven, en/of diergeneeskundige diensten worden verricht.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{color: 'var(--eqdent-green-dark)'}}>Artikel 2: Toepasselijkheid</h2>
            <p className="mb-4">2.1 Deze Algemene Voorwaarden zijn van toepassing op alle Overeenkomsten tussen de Arts en de Cliënt.</p>
            <p className="mb-4">2.2 Aanvullende en/of afwijkende voorwaarden van de Cliënt binden de Arts niet. Aanvullende en/of afwijkende voorwaarden gelden alleen tussen partijen indien de Arts schriftelijk met deze aanvullende en/of afwijkende voorwaarden heeft ingestemd.</p>
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <p className="font-semibold mb-2">Toevoeging voor consumenten:</p>
              <p>2.3 Indien de Cliënt een consument is, gelden naast deze Algemene Voorwaarden tevens de dwingendrechtelijke bepalingen van het consumentenrecht, waaronder het Burgerlijk Wetboek Boek 6 en Boek 7, met inbegrip van het recht van herroeping en informatieplicht.</p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{color: 'var(--eqdent-green-dark)'}}>Artikel 3: Totstandkoming Overeenkomst</h2>
            <p className="mb-4">3.1 Alle aanbiedingen tot het sluiten van een Overeenkomst zijn vrijblijvend, tenzij tussen de Arts en de Cliënt anders is overeengekomen.</p>
            <p className="mb-4">3.2 De tussen de Arts en de Cliënt te sluiten Overeenkomst is eerst rechtsgeldig vanaf het moment dat de Overeenkomst door de Arts schriftelijk is bevestigd, dan wel wanneer de Arts met de uitvoering van de Overeenkomst is begonnen en/of de te leveren middelen heeft geleverd en/of heeft toegediend.</p>
            <p className="mb-4">3.3 De Arts heeft te allen tijde het recht om indien een aanbod tot het sluiten van een Overeenkomst uiteindelijk niet tot een definitieve overeenkomst leidt, alle kosten die de Arts heeft moeten maken om de aanbieding aan de Cliënt te verstrekken, in rekening te brengen.</p>
            <p className="mb-4">3.4 De Arts heeft het recht om het sluiten van een Overeenkomst, ten aanzien van een Patiënt, te weigeren en/of om slechts onder bepaalde voorwaarden aan te nemen, indien de Arts van mening is dat behandeling van Patiënt geen, althans volstrekt onvoldoende, kans op succes heeft tenzij de Arts op grond van wettelijke en/of gedrags-/tuchtrechtelijke regelgeving verplicht is de Patiënt wel te behandelen.</p>
            <p className="mb-4">3.5 De Arts heeft te allen tijde het recht alle prijsverhogende factoren die zijn ontstaan na het doen uitbrengen van de prijsopgave dan wel de totstandkoming van de Overeenkomst aan de Cliënt in rekening te brengen. Indien Cliënt een consument is, is heeft de consument het recht de Overeenkomst te ontbinden indien de prijsverhoging door de Arts wordt gewenst binnen 3 maanden na datum sluiten Overeenkomst.</p>
            <p className="mb-4">3.6 Indien de Cliënt een consument is die de Overeenkomst op afstand of buiten de verkoopruimte van de Arts sluit, geldt het herroepingsrecht conform artikel 6:230o BW, met uitzondering van situaties waarin de uitvoering van de behandeling direct noodzakelijk is wegens een dringende medische noodzaak of wanneer de levering van middelen reeds is gestart op uitdrukkelijk verzoek van de consument.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{color: 'var(--eqdent-green-dark)'}}>Artikel 4: Inhoud Overeenkomst</h2>
            <p className="mb-4">4.1 Op de Arts rust een inspanningsverplichting. De Arts zal de Overeenkomst naar eigen inzicht en vermogen en in overeenstemming met de eisen van goed diergeneeskundig handelen uitvoeren.</p>
            <p className="mb-4">4.2 De Arts is gerechtigd de werkzaamheden te laten verrichten door een hem aan te wijzen derde.</p>
            <p className="mb-4">4.3 De Overeenkomst kan ook bestaan uit het verkopen, leveren en/of het toedienen van (dier)geneesmiddelen door Cliënt en/of in opdracht van derden, waaronder toediening in opdracht van overheidsinstanties (zie tevens artikel 9.5).</p>
            <p className="mb-4">4.4 Het enkele feit dat de Arts betrokken is bij de verkoop, levering en/of toediening van diergeneesmiddelen en/of daarbij bijstand verleent, ontslaat de Cliënt en/of derden niet van de op Cliënt en/of de betreffende derde ter zake de Patiënt uit hoofde van de Wet op de Diergeneesmiddelen rustende administratieve verplichtingen.</p>
            <p className="mb-4">4.5 Bij de uitvoering van de werkzaamheden is Cliënt gehouden zorg te dragen voor een veilige werkplek en veilige omstandigheden, zodat het welzijn van zowel de Arts en door hem ingeschakelde derden alsook de Patiënt, zoveel als redelijkerwijs mag worden verwacht, is gewaarborgd. De Patiënt mag tijdens de uitvoering van de werkzaamheden door Arts geen gevaarlijk, schrikkerig gedrag vertonen, waardoor Arts en de door hem in het kader van de uitvoering ingeschakelde derden alsook de Patiënt zelf in gevaar komt. Indien Cliënt deze veiligheid niet waarborgt, dan wel de Patiënt voornoemd gevaarlijk gedrag vertoont, is de Arts bevoegd zijn verplichtingen op te schorten totdat de Cliënt deze verplichting is nagekomen dan wel de Patiënt voornoemd gedrag niet meer vertoont.</p>
            <p className="mb-4">4.6 Indien de behandeling van de Patiënt daartoe aanleiding geeft heeft de Arts het recht om aan een ieder, zo nodig ook aan de Cliënt, de toegang tot de stallen of een andere locatie, waar de behandeling plaatsvindt, te ontzeggen en/of andere voorwaarden te geven die zij noodzakelijk acht voor de behandeling. De Cliënt is gehouden hieraan gehoor te geven.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{color: 'var(--eqdent-green-dark)'}}>Artikel 5: Verplichtingen van de Cliënt</h2>
            <p className="mb-4">5.1 Cliënt is gehouden om alle gegevens waarvan Cliënt redelijkerwijs kan begrijpen dat deze noodzakelijk zijn voor het uitvoeren van de Overeenkomst of waarvan de Arts aangeeft dat deze noodzakelijk zijn voor het uitvoeren van de Overeenkomst, in de door de Arts gewenst vorm, op de gewenste wijze en tijdig ter beschikking van de Arts te stellen.</p>
            <p className="mb-4">5.2 Cliënt staat in voor, en draagt het (financiële) risico van, de juistheid, volledigheid en betrouwbaarheid van de aan de Arts verstrekte informatie, ook indien deze afkomstig is van derden.</p>
            <p className="mb-4">5.3 Indien de voor de uitvoering van de Overeenkomst benodigde gegevens niet tijdig aan de Arts zijn verstrekt voor een (juiste) behandeling volgens afspraak, is de Cliënt niettemin verplicht de voor de geplande werkzaamheden gebruikelijke kosten aan de Arts te voldoen.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{color: 'var(--eqdent-green-dark)'}}>Artikel 6: Tussentijdse wijziging en beëindiging van de Overeenkomst</h2>
            <p className="mb-4">6.1 Indien de Cliënt de aan de Arts verstrekte opdracht tot het verrichten van werkzaamheden annuleert binnen 72 uur voorafgaand aan het tijdstip waarop de opdracht aanvangt, is de Cliënt verplicht de voor de geplande werkzaamheden gebruikelijke kosten aan de Arts te voldoen.</p>
            <p className="mb-4">6.2 De tussen de Arts en Cliënt gesloten Overeenkomst wordt (tussentijds) beëindigd door:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>het uitdrukkelijk verzoek van de Cliënt, waarbij de Cliënt door de Arts zo nodig zal worden gewezen op de mogelijke gevolgen van deze voortijdige beëindiging voor de Patiënt en, indien beëindiging geschiedt tegen het advies van de Arts in, erop zal worden gewezen dat dit zal geschieden op risico van de Cliënt en zo nodig de Cliënt hierover een schriftelijke verklaring laten afleggen;</li>
              <li>het overlijden van de te behandelen Patiënt;</li>
              <li>een eenzijdige beslissing van de Arts, indien de Arts van mening is dat van hem redelijkerwijs niet kan worden gevergd dat de diergeneeskundige behandeling zal worden voortgezet omdat er geen redelijke kans (meer) is op een beoogd en/of gewenst resultaat; of</li>
              <li>een eenzijdige beslissing van de Arts indien het vertrouwen tussen de Arts en de Cliënt op ernstige wijze is verstoord.</li>
            </ul>
            <p className="mb-4">6.3 Indien de Overeenkomst op eenzijdig verzoek van de Arts tussentijds wordt beëindigd dan zal de Arts, alvorens hiertoe over te gaan, de Cliënt hierover informeren en zijn motivatie aan de Cliënt uiteenzetten tenzij dit niet of niet tijdig mogelijk is.</p>
            <p className="mb-4">6.4 Onverminderd het bepaalde in dit artikel, alsmede het overige dat in deze Algemene Voorwaarden is bepaald, heeft de Arts het recht de Overeenkomst door middel van een daartoe strekkende mededeling, schriftelijk, geheel of gedeeltelijk te ontbinden, zonder dat daartoe een ingebrekestelling of gerechtelijke tussenkomst is vereist, indien:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Cliënt de (vrije) beschikking over (een wezenlijk deel van) zijn vermogen verliest of dreigt te verliezen;</li>
              <li>aan de Cliënt surseance van betaling is verleend, de Cliënt in staat van faillissement is verklaard, de Wet Schuldsanering Natuurlijke Personen op de Cliënt van toepassing is verklaard, of de Cliënt onder curatele is gesteld;</li>
              <li>de Cliënt niet (meer) beschikt over een wettelijk voorgeschreven vergunning of op enige andere wijze niet (meer) voldoet aan de wettelijke of in het maatschappelijk verkeer geldende vereisten die aan hem worden gesteld.</li>
              <li>ten laste van de Cliënt beslag wordt gelegd en dit beslag niet binnen één (1) maand is opgeheven;</li>
              <li>Cliënt zijn onderneming geheel of gedeeltelijk verkoopt, beëindigt of ontbindt.</li>
            </ul>
            <p className="mb-4">6.5 Indien de Overeenkomst voortijdig wordt beëindigd, zal de overeengekomen vergoeding naar rato van de wel reeds uitgevoerde werkzaamheden bij de Cliënt in rekening worden gebracht, tenzij er sprake is van ondeelbare werkzaamheden, hetgeen aan de Arts is om te bepalen.</p>
            <p className="mb-4">6.6 De Cliënt is gehouden om de schade die de Arts als gevolg van de ontbinding lijdt en zal lijden, volledig aan de Arts te vergoeden. Onder schade wordt in dit lid zowel direct als indirecte schade begrepen.</p>
            <p className="mb-4">6.7 Indien de Arts overgaat tot opschorting of ontbinding, is de Arts jegens Cliënt niet gehouden tot vergoeding van enige schade of kosten die daardoor op enigerlei wijze ontstaan.</p>
            <p className="mb-4">6.8 Indien ontbinding van de Overeenkomst door de Arts op grond van dit artikel plaats vindt, worden alle door Cliënt verschuldigde betalingen onmiddellijk en in hun geheel opeisbaar.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{color: 'var(--eqdent-green-dark)'}}>Artikel 7: Tarieven, honoraria en betaling</h2>
            <p className="mb-4">7.1 De Arts stelt de in rekening te brengen tarieven en honoraria vast volgens zijn eigen tarieven naar gelang tijd en omstandigheden. Op de factuur wordt de berekende BTW vermeld.</p>
            <p className="mb-4">7.2 Betaling van de factuur van de Arts kan contant geschieden direct na de verrichting tenzij anders overeengekomen. Voor niet-contante betalingen geldt een betalingstermijn van 14 dagen na factuurdatum. Bij overschrijding van die betalingstermijn kunnen administratiekosten in rekening gebracht worden.</p>
            <p className="mb-4">7.3 Indien meer facturen openstaan worden niet-integrale betalingen daarvan geacht te strekken tot voldoening van de eerst vervallen factuur.</p>
            <p className="mb-4">7.4 Bij niet tijdige betaling zal de Debiteur direct in verzuim zijn en is de Debiteur, indien een consument, wettelijke rente verschuldigd, en indien een onderneming, de wettelijke handelsrente over de hoofdsom of het restant van de vordering.</p>
            <p className="mb-4">7.5 De Debiteur is niet gerechtigd verrekening, uit welke hoofde dan ook, toe te passen ten aanzien van bedragen, die door de Arts in rekening worden gebracht voor de door de Arts verrichte werkzaamheden.</p>
            <p className="mb-4">7.6 Bezwaren tegen door de Arts aan de Debiteur verzonden facturen schorten diens betalingsverplichting niet op, tenzij een dwingendrechtelijke regeling anders voorschrijft.</p>
            <p className="mb-4">7.7 Indien de Debiteur in verzuim is en tot incasso wordt overgegaan, is de Debiteur, naast het verschuldigde bedrag en de daarover verschuldigde rente, gehouden tot het een volledige vergoeding van zowel de buitengerechtelijke als de gerechtelijke incassokosten, met een minimumbedrag van EUR 250. In het geval van een consument wordt de hoogte van de buitengerechtelijke kosten bepaald met behulp van de wettelijke regels met betrekking tot de maximale hoogte van buitengerechtelijke kosten waarbij de Debiteur die consument is deze verschuldigd zal zijn na het verstrijken van een termijn van 14 dagen nadat deze buitengerechtelijke kosten zijn aangekondigd.</p>
            <p className="mb-4">7.8 Betaling van een factuur houdt onvoorwaardelijk in akkoordverklaring met het gefactureerde bedrag voor de verrichte werkzaamheden en de eventueel geleverde materialen/middelen.</p>
            <p className="mb-4">7.9 Indien de Debiteur bestaat uit meerdere natuurlijke personen en/of rechtspersonen, is elk van hen hoofdelijk gehouden de uit de Overeenkomst verschuldigde bedragen te voldoen.</p>
            <p className="mb-4">7.10 Indien de Cliënt de opdracht geeft aan de Arts om werkzaamheden te verrichten dan wel materialen en/of middelen te leveren aan hem en/of aan de rechtspersoon (of een daarmee gelijk te stellen entiteit) waarbinnen hij een leidinggevende functie vervult (statutair dan wel feitelijk), dan is de Cliënt, naast de rechtspersoon (of een daarmee gelijk te stellen entiteit) hoofdelijk aansprakelijk voor de betaling van de aan de rechtspersoon (of een daarmee gelijk te stellen entiteit) gezonden facturen. Dit geldt ook in de situatie dat de Cliënt de rechtspersoon (of een daarmee gelijk te stellen entiteit) aanwijst als Debiteur.</p>
            <p className="mb-4">7.11 De Arts heeft het recht om in voorkomende gevallen voorafgaand aan de uitvoering van zijn werkzaamheden van de Cliënt een aanbetaling te verlangen en niet eerder met zijn werkzaamheden aan te vangen dan nadat het bedrag door de Arts is ontvangen, tenzij de Arts op grond van wettelijke en/of gedrags-/tuchtrechtelijke regelgeving verplicht is de aangeboden Patiënt direct te behandelen.</p>
            <p className="mb-4">7.12 De Arts heeft het recht om, indien de Cliënt de Patiënt na voltooiing van de diergeneeskundige behandeling niet of niet tijdig bij de Arts ophaalt, alle daarmee gepaard gaande extra kosten bij de Cliënt in rekening te brengen, waarbij betalingen allereerst zullen strekken tot voldoening van de verschuldigde kosten, vervolgens tot voldoening van de verschuldigde rente en pas daarna tot voldoening van de oudste openstaande factuur.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{color: 'var(--eqdent-green-dark)'}}>Artikel 8: Klachten</h2>
            <p className="mb-4">8.1 De Cliënt is verplicht om de door de Arts te verrichten prestatie en/of te leveren middelen onverwijld te keuren op direct constateerbare gebreken en/of onvolkomenheden. De Cliënt dient klachten over de verrichte diensten binnen 14 dagen nadat de werkzaamheden zijn beëindigd of nadat de gebreken en/of onvolkomenheid aan de Cliënt kenbaar is geworden, schriftelijk aan de Arts te berichten, bij overschrijding van welke termijn elke aanspraak jegens de Arts ter zake enig(e) gebrek en/of onvolkomenheid vervalt.</p>
            <p className="mb-4">8.2 De Arts wordt altijd voldoende mogelijkheid geboden om de klacht te onderzoeken en eventueel te herstellen. Cliënt verleent daarbij volledige medewerking. Indien Cliënt deze mogelijkheid niet biedt, vervalt iedere aanspraak van Cliënt op enige (schade)vergoeding, herstel of vervanging.</p>
            <p className="mb-4">8.3 Indien de Arts de klacht over de verrichte prestatie gegrond bevindt, heeft de Arts te allen tijde het recht om: (i) indien dat nog mogelijk is, deze prestatie alsnog binnen een redelijke termijn op de juiste wijze te verrichten, of (ii) het door de Cliënt verschuldigde bedrag te crediteren, zulks ter keuze van de Arts.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{color: 'var(--eqdent-green-dark)'}}>Artikel 9: Aansprakelijkheid</h2>
            <p className="mb-4">9.1 Elke aanspraak tot schadevergoeding jegens de Arts en de aan de Arts verbonden personen is uitgesloten tenzij vaststaat dat deze schade te wijten is aan opzet of grove schuld van de Arts en de aan de Arts verbonden personen. Uitsluitend de Arts kan alsdan worden aangesproken.</p>
            <p className="mb-4">9.2 Aansprakelijkheid van de Arts is te allen tijde beperkt tot het bedrag waarvoor de Arts in voorkomende schadegevallen verzekerd is. Op eerste verzoek van de Cliënt zal de Arts een afschrift van de polisvoorwaarden en het polis blad van deze verzekering aan de Cliënt verstrekken. Vergoeding van indirecte schade is te allen tijd uitgesloten, waaronder in ieder geval maar niet uitsluitend begrepen gevolgschade, gederfde winst, gemiste besparingen en schade door (bedrijfs-)stagnatie en dergelijke. Indien en voor zover om welke reden dan ook geen uitkering krachtens voornoemde aansprakelijkheidsverzekering mocht plaatsvinden, is de aansprakelijkheid van de Arts beperkt tot het totale bedrag dat door Cliënt uit hoofde van de Overeenkomst aan de Arts is betaald.</p>
            <p className="mb-4">9.3 Ter zake de onder dit artikel genoemde aansprakelijkheid komt slechts de Cliënt een vorderingsrecht toe jegens de Arts.</p>
            <p className="mb-4">9.4 De Cliënt vrijwaart de Arts en de aan hem verbonden personen tegen vorderingen van derden, die stellen schade te hebben geleden door of verband houdende met de door de Arts in opdracht van de Cliënt verrichte werkzaamheden, dan wel schade (als gevolg van) het gebruik van, door of namens Cliënt aangeleverde informatie.</p>
            <p className="mb-4">9.5 De Arts sluit, tenzij sprake is van opzet en/of grove schuld van de Arts, iedere aansprakelijkheid uit voor schade ten gevolge van de verstrekte diergeneeskundige adviezen en toediening van diergeneesmiddelen door Cliënt zelf en ter zake toediening van diergeneesmiddelen in opdracht van derden, waaronder begrepen toediening in opdracht van overheidsinstanties alsmede letsel en/of schade door de toediening van deze middelen, de eventuele bijwerkingen daarvan en onzorgvuldigheden bij de vervulling van de daarvoor geldende administratieve verplichtingen en daarmee samenhangende bewijsproblemen.</p>
            <p className="mb-4">9.6 Voorts sluit de Arts iedere aansprakelijkheid uit voor schade welke geheel dan wel gedeeltelijk het gevolg is van het handelen of nalaten van de door de Cliënt ingeschakelde hulppersonen (waaronder maar niet beperkt tot grooms).</p>
            <p className="mb-4">9.7 De Arts aanvaardt geen aansprakelijkheid voor schade die ontstaat door dat de geleverde diensten en/of middelen niet volgens de geldende (wettelijke)voorschriften en/of Europese normeringen worden toegepast. Cliënt dient voorafgaand aan het tot stand komen van de Overeenkomst zelf te controleren of de diensten en/of middelen voldoen aan de geldende (wettelijke)voorschriften en dat deze op correcte wijze kunnen worden toegepast.</p>
            <p className="mb-4">9.8 Een aanspraak op schadevergoeding vervalt in ieder geval 12 maanden nadat de Cliënt bekend wordt met de schade, welke direct of indirect voortvloeit uit een gebeurtenis of omstandigheid waarvoor de Arts aansprakelijk is of zou kunnen zijn.</p>
            <p className="mb-4">9.9 Naast de Arts kunnen alle aan de Arts verbonden (rechts)personen en alle derden, die bij de uitvoering van enige opdracht door de Arts worden ingeschakeld of in verband daarmee aansprakelijk zijn of kunnen zijn, een beroep doen op alle bepalingen in deze algemene voorwaarden. Al hetgeen in deze algemene voorwaarden ten behoeve van de Arts is bedongen, geldt als een jegens hen onherroepelijk en om niet gemaakt derdenbeding in de zin van artikel 6:253 BW.</p>
            <p className="mb-4">9.10 De Cliënt verklaart door het verlenen van de opdracht aan de Arts, dat hij verzekerd is voor aansprakelijkheid voor schade toegebracht door de Patiënt.</p>
            <p className="mb-4">9.11 Het sluiten van een Overeenkomst en/of het verrichten van diergeneeskundige behandelingen en/of het in het kader daarvan leveren en/of toedienen van middelen en/of het geven van diergeneeskundige adviezen en diensten, laat geheel onverlet de risicoaansprakelijkheid van Cliënt en/of derden voor door de Patiënt aangerichte schade in de zin van art. 6:179 BW.</p>
            <p className="mb-4">9.12 De Cliënt verklaart door het verlenen van de opdracht aan de Arts dat de Patiënt volledig verzekerd is, tegen eventuele (arbeids-)ongeschiktheid alsmede tegen elk onverhoopt risico van waardevermindering geheel of gedeeltelijk veroorzaakt door elk handelen of nalaten van de Arts en alle personen werkzaam voor de Arts dan wel enige andere oorzaak. Indien de Patiënt niet is verzekerd, dan laat dit de aansprakelijkheidsbeperkingen uit deze Algemene Voorwaarden zijdens de Arts onverlet.</p>
            <p className="mb-4">9.13 De Arts die informatie verstrekt over de invoer van dieren in Nederland en/of uitvoer van dieren naar landen buiten Nederland en daarbij geldende in- en/of exportvoorschriften verleent slechts onverschuldigde bijstand, waarbij een succesvolle invoer of uitvoer op geen enkele wijze wordt gegarandeerd en waarbij de Arts, tenzij sprake is van opzet en/of grove schuld van de Arts, niet aansprakelijk is voor enige schade en/of kosten van welke aard dan ook verband houdend met de betreffende (pogingen tot) invoer of uitvoer van dieren.</p>
            <p className="mb-4">9.14 Indien de Cliënt niet de eigenaar van de Patiënt is, staat deze ervoor in dat de eigenaar toestemming heeft verleend voor het uitvoeren van de werkzaamheden door de Arts en de artikelen 9.1 t/m 9.14 ook jegens de eigenaar kunnen worden ingeroepen.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{color: 'var(--eqdent-green-dark)'}}>Artikel 10. Keuring</h2>
            <p className="mb-4">10.1 Indien er sprake is van een (aankoop) keuring, dan gelden naast deze Algemene Voorwaarden tevens de op het keuringsrapport afgedrukte bepalingen.</p>
            <p className="mb-4">10.2 De Arts is niet aansprakelijk voor enige schade – vermogens- en gevolgschade daaronder uitdrukkelijk begrepen – veroorzaakt door het uitvoeren van de keuring dan wel door onjuistheden en onvolledigheden in het opstellen van het keuringsrapport tenzij vaststaat dat deze schade te wijten is aan opzet of grove schuld van de Arts.</p>
            <p className="mb-4">10.3 Ter zake de onder lid 1 genoemde aansprakelijkheid komt slechts de Cliënt een vorderingsrecht toe jegens de Arts; anderen dan de Cliënt kunnen aan het keuringsrapport geen enkel recht op schadevergoeding ontlenen.</p>
            <p className="mb-4">10.4 De op het keuringsrapport afgedrukte bedingen zijn ook van toepassing indien de Cliënt het keuringsrapport niet ondertekent maar niettemin het keuringsrapport in ontvangst neemt.</p>
            <p className="mb-4">10.5 Indien de Cliënt niet de eigenaar van de Patiënt is, staat deze ervoor in dat de eigenaar toestemming heeft verleend voor het uitvoeren van de diergeneeskundige keuring en de onderhavige bepalingen ook jegens de eigenaar kunnen worden ingeroepen.</p>
            <p className="mb-4">10.6 Indien de Cliënt en/of derden menen dat de gezondheidstoestand van de Patiënt ten tijde van de onderhavige keuring niet overeenkomt met hetgeen in het keuringsrapport is vermeld, dienen zij zulks op straffe van verval van ieder vorderingsrecht jegens de Arts binnen bekwame tijd schriftelijk te melden aan hun wederpartij (bij bijvoorbeeld de koopovereenkomst) en deze tot vergoeding van schade aan te spreken, onder gelijktijdige verstrekking van een afschrift van deze melding aan de Arts.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{color: 'var(--eqdent-green-dark)'}}>Artikel 11: Eigendom</h2>
            <p className="mb-4">11.1 De Arts behoudt te allen tijde de eigendom van afschriften, bescheiden en andere informatiedragers zoals bijvoorbeeld röntgenfoto's die betrekking hebben op de behandelde Patiënt. De Arts zal deze bescheiden gedurende vijf (5) jaar bewaren. De Cliënt kan op verzoek tegen een vergoeding van de kostprijs afschriften krijgen van deze informatie(dragers) en/of andere bescheiden.</p>
            <p className="mb-4">11.2 Consumenten hebben het recht op afschrift van medische gegevens en röntgenfoto's tegen vergoeding van redelijke kosten.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{color: 'var(--eqdent-green-dark)'}}>Artikel 12: Bijzondere bepalingen</h2>
            <p className="mb-4">12.1 Indien de behandeling van de Patiënt daartoe aanleiding geeft heeft de Dierenartsenpraktijk het recht om aan een ieder, zo nodig ook aan de Cliënt, de toegang tot de stallen of een andere locatie, waar de behandeling plaatsvindt, te ontzeggen en/of andere voorwaarden te geven die hij noodzakelijk acht voor de behandeling. De Cliënt is gehouden hieraan gehoor te geven.</p>
            <p className="mb-4">12.2 De Arts heeft het recht om (onderdelen van) de Patiënt of van de Patiënt afkomstige stoffen te gebruiken voor statistisch en/of wetenschappelijk onderzoek, ofwel in een publicatie te verwerken, tenzij de Cliënt hiertegen uitdrukkelijke en onoverkomelijke bezwaren kenbaar heeft gemaakt. De Arts zal zo nodig het voornemen om genoemde gegevens te gebruiken voor onderzoek voorafgaand melden aan de Cliënt.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{color: 'var(--eqdent-green-dark)'}}>Artikel 13: Toepasselijk recht en geschillenbeslechting</h2>
            <p className="mb-4">13.1 Op alle Overeenkomsten (waaronder begrepen keuringsovereenkomsten) tussen de Arts en de Cliënt is uitsluitend Nederlands recht van toepassing.</p>
            <p className="mb-4">13.2 Alle geschillen die voorvloeien uit, dan wel verband houden met de rechtsverhouding tussen de Arts en Cliënt zullen bij uitsluiting worden voorgelegd aan de bevoegde rechter in het arrondissement waarbinnen de Arts gevestigd is, tenzij bepalingen van dwingend recht anders voorschrijven.</p>
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