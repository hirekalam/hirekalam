"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Edit, MoreHorizontal, Trash2, Eye } from "lucide-react"
import { motion } from "framer-motion"
import type { BlogPost } from "@/lib/blog-data"

interface PostsTableProps {
  posts: BlogPost[]
}

export default function PostsTable({ posts }: PostsTableProps) {
  const [deletingId, setDeletingId] = useState<string | null>(null)

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return

    setDeletingId(id)
    try {
      const response = await fetch(`/api/admin/posts/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        // Refresh the page or update the state
        window.location.reload()
      } else {
        alert("Failed to delete post")
      }
    } catch (error) {
      alert("An error occurred")
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post, index) => (
            <motion.tr
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group"
            >
              <TableCell className="font-medium">
                <div>
                  <div className="font-medium">{post.title}</div>
                  <div className="text-sm text-muted-foreground line-clamp-1">{post.excerpt}</div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline">{post.category}</Badge>
              </TableCell>
              <TableCell>{post.date}</TableCell>
              <TableCell>
                <Badge variant="default">Published</Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href={`/blog/${post.id}`} target="_blank">
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/admin/posts/edit/${post.id}`}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDelete(post.id)}
                      disabled={deletingId === post.id}
                      className="text-destructive"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      {deletingId === post.id ? "Deleting..." : "Delete"}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
