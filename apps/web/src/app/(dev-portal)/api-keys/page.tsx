import type { Metadata } from "next";
import React from "react";
import { Bell } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { ApiKeysContent } from "@/components/shared/ApiKeysContent";

export const metadata: Metadata = {
  title: "API Keys | 9jaPrice",
  description: "Manage your authentication tokens for the Market Intelligence Portal.",
};

export default function ApiKeysPage() {
  return (
    <div className="bg-[#F8FAFC] text-on-surface min-h-screen flex font-body-lg antialiased">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Canvas */}
      <main className="lg:ml-0 flex-1 flex flex-col h-full bg-[#F8FAFC]">
        {/* Header */}
        <header className="h-20 bg-surface-container-lowest border-b border-[#E2E8F0] px-margin-desktop flex items-center justify-between shrink-0 sticky top-0 z-30">
          <div>
            <h2 className="font-headline-lg text-title-md text-on-surface">API Keys</h2>
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

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-margin-desktop space-y-lg">
          <ApiKeysContent />
        </div>
      </main>
    </div>
  );
}
