import { Header } from "@/components/layout/PageHeader"
import { DataTable } from "@/components/tables/DataTable"
import { ApiKeyTable } from "@/components/tables/ApiKeyTable"
import { CreateApiKeyForm } from "@/components/forms/CreateApiKeyForm"
import { StatusBadge } from "@/components/shared/StatusBadge"
import { cn } from "@/lib/utils"

export default function DeveloperApiKeysPage() {
  const apiKeyData = [
    { id: "1", name: "API Key 1", key: "pk_abc123...", permissions: ["read", "write"], status: "active" },
    { id: "2", name: "API Key 2", key: "pk_def456...", permissions: ["read"], status: "revoked" },
  ]

  const columns = ["name", "key", "permissions", "status"]

  return (
    <main className="min-h-screen bg-background">
      <Header
        title="API Keys"
        description="Manage your API keys"
        showBreadcrumb={true}
      />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CreateApiKeyForm />
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DataTable<{
            id: string
            name: string
            key: string
            permissions: string[]
            status: string
          }>>
            {columns.map((column) => ({
              accessorKey: column,
              header: column,
            }))}
            {apiKeyData}
          </DataTable>
        </div>
      </section>
    </main>
  )
}