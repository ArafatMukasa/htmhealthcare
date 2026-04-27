import type { Metadata } from 'next'
import Navbar from '../Navbar'

export const metadata: Metadata = {
  title: 'Contact HTM Healthcare',
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 flex flex-col pt-24">
        <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 flex flex-col">
          <h1 className="text-3xl font-black text-slate-900 mb-6">Contact HTM Healthcare</h1>
          <iframe
            src="https://forms.gle/FmtSvbyxkeExZCGn6"
            className="flex-1 w-full min-h-[700px] border-0"
            title="Contact HTM Healthcare"
          >
            Loading form…
          </iframe>
        </div>
      </main>
      <footer className="bg-slate-900 text-gray-400 py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} HTM Healthcare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
