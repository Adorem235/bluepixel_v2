"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-transparent shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Bluepixel Studios
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/Pages/About" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link href="/Pages/Pricing" className="text-gray-700 hover:text-blue-600">
            Pricing
          </Link>
          <Link href="/Pages/Contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}