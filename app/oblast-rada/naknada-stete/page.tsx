"use client"

import { Scale } from "lucide-react"
import { PracticeAreaLayout } from "@/components/practice-area-layout"

export default function NaknadaStetePage() {
  return (
    <PracticeAreaLayout
      title={{
        sr: "Naknada štete",
        en: "Compensation Claims",
      }}
      subtitle={{
        sr: "Oblast rada",
        en: "Practice Area",
      }}
      description={{
        sr: "Zastupamo fizička i pravna lica u postupcima naknade materijalne i nematerijalne štete, u pregovorima i pred sudom.",
        en: "We represent individuals and companies in compensation claims for material and non-material damage, in negotiations and before courts.",
      }}
      icon={<Scale className="h-8 w-8" />}
      content={{
        sr: (
          <>
            <h2>Kada imate pravo na naknadu štete?</h2>
            <p>
              Pravo na naknadu postoji kada je nastala šteta, kada postoji odgovorno lice i kada se može dokazati uzročna veza između štetnog događaja i posledice. U praksi to najčešće obuhvata saobraćajne nezgode, povrede na radu, odgovornost zbog opasne stvari ili delatnosti, kao i štetu nastalu povredom ugovora.
            </p>

            <h2>Vrste štete</h2>
            <h3>Materijalna šteta</h3>
            <ul>
              <li>troškovi lečenja, rehabilitacije i prevoza</li>
              <li>izgubljena zarada i umanjena radna sposobnost</li>
              <li>šteta na vozilu, stanu, opremi i drugim stvarima</li>
              <li>izmakla korist u poslovnim odnosima</li>
            </ul>

            <h3>Nematerijalna šteta</h3>
            <ul>
              <li>fizički bol i pretrpljeni strah</li>
              <li>duševni bol zbog umanjenja životne aktivnosti</li>
              <li>duševni bol zbog naruženosti</li>
              <li>duševni bol zbog smrti ili teškog invaliditeta bliskog lica</li>
            </ul>

            <h2>Kako vodimo postupak</h2>
            <h3>1. Procena slučaja</h3>
            <p>
              Analiziramo dokumentaciju, medicinske izveštaje i okolnosti događaja, zatim dajemo realnu procenu osnova i visine potraživanja.
            </p>

            <h3>2. Vansudski pregovori</h3>
            <p>
              Pripremamo odštetni zahtev i vodimo pregovore sa osiguravajućim društvom ili drugim odgovornim licem, sa ciljem brzog i povoljnog poravnanja.
            </p>

            <h3>3. Sudska zaštita</h3>
            <p>
              Ako poravnanje nije moguće, vodimo parnični postupak: podnošenje tužbe, izvođenje dokaza, veštačenja, žalbeni postupak i naplata dosuđene naknade.
            </p>

            <h2>Dokumentacija koja je najčešće potrebna</h2>
            <ul>
              <li>zapisnik policije, prijava događaja ili druga službena evidencija</li>
              <li>medicinska dokumentacija i izveštaji o lečenju</li>
              <li>računi i troškovi nastali zbog štetnog događaja</li>
              <li>fotografije, izjave svedoka i druga dokazna građa</li>
              <li>korespondencija sa osiguravajućim društvom</li>
            </ul>

            <h2>Rokovi</h2>
            <p>
              Rokovi zastarelosti su ključni. Uobičajeno važi subjektivni rok od 3 godine od saznanja za štetu i štetnika i objektivni rok od 5 godina od nastanka štete, uz posebna pravila za štetu nastalu krivičnim delom.
            </p>

            <h2>Zašto klijenti biraju našu kancelariju</h2>
            <ul>
              <li>precizna procena predmeta i jasna strategija</li>
              <li>iskustvo u pregovorima sa osiguravajućim društvima</li>
              <li>potpuno zastupanje od zahteva do naplate</li>
              <li>transparentna komunikacija tokom celog postupka</li>
            </ul>
          </>
        ),
        en: (
          <>
            <h2>When do you have the right to compensation?</h2>
            <p>
              You may claim compensation when damage has occurred, a liable party exists, and a causal link can be proven between the harmful event and the consequence. In practice, this includes traffic accidents, workplace injuries, strict liability cases, and breach-of-contract damages.
            </p>

            <h2>Types of damage</h2>
            <h3>Material damage</h3>
            <ul>
              <li>medical treatment, rehabilitation, and transport costs</li>
              <li>lost earnings and reduced working capacity</li>
              <li>damage to vehicles, property, equipment, and other assets</li>
              <li>loss of profit in business relationships</li>
            </ul>

            <h3>Non-material damage</h3>
            <ul>
              <li>physical pain and fear</li>
              <li>mental suffering due to reduced life activity</li>
              <li>mental suffering due to disfigurement</li>
              <li>mental suffering due to death or severe disability of a close relative</li>
            </ul>

            <h2>How we handle the case</h2>
            <h3>1. Case assessment</h3>
            <p>
              We review documents, medical records, and the facts of the event, then provide a realistic assessment of legal grounds and claim value.
            </p>

            <h3>2. Out-of-court negotiations</h3>
            <p>
              We prepare the compensation claim and negotiate with insurers or other liable parties, aiming for an efficient and fair settlement.
            </p>

            <h3>3. Court proceedings</h3>
            <p>
              If settlement is not possible, we conduct civil litigation: filing the lawsuit, evidence, expert opinions, appeals, and enforcement of payment.
            </p>

            <h2>Documents commonly required</h2>
            <ul>
              <li>police report, incident record, or official report</li>
              <li>medical records and treatment documentation</li>
              <li>invoices and receipts of damage-related costs</li>
              <li>photos, witness statements, and other evidence</li>
              <li>correspondence with the insurance company</li>
            </ul>

            <h2>Time limits</h2>
            <p>
              Limitation periods are critical. A common rule is 3 years from learning about the damage and liable person, and 5 years from occurrence of damage, with special rules for damage caused by criminal offenses.
            </p>

            <h2>Why clients choose our office</h2>
            <ul>
              <li>clear legal analysis and practical strategy</li>
              <li>strong negotiation experience with insurers</li>
              <li>full representation from claim to collection</li>
              <li>transparent communication throughout the process</li>
            </ul>
          </>
        ),
      }}
    />
  )
}
