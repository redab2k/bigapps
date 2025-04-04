"use client";

import type { Product } from "@/app/products/_lib/types";
import Image from "next/image";

interface ProductTableProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
}

export default function ProductTable({
  products,
  onEdit,
  onDelete,
}: ProductTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Image
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Title
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell"
            >
              Price
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell"
            >
              Category
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-4 py-4 whitespace-nowrap">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={120}
                  height={120}
                  className="h-12 w-12 object-contain rounded"
                />
              </td>
              <td className="px-4 py-4">
                <div className="text-sm font-medium text-gray-900">
                  {product.title}
                </div>
                <div className="text-xs text-gray-500 truncate max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-xs">
                  {product.description}
                </div>
                <div className="text-sm text-gray-900 sm:hidden mt-1">
                  ${product.price.toFixed(2)}
                </div>
                <span className="inline-flex sm:hidden text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 px-2 py-1 mt-1">
                  {product.category}
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap hidden sm:table-cell">
                <div className="text-sm text-gray-900">
                  ${product.price.toFixed(2)}
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap hidden md:table-cell">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {product.category}
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() => onEdit(product)}
                  className="text-indigo-600 hover:text-indigo-900 mr-4 cursor-pointer"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(product.id)}
                  className="text-red-600 hover:text-red-900 cursor-pointer"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {products.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          No products found. Add a product to get started.
        </div>
      )}
    </div>
  );
}
