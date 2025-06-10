import { requireAuth } from "@/lib/auth"
import { getAllBlogPosts } from "@/lib/blog-admin"
import AdminLayout from "@/components/admin/admin-layout"
import PostsTable from "@/components/admin/posts-table"
import { Button } from "@/components/ui/button"
import { PenTool } from "lucide-react"
import Link from "next/link"

export default async function AdminPostsPage() {
  const session = await requireAuth()
  const posts = await getAllBlogPosts()

  return (
    <AdminLayout user={session.user}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">All Posts</h2>
            <p className="text-muted-foreground">Manage your blog posts</p>
          </div>
          <Link href="/admin/posts/new">
            <Button>
              <PenTool className="mr-2 h-4 w-4" />
              New Post
            </Button>
          </Link>
        </div>

        <PostsTable posts={posts} />
      </div>
    </AdminLayout>
  )
}
