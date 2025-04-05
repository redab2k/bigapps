import Image from "next/image";
import { Product } from "../_lib/types";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      key={product.id}
      className="bg-white dark:bg-green-900 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg border border-green-200 dark:border-green-700 flex flex-col h-full"
    >
      <div className="relative h-64 bg-green-50 dark:bg-green-800 p-4 flex items-center justify-center">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          width={200}
          height={200}
          className="max-h-full w-auto object-contain"
          priority
        />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <div className="mb-2">
          <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-100 mb-2">
            {product.category}
          </span>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 h-14">
            {product.title}
          </h2>
        </div>
        <div className="mt-auto">
          <div className="flex items-center mb-2"></div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-green-700 dark:text-green-400">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
