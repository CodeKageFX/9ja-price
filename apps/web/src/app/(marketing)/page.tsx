import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Search,
  Clock,
  ArrowRight,
  Code,
  Wheat,
  MapPin,
  TrendingUp,
  CheckCircle2,
  Sprout,
  Apple,
  Egg,
  Copy,
  Zap,
  Key,
} from "lucide-react";

export const metadata: Metadata = {
  title: "9jaPrice - Know What Food Costs in Nigeria",
  description: "Reliable, structured Nigerian food-price data for people, businesses and developers.",
};

export default function LandingPage() {
  return (
    <div className="bg-surface text-on-surface font-body-lg antialiased min-h-screen flex flex-col">
      <Navbar />
<main>
{/* Hero Section */}
<section className="relative pt-xl pb-xl px-margin-desktop md:px-margin-desktop max-w-[1440px] mx-auto overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-center relative z-10">
{/* Hero Content */}
<div className="lg:col-span-7 flex flex-col gap-lg">
<div className="flex flex-col gap-sm">
<span className="inline-flex items-center gap-xs bg-tertiary-container/10 text-tertiary-container rounded-full px-sm py-base text-label-caps font-label-caps w-max">
<span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
                            Live Market Data
                        </span>
<h1 className="text-display-lg font-display-lg text-on-surface tracking-tight leading-tight md:text-[56px] md:leading-[64px]">
                            Know What Food Costs in Nigeria.
                        </h1>
<p className="text-title-md font-body-lg text-on-surface-variant max-w-2xl">
                            Reliable, structured Nigerian food-price data for people, businesses and developers.
                        </p>
</div>
{/* Search Bar */}
<div className="flex flex-col gap-sm max-w-2xl relative">
<div className="relative group">
<Search className="absolute left-sm top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant group-focus-within:text-primary transition-colors z-10" />
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-sm pl-xl pr-sm text-body-lg font-body-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm transition-all" placeholder="How much is rice in Abuja?" type="text"/>
<button className="absolute right-xs top-1/2 -translate-y-1/2 bg-primary-container text-on-primary rounded-lg px-sm py-xs text-body-sm font-body-sm hover:opacity-90">Search</button>
</div>
{/* Quick Results */}
<div className="flex flex-wrap items-center gap-sm">
<span className="text-label-caps font-label-caps text-on-surface-variant flex items-center gap-xs">
<Clock className="w-4 h-4" />
                                Updated 2 mins ago:
                            </span>
<div className="flex flex-wrap gap-xs">
<span className="bg-surface-container-highest rounded-full px-sm py-base text-body-sm font-body-sm text-on-surface border border-outline-variant/30 flex items-center gap-xs">
                                    Rice <span className="text-on-surface-variant font-data-mono">₦2,200/kg</span>
</span>
<span className="bg-surface-container-highest rounded-full px-sm py-base text-body-sm font-body-sm text-on-surface border border-outline-variant/30 flex items-center gap-xs">
                                    Egg <span className="text-on-surface-variant font-data-mono">₦250/piece</span>
</span>
<span className="bg-surface-container-highest rounded-full px-sm py-base text-body-sm font-body-sm text-on-surface border border-outline-variant/30 flex items-center gap-xs">
                                    Beans <span className="text-on-surface-variant font-data-mono">₦1,800/kg</span>
</span>
</div>
</div>
{/* CTAs */}
<div className="flex flex-wrap items-center gap-sm mt-sm">
<Link href="/explorer" className="bg-primary-container text-on-primary rounded-lg px-md py-sm text-body-lg font-body-lg hover:opacity-90 transition-opacity flex items-center gap-xs font-medium shadow-sm">
                            Explore Prices
                            <ArrowRight className="w-5 h-5" />
</Link>
<Link href="/docs" className="bg-surface-container-low text-on-surface border border-outline-variant rounded-lg px-md py-sm text-body-lg font-body-lg hover:bg-surface-container-high transition-colors flex items-center gap-xs font-medium">
                            Build With Our API
                            <Code className="w-5 h-5" />
</Link>
</div>
</div>
</div>
{/* Hero Visual */}
<div className="lg:col-span-5 relative hidden md:block">
{/* Abstract Background Pattern */}
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-container/10 via-surface to-surface w-full h-full rounded-full blur-3xl -z-10"></div>
{/* Main Card */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-md shadow-lg shadow-on-surface/5 relative overflow-hidden group hover:border-primary/50 transition-colors">
{/* Decorative top accent */}
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-container to-tertiary-container"></div>
<div className="flex justify-between items-start mb-md mt-xs">
<div className="flex items-center gap-sm">
<div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center border border-outline-variant/30">
<Wheat className="w-6 h-6 text-primary-container" />
</div>
<div>
<h3 className="text-title-md font-headline-lg text-on-surface">Rice (Local)</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant flex items-center gap-xs">
<MapPin className="w-4 h-4" />
                                        Wuse Market, Abuja
                                    </p>
</div>
</div>
<span className="bg-error-container/20 text-error rounded-full px-xs py-base text-label-caps font-label-caps flex items-center gap-xs border border-error-container">
<TrendingUp className="w-3.5 h-3.5" />
                                8.4%
                            </span>
</div>
<div className="grid grid-cols-2 gap-sm mb-md">
<div className="bg-surface-container-low rounded-lg p-sm border border-outline-variant/30">
<span className="text-label-caps font-label-caps text-on-surface-variant block mb-xs">CURRENT PRICE</span>
<div className="text-headline-lg font-headline-lg text-on-surface font-data-mono">₦2,200 <span className="text-body-sm text-on-surface-variant font-body-sm">/ kg</span></div>
</div>
<div className="bg-surface-container-low rounded-lg p-sm border border-outline-variant/30">
<span className="text-label-caps font-label-caps text-on-surface-variant block mb-xs">7-DAY AVG</span>
<div className="text-headline-lg-mobile font-headline-lg-mobile text-on-surface font-data-mono">₦2,030 <span className="text-body-sm text-on-surface-variant font-body-sm">/ kg</span></div>
</div>
</div>
{/* Mini Chart representation */}
<div className="h-16 w-full flex items-end gap-1 px-xs">
<div className="w-full bg-surface-container-high rounded-t-sm h-[40%] hover:bg-primary-container/40 transition-colors"></div>
<div className="w-full bg-surface-container-high rounded-t-sm h-[45%] hover:bg-primary-container/40 transition-colors"></div>
<div className="w-full bg-surface-container-high rounded-t-sm h-[35%] hover:bg-primary-container/40 transition-colors"></div>
<div className="w-full bg-surface-container-high rounded-t-sm h-[50%] hover:bg-primary-container/40 transition-colors"></div>
<div className="w-full bg-surface-container-high rounded-t-sm h-[65%] hover:bg-primary-container/40 transition-colors"></div>
<div className="w-full bg-surface-container-high rounded-t-sm h-[80%] hover:bg-primary-container/40 transition-colors"></div>
<div className="w-full bg-primary-container/80 rounded-t-sm h-[100%] border-t-2 border-primary-container"></div>
</div>
</div>
{/* Floating contextual element */}
<div className="absolute -right-md -bottom-md bg-surface-container-lowest rounded-lg border border-outline-variant p-sm shadow-md flex items-center gap-sm animate-bounce" style={{animationDuration: "3s"}}>
<CheckCircle2 className="w-5 h-5 text-tertiary-container" />
<div className="flex flex-col">
<span className="text-label-caps font-label-caps text-on-surface">VERIFIED SOURCE</span>
<span className="text-body-sm font-body-sm text-on-surface-variant">Market Agent #442</span>
</div>
</div>
</div>
</div>
</section>
{/* Live Price Table Section */}
<section className="py-xl px-margin-desktop md:px-margin-desktop max-w-[1440px] mx-auto bg-surface-container-lowest rounded-3xl border border-outline-variant/50 my-xl shadow-sm">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-lg gap-sm">
<div>
<h2 className="text-headline-lg font-headline-lg text-on-surface">Live Market Prices</h2>
<p className="text-body-lg font-body-lg text-on-surface-variant">Real-time observations from major markets across the country.</p>
</div>
<Link href="/explorer" className="text-primary font-medium hover:text-primary-container transition-colors flex items-center gap-xs">
                    View all prices <ArrowRight className="w-5 h-5" />
</Link>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="bg-surface-container-low text-label-caps font-label-caps text-on-surface-variant border-y border-outline-variant/50">
<th className="py-sm px-sm font-semibold">FOOD ITEM</th>
<th className="py-sm px-sm font-semibold">CATEGORY</th>
<th className="py-sm px-sm font-semibold">LOCATION</th>
<th className="py-sm px-sm font-semibold text-right">PRICE (NGN)</th>
<th className="py-sm px-sm font-semibold text-right">CHANGE</th>
<th className="py-sm px-sm font-semibold text-right">LAST UPDATED</th>
</tr>
</thead>
<tbody className="text-body-sm font-body-sm text-on-surface divide-y divide-outline-variant/30">
<tr className="hover:bg-surface-container-lowest transition-colors group">
<td className="py-md px-sm font-medium flex items-center gap-sm">
<span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-primary-container/10 transition-colors">
<Wheat className="w-4 h-4 text-on-surface-variant group-hover:text-primary" />
</span>
                                Rice (Local)
                            </td>
<td className="py-md px-sm"><span className="bg-surface-container-highest px-xs py-base rounded-md text-label-caps font-label-caps">Grains</span></td>
<td className="py-md px-sm">Abuja, Wuse</td>
<td className="py-md px-sm text-right font-data-mono font-medium">₦2,200<span className="text-on-surface-variant font-normal text-xs ml-1">/kg</span></td>
<td className="py-md px-sm text-right text-error font-data-mono bg-error-container/10">+8.4%</td>
<td className="py-md px-sm text-right text-on-surface-variant">2 mins ago</td>
</tr>
<tr className="hover:bg-surface-container-lowest transition-colors group">
<td className="py-md px-sm font-medium flex items-center gap-sm">
<span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-primary-container/10 transition-colors">
<Sprout className="w-4 h-4 text-on-surface-variant group-hover:text-primary" />
</span>
                                Beans (Oloyin)
                            </td>
<td className="py-md px-sm"><span className="bg-surface-container-highest px-xs py-base rounded-md text-label-caps font-label-caps">Grains</span></td>
<td className="py-md px-sm">Lagos, Mile 12</td>
<td className="py-md px-sm text-right font-data-mono font-medium">₦2,000<span className="text-on-surface-variant font-normal text-xs ml-1">/kg</span></td>
<td className="py-md px-sm text-right text-error font-data-mono bg-error-container/10">+3.2%</td>
<td className="py-md px-sm text-right text-on-surface-variant">15 mins ago</td>
</tr>
<tr className="hover:bg-surface-container-lowest transition-colors group">
<td className="py-md px-sm font-medium flex items-center gap-sm">
<span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-primary-container/10 transition-colors">
<Apple className="w-4 h-4 text-on-surface-variant group-hover:text-primary" />
</span>
                                Tomato
                            </td>
<td className="py-md px-sm"><span className="bg-surface-container-highest px-xs py-base rounded-md text-label-caps font-label-caps">Vegetables</span></td>
<td className="py-md px-sm">Kano, Dawanau</td>
<td className="py-md px-sm text-right font-data-mono font-medium">₦120<span className="text-on-surface-variant font-normal text-xs ml-1">/piece</span></td>
<td className="py-md px-sm text-right text-error font-data-mono bg-error-container/10">+12.5%</td>
<td className="py-md px-sm text-right text-on-surface-variant">1 hr ago</td>
</tr>
<tr className="hover:bg-surface-container-lowest transition-colors group">
<td className="py-md px-sm font-medium flex items-center gap-sm">
<span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-primary-container/10 transition-colors">
<Egg className="w-4 h-4 text-on-surface-variant group-hover:text-primary" />
</span>
                                Eggs (Crate)
                            </td>
<td className="py-md px-sm"><span className="bg-surface-container-highest px-xs py-base rounded-md text-label-caps font-label-caps">Protein</span></td>
<td className="py-md px-sm">Ibadan, Bodija</td>
<td className="py-md px-sm text-right font-data-mono font-medium">₦4,500<span className="text-on-surface-variant font-normal text-xs ml-1">/crate</span></td>
<td className="py-md px-sm text-right text-primary-container font-data-mono bg-primary-container/10">-1.2%</td>
<td className="py-md px-sm text-right text-on-surface-variant">2 hrs ago</td>
</tr>
</tbody>
</table>
</div>
</section>
{/* Developer Section (Bento Grid Style) */}
<section className="py-xl px-margin-desktop md:px-margin-desktop max-w-[1440px] mx-auto">
<div className="mb-lg text-center max-w-2xl mx-auto">
<h2 className="text-headline-lg font-headline-lg text-on-surface mb-xs">Build with Nigerian food-price data.</h2>
<p className="text-body-lg font-body-lg text-on-surface-variant">Integrate reliable pricing intelligence directly into your applications with our robust REST API.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-md">
{/* API Snippet Card */}
<div className="lg:col-span-2 bg-on-surface rounded-xl p-md border border-outline-variant/20 shadow-lg relative overflow-hidden group">
<div className="flex justify-between items-center mb-sm border-b border-surface-variant/20 pb-sm">
<div className="flex items-center gap-sm">
<span className="bg-primary-container/20 text-primary-fixed-dim rounded px-xs py-base text-label-caps font-label-caps font-data-mono">GET</span>
<span className="text-surface-variant font-data-mono text-body-sm">/api/v1/prices?food=rice&amp;location=abuja</span>
</div>
<button className="text-surface-variant hover:text-primary-fixed transition-colors" title="Copy code">
<Copy className="w-4.5 h-4.5" />
</button>
</div>
<pre className="text-surface-variant font-data-mono text-sm overflow-x-auto p-sm bg-[#1e1e1e] rounded-lg"><code>{"{\n  \"status\": \"success\",\n  \"data\": {\n    \"item\": \"Rice (Local)\",\n    \"location\": {\n      \"city\": \"Abuja\",\n      \"market\": \"Wuse Market\"\n    },\n    \"current_price\": {\n      \"amount\": 2200,\n      \"currency\": \"NGN\",\n      \"unit\": \"kg\"\n    },\n    \"historical_trends\": {\n      \"7_day_change_pct\": 8.4,\n      \"30_day_avg\": 2050\n    },\n    \"last_updated\": \"2024-05-20T14:32:00Z\"\n  }\n}"}</code></pre>
</div>
{/* Feature/CTA Cards */}
<div className="flex flex-col gap-md">
<div className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant hover:border-primary/50 transition-colors flex-1 flex flex-col justify-center">
<Zap className="w-8 h-8 text-primary-container mb-sm" />
<h3 className="text-title-md font-headline-lg text-on-surface mb-xs">Fast &amp; Reliable</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant mb-md">99.9% uptime with sub-100ms response times for critical applications.</p>
<Link className="text-primary font-medium flex items-center gap-xs hover:underline mt-auto" href="/docs">
                            Explore API Documentation <ArrowRight className="w-4.5 h-4.5" />
</Link>
</div>
<div className="bg-primary-container text-on-primary rounded-xl p-md shadow-md flex-1 flex flex-col justify-center relative overflow-hidden">
<div className="absolute top-0 right-0 p-sm opacity-20">
<Key className="w-16 h-16" />
</div>
<h3 className="text-title-md font-headline-lg mb-xs relative z-10">Start Building Today</h3>
<p className="text-body-sm font-body-sm opacity-90 mb-md relative z-10">Get a free developer key and make up to 1,000 requests per month.</p>
<Link href="/api-keys" className="bg-on-primary text-primary-container rounded-lg px-md py-sm text-body-sm font-medium hover:bg-surface-container-lowest transition-colors w-max relative z-10 block">
                            Get API Key
</Link>
</div>
</div>
</div>
</section>
</main>
      <Footer />
    </div>
  );
}
