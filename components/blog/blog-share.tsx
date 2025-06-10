"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Linkedin, Twitter, LinkIcon } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { motion } from "framer-motion"

interface BlogShareProps {
  title: string
  url: string
}

export default function BlogShare({ title, url }: BlogShareProps) {
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)

  const shareLinks = [
    {
      name: "Twitter",
      icon: <Twitter className="h-4 w-4" />,
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: "bg-[#1DA1F2] hover:bg-[#1DA1F2]/90",
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-4 w-4" />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "bg-[#1877F2] hover:bg-[#1877F2]/90",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-4 w-4" />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "bg-[#0A66C2] hover:bg-[#0A66C2]/90",
    },
  ]

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
    toast({
      title: "Link copied!",
      description: "The article link has been copied to your clipboard.",
    })
  }

  return (
    <div className="flex flex-wrap gap-2">
      {shareLinks.map((link, index) => (
        <motion.div
          key={link.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${link.name}`}>
            <Button variant="outline" size="sm" className={`${link.color} text-white border-none`}>
              {link.icon}
              <span className="ml-2 hidden sm:inline">{link.name}</span>
            </Button>
          </a>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, delay: shareLinks.length * 0.1 }}
      >
        <Button variant="outline" size="sm" onClick={copyToClipboard}>
          <LinkIcon className="h-4 w-4 mr-2" />
          Copy Link
        </Button>
      </motion.div>
    </div>
  )
}
