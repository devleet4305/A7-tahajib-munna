"use client";
import { usetimeline } from "@/context/timelineContext";

export default function Stats() {
  const { entries } = usetimeline();

  return <div>Total logs: {entries.length}</div>;
}