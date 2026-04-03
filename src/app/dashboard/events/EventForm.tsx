'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import type { Event } from '@/lib/types'

interface Props {
  event?: Event
  organizationId: number
}

export default function EventForm({ event, organizationId }: Props) {
  const router = useRouter()
  const isEdit = !!event

  const [form, setForm] = useState({
    name: event?.name ?? '',
    description: event?.description ?? '',
    organizer: event?.organizer ?? '',
    organization: event?.organization ?? '',
    venue: event?.venue ?? '',
    date: event?.date ?? '',
    from: event?.from ?? '',
    to: event?.to ?? '',
    status: event?.status ?? 'draft',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const supabase = createClient()
    const payload = { ...form, organization_id: organizationId }

    const { error } = isEdit
      ? await supabase.from('events').update(payload).eq('id', event!.id)
      : await supabase.from('events').insert([payload])

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/dashboard/events')
      router.refresh()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
      <div>
        <label className="label">Event Name <span className="text-red-500">*</span></label>
        <input name="name" value={form.name} onChange={handleChange} required className="input" placeholder="Community Health Forum" />
      </div>

      <div>
        <label className="label">Description</label>
        <textarea name="description" value={form.description} onChange={handleChange} rows={4} className="input resize-none" placeholder="What is this event about?" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="label">Organiser <span className="text-red-500">*</span></label>
          <input name="organizer" value={form.organizer} onChange={handleChange} required className="input" placeholder="Jane Doe" />
        </div>
        <div>
          <label className="label">Organisation</label>
          <input name="organization" value={form.organization} onChange={handleChange} className="input" placeholder="Ministry of Health" />
        </div>
      </div>

      <div>
        <label className="label">Venue <span className="text-red-500">*</span></label>
        <input name="venue" value={form.venue} onChange={handleChange} required className="input" placeholder="Kenyatta International Convention Centre, Nairobi" />
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className="label">Date <span className="text-red-500">*</span></label>
          <input type="date" name="date" value={form.date} onChange={handleChange} required className="input" />
        </div>
        <div>
          <label className="label">Start Time <span className="text-red-500">*</span></label>
          <input type="time" name="from" value={form.from} onChange={handleChange} required className="input" />
        </div>
        <div>
          <label className="label">End Time <span className="text-red-500">*</span></label>
          <input type="time" name="to" value={form.to} onChange={handleChange} required className="input" />
        </div>
      </div>

      <div>
        <label className="label">Status</label>
        <select name="status" value={form.status} onChange={handleChange} className="input">
          <option value="draft">Draft</option>
          <option value="published">Published</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg">{error}</div>
      )}

      <div className="flex gap-3 pt-2">
        <button type="submit" disabled={loading} className="btn-primary">
          {loading ? (isEdit ? 'Saving…' : 'Creating…') : (isEdit ? 'Save Changes' : 'Create Event')}
        </button>
        <button type="button" onClick={() => router.back()} className="btn-secondary">
          Cancel
        </button>
      </div>
    </form>
  )
}
