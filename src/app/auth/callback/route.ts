// Auth callback not used in the marketing site.
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.redirect('/')
}
