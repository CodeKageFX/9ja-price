import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function RecentApiRequestsTable() {
  return (
    <div className="bg-surface-container-lowest rounded-xl border border-border-subtle overflow-hidden">
      <div className="p-sm border-b border-border-subtle flex justify-between items-center bg-white">
        <h3 className="font-title-md text-title-md text-on-surface">
          Recent API Requests
        </h3>
        <Link
          href="/playground"
          className="text-primary font-label-caps text-label-caps uppercase hover:underline flex items-center gap-1"
        >
          View Logs
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <Table>
        <TableCaption>A list of recent API Requests</TableCaption>
        <TableHeader className="uppercase bg-surface-variant py-12 text-label-caps text-on-surface-variant font-label-caps tracking-wider">
          <TableRow className="border-border-subtle">
            <TableHead>timestamp</TableHead>
            <TableHead>endpoint</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>status</TableHead>
            <TableHead className="text-right">reponse time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="font-data-mono text-data-mono text-on-surface-variant">
          <TableRow>
            <TableCell> 2026-08-18 14:32:01</TableCell>
            <TableCell>/v1/prices/maize</TableCell>
            <TableCell>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E0F2FE] text-[#0284C7]">
                GET
              </span>
            </TableCell>
            <TableCell>
              <span className="flex items-center gap-1.5 text-[#22C55E]">
                <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                200 OK
              </span>
            </TableCell>
            <TableCell className="text-right">120ms</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default RecentApiRequestsTable;
