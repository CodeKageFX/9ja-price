import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { ArrowRight, Utensils } from "lucide-react";
import { CopyButton } from "@/components/code/CopyButton";

export const metadata: Metadata = {
  title: "Foods API — 9jaPrice Documentation",
  description:
    "Retrieve the catalog of tracked food commodities in Nigeria, including category classifications, standardized measurement units, and commodity IDs.",
};

const curlExample = `curl -X GET \\
  "https://api.9japrice.com/v1/foods?category=grains" \\
  -H "Authorization: Bearer YOUR_API_KEY"`;

const responseSnippet = `{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "food_rice_local",
      "name": "Local Rice (Ofada)",
      "category": "Grains & Cereals",
      "canonical_unit": "50kg bag",
      "alternative_units": ["1kg", "bag"],
      "status": "active"
    },
    {
      "id": "food_beans_brown",
      "name": "Brown Beans (Oloyin)",
      "category": "Legumes",
      "canonical_unit": "100kg bag",
      "alternative_units": ["1kg", "muduka", "bag"],
      "status": "active"
    },
    {
      "id": "food_garri_white",
      "name": "White Garri",
      "category": "Tubers & Derivatives",
      "canonical_unit": "50kg bag",
      "alternative_units": ["1kg", "paint rubber", "bag"],
      "status": "active"
    }
  ]
}`;

export default function DocsFoodsPage() {
  return (
    <div className="flex-1 md:ml-64 flex min-h-screen bg-[#f7f9fb]">
      <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 p-6 md:p-12 pb-24">
        {/* Prose Column */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          <section className="max-w-4xl">
            <div className="mb-8 border-b border-[#e2e8f0] pb-6">
              <h1 className="text-[32px] font-bold text-[#191c1e] mb-2 flex items-center gap-3">
                <Utensils className="w-8 h-8 text-[#006b3f]" />
                Foods API
              </h1>
              <p className="text-[16px] text-[#3e4a41]">
                Retrieve the master catalog of tracked food commodities in Nigeria,
                including category classifications, standardized measurement units, and
                commodity IDs.
              </p>
            </div>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#006b3f]/10 text-[#006b3f] px-2.5 py-1 rounded text-[12px] font-semibold border border-[#006b3f]/20 uppercase">
                  GET
                </span>
                <code className="font-mono text-[14px] text-[#191c1e] bg-[#eceef0] px-2 py-1 rounded">
                  /v1/foods
                </code>
              </div>
              <p className="text-[16px] text-[#3e4a41] mb-6 leading-relaxed">
                The Foods endpoint provides standardized metadata for all agricultural
                and staple food commodities tracked by 9jaPrice. Use the returned{" "}
                <code className="font-mono bg-[#eceef0] px-1 py-0.5 rounded text-[14px] text-[#006b3f]">
                  food_id
                </code>{" "}
                or slug to query specific price trends via the{" "}
                <Link
                  href="/docs/prices"
                  className="text-[#006b3f] hover:underline font-medium"
                >
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
                        category
                      </td>
                      <td className="py-3 px-4 text-[#3e4a41]">string</td>
                      <td className="py-3 px-4">
                        Filter by food category (e.g.,{" "}
                        <code className="bg-[#eceef0] px-1 rounded font-mono text-[13px]">
                          grains
                        </code>
                        ,{" "}
                        <code className="bg-[#eceef0] px-1 rounded font-mono text-[13px]">
                          tubers
                        </code>
                        ,{" "}
                        <code className="bg-[#eceef0] px-1 rounded font-mono text-[13px]">
                          vegetables
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
                        Maximum number of items to return. Default: 50. Max: 100.
                      </td>
                    </tr>
                    <tr className="hover:bg-[#f7f9fb] transition-colors">
                      <td className="py-3 px-4 font-mono text-[#006b3f] font-semibold">
                        status
                      </td>
                      <td className="py-3 px-4 text-[#3e4a41]">string</td>
                      <td className="py-3 px-4">
                        Operational status (
                        <code className="bg-[#eceef0] px-1 rounded font-mono text-[13px]">
                          active
                        </code>
                        ,{" "}
                        <code className="bg-[#eceef0] px-1 rounded font-mono text-[13px]">
                          deprecated
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
                Next Steps
              </h2>
              <p className="text-[16px] text-[#3e4a41] mb-6 leading-relaxed">
                Query commodity price observations using food IDs in the{" "}
                <Link
                  href="/docs/prices"
                  className="text-[#006b3f] font-medium hover:underline inline-flex items-center gap-1"
                >
                  Prices API <ArrowRight className="w-4 h-4" />
                </Link>
              </p>
            </section>
          </section>
        </div>

        {/* Code Column (Right Sticky) */}
        <div className="lg:col-span-5 flex flex-col gap-6 sticky top-6 self-start">
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
