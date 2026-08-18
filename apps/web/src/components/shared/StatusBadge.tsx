import { Badge } from "@/components/ui/badge"

export type StatusBadgeVariant = "active" | "revoked" | "verified" | "pending"

export function StatusBadge({ variant = "active" }: { variant?: StatusBadgeVariant }) {
  const variants: Record<StatusBadgeVariant, { bg: string; color: string }> = {
    active: { bg: "bg-emerald-100", color: "text-emerald-800" },
    revoked: { bg: "bg-red-100", color: "text-red-800" },
    verified: { bg: "bg-sky-100", color: "text-sky-800" },
    pending: { bg: "bg-yellow-100", color: "text-yellow-800" },
  }

  const { bg, color } = variants[variant]

  return (
    <Badge className={cn(bg, color)}>{variant}</Badge>
  )
}