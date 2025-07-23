import { requireAdminAuth, getAdvancedDashboardStats } from "@/lib/otp-auth"
import AdvancedAdminLayout from "@/components/admin/advanced-admin-layout"
import AdvancedDashboard from "@/components/admin/advanced-dashboard"

export default async function AdminDashboardPage() {
  const session = await requireAdminAuth()
  const stats = await getAdvancedDashboardStats()

  return (
    <AdvancedAdminLayout user={session.user}>
      <AdvancedDashboard stats={stats} />
    </AdvancedAdminLayout>
  )
}
