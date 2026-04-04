'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import LogoutButton from './LogoutButton'

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: '📊' },
  { href: '/dashboard/events', label: 'Events', icon: '📅' },
  { href: '/dashboard/participants', label: 'Participants', icon: '👥' },
]

interface Props {
  userEmail: string
}

export default function DashboardSidebar({ userEmail }: Props) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close sidebar whenever the route changes (mobile nav tap)
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* ── Mobile top bar ── */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 flex items-center justify-between px-4 h-14">
        <Link href="/" className="font-bold text-indigo-600 text-base">
          Workflow Africa
        </Link>
        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="Open navigation menu"
        >
          {/* Hamburger icon */}
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* ── Backdrop overlay (mobile only) ── */}
      <div
        className={[
          'md:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* ── Sidebar ── */}
      <aside
        className={[
          // Position: fixed on mobile, static in the flex row on desktop
          'fixed md:static inset-y-0 left-0 z-50',
          // Size
          'w-64 md:w-60 bg-white border-r border-gray-200 flex flex-col flex-shrink-0',
          // Slide transition (mobile only — desktop always visible)
          'transition-transform duration-300 ease-in-out',
          open ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
        ].join(' ')}
      >
        {/* Sidebar header */}
        <div className="p-5 border-b border-gray-200 flex items-center justify-between min-h-[56px]">
          <div className="min-w-0">
            <Link href="/" className="font-bold text-indigo-600 text-lg leading-none">
              Workflow Africa
            </Link>
            <p className="text-xs text-gray-400 mt-1 truncate max-w-[160px]">{userEmail}</p>
          </div>
          {/* Close button — mobile only */}
          <button
            onClick={() => setOpen(false)}
            className="md:hidden ml-2 p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors flex-shrink-0"
            aria-label="Close navigation menu"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
          {navItems.map(({ href, label, icon }) => {
            const isActive =
              href === '/dashboard'
                ? pathname === '/dashboard'
                : pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                className={[
                  'flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-colors',
                  isActive
                    ? 'bg-indigo-50 text-indigo-700 font-medium'
                    : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-700',
                ].join(' ')}
              >
                <span className="text-base">{icon}</span>
                <span>{label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <div className="p-3 border-t border-gray-200">
          <LogoutButton />
        </div>
      </aside>
    </>
  )
}
