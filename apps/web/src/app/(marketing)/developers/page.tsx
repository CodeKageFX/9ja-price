import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Terminal,
  Copy,
  Utensils,
  CreditCard,
  Store,
  LineChart,
  Code,
  ArrowRight,
} from "lucide-react";
import { CopyButton } from "@/components/code/CopyButton";

export const metadata: Metadata = {
  title: "Developers — 9jaPrice",
  description:
    "Access structured Nigerian food prices, markets and historical data through a simple REST API. Designed for analysts, developers, and logistics platforms.",
};

const jsonSnippet = `{
  "status": "success",
  "meta": {
    "timestamp": "2026-08-19T10:30:00Z",
    "market_status": "open"
  },
  "data": [
    {
      "commodity_id": "rice-local-50kg",
      "name": "Local Rice (Ofada)",
      "market": "Mile 12, Lagos",
      "price_ngn": 78500,
      "previous_price": 79000,
      "trend": "down",
      "unit": "50kg bag"
    }
  ]
}`;

export default function DevelopersLandingPage() {
  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] font-body-lg antialiased min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-20 pb-20 text-center">
          <h1 className="text-[32px] sm:text-[48px] font-bold text-[#191c1e] mb-6 max-w-4xl mx-auto tracking-tight leading-tight">
            Build with Nigerian food-price data.
          </h1>
          <p className="text-[16px] text-[#565e74] mb-10 max-w-2xl mx-auto leading-relaxed">
            Access structured Nigerian food prices, markets and historical data
            through a simple REST API. Designed for analysts, developers, and
            logistics platforms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              className="w-full sm:w-auto text-[12px] font-semibold tracking-wider uppercase bg-[#008751] text-white px-6 py-3 rounded-lg hover:bg-[#006b3f] transition-colors shadow-sm text-center"
              href="/signup"
            >
              Get API Key
            </Link>
            <Link
              className="w-full sm:w-auto text-[12px] font-semibold tracking-wider uppercase bg-[#f2f4f6] text-[#191c1e] border border-[#e2e8f0] px-6 py-3 rounded-lg hover:bg-[#eceef0] transition-colors text-center"
              href="/docs"
            >
              Read Documentation
            </Link>
          </div>
        </section>

        {/* API Preview Bento Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch bg-white border border-[#e2e8f0] rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.02)] overflow-hidden">
            {/* Left: Info */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#006b3f]/10 rounded-lg mb-6 text-[#006b3f]">
                <Terminal className="w-6 h-6" />
              </div>
              <h2 className="text-[28px] sm:text-[32px] font-bold text-[#191c1e] mb-4 leading-tight">
                Integrate in minutes
              </h2>
              <p className="text-[16px] text-[#565e74] mb-8 leading-relaxed">
                Our REST API is designed for predictability and speed. Authenticate
                via Bearer token and receive structured, standardized JSON
                responses covering all major local markets.
              </p>
              <div className="bg-[#eceef0] px-4 py-3 rounded-lg border border-[#e2e8f0] inline-flex items-center gap-3 w-fit">
                <span className="text-[12px] font-semibold tracking-wider text-[#006b3f] uppercase">
                  GET
                </span>
                <span className="text-[14px] font-mono text-[#191c1e]">
                  https://api.9japrice.com/v1/prices
                </span>
              </div>
            </div>

            {/* Right: Code Block */}
            <div className="bg-[#0f172a] border-l border-[#e2e8f0] p-6 flex flex-col justify-between">
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-[#334155]">
                <span className="text-[12px] font-semibold tracking-wider text-white border-b-2 border-[#006b3f] pb-1 uppercase">
                  Response
                </span>
                <CopyButton text={jsonSnippet} className="text-[#bec6e0] hover:text-white" />
              </div>
              <div className="flex-grow overflow-auto">
                <pre className="text-[13px] font-mono text-[#bec6e0] leading-relaxed">
                  {jsonSnippet}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-[28px] sm:text-[32px] font-bold text-[#191c1e] mb-4">
              Everything you need to build
            </h2>
            <p className="text-[16px] text-[#565e74]">
              A robust foundation for market intelligence tools.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-[#e2e8f0] rounded-xl p-6 hover:shadow-[0px_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
              <div className="w-10 h-10 bg-[#eceef0] rounded-lg flex items-center justify-center mb-6 text-[#191c1e]">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="text-[20px] font-bold text-[#191c1e] mb-2">
                Food Commodities
              </h3>
              <p className="text-[14px] text-[#565e74] leading-relaxed">
                Access normalized data across 50+ staple foods, standardizing
                regional naming and fluid measurement units natively.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white border border-[#e2e8f0] rounded-xl p-6 hover:shadow-[0px_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
              <div className="w-10 h-10 bg-[#eceef0] rounded-lg flex items-center justify-center mb-6 text-[#191c1e]">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-[20px] font-bold text-[#191c1e] mb-2">
                Real-time Prices
              </h3>
              <p className="text-[14px] text-[#565e74] leading-relaxed">
                Fetch the latest surveyed retail and wholesale prices updated
                daily from verified on-the-ground enumerators.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white border border-[#e2e8f0] rounded-xl p-6 hover:shadow-[0px_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
              <div className="w-10 h-10 bg-[#eceef0] rounded-lg flex items-center justify-center mb-6 text-[#191c1e]">
                <Store className="w-5 h-5" />
              </div>
              <h3 className="text-[20px] font-bold text-[#191c1e] mb-2">
                Market Coverage
              </h3>
              <p className="text-[14px] text-[#565e74] leading-relaxed">
                Filter queries precisely by geography, tapping into validated
                data from over 120 key markets across all 36 states.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white border border-[#e2e8f0] rounded-xl p-6 hover:shadow-[0px_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
              <div className="w-10 h-10 bg-[#eceef0] rounded-lg flex items-center justify-center mb-6 text-[#191c1e]">
                <LineChart className="w-5 h-5" />
              </div>
              <h3 className="text-[20px] font-bold text-[#191c1e] mb-2">
                Historical Data
              </h3>
              <p className="text-[14px] text-[#565e74] leading-relaxed">
                Analyze overarching trends with deep historical datasets, tracking
                seasonal fluctuations and inflationary impacts over time.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full max-w-5xl mx-auto px-4 sm:px-8 py-20 sm:py-24 text-center">
          <div className="bg-[#006b3f]/5 border border-[#006b3f]/20 rounded-2xl p-8 sm:p-14 md:p-16 relative overflow-hidden">
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-sm mb-6 border border-[#e2e8f0] text-[#006b3f] shrink-0">
                <Code className="w-8 h-8" />
              </div>
              <h2 className="text-[28px] sm:text-[36px] font-bold text-[#191c1e] mb-4 leading-tight">
                Free to build with.
              </h2>
              <p className="text-[16px] sm:text-[18px] text-[#565e74] mb-10  mx-auto leading-relaxed">
                Get started immediately with our generous developer tier. 10,000
                requests per month, completely free. No credit card required.
              </p>
              <Link
                className="inline-flex items-center justify-center text-[13px] font-semibold tracking-wider uppercase bg-[#008751] text-white px-8 py-4 rounded-lg hover:bg-[#006b3f] transition-colors shadow-sm"
                href="/signup"
              >
                Ready to build? Get API Key
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
