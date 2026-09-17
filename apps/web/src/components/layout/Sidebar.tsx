"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Key,
  BarChart2,
  Terminal,
  FileText,
  Settings,
  X,
  Database,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
}

const NAV_ITEMS = [
  {
    group: "Developer Portal",
    items: [
      { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
      { href: "/api-keys", label: "API Keys", icon: Key },
      { href: "/usage", label: "Usage", icon: BarChart2 },
      { href: "/playground", label: "Playground", icon: Terminal },
      { href: "/settings", label: "Settings", icon: Settings },
    ],
  },
  {
    group: "Documentation",
    items: [{ href: "/docs", label: "API Docs", icon: FileText }],
  },
  {
    group: "Admin",
    items: [
      { href: "/admin", label: "Price Management", icon: Database },
      {
        href: "/admin/observations/new",
        label: "Record Price",
        icon: Settings,
      },
    ],
  },
];

export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-surface border-r border-outline-variant transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:z-auto",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-outline-variant">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary-container flex items-center justify-center text-on-primary font-bold">
              9
            </div>
            <div>
              <h1 className="font-headline-lg text-title-md font-bold text-primary leading-tight">
                9jaPrice
              </h1>
              <p className="font-label-caps text-label-caps text-on-surface-variant/70 uppercase">
                Dev Portal
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-1 rounded hover:bg-surface-container-high"
          >
            <X className="h-5 w-5 text-on-surface-variant" />
          </button>
        </div>

        <ScrollArea className="flex-1 py-4">
          <nav className="px-3 space-y-6">
            {NAV_ITEMS.map((group) => (
              <div key={group.group}>
                <h4 className="px-3 text-label-caps font-label-caps text-on-surface-variant uppercase tracking-wider mb-2">
                  {group.group}
                </h4>
                <div className="space-y-1">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    const isActive =
                      pathname === item.href ||
                      (item.href !== "/" && pathname.startsWith(item.href));
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 text-body-sm font-medium transition-colors",
                          isActive
                            ? "bg-primary-container/10 text-primary font-semibold border-r-4 border-primary"
                            : "text-on-surface-variant hover:bg-surface-container-high",
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </ScrollArea>
      </aside>
    </>
  );
}
