"use client";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2c5e4f] text-white mt-20">
      
      
      <div className="max-w-6xl mx-auto text-center py-16 px-4">
        
        <h2 className="text-5xl font-extrabold mb-4">
          KeenKeeper
        </h2>

        <p className="text-gray-200 text-sm max-w-xl mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>

        <p className="text-sm font-semibold mb-4">Social Links</p>

        <div className="flex justify-center gap-5">
          <div className="bg-white text-black p-3 rounded-full hover:scale-110 transition">
            <FaInstagram size={18} />
          </div>
          <div className="bg-white text-black p-3 rounded-full hover:scale-110 transition">
            <FaFacebookF size={18} />
          </div>
          <div className="bg-white text-black p-3 rounded-full hover:scale-110 transition">
            <FaTwitter size={18} />
          </div>
        </div>

      </div>

      
      <div className="border-t border-green-700 opacity-40"></div>

      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center py-6 px-4 text-sm text-gray-300">
        
        <p>© 2026 KeenKeeper. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span className="hover:underline cursor-pointer">Terms of Service</span>
          <span className="hover:underline cursor-pointer">Cookies</span>
        </div>

      </div>
    </footer>
  );
}