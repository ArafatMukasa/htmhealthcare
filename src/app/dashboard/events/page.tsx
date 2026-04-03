import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import type { Event } from '@/lib/types'
import DeleteEventButton from './DeleteEventButton'

export const metadata = { title: 'Events — Dashboard' }

export default async function DashboardEventsPage() {
  const supabase = await createClient()
  const { data: events, error } = await supabase
    .from('events')
    .select('*')
    .order('date', { ascending: false })

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Events</h1>
          <p className="text-gray-500 mt-1 text-sm">{events?.length ?? 0} total</p>
        </div>
        <Link href="/dashboard/events/new" className="btn-primary text-sm">
          + New Event
        </Link>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg mb-6 text-sm">
          {error.message}
        </div>
      )}

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">Event</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">Date</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">Venue</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">Status</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">Registered</th>
                <th className="px-5 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {events?.map((event: Event) => (
                <tr key={event.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4">
                    <p className="font-medium text-gray-900">{event.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{event.organizer}</p>
                  </td>
                  <td className="px-5 py-4 text-gray-600">
                    {new Date(event.date).toLocaleDateString('en-KE')}
                  </td>
                  <td className="px-5 py-4 text-gray-600 max-w-[160px] truncate">{event.venue}</td>
                  <td className="px-5 py-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      event.status === 'published' ? 'bg-green-100 text-green-700' :
                      event.status === 'draft' ? 'bg-gray-100 text-gray-600' :
                      'bg-red-100 text-red-600'
                    }`}>{event.status}</span>
                  </td>
                  <td className="px-5 py-4 text-gray-600">{event.participants_count ?? 0}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-3">
                      <Link href={`/events/${event.id}`} target="_blank" className="text-gray-400 hover:text-gray-600">View</Link>
                      <Link href={`/dashboard/events/${event.id}/edit`} className="text-indigo-600 hover:text-indigo-700">Edit</Link>
                      <DeleteEventButton eventId={event.id} />
                    </div>
                  </td>
                </tr>
              ))}
              {(!events || events.length === 0) && (
                <tr>
                  <td colSpan={6} className="px-5 py-16 text-center text-gray-500">
                    No events yet.{' '}
                    <Link href="/dashboard/events/new" className="text-indigo-600">Create one →</Link>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
