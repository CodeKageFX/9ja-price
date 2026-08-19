"use client"

import { Header } from "@/components/layout/PageHeader"
import { DataTable, type DataTableColumnDef } from "@/components/tables/DataTable"
import { CreateApiKeyForm } from "@/components/forms/CreateApiKeyForm"

interface ApiKeyRow {
  id: string
  name: string
  key: string
  permissions: string
  status: string
}

const apiKeyData: ApiKeyRow[] = [
  { id: "1", name: "Production Key", key: "pk_abc123...", permissions: "read, write", status: "active" },
  { id: "2", name: "Test Key", key: "pk_def456...", permissions: "read", status: "revoked" },
  { id: "3", name: "Staging Key", key: "pk_ghi789...", permissions: "read, write", status: "active" },
]

const columns: DataTableColumnDef<ApiKeyRow>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "key", header: "Key" },
  { accessorKey: "permissions", header: "Permissions" },
  { accessorKey: "status", header: "Status" },
]

export default function DeveloperApiKeysPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header
        title="API Keys"
        description="Manage your API keys for accessing the PriceNaija API"
        showBreadcrumb={true}
      />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CreateApiKeyForm />
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DataTable data={apiKeyData} columns={columns} title="Your API Keys" />
        </div>
      </section>
    </main>
  )
}
