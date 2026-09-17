"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  Filter,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { getMarkets, type MarketItem } from "@/lib/markets";
import { useAsyncData } from "@/hooks/useAsyncData";

const PAGE_SIZE = 9;

// Unique value/label pairs for a select, built from the loaded markets.
function optionsFor(markets: MarketItem[], value: (m: MarketItem) => string, label: (m: MarketItem) => string) {
  const map = new Map<string, string>();
  for (const m of markets) map.set(value(m), label(m));
  return [...map].map(([v, l]) => ({ value: v, label: l })).sort((a, b) => a.label.localeCompare(b.label));
}

// Page numbers to show: all when few, otherwise first, last and neighbours of the current page.
function visiblePages(page: number, pageCount: number): (number | "gap")[] {
  if (pageCount <= 5) return Array.from({ length: pageCount }, (_, i) => i + 1);
  const pages = new Set([1, pageCount, page - 1, page, page + 1]);
  const sorted = [...pages].filter((n) => n >= 1 && n <= pageCount).sort((a, b) => a - b);
  return sorted.flatMap((n, i) => (i > 0 && n - sorted[i - 1] > 1 ? ["gap" as const, n] : [n]));
}

function LoadingCards() {
  return (
    <>
      <p className="sr-only">Loading markets…</p>
      {Array.from({ length: 3 }, (_, i) => (
        <div key={i} aria-hidden="true" className="bg-white border border-[#e2e8f0] rounded-xl overflow-hidden flex flex-col">
          <div className="h-48 bg-[#eceef0] animate-pulse" />
          <div className="p-6 flex flex-col gap-3">
            <div className="h-5 w-2/3 rounded bg-[#eceef0] animate-pulse" />
            <div className="h-4 w-1/2 rounded bg-[#eceef0] animate-pulse" />
            <div className="h-4 w-full rounded bg-[#eceef0] animate-pulse mt-4" />
          </div>
        </div>
      ))}
    </>
  );
}

export function MarketsContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const { status, data, retry } = useAsyncData(getMarkets);
  const markets = useMemo(() => data ?? [], [data]);
  const stateOptions = useMemo(() => optionsFor(markets, (m) => m.state, (m) => m.stateName), [markets]);
  const cityOptions = useMemo(
    () => optionsFor(markets.filter((m) => !selectedState || m.state === selectedState), (m) => m.city, (m) => m.cityName),
    [markets, selectedState],
  );

  const filteredMarkets = markets.filter((market) => {
    const matchesSearch =
      market.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      market.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesState = selectedState ? market.state === selectedState : true;
    const matchesCity = selectedCity ? market.city === selectedCity : true;
    return matchesSearch && matchesState && matchesCity;
  });

  // Page resets to 1 whenever the filters change.
  const filterKey = [searchQuery, selectedState, selectedCity].join("|");
  const [pageState, setPageState] = useState({ key: filterKey, page: 1 });
  const pageCount = Math.max(1, Math.ceil(filteredMarkets.length / PAGE_SIZE));
  const page = pageState.key === filterKey ? Math.min(pageState.page, pageCount) : 1;
  const setPage = (next: number) => setPageState({ key: filterKey, page: next });
  const pageMarkets = filteredMarkets.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedState("");
    setSelectedCity("");
  };

  return (
    <>
      {/* Search & Filter Controls */}
      <section className="bg-white/85 backdrop-blur-md border border-[#e2e8f0]/80 rounded-xl p-6 mb-10 flex flex-col md:flex-row gap-4 items-end shadow-sm">
        <div className="w-full md:w-1/3">
          <label className="block text-[12px] font-semibold text-[#565e74] mb-2 uppercase tracking-wider">
            Search Market
          </label>
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-[#3e4a41]/50 pointer-events-none" />
            <input
              className="w-full pl-10 pr-4 py-3 bg-white border border-[#e2e8f0] rounded-lg focus:outline-none focus:border-[#006b3f] focus:ring-1 focus:ring-[#006b3f] text-[16px] text-[#191c1e] transition-all shadow-sm"
              placeholder="e.g. Wuse, Mile 12..."
              aria-label="Search market"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full md:w-1/4">
          <label className="block text-[12px] font-semibold text-[#565e74] mb-2 uppercase tracking-wider">
            State
          </label>
          <div className="relative">
            <select
              className="w-full appearance-none pl-4 pr-10 py-3 bg-white border border-[#e2e8f0] rounded-lg focus:outline-none focus:border-[#006b3f] focus:ring-1 focus:ring-[#006b3f] text-[16px] text-[#191c1e] transition-all shadow-sm"
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                setSelectedCity("");
              }}
              aria-label="State"
            >
              <option value="">All States</option>
              {stateOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-[#3e4a41]/50 pointer-events-none" />
          </div>
        </div>

        <div className="w-full md:w-1/4">
          <label className="block text-[12px] font-semibold text-[#565e74] mb-2 uppercase tracking-wider">
            City
          </label>
          <div className="relative">
            <select
              className="w-full appearance-none pl-4 pr-10 py-3 bg-white border border-[#e2e8f0] rounded-lg focus:outline-none focus:border-[#006b3f] focus:ring-1 focus:ring-[#006b3f] text-[16px] text-[#191c1e] transition-all shadow-sm"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              aria-label="City"
            >
              <option value="">All Cities</option>
              {cityOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-[#3e4a41]/50 pointer-events-none" />
          </div>
        </div>

        <div className="w-full md:w-auto">
          <button
            type="button"
            className="w-full md:w-auto whitespace-nowrap bg-[#eceef0] hover:bg-[#e6e8ea] text-[#191c1e] text-[14px] font-medium px-6 py-3 rounded-lg transition-colors border border-[#e2e8f0] flex items-center justify-center gap-2 shadow-sm"
            onClick={resetFilters}
          >
            <Filter className="w-4 h-4" />
            Reset Filters
          </button>
        </div>
      </section>

      {/* Markets Grid */}
      {status === "error" && (
        <section className="bg-white border border-[#e2e8f0] rounded-xl p-10 text-center">
          <p role="alert" className="text-[16px] text-[#191c1e] mb-4">
            We couldn&apos;t load markets right now.
          </p>
          <button
            type="button"
            onClick={retry}
            className="bg-[#eceef0] hover:bg-[#e6e8ea] text-[#191c1e] text-[14px] font-medium px-6 py-3 rounded-lg transition-colors border border-[#e2e8f0] shadow-sm"
          >
            Try again
          </button>
        </section>
      )}

      {status === "success" && markets.length === 0 && (
        <section className="bg-white border border-[#e2e8f0] rounded-xl p-10 text-center text-[16px] text-[#3e4a41]">
          No markets are available yet. Check back soon.
        </section>
      )}

      {status === "success" && markets.length > 0 && filteredMarkets.length === 0 && (
        <section className="bg-white border border-[#e2e8f0] rounded-xl p-10 text-center">
          <p className="text-[16px] text-[#3e4a41] mb-4">No markets match your search or filters.</p>
          <button
            type="button"
            onClick={resetFilters}
            className="bg-[#eceef0] hover:bg-[#e6e8ea] text-[#191c1e] text-[14px] font-medium px-6 py-3 rounded-lg transition-colors border border-[#e2e8f0] shadow-sm"
          >
            Reset Filters
          </button>
        </section>
      )}

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-busy={status === "loading"}>
        {status === "loading" && <LoadingCards />}
        {status === "success" && pageMarkets.map((market) => (
          <article
            key={market.id}
            className="bg-white border border-[#e2e8f0] rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full group"
          >
            <div className="h-48 relative overflow-hidden bg-[#f2f4f6]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={market.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={market.image}
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-[#e2e8f0] flex items-center gap-1.5">
                <span
                  className={`w-2 h-2 rounded-full ${
                    market.status === "Active Data"
                      ? "bg-[#22c55e]"
                      : "bg-[#e0e3e5]"
                  }`}
                />
                <span className="text-[12px] font-semibold text-[#191c1e] uppercase">
                  {market.status}
                </span>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-start justify-between mb-2">
                <h2 className="text-[20px] font-bold text-[#191c1e] group-hover:text-[#006b3f] transition-colors">
                  {market.name}
                </h2>
              </div>
              <div className="flex items-center gap-1 text-[#3e4a41] text-[14px] mb-4">
                <MapPin className="w-4 h-4 text-[#3e4a41]" />
                <span>{market.location}</span>
              </div>
              <div className="mb-6 flex-grow">
                <h3 className="text-[12px] font-semibold text-[#565e74] uppercase tracking-wider mb-3">
                  Foods Tracked
                </h3>
                <div className="flex flex-wrap gap-2">
                  {market.foods.map((food) => (
                    <span
                      key={food}
                      className="px-2.5 py-1 bg-[#f2f4f6] border border-[#e2e8f0] rounded text-[#3e4a41] text-[13px]"
                    >
                      {food}
                    </span>
                  ))}
                  <span className="px-2.5 py-1 bg-[#f2f4f6] border border-[#e2e8f0] rounded text-[#3e4a41] text-[13px]">
                    +{market.moreFoodsCount} more
                  </span>
                </div>
              </div>
              <div className="pt-4 border-t border-[#e2e8f0] flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="text-[12px] font-semibold text-[#565e74] uppercase">
                    Last Update
                  </span>
                  <span className="font-mono text-[14px] text-[#191c1e]">
                    {market.lastUpdate}
                  </span>
                </div>
                <Link
                  className="text-[#006b3f] text-[14px] font-semibold hover:text-[#008751] flex items-center gap-1"
                  href={`/explorer?q=${encodeURIComponent(market.name)}`}
                >
                  View Market
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Pagination */}
      {status === "success" && filteredMarkets.length > 0 && (
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center gap-2" aria-label="Markets pages">
            <button
              type="button"
              onClick={() => setPage(page - 1)}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#e2e8f0] hover:bg-[#f2f4f6] transition-colors text-[#3e4a41] disabled:opacity-50"
              disabled={page <= 1}
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            {visiblePages(page, pageCount).map((n, i) =>
              n === "gap" ? (
                <span key={`gap-${i}`} className="text-[#3e4a41] mx-2">
                  ...
                </span>
              ) : (
                <button
                  key={n}
                  type="button"
                  onClick={() => setPage(n)}
                  aria-current={n === page ? "page" : undefined}
                  className={
                    n === page
                      ? "w-10 h-10 flex items-center justify-center rounded-lg bg-[#006b3f] text-white text-[14px] font-medium"
                      : "w-10 h-10 flex items-center justify-center rounded-lg border border-[#e2e8f0] hover:bg-[#f2f4f6] transition-colors text-[#191c1e] text-[14px] font-medium"
                  }
                >
                  {n}
                </button>
              ),
            )}
            <button
              type="button"
              onClick={() => setPage(page + 1)}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#e2e8f0] hover:bg-[#f2f4f6] transition-colors text-[#3e4a41] disabled:opacity-50"
              disabled={page >= pageCount}
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
