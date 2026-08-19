import type { Metadata } from "next";
import React from "react";
import { AdminPriceManagementContent } from "@/components/shared/AdminPriceManagementContent";

export const metadata: Metadata = {
  title: "Admin Price Management | 9jaPrice",
  description: "Manage, filter, and verify food price observations across Nigerian markets.",
};

export default function AdminPriceManagementPage() {
  return <AdminPriceManagementContent />;
}
