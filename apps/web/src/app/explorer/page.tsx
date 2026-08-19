"use client"

import { useState } from "react"
import { Header } from "@/components/layout/PageHeader"
import { SearchInput } from "@/components/shared/SearchInput"
import { FilterDropdown } from "@/components/shared/FilterDropdown"
import { DataTable, type DataTableColumnDef } from "@/components/tables/DataTable"
import { TrendingUp, TrendingDown } from "lucide-react"

interface PriceRow {
  food: string
  category: string
  location: string
  market: string
  price: string
  change: string
  changeType: "up" | "down"
  updated: string
}

const priceData: PriceRow[] = [
  { food: "Rice", category: "Grains", location: "Abuja", market: "Wuse Market", price: "₦2,200", change: "+8.4%", changeType: "up", updated: "Aug 18, 2026" },
  { food: "Yam", category: "Tubers", location: "Lagos", market: "Mile 12 Market", price: "₦1,500", change: "-2.5%", changeType: "down", updated: "Aug 18, 2026" },
  { food: "Egg", category: "Protein", location: "Abuja", market: "Garki Market", price: "₦3,200", change: "+1.2%", changeType: "up", updated: "Aug 17, 2026" },
  { food: "Beans", category: "Grains", location: "Lagos", market: "Mile 12 Market", price: "₦2,000", change: "+3.2%", changeType: "up", updated: "Aug 18, 2026" },
  { food: "Tomato", category: "Vegetables", location: "Kano", market: "Dawanau Market", price: "₦120", change: "+12.5%", changeType: "up", updated: "Aug 18, 2026" },
]

const columns: DataTableColumnDef<PriceRow>[] = [
  { accessorKey: "food", header: "Food" },
  { accessorKey: "category", header: "Category" },
  { accessorKey: "location", header: "Location" },
  { accessorKey: "market", header: "Market" },
  { accessorKey: "price", header: "Price" },
  { accessorKey: "change", header: "Change" },
  { accessorKey: "updated", header: "Updated" },
]

export default function PriceExplorerPage() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState<string | undefined>()
  const [location, setLocation] = useState<string | undefined>()
  const [market, setMarket] = useState<string | undefined>()
  const [unit, setUnit] = useState<string | undefined>()
  const [date, setDate] = useState<string | undefined>()

  return (
    <main className="min-h-screen bg-background">
      <Header
        title="Nigerian Food Prices"
        description="Explore food prices by item, location and market."
        showBreadcrumb={false}
      />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <SearchInput placeholder="Search food prices..." onSearch={setSearch} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
            <FilterDropdown
              options={[
                { value: "All", label: "All Categories" },
                { value: "Grains", label: "Grains" },
                { value: "Tubers", label: "Tubers" },
                { value: "Protein", label: "Protein" },
                { value: "Vegetables", label: "Vegetables" },
              ]}
              onSelect={setCategory}
              placeholder="Category"
            />
            <FilterDropdown
              options={[
                { value: "All", label: "All Locations" },
                { value: "Abuja", label: "Abuja" },
                { value: "Lagos", label: "Lagos" },
                { value: "Kano", label: "Kano" },
              ]}
              onSelect={setLocation}
              placeholder="Location"
            />
            <FilterDropdown
              options={[
                { value: "All", label: "All Markets" },
                { value: "Wuse Market", label: "Wuse Market" },
                { value: "Mile 12 Market", label: "Mile 12 Market" },
                { value: "Garki Market", label: "Garki Market" },
                { value: "Dawanau Market", label: "Dawanau Market" },
              ]}
              onSelect={setMarket}
              placeholder="Market"
            />
            <FilterDropdown
              options={[
                { value: "All", label: "All Units" },
                { value: "kg", label: "Per kg" },
                { value: "tuber", label: "Per tuber" },
                { value: "crate", label: "Per crate" },
                { value: "piece", label: "Per piece" },
              ]}
              onSelect={setUnit}
              placeholder="Price Unit"
            />
            <FilterDropdown
              options={[
                { value: "All", label: "All Dates" },
                { value: "today", label: "Today" },
                { value: "week", label: "This Week" },
                { value: "month", label: "This Month" },
              ]}
              onSelect={setDate}
              placeholder="Date"
            />
          </div>

          <DataTable data={priceData} columns={columns} />

          <div className="mt-4 flex items-center justify-between text-sm text-ink-secondary">
            <span>Showing 1 to {priceData.length} of 150 entries</span>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 rounded border border-border hover:bg-surface-container-low transition-colors">
                Previous
              </button>
              <button className="px-3 py-1 rounded bg-primary text-white">1</button>
              <button className="px-3 py-1 rounded border border-border hover:bg-surface-container-low transition-colors">2</button>
              <button className="px-3 py-1 rounded border border-border hover:bg-surface-container-low transition-colors">3</button>
              <button className="px-3 py-1 rounded border border-border hover:bg-surface-container-low transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
