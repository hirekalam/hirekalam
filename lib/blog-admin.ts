import type { BlogPost } from "./blog-data"

export interface BlogPostDraft extends Omit<BlogPost, "id" | "date"> {
  id?: string
  status: "draft" | "published" | "scheduled"
  scheduledDate?: string
  seoTitle?: string
  seoDescription?: string
  featuredImage?: string
  slug?: string
}

// In a real app, this would be stored in a database
const blogPostsStore: BlogPost[] = []

export async function saveBlogPost(post: BlogPostDraft): Promise<BlogPost> {
  const now = new Date()
  const id = post.id || generateSlug(post.title)

  const blogPost: BlogPost = {
    ...post,
    id,
    date:
      post.status === "published"
        ? now.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : post.scheduledDate ||
          now.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
    coverImage: post.featuredImage || post.coverImage,
  }

  const existingIndex = blogPostsStore.findIndex((p) => p.id === id)
  if (existingIndex >= 0) {
    blogPostsStore[existingIndex] = blogPost
  } else {
    blogPostsStore.push(blogPost)
  }

  return blogPost
}

export async function deleteBlogPost(id: string): Promise<boolean> {
  const index = blogPostsStore.findIndex((p) => p.id === id)
  if (index >= 0) {
    blogPostsStore.splice(index, 1)
    return true
  }
  return false
}

export async function getBlogPostDraft(id: string): Promise<BlogPostDraft | null> {
  const post = blogPostsStore.find((p) => p.id === id)
  if (!post) return null

  return {
    ...post,
    status: "published",
    featuredImage: post.coverImage,
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return [...blogPostsStore].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-")
    .substring(0, 50)
}

export async function uploadImage(file: File): Promise<string> {
  // In a real app, this would upload to a cloud storage service
  // For demo purposes, we'll return a placeholder URL
  return `/placeholder.svg?height=600&width=1200&text=${encodeURIComponent(file.name)}`
}

export interface DashboardStats {
  totalPosts: number
  publishedPosts: number
  draftPosts: number
  totalViews: number
  monthlyViews: number
  topPosts: Array<{
    id: string
    title: string
    views: number
  }>
}

export async function getDashboardStats(): Promise<DashboardStats> {
  const posts = await getAllBlogPosts()

  return {
    totalPosts: posts.length,
    publishedPosts: posts.length,
    draftPosts: 0,
    totalViews: 12543,
    monthlyViews: 3421,
    topPosts: [
      { id: "web-design-trends-2023", title: "Top Web Design Trends in Dubai for 2023", views: 1234 },
      { id: "seo-strategies-uae-businesses", title: "Effective SEO Strategies for UAE Businesses", views: 987 },
      { id: "mobile-app-development-guide", title: "A Complete Guide to Mobile App Development", views: 756 },
    ],
  }
}
