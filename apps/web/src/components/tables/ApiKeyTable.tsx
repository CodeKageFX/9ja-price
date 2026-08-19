import { DataTable, type DataTableColumnDef } from "@/components/tables/DataTable"

export interface ApiKeyTableRow {
  id: string
  name: string
  key: string
  permissions: string[]
  status: string
}

const columns: DataTableColumnDef<ApiKeyTableRow>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "key", header: "Key" },
  { accessorKey: "permissions", header: "Permissions" },
  { accessorKey: "status", header: "Status" },
]

export function ApiKeyTable({ data }: { data: ApiKeyTableRow[] }) {
  return (
    <DataTable
      data={data}
      columns={columns}
      title="API Keys"
    />
  )
}
