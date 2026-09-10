"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { PUBLIC_NAV_LINKS } from "./nav-links"

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

const MOBILE_NAV_ITEMS = [...PUBLIC_NAV_LINKS, { href: "/login", label: "Sign In" }]

export function MobileNav({ open, onClose }: MobileNavProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (open) closeButtonRef.current?.focus()
  }, [open])

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/50 lg:hidden" onClick={onClose} aria-hidden="true" />
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className="fixed inset-y-0 left-0 z-50 w-64 bg-surface shadow-xl lg:hidden"
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-outline-variant">
          <span className="font-semibold text-on-surface">Menu</span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="p-1 rounded hover:bg-surface-container-low"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="px-3 py-4 space-y-1">
          {MOBILE_NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-on-surface hover:bg-surface-container-low transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
