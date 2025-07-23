import { requireAdminAuth } from "@/lib/otp-auth"
import { getAllBlogPosts } from "@/lib/blog-admin"
import AdvancedAdminLayout from "@/components/admin/advanced-admin-layout"
import PostsTable from "@/components/admin/posts-table"
import { Button } from "@/components/ui/button"
import { PenTool } from "lucide-react"
import Link from "next/link"

export default async function AdminPostsPage() {
  const session = await requireAdminAuth()
  const posts = await getAllBlogPosts()

  return (
    <AdvancedAdminLayout user={session.user}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">All Posts</h2>
            <p className="text-muted-foreground">Manage your blog posts</p>
          </div>
          <Link href="/admin/posts/new">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <PenTool className="mr-2 h-4 w-4" />
              New Post
            </Button>
          </Link>
        </div>

        <PostsTable posts={posts} />
      </div>
    </AdvancedAdminLayout>
  )
}
