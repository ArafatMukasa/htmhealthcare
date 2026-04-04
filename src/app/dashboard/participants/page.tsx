import { createClient } from '@/lib/supabase/server'
import type { Participant, Event } from '@/lib/types'
import ParticipantFilter from './ParticipantFilter'

export const metadata = { title: 'Participants — Dashboard' }

interface Props { searchParams: Promise<{ event_id?: string }> }

export default async function ParticipantsPage({ searchParams }: Props) {
  const { event_id } = await searchParams
  const supabase = await createClient()

  const [{ data: participants, error }, { data: events }] = await Promise.all([
    event_id
      ? supabase.from('participants').select('*').eq('activity_id', event_id).order('name')
      : supabase.from('participants').select('*').order('name'),
    supabase.from('events').select('id, name').order('date', { ascending: false }),
  ])

  return (
    <div className="p-4 sm:p-8">
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Participants</h1>
          <p className="text-gray-500 mt-1 text-sm">{participants?.length ?? 0} total</p>
        </div>
      </div>

      <ParticipantFilter
        events={(events ?? []) as Pick<Event, 'id' | 'name'>[]}
        currentEventId={event_id}
      />

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
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">Name</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">Contact</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">Gender</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">Age Range</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">County</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">Disability</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {participants?.map((p: Participant) => (
                <tr key={p.uuid} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4 font-medium text-gray-900">{p.name}</td>
                  <td className="px-5 py-4 text-gray-600">
                    {p.email && <p>{p.email}</p>}
                    {p.phone && <p className="text-xs text-gray-400">{p.phone}</p>}
                  </td>
                  <td className="px-5 py-4 text-gray-600">{p.gender ?? '—'}</td>
                  <td className="px-5 py-4 text-gray-600">{p.age_range ?? '—'}</td>
                  <td className="px-5 py-4 text-gray-600">
                    {p.county ?? '—'}
                    {p.sub_county && <span className="text-xs text-gray-400 block">{p.sub_county}</span>}
                  </td>
                  <td className="px-5 py-4 text-gray-600">{p.person_with_disability_status ?? '—'}</td>
                </tr>
              ))}
              {(!participants || participants.length === 0) && (
                <tr>
                  <td colSpan={6} className="px-5 py-16 text-center text-gray-500">
                    No participants found.
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
