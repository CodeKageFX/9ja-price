import { Header } from "@/components/layout/PageHeader"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DocsIntroPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header
        title="API Documentation"
        description="PriceNaija API reference guides"
        showBreadcrumb={true}
      />

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-ink-primary mb-6">
            Welcome to PriceNaija API
          </h1>
          <p className="text-ink-secondary text-lg mb-8 max-w-3xl">
            Comprehensive API for tracking Nigerian food prices. This documentation
            covers all endpoints, parameters, and response formats.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Endpoints</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-ink-secondary">
                  <li><code className="text-primary font-mono">GET /prices</code> — Live market prices</li>
                  <li><code className="text-primary font-mono">GET /commodities</code> — Commodity list</li>
                  <li><code className="text-primary font-mono">GET /markets</code> — Market list</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Authentication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-ink-secondary">
                  All API requests require an API key in the Authorization header:
                </p>
                <code className="block mt-2 text-xs font-mono bg-surface-container-low p-2 rounded-lg text-ink-primary">
                  Authorization: Bearer YOUR_API_KEY
                </code>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Rate Limits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-ink-secondary">
                  100 requests per minute per API key. Upgrade for higher limits.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Base URL</CardTitle>
              </CardHeader>
              <CardContent>
                <code className="text-sm font-mono text-primary">
                  https://api.pricenaija.ng/v1
                </code>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
