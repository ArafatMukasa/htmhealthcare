'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type WorkflowLogoProps = {
  href?: string
  className?: string
  threshold?: number
  scrolled?: boolean
  scrollTargetId?: string
  expandedWidth?: string
  collapsedWidth?: string
  expandedHeight?: string
  collapsedHeight?: string
}

export default function WorkflowLogo({
  href = '/',
  className = '',
  threshold = 30,
  scrolled,
  scrollTargetId,
  expandedWidth = '8.5rem',
  collapsedWidth = '4rem',
  expandedHeight = '1.5rem',
  collapsedHeight = '2.5rem',
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

  return (
    <Link href={href} className={className} aria-label="Workflow home">
      <span
        className="relative block origin-left transition-[width,height] duration-300 ease-out"
        style={{
          width: isScrolled ? collapsedWidth : expandedWidth,
          height: isScrolled ? collapsedHeight : expandedHeight,
        }}
      >
        <Image
          src="/assets/images/workflow-logo-horizontal.svg"
          alt=""
          fill
          sizes="160px"
          className={[
            'absolute inset-0 h-full w-full object-contain object-left transition-all duration-300 ease-out',
            isScrolled ? 'scale-95 opacity-0' : 'scale-100 opacity-100',
          ].join(' ')}
        />
        <Image
          src="/assets/images/workflow-logo-stacked.svg"
          alt=""
          fill
          sizes="80px"
          className={[
            'absolute inset-0 h-full w-full object-contain object-left transition-all duration-300 ease-out',
            isScrolled ? 'scale-100 opacity-100' : 'scale-95 opacity-0',
          ].join(' ')}
        />
      </span>
    </Link>
  )
}
