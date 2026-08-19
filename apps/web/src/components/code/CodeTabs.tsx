"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/code/CodeBlock"

export interface CodeTabsProps {
  tabs: {
    label: string
    language: string
    code: string
  }[]
}

export function CodeTabs({ tabs }: CodeTabsProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <div className="flex border-b border-border bg-surface-container-low/50">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2.5 text-sm font-medium transition-colors ${
              activeTab === index
                ? "border-b-2 border-primary text-primary"
                : "text-ink-secondary hover:text-ink-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-0">
        <CodeBlock code={tabs[activeTab].code} language={tabs[activeTab].language} />
      </div>
    </div>
  )
}
