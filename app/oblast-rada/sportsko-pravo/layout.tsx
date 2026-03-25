import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Sportsko pravo",
  description:
    "Pravna podrška sportistima, klubovima i sportskim organizacijama u ugovornim, disciplinskim i arbitražnim pitanjima.",
  path: "/oblast-rada/sportsko-pravo",
  keywords: [
    "sportsko pravo",
    "advokat sportsko pravo Novi Sad",
    "sportska arbitraža",
    "sportski ugovori",
  ],
})

export default function SportskoPravoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
