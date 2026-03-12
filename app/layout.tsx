import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/components/providers'
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
  title: 'Advokatska kancelarija Tomanović | Advokat Novi Sad',
  description: 'Advokatska kancelarija Tomanović iz Novog Sada pruža sveobuhvatnu pravnu pomoć fizičkim i pravnim licima. Specijalizovani za naknadu štete, sportsko pravo, privredno pravo i nekretnine.',
  keywords: 'advokat, Novi Sad, advokatska kancelarija, naknada štete, sportsko pravo, privredno pravo, nekretnine, radno pravo, prekršajno pravo, Arsenije Tomanović',
  generator: 'v0.app',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr" suppressHydrationWarning>
      <body className={`${playfair.variable} ${sourceSans.variable} font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
