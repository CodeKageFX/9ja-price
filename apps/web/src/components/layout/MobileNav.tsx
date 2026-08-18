import { MobileNav, MobileNavContent, MobileNavHeader, MobileNavTitle, MobileNavDescription, MobileNavFooter, MobileNavLogout, MobileNavMenu, } from "@/components/ui/mobile-nav"
import { Menu, X, Settings, LogOut, } from "lucide-react"
import Link from "next/link"

export function MobileNavComponent() {
  return (
    <MobileNav className="border-r border-border">
      <MobileNavContent>
        <MobileNavHeader>
          <MobileNavTitle>PriceNaija</MobileNavTitle>
          <MobileNavDescription>Developer Portal</MobileNavDescription>
        </MobileNavHeader>

        <MobileNavMenu>
          <Link
            href="/developers/dashboard"
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-border transition-colors"
          >
            <Layout className="h-4 w-4" />
            Dashboard
          </Link>
        </MobileNavMenu>

        <MobileNavMenu>
          <Link
            href="/developers/api-keys"
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-border transition-colors"
          >
            <Settings className="h-4 w-4" />
            API Keys
          </Link>
        </MobileNavMenu>

        <MobileNavMenu>
          <Link
            href="/developers/playground"
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-border transition-colors"
          >
            <Folder className="h-4 w-4" />
            Playground
          </Link>
        </MobileNavMenu>

        <MobileNavMenu>
          <Link
            href="/docs"
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-border transition-colors"
          >
            <Shield className="h-4 w-4" />
            API Docs
          </Link>
        </MobileNavMenu>
      </MobileNavContent>

      <MobileNavFooter>
        <MobileNavLogout>
          <LogOut className="h-4 w-4" />
          <span className="ml-2">Sign out</span>
        </MobileNavLogout>
      </MobileNavFooter>
    </MobileNav>
  )
}