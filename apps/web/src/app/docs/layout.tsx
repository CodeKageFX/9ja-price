import React from "react";
import Link from "next/link";
import {
  BookOpen,
  Wheat,
  MapPin,
  Clock,
  Gauge,
  Webhook,
  HeadphonesIcon,
  CheckCircle2,
} from "lucide-react";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface flex">
      {/* Left Doc Sidebar */}
      <nav className="hidden md:flex h-screen w-64 fixed left-0 top-0 bg-surface border-r border-outline-variant flex-col py-6 z-40">
        {/* Brand */}
        <div className="px-6 mb-8 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-on-primary" />
          </div>
          <div>
            <h1 className="font-headline-lg text-title-md text-primary leading-tight">
              9jaPrice API
            </h1>
            <p className="font-label-caps text-label-caps text-on-surface-variant text-[10px]">
              Documentation
            </p>
          </div>
        </div>

        {/* Nav links */}
        <div className="flex-1 flex flex-col gap-1 px-3 overflow-y-auto">
          <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider px-3 mb-2">
            Getting Started
          </p>
          <Link
            href="/docs"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-primary bg-primary-container/10 font-body-sm text-body-sm font-medium border-r-4 border-primary"
          >
            <BookOpen className="w-4 h-4" />
            Introduction
          </Link>

          <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider px-3 mt-4 mb-2">
            Endpoints
          </p>
          <Link
            href="/docs/prices"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary font-body-sm text-body-sm transition-colors"
          >
            <Wheat className="w-4 h-4" />
            Commodity Prices
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary font-body-sm text-body-sm transition-colors"
          >
            <MapPin className="w-4 h-4" />
            Market Locations
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary font-body-sm text-body-sm transition-colors"
          >
            <Clock className="w-4 h-4" />
            Historical Data
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary font-body-sm text-body-sm transition-colors"
          >
            <Gauge className="w-4 h-4" />
            Rate Limits
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary font-body-sm text-body-sm transition-colors"
          >
            <Webhook className="w-4 h-4" />
            Webhooks
          </Link>
        </div>

        {/* Footer links */}
        <div className="mt-auto px-3 pt-4 border-t border-outline-variant">
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary font-body-sm text-body-sm transition-colors"
          >
            <HeadphonesIcon className="w-4 h-4" />
            Support
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary font-body-sm text-body-sm transition-colors"
          >
            <CheckCircle2 className="w-4 h-4" />
            Status
          </Link>
        </div>
      </nav>

      {/* Main + Right Aside */}
      <main className="ml-0 md:ml-64 flex-1 flex flex-col lg:flex-row min-h-screen">
        {children}
      </main>
    </div>
  );
}
