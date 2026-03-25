import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Radno pravo",
  description:
    "Zastupanje zaposlenih i poslodavaca u radnim sporovima, otkazima, zaradi, diskriminaciji i drugim pitanjima iz radnog prava.",
  path: "/oblast-rada/radno-pravo",
  keywords: [
    "radno pravo",
    "advokat radno pravo Novi Sad",
    "otkaz ugovora o radu",
    "radni sporovi",
  ],
})

export default function RadnoPravoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
