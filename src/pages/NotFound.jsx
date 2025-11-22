import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#f9f9f9] via-[#f5f0ee] to-[#e8ded6] px-6 py-16">
      <motion.div
        className="text-center max-w-xl bg-white rounded-3xl shadow-2xl p-10 border border-red-200 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-red-600 text-6xl mb-4 flex justify-center">
          <FaExclamationTriangle />
        </div>
        <h1 className="text-5xl font-extrabold text-[#8B0000] mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-2 font-semibold">
          Page Not Found
        </p>
        <p className="text-sm text-gray-500 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#3CB371] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:bg-[#2e9e5b] transition"
        >
          Go to Homepage
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;
