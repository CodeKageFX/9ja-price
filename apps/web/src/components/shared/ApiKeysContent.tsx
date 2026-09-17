"use client";

import { useState } from "react";
import { Plus, Info, Copy, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import ApiKeyTableNew, {
  type ApiKeyItem,
} from "@/components/tables/ApiKeyTableNew";

const INITIAL_KEYS: ApiKeyItem[] = [
  {
    id: "1",
    name: "Production Environment",
    keyPrefix: "9ja_live_••••••••",
    created: "Oct 12, 2023",
    lastUsed: "2 hours ago",
    status: "Active",
  },
  {
    id: "2",
    name: "Staging Integration",
    keyPrefix: "9ja_test_••••••••",
    created: "Nov 01, 2023",
    lastUsed: "Yesterday",
    status: "Active",
  },
  {
    id: "3",
    name: "Legacy Auth Key",
    keyPrefix: "9ja_live_••••••••",
    created: "Jan 15, 2023",
    lastUsed: "Aug 10, 2023",
    status: "Revoked",
  },
];

export function ApiKeysContent() {
  const [keys, setKeys] = useState<ApiKeyItem[]>(INITIAL_KEYS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newKeyName, setNewKeyName] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [newlyCreatedKey, setNewlyCreatedKey] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCreateKey = () => {
    if (!newKeyName.trim()) return;

    const generated = `9ja_live_${Math.random().toString(36).substring(2, 12)}`;
    const newEntry: ApiKeyItem = {
      id: Date.now().toString(),
      name: newKeyName.trim(),
      keyPrefix: `9ja_live_••••${generated.slice(-4)}`,
      created: "Just now",
      lastUsed: "Never",
      status: "Active",
    };

    setKeys([newEntry, ...keys]);
    setNewlyCreatedKey(generated);
    setNewKeyName("");
  };

  const handleRevoke = (id: string) => {
    setKeys(
      keys.map((k) => (k.id === id ? { ...k, status: "Revoked" as const } : k)),
    );
  };

  const handleDelete = (id: string) => {
    setKeys(keys.filter((k) => k.id !== id));
  };

  return (
    <>
      {/* Page Header */}
      <div className="flex items-center flex-wrap gap-md justify-between mb-lg mx-auto">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-2">
            API Keys
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Manage your authentication tokens for the Market Intelligence
            Portal.
          </p>
        </div>
        <button
          onClick={() => {
            setNewlyCreatedKey(null);
            setIsModalOpen(true);
          }}
          className="bg-primary-container text-on-primary font-label-caps text-label-caps px-md py-sm rounded-lg flex items-center gap-2 hover:bg-tertiary-container transition-colors shadow-sm font-semibold whitespace-nowrap"
        >
          <Plus className="w-4 h-4" />
          Create API Key
        </button>
      </div>

      {/* Data Container */}
      <div className="mx-auto">
        {/* Warning Banner */}
        <div className="bg-surface-container-low border border-border-subtle   rounded-lg p-sm mb-lg flex items-start gap-4">
          <Info className="w-5 h-5 text-primary shrink-0 mt-1" />
          <div>
            <h3 className="font-title-md text-title-md text-on-surface mb-1 font-semibold">
              Keep your keys secure
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Do not share your API keys in publicly accessible areas such as
              GitHub, client-side code, and so forth. Treat them like passwords.
            </p>
          </div>
        </div>

        <ApiKeyTableNew
          keys={keys}
          copiedId={copiedId}
          onCopy={handleCopy}
          onRevoke={handleRevoke}
          onDelete={handleDelete}
        />
      </div>

      {/* Create API Key Modal Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-surface text-on-surface border border-outline-variant w-full">
          <DialogHeader>
            <DialogTitle className="text-title-md font-headline-lg text-on-surface">
              Create New API Key
            </DialogTitle>
            <DialogDescription className="text-body-sm font-body-sm text-on-surface-variant">
              Generate a secret API token to authenticate requests to the
              9jaPrice API.
            </DialogDescription>
          </DialogHeader>

          {newlyCreatedKey ? (
            <div className="space-y-md py-sm">
              <div className="p-sm bg-primary/10 border border-primary/20 rounded-lg text-primary text-body-sm">
                Key created successfully! Please copy it now as you won&apos;t
                be able to see it again.
              </div>
              <div className="flex items-center gap-sm bg-surface-container-lowest border border-outline-variant p-sm rounded-lg">
                <code className="font-data-mono text-body-sm flex-1 text-on-surface select-all">
                  {newlyCreatedKey}
                </code>
                <button
                  onClick={() => handleCopy("new-key", newlyCreatedKey)}
                  className="p-xs bg-primary-container text-on-primary rounded hover:opacity-90 transition-opacity"
                >
                  {copiedId === "new-key" ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-md py-sm">
              <div>
                <label className="block text-body-sm font-medium text-on-surface mb-xs">
                  Key Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mobile App Production"
                  value={newKeyName}
                  onChange={(e) => setNewKeyName(e.target.value)}
                  className="w-full h-10 px-sm bg-surface-container-lowest border border-outline-variant rounded-lg text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
          )}

          <DialogFooter className="gap-sm">
            {newlyCreatedKey ? (
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setNewlyCreatedKey(null);
                }}
                className="bg-primary-container text-on-primary px-md py-xs rounded-lg text-body-sm font-medium hover:opacity-90"
              >
                Done
              </button>
            ) : (
              <>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-md py-xs rounded-lg border border-outline-variant text-on-surface text-body-sm font-medium hover:bg-surface-container-low"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateKey}
                  disabled={!newKeyName.trim()}
                  className="bg-primary-container text-on-primary px-md py-xs rounded-lg text-body-sm font-medium hover:opacity-90 disabled:opacity-50"
                >
                  Create Key
                </button>
              </>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
