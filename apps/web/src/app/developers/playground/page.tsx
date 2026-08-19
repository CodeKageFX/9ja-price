"use client"

import { useState } from "react"
import { Header } from "@/components/layout/PageHeader"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CodeBlock } from "@/components/code/CodeBlock"
import { Badge } from "@/components/ui/badge"
import { Play, History, Link, Plus, Trash2 } from "lucide-react"

interface QueryParam {
  key: string
  value: string
}

export default function DeveloperPlaygroundPage() {
  const [method, setMethod] = useState<"GET" | "POST">("GET")
  const [url, setUrl] = useState("https://api.agriintel.com/v1")
  const [params, setParams] = useState<QueryParam[]>([
    { key: "commodity", value: "rice" },
    { key: "market", value: "lagos" },
    { key: "unit", value: "kg" },
  ])
  const [response, setResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const addParam = () => setParams([...params, { key: "", value: "" }])
  const removeParam = (index: number) => setParams(params.filter((_, i) => i !== index))
  const updateParam = (index: number, field: "key" | "value", val: string) => {
    const updated = [...params]
    updated[index][field] = val
    setParams(updated)
  }

  const handleRun = async () => {
    setIsLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setResponse(JSON.stringify({
      status: "success",
      data: {
        commodity: "Rice (Local, Long Grain)",
        market: "Mile 12, Lagos",
        currency: "NGN",
        unit: "50kg bag",
        current_price: 85000,
        previous_price: 82500,
        price_change_pct: 3.03,
        trend: "up",
        last_updated: "2023-10-27T08:30:00Z",
        historical_data: [
          { date: "2023-10-20", price: 82500 },
          { date: "2023-10-13", price: 81000 },
        ],
        meta: {
          confidence_score: 0.94,
          data_points: 12,
          is_estimated: false,
        },
      },
    }, null, 2))
    setIsLoading(false)
  }

  return (
    <main className="min-h-screen bg-background">
      <Header
        title="API Playground"
        description="Test endpoints interactively before integrating."
        showBreadcrumb={false}
      />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div />
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <History className="h-4 w-4 mr-2" />
                History
              </Button>
              <Button size="sm" onClick={handleRun} disabled={isLoading}>
                <Play className="h-4 w-4 mr-2" />
                {isLoading ? "Running..." : "Run Request"}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Link className="h-4 w-4" />
                    Request URL
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <div className="flex gap-1 bg-surface-container-low rounded-lg p-1">
                      {(["GET", "POST"] as const).map((m) => (
                        <button
                          key={m}
                          onClick={() => setMethod(m)}
                          className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                            method === m
                              ? "bg-primary text-white"
                              : "text-ink-secondary hover:text-ink-primary"
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                    <Input
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="flex-1 font-mono text-sm"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-sm">Query Parameters</CardTitle>
                  <Button variant="ghost" size="sm" onClick={addParam}>
                    <Plus className="h-4 w-4 mr-1" />
                    Add Param
                  </Button>
                </CardHeader>
                <CardContent className="space-y-2">
                  {params.map((param, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Input
                        value={param.key}
                        onChange={(e) => updateParam(i, "key", e.target.value)}
                        placeholder="key"
                        className="flex-1 font-mono text-sm"
                      />
                      <span className="text-ink-secondary">=</span>
                      <Input
                        value={param.value}
                        onChange={(e) => updateParam(i, "value", e.target.value)}
                        placeholder="value"
                        className="flex-1 font-mono text-sm"
                      />
                      <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" onClick={() => removeParam(i)}>
                        <Trash2 className="h-4 w-4 text-ink-secondary" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-sm flex items-center gap-2">
                    Headers
                    <Badge variant="secondary" className="text-xs">2 Active</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-mono text-ink-primary w-32">Authorization</span>
                    <span className="text-ink-secondary">Bearer sk_live_...9a8f</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-mono text-ink-primary w-32">Accept</span>
                    <span className="text-ink-secondary">application/json</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-border h-full">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-emerald-50 text-emerald-700">
                      200 OK
                    </Badge>
                    <span className="text-xs text-ink-secondary">245ms</span>
                    <span className="text-xs text-ink-secondary">1.2KB</span>
                  </div>
                </CardHeader>
                <CardContent>
                  {response ? (
                    <CodeBlock language="json" code={response} />
                  ) : (
                    <div className="h-64 flex items-center justify-center text-ink-secondary text-sm">
                      Run a request to see the response
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
