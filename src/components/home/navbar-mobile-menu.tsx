"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import MobileMenu from "./mobile-menu";

export default function NavbarMobileMenu() {
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
    <div className="md:hidden">
      <button
        className="text-gray-600 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      {isMenuOpen && <MobileMenu closeMenu={() => setIsMenuOpen(false)} />}
    </div>
  );
}
