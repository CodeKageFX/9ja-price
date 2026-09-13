import React from "react";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { DocsSidebarToggle } from "@/components/layout/DocsSidebarToggle";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface flex">
      {/* Left Doc Sidebar */}
      <DocsSidebarToggle />
      <DocsSidebar />

      {/* Main + Right Aside */}
      <main className="ml-0 md:ml-64 flex-1 flex flex-col lg:flex-row min-h-screen">
        {children}
      </main>
    </div>
  );
}
