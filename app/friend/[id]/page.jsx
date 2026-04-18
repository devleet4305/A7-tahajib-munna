"use client";

import friends from "@/data/friends.json";
import { useParams } from "next/navigation";
import { useTimeline } from "@/context/TimelineContext";
import toast from "react-hot-toast";

export default function Page() {
  const { id } = useParams();
  const friend = friends.find((f) => f.id == id);
  const { addEntry } = useTimeline();

  const handle = (type) => {
    addEntry({
      type,
      title: `${type} with ${friend.name}`,
      date: new Date()
    });

    toast.success(`${type} added`);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">{friend.name}</h1>

      <div className="flex gap-3 mt-4">
        <button onClick={() => handle("Call")}>Call</button>
        <button onClick={() => handle("Text")}>Text</button>
        <button onClick={() => handle("Video")}>Video</button>
      </div>
    </div>
  );
}