import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Novosti i pravni članci",
  description:
    "Stručni članci i novosti iz oblasti prava advokatske kancelarije Tomanović iz Novog Sada.",
  path: "/novosti",
  keywords: [
    "pravni članci",
    "novosti",
    "advokat Novi Sad",
    "pravni saveti",
    "advokatska kancelarija Tomanović",
  ],
})

export default function NovostiLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
