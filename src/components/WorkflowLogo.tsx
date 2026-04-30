'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

type WorkflowLogoProps = {
  href?: string
  className?: string
  threshold?: number
  scrolled?: boolean
  scrollTargetId?: string
  variant?: 'light' | 'dark'
  collapseToMark?: boolean
}

function HtmMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={(size * 82) / 72}
      viewBox="0 0 72 82"
      fill="none"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <rect x="4" y="4" width="26" height="26" rx="13" fill="#F24E4E" />
      <rect x="42" y="4" width="26" height="26" rx="13" fill="#FF9F1C" />
      <rect x="4" y="32" width="64" height="18" rx="8" fill="#7B5CF0" />
      <rect x="4" y="52" width="26" height="26" rx="13" fill="#00BFA5" />
      <rect x="42" y="52" width="26" height="26" rx="13" fill="#1FB6FF" />
    </svg>
  )
}

export default function WorkflowLogo({
  href = '/',
  className = '',
  threshold = 30,
  scrolled,
  scrollTargetId,
  variant = 'light',
  collapseToMark = true,
}: WorkflowLogoProps) {
  const [internalScrolled, setInternalScrolled] = useState(false)

  useEffect(() => {
    if (typeof scrolled === 'boolean') {
      return
    }

    const scrollTarget = scrollTargetId ? document.getElementById(scrollTargetId) : null

    const readScrollPosition = () => {
      const nextScrollTop = scrollTarget ? scrollTarget.scrollTop : window.scrollY
      setInternalScrolled(nextScrollTop > threshold)
    }

    readScrollPosition()

    if (scrollTarget) {
      scrollTarget.addEventListener('scroll', readScrollPosition, { passive: true })
      return () => scrollTarget.removeEventListener('scroll', readScrollPosition)
    }

    window.addEventListener('scroll', readScrollPosition, { passive: true })
    return () => window.removeEventListener('scroll', readScrollPosition)
  }, [scrolled, scrollTargetId, threshold])

  const isScrolled = scrolled ?? internalScrolled
  const showWordmark = !(collapseToMark && isScrolled)

  const textColor = variant === 'dark' ? '#FFFFFF' : '#0E1117'
  const dividerColor = variant === 'dark' ? 'rgba(255,255,255,0.18)' : 'rgba(14,17,23,0.12)'

  return (
    <Link href={href} className={`group inline-flex items-center gap-2.5 sm:gap-3 ${className}`} aria-label="HTM Healthcare home">
      <HtmMark size={28} />
      <span
        className="overflow-hidden transition-[max-width,opacity] duration-500 ease-out"
        style={{
          maxWidth: showWordmark ? '14rem' : '0rem',
          opacity: showWordmark ? 1 : 0,
        }}
      >
        <span className="flex items-center gap-2.5 whitespace-nowrap pr-1">
          <span
            aria-hidden="true"
            className="hidden h-7 w-px sm:block"
            style={{ background: dividerColor }}
          />
          <span className="flex items-baseline">
            <span
              className="text-[1.2rem] sm:text-[1.35rem] font-extrabold leading-none tracking-tight"
              style={{ color: textColor, letterSpacing: '-0.04em' }}
            >
              HTM
            </span>
            <span
              className="ml-1.5 text-[1.2rem] sm:text-[1.35rem] font-light leading-none"
              style={{ color: textColor, opacity: 0.72 }}
            >
              Healthcare
            </span>
          </span>
        </span>
      </span>
    </Link>
  )
}
