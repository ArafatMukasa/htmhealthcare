'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const close = () => setIsOpen(false)

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-4 px-3 sm:px-4 pointer-events-none">
        <nav
          style={{
            width: scrolled ? 'min(640px, calc(100% - 24px))' : '100%',
            maxWidth: scrolled ? '640px' : '72rem',
            transition:
              'width 0.5s cubic-bezier(0.4, 0, 0.2, 1), max-width 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease',
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
          {/* Logo — always visible */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12 12-5.373 12-12S20.627 2 14 2z" fill="#1e293b"/>
              <path d="M10 8c0 0 1 2 0 4s-2 3-1 5 3 3 5 3 4-2 4-4-1-3-3-4-3-1-3-3 1-3 0-4-2 3-2 3z" fill="#f0f9ff"/>
            </svg>
            <span className="font-bold text-base sm:text-lg text-slate-900">Workflow</span>
          </div>

          {/* Center nav link — visible from sm (640px+) */}
          <div className="hidden sm:flex items-center gap-6">
            <Link href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
          </div>

          {/* Right side: CTAs + hamburger */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* "Discover Events" — visible from sm (640px+) */}
            <Link
              href="/events"
              className="hidden sm:inline-flex border border-slate-900 text-slate-900 px-4 sm:px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors whitespace-nowrap"
            >
              Discover Events
            </Link>

            {/* "Create Event" — visible from sm (640px+) only */}
            <Link
              href="/login"
              className="hidden sm:inline-flex bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors whitespace-nowrap"
            >
              Create Event
            </Link>

            {/* Hamburger — visible only below sm (640px) */}
            <button
              type="button"
              className="sm:hidden ml-1 p-1.5 text-slate-700 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-100"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <span className="text-base leading-none select-none" aria-hidden="true">
                {isOpen ? '✕' : '☰'}
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile dropdown — only below sm (640px) */}
      {isOpen && (
        <div className="fixed top-16 left-3 right-3 z-50 bg-white/90 backdrop-blur-md border border-white/50 rounded-2xl shadow-xl px-5 py-4 flex flex-col gap-2 sm:hidden">
          <Link
            href="#about"
            className="text-sm text-gray-600 hover:text-gray-900 font-medium py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={close}
          >
            About
          </Link>
          <Link
            href="/events"
            className="border border-slate-900 text-slate-900 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors text-center"
            onClick={close}
          >
            Discover Events
          </Link>
          <Link
            href="/login"
            className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors text-center"
            onClick={close}
          >
            Create Event
          </Link>
        </div>
      )}

      {/* Backdrop — closes menu on outside tap */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={close}
          aria-hidden="true"
        />
      )}
    </>
  )
}
