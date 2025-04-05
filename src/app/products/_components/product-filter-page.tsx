import { Dispatch, SetStateAction } from "react";
import ProductCard from "./product-card";
import ProductFallback from "./product-fallback";
import { Filter, Search, X } from "lucide-react";
import type { Product } from "../_lib/types";
import { cn } from "@/lib/utils/utils";

type Props = {
  toggleFilters: () => void;
  showFilters: boolean;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  selectedCategory: string;
  handleCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  categories: string[];
  formatCategoryName: (category: string) => string;
  clearFilters: () => void;
  displayProducts: Product[];
  isLoading: boolean;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ProductFilterPage({
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
}: Props) {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-800">
          Products
        </h1>
        <button
          onClick={toggleFilters}
          className="md:hidden hover:cursor-pointer flex items-center gap-2 py-2 px-4 bg-green-100 dark:bg-green-700 rounded-lg"
        >
          <Filter size={18} />
          <span>Filters</span>
        </button>
      </div>

      <div
        className={cn(
          "bg-white dark:bg-green-900 rounded-lg shadow-md p-4 mb-6 transition-all duration-300",
          showFilters ? "block" : "hidden md:block"
        )}
      >
        <div className="md:flex items-center gap-4">
          <div className="relative flex-grow mb-4 md:mb-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-green-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search by product title..."
              className="pl-10 w-full py-2 px-4 border border-green-200 dark:border-green-600 rounded-md bg-white dark:bg-green-800 text-gray-900 dark:text-green-50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <X className="h-5 w-5 text-green-400 hover:text-green-600" />
              </button>
            )}
          </div>

          <div className="md:w-1/3">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full py-2 px-4 border border-green-200 dark:border-green-600 rounded-md bg-white dark:bg-green-800 text-gray-900 dark:text-green-50"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {formatCategoryName(category)}
                </option>
              ))}
            </select>
          </div>

          {(searchQuery || selectedCategory) && (
            <button
              onClick={clearFilters}
              className="mt-4 hover:cursor-pointer md:mt-0 w-full md:w-auto py-2 px-4 bg-green-200 dark:bg-green-700 text-green-800 dark:text-green-100 rounded-md hover:bg-green-300 dark:hover:bg-green-600 transition-colors"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      <div className="mb-4 text-green-700 dark:text-green-300">
        Showing {displayProducts.length}{" "}
        {displayProducts.length === 1 ? "product" : "products"}
        {selectedCategory && (
          <span>
            {" "}
            in <strong>{formatCategoryName(selectedCategory)}</strong>
          </span>
        )}
        {searchQuery && (
          <span>
            {" "}
            matching <strong>&quot;{searchQuery}&quot;</strong>
          </span>
        )}
      </div>

      {isLoading ? (
        <ProductFallback />
      ) : displayProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center bg-white dark:bg-green-900 rounded-lg shadow">
          <p className="text-xl text-green-600 dark:text-green-300 mb-4">
            No products found
          </p>
          <button
            onClick={clearFilters}
            className="py-2 px-6 hover:cursor-pointer bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
