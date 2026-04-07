"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/lib/i18n/context"
import type { FaqCategory, FaqCategoryId } from "@/lib/faq-data"
import { faqCategories } from "@/lib/faq-data"

type FaqSectionProps = {
  categories?: FaqCategoryId[]
  title?: { sr: string; en: string }
  description?: { sr: string; en: string }
  ctaHref?: string
  ctaLabel?: { sr: string; en: string }
  sectionId?: string
  compact?: boolean
}

export function FaqSection({
  categories,
  title,
  description,
  ctaHref,
  ctaLabel,
  sectionId,
  compact = false,
}: FaqSectionProps) {
  const { language, t } = useLanguage()

  const selectedCategories: FaqCategory[] = categories
    ? faqCategories.filter((category) => categories.includes(category.id))
    : faqCategories

  return (
    <section id={sectionId} className={compact ? "py-16 lg:py-20 bg-muted/40" : "py-16 lg:py-24 bg-background"}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-secondary font-medium tracking-wider uppercase text-sm">{t.faq.subtitle}</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            {title ? title[language] : t.faq.title}
          </h2>
          <div className="section-title-rule mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description ? description[language] : t.faq.description}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl space-y-8">
          {selectedCategories.map((category) => (
            <div key={category.id} className="surface-panel rounded-2xl p-6 md:p-8">
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-semibold text-foreground">{category.title[language]}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{category.description[language]}</p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {category.items.map((item, index) => (
                  <AccordionItem key={`${category.id}-${index}`} value={`${category.id}-${index}`}>
                    <AccordionTrigger className="py-5 text-base md:text-lg font-semibold text-foreground hover:no-underline">
                      {item.question[language]}
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                      {item.answer[language]}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {ctaHref && ctaLabel && (
          <div className="mt-10 text-center">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              {ctaLabel[language]}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

