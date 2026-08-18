import { Header } from "@/components/layout/PageHeader"

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
          <h1 className="font-display text-4xl font-bold text-ink-primary mb-6">
            Welcome to PriceNaija API
          </h1>
          <p className="text-ink-secondary text-lg mb-8">
            Comprehensive API for tracking Nigerian food prices. This documentation
            covers all endpoints, parameters, and response formats.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium text-ink-primary mb-3">Endpoints</h3>
              <ul className="space-y-2 text-sm">
                <li>/prices - Get live market prices</li>
                <li>/commodity/[slug] - Get commodity details</li>
                <li>/api-keys - Manage API keys</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-ink-primary mb-3">Authentication</h3>
              <p className="text-sm text-ink-secondary">
                All API requests require authentication via API key in the header:
                <code>Authorization: Bearer {key}</code>
              </p>
            </div>

            <div>
              <h3 className="font-medium text-ink-primary mb-3">Rate Limits</h3>
              <p className="text-sm text-ink-secondary">
                100 requests per minute per API key
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}