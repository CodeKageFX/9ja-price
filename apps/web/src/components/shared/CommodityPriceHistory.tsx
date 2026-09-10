"use client";

import React, { useState } from "react";

const TIMEFRAMES = ["7D", "30D", "3M", "1Y", "All"] as const;
type Timeframe = (typeof TIMEFRAMES)[number];

const MOCK_DATA: Record<Timeframe, { path: string; gradientFill: string }> = {
  "7D": {
    path: "M0 80 Q 25 60, 50 75 T 100 40",
    gradientFill: "M0 80 Q 25 60, 50 75 T 100 40 L 100 100 L 0 100 Z",
  },
  "30D": {
    path: "M0 80 Q 20 70, 40 85 T 80 50 T 100 30",
    gradientFill: "M0 80 Q 20 70, 40 85 T 80 50 T 100 30 L 100 100 L 0 100 Z",
  },
  "3M": {
    path: "M0 90 Q 30 50, 60 70 T 100 20",
    gradientFill: "M0 90 Q 30 50, 60 70 T 100 20 L 100 100 L 0 100 Z",
  },
  "1Y": {
    path: "M0 70 Q 20 90, 50 40 T 100 15",
    gradientFill: "M0 70 Q 20 90, 50 40 T 100 15 L 100 100 L 0 100 Z",
  },
  All: {
    path: "M0 85 Q 25 65, 50 80 T 100 10",
    gradientFill: "M0 85 Q 25 65, 50 80 T 100 10 L 100 100 L 0 100 Z",
  },
};

export function CommodityPriceHistory() {
  const [selectedTimeframe, setSelectedTimeframe] = useState<Timeframe>("30D");

  const currentChart = MOCK_DATA[selectedTimeframe];

  return (
    <section className="bg-surface-container-lowest rounded-xl border border-outline-variant p-md shadow-sm">
      <div className="flex flex-wrap justify-between items-center gap-sm mb-md">
        <h2 className="text-title-md font-headline-lg text-on-surface mb-0">Price History</h2>
        <div className="flex bg-surface-container-low rounded-lg p-base gap-base">
          {TIMEFRAMES.map((tf) => (
            <button
              key={tf}
              onClick={() => setSelectedTimeframe(tf)}
              className={`px-xs py-base text-label-caps font-label-caps rounded transition-colors ${
                selectedTimeframe === tf
                  ? "bg-surface-container-lowest text-on-surface shadow-sm font-semibold"
                  : "text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full h-64 bg-surface-container-low rounded-lg relative overflow-hidden flex items-end">
        {/* SVG Curve Chart */}
        <div className="absolute inset-0 p-sm flex items-end">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d={currentChart.gradientFill} fill="rgba(0, 135, 81, 0.1)" />
            <path
              d={currentChart.path}
              fill="none"
              stroke="#008751"
              strokeLinejoin="round"
              strokeWidth="2.5"
            />
          </svg>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-outline-variant" />
        <div className="absolute inset-y-0 left-0 w-px bg-outline-variant ml-sm" />
      </div>
    </section>
  );
}
