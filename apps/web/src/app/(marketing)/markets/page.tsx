import type { Metadata } from "next";
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarketsContent } from "./MarketsContent";

export const metadata: Metadata = {
  title: "Nigerian Markets — 9jaPrice",
  description:
    "Explore markets and locations covered by our food-price data across Nigeria.",
};

export default function MarketsPage() {
  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] font-body-lg antialiased min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-10 pt-20">
        <header className="mb-10 max-w-3xl">
          <h1 className="text-[28px] sm:text-[36px] font-bold text-[#191c1e] mb-4 leading-tight">
            Nigerian Markets
          </h1>
          <p className="text-[16px] text-[#3e4a41]">
            Explore markets and locations covered by our food-price data.
          </p>
        </header>

        <MarketsContent />
      </main>

      <Footer />
    </div>
  );
}
