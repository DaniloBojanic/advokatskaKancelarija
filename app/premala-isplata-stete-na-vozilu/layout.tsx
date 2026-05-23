import type { Metadata } from "next"
import { DEFAULT_OG_IMAGE, SITE_NAME, absoluteUrl } from "@/lib/seo"

const path = "/premala-isplata-stete-na-vozilu"
const title = "Premala isplata štete na vozilu | Advokat Novi Sad"
const description =
  "Ako vam je osiguranje isplatilo manji iznos od stvarne cene popravke vozila, moguće je proveriti da li postoji osnov za prigovor, dopunu štete ili potraživanje razlike."

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  keywords: [
    "premala isplata štete na vozilu",
    "osiguranje isplatilo premalo za štetu na vozilu",
    "doplata štete na vozilu",
    "razlika štete na vozilu",
    "prigovor osiguranju zbog male isplate",
    "advokat Novi Sad šteta na vozilu",
  ],
  alternates: {
    canonical: absoluteUrl(path),
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl(path),
    siteName: SITE_NAME,
    locale: "sr_RS",
    type: "website",
    images: [
      {
        url: absoluteUrl(DEFAULT_OG_IMAGE),
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [absoluteUrl(DEFAULT_OG_IMAGE)],
  },
}

export default function PremalaIsplataSteteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
