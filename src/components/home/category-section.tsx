"use client";

import Link from "next/link";
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

const categories = [
  { name: "Clothing", icon: "👕", link: "/products?category=clothing" },
  { name: "Accessories", icon: "👜", link: "/products?category=accessories" },
  { name: "Home & Living", icon: "🏠", link: "/products?category=home" },
  { name: "Electronics", icon: "📱", link: "/products?category=electronics" },
];

export default function CategorySection() {
  return (
    <section className="py-16 bg-white">
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
            Shop by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our wide selection of sustainable products across various
            categories
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Link href={category.link} className="block">
                <div className="bg-[#f2fdf5] rounded-lg p-6 text-center hover:shadow-md transition-shadow h-full flex flex-col items-center justify-center">
                  <span className="text-4xl mb-4">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {category.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
