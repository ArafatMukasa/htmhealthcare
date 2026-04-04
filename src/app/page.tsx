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
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 pt-32 pb-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 flex items-center gap-12">
          {/* Left: text + CTAs */}
          <div className="flex-1 min-w-0">
            <h1 className="text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Memorable Event Experiences<br />
              start here<br />
            </h1>
            <p className="text-base text-gray-600 mb-8 leading-relaxed max-w-md">
              Create memorable events as a host, or discover memorable ones as an attendee.<br />
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://workflowafrica.com/login"
                className="bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors"
              >
                Create Event
              </Link>
              <Link
                href="https://workflowafrica.com/events"
                className="border border-slate-800 text-slate-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/60 transition-colors"
              >
                Discover Events
              </Link>
            </div>
          </div>

          {/* Right: phone mockup */}
          <div className="hidden md:flex flex-shrink-0 justify-center items-center">
            <div className="relative">
              <div className="w-56 h-[460px] bg-slate-900 rounded-[42px] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[34px] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-900 rounded-b-2xl z-10" />
                  {/* App content */}
                  <div className="pt-7 px-4 pb-4 h-full flex flex-col">
                    {/* City skyline graphic */}
                    <div className="w-full h-28 rounded-xl mb-4 overflow-hidden bg-gradient-to-br from-sky-400 via-orange-300 to-pink-400 flex items-end justify-center gap-1 px-3 pb-2">
                      {[20, 36, 28, 44, 24, 32, 20, 38].map((h, i) => (
                        <div
                          key={i}
                          className="rounded-t-sm flex-1"
                          style={{
                            height: `${h * 1.5}px`,
                            backgroundColor: ['#6366f1','#f97316','#ec4899','#8b5cf6','#14b8a6','#f59e0b','#3b82f6','#ef4444'][i % 8],
                            opacity: 0.85,
                          }}
                        />
                      ))}
                    </div>
                    {/* Form card */}
                    <div className="bg-gray-50 rounded-xl p-3 flex-1 border border-gray-100">
                      <div className="font-semibold text-xs text-gray-800 mb-3">Tech Summit Lagos</div>
                      <div className="space-y-2">
                        <div>
                          <div className="text-[9px] text-gray-500 mb-0.5">Full name</div>
                          <div className="bg-white border border-gray-200 rounded-md px-2 py-1.5 text-[9px] text-gray-400">Your name here</div>
                        </div>
                        <div>
                          <div className="text-[9px] text-gray-500 mb-0.5">Email</div>
                          <div className="bg-white border border-gray-200 rounded-md px-2 py-1.5 text-[9px] text-gray-400">Add email address</div>
                        </div>
                        <div className="mt-3 bg-orange-500 rounded-md px-2 py-1.5 text-center text-[9px] font-semibold text-white">
                          Register
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Upcoming Events */}
      {events && events.length > 0 && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
              <Link href="/events" className="text-slate-900 hover:text-slate-700 font-medium text-sm underline underline-offset-2">
                View all →
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event: Pick<Event, 'id' | 'name' | 'date' | 'venue' | 'organizer' | 'status'>) => (
                <Link key={event.id} href={`/events/${event.id}`}>
                  <div className="card p-6 hover:border-slate-300 hover:shadow-md transition-all h-full rounded-2xl">
                    <h3 className="font-semibold text-gray-900 mb-3">{event.name}</h3>
                    <div className="space-y-1 text-sm text-gray-500 mb-4">
                      <p>📍 {event.venue}</p>
                      <p>📅 {new Date(event.date).toLocaleDateString('en-KE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      <p>👤 {event.organizer}</p>
                    </div>
                    <span className="text-sm text-slate-900 font-medium">RSVP →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer id="about" className="bg-slate-900 text-gray-400 py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Workflow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
