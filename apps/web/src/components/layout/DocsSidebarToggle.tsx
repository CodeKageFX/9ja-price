"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Gauge,
  HeadphonesIcon,
  Lock,
  MapPin,
  Menu,
  Wheat,
  X,
} from "lucide-react";

const NAV_GROUPS = [
  {
    label: "Getting Started",
    items: [
      { href: "/docs", label: "Introduction", icon: BookOpen },
      { href: "/docs/quickstart", label: "Quickstart", icon: BookOpen },
      { href: "/docs/authentication", label: "Authentication", icon: Lock },
    ],
  },
  {
    label: "Endpoints",
    items: [
      { href: "/docs/foods", label: "Foods API", icon: Wheat },
      { href: "/docs/prices", label: "Commodity Prices", icon: Wheat },
      { href: "/docs/markets", label: "Markets API", icon: MapPin },
      { href: "/docs/prices", label: "Historical Data", icon: Clock },
      { href: "/docs/authentication", label: "Rate Limits", icon: Gauge },
    ],
  },
];

const BOTTOM_ITEMS = [
  { label: "Support", icon: HeadphonesIcon },
  { label: "Status", icon: CheckCircle2 },
];

function NavItems({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      {NAV_GROUPS.map((group) => (
        <div key={group.label}>
          <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider px-3 mb-2">
            {group.label}
          </p>
          <div className="flex flex-col gap-1">
            {group.items.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={`${item.href}-${item.label}`}
                  href={item.href}
                  onClick={onNavigate}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary font-body-sm text-body-sm transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}

function BottomItems() {
  return (
    <div className="mt-auto px-3 pt-4 border-t border-outline-variant">
      {BOTTOM_ITEMS.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.label}
            type="button"
            disabled
            className="flex w-full items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant/60 font-body-sm text-body-sm cursor-not-allowed"
            title={`${item.label} route pending`}
          >
            <Icon className="w-4 h-4" />
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

export function DocsSidebarToggle() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open documentation navigation"
        className="fixed left-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant shadow-sm transition-colors hover:bg-surface-container-high focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
      >
        <Menu className="h-5 w-5" aria-hidden="true" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-surface py-6 shadow-xl transition-transform duration-200 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-container">
              <BookOpen className="h-4 w-4 text-on-primary" />
            </div>
            <div>
              <h1 className="font-headline-lg text-title-md text-primary leading-tight">
                9jaPrice API
              </h1>
              <p className="font-label-caps text-[10px] text-on-surface-variant">
                Documentation
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close documentation navigation"
            className="rounded p-1 text-on-surface-variant hover:bg-surface-container-high focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-3">
          <div className="flex flex-col gap-4">
            <NavItems onNavigate={() => setOpen(false)} />
          </div>
        </div>
        <BottomItems />
      </aside>
    </>
  );
}
