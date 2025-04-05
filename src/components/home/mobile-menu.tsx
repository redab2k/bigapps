"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { navLinks } from "./navLinks";
import { cn } from "@/lib/utils/utils";

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
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            onClick={closeMenu}
            className={cn(
              "text-gray-600 hover:text-[#4cd965] py-2 transition-colors",
              link.name === "Dashboard" &&
                "bg-[#4cd965] text-white px-4 py-2 rounded-md hover:bg-[#3cb954]"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
