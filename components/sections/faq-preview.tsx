"use client"

import { FaqSection } from "@/components/faq-section"

export function FaqPreview() {
  return (
    <FaqSection
      sectionId="cesta-pitanja"
      categories={["general"]}
      compact
      title={{
        sr: "Često postavljena pitanja",
        en: "Frequently Asked Questions",
      }}
      description={{
        sr: "Izdvojili smo pitanja koja klijenti najčešće postavljaju pre prvog razgovora sa advokatom. Za potpuni pregled svih tema pogledajte posebnu FAQ stranicu.",
        en: "We have highlighted the questions clients most often ask before the first consultation. For the full overview of all topics, visit the dedicated FAQ page.",
      }}
      ctaHref="/cesta-pitanja"
      ctaLabel={{
        sr: "Pogledajte sva pitanja",
        en: "View All Questions",
      }}
    />
  )
}

