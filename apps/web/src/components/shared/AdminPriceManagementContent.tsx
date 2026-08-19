"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  CheckCircle,
  Edit2,
  Trash2,
  ChevronLeft,
  ChevronRight,
  FilterX,
  Bell,
} from "lucide-react";

export interface PriceRecord {
  id: string;
  item: string;
  price: string;
  unit: string;
  location: string;
  market: string;
  source: string;
  date: string;
  status: "Pending" | "Verified" | "Rejected";
}

const INITIAL_RECORDS: PriceRecord[] = [
  {
    id: "1",
    item: "Garri (White)",
    price: "35,000",
    unit: "50kg Bag",
    location: "Lagos",
    market: "Mile 12",
    source: "Agent_042",
    date: "Oct 24, 08:30",
    status: "Pending",
  },
  {
    id: "2",
    item: "Rice (Local)",
    price: "68,500",
    unit: "50kg Bag",
    location: "Kano",
    market: "Dawanau",
    source: "Agent_011",
    date: "Oct 24, 07:15",
    status: "Verified",
  },
  {
    id: "3",
    item: "Tomatoes",
    price: "42,000",
    unit: "Big Basket",
    location: "Abuja",
    market: "Zuba",
    source: "Agent_088",
    date: "Oct 23, 16:45",
    status: "Rejected",
  },
  {
    id: "4",
    item: "Onions",
    price: "28,000",
    unit: "Bag",
    location: "Lagos",
    market: "Mile 12",
    source: "System_API",
    date: "Oct 23, 14:20",
    status: "Verified",
  },
];

export function AdminPriceManagementContent() {
  const [records, setRecords] = useState<PriceRecord[]>(INITIAL_RECORDS);
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const filteredRecords = records.filter((rec) => {
    const matchesSearch =
      rec.item.toLowerCase().includes(search.toLowerCase()) ||
      rec.market.toLowerCase().includes(search.toLowerCase());
    const matchesLocation = locationFilter ? rec.location === locationFilter : true;
    const matchesStatus = statusFilter ? rec.status.toLowerCase() === statusFilter.toLowerCase() : true;
    return matchesSearch && matchesLocation && matchesStatus;
  });

  const handleVerify = (id: string) => {
    setRecords(
      records.map((r) => (r.id === id ? { ...r, status: "Verified" as const } : r))
    );
  };

  const handleDelete = (id: string) => {
    setRecords(records.filter((r) => r.id !== id));
  };

  const resetFilters = () => {
    setSearch("");
    setLocationFilter("");
    setStatusFilter("");
  };

  return (
    <>
      {/* Top Header */}
      <header className="h-20 bg-surface-container-lowest border-b border-[#E2E8F0] px-margin-desktop flex items-center justify-between shrink-0 sticky top-0 z-30">
        <div>
          <h2 className="font-headline-lg text-title-md text-on-surface">Price Management</h2>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <Bell className="w-5 h-5 text-on-surface-variant" />
          </button>
          <div className="flex items-center gap-3 pl-4 border-l border-outline-variant/30">
            <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-sm shadow-sm">
              OA
            </div>
            <div className="hidden md:block">
              <p className="font-title-md text-body-sm font-semibold text-on-surface leading-tight">
                Oluwaseun A.
              </p>
              <p className="font-label-caps text-[10px] text-on-surface-variant uppercase">Admin</p>
            </div>
          </div>
        </div>
      </header>

      <div className="p-margin-desktop space-y-lg flex-1 flex flex-col min-h-0">
        {/* Page Action Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-1">
              Food Price Records
            </h1>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Filter, verify, and manage crowd-sourced price observations across Nigerian markets.
            </p>
          </div>
          <Link
            href="/admin/observations/new"
            className="bg-primary-container text-on-primary font-label-caps text-label-caps px-md py-sm rounded-lg flex items-center gap-2 hover:bg-tertiary-container transition-colors shadow-sm font-semibold self-start sm:self-auto"
          >
            <Plus className="w-4 h-4" />
            Record Price
          </Link>
        </div>

        {/* Filters Bar */}
        <div className="bg-surface-container-lowest border border-[#E2E8F0] rounded-xl p-md shadow-sm">
          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 min-w-[220px]">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
              <input
                type="text"
                placeholder="Search food item or market..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-background border border-[#E2E8F0] rounded-lg pl-9 pr-3 py-2 text-body-sm font-body-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Location Select */}
            <div className="relative flex-1 min-w-[140px]">
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full appearance-none bg-background border border-[#E2E8F0] rounded-lg pl-3 pr-8 py-2 text-body-sm font-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer"
              >
                <option value="">All Locations</option>
                <option value="Lagos">Lagos</option>
                <option value="Kano">Kano</option>
                <option value="Abuja">Abuja</option>
              </select>
            </div>

            {/* Status Select */}
            <div className="relative flex-1 min-w-[130px]">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full appearance-none bg-background border border-[#E2E8F0] rounded-lg pl-3 pr-8 py-2 text-body-sm font-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer"
              >
                <option value="">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="verified">Verified</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            {/* Reset Filters */}
            <button
              onClick={resetFilters}
              className="p-2 border border-[#E2E8F0] rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
              title="Reset Filters"
            >
              <FilterX className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Data Table Container */}
        <div className="bg-surface-container-lowest border border-[#E2E8F0] rounded-xl shadow-sm overflow-hidden flex-1 flex flex-col">
          <div className="overflow-x-auto w-full flex-1">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead className="bg-[#F1F5F9] border-b border-[#E2E8F0] sticky top-0 z-10">
                <tr>
                  <th className="py-3 px-md text-label-caps font-label-caps text-on-surface-variant font-semibold tracking-wider">
                    Food Item
                  </th>
                  <th className="py-3 px-md text-label-caps font-label-caps text-on-surface-variant font-semibold tracking-wider text-right">
                    Price (₦)
                  </th>
                  <th className="py-3 px-md text-label-caps font-label-caps text-on-surface-variant font-semibold tracking-wider">
                    Unit
                  </th>
                  <th className="py-3 px-md text-label-caps font-label-caps text-on-surface-variant font-semibold tracking-wider">
                    Location
                  </th>
                  <th className="py-3 px-md text-label-caps font-label-caps text-on-surface-variant font-semibold tracking-wider">
                    Market
                  </th>
                  <th className="py-3 px-md text-label-caps font-label-caps text-on-surface-variant font-semibold tracking-wider">
                    Source
                  </th>
                  <th className="py-3 px-md text-label-caps font-label-caps text-on-surface-variant font-semibold tracking-wider">
                    Recorded Date
                  </th>
                  <th className="py-3 px-md text-label-caps font-label-caps text-on-surface-variant font-semibold tracking-wider text-center">
                    Status
                  </th>
                  <th className="py-3 px-md text-label-caps font-label-caps text-on-surface-variant font-semibold tracking-wider text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9] bg-white text-body-sm font-body-sm text-on-surface">
                {filteredRecords.map((row) => (
                  <tr key={row.id} className="hover:bg-surface-bright transition-colors group">
                    <td className="py-3 px-md font-medium">{row.item}</td>
                    <td className="py-3 px-md text-right font-data-mono font-medium">
                      {row.price}
                    </td>
                    <td className="py-3 px-md text-on-surface-variant">{row.unit}</td>
                    <td className="py-3 px-md">{row.location}</td>
                    <td className="py-3 px-md">{row.market}</td>
                    <td className="py-3 px-md text-on-surface-variant">{row.source}</td>
                    <td className="py-3 px-md text-on-surface-variant">{row.date}</td>
                    <td className="py-3 px-md text-center">
                      {row.status === "Pending" && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-[11px] font-medium leading-none tracking-wide">
                          Pending
                        </span>
                      )}
                      {row.status === "Verified" && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full bg-primary/10 text-primary-container text-[11px] font-medium leading-none tracking-wide">
                          Verified
                        </span>
                      )}
                      {row.status === "Rejected" && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full bg-[#FEF2F2] text-[#DC2626] border border-[#FCA5A5] text-[11px] font-medium leading-none tracking-wide">
                          Rejected
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-md text-right">
                      <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {row.status === "Pending" && (
                          <button
                            onClick={() => handleVerify(row.id)}
                            className="p-1.5 text-primary hover:bg-primary/10 rounded-md transition-colors"
                            title="Verify"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          className="p-1.5 text-on-surface-variant hover:bg-surface-container rounded-md transition-colors"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(row.id)}
                          className="p-1.5 text-[#EF4444] hover:bg-error-container/50 rounded-md transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="bg-surface-container-lowest border-t border-[#E2E8F0] p-sm flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
            <div>Showing 1 to {filteredRecords.length} of 2,451 records</div>
            <div className="flex items-center gap-xs">
              <button
                disabled
                className="p-1 border border-[#E2E8F0] rounded disabled:opacity-50 hover:bg-surface-container transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="px-2 text-xs font-data-mono">Page 1 of 246</span>
              <button className="p-1 border border-[#E2E8F0] rounded hover:bg-surface-container transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
