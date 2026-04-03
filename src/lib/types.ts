export interface Event {
  id: number
  name: string
  description: string
  organizer: string
  organization: string
  venue: string
  date: string
  from: string
  to: string
  organization_id: number
  status: string
  participants_count: number
}

export interface Participant {
  uuid: string
  name: string
  email: string | null
  phone: string | null
  gender_id: number | null
  person_with_disability_id: number | null
  age_range_id: number | null
  activity_id: number | null
  county_id: number | null
  sub_county_id: number | null
  location: string | null
  signature: string | null
  // Denormalized (populated by DB trigger)
  gender: string | null
  person_with_disability_status: string | null
  age_range: string | null
  activity: string | null
  county: string | null
  sub_county: string | null
}

export interface Gender { id: number; name: string }
export interface AgeRange { id: number; name: string }
export interface DisabilityState { id: number; name: string }
export interface County { id: number; name: string }
export interface SubCounty { id: number; name: string; county_id: number }
