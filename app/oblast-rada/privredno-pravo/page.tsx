"use client"

import { Building2 } from "lucide-react"
import { PracticeAreaLayout } from "@/components/practice-area-layout"

export default function PrivrednoPravoPage() {
  return (
    <PracticeAreaLayout
      title={{
        sr: "Privredno pravo",
        en: "Commercial Law",
      }}
      subtitle={{
        sr: "Oblast rada",
        en: "Practice Area",
      }}
      description={{
        sr: "Pravna podrška privrednim društvima i preduzetnicima u svakodnevnom poslovanju, ugovorima i sporovima.",
        en: "Legal support for companies and entrepreneurs in daily operations, contracts, and disputes.",
      }}
      icon={<Building2 className="h-8 w-8" />}
      content={{
        sr: (
          <>
            <h2>Podrška tokom celog poslovnog ciklusa</h2>
            <p>
              Savetujemo klijente od osnivanja, preko redovnog poslovanja, do reorganizacije i rešavanja sporova. Cilj je da pravni rizici budu pod kontrolom, a poslovne odluke pravno održive.
            </p>

            <h2>Osnivanje i korporativne promene</h2>
            <ul>
              <li>osnivanje društava i registracija kod nadležnih organa</li>
              <li>izmene osnivačkih akata i korporativnih odluka</li>
              <li>statusne promene, prenos udela i promene upravljanja</li>
              <li>interni akti i usklađivanje korporativne dokumentacije</li>
            </ul>

            <h2>Privredni ugovori</h2>
            <p>
              Pripremamo, proveravamo i pregovaramo ugovore koji su ključni za poslovanje, sa jasnim mehanizmima zaštite klijenta.
            </p>
            <ul>
              <li>ugovori o prodaji robe i pružanju usluga</li>
              <li>ugovori o saradnji, distribuciji i zastupanju</li>
              <li>ugovori o poverljivosti, licenci i intelektualnoj svojini</li>
              <li>instrumenti obezbeđenja potraživanja</li>
            </ul>

            <h2>Naplata i privredni sporovi</h2>
            <ul>
              <li>opomene, pregovori i vansudska naplata</li>
              <li>sastavljanje tužbi i zastupanje pred privrednim sudovima</li>
              <li>sporovi između članova društva i menadžmenta</li>
              <li>izvršni postupci i naplata po pravnosnažnim odlukama</li>
            </ul>

            <h2>Compliance i prevencija rizika</h2>
            <p>
              Preventivni pristup štedi vreme i troškove. Pomažemo da poslovanje bude usklađeno sa propisima i internim pravilima.
            </p>
            <ul>
              <li>pravna revizija ugovora i poslovnih procesa</li>
              <li>usaglašenost sa regulatornim zahtevima</li>
              <li>izrada internih politika i procedura</li>
            </ul>

            <h2>Zašto klijenti biraju ovakav pristup</h2>
            <p>
              Fokus je na praktičnim rešenjima, brzoj reakciji i jasnoj komunikaciji. Klijent unapred zna pravne rizike, opcije i očekivani tok postupka.
            </p>
          </>
        ),
        en: (
          <>
            <h2>Support across the full business lifecycle</h2>
            <p>
              We advise clients from formation to daily operations, reorganization, and dispute resolution. The goal is to keep legal risk controlled and business decisions legally sustainable.
            </p>

            <h2>Formation and corporate changes</h2>
            <ul>
              <li>company incorporation and registration</li>
              <li>amendments to founding documents and corporate decisions</li>
              <li>status changes, share transfers, and governance updates</li>
              <li>internal acts and corporate document alignment</li>
            </ul>

            <h2>Commercial contracts</h2>
            <p>
              We draft, review, and negotiate contracts essential for your business, with clear protective mechanisms.
            </p>
            <ul>
              <li>sale of goods and service agreements</li>
              <li>cooperation, distribution, and agency agreements</li>
              <li>confidentiality, licensing, and IP-related contracts</li>
              <li>security instruments for receivables</li>
            </ul>

            <h2>Debt collection and commercial disputes</h2>
            <ul>
              <li>formal notices, negotiation, and out-of-court collection</li>
              <li>claims drafting and representation before commercial courts</li>
              <li>disputes between shareholders and management</li>
              <li>enforcement of final decisions and collection</li>
            </ul>

            <h2>Compliance and risk prevention</h2>
            <p>
              A preventive approach saves time and cost. We help keep operations aligned with legal and internal requirements.
            </p>
            <ul>
              <li>legal review of contracts and business processes</li>
              <li>alignment with regulatory obligations</li>
              <li>internal policies and procedure drafting</li>
            </ul>

            <h2>Why this approach works</h2>
            <p>
              We prioritize practical solutions, timely action, and clear communication. You get a transparent view of risks, options, and expected procedural steps.
            </p>
          </>
        ),
      }}
    />
  )
}
