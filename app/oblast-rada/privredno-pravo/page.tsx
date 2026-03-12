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
        sr: "Sveobuhvatna pravna podrška privrednim društvima i preduzetnicima za zakonito i efikasno poslovanje.",
        en: "Legal support for companies and entrepreneurs in daily operations, contracts, and disputes.",
      }}
      icon={<Building2 className="h-8 w-8" />}
      content={{
        sr: (
          <>
            <h2>Privredno pravo</h2>
            <p>
              Privredno pravo obuhvata pravne odnose nastale u poslovanju privrednih subjekata i predstavlja osnov sigurnog i stabilnog poslovnog okruženja.
            </p>
            <p>
              Kancelarija pruža sveobuhvatnu pravnu pomoć pravnim licima i preduzetnicima, sa ciljem zakonitog, sigurnog i efikasnog poslovanja.
            </p>

            <h2>Pravna podrška privrednim subjektima</h2>
            <p>Pružamo kontinuiranu ili pojedinačnu pravnu podršku:</p>
            <ul>
              <li>privrednim društvima</li>
              <li>preduzetnicima</li>
              <li>drugim oblicima organizovanja u skladu sa važećim propisima</li>
            </ul>
            <p>
              Pravna pomoć obuhvata savetovanje u vezi sa svakodnevnim poslovanjem, kao i rešavanje konkretnih pravnih pitanja koja se javljaju tokom rada i razvoja poslovnih subjekata.
            </p>

            <h2>Osnivanje i statusna pitanja</h2>
            <p>Pružamo pravnu pomoć u vezi sa:</p>
            <ul>
              <li>osnivanjem privrednih društava i preduzetnika</li>
              <li>izmenama statusnih podataka</li>
              <li>statusnim promenama (spajanja, pripajanja, podele)</li>
              <li>prestankom rada i likvidacijom privrednih subjekata</li>
            </ul>

            <h2>Privredni ugovori</h2>
            <p>
              Zastupamo klijente u sastavljanju, pregovaranju, tumačenju i raskidu ugovora. Cilj je prevencija sporova i zaštita interesa klijenata kroz jasno definisane ugovorne odnose.
            </p>
            <ul>
              <li>ugovori o prometu robe i usluga</li>
              <li>ugovori o poslovnoj saradnji</li>
              <li>ugovori o zakupu i poslovnim odnosima</li>
              <li>drugi ugovori iz oblasti privrednog prava</li>
            </ul>

            <h2>Naplata i privredni sporovi</h2>
            <p>
              Zastupamo klijente u privrednim i parničnim postupcima pred nadležnim sudovima, kao i u postupcima mirnog rešavanja sporova. Posebno se bavimo sporovima koji proističu iz ugovornih odnosa, naplate potraživanja i odgovornosti u poslovanju.
            </p>

            <h2>Naš pristup</h2>
            <p>
              Svakom klijentu pristupamo individualno, uz detaljnu analizu poslovnog i pravnog konteksta. Naš cilj je pravovremeno prepoznavanje rizika, efikasno rešavanje sporova i dugoročna zaštita poslovnih interesa klijenata.
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
