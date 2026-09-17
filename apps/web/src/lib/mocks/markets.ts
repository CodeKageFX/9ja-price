import type { MarketItem } from "../markets"
import { resolveMock } from "./mock-state"

// MOCK DATA: placeholder markets until GET /markets is confirmed. Not real data.
const MOCK_MARKETS: MarketItem[] = [
  {
    id: "wuse",
    name: "Wuse Market",
    location: "Abuja, FCT",
    state: "fct",
    stateName: "FCT Abuja",
    city: "abuja",
    cityName: "Abuja",
    status: "Active Data",
    foods: ["Rice", "Garri", "Tomatoes"],
    moreFoodsCount: 12,
    lastUpdate: "2 hours ago",
    image:
      "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "mile12",
    name: "Mile 12 Market",
    location: "Kosofe, Lagos",
    state: "lagos",
    stateName: "Lagos",
    city: "kosofe",
    cityName: "Kosofe",
    status: "Active Data",
    foods: ["Onions", "Peppers", "Yam"],
    moreFoodsCount: 24,
    lastUpdate: "15 mins ago",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "dawanau",
    name: "Dawanau Market",
    location: "Dawakin Tofa, Kano",
    state: "kano",
    stateName: "Kano",
    city: "kano",
    cityName: "Kano",
    status: "Delayed",
    foods: ["Maize", "Sorghum", "Millet"],
    moreFoodsCount: 8,
    lastUpdate: "1 day ago",
    image:
      "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=800&auto=format&fit=crop",
  },
];

export function getMockMarkets(): Promise<MarketItem[]> {
  return resolveMock(MOCK_MARKETS, "markets")
}
