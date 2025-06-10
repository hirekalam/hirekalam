"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Save, Eye, ArrowLeft, X } from "lucide-react"
import AdminLayout from "@/components/admin/admin-layout"
import RichTextEditor from "@/components/admin/rich-text-editor"
import ImageUpload from "@/components/admin/image-upload"
import { blogCategories } from "@/lib/blog-data"
import type { BlogPostDraft } from "@/lib/blog-admin"

// Mock user for demo
const mockUser = {
  id: "admin-1",
  email: "admin@hirekalam.com",
  name: "Kalam",
  role: "admin" as const,
}

export default function NewPostPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [post, setPost] = useState<BlogPostDraft>({
    title: "",
    excerpt: "",
    content: "",
    coverImage: "",
    readingTime: "5 min read",
    author: {
      name: "Kalam",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    category: "",
    tags: [],
    status: "draft",
  })
  const [newTag, setNewTag] = useState("")

  const handleSave = async (status: "draft" | "published") => {
    if (!post.title || !post.content || !post.category) {
      alert("Please fill in all required fields")
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch("/api/admin/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...post, status }),
      })

      if (response.ok) {
        router.push("/admin/posts")
      } else {
        alert("Failed to save post")
      }
    } catch (error) {
      alert("An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const addTag = () => {
    if (newTag && !post.tags.includes(newTag)) {
      setPost({ ...post, tags: [...post.tags, newTag] })
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setPost({ ...post, tags: post.tags.filter((tag) => tag !== tagToRemove) })
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addTag()
    }
  }

  return (
    <AdminLayout user={mockUser}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => router.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">New Post</h2>
              <p className="text-muted-foreground">Create a new blog post</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" onClick={() => handleSave("draft")} disabled={isLoading}>
              <Save className="mr-2 h-4 w-4" />
              Save Draft
            </Button>
            <Button onClick={() => handleSave("published")} disabled={isLoading}>
              <Eye className="mr-2 h-4 w-4" />
              {isLoading ? "Publishing..." : "Publish"}
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Post Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={post.title}
                    onChange={(e) => setPost({ ...post, title: e.target.value })}
                    placeholder="Enter post title..."
                    className="text-lg"
                  />
                </div>

                <div>
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    value={post.excerpt}
                    onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
                    placeholder="Brief description of the post..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label>Content *</Label>
                  <RichTextEditor
                    value={post.content}
                    onChange={(content) => setPost({ ...post, content })}
                    placeholder="Write your post content here..."
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Post Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="category">Category *</Label>
                  <Select value={post.category} onValueChange={(value) => setPost({ ...post, category: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {blogCategories
                        .filter((cat) => cat !== "All")
                        .map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="reading-time">Reading Time</Label>
                  <Input
                    id="reading-time"
                    value={post.readingTime}
                    onChange={(e) => setPost({ ...post, readingTime: e.target.value })}
                    placeholder="5 min read"
                  />
                </div>

                <div>
                  <Label>Tags</Label>
                  <div className="flex space-x-2">
                    <Input
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Add tag..."
                    />
                    <Button type="button" onClick={addTag} variant="outline">
                      Add
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                        {tag}
                        <X className="h-3 w-3 cursor-pointer" onClick={() => removeTag(tag)} />
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Featured Image</CardTitle>
              </CardHeader>
              <CardContent>
                <ImageUpload
                  value={post.coverImage}
                  onChange={(url) => setPost({ ...post, coverImage: url })}
                  onRemove={() => setPost({ ...post, coverImage: "" })}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
