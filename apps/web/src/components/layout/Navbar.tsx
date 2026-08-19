"use client"

import Link from "next/link"
import { Menu, Heart, Database } from "lucide-react"

export function Navbar({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <header className="bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline flat no shadows docked full-width top-0 sticky z-50">
      <nav className="flex justify-between items-center w-full px-margin-desktop max-w-[1440px] mx-auto h-16">
        <div className="flex items-center gap-md">
          <Link href="/" className="text-title-md font-headline-lg text-primary dark:text-primary-fixed flex items-center gap-xs">
            <span className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary font-bold text-sm">
              9
            </span>
            9jaPrice
          </Link>
          <div className="hidden md:flex items-center gap-lg ml-xl">
            <Link href="/explorer" className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors text-body-lg font-body-lg">
              Explorer
            </Link>
            <Link href="/dashboard" className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors text-body-lg font-body-lg">
              Developers
            </Link>
            <Link href="/docs" className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors text-body-lg font-body-lg">
              Docs
            </Link>
            <Link href="/commodity/rice" className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors text-body-lg font-body-lg">
              Markets
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-sm">
          <Link
            href="#sponsor"
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-outline-variant px-3 text-body-sm font-medium text-on-surface hover:bg-surface-container-low transition-colors"
          >
            <Heart className="h-4 w-4 text-error fill-error/20" />
            <span>Sponsor</span>
          </Link>
          <Link href="/api-keys" className="hidden md:block text-on-surface-variant text-body-lg font-body-lg hover:text-primary transition-colors">
            Sign In
          </Link>
          <Link href="/api-keys" className="bg-primary-container text-on-primary rounded-lg px-sm py-xs font-body-lg text-body-sm hover:opacity-90 transition-opacity flex items-center gap-xs">
            Get API Key
          </Link>
          <button
            onClick={onMenuClick}
            className="md:hidden text-on-surface-variant p-2"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>
    </header>
  )
}
