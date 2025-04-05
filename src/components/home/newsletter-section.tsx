"use client";

import { motion } from "motion/react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function NewsletterSection() {
  return (
    <section className="py-16 bg-[#4cd965]">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-white/90 mb-8">
            Subscribe to our newsletter for exclusive offers, eco-tips, and
            updates on new sustainable products.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 border border-white py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <motion.button
              type="submit"
              className="bg-white text-[#4cd965] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
