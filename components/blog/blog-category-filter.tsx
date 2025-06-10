"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface BlogCategoryFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function BlogCategoryFilter({ categories, activeCategory, onCategoryChange }: BlogCategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category, index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Badge
            variant={activeCategory === category ? "default" : "outline"}
            className="px-3 py-1 text-sm cursor-pointer"
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Badge>
        </motion.div>
      ))}
    </div>
  )
}
