"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TocItem {
  id: string
  text: string
  level: number
}

interface BlogTocProps {
  content: string
}

export default function BlogToc({ content }: BlogTocProps) {
  const [toc, setToc] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    // Extract headings from markdown content
    const headingRegex = /^(#{1,3})\s+(.+)$/gm
    const headings: TocItem[] = []
    let match

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length
      const text = match[2]
      const id = text
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, "-")

      if (level <= 3) {
        // Only include h1, h2, h3
        headings.push({ id, text, level })
      }
    }

    setToc(headings)
  }, [content])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -80% 0px" },
    )

    toc.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      toc.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [toc])

  if (toc.length === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="sticky top-24"
    >
      <div className="border rounded-lg p-4">
        <h3 className="font-medium mb-2">Table of Contents</h3>
        <nav>
          <ul className="space-y-1 text-sm">
            {toc.map((item) => (
              <li
                key={item.id}
                className={cn("transition-colors", item.level === 1 ? "ml-0" : item.level === 2 ? "ml-2" : "ml-4")}
              >
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "block py-1 hover:text-primary transition-colors",
                    activeId === item.id ? "text-primary font-medium" : "text-muted-foreground",
                  )}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.div>
  )
}
