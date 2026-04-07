import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FaqPageContent } from "@/components/faq-page-content"
import { faqCategories } from "@/lib/faq-data"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Česta pitanja",
  description:
    "Odgovori na najčešća pitanja iz oblasti opštih pravnih tema, saobraćajnih prekršaja, građanskih sporova, porodičnog, radnog i imovinskog prava.",
  path: "/cesta-pitanja",
  keywords: [
    "česta pitanja advokat",
    "pravna pitanja",
    "advokat Novi Sad FAQ",
    "saobraćajni prekršaji pitanja",
    "radno pravo pitanja",
  ],
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((category) =>
    category.items.map((item) => ({
      "@type": "Question",
      name: item.question.sr,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.sr,
      },
    }))
  ),
}

export default function FaqPage() {
  return (
    <>
      <Header />
      <main><FaqPageContent /></main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}
