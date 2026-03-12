"use client"

import { Users } from "lucide-react"
import { PracticeAreaLayout } from "@/components/practice-area-layout"

export default function RadnoPravoPage() {
  return (
    <PracticeAreaLayout
      title={{
        sr: "Radno pravo",
        en: "Labor Law",
      }}
      subtitle={{
        sr: "Oblast rada",
        en: "Practice Area",
      }}
      description={{
        sr: "Savetovanje i zastupanje zaposlenih i poslodavaca u pitanjima radnog odnosa, otkaza i radnih sporova.",
        en: "Counsel and representation for employees and employers in employment, termination, and labor disputes.",
      }}
      icon={<Users className="h-8 w-8" />}
      content={{
        sr: (
          <>
            <h2>Podrška zaposlenima i poslodavcima</h2>
            <p>
              Radni odnosi zahtevaju jasno uređena prava i obaveze. Pružamo pravnu pomoć u preventivi, pregovorima i sporovima, sa ciljem da se problemi reše brzo i pravno održivo.
            </p>

            <h2>Pre zasnivanja i tokom radnog odnosa</h2>
            <ul>
              <li>analiza i izrada ugovora o radu</li>
              <li>pravila rada, interni akti i usklađenost procedura</li>
              <li>tumačenje prava i obaveza zaposlenih i poslodavca</li>
              <li>savetovanje o organizaciji rada i promenama radnog statusa</li>
            </ul>

            <h2>Otkaz i prestanak radnog odnosa</h2>
            <p>
              U postupcima prestanka radnog odnosa važne su forma, rokovi i dokumentacija. Savetujemo i zastupamo obe strane kako bi postupak bio zakonit i pravno siguran.
            </p>
            <ul>
              <li>procena zakonitosti otkaza i postupanja poslodavca</li>
              <li>izrada izjašnjenja, upozorenja i drugih akata</li>
              <li>pregovori o sporazumnom prestanku radnog odnosa</li>
              <li>zaštita prava zaposlenog kod osporavanja otkaza</li>
            </ul>

            <h2>Diskriminacija, zlostavljanje i povreda prava</h2>
            <ul>
              <li>pravna analiza i plan zaštite</li>
              <li>zastupanje u internim i sudskim postupcima</li>
              <li>naknada štete zbog povrede prava iz rada</li>
            </ul>

            <h2>Radni sporovi</h2>
            <ul>
              <li>sporovi zbog zarade, naknada i drugih primanja</li>
              <li>sporovi zbog nezakonitog otkaza</li>
              <li>sporovi oko radnog vremena, odmora i drugih prava</li>
              <li>zastupanje u pregovorima, medijaciji i parničnom postupku</li>
            </ul>

            <h2>Praktičan i uravnotežen pristup</h2>
            <p>
              Cilj nam je da zaštitimo interes klijenta uz poštovanje zakona i poslovne realnosti. U svakom predmetu dajemo jasnu procenu rizika, opcija i narednih koraka.
            </p>
          </>
        ),
        en: (
          <>
            <h2>Support for both employees and employers</h2>
            <p>
              Employment relations require clear rights and obligations. We provide preventive advice, negotiation support, and dispute representation with a focus on efficient and legally sound outcomes.
            </p>

            <h2>Before and during employment</h2>
            <ul>
              <li>review and drafting of employment contracts</li>
              <li>work rules, internal acts, and procedure compliance</li>
              <li>guidance on rights and duties of both parties</li>
              <li>advice on workforce changes and employment status matters</li>
            </ul>

            <h2>Termination of employment</h2>
            <p>
              In termination matters, form, deadlines, and documentation are crucial. We advise and represent both sides to ensure legal certainty.
            </p>
            <ul>
              <li>assessment of lawfulness of termination decisions</li>
              <li>drafting responses, notices, and supporting acts</li>
              <li>negotiation of mutual termination arrangements</li>
              <li>protection of employee rights in termination disputes</li>
            </ul>

            <h2>Discrimination, harassment, and rights violations</h2>
            <ul>
              <li>legal assessment and protection strategy</li>
              <li>representation in internal and court proceedings</li>
              <li>damage claims for employment-right violations</li>
            </ul>

            <h2>Labor disputes</h2>
            <ul>
              <li>wage, compensation, and benefits disputes</li>
              <li>unlawful termination disputes</li>
              <li>working-time, leave, and entitlement disputes</li>
              <li>representation in negotiation, mediation, and litigation</li>
            </ul>

            <h2>Practical and balanced approach</h2>
            <p>
              We protect client interests while keeping legal and business realities in view. Each matter includes a clear risk assessment, options, and next steps.
            </p>
          </>
        ),
      }}
    />
  )
}
