import type { Metadata } from "next";
import React from "react";
import { AdminRecordObservationContent } from "@/components/shared/AdminRecordObservationContent";

export const metadata: Metadata = {
  title: "Record Price Observation | 9jaPrice Admin",
  description: "Record new food price observations across Nigerian markets.",
};

export default function RecordObservationPage() {
  return <AdminRecordObservationContent />;
}