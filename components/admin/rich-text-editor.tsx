"use client"

import { useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bold, Italic, Underline, Link, List, ListOrdered, Quote, Code, Eye, Type, ImageIcon } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const [activeTab, setActiveTab] = useState("write")
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const insertText = useCallback(
    (before: string, after = "") => {
      const textarea = textareaRef.current
      if (!textarea) return

      const start = textarea.selectionStart
      const end = textarea.selectionEnd
      const selectedText = value.substring(start, end)
      const newText = value.substring(0, start) + before + selectedText + after + value.substring(end)

      onChange(newText)

      // Set cursor position after insertion
      setTimeout(() => {
        textarea.focus()
        textarea.setSelectionRange(start + before.length, start + before.length + selectedText.length)
      }, 0)
    },
    [value, onChange],
  )

  const toolbarButtons = [
    { icon: Bold, action: () => insertText("**", "**"), title: "Bold" },
    { icon: Italic, action: () => insertText("*", "*"), title: "Italic" },
    { icon: Underline, action: () => insertText("<u>", "</u>"), title: "Underline" },
    { icon: Link, action: () => insertText("[", "](url)"), title: "Link" },
    { icon: ImageIcon, action: () => insertText("![alt text](", ")"), title: "Image" },
    { icon: List, action: () => insertText("\n- "), title: "Bullet List" },
    { icon: ListOrdered, action: () => insertText("\n1. "), title: "Numbered List" },
    { icon: Quote, action: () => insertText("\n> "), title: "Quote" },
    { icon: Code, action: () => insertText("`", "`"), title: "Inline Code" },
    { icon: Type, action: () => insertText("\n## "), title: "Heading" },
  ]

  return (
    <div className="border rounded-lg overflow-hidden">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex items-center justify-between border-b bg-muted/50 px-3 py-2">
          <div className="flex items-center space-x-1">
            {toolbarButtons.map((button, index) => {
              const Icon = button.icon
              return (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  onClick={button.action}
                  title={button.title}
                  className="h-8 w-8 p-0"
                >
                  <Icon className="h-4 w-4" />
                </Button>
              )
            })}
          </div>
          <TabsList className="grid w-32 grid-cols-2">
            <TabsTrigger value="write" className="text-xs">
              Write
            </TabsTrigger>
            <TabsTrigger value="preview" className="text-xs">
              <Eye className="h-3 w-3 mr-1" />
              Preview
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="write" className="m-0">
          <Textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder || "Write your content in Markdown..."}
            className="min-h-[400px] border-0 resize-none focus-visible:ring-0"
          />
        </TabsContent>

        <TabsContent value="preview" className="m-0">
          <div className="min-h-[400px] p-4 prose prose-slate dark:prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{value || "*Nothing to preview*"}</ReactMarkdown>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
