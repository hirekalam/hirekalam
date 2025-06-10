"use client"

import { useEffect } from "react"
import { useParams, notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeSlug from "rehype-slug"
import BlogCard from "@/components/blog/blog-card"
import BlogAuthor from "@/components/blog/blog-author"
import BlogShare from "@/components/blog/blog-share"
import BlogToc from "@/components/blog/blog-toc"
import { getBlogPost, getRelatedPosts } from "@/lib/blog-data"

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>()
  const post = getBlogPost(id as string)
  const relatedPosts = getRelatedPosts(id as string)

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0)
  }, [id])

  if (!post) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-8 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link href="/blog">
              <Button variant="ghost" className="group mb-4">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Blog
              </Button>
            </Link>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge variant="outline" className="mb-4">
                {post.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <BlogAuthor
                name={post.author.name}
                avatar={post.author.avatar}
                date={post.date}
                readingTime={post.readingTime}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-8 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="lg:col-span-3"
              >
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw, rehypeSlug]}
                    components={{
                      h1: ({ node, ...props }) => <h1 id={props.id} className="scroll-mt-24" {...props} />,
                      h2: ({ node, ...props }) => <h2 id={props.id} className="scroll-mt-24" {...props} />,
                      h3: ({ node, ...props }) => <h3 id={props.id} className="scroll-mt-24" {...props} />,
                      a: ({ node, ...props }) => <a className="text-primary hover:underline" {...props} />,
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>

                {/* Tags */}
                <div className="mt-12 pt-6 border-t">
                  <h3 className="text-lg font-medium mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="mt-8 pt-6 border-t">
                  <h3 className="text-lg font-medium mb-4">Share This Article</h3>
                  <BlogShare
                    title={post.title}
                    url={typeof window !== "undefined" ? window.location.href : `https://hirekalam.com/blog/${post.id}`}
                  />
                </div>
              </motion.div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <BlogToc content={post.content} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary/10 rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Need Professional Web Services?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              I offer web development, digital marketing, and design services for businesses in Dubai, UAE, and
              worldwide.
            </p>
            <Link href="/contact">
              <Button size="lg" className="group">
                Get in Touch
                <ArrowLeft className="ml-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
