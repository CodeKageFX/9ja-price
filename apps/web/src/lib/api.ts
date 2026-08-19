const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://api.pricenaija.ng/v1"

interface ApiResponse<T> {
  status: string
  data: T
}

async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  })

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`)
  }

  const json: ApiResponse<T> = await res.json()
  return json.data
}

export const api = {
  prices: {
    list: (params?: { commodity?: string; market?: string }) => {
      const query = new URLSearchParams(params).toString()
      return request<Array<{
        commodity: string
        market: string
        unit: string
        price: number
        date: string
        change_pct: number
      }>>(`/prices${query ? `?${query}` : ""}`)
    },
    get: (commodity: string, market?: string) => {
      const query = market ? `?market=${market}` : ""
      return request<{
        commodity: string
        market: string
        unit: string
        price: number
        date: string
        historical: Array<{ date: string; price: number }>
      }>(`/prices/${commodity}${query}`)
    },
  },
  commodities: {
    list: () => request<Array<{ slug: string; name: string; category: string }>>("/commodities"),
    get: (slug: string) => request<{ slug: string; name: string; category: string; markets: string[] }>(`/commodities/${slug}`),
  },
  markets: {
    list: () => request<Array<{ id: string; name: string; city: string; region: string }>>("/markets"),
  },
}
