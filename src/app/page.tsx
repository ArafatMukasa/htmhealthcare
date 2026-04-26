import Link from 'next/link'
import Navbar from './Navbar'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 lg:gap-16 lg:items-center">

            {/* Left: text + CTAs */}
            <div className="text-center lg:text-left">
              <h1
                className="font-black text-slate-900 leading-[1.1] mb-4 sm:mb-6 tracking-tight"
                style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}
              >
                Powering Better<br />
                Healthcare
              </h1>
              <p
                className="text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-md mx-auto lg:mx-0"
                style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}
              >
                Create incredible events as a host, or discover memorable ones as an attendee.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4">
                <Link
                  href="/about"
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

            {/* Right: phone mockup */}
            <div className="flex justify-center items-center mt-12 lg:mt-0">
              <div className="relative">
                <div className="w-56 h-[460px] bg-slate-900 rounded-[42px] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[34px] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-900 rounded-b-2xl z-10" />
                    {/* App content */}
                    <div className="pt-7 px-4 pb-4 h-full flex flex-col">
                      {/* City skyline graphic */}
                      <div className="w-full h-28 rounded-xl mb-4 overflow-hidden bg-gradient-to-br from-sky-400 via-orange-300 to-pink-400 flex items-end justify-center gap-1 px-3 pb-2">
                        {[20, 36, 28, 44, 24, 32, 20, 38].map((h, i) => (
                          <div
                            key={i}
                            className="rounded-t-sm flex-1"
                            style={{
                              height: `${h * 1.5}px`,
                              backgroundColor: ['#6366f1','#f97316','#ec4899','#8b5cf6','#14b8a6','#f59e0b','#3b82f6','#ef4444'][i % 8],
                              opacity: 0.85,
                            }}
                          />
                        ))}
                      </div>
                      {/* Form card */}
                      <div className="bg-gray-50 rounded-xl p-3 flex-1 border border-gray-100">
                        <div className="font-semibold text-xs text-gray-800 mb-3">Founders, Operators, &amp; Investors Mixer</div>
                        <div className="space-y-2">
                          <div>
                            <div className="text-[9px] text-gray-500 mb-0.5">Full name</div>
                            <div className="bg-white border border-gray-200 rounded-md px-2 py-1.5 text-[9px] text-gray-400">Your name here</div>
                          </div>
                          <div>
                            <div className="text-[9px] text-gray-500 mb-0.5">Email</div>
                            <div className="bg-white border border-gray-200 rounded-md px-2 py-1.5 text-[9px] text-gray-400">Add email address</div>
                          </div>
                          <div className="mt-3 bg-slate-900 rounded-md px-2 py-1.5 text-center text-[9px] font-semibold text-white">
                            Register
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
