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

const INITIAL_RECORDS: PriceRecord[] = [
  {
    id: "1",
    slug: "rice",
    name: "Rice (Local)",
    category: "Grains",
    location: "Abuja",
    market: "Wuse Market",
    price: "₦2,200",
    unit: "/kg",
    change: "+8.4%",
    changeType: "positive",
    updated: "Aug 18, 2026",
    icon: "rice",
  },
  {
    id: "2",
    slug: "yam",
    name: "Yam",
    category: "Tubers",
    location: "Lagos",
    market: "Mile 12 Market",
    price: "₦1,500",
    unit: "/tuber",
    change: "-2.5%",
    changeType: "negative",
    updated: "Aug 18, 2026",
    icon: "yam",
  },
  {
    id: "3",
    slug: "egg",
    name: "Egg",
    category: "Protein",
    location: "Abuja",
    market: "Garki Market",
    price: "₦3,200",
    unit: "/crate",
    change: "+1.2%",
    changeType: "positive",
    updated: "Aug 17, 2026",
    icon: "egg",
  },
  {
    id: "4",
    slug: "beans",
    name: "Beans (Oloyin)",
    category: "Grains",
    location: "Lagos",
    market: "Mile 12 Market",
    price: "₦2,000",
    unit: "/kg",
    change: "+3.2%",
    changeType: "positive",
    updated: "Aug 18, 2026",
    icon: "beans",
  },
  {
    id: "5",
    slug: "tomato",
    name: "Tomato",
    category: "Vegetables",
    location: "Kano",
    market: "Dawanau Market",
    price: "₦120",
    unit: "/piece",
    change: "+12.5%",
    changeType: "positive",
    updated: "Aug 18, 2026",
    icon: "tomato",
  },
  {
    id: "6",
    slug: "garri",
    name: "Garri (White)",
    category: "Grains",
    location: "Ibadan",
    market: "Bodija Market",
    price: "₦1,100",
    unit: "/kg",
    change: "-0.8%",
    changeType: "negative",
    updated: "Aug 17, 2026",
    icon: "rice",
  },
  {
    id: "7",
    slug: "beef",
    name: "Beef",
    category: "Protein",
    location: "Port Harcourt",
    market: "Oil Mill Market",
    price: "₦4,800",
    unit: "/kg",
    change: "+6.0%",
    changeType: "positive",
    updated: "Aug 16, 2026",
    icon: "beef",
  },
];

const CATEGORIES = ["All Categories", "Grains", "Tubers", "Protein", "Vegetables"];
const LOCATIONS = ["All Locations", "Abuja", "Lagos", "Kano", "Ibadan", "Port Harcourt"];
const MARKETS = ["All Markets", "Wuse Market", "Mile 12 Market", "Garki Market", "Dawanau Market", "Bodija Market", "Oil Mill Market"];
const UNITS = ["All Units", "/kg", "/tuber", "/crate", "/piece"];
const DATES = ["All Time", "Today", "Past 7 Days", "Past 30 Days"];

export function ExplorerContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedMarket, setSelectedMarket] = useState("All Markets");
  const [selectedUnit, setSelectedUnit] = useState("All Units");
  const [selectedDate, setSelectedDate] = useState("All Time");

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const filteredRecords = useMemo(() => {
    return INITIAL_RECORDS.filter((record) => {
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
  }, [searchQuery, selectedCategory, selectedLocation, selectedMarket, selectedUnit]);

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
                  {CATEGORIES.map((cat) => (
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
                  {LOCATIONS.map((loc) => (
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
                  {MARKETS.map((mkt) => (
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
                  {UNITS.map((unit) => (
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
              {filteredRecords.map((record) => (
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
              {filteredRecords.length === 0 && (
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
          <div>Showing 1 to {filteredRecords.length} of 150 entries</div>
          <div className="flex gap-xs">
            <button
              className="p-xs border border-outline-variant rounded hover:bg-surface-container-low disabled:opacity-50"
              disabled
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-xs border border-outline-variant rounded hover:bg-surface-container-low bg-surface-container-low font-medium">
              1
            </button>
            <button className="p-xs border border-outline-variant rounded hover:bg-surface-container-low">
              2
            </button>
            <button className="p-xs border border-outline-variant rounded hover:bg-surface-container-low">
              3
            </button>
            <span className="p-xs">...</span>
            <button className="p-xs border border-outline-variant rounded hover:bg-surface-container-low">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
