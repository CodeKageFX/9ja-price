import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import {
  Bell,
  ArrowLeftRight,
  BarChart3,
  TrendingUp,
  Zap,
  Star,
  ArrowRight,
} from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { DashboardAnalyticsChart } from "@/components/charts/DashboardAnalyticsChart";

export const metadata: Metadata = {
  title: "Dashboard Overview | 9jaPrice",
  description: "Developer Dashboard Overview for 9jaPrice API usage and performance metrics.",
};

export default function DeveloperDashboardPage() {
  return (
    <div className="bg-[#F8FAFC] text-on-surface min-h-screen flex font-body-lg antialiased">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Canvas */}
      <main className="lg:ml-0 flex-1 flex flex-col h-full bg-[#F8FAFC]">
        {/* Header */}
        <header className="h-20 bg-surface-container-lowest border-b border-[#E2E8F0] px-margin-desktop flex items-center justify-between shrink-0 sticky top-0 z-30">
          <div>
            <h2 className="font-headline-lg text-title-md text-on-surface">Dashboard Overview</h2>
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
          {/* Stat Cards Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest rounded-xl border border-[#E2E8F0] p-md flex flex-col hover:shadow-[0px_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-title-md text-body-sm text-on-surface-variant font-medium">
                  API Requests Today
                </h3>
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-baseline gap-2 mt-auto">
                <span className="font-headline-lg text-headline-lg text-on-surface">1,240</span>
              </div>
              <div className="mt-2 flex items-center gap-1 text-[#22C55E] font-data-mono text-xs font-medium">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+12.5%</span>
                <span className="text-on-surface-variant/50 ml-1">vs yesterday</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-surface-container-lowest rounded-xl border border-[#E2E8F0] p-md flex flex-col hover:shadow-[0px_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-title-md text-body-sm text-on-surface-variant font-medium">
                  Total Requests This Month
                </h3>
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <BarChart3 className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-baseline gap-2 mt-auto">
                <span className="font-headline-lg text-headline-lg text-on-surface">45,600</span>
              </div>
              <div className="mt-2 flex items-center gap-1 text-[#22C55E] font-data-mono text-xs font-medium">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+5.2%</span>
                <span className="text-on-surface-variant/50 ml-1">vs last month</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-surface-container-lowest rounded-xl border border-[#E2E8F0] p-md flex flex-col hover:shadow-[0px_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-title-md text-body-sm text-on-surface-variant font-medium">
                  Rate Limit
                </h3>
                <div className="w-8 h-8 rounded-full bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B]">
                  <Zap className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-baseline gap-2 mt-auto">
                <span className="font-headline-lg text-headline-lg text-on-surface">85%</span>
              </div>
              <div className="w-full bg-surface-container-high rounded-full h-1.5 mt-3">
                <div className="bg-[#F59E0B] h-1.5 rounded-full" style={{ width: "85%" }} />
              </div>
              <div className="mt-2 text-on-surface-variant/70 font-data-mono text-xs">
                85,000 / 100,000 reqs
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-surface-container-lowest rounded-xl border border-[#E2E8F0] p-md flex flex-col hover:shadow-[0px_4px_12px_rgba(0,0,0,0.05)] transition-shadow relative overflow-hidden">
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
          <div className="bg-surface-container-lowest rounded-xl border border-[#E2E8F0] overflow-hidden">
            <div className="p-md border-b border-[#E2E8F0] flex justify-between items-center bg-white">
              <h3 className="font-title-md text-title-md text-on-surface">Recent API Requests</h3>
              <Link
                href="/playground"
                className="text-primary font-label-caps text-label-caps uppercase hover:underline flex items-center gap-1"
              >
                View Logs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F1F5F9] border-b border-[#E2E8F0]">
                    <th className="py-3 px-md font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
                      Timestamp
                    </th>
                    <th className="py-3 px-md font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
                      Endpoint
                    </th>
                    <th className="py-3 px-md font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
                      Method
                    </th>
                    <th className="py-3 px-md font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
                      Status
                    </th>
                    <th className="py-3 px-md font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider text-right">
                      Response Time
                    </th>
                  </tr>
                </thead>
                <tbody className="font-data-mono text-data-mono">
                  <tr className="bg-white border-b border-[#F1F5F9] hover:bg-surface-container-lowest/50 transition-colors">
                    <td className="py-3 px-md text-on-surface-variant">2026-08-18 14:32:01</td>
                    <td className="py-3 px-md text-on-surface">/v1/prices/maize</td>
                    <td className="py-3 px-md">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E0F2FE] text-[#0284C7]">
                        GET
                      </span>
                    </td>
                    <td className="py-3 px-md">
                      <span className="flex items-center gap-1.5 text-[#22C55E]">
                        <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                        200 OK
                      </span>
                    </td>
                    <td className="py-3 px-md text-right text-on-surface-variant">120ms</td>
                  </tr>
                  <tr className="bg-white border-b border-[#F1F5F9] hover:bg-surface-container-lowest/50 transition-colors">
                    <td className="py-3 px-md text-on-surface-variant">2026-08-18 14:31:45</td>
                    <td className="py-3 px-md text-on-surface">/v1/logistics/routes</td>
                    <td className="py-3 px-md">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E0F2FE] text-[#0284C7]">
                        GET
                      </span>
                    </td>
                    <td className="py-3 px-md">
                      <span className="flex items-center gap-1.5 text-[#22C55E]">
                        <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                        200 OK
                      </span>
                    </td>
                    <td className="py-3 px-md text-right text-on-surface-variant">145ms</td>
                  </tr>
                  <tr className="bg-white border-b border-[#F1F5F9] hover:bg-surface-container-lowest/50 transition-colors">
                    <td className="py-3 px-md text-on-surface-variant">2026-08-18 14:28:10</td>
                    <td className="py-3 px-md text-on-surface">/v1/prices/invalid_crop</td>
                    <td className="py-3 px-md">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E0F2FE] text-[#0284C7]">
                        GET
                      </span>
                    </td>
                    <td className="py-3 px-md">
                      <span className="flex items-center gap-1.5 text-[#EF4444]">
                        <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                        404 Not Found
                      </span>
                    </td>
                    <td className="py-3 px-md text-right text-on-surface-variant">85ms</td>
                  </tr>
                  <tr className="bg-white hover:bg-surface-container-lowest/50 transition-colors">
                    <td className="py-3 px-md text-on-surface-variant">2026-08-18 14:25:33</td>
                    <td className="py-3 px-md text-on-surface">/v1/user/keys</td>
                    <td className="py-3 px-md">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#DCFCE7] text-[#166534]">
                        POST
                      </span>
                    </td>
                    <td className="py-3 px-md">
                      <span className="flex items-center gap-1.5 text-[#22C55E]">
                        <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                        201 Created
                      </span>
                    </td>
                    <td className="py-3 px-md text-right text-on-surface-variant">210ms</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
