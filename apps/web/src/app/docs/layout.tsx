import React from "react";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { DocsSidebarToggle } from "@/components/layout/DocsSidebarToggle";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Left Doc Sidebar */}
      <DocsSidebarToggle />
      <DocsSidebar />

      {/* Main + Right Aside */}
      <main className="ml-0 lg:ml-64 flex-1 flex flex-col gap-6 min-h-screen min-w-0">
        {children}
      </main>
    </div>
  );
}
