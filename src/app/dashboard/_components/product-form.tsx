"use client";

import type { Product } from "@/app/products/_lib/types";
import { useProductHandler } from "../_lib/hooks/useProductHandler";
import { Loader2 } from "lucide-react";

type ProductFormProps = {
  product: Product | null;
  onSubmit: (formData: FormData) => void;
  error: string | null;
  isPending: boolean;
  onCancel: () => void;
};

export default function ProductForm({
  product,
  onSubmit,
  isPending,
  onCancel,
}: ProductFormProps) {
  const { handleSubmit, processSubmit, register, errors } = useProductHandler(
    product,
    onSubmit
  );

  return (
    <form onSubmit={handleSubmit(processSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Title"
            {...register("title")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Price
          </label>
          <input
            id="price"
            type="number"
            step="1"
            {...register("price")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.price && (
            <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={3}
            placeholder="Description"
            {...register("description")}
            className="w-full px-3 py-2 resize-none border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">
              {errors.description.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Category
          </label>
          <select
            id="category"
            {...register("category")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="men's clothing">Men&apos;s Clothing</option>
            <option value="women's clothing">Women&apos;s Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </select>
          {errors.category && (
            <p className="mt-1 text-sm text-red-600">
              {errors.category.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Image URL
          </label>
          <input
            id="image"
            type="text"
            placeholder="Image URL"
            {...register("image")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.image && (
            <p className="mt-1 text-sm text-red-600">{errors.image.message}</p>
          )}
        </div>
      </div>

      <div className="flex justify-end gap-4 pt-4">
        <button
          type="button"
          onClick={onCancel}
          disabled={isPending}
          className="px-4 py-2 cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-md text-gray-700 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isPending}
          className="px-4 py-2 cursor-pointer disabled:bg-gray-400 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
        >
          {isPending ? (
            <span className="flex items-center justify-center">
              <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" />
              {product ? "Updating..." : "Adding..."}
            </span>
          ) : (
            <>{product ? "Update Product" : "Add Product"}</>
          )}
        </button>
      </div>
    </form>
  );
}
