import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import EventForm from '../../EventForm'
import type { Event } from '@/lib/types'

interface Props { params: Promise<{ id: string }> }

export const metadata = { title: 'Edit Event — Dashboard' }

export default async function EditEventPage({ params }: Props) {
  const { id } = await params
  const supabase = await createClient()

  const [{ data: event }, { data: { user } }] = await Promise.all([
    supabase.from('events').select('*').eq('id', id).single(),
    supabase.auth.getUser(),
  ])

  if (!event) notFound()

  const organizationId = (user?.user_metadata?.org_id as number) ?? 1

  return (
    <div className="p-8 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Edit Event</h1>
        <p className="text-gray-500 mt-1 text-sm">{event.name}</p>
      </div>
      <EventForm event={event as Event} organizationId={organizationId} />
    </div>
  )
}
