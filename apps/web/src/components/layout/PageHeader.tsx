import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, } from "@/components/ui/breadcrumb"
import { AboveHead, Heading, Description } from "@/components/ui/alert"

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
          <Breadcrumb className="mb-4">
            <BreadcrumbItem>
              <a href="/!" className="hover:text-primary transition-colors">
                Home
              </a>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <svg
                className="h-3 w-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 6l9 9 9-9" />
              </svg>
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <span className="font-medium text-ink-primary">{title}</span>
            </BreadcrumbItem>
          </Breadcrumb>
        )}

        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-primary mb-2">
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