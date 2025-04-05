"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import type { Product } from "../_lib/types";
import { useState } from "react";
import { cn } from "@/lib/utils/utils";

export default function ProductDetails({ product }: { product: Product }) {
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description"
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white dark:bg-green-800 rounded-lg p-6 flex items-center justify-center border border-gray-200 dark:border-gray-700">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            width={400}
            height={400}
            className="max-h-[400px] w-auto object-contain"
            priority
          />
        </div>

        <div className="flex flex-col">
          <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-200 mb-4 w-fit">
            {product.category}
          </span>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-900 mb-4">
            {product.title}
          </h1>

          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-5 h-5",
                    i < Math.floor(product.rating.rate)
                      ? "text-yellow-400 fill-yellow-400"
                      : i < product.rating.rate
                      ? "text-yellow-400 fill-yellow-400 opacity-50"
                      : "text-gray-300 dark:text-gray-600"
                  )}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-500">
              ({product.rating.rate}) - {product.rating.count} reviews
            </span>
          </div>

          <div className="text-3xl font-bold text-gray-900 dark:text-gray-600 mb-6">
            ${product.price.toFixed(2)}
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="font-semibold text-gray-900 dark:text-gray-700 mb-2">
              Product Details:
            </h3>
            <ul className="text-gray-600 dark:text-gray-700 space-y-2">
              <li>
                <span className="font-medium">Category:</span>{" "}
                {product.category}
              </li>
              <li>
                <span className="font-medium">Rating:</span>{" "}
                {product.rating.rate}/5
              </li>
              <li>
                <span className="font-medium">Reviews:</span>{" "}
                {product.rating.count}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab("description")}
            className={cn(
              "py-4 px-1 font-medium hover:cursor-pointer text-sm border-b-2",
              activeTab === "description"
                ? "border-green-500 text-green-500 dark:text-green-400 dark:border-green-400"
                : "border-transparent text-gray-500 dark:text-gray-800 hover:text-gray-700 dark:hover:text-gray-300"
            )}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={cn(
              "py-4 px-1 font-medium hover:cursor-pointer text-sm border-b-2",
              activeTab === "reviews"
                ? "border-green-500 text-green-500 dark:text-green-400 dark:border-green-400"
                : "border-transparent text-gray-500 dark:text-gray-800 hover:text-gray-700 dark:hover:text-gray-300"
            )}
          >
            Reviews ({product.rating.count})
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-green-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        {activeTab === "description" ? (
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Product Description
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {product.description}
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Customer Reviews
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex flex-col items-center justify-center bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  {product.rating.rate}
                </div>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-5 h-5",
                        i < Math.floor(product.rating.rate)
                          ? "text-yellow-400 fill-yellow-400"
                          : i < product.rating.rate
                          ? "text-yellow-400 fill-yellow-400 opacity-50"
                          : "text-gray-300 dark:text-gray-600"
                      )}
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Based on {product.rating.count} reviews
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
