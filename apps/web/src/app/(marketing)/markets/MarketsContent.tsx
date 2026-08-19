"use client";

import { useState } from "react";
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

interface MarketItem {
  id: string;
  name: string;
  location: string;
  state: string;
  city: string;
  status: "Active Data" | "Delayed";
  foods: string[];
  moreFoodsCount: number;
  lastUpdate: string;
  image: string;
}

const MARKETS_DATA: MarketItem[] = [
  {
    id: "wuse",
    name: "Wuse Market",
    location: "Abuja, FCT",
    state: "fct",
    city: "abuja",
    status: "Active Data",
    foods: ["Rice", "Garri", "Tomatoes"],
    moreFoodsCount: 12,
    lastUpdate: "2 hours ago",
    image:
      "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "mile12",
    name: "Mile 12 Market",
    location: "Kosofe, Lagos",
    state: "lagos",
    city: "ikeja",
    status: "Active Data",
    foods: ["Onions", "Peppers", "Yam"],
    moreFoodsCount: 24,
    lastUpdate: "15 mins ago",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "dawanau",
    name: "Dawanau Market",
    location: "Dawakin Tofa, Kano",
    state: "kano",
    city: "kano",
    status: "Delayed",
    foods: ["Maize", "Sorghum", "Millet"],
    moreFoodsCount: 8,
    lastUpdate: "1 day ago",
    image:
      "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=800&auto=format&fit=crop",
  },
];

export function MarketsContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const filteredMarkets = MARKETS_DATA.filter((market) => {
    const matchesSearch =
      market.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      market.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesState = selectedState ? market.state === selectedState : true;
    const matchesCity = selectedCity ? market.city === selectedCity : true;
    return matchesSearch && matchesState && matchesCity;
  });

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
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option value="">All States</option>
              <option value="fct">FCT Abuja</option>
              <option value="lagos">Lagos</option>
              <option value="kano">Kano</option>
              <option value="rivers">Rivers</option>
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
            >
              <option value="">All Cities</option>
              <option value="abuja">Abuja</option>
              <option value="ikeja">Ikeja</option>
              <option value="port-harcourt">Port Harcourt</option>
            </select>
            <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-[#3e4a41]/50 pointer-events-none" />
          </div>
        </div>

        <div className="w-full md:w-auto">
          <button
            className="w-full md:w-auto bg-[#eceef0] hover:bg-[#e6e8ea] text-[#191c1e] text-[14px] font-medium px-6 py-3 rounded-lg transition-colors border border-[#e2e8f0] flex items-center justify-center gap-2 shadow-sm"
            onClick={() => {
              setSearchQuery("");
              setSelectedState("");
              setSelectedCity("");
            }}
          >
            <Filter className="w-4 h-4" />
            Reset Filters
          </button>
        </div>
      </section>

      {/* Markets Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMarkets.map((market) => (
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
                  href="/explorer"
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
      <div className="mt-12 flex justify-center">
        <nav className="flex items-center gap-2">
          <button
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#e2e8f0] text-[#3e4a41] hover:bg-[#f2f4f6] transition-colors disabled:opacity-50"
            disabled
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#006b3f] text-white text-[14px] font-medium">
            1
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#e2e8f0] text-[#191c1e] hover:bg-[#f2f4f6] transition-colors text-[14px] font-medium">
            2
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#e2e8f0] text-[#191c1e] hover:bg-[#f2f4f6] transition-colors text-[14px] font-medium">
            3
          </button>
          <span className="text-[#3e4a41] mx-2">...</span>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#e2e8f0] text-[#3e4a41] hover:bg-[#f2f4f6] transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </nav>
      </div>
    </>
  );
}
