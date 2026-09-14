import type { Metadata } from "next";
import { PricesDocsContent } from "@/components/shared/PricesDocsContent";
import DocsHeader from "@/components/docs/DocsHeader";
import DocsContainer from "@/components/docs/DocsContainer";
import DocsBreadcrumb from "@/components/docs/DocsBreadcrumb";

export const metadata: Metadata = {
  title: "Commodity Prices Endpoint | 9jaPrice API Docs",
  description:
    "Retrieve real-time and historical food commodity prices across Nigerian markets using the GET /prices endpoint.",
};

export default function DocsPricesPage() {
  return (
    <>
      <DocsHeader pageTitle="Commodity Prices" />
      <DocsBreadcrumb currentPage="Commodity Prices" />

      <DocsContainer>
        <PricesDocsContent />
      </DocsContainer>
    </>
  );
}
