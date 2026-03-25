import type { Metadata } from "next"

export const SITE_URL = "https://advokattomanovic.rs"
export const SITE_NAME = "Advokatska kancelarija Tomanović"
export const DEFAULT_OG_IMAGE = "/tomanovic-logo.png"

type PageMetadataInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
}

export function absoluteUrl(path: string = "/") {
  return new URL(path, SITE_URL).toString()
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path)

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
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
}
