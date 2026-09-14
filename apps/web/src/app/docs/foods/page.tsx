import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Utensils } from "lucide-react";
import { CopyButton } from "@/components/code/CopyButton";
import DocsHeader from "@/components/docs/DocsHeader";
import DocsContainer from "@/components/docs/DocsContainer";
import { FoodQueryParametersTable } from "@/components/tables/FoodQueryParametersTable";

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
    <>
      <DocsHeader pageTitle="Foods API" />

      <DocsContainer>
        {/* Prose Column */}

        <section className="min-w-0">
          <div className="mb-8 border-b border-border-subtle pb-6">
            <h1 className="text-[32px] font-bold text-[#191c1e] mb-2 flex items-center gap-3">
              <Utensils className="w-8 h-8 text-primary" />
              Foods API
            </h1>
            <p className="text-[16px] text-on-surface-variant">
              Retrieve the master catalog of tracked food commodities in
              Nigeria, including category classifications, standardized
              measurement units, and commodity IDs.
            </p>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary/10 text-primary px-2.5 py-1 rounded text-[12px] font-semibold border border-primary/20 uppercase">
                GET
              </span>
              <code className="font-mono text-[14px] text-[#191c1e] bg-surface-container px-2 py-1 rounded">
                /v1/foods
              </code>
            </div>
            <p className="text-[16px] text-on-surface-variant mb-6 leading-relaxed">
              The Foods endpoint provides standardized metadata for all
              agricultural and staple food commodities tracked by 9jaPrice. Use
              the returned{" "}
              <code className="font-mono bg-surface-container px-1 py-0.5 rounded text-[14px] text-primary">
                food_id
              </code>{" "}
              or slug to query specific price trends via the{" "}
              <Link
                href="/docs/prices"
                className="text-primary hover:underline font-medium"
              >
                Prices API
              </Link>
              .
            </p>

            <h2 className="text-[20px] font-bold text-[#191c1e] mb-4 mt-8">
              Query Parameters
            </h2>
            <FoodQueryParametersTable />
          </div>

          <div className="mb-12">
            <h2 className="text-[20px] font-bold text-[#191c1e] mb-4">
              Next Steps
            </h2>
            <p className="text-[16px] text-on-surface-variant mb-6 leading-relaxed">
              Query commodity price observations using food IDs in the{" "}
              <Link
                href="/docs/prices"
                className="text-primary font-medium hover:underline inline-flex items-center gap-1"
              >
                Prices API <ArrowRight className="w-4 h-4" />
              </Link>
            </p>
          </div>
        </section>

        {/* Code Column (Right Sticky) */}
        <div className="lg:sticky top-22 min-w-0">
          <div className=" flex flex-col gap-6">
            <div className="bg-[#0f172a] rounded-xl overflow-hidden border border-border-subtle shadow-sm">
              <div className="flex justify-between items-center bg-[#1e293b] px-4 py-2.5 border-b border-[#334155]">
                <span className="text-[12px] font-semibold text-primary-fixed uppercase tracking-wider">
                  Request Example
                </span>
                <CopyButton
                  text={curlExample}
                  className="text-[#8b949e] hover:text-white"
                />
              </div>
              <div className="p-4 overflow-x-auto">
                <pre className="text-[13px] font-mono text-secondary-fixed-dim leading-relaxed">
                  {curlExample}
                </pre>
              </div>
            </div>

            <div className="bg-[#0f172a] rounded-xl overflow-hidden border border-border-subtle shadow-sm">
              <div className="flex justify-between items-center bg-[#1e293b] px-4 py-2.5 border-b border-[#334155]">
                <span className="text-[12px] font-semibold text-[#22c55e] flex items-center gap-2 uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  200 OK
                </span>
                <CopyButton
                  text={responseSnippet}
                  className="text-[#8b949e] hover:text-white"
                />
              </div>
              <div className="p-4 overflow-x-auto max-h-112.5">
                <pre className="text-[13px] font-mono text-secondary-fixed-dim leading-relaxed">
                  {responseSnippet}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </DocsContainer>
    </>
  );
}
