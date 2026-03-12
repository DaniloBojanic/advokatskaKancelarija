"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/context"
import { CONTACT } from "@/lib/contact"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navigation = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/#o-nama" },
    { name: t.nav.practiceAreas, href: "/#oblast-rada" },
    { name: t.nav.compensation, href: "/#naknada-stete" },
    { name: t.nav.sportsLaw, href: "/#sportsko-pravo" },
    { name: t.nav.news, href: "/#novosti" },
    { name: t.nav.contact, href: "/#kontakt" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/92 backdrop-blur-md border-b border-border/80 shadow-[0_1px_0_rgba(7,20,38,0.05)]">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href={CONTACT.phoneHref} className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">{CONTACT.phoneDisplay}</span>
              </a>
              <a href={CONTACT.emailHref} className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">{CONTACT.email}</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage("sr")}
                className={`px-2 py-1 hover:text-secondary transition-colors ${language === "sr" ? "font-medium text-secondary underline underline-offset-4 decoration-secondary/60" : ""}`}
              >
                SRB
              </button>
              <span className="text-primary-foreground/50">|</span>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 hover:text-secondary transition-colors ${language === "en" ? "font-medium text-secondary underline underline-offset-4 decoration-secondary/60" : ""}`}
              >
                ENG
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-primary tracking-wide">TOMANOVIĆ</span>
              <span className="text-xs text-muted-foreground tracking-widest uppercase">
                {language === "sr" ? "Advokatska kancelarija" : "Law Office"}
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-secondary transition-colors rounded-md hover:bg-muted/70"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="ml-4 bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="/#zakazite-konsultacije">{t.nav.schedule}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">{language === "sr" ? "Otvori meni" : "Open menu"}</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link href="/#zakazite-konsultacije" onClick={() => setMobileMenuOpen(false)}>
                  {t.nav.schedule}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
