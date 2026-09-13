"use client";

import { useState } from "react";
import {
  Play,
  History,
  Link2,
  SlidersHorizontal,
  List,
  Plus,
  Trash2,
  Copy,
  Check,
} from "lucide-react";

interface QueryParam {
  id: string;
  enabled: boolean;
  key: string;
  value: string;
}

const MOCK_RESPONSE = {
  status: "success",
  data: {
    commodity: "Rice (Local, Long Grain)",
    market: "Mile 12, Lagos",
    currency: "NGN",
    unit: "50kg bag",
    current_price: 85000,
    previous_price: 82500,
    price_change_pct: 3.03,
    trend: "up",
    last_updated: "2023-10-27T08:30:00Z",
    historical_data: [
      { date: "2023-10-20", price: 82500 },
      { date: "2023-10-13", price: 81000 },
    ],
    meta: {
      confidence_score: 0.94,
      data_points: 12,
      is_estimated: false,
    },
  },
};

function syntaxHighlight(json: string): string {
  return json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
      (match) => {
        let cls = "text-[#79c0ff]"; // number
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = "text-[#7ee787]"; // key
          } else {
            cls = "text-[#a5d6ff]"; // string
          }
        } else if (/true|false/.test(match)) {
          cls = "text-[#ff7b72]"; // boolean
        } else if (/null/.test(match)) {
          cls = "text-[#d2a8ff]"; // null
        }
        return `<span class="${cls}">${match}</span>`;
      },
    );
}

export function PlaygroundContent() {
  const [method, setMethod] = useState("GET");
  const [endpoint, setEndpoint] = useState("/prices");
  const [params, setParams] = useState<QueryParam[]>([
    { id: "1", enabled: true, key: "commodity", value: "rice" },
    { id: "2", enabled: true, key: "market", value: "mile_12_lagos" },
    { id: "3", enabled: false, key: "", value: "" },
  ]);
  const [hasResponse, setHasResponse] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const responseJson = JSON.stringify(MOCK_RESPONSE, null, 2);
  const highlighted = syntaxHighlight(responseJson);

  const addParam = () => {
    setParams([
      ...params,
      { id: Date.now().toString(), enabled: false, key: "", value: "" },
    ]);
  };

  const removeParam = (id: string) => {
    setParams(params.filter((p) => p.id !== id));
  };

  const updateParam = (
    id: string,
    field: keyof QueryParam,
    value: string | boolean,
  ) => {
    setParams(params.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  };

  const handleRun = () => {
    setIsRunning(true);
    setHasResponse(false);
    setTimeout(() => {
      setIsRunning(false);
      setHasResponse(true);
    }, 800);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(responseJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-6 flex-wrap">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            API Playground
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            Test endpoints interactively before integrating.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-surface-container-low text-on-surface font-body-sm text-body-sm font-medium rounded-lg border border-outline-variant hover:bg-surface-container-high transition-colors flex items-center gap-2">
            <History className="w-4 h-4" />
            History
          </button>
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="px-4 py-2 bg-primary-container text-on-primary font-body-sm text-body-sm font-medium rounded-lg hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-2 shadow-sm disabled:opacity-60"
          >
            <Play className="w-4 h-4" />
            {isRunning ? "Running..." : "Run Request"}
          </button>
        </div>
      </div>

      {/* Split Pane */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {/* Left Pane: Request Builder */}
        <div className="flex flex-col bg-surface-container-lowest overflow-y-auto">
          {/* URL Builder */}
          <div className="p-md border-b border-border-subtle">
            <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-4 flex items-center gap-2">
              <Link2 className="w-4 h-4" />
              Request URL
            </h3>
            <div className="flex gap-0 shadow-sm rounded-lg border border-outline-variant overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
              <select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                className="bg-surface-container-low text-on-surface font-data-mono text-data-mono border-none focus:ring-0 py-3 px-4 border-r border-outline-variant cursor-pointer"
              >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
              </select>
              <div className="flex-1 flex items-center bg-surface-container-lowest px-3">
                <span className="text-on-surface-variant font-data-mono text-data-mono mr-1 whitespace-nowrap">
                  https://api.9japrice.com/v1
                </span>
                <input
                  className="w-full bg-transparent border-none p-0 focus:ring-0 font-data-mono text-data-mono text-on-surface placeholder-on-surface-variant/50"
                  placeholder="/endpoint"
                  type="text"
                  value={endpoint}
                  onChange={(e) => setEndpoint(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Parameters Builder */}
          <div className="p-md flex-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                Query Parameters
              </h3>
              <button
                onClick={addParam}
                className="text-primary hover:text-tertiary transition-colors flex items-center gap-1 font-body-sm text-body-sm font-medium"
              >
                <Plus className="w-4 h-4" />
                Add Param
              </button>
            </div>
            <div className="space-y-3">
              {params.map((param) => (
                <div key={param.id} className="flex items-center gap-3 group">
                  <input
                    type="checkbox"
                    checked={param.enabled}
                    onChange={(e) =>
                      updateParam(param.id, "enabled", e.target.checked)
                    }
                    className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4 cursor-pointer"
                  />
                  <input
                    className="w-1/3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary font-data-mono text-data-mono text-on-surface bg-surface-container-lowest py-2 px-3 shadow-sm placeholder-on-surface-variant/50"
                    placeholder="Key"
                    type="text"
                    value={param.key}
                    onChange={(e) =>
                      updateParam(param.id, "key", e.target.value)
                    }
                  />
                  <span className="text-outline-variant">=</span>
                  <input
                    className="flex-1 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary font-data-mono text-data-mono text-on-surface bg-surface-container-lowest py-2 px-3 shadow-sm placeholder-on-surface-variant/50"
                    placeholder="Value"
                    type="text"
                    value={param.value}
                    onChange={(e) =>
                      updateParam(param.id, "value", e.target.value)
                    }
                  />
                  <button
                    onClick={() => removeParam(param.id)}
                    className="text-on-surface-variant opacity-0 group-hover:opacity-100 hover:text-error transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Headers Section */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-2">
                  <List className="w-4 h-4" />
                  Headers
                </h3>
                <span className="font-body-sm text-[12px] bg-surface-container-low px-2 py-1 rounded text-on-surface-variant border border-outline-variant">
                  2 Active
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex gap-3 items-center text-sm">
                  <div className="w-1/3 font-data-mono text-data-mono text-on-surface-variant">
                    Authorization
                  </div>
                  <div className="flex-1 font-data-mono text-data-mono text-on-surface truncate">
                    Bearer 9ja_live_...9a8f
                  </div>
                </div>
                <div className="flex gap-3 items-center text-sm">
                  <div className="w-1/3 font-data-mono text-data-mono text-on-surface-variant">
                    Accept
                  </div>
                  <div className="flex-1 font-data-mono text-data-mono text-on-surface">
                    application/json
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Pane: Response */}
        <div className="flex flex-col bg-[#0d1117] relative">
          {/* Response Header */}
          <div className="h-12 border-b border-white/10 flex items-center justify-between px-4 bg-[#161b22] shrink-0">
            {hasResponse && !isRunning ? (
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-[#70db9d] font-data-mono text-data-mono">
                  <span className="w-2 h-2 rounded-full bg-[#70db9d] shadow-[0_0_8px_rgba(112,219,157,0.5)]" />
                  200 OK
                </span>
                <span className="text-[#8b949e] font-data-mono text-[12px]">
                  245ms
                </span>
                <span className="text-[#8b949e] font-data-mono text-[12px]">
                  1.2KB
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-[#8b949e] font-data-mono text-[12px]">
                  {isRunning ? "Sending request..." : "No response yet"}
                </span>
              </div>
            )}
            <div className="flex gap-2">
              <button
                onClick={handleCopy}
                className="p-1.5 text-[#8b949e] hover:text-white transition-colors rounded hover:bg-white/10"
                title="Copy JSON"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-[#70db9d]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Code Canvas */}
          <div className="flex-1 overflow-auto p-4">
            {isRunning ? (
              <div className="flex items-center gap-3 text-[#8b949e] font-data-mono text-data-mono">
                <div className="w-4 h-4 border-2 border-[#70db9d]/30 border-t-[#70db9d] rounded-full animate-spin" />
                Fetching response...
              </div>
            ) : hasResponse ? (
              <pre className="font-data-mono text-data-mono leading-relaxed text-[#e6edf3] whitespace-pre-wrap">
                <code dangerouslySetInnerHTML={{ __html: highlighted }} />
              </pre>
            ) : (
              <div className="flex items-center justify-center h-full text-[#8b949e] font-data-mono text-data-mono">
                Run a request to see the response
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
