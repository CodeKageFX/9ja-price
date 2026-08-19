"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export type FilterOption = {
  value: string
  label: string
}

export function FilterDropdown({
  options,
  onSelect,
  placeholder = "Filter",
}: {
  options: FilterOption[]
  onSelect: (value: string) => void
  placeholder?: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)

  const handleSelect = (value: string) => {
    setSelected(value)
    onSelect(value)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full h-9 rounded-lg border border-input bg-transparent px-3 text-sm hover:bg-surface-container-low transition-colors"
      >
        <span className={selected ? "text-ink-primary" : "text-ink-secondary"}>
          {selected ? options.find((o) => o.value === selected)?.label : placeholder}
        </span>
        <ChevronDown className="h-4 w-4 text-ink-secondary shrink-0" />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute z-50 mt-1 w-full rounded-lg border border-border bg-surface shadow-md max-h-60 overflow-auto">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className="w-full text-left px-3 py-2 text-sm hover:bg-surface-container-low transition-colors"
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
