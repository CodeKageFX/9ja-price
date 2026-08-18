import { Header } from "@/components/layout/PageHeader"
import { DataTable } from "@/components/tables/DataTable"
import { CodeTabs } from "@/components/code/CodeTabs"
import { CopyButton } from "@/components/code/CopyButton"
import { cn } from "@/lib/utils"

interface PriceEndpointParams {
  commodity: string
  market: string
  unit: string
}

interface PriceResponse {
  commodity: string
  market: string
  unit: string
  price: number
  date: string
}

export default function PriceEndpointPage({
  params,
}: { params: { slug: string } }) {
  const commodity = params.slug || "Rice"

  const priceData: PriceResponse = {
    commodity,
    market: "Lagos",
    unit: "kg",
    price: 500,
    date: "2024-01-15",
  }

  const columns = ["commodity", "market", "unit", "price", "date"]

  const cURLExample = `curl -X GET "https://api.pricenaija.ng/v1/prices?commodity=${commodity}&market=Lagos" \\
  -H "Authorization: Bearer YOUR_API_KEY"`

  const jsonExample = JSON.stringify({
    commodity,
    market: "Lagos",
    price: 500,
    date: "2024-01-15",
  }, null, 2)

  return (
    <main className="min-h-screen bg-background">
      <Header
        title="Price Endpoint"
        description="Get live market prices for commodities"
        showBreadcrumb={true}
      />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DataTable<PriceResponse>>
            {columns.map((column) => ({
              accessorKey: column,
              header: column,
            }))}
            [{...priceData}]
          </DataTable>

          <CodeTabs
            tabs={[
              {
                label: "cURL Example",
                language: "bash",
                code: cURLExample,
              },
              {
                label: "JSON Response",
                language: "json",
                code: jsonExample,
              },
            ]}
          />
          <CopyButton text={cURLExample} />
        </div>
      </section>
    </main>
  )
}