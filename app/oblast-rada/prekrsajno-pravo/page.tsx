"use client"

import { Gavel } from "lucide-react"
import { PracticeAreaLayout } from "@/components/practice-area-layout"

export default function PrekrsajnoPravoPage() {
  return (
    <PracticeAreaLayout
      title={{
        sr: "Prekršajno pravo",
        en: "Misdemeanor Law",
      }}
      subtitle={{
        sr: "Oblast rada",
        en: "Practice Area",
      }}
      description={{
        sr: "Pružamo odbranu i pravno savetovanje u prekršajnim postupcima pred nadležnim organima i sudovima.",
        en: "We provide defense and legal counsel in misdemeanor proceedings before competent authorities and courts.",
      }}
      icon={<Gavel className="h-8 w-8" />}
      content={{
        sr: (
          <>
            <h2>U kojim situacijama pomažemo</h2>
            <p>
              Zastupamo klijente u postupcima koji mogu imati ozbiljne posledice: novčane kazne, zaštitne mere, kaznene poene i zabrane. Posebno vodimo računa o rokovima, zakonitosti postupanja organa i kvalitetu dokaznog postupka.
            </p>

            <h2>Najčešće vrste prekršaja</h2>
            <ul>
              <li>saobraćajni prekršaji i mere vezane za vozačku dozvolu</li>
              <li>prekršaji protiv javnog reda i mira</li>
              <li>prekršaji iz oblasti privrednog i komunalnog poslovanja</li>
              <li>inspekcijski, carinski i drugi specifični prekršaji</li>
            </ul>

            <h2>Kako radimo na predmetu</h2>
            <h3>1. Analiza predmeta</h3>
            <p>
              Pregledamo zapisnike, rešenja, službene beleške i ostalu dokumentaciju. Utvrđujemo da li postoje procesni propusti ili nedostaci u dokazima.
            </p>

            <h3>2. Strategija odbrane</h3>
            <p>
              Pripremamo jasnu i realnu strategiju: osporavanje činjenica, predlaganje dokaza, ukazivanje na olakšavajuće okolnosti i traženje blaže sankcije kada je to opravdano.
            </p>

            <h3>3. Zastupanje pred sudom</h3>
            <p>
              Zastupamo klijenta tokom celog postupka, uključujući glavne pretrese, podnošenje pravnih lekova i praćenje izvršenja odluka.
            </p>

            <h2>Prava okrivljenog</h2>
            <ul>
              <li>pravo na odbranu i branioca</li>
              <li>pravo da se izjasni o navodima i dokazima</li>
              <li>pravo da predlaže dokaze u svoju korist</li>
              <li>pravo na pravni lek protiv odluke</li>
            </ul>

            <h2>Zašto je stručna odbrana važna</h2>
            <p>
              U prekršajnim postupcima i manje greške mogu imati dugoročne posledice. Pravovremena i stručno postavljena odbrana često značajno utiče na krajnji ishod predmeta.
            </p>
          </>
        ),
        en: (
          <>
            <h2>When we can help</h2>
            <p>
              We represent clients in proceedings that may lead to serious consequences: fines, protective measures, penalty points, and driving restrictions. Our focus is on procedural legality, deadlines, and quality of evidence.
            </p>

            <h2>Most common misdemeanor cases</h2>
            <ul>
              <li>traffic offenses and driver-license related measures</li>
              <li>public order misdemeanors</li>
              <li>business and municipal compliance offenses</li>
              <li>inspection, customs, and other specific offenses</li>
            </ul>

            <h2>How we handle your case</h2>
            <h3>1. Case review</h3>
            <p>
              We examine records, decisions, and supporting documentation to identify procedural errors and evidentiary weaknesses.
            </p>

            <h3>2. Defense strategy</h3>
            <p>
              We prepare a practical strategy: contesting facts where justified, proposing evidence, highlighting mitigating circumstances, and seeking proportionate outcomes.
            </p>

            <h3>3. Court representation</h3>
            <p>
              We represent you throughout the process, including hearings, legal remedies, and follow-up on enforcement.
            </p>

            <h2>Rights of the defendant</h2>
            <ul>
              <li>right to defense and legal counsel</li>
              <li>right to respond to allegations and evidence</li>
              <li>right to propose evidence in your favor</li>
              <li>right to appeal against decisions</li>
            </ul>

            <h2>Why legal defense matters</h2>
            <p>
              In misdemeanor matters, small procedural details can decide the outcome. Timely and well-structured defense can significantly improve your position.
            </p>
          </>
        ),
      }}
    />
  )
}
