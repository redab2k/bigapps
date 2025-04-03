import { Dispatch, SetStateAction } from "react";
import ProductCard from "./product-card";
import ProductFallback from "./product-fallback";
import { Filter, Search, X } from "lucide-react";
import type { Product } from "../_lib/types";

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
          className="md:hidden hover:cursor-pointer flex items-center gap-2 py-2 px-4 bg-gray-100 dark:bg-gray-400 rounded-lg"
        >
          <Filter size={18} />
          <span>Filters</span>
        </button>
      </div>

      <div
        className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6 transition-all duration-300 ${
          showFilters ? "block" : "hidden md:block"
        }`}
      >
        <div className="md:flex items-center gap-4">
          <div className="relative flex-grow mb-4 md:mb-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search by product title..."
              className="pl-10 w-full py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>

          <div className="md:w-1/3">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
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
              className="mt-4 hover:cursor-pointer md:mt-0 w-full md:w-auto py-2 px-4 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      <div className="mb-4 text-gray-600 dark:text-gray-700">
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
        <div className="py-16 text-center bg-white dark:bg-gray-800 rounded-lg shadow">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            No products found
          </p>
          <button
            onClick={clearFilters}
            className="py-2 px-6 hover:cursor-pointer bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
