import { Header } from "@/components/layout/PageHeader"
import { StatusCard } from "@/components/shared/StatCard"
import { RequestAnalyticsChart } from "@/components/charts/RequestAnalyticsChart"
import { DataTable } from "@/components/tables/DataTable"
import { ApiKeyTable } from "@/components/tables/ApiKeyTable"
import { cn } from "@/lib/utils"

export default function DeveloperDashboardPage() {
  const apiKeyData = [
    { name: "API Key 1", key: "pk_abc123", permissions: ["read", "write"] },
    { name: "API Key 2", key: "pk_def456", permissions: ["read"] },
  ]

  const requestData = [
    { date: "2024-01-15", requests: 1250 },
    { date: "2024-01-14", requests: 1180 },
    { date: "2024-01-13", requests: 1320 },
    { date: "2024-01-12", requests: 1150 },
    { date: "2024-01-11", requests: 1200 },
  ]

  const columns: (keyof typeof requestData[0])[] = ["date", "requests"]

  return (
    <main className="min-h-screen bg-background">
      <Header
        title="Developer Dashboard"
        description="API usage monitoring and key management"
        showBreadcrumb={true}
      />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <StatusCard
                title="Total Requests"
                value="4,900"
                change={12}
                icon={<svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 5v14M5 12h14" />
                </svg>}
                variant="positive"
              />
            </div>

            <div>
              <StatusCard
                title="Active Keys"
                value="8"
                change={2}
                icon={<svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 5v14M5 12h14" />
                </svg>}
                variant="positive"
              />
            </div>

            <div>
              <StatusCard
                title="Rate Limit"
                value="80%"
                change={15}
                icon={<svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 5v14M5 12h14" />
                </svg>}
                variant="neutral"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RequestAnalyticsChart
            data={requestData}
          />

          <ApiKeyTable
            data={apiKeyData}
          />
        </div>
      </section>
    </main>
  )
}