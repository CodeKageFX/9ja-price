"use client";

import React from "react";
import {
  MapPin,
  ArrowLeftRight,
  ArrowDown,
  ArrowUp,
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  ArrowRight,
} from "lucide-react";

export default function CommodityDetailPage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-lg">
{/* TopNavBar */}
<nav className="bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline sticky top-0 z-50">
<div className="flex justify-between items-center w-full px-margin-desktop max-w-[1440px] mx-auto h-16">
<div className="flex items-center gap-md">
<span className="text-title-md font-headline-lg text-primary dark:text-primary-fixed tracking-tight">PriceNaija</span>
<div className="hidden md:flex gap-md items-center ml-lg">
<a className="text-on-surface-variant dark:text-surface-variant text-label-caps font-label-caps hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">Explorer</a>
<a className="text-on-surface-variant dark:text-surface-variant text-label-caps font-label-caps hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">Developers</a>
<a className="text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1 text-label-caps font-label-caps opacity-80 scale-95 transition-all" href="#">Markets</a>
<a className="text-on-surface-variant dark:text-surface-variant text-label-caps font-label-caps hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">About</a>
</div>
</div>
<div className="flex items-center gap-sm">
<button className="bg-surface-container-low text-on-surface-variant px-sm py-xs rounded-lg text-label-caps font-label-caps border border-outline-variant hover:bg-surface-container-high transition-colors">Sign In</button>
<button className="bg-primary-container text-on-primary-container px-sm py-xs rounded-lg text-label-caps font-label-caps hover:opacity-90 transition-opacity">Get API Key</button>
</div>
</div>
</nav>
{/* Main Content Canvas */}
<main className="flex-grow w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-lg grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* Header Section */}
<header className="col-span-1 md:col-span-12 flex flex-col md:flex-row justify-between items-start md:items-end mb-lg">
<div>
<div className="flex items-center gap-xs mb-xs">
<span className="bg-primary-container/10 text-primary px-xs py-base rounded-full text-label-caps font-label-caps uppercase">Grains</span>
<span className="text-on-surface-variant text-body-sm font-body-sm flex items-center gap-base">
<MapPin className="w-4 h-4" /> Abuja
                    </span>
</div>
<h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg md:font-headline-lg text-on-background mb-xs">Rice</h1>
<div className="flex items-center gap-sm text-on-surface-variant text-body-sm font-body-sm">
<span>Current Avg: <strong className="text-title-md font-title-md text-on-surface">₦2,200</strong> <span className="text-data-mono font-data-mono">/ kg</span></span>
<span className="w-1 h-1 bg-outline-variant rounded-full"></span>
<span>Updated: Aug 18, 2026</span>
</div>
</div>
<button className="mt-sm md:mt-0 bg-primary-container text-on-primary-container px-md py-xs rounded-lg text-body-sm font-body-sm font-medium flex items-center gap-xs hover:opacity-90 transition-opacity shadow-sm">
<ArrowLeftRight className="w-4 h-4" />
                Compare locations
            </button>
</header>
{/* Main Data Area */}
<div className="col-span-1 md:col-span-8 flex flex-col gap-lg">
{/* Price History Chart */}
<section className="data-card">
<div className="flex justify-between items-center mb-md">
<h2 className="data-header mb-0">Price History</h2>
<div className="flex bg-surface-container-low rounded-lg p-base gap-base">
<button className="px-xs py-base text-label-caps font-label-caps rounded text-on-surface-variant hover:bg-surface-container-high">7D</button>
<button className="px-xs py-base text-label-caps font-label-caps rounded bg-surface-container-lowest text-on-surface shadow-sm">30D</button>
<button className="px-xs py-base text-label-caps font-label-caps rounded text-on-surface-variant hover:bg-surface-container-high">3M</button>
<button className="px-xs py-base text-label-caps font-label-caps rounded text-on-surface-variant hover:bg-surface-container-high">1Y</button>
<button className="px-xs py-base text-label-caps font-label-caps rounded text-on-surface-variant hover:bg-surface-container-high">All</button>
</div>
</div>
<div className="w-full h-64 bg-surface-container-low rounded-lg relative overflow-hidden flex items-end">
{/* Placeholder for Chart */}
<div className="absolute inset-0 p-sm flex items-end">
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
<path d="M0 80 Q 20 70, 40 85 T 80 50 T 100 30 L 100 100 L 0 100 Z" fill="rgba(0, 135, 81, 0.1)"></path>
<path d="M0 80 Q 20 70, 40 85 T 80 50 T 100 30" fill="none" stroke="#008751" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="absolute inset-x-0 bottom-0 h-px bg-outline-variant"></div>
<div className="absolute inset-y-0 left-0 w-px bg-outline-variant ml-sm"></div>
</div>
</section>
{/* Location Comparison */}
<section className="data-card">
<h2 className="data-header">Regional Comparison</h2>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-surface-container-highest">
<th className="py-xs px-sm text-label-caps font-label-caps text-on-surface-variant">Location</th>
<th className="py-xs px-sm text-label-caps font-label-caps text-on-surface-variant text-right">Avg Price (/kg)</th>
<th className="py-xs px-sm text-label-caps font-label-caps text-on-surface-variant text-right">Status</th>
</tr>
</thead>
<tbody className="text-body-sm font-body-sm">
<tr className="border-b border-surface-container-highest">
<td className="py-sm px-sm font-medium">Kano</td>
<td className="py-sm px-sm text-right font-data-mono text-data-mono">₦1,850</td>
<td className="py-sm px-sm text-right"><span className="inline-flex items-center gap-xs text-primary-container bg-primary-container/10 px-xs py-base rounded-full text-label-caps font-label-caps"><ArrowDown className="w-3.5 h-3.5" /> Cheapest</span></td>
</tr>
<tr className="border-b border-surface-container-highest bg-surface-container-low/30">
<td className="py-sm px-sm font-medium">Abuja (Current)</td>
<td className="py-sm px-sm text-right font-data-mono text-data-mono">₦2,200</td>
<td className="py-sm px-sm text-right text-on-surface-variant">-</td>
</tr>
<tr className="border-b border-surface-container-highest">
<td className="py-sm px-sm font-medium">Ibadan</td>
<td className="py-sm px-sm text-right font-data-mono text-data-mono">₦2,000</td>
<td className="py-sm px-sm text-right text-on-surface-variant">-</td>
</tr>
<tr>
<td className="py-sm px-sm font-medium">Lagos</td>
<td className="py-sm px-sm text-right font-data-mono text-data-mono">₦2,350</td>
<td className="py-sm px-sm text-right"><span className="inline-flex items-center gap-xs text-error bg-error/10 px-xs py-base rounded-full text-label-caps font-label-caps"><ArrowUp className="w-3.5 h-3.5" /> Expensive</span></td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
{/* Sidebar Area */}
<div className="col-span-1 md:col-span-4 flex flex-col gap-lg">
{/* Source Transparency */}
<section className="data-card border-primary/20 bg-primary/5">
<div className="flex items-start gap-sm">
<CheckCircle2 className="w-6 h-6 text-primary" />
<div>
<h3 className="text-body-lg font-body-lg font-semibold text-on-surface mb-base">Data Verified</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant mb-xs">Source: Community price submission</p>
<p className="text-label-caps font-label-caps text-primary uppercase">High Confidence</p>
</div>
</div>
</section>
{/* Market Comparison */}
<section className="data-card">
<h2 className="data-header">Abuja Markets</h2>
<div className="flex flex-col gap-sm">
<div className="flex justify-between items-center p-sm rounded-lg bg-surface-container-lowest border border-surface-container-highest hover:shadow-sm transition-shadow">
<span className="text-body-sm font-body-sm text-on-surface">Wuse Market</span>
<span className="text-data-mono font-data-mono font-medium">₦2,200</span>
</div>
<div className="flex justify-between items-center p-sm rounded-lg bg-surface-container-lowest border border-surface-container-highest hover:shadow-sm transition-shadow">
<span className="text-body-sm font-body-sm text-on-surface">Garki Market</span>
<span className="text-data-mono font-data-mono font-medium text-error flex items-center gap-base"><TrendingUp className="w-3.5 h-3.5" /> ₦2,300</span>
</div>
<div className="flex justify-between items-center p-sm rounded-lg bg-surface-container-lowest border border-surface-container-highest hover:shadow-sm transition-shadow">
<span className="text-body-sm font-body-sm text-on-surface">Karmo Market</span>
<span className="text-data-mono font-data-mono font-medium text-primary flex items-center gap-base"><TrendingDown className="w-3.5 h-3.5" /> ₦2,050</span>
</div>
</div>
</section>
{/* Related Items */}
<section className="data-card">
<h2 className="data-header">Related Commodities</h2>
<div className="flex flex-wrap gap-sm">
<a className="px-sm py-xs bg-surface-container-low border border-outline-variant rounded-full text-body-sm font-body-sm hover:border-primary transition-colors flex items-center gap-xs" href="#">
                        Beans
                        <ArrowRight className="w-4 h-4 text-on-surface-variant" />
</a>
<a className="px-sm py-xs bg-surface-container-low border border-outline-variant rounded-full text-body-sm font-body-sm hover:border-primary transition-colors flex items-center gap-xs" href="#">
                        Maize
                        <ArrowRight className="w-4 h-4 text-on-surface-variant" />
</a>
<a className="px-sm py-xs bg-surface-container-low border border-outline-variant rounded-full text-body-sm font-body-sm hover:border-primary transition-colors flex items-center gap-xs" href="#">
                        Yam
                        <ArrowRight className="w-4 h-4 text-on-surface-variant" />
</a>
</div>
</section>
</div>
</main>
{/* Footer */}
<footer className="bg-surface-container-highest dark:bg-inverse-surface border-t border-outline-variant w-full mt-auto">
<div className="w-full py-xl px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-[1440px] mx-auto gap-md md:gap-0">
<span className="text-title-md font-headline-lg text-primary tracking-tight">PriceNaija</span>
<div className="flex flex-wrap justify-center gap-md">
<a className="text-on-surface-variant dark:text-surface-variant text-label-caps font-label-caps hover:text-primary dark:hover:text-primary-fixed underline transition-colors" href="#">API Docs</a>
<a className="text-on-surface-variant dark:text-surface-variant text-label-caps font-label-caps hover:text-primary dark:hover:text-primary-fixed underline transition-colors" href="#">Terms of Service</a>
<a className="text-on-surface-variant dark:text-surface-variant text-label-caps font-label-caps hover:text-primary dark:hover:text-primary-fixed underline transition-colors" href="#">Privacy Policy</a>
<a className="text-on-surface-variant dark:text-surface-variant text-label-caps font-label-caps hover:text-primary dark:hover:text-primary-fixed underline transition-colors" href="#">Contact Support</a>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant">© 2024 PriceNaija. Data-driven food security for Nigeria.</p>
</div>
</footer>
    </div>
  );
}
