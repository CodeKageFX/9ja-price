"use client"

import { useState } from "react"
import { Header } from "@/components/layout/PageHeader"
import { CreateApiKeyForm } from "@/components/forms/CreateApiKeyForm"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Info, Plus, Pencil, Trash2 } from "lucide-react"

interface ApiKeyRow {
  name: string
  key: string
  created: string
  lastUsed: string
  status: string
}

const apiKeyData: ApiKeyRow[] = [
  { name: "Production Environment", key: "nfpx_live_****", created: "Oct 12, 2023", lastUsed: "2 hours ago", status: "active" },
  { name: "Staging Integration", key: "nfpx_test_****", created: "Nov 01, 2023", lastUsed: "Yesterday", status: "active" },
  { name: "Legacy Auth Key", key: "nfpx_live_****", created: "Jan 15, 2023", lastUsed: "Aug 10, 2023", status: "revoked" },
]

export default function DeveloperApiKeysPage() {
  const [showCreateForm, setShowCreateForm] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Header
        title="API Keys"
        description="Manage your authentication tokens for the Market Intelligence Portal."
        showBreadcrumb={false}
      />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div />
            <Button onClick={() => setShowCreateForm(!showCreateForm)}>
              <Plus className="h-4 w-4 mr-2" />
              Create API Key
            </Button>
          </div>

          {showCreateForm && (
            <Card className="border-border mb-6">
              <CardContent className="p-6">
                <CreateApiKeyForm />
              </CardContent>
            </Card>
          )}

          <Card className="border-border mb-6">
            <CardContent className="p-4 flex items-start gap-3">
              <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-ink-primary text-sm">Keep your keys secure</p>
                <p className="text-sm text-ink-secondary">
                  Do not share your API keys in publicly accessible areas such as GitHub, client-side code, and so forth. Treat them like passwords.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="rounded-xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-container-low/50">
                  <th className="text-left px-4 py-3 font-semibold text-ink-secondary">Name &amp; Key</th>
                  <th className="text-left px-4 py-3 font-semibold text-ink-secondary">Created</th>
                  <th className="text-left px-4 py-3 font-semibold text-ink-secondary">Last Used</th>
                  <th className="text-left px-4 py-3 font-semibold text-ink-secondary">Status</th>
                  <th className="text-right px-4 py-3 font-semibold text-ink-secondary">Actions</th>
                </tr>
              </thead>
              <tbody>
                {apiKeyData.map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-surface-container-low/50 transition-colors">
                    <td className="px-4 py-4">
                      <div>
                        <p className="font-medium text-ink-primary">{row.name}</p>
                        <p className="text-xs text-ink-secondary font-mono mt-1">{row.key}</p>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-ink-secondary">{row.created}</td>
                    <td className="px-4 py-4 text-ink-secondary">{row.lastUsed}</td>
                    <td className="px-4 py-4">
                      <Badge
                        className={row.status === "active" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}
                        variant="default"
                      >
                        {row.status === "active" ? "Active" : "Revoked"}
                      </Badge>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {row.status === "active" && (
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Pencil className="h-4 w-4" />
                          </Button>
                        )}
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  )
}
