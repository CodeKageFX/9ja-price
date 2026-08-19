"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Check,
  ShoppingBag,
  CreditCard,
  Compass,
  FileCheck,
  Link as LinkIcon,
  Bell,
} from "lucide-react";

export function AdminRecordObservationContent() {
  const router = useRouter();
  const [commodity, setCommodity] = useState("rice_local");
  const [location, setLocation] = useState("lagos");
  const [market, setMarket] = useState("mile12");
  const [price, setPrice] = useState("68500");
  const [unit, setUnit] = useState("bag_50kg");
  const [date, setDate] = useState("2026-08-19");
  const [source, setSource] = useState("field_agent");
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"pending" | "verified" | "rejected">("verified");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/admin");
  };

  return (
    <>
      {/* Top Header */}
      <header className="h-20 bg-surface-container-lowest border-b border-[#E2E8F0] px-margin-desktop flex items-center justify-between shrink-0 sticky top-0 z-30">
        <div className="flex items-center gap-4">
          <Link
            href="/admin"
            className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg transition-colors"
            title="Back to Price Management"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h2 className="font-headline-lg text-title-md text-on-surface">
              Record Price Observation
            </h2>
          </div>
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

      {/* Main Form Content */}
      <div className="p-margin-desktop space-y-lg flex-1">
        <form onSubmit={handleSubmit}>
          {/* Header Action Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-lg">
            <div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-1">
                Add Price Observation
              </h1>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Enter market data points collected from field agents, web scrapers, or official reports.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/admin"
                className="px-md py-sm border border-[#E2E8F0] rounded-lg text-body-sm font-medium text-on-surface hover:bg-surface-container transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="bg-primary-container text-on-primary font-label-caps text-label-caps px-md py-sm rounded-lg flex items-center gap-2 hover:bg-tertiary-container transition-colors shadow-sm font-semibold"
              >
                <Check className="w-4 h-4" />
                Save Observation
              </button>
            </div>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Left Column (8 cols) */}
            <div className="lg:col-span-8 space-y-gutter">
              {/* Card 1: Commodity & Location */}
              <div className="bg-surface-container-lowest rounded-xl border border-[#E2E8F0] p-md shadow-sm">
                <div className="flex items-center gap-2 mb-lg border-b border-[#E2E8F0] pb-sm">
                  <ShoppingBag className="w-5 h-5 text-primary" />
                  <h2 className="text-title-md font-title-md text-on-surface font-semibold">
                    Commodity &amp; Location
                  </h2>
                </div>

                <div className="space-y-md">
                  {/* Field: Food Item */}
                  <div className="flex flex-col gap-1">
                    <label className="text-label-caps font-label-caps text-on-surface-variant font-medium">
                      Food Item / Commodity <span className="text-error">*</span>
                    </label>
                    <select
                      value={commodity}
                      onChange={(e) => setCommodity(e.target.value)}
                      className="w-full bg-background border border-[#E2E8F0] rounded-lg px-3 py-2.5 text-body-sm font-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer"
                    >
                      <option value="rice_local">Rice (Local, Long Grain)</option>
                      <option value="garri_white">Garri (White)</option>
                      <option value="garri_yellow">Garri (Yellow)</option>
                      <option value="tomatoes">Tomatoes (Fresh)</option>
                      <option value="onions">Onions (Red)</option>
                      <option value="yam">Yam (Medium Tuber)</option>
                    </select>
                  </div>

                  {/* Grid: State & Market */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                    <div className="flex flex-col gap-1">
                      <label className="text-label-caps font-label-caps text-on-surface-variant font-medium">
                        State / Region <span className="text-error">*</span>
                      </label>
                      <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full bg-background border border-[#E2E8F0] rounded-lg px-3 py-2.5 text-body-sm font-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer"
                      >
                        <option value="lagos">Lagos State</option>
                        <option value="kano">Kano State</option>
                        <option value="abuja">FCT (Abuja)</option>
                        <option value="oyo">Oyo State (Ibadan)</option>
                        <option value="rivers">Rivers State (Port Harcourt)</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-label-caps font-label-caps text-on-surface-variant font-medium">
                        Market Name <span className="text-error">*</span>
                      </label>
                      <select
                        value={market}
                        onChange={(e) => setMarket(e.target.value)}
                        className="w-full bg-background border border-[#E2E8F0] rounded-lg px-3 py-2.5 text-body-sm font-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer"
                      >
                        <option value="mile12">Mile 12 Market</option>
                        <option value="dawanau">Dawanau Grains Market</option>
                        <option value="bodija">Bodija Market</option>
                        <option value="wuse">Wuse Market</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Value & Measurement */}
              <div className="bg-surface-container-lowest rounded-xl border border-[#E2E8F0] p-md shadow-sm">
                <div className="flex items-center gap-2 mb-lg border-b border-[#E2E8F0] pb-sm">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <h2 className="text-title-md font-title-md text-on-surface font-semibold">
                    Value &amp; Measurement
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-md items-start">
                  {/* Field: Price */}
                  <div className="flex flex-col gap-1 md:col-span-6">
                    <label className="text-label-caps font-label-caps text-on-surface-variant font-medium">
                      Observed Price <span className="text-error">*</span>
                    </label>
                    <div className="relative flex items-center bg-background border border-[#E2E8F0] rounded-lg focus-within:border-primary focus-within:ring-1 focus-within:ring-primary overflow-hidden">
                      <div className="bg-surface-container px-3 py-2.5 border-r border-[#E2E8F0] text-body-sm font-data-mono font-bold text-on-surface-variant">
                        NGN
                      </div>
                      <input
                        type="number"
                        placeholder="0.00"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full bg-transparent px-3 py-2.5 text-body-sm font-data-mono text-on-surface border-none focus:outline-none"
                      />
                    </div>
                    <p className="text-xs text-on-surface-variant/70 mt-1">Local currency (Naira).</p>
                  </div>

                  {/* Field: Unit */}
                  <div className="flex flex-col gap-1 md:col-span-6">
                    <label className="text-label-caps font-label-caps text-on-surface-variant font-medium">
                      Unit of Measurement
                    </label>
                    <select
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                      className="w-full bg-background border border-[#E2E8F0] rounded-lg px-3 py-2.5 text-body-sm font-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer"
                    >
                      <option value="bag_50kg">50kg Bag</option>
                      <option value="bag_100kg">100kg Bag</option>
                      <option value="kg">Kilogram (KG)</option>
                      <option value="tuber">Per Tuber</option>
                      <option value="liter">Liter (L)</option>
                      <option value="mudu">Mudu (Bowl)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (4 cols) */}
            <div className="lg:col-span-4 space-y-gutter">
              {/* Card 3: Data Source */}
              <div className="bg-surface-container-lowest rounded-xl border border-[#E2E8F0] p-md shadow-sm">
                <div className="flex items-center gap-2 mb-md border-b border-[#E2E8F0] pb-sm">
                  <Compass className="w-5 h-5 text-on-surface-variant" />
                  <h2 className="text-title-md font-title-md text-on-surface font-semibold">
                    Data Source
                  </h2>
                </div>

                <div className="space-y-md">
                  {/* Field: Recorded Date */}
                  <div className="flex flex-col gap-1">
                    <label className="text-label-caps font-label-caps text-on-surface-variant font-medium">
                      Date of Observation
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-background border border-[#E2E8F0] rounded-lg px-3 py-2.5 text-body-sm font-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  {/* Field: Data Origin */}
                  <div className="flex flex-col gap-1">
                    <label className="text-label-caps font-label-caps text-on-surface-variant font-medium">
                      Data Origin
                    </label>
                    <select
                      value={source}
                      onChange={(e) => setSource(e.target.value)}
                      className="w-full bg-background border border-[#E2E8F0] rounded-lg px-3 py-2.5 text-body-sm font-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer"
                    >
                      <option value="field_agent">Field Agent (Manual)</option>
                      <option value="web_scraper">Automated Scraper</option>
                      <option value="nbs">NBS Official Report</option>
                      <option value="market_union">Market Union Doc</option>
                    </select>
                  </div>

                  {/* Field: Source URL */}
                  <div className="flex flex-col gap-1">
                    <label className="text-label-caps font-label-caps text-on-surface-variant font-medium">
                      Reference URL (Optional)
                    </label>
                    <div className="relative">
                      <LinkIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
                      <input
                        type="url"
                        placeholder="https://..."
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="w-full bg-background border border-[#E2E8F0] rounded-lg pl-9 pr-3 py-2.5 text-body-sm font-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4: Review Status */}
              <div className="bg-surface-container-lowest rounded-xl border border-[#E2E8F0] p-md shadow-sm">
                <div className="flex items-center gap-2 mb-md border-b border-[#E2E8F0] pb-sm">
                  <FileCheck className="w-5 h-5 text-on-surface-variant" />
                  <h2 className="text-title-md font-title-md text-on-surface font-semibold">
                    Review Status
                  </h2>
                </div>

                <div className="space-y-md">
                  {/* Status Radio Pills */}
                  <div className="flex flex-col gap-1">
                    <label className="text-label-caps font-label-caps text-on-surface-variant font-medium mb-1">
                      State
                    </label>
                    <div className="grid grid-cols-3 gap-2 bg-surface-container-low p-1 rounded-lg border border-[#E2E8F0]">
                      <button
                        type="button"
                        onClick={() => setStatus("pending")}
                        className={`py-2 px-2 rounded-md text-xs font-medium transition-all flex items-center justify-center gap-1.5 ${
                          status === "pending"
                            ? "bg-white text-on-surface shadow-sm font-semibold"
                            : "text-on-surface-variant hover:text-on-surface"
                        }`}
                      >
                        <span className="w-2 h-2 rounded-full bg-on-surface-variant/50" />
                        Pending
                      </button>
                      <button
                        type="button"
                        onClick={() => setStatus("verified")}
                        className={`py-2 px-2 rounded-md text-xs font-medium transition-all flex items-center justify-center gap-1.5 ${
                          status === "verified"
                            ? "bg-white text-primary shadow-sm font-semibold"
                            : "text-on-surface-variant hover:text-on-surface"
                        }`}
                      >
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Verified
                      </button>
                      <button
                        type="button"
                        onClick={() => setStatus("rejected")}
                        className={`py-2 px-2 rounded-md text-xs font-medium transition-all flex items-center justify-center gap-1.5 ${
                          status === "rejected"
                            ? "bg-white text-[#EF4444] shadow-sm font-semibold"
                            : "text-on-surface-variant hover:text-on-surface"
                        }`}
                      >
                        <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                        Rejected
                      </button>
                    </div>
                  </div>

                  {/* Notes Textarea */}
                  <div className="flex flex-col gap-1">
                    <label className="text-label-caps font-label-caps text-on-surface-variant font-medium">
                      Internal Notes
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Add details regarding anomalies, weather impact on price, or data source reliability..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-background border border-[#E2E8F0] rounded-lg p-3 text-body-sm font-body-sm text-on-surface resize-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-on-surface-variant/50"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
