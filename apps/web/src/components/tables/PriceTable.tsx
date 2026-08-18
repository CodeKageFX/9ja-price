import { DataTable } from "@/components/tables/DataTable"
import { Price } from "@/types/price"

export type PriceTableColumn =
  | "commodity"
  | "market"
  | "unit"
  | "price"
  | "date"
  | "actions"

export interface PriceTableRow {
  commodity: string
  market: string
  unit: string
  price: number
  date: string
}

export function PriceTable({ data }: { data: PriceTableRow[] }) {
  const columns: PriceTableColumn[] = ["commodity", "market", "unit", "price", "date"]

  return (
    <DataTable<PriceTableRow>
      data={data}
      columns={columns}
      title="Live Market Prices"
      onAction={(row) => {
        // Handle row action
      }}
    />
  )
}