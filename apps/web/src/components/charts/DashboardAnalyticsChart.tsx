"use client";

import React, { useState } from "react";

const CHART_DATA: Record<string, { path: string; gradientFill: string; yLabels: string[]; xLabels: string[] }> = {
  "7 Days": {
    path: "M 5,80 L 20,60 L 35,40 L 50,70 L 65,30 L 80,50 L 95,20",
    gradientFill: "M 5,80 L 20,60 L 35,40 L 50,70 L 65,30 L 80,50 L 95,20 L 95,100 L 5,100 Z",
    yLabels: ["2k", "1.5k", "1k", "500", "0"],
    xLabels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  "30 Days": {
    path: "M 5,90 L 20,75 L 35,50 L 50,60 L 65,40 L 80,30 L 95,15",
    gradientFill: "M 5,90 L 20,75 L 35,50 L 50,60 L 65,40 L 80,30 L 95,15 L 95,100 L 5,100 Z",
    yLabels: ["10k", "7.5k", "5k", "2.5k", "0"],
    xLabels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  },
  "This Year": {
    path: "M 5,95 L 20,80 L 35,65 L 50,45 L 65,35 L 80,25 L 95,10",
    gradientFill: "M 5,95 L 20,80 L 35,65 L 50,45 L 65,35 L 80,25 L 95,10 L 95,100 L 5,100 Z",
    yLabels: ["100k", "75k", "50k", "25k", "0"],
    xLabels: ["Q1", "Q2", "Q3", "Q4"],
  },
};

export function DashboardAnalyticsChart() {
  const [range, setRange] = useState<string>("7 Days");

  const currentChart = CHART_DATA[range] || CHART_DATA["7 Days"];

  return (
    <div className="bg-surface-container-lowest rounded-xl border border-[#E2E8F0] p-md">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-title-md text-title-md text-on-surface">
          Requests Over Time ({range})
        </h3>
        <select
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="border border-[#E2E8F0] rounded-md text-body-sm text-on-surface-variant bg-white px-3 py-1.5 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
        >
          <option value="7 Days">7 Days</option>
          <option value="30 Days">30 Days</option>
          <option value="This Year">This Year</option>
        </select>
      </div>

      <div className="h-64 w-full flex items-end gap-2 pt-8 relative">
        {/* Y Axis Labels */}
        <div className="absolute left-0 top-0 bottom-8 w-10 flex flex-col justify-between text-[10px] text-on-surface-variant font-data-mono">
          {currentChart.yLabels.map((lbl) => (
            <span key={lbl}>{lbl}</span>
          ))}
        </div>

        {/* Chart Grid Lines */}
        <div className="absolute left-10 right-0 top-0 bottom-8 flex flex-col justify-between z-0 pointer-events-none">
          <div className="w-full h-px border-t border-dashed border-outline-variant/30" />
          <div className="w-full h-px border-t border-dashed border-outline-variant/30" />
          <div className="w-full h-px border-t border-dashed border-outline-variant/30" />
          <div className="w-full h-px border-t border-dashed border-outline-variant/30" />
          <div className="w-full h-px border-t border-outline-variant/50" />
        </div>

        {/* Line SVG and Hit Points */}
        <div className="ml-10 flex-1 flex items-end justify-around h-full pb-8 relative z-10 group cursor-crosshair">
          <svg
            className="absolute inset-0 w-full h-full -top-4 pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <path
              d={currentChart.path}
              fill="none"
              stroke="#008751"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d={currentChart.gradientFill}
              fill="url(#dashboardGradient)"
              opacity="0.1"
            />
            <defs>
              <linearGradient id="dashboardGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#008751" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#008751" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <div className="w-full h-full absolute inset-0 flex justify-around items-end pb-8">
            <div className="w-8 h-full relative group/point flex justify-center items-end">
              <div className="w-2 h-2 rounded-full bg-primary absolute bottom-[20%] opacity-0 group-hover/point:opacity-100 transition-opacity" />
            </div>
            <div className="w-8 h-full relative group/point flex justify-center items-end">
              <div className="w-2 h-2 rounded-full bg-primary absolute bottom-[40%] opacity-0 group-hover/point:opacity-100 transition-opacity" />
            </div>
            <div className="w-8 h-full relative group/point flex justify-center items-end">
              <div className="w-2 h-2 rounded-full bg-primary absolute bottom-[60%] opacity-0 group-hover/point:opacity-100 transition-opacity" />
            </div>
            <div className="w-8 h-full relative group/point flex justify-center items-end">
              <div className="w-2 h-2 rounded-full bg-primary absolute bottom-[30%] opacity-0 group-hover/point:opacity-100 transition-opacity" />
            </div>
            <div className="w-8 h-full relative group/point flex justify-center items-end">
              <div className="w-2 h-2 rounded-full bg-primary absolute bottom-[70%] opacity-0 group-hover/point:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        {/* X Axis Labels */}
        <div className="absolute left-10 right-0 bottom-0 h-8 flex justify-around items-center text-[10px] text-on-surface-variant font-label-caps uppercase">
          {currentChart.xLabels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
