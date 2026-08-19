"use client"

import { Header } from "@/components/layout/PageHeader"
import { StatCard } from "@/components/shared/StatCard"
import { RequestAnalyticsChart } from "@/components/charts/RequestAnalyticsChart"
import { DataTable, type DataTableColumnDef } from "@/components/tables/DataTable"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Activity, BarChart3, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

interface RequestLogRow {
  timestamp: string
  endpoint: string
  method: string
  status: string
  responseTime: string
}

const requestData = [
  { date: "Mon", requests: 1200 },
  { date: "Tue", requests: 1450 },
  { date: "Wed", requests: 1100 },
  { date: "Thu", requests: 1600 },
  { date: "Fri", requests: 1350 },
  { date: "Sat", requests: 800 },
  { date: "Sun", requests: 650 },
]

const recentLogs: RequestLogRow[] = [
  { timestamp: "2023-10-27 14:32:01", endpoint: "/v1/prices/maize", method: "GET", status: "200 OK", responseTime: "120ms" },
  { timestamp: "2023-10-27 14:31:45", endpoint: "/v1/logistics/routes", method: "GET", status: "200 OK", responseTime: "145ms" },
  { timestamp: "2023-10-27 14:28:10", endpoint: "/v1/prices/invalid_crop", method: "GET", status: "404 Not Found", responseTime: "85ms" },
  { timestamp: "2023-10-27 14:25:33", endpoint: "/v1/user/keys", method: "POST", status: "201 Created", responseTime: "210ms" },
]

const logColumns: DataTableColumnDef<RequestLogRow>[] = [
  { accessorKey: "timestamp", header: "Timestamp" },
  { accessorKey: "endpoint", header: "Endpoint" },
  { accessorKey: "method", header: "Method" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "responseTime", header: "Response Time" },
]

export default function DeveloperDashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header
        title="Dashboard Overview"
        description=""
        showBreadcrumb={false}
      />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="border-border">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-ink-secondary">API Requests Today</p>
                  <Activity className="h-4 w-4 text-ink-secondary" />
                </div>
                <p className="text-2xl font-bold text-ink-primary">1,240</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-emerald-600" />
                  <span className="text-xs text-emerald-600">+12.5%</span>
                  <span className="text-xs text-ink-secondary">vs yesterday</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-ink-secondary">Total Requests This Month</p>
                  <BarChart3 className="h-4 w-4 text-ink-secondary" />
                </div>
                <p className="text-2xl font-bold text-ink-primary">45,600</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-emerald-600" />
                  <span className="text-xs text-emerald-600">+5.2%</span>
                  <span className="text-xs text-ink-secondary">vs last month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-ink-secondary">Rate Limit</p>
                  <Zap className="h-4 w-4 text-ink-secondary" />
                </div>
                <p className="text-2xl font-bold text-ink-primary">85%</p>
                <div className="mt-2 h-2 rounded-full bg-surface-container-low overflow-hidden">
                  <div className="h-full w-[85%] bg-primary rounded-full" />
                </div>
                <p className="text-xs text-ink-secondary mt-1">85,000 / 100,000 reqs</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-ink-secondary">Current Plan</p>
                  <svg className="h-4 w-4 text-ink-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                </div>
                <p className="text-2xl font-bold text-ink-primary">Developer Free</p>
                <Button variant="outline" size="sm" className="mt-2 w-full">
                  Upgrade Plan
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border mb-8">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Requests Over Time (Last 7 Days)</CardTitle>
              <div className="flex gap-1 bg-surface-container-low rounded-lg p-1">
                {["7 Days", "30 Days", "This Year"].map((period, i) => (
                  <button
                    key={period}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                      i === 0 ? "bg-surface text-ink-primary shadow-sm" : "text-ink-secondary hover:text-ink-primary"
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <RequestAnalyticsChart data={requestData} height={300} />
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Recent API Requests</CardTitle>
              <Link href="/developers/usage" className="text-sm text-primary hover:text-primary/80 flex items-center gap-1">
                View Logs <ArrowRight className="h-3 w-3" />
              </Link>
            </CardHeader>
            <CardContent>
              <DataTable data={recentLogs} columns={logColumns} />
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
