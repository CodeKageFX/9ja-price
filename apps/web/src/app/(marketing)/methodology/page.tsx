import type { Metadata } from "next";
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Compass,
  LineChart,
  ArrowLeftRight,
  Clock,
  History,
  FileCheck,
  MapPin,
  CheckSquare,
  RefreshCw,
  Database,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Data Methodology — 9jaPrice",
  description:
    "How 9jaPrice collects, verifies, normalizes, and publishes Nigerian food-price intelligence.",
};

export default function MethodologyPage() {
  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] font-body-lg antialiased min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-10 pt-20 flex flex-col items-center">
        {/* Header Section */}
        <header className="mb-12 max-w-3xl text-center">
          <h1 className="text-[28px] sm:text-[40px] font-bold text-[#191c1e] mb-4 leading-tight">
            Data Methodology
          </h1>
          <p className="text-[16px] sm:text-[18px] text-[#3e4a41] leading-relaxed">
            How 9jaPrice collects, verifies, normalizes, and publishes Nigerian
            food-price intelligence.
          </p>
        </header>

        {/* 6 Key Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mb-16">
          {/* Pillar 1 */}
          <article className="bg-white border border-[#e2e8f0] rounded-xl p-6 flex flex-col gap-4 hover:shadow-sm transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-[#f2f4f6] flex items-center justify-center border border-[#e2e8f0] text-[#006b3f]">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-[20px] font-bold text-[#191c1e]">
              Data Origination
            </h3>
            <p className="text-[14px] text-[#3e4a41] leading-relaxed">
              Information is sourced directly from major wholesale markets,
              verified retail outlets, and proprietary on-the-ground agent
              networks across key Nigerian states. We do not rely on secondary
              aggregators.
            </p>
          </article>

          {/* Pillar 2 */}
          <article className="bg-white border border-[#e2e8f0] rounded-xl p-6 flex flex-col gap-4 hover:shadow-sm transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-[#f2f4f6] flex items-center justify-center border border-[#e2e8f0] text-[#006b3f]">
              <LineChart className="w-6 h-6" />
            </div>
            <h3 className="text-[20px] font-bold text-[#191c1e]">
              Discrete Observations
            </h3>
            <p className="text-[14px] text-[#3e4a41] leading-relaxed">
              Every price point is recorded as a discrete observation containing
              strict metadata: precise timestamp, geolocation coordinates, vendor
              category, and specific commodity variations or grades.
            </p>
          </article>

          {/* Pillar 3 */}
          <article className="bg-white border border-[#e2e8f0] rounded-xl p-6 flex flex-col gap-4 hover:shadow-sm transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-[#f2f4f6] flex items-center justify-center border border-[#e2e8f0] text-[#006b3f]">
              <ArrowLeftRight className="w-6 h-6" />
            </div>
            <h3 className="text-[20px] font-bold text-[#191c1e]">
              Unit Normalization
            </h3>
            <p className="text-[14px] text-[#3e4a41] leading-relaxed">
              Raw field data captured in local measurements (e.g., &quot;mudu&quot;,
              &quot;paint bucket&quot;, &quot;derica&quot;) is mathematically converted
              into standardized international metric units (kilograms, liters)
              utilizing our proprietary conversion matrices.
            </p>
          </article>

          {/* Pillar 4 */}
          <article className="bg-white border border-[#e2e8f0] rounded-xl p-6 flex flex-col gap-4 hover:shadow-sm transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-[#f2f4f6] flex items-center justify-center border border-[#e2e8f0] text-[#006b3f]">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-[20px] font-bold text-[#191c1e]">
              Update Frequency
            </h3>
            <p className="text-[14px] text-[#3e4a41] leading-relaxed">
              Core tier-one commodities are tracked daily. Our automated ingestion
              pipeline processes, validates, and publishes updates to the API and
              web platform within 4 hours of field collection.
            </p>
          </article>

          {/* Pillar 5 */}
          <article className="bg-white border border-[#e2e8f0] rounded-xl p-6 flex flex-col gap-4 hover:shadow-sm transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-[#f2f4f6] flex items-center justify-center border border-[#e2e8f0] text-[#006b3f]">
              <History className="w-6 h-6" />
            </div>
            <h3 className="text-[20px] font-bold text-[#191c1e]">
              Historical Continuity
            </h3>
            <p className="text-[14px] text-[#3e4a41] leading-relaxed">
              We maintain immutable time-series records. Past observations are
              never overwritten or deleted, ensuring absolute historical
              integrity required for robust trend analysis and machine learning
              forecasting.
            </p>
          </article>

          {/* Pillar 6 */}
          <article className="bg-white border border-[#e2e8f0] rounded-xl p-6 flex flex-col gap-4 hover:shadow-sm transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-[#f2f4f6] flex items-center justify-center border border-[#e2e8f0] text-[#006b3f]">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-[20px] font-bold text-[#191c1e]">
              Quality Validation
            </h3>
            <p className="text-[14px] text-[#3e4a41] leading-relaxed">
              Automated statistical anomaly detection continuously scans for
              outliers. Any flagged data immediately enters a quarantine state
              and undergoes manual review by domain experts before being merged into
              the master index.
            </p>
          </article>
        </div>

        {/* Pipeline Visualization */}
        <div className="w-full max-w-4xl bg-white border border-[#e2e8f0] rounded-xl p-8 mb-12 shadow-sm">
          <h3 className="text-[12px] font-semibold text-[#565e74] mb-8 text-center uppercase tracking-widest">
            Data Ingestion Pipeline
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center gap-2 text-center w-full md:w-1/4">
              <div className="w-16 h-16 rounded-full bg-[#eceef0] flex items-center justify-center border border-[#e2e8f0] text-[#191c1e]">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-[12px] font-semibold text-[#191c1e] mt-2 uppercase">
                1. Field Collection
              </span>
            </div>

            <ArrowRight className="w-6 h-6 text-[#e2e8f0] rotate-90 md:rotate-0 shrink-0" />

            <div className="flex flex-col items-center gap-2 text-center w-full md:w-1/4">
              <div className="w-16 h-16 rounded-full bg-[#eceef0] flex items-center justify-center border border-[#e2e8f0] text-[#191c1e]">
                <CheckSquare className="w-6 h-6" />
              </div>
              <span className="text-[12px] font-semibold text-[#191c1e] mt-2 uppercase">
                2. Anomaly Check
              </span>
            </div>

            <ArrowRight className="w-6 h-6 text-[#e2e8f0] rotate-90 md:rotate-0 shrink-0" />

            <div className="flex flex-col items-center gap-2 text-center w-full md:w-1/4">
              <div className="w-16 h-16 rounded-full bg-[#eceef0] flex items-center justify-center border border-[#e2e8f0] text-[#191c1e]">
                <RefreshCw className="w-6 h-6" />
              </div>
              <span className="text-[12px] font-semibold text-[#191c1e] mt-2 uppercase">
                3. Normalization
              </span>
            </div>

            <ArrowRight className="w-6 h-6 text-[#e2e8f0] rotate-90 md:rotate-0 shrink-0" />

            <div className="flex flex-col items-center gap-2 text-center w-full md:w-1/4">
              <div className="w-16 h-16 rounded-full bg-[#006b3f] flex items-center justify-center border border-[#008751] text-white shadow-sm">
                <Database className="w-6 h-6" />
              </div>
              <span className="text-[12px] font-semibold text-[#006b3f] mt-2 uppercase">
                4. Master Index
              </span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
