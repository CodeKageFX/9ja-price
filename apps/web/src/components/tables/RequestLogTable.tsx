import { DataTable } from "@/components/tables/DataTable"

export type RequestLogColumn = "date" | "method" | "endpoint" | "status" | "duration" | "actions"

export interface RequestLogRow {
  date: string
  method: string
  endpoint: string
  status: string
  duration: string
}

export function RequestLogTable({ data }: { data: RequestLogRow[] }) {
  const columns: RequestLogColumn[] = ["date", "method", "endpoint", "status"]

  return (
    <DataTable<RequestLogRow>
      data={data}
      columns={columns}
      title="Recent API Requests"
    />
  )
}