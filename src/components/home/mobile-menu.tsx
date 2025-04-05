"use client";

import Link from "next/link";
import { motion } from "motion/react";

type Props = {
  closeMenu: () => void;
};

export default function MobileMenu({ closeMenu }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="md:hidden bg-white border-t"
    >
      <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
        <Link
          href="/products"
          onClick={closeMenu}
          className="text-gray-600 hover:text-[#4cd965] py-2 transition-colors"
        >
          Products
        </Link>
        <Link
          href="/products?featured=true"
          onClick={closeMenu}
          className="text-gray-600 hover:text-[#4cd965] py-2 transition-colors"
        >
          Featured
        </Link>
        <Link
          href="/products?sale=true"
          onClick={closeMenu}
          className="text-gray-600 hover:text-[#4cd965] py-2 transition-colors"
        >
          Sale
        </Link>
        <Link
          href="/login"
          onClick={closeMenu}
          className="text-gray-600 hover:text-[#4cd965] py-2 transition-colors"
        >
          Login
        </Link>
        <Link
          href="/dashboard"
          onClick={closeMenu}
          className="bg-[#4cd965] text-white px-4 py-2 rounded-md hover:bg-[#3cb954] transition-colors inline-block"
        >
          Dashboard
        </Link>
      </div>
    </motion.div>
  );
}
