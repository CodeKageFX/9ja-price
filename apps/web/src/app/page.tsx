"use client"

import Link from "next/link"
import { Search, ArrowRight, Code, TrendingUp, TrendingDown, MapPin, BadgeCheck, Clock, Zap, Key, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const LIVE_PRICES = [
  { item: "Rice", price: "₦2,200/kg" },
  { item: "Egg", price: "₦250/piece" },
  { item: "Beans", price: "₦1,800/kg" },
]

const PRICE_TABLE = [
  {
    icon: "🍚",
    name: "Rice (Local)",
    category: "Grains",
    location: "Abuja, Wuse",
    price: "₦2,200/kg",
    change: "+8.4%",
    changeType: "up" as const,
    time: "2 mins ago",
  },
  {
    icon: "🫘",
    name: "Beans (Oloyin)",
    category: "Grains",
    location: "Lagos, Mile 12",
    price: "₦2,000/kg",
    change: "+3.2%",
    changeType: "up" as const,
    time: "15 mins ago",
  },
  {
    icon: "🍅",
    name: "Tomato",
    category: "Vegetables",
    location: "Kano, Dawanau",
    price: "₦120/piece",
    change: "+12.5%",
    changeType: "up" as const,
    time: "1 hr ago",
  },
  {
    icon: "🥚",
    name: "Eggs (Crate)",
    category: "Protein",
    location: "Ibadan, Bodija",
    price: "₦4,500/crate",
    change: "-1.2%",
    changeType: "down" as const,
    time: "2 hrs ago",
  },
]

const API_EXAMPLE = `{
  "status": "success",
  "data": {
    "item": "Rice (Local)",
    "location": {
      "city": "Abuja",
      "market": "Wuse Market"
    },
    "current_price": {
      "amount": 2200,
      "currency": "NGN",
      "unit": "kg"
    },
    "historical_trends": {
      "7_day_change_pct": 8.4,
      "30_day_avg": 2050
    },
    "last_updated": "2024-05-20T14:32:00Z"
  }
}`

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-semibold text-ink-primary text-lg">PriceNaija</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/explorer" className="text-sm font-medium text-ink-primary hover:text-primary transition-colors">Explorer</Link>
              <Link href="/developers/dashboard" className="text-sm font-medium text-ink-primary hover:text-primary transition-colors">Developers</Link>
              <Link href="/explorer" className="text-sm font-medium text-ink-primary hover:text-primary transition-colors">Markets</Link>
              <Link href="/docs" className="text-sm font-medium text-ink-primary hover:text-primary transition-colors">About</Link>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/developers/dashboard">
                <Button variant="ghost" size="sm">Sign In</Button>
              </Link>
              <Link href="/developers/api-keys">
                <Button size="sm" className="bg-primary hover:bg-primary/90">Get API Key</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              Live Market Data
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-primary tracking-tight leading-tight">
              Know What Food Costs in Nigeria.
            </h1>
            <p className="mt-6 text-lg text-ink-secondary max-w-2xl mx-auto">
              Reliable, structured Nigerian food-price data for people, businesses and developers.
            </p>
          </div>

          <div className="mt-10 max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-secondary" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-14 pl-12 pr-4 rounded-xl border border-border bg-surface text-ink-primary placeholder:text-ink-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-ink-secondary">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Updated 2 mins ago:</span>
            </div>
            <div className="flex items-center gap-4">
              {LIVE_PRICES.map((p) => (
                <span key={p.item} className="font-medium text-ink-primary">
                  {p.item} <span className="text-primary">{p.price}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/explorer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                Explore Prices
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/developers/dashboard">
              <Button size="lg" variant="outline" className="px-8">
                <Code className="mr-2 h-4 w-4" />
                Build With Our API
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1 border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🍚</span>
                <div>
                  <h3 className="font-semibold text-ink-primary">Rice (Local)</h3>
                  <div className="flex items-center gap-1 text-sm text-ink-secondary">
                    <MapPin className="h-3 w-3" />
                    Wuse Market, Abuja
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  8.4%
                </Badge>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-ink-secondary uppercase tracking-wider">Current Price</p>
                  <p className="text-2xl font-bold text-ink-primary">₦2,200 <span className="text-sm font-normal text-ink-secondary">/ kg</span></p>
                </div>
                <div>
                  <p className="text-xs text-ink-secondary uppercase tracking-wider">7-Day Avg</p>
                  <p className="text-lg font-semibold text-ink-primary">₦2,030 <span className="text-sm font-normal text-ink-secondary">/ kg</span></p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 text-sm text-ink-secondary">
                <BadgeCheck className="h-4 w-4 text-primary" />
                <span>Verified Source</span>
                <span className="text-ink-secondary/60">·</span>
                <span>Market Agent #442</span>
              </div>
            </CardContent>
          </Card>

          <div className="lg:col-span-2">
            <Card className="border-border h-full">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-ink-primary">Live Market Prices</h2>
                  <Link href="/explorer" className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 transition-colors">
                    View all prices <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
                <p className="text-sm text-ink-secondary mb-6">Real-time observations from major markets across the country.</p>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left text-xs font-semibold text-ink-secondary uppercase tracking-wider py-3 px-2">Food Item</th>
                        <th className="text-left text-xs font-semibold text-ink-secondary uppercase tracking-wider py-3 px-2">Category</th>
                        <th className="text-left text-xs font-semibold text-ink-secondary uppercase tracking-wider py-3 px-2">Location</th>
                        <th className="text-right text-xs font-semibold text-ink-secondary uppercase tracking-wider py-3 px-2">Price (NGN)</th>
                        <th className="text-right text-xs font-semibold text-ink-secondary uppercase tracking-wider py-3 px-2">Change</th>
                        <th className="text-right text-xs font-semibold text-ink-secondary uppercase tracking-wider py-3 px-2">Last Updated</th>
                      </tr>
                    </thead>
                    <tbody>
                      {PRICE_TABLE.map((row) => (
                        <tr key={row.name} className="border-b border-border last:border-0 hover:bg-surface-container-low/50 transition-colors">
                          <td className="py-4 px-2">
                            <div className="flex items-center gap-3">
                              <span className="text-xl">{row.icon}</span>
                              <span className="font-medium text-ink-primary">{row.name}</span>
                            </div>
                          </td>
                          <td className="py-4 px-2 text-sm text-ink-secondary">{row.category}</td>
                          <td className="py-4 px-2 text-sm text-ink-secondary">{row.location}</td>
                          <td className="py-4 px-2 text-right font-mono font-medium text-ink-primary">{row.price}</td>
                          <td className="py-4 px-2 text-right">
                            <span className={`inline-flex items-center gap-1 font-mono text-sm font-medium ${row.changeType === "up" ? "text-emerald-600" : "text-red-500"}`}>
                              {row.changeType === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                              {row.change}
                            </span>
                          </td>
                          <td className="py-4 px-2 text-right text-sm text-ink-secondary">{row.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface-container-low/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-ink-primary">
                Build with Nigerian food-price data.
              </h2>
              <p className="mt-4 text-ink-secondary text-lg">
                Integrate reliable pricing intelligence directly into your applications with our robust REST API.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink-primary">Fast & Reliable</h4>
                    <p className="text-sm text-ink-secondary">99.9% uptime with sub-100ms response times for critical applications.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Key className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink-primary">Start Building Today</h4>
                    <p className="text-sm text-ink-secondary">Get a free developer key and make up to 1,000 requests per month.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <Link href="/docs">
                  <Button variant="outline">
                    Explore API Documentation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/developers/api-keys">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Get API Key
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-xl border border-border bg-surface shadow-lg overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-container-low">
                  <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200 text-xs">
                    GET
                  </Badge>
                  <code className="text-sm text-ink-secondary font-mono">
                    /api/v1/prices?food=rice&location=abuja
                  </code>
                  <button className="ml-auto p-1 rounded hover:bg-border transition-colors">
                    <Copy className="h-4 w-4 text-ink-secondary" />
                  </button>
                </div>
                <pre className="p-4 text-sm font-mono text-ink-primary overflow-x-auto leading-relaxed">
                  <code>{API_EXAMPLE}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl font-bold text-ink-primary">Start Building Today</h2>
          <p className="mt-4 text-ink-secondary text-lg max-w-xl mx-auto">
            Get a free developer key and make up to 1,000 requests per month.
          </p>
          <div className="mt-8">
            <Link href="/developers/api-keys">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                Get API Key
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <span className="font-semibold text-ink-primary">PriceNaija</span>
              </div>
              <p className="text-sm text-ink-secondary">
                Making Nigerian food-price data accessible.
              </p>
              <p className="text-xs text-ink-secondary mt-2">© 2024 PriceNaija. Data-driven food security for Nigeria.</p>
            </div>
            <div>
              <h5 className="font-semibold text-ink-primary mb-3">Product</h5>
              <ul className="space-y-2 text-sm">
                <li><Link href="/docs" className="text-ink-secondary hover:text-primary transition-colors">API Docs</Link></li>
                <li><Link href="/explorer" className="text-ink-secondary hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link href="/explorer" className="text-ink-secondary hover:text-primary transition-colors">Explorer</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-ink-primary mb-3">Legal & Support</h5>
              <ul className="space-y-2 text-sm">
                <li><span className="text-ink-secondary">Terms of Service</span></li>
                <li><span className="text-ink-secondary">Privacy Policy</span></li>
                <li><span className="text-ink-secondary">Contact Support</span></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
