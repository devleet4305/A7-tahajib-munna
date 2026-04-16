"use client";
import { useRouter } from "next/navigation";

export default function friendCard({ friend }) {
  const router = useRouter();

  return (
    <div onClick={() => router.push(`/friend/${friend.id}`)}>
      <h2>{friend.name}</h2>
    </div>
  );
}