import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HTM Healthcare — Powering Better Healthcare',
  description:
    'AI-enabled software and expert maintenance of medical imaging equipment for hospitals, clinics, and radiology centers.',
  openGraph: {
    title: 'HTM Healthcare — Powering Better Healthcare',
    description:
      'AI-enabled software and expert maintenance of medical imaging equipment for hospitals, clinics, and radiology centers.',
    url: 'https://htmhealthcare.com',
    siteName: 'HTM Healthcare',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
