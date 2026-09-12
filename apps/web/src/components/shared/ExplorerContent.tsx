"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  Calendar,
  Wheat,
  Sprout,
  Egg,
  Apple,
  Beef,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import { getPriceRecords, type PriceRecord } from "@/lib/prices";
import { useAsyncData } from "@/hooks/useAsyncData";

const PAGE_SIZE = 10;

// Filter options come from the loaded data, so they follow whatever the API returns.
function optionsFor(allLabel: string, records: PriceRecord[], pick: (r: PriceRecord) => string) {
  return [allLabel, ...Array.from(new Set(records.map(pick))).sort()];
}

// Page numbers to show: all of them when there are few, otherwise first, last and the
// neighbours of the current page, with "…" gaps between.
function visiblePages(page: number, pageCount: number): (number | "gap")[] {
  if (pageCount <= 5) return Array.from({ length: pageCount }, (_, i) => i + 1);
  const pages = new Set([1, pageCount, page - 1, page, page + 1]);
  const sorted = [...pages].filter((n) => n >= 1 && n <= pageCount).sort((a, b) => a - b);
  return sorted.flatMap((n, i) => (i > 0 && n - sorted[i - 1] > 1 ? ["gap" as const, n] : [n]));
}

function LoadingRows() {
  return (
    <>
      <tr className="sr-only">
        <td colSpan={7}>Loading prices…</td>
      </tr>
      {Array.from({ length: 5 }, (_, row) => (
        <tr key={row} aria-hidden="true">
          {Array.from({ length: 7 }, (_, col) => (
            <td key={col} className="px-md py-md">
              <div
                className={`h-4 rounded bg-surface-container-high animate-pulse ${col === 0 ? "w-32" : "w-16"} ${col >= 4 ? "ml-auto" : ""}`}
              />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
const DATES = ["All Time", "Today", "Past 7 Days", "Past 30 Days"];

export function ExplorerContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedMarket, setSelectedMarket] = useState("All Markets");
  const [selectedUnit, setSelectedUnit] = useState("All Units");
  const [selectedDate, setSelectedDate] = useState("All Time");

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const { status, data, retry } = useAsyncData(getPriceRecords);
  const records = useMemo(() => data ?? [], [data]);
  const categoryOptions = useMemo(() => optionsFor("All Categories", records, (r) => r.category), [records]);
  const locationOptions = useMemo(() => optionsFor("All Locations", records, (r) => r.location), [records]);
  const marketOptions = useMemo(() => optionsFor("All Markets", records, (r) => r.market), [records]);
  const unitOptions = useMemo(() => optionsFor("All Units", records, (r) => r.unit), [records]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const filteredRecords = useMemo(() => {
    return records.filter((record) => {
      const matchesSearch =
        searchQuery === "" ||
        record.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        record.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        record.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        record.market.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All Categories" || record.category === selectedCategory;

      const matchesLocation =
        selectedLocation === "All Locations" || record.location === selectedLocation;

      const matchesMarket =
        selectedMarket === "All Markets" || record.market === selectedMarket;

      const matchesUnit =
        selectedUnit === "All Units" || record.unit === selectedUnit;

      return matchesSearch && matchesCategory && matchesLocation && matchesMarket && matchesUnit;
    });
  }, [records, searchQuery, selectedCategory, selectedLocation, selectedMarket, selectedUnit]);

  // Page resets to 1 whenever the filters change.
  const filterKey = [searchQuery, selectedCategory, selectedLocation, selectedMarket, selectedUnit].join("|");
  const [pageState, setPageState] = useState({ key: filterKey, page: 1 });
  const pageCount = Math.max(1, Math.ceil(filteredRecords.length / PAGE_SIZE));
  const page = pageState.key === filterKey ? Math.min(pageState.page, pageCount) : 1;
  const setPage = (next: number) => setPageState({ key: filterKey, page: next });
  const pageStart = (page - 1) * PAGE_SIZE;
  const pageRecords = filteredRecords.slice(pageStart, pageStart + PAGE_SIZE);

  const renderIcon = (icon: string) => {
    switch (icon) {
      case "rice":
        return <Wheat className="w-4 h-4" />;
      case "beans":
        return <Sprout className="w-4 h-4" />;
      case "egg":
        return <Egg className="w-4 h-4" />;
      case "tomato":
        return <Apple className="w-4 h-4" />;
      case "beef":
        return <Beef className="w-4 h-4" />;
      default:
        return <Sprout className="w-4 h-4" />;
    }
  };

  return (
    <>
      {/* Search & Filters Container */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md mb-lg shadow-[0px_4px_12px_rgba(0,0,0,0.05)]">
        {/* Large Search Field */}
        <div className="relative mb-md">
          <Search className="absolute left-sm top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
          <input
            className="w-full h-12 pl-xl pr-sm bg-surface rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-shadow text-body-lg font-body-lg text-on-surface placeholder:text-on-surface-variant"
            placeholder="Search food, ingredient or product..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap gap-sm items-center">
          {/* Category Filter */}
          <div className="relative inline-block text-left">
            <button
              onClick={() => toggleDropdown("category")}
              className="inline-flex justify-between items-center w-full rounded-lg border border-outline-variant bg-surface px-sm py-xs text-body-sm font-body-sm text-on-surface hover:bg-surface-container-low focus:outline-none focus:ring-1 focus:ring-primary"
              type="button"
            >
              <span>{selectedCategory === "All Categories" ? "Category" : selectedCategory}</span>
              <ChevronDown className="ml-2 w-4 h-4" />
            </button>
            {activeDropdown === "category" && (
              <>
                <div className="fixed inset-0 z-30" onClick={() => setActiveDropdown(null)} />
                <div className="absolute left-0 mt-1 w-48 rounded-lg border border-outline-variant bg-surface shadow-md z-40 py-xs max-h-60 overflow-auto">
                  {categoryOptions.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-sm py-xs text-body-sm hover:bg-surface-container-low flex items-center justify-between"
                    >
                      <span>{cat}</span>
                      {selectedCategory === cat && <Check className="w-4 h-4 text-primary" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Location Filter */}
          <div className="relative inline-block text-left">
            <button
              onClick={() => toggleDropdown("location")}
              className="inline-flex justify-between items-center w-full rounded-lg border border-outline-variant bg-surface px-sm py-xs text-body-sm font-body-sm text-on-surface hover:bg-surface-container-low focus:outline-none focus:ring-1 focus:ring-primary"
              type="button"
            >
              <span>{selectedLocation === "All Locations" ? "Location" : selectedLocation}</span>
              <ChevronDown className="ml-2 w-4 h-4" />
            </button>
            {activeDropdown === "location" && (
              <>
                <div className="fixed inset-0 z-30" onClick={() => setActiveDropdown(null)} />
                <div className="absolute left-0 mt-1 w-48 rounded-lg border border-outline-variant bg-surface shadow-md z-40 py-xs max-h-60 overflow-auto">
                  {locationOptions.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => {
                        setSelectedLocation(loc);
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-sm py-xs text-body-sm hover:bg-surface-container-low flex items-center justify-between"
                    >
                      <span>{loc}</span>
                      {selectedLocation === loc && <Check className="w-4 h-4 text-primary" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Market Filter */}
          <div className="relative inline-block text-left">
            <button
              onClick={() => toggleDropdown("market")}
              className="inline-flex justify-between items-center w-full rounded-lg border border-outline-variant bg-surface px-sm py-xs text-body-sm font-body-sm text-on-surface hover:bg-surface-container-low focus:outline-none focus:ring-1 focus:ring-primary"
              type="button"
            >
              <span>{selectedMarket === "All Markets" ? "Market" : selectedMarket}</span>
              <ChevronDown className="ml-2 w-4 h-4" />
            </button>
            {activeDropdown === "market" && (
              <>
                <div className="fixed inset-0 z-30" onClick={() => setActiveDropdown(null)} />
                <div className="absolute left-0 mt-1 w-48 rounded-lg border border-outline-variant bg-surface shadow-md z-40 py-xs max-h-60 overflow-auto">
                  {marketOptions.map((mkt) => (
                    <button
                      key={mkt}
                      onClick={() => {
                        setSelectedMarket(mkt);
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-sm py-xs text-body-sm hover:bg-surface-container-low flex items-center justify-between"
                    >
                      <span>{mkt}</span>
                      {selectedMarket === mkt && <Check className="w-4 h-4 text-primary" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Price Unit Filter */}
          <div className="relative inline-block text-left">
            <button
              onClick={() => toggleDropdown("unit")}
              className="inline-flex justify-between items-center w-full rounded-lg border border-outline-variant bg-surface px-sm py-xs text-body-sm font-body-sm text-on-surface hover:bg-surface-container-low focus:outline-none focus:ring-1 focus:ring-primary"
              type="button"
            >
              <span>{selectedUnit === "All Units" ? "Price Unit" : selectedUnit}</span>
              <ChevronDown className="ml-2 w-4 h-4" />
            </button>
            {activeDropdown === "unit" && (
              <>
                <div className="fixed inset-0 z-30" onClick={() => setActiveDropdown(null)} />
                <div className="absolute left-0 mt-1 w-48 rounded-lg border border-outline-variant bg-surface shadow-md z-40 py-xs max-h-60 overflow-auto">
                  {unitOptions.map((unit) => (
                    <button
                      key={unit}
                      onClick={() => {
                        setSelectedUnit(unit);
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-sm py-xs text-body-sm hover:bg-surface-container-low flex items-center justify-between"
                    >
                      <span>{unit}</span>
                      {selectedUnit === unit && <Check className="w-4 h-4 text-primary" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Date Filter */}
          <div className="relative inline-block text-left">
            <button
              onClick={() => toggleDropdown("date")}
              className="inline-flex justify-between items-center w-full rounded-lg border border-outline-variant bg-surface px-sm py-xs text-body-sm font-body-sm text-on-surface hover:bg-surface-container-low focus:outline-none focus:ring-1 focus:ring-primary"
              type="button"
            >
              <Calendar className="mr-2 w-4 h-4" />
              <span>{selectedDate === "All Time" ? "Date" : selectedDate}</span>
              <ChevronDown className="ml-2 w-4 h-4" />
            </button>
            {activeDropdown === "date" && (
              <>
                <div className="fixed inset-0 z-30" onClick={() => setActiveDropdown(null)} />
                <div className="absolute left-0 mt-1 w-48 rounded-lg border border-outline-variant bg-surface shadow-md z-40 py-xs max-h-60 overflow-auto">
                  {DATES.map((dt) => (
                    <button
                      key={dt}
                      onClick={() => {
                        setSelectedDate(dt);
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-sm py-xs text-body-sm hover:bg-surface-container-low flex items-center justify-between"
                    >
                      <span>{dt}</span>
                      {selectedDate === dt && <Check className="w-4 h-4 text-primary" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Price Table Section */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-[0px_4px_12px_rgba(0,0,0,0.05)]">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[800px]" aria-busy={status === "loading"}>
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
              {status === "loading" && <LoadingRows />}
              {status === "error" && (
                <tr>
                  <td colSpan={7} className="px-md py-xl text-center">
                    <p role="alert" className="text-on-surface mb-sm">
                      We couldn&apos;t load prices right now.
                    </p>
                    <button
                      type="button"
                      onClick={retry}
                      className="rounded-lg border border-outline-variant bg-surface px-sm py-xs text-body-sm font-body-sm text-on-surface hover:bg-surface-container-low focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      Try again
                    </button>
                  </td>
                </tr>
              )}
              {status === "success" && records.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-md py-xl text-center text-on-surface-variant">
                    No food prices are available yet. Check back soon.
                  </td>
                </tr>
              )}
              {status === "success" && pageRecords.map((record) => (
                <tr
                  key={record.id}
                  className="hover:bg-surface-container-low cursor-pointer transition-colors group"
                >
                  <td className="px-md py-md font-medium text-primary group-hover:text-tertiary-container flex items-center gap-xs">
                    <Link href={`/commodity/${record.slug}`} className="flex items-center gap-xs">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {renderIcon(record.icon)}
                      </div>
                      <span>{record.name}</span>
                    </Link>
                  </td>
                  <td className="px-md py-md">
                    <span className="bg-surface-container-high px-2 py-1 rounded text-xs text-on-surface-variant">
                      {record.category}
                    </span>
                  </td>
                  <td className="px-md py-md text-on-surface-variant">{record.location}</td>
                  <td className="px-md py-md text-on-surface-variant">{record.market}</td>
                  <td className="px-md py-md text-right whitespace-nowrap">
                    <span className="font-data-mono text-data-mono font-medium text-on-surface">
                      {record.price}
                    </span>
                    <span className="text-xs text-on-surface-variant ml-1">{record.unit}</span>
                  </td>
                  <td
                    className={`px-md py-md text-right font-data-mono text-data-mono ${
                      record.changeType === "positive" ? "text-[#22C55E]" : "text-[#EF4444]"
                    }`}
                  >
                    {record.change}
                  </td>
                  <td className="px-md py-md text-right text-on-surface-variant text-xs">
                    {record.updated}
                  </td>
                </tr>
              ))}
              {status === "success" && records.length > 0 && filteredRecords.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-md py-xl text-center text-on-surface-variant">
                    No food price records found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footer / Pagination */}
        <div className="bg-surface-container-lowest border-t border-outline-variant p-md flex flex-col sm:flex-row gap-sm items-start sm:items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
          <div aria-live="polite">
            {status !== "success"
              ? "\u00a0"
              : filteredRecords.length === 0
                ? "Showing 0 entries"
                : `Showing ${pageStart + 1} to ${pageStart + pageRecords.length} of ${filteredRecords.length} entries`}
          </div>
          <div className="flex gap-xs">
            <button
              type="button"
              onClick={() => setPage(page - 1)}
              className="p-xs border border-outline-variant rounded hover:bg-surface-container-low disabled:opacity-50"
              disabled={status !== "success" || page <= 1}
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {visiblePages(page, pageCount).map((n, i) =>
              n === "gap" ? (
                <span key={`gap-${i}`} className="p-xs">
                  ...
                </span>
              ) : (
              <button
                key={n}
                type="button"
                onClick={() => setPage(n)}
                className={`p-xs border border-outline-variant rounded hover:bg-surface-container-low ${n === page ? "bg-surface-container-low font-medium" : ""}`}
                aria-current={n === page ? "page" : undefined}
                disabled={status !== "success"}
              >
                {n}
              </button>
              ),
            )}
            <button
              type="button"
              onClick={() => setPage(page + 1)}
              className="p-xs border border-outline-variant rounded hover:bg-surface-container-low disabled:opacity-50"
              disabled={status !== "success" || page >= pageCount}
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
