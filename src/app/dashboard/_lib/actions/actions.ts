"use server";
import "server-only";
import { productSchema } from "../schema/product-schema";
import type { Product } from "@/app/products/_lib/types";
import { API_URL } from "@/lib/utils/constants";

export async function addProduct(formData: FormData) {
  try {
    const result = productSchema.safeParse(
      Object.fromEntries(formData.entries())
    );

    if (!result.success) {
      return {
        success: false,
        error: result.error.errors[0]?.message || "Invalid product data",
      };
    }

    const { id, title, price, description, category, image } = result.data;

    const product: Product = {
      id,
      title,
      price,
      description,
      category,
      image,
    } as Product;

    const response = await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const addedProduct = await response.json();
    return { success: true, product: addedProduct };
  } catch (error) {
    console.error("Error adding product:", error);
    return { success: false, error: "Failed to add product" };
  }
}

export async function updateProduct(formData: FormData) {
  try {
    const result = productSchema.safeParse(
      Object.fromEntries(formData.entries())
    );

    if (!result.success) {
      return {
        success: false,
        error: result.error.errors[0]?.message || "Invalid product data",
      };
    }

    const { id, title, price, description, category, image } = result.data;

    const product: Product = {
      id,
      title,
      price,
      description,
      category,
      image,
    } as Product;

    const response = await fetch(`${API_URL}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const updatedProduct = await response.json();
    return { success: true, product: updatedProduct };
  } catch (error) {
    console.error("Error updating product:", error);
    return { success: false, error: "Failed to update product" };
  }
}

export async function deleteProduct(formData: FormData) {
  try {
    const id = formData.get("id");

    if (!id || isNaN(Number(id))) {
      return { success: false, error: "Invalid product ID" };
    }

    const response = await fetch(`${API_URL}/products/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error("Error deleting product:", error);
    return { success: false, error: "Failed to delete product" };
  }
}
