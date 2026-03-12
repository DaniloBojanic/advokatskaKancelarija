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
        sr: "Pravna pomoć i zastupanje zaposlenih i poslodavaca u svim pitanjima iz oblasti radnog prava.",
        en: "Counsel and representation for employees and employers in employment, termination, and labor disputes.",
      }}
      icon={<Users className="h-8 w-8" />}
      content={{
        sr: (
          <>
            <h2>Radno pravo</h2>
            <p>
              Radno pravo uređuje prava i obaveze zaposlenih i poslodavaca i predstavlja jednu od najznačajnijih oblasti prava u svakodnevnom životu.
            </p>
            <p>
              Kancelarija pruža pravnu pomoć i zastupanje u svim pitanjima iz oblasti radnog prava, kako zaposlenima tako i poslodavcima, sa ciljem zaštite njihovih prava i zakonitog uređenja radnih odnosa.
            </p>

            <h2>Pravna zaštita zaposlenih</h2>
            <p>Zastupamo zaposlene u postupcima koji se odnose na:</p>
            <ul>
              <li>zasnivanje i prestanak radnog odnosa</li>
              <li>nezakonit otkaz ugovora o radu</li>
              <li>ostvarivanje prava na zaradu, naknade i druga primanja</li>
              <li>zaštitu prava po osnovu radnog vremena, odmora i bolovanja</li>
              <li>zaštitu od diskriminacije, mobinga i drugih povreda prava na radu</li>
            </ul>
            <p>
              Pravna pomoć obuhvata savetovanje, sastavljanje podnesaka i zastupanje pred sudovima i drugim nadležnim organima.
            </p>

            <h2>Pravna podrška poslodavcima</h2>
            <p>Pružamo pravnu podršku poslodavcima u vezi sa:</p>
            <ul>
              <li>izradom i usklađivanjem ugovora o radu i opštih akata</li>
              <li>sprovođenjem disciplinskih postupaka</li>
              <li>zakonitim prestankom radnog odnosa</li>
              <li>rešavanjem sporova sa zaposlenima</li>
              <li>usklađivanjem poslovanja sa važećim propisima iz oblasti radnog prava</li>
            </ul>

            <h2>Radni sporovi</h2>
            <p>
              Zastupamo stranke u individualnim i kolektivnim radnim sporovima pred nadležnim sudovima i drugim organima. Posebnu pažnju posvećujemo zaštiti procesnih prava stranaka i efikasnom rešavanju sporova, uz nastojanje da se sporovi, kada je to moguće, reše mirnim putem.
            </p>

            <h2>Naš pristup</h2>
            <p>
              Svakom predmetu pristupamo odgovorno i individualno, uz detaljnu analizu činjeničnog stanja i relevantnih propisa. Naš cilj je pravna sigurnost, zaštita prava klijenata i postizanje održivih i zakonitih rešenja u radnim odnosima.
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
