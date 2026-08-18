import { Badge } from "@/components/ui/badge"
import { ChevronUpChevronDown } from "lucide-react"

export type PriceChangeDirection = "up" | "down" | "neutral"

export function PriceChangeIndicator({
  change,
  direction,
}: {
  change: number
  direction: PriceChangeDirection
}) {
  const directionMap: Record<PriceChangeDirection, { angle: number; label: string }> = {
    up: { angle: -135, label: "Increase" },
    down: { angle: 45, label: "Decrease" },
    neutral: { angle: 0, label: "Stable" },
  }

  const { angle, label } = directionMap[direction]

  return (
    <Badge
      className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      variant="default"
    >
      <ChevronUpChevronDown
        className="h-3 w-3 rotate-[{angle}] inline"
        aria-label={label}
      />{label}
    </Badge>
  )
}