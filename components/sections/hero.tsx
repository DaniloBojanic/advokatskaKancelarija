"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/context"

export function Hero() {
  const { language, t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="relative h-8 w-8 overflow-hidden rounded-sm">
                <Image
                  src="/tomanovic-logo.png"
                  alt={language === "sr" ? "Logo kancelarije Tomanović" : "Tomanovic Law Office logo"}
                  width={380}
                  height={220}
                  className="absolute left-1/2 top-0 w-[6rem] max-w-none -translate-x-1/2"
                />
              </div>
              <span className="text-secondary font-medium tracking-wider uppercase text-sm">{t.hero.subtitle}</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight text-balance">
              {t.hero.title}{" "}
              <span className="text-secondary">{t.hero.highlight}</span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t.hero.description}
            </p>
            
            <p className="text-primary-foreground/70 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t.hero.text}
            </p>

            <div className="mb-10 flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground/90">
                {language === "sr" ? "Individualan pristup" : "Tailored approach"}
              </span>
              <span className="rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground/90">
                {language === "sr" ? "Jasna strategija" : "Clear strategy"}
              </span>
              <span className="rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground/90">
                {language === "sr" ? "Brza komunikacija" : "Fast response"}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base px-8">
                <Link href="/#zakazite-konsultacije">{t.hero.cta}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border border-primary-foreground/35 bg-transparent text-primary-foreground hover:bg-primary-foreground/12 text-base px-8"
              >
                <Link href="/#oblast-rada">{t.hero.learnMore}</Link>
              </Button>
            </div>
          </div>

          {/* Right content - decorative */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-3xl bg-secondary/20" />
              <div className="relative w-80 h-80 border-2 border-secondary/30 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 border-2 border-secondary/50 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-secondary/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="relative h-28 w-28 overflow-hidden rounded-sm">
                      <Image
                        src="/tomanovic-logo.png"
                        alt={language === "sr" ? "Logo kancelarije Tomanović" : "Tomanovic Law Office logo"}
                        width={380}
                        height={220}
                        className="absolute left-1/2 top-0 w-[21rem] max-w-none -translate-x-1/2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/50 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-secondary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
