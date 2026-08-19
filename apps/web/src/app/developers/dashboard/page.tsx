"use client";

import React from "react";
import {
  Database,
  LayoutDashboard,
  Key,
  BarChart2,
  Terminal,
  FileText,
  Settings,
  HelpCircle,
  Bell,
  ArrowLeftRight,
  BarChart3,
  TrendingUp,
  Zap,
  Star,
  ArrowRight,
} from "lucide-react";

export default function DeveloperDashboardPage() {
  return (
    <div className="bg-[#F8FAFC] text-on-surface min-h-screen flex font-body-lg">
{/* SideNavBar (from JSON) */}
<nav className="h-screen w-64 fixed left-0 top-0 bg-surface dark:bg-inverse-surface border-r border-outline-variant dark:border-outline flex flex-col h-full py-6 z-50">
<div className="px-6 mb-8 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shadow-sm">
<Database className="w-5 h-5 text-white" />
</div>
<div>
<h1 className="font-headline-lg text-[20px] font-bold text-primary dark:text-inverse-primary leading-tight">AgriIntel API</h1>
<p className="font-label-caps text-label-caps text-on-surface-variant/70 uppercase">Market Access</p>
</div>
</div>
<div className="flex-1 overflow-y-auto px-4">
<ul className="space-y-1">
<li>
<a className="flex items-center gap-3 px-4 py-3 text-primary dark:text-inverse-primary bg-primary-container/10 border-r-4 border-primary rounded-l-md font-label-caps text-label-caps uppercase active:scale-95 duration-150" href="#">
<LayoutDashboard className="w-4 h-4" />
                        Dashboard
                    </a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors rounded-md font-label-caps text-label-caps uppercase active:scale-95 duration-150" href="#">
<Key className="w-4 h-4" />
                        API Keys
                    </a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors rounded-md font-label-caps text-label-caps uppercase active:scale-95 duration-150" href="#">
<BarChart2 className="w-4 h-4" />
                        Usage
                    </a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors rounded-md font-label-caps text-label-caps uppercase active:scale-95 duration-150" href="#">
<Terminal className="w-4 h-4" />
                        Playground
                    </a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors rounded-md font-label-caps text-label-caps uppercase active:scale-95 duration-150" href="#">
<FileText className="w-4 h-4" />
                        Documentation
                    </a>
</li>
</ul>
</div>
<div className="mt-auto px-4 pt-4 border-t border-outline-variant/30">
<ul className="space-y-1">
<li>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors rounded-md font-label-caps text-label-caps uppercase active:scale-95 duration-150" href="#">
<Settings className="w-4 h-4" />
                        Settings
                    </a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors rounded-md font-label-caps text-label-caps uppercase active:scale-95 duration-150" href="#">
<HelpCircle className="w-4 h-4" />
                        Support
                    </a>
</li>
</ul>
</div>
</nav>
{/* Main Content Canvas */}
<main className="ml-64 flex-1 flex flex-col h-full bg-[#F8FAFC]">
{/* Header */}
<header className="h-20 bg-surface-container-lowest border-b border-[#E2E8F0] px-margin-desktop flex items-center justify-between shrink-0 sticky top-0 z-30">
<div>
<h2 className="font-headline-lg text-title-md text-on-surface">Dashboard Overview</h2>
</div>
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors">
<Bell className="w-5 h-5" />
</button>
<div className="flex items-center gap-3 pl-4 border-l border-outline-variant/30">
<img alt="Developer Profile" className="w-10 h-10 rounded-full object-cover border border-outline-variant shadow-sm" data-alt="A close-up, high-quality photograph of a young Nigerian male professional wearing glasses and a crisp white shirt, smiling subtly against a clean, well-lit modern office background. The lighting is soft and flattering, highlighting a modern corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuClv3Hk7CLrDwlbA-E8SvgGwhub92kbyUD3v-8qy_ecanzAafupdLgYdli0q7yRV6CffzWCmeNjf6kv5mbINmXjV5-217m3x2z5bGcvEhpz5uUpyvgmFPkPMSkyeXjYBU6y7f-hAy9QuP7qJXeu6LEder1tj8nkwLF7EEzuIGmRzDF5dqY9Wy8T59WYA0H5VLzWfqdzpknPU1yqi_zjCs9SKCsj5T8LpLJrt4xSUYjXPB12huZcR6iD"/>
<div className="hidden md:block">
<p className="font-title-md text-body-sm font-semibold text-on-surface leading-tight">Oluwaseun A.</p>
<p className="font-label-caps text-[10px] text-on-surface-variant uppercase">Admin</p>
</div>
</div>
</div>
</header>
{/* Scrollable Content */}
<div className="flex-1 overflow-y-auto p-margin-desktop space-y-lg">
{/* Stat Cards Bento */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
{/* Card 1 */}
<div className="bg-surface-container-lowest rounded-xl border border-[#E2E8F0] p-md flex flex-col hover:shadow-[0px_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
<div className="flex justify-between items-start mb-4">
<h3 className="font-title-md text-body-sm text-on-surface-variant font-medium">API Requests Today</h3>
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<ArrowLeftRight className="w-4 h-4" />
</div>
</div>
<div className="flex items-baseline gap-2 mt-auto">
<span className="font-headline-lg text-headline-lg text-on-surface">1,240</span>
</div>
<div className="mt-2 flex items-center gap-1 text-[#22C55E] font-data-mono text-xs font-medium">
<TrendingUp className="w-3.5 h-3.5" />
<span>+12.5%</span>
<span className="text-on-surface-variant/50 ml-1">vs yesterday</span>
</div>
</div>
{/* Card 2 */}
<div className="bg-surface-container-lowest rounded-xl border border-[#E2E8F0] p-md flex flex-col hover:shadow-[0px_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
<div className="flex justify-between items-start mb-4">
<h3 className="font-title-md text-body-sm text-on-surface-variant font-medium">Total Requests This Month</h3>
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<BarChart3 className="w-4 h-4" />
</div>
</div>
<div className="flex items-baseline gap-2 mt-auto">
<span className="font-headline-lg text-headline-lg text-on-surface">45,600</span>
</div>
<div className="mt-2 flex items-center gap-1 text-[#22C55E] font-data-mono text-xs font-medium">
<TrendingUp className="w-3.5 h-3.5" />
<span>+5.2%</span>
<span className="text-on-surface-variant/50 ml-1">vs last month</span>
</div>
</div>
{/* Card 3 */}
<div className="bg-surface-container-lowest rounded-xl border border-[#E2E8F0] p-md flex flex-col hover:shadow-[0px_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
<div className="flex justify-between items-start mb-4">
<h3 className="font-title-md text-body-sm text-on-surface-variant font-medium">Rate Limit</h3>
<div className="w-8 h-8 rounded-full bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B]">
<Zap className="w-4 h-4" />
</div>
</div>
<div className="flex items-baseline gap-2 mt-auto">
<span className="font-headline-lg text-headline-lg text-on-surface">85%</span>
</div>
<div className="w-full bg-surface-container-high rounded-full h-1.5 mt-3">
<div className="bg-[#F59E0B] h-1.5 rounded-full" style={{width: "85%"}}></div>
</div>
<div className="mt-2 text-on-surface-variant/70 font-data-mono text-xs">
                        85,000 / 100,000 reqs
                    </div>
</div>
{/* Card 4 */}
<div className="bg-surface-container-lowest rounded-xl border border-[#E2E8F0] p-md flex flex-col hover:shadow-[0px_4px_12px_rgba(0,0,0,0.05)] transition-shadow relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<h3 className="font-title-md text-body-sm text-on-surface-variant font-medium">Current Plan</h3>
<div className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant">
<Star className="w-4 h-4" />
</div>
</div>
<div className="flex items-baseline gap-2 mt-auto relative z-10">
<span className="font-headline-lg text-[24px] font-bold text-primary">Developer Free</span>
</div>
<div className="mt-4 relative z-10">
<button className="w-full bg-[#F1F5F9] text-[#1E293B] font-label-caps text-label-caps uppercase py-2 rounded-lg font-semibold hover:bg-surface-container-highest transition-colors">
                            Upgrade Plan
                        </button>
</div>
</div>
</div>
{/* Chart Section */}
<div className="bg-surface-container-lowest rounded-xl border border-[#E2E8F0] p-md">
<div className="flex items-center justify-between mb-6">
<h3 className="font-title-md text-title-md text-on-surface">Requests Over Time (Last 7 Days)</h3>
<select className="border border-[#E2E8F0] rounded-md text-body-sm text-on-surface-variant bg-white px-3 py-1.5 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20">
<option>7 Days</option>
<option>30 Days</option>
<option>This Year</option>
</select>
</div>
{/* Mock Chart Area - Using CSS/HTML to simulate a line chart structure */}
<div className="h-64 w-full flex items-end gap-2 pt-8 relative">
{/* Y Axis Labels */}
<div className="absolute left-0 top-0 bottom-8 w-10 flex flex-col justify-between text-[10px] text-on-surface-variant font-data-mono">
<span>2k</span>
<span>1.5k</span>
<span>1k</span>
<span>500</span>
<span>0</span>
</div>
{/* Chart Grid Lines */}
<div className="absolute left-10 right-0 top-0 bottom-8 flex flex-col justify-between z-0 pointer-events-none">
<div className="w-full h-px border-t border-dashed border-outline-variant/30"></div>
<div className="w-full h-px border-t border-dashed border-outline-variant/30"></div>
<div className="w-full h-px border-t border-dashed border-outline-variant/30"></div>
<div className="w-full h-px border-t border-dashed border-outline-variant/30"></div>
<div className="w-full h-px border-t border-outline-variant/50"></div>
</div>
{/* Bars (Simulating data points for visual effect) */}
<div className="ml-10 flex-1 flex items-end justify-around h-full pb-8 relative z-10 group cursor-crosshair">
{/* Connecting Line Path (SVG for pure visual representation of a line chart over bars) */}
<svg className="absolute inset-0 w-full h-full -top-4 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
<path d="M 5,80 L 20,60 L 35,40 L 50,70 L 65,30 L 80,50 L 95,20" fill="none" stroke="#008751" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M 5,80 L 20,60 L 35,40 L 50,70 L 65,30 L 80,50 L 95,20 L 95,100 L 5,100 Z" fill="url(#gradient)" opacity="0.1"></path>
<defs>
<linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#008751" stopOpacity="0.5"></stop>
<stop offset="100%" stopColor="#008751" stopOpacity="0"></stop>
</linearGradient>
</defs>
</svg>
{/* Hover Points (Invisible hit areas) */}
<div className="w-full h-full absolute inset-0 flex justify-around items-end pb-8">
<div className="w-8 h-full relative group/point flex justify-center items-end">
<div className="w-2 h-2 rounded-full bg-primary absolute bottom-[20%] opacity-0 group-hover/point:opacity-100 transition-opacity"></div>
</div>
<div className="w-8 h-full relative group/point flex justify-center items-end">
<div className="w-2 h-2 rounded-full bg-primary absolute bottom-[40%] opacity-0 group-hover/point:opacity-100 transition-opacity"></div>
</div>
<div className="w-8 h-full relative group/point flex justify-center items-end">
<div className="w-2 h-2 rounded-full bg-primary absolute bottom-[60%] opacity-0 group-hover/point:opacity-100 transition-opacity"></div>
</div>
<div className="w-8 h-full relative group/point flex justify-center items-end">
<div className="w-2 h-2 rounded-full bg-primary absolute bottom-[30%] opacity-0 group-hover/point:opacity-100 transition-opacity"></div>
</div>
<div className="w-8 h-full relative group/point flex justify-center items-end">
<div className="w-2 h-2 rounded-full bg-primary absolute bottom-[70%] opacity-0 group-hover/point:opacity-100 transition-opacity"></div>
</div>
<div className="w-8 h-full relative group/point flex justify-center items-end">
<div className="w-2 h-2 rounded-full bg-primary absolute bottom-[50%] opacity-0 group-hover/point:opacity-100 transition-opacity"></div>
</div>
<div className="w-8 h-full relative group/point flex justify-center items-end">
<div className="w-2 h-2 rounded-full bg-primary absolute bottom-[80%] opacity-0 group-hover/point:opacity-100 transition-opacity"></div>
</div>
</div>
</div>
{/* X Axis Labels */}
<div className="absolute left-10 right-0 bottom-0 h-8 flex justify-around items-center text-[10px] text-on-surface-variant font-label-caps uppercase">
<span>Mon</span>
<span>Tue</span>
<span>Wed</span>
<span>Thu</span>
<span>Fri</span>
<span>Sat</span>
<span>Sun</span>
</div>
</div>
</div>
{/* Table Section */}
<div className="bg-surface-container-lowest rounded-xl border border-[#E2E8F0] overflow-hidden">
<div className="p-md border-b border-[#E2E8F0] flex justify-between items-center bg-white">
<h3 className="font-title-md text-title-md text-on-surface">Recent API Requests</h3>
<button className="text-primary font-label-caps text-label-caps uppercase hover:underline flex items-center gap-1">
                        View Logs
                        <ArrowRight className="w-4 h-4" />
</button>
</div>
<div className="overflow-x-auto w-full">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-[#F1F5F9] border-b border-[#E2E8F0]">
<th className="py-3 px-md font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Timestamp</th>
<th className="py-3 px-md font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Endpoint</th>
<th className="py-3 px-md font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Method</th>
<th className="py-3 px-md font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Status</th>
<th className="py-3 px-md font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider text-right">Response Time</th>
</tr>
</thead>
<tbody className="font-data-mono text-data-mono">
<tr className="bg-white border-b border-[#F1F5F9] hover:bg-surface-container-lowest/50 transition-colors">
<td className="py-3 px-md text-on-surface-variant">2023-10-27 14:32:01</td>
<td className="py-3 px-md text-on-surface">/v1/prices/maize</td>
<td className="py-3 px-md">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E0F2FE] text-[#0284C7]">GET</span>
</td>
<td className="py-3 px-md">
<span className="flex items-center gap-1.5 text-[#22C55E]">
<span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
                                        200 OK
                                    </span>
</td>
<td className="py-3 px-md text-right text-on-surface-variant">120ms</td>
</tr>
<tr className="bg-white border-b border-[#F1F5F9] hover:bg-surface-container-lowest/50 transition-colors">
<td className="py-3 px-md text-on-surface-variant">2023-10-27 14:31:45</td>
<td className="py-3 px-md text-on-surface">/v1/logistics/routes</td>
<td className="py-3 px-md">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E0F2FE] text-[#0284C7]">GET</span>
</td>
<td className="py-3 px-md">
<span className="flex items-center gap-1.5 text-[#22C55E]">
<span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
                                        200 OK
                                    </span>
</td>
<td className="py-3 px-md text-right text-on-surface-variant">145ms</td>
</tr>
<tr className="bg-white border-b border-[#F1F5F9] hover:bg-surface-container-lowest/50 transition-colors">
<td className="py-3 px-md text-on-surface-variant">2023-10-27 14:28:10</td>
<td className="py-3 px-md text-on-surface">/v1/prices/invalid_crop</td>
<td className="py-3 px-md">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E0F2FE] text-[#0284C7]">GET</span>
</td>
<td className="py-3 px-md">
<span className="flex items-center gap-1.5 text-[#EF4444]">
<span className="w-2 h-2 rounded-full bg-[#EF4444]"></span>
                                        404 Not Found
                                    </span>
</td>
<td className="py-3 px-md text-right text-on-surface-variant">85ms</td>
</tr>
<tr className="bg-white hover:bg-surface-container-lowest/50 transition-colors">
<td className="py-3 px-md text-on-surface-variant">2023-10-27 14:25:33</td>
<td className="py-3 px-md text-on-surface">/v1/user/keys</td>
<td className="py-3 px-md">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#DCFCE7] text-[#166534]">POST</span>
</td>
<td className="py-3 px-md">
<span className="flex items-center gap-1.5 text-[#22C55E]">
<span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
                                        201 Created
                                    </span>
</td>
<td className="py-3 px-md text-right text-on-surface-variant">210ms</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
    </div>
  );
}
