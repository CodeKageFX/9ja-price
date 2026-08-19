"use client";

import { Header } from "@/components/layout/PageHeader"
import { PriceHistoryChart } from "@/components/charts/PriceHistoryChart"
import { StatusBadge } from "@/components/shared/StatusBadge"
import { PriceChangeIndicator } from "@/components/charts/PriceChangeIndicator"
import { DataTable, type DataTableColumnDef } from "@/components/tables/DataTable"

interface MarketListing {
  market: string
  city: string
  price: number
  unit: string
  change: number
  verified: boolean
}

interface PriceHistoryEntry {
  date: string
  price: number
}

export default function CommodityDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const commodity = params.slug === "rice" ? "Rice (Local)" : params.slug

  const priceHistory: PriceHistoryEntry[] = [
    { date: "2024-01-10", price: 480 },
    { date: "2024-01-11", price: 490 },
    { date: "2024-01-12", price: 500 },
    { date: "2024-01-13", price: 510 },
    { date: "2024-01-14", price: 520 },
    { date: "2024-01-15", price: 500 },
  ]

  const marketData: MarketListing[] = [
    { market: "Wuse Market", city: "Abuja", price: 2200, unit: "kg", change: 8.4, verified: true },
    { market: "Mile 12", city: "Lagos", price: 2000, unit: "kg", change: 3.2, verified: true },
    { market: "Dawanau", city: "Kano", price: 1800, unit: "kg", change: -1.5, verified: false },
  ]

  const marketColumns: DataTableColumnDef<MarketListing>[] = [
    { accessorKey: "market", header: "Market" },
    { accessorKey: "city", header: "City" },
    { accessorKey: "price", header: "Price (NGN)" },
    { accessorKey: "change", header: "Change" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header
        title={commodity}
        description="Price history and regional market information"
        showBreadcrumb={true}
      />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="border-border">
              <div className="p-6">
                <p className="text-xs text-ink-secondary uppercase tracking-wider mb-1">Current Price</p>
                <p className="text-3xl font-bold text-ink-primary">₦2,200 <span className="text-sm font-normal text-ink-secondary">/ kg</span></p>
                <div className="mt-2">
                  <PriceChangeIndicator change={8.4} direction="up" />
                </div>
              </div>
            </Card>

            <Card className="border-border">
              <div className="p-6">
                <p className="text-xs text-ink-secondary uppercase tracking-wider mb-1">7-Day Average</p>
                <p className="text-3xl font-bold text-ink-primary">₦2,030 <span className="text-sm font-normal text-ink-secondary">/ kg</span></p>
                <div className="mt-2">
                  <StatusBadge variant="verified" />
                </div>
              </div>
            </Card>

            <Card className="border-border">
              <div className="p-6">
                <p className="text-xs text-ink-secondary uppercase tracking-wider mb-1">30-Day Average</p>
                <p className="text-3xl font-bold text-ink-primary">₦2,050 <span className="text-sm font-normal text-ink-secondary">/ kg</span></p>
                <div className="mt-2">
                  <StatusBadge variant="active" />
                </div>
              </div>
            </Card>
          </div>

          <PriceHistoryChart data={priceHistory} height={300} />
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-ink-primary mb-4">Regional Market Prices</h2>
          <DataTable
            data={marketData}
            columns={marketColumns}
          />
        </div>
      </section>
    </main>
  )
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border bg-surface ${className}`}>
      {children}
    </div>
  )
}
