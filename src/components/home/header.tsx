"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { Menu, X } from "lucide-react";
import { navLinks } from "./navLinks";
import { cn } from "@/lib/utils/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-[#4cd965] flex items-center justify-center">
            <span className="text-white font-bold text-xl">BA</span>
          </div>
          <span className="text-xl font-bold text-gray-800">BigAppsShop</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={cn(
                "text-gray-600 hover:text-[#4cd965] transition-colors",
                link.name === "Dashboard" &&
                  "bg-[#4cd965] text-white px-4 py-2 rounded-md hover:bg-[#3cb954] transition-colors"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden text-gray-600 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      {isMenuOpen && <MobileMenu closeMenu={() => setIsMenuOpen(false)} />}
    </header>
  );
}
