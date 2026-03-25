import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Naknada štete",
  description:
    "Pravna pomoć i zastupanje u postupcima naknade štete, pregovorima sa osiguranjem i sudskim sporovima u Novom Sadu.",
  path: "/oblast-rada/naknada-stete",
  keywords: [
    "naknada štete",
    "advokat naknada štete Novi Sad",
    "odštetni zahtev",
    "saobraćajna nezgoda",
  ],
})

export default function NaknadaSteteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
