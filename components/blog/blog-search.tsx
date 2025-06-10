"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface BlogSearchProps {
  onSearch: (query: string) => void
}

export default function BlogSearch({ onSearch }: BlogSearchProps) {
  const [query, setQuery] = useState("")

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(query)
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [query, onSearch])

  const handleClear = () => {
    setQuery("")
    onSearch("")
  }

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search articles..."
          className="pl-10 pr-10"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <AnimatePresence>
          {query && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={handleClear} aria-label="Clear search">
                <X className="h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
