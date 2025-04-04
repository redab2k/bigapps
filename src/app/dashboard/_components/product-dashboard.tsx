"use client";

import type { FormState, Product } from "@/app/products/_lib/types";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import ProductTable from "./products-table";
import ProductForm from "./product-form";
import { useSession } from "next-auth/react";
import {
  addProduct,
  deleteProduct,
  updateProduct,
} from "../_lib/actions/actions";
import { getProducts } from "@/app/products/_lib/helpers";
import { signOut } from "@/auth";

export default function ProductDashboard() {
  const session = useSession();
  const user = session.data?.user;
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deletingProductId, setDeletingProductId] = useState<number | null>(
    null
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data as Product[]);
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const [addState, addFormAction] = useActionState<FormState, FormData>(
    async (prevState: FormState, formData: FormData) => {
      const result = await addProduct(formData);

      if (result.success) {
        toast.success("Product added successfully");
        setProducts([...products, result.product!]);
        setIsAddingProduct(false);
        return { success: true, error: null };
      } else {
        toast.error(result.error || "Failed to add product");
        return { success: false, error: result.error };
      }
    },
    { success: false, error: null }
  );

  const [updateState, updateFormAction] = useActionState<FormState, FormData>(
    async (prevState: FormState, formData: FormData) => {
      const result = await updateProduct(formData);

      if (result.success) {
        toast.success("Product updated successfully");
        setProducts(
          products.map((p) =>
            p.id === result.product!.id ? result.product! : p
          )
        );
        setEditingProduct(null);
        return { success: true, error: null };
      } else {
        toast.error(result.error || "Failed to update product");
        return { success: false, error: result.error };
      }
    },
    { success: false, error: null }
  );

  const [, deleteFormAction] = useActionState<FormState, FormData>(
    async (prevState: FormState, formData: FormData) => {
      const id = Number(formData.get("id"));
      const result = await deleteProduct(formData);

      if (result.success) {
        toast.success("Product deleted successfully");
        setProducts(products.filter((p) => p.id !== id));
        setDeletingProductId(null);
        return { success: true, error: null };
      } else {
        toast.error(result.error || "Failed to delete product");
        return { success: false, error: result.error };
      }
    },
    { success: false, error: null }
  );

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsAddingProduct(false);
  };

  const handleDelete = (id: number) => {
    setDeletingProductId(id);
  };

  const handleLogout = async () => {
    await signOut({ redirect: true, redirectTo: "/" });
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="flex justify-between items-center mb-8 bg-white p-4 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-gray-800">Product Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img
              src={user?.image || "/placeholder.svg"}
              alt={user?.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-medium text-gray-700">{user?.name}</span>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-700 transition-colors"
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
            }}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            Add Product
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <ProductTable
            products={products}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}

        {(isAddingProduct || editingProduct) && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-xl font-semibold mb-4">
                {editingProduct ? "Edit Product" : "Add New Product"}
              </h2>
              <ProductForm
                product={editingProduct}
                formAction={editingProduct ? updateFormAction : addFormAction}
                formState={editingProduct ? updateState : addState}
                onCancel={() => {
                  setIsAddingProduct(false);
                  setEditingProduct(null);
                }}
              />
            </div>
          </div>
        )}

        {deletingProductId !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
              <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
              <p className="mb-6">
                Are you sure you want to delete this product? This action cannot
                be undone.
              </p>
              <form
                action={deleteFormAction}
                className="flex gap-4 justify-end"
              >
                <input type="hidden" name="id" value={deletingProductId} />
                <button
                  type="button"
                  onClick={() => setDeletingProductId(null)}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
                >
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
