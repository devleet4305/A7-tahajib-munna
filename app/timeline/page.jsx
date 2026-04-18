"use client";

import { useTimeline } from "@/context/TimelineContext";

export default function Timeline() {
  const { entries } = useTimeline();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Timeline</h1>

      {entries.map((e, i) => (
        <div key={i} className="bg-white p-3 mb-2 rounded shadow">
          <p>{e.title}</p>
          <small>{new Date(e.date).toDateString()}</small>
        </div>
      ))}
    </div>
  );
}