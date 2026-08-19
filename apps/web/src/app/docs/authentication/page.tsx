import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { Key, AlertTriangle, ArrowRight } from "lucide-react";
import { CopyButton } from "@/components/code/CopyButton";

export const metadata: Metadata = {
  title: "Authentication — 9jaPrice Documentation",
  description:
    "Learn how to authenticate your API requests using Bearer token authentication with 9jaPrice.",
};

const curlExample = `curl -X GET "https://api.9japrice.com/v1/prices" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`;

export default function DocsAuthenticationPage() {
  return (
    <div className="flex-1 md:ml-64 flex min-h-screen bg-[#f7f9fb]">
      <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 p-6 md:p-12 pb-24">
        {/* Prose Column */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          <section className="max-w-4xl">
            <h1 className="text-[32px] font-bold text-[#191c1e] mb-4">
              Authentication
            </h1>
            <p className="text-[16px] text-[#3e4a41] mb-6 leading-relaxed">
              The 9jaPrice API uses Bearer token authentication to authorize
              requests. You need to include your API key in the{" "}
              <code className="bg-[#eceef0] px-1.5 py-0.5 rounded text-[14px] font-mono text-[#006b3f]">
                Authorization
              </code>{" "}
              header of every HTTP request you make to our endpoints.
            </p>

            {/* Key Obtaining Box */}
            <div className="bg-white border border-[#e2e8f0] rounded-xl p-6 mb-8 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
              <h2 className="text-[20px] font-bold text-[#191c1e] mb-4 flex items-center gap-2">
                <Key className="w-5 h-5 text-[#006b3f]" />
                Obtaining an API Key
              </h2>
              <ol className="list-decimal list-inside text-[#3e4a41] space-y-3 text-[14px]">
                <li>
                  Navigate to your{" "}
                  <Link
                    href="/dashboard"
                    className="text-[#006b3f] font-medium hover:underline"
                  >
                    Dashboard
                  </Link>
                  .
                </li>
                <li>
                  Select <strong>API Keys</strong> from the sidebar.
                </li>
                <li>
                  Click the <strong>Create New Key</strong> button.
                </li>
                <li>
                  Copy the generated key and store it securely. You will not be
                  able to see it again.
                </li>
              </ol>
            </div>

            {/* Warning Box */}
            <div className="bg-[#ffdad6]/20 border border-[#ba1a1a]/20 rounded-xl p-5 mb-10 flex gap-4">
              <AlertTriangle className="w-6 h-6 text-[#ba1a1a] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-[16px] font-semibold text-[#ba1a1a] mb-1">
                  Security Warning
                </h3>
                <p className="text-[14px] text-[#3e4a41] leading-relaxed">
                  Never commit your API keys to version control systems like GitHub,
                  or embed them in client-side applications. Always use environment
                  variables to store them securely on your server.
                </p>
              </div>
            </div>

            <h2 className="text-[24px] font-bold text-[#191c1e] mb-4 mt-8">
              Rate Limits
            </h2>
            <p className="text-[16px] text-[#3e4a41] mb-6 leading-relaxed">
              To ensure stability and fair usage across our network, API requests
              are subject to rate limiting based on your current subscription
              plan.
            </p>

            {/* Utility Table */}
            <div className="bg-white border border-[#e2e8f0] rounded-lg overflow-hidden mb-8 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#f2f4f6] text-[12px] font-semibold text-[#565e74] uppercase">
                  <tr>
                    <th className="py-3 px-4 border-b border-[#e2e8f0]">Plan</th>
                    <th className="py-3 px-4 border-b border-[#e2e8f0]">
                      Requests / Minute
                    </th>
                    <th className="py-3 px-4 border-b border-[#e2e8f0]">
                      Requests / Month
                    </th>
                  </tr>
                </thead>
                <tbody className="font-mono text-[14px] text-[#191c1e]">
                  <tr className="border-b border-[#e2e8f0] hover:bg-[#f7f9fb] transition-colors">
                    <td className="py-3 px-4 font-sans font-medium text-[14px]">
                      Free Tier
                    </td>
                    <td className="py-3 px-4">60</td>
                    <td className="py-3 px-4">10,000</td>
                  </tr>
                  <tr className="border-b border-[#e2e8f0] hover:bg-[#f7f9fb] transition-colors">
                    <td className="py-3 px-4 font-sans font-medium text-[14px]">
                      Pro
                    </td>
                    <td className="py-3 px-4">600</td>
                    <td className="py-3 px-4">500,000</td>
                  </tr>
                  <tr className="hover:bg-[#f7f9fb] transition-colors">
                    <td className="py-3 px-4 font-sans font-medium text-[14px]">
                      Enterprise
                    </td>
                    <td className="py-3 px-4">Custom</td>
                    <td className="py-3 px-4">Unlimited</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8">
              <Link
                href="/api-keys"
                className="inline-flex items-center gap-2 bg-[#008751] text-white px-6 py-3 rounded-lg text-[14px] font-medium hover:bg-[#006b3f] transition-colors shadow-sm"
              >
                Manage API Keys
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </div>

        {/* Code Column (Right Sticky) */}
        <div className="lg:col-span-5 flex flex-col gap-6 sticky top-6 self-start">
          <div className="bg-[#0f172a] rounded-xl overflow-hidden border border-[#e2e8f0] shadow-sm">
            <div className="flex justify-between items-center bg-[#1e293b] px-4 py-2.5 border-b border-[#334155]">
              <span className="text-[12px] font-semibold text-[#f2f4f6] uppercase tracking-wider">
                cURL Example
              </span>
              <CopyButton text={curlExample} className="text-[#8b949e] hover:text-white" />
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-[13px] font-mono text-[#bec6e0] leading-relaxed">
                {curlExample}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
