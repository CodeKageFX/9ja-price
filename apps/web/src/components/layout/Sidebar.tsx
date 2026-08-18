import { Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarTitle, SidebarDescription, SidebarLogout, SidebarNav, SidebarNavGroup, SidebarNavHeader,SidebarNavItem, SidebarNavLabel, } from "@/components/ui/sidebar"
import { Layout, Settings, LogOut, Folder, Shield, } from "lucide-react"

export function SidebarComponent() {
  return (
    <Sidebar className="border-r border-border">
      <SidebarContent>
        <SidebarHeader>
          <div className="flex items-center gap-3">
            <Layout className="h-6 w-6 text-primary" />
            <span className="font-semibold text-ink-primary">PriceNaija</span>
          </div>
          <SidebarDescription>Developer Portal</SidebarDescription>
        </SidebarHeader>

        <SidebarNav>
          <SidebarNavGroup title="Dashboard">
            <SidebarNavItem>
              <Link
                href="/developers/dashboard"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-border transition-colors"
              >
                <Layout className="h-4 w-4" />
                Dashboard
              </Link>
            </SidebarNavItem>
          </SidebarNavGroup>

          <SidebarNavGroup title="API Management">
            <SidebarNavItem>
              <Link
                href="/developers/api-keys"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-border transition-colors"
              >
                <Settings className="h-4 w-4" />
                API Keys
              </Link>
            </SidebarNavItem>

            <SidebarNavItem>
              <Link
                href="/developers/playground"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-border transition-colors"
              >
                <Folder className="h-4 w-4" />
                API Playground
              </Link>
            </SidebarNavItem>
          </SidebarNavGroup>

          <SidebarNavGroup title="Documentation">
            <SidebarNavItem>
              <Link
                href="/docs"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-border transition-colors"
              >
                <Shield className="h-4 w-4" />
                API Docs
              </Link>
            </SidebarNavItem>
          </SidebarNavGroup>
        </SidebarNav>

        <SidebarNav>
          <SidebarNavGroup title="Admin">
            <SidebarNavItem>
              <Link
                href="/admin/observations"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-border transition-colors"
              >
                <Folder className="h-4 w-4" />
                Price Management
              </Link>
            </SidebarNavItem>

            <SidebarNavItem>
              <Link
                href="/admin/api-keys"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-border transition-colors"
              >
                <Settings className="h-4 w-4" />
                API Key Management
              </Link>
            </SidebarNavItem>
          </SidebarNavGroup>
        </SidebarNav>

        <SidebarFooter>
          <SidebarLogout>
            <LogOut className="h-4 w-4" />
            <span className="ml-2 text-sm text-ink-secondary">Sign out</span>
          </SidebarLogout>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  )
}