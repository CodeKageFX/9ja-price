"use client";

import { useState } from "react";
import { TrendingUp, TrendingDown, CheckCircle2, AlertCircle } from "lucide-react";

export function UsageContent() {
  const [timeRange, setTimeRange] = useState<"7D" | "30D" | "90D">("30D");

  return (
    <>
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 border-b border-[#e2e8f0] pb-6 gap-4">
        <div>
          <h1 className="text-[28px] sm:text-[32px] font-bold text-[#191c1e] leading-tight">
            API Usage
          </h1>
          <p className="text-[14px] text-[#3e4a41] mt-2">
            Monitor your request volume, error rates, and endpoint performance.
          </p>
        </div>
        <div className="flex gap-4">
          <select className="bg-white border border-[#e2e8f0] rounded-lg px-4 py-2 text-[14px] text-[#191c1e] focus:border-[#006b3f] focus:ring-1 focus:ring-[#006b3f] outline-none shadow-sm">
            <option>Production Env</option>
            <option>Sandbox Env</option>
          </select>
          <select className="bg-white border border-[#e2e8f0] rounded-lg px-4 py-2 text-[14px] text-[#191c1e] focus:border-[#006b3f] focus:ring-1 focus:ring-[#006b3f] outline-none shadow-sm">
            <option>Last 30 Days</option>
            <option>Last 7 Days</option>
            <option>Last 90 Days</option>
          </select>
        </div>
      </header>

      {/* Stat Cards */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white border border-[#e2e8f0] rounded-xl p-6 shadow-[0px_4px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between">
          <h3 className="text-[12px] font-semibold text-[#565e74] uppercase tracking-wider mb-4">
            Requests Today
          </h3>
          <div className="flex items-end justify-between">
            <span className="text-[32px] font-bold text-[#191c1e] leading-none">
              12,408
            </span>
            <span className="font-mono text-[14px] text-[#22c55e] flex items-center bg-[#22c55e]/10 px-2 py-1 rounded">
              <TrendingUp className="w-3.5 h-3.5 mr-1" /> 8.4%
            </span>
          </div>
        </div>

        <div className="bg-white border border-[#e2e8f0] rounded-xl p-6 shadow-[0px_4px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between">
          <h3 className="text-[12px] font-semibold text-[#565e74] uppercase tracking-wider mb-4">
            Requests This Month
          </h3>
          <div className="flex items-end justify-between">
            <span className="text-[32px] font-bold text-[#191c1e] leading-none">
              342.1k
            </span>
            <span className="font-mono text-[14px] text-[#22c55e] flex items-center bg-[#22c55e]/10 px-2 py-1 rounded">
              <TrendingUp className="w-3.5 h-3.5 mr-1" /> 12.1%
            </span>
          </div>
        </div>

        <div className="bg-white border border-[#e2e8f0] rounded-xl p-6 shadow-[0px_4px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between">
          <h3 className="text-[12px] font-semibold text-[#565e74] uppercase tracking-wider mb-4">
            Successful Requests
          </h3>
          <div className="flex items-end justify-between">
            <span className="text-[32px] font-bold text-[#191c1e] leading-none">
              99.8%
            </span>
            <span className="font-mono text-[14px] text-[#3e4a41]">
              Target: 99.9%
            </span>
          </div>
        </div>

        <div className="bg-white border border-[#e2e8f0] rounded-xl p-6 shadow-[0px_4px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between">
          <h3 className="text-[12px] font-semibold text-[#565e74] uppercase tracking-wider mb-4">
            Failed Requests
          </h3>
          <div className="flex items-end justify-between">
            <span className="text-[32px] font-bold text-[#ef4444] leading-none">
              0.2%
            </span>
            <span className="font-mono text-[14px] text-[#ef4444] flex items-center bg-[#ef4444]/10 px-2 py-1 rounded">
              684 errors
            </span>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section className="bg-white border border-[#e2e8f0] rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.02)] mb-10 overflow-hidden">
        <div className="px-6 py-5 border-b border-[#e2e8f0] flex justify-between items-center bg-[#f7f9fb]">
          <h3 className="text-[20px] font-bold text-[#191c1e]">
            API Requests Overview
          </h3>
          <div className="flex gap-2">
            {(["7D", "30D", "90D"] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`text-[12px] font-semibold px-3 py-1 rounded transition-colors ${
                  timeRange === range
                    ? "bg-[#eceef0] text-[#191c1e] shadow-sm"
                    : "text-[#3e4a41] hover:text-[#006b3f]"
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 h-72 flex items-end justify-between gap-1">
          <div className="w-full bg-[#f2f4f6] h-full relative border-b border-[#e2e8f0] flex items-end pb-1 gap-1 px-2">
            <div className="w-full bg-[#006b3f]/20 hover:bg-[#006b3f]/40 transition-colors rounded-t-sm h-[30%]" title="Oct 1: 8k" />
            <div className="w-full bg-[#006b3f]/20 hover:bg-[#006b3f]/40 transition-colors rounded-t-sm h-[35%]" title="Oct 2: 9k" />
            <div className="w-full bg-[#006b3f]/20 hover:bg-[#006b3f]/40 transition-colors rounded-t-sm h-[40%]" title="Oct 3: 10k" />
            <div className="w-full bg-[#006b3f]/20 hover:bg-[#006b3f]/40 transition-colors rounded-t-sm h-[38%]" title="Oct 4: 9.5k" />
            <div className="w-full bg-[#006b3f]/20 hover:bg-[#006b3f]/40 transition-colors rounded-t-sm h-[45%]" title="Oct 5: 11k" />
            <div className="w-full bg-[#006b3f]/20 hover:bg-[#006b3f]/40 transition-colors rounded-t-sm h-[50%]" title="Oct 6: 12k" />
            <div className="w-full bg-[#006b3f]/20 hover:bg-[#006b3f]/40 transition-colors rounded-t-sm h-[48%]" title="Oct 7: 11.5k" />
            <div className="w-full bg-[#006b3f]/20 hover:bg-[#006b3f]/40 transition-colors rounded-t-sm h-[55%]" title="Oct 8: 13k" />
            <div className="w-full bg-[#006b3f]/20 hover:bg-[#006b3f]/40 transition-colors rounded-t-sm h-[60%]" title="Oct 9: 14k" />
            <div className="w-full bg-[#006b3f]/20 hover:bg-[#006b3f]/40 transition-colors rounded-t-sm h-[58%]" title="Oct 10: 13.5k" />
            <div className="w-full bg-[#006b3f]/20 hover:bg-[#006b3f]/40 transition-colors rounded-t-sm h-[65%]" title="Oct 11: 15k" />
            <div className="w-full bg-[#006b3f]/20 hover:bg-[#006b3f]/40 transition-colors rounded-t-sm h-[70%]" title="Oct 12: 16k" />
            <div className="w-full bg-[#006b3f]/20 hover:bg-[#006b3f]/40 transition-colors rounded-t-sm h-[68%]" title="Oct 13: 15.5k" />
            <div className="w-full bg-[#006b3f]/20 hover:bg-[#006b3f]/40 transition-colors rounded-t-sm h-[75%]" title="Oct 14: 17k" />
            <div className="w-full bg-[#006b3f]/20 hover:bg-[#006b3f]/40 transition-colors rounded-t-sm h-[80%]" title="Oct 15: 18k" />
            <div className="w-full bg-[#006b3f]/20 hover:bg-[#006b3f]/40 transition-colors rounded-t-sm h-[78%]" title="Oct 16: 17.5k" />
            <div className="w-full bg-[#006b3f]/20 hover:bg-[#006b3f]/40 transition-colors rounded-t-sm h-[85%]" title="Oct 17: 19k" />
            <div className="w-full bg-[#006b3f]/20 hover:bg-[#006b3f]/40 transition-colors rounded-t-sm h-[90%]" title="Oct 18: 20k" />
            <div className="w-full bg-[#006b3f]/20 hover:bg-[#006b3f]/40 transition-colors rounded-t-sm h-[88%]" title="Oct 19: 19.5k" />
            <div className="w-full bg-[#006b3f]/20 hover:bg-[#006b3f]/40 transition-colors rounded-t-sm h-[95%]" title="Oct 20: 21k" />
            <div className="w-full bg-[#008751] rounded-t-sm h-[100%] shadow-[0_0_10px_rgba(0,135,81,0.3)]" title="Oct 21: 22k" />
          </div>
        </div>
        <div className="px-6 pb-4 flex justify-between font-mono text-[11px] text-[#3e4a41]">
          <span>Oct 01</span>
          <span>Oct 11</span>
          <span>Oct 21</span>
        </div>
      </section>

      {/* Side-by-side Tables */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-10">
        {/* Endpoint Breakdown */}
        <section className="bg-white border border-[#e2e8f0] rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.02)] overflow-hidden">
          <div className="px-6 py-5 border-b border-[#e2e8f0] bg-[#f7f9fb]">
            <h3 className="text-[20px] font-bold text-[#191c1e]">
              Endpoint Breakdown
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f2f4f6] text-[12px] font-semibold text-[#565e74] uppercase">
                  <th className="py-3 px-6 border-b border-[#e2e8f0]">Endpoint</th>
                  <th className="py-3 px-6 border-b border-[#e2e8f0] text-right">Requests</th>
                  <th className="py-3 px-6 border-b border-[#e2e8f0] text-right">Success</th>
                  <th className="py-3 px-6 border-b border-[#e2e8f0] text-right">Avg Resp</th>
                </tr>
              </thead>
              <tbody className="font-mono text-[14px] text-[#191c1e]">
                <tr className="border-b border-[#e2e8f0] hover:bg-[#f7f9fb] transition-colors">
                  <td className="py-4 px-6 text-[#006b3f] font-semibold">/v1/prices/garri</td>
                  <td className="py-4 px-6 text-right">142,501</td>
                  <td className="py-4 px-6 text-right text-[#22c55e]">99.9%</td>
                  <td className="py-4 px-6 text-right">42ms</td>
                </tr>
                <tr className="border-b border-[#e2e8f0] hover:bg-[#f7f9fb] transition-colors">
                  <td className="py-4 px-6 text-[#006b3f] font-semibold">/v1/markets/lagos/mile12</td>
                  <td className="py-4 px-6 text-right">89,204</td>
                  <td className="py-4 px-6 text-right text-[#22c55e]">99.8%</td>
                  <td className="py-4 px-6 text-right">58ms</td>
                </tr>
                <tr className="border-b border-[#e2e8f0] hover:bg-[#f7f9fb] transition-colors">
                  <td className="py-4 px-6 text-[#006b3f] font-semibold">/v1/prices/rice/ofada</td>
                  <td className="py-4 px-6 text-right">65,112</td>
                  <td className="py-4 px-6 text-right text-[#22c55e]">99.7%</td>
                  <td className="py-4 px-6 text-right">45ms</td>
                </tr>
                <tr className="border-b border-[#e2e8f0] hover:bg-[#f7f9fb] transition-colors">
                  <td className="py-4 px-6 text-[#006b3f] font-semibold">/v1/logistics/routes</td>
                  <td className="py-4 px-6 text-right">24,890</td>
                  <td className="py-4 px-6 text-right text-[#ef4444]">98.2%</td>
                  <td className="py-4 px-6 text-right">120ms</td>
                </tr>
                <tr className="hover:bg-[#f7f9fb] transition-colors">
                  <td className="py-4 px-6 text-[#006b3f] font-semibold">/v1/auth/token</td>
                  <td className="py-4 px-6 text-right">20,388</td>
                  <td className="py-4 px-6 text-right text-[#22c55e]">100%</td>
                  <td className="py-4 px-6 text-right">28ms</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Recent Requests */}
        <section className="bg-white border border-[#e2e8f0] rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.02)] overflow-hidden">
          <div className="px-6 py-5 border-b border-[#e2e8f0] bg-[#f7f9fb]">
            <h3 className="text-[20px] font-bold text-[#191c1e]">
              Recent Requests
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f2f4f6] text-[12px] font-semibold text-[#565e74] uppercase">
                  <th className="py-3 px-6 border-b border-[#e2e8f0]">Timestamp</th>
                  <th className="py-3 px-6 border-b border-[#e2e8f0]">Endpoint</th>
                  <th className="py-3 px-6 border-b border-[#e2e8f0]">Status</th>
                  <th className="py-3 px-6 border-b border-[#e2e8f0] text-right">Time</th>
                </tr>
              </thead>
              <tbody className="font-mono text-[14px] text-[#191c1e]">
                <tr className="border-b border-[#e2e8f0] hover:bg-[#f7f9fb] transition-colors">
                  <td className="py-4 px-6 text-[#3e4a41] text-[13px]">14:23:05.112</td>
                  <td className="py-4 px-6 truncate max-w-[150px]">/v1/prices/garri</td>
                  <td className="py-4 px-6">
                    <span className="bg-[#22c55e]/10 text-[#22c55e] px-2 py-0.5 rounded text-[12px] font-semibold">
                      200 OK
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right text-[#3e4a41]">41ms</td>
                </tr>
                <tr className="border-b border-[#e2e8f0] hover:bg-[#f7f9fb] transition-colors">
                  <td className="py-4 px-6 text-[#3e4a41] text-[13px]">14:23:04.980</td>
                  <td className="py-4 px-6 truncate max-w-[150px]">/v1/markets/abuja/wuse</td>
                  <td className="py-4 px-6">
                    <span className="bg-[#22c55e]/10 text-[#22c55e] px-2 py-0.5 rounded text-[12px] font-semibold">
                      200 OK
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right text-[#3e4a41]">62ms</td>
                </tr>
                <tr className="border-b border-[#e2e8f0] hover:bg-[#f7f9fb] transition-colors">
                  <td className="py-4 px-6 text-[#3e4a41] text-[13px]">14:23:04.450</td>
                  <td className="py-4 px-6 truncate max-w-[150px]">/v1/prices/tomatoes</td>
                  <td className="py-4 px-6">
                    <span className="bg-[#ef4444]/10 text-[#ef4444] px-2 py-0.5 rounded text-[12px] font-semibold">
                      429 RATE
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right text-[#3e4a41]">12ms</td>
                </tr>
                <tr className="border-b border-[#e2e8f0] hover:bg-[#f7f9fb] transition-colors">
                  <td className="py-4 px-6 text-[#3e4a41] text-[13px]">14:23:02.100</td>
                  <td className="py-4 px-6 truncate max-w-[150px]">/v1/prices/rice/ofada</td>
                  <td className="py-4 px-6">
                    <span className="bg-[#22c55e]/10 text-[#22c55e] px-2 py-0.5 rounded text-[12px] font-semibold">
                      200 OK
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right text-[#3e4a41]">44ms</td>
                </tr>
                <tr className="hover:bg-[#f7f9fb] transition-colors">
                  <td className="py-4 px-6 text-[#3e4a41] text-[13px]">14:22:59.882</td>
                  <td className="py-4 px-6 truncate max-w-[150px]">/v1/auth/token</td>
                  <td className="py-4 px-6">
                    <span className="bg-[#565e74]/10 text-[#565e74] px-2 py-0.5 rounded text-[12px] font-semibold">
                      201 CREATED
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right text-[#3e4a41]">89ms</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}
