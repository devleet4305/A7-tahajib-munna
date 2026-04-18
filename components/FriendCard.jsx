"use client";

import { useRouter } from "next/navigation";

export default function FriendCard({ friend }) {
  const router = useRouter();

  const colors = {
    overdue: "bg-red-100 text-red-600",
    "almost due": "bg-yellow-100 text-yellow-600",
    "on-track": "bg-green-100 text-green-600"
  };

  return (
    <div
      onClick={() => router.push(`/friend/${friend.id}`)}
      className="bg-white p-4 rounded-xl shadow cursor-pointer"
    >
      <img src={friend.picture} className="w-12 h-12 rounded-full" />
      <h3 className="font-semibold mt-2">{friend.name}</h3>
      <p className="text-sm">{friend.days_since_contact} days ago</p>

      <div className="flex gap-1 mt-2">
        {friend.tags.map((t, i) => (
          <span key={i} className="text-xs bg-gray-100 px-2 rounded">
            {t}
          </span>
        ))}
      </div>

      <span className={`text-xs px-2 py-1 rounded mt-2 inline-block ${colors[friend.status]}`}>
        {friend.status}
      </span>
    </div>
  );
}