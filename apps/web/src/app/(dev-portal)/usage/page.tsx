import type { Metadata } from "next";
import React from "react";
import { DeveloperSidebarToggle } from "@/components/layout/DeveloperSidebarToggle";
import { UsageContent } from "./UsageContent";
import DevHeader from "@/components/dev-portal/DevHeader";

export const metadata: Metadata = {
  title: "API Usage — 9jaPrice Dev Portal",
  description:
    "Monitor your request volume, error rates, and endpoint performance.",
};

export default function UsagePage() {
  return (
    <div className="bg-[#f7f9fb] text-on-surface min-h-screen flex font-body-lg antialiased">
      <DeveloperSidebarToggle />

      <main className="lg:ml-0 flex-1 flex flex-col h-full">
        <DevHeader pageTitle="API Usage" />

        <div className="flex-1 overflow-y-auto p-margin-desktop space-y-lg">
          <UsageContent />
        </div>
      </main>
    </div>
  );
}
