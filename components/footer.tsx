"use client"

import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"
import { CONTACT } from "@/lib/contact"

export function Footer() {
  const { t } = useLanguage()

  const practiceAreas = [
    { name: t.practiceAreas.areas.compensation.title, href: "/oblast-rada/naknada-stete" },
    { name: t.practiceAreas.areas.misdemeanor.title, href: "/oblast-rada/prekrsajno-pravo" },
    { name: t.practiceAreas.areas.commercial.title, href: "/oblast-rada/privredno-pravo" },
    { name: t.practiceAreas.areas.sports.title, href: "/oblast-rada/sportsko-pravo" },
    { name: t.practiceAreas.areas.realEstate.title, href: "/oblast-rada/nekretnine" },
    { name: t.practiceAreas.areas.labor.title, href: "/oblast-rada/radno-pravo" },
  ]

  const quickLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/#o-nama" },
    { name: t.nav.practiceAreas, href: "/#oblast-rada" },
    { name: t.nav.contact, href: "/#kontakt" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="font-serif text-2xl font-bold text-primary-foreground tracking-wide">TOMANOVIĆ</span>
              <span className="text-sm text-primary-foreground/70 tracking-widest uppercase">
                {t.nav.home === "Home" ? "Law Office" : "Advokatska kancelarija"}
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-secondary">{t.footer.practiceAreas}</h3>
            <ul className="space-y-3">
              {practiceAreas.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-secondary">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-secondary">{t.footer.contact}</h3>
            <ul className="space-y-4">
              <li>
                <a href={CONTACT.phoneHref} className="flex items-start gap-3 text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  <Phone className="h-5 w-5 mt-0.5 shrink-0" />
                  <span>{CONTACT.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={CONTACT.emailHref} className="flex items-start gap-3 text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  <Mail className="h-5 w-5 mt-0.5 shrink-0" />
                  <span>{CONTACT.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-foreground/80 text-sm">
                  <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                  <span>{CONTACT.location}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              &copy; {new Date().getFullYear()} {t.nav.home === "Home" ? "Tomanović Law Office" : "Advokatska kancelarija Tomanović"}. {t.footer.rights}
            </p>
            <p className="text-primary-foreground/60 text-sm">
              {t.footer.lawyer}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
