import { Header } from "@/components/layout/PageHeader"
import { PriceHistoryChart } from "@/components/charts/PriceHistoryChart"
import { StatusBadge } from "@/components/shared/StatusBadge"
import { PriceChangeIndicator } from "@/components/charts/PriceChangeIndicator"
import { DataTable } from "@/components/tables/DataTable"
import { cn } from "@/lib/utils"

interface PriceHistoryEntry {
  date: string
  price: number
}

interface CommodityDetailProps {
  params: { slug: string }
}

export default function CommodityDetailPage({
  params,
}: CommodityDetailProps) {
  const commodity = params.slug === "rice" ? "Rice" : params.slug

  const priceHistory: PriceHistoryEntry[] = [
    { date: "2024-01-10", price: 480 },
    { date: "2024-01-11", price: 490 },
    { date: "2024-01-12", price: 500 },
    { date: "2024-01-13", price: 510 },
    { date: "2024-01-14", price: 520 },
    { date: "2024-01-15", price: 500 },
  ]

  const columns: (keyof PriceHistoryEntry)[] = ["date", "price"]

  return (
    <main className="min-h-screen bg-background">
      <Header
        title={commodity} Details
        description="Price history and market information"
        showBreadcrumb={true}
      />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PriceHistoryChart
              data={priceHistory}
            />

            <div>
              <h2 className="font-display text-2xl font-bold text-ink-primary mb-4">
                {commodity} Price History
              </h2>
              <PriceChangeIndicator
                change={-15}
                direction="down"
              />
              <StatusBadge variant="active" />
              <StatusBadge variant="verified" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DataTable<PriceHistoryEntry>>
            {columns.map((column) => ({
              accessorKey: column,
              header: column,
            }))}
            {priceHistory}
          </DataTable>
        </div>
      </section>
    </main>
  )
}