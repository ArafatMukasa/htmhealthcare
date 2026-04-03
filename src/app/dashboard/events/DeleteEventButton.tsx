'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function DeleteEventButton({ eventId }: { eventId: number }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleDelete() {
    if (!confirm('Delete this event? This cannot be undone.')) return
    setLoading(true)
    const supabase = createClient()
    await supabase.from('events').delete().eq('id', eventId)
    router.refresh()
    setLoading(false)
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="text-sm text-red-500 hover:text-red-700 disabled:opacity-50"
    >
      {loading ? '…' : 'Delete'}
    </button>
  )
}
