import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Stats } from "lucide-react"
import { cn } from "@/lib/utils"

export interface StatCardProps {
  title: string
  value: string
  change: number
  icon: React.ReactNode
  variant?: "positive" | "negative" | "neutral"
}

export function StatCard({ title, value, change, icon, variant = "positive" }: StatCardProps) {
  const changeClass = variant === "positive"
    ? "text-green-600"
    : variant === "negative"
      ? "text-red-600"
      : "text-ink-secondary"

  const changeIcon = variant === "positive"
    ? "TrendingUp"
    : variant === "negative"
      ? "TrendingDown"
      : "Minus"

  return (
    <Card className="h-48 flex flex-col justify-between">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-ink-secondary">{title}</p>
            <p className="font-medium text-ink-primary">{value}</p>
          </div>
          <icon className="h-5 w-5" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <span className={changeClass}>
            {change > 0 ? "+" : ""}{change}%
          </span>
          <Stats className="h-3 w-3" />
        </div>
      </CardContent>
    </Card>
  )
}