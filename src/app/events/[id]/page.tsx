// Event detail pages are not part of the marketing site.
import { redirect } from 'next/navigation'

export default function EventDetailPage() {
  redirect('/')
}
