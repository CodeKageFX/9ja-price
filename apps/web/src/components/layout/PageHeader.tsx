import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbList } from "@/components/ui/breadcrumb"

export function PageHeader({
  title,
  description,
  showBreadcrumb = true,
}: {
  title: string
  description?: string
  showBreadcrumb?: boolean
}) {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-md py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showBreadcrumb && (
          <BreadcrumbList className="mb-4">
            <BreadcrumbItem>
              <a href="/" className="hover:text-primary transition-colors">
                Home
              </a>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="font-medium text-ink-primary">{title}</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-primary mb-2">
          {title}
        </h1>

        {description && (
          <p className="text-ink-secondary text-base sm:text-lg mb-6 max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </header>
  )
}

export const Header = PageHeader
