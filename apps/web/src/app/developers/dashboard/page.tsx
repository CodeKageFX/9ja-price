"use client"

import { Header } from "@/components/layout/PageHeader"
import { StatCard } from "@/components/shared/StatCard"
import { RequestAnalyticsChart } from "@/components/charts/RequestAnalyticsChart"
import { DataTable, type DataTableColumnDef } from "@/components/tables/DataTable"
import { TrendingUp, Key, Gauge } from "lucide-react"

interface ApiKeyRow {
  name: string
  key: string
  permissions: string
  status: string
}

interface RequestRow {
  date: string
  requests: number
}

export default function DeveloperDashboardPage() {
  const apiKeyData: ApiKeyRow[] = [
    { name: "Production Key", key: "pk_abc123...", permissions: "read, write", status: "active" },
    { name: "Test Key", key: "pk_def456...", permissions: "read", status: "revoked" },
  ]

  const requestData: RequestRow[] = [
    { date: "2024-01-15", requests: 1250 },
    { date: "2024-01-14", requests: 1180 },
    { date: "2024-01-13", requests: 1320 },
    { date: "2024-01-12", requests: 1150 },
    { date: "2024-01-11", requests: 1200 },
  ]

  const keyColumns: DataTableColumnDef<ApiKeyRow>[] = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "key", header: "Key" },
    { accessorKey: "permissions", header: "Permissions" },
    { accessorKey: "status", header: "Status" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header
        title="Developer Dashboard"
        description="API usage monitoring and key management"
        showBreadcrumb={true}
      />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard
              title="Total Requests"
              value="4,900"
              change={12}
              icon={<TrendingUp className="h-5 w-5 text-primary" />}
              variant="positive"
            />
            <StatCard
              title="Active Keys"
              value="8"
              change={2}
              icon={<Key className="h-5 w-5 text-primary" />}
              variant="positive"
            />
            <StatCard
              title="Rate Limit"
              value="80%"
              change={15}
              icon={<Gauge className="h-5 w-5 text-primary" />}
              variant="neutral"
            />
          </div>

          <RequestAnalyticsChart data={requestData} height={300} />
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DataTable data={apiKeyData} columns={keyColumns} title="API Keys" />
        </div>
      </section>
    </main>
  )
}
