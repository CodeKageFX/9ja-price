export interface Price {
  id: string
  commodity: string
  market: string
  unit: string
  price: number
  date: string
  createdAt: string
}

export interface PriceHistoryEntry {
  date: string
  price: number
}

export interface PriceTableRow {
  commodity: string
  market: string
  unit: string
  price: number
  date: string
  actions: string[]
}