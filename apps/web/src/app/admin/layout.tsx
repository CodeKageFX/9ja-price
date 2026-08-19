import React from "react";
import { Sidebar } from "@/components/layout/Sidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#F8FAFC] text-on-surface min-h-screen flex font-body-lg antialiased">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Canvas */}
      <main className="lg:ml-0 flex-1 flex flex-col h-full bg-[#F8FAFC]">
        {children}
      </main>
    </div>
  );
}
