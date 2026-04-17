'use client'

import beachFunImage from '../../public/assets/images/Beach_fun.jpg'
import mentorshipSessionImage from '../../public/assets/images/Mentorship_session.jpg'
import z500509Image from '../../public/assets/images/Z50_0509.jpg'
import Navbar from '../Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const heroGallery = [
  {
    src: beachFunImage,
    alt: 'Youth entrepreneurs having fun at the beach',
    className: 'sm:col-span-2 lg:col-span-1 lg:row-span-2',
    imageClassName: 'object-center',
  },
  {
    src: mentorshipSessionImage,
    alt: 'Mentorship session for entrepreneurs',
    className: 'lg:col-span-1 lg:row-span-1',
    imageClassName: 'object-center',
  },
  {
    src: z500509Image,
    alt: 'Festival goers enjoying a community event',
    className: 'lg:col-span-1 lg:row-span-1',
    imageClassName: 'object-center',
  },
] as const

const aboutHighlights = [
  {
    title: 'create incredible events',
    accentClassName:
      'border-amber-200/80 bg-[linear-gradient(135deg,rgba(255,247,237,0.96),rgba(255,255,255,0.92))]',
    dotClassName: 'bg-amber-400',
  },
  {
    title: 'discover memorable ones',
    accentClassName:
      'border-sky-200/80 bg-[linear-gradient(135deg,rgba(240,249,255,0.96),rgba(255,255,255,0.92))]',
    dotClassName: 'bg-sky-400',
  },
] as const

export default function About() {
  const aboutTextRef = useRef<HTMLDivElement | null>(null)
  const [aboutMediaHeight, setAboutMediaHeight] = useState<number | null>(null)

  useEffect(() => {
    const textBlock = aboutTextRef.current

    if (!textBlock || typeof window === 'undefined') {
      return
    }

    const syncAboutMediaHeight = () => {
      if (window.innerWidth >= 1024) {
        setAboutMediaHeight(textBlock.getBoundingClientRect().height)
        return
      }

      setAboutMediaHeight(null)
    }

    syncAboutMediaHeight()

    const resizeObserver = new ResizeObserver(() => {
      syncAboutMediaHeight()
    })

    resizeObserver.observe(textBlock)
    window.addEventListener('resize', syncAboutMediaHeight)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', syncAboutMediaHeight)
    }
  }, [])

  return (
    <>
      <Navbar showAboutLink={false} />

      <div className="px-4 pb-10 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(180deg,_#fafaf9_0%,_#f5f5f4_100%)] shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
          <div className="grid gap-10 px-6 py-8 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] lg:items-center lg:gap-8 lg:px-12 lg:py-12 xl:px-14 xl:py-14">
            <div className="relative">
              <div className="absolute inset-x-0 top-0 h-40 rounded-full bg-orange-100/60 blur-3xl" />
              <div className="relative">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-slate-600">
                  Our Mission
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                  Make hosting and discovering events simple and impactful
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  Great events have the power to educate, entertain, inspire, and connect communities, but the infrastructure behind events — creation, discovery, registration, check-in — had lagged behind. Workflow came into existence to close that gap.
                </p>
              </div>
            </div>

            <div className="grid auto-rows-[160px] grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[190px] lg:auto-rows-[150px] xl:auto-rows-[170px]">
              {heroGallery.map((image) => (
                <div
                  key={image.alt}
                  className={`group relative overflow-hidden rounded-[1.75rem] bg-slate-200 ${image.className}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 24vw, (min-width: 640px) 42vw, 100vw"
                    className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${image.imageClassName}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-white/10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-[linear-gradient(145deg,_#ffffff_0%,_#f8fafc_48%,_#fff7ed_100%)] px-6 py-8 shadow-[0_30px_90px_rgba(15,23,42,0.08)] sm:px-8 lg:px-10 lg:py-10">
            <div className="absolute -left-16 top-12 h-44 w-44 rounded-full bg-orange-100/70 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/4 translate-y-1/4 rounded-full bg-slate-200/70 blur-3xl" />

            <div className="relative grid items-start gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch lg:gap-8">
              <div ref={aboutTextRef} className="max-w-xl">
                <h2 className="inline-flex rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 backdrop-blur">
                  About Workflow
                </h2>
                <h3 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                  A refreshingly different and better events platform.
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  Workflow enables hosts to create incredible events and attendees to discover memorable ones.
                </p>
              </div>

              <div className="relative lg:flex lg:items-stretch">
                <div className="absolute -top-10 right-10 h-28 w-28 rounded-full bg-orange-200/60 blur-3xl" />
                <div className="absolute -bottom-8 left-10 h-36 w-36 rounded-full bg-slate-300/60 blur-3xl" />

                <div
                  className="relative mx-auto h-[360px] w-full max-w-[760px] sm:h-[500px] lg:flex lg:h-auto lg:max-w-none lg:items-stretch"
                  style={aboutMediaHeight ? { height: `${aboutMediaHeight}px` } : undefined}
                >
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src="/assets/images/EventDetailScreen.svg"
                      alt="Workflow product preview"
                      fill
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="object-contain scale-[1.12] sm:scale-[1.18] lg:scale-[1.22]"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Origin story</h2>
          <p className="text-gray-600 font-bold mb-8 max-w-2xl">
            Workflow was born from the pain we had in organizing incredible events.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <h4 className="font-bold mb-2">September 2024</h4>
              <p className="text-sm">Aha moment leading to the ideation of Workflow.</p>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <h4 className="font-bold mb-2">February 2025</h4>
              <p className="text-sm">
                Workflow and its founder graduate from the Pwani Innovation Challenge, a
                groundbreaking initiative of Swahilipot Hub Foundation, supported by the Ministry
                of Investments, Trade and Industry, the World Bank Group, Spineberg Limited, and
                E4Impact Foundation under the KIEP SKIES Initiative.
              </p>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <h4 className="font-bold mb-2">April 2026</h4>
              <p className="text-sm">Beta testing of the evolved version of Workflow begins.</p>
            </div>
          </div>

          <div className="space-y-6 text-gray-700 max-w-3xl">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                2024: The year that changed everything
              </h3>
              <p>
                A chip company called Nvidia quietly became the richest business on the planet
                because the world had finally woken up to the power of artificial intelligence.
                Technology was advancing at breakneck speed. Artificial intelligence was
                transforming industries.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Change was everywhere.</h3>
              <p>Except at the event check-in desk.</p>
              <p>
                As event organizers, we were still relying on paper-based participant lists to
                check in attendees. It slowed everything down. Participant lists got lost. A
                simple name, phone number, or email could become a mystery thanks to someone&apos;s
                unreadable handwriting. And after every event, hours were spent manually entering
                data that should have already existed digitally.
              </p>
              <p>So we asked ourselves a simple question.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Isn&apos;t there a better way of checking in participants?
              </h3>
              <p>
                This question sparked the idea of Workflow - a simple mobile app to digitally
                check in participants at events by replacing the paper-based participant list.
              </p>
              <p className="mt-3">
                No lost lists.
                <br />
                No unreadable handwriting.
                <br />
                No guessing games.
                <br />
                Just real checks-in and real-time data.
              </p>
              <p className="mt-3">
                In the process of solving the check-in problem, we discovered something bigger.
                Events did not just have a check-in problem.
              </p>
            </div>

            <div>
              <p>
                There was a complete infrastructure gap. The creation, the sharing, the
                discovering, the showing up. Every step required different tools - or worse,
                manual work.
              </p>
              <p className="mt-3">So Workflow evolved.</p>
            </div>

            <div>
              <p>
                What started as a simple check-in tool became a full events platform that takes
                you from creating an event to sharing it, getting it discovered, and checking
                participants in - all in one place.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                The world changed in 2024 and continues to change. Workflow was built to change
                with it.
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Host something incredible?</h2>
          <Link
            href="/login"
            className="inline-flex bg-slate-900 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-slate-800 transition-colors"
          >
            Create Event
          </Link>
        </div>
      </div>

      <footer id="about" className="bg-slate-900 text-gray-400 py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Workflow. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
