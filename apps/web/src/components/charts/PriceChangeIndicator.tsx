import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

export type PriceChangeDirection = "up" | "down" | "neutral"

export function PriceChangeIndicator({
  change,
  direction,
}: {
  change: number
  direction: PriceChangeDirection
}) {
  const icon = direction === "up" ? TrendingUp : direction === "down" ? TrendingDown : Minus
  const Icon = icon
  const color = direction === "up" ? "text-emerald-600" : direction === "down" ? "text-red-500" : "text-ink-secondary"
  const bg = direction === "up" ? "bg-emerald-50" : direction === "down" ? "bg-red-50" : "bg-surface-container-low"

  return (
    <Badge className={`${bg} ${color} border-transparent`} variant="default">
      <Icon className="h-3 w-3 mr-1" />
      {direction === "up" ? "+" : direction === "down" ? "-" : ""}{Math.abs(change)}%
    </Badge>
  )
}
