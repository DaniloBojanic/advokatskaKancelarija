"use client"

import Link from "next/link"
import { ArrowLeft, Phone, Mail, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/i18n/context"
import { CONTACT } from "@/lib/contact"

interface PracticeAreaLayoutProps {
  title: { sr: string; en: string }
  subtitle: { sr: string; en: string }
  description: { sr: string; en: string }
  content: { sr: React.ReactNode; en: React.ReactNode }
  icon: React.ReactNode
}

export function PracticeAreaLayout({
  title,
  subtitle,
  description,
  content,
  icon,
}: PracticeAreaLayoutProps) {
  const { language, t } = useLanguage()

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary pt-40 pb-16 lg:pt-44 lg:pb-20">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
          <div className="container mx-auto px-4 relative">
            <Link
              href="/#oblast-rada"
              className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 mb-8 transition-colors font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              {language === "sr" ? "Nazad na oblasti rada" : "Back to practice areas"}
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary">
                {icon}
              </div>
              <span className="text-secondary font-medium">
                {subtitle[language]}
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-bold max-w-3xl">
              {title[language]}
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/80 max-w-2xl">
              {description[language]}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <article className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm md:p-8 lg:p-10">
                  <div className="practice-content">{content[language]}</div>
                </article>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Contact Card */}
                  <div className="bg-muted rounded-xl p-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                      {language === "sr" ? "Potrebna vam je pomoć?" : "Need Help?"}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {language === "sr"
                        ? "Kontaktirajte nas za besplatne inicijalne konsultacije."
                        : "Contact us for free initial consultations."}
                    </p>
                    <div className="space-y-3">
                      <a
                        href={CONTACT.phoneHref}
                        className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                      >
                        <Phone className="h-5 w-5 text-secondary" />
                        {CONTACT.phoneDisplay}
                      </a>
                      <a
                        href={CONTACT.emailHref}
                        className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="h-5 w-5 text-secondary" />
                        {CONTACT.email}
                      </a>
                    </div>
                    <Button asChild className="w-full mt-6 bg-primary hover:bg-primary/90">
                      <Link href="/#zakazite-konsultacije">
                        {t.nav.schedule}
                      </Link>
                    </Button>
                  </div>

                  {/* Other Areas */}
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                      {language === "sr" ? "Ostale oblasti" : "Other Areas"}
                    </h3>
                    <nav className="space-y-2">
                      <Link
                        href="/oblast-rada/naknada-stete"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-2"
                      >
                        <Scale className="h-4 w-4" />
                        {t.practiceAreas.areas.compensation.title}
                      </Link>
                      <Link
                        href="/oblast-rada/prekrsajno-pravo"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-2"
                      >
                        <Scale className="h-4 w-4" />
                        {t.practiceAreas.areas.misdemeanor.title}
                      </Link>
                      <Link
                        href="/oblast-rada/privredno-pravo"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-2"
                      >
                        <Scale className="h-4 w-4" />
                        {t.practiceAreas.areas.commercial.title}
                      </Link>
                      <Link
                        href="/oblast-rada/sportsko-pravo"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-2"
                      >
                        <Scale className="h-4 w-4" />
                        {t.practiceAreas.areas.sports.title}
                      </Link>
                      <Link
                        href="/oblast-rada/nekretnine"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-2"
                      >
                        <Scale className="h-4 w-4" />
                        {t.practiceAreas.areas.realEstate.title}
                      </Link>
                      <Link
                        href="/oblast-rada/radno-pravo"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-2"
                      >
                        <Scale className="h-4 w-4" />
                        {t.practiceAreas.areas.labor.title}
                      </Link>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-bold mb-4">
              {language === "sr" ? "Zakažite konsultacije" : "Schedule Consultation"}
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              {language === "sr"
                ? "Kontaktirajte nas i saznajte kako možemo pomoći u vašem slučaju."
                : "Contact us and find out how we can help with your case."}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              <Link href="/#zakazite-konsultacije">
                {t.nav.schedule}
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
