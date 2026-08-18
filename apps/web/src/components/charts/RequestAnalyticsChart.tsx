import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, } from "recharts"
import { cn } from "@/lib/utils"

export interface RequestAnalyticsChartProps {
  data: {
    date: string
    requests: number
  }[]
  height?: number
}

export function RequestAnalyticsChart({ data, height = 200 }: RequestAnalyticsChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="h-48 flex items-center justify-center text-ink-secondary">
        No data available
      </div>
    )
  }

  return (
    <div className="rounded-lg overflow-hidden">
      <LineChart
        data={data}
        height={height}
        margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
      >
        <XAxis
          dataKey="date"
          type="number"
          tick={{ fontSize: 12 }}
          domain={["dataMin", "dataMax"]}
        />
        <YAxis
          type="number"
          tick={{ fontSize: 12 }}
          domain={["0", "dataMax"]}
        />
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
        <Line
          type="monotone"
          dataKey="requests"
          stroke="#3b82f6"
          activeDot={{ r: 8 }}
          dot={{ r: 4 }}
        />
      </LineChart>
    </div>
  )
}