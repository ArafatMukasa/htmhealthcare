'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import WorkflowLogo from '@/components/WorkflowLogo'

type NavbarProps = {
  showAboutLink?: boolean
}

export default function Navbar({ showAboutLink = true }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const close = () => setIsOpen(false)

  return (
    <>
      <div className="pointer-events-none fixed left-0 right-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
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
            'rounded-full px-3 py-2.5 sm:px-5 sm:py-3',
            'border border-white/50',
            'bg-white/70 backdrop-blur-md',
            scrolled ? 'shadow-xl shadow-black/10' : 'shadow-lg shadow-black/5',
          ].join(' ')}
        >
          <WorkflowLogo
            scrolled={scrolled}
            className="flex flex-shrink-0 items-center"
            expandedWidth="clamp(7.5rem, 13vw, 9.5rem)"
            collapsedWidth="clamp(3.8rem, 7vw, 4.6rem)"
            expandedHeight="clamp(1.35rem, 2vw, 1.7rem)"
            collapsedHeight="clamp(2rem, 3.4vw, 2.6rem)"
          />

          <div className="hidden items-center gap-6 sm:flex">
            {showAboutLink && (
              <Link href="/about" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                About
              </Link>
            )}
          </div>

          <div className="flex flex-shrink-0 items-center gap-2">
            <Link
              href="/events"
              className="hidden whitespace-nowrap rounded-full border border-slate-900 px-4 py-2 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50 sm:inline-flex sm:px-5"
            >
              Discover Events
            </Link>

            <Link
              href="/login"
              className="hidden whitespace-nowrap rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 sm:inline-flex"
            >
              Create Event
            </Link>

            <button
              type="button"
              className="ml-1 rounded-full p-1.5 text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 sm:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <span className="select-none text-base leading-none" aria-hidden="true">
                {isOpen ? '\u00D7' : '\u2630'}
              </span>
            </button>
          </div>
        </nav>
      </div>

      {isOpen && (
        <div className="fixed left-3 right-3 top-16 z-50 flex flex-col gap-2 rounded-2xl border border-white/50 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md sm:hidden">
          {showAboutLink && (
            <Link
              href="/about"
              className="rounded-lg px-2 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
              onClick={close}
            >
              About
            </Link>
          )}
          <Link
            href="/events"
            className="rounded-full border border-slate-900 px-5 py-2.5 text-center text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50"
            onClick={close}
          >
            Discover Events
          </Link>
          <Link
            href="/login"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-slate-800"
            onClick={close}
          >
            Create Event
          </Link>
        </div>
      )}

      {isOpen && <div className="fixed inset-0 z-40" onClick={close} aria-hidden="true" />}
    </>
  )
}
