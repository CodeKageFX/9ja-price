"use client"

import { useState } from "react"

interface PriceItem {
  commodity: string
  price: string
}

const DEFAULT_PRICES: PriceItem[] = [
  { commodity: "Rice", price: "₦2,200/kg" },
  { commodity: "Egg", price: "₦250/piece" },
  { commodity: "Beans", price: "₦1,800/kg" },
]

export function PriceTicker() {
  const [prices] = useState<PriceItem[]>(DEFAULT_PRICES)

  return (
    <div className="flex items-center gap-6 text-sm overflow-x-auto py-2">
      <span className="text-ink-secondary whitespace-nowrap">Live:</span>
      {prices.map((price) => (
        <span key={price.commodity} className="whitespace-nowrap font-medium text-ink-primary">
          {price.commodity} <span className="text-primary">{price.price}</span>
        </span>
      ))}
    </div>
  )
}
