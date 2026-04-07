"use client"

import { Home } from "lucide-react"
import { PracticeAreaLayout } from "@/components/practice-area-layout"

export default function NekretninePage() {
  return (
    <PracticeAreaLayout
      title={{
        sr: "Nekretnine",
        en: "Real Estate",
      }}
      subtitle={{
        sr: "Oblast rada",
        en: "Practice Area",
      }}
      description={{
        sr: "Sveobuhvatna pravna podrška u prometu i upravljanju nekretninama, uz punu pravnu sigurnost.",
        en: "Legal support in purchase, lease, due diligence, and dispute resolution related to real estate.",
      }}
      icon={<Home className="h-8 w-8" />}
      faqCategories={["real-estate"]}
      content={{
        sr: (
          <>
            <h2>Nekretnine</h2>
            <p>
              Pravni odnosi u vezi sa nekretninama predstavljaju jednu od najosetljivijih i najznačajnijih oblasti prava, kako za fizička, tako i za pravna lica.
            </p>
            <p>
              Kancelarija pruža sveobuhvatnu pravnu pomoć u svim pitanjima koja se odnose na nekretnine, sa ciljem zaštite imovinskih interesa klijenata i sprečavanja budućih pravnih sporova.
            </p>

            <h2>Promet nekretnina</h2>
            <p>Pružamo pravnu podršku u postupcima:</p>
            <ul>
              <li>kupovine i prodaje stanova, kuća i poslovnih prostora</li>
              <li>provere pravnog statusa nekretnine</li>
              <li>sastavljanja i pregleda kupoprodajnih ugovora i prateće dokumentacije</li>
              <li>zastupanja pred notarima i drugim nadležnim organima</li>
            </ul>
            <p>
              Poseban akcenat stavljamo na proveru vlasništva, tereta i upisa u katastar nepokretnosti, radi potpune pravne sigurnosti klijenata.
            </p>

            <h2>Ugovorni odnosi i korišćenje nekretnina</h2>
            <p>Zastupamo klijente u vezi sa:</p>
            <ul>
              <li>ugovorima o zakupu i podzakupu</li>
              <li>ugovorima o doživotnom izdržavanju</li>
              <li>ugovorima o poklonu i razmeni nepokretnosti</li>
              <li>pravima službenosti i drugim stvarnopravnim odnosima</li>
            </ul>
            <p>
              Cilj je jasno i precizno uređenje prava i obaveza ugovornih strana i prevencija sporova.
            </p>

            <h2>Legalizacija i upisi u katastar</h2>
            <p>Pružamo pravnu pomoć u postupcima:</p>
            <ul>
              <li>legalizacije i ozakonjenja objekata</li>
              <li>upisa prava svojine i drugih stvarnih prava u katastar</li>
              <li>ispravki i usklađivanja katastarskog stanja sa faktičkim stanjem</li>
            </ul>

            <h2>Sporovi u vezi sa nekretninama</h2>
            <p>
              Zastupamo klijente u sudskim postupcima koji se odnose na utvrđivanje prava svojine, smetanje državine, deobu suvlasništva, raskid ili poništaj ugovora o prometu nekretnina i naknadu štete u vezi sa nekretninama.
            </p>

            <h2>Naš pristup</h2>
            <p>
              Svakom predmetu pristupamo temeljno i odgovorno, uz detaljnu pravnu analizu i jasno savetovanje. Naš cilj je zaštita imovine, pravna sigurnost i efikasno rešavanje svih pitanja u vezi sa nekretninama.
            </p>
          </>
        ),
        en: (
          <>
            <h2>Secure purchase and sale of property</h2>
            <p>
              Real estate transactions are often among the most significant financial decisions. We help ensure legal certainty, clean documentation, and risk control before signing.
            </p>

            <h2>Legal due diligence before contract signing</h2>
            <ul>
              <li>verification of ownership and registered encumbrances</li>
              <li>review of available records and registration history</li>
              <li>assessment of contractual and factual risks</li>
              <li>consistency checks before notarization</li>
            </ul>

            <h2>Contracts and negotiations</h2>
            <ul>
              <li>sale agreements, preliminary contracts, and amendments</li>
              <li>residential and commercial lease agreements</li>
              <li>gift deeds and other property-law contracts</li>
              <li>negotiation of key terms and protective clauses</li>
            </ul>

            <h2>Post-signing legal steps</h2>
            <p>
              We support clients after signing as well: from notarization and filings to completion of formal steps required for full legal security.
            </p>

            <h2>Real estate disputes</h2>
            <ul>
              <li>contract-related property disputes</li>
              <li>ownership, possession, and use-right disputes</li>
              <li>co-ownership and occupancy disputes</li>
              <li>damage claims connected to real estate matters</li>
            </ul>

            <h2>Why clients value this support</h2>
            <p>
              Strong preparation before closing usually prevents expensive disputes later. We work with precision, transparency, and consistent focus on client protection.
            </p>
          </>
        ),
      }}
    />
  )
}
