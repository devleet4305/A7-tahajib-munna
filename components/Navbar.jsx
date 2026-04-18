"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Clock, BarChart2 } from "lucide-react";

export default function Navbar() {
  const path = usePathname();

  const nav = (href, label, Icon) => (
    <Link
      href={href}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
        path === href
          ? "bg-green-700 text-white"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      <Icon size={16} />
      {label}
    </Link>
  );

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4">
        <h1 className="font-bold">KeenKeeper</h1>
        <div className="flex gap-2">
          {nav("/", "Home", Home)}
          {nav("/timeline", "Timeline", Clock)}
          {nav("/stats", "Stats", BarChart2)}
        </div>
      </div>
    </nav>
  );
}