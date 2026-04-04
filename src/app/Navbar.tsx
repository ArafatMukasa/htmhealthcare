'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-4 px-3 sm:px-4 pointer-events-none">
      <nav
        style={{
          width: scrolled ? 'min(640px, calc(100% - 24px))' : '100%',
          maxWidth: scrolled ? '640px' : '72rem',
          transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1), max-width 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease',
        }}
        className={[
          'pointer-events-auto',
          'flex items-center justify-between',
          'bg-white/70 backdrop-blur-md',
          'border border-white/50',
          'rounded-full px-3 sm:px-5 py-2.5 sm:py-3',
          scrolled ? 'shadow-xl shadow-black/10' : 'shadow-lg shadow-black/5',
        ].join(' ')}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12 12-5.373 12-12S20.627 2 14 2z" fill="#1e293b"/>
            <path d="M10 8c0 0 1 2 0 4s-2 3-1 5 3 3 5 3 4-2 4-4-1-3-3-4-3-1-3-3 1-3 0-4-2 3-2 3z" fill="#f0f9ff"/>
          </svg>
          <span className="font-bold text-base sm:text-lg text-slate-900">Workflow</span>
        </div>

        {/* Nav links — desktop only */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            About
          </Link>
        </div>

        {/* CTA buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            href="/login"
            className="bg-slate-900 text-white px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-slate-800 transition-colors whitespace-nowrap"
          >
            Create Event
          </Link>
          <Link
            href="/events"
            className="hidden sm:inline-flex border border-slate-900 text-slate-900 px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors whitespace-nowrap"
          >
            Discover Events
          </Link>
        </div>
      </nav>
    </div>
  )
}
