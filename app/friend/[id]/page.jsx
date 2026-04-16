"use client";

import friends from "@/data/friends.json";
import { useParams } from "next/navigation";
import { useTimeline } from "@/context/timelineContext";

export default function Page() {
  const { id } = useParams();
  const friend = friends.find((f) => f.id == id);

  const { addEntry } = useTimeline();

  const handleAction = (type) => {
    addEntry({
      type,
      title: `${type} with ${friend.name}`,
      date: new Date()
    });
  };

  return (
    <div>
      <h1>{friend.name}</h1>

      <button onClick={() => handleAction("Call")}>Call</button>
      <button onClick={() => handleAction("Text")}>Text</button>
      <button onClick={() => handleAction("Video")}>Video</button>
    </div>
  );
}