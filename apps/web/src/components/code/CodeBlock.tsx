import { SyntaxHighlighter } from "react-syntax-highlighter"
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/atomOneDark"
import { cn } from "@/lib/utils"

export interface CodeBlockProps {
  code: string
  language: "json" | "javascript" | "bash" | "curl"
  className?: string
}

export function CodeBlock({ code, language, className }: CodeBlockProps) {
  const supportedLanguages: Record<CodeBlockProps["language"], string> = {
    json: "json",
    javascript: "javascript",
    bash: "bash",
    curl: "bash",
  }

  return (
    <div className={cn("rounded-md p-4 bg-background/50 text-sm", className)}>
      <SyntaxHighlighter
        language={supportedLanguages[language]}
        style={atomOneDark}
        wrapLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}