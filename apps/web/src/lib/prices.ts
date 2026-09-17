import { getMockPriceRecords } from "./mocks/price-records"

// One row in the Price Explorer: everything the table, filters and search need.
// PENDING: the backend contract for GET /prices is not confirmed yet, so this is the
// shape the UI needs, not the API's shape. When the contract lands, map the API
// response into this type inside getPriceRecords() and keep the component as-is.
export interface PriceRecord {
  id: string;
  slug: string;
  name: string;
  category: string;
  location: string;
  market: string;
  price: string;
  unit: string;
  change: string;
  changeType: "positive" | "negative";
  updated: string;
  icon: string;
}

// TODO(PENDING backend contract): replace the mock with a call through src/lib/api.ts
// once GET /prices (params, response shape, pagination) is confirmed.
export async function getPriceRecords(): Promise<PriceRecord[]> {
  return getMockPriceRecords()
}
