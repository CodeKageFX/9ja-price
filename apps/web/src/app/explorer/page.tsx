"use client";

import React from "react";
import {
  TrendingUp,
  Search,
  ChevronDown,
  Calendar,
  Sprout,
  Wheat,
  Egg,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function PriceExplorerPage() {
  return (
    <div className="bg-background text-on-background antialiased font-body-lg text-body-lg min-h-screen flex flex-col">
{/* TopNavBar */}
<nav className="bg-surface border-b border-outline-variant w-full sticky top-0 z-50">
<div className="flex justify-between items-center w-full px-margin-desktop max-w-[1440px] mx-auto h-16">
<div className="flex items-center gap-xl">
<a className="text-title-md font-headline-lg text-primary flex items-center gap-2" href="#">
<TrendingUp className="w-5 h-5 text-primary" />
                    PriceNaija
                </a>
<div className="hidden md:flex gap-8">
<a className="text-primary border-b-2 border-primary pb-1 font-bold text-body-lg font-body-lg" href="#">Explorer</a>
<a className="text-on-surface-variant hover:text-primary transition-colors text-body-lg font-body-lg" href="#">Developers</a>
<a className="text-on-surface-variant hover:text-primary transition-colors text-body-lg font-body-lg" href="#">Markets</a>
<a className="text-on-surface-variant hover:text-primary transition-colors text-body-lg font-body-lg" href="#">About</a>
</div>
</div>
<div className="flex items-center gap-md">
<a className="text-on-surface-variant hover:text-primary transition-colors text-body-sm font-body-sm" href="#">Sign In</a>
<button className="bg-primary-container text-on-primary-container px-sm py-xs rounded-lg font-body-sm text-body-sm hover:opacity-90 transition-opacity">
                    Get API Key
                </button>
</div>
</div>
</nav>
<main className="flex-grow w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-lg">
{/* Header Section */}
<header className="mb-lg">
<h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface mb-xs">Nigerian Food Prices</h1>
<p className="text-body-lg font-body-lg text-on-surface-variant">Explore food prices by item, location and market.</p>
</header>
{/* Search & Filters Container */}
<section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md mb-lg shadow-[0px_4px_12px_rgba(0,0,0,0.05)]">
{/* Large Search Field */}
<div className="relative mb-md">
<Search className="absolute left-sm top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
<input className="w-full h-12 pl-xl pr-sm bg-surface rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-shadow text-body-lg font-body-lg text-on-surface placeholder:text-on-surface-variant" placeholder="Search food, ingredient or product..." type="text"/>
</div>
{/* Filters Row */}
<div className="flex flex-wrap gap-sm items-center">
{/* Category Filter */}
<div className="relative inline-block text-left">
<button className="inline-flex justify-between items-center w-full rounded-lg border border-outline-variant bg-surface px-sm py-xs text-body-sm font-body-sm text-on-surface hover:bg-surface-container-low focus:outline-none focus:ring-1 focus:ring-primary" type="button">
<span>Category</span>
<ChevronDown className="ml-2 w-4 h-4" />
</button>
</div>
{/* Location Filter */}
<div className="relative inline-block text-left">
<button className="inline-flex justify-between items-center w-full rounded-lg border border-outline-variant bg-surface px-sm py-xs text-body-sm font-body-sm text-on-surface hover:bg-surface-container-low focus:outline-none focus:ring-1 focus:ring-primary" type="button">
<span>Location</span>
<ChevronDown className="ml-2 w-4 h-4" />
</button>
</div>
{/* Market Filter */}
<div className="relative inline-block text-left">
<button className="inline-flex justify-between items-center w-full rounded-lg border border-outline-variant bg-surface px-sm py-xs text-body-sm font-body-sm text-on-surface hover:bg-surface-container-low focus:outline-none focus:ring-1 focus:ring-primary" type="button">
<span>Market</span>
<ChevronDown className="ml-2 w-4 h-4" />
</button>
</div>
{/* Price Unit Filter */}
<div className="relative inline-block text-left">
<button className="inline-flex justify-between items-center w-full rounded-lg border border-outline-variant bg-surface px-sm py-xs text-body-sm font-body-sm text-on-surface hover:bg-surface-container-low focus:outline-none focus:ring-1 focus:ring-primary" type="button">
<span>Price Unit</span>
<ChevronDown className="ml-2 w-4 h-4" />
</button>
</div>
{/* Date Filter */}
<div className="relative inline-block text-left">
<button className="inline-flex justify-between items-center w-full rounded-lg border border-outline-variant bg-surface px-sm py-xs text-body-sm font-body-sm text-on-surface hover:bg-surface-container-low focus:outline-none focus:ring-1 focus:ring-primary" type="button">
<Calendar className="mr-2 w-4 h-4" />
<span>Date</span>
<ChevronDown className="ml-2 w-4 h-4" />
</button>
</div>
</div>
</section>
{/* Price Table Section */}
<section className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-[0px_4px_12px_rgba(0,0,0,0.05)]">
<div className="overflow-x-auto w-full">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead className="bg-surface-container-low text-label-caps font-label-caps text-on-surface-variant uppercase tracking-wider border-b border-outline-variant">
<tr>
<th className="px-md py-sm font-semibold">Food</th>
<th className="px-md py-sm font-semibold">Category</th>
<th className="px-md py-sm font-semibold">Location</th>
<th className="px-md py-sm font-semibold">Market</th>
<th className="px-md py-sm font-semibold text-right">Price</th>
<th className="px-md py-sm font-semibold text-right">Change</th>
<th className="px-md py-sm font-semibold text-right">Updated</th>
</tr>
</thead>
<tbody className="text-body-sm font-body-sm text-on-surface divide-y divide-surface-container-high">
{/* Row 1 */}
<tr className="hover:bg-surface-container-low cursor-pointer transition-colors group">
<td className="px-md py-md font-medium text-primary group-hover:text-tertiary-container flex items-center gap-xs">
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<Sprout className="w-4 h-4" />
</div>
                                Rice
                            </td>
<td className="px-md py-md">
<span className="bg-surface-container-high px-2 py-1 rounded text-xs text-on-surface-variant">Grains</span>
</td>
<td className="px-md py-md text-on-surface-variant">Abuja</td>
<td className="px-md py-md text-on-surface-variant">Wuse Market</td>
<td className="px-md py-md text-right whitespace-nowrap">
<span className="font-data-mono text-data-mono font-medium text-on-surface">₦2,200</span>
<span className="text-xs text-on-surface-variant ml-1">/kg</span>
</td>
<td className="px-md py-md text-right font-data-mono text-data-mono text-[#22C55E]">
                                +8.4%
                            </td>
<td className="px-md py-md text-right text-on-surface-variant text-xs">Aug 18, 2026</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-surface-container-low cursor-pointer transition-colors group">
<td className="px-md py-md font-medium text-primary group-hover:text-tertiary-container flex items-center gap-xs">
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<Wheat className="w-4 h-4" />
</div>
                                Yam
                            </td>
<td className="px-md py-md">
<span className="bg-surface-container-high px-2 py-1 rounded text-xs text-on-surface-variant">Tubers</span>
</td>
<td className="px-md py-md text-on-surface-variant">Lagos</td>
<td className="px-md py-md text-on-surface-variant">Mile 12 Market</td>
<td className="px-md py-md text-right whitespace-nowrap">
<span className="font-data-mono text-data-mono font-medium text-on-surface">₦1,500</span>
<span className="text-xs text-on-surface-variant ml-1">/tuber</span>
</td>
<td className="px-md py-md text-right font-data-mono text-data-mono text-[#EF4444]">
                                -2.5%
                            </td>
<td className="px-md py-md text-right text-on-surface-variant text-xs">Aug 18, 2026</td>
</tr>
{/* Row 3 */}
<tr className="hover:bg-surface-container-low cursor-pointer transition-colors group">
<td className="px-md py-md font-medium text-primary group-hover:text-tertiary-container flex items-center gap-xs">
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<Egg className="w-4 h-4" />
</div>
                                Egg
                            </td>
<td className="px-md py-md">
<span className="bg-surface-container-high px-2 py-1 rounded text-xs text-on-surface-variant">Protein</span>
</td>
<td className="px-md py-md text-on-surface-variant">Abuja</td>
<td className="px-md py-md text-on-surface-variant">Garki Market</td>
<td className="px-md py-md text-right whitespace-nowrap">
<span className="font-data-mono text-data-mono font-medium text-on-surface">₦3,200</span>
<span className="text-xs text-on-surface-variant ml-1">/crate</span>
</td>
<td className="px-md py-md text-right font-data-mono text-data-mono text-[#22C55E]">
                                +1.2%
                            </td>
<td className="px-md py-md text-right text-on-surface-variant text-xs">Aug 17, 2026</td>
</tr>
</tbody>
</table>
</div>
{/* Table Footer / Pagination */}
<div className="bg-surface-container-lowest border-t border-outline-variant p-md flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
<div>Showing 1 to 3 of 150 entries</div>
<div className="flex gap-xs">
<button className="p-xs border border-outline-variant rounded hover:bg-surface-container-low disabled:opacity-50" disabled>
<ChevronLeft className="w-4 h-4" />
</button>
<button className="p-xs border border-outline-variant rounded hover:bg-surface-container-low bg-surface-container-low font-medium">1</button>
<button className="p-xs border border-outline-variant rounded hover:bg-surface-container-low">2</button>
<button className="p-xs border border-outline-variant rounded hover:bg-surface-container-low">3</button>
<span className="p-xs">...</span>
<button className="p-xs border border-outline-variant rounded hover:bg-surface-container-low">
<ChevronRight className="w-4 h-4" />
</button>
</div>
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-surface-container-highest border-t border-outline-variant mt-auto">
<div className="w-full py-xl px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-[1440px] mx-auto gap-md">
<div className="flex flex-col items-center md:items-start">
<span className="text-title-md font-headline-lg text-primary mb-xs">PriceNaija</span>
<span className="text-body-sm font-body-sm text-on-surface-variant text-center md:text-left">© 2024 PriceNaija. Data-driven food security for Nigeria.</span>
</div>
<div className="flex flex-wrap gap-md justify-center text-label-caps font-label-caps">
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#">API Docs</a>
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Contact Support</a>
</div>
</div>
</footer>
    </div>
  );
}
