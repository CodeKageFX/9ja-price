"use client"

import Link from "next/link"
import { X, Layout, Settings, Folder, Shield } from "lucide-react"

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

const NAV_ITEMS = [
  { href: "/developers/dashboard", label: "Dashboard", icon: Layout },
  { href: "/developers/api-keys", label: "API Keys", icon: Settings },
  { href: "/developers/playground", label: "API Playground", icon: Folder },
  { href: "/docs", label: "API Docs", icon: Shield },
]

export function MobileNav({ open, onClose }: MobileNavProps) {
  if (!open) return null

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/50" onClick={onClose} />
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-surface shadow-xl">
        <div className="flex items-center justify-between h-16 px-4 border-b border-border">
          <span className="font-semibold text-ink-primary">Menu</span>
          <button onClick={onClose} className="p-1 rounded hover:bg-border">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="px-3 py-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-ink-primary hover:bg-border transition-colors"
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}
