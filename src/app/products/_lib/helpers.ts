import { API_URL } from "@/lib/utils/constants";
import { Product } from "./types";

export async function getProducts() {
  try {
    const response = await fetch(`${API_URL}/products`);
    const products: Product[] = await response.json();
    return products;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getProductsByCategory(category: string) {
  try {
    const response = await fetch(`${API_URL}/products/category/${category}`);
    const products: Product[] = await response.json();
    return products;
  } catch (error) {
    console.error(`Error fetching products for category ${category}:`, error);
    return null;
  }
}

export async function getCategories() {
  try {
    const response = await fetch(`${API_URL}/products/categories`);
    const categories: string[] = await response.json();
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return null;
  }
}

export async function getProduct(id: string) {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);
    const product: Product = await response.json();
    return product;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return null;
  }
}
