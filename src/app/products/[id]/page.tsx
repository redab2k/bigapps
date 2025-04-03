import type { Metadata } from "next";
import { getProduct } from "../_lib/helpers";
import { notFound } from "next/navigation";
import ProductDetails from "../_components/product-details";

type Params = Promise<{ id: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return {
      title: "Product not found",
      description: "Product not found",
    };
  }

  return {
    title: product.title,
    description: product.description,
  };
}

export default async function page({ params }: { params: Params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) notFound();

  return <ProductDetails product={product} />;
}
