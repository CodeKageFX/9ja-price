// Client for the 9jaPrice API (apps/api). Base URL comes from NEXT_PUBLIC_API_URL;
// see .env.example. The API has no global prefix, so paths start at the root.
const API_BASE = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001").replace(/\/+$/, "")

// Every response is wrapped by the API's ResponseInterceptor.
interface ApiEnvelope<T> {
  statusCode: number
  message: string
  data: T
}

export class ApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message)
    this.name = "ApiError"
  }
}

async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  let res: Response
  try {
    res = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      // Only send Content-Type when there is a body: on a GET it would turn a
      // simple cross-origin request into a preflighted one for no reason.
      headers: {
        ...(options?.body ? { "Content-Type": "application/json" } : {}),
        ...options?.headers,
      },
    })
  } catch {
    // Network failure, API not running, or the browser blocked the request (CORS).
    throw new ApiError(`Could not reach the API at ${API_BASE}`, 0)
  }

  if (!res.ok) {
    const body: unknown = await res.json().catch(() => null)
    const message =
      body && typeof body === "object" && "message" in body ? String((body as { message: unknown }).message) : res.statusText
    throw new ApiError(message || `Request failed with status ${res.status}`, res.status)
  }

  const json = (await res.json()) as ApiEnvelope<T>
  return json.data
}

// One verified price observation, exactly as GET /prices returns it.
// price and quantity are decimal strings (e.g. "2600.00" per "1.000" kg).
export interface ApiPriceObservation {
  id: number
  price: string
  quantity: string
  observedAt: string
  commodity: { name: string; slug: string }
  market: { name: string; city: string; state: string }
  unit: { symbol: string }
}

export interface ApiPriceList {
  prices: ApiPriceObservation[]
  length: number
}

export const api = {
  prices: {
    // GET /prices — optional filters: commodity (slug), market (exact name).
    list: (params?: { commodity?: string; market?: string }) => {
      const query = new URLSearchParams(
        Object.entries(params ?? {}).filter(([, v]) => v) as [string, string][],
      ).toString()
      return request<ApiPriceList>(`/prices${query ? `?${query}` : ""}`)
    },
  },
  // PENDING: /commodities and /markets don't exist yet. The markets page still uses
  // its isolated mock (src/lib/markets.ts) until those endpoints land.
}
