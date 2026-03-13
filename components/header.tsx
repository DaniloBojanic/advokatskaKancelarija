"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone, Mail, ChevronDown, Car, Gavel, Building2, Trophy, Home, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/i18n/context"
import { CONTACT } from "@/lib/contact"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const practiceAreaLinks = [
    { name: t.practiceAreas.areas.compensation.title, href: "/oblast-rada/naknada-stete", icon: Car },
    { name: t.practiceAreas.areas.misdemeanor.title, href: "/oblast-rada/prekrsajno-pravo", icon: Gavel },
    { name: t.practiceAreas.areas.commercial.title, href: "/oblast-rada/privredno-pravo", icon: Building2 },
    { name: t.practiceAreas.areas.sports.title, href: "/oblast-rada/sportsko-pravo", icon: Trophy },
    { name: t.practiceAreas.areas.realEstate.title, href: "/oblast-rada/nekretnine", icon: Home },
    { name: t.practiceAreas.areas.labor.title, href: "/oblast-rada/radno-pravo", icon: Briefcase },
  ]

  const primaryNavigation = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/#o-nama" },
  ]

  const secondaryNavigation = [
    { name: t.nav.compensation, href: "/oblast-rada/naknada-stete" },
    { name: t.nav.sportsLaw, href: "/oblast-rada/sportsko-pravo" },
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
            <Image
              src="/tomanovic-logo.png"
              alt={language === "sr" ? "Advokatska kancelarija Tomanović" : "Tomanovic Law Office"}
              width={380}
              height={220}
              priority
              className="h-14 w-auto rounded-md sm:h-16"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {primaryNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-secondary transition-colors rounded-md hover:bg-muted/70"
              >
                {item.name}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-secondary transition-colors rounded-md hover:bg-muted/70 outline-none">
                  {t.nav.practiceAreas}
                  <ChevronDown className="h-4 w-4 opacity-70" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={10}
                className="min-w-72 rounded-xl border-border/70 bg-background/95 p-2 shadow-[0_18px_42px_rgba(7,20,38,0.18)] backdrop-blur-md"
              >
                <DropdownMenuLabel className="px-3 pb-1 pt-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {language === "sr" ? "Oblasti rada" : "Practice Areas"}
                </DropdownMenuLabel>
                <DropdownMenuItem asChild className="rounded-lg px-3 py-2.5">
                  <Link href="/#oblast-rada">
                    {language === "sr" ? "Pregled oblasti rada" : "Practice Areas Overview"}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="mx-2 my-2" />
                {practiceAreaLinks.map((item) => (
                  <DropdownMenuItem key={item.href} asChild className="rounded-lg px-3 py-2.5">
                    <Link href={item.href} className="flex items-center gap-2.5">
                      <item.icon className="h-4 w-4 text-secondary" />
                      <span>{item.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {secondaryNavigation.map((item) => (
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
              {primaryNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2 pb-1 text-sm font-semibold text-foreground/80">
                {t.nav.practiceAreas}
              </div>
              <Link
                href="/#oblast-rada"
                className="px-4 py-2 text-sm text-muted-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {language === "sr" ? "Pregled oblasti rada" : "Practice Areas Overview"}
              </Link>
              {practiceAreaLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="my-2 h-px bg-border" />
              {secondaryNavigation.map((item) => (
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
