"use client";

import { useProducts } from "../_hooks/useProducts";
import ProductFilterPage from "./product-filter-page";

export default function Products() {
  const {
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
  } = useProducts();

  return (
    <ProductFilterPage
      toggleFilters={toggleFilters}
      showFilters={showFilters}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      selectedCategory={selectedCategory}
      handleCategoryChange={handleCategoryChange}
      categories={categories}
      formatCategoryName={formatCategoryName}
      clearFilters={clearFilters}
      displayProducts={displayProducts}
      isLoading={isLoading}
      handleSearchChange={handleSearchChange}
    />
  );
}
