import { useReactTable } from "@tanstack/react-table"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface DataTableProps<TData> {
  data: TData[]
  columns: string[]
  title?: string
  onAction?: (row: TData) => void
}

export function DataTable<TData>({
  data,
  columns,
  title,
  onAction,
}: DataTableProps<TData>) {
  const { getTableBodyProps, getNoRowsTemplate, getRowId, } = useReactTable({
    data,
    columns,
    getCoreRowModel: {},
  })

  return (
    <Table>
      {title && <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead key={column}>
              {column}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>}

      <TableBody {...getTableBodyProps()}>
        {getNoRowsTemplate && <TableRow>{getNoRowsTemplate()}</TableRow>}

        {data.map((row) => {
          const cellValues: Record<string, unknown> = {}
          columns.forEach((column) => {
            cellValues[column] = row[column as keyof TData]
          })
          return (
            <TableRow
              key={getRowId!(row)}
              onClick={() => onAction && onAction(row)}
            >
              {columns.map((column) => (
                <TableCell key={column}>{cellValues[column]}</TableCell>
              ))}
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}