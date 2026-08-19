"use client"

import { useMemo } from "react"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"

export interface DataTableColumnDef<TData> {
  accessorKey: keyof TData & string
  header: string
}

export interface DataTableProps<TData> {
  data: TData[]
  columns: DataTableColumnDef<TData>[]
  title?: string
  onRowClick?: (row: TData) => void
}

export function DataTable<TData>({
  data,
  columns,
  title,
  onRowClick,
}: DataTableProps<TData>) {
  return (
    <div className="rounded-xl border border-border overflow-hidden">
      {title && (
        <div className="px-4 py-3 border-b border-border bg-surface-container-low/50">
          <h3 className="font-semibold text-ink-primary">{title}</h3>
        </div>
      )}
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHead key={col.accessorKey as string}>{col.header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center text-ink-secondary">
                No results.
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, index) => (
              <TableRow
                key={index}
                onClick={() => onRowClick?.(row)}
                className={onRowClick ? "cursor-pointer hover:bg-surface-container-low/50" : ""}
              >
                {columns.map((col) => (
                  <TableCell key={col.accessorKey as string}>
                    {String(row[col.accessorKey])}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
