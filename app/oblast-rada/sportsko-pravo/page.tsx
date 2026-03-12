"use client"

import { Trophy } from "lucide-react"
import { PracticeAreaLayout } from "@/components/practice-area-layout"

export default function SportskoPravoPage() {
  return (
    <PracticeAreaLayout
      title={{
        sr: "Sportsko pravo",
        en: "Sports Law",
      }}
      subtitle={{
        sr: "Oblast rada",
        en: "Practice Area",
      }}
      description={{
        sr: "Pružamo pravnu pomoć i zastupanje u svim pitanjima iz oblasti sportskog prava.",
        en: "Representation of athletes, clubs, and sports organizations in contractual, disciplinary, and arbitration matters.",
      }}
      icon={<Trophy className="h-8 w-8" />}
      content={{
        sr: (
          <>
            <h2>Sportsko pravo</h2>
            <p>
              Sportsko pravo predstavlja specifičnu i dinamičnu oblast prava koja obuhvata pravne odnose nastale u vezi sa sportskim aktivnostima, sportskim organizacijama i učesnicima u sportu.
            </p>
            <p>
              Profesionalni i amaterski sport podrazumevaju brojna ugovorna, disciplinska i statusna pitanja, zbog čega je stručno pravno savetovanje ključno za zaštitu prava sportista, klubova i drugih subjekata u sportu.
            </p>

            <h2>Pravna podrška sportistima, klubovima i organizacijama</h2>
            <p>Zastupamo:</p>
            <ul>
              <li>profesionalne i amaterske sportiste</li>
              <li>sportske klubove i saveze</li>
              <li>trenere, sportske radnike i druga lica angažovana u sportu</li>
            </ul>
            <p>
              Pravna pomoć obuhvata savetovanje i zastupanje u vezi sa pravima i obavezama koje proizlaze iz sportskih aktivnosti, kao i zaštitu interesa klijenata u sporovima pred nadležnim organima.
            </p>

            <h2>Disciplinski i regulatorni postupci</h2>
            <p>
              Zastupamo klijente u disciplinskim i statusnim postupcima pred sportskim savezima, ligama i drugim nadležnim sportskim organima, uključujući postupke zbog povrede sportskih pravila, disciplinskih prekršaja i sporove u vezi sa registracijom i statusom sportista.
            </p>

            <h2>Arbitraža i sportski sporovi</h2>
            <p>
              Kancelarija pruža zastupanje u postupcima arbitraže i drugih alternativnih načina rešavanja sporova u sportu, u skladu sa pravilima sportskih saveza i važećim propisima.
            </p>
            <p>
              Posebno iskustvo imamo u postupcima pred sportskim arbitražama i disciplinskim organima.
            </p>

            <h2>Naš pristup</h2>
            <p>
              Svaki predmet iz oblasti sportskog prava sagledavamo kroz prizmu specifičnosti sportskog sistema i interesa klijenata. Cilj našeg rada je pravna sigurnost, efikasna zaštita prava i dugoročna stabilnost sportskih odnosa.
            </p>
          </>
        ),
        en: (
          <>
            <h2>Legal support within the sports framework</h2>
            <p>
              Sports matters involve short deadlines and specialized rules. We support athletes, clubs, and managers with practical guidance under domestic and international sports regulations.
            </p>

            <h2>Sports contracts</h2>
            <ul>
              <li>professional contracts for athletes and coaches</li>
              <li>transfers, loans, and mutual terminations</li>
              <li>representation and agency agreements</li>
              <li>sponsorship, marketing, and commercial contracts</li>
            </ul>

            <h2>Disciplinary and regulatory proceedings</h2>
            <p>
              We represent clients before disciplinary bodies of clubs and federations, including appeals.
            </p>
            <ul>
              <li>disciplinary rule violations</li>
              <li>registration and eligibility disputes</li>
              <li>licensing and athlete-status proceedings</li>
            </ul>

            <h2>Arbitration and sports disputes</h2>
            <ul>
              <li>out-of-court dispute resolution before sports bodies</li>
              <li>representation in arbitration proceedings</li>
              <li>submissions drafting and settlement negotiations</li>
            </ul>

            <h2>Support for sports organizations</h2>
            <ul>
              <li>legal structuring of clubs and associations</li>
              <li>internal rules, codes, and document alignment</li>
              <li>legal support in event organization</li>
              <li>contractual and reputational risk management</li>
            </ul>

            <h2>Our working approach</h2>
            <p>
              In sports, speed and precision are critical. We work with clear strategy and practical legal solutions that protect both professional and business interests.
            </p>
          </>
        ),
      }}
    />
  )
}
