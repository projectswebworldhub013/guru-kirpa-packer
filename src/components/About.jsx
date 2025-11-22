import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

import image3 from "../assets/images/home/h1.jpg";

const About = () => {
  return (
    <section className="relative bg-[#F9F9F9] text-black py-16 px-6 md:px-12 font-[Poppins] overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-gradient-to-tr from-[#C0C0C0] to-red-600 opacity-20 rounded-full blur-2xl z-0"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] bg-gradient-to-br from-white to-red-600 opacity-20 rounded-full blur-2xl z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-black uppercase text-sm tracking-widest mb-2">
            Who We Are
          </p>
          <h1 className="text-5xl md:text-5xl font-extrabold leading-tight">
            Gurukripa <span className="text-[#C62828]">Relocation </span>
            <span className="text-[#C62828]">  Packer & Movers</span>
          </h1>
          <p className="text-gray-700 mt-6 text-lg ">
            Gurukripa Relocation Packers and Movers India is a leading Packers and Movers in Indore that has proved their strong presence across the country. With decades of experience in the moving industry, we offer reliable and professional packing and relocation services. Our trained and dedicated team ensures safe packing, careful handling, and timely delivery of every item based on its material and nature.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-6">
            <Link to="/contact">
              <button className="bg-[#C62828] hover:bg-[#98131f] transition px-6 py-3 rounded-full font-semibold text-white shadow-md">
                Get In Touch
              </button>
            </Link>
            <div className="flex gap-4 text-lg text-gray-600">
              <a href="#" className="hover:text-[#3CB371] transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-[#C62828] transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                <FaTwitter />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable={false}>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[500px] h-[420px] mx-auto group relative"
          >
            <img
              src={image3}
              alt="Gurukripa Relocation"
              className="w-full h-full object-cover rounded-xl border-4 border-gray-300 shadow-xl group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3CB371] via-transparent to-[#C62828] opacity-10 rounded-xl pointer-events-none"></div>
          </motion.div>
        </Tilt>
      </div>

      {/* Bottom SEO/Service Section */}
      <div className="relative z-10 mt-20 text-center max-w-4xl mx-auto">
        <h3 className="text-[#C62828] tracking-widest text-sm mb-3">
          Our Commitment
        </h3>
        <p className="text-gray-800 text-lg">
          Whether moving within the city or across borders, we treat your belongings with utmost care. Trust Gurukripa Relocation Packers and Movers to turn relocation into a stress-free experience.
        </p>
        <Link to="/contact">
          <button className="mt-6 px-6 py-2 bg-[#C62828] text-white font-semibold rounded-full hover:bg-[#f58787] transition">
            Contact Us
          </button>
        </Link>

        {/* SEO Services Tags */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-gray-600 font-medium">
          <span className="bg-white px-3 py-1 rounded-full shadow border">Packers And Movers Indore</span>
          <span className="bg-white px-3 py-1 rounded-full shadow border">Movers And Packers Indore</span>
          <span className="bg-white px-3 py-1 rounded-full shadow border">Shifting Service Indore</span>
          <span className="bg-white px-3 py-1 rounded-full shadow border">Relocation Service Indore</span>
          <span className="bg-white px-3 py-1 rounded-full shadow border">Loading Unloading Service Indore</span>
          <span className="bg-white px-3 py-1 rounded-full shadow border">Packaging Unpackaging Service Indore</span>
          <span className="bg-white px-3 py-1 rounded-full shadow border">Transport Service Indore</span>
        </div>
      </div>
    </section>
  );
};

export default About;
