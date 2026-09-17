import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Play, Copy } from "lucide-react";
import DocsHeader from "@/components/docs/DocsHeader";
import DocsContainer from "@/components/docs/DocsContainer";

export const metadata: Metadata = {
  title: "API Documentation | 9jaPrice",
  description:
    "Welcome to the 9jaPrice API. Programmatic access to real-time and historical food price data across major Nigerian markets.",
};

export default function DocsIntroPage() {
  return (
    <>
      <DocsHeader pageTitle="Introduction" />

      <DocsContainer>
        <section className="w-full min-w-0">
          <div className="mb-lg">
            <h1 className="font-display-lg text-display-lg text-on-surface mb-sm">
              Introduction
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Welcome to the 9jaPrice API. Our API provides programmatic access
              to real-time and historical food price data across major Nigerian
              markets.
            </p>
          </div>

          {/* Getting Started Cards */}
          <section className="mb-xl">
            <h2 className="font-title-md text-title-md text-on-surface mb-md">
              Getting Started
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
              <Link
                href="/explorer"
                className="block p-md bg-surface-container-lowest border border-outline-variant rounded-xl hover:border-primary-container hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center mb-sm text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-title-md text-title-md text-on-surface mb-xs">
                  Explore the Explorer
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Browse endpoints, parameters, and interactive examples in our
                  API Explorer.
                </p>
              </Link>

              <Link
                href="/playground"
                className="block p-md bg-surface-container-lowest border border-outline-variant rounded-xl hover:border-primary-container hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center mb-sm text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                  <Play className="w-5 h-5" />
                </div>
                <h3 className="font-title-md text-title-md text-on-surface mb-xs">
                  View the Playground
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Test API calls directly from your browser without writing any
                  code.
                </p>
              </Link>
            </div>
          </section>

          {/* Base URL */}
          <section className="mb-xl">
            <h2 className="font-title-md text-title-md text-on-surface mb-md">
              Base URL
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-sm">
              All API requests should be prefixed with the following base URL:
            </p>
            <div className="bg-surface border border-outline-variant rounded-lg p-sm flex items-center justify-between">
              <code className="font-data-mono text-data-mono text-on-surface">
                https://api.9japrice.com/v1
              </code>
              <button
                className="text-on-surface-variant hover:text-primary transition-colors"
                title="Copy to clipboard"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </section>
        </section>

        <aside className="w-full min-w-0 pb-4">
          <div className="sticky h-screen overflow-y-auto top-22">
            {/* cURL Example */}
            <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-sm uppercase tracking-wider">
              Example Request
            </h3>
            <div className="bg-[#1E293B] rounded-lg overflow-hidden border border-[#334155] shadow-[0_4px_12px_rgba(0,0,0,0.1)] mb-0">
              <div className="flex items-center justify-between px-4 py-2 border-b border-[#334155] bg-[#0F172A]">
                <span className="font-data-mono text-[12px] text-[#E2E8F0]">
                  cURL
                </span>
                <button className="text-[#8B949E] hover:text-[#70DB9D] transition-colors">
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="p-4 overflow-x-auto">
                <pre className="font-data-mono text-[13px] leading-relaxed text-[#E2E8F0]">
                  <code>
                    <span className="text-[#8df8b7]">curl</span>
                    {` -X GET \\\n  `}
                    <span className="text-[#7DD3FC]">
                      {`'https://api.9japrice.com/v1/commodities/rice/prices?market_id=lag-01'`}
                    </span>
                    {` \\\n  -H `}
                    <span className="text-[#7DD3FC]">
                      {`'Authorization: Bearer YOUR_API_KEY'`}
                    </span>
                    {` \\\n  -H `}
                    <span className="text-[#7DD3FC]">
                      {`'Accept: application/json'`}
                    </span>
                  </code>
                </pre>
              </div>
            </div>

            {/* JSON Response Example */}
            <h3 className="font-label-caps text-label-caps text-on-surface-variant mt-lg mb-sm uppercase tracking-wider">
              Example Response
            </h3>
            <div className="bg-[#1E293B] rounded-lg overflow-hidden border border-[#334155] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
              <div className="flex items-center justify-between px-4 py-2 border-b border-[#334155] bg-[#0F172A]">
                <span className="font-data-mono text-[12px] text-[#E2E8F0]">
                  JSON
                </span>
              </div>
              <div className="p-4 overflow-x-auto max-h-[300px]">
                <pre className="font-data-mono text-[13px] leading-relaxed text-[#E2E8F0]">
                  <code>
                    {`{
  `}
                    <span className="text-[#7DD3FC]">&quot;status&quot;</span>
                    {`: `}
                    <span className="text-[#8df8b7]">&quot;success&quot;</span>
                    {`,\n  `}
                    <span className="text-[#7DD3FC]">&quot;data&quot;</span>
                    {`: {\n    `}
                    <span className="text-[#7DD3FC]">
                      &quot;commodity_id&quot;
                    </span>
                    {`: `}
                    <span className="text-[#8df8b7]">
                      &quot;rice-50kg&quot;
                    </span>
                    {`,\n    `}
                    <span className="text-[#7DD3FC]">
                      &quot;market_name&quot;
                    </span>
                    {`: `}
                    <span className="text-[#8df8b7]">
                      &quot;Mile 12 Market&quot;
                    </span>
                    {`,\n    `}
                    <span className="text-[#7DD3FC]">
                      &quot;current_price_ngn&quot;
                    </span>
                    {`: `}
                    <span className="text-[#FBBF24]">75000</span>
                    {`,\n    `}
                    <span className="text-[#7DD3FC]">
                      &quot;price_change_24h&quot;
                    </span>
                    {`: `}
                    <span className="text-[#EF4444]">-1.5</span>
                    {`,\n    `}
                    <span className="text-[#7DD3FC]">
                      &quot;timestamp&quot;
                    </span>
                    {`: `}
                    <span className="text-[#8df8b7]">
                      &quot;2024-05-20T14:30:00Z&quot;
                    </span>
                    {`\n  }\n}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </aside>
      </DocsContainer>
    </>
  );
}
