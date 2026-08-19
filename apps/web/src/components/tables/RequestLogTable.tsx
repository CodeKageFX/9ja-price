import { DataTable, type DataTableColumnDef } from "@/components/tables/DataTable"

export interface RequestLogRow {
  method: string
  endpoint: string
  status: number
  responseTime: number
  timestamp: string
}

const columns: DataTableColumnDef<RequestLogRow>[] = [
  { accessorKey: "method", header: "Method" },
  { accessorKey: "endpoint", header: "Endpoint" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "responseTime", header: "Response Time" },
  { accessorKey: "timestamp", header: "Timestamp" },
]

export function RequestLogTable({ data }: { data: RequestLogRow[] }) {
  return (
    <DataTable
      data={data}
      columns={columns}
      title="Recent Requests"
    />
  )
}
