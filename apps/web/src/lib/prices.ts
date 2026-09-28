import { format } from "date-fns"
import { api, type ApiPriceObservation } from "./api"
import { getMockState } from "./mocks/mock-state"

// One row in the Price Explorer: everything the table, filters and search need.
// Built from GET /prices. Fields the API doesn't provide yet are null/empty and
// render as "—" in the table:
//   - category: the API's commodity object has no category yet
//   - change:   the API returns no trend / previous price yet
export interface PriceRecord {
  id: string
  slug: string
  name: string
  category: string
  location: string
  market: string
  price: string
  unit: string
  change: string | null
  changeType: "positive" | "negative" | null
  updated: string
  icon: string
}

const nairaFormatter = new Intl.NumberFormat("en-NG", { maximumFractionDigits: 2 })

// The API prices a quantity of a unit: 2600.00 for 1.000 kg -> "/kg",
// 78500.00 for 50.000 kg -> "/50 kg".
function unitLabel(quantity: string, symbol: string) {
  const amount = Number(quantity)
  if (!Number.isFinite(amount) || amount === 1) return `/${symbol}`
  return `/${nairaFormatter.format(amount)} ${symbol}`
}

// The table shows a small icon per row; the API has no icon field, so it's
// picked from the commodity slug and falls back to a generic one.
const ICON_BY_SLUG: Record<string, string> = {
  rice: "rice",
  garri: "rice",
  maize: "rice",
  beans: "beans",
  egg: "egg",
  eggs: "egg",
  tomato: "tomato",
  tomatoes: "tomato",
  beef: "beef",
  goat: "beef",
}

export function toPriceRecord(observation: ApiPriceObservation): PriceRecord {
  const observedAt = new Date(observation.observedAt)
  return {
    id: String(observation.id),
    slug: observation.commodity.slug,
    name: observation.commodity.name,
    category: "", // PENDING: ask backend to include commodity.category
    location: observation.market.city,
    market: observation.market.name,
    price: `₦${nairaFormatter.format(Number(observation.price))}`,
    unit: unitLabel(observation.quantity, observation.unit.symbol),
    change: null, // PENDING: ask backend for a change / previous price
    changeType: null,
    updated: Number.isNaN(observedAt.getTime()) ? "—" : format(observedAt, "MMM d, yyyy"),
    icon: ICON_BY_SLUG[observation.commodity.slug] ?? "default",
  }
}

export async function getPriceRecords(): Promise<PriceRecord[]> {
  // Dev-only preview of the data states: /explorer?mock=loading|error|empty
  const mockState = getMockState()
  if (mockState === "loading") return new Promise<PriceRecord[]>(() => {})
  if (mockState === "error") throw new Error("Mock error: prices failed to load")
  if (mockState === "empty") return []

  const { prices } = await api.prices.list()
  return prices.map(toPriceRecord)
}
