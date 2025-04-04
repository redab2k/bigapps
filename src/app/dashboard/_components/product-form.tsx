"use client";

import type { FormState, Product } from "@/app/products/_lib/types";
import { useForm } from "react-hook-form";
import {
  type ProductFormData,
  productSchema,
} from "../_lib/schema/product-schema";
import { zodResolver } from "@hookform/resolvers/zod";

type ProductFormProps = {
  product: Product | null;
  formAction: (formData: FormData) => void;
  formState: FormState;
  onCancel: () => void;
};

export default function ProductForm({
  product,
  formAction,
  formState,
  onCancel,
}: ProductFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: product
      ? {
          ...product,
          rating: product.rating || { rate: 0, count: 0 },
        }
      : {
          title: "",
          price: 0,
          description: "",
          category: "men's clothing",
          image: "",
          rating: { rate: 0, count: 0 },
        },
  });

  const onSubmit = (data: ProductFormData) => {
    const formData = new FormData();

    if (product) {
      formData.append("id", product.id.toString());
    } else {
      formData.append("id", Math.floor(Math.random() * 1000).toString());
    }

    formData.append("title", data.title);
    formData.append("price", data.price.toString());
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("image", data.image);

    if (!product) {
      formData.append("rating.rate", "0");
      formData.append("rating.count", "0");
    } else {
      formData.append("rating.rate", product.rating.rate.toString());
      formData.append("rating.count", product.rating.count.toString());
    }

    formAction(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {formState.error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {formState.error}
        </div>
      )}

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
            step="0.01"
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
            {...register("description")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-700 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
        >
          {product ? "Update Product" : "Add Product"}
        </button>
      </div>
    </form>
  );
}
