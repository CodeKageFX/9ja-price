import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { ArrowRight, Lightbulb, Store } from "lucide-react";
import { CopyButton } from "@/components/code/CopyButton";

export const metadata: Metadata = {
  title: "Markets Endpoint — 9jaPrice Documentation",
  description:
    "Retrieve a list of tracked commodity markets across Nigeria, including geographical metadata and operational status.",
};

const curlExample = `curl -X GET \\
  "https://api.9japrice.com/v1/markets?state=Lagos" \\
  -H "Authorization: Bearer YOUR_API_KEY"`;

const responseSnippet = `{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "mkt_mile12_lag",
      "name": "Mile 12 International Market",
      "type": "wholesale_retail",
      "location": {
        "city": "Ketu",
        "state": "Lagos",
        "region": "South West"
      },
      "status": "active",
      "primary_commodities": [
        "tomatoes",
        "peppers",
        "onions"
      ]
    },
    {
      "id": "mkt_wuse_abj",
      "name": "Wuse Market",
      "type": "retail",
      "location": {
        "city": "Abuja",
        "state": "FCT",
        "region": "North Central"
      },
      "status": "active",
      "primary_commodities": [
        "rice",
        "beans",
        "garri"
      ]
    }
  ]
}`;

export default function DocsMarketsPage() {
  return (
    <div className="flex-1 md:ml-64 flex min-h-screen bg-[#f7f9fb]">
      <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 p-6 md:p-12 pb-24">
        {/* Prose Column */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          <section className="max-w-4xl">
            <div className="mb-8 border-b border-[#e2e8f0] pb-6">
              <h1 className="text-[32px] font-bold text-[#191c1e] mb-2">
                Markets
              </h1>
              <p className="text-[16px] text-[#3e4a41]">
                Retrieve a list of tracked commodity markets across Nigeria,
                including geographical metadata and operational status.
              </p>
            </div>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#006b3f]/10 text-[#006b3f] px-2.5 py-1 rounded text-[12px] font-semibold border border-[#006b3f]/20 uppercase">
                  GET
                </span>
                <code className="font-mono text-[14px] text-[#191c1e] bg-[#eceef0] px-2 py-1 rounded">
                  /v1/markets
                </code>
              </div>
              <p className="text-[16px] text-[#3e4a41] mb-6 leading-relaxed">
                The Markets endpoint provides a catalog of physical marketplaces
                monitored by 9jaPrice. Each market is assigned a unique{" "}
                <code className="font-mono bg-[#eceef0] px-1 py-0.5 rounded text-[14px] text-[#006b3f]">
                  market_id
                </code>{" "}
                which is required when querying specific price observations via the{" "}
                <Link href="/docs/prices" className="text-[#006b3f] hover:underline font-medium">
                  Prices API
                </Link>
                .
              </p>

              <h2 className="text-[20px] font-bold text-[#191c1e] mb-4 mt-8">
                Query Parameters
              </h2>
              <div className="bg-white border border-[#e2e8f0] rounded-lg overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-[#f2f4f6] text-[12px] font-semibold text-[#565e74] uppercase">
                    <tr>
                      <th className="py-3 px-4 border-b border-[#e2e8f0]">
                        Parameter
                      </th>
                      <th className="py-3 px-4 border-b border-[#e2e8f0]">
                        Type
                      </th>
                      <th className="py-3 px-4 border-b border-[#e2e8f0]">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[14px] text-[#191c1e]">
                    <tr className="border-b border-[#e2e8f0] hover:bg-[#f7f9fb] transition-colors">
                      <td className="py-3 px-4 font-mono text-[#006b3f] font-semibold">
                        state
                      </td>
                      <td className="py-3 px-4 text-[#3e4a41]">string</td>
                      <td className="py-3 px-4">
                        Filter markets by Nigerian state (e.g.,{" "}
                        <code className="bg-[#eceef0] px-1 rounded font-mono text-[13px]">
                          Lagos
                        </code>
                        ,{" "}
                        <code className="bg-[#eceef0] px-1 rounded font-mono text-[13px]">
                          Kano
                        </code>
                        ).
                      </td>
                    </tr>
                    <tr className="border-b border-[#e2e8f0] hover:bg-[#f7f9fb] transition-colors">
                      <td className="py-3 px-4 font-mono text-[#006b3f] font-semibold">
                        limit
                      </td>
                      <td className="py-3 px-4 text-[#3e4a41]">integer</td>
                      <td className="py-3 px-4">
                        Maximum number of records to return. Default: 50. Max:
                        100.
                      </td>
                    </tr>
                    <tr className="hover:bg-[#f7f9fb] transition-colors">
                      <td className="py-3 px-4 font-mono text-[#006b3f] font-semibold">
                        status
                      </td>
                      <td className="py-3 px-4 text-[#3e4a41]">string</td>
                      <td className="py-3 px-4">
                        Filter by operational status (
                        <code className="bg-[#eceef0] px-1 rounded font-mono text-[13px]">
                          active
                        </code>
                        ,{" "}
                        <code className="bg-[#eceef0] px-1 rounded font-mono text-[13px]">
                          inactive
                        </code>
                        ).
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-[20px] font-bold text-[#191c1e] mb-4">
                Using Market IDs
              </h2>
              <p className="text-[16px] text-[#3e4a41] mb-4 leading-relaxed">
                Once you have identified the{" "}
                <code className="font-mono bg-[#eceef0] px-1 rounded text-[14px] text-[#006b3f]">
                  market_id
                </code>{" "}
                (e.g.,{" "}
                <code className="font-mono bg-[#eceef0] px-1 rounded text-[14px] text-[#006b3f]">
                  mkt_mile12_lag
                </code>
                ) from this endpoint, you can use it to filter commodity prices in
                the{" "}
                <Link
                  href="/docs/prices"
                  className="text-[#006b3f] font-medium hover:underline inline-flex items-center gap-1"
                >
                  Prices endpoint <ArrowRight className="w-4 h-4" />
                </Link>
                .
              </p>

              <div className="bg-[#f2f4f6] p-4 rounded-lg border border-[#e2e8f0] flex gap-4 items-start shadow-sm">
                <Lightbulb className="w-5 h-5 text-[#006b3f] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[14px] font-semibold text-[#191c1e] mb-1">
                    Pro Tip: Market Coverage
                  </p>
                  <p className="text-[14px] text-[#3e4a41] leading-relaxed">
                    Currently, major markets like Wuse (Abuja), Mile 12 (Lagos),
                    and Dawanau (Kano) have daily observation updates. Regional
                    markets report bi-weekly.
                  </p>
                </div>
              </div>
            </section>
          </section>
        </div>

        {/* Code Column (Right Sticky) */}
        <div className="lg:col-span-5 flex flex-col gap-6 sticky top-6 self-start">
          {/* Request Example */}
          <div className="bg-[#0f172a] rounded-xl overflow-hidden border border-[#e2e8f0] shadow-sm">
            <div className="flex justify-between items-center bg-[#1e293b] px-4 py-2.5 border-b border-[#334155]">
              <span className="text-[12px] font-semibold text-[#8df8b7] uppercase tracking-wider">
                Request Example
              </span>
              <CopyButton text={curlExample} className="text-[#8b949e] hover:text-white" />
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-[13px] font-mono text-[#bec6e0] leading-relaxed">
                {curlExample}
              </pre>
            </div>
          </div>

          {/* Response Example */}
          <div className="bg-[#0f172a] rounded-xl overflow-hidden border border-[#e2e8f0] shadow-sm">
            <div className="flex justify-between items-center bg-[#1e293b] px-4 py-2.5 border-b border-[#334155]">
              <span className="text-[12px] font-semibold text-[#22c55e] flex items-center gap-2 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                200 OK
              </span>
              <CopyButton text={responseSnippet} className="text-[#8b949e] hover:text-white" />
            </div>
            <div className="p-4 overflow-x-auto max-h-[450px]">
              <pre className="text-[13px] font-mono text-[#bec6e0] leading-relaxed">
                {responseSnippet}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
