import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import type { Event } from '@/lib/types'

export const metadata = { title: 'Dashboard — Workflow Africa' }

export default async function DashboardPage() {
  const supabase = await createClient()

  const [
    { count: eventsCount },
    { count: participantsCount },
    { data: recentEvents },
  ] = await Promise.all([
    supabase.from('events').select('*', { count: 'exact', head: true }),
    supabase.from('participants').select('*', { count: 'exact', head: true }),
    supabase.from('events').select('id, name, date, status, participants_count').order('id', { ascending: false }).limit(5),
  ])

  return (
    <div className="p-4 sm:p-8 max-w-5xl">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1 text-sm">Overview of events and participants</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-6 sm:mb-8">
        <div className="card p-4 sm:p-6">
          <p className="text-xs sm:text-sm text-gray-500 mb-1">Total Events</p>
          <p className="text-3xl sm:text-4xl font-bold text-gray-900">{eventsCount ?? 0}</p>
        </div>
        <div className="card p-4 sm:p-6">
          <p className="text-xs sm:text-sm text-gray-500 mb-1">Total Participants</p>
          <p className="text-3xl sm:text-4xl font-bold text-gray-900">{participantsCount ?? 0}</p>
        </div>
      </div>

      {/* Quick actions */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
        <Link href="/dashboard/events/new" className="btn-primary text-sm">
          + New Event
        </Link>
        <Link href="/dashboard/events" className="btn-secondary text-sm">
          Manage Events
        </Link>
        <Link href="/dashboard/participants" className="btn-secondary text-sm">
          View Participants
        </Link>
      </div>

      {/* Recent Events */}
      <div className="card overflow-hidden">
        <div className="px-4 sm:px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-semibold text-gray-900">Recent Events</h2>
          <Link href="/dashboard/events" className="text-sm text-indigo-600 hover:text-indigo-700">View all →</Link>
        </div>
        <div className="divide-y divide-gray-50">
          {recentEvents?.map((event: Pick<Event, 'id' | 'name' | 'date' | 'status' | 'participants_count'>) => (
            <div key={event.id} className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="font-medium text-gray-900 text-sm truncate">{event.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {new Date(event.date).toLocaleDateString('en-KE')} · {event.participants_count ?? 0} participants
                </p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <span className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${
                  event.status === 'published' ? 'bg-green-100 text-green-700' :
                  event.status === 'draft' ? 'bg-gray-100 text-gray-600' :
                  'bg-red-100 text-red-600'
                }`}>{event.status}</span>
                <Link href={`/dashboard/events/${event.id}/edit`} className="text-xs text-indigo-600 hover:text-indigo-700">
                  Edit
                </Link>
              </div>
            </div>
          ))}
          {(!recentEvents || recentEvents.length === 0) && (
            <div className="px-4 sm:px-6 py-10 text-center text-sm text-gray-500">
              No events yet.{' '}
              <Link href="/dashboard/events/new" className="text-indigo-600">Create one →</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
