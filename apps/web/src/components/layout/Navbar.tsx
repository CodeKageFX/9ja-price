"use client"

import Link from "next/link"
import { Menu } from "lucide-react"

export function Navbar({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="font-semibold text-ink-primary text-lg">
              PriceNaija
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/explorer" className="text-sm font-medium text-ink-primary hover:text-primary transition-colors">
                Price Explorer
              </Link>
              <Link href="/developers/dashboard" className="text-sm font-medium text-ink-primary hover:text-primary transition-colors">
                Developers
              </Link>
              <Link href="/docs" className="text-sm font-medium text-ink-primary hover:text-primary transition-colors">
                API Docs
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/developers/api-keys" className="hidden sm:inline-flex text-sm font-medium text-ink-primary hover:text-primary transition-colors">
              Sign In
            </Link>
            <Link href="/developers/api-keys" className="hidden sm:inline-flex h-8 items-center justify-center rounded-lg bg-primary px-3 text-sm font-medium text-white hover:bg-primary/90 transition-colors">
              Get API Key
            </Link>
            <button
              onClick={onMenuClick}
              className="md:hidden p-2 rounded-lg hover:bg-border transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
