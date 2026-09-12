import type { Metadata } from "next";
import { DeveloperSidebarToggle } from "@/components/layout/DeveloperSidebarToggle";
import { SettingsContent } from "./SettingsContent";
import DevHeader from "@/components/dev-portal/DevHeader";

export const metadata: Metadata = {
  title: "Settings — 9jaPrice Dev Portal",
  description: "Manage your developer account preferences and security.",
};

export default function SettingsPage() {
  return (
    <div className="bg-[#f7f9fb] text-on-surface min-h-screen flex font-body-lg antialiased">
      <DeveloperSidebarToggle />

      <main className="lg:ml-0 flex-1 flex flex-col h-full">
        <DevHeader pageTitle="settings" />

        <div className="flex-1 overflow-y-auto p-margin-desktop space-y-lg">
          <div>
            <h1 className="text-[28px] sm:text-[32px] font-bold text-[#191c1e] leading-tight">
              Settings
            </h1>
            <p className="text-[16px] text-[#3e4a41] mt-2">
              Manage your developer account preferences and security.
            </p>
          </div>
          <SettingsContent />
        </div>
      </main>
    </div>
  );
}
