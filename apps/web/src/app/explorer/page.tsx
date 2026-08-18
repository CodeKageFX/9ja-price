import { useState } from "react"
import { Header } from "@/components/layout/PageHeader"
import { SearchInput } from "@/components/shared/SearchInput"
import { FilterDropdown } from "@/components/shared/FilterDropdown"
import { DataTable } from "@/components/tables/DataTable"
import { PriceTable } from "@/components/tables/PriceTable"
import { Recharts } from "@/lib/recharts"
import { PriceHistoryChart } from "@/components/charts/PriceHistoryChart"
import { StatusBadge } from "@/components/shared/StatusBadge"
import { cn } from "@/lib/utils"

export default function PriceExplorerPage() {
  const [selectedMarket, setSelectedMarket] = useState< string | undefined>(undefined)
  const [selectedCommodity, setSelectedCommodity] = useState< string | undefined>(undefined)

  const markets = ["All", "Lagos", "Kano", "Kumasi", "Abuja", "Port Harcourt", "Ibadan", "Onitsha", "Abia"]
  const commodities = ["All", "Rice", "Beans", "Maize", "Yam", "Plantain", "Fish", "Goat", "Cow"]

  const columns: (keyof typeof priceData)[string][] = ["commodity", "market", "unit", "price", "date"]

  const priceData = [
    { commodity: "Rice", market: "Lagos", unit: "kg", price: 500, date: "2024-01-15" },
    { commodity: "Beans", market: "Kano", unit: "kg", price: 350, date: "2024-01-15" },
    { commodity: "Maize", market: "Kumasi", unit: "bag", price: 300, date: "2024-01-15" },
    { commodity: "Rice", market: "Abuja", unit: "kg", price: 520, date: "2024-01-14" },
    { commodity: "Beans", market: "Kano", unit: "kg", price: 360, date: "2024-01-14" },
    { commodity: "Maize", market: "Kumasi", unit: "bag", price: 310, date: "2024-01-14" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header
        title="Price Explorer"
        description="Filter and search commodity prices across markets"
        showBreadcrumb={true}
      />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <FilterDropdown
                options={[
                  { value: "All", label: "All Markets" },
                  ...markets.map((m) => ({ value: m, label: m })),
                ]}
                onSelect={(value) => setSelectedMarket(value)}
                placeholder="Market"
              />
            </div>

            <div>
              <FilterDropdown
                options={[
                  { value: "All", label: "All Commodities" },
                  ...commodities.map((c) => ({ value: c, label: c })),
                ]}
                onSelect={(value) => setSelectedCommodity(value)}
                placeholder="Commodity"
              />
            </div>

            <div className="flex items-end">
              <SearchInput />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PriceHistoryChart
            data={[
              { date: "2024-01-10", price: 480 },
              { date: "2024-01-11", price: 490 },
              { date: "2024-01-12", price: 500 },
              { date: "2024-01-13", price: 510 },
              { date: "2024-01-14", price: 520 },
              { date: "2024-01-15", price: 500 },
            ]}
          />

          <DataTable<typeof priceData[0]>>
            {columns.map((column) => ({
              accessorKey: column,
              header: column,
            }))}
            {priceData}
          </DataTable>
        </div>
      </section>
    </main>
  )
}