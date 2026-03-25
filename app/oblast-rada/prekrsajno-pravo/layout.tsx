import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Prekršajno pravo",
  description:
    "Odbrana i pravna pomoć u prekršajnim postupcima pred nadležnim sudovima i organima, uključujući saobraćajne i poslovne prekršaje.",
  path: "/oblast-rada/prekrsajno-pravo",
  keywords: [
    "prekršajno pravo",
    "advokat prekršaji Novi Sad",
    "saobraćajni prekršaji",
    "prekršajni postupak",
  ],
})

export default function PrekrsajnoPravoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
