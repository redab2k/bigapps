"use client";

import { Check, Plus, Truck } from "lucide-react";
import { motion } from "motion/react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function BenefitsSection() {
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
            Why Choose BigAppsShop?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re committed to providing sustainable products that make a
            difference
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div variants={fadeIn} className="bg-[#f2fdf5] p-6 rounded-lg">
            <div className="w-12 h-12 bg-[#4cd965] rounded-full flex items-center justify-center mb-4">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Eco-Friendly Materials
            </h3>
            <p className="text-gray-600">
              All our products are made from sustainable, recycled, or
              biodegradable materials to minimize environmental impact.
            </p>
          </motion.div>
          <motion.div variants={fadeIn} className="bg-[#f2fdf5] p-6 rounded-lg">
            <div className="w-12 h-12 bg-[#4cd965] rounded-full flex items-center justify-center mb-4">
              <Check className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Ethical Production
            </h3>
            <p className="text-gray-600">
              We ensure fair wages and safe working conditions throughout our
              supply chain, supporting ethical business practices.
            </p>
          </motion.div>
          <motion.div variants={fadeIn} className="bg-[#f2fdf5] p-6 rounded-lg">
            <div className="w-12 h-12 bg-[#4cd965] rounded-full flex items-center justify-center mb-4">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Carbon Neutral Shipping
            </h3>
            <p className="text-gray-600">
              We offset the carbon footprint of every shipment, making your
              purchase completely carbon neutral from our door to yours.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
