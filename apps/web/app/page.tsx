import { Header } from "@/components/layout/PageHeader"
import { PriceTicker } from "@/components/shared/PriceTicker"
import { SearchInput } from "@/components/shared/SearchInput"
import { FilterDropdown } from "@/components/shared/FilterDropdown"
import { StatCard } from "@/components/shared/StatCard"
import { StatusBadge } from "@/components/shared/StatusBadge"
import { DataTable } from "@/components/tables/DataTable"
import { PriceTable } from "@/components/tables/PriceTable"
import { CodeBlock } from "@/components/code/CodeBlock"
import { CodeTabs } from "@/components/code/CodeTabs"
import { CopyButton } from "@/components/code/CopyButton"
import { cn } from "@/lib/utils"

export default function HomePage() {
  const priceData = [
    { commodity: "Rice", market: "Lagos", price: 500, date: "2024-01-15" },
    { commodity: "Beans", market: "Kano", price: 350, date: "2024-01-15" },
    { commodity: "Maize", market: "Kumasi", price: 300, date: "2024-01-15" },
  ]

  const codeExample = `// Fetch prices from PriceNaija API
import { useAsyncChunk } from "stunk/query"

const pricesChunk = asyncChunk(
  async () => fetch("/api/prices").then(res => res.json()),
  { key: "prices", staleTime: 30000 }
)

export function PriceComponent() {
  const { data } = useAsyncChunk(pricesChunk)
  return <div>{JSON.stringify(data)}</div>
}`

  const features = [
    { title: "Live Price Ticker", description: "Real-time price updates across markets" },
    { title: "Price Explorer", description: "Filter and search commodity prices" },
    { title: "API Documentation", description: "Full API reference and guides" },
    { title: "Developer Portal", description: "Manage API keys and monitor usage" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header
        title="PriceNaija"
        description="Nigerian food price tracking and analytics platform"
        showBreadcrumb={false}
      />

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-primary">
                Track Naija Food Prices
              </h1>
              <p className="text-ink-secondary text-lg mb-6 max-w-xl">
                Real-time price tracking across Nigerian markets. Monitor prices for rice, beans, maize, and other commodities.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button className="px-4 py-2 rounded">Get Started</Button>
                <Button variant="outline" className="px-4 py-2 rounded">
                  View Docs
                </Button>
              </div>
            </div>

            <PriceTicker />
          </div>
        </div>
      </section>

      <section className="py-12 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-primary mb-8">
            Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature) => (
              <StatCard
                key={feature.title}
                title={feature.title}
                value={feature.description}
                change={0}
                icon={<svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 5v14M5 12h14" />
                </svg>}
                variant="neutral"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-primary mb-8">
            API Code Examples
          </h2>
          <CodeTabs
            tabs={[
              {
                label: "Fetch Prices",
                language: "bash",
                code: `curl -X GET "https://api.pricenaija.ng/v1/prices"`,
              },
              {
                label: "JSON Response",
                language: "json",
                code: `{
  "commodity": "Rice",
  "market": "Lagos",
  "price": 500,
  "date": "2024-01-15"
}`,
              },
            ]}
          />
          <CopyButton text={codeExample} />
        </div>
      </section>
    </main>
  )
}