import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftRight, BarChart3, TrendingUp, Zap, Star } from "lucide-react";
import { DeveloperSidebarToggle } from "@/components/layout/DeveloperSidebarToggle";
import { DashboardAnalyticsChart } from "@/components/charts/DashboardAnalyticsChart";
import DevHeader from "@/components/dev-portal/DevHeader";
import DevWrapper from "@/components/dev-portal/DevWrapper";
import RecentApiRequestsTable from "@/components/tables/RecentApiRequests";
import DevMain from "@/components/dev-portal/DevMain";

export const metadata: Metadata = {
  title: "Dashboard Overview | 9jaPrice",
  description:
    "Developer Dashboard Overview for 9jaPrice API usage and performance metrics.",
};

export default function DeveloperDashboardPage() {
  return (
    <DevWrapper>
      <DeveloperSidebarToggle />

      {/* Main Content Canvas */}

      <DevMain>
        {/* Header */}
        <DevHeader pageTitle="Dashboard Overview" />
        {/* Scrollable Content */}
        <div className="flex-1 p-margin-mobile space-y-lg ">
          {/* Stat Cards Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest rounded-xl border border-border-subtle p-md flex flex-col hover:shadow-[0px_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-title-md text-body-sm text-on-surface-variant font-medium">
                  API Requests Today
                </h3>
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-baseline gap-2 mt-auto">
                <span className="font-headline-lg text-headline-lg text-on-surface">
                  1,240
                </span>
              </div>
              <div className="mt-2 flex items-center gap-1 text-[#22C55E] font-data-mono text-xs font-medium">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+12.5%</span>
                <span className="text-on-surface-variant/50 ml-1">
                  vs yesterday
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-surface-container-lowest rounded-xl border border-border-subtle p-md flex flex-col hover:shadow-[0px_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-title-md text-body-sm text-on-surface-variant font-medium">
                  Total Requests This Month
                </h3>
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <BarChart3 className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-baseline gap-2 mt-auto">
                <span className="font-headline-lg text-headline-lg text-on-surface">
                  45,600
                </span>
              </div>
              <div className="mt-2 flex items-center gap-1 text-[#22C55E] font-data-mono text-xs font-medium">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+5.2%</span>
                <span className="text-on-surface-variant/50 ml-1">
                  vs last month
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-surface-container-lowest rounded-xl border border-border-subtle p-md flex flex-col hover:shadow-[0px_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-title-md text-body-sm text-on-surface-variant font-medium">
                  Rate Limit
                </h3>
                <div className="w-8 h-8 rounded-full bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B]">
                  <Zap className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-baseline gap-2 mt-auto">
                <span className="font-headline-lg text-headline-lg text-on-surface">
                  85%
                </span>
              </div>
              <div className="w-full bg-surface-container-high rounded-full h-1.5 mt-3">
                <div
                  className="bg-[#F59E0B] h-1.5 rounded-full"
                  style={{ width: "85%" }}
                />
              </div>
              <div className="mt-2 text-on-surface-variant/70 font-data-mono text-xs">
                85,000 / 100,000 reqs
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-surface-container-lowest rounded-xl border border-border-subtle p-md flex flex-col hover:shadow-[0px_4px_12px_rgba(0,0,0,0.05)] transition-shadow relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
              <div className="flex justify-between items-start mb-4 relative z-10">
                <h3 className="font-title-md text-body-sm text-on-surface-variant font-medium">
                  Current Plan
                </h3>
                <div className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant">
                  <Star className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-baseline gap-2 mt-auto relative z-10">
                <span className="font-headline-lg text-[24px] font-bold text-primary">
                  Developer Free
                </span>
              </div>
              <div className="mt-4 relative z-10">
                <Link
                  href="/api-keys"
                  className="w-full bg-[#F1F5F9] text-[#1E293B] font-label-caps text-label-caps uppercase py-2 rounded-lg font-semibold hover:bg-surface-container-highest transition-colors text-center block"
                >
                  Upgrade Plan
                </Link>
              </div>
            </div>
          </div>

          {/* Analytics Chart Section */}
          <DashboardAnalyticsChart />

          {/* Table Section */}

          <RecentApiRequestsTable />
        </div>{" "}
      </DevMain>
    </DevWrapper>
  );
}
