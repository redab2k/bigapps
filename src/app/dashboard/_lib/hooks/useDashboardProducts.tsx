"use client";
import { signOut, useSession } from "next-auth/react";
import {
  addProduct,
  deleteProduct,
  updateProduct,
} from "../../_lib/actions/actions";
import { getProducts } from "@/app/products/_lib/helpers";
import type { Product } from "@/app/products/_lib/types";
import { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";

export function useDashboardProducts() {
  const session = useSession();
  const user = session.data?.user;
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deletingProductId, setDeletingProductId] = useState<number | null>(
    null
  );
  const [formError, setFormError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

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

  const handleAddProduct = async (formData: FormData) => {
    setFormError(null);

    startTransition(async () => {
      try {
        const result = await addProduct(formData);

        if (result.success) {
          toast.success("Product added successfully");
          if (result.product) {
            setProducts((prev) => [...prev, result.product!]);
          }
          setIsAddingProduct(false);
        } else {
          toast.error(result.error || "Failed to add product");
          setFormError(result.error || "Unknown error");
        }
      } catch (error) {
        console.error("Error adding product:", error);
        toast.error("An unexpected error occurred");
        setFormError("An unexpected error occurred");
      }
    });
  };

  const handleUpdateProduct = async (formData: FormData) => {
    setFormError(null);

    startTransition(async () => {
      try {
        const result = await updateProduct(formData);

        if (result.success) {
          toast.success("Product updated successfully");
          if (result.product) {
            setProducts((prev) =>
              prev.map((p) =>
                p.id === result.product!.id ? result.product! : p
              )
            );
          }
          setEditingProduct(null);
        } else {
          toast.error(result.error || "Failed to update product");
          setFormError(result.error || "Unknown error");
        }
      } catch (error) {
        console.error("Error updating product:", error);
        toast.error("An unexpected error occurred");
        setFormError("An unexpected error occurred");
      }
    });
  };

  const handleDeleteProduct = async (formData: FormData) => {
    const id = Number(formData.get("id"));

    startTransition(async () => {
      try {
        const result = await deleteProduct(formData);

        if (result.success) {
          toast.success("Product deleted successfully");
          setProducts((prev) => prev.filter((p) => p.id !== id));
          setDeletingProductId(null);
        } else {
          toast.error(result.error || "Failed to delete product");
        }
      } catch (error) {
        console.error("Error deleting product:", error);
        toast.error("An unexpected error occurred");
      }
    });
  };

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

  return {
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
  };
}
