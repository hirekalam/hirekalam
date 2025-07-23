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
import { Save, Eye, ArrowLeft, X, Sparkles } from "lucide-react"
import AdvancedAdminLayout from "@/components/admin/advanced-admin-layout"
import RichTextEditor from "@/components/admin/rich-text-editor"
import ImageUpload from "@/components/admin/image-upload"
import { blogCategories } from "@/lib/blog-data"
import type { BlogPostDraft } from "@/lib/blog-admin"

// Mock user for demo
const mockUser = {
  id: "admin-1",
  email: "ds.bathua@gmail.com",
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
    <AdvancedAdminLayout user={mockUser}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => router.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Create New Post</h2>
              <p className="text-muted-foreground">Write and publish your next blog post</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" onClick={() => handleSave("draft")} disabled={isLoading}>
              <Save className="mr-2 h-4 w-4" />
              Save Draft
            </Button>
            <Button
              onClick={() => handleSave("published")}
              disabled={isLoading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              {isLoading ? "Publishing..." : "Publish"}
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
                <CardTitle className="flex items-center">
                  <Sparkles className="mr-2 h-5 w-5 text-blue-600" />
                  Post Content
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div>
                  <Label htmlFor="title" className="text-base font-medium">
                    Title *
                  </Label>
                  <Input
                    id="title"
                    value={post.title}
                    onChange={(e) => setPost({ ...post, title: e.target.value })}
                    placeholder="Enter an engaging post title..."
                    className="text-lg h-12 mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="excerpt" className="text-base font-medium">
                    Excerpt
                  </Label>
                  <Textarea
                    id="excerpt"
                    value={post.excerpt}
                    onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
                    placeholder="Write a compelling excerpt that summarizes your post..."
                    rows={3}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label className="text-base font-medium">Content *</Label>
                  <div className="mt-2">
                    <RichTextEditor
                      value={post.content}
                      onChange={(content) => setPost({ ...post, content })}
                      placeholder="Start writing your amazing content here..."
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950">
                <CardTitle className="flex items-center">
                  <Eye className="mr-2 h-5 w-5 text-green-600" />
                  Post Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div>
                  <Label htmlFor="category" className="text-base font-medium">
                    Category *
                  </Label>
                  <Select value={post.category} onValueChange={(value) => setPost({ ...post, category: value })}>
                    <SelectTrigger className="mt-2">
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
                  <Label htmlFor="reading-time" className="text-base font-medium">
                    Reading Time
                  </Label>
                  <Input
                    id="reading-time"
                    value={post.readingTime}
                    onChange={(e) => setPost({ ...post, readingTime: e.target.value })}
                    placeholder="5 min read"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label className="text-base font-medium">Tags</Label>
                  <div className="flex space-x-2 mt-2">
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
                  <div className="flex flex-wrap gap-2 mt-3">
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

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
                <CardTitle className="flex items-center">
                  <Eye className="mr-2 h-5 w-5 text-purple-600" />
                  Featured Image
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
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
    </AdvancedAdminLayout>
  )
}
