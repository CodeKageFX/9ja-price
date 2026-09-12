import type { Metadata } from "next";
import { DeveloperSidebarToggle } from "@/components/layout/DeveloperSidebarToggle";
import { ApiKeysContent } from "@/components/shared/ApiKeysContent";
import DevHeader from "@/components/dev-portal/DevHeader";
import DevWrapper from "@/components/dev-portal/DevWrapper";

export const metadata: Metadata = {
  title: "API Keys | 9jaPrice",
  description:
    "Manage your authentication tokens for the Market Intelligence Portal.",
};

export default function ApiKeysPage() {
  return (
    <DevWrapper>
      <DeveloperSidebarToggle />

      {/* Main Content Canvas */}
      <main className="lg:ml-0 flex-1 flex flex-col h-full">
        <DevHeader pageTitle="API Keys" />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-margin-desktop space-y-lg">
          <ApiKeysContent />
        </div>
      </main>
    </DevWrapper>
  );
}
