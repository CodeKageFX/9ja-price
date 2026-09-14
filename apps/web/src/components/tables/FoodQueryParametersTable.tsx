import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const QUERY_PARAMETERS = [
  {
    name: "category",
    type: "string",
    description: (
      <>
        Filter by food category (e.g.,{" "}
        <code className="bg-surface-container px-1 rounded font-mono text-[13px]">
          grains
        </code>
        ,{" "}
        <code className="bg-surface-container px-1 rounded font-mono text-[13px]">
          tubers
        </code>
        ,{" "}
        <code className="bg-surface-container px-1 rounded font-mono text-[13px]">
          vegetables
        </code>
        ).
      </>
    ),
  },
  {
    name: "limit",
    type: "integer",
    description: "Maximum number of items to return. Default: 50. Max: 100.",
  },
  {
    name: "status",
    type: "string",
    description: (
      <>
        Operational status ({" "}
        <code className="bg-surface-container px-1 rounded font-mono text-[13px]">
          active
        </code>
        ,{" "}
        <code className="bg-surface-container px-1 rounded font-mono text-[13px]">
          deprecated
        </code>
        ).
      </>
    ),
  },
];

export function FoodQueryParametersTable() {
  return (
    <div className="bg-white border border-border-subtle rounded-lg overflow-hidden shadow-sm">
      <Table>
        <TableCaption className="sr-only">
          Foods API query parameters
        </TableCaption>
        <TableHeader className="bg-surface-container-low text-[12px] font-semibold text-secondary uppercase">
          <TableRow>
            <TableHead className="py-3 px-4 border-b border-border-subtle">
              Parameter
            </TableHead>
            <TableHead className="py-3 px-4 border-b border-border-subtle">
              Type
            </TableHead>
            <TableHead className="py-3 px-4 border-b border-border-subtle">
              Description
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-[14px] text-[#191c1e]">
          {QUERY_PARAMETERS.map((parameter, index) => (
            <TableRow
              key={parameter.name}
              className={`${
                index < QUERY_PARAMETERS.length - 1
                  ? "border-b border-border-subtle"
                  : ""
              } hover:bg-[#f7f9fb] transition-colors`}
            >
              <TableCell className="py-3 px-4 font-mono text-primary font-semibold">
                {parameter.name}
              </TableCell>
              <TableCell className="py-3 px-4 text-on-surface-variant">
                {parameter.type}
              </TableCell>
              <TableCell className="py-3 px-4">
                {parameter.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
