"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
      <header className="shadow-md sticky top-0 z-50" style={{ backgroundColor: "#444A5C" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo_transparent.png" alt="Blue Pixel logo" width={200} height={100}/>
          </div>
          <nav className="flex items-center space-x-8 text-sm font-medium text-white">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <Link href="/Pages/About" className="hover:text-blue-700">About Us</Link>
            <Link href="/Pages/Pricing" className="hover:text-blue-700">Pricing</Link>

            {   /* To be implemented with projects
                <Link href="/Pages/Projects" className="hover:text-blue-700">Projects Gallery</Link>
                */
            }

            <Link
              href="/Pages/Contact"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>
  );
}