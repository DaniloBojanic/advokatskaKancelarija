"use client"

import Link from "next/link"
import { useCallback } from "react"
import { ArrowLeft, CarFront, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { LowPayoutForm } from "@/components/low-payout-form"
import { useLanguage } from "@/lib/i18n/context"

export function LowPayoutPageContent() {
  const { language } = useLanguage()
  const scrollToForm = useCallback(() => {
    const element = document.getElementById("provera-doplate")
    if (!element) return

    const headerOffset = 120
    const top = element.getBoundingClientRect().top + window.scrollY - headerOffset
    window.history.replaceState(null, "", "#provera-doplate")
    window.scrollTo({ top, behavior: "smooth" })
  }, [])

  const copy = {
    sr: {
      back: "Nazad na naknadu štete",
      practiceArea: "Naknada štete",
      eyebrow: "Konkretna situacija",
      title: "Osiguranje vam je isplatilo premalo za štetu na vozilu?",
      description:
        "Ako vam je osiguranje isplatilo manji iznos od stvarne cene popravke vozila, moguće je proveriti da li postoji osnov za prigovor, dopunu zahteva ili potraživanje razlike.",
      cta: "Pošaljite podatke za proveru",
      introTitle: "Kada se najčešće javlja problem sa premalom isplatom?",
      introParagraphs: [
        "Nakon saobraćajne nezgode, osiguravajuće društvo vrši procenu oštećenja na vozilu i isplaćuje određeni iznos naknade štete. U praksi se, međutim, često dešava da isplaćeni iznos nije dovoljan za stvarnu popravku vozila.",
        "Ova situacija najčešće postaje jasna tek kada vlasnik vozila pribavi predračun ili račun servisa i utvrdi da je realna cena popravke viša od iznosa koji je već isplaćen. Tada se otvara pitanje da li postoji osnov za prigovor osiguranju, dopunu zahteva ili potraživanje razlike štete.",
      ],
      sections: [
        {
          title: "Kada nastaje problem sa premalom isplatom?",
          paragraphs: [
            "Problem premale isplate štete na vozilu najčešće se javlja kada osiguravajuće društvo prizna samo deo oštećenja, primeni niže cene delova ili rada ili izvrši obračun koji se razlikuje od realne cene popravke u servisu.",
            "Vlasnik vozila tada može imati utisak da je postupak formalno završen, jer je osiguranje izvršilo isplatu, ali da dobijeni iznos u stvarnosti ne pokriva nastalu štetu.",
          ],
        },
        {
          title: "Da li isplata osiguranja znači da je stvar završena?",
          paragraphs: [
            "Sama činjenica da je osiguranje izvršilo isplatu ne znači u svakoj situaciji da oštećeni više nema nikakva prava. Da li postoji osnov za dalje postupanje zavisi od dokumentacije, načina isplate, eventualno potpisanih izjava ili poravnanja i drugih okolnosti konkretnog slučaja.",
            "Zbog toga je važno proveriti šta je tačno isplaćeno, na osnovu koje procene i da li postoji dokumentacija koja pokazuje da je stvarna cena popravke veća od isplaćenog iznosa.",
          ],
        },
        {
          title: "Šta se može uraditi ako je osiguranje isplatilo premalo?",
          paragraphs: [
            "U zavisnosti od okolnosti, može se razmotriti podnošenje prigovora osiguravajućem društvu, dopuna odštetnog zahteva, potraživanje razlike štete ili pokretanje drugog odgovarajućeg postupka, ako za to postoje pravni i činjenični uslovi.",
            "Svaki slučaj zahteva pojedinačan uvid u dokumentaciju. Nije svaka razlika između isplate i cene popravke automatski osnov za uspešno potraživanje, ali se takve situacije mogu proveriti na osnovu konkretnih podataka.",
          ],
        },
      ],
      documentsTitle: "Koja dokumentacija je korisna za proveru?",
      documents: [
        "procena štete koju je sačinilo osiguravajuće društvo",
        "fotografije oštećenja na vozilu",
        "predračun ili račun servisa",
        "zapisnik policije ili evropski izveštaj o saobraćajnoj nezgodi",
        "dokaz o izvršenoj isplati",
        "komunikacija sa osiguravajućim društvom",
        "druga dokumentacija koja pokazuje obim oštećenja i realan trošak popravke",
      ],
      noteTitle: "Praktična napomena",
      note:
        "Preliminarna procena ne znači i konačan stav o ishodu postupka. Opravdanost daljeg pravnog koraka zavisi od sadržine dokumentacije, načina obračuna štete i konkretnih okolnosti svakog slučaja.",
    },
    en: {
      back: "Back to compensation",
      practiceArea: "Compensation",
      eyebrow: "Concrete situation",
      title: "Has the insurer paid too little for the damage to your vehicle?",
      description:
        "If the insurer paid you less than the actual repair cost of the vehicle, it may be possible to review whether there is a basis for an objection, a supplemental claim or recovery of the difference.",
      cta: "Send details for review",
      introTitle: "When does the problem of an underpaid claim most often arise?",
      introParagraphs: [
        "After a traffic accident, the insurance company assesses the damage to the vehicle and pays a certain amount of compensation. In practice, however, the amount paid is often not sufficient for the actual repair of the vehicle.",
        "This usually becomes clear only when the vehicle owner obtains a workshop estimate or invoice and finds that the realistic repair cost is higher than the amount already paid. At that point, the question arises whether there is a basis for an objection to the insurer, a supplemental claim or recovery of the difference.",
      ],
      sections: [
        {
          title: "When does the issue of an underpaid claim arise?",
          paragraphs: [
            "The issue most often arises when the insurance company recognizes only part of the damage, applies lower prices for parts or labor, or calculates the loss in a way that differs from the realistic repair cost at a workshop.",
            "The vehicle owner may then feel that the matter has formally ended because the insurer has made a payment, while the amount received in reality does not cover the actual damage.",
          ],
        },
        {
          title: "Does payment by the insurer mean the matter is closed?",
          paragraphs: [
            "The mere fact that the insurer has made a payment does not necessarily mean that the injured party has no further rights. Whether there is a basis for further action depends on the documentation, the payment method, any statements or settlement documents that were signed, and other circumstances of the specific case.",
            "For that reason, it is important to review what exactly was paid, on the basis of which assessment, and whether there is documentation showing that the actual repair cost exceeds the amount paid.",
          ],
        },
        {
          title: "What can be done if the insurer has paid too little?",
          paragraphs: [
            "Depending on the circumstances, one may consider filing an objection with the insurer, supplementing the compensation claim, seeking payment of the difference or initiating another appropriate procedure, if the factual and legal conditions for that exist.",
            "Each case requires an individual review of the documents. Not every difference between the payment and the repair cost automatically creates a successful claim, but such situations can be reviewed based on the concrete facts.",
          ],
        },
      ],
      documentsTitle: "What documentation is useful for a review?",
      documents: [
        "the damage assessment prepared by the insurance company",
        "photographs of the damage to the vehicle",
        "a workshop estimate or invoice",
        "the police report or European accident statement",
        "proof of the payment made",
        "communication with the insurance company",
        "other documentation showing the scope of the damage and the realistic repair cost",
      ],
      noteTitle: "Practical note",
      note:
        "A preliminary review does not amount to a final assessment of the likely outcome. The appropriateness of any further legal step depends on the documents, the loss calculation and the specific circumstances of the case.",
    },
  }[language]

  return (
    <>
      <Header />
      <main>
        <section className="relative bg-primary pb-16 pt-40 lg:pb-20 lg:pt-44">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
          <div className="container relative mx-auto px-4">
            <Link
              href="/oblast-rada/naknada-stete"
              className="mb-8 inline-flex items-center gap-2 font-medium text-secondary transition-colors hover:text-secondary/80"
            >
              <ArrowLeft className="h-4 w-4" />
              {copy.back}
            </Link>
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-secondary/20 text-secondary">
                <CarFront className="h-8 w-8" />
              </div>
              <div>
                <span className="text-secondary/90 text-sm font-medium uppercase tracking-[0.14em]">{copy.eyebrow}</span>
                <p className="mt-2 text-base font-medium text-primary-foreground/75">{copy.practiceArea}</p>
              </div>
            </div>
            <h1 className="max-w-4xl font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              {copy.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-primary-foreground/82">{copy.description}</p>
            <Button
              size="lg"
              className="mt-8 bg-secondary text-secondary-foreground hover:bg-secondary/90"
              onClick={scrollToForm}
            >
              {copy.cta}
            </Button>
          </div>
        </section>

        <section className="bg-muted py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <article className="surface-panel rounded-2xl p-6 md:p-8 lg:p-10">
                <h2 className="font-serif text-3xl font-semibold text-foreground">{copy.introTitle}</h2>
                <div className="mt-5 space-y-5 text-lg leading-8 text-muted-foreground">
                  {copy.introParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-12 space-y-10">
                  {copy.sections.map((section) => (
                    <section key={section.title}>
                      <h3 className="font-serif text-2xl font-semibold text-foreground">{section.title}</h3>
                      <div className="mt-4 space-y-4 text-base leading-8 text-muted-foreground md:text-lg">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>

                <section className="mt-12 rounded-2xl border border-border/70 bg-muted/30 p-6 md:p-8">
                  <h3 className="font-serif text-2xl font-semibold text-foreground">{copy.documentsTitle}</h3>
                  <ul className="mt-5 space-y-3 text-base leading-8 text-muted-foreground">
                    {copy.documents.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </article>

              <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
                <div className="surface-panel rounded-2xl p-6 md:p-8">
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    {language === "sr" ? "Kada ima smisla da proverite slučaj" : "When it makes sense to request a review"}
                  </h3>
                  <ul className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
                    <li className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                      <span>{language === "sr" ? "Kada predračun ili račun servisa pokazuje veći trošak od isplaćenog iznosa." : "When the workshop estimate or invoice shows a higher cost than the amount already paid."}</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                      <span>{language === "sr" ? "Kada smatrate da nisu priznata sva oštećenja ili je procena osiguranja nepotpuna." : "When you believe not all damage has been recognized or the insurer's assessment is incomplete."}</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                      <span>{language === "sr" ? "Kada želite da pre daljeg koraka dobijete preliminarni pravni uvid u dokumentaciju." : "When you want a preliminary legal review of the documents before taking the next step."}</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-secondary/30 bg-background p-6 shadow-sm md:p-8">
                  <h3 className="font-serif text-2xl font-semibold text-foreground">{copy.noteTitle}</h3>
                  <p className="mt-4 text-base leading-8 text-muted-foreground">{copy.note}</p>
                  <Button className="mt-6 w-full bg-primary hover:bg-primary/90" onClick={scrollToForm}>
                    {copy.cta}
                  </Button>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <LowPayoutForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
