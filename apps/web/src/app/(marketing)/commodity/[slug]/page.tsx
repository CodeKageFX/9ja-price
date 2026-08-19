import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import {
  MapPin,
  ArrowLeftRight,
  ArrowDown,
  ArrowUp,
  ShieldCheck,
  TrendingUp,
  TrendingDown,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CommodityPriceHistory } from "@/components/shared/CommodityPriceHistory";

export const metadata: Metadata = {
  title: "Rice Price Details | 9jaPrice",
  description:
    "Detailed historical price trends, regional market comparisons, and pricing data for Rice in Nigeria.",
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CommodityDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const commodityName = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col font-body-lg antialiased">
      <Navbar />

      {/* Main Content Canvas */}
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-lg grid grid-cols-1 md:grid-cols-12 gap-lg">
        {/* Header Section */}
        <header className="col-span-1 md:col-span-12 flex flex-col md:flex-row justify-between items-start md:items-end mb-lg">
          <div>
            <div className="flex items-center gap-xs mb-xs">
              <span className="bg-primary-container/10 text-primary px-xs py-base rounded-full text-label-caps font-label-caps uppercase">
                Grains
              </span>
              <span className="text-on-surface-variant text-body-sm font-body-sm flex items-center gap-base">
                <MapPin className="w-4 h-4 text-on-surface-variant" /> Abuja
              </span>
            </div>
            <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface mb-xs">
              {commodityName || "Rice"}
            </h1>
            <div className="flex items-center gap-sm text-on-surface-variant text-body-sm font-body-sm">
              <span>
                Current Avg:{" "}
                <strong className="text-title-md font-title-md text-on-surface">
                  ₦2,200
                </strong>{" "}
                <span className="text-data-mono font-data-mono">/ kg</span>
              </span>
              <span className="w-1 h-1 bg-outline-variant rounded-full" />
              <span>Updated: Aug 18, 2026</span>
            </div>
          </div>

          <Link
            href="/explorer"
            className="mt-sm md:mt-0 bg-primary-container text-on-primary rounded-lg px-md py-xs text-body-sm font-body-sm font-medium flex items-center gap-xs hover:opacity-90 transition-opacity shadow-sm"
          >
            <ArrowLeftRight className="w-4.5 h-4.5" />
            Compare locations
          </Link>
        </header>

        {/* Main Data Area */}
        <div className="col-span-1 md:col-span-8 flex flex-col gap-lg">
          {/* Price History Chart */}
          <CommodityPriceHistory />

          {/* Location Comparison */}
          <section className="bg-surface-container-lowest rounded-xl border border-outline-variant p-md shadow-sm">
            <h2 className="text-title-md font-headline-lg text-on-surface mb-md">
              Regional Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-surface-container-highest">
                    <th className="py-xs px-sm text-label-caps font-label-caps text-on-surface-variant">
                      Location
                    </th>
                    <th className="py-xs px-sm text-label-caps font-label-caps text-on-surface-variant text-right">
                      Avg Price (/kg)
                    </th>
                    <th className="py-xs px-sm text-label-caps font-label-caps text-on-surface-variant text-right">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="text-body-sm font-body-sm">
                  <tr className="border-b border-surface-container-highest">
                    <td className="py-sm px-sm font-medium">Kano</td>
                    <td className="py-sm px-sm text-right font-data-mono text-data-mono">
                      ₦1,850
                    </td>
                    <td className="py-sm px-sm text-right">
                      <span className="inline-flex items-center gap-xs text-primary-container bg-primary-container/10 px-xs py-base rounded-full text-label-caps font-label-caps">
                        <ArrowDown className="w-3.5 h-3.5" /> Cheapest
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-surface-container-highest bg-surface-container-low/30">
                    <td className="py-sm px-sm font-medium">Abuja (Current)</td>
                    <td className="py-sm px-sm text-right font-data-mono text-data-mono">
                      ₦2,200
                    </td>
                    <td className="py-sm px-sm text-right text-on-surface-variant">-</td>
                  </tr>
                  <tr className="border-b border-surface-container-highest">
                    <td className="py-sm px-sm font-medium">Ibadan</td>
                    <td className="py-sm px-sm text-right font-data-mono text-data-mono">
                      ₦2,000
                    </td>
                    <td className="py-sm px-sm text-right text-on-surface-variant">-</td>
                  </tr>
                  <tr>
                    <td className="py-sm px-sm font-medium">Lagos</td>
                    <td className="py-sm px-sm text-right font-data-mono text-data-mono">
                      ₦2,350
                    </td>
                    <td className="py-sm px-sm text-right">
                      <span className="inline-flex items-center gap-xs text-error bg-error/10 px-xs py-base rounded-full text-label-caps font-label-caps">
                        <ArrowUp className="w-3.5 h-3.5" /> Expensive
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Sidebar Area */}
        <div className="col-span-1 md:col-span-4 flex flex-col gap-lg">
          {/* Source Transparency */}
          <section className="bg-primary-container/5 rounded-xl border border-primary-container/20 p-md shadow-sm">
            <div className="flex items-start gap-sm">
              <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h3 className="text-body-lg font-body-lg font-semibold text-on-surface mb-base">
                  Data Verified
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant mb-xs">
                  Source: Community price submission
                </p>
                <p className="text-label-caps font-label-caps text-primary uppercase">
                  High Confidence
                </p>
              </div>
            </div>
          </section>

          {/* Market Comparison */}
          <section className="bg-surface-container-lowest rounded-xl border border-outline-variant p-md shadow-sm">
            <h2 className="text-title-md font-headline-lg text-on-surface mb-md">
              Abuja Markets
            </h2>
            <div className="flex flex-col gap-sm">
              <div className="flex justify-between items-center p-sm rounded-lg bg-surface-container-lowest border border-surface-container-highest hover:shadow-sm transition-shadow">
                <span className="text-body-sm font-body-sm text-on-surface">Wuse Market</span>
                <span className="text-data-mono font-data-mono font-medium">₦2,200</span>
              </div>
              <div className="flex justify-between items-center p-sm rounded-lg bg-surface-container-lowest border border-surface-container-highest hover:shadow-sm transition-shadow">
                <span className="text-body-sm font-body-sm text-on-surface">Garki Market</span>
                <span className="text-data-mono font-data-mono font-medium text-error flex items-center gap-base">
                  <TrendingUp className="w-3.5 h-3.5" /> ₦2,300
                </span>
              </div>
              <div className="flex justify-between items-center p-sm rounded-lg bg-surface-container-lowest border border-surface-container-highest hover:shadow-sm transition-shadow">
                <span className="text-body-sm font-body-sm text-on-surface">Karmo Market</span>
                <span className="text-data-mono font-data-mono font-medium text-primary flex items-center gap-base">
                  <TrendingDown className="w-3.5 h-3.5" /> ₦2,050
                </span>
              </div>
            </div>
          </section>

          {/* Related Items */}
          <section className="bg-surface-container-lowest rounded-xl border border-outline-variant p-md shadow-sm">
            <h2 className="text-title-md font-headline-lg text-on-surface mb-md">
              Related Commodities
            </h2>
            <div className="flex flex-wrap gap-sm">
              <Link
                href="/commodity/beans"
                className="px-sm py-xs bg-surface-container-low border border-outline-variant rounded-full text-body-sm font-body-sm hover:border-primary transition-colors flex items-center gap-xs"
              >
                Beans
                <ArrowRight className="w-4 h-4 text-on-surface-variant" />
              </Link>
              <Link
                href="/commodity/maize"
                className="px-sm py-xs bg-surface-container-low border border-outline-variant rounded-full text-body-sm font-body-sm hover:border-primary transition-colors flex items-center gap-xs"
              >
                Maize
                <ArrowRight className="w-4 h-4 text-on-surface-variant" />
              </Link>
              <Link
                href="/commodity/yam"
                className="px-sm py-xs bg-surface-container-low border border-outline-variant rounded-full text-body-sm font-body-sm hover:border-primary transition-colors flex items-center gap-xs"
              >
                Yam
                <ArrowRight className="w-4 h-4 text-on-surface-variant" />
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
