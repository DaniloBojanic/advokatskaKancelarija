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
        sr: "Pravna podrška pri kupoprodaji, zakupu, proveri dokumentacije i rešavanju sporova u vezi sa nekretninama.",
        en: "Legal support in purchase, lease, due diligence, and dispute resolution related to real estate.",
      }}
      icon={<Home className="h-8 w-8" />}
      content={{
        sr: (
          <>
            <h2>Sigurna kupovina i prodaja nekretnina</h2>
            <p>
              Nekretnine su najčešće finansijski najvažnije transakcije. Pomažemo da postupak bude pravno siguran, dokumentacija uredna i rizici prepoznati pre zaključenja ugovora.
            </p>

            <h2>Pravna provera pre ugovora</h2>
            <ul>
              <li>provera vlasništva i tereta na nepokretnosti</li>
              <li>analiza dostupne dokumentacije i istorije upisa</li>
              <li>procena ugovornih i faktičkih rizika</li>
              <li>provera usaglašenosti podataka pre overe</li>
            </ul>

            <h2>Ugovori i pregovori</h2>
            <ul>
              <li>ugovori o kupoprodaji, predugovori i aneksi</li>
              <li>ugovori o zakupu stambenog i poslovnog prostora</li>
              <li>ugovori o poklonu i drugi imovinskopravni ugovori</li>
              <li>pregovori o ključnim uslovima i zaštitnim klauzulama</li>
            </ul>

            <h2>Postupci nakon zaključenja ugovora</h2>
            <p>
              Pratimo klijenta i nakon potpisivanja: od overe i podnošenja zahteva, do završetka formalnih koraka koji obezbeđuju pravnu sigurnost transakcije.
            </p>

            <h2>Sporovi u vezi sa nekretninama</h2>
            <ul>
              <li>sporovi iz ugovora o prometu nekretnina</li>
              <li>sporovi oko prava svojine, poseda i korišćenja</li>
              <li>sporovi između suvlasnika i korisnika</li>
              <li>zahtevi za naknadu štete u vezi sa nekretninom</li>
            </ul>

            <h2>Zašto klijenti biraju ovu podršku</h2>
            <p>
              Dobra priprema pre transakcije najčešće sprečava skupe sporove kasnije. Radimo precizno, transparentno i sa fokusom na zaštitu interesa klijenta u svakoj fazi postupka.
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
