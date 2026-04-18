"use client";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useTimeline } from "@/context/TimelineContext";

export default function Stats() {
  const { entries } = useTimeline();

  const data = ["Call", "Text", "Video"].map((t) => ({
    name: t,
    value: entries.filter((e) => e.type === t).length
  }));

  // 🎨 COLORS (important fix)
  const COLORS = ["#22c55e", "#3b82f6", "#f59e0b"]; 
  // green, blue, yellow (clean + distinguishable)

  return (
    <div className="p-6 text-center">
      <h1 className="text-xl font-bold mb-4">
        Friendship Analytics
      </h1>

      <div className="flex justify-center">
        <PieChart width={350} height={350}>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={120}
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}