"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl?: string
  githubUrl?: string
  index?: number
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  githubUrl,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full flex flex-col group">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <CardHeader className="pb-2">
          <CardTitle>{title}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
        <CardFooter className="flex gap-2 pt-2">
          {demoUrl && (
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="default" className="w-full">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
            </Link>
          )}
          {githubUrl && (
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="outline" className="w-full">
                <Github className="h-4 w-4 mr-2" />
                Code
              </Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
