import React from "react";
import { Link } from "react-router-dom";
import { FaUserTie, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const ThoughtAndContact = () => {
  return (
    <section className="w-full py-16 px-4 md:px-10 font-[Poppins] relative overflow-hidden bg-[#f9f9f9]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/10" />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-10 border border-[#3CB371]/30"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Thought from Founder */}
        <motion.div
          className="flex-1 w-full rounded-2xl p-8 text-center border border-[#3CB371]/40 bg-white shadow-lg hover:shadow-2xl transition duration-500 relative"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex justify-center mb-4 text-[#3CB371] text-4xl">
            <FaUserTie />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold text-[#3CB371] mb-3">
            A Word from Our Founder
          </h2>
          <p className="text-gray-700 text-base md:text-lg italic mb-5 leading-relaxed">
            "Every move matters — it’s not just about relocation, it’s about
            delivering peace of mind with every box."
          </p>
          <p className="text-[#3CB371] font-bold uppercase text-sm tracking-wide mb-2">
            — Savitri Kumari (Founder)
          </p>
          <div className="text-gray-700 text-sm md:text-base space-y-1 mt-3">
            <p className="flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-[#3CB371]" /> +91 83283 68575
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaEnvelope className="text-[#3CB371]" /> Info@vidishapackersmovers.in
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaEnvelope className="text-[#3CB371]" /> vidishapackersmovers@gmail.com
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="flex-1 w-full text-center md:text-left"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A41] mb-4">
            Let’s Move Your World
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-6">
            Planning to move? Let Vibhansi Packers & Movers handle the heavy
            lifting. Contact us for a seamless relocation experience.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="/contact"
              className="relative inline-block px-8 py-3 text-white bg-[#3CB371] rounded-full text-base md:text-lg font-semibold group hover:bg-[#2a8d5d] hover:scale-105 transition-all duration-500 shadow-lg"
            >
              Contact Us
              <span className="absolute -inset-1 rounded-full border border-[#3CB371]/30 opacity-0 group-hover:opacity-100 transition"></span>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative glowing circles */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-[#3CB371]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#3CB371]/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ThoughtAndContact;
