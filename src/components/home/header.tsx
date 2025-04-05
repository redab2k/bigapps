"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "./mobile-menu";

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
            <span className="text-white font-bold text-xl">EC</span>
          </div>
          <span className="text-xl font-bold text-gray-800">EcoShop</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/products"
            className="text-gray-600 hover:text-[#4cd965] transition-colors"
          >
            Products
          </Link>
          <Link
            href="/products?featured=true"
            className="text-gray-600 hover:text-[#4cd965] transition-colors"
          >
            Featured
          </Link>
          <Link
            href="/products?sale=true"
            className="text-gray-600 hover:text-[#4cd965] transition-colors"
          >
            Sale
          </Link>
          <Link
            href="/login"
            className="text-gray-600 hover:text-[#4cd965] transition-colors"
          >
            Login
          </Link>
          <Link
            href="/dashboard"
            className="bg-[#4cd965] text-white px-4 py-2 rounded-md hover:bg-[#3cb954] transition-colors"
          >
            Dashboard
          </Link>
        </nav>
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      {isMenuOpen && <MobileMenu closeMenu={() => setIsMenuOpen(false)} />}
    </header>
  );
}
