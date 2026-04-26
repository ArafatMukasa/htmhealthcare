// RSVP not used in the marketing site.
import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json({ message: 'Not available' }, { status: 404 })
}
