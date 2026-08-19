import type { Metadata } from "next";
import React from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { SettingsContent } from "./SettingsContent";

export const metadata: Metadata = {
  title: "Settings — 9jaPrice Dev Portal",
  description: "Manage your developer account preferences and security.",
};

export default function SettingsPage() {
  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] font-body-lg antialiased min-h-screen flex">
      <Sidebar />

      <main className="flex-grow p-6 sm:p-10 bg-[#f7f9fb] min-h-screen">
        <header className="mb-10">
          <h1 className="text-[28px] sm:text-[32px] font-bold text-[#191c1e] leading-tight">
            Settings
          </h1>
          <p className="text-[16px] text-[#3e4a41] mt-2">
            Manage your developer account preferences and security.
          </p>
        </header>

        <SettingsContent />
      </main>
    </div>
  );
}
