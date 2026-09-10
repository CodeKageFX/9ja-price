"use client"

import { useCallback, useRef, useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { MobileNav } from "./MobileNav"
import { PUBLIC_NAV_LINKS } from "./nav-links"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false)
    menuButtonRef.current?.focus()
  }, [])

  return (
    <header className="bg-surface border-b border-outline-variant sticky top-0 z-50">
      <nav className="flex justify-between items-center w-full px-margin-desktop max-w-[1440px] mx-auto h-16">
        <div className="flex items-center gap-md">
          <Link href="/" className="text-title-md font-headline-lg text-primary dark:text-primary-fixed flex items-center gap-xs">
            <span className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary font-bold text-sm">
              9
            </span>
            9jaPrice
          </Link>
          <div className="hidden lg:flex items-center gap-lg ml-xl">
            {PUBLIC_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-on-surface-variant hover:text-primary transition-colors text-body-lg font-body-lg"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-sm">
          <Link href="/login" className="hidden lg:block text-on-surface-variant text-body-lg font-body-lg hover:text-primary transition-colors">
            Sign In
          </Link>
          <Link href="/signup" className="bg-primary-container text-on-primary rounded-lg px-sm py-xs font-body-lg text-body-sm hover:opacity-90 transition-opacity flex items-center gap-xs">
            Get API Key
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-on-surface-variant p-2"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>
      <MobileNav open={mobileOpen} onClose={closeMobileMenu} />
    </header>
  )
}
