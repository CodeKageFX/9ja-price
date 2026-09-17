import { getMockMarkets } from "./mocks/markets"

// One market card on /markets: everything the card, search and filters need.
// PENDING: the backend contract for GET /markets is not confirmed yet, so this is the
// shape the UI needs, not the API's shape. Map the API response into it in getMarkets().
export interface MarketItem {
  id: string;
  name: string;
  location: string;
  state: string;
  stateName: string;
  city: string;
  cityName: string;
  status: "Active Data" | "Delayed";
  foods: string[];
  moreFoodsCount: number;
  lastUpdate: string;
  image: string;
}

// TODO(PENDING backend contract): replace the mock with a call through src/lib/api.ts
// once GET /markets (params, response shape, pagination) is confirmed.
export async function getMarkets(): Promise<MarketItem[]> {
  return getMockMarkets()
}
