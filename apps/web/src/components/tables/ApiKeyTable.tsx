import { DataTable } from "@/components/tables/DataTable"
import { ApiKey } from "@/types/api-key"

export type ApiKeyTableColumn =
  | "name"
  | "key"
  | "permissions"
  | "status"
  | "actions"

export function ApiKeyTable({ data }: { data: ApiKey[] }) {
  const columns: ApiKeyTableColumn[] = ["name", "key", "permissions", "status"]

  return (
    <DataTable<ApiKey>
      data={data}
      columns={columns}
      title="API Keys"
      onAction={(key) => {
        // Handle key action
      }}
    />
  )
}