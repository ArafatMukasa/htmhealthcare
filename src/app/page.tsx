import Link from 'next/link'
import Image from 'next/image'
import Navbar from './Navbar'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      {/* Hero */}
      <section className="flex-1 bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <h1
              className="font-black text-slate-900 leading-[1.1] mb-4 sm:mb-6 tracking-tight"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
            >
              Powering Better<br />
              Healthcare
            </h1>
            <p
              className="text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-md mx-auto lg:mx-0"
              style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}
            >
              Purpose-built software and expert maintenance of medical imaging equipment for hospitals, clinics, and radiology centers.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4">
              <Link
                href="about"
                className="bg-slate-900 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="border border-slate-800 text-slate-900 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-semibold hover:bg-white/60 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex-1 w-full max-w-sm sm:max-w-md lg:max-w-none">
            <Image
              src="/hero-illustration.svg"
              alt="Healthcare technology illustration"
              width={600}
              height={500}
              className="w-full h-auto"
              priority
            />
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