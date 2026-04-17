import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import type { Event } from '@/lib/types'
import WorkflowLogo from '@/components/WorkflowLogo'

export const metadata = { title: 'Events — Workflow' }

export default async function EventsPage() {
  const supabase = await createClient()
  const { data: events, error } = await supabase
    .from('events')
    .select('*')
    .order('date', { ascending: true })

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4 flex items-center gap-2 sm:gap-3">
          <WorkflowLogo
            className="flex items-center"
            expandedWidth="7.25rem"
            collapsedWidth="3.5rem"
            expandedHeight="1.25rem"
            collapsedHeight="2.2rem"
          />
          <span className="text-gray-300">/</span>
          <span className="text-gray-600 text-sm">Events</span>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">All Events</h1>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg mb-6 text-sm">
            {error.message}
          </div>
        )}

        {(!events || events.length === 0) && (
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg">No events found.</p>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {events?.map((event: Event) => (
            <Link key={event.id} href={`/events/${event.id}`}>
              <div className="card p-6 hover:border-indigo-300 hover:shadow-md transition-all h-full flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="font-semibold text-gray-900 flex-1 leading-snug">{event.name}</h2>
                  <span className={`text-xs px-2 py-1 rounded-full ml-2 flex-shrink-0 ${
                    event.status === 'published' ? 'bg-green-100 text-green-700' :
                    event.status === 'draft' ? 'bg-gray-100 text-gray-600' :
                    'bg-red-100 text-red-600'
                  }`}>
                    {event.status}
                  </span>
                </div>

                {event.description && (
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1">{event.description}</p>
                )}

                <div className="space-y-1 text-sm text-gray-500 mb-4">
                  <p>📍 {event.venue}</p>
                  <p>📅 {new Date(event.date).toLocaleDateString('en-KE', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</p>
                  <p>🕐 {event.from} – {event.to}</p>
                  <p>👤 {event.organizer}</p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{event.participants_count ?? 0} registered</span>
                  <span className="text-sm text-indigo-600 font-medium">RSVP →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
