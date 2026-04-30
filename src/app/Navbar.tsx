'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import WorkflowLogo from '@/components/WorkflowLogo'

const navLinks = [
  { href: '/solutions', label: 'Solutions' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
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
      <div className="pointer-events-none fixed left-0 right-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-6 sm:pt-5">
        <nav
          style={{
            transition:
              'box-shadow 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
          }}
          className={[
            'pointer-events-auto w-full max-w-6xl',
            'relative flex items-center justify-between',
            'rounded-full pl-4 pr-2 py-2 sm:pl-6 sm:pr-2.5 sm:py-2.5',
            'border',
            scrolled
              ? 'border-brand-charcoal/10 bg-white/85 backdrop-blur-xl shadow-lg shadow-brand-charcoal/5'
              : 'border-white/60 bg-white/60 backdrop-blur-md shadow-sm shadow-brand-charcoal/5',
          ].join(' ')}
        >
          <WorkflowLogo scrolled={scrolled} />

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-6 py-2 text-sm font-medium text-brand-charcoal/70 transition-colors hover:bg-brand-charcoal/5 hover:text-brand-charcoal"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-shrink-0 items-center gap-2">
            <Link
              href="/contact"
              className="hidden whitespace-nowrap rounded-full bg-brand-charcoal px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-navy hover:shadow-lg hover:shadow-brand-charcoal/20 sm:inline-flex"
            >
              Contact Us
            </Link>

            <button
              type="button"
              className="ml-1 rounded-full p-2 text-brand-charcoal/80 transition-colors hover:bg-brand-charcoal/5 hover:text-brand-charcoal lg:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {isOpen && (
        <div className="fixed left-3 right-3 top-20 z-50 flex flex-col gap-1 rounded-3xl border border-brand-charcoal/10 bg-white/95 px-4 py-4 shadow-2xl backdrop-blur-md lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-brand-charcoal/80 transition-colors hover:bg-brand-charcoal/5"
              onClick={close}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 rounded-full bg-brand-charcoal px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-navy"
            onClick={close}
          >
            Contact Us
          </Link>
        </div>
      )}

      {isOpen && <div className="fixed inset-0 z-40" onClick={close} aria-hidden="true" />}
    </>
  )
}
