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
