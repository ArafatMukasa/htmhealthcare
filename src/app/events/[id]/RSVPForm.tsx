'use client'

import { useState } from 'react'
import type { Gender, AgeRange, DisabilityState, County, SubCounty } from '@/lib/types'

interface Props {
  eventId: number
  genders: Gender[]
  ageRanges: AgeRange[]
  disabilityStates: DisabilityState[]
  counties: County[]
  allSubCounties: SubCounty[]
}

export default function RSVPForm({ eventId, genders, ageRanges, disabilityStates, counties, allSubCounties }: Props) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    gender_id: '',
    age_range_id: '',
    person_with_disability_id: '',
    county_id: '',
    sub_county_id: '',
    location: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const subCounties = form.county_id
    ? allSubCounties.filter(s => s.county_id === Number(form.county_id))
    : []

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'county_id' ? { sub_county_id: '' } : {}),
    }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const payload = {
      name: form.name,
      email: form.email || null,
      phone: form.phone || null,
      gender_id: form.gender_id ? Number(form.gender_id) : null,
      age_range_id: form.age_range_id ? Number(form.age_range_id) : null,
      person_with_disability_id: form.person_with_disability_id ? Number(form.person_with_disability_id) : null,
      county_id: form.county_id ? Number(form.county_id) : null,
      sub_county_id: form.sub_county_id ? Number(form.sub_county_id) : null,
      location: form.location || null,
      activity_id: eventId,
    }

    const res = await fetch('/api/rsvp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const data = await res.json()
    if (!res.ok) {
      setError(data.error ?? 'Something went wrong. Please try again.')
    } else {
      setSuccess(true)
    }
    setLoading(false)
  }

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-lg font-semibold text-green-800 mb-1">You're registered!</h3>
        <p className="text-green-700 text-sm">Thank you for your RSVP. We look forward to seeing you at the event.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label className="label">Full Name <span className="text-red-500">*</span></label>
          <input name="name" value={form.name} onChange={handleChange} required className="input" placeholder="Jane Doe" />
        </div>
        <div>
          <label className="label">Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} className="input" placeholder="jane@example.com" />
        </div>
        <div>
          <label className="label">Phone</label>
          <input name="phone" value={form.phone} onChange={handleChange} className="input" placeholder="+254 7xx xxx xxx" />
        </div>
        <div>
          <label className="label">Gender</label>
          <select name="gender_id" value={form.gender_id} onChange={handleChange} className="input">
            <option value="">Select…</option>
            {genders.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
          </select>
        </div>
        <div>
          <label className="label">Age Range</label>
          <select name="age_range_id" value={form.age_range_id} onChange={handleChange} className="input">
            <option value="">Select…</option>
            {ageRanges.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="label">Disability Status</label>
          <select name="person_with_disability_id" value={form.person_with_disability_id} onChange={handleChange} className="input">
            <option value="">Select…</option>
            {disabilityStates.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
          </select>
        </div>
        <div>
          <label className="label">County</label>
          <select name="county_id" value={form.county_id} onChange={handleChange} className="input">
            <option value="">Select…</option>
            {counties.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </div>
        <div>
          <label className="label">Sub-County</label>
          <select name="sub_county_id" value={form.sub_county_id} onChange={handleChange} className="input" disabled={!form.county_id}>
            <option value="">Select county first…</option>
            {subCounties.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="label">Specific Location / Village</label>
          <input name="location" value={form.location} onChange={handleChange} className="input" placeholder="e.g. Westlands, Nairobi" />
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg">{error}</div>
      )}

      <button type="submit" disabled={loading} className="btn-primary w-full">
        {loading ? 'Submitting…' : 'Submit RSVP'}
      </button>
    </form>
  )
}
