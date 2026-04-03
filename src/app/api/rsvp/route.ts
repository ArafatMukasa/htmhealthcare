import { createServiceClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!body.name || typeof body.name !== 'string' || body.name.trim() === '') {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 })
    }

    const supabase = createServiceClient()

    const { error } = await supabase.from('participants').insert([{
      name: body.name.trim(),
      email: body.email ?? null,
      phone: body.phone ?? null,
      gender_id: body.gender_id ?? null,
      age_range_id: body.age_range_id ?? null,
      person_with_disability_id: body.person_with_disability_id ?? null,
      county_id: body.county_id ?? null,
      sub_county_id: body.sub_county_id ?? null,
      location: body.location ?? null,
      activity_id: body.activity_id ?? null,
    }])

    if (error) {
      console.error('RSVP insert error:', error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('RSVP route error:', err)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
