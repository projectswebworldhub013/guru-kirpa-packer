import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/images/home/aboutguru.jpg";
import { Link } from "react-router-dom";

export default function AboutHero() {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 max-w-3xl text-left text-black">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm md:text-lg text-center tracking-wider uppercase text-gray-800 mb-2"
        >
          Your Trusted Relocation Partner
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-center font-extrabold leading-snug text-black"
        >
          Seamless Relocation with <span className="text-[#C62828]">Gurukirpa</span><br />
          Packers & Movers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-base text-center md:text-lg text-gray-800 leading-relaxed"
        >
          With over a decade of experience, Gurukirpa Relocation is your go-to partner for secure and hassle-free moving.
          Whether it's residential or commercial, we ensure precision handling, timely delivery, and utmost care of your belongings — because we move more than just boxes, we move trust.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex justify-center"
        >
        
        </motion.div>
      </div>
    </section>
  );
}
