import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import type { Event } from '@/lib/types'
import Navbar from './Navbar'

export default async function HomePage() {
  const supabase = await createClient()
  const { data: events } = await supabase
    .from('events')
    .select('id, name, date, venue, organizer, status')
    .eq('status', 'published')
    .order('date', { ascending: true })
    .limit(6)

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <Navbar />

      {/* Hero */}
      <section className="bg-indigo-600 text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 lg:gap-16 items-center">

            {/* Left: text + CTA */}
            <div className="text-center lg:text-left">
              <h1 className="text-[clamp(2.25rem,5vw,3.5rem)] font-bold mb-6 leading-tight">
                Event Management<br />for Africa
              </h1>
              <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto lg:mx-0">
                Register for events, track attendance, and manage your organisation's
                workflow — all in one place.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Link
                  href="/events"
                  className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 inline-block transition-colors"
                >
                  Browse Events
                </Link>
              </div>
            </div>

            {/* Right: decorative feature panel (desktop only) */}
            <div className="hidden lg:flex justify-center">
              <div className="bg-white/10 rounded-2xl p-8 border border-white/20 shadow-2xl w-full max-w-sm space-y-4">
                {[
                  { icon: '📅', title: 'Event Management', desc: 'Create & schedule events' },
                  { icon: '👥', title: 'Participant Tracking', desc: 'Demographics & attendance' },
                  { icon: '📱', title: 'Mobile + Web', desc: 'Manage from anywhere' },
                ].map((f) => (
                  <div key={f.title} className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                    <span className="text-3xl shrink-0" aria-hidden="true">{f.icon}</span>
                    <div>
                      <p className="font-semibold text-sm">{f.title}</p>
                      <p className="text-indigo-200 text-xs mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '📅', title: 'Event Management', desc: 'Create and manage events with full scheduling, venue, and status control.' },
              { icon: '👥', title: 'Participant Tracking', desc: 'Collect detailed demographics — gender, age range, county, disability status and more.' },
              { icon: '📱', title: 'Mobile + Web', desc: 'Manage events from the Android app or this web dashboard. One backend, both platforms.' },
            ].map((f) => (
              <div key={f.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {events && events.length > 0 && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
              <Link href="/events" className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">
                View all →
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event: Pick<Event, 'id' | 'name' | 'date' | 'venue' | 'organizer' | 'status'>) => (
                <Link key={event.id} href={`/events/${event.id}`}>
                  <div className="card p-6 hover:border-indigo-300 hover:shadow-md transition-all h-full">
                    <h3 className="font-semibold text-gray-900 mb-3">{event.name}</h3>
                    <div className="space-y-1 text-sm text-gray-500 mb-4">
                      <p>📍 {event.venue}</p>
                      <p>📅 {new Date(event.date).toLocaleDateString('en-KE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      <p>👤 {event.organizer}</p>
                    </div>
                    <span className="text-sm text-indigo-600 font-medium">RSVP →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm">
          <p>© {new Date().getFullYear()} Workflow Africa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
