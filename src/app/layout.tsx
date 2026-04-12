import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Workflow',
  description: 'Memorable Event Experiences Start Here.',
  openGraph: {
    title: 'Workflow',
    description: 'Memorable Event Experiences Start Here.',
    url: 'https://workflowafrica.com',
    siteName: 'Workflow',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
