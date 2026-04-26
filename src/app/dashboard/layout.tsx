// Dashboard not used in the static marketing site.
import { redirect } from 'next/navigation'

export default function DashboardLayout({ children: _ }: { children: React.ReactNode }) {
  redirect('/')
}
