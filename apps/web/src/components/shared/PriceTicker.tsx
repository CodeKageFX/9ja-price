import { useEffect, useState } from "react"
import { useChunk } from "stunk/react"
import { asyncChunk } from "stunk/query"
import { cn } from "@/lib/utils"
import { Recharts } from "@/lib/recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Progress } from "@/components/ui/progress"

export const PriceTickerChunk = asyncChunk(
  async () => fetch("/api/prices").then((res) => res.json()),
  { key: "prices", staleTime: 30000 }
)

export function PriceTicker() {
  const { data, isLoading } = useAsyncChunk(PriceTickerChunk)
  const [prices, setPrices] = useState<Array<{ commodity: string; market: string; price: string }>>([])

  useEffect(() => {
    if (data) {
      setPrices(
        data.map((price: any) => ({
          commodity: price.commodity,
          market: price.market,
          price: `₦${price.price.toLocaleString()}`,
        }))
      )
    }
  }, [data])

  if (isLoading || prices.length === 0) {
    return (
      <Card className="h-20 flex items-center justify-center">
        <span className="text-ink-secondary">Loading price ticker...</span>
      </Card>
    )
  }

  return (
    <Card className="h-20 overflow-x-auto">
      <div className="flex items-center gap-8">
        {prices.map((price, index) => (
          <div
            key={index}
            className="white-space-nowrap animate-bounce"
          >
            <span className="font-medium text-ink-primary">
              {price.commodity} at {price.market}
            </span>
            <span className="ml-4 font-mono text-lg">
              {price.price}
            </span>
          </div>
        ))}
      </div>
    </Card>
  )
}