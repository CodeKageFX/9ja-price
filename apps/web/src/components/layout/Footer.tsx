import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, } from "@/components/ui/breadcrumb"

export function Footer() {
  return (
    <footer className="border-t border-border py-8 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-medium text-ink-primary mb-3">PriceNaija</h4>
            <p className="text-ink-secondary text-sm">
              Comprehensive Nigerian food price tracking and analytics platform.
            </p>
          </div>

          <div>
            <h5 className="font-medium text-ink-primary mb-3">Product</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#!" className="hover:text-primary transition-colors">Price Explorer</a>
              </li>
              <li>
                <a href="#!" className="hover:text-primary transition-colors">Commodity Details</a>
              </li>
              <li>
                <a href="#!" className="hover:text-primary transition-colors">API Documentation</a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-medium text-ink-primary mb-3">Developer</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#!" className="hover:text-primary transition-colors">Dashboard</a>
              </li>
              <li>
                <a href="#!" className="hover:text-primary transition-colors">API Keys</a>
              </li>
              <li>
                <a href="#!" className="hover:text-primary transition-colors">Playground</a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-medium text-ink-primary mb-3">Company</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#!" className="hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#!" className="hover:text-primary transition-colors">Contact</a>
              </li>
              <li>
                <a href="#!" className="hover:text-primary transition-colors">Terms</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4 text-ink-secondary text-xs">
          <p>2026 PriceNaija. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#!" aria-label="Twitter" />
            <a href="#!" aria-label="GitHub" />
            <a href="#!" aria-label="LinkedIn" />
          </div>
        </div>
      </div>
    </footer>
  )
}