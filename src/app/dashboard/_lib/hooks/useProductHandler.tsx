"use client";
import { useForm } from "react-hook-form";
import {
  type ProductFormData,
  productSchema,
} from "../../_lib/schema/product-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Product } from "@/app/products/_lib/types";

export function useProductHandler(
  product: Product | null,
  onSubmit: (formData: FormData) => void
) {
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

  const processSubmit = (data: ProductFormData) => {
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

    onSubmit(formData);
  };

  return { handleSubmit, processSubmit, register, errors };
}
