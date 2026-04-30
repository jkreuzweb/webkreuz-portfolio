import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Webkreuz – Tvorba webů v Next.js | Jan Křížek, Mořkov',
  description: 'Tvořím moderní weby v Next.js, Reactu a Tailwindu. Začínající webař z Mořkova – weby na míru od 2 990 Kč.',
  openGraph: {
    title: 'Webkreuz – Tvorba webů v Next.js | Jan Křížek',
    description: 'Moderní weby v Next.js a Reactu od 2 990 Kč.',
    url: 'https://webkreuz.cz',
    locale: 'cs_CZ',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SX416SNEYD"></script>
        <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SX416SNEYD');
        `}} />
      </head>
      <body>{children}</body>
    </html>
  )
}
