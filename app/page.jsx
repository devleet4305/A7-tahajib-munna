
import friends from "@/data/friends.json";
import FriendCard from "@/components/FriendCard";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-6">

      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500">
          Your personal list of meaningful connections
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {friends.map((f) => (
          <FriendCard key={f.id} friend={f} />
        ))}
      </div>

    </div>
  );
}