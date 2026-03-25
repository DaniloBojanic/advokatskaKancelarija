import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/components/providers'
import { CONTACT } from '@/lib/contact'
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, absoluteUrl } from '@/lib/seo'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin", "latin-ext"],
  variable: '--font-serif',
  display: 'swap',
});

const sourceSans = Source_Sans_3({ 
  subsets: ["latin", "latin-ext"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Advokatska kancelarija Tomanović | Advokat Novi Sad',
    template: '%s | Advokatska kancelarija Tomanović',
  },
  description: 'Advokatska kancelarija Tomanović iz Novog Sada pruža sveobuhvatnu pravnu pomoć fizičkim i pravnim licima. Specijalizovani za naknadu štete, sportsko pravo, privredno pravo i nekretnine.',
  keywords: ['advokat', 'Novi Sad', 'advokatska kancelarija', 'naknada štete', 'sportsko pravo', 'privredno pravo', 'nekretnine', 'radno pravo', 'prekršajno pravo', 'Arsenije Tomanović'],
  applicationName: SITE_NAME,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Advokatska kancelarija Tomanović | Advokat Novi Sad',
    description: 'Advokatska kancelarija Tomanović iz Novog Sada pruža sveobuhvatnu pravnu pomoć fizičkim i pravnim licima. Specijalizovani za naknadu štete, sportsko pravo, privredno pravo i nekretnine.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'sr_RS',
    type: 'website',
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
    card: 'summary_large_image',
    title: 'Advokatska kancelarija Tomanović | Advokat Novi Sad',
    description: 'Advokatska kancelarija Tomanović iz Novog Sada pruža sveobuhvatnu pravnu pomoć fizičkim i pravnim licima.',
    images: [absoluteUrl(DEFAULT_OG_IMAGE)],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

const legalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: SITE_NAME,
  image: absoluteUrl(DEFAULT_OG_IMAGE),
  url: SITE_URL,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Radnicka 19',
    addressLocality: 'Novi Sad',
    postalCode: '21000',
    addressCountry: 'RS',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Novi Sad',
    },
    {
      '@type': 'Country',
      name: 'Serbia',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr" suppressHydrationWarning>
      <body className={`${playfair.variable} ${sourceSans.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
        />
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
