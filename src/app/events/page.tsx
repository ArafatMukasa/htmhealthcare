// Marketing site — events page is not active.
// Redirects visitors back to the home page.
import { redirect } from 'next/navigation'

export default function EventsPage() {
  redirect('/')
}
