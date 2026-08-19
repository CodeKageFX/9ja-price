import { Card, CardContent, CardHeader } from "@/components/ui/card"
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
    ? "text-emerald-600"
    : variant === "negative"
      ? "text-red-500"
      : "text-ink-secondary"

  return (
    <Card className="h-48 flex flex-col justify-between border-border">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-ink-secondary">{title}</p>
            <p className="text-2xl font-bold text-ink-primary">{value}</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            {icon}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <span className={cn("text-sm font-medium", changeClass)}>
          {change > 0 ? "+" : ""}{change}%
        </span>
      </CardContent>
    </Card>
  )
}
