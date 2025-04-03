import { Product } from "./types";

export async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products: Product[] = await response.json();
    return products;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getProductsByCategory(category: string) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const products: Product[] = await response.json();
    return products;
  } catch (error) {
    console.error(`Error fetching products for category ${category}:`, error);
    return null;
  }
}

export async function getCategories() {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const categories: string[] = await response.json();
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return null;
  }
}
