import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HTM Healthcare',
  description: 'Memorable Event Experiences Start Here.',
  openGraph: {
    title: 'HTM Healthcare',
    description: 'Memorable Event Experiences Start Here.',
    url: 'https://htmhealthcare.com',
    siteName: 'HTM Healthcare',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
