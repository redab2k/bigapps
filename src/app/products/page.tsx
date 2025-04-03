import type { Metadata } from "next";
import Products from "./_components/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Products page",
};

export default function page() {
  return (
    <main className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl text-gray-600 dark:text-gray-700 font-bold mb-8 text-center">
          Products
        </h1>
        <Products />
      </div>
    </main>
  );
}
