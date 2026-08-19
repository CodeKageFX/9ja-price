import type { Metadata } from "next";
import React from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { PlaygroundContent } from "@/components/shared/PlaygroundContent";

export const metadata: Metadata = {
  title: "API Playground | 9jaPrice",
  description: "Test 9jaPrice API endpoints interactively before integrating into your application.",
};

export default function PlaygroundPage() {
  return (
    <div className="bg-[#F8FAFC] text-on-surface min-h-screen flex font-body-lg antialiased">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Canvas — full viewport height, flex column */}
      <main className="lg:ml-0 flex-1 flex flex-col h-screen overflow-hidden bg-[#F8FAFC]">
        <PlaygroundContent />
      </main>
    </div>
  );
}
