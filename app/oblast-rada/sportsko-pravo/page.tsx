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
        sr: "Zastupanje sportista, klubova i sportskih organizacija u ugovornim, disciplinskim i arbitražnim postupcima.",
        en: "Representation of athletes, clubs, and sports organizations in contractual, disciplinary, and arbitration matters.",
      }}
      icon={<Trophy className="h-8 w-8" />}
      content={{
        sr: (
          <>
            <h2>Pravna podrška u sportskom sistemu</h2>
            <p>
              Sportski odnosi imaju kratke rokove i specifična pravila. Pružamo pravnu podršku sportistima, klubovima i menadžerima uz razumevanje domaćih i međunarodnih sportskih propisa.
            </p>

            <h2>Ugovori u sportu</h2>
            <ul>
              <li>profesionalni ugovori sportista i trenera</li>
              <li>transferi, pozajmice i sporazumni raskidi</li>
              <li>ugovori o zastupanju i posredovanju</li>
              <li>sponzorski, marketinški i komercijalni ugovori</li>
            </ul>

            <h2>Disciplinski i regulatorni postupci</h2>
            <p>
              Zastupamo klijente pred disciplinskim organima klubova i saveza, kao i u žalbenim postupcima.
            </p>
            <ul>
              <li>povrede disciplinskih pravila</li>
              <li>sporovi oko registracije i prava nastupa</li>
              <li>postupci vezani za licence i status sportista</li>
            </ul>

            <h2>Arbitraža i sportski sporovi</h2>
            <ul>
              <li>vansudsko rešavanje sporova pred sportskim telima</li>
              <li>zastupanje u arbitražnim postupcima</li>
              <li>priprema podnesaka i vođenje pregovora o poravnanju</li>
            </ul>

            <h2>Podrška sportskim organizacijama</h2>
            <ul>
              <li>pravna struktura kluba ili udruženja</li>
              <li>interna pravila, kodeksi i usklađivanje dokumenata</li>
              <li>pravna podrška pri organizaciji događaja</li>
              <li>upravljanje ugovornim i reputacionim rizicima</li>
            </ul>

            <h2>Pristup kancelarije</h2>
            <p>
              U sportu su brzina i preciznost ključni. Zato radimo fokusirano, sa jasnom strategijom i praktičnim rešenjima koja štite profesionalni i poslovni interes klijenta.
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
