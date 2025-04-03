import { Suspense } from "react";
import { getProducts } from "../_lib/getProducts";
import ProductCard from "./product-card";
import ProductFallback from "./product-fallback";

export default async function Products() {
  const products = await getProducts();

  return (
    <Suspense fallback={<ProductFallback />}>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </Suspense>
  );
}
