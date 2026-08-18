import { Input } from "@/components/ui/input"
import { Command, CommandEmpty, CommandHeader, CommandItem, CommandShortcut, CommandValue, } from "@/components/ui/command"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

export function SearchInput() {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-secondary" />
      <Input
        placeholder="Search commands or prices..."
        className="pl-10"
        classNameMerge={cn}
      />
      <Command
        className="mt-2 w-full rounded-md border border-border bg-background px-2"
        onSelect={(value) => {
          // Handle command selection
        }}
      >
        <CommandEmpty>No results found</CommandEmpty>
        <CommandHeader>Recent Prices</CommandHeader>
        <CommandItem>
          <CommandValue>Rice - Lagos</CommandValue>
        </CommandItem>
        <CommandItem>
          <CommandValue>Beans - Kano</CommandValue>
        </CommandItem>
        <CommandSeparator />
        <CommandHeader>Commands</CommandHeader>
        <CommandItem>
          <CommandShortcut><kbd>Cmd</kbd> + <kbd>/</kbd></CommandShortcut> Quick search
        </CommandItem>
      </Command>
    </div>
  )
}