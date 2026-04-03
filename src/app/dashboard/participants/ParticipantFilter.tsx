'use client'

import { useRouter } from 'next/navigation'

interface Props {
  events: { id: number; name: string }[]
  currentEventId?: string
}

export default function ParticipantFilter({ events, currentEventId }: Props) {
  const router = useRouter()

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const val = e.target.value
    router.push(val ? `/dashboard/participants?event_id=${val}` : '/dashboard/participants')
  }

  return (
    <div className="flex gap-3 items-center mb-6">
      <select
        defaultValue={currentEventId ?? ''}
        className="input max-w-xs text-sm"
        onChange={handleChange}
      >
        <option value="">All Events</option>
        {events.map(ev => (
          <option key={ev.id} value={ev.id}>{ev.name}</option>
        ))}
      </select>
      {currentEventId && (
        <a href="/dashboard/participants" className="text-sm text-gray-500 hover:text-gray-700">
          Clear filter ✕
        </a>
      )}
    </div>
  )
}
