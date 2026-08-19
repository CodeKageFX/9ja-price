"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CodeBlock } from "@/components/code/CodeBlock"

export function PlaygroundForm() {
  const [method, setMethod] = useState<"GET" | "POST">("GET")
  const [url, setUrl] = useState("https://api.pricenaija.ng/v1/prices")
  const [queryParams, setQueryParams] = useState("")
  const [response, setResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    setIsLoading(true)
    setResponse("")
    await new Promise((r) => setTimeout(r, 1000))
    setResponse(JSON.stringify({
      status: "success",
      data: { commodity: "Rice", price: 2200, market: "Lagos" },
    }, null, 2))
    setIsLoading(false)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-ink-primary">Request</h2>

        <div className="flex gap-2">
          <div className="flex gap-1 bg-surface-container-low rounded-lg p-1">
            {(["GET", "POST"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMethod(m)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
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
            placeholder="API endpoint URL"
            className="flex-1"
          />
        </div>

        <div>
          <Label>Query Parameters</Label>
          <Input
            value={queryParams}
            onChange={(e) => setQueryParams(e.target.value)}
            placeholder="?commodity=Rice&market=Lagos"
            className="mt-1"
          />
        </div>

        <Button onClick={handleSend} disabled={isLoading} className="w-full">
          {isLoading ? "Sending..." : "Send Request"}
        </Button>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-ink-primary">Response</h2>
        {response ? (
          <CodeBlock language="json" code={response} />
        ) : (
          <div className="rounded-xl border border-border bg-surface p-8 text-center text-ink-secondary">
            Send a request to see the response
          </div>
        )}
      </div>
    </div>
  )
}
