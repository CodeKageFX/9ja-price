export const MARKETS = [
  "Lagos",
  "Kano",
  "Kumasi",
  "Abuja",
  "Port Harcourt",
  "Ibadan",
  "Onitsha",
  "Abia",
] as const

export type Market = typeof MARKETS[number]

export const COMMODITIES = [
  "Rice",
  "Beans",
  "Maize",
  "Yam",
  "Plantain",
  "Cocoyam",
  "Fish",
  "Goat",
  "Cow",
] as const

export type Commodity = typeof COMMODITIES[number]

export const UNITS = ["kg", "tonne", "bag", "crrate"] as const

export type Unit = typeof UNITS[number]

export const DATA_ORIGINS = ["OpenData", "MarketSurvey", "PartnerAPI"] as const

export type DataOrigin = typeof DATA_ORIGINS[number]