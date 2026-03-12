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
        sr: "Zastupamo fizička i pravna lica u svim vrstama postupaka naknade štete, pred osiguranjem i sudom.",
        en: "We represent individuals and companies in compensation claims for material and non-material damage, in negotiations and before courts.",
      }}
      icon={<Scale className="h-8 w-8" />}
      content={{
        sr: (
          <>
            <h2>Naknada štete na vozilu nakon saobraćajne nezgode</h2>
            <p>
              U najvećem broju saobraćajnih nezgoda dolazi do oštećenja automobila ili drugih prevoznih sredstava. Lice koje nije odgovorno za nastanak nezgode ima pravo da pretrpljenu štetu na vozilu naplati od osiguravajućeg društva kod kojeg je odgovorno lice imalo zaključen ugovor o obaveznom osiguranju.
            </p>

            <h2>Rok za prijavu saobraćajne nezgode osiguranju</h2>
            <p>
              Učesnik u saobraćajnoj nezgodi, odnosno vlasnik oštećenog vozila, dužan je da osiguravajuće društvo obavesti o nastanku nezgode u roku od 15 dana od dana kada se nezgoda dogodila.
            </p>

            <h2>Procena štete i podnošenje zahteva</h2>
            <p>
              Pre podnošenja zahteva za naknadu štete, neophodno je izvršiti stručnu procenu oštećenja. Procenu vrši ovlašćeni veštak mašinske struke. Procenu može obaviti procenitelj zaposlen u osiguravajućem društvu, ali oštećeni ima pravo i da angažuje nezavisnog procenitelja.
            </p>
            <p>
              Nakon izvršene procene, osiguravajućem društvu se podnosi odštetni zahtev na osnovu kog se sprovodi postupak naplate štete.
            </p>

            <h2>Rokovi za odlučivanje i isplatu</h2>
            <p>
              Osiguravajuće društvo je dužno da u roku od 14 dana od prijema odštetnog zahteva utvrdi osnov i visinu zahteva, dostavi obrazloženu ponudu i izvrši isplatu.
            </p>
            <p>Ako to nije moguće u tom roku, osiguranje je dužno da:</p>
            <ul>
              <li>u roku od 45 dana odluči o zahtevu za štetu na stvarima</li>
              <li>u roku od 90 dana odluči o zahtevu za štetu na licima</li>
            </ul>
            <p>
              Po utvrđivanju osnova i visine štete, osiguranje je dužno da u dodatnom roku od 14 dana izvrši isplatu naknade.
            </p>

            <h2>Šta ako osiguranje odbije zahtev?</h2>
            <p>
              Ako osiguravajuće društvo odbije odštetni zahtev ili ne postupi u zakonom propisanim rokovima, oštećeni ima pravo da svoja potraživanja ostvari putem sudskog postupka pred nadležnim sudom.
            </p>

            <h2>Naknada štete zbog pretrpljenih povreda</h2>
            <p>
              Saobraćajne nezgode često imaju za posledicu telesne povrede, lake ili teške, sa privremenim ili trajnim posledicama po zdravlje i kvalitet života. U takvim situacijama zaštita prava povređenih zahteva stručan i sistematičan pravni pristup.
            </p>
            <p>
              Povređeni učesnik nezgode treba da se najkasnije u roku od 24 časa javi zdravstvenoj ustanovi radi pregleda i evidentiranja povreda, jer je pravovremena medicinska dokumentacija ključni dokaz u postupku.
            </p>

            <h2>Osnovi za naknadu zbog povreda</h2>
            <ul>
              <li>fizički bolovi</li>
              <li>pretrpljeni strah</li>
              <li>umanjenje opšte životne aktivnosti</li>
              <li>naruženost</li>
              <li>druge trajne ili privremene posledice</li>
            </ul>
            <p>
              Intenzitet i trajanje bolova i straha procenjuju veštaci medicinske struke, čije mišljenje ima ključnu ulogu pri utvrđivanju visine naknade.
            </p>

            <h2>Naknada štete zbog duševnih bolova</h2>
            <p>
              Povrede zadobijene u saobraćajnoj nezgodi, pored fizičkog bola, mogu dovesti do duševnih bolova usled umanjenja životne aktivnosti i naruženosti, a u najtežim slučajevima i do smrti bliskog lica, što predstavlja poseban osnov za naknadu nematerijalne štete.
            </p>
            <h3>Umanjenje životne aktivnosti</h3>
            <p>
              Postoji kada zbog povrede dođe do trajnog ili dugotrajnog smanjenja sposobnosti funkcionisanja, pa oštećeno lice više ne može da obavlja životne, profesionalne ili rekreativne aktivnosti koje je ranije obavljalo.
            </p>
            <h3>Naruženost</h3>
            <p>
              Naruženost podrazumeva trajnu promenu spoljašnjeg izgleda ili funkcije tela, kao što su vidljivi ožiljci, gubitak zuba ili ekstremiteta i trajni poremećaji kretanja.
            </p>
            <h3>Duševni bolovi zbog smrti bliskog lica</h3>
            <p>
              Pravo na ovu naknadu imaju bračni drug, deca i roditelji preminulog, kao i braća i sestre ukoliko je postojala trajnija zajednica života, kao i lica koja je preminuli izdržavao.
            </p>

            <h2>Ko isplaćuje naknadu?</h2>
            <p>
              Ako je šteta posledica saobraćajne nezgode, naknada se ostvaruje od osiguravajućeg društva kod kojeg je odgovorno lice imalo zaključen ugovor o obaveznom osiguranju, a ne direktno od drugog učesnika nezgode.
            </p>

            <h2>Zašto angažovati advokata</h2>
            <p>
              Angažovanjem advokata obezbeđuje se stručno vođenje postupka, potpuna zaštita prava oštećenog i ostvarivanje maksimalne moguće naknade, bez potrebe da se klijent sam upušta u složene postupke pred osiguravajućim društvima.
            </p>

            <h2>Napomena o visini naknade</h2>
            <p>
              Visina naknade uvek zavisi od okolnosti konkretnog slučaja, medicinske dokumentacije, veštačenja i aktuelne sudske prakse.
            </p>
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
