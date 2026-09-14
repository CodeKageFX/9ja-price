import type { Metadata } from "next";
import { DeveloperSidebarToggle } from "@/components/layout/DeveloperSidebarToggle";
import { PlaygroundContent } from "@/app/(dev-portal)/playground/PlaygroundContent";
import DevHeader from "@/components/dev-portal/DevHeader";
import DevBreadcrumb from "@/components/dev-portal/DevBreadcrumb";
import DevWrapper from "@/components/dev-portal/DevWrapper";
import DevMain from "@/components/dev-portal/DevMain";

export const metadata: Metadata = {
  title: "API Playground | 9jaPrice",
  description:
    "Test 9jaPrice API endpoints interactively before integrating into your application.",
};

export default function PlaygroundPage() {
  return (
    <DevWrapper>
      <DeveloperSidebarToggle />

      <DevMain>
        <DevHeader pageTitle="API Playground" />
        <DevBreadcrumb currentPage="API Playground" />

        <div className="flex-1 overflow-y-auto p-sm space-y-lg">
          <PlaygroundContent />
        </div>
      </DevMain>
    </DevWrapper>
  );
}
