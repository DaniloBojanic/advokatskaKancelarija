"use client"

import { Car, Heart, Brain, Clock, FileCheck, Scale } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

const compensationData = {
  sr: {
    subtitle: "Specijalizacija",
    title: "Naknada štete",
    description: "Zastupamo fizička i pravna lica u svim vrstama postupaka naknade štete, kako u sudskim, tako i u vansudskim postupcima. Kancelarija poseduje značajno iskustvo u zastupanju klijenata pred osiguravajućim društvima.",
    types: [
      {
        icon: Car,
        title: "Šteta na vozilu",
        description: "Naknada štete na vozilu nakon saobraćajne nezgode. Rok za prijavu osiguranju je 15 dana od dana nezgode.",
      },
      {
        icon: Heart,
        title: "Telesne povrede",
        description: "Naknada štete zbog povreda u saobraćajnoj nezgodi - fizički bolovi, pretrpljeni strah, umanjenje životne aktivnosti.",
      },
      {
        icon: Brain,
        title: "Duševni bolovi",
        description: "Naknada štete zbog pretrpljenih duševnih bolova usled umanjenja životne aktivnosti, naruženosti ili smrti bliskog lica.",
      },
    ],
    processTitle: "Postupak naknade štete",
    steps: [
      {
        step: "01",
        title: "Prijava nezgode",
        description: "Rok za prijavu osiguravajućem društvu je 15 dana od dana nezgode. Lekarski pregled u roku od 24 časa.",
      },
      {
        step: "02",
        title: "Procena štete",
        description: "Stručna procena štete od strane ovlašćenog veštaka. Nezavisna procena obezbeđuje potpuniji uvid.",
      },
      {
        step: "03",
        title: "Odštetni zahtev",
        description: "Osiguranje je dužno da u roku od 14 dana utvrdi osnov i visinu štete, ili najkasnije u roku od 90 dana.",
      },
    ],
    deadlines: {
      title: "Rokovi za odlučivanje",
      items: [
        "14 dana - osnovni rok za utvrđivanje osnova i visine štete",
        "45 dana - za odluku o zahtevu za štetu na stvarima",
        "90 dana - za odluku o zahtevu za štetu na licima",
      ],
    },
    rejection: {
      title: "Šta ako osiguranje odbije zahtev?",
      text: "U slučaju da osiguravajuće društvo odbije odštetni zahtev ili ne postupi u propisanim rokovima, oštećeni ima pravo da svoje potraživanje ostvari pokretanjem sudskog postupka pred nadležnim sudom. Naša kancelarija pruža potpunu pravnu podršku u sudskim postupcima.",
    },
  },
  en: {
    subtitle: "Specialization",
    title: "Compensation",
    description: "We represent individuals and legal entities in all types of compensation proceedings, both in court and out-of-court. The office has significant experience in representing clients before insurance companies.",
    types: [
      {
        icon: Car,
        title: "Vehicle Damage",
        description: "Compensation for vehicle damage after a traffic accident. The deadline for reporting to insurance is 15 days from the accident.",
      },
      {
        icon: Heart,
        title: "Physical Injuries",
        description: "Compensation for injuries in traffic accidents - physical pain, experienced fear, reduction of general life activity.",
      },
      {
        icon: Brain,
        title: "Mental Suffering",
        description: "Compensation for mental suffering due to reduction of life activity, disfigurement or death of a close person.",
      },
    ],
    processTitle: "Compensation Process",
    steps: [
      {
        step: "01",
        title: "Accident Report",
        description: "The deadline for reporting to the insurance company is 15 days from the accident. Medical examination within 24 hours.",
      },
      {
        step: "02",
        title: "Damage Assessment",
        description: "Expert damage assessment by an authorized appraiser. Independent assessment provides a more complete insight.",
      },
      {
        step: "03",
        title: "Claim Submission",
        description: "Insurance is obliged to determine the basis and amount of damage within 14 days, or at latest within 90 days.",
      },
    ],
    deadlines: {
      title: "Decision Deadlines",
      items: [
        "14 days - basic deadline for determining the basis and amount of damage",
        "45 days - for decision on property damage claims",
        "90 days - for decision on personal injury claims",
      ],
    },
    rejection: {
      title: "What if insurance rejects the claim?",
      text: "If the insurance company rejects the claim or fails to act within the prescribed deadlines, the injured party has the right to realize their claim by initiating court proceedings before the competent court. Our office provides full legal support in court proceedings.",
    },
  },
}

export function Compensation() {
  const { language } = useLanguage()
  const data = compensationData[language]

  return (
    <section id="naknada-stete" className="py-24 bg-background scroll-mt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-medium tracking-wider uppercase text-sm">{data.subtitle}</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            {data.title}
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Compensation types */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {data.types.map((type) => (
            <div key={type.title} className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <type.icon className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {type.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {type.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process steps */}
        <div className="bg-muted rounded-lg p-8 lg:p-12">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-10 text-center">
            {data.processTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {data.steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <span className="text-5xl font-serif font-bold text-secondary/30">{step.step}</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < data.steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 w-8 h-0.5 bg-secondary/30" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-lg p-8">
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
              {data.deadlines.title}
            </h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              {data.deadlines.items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-8">
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
              {data.rejection.title}
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {data.rejection.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
