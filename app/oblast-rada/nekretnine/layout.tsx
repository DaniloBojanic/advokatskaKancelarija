import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Nekretnine",
  description:
    "Pravna pomoć u prometu nekretnina, proveri vlasništva, ugovorima, katastarskim upisima i sporovima u vezi sa nekretninama.",
  path: "/oblast-rada/nekretnine",
  keywords: [
    "nekretnine",
    "advokat nekretnine Novi Sad",
    "kupoprodaja nepokretnosti",
    "katastar",
  ],
})

export default function NekretnineLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
