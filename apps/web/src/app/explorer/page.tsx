"use client"

import { useState } from "react"
import { Header } from "@/components/layout/PageHeader"
import { SearchInput } from "@/components/shared/SearchInput"
import { FilterDropdown } from "@/components/shared/FilterDropdown"
import { DataTable, type DataTableColumnDef } from "@/components/tables/DataTable"

interface PriceRow {
  commodity: string
  market: string
  unit: string
  price: number
  date: string
}

const priceData: PriceRow[] = [
  { commodity: "Rice (Local)", market: "Abuja, Wuse", unit: "kg", price: 2200, date: "2 mins ago" },
  { commodity: "Beans (Oloyin)", market: "Lagos, Mile 12", unit: "kg", price: 2000, date: "15 mins ago" },
  { commodity: "Tomato", market: "Kano, Dawanau", unit: "piece", price: 120, date: "1 hr ago" },
  { commodity: "Eggs (Crate)", market: "Ibadan, Bodija", unit: "crate", price: 4500, date: "2 hrs ago" },
  { commodity: "Maize", market: "Kumasi", unit: "bag", price: 300, date: "3 hrs ago" },
  { commodity: "Yam", market: "Onitsha", unit: "kg", price: 800, date: "4 hrs ago" },
]

const columns: DataTableColumnDef<PriceRow>[] = [
  { accessorKey: "commodity", header: "Food Item" },
  { accessorKey: "market", header: "Location" },
  { accessorKey: "unit", header: "Unit" },
  { accessorKey: "price", header: "Price (NGN)" },
  { accessorKey: "date", header: "Last Updated" },
]

export default function PriceExplorerPage() {
  const [selectedMarket, setSelectedMarket] = useState<string | undefined>(undefined)
  const [selectedCommodity, setSelectedCommodity] = useState<string | undefined>(undefined)

  const filteredData = priceData.filter((row) => {
    if (selectedMarket && selectedMarket !== "All" && !row.market.includes(selectedMarket)) return false
    if (selectedCommodity && selectedCommodity !== "All" && !row.commodity.includes(selectedCommodity)) return false
    return true
  })

  return (
    <main className="min-h-screen bg-background">
      <Header
        title="Price Explorer"
        description="Filter and search commodity prices across markets"
        showBreadcrumb={true}
      />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <FilterDropdown
              options={[
                { value: "All", label: "All Markets" },
                { value: "Lagos", label: "Lagos" },
                { value: "Kano", label: "Kano" },
                { value: "Abuja", label: "Abuja" },
                { value: "Ibadan", label: "Ibadan" },
                { value: "Onitsha", label: "Onitsha" },
              ]}
              onSelect={setSelectedMarket}
              placeholder="Market"
            />
            <FilterDropdown
              options={[
                { value: "All", label: "All Commodities" },
                { value: "Rice", label: "Rice" },
                { value: "Beans", label: "Beans" },
                { value: "Tomato", label: "Tomato" },
                { value: "Eggs", label: "Eggs" },
                { value: "Maize", label: "Maize" },
                { value: "Yam", label: "Yam" },
              ]}
              onSelect={setSelectedCommodity}
              placeholder="Commodity"
            />
            <div className="flex items-end">
              <SearchInput />
            </div>
          </div>

          <DataTable
            data={filteredData}
            columns={columns}
            title="Live Market Prices"
          />
        </div>
      </section>
    </main>
  )
}
