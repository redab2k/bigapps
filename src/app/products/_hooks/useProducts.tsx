"use client";
import { useEffect, useState } from "react";
import {
  getCategories,
  getProducts,
  getProductsByCategory,
} from "../_lib/helpers";
import type { Product } from "../_lib/types";

export function useProducts() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  useEffect(() => {
    const loadCategories = async () => {
      const fetchedCategories = await getCategories();
      if (fetchedCategories) {
        setCategories(fetchedCategories);
      }
    };

    loadCategories();
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      let products: Product[] | null;

      if (selectedCategory) {
        products = await getProductsByCategory(selectedCategory);
      } else {
        products = await getProducts();
      }

      if (products) {
        setAllProducts(products);
        setDisplayProducts(products);
      }

      setIsLoading(false);
    };

    loadProducts();
  }, [selectedCategory]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setDisplayProducts(allProducts);
      return;
    }

    const lowercaseQuery = searchQuery.toLowerCase().trim();
    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(lowercaseQuery)
    );

    setDisplayProducts(filtered);
  }, [searchQuery, allProducts]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchQuery("");
    setSelectedCategory(e.target.value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const formatCategoryName = (category: string) => {
    return category
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return {
    toggleFilters,
    showFilters,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    handleCategoryChange,
    categories,
    formatCategoryName,
    clearFilters,
    displayProducts,
    isLoading,
    handleSearchChange,
  };
}
