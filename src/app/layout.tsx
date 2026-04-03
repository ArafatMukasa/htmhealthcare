import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Workflow Africa',
  description: 'Professional event management and participant tracking across Africa.',
  openGraph: {
    title: 'Workflow Africa',
    description: 'Professional event management and participant tracking across Africa.',
    url: 'https://workflowafrica.com',
    siteName: 'Workflow Africa',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
