import friends from "@/data/friends.json";
import friendCard from "@/components/friendCard";

export default function Home() {
  return (
    <div>
      {friends.map((f) => (
        <friendCard key={f.id} friend={f} />
      ))}
    </div>
  );
}