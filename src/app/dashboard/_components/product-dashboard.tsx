"use client";

import ProductTable from "./products-table";
import ProductForm from "./product-form";
import { useDashboardProducts } from "../_lib/hooks/useDashboardProducts";
import { CircleUserRound, Loader2 } from "lucide-react";
import ProductTableSkeleton from "./product-table-skeleton";

export default function ProductDashboard() {
  const {
    products,
    loading,
    isAddingProduct,
    editingProduct,
    deletingProductId,
    handleEdit,
    handleDelete,
    handleLogout,
    user,
    setIsAddingProduct,
    setEditingProduct,
    setDeletingProductId,
    handleAddProduct,
    handleUpdateProduct,
    handleDeleteProduct,
    setFormError,
    formError,
    isPending,
  } = useDashboardProducts();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="flex justify-between items-center mb-8 bg-white p-4 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-gray-800">Product Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <CircleUserRound className="w-8 h-8 rounded-full object-cover" />
            <span className="font-medium text-gray-700">{user?.name}</span>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-gray-200 cursor-pointer hover:bg-gray-300 rounded-md text-gray-700 transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Products</h2>
          <button
            onClick={() => {
              setIsAddingProduct(true);
              setEditingProduct(null);
              setFormError(null);
            }}
            className="px-4 py-2 disabled:bg-gray-400 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white rounded-md transition-colors"
            disabled={isPending}
          >
            Add Product
          </button>
        </div>

        {loading ? (
          <ProductTableSkeleton />
        ) : (
          <ProductTable
            products={products}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}

        {(isAddingProduct || editingProduct) && (
          <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-xl font-semibold mb-4">
                {editingProduct ? "Edit Product" : "Add New Product"}
              </h2>
              <ProductForm
                product={editingProduct}
                onSubmit={
                  editingProduct ? handleUpdateProduct : handleAddProduct
                }
                error={formError}
                isPending={isPending}
                onCancel={() => {
                  setIsAddingProduct(false);
                  setEditingProduct(null);
                  setFormError(null);
                }}
              />
            </div>
          </div>
        )}

        {deletingProductId !== null && (
          <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
              <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
              <p className="mb-6">
                Are you sure you want to delete this product? This action cannot
                be undone.
              </p>
              <form
                action={handleDeleteProduct}
                className="flex gap-4 justify-end"
              >
                <input type="hidden" name="id" value={deletingProductId} />
                <button
                  type="button"
                  onClick={() => setDeletingProductId(null)}
                  className="px-4 py-2 cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-md text-gray-700 transition-colors"
                  disabled={isPending}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 flex items-center gap-4 disabled:bg-gray-400 cursor-pointer bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
                  disabled={isPending}
                >
                  {isPending && <Loader2 className="size-4 animate-spin" />}
                  Delete
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
