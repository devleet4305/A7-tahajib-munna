"use client";

import { PieChart, Pie } from "recharts";
import { useTimeline } from "@/context/TimelineContext";

export default function Stats() {
  const { entries } = useTimeline();

  const data = ["Call", "Text", "Video"].map((t) => ({
    name: t,
    value: entries.filter((e) => e.type === t).length
  }));

  return (
    <div className="p-6 text-center">
      <h1 className="text-xl font-bold mb-4">
        Friendship Analytics
      </h1>

      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" outerRadius={100} />
      </PieChart>
    </div>
  );
}