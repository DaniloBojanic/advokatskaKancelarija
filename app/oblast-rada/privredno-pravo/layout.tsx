import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Privredno pravo",
  description:
    "Pravna podrška privrednim društvima i preduzetnicima u osnivanju, ugovorima, poslovanju i privrednim sporovima.",
  path: "/oblast-rada/privredno-pravo",
  keywords: [
    "privredno pravo",
    "advokat privredno pravo Novi Sad",
    "privredni ugovori",
    "privredni sporovi",
  ],
})

export default function PrivrednoPravoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
