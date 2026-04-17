import { notFound } from 'next/navigation'
import Link from 'next/link'
import { createServiceClient } from '@/lib/supabase/server'
import RSVPForm from './RSVPForm'
import type { Event, Gender, AgeRange, DisabilityState, County, SubCounty } from '@/lib/types'
import WorkflowLogo from '@/components/WorkflowLogo'

interface Props { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const supabase = createServiceClient()
  const { data: event } = await supabase.from('events').select('name, description').eq('id', id).single()
  return {
    title: event ? `${event.name} — Workflow Africa` : 'Event — Workflow Africa',
    description: event?.description ?? '',
  }
}

export default async function EventDetailPage({ params }: Props) {
  const { id } = await params
  const supabase = createServiceClient()

  const [
    { data: event },
    { data: genders },
    { data: ageRanges },
    { data: disabilityStates },
    { data: counties },
    { data: subCounties },
  ] = await Promise.all([
    supabase.from('events').select('*').eq('id', id).single(),
    supabase.from('gender_names').select('id, name').order('id'),
    supabase.from('age_range_names').select('id, name').order('id'),
    supabase.from('person_with_disability_states').select('id, name').order('id'),
    supabase.from('counties').select('id, name').order('name'),
    supabase.from('sub_counties').select('id, name, county_id').order('name'),
  ])

  if (!event) notFound()

  const e = event as Event

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 sm:py-4 flex items-center gap-2 text-sm overflow-x-auto">
          <WorkflowLogo
            className="flex items-center"
            expandedWidth="7.25rem"
            collapsedWidth="3.5rem"
            expandedHeight="1.25rem"
            collapsedHeight="2.2rem"
          />
          <span className="text-gray-300">/</span>
          <Link href="/events" className="text-gray-600 hover:text-indigo-600 whitespace-nowrap">Events</Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-600 truncate max-w-[140px] sm:max-w-xs">{e.name}</span>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 grid md:grid-cols-5 gap-6 sm:gap-8">
        {/* Event Details */}
        <div className="md:col-span-3">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <span className={`text-xs px-2 py-1 rounded-full ${
              e.status === 'published' ? 'bg-green-100 text-green-700' :
              e.status === 'draft' ? 'bg-gray-100 text-gray-600' :
              'bg-red-100 text-red-600'
            }`}>{e.status}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{e.name}</h1>

          {e.description && (
            <p className="text-gray-600 mb-6 leading-relaxed">{e.description}</p>
          )}

          <div className="card p-5 space-y-3">
            <div className="flex gap-3">
              <span className="text-xl flex-shrink-0">📅</span>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-0.5">Date</p>
                <p className="text-gray-900 font-medium">
                  {new Date(e.date).toLocaleDateString('en-KE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-xl flex-shrink-0">🕐</span>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-0.5">Time</p>
                <p className="text-gray-900 font-medium">{e.from} – {e.to}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-xl flex-shrink-0">📍</span>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-0.5">Venue</p>
                <p className="text-gray-900 font-medium">{e.venue}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-xl flex-shrink-0">👤</span>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-0.5">Organiser</p>
                <p className="text-gray-900 font-medium">{e.organizer}</p>
                {e.organization && <p className="text-sm text-gray-500">{e.organization}</p>}
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-xl flex-shrink-0">👥</span>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-0.5">Registered</p>
                <p className="text-gray-900 font-medium">{e.participants_count ?? 0} participants</p>
              </div>
            </div>
          </div>
        </div>

        {/* RSVP Form */}
        <div className="md:col-span-2">
          <div className="card p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-1">RSVP for this Event</h2>
            <p className="text-sm text-gray-500 mb-6">Fill in your details to register.</p>
            <RSVPForm
              eventId={e.id}
              genders={(genders ?? []) as Gender[]}
              ageRanges={(ageRanges ?? []) as AgeRange[]}
              disabilityStates={(disabilityStates ?? []) as DisabilityState[]}
              counties={(counties ?? []) as County[]}
              allSubCounties={(subCounties ?? []) as SubCounty[]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
