import { NavigationMenu, NavigationMenuItem, NavigationMenuSeparator, NavigationMenuContent, NavigationMenuDivider, NavigationMenuDropdown } from "@/components/ui/navigation-menu"
import { Menu } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NavigationMenu>
          <NavigationMenuContent className="flex items-center gap-8">
            <NavigationMenuItem asChild>
              <Link
                href="/"
                className="font-medium text-ink-primary hover:text-primary transition-colors"
              >
                <span className="self-center whitespace-nowrap">PriceNaija</span>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem asChild>
              <Link
                href="/explorer"
                className="font-medium text-ink-primary hover:text-primary transition-colors"
              >
                Price Explorer
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem asChild>
              <Link
                href="/docs"
                className="font-medium text-ink-primary hover:text-primary transition-colors"
              >
                API Docs
              </Link>
            </NavigationMenuItem>

            <NavigationMenuDropdown>
              <NavigationMenuItem asChild>
                <Link
                  href="#"
                  className="relative flex items-center gap-2 font-medium text-ink-primary"
                >
                  Admin
                  <svg
                    className="h-4 w-4 inline"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuContent className="mt-2 w-48 bg-white shadow-md px-2">
                <NavigationMenuItem>
                  <Link href="/admin/observations" className="block px-4 py-2 rounded hover:bg-border transition-colors">
                    Record Observation
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/admin/api-keys" className="block px-4 py-2 rounded hover:bg-border transition-colors">
                    API Keys
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuContent>
            </NavigationMenuDropdown>

            <NavigationMenuSeparator />

            <NavigationMenuDropdown>
              <NavigationMenuItem asChild>
                <button
                  className="flex items-center gap-2 font-medium text-ink-primary hover:text-primary transition-colors"
                >
                  Profile
                  <svg
                    className="h-4 w-4 inline"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </NavigationMenuItem>
              <NavigationMenuContent className="mt-2 w-48 bg-white shadow-md px-2">
                <NavigationMenuItem>
                  <span className="block px-4 py-2 rounded">User</span>
                </NavigationMenuItem>
                <NavigationMenuSeparator />
                <NavigationMenuItem>
                  <span className="block px-4 py-2 rounded text-sm text-ink-secondary">Sign out</span>
                </NavigationMenuItem>
              </NavigationMenuContent>
            </NavigationMenuDropdown>
          </NavigationMenuContent>

          <button
            className="sm:hidden p-2 rounded-lg hover:bg-border focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </NavigationMenu>
      </div>
    </nav>
  )
}