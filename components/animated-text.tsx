"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  words: string[]
  className?: string
  highlightClassName?: string
}

export default function AnimatedText({ words, className, highlightClassName }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length)
        setIsAnimating(true)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <span className={cn("inline-block relative", className)}>
      <AnimatePresence mode="wait">
        {isAnimating && (
          <motion.span
            key={currentIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={cn("inline-block", highlightClassName)}
          >
            {words[currentIndex]}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  )
}
