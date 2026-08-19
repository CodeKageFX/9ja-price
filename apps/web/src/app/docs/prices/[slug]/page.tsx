import { Header } from "@/components/layout/PageHeader"
import { CodeBlock } from "@/components/code/CodeBlock"
import { CopyButton } from "@/components/code/CopyButton"

interface PriceEndpointPageProps {
  params: { slug: string }
}

export default function PriceEndpointPage({ params }: PriceEndpointPageProps) {
  const commodity = params.slug || "rice"

  const cURLExample = `curl -X GET "https://api.pricenaija.ng/v1/prices?commodity=${commodity}&market=Lagos" \\
  -H "Authorization: Bearer YOUR_API_KEY"`

  const jsonExample = JSON.stringify({
    status: "success",
    data: {
      commodity: commodity,
      market: "Lagos",
      unit: "kg",
      price: 2200,
      date: "2024-05-20T14:32:00Z",
    },
  }, null, 2)

  return (
    <main className="min-h-screen bg-background">
      <Header
        title={`${commodity} Prices`}
        description="Get live market prices for commodities"
        showBreadcrumb={true}
      />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-ink-primary mb-4">Request</h2>
            <CodeBlock language="bash" code={cURLExample} />
            <div className="mt-2">
              <CopyButton text={cURLExample} />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink-primary mb-4">Response</h2>
            <CodeBlock language="json" code={jsonExample} />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink-primary mb-4">Parameters</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-container-low/50">
                    <th className="text-left px-4 py-3 font-semibold text-ink-secondary">Parameter</th>
                    <th className="text-left px-4 py-3 font-semibold text-ink-secondary">Type</th>
                    <th className="text-left px-4 py-3 font-semibold text-ink-secondary">Required</th>
                    <th className="text-left px-4 py-3 font-semibold text-ink-secondary">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-mono text-primary">commodity</td>
                    <td className="px-4 py-3 text-ink-secondary">string</td>
                    <td className="px-4 py-3">Yes</td>
                    <td className="px-4 py-3 text-ink-secondary">Commodity name (e.g., rice, beans)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-mono text-primary">market</td>
                    <td className="px-4 py-3 text-ink-secondary">string</td>
                    <td className="px-4 py-3">No</td>
                    <td className="px-4 py-3 text-ink-secondary">Market name (e.g., Lagos, Abuja)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-primary">unit</td>
                    <td className="px-4 py-3 text-ink-secondary">string</td>
                    <td className="px-4 py-3">No</td>
                    <td className="px-4 py-3 text-ink-secondary">Price unit (kg, tonne, bag)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
