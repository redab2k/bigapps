"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-[#e8f7ed] to-[#f2fdf5] py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Sustainable Products for a Better Future
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover our eco-friendly collection that helps you reduce your
            environmental footprint without compromising on quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="bg-[#4cd965] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-[#3cb954] transition-colors text-center"
            >
              Shop Now
            </Link>
            <Link
              href="/products?category=new"
              className="border-2 border-[#4cd965] text-[#4cd965] px-6 py-3 rounded-md text-lg font-medium hover:bg-[#f2fdf5] transition-colors text-center"
            >
              New Arrivals
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
        >
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Eco-friendly products showcase"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
