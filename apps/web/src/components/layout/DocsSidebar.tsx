import Link from "next/link";
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Gauge,
  HeadphonesIcon,
  Lock,
  MapPin,
  Wheat,
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

export function DocsSidebar() {
  return (
    <nav className="hidden md:flex h-screen w-64 fixed left-0 top-0 bg-surface border-r border-outline-variant flex-col py-6 z-40">
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

      <div className="flex-1 flex flex-col gap-1 px-3 overflow-y-auto">
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
      </div>

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
    </nav>
  );
}
