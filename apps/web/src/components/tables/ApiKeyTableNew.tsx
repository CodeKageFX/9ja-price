import { Check, Copy, Edit2, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface ApiKeyItem {
  id: string;
  name: string;
  keyPrefix: string;
  created: string;
  lastUsed: string;
  status: "Active" | "Revoked";
}

interface ApiKeyTableNewProps {
  keys: ApiKeyItem[];
  copiedId: string | null;
  onCopy: (id: string, text: string) => void;
  onRevoke: (id: string) => void;
  onDelete: (id: string) => void;
}

function ApiKeyTableNew({
  keys,
  copiedId,
  onCopy,
  onRevoke,
  onDelete,
}: ApiKeyTableNewProps) {
  return (
    <div className="bg-surface-container-lowest rounded-xl border border-border-subtle overflow-hidden">
      <Table>
        <TableHeader className="uppercase bg-surface-container-low text-label-caps text-on-surface-variant font-label-caps tracking-wider">
          <TableRow className="border-border-subtle">
            <TableHead>Name &amp; Key</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Last Used</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="divide-y divide-surface-variant bg-surface-container-lowest">
          {keys.map((item) => (
            <TableRow
              key={item.id}
              className={`hover:bg-surface-bright transition-colors group ${
                item.status === "Revoked" ? "opacity-75" : ""
              }`}
            >
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span
                    className={`font-body-lg text-body-lg text-on-surface font-medium ${
                      item.status === "Revoked"
                        ? "text-on-surface-variant line-through decoration-outline-variant"
                        : ""
                    }`}
                  >
                    {item.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <code className="font-data-mono text-data-mono text-on-surface-variant bg-surface-container px-2 py-1 rounded">
                      {item.keyPrefix}
                    </code>
                    {item.status === "Active" && (
                      <button
                        onClick={() => onCopy(item.id, item.keyPrefix)}
                        className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
                        title="Copy to clipboard"
                      >
                        {copiedId === item.id ? (
                          <Check className="w-4 h-4 text-primary" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-body-sm text-body-sm text-on-surface-variant">
                {item.created}
              </TableCell>
              <TableCell className="font-body-sm text-body-sm text-on-surface-variant">
                {item.lastUsed}
              </TableCell>
              <TableCell>
                {item.status === "Active" ? (
                  <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-label-caps text-label-caps text-primary font-medium">
                      Active
                    </span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-surface-container border border-outline-variant">
                    <span className="w-2 h-2 rounded-full bg-outline" />
                    <span className="font-label-caps text-label-caps text-on-surface-variant">
                      Revoked
                    </span>
                  </div>
                )}
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  {item.status === "Active" ? (
                    <>
                      <button
                        className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-md transition-colors"
                        title="Rename"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onRevoke(item.id)}
                        className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container/20 rounded-md transition-colors"
                        title="Revoke"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => onDelete(item.id)}
                      className="p-2 text-outline hover:text-on-surface-variant hover:bg-surface-container rounded-md transition-colors"
                      title="Delete permanently"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ApiKeyTableNew;
