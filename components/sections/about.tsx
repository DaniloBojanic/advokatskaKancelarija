"use client"

import { Award, BookOpen, Scale, Users } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

export function About() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Scale,
      title: t.about.features.integrity.title,
      description: t.about.features.integrity.description
    },
    {
      icon: BookOpen,
      title: t.about.features.expertise.title,
      description: t.about.features.expertise.description
    },
    {
      icon: Users,
      title: t.about.features.dedication.title,
      description: t.about.features.dedication.description
    },
    {
      icon: Award,
      title: t.about.features.experience.title,
      description: t.about.features.experience.description
    },
  ]

  return (
    <section id="o-nama" className="py-28 bg-background scroll-mt-32 subtle-grid">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-medium tracking-wider uppercase text-sm">{t.about.subtitle}</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            {t.about.title}
          </h2>
          <div className="section-title-rule" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="surface-panel p-7 md:p-9">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 tracking-tight">
              {t.about.founderTitle}
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-[1.03rem]">
              <p>{t.about.founder}</p>
              <p>{t.about.bio1}</p>
              <p>{t.about.bio2}</p>
              <p>{t.about.bio3}</p>
            </div>
          </div>

          {/* Right content - features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="surface-panel p-6 hover-lift hover:border-secondary/40">
                <feature.icon className="h-10 w-10 text-secondary mb-4" />
                <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-16 surface-panel-soft p-8 lg:p-12">
          <p className="text-foreground leading-relaxed text-lg text-center max-w-4xl mx-auto">
            {t.about.additional}
          </p>
        </div>
      </div>
    </section>
  )
}
