'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const close = () => setIsOpen(false)

  return (
    <>
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo — always visible */}
          <span className="font-bold text-xl text-indigo-600">Workflow Africa</span>

          {/* Desktop links (≥1024px) */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/events"
              className="text-sm text-gray-600 hover:text-indigo-600 font-medium transition-colors"
            >
              Events
            </Link>
            <Link href="/login" className="btn-primary text-sm">
              Admin Login
            </Link>
          </div>

          {/* Hamburger button (<1024px) */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-600 hover:text-indigo-600 transition-colors rounded-md"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span className="text-xl leading-none select-none" aria-hidden="true">
              {isOpen ? '✕' : '☰'}
            </span>
          </button>
        </div>

        {/* Mobile dropdown (<1024px) */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-2">
            <Link
              href="/events"
              className="text-sm text-gray-600 hover:text-indigo-600 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors"
              onClick={close}
            >
              Events
            </Link>
            <Link
              href="/login"
              className="btn-primary text-sm text-center py-2 mt-1"
              onClick={close}
            >
              Admin Login
            </Link>
          </div>
        )}
      </nav>

      {/* Backdrop — closes menu when clicking outside */}
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
