"use client"

import { FaqSection } from "@/components/faq-section"
import { useLanguage } from "@/lib/i18n/context"

export function FaqPageContent() {
  const { language } = useLanguage()

  return (
    <>
      <section className="relative bg-primary pt-40 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        <div className="pointer-events-none absolute -top-36 right-8 h-80 w-80 rounded-full bg-secondary/25 blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <span className="inline-flex items-center rounded-full border border-secondary/45 bg-secondary/15 px-3 py-1 text-secondary font-medium tracking-wide">
            FAQ
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-bold mt-3">
            {language === "sr"
              ? "Pitanja koja klijenti najčešće postavljaju"
              : "Questions Clients Ask Most Often"}
          </h1>
          <p className="mt-6 text-xl text-primary-foreground/80 max-w-3xl">
            {language === "sr"
              ? "Na jednom mestu izdvojili smo odgovore na praktična pitanja o saradnji sa advokatom, prekršajnim postupcima, građanskim sporovima, porodičnom i radnom pravu, nekretninama i naplati dugova."
              : "In one place, we have gathered practical answers about working with an attorney, misdemeanor proceedings, civil disputes, family and labor law, real estate, and debt collection."}
          </p>
        </div>
      </section>

      <FaqSection
        categories={[
          "general",
          "traffic",
          "civil",
          "family",
          "labor",
          "real-estate",
          "debt-collection",
        ]}
      />
    </>
  )
}

