import type { Metadata } from "next";
import { DeveloperSidebarToggle } from "@/components/layout/DeveloperSidebarToggle";
import { ApiKeysContent } from "@/components/shared/ApiKeysContent";
import DevHeader from "@/components/dev-portal/DevHeader";
import DevBreadcrumb from "@/components/dev-portal/DevBreadcrumb";
import DevWrapper from "@/components/dev-portal/DevWrapper";
import DevMain from "@/components/dev-portal/DevMain";

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

      <DevMain>
        <DevHeader pageTitle="API Keys" />
        <DevBreadcrumb currentPage="API Keys" />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-sm space-y-lg min-w-0">
          <ApiKeysContent />
        </div>
      </DevMain>
    </DevWrapper>
  );
}
