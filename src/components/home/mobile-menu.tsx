"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { signOut, useSession } from "next-auth/react";
import { CircleUserRound } from "lucide-react";

type Props = {
  closeMenu: () => void;
};

export default function MobileMenu({ closeMenu }: Props) {
  const { data: session } = useSession();

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="md:hidden bg-white border-t"
    >
      <div className="md:hidden fixed inset-x-0 top-[72px] bg-white shadow-md">
        <div className="container mx-auto px-4 py-2">
          <nav className="flex flex-col space-y-4 py-4">
            <Link
              href="/products"
              onClick={closeMenu}
              className="text-gray-600 hover:text-[#4cd965] px-2 py-2 transition-colors"
            >
              Products
            </Link>
            {session?.user ? (
              <div className="flex items-center gap-2">
                <CircleUserRound className="w-8 h-8 rounded-full object-cover" />
                <span className="font-medium text-gray-700">
                  {session?.user?.name}
                </span>
              </div>
            ) : (
              <Link
                href="/login"
                onClick={closeMenu}
                className="text-gray-600 hover:text-[#4cd965] px-2 py-2 transition-colors"
              >
                Login
              </Link>
            )}
            {session?.user ? (
              <Link
                href="/dashboard"
                onClick={closeMenu}
                className="bg-[#4cd965] text-white px-4 py-2 rounded-md hover:bg-[#3cb954] transition-colors"
              >
                Dashboard
              </Link>
            ) : null}
            {session?.user ? (
              <button
                onClick={() => signOut()}
                className="px-4 py-2 bg-gray-200 cursor-pointer hover:bg-gray-300 rounded-md text-gray-700 transition-colors"
              >
                Logout
              </button>
            ) : null}
          </nav>
        </div>
      </div>
    </motion.div>
  );
}
