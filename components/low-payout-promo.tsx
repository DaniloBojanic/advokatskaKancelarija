"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/context"
import { cn } from "@/lib/utils"

export function LowPayoutPromo({ className }: { className?: string }) {
  const { language } = useLanguage()

  const copy = {
    sr: {
      title: "Osiguranje vam je isplatilo premalo za štetu na vozilu?",
      description:
        "Ako isplaćeni iznos nije dovoljan za stvarnu popravku vozila, moguće je proveriti da li postoji osnov za prigovor, dopunu zahteva ili potraživanje razlike.",
      cta: "Proverite mogućnost doplate",
    },
    en: {
      title: "Has the insurer paid too little for the damage to your vehicle?",
      description:
        "If the amount paid is not sufficient for the actual repair of the vehicle, it may be possible to review whether there is a basis for an objection, a supplemental claim or recovery of the difference.",
      cta: "Check whether an additional claim is possible",
    },
  }[language]

  return (
    <div className={cn("surface-panel relative overflow-hidden rounded-2xl border border-border/80 bg-background p-6 shadow-sm md:p-8", className)}>
      <div className="absolute inset-y-5 left-0 w-1 rounded-full bg-secondary/85" />
      <div className="pl-4 md:pl-6">
        <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
          {copy.title}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
          {copy.description}
        </p>
        <Button asChild className="mt-6 bg-primary hover:bg-primary/90">
          <Link href="/premala-isplata-stete-na-vozilu">{copy.cta}</Link>
        </Button>
      </div>
    </div>
  )
}
