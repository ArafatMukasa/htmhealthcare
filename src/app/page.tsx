import Link from 'next/link'
import Navbar from './Navbar'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      {/* Hero */}
      <section className="flex-1 bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1
            className="font-black text-slate-900 leading-[1.1] mb-4 sm:mb-6 tracking-tight"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}
          >
            Powering Better<br />
            Healthcare
          </h1>
          <p
            className="text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-md mx-auto"
            style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}
          >
            As a health technology company, htm provides hospitals and clinics with purpose-built software and expert maintenance of medical imaging equipment.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <Link
              href="about"
              className="bg-slate-900 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors"
            >
              Learn More
            </Link>
            <a
              href="mailto:info@htmhealthcare.com"
              className="border border-slate-800 text-slate-900 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-semibold hover:bg-white/60 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} HTM Healthcare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
