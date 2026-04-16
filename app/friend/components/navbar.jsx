"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Clock, BarChart2 } from "lucide-react";

export default function Navbar() {
  const path = usePathname();

  const linkStyle = (href) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
      path === href
        ? "bg-green-700 text-white"
        : "text-gray-500 hover:bg-gray-100"
    }`;

  return (
    <nav className="border-b bg-white">
      <div className="container flex justify-between items-center h-16">
        <h1 className="font-bold text-lg text-gray-800">KeenKeeper</h1>

        <div className="flex gap-2">
          <Link href="/" className={linkStyle("/")}>
            <Home size={16} /> Home
          </Link>
          <Link href="/timeline" className={linkStyle("/timeline")}>
            <Clock size={16} /> Timeline
          </Link>
          <Link href="/stats" className={linkStyle("/stats")}>
            <BarChart2 size={16} /> Stats
          </Link>
        </div>
      </div>
    </nav>
  );
}