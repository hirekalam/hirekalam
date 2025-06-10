import { requireAuth, getDashboardStats } from "@/lib/auth"
import AdminLayout from "@/components/admin/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, FileText, Eye, TrendingUp } from "lucide-react"

export default async function AdminDashboard() {
  const session = await requireAuth()
  const stats = await getDashboardStats()

  const statCards = [
    {
      title: "Total Posts",
      value: stats.totalPosts,
      description: `${stats.publishedPosts} published, ${stats.draftPosts} drafts`,
      icon: FileText,
      trend: "+12%",
    },
    {
      title: "Total Views",
      value: stats.totalViews.toLocaleString(),
      description: "All time views",
      icon: Eye,
      trend: "+8%",
    },
    {
      title: "Monthly Views",
      value: stats.monthlyViews.toLocaleString(),
      description: "This month",
      icon: TrendingUp,
      trend: "+23%",
    },
    {
      title: "Engagement",
      value: "94%",
      description: "Average read rate",
      icon: BarChart3,
      trend: "+5%",
    },
  ]

  return (
    <AdminLayout user={session.user}>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">Welcome back, {session.user.name}!</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {statCards.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                  <div className="flex items-center pt-1">
                    <span className="text-xs text-green-600">{stat.trend}</span>
                    <span className="text-xs text-muted-foreground ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Recent Activity */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Recent Posts</CardTitle>
              <CardDescription>Your latest blog posts and their performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.topPosts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{post.title}</p>
                      <p className="text-sm text-muted-foreground">{post.views} views</p>
                    </div>
                    <div className="text-sm text-muted-foreground">2 days ago</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <a
                href="/admin/posts/new"
                className="block w-full p-3 text-left border rounded-lg hover:bg-muted transition-colors"
              >
                <div className="font-medium">Create New Post</div>
                <div className="text-sm text-muted-foreground">Start writing a new blog post</div>
              </a>
              <a
                href="/admin/posts"
                className="block w-full p-3 text-left border rounded-lg hover:bg-muted transition-colors"
              >
                <div className="font-medium">Manage Posts</div>
                <div className="text-sm text-muted-foreground">Edit or delete existing posts</div>
              </a>
              <a
                href="/admin/media"
                className="block w-full p-3 text-left border rounded-lg hover:bg-muted transition-colors"
              >
                <div className="font-medium">Media Library</div>
                <div className="text-sm text-muted-foreground">Upload and manage images</div>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
}
