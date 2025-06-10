"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, X, ImageIcon } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

interface ImageUploadProps {
  value?: string
  onChange: (url: string) => void
  onRemove: () => void
}

export default function ImageUpload({ value, onChange, onRemove }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [dragActive, setDragActive] = useState(false)

  const handleFileUpload = useCallback(
    async (file: File) => {
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file")
        return
      }

      setIsUploading(true)
      try {
        // In a real app, upload to cloud storage
        const url = `/placeholder.svg?height=400&width=800&text=${encodeURIComponent(file.name)}`
        onChange(url)
      } catch (error) {
        console.error("Upload failed:", error)
        alert("Upload failed. Please try again.")
      } finally {
        setIsUploading(false)
      }
    },
    [onChange],
  )

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setDragActive(false)

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFileUpload(e.dataTransfer.files[0])
      }
    },
    [handleFileUpload],
  )

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        handleFileUpload(e.target.files[0])
      }
    },
    [handleFileUpload],
  )

  if (value) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <Card className="relative overflow-hidden">
          <CardContent className="p-0">
            <div className="relative h-48 w-full">
              <Image src={value || "/placeholder.svg"} alt="Featured image" fill className="object-cover" />
              <Button variant="destructive" size="icon" className="absolute top-2 right-2 h-8 w-8" onClick={onRemove}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <div
      className={`relative border-2 border-dashed rounded-lg p-6 transition-colors ${
        dragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25"
      }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="rounded-full bg-muted p-4">
          <ImageIcon className="h-8 w-8 text-muted-foreground" />
        </div>
        <div className="text-center">
          <p className="text-sm font-medium">Drop an image here, or click to select</p>
          <p className="text-xs text-muted-foreground">PNG, JPG, GIF up to 10MB</p>
        </div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="image-upload">
            <Button variant="outline" disabled={isUploading} asChild>
              <span>
                <Upload className="mr-2 h-4 w-4" />
                {isUploading ? "Uploading..." : "Choose File"}
              </span>
            </Button>
          </Label>
          <Input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
            disabled={isUploading}
          />
        </div>
      </div>
    </div>
  )
}
