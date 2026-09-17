"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";

export function DeveloperSidebarToggle() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <button
        type="button"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open navigation"
        className="fixed left-4 top-5 z-31 flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant shadow-sm transition-colors hover:bg-surface-container-high focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
      >
        <Menu className="h-5 w-5" aria-hidden="true" />
      </button>
    </>
  );
}
