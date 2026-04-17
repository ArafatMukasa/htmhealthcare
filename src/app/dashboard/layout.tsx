import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import DashboardSidebar from './DashboardSidebar'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  return (
    <div className="min-h-screen bg-gray-50 md:flex">
      {/* Sidebar — handles its own mobile top bar + slide-in behaviour */}
      <DashboardSidebar userEmail={user.email ?? ''} />

      {/* Main content — on mobile, offset by the fixed top bar height (14 = 56px) */}
      <main id="dashboard-scroll-area" className="flex-1 overflow-auto pt-14 md:pt-0 min-w-0">
        {children}
      </main>
    </div>
  )
}
