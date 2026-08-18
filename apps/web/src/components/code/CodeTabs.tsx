import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code/CodeBlock"

export interface CodeTabsProps {
  tabs: {
    label: string
    language: "json" | "javascript" | "bash" | "curl"
    code: string
  }[]
}

export function CodeTabs({ tabs }: CodeTabsProps) {
  return (
    <Tabs className="w-full">
      <TabsList className="border-b">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.label} className="p-4 text-sm font-medium">
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.label} className="p-4">
          <CodeBlock code={tab.code} language={tab.language} />
        </TabsContent>
      ))}
    </Tabs>
  )
}