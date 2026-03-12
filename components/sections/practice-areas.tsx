"use client"

import Link from "next/link"
import { 
  Car, 
  Gavel, 
  Building2, 
  Trophy, 
  Home, 
  Briefcase,
  ArrowRight
} from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

export function PracticeAreas() {
  const { t } = useLanguage()

  const areas = [
    {
      icon: Car,
      title: t.practiceAreas.areas.compensation.title,
      description: t.practiceAreas.areas.compensation.description,
      href: "/oblast-rada/naknada-stete",
      featured: true,
    },
    {
      icon: Gavel,
      title: t.practiceAreas.areas.misdemeanor.title,
      description: t.practiceAreas.areas.misdemeanor.description,
      href: "/oblast-rada/prekrsajno-pravo",
    },
    {
      icon: Building2,
      title: t.practiceAreas.areas.commercial.title,
      description: t.practiceAreas.areas.commercial.description,
      href: "/oblast-rada/privredno-pravo",
    },
    {
      icon: Trophy,
      title: t.practiceAreas.areas.sports.title,
      description: t.practiceAreas.areas.sports.description,
      href: "/oblast-rada/sportsko-pravo",
      featured: true,
    },
    {
      icon: Home,
      title: t.practiceAreas.areas.realEstate.title,
      description: t.practiceAreas.areas.realEstate.description,
      href: "/oblast-rada/nekretnine",
    },
    {
      icon: Briefcase,
      title: t.practiceAreas.areas.labor.title,
      description: t.practiceAreas.areas.labor.description,
      href: "/oblast-rada/radno-pravo",
    },
  ]

  return (
    <section id="oblast-rada" className="py-24 bg-muted scroll-mt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-medium tracking-wider uppercase text-sm">{t.practiceAreas.subtitle}</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            {t.practiceAreas.title}
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.practiceAreas.description}
          </p>
        </div>

        {/* Practice areas grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <Link
              key={area.title}
              href={area.href}
              className={`group bg-card border rounded-lg p-8 hover:border-secondary transition-all duration-300 hover:shadow-lg ${
                area.featured ? 'border-secondary/50' : 'border-border'
              }`}
            >
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${
                area.featured ? 'bg-secondary text-secondary-foreground' : 'bg-primary/10 text-primary'
              }`}>
                <area.icon className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors">
                {area.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {area.description}
              </p>
              <span className="inline-flex items-center gap-2 text-secondary text-sm font-medium group-hover:gap-3 transition-all">
                {t.practiceAreas.learnMore} <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
