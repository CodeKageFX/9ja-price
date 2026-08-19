import type { Metadata } from "next";
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ExplorerContent } from "@/components/shared/ExplorerContent";

export const metadata: Metadata = {
  title: "Price Explorer | 9jaPrice",
  description: "Explore Nigerian food prices by item, category, location, and market.",
};

export default function PriceExplorerPage() {
  return (
    <div className="bg-surface text-on-surface antialiased font-body-lg text-body-lg min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-lg">
        {/* Header Section */}
        <header className="mb-lg">
          <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface mb-xs">
            Nigerian Food Prices
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Explore food prices by item, location and market.
          </p>
        </header>

        {/* Explorer Search, Filters & Price Table */}
        <ExplorerContent />
      </main>
      <Footer />
    </div>
  );
}
