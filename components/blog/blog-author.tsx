"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface BlogAuthorProps {
  name: string
  avatar: string
  date: string
  readingTime: string
}

export default function BlogAuthor({ name, avatar, date, readingTime }: BlogAuthorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4"
    >
      <div className="relative h-10 w-10 rounded-full overflow-hidden">
        <Image src={avatar || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">
          {date} · {readingTime}
        </p>
      </div>
    </motion.div>
  )
}
