'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Workflow is on a mission to make hosting and <br className="hidden sm:block" />
            discovery of events simple and impactful.
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Great events have the power to educate, inspire, and connect communities, but the infrastructure behind events — creation, discovery, registration, check-in — had lagged behind. Workflow came into existence to close that gap.
          </p>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <img
                src="/about-who-we-are.jpg"
                alt="Who we are"
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Who we are
              </h2>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                A refreshingly different and better events platform.
              </h3>
              <p className="text-gray-600">
                Workflow enables hosts to create incredible events and attendees to discover memorable ones.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Origin Story Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Origin story
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Workflow was born from the pain we had in organizing incredible events.
          </p>

          {/* Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Card 1 */}
            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <h4 className="font-bold mb-2">September 2024</h4>
              <p className="text-sm">
                aha moment leading to the ideation of Workflow.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <h4 className="font-bold mb-2">February 2025</h4>
              <p className="text-sm">
                Workflow and its founder graduate from the Pwani Innovation Challenge, a groundbreaking initiative of Swahilipot Hub Foundation, supported by the Ministry of Investments, Trade & Industry, the World Bank Group, Spineberg Limited, and E4Impact Foundation under the KIEP SKIES Initiative.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <h4 className="font-bold mb-2">April 2026</h4>
              <p className="text-sm">
                Beta testing of the evolved version of Workflow begins.
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 text-gray-700 max-w-3xl">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">2024: The year that changed everything</h3>
              <p>
              A chip company called Nvidia quietly became the richest business on the planet because the world had finally woken up to the power of artificial intelligence. Technology was advancing at breakneck speed. Artificial intelligence was transforming industries.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Change was everywhere.</h3>
              <p>
                Except at the event check-in desk.
              </p>
              <p>
                As event organizers, we were still relying on paper-based participant lists to check in attendees. It slowed everything down. Participant lists got lost. A simple name, phone number, or email could become a mystery thanks to someone's unreadable handwriting. And after every event, hours were spent manually entering data that should have already existed digitally.
              </p>
              <p>
                So we asked ourselves a simple question.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Isn't there a better way of checking in participants?</h3>
              <p>
                This question sparked the idea of Workflow — a simple mobile app to digitally check in participants at events by replacing the paper-based participant list.
              </p>
              <p className="mt-3">
                No lost lists.<br />
                No unreadable handwriting.<br />
                No guessing games.<br />
                Just real checks-in and real-time data.
              </p>
              <p className="mt-3">
                In the process of solving the check-in problem, we discovered something bigger. Events didn't just have a check-in problem. 
              </p>
            </div>

            <div>
              <p>
                There was a complete infrastructure gap. The creation, the sharing, the discovering, the showing up. Every step required different tools — or worse, manual work.
              </p>
              <p className="mt-3">
                So Workflow evolved.
              </p>
            </div>

            <div>
              <p>
                What started as a simple check-in tool became a full events platform that takes you from creating an event to sharing it, getting it discovered, and checking participants in — all in one place.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">The world changed in 2024 and continues to change. Workflow was built to change with it.</h3>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Create something incredible?
          </h2>
          <Link
            href="/login"
            className="inline-flex bg-slate-900 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-slate-800 transition-colors"
          >
            Create Event
          </Link>
        </div>
      </div>
    </>
  )
}