import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CreditCard, Terminal } from "lucide-react";
import { CopyButton } from "@/components/code/CopyButton";
import DocsHeader from "@/components/docs/DocsHeader";
import DocsContainer from "@/components/docs/DocsContainer";

export const metadata: Metadata = {
  title: "API Quickstart — 9jaPrice Documentation",
  description:
    "Get up and running with the 9jaPrice API in under 5 minutes. Learn how to authenticate, make requests, and parse commodity data.",
};

const curlSnippet = `curl -X GET "https://api.9japrice.com/v1/prices?market=lagos" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`;

const responseSnippet = `{
  "status": "success",
  "data": [
    {
      "id": "price-001",
      "commodity": "Local Rice (Ofada)",
      "market": "Mile 12, Lagos",
      "price": 78500,
      "currency": "NGN",
      "unit": "50kg bag",
      "updatedAt": "2026-08-19T14:20:00Z"
    }
  ]
}`;

export default function DocsQuickstartPage() {
  return (
    <>
      <DocsHeader pageTitle="Quickstart" />
      <DocsContainer>
        {/* Center Column: Prose */}
        <div className="w-full min-w-0">
          <h1 className="text-[32px] font-bold text-[#191c1e] mb-4">
            Quickstart
          </h1>
          <p className="text-[16px] text-on-surface-variant mb-12 leading-relaxed">
            Get up and running with the 9jaPrice API in under 5 minutes. Learn
            how to authenticate, make requests, and parse commodity data.
          </p>

          {/* Step 1 */}
          <div className="mb-16 relative pl-10">
            <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono text-[14px] font-bold text-primary border border-border-subtle">
              1
            </div>
            <h2 className="text-[20px] font-bold text-[#191c1e] mb-3">
              Get your API key
            </h2>
            <p className="text-[16px] text-on-surface-variant mb-4 leading-relaxed">
              To make requests to the 9jaPrice API, you need a valid API key.
              Keys are completely free for basic usage.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-white text-[#191c1e] border border-border-subtle px-4 py-2 rounded-lg text-[14px] font-medium hover:border-primary hover:text-primary transition-colors shadow-sm"
            >
              Get your API key
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Step 2 */}
          <div className="mb-16 relative pl-10">
            <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono text-[14px] font-bold text-primary border border-border-subtle">
              2
            </div>
            <h2 className="text-[20px] font-bold text-[#191c1e] mb-3">
              Make your first request
            </h2>
            <p className="text-[16px] text-on-surface-variant mb-4 leading-relaxed">
              Once you have your key, you can make an authenticated request.
              We&apos;ll query the{" "}
              <code className="bg-surface-container px-1.5 py-0.5 rounded text-[14px] font-mono text-primary">
                /v1/prices
              </code>{" "}
              endpoint to get the latest commodity prices in Lagos.
            </p>
            <p className="text-[16px] text-on-surface-variant leading-relaxed">
              Copy the snippet from the right panel and paste it into your
              terminal, replacing{" "}
              <code className="bg-surface-container px-1.5 py-0.5 rounded text-[14px] font-mono text-primary">
                YOUR_API_KEY
              </code>{" "}
              with your actual key.
            </p>
          </div>

          {/* Step 3 */}
          <div className="mb-16 relative pl-10">
            <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono text-[14px] font-bold text-primary border border-border-subtle">
              3
            </div>
            <h2 className="text-[20px] font-bold text-[#191c1e] mb-3">
              Read the response
            </h2>
            <p className="text-[16px] text-on-surface-variant mb-4 leading-relaxed">
              The API returns a JSON object containing an array of{" "}
              <code className="bg-surface-container px-1.5 py-0.5 rounded text-[14px] font-mono text-primary">
                data
              </code>
              . Each item represents a commodity&apos;s current price in the
              requested market.
            </p>
            <p className="text-[16px] text-on-surface-variant leading-relaxed">
              Note the{" "}
              <code className="bg-surface-container px-1.5 py-0.5 rounded text-[14px] font-mono text-primary">
                currency
              </code>{" "}
              and{" "}
              <code className="bg-surface-container px-1.5 py-0.5 rounded text-[14px] font-mono text-primary">
                unit
              </code>{" "}
              fields, which are crucial for accurate market analysis.
            </p>
          </div>

          {/* Step 4 */}
          <div className="mb-16 relative pl-10">
            <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono text-[14px] font-bold text-primary border border-border-subtle">
              4
            </div>
            <h2 className="text-[20px] font-bold text-[#191c1e] mb-3">
              Start building
            </h2>
            <p className="text-[16px] text-on-surface-variant mb-6 leading-relaxed">
              Explore the full capabilities of the API or test queries directly
              in the Playground.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/docs/prices"
                className="group p-4 bg-white border border-border-subtle rounded-xl hover:border-primary transition-colors flex flex-col h-full shadow-sm hover:shadow-md"
              >
                <CreditCard className="w-6 h-6 text-primary mb-2" />
                <h3 className="text-[18px] font-bold text-[#191c1e] mb-1">
                  Prices API
                </h3>
                <p className="text-[14px] text-on-surface-variant flex-1">
                  Detailed documentation for querying historical and live
                  commodity prices.
                </p>
                <span className="text-primary text-[14px] font-semibold group-hover:underline mt-2 inline-block">
                  Read docs
                </span>
              </Link>
              <Link
                href="/playground"
                className="group p-4 bg-white border border-border-subtle rounded-xl hover:border-primary transition-colors flex flex-col h-full shadow-sm hover:shadow-md"
              >
                <Terminal className="w-6 h-6 text-primary mb-2" />
                <h3 className="text-[18px] font-bold text-[#191c1e] mb-1">
                  API Playground
                </h3>
                <p className="text-[14px] text-on-surface-variant flex-1">
                  Test queries interactively before writing any code.
                </p>
                <span className="text-primary text-[14px] font-semibold group-hover:underline mt-2 inline-block">
                  Open Playground
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Code Snippet & Interactive Response */}
        <aside className="bg-white p-4 border-l border-border-subtle sticky top-22 h-screen overflow-y-auto space-y-6">
          {/* Request Module */}
          <div className="rounded-xl overflow-hidden border border-border-subtle bg-[#0f172a] shadow-sm">
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#0f172a] border-b border-[#334155]">
              <span className="text-[12px] font-semibold tracking-wider text-[#a5d6ff] uppercase">
                cURL Request
              </span>
              <CopyButton
                text={curlSnippet}
                className="text-[#8b949e] hover:text-white"
              />
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-[13px] font-mono text-[#bec6e0] leading-relaxed">
                {curlSnippet}
              </pre>
            </div>
          </div>

          {/* Response Module */}
          <div className="rounded-xl overflow-hidden border border-border-subtle bg-[#0f172a] shadow-sm">
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#0f172a] border-b border-[#334155]">
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-semibold tracking-wider text-[#8b949e] uppercase">
                  Response
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#22c55e] text-white">
                  200 OK
                </span>
              </div>
              <CopyButton
                text={responseSnippet}
                className="text-[#8b949e] hover:text-white"
              />
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-[13px] font-mono text-secondary-fixed-dim leading-relaxed">
                {responseSnippet}
              </pre>
            </div>
          </div>
        </aside>
      </DocsContainer>
    </>
  );
}
