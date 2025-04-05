import { auth } from "@/auth";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import ProductDashboard from "./_components/product-dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard page",
};

export default async function page() {
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <main className="min-h-screen bg-gray-50">
      <ProductDashboard />
    </main>
  );
}
