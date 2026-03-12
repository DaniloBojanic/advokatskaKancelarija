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
        sr: "Pružamo pravnu pomoć i zastupanje okrivljenih u prekršajnim postupcima pred nadležnim sudovima i organima.",
        en: "We provide defense and legal counsel in misdemeanor proceedings before competent authorities and courts.",
      }}
      icon={<Gavel className="h-8 w-8" />}
      content={{
        sr: (
          <>
            <h2>Prekršajni postupci i pravna zaštita</h2>
            <p>
              Prekršajni postupci su među najčešćim postupcima sa kojima se građani i privredni subjekti susreću u praksi. Iako se često smatraju lakšim oblicima povrede propisa, posledice mogu biti značajne i dugotrajne, finansijski i profesionalno.
            </p>
            <p>
              Kancelarija pruža pravnu pomoć i zastupanje u svim vrstama prekršajnih postupaka pred prekršajnim sudovima i drugim nadležnim organima, sa ciljem zaštite prava okrivljenih i postizanja najpovoljnijeg mogućeg ishoda.
            </p>

            <h2>Zastupanje u prekršajnim postupcima</h2>
            <p>
              Zastupamo klijente u postupcima koji se vode zbog različitih vrsta prekršaja, naročito u oblastima:
            </p>
            <ul>
              <li>saobraćajnih prekršaja</li>
              <li>prekršaja iz oblasti javnog reda i mira</li>
              <li>prekršaja iz oblasti privrede i poslovanja</li>
              <li>prekršaja propisanih posebnim zakonima i podzakonskim aktima</li>
            </ul>
            <p>
              Pravna pomoć obuhvata savetovanje pre pokretanja postupka, sastavljanje podnesaka, izjavljivanje prigovora i žalbi, kao i zastupanje pred sudom tokom celokupnog postupka.
            </p>

            <h2>Zašto je važno angažovati advokata</h2>
            <p>
              Iako angažovanje advokata nije zakonska obaveza, stručno zastupanje često ima presudan značaj za ishod. Advokat obezbeđuje pravilnu primenu zakona, ukazuje na procesne i materijalnopravne nedostatke i brine o potpunoj zaštiti prava okrivljenog.
            </p>
            <p>U prekršajnim postupcima često je moguće:</p>
            <ul>
              <li>ostvariti olakšavajuće okolnosti</li>
              <li>ublažiti ili zameniti izrečenu sankciju</li>
              <li>sprečiti izricanje zaštitnih mera (npr. zabrana upravljanja vozilom)</li>
              <li>dovesti do obustave postupka kada za to postoje zakonski uslovi</li>
            </ul>

            <h2>Sankcije u prekršajnom postupku</h2>
            <p>
              Za prekršaje mogu biti izrečene novčane kazne, opomene, zaštitne mere i druge zakonom predviđene sankcije. Pravovremeno i stručno postupanje u velikom broju slučajeva može značajno uticati na visinu kazne ili na njeno potpuno izostavljanje.
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
