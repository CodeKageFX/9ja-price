"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Layout, Settings, LogOut, Folder, Shield, X } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

interface SidebarProps {
  open?: boolean
  onClose?: () => void
}

const NAV_ITEMS = [
  {
    group: "Dashboard",
    items: [
      { href: "/developers/dashboard", label: "Dashboard", icon: Layout },
    ],
  },
  {
    group: "API Management",
    items: [
      { href: "/developers/api-keys", label: "API Keys", icon: Settings },
      { href: "/developers/playground", label: "API Playground", icon: Folder },
    ],
  },
  {
    group: "Documentation",
    items: [
      { href: "/docs", label: "API Docs", icon: Shield },
    ],
  },
  {
    group: "Admin",
    items: [
      { href: "/admin/observations/new", label: "Price Management", icon: Folder },
    ],
  },
]

export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-surface border-r border-border transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:z-auto",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="font-semibold text-ink-primary">PriceNaija</span>
          </div>
          <button onClick={onClose} className="lg:hidden p-1 rounded hover:bg-border">
            <X className="h-5 w-5 text-ink-secondary" />
          </button>
        </div>

        <p className="px-4 py-2 text-xs text-ink-secondary">Developer Portal</p>

        <ScrollArea className="flex-1">
          <nav className="px-3 py-2 space-y-6">
            {NAV_ITEMS.map((group) => (
              <div key={group.group}>
                <h4 className="px-3 text-xs font-semibold text-ink-secondary uppercase tracking-wider mb-2">
                  {group.group}
                </h4>
                <div className="space-y-1">
                  {group.items.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-ink-primary hover:bg-border"
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        {item.label}
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </nav>
        </ScrollArea>

        <div className="border-t border-border p-3">
          <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-ink-secondary hover:bg-border transition-colors w-full">
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </aside>
    </>
  )
}
