import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/images/home/galleryhero.jpg"; 

export default function GalleryHero() {
  return (
    <section className="relative w-full h-[75vh] flex items-center justify-start text-white overflow-hidden font-[Poppins] px-6 md:px-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          filter: "brightness(0.4)",
        }}
      ></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl text-left"
      >
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight text-white"
        >
          Discover the Journey of{" "}
          <span className="text-[#C62828]">Seamless Relocation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-4 text-lg md:text-xl text-gray-200 leading-relaxed"
        >
          Explore the visual story of trust, care, and commitment through our relocation services. Every picture speaks of dedication, safety, and customer satisfaction at Gurukirpa Packers & Movers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-6"
        >
          <button className="bg-[#C62828] hover:bg-[#a91d1d] text-white px-6 py-3 rounded-md font-semibold shadow-md transition duration-300">
            View Our Gallery
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
