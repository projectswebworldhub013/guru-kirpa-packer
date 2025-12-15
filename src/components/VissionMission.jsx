import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";

export default function VisionMission() {
  return (
    <section className="relative w-full py-5 bg-[#F7F7F7] overflow-hidden">
      {/* Decorative SVG Circles */}
      <svg
        className="absolute -top-40 -left-40 w-[500px] h-[500px] opacity-10"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="180" stroke="#1E40AF" strokeWidth="3" />
      </svg>

      <svg
        className="absolute bottom-[-200px] right-[-200px] w-[520px] h-[520px] opacity-10"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="190" stroke="#DC2626" strokeWidth="3" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight">
            Vision & Mission
          </h2>

          <div className="w-20 h-[3px] bg-red-600 mx-auto my-6"></div>

          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Our commitment is driven by trust, experience, and excellence in
            professional relocation services across India.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-14">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-white rounded-3xl shadow-xl border border-gray-200 p-12 hover:-translate-y-2 transition-transform"
          >
            <div className="flex items-center gap-5 mb-8">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-blue-800/10">
                <FaEye className="text-blue-800 text-2xl" />
              </div>
              <h3 className="text-3xl font-semibold text-black">
                Our Vision
              </h3>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              At{" "}
              <span className="font-semibold text-black">
                Gurukirpa Relocation
              </span>
              , our vision is to redefine relocation standards by delivering
              safe, transparent, and timely moving solutions. We aim to build
              long-term trust and become a nationally recognized name in the
              logistics and relocation industry.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative bg-white rounded-3xl shadow-xl border border-gray-200 p-12 hover:-translate-y-2 transition-transform"
          >
            <div className="flex items-center gap-5 mb-8">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-red-600/10">
                <FaBullseye className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-3xl font-semibold text-black">
                Our Mission
              </h3>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to deliver stress-free relocations through expert
              planning, trained professionals, and high-quality packing
              standards. We focus on safety, punctuality, and customer
              satisfaction in every move we execute.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
