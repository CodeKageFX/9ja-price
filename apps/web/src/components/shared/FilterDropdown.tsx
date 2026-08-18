import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectSeparator } from "@/components/ui/select"
import { FilterThreeLines } from "lucide-react"
import { cn } from "@/lib/utils"

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
  return (
    <div className="relative">
      <FilterThreeLines className="h-4 w-4 text-ink-secondary mr-2" />
      <Select onValueChange={onSelect} className="w-64">
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="flex items-center gap-2 px-2 py-1 rounded-md text-sm hover:bg-border transition-colors"
            >
              {option.label}
            </SelectItem>
          ))}
          <SelectSeparator />
          <SelectItem value="all">
            <span className="text-ink-secondary">Show all</span>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}