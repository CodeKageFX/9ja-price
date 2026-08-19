import type { Metadata } from "next";
import React from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { UsageContent } from "./UsageContent";

export const metadata: Metadata = {
  title: "API Usage — 9jaPrice Dev Portal",
  description: "Monitor your request volume, error rates, and endpoint performance.",
};

export default function UsagePage() {
  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] font-body-lg antialiased min-h-screen flex">
      <Sidebar />

      <main className="flex-grow p-6 sm:p-10 bg-[#f7f9fb] min-h-screen">
        <UsageContent />
      </main>
    </div>
  );
}
