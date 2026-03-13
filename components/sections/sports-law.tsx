"use client"

import Link from "next/link"
import { Trophy, Users, FileText, Scale, Target, Shield } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

const sportsLawData = {
  sr: {
    subtitle: "Specijalizacija",
    title: "Sportsko pravo",
    description: "Sportsko pravo predstavlja specifičnu i dinamičnu oblast prava koja obuhvata pravne odnose nastale u vezi sa sportskim aktivnostima, sportskim organizacijama i učesnicima u sportu.",
    learnMore: "Saznajte više o oblasti",
    supportTitle: "Pravna podrška u sportu",
    services: [
      {
        icon: Users,
        title: "Sportisti i klubovi",
        description: "Zastupamo profesionalne i amaterske sportiste, sportske klubove i saveze, trenere i sportske radnike.",
      },
      {
        icon: FileText,
        title: "Disciplinski postupci",
        description: "Zastupanje u disciplinskim i statusnim postupcima pred sportskim savezima, ligama i drugim organima.",
      },
      {
        icon: Scale,
        title: "Sportska arbitraža",
        description: "Zastupanje u postupcima arbitraže i alternativnih načina rešavanja sporova u sportu.",
      },
    ],
    arbiterTitle: "Stalni arbitar",
    arbiterOrg: "Rukometni savez Srbije",
    expertiseTitle: "Oblasti ekspertize",
    expertise: [
      "Ugovori u sportu (transferi, sponzorstva, zastupanje)",
      "Disciplinski prekršaji i sankcije",
      "Registracija i status sportista",
      "Sporovi pred sportskim organima",
      "Međunarodni sportski propisi",
      "Arbitražni postupci",
    ],
    approachTitle: "Naš pristup",
    approachText: "Svaki predmet iz oblasti sportskog prava sagledavamo kroz prizmu specifičnosti sportskog sistema i interesa klijenata. Cilj našeg rada je pravna sigurnost, efikasna zaštita prava i dugoročna stabilnost sportskih odnosa.",
  },
  en: {
    subtitle: "Specialization",
    title: "Sports Law",
    description: "Sports law is a specific and dynamic area of law that covers legal relations arising in connection with sports activities, sports organizations and participants in sports.",
    learnMore: "Learn more about this area",
    supportTitle: "Legal Support in Sports",
    services: [
      {
        icon: Users,
        title: "Athletes and Clubs",
        description: "We represent professional and amateur athletes, sports clubs and federations, coaches and sports workers.",
      },
      {
        icon: FileText,
        title: "Disciplinary Proceedings",
        description: "Representation in disciplinary and status proceedings before sports federations, leagues and other bodies.",
      },
      {
        icon: Scale,
        title: "Sports Arbitration",
        description: "Representation in arbitration proceedings and alternative dispute resolution in sports.",
      },
    ],
    arbiterTitle: "Permanent Arbitrator",
    arbiterOrg: "Handball Federation of Serbia",
    expertiseTitle: "Areas of Expertise",
    expertise: [
      "Sports contracts (transfers, sponsorships, representation)",
      "Disciplinary offenses and sanctions",
      "Registration and status of athletes",
      "Disputes before sports bodies",
      "International sports regulations",
      "Arbitration proceedings",
    ],
    approachTitle: "Our Approach",
    approachText: "We view every case in sports law through the prism of the specifics of the sports system and the interests of clients. The goal of our work is legal certainty, effective protection of rights and long-term stability of sports relations.",
  },
}

export function SportsLaw() {
  const { language } = useLanguage()
  const data = sportsLawData[language]

  return (
    <section id="sportsko-pravo" className="py-28 bg-primary text-primary-foreground scroll-mt-32 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-medium tracking-wider uppercase text-sm">{data.subtitle}</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground mt-4 mb-6 text-balance">
            {data.title}
          </h2>
          <div className="section-title-rule mb-6" />
          <p className="text-primary-foreground/80 max-w-3xl mx-auto">
            {data.description}
          </p>
          <div className="mt-8">
            <Link
              href="/oblast-rada/sportsko-pravo"
              className="inline-flex items-center justify-center rounded-md border border-secondary bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-sm transition-colors hover:bg-secondary/90"
            >
              {data.learnMore}
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Services */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-8">
              {data.supportTitle}
            </h3>
            <div className="space-y-6">
              {data.services.map((service) => (
                <div key={service.title} className="rounded-xl border border-primary-foreground/18 bg-primary-foreground/7 p-5 flex gap-4 hover-lift">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                    <service.icon className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-semibold mb-2">
                      {service.title}
                    </h4>
                    <p className="text-primary-foreground/70 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Arbiter badge */}
            <div className="mt-10 rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center">
                  <Trophy className="h-7 w-7 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold">{data.arbiterTitle}</h4>
                  <p className="text-primary-foreground/70 text-sm">{data.arbiterOrg}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise list */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-8">
              {data.expertiseTitle}
            </h3>
            <div className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/6 p-8">
              <ul className="space-y-4">
                {data.expertise.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center shrink-0">
                      <Target className="h-4 w-4 text-secondary" />
                    </div>
                    <span className="text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Approach */}
            <div className="mt-8 flex items-start gap-4">
              <Shield className="h-8 w-8 text-secondary shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-lg font-semibold mb-2">{data.approachTitle}</h4>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {data.approachText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
