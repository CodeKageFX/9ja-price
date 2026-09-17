import type { Metadata } from "next";
import { DeveloperSidebarToggle } from "@/components/layout/DeveloperSidebarToggle";
import { SettingsContent } from "./SettingsContent";
import DevHeader from "@/components/dev-portal/DevHeader";
import DevBreadcrumb from "@/components/dev-portal/DevBreadcrumb";
import DevWrapper from "@/components/dev-portal/DevWrapper";
import DevMain from "@/components/dev-portal/DevMain";

export const metadata: Metadata = {
  title: "Settings — 9jaPrice Dev Portal",
  description: "Manage your developer account preferences and security.",
};

export default function SettingsPage() {
  return (
    <DevWrapper>
      <DeveloperSidebarToggle />

      <DevMain>
        <DevHeader pageTitle="settings" />
        <DevBreadcrumb currentPage="Settings" />

        <div className="flex-1 overflow-y-auto p-sm space-y-lg">
          <div>
            <h1 className="text-[28px] sm:text-[32px] font-bold text-on-background leading-tight">
              Settings
            </h1>
            <p className="text-[16px] text-on-surface-variant mt-2">
              Manage your developer account preferences and security.
            </p>
          </div>

          <SettingsContent />
        </div>
      </DevMain>
    </DevWrapper>
  );
}
