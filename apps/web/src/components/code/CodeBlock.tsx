"use client"

import dynamic from "next/dynamic"
import { cn } from "@/lib/utils"

const SyntaxHighlighter = dynamic(() => import("react-syntax-highlighter"), { ssr: false })

export interface CodeBlockProps {
  code: string
  language: string
  className?: string
}

export function CodeBlock({ code, language, className }: CodeBlockProps) {
  return (
    <div className={cn("rounded-xl border border-border overflow-hidden text-sm", className)}>
      <SyntaxHighlighter
        language={language === "curl" ? "bash" : language}
        customStyle={{
          margin: 0,
          padding: "1rem",
          background: "var(--surface)",
          fontSize: "0.875rem",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
