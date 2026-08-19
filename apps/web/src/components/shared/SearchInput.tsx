"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function SearchInput({ placeholder, onSearch }: { placeholder?: string; onSearch?: (value: string) => void }) {
  const [value, setValue] = useState("")

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-secondary" />
      <Input
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          onSearch?.(e.target.value)
        }}
        placeholder={placeholder || "Search..."}
        className="pl-10"
      />
    </div>
  )
}
