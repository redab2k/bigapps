import Link from "next/link";
import NavbarMobileMenu from "./navbar-mobile-menu";
import { CircleUserRound } from "lucide-react";
import { auth } from "@/auth";
import { LogoutBtn } from "./logout-btn";

export default async function Navbar() {
  const session = await auth();

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
          <Link
            href="/products"
            className="text-gray-600 hover:text-[#4cd965] transition-colors"
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
              className="text-gray-600 hover:text-[#4cd965] transition-colors"
            >
              Login
            </Link>
          )}
          {session?.user ? (
            <Link
              href="/dashboard"
              className="bg-[#4cd965] text-white px-4 py-2 rounded-md hover:bg-[#3cb954] transition-colors"
            >
              Dashboard
            </Link>
          ) : null}
          {session?.user ? <LogoutBtn /> : null}
        </nav>

        <NavbarMobileMenu />
      </div>
    </header>
  );
}
