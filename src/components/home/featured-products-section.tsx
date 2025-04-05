"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const featuredProducts = [
  {
    id: 1,
    name: "Eco-friendly Water Bottle",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Recycled Leather Wallet",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Bamboo Sunglasses",
    price: 79.99,
    image: "/placeholder.svg?height=300&width=300",
  },
];

export default function FeaturedProductsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our most popular eco-friendly products that customers love
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <Link href={`/products/${product.id}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-[#4cd965] font-bold">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={fadeIn}
        >
          <Link
            href="/products"
            className="inline-block bg-white text-[#4cd965] border-2 border-[#4cd965] px-6 py-3 rounded-md text-lg font-medium hover:bg-[#f2fdf5] transition-colors"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
