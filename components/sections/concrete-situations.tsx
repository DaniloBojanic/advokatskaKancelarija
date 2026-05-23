"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"
import { concreteSituationCards } from "@/lib/compensation-situations"

export function ConcreteSituations() {
  const { language } = useLanguage()

  const sectionCopy = {
    sr: {
      subtitle: "Konkretne situacije",
      title: "Najčešći razlozi zbog kojih nam se klijenti javljaju",
      description:
        "Izdvojili smo konkretne situacije u kojima se najčešće postavlja pitanje da li postoji osnov za pravno dalje postupanje i zaštitu prava.",
      defaultCta: "Saznajte više",
      eyebrow: "Konkretna situacija",
    },
    en: {
      subtitle: "Concrete situations",
      title: "The situations clients most often contact us about",
      description:
        "We have highlighted practical situations in which the key question is whether there is a basis for further legal action and protection of rights.",
      defaultCta: "Learn more",
      eyebrow: "Concrete situation",
    },
  }[language]

  return (
    <section id="konkretne-situacije" className="py-24 bg-background scroll-mt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <span className="text-secondary font-medium tracking-wider uppercase text-sm">{sectionCopy.subtitle}</span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground text-balance sm:text-4xl">
            {sectionCopy.title}
          </h2>
          <div className="section-title-rule mt-6 mb-6" />
          <p className="text-lg leading-8 text-muted-foreground">{sectionCopy.description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {concreteSituationCards.map((item) => (
            <article key={item.key} className="surface-panel flex h-full flex-col rounded-2xl border border-border/80 p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1">
              <span className="inline-flex w-fit rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                {sectionCopy.eyebrow}
              </span>
              <h3 className="mt-5 font-serif text-2xl font-semibold leading-tight text-foreground">
                {item.title[language]}
              </h3>
              <p className="mt-4 flex-1 text-base leading-7 text-muted-foreground">
                {item.description[language]}
              </p>
              <Link
                href={item.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-primary"
              >
                {item.cta?.[language] ?? sectionCopy.defaultCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
