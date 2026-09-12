import type { Metadata } from "next";
import React from "react";
import { DeveloperSidebarToggle } from "@/components/layout/DeveloperSidebarToggle";
import { PlaygroundContent } from "@/components/shared/PlaygroundContent";
import DevHeader from "@/components/dev-portal/DevHeader";
import DevWrapper from "@/components/dev-portal/DevWrapper";

export const metadata: Metadata = {
  title: "API Playground | 9jaPrice",
  description:
    "Test 9jaPrice API endpoints interactively before integrating into your application.",
};

export default function PlaygroundPage() {
  return (
    <DevWrapper>
      <DeveloperSidebarToggle />

      {/* Main Content Canvas — full viewport height, flex column */}
      <main className="lg:ml-0 flex-1 flex flex-col h-full">
        <DevHeader pageTitle="API Playground" />

        <div className="flex-1 overflow-y-auto p-margin-desktop space-y-lg">
          <PlaygroundContent />
        </div>
      </main>
    </DevWrapper>
  );
}
