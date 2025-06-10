"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import SectionHeading from "@/components/section-heading"
import BlogCard from "@/components/blog/blog-card"
import BlogSearch from "@/components/blog/blog-search"
import BlogCategoryFilter from "@/components/blog/blog-category-filter"
import { blogPosts, blogCategories, searchPosts } from "@/lib/blog-data"

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  let filteredPosts = searchQuery ? searchPosts(searchQuery) : blogPosts

  if (activeCategory !== "All" && !searchQuery) {
    filteredPosts = filteredPosts.filter((post) => post.category === activeCategory)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Insights</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the latest articles, tutorials, and insights on web development, digital marketing, and design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            {/* Search and Filter */}
            <div className="mb-12 space-y-6">
              <BlogSearch onSearch={setSearchQuery} />
              <BlogCategoryFilter
                categories={blogCategories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>

            {/* Blog Posts */}
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12"
              >
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("")
                    setActiveCategory("All")
                  }}
                >
                  Reset Filters
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <SectionHeading
              title="Subscribe to My Newsletter"
              subtitle="Get the latest articles, tutorials, and updates delivered straight to your inbox."
              center
            />
            <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              <Button type="submit" className="group">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

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
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
