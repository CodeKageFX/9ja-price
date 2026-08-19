import { DataTable, type DataTableColumnDef } from "@/components/tables/DataTable"

export interface PriceTableRow {
  commodity: string
  market: string
  unit: string
  price: number
  date: string
}

const columns: DataTableColumnDef<PriceTableRow>[] = [
  { accessorKey: "commodity", header: "Food Item" },
  { accessorKey: "market", header: "Location" },
  { accessorKey: "unit", header: "Unit" },
  { accessorKey: "price", header: "Price (NGN)" },
  { accessorKey: "date", header: "Last Updated" },
]

export function PriceTable({ data }: { data: PriceTableRow[] }) {
  return (
    <DataTable
      data={data}
      columns={columns}
      title="Live Market Prices"
    />
  )
}
