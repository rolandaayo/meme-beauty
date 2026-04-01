"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg">
              M
            </div>
            <span className="hidden sm:inline text-xl font-bold text-black">
              MEME BEAUTYWORLD
            </span>
            <span className="sm:hidden text-lg font-bold text-black">MEME</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-black hover:text-pink-500 transition-colors font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors font-semibold text-sm"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-black" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slides from Right */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/0 md:hidden z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Side Menu */}
          <div className="fixed right-0 top-16 h-screen w-64 bg-white shadow-2xl z-50 animate-in slide-in-from-right-full duration-300 md:hidden opacity-100 border-l border-gray-200">
            <div className="flex flex-col space-y-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-black hover:text-pink-500 transition-colors font-semibold text-lg py-3 px-4 rounded-lg hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-bold text-center w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
