import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";
import bgImage from "../assets/images/home/vission.jpg";

export default function VisionMission() {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>

      {/* Glow Circles (subtle animations) */}
      <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-red-600/20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-white/10 blur-2xl animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20 leading-snug tracking-wide">
          Our <span className="text-red-500">Vision</span> &{" "}
          <span className="text-gray-300">Mission</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/10 border border-red-600 rounded-2xl p-10 shadow-2xl backdrop-blur-md hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-600/30 p-4 rounded-full">
                <FaEye className="text-red-500 text-3xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              At <strong>Gurukirpa Relocation</strong>, our vision is to redefine the moving experience
              by offering fast, safe, and efficient services. We strive to become India’s most trusted
              relocation partner by consistently delivering peace of mind with every move.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white/10 border border-gray-400 rounded-2xl p-10 shadow-2xl backdrop-blur-md hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <FaBullseye className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our mission is to deliver stress-free relocations by prioritizing customer care,
              timely execution, and complete safety. With experienced professionals and tailored
              solutions, we aim to exceed expectations in every move we handle.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
