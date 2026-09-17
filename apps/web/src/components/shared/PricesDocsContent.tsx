"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function PricesDocsContent() {
  const [activeTab, setActiveTab] = useState<"request" | "response">("request");
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const requestCode = `const url = 'https://api.9japrice.com/v1/prices?food=rice&location=kano';
const options = {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Accept': 'application/json'
  }
};`;

  // try {
  //   const response = await fetch(url, options);
  //   const data = await response.json();
  //   console.log(data);
  // } catch (error) {
  //   console.error(error);
  // }

  const responseJson = `{
  "status": "success",
  "data": [
    {
      "id": 1042,
      "commodity": "Rice (Local)",
      "location": "Kano",
      "market": "Dawanau Market",
      "price": 55000,
      "currency": "NGN",
      "unit": "50kg Bag",
      "timestamp": "2024-05-14T08:30:00Z"
    }
  ],
  "meta": {
    "total_results": 1,
    "page": 1
  }
}`;

  return (
    <>
      {/* Middle Column: Endpoint Details */}
      <div className="flex-1 overflow-y-auto px-margin-desktop py-lg max-w-4xl lg:border-r lg:border-outline-variant">
        <header className="mb-xl">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-sm">
            Commodity Prices
          </h2>
          <div className="flex items-center gap-sm mb-md">
            <span className="bg-primary-container text-on-primary font-data-mono text-data-mono px-2 py-1 rounded font-bold text-sm">
              GET
            </span>
            <span className="font-data-mono text-data-mono text-on-surface-variant bg-surface-container px-2 py-1 rounded text-sm">
              /prices
            </span>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Retrieve the latest prices for specific food items across different
            locations. This endpoint provides real-time market intelligence
            critical for agricultural planning and trade.
          </p>
        </header>

        {/* Query Parameters Table */}
        <section className="mb-xl">
          <h3 className="font-title-md text-title-md text-on-surface mb-md">
            Query Parameters
          </h3>
          <div className="bg-surface-container-lowest rounded-lg border border-outline-variant overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-surface-container font-label-caps text-label-caps text-on-surface-variant border-b border-outline-variant">
                <tr>
                  <th className="px-md py-sm">Parameter</th>
                  <th className="px-md py-sm">Type</th>
                  <th className="px-md py-sm">Description</th>
                </tr>
              </thead>
              <tbody className="font-body-sm text-body-sm text-on-surface divide-y divide-outline-variant">
                <tr>
                  <td className="px-md py-sm font-data-mono text-data-mono text-primary">
                    food
                  </td>
                  <td className="px-md py-sm text-on-surface-variant">
                    string
                  </td>
                  <td className="px-md py-sm">
                    The name of the commodity (e.g., &quot;rice&quot;,
                    &quot;beans&quot;). Optional.
                  </td>
                </tr>
                <tr>
                  <td className="px-md py-sm font-data-mono text-data-mono text-primary">
                    location
                  </td>
                  <td className="px-md py-sm text-on-surface-variant">
                    string
                  </td>
                  <td className="px-md py-sm">
                    The specific state or region to filter by (e.g.,
                    &quot;Kano&quot;, &quot;Lagos&quot;). Optional.
                  </td>
                </tr>
                <tr>
                  <td className="px-md py-sm font-data-mono text-data-mono text-primary">
                    market
                  </td>
                  <td className="px-md py-sm text-on-surface-variant">
                    string
                  </td>
                  <td className="px-md py-sm">
                    Specific market name for hyper-local pricing. Optional.
                  </td>
                </tr>
                <tr>
                  <td className="px-md py-sm font-data-mono text-data-mono text-primary">
                    unit
                  </td>
                  <td className="px-md py-sm text-on-surface-variant">
                    string
                  </td>
                  <td className="px-md py-sm">
                    Measurement unit (e.g., &quot;kg&quot;, &quot;bag&quot;).
                    Defaults to standard regional unit if omitted. Optional.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Right Column: Code Examples with Tabs */}
      <aside className="w-full lg:w-[500px] bg-[#1a1a2e] flex flex-col h-full overflow-hidden flex-shrink-0">
        {/* Tabs */}
        <div className="flex border-b border-white/10">
          <button
            onClick={() => setActiveTab("request")}
            className={`px-md py-sm font-label-caps text-label-caps border-b-2 transition-colors ${
              activeTab === "request"
                ? "text-white border-primary bg-white/5"
                : "text-[#8b949e] border-transparent hover:text-white"
            }`}
          >
            Request
          </button>
          <button
            onClick={() => setActiveTab("response")}
            className={`px-md py-sm font-label-caps text-label-caps border-b-2 transition-colors ${
              activeTab === "response"
                ? "text-white border-primary bg-white/5"
                : "text-[#8b949e] border-transparent hover:text-white"
            }`}
          >
            Response
          </button>
        </div>

        {/* Request Panel */}
        {activeTab === "request" && (
          <div className="p-md flex-1 overflow-y-auto">
            <div className="bg-[#1e1e1e] rounded-lg overflow-hidden border border-[#333]">
              <div className="bg-[#2d2d2d] px-sm py-2 flex items-center justify-between border-b border-[#444]">
                <span className="font-data-mono text-data-mono text-[#8b949e] text-xs">
                  JavaScript (Fetch)
                </span>
                <button
                  onClick={() => handleCopy(requestCode)}
                  className="text-[#8b949e] hover:text-white transition-colors"
                  aria-label="Copy code"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-[#70db9d]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <div className="p-sm font-data-mono text-data-mono text-gray-300 text-sm overflow-x-auto">
                <div>
                  <span className="text-blue-400">const</span>
                  {` url = `}
                  <span className="text-green-400">
                    &apos;https://api.9japrice.com/v1/prices?food=rice&amp;location=kano&apos;
                  </span>
                  ;
                </div>
                <div>
                  <span className="text-blue-400">const</span>
                  {` options = {`}
                </div>
                <div>
                  {`  method: `}
                  <span className="text-green-400">&apos;GET&apos;</span>,
                </div>
                <div>{`  headers: {`}</div>
                <div>
                  {`    `}
                  <span className="text-green-400">
                    &apos;Authorization&apos;
                  </span>
                  {`: `}
                  <span className="text-green-400">
                    &apos;Bearer YOUR_API_KEY&apos;
                  </span>
                  ,
                </div>
                <div>
                  {`    `}
                  <span className="text-green-400">&apos;Accept&apos;</span>
                  {`: `}
                  <span className="text-green-400">
                    &apos;application/json&apos;
                  </span>
                </div>
                <div>{`  }`}</div>
                <div>{`};`}</div>
                <div className="mt-2">
                  <span className="text-blue-400">try</span>
                  {` {`}
                </div>
                <div>
                  {`  `}
                  <span className="text-blue-400">const</span>
                  {` response = `}
                  <span className="text-blue-400">await</span>
                  {` fetch(url, options);`}
                </div>
                <div>
                  {`  `}
                  <span className="text-blue-400">const</span>
                  {` data = `}
                  <span className="text-blue-400">await</span>
                  {` response.json();`}
                </div>
                <div>{`  console.log(data);`}</div>
                <div>
                  {`} `}
                  <span className="text-blue-400">catch</span>
                  {` (error) {`}
                </div>
                <div>{`  console.error(error);`}</div>
                <div>{`}`}</div>
              </div>
            </div>
          </div>
        )}

        {/* Response Panel */}
        {activeTab === "response" && (
          <div className="p-md flex-1 overflow-y-auto">
            <div className="bg-[#1e1e1e] rounded-lg overflow-hidden border border-[#333]">
              <div className="bg-[#2d2d2d] px-sm py-2 flex items-center justify-between border-b border-[#444]">
                <span className="font-data-mono text-data-mono text-[#8b949e] text-xs">
                  JSON — 200 OK
                </span>
                <button
                  onClick={() => handleCopy(responseJson)}
                  className="text-[#8b949e] hover:text-white transition-colors"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-[#70db9d]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <pre className="p-sm font-data-mono text-data-mono text-gray-300 text-sm overflow-x-auto">
                <code>
                  {`{\n  `}
                  <span className="text-blue-400">&quot;status&quot;</span>
                  {`: `}
                  <span className="text-green-400">&quot;success&quot;</span>
                  {`,\n  `}
                  <span className="text-blue-400">&quot;data&quot;</span>
                  {`: [\n    {\n      `}
                  <span className="text-blue-400">&quot;id&quot;</span>
                  {`: `}
                  <span className="text-orange-400">1042</span>
                  {`,\n      `}
                  <span className="text-blue-400">&quot;commodity&quot;</span>
                  {`: `}
                  <span className="text-green-400">
                    &quot;Rice (Local)&quot;
                  </span>
                  {`,\n      `}
                  <span className="text-blue-400">&quot;location&quot;</span>
                  {`: `}
                  <span className="text-green-400">&quot;Kano&quot;</span>
                  {`,\n      `}
                  <span className="text-blue-400">&quot;market&quot;</span>
                  {`: `}
                  <span className="text-green-400">
                    &quot;Dawanau Market&quot;
                  </span>
                  {`,\n      `}
                  <span className="text-blue-400">&quot;price&quot;</span>
                  {`: `}
                  <span className="text-orange-400">55000</span>
                  {`,\n      `}
                  <span className="text-blue-400">&quot;currency&quot;</span>
                  {`: `}
                  <span className="text-green-400">&quot;NGN&quot;</span>
                  {`,\n      `}
                  <span className="text-blue-400">&quot;unit&quot;</span>
                  {`: `}
                  <span className="text-green-400">&quot;50kg Bag&quot;</span>
                  {`,\n      `}
                  <span className="text-blue-400">&quot;timestamp&quot;</span>
                  {`: `}
                  <span className="text-green-400">
                    &quot;2024-05-14T08:30:00Z&quot;
                  </span>
                  {`\n    }\n  ],\n  `}
                  <span className="text-blue-400">&quot;meta&quot;</span>
                  {`: {\n    `}
                  <span className="text-blue-400">
                    &quot;total_results&quot;
                  </span>
                  {`: `}
                  <span className="text-orange-400">1</span>
                  {`,\n    `}
                  <span className="text-blue-400">&quot;page&quot;</span>
                  {`: `}
                  <span className="text-orange-400">1</span>
                  {`\n  }\n}`}
                </code>
              </pre>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
