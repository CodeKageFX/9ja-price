import type { Metadata } from "next";
import Link from "next/link";

import { Key, AlertTriangle, ArrowRight } from "lucide-react";
import { CopyButton } from "@/components/code/CopyButton";
import DevHeader from "@/components/dev-portal/DevHeader";
import DocsContainer from "@/components/docs/DocsContainer";

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
    <>
      <DevHeader pageTitle="Authentication" />

      <DocsContainer>
        {/* Prose Column */}

        <section className="max-w-4xl">
          <h1 className="text-[32px] font-bold text-[#191c1e] mb-4">
            Authentication
          </h1>
          <p className="text-[16px] text-on-surface-variant mb-6 leading-relaxed">
            The 9jaPrice API uses Bearer token authentication to authorize
            requests. You need to include your API key in the{" "}
            <code className="bg-surface-container px-1.5 py-0.5 rounded text-[14px] font-mono text-primary">
              Authorization
            </code>{" "}
            header of every HTTP request you make to our endpoints.
          </p>

          {/* Key Obtaining Box */}
          <div className="bg-white border border-border-subtle rounded-xl p-6 mb-8 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
            <h2 className="text-[20px] font-bold text-[#191c1e] mb-4 flex items-center gap-2">
              <Key className="w-5 h-5 text-primary" />
              Obtaining an API Key
            </h2>
            <ol className="list-decimal list-inside text-on-surface-variant space-y-3 text-[14px]">
              <li>
                Navigate to your{" "}
                <Link
                  href="/dashboard"
                  className="text-primary font-medium hover:underline"
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
          <div className="bg-error-container/20 border border-error/20 rounded-xl p-5 mb-10 flex gap-4">
            <AlertTriangle className="w-6 h-6 text-error shrink-0 mt-0.5" />
            <div>
              <h3 className="text-[16px] font-semibold text-error mb-1">
                Security Warning
              </h3>
              <p className="text-[14px] text-on-surface-variant leading-relaxed">
                Never commit your API keys to version control systems like
                GitHub, or embed them in client-side applications. Always use
                environment variables to store them securely on your server.
              </p>
            </div>
          </div>

          <h2 className="text-[24px] font-bold text-[#191c1e] mb-4 mt-8">
            Rate Limits
          </h2>
          <p className="text-[16px] text-on-surface-variant mb-6 leading-relaxed">
            To ensure stability and fair usage across our network, API requests
            are subject to rate limiting based on your current subscription
            plan.
          </p>

          {/* Utility Table */}
          <div className="bg-white border border-border-subtle rounded-lg overflow-hidden mb-8 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#f2f4f6] text-[12px] font-semibold text-[#565e74] uppercase">
                <tr>
                  <th className="py-3 px-4 border-b border-border-subtle">
                    Plan
                  </th>
                  <th className="py-3 px-4 border-b border-border-subtle">
                    Requests / Minute
                  </th>
                  <th className="py-3 px-4 border-b border-border-subtle">
                    Requests / Month
                  </th>
                </tr>
              </thead>
              <tbody className="font-mono text-[14px] text-[#191c1e]">
                <tr className="border-b border-border-subtle hover:bg-[#f7f9fb] transition-colors">
                  <td className="py-3 px-4 font-sans font-medium text-[14px]">
                    Free Tier
                  </td>
                  <td className="py-3 px-4">60</td>
                  <td className="py-3 px-4">10,000</td>
                </tr>
                <tr className="border-b border-border-subtle hover:bg-[#f7f9fb] transition-colors">
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
              className="inline-flex items-center gap-2 bg-[#008751] text-white px-6 py-3 rounded-lg text-[14px] font-medium hover:bg-primary transition-colors shadow-sm"
            >
              Manage API Keys
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Code Column (Right Sticky) */}
        <div className="lg:sticky top-22">
          <div className="bg-[#0f172a] rounded-xl overflow-hidden border border-border-subtle shadow-sm">
            <div className="flex justify-between items-center bg-[#1e293b] px-4 py-2.5 border-b border-[#334155]">
              <span className="text-[12px] font-semibold text-[#f2f4f6] uppercase tracking-wider">
                cURL Example
              </span>
              <CopyButton
                text={curlExample}
                className="text-[#8b949e] hover:text-white"
              />
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-[13px] font-mono text-[#bec6e0] leading-relaxed">
                {curlExample}
              </pre>
            </div>
          </div>
        </div>
      </DocsContainer>
    </>
  );
}
