"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Optional: Install `lucide-react` for icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className="shadow-md sticky top-0 z-50"
      style={{ backgroundColor: "#444A5C" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="relative w-40 h-12 sm:w-48 sm:h-14">
            <Image
              src="/logo_transparent.png"
              alt="Blue Pixel logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-white">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/Pages/About" className="hover:text-blue-400">
            About Us
          </Link>
          <Link href="/Pages/Pricing" className="hover:text-blue-400">
            Pricing
          </Link>
          <Link
            href="/Pages/Contact"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Contact Us
          </Link>
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <nav className="flex flex-col space-y-4 text-white font-medium">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">
              Home
            </Link>
            <Link href="/Pages/About" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">
              About Us
            </Link>
            <Link href="/Pages/Pricing" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">
              Pricing
            </Link>
            <Link
              href="/Pages/Contact"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
