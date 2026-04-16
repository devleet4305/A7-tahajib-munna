"use client";
import { useTimeline } from "@/context/timelineContext";

export default function timeline() {
  const { entries } = usetimeline();

  return (
    <div>
      {entries.map((e, i) => (
        <p key={i}>{e.title}</p>
      ))}
    </div>
  );
}