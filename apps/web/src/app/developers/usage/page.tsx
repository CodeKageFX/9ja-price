import { Header } from "@/components/layout/PageHeader"
import { StatCard } from "@/components/shared/StatCard"
import { cn } from "@/lib/utils"

export default function DeveloperUsagePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header
        title="Usage"
        description="API usage monitoring and analytics"
        showBreadcrumb={true}
      />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <StatCard
              title="Total Requests"
              value="12,500"
              change={8}
              icon={<svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 5v14M5 12h14" />
              </svg>}
              variant="positive"
            />
            <StatCard
              title="Active Keys"
              value="15"
              change={3}
              icon={<svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 5v14M5 12h14" />
              </svg>}
              variant="positive"
            />
            <StatCard
              title="Rate Limit"
              value="75%"
              change={-5}
              icon={<svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 5v14M5 12h14" />
              </svg>}
              variant="negative"
            />
          </div>
        </div>
      </section>
    </main>
  )
}