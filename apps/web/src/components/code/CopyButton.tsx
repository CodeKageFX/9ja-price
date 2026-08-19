"use client";

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, } from "lucide-react"
import { cn } from "@/lib/utils"

export interface CopyButtonProps {
  text: string
  onCopy?: () => void
  className?: string
}

export function CopyButton({ text, onCopy, className }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      if (onCopy) onCopy()
    } catch {
      // Fallback for IE
      const textarea = document.createElement("textarea")
      textarea.value = text
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand("copy")
      document.body.removeChild(textarea)
      setIsCopied(true)
    }
  }

  return (
    <Button
      onClick={handleCopy}
      className={cn(className, "w-auto flex items-center gap-2")}
      title="Copy to clipboard"
    >
      {isCopied ? (
        <Check className="h-4 w-4" />
      ) : (
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15l7-7 7 7" />
        </svg>
      )}
      {isCopied ? "Copied!" : "Copy"}
    </Button>
  )
}