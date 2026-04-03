import { createClient } from '@/lib/supabase/server'
import EventForm from '../EventForm'

export const metadata = { title: 'New Event — Dashboard' }

export default async function NewEventPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  // Read org_id from user metadata (set during signup in Android app)
  const organizationId = (user?.user_metadata?.org_id as number) ?? 1

  return (
    <div className="p-8 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">New Event</h1>
        <p className="text-gray-500 mt-1 text-sm">Fill in the details below to create a new event.</p>
      </div>
      <EventForm organizationId={organizationId} />
    </div>
  )
}
