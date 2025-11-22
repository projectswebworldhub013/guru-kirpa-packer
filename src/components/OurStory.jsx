import React, { useState } from "react";
import storyImg from "../assets/images/home/h2.avif";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

const OurStory = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full bg-[#f9f9f9] py-20 font-[Poppins] relative overflow-hidden">
      {/* Red Blob Background */}
      <svg
        className="absolute left-[-150px] top-[50px] w-[500px] h-[500px] opacity-10 z-0"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#C62828"
          d="M43.4,-59.4C57.6,-48.3,71.2,-36.1,76.6,-20.7C81.9,-5.3,79,13.3,70.6,27.3C62.1,41.3,48.2,50.7,34.7,58.2C21.2,65.7,10.6,71.2,-1.3,73C-13.2,74.9,-26.4,73.1,-40.2,66.1C-54,59.1,-68.3,46.8,-72.3,32.1C-76.3,17.4,-70,-0.7,-63.7,-16.6C-57.4,-32.6,-51,-46.5,-40.3,-58.6C-29.7,-70.6,-14.8,-80.9,0.8,-82.1C16.4,-83.3,32.7,-75.4,43.4,-59.4Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-widest text-[#C62828] mb-2 font-semibold">
            About Gurukirpa Relocation
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
            Our Story
          </h2>

          <blockquote className="text-[#C62828] italic text-lg mb-6 border-l-4 pl-4 border-[#C62828]">
            “Since 1999, we've moved not just belongings, but trust.”
          </blockquote>

          <p className="text-gray-700 mb-4">
            <span className="font-semibold text-black">Gurukirpa Relocation</span> was founded with a mission to make every move seamless and stress-free. From humble beginnings to a nationwide network, we've always placed your belongings and peace of mind first.
          </p>

          <p className="text-gray-700 mb-6">
            Whether it's a local shift or a cross-country relocation, our expert team ensures efficiency, safety, and care. We’re not just movers — we’re your moving partners.
          </p>

          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#C62828] text-white px-6 py-3 rounded-full shadow-md hover:bg-black transition-transform hover:scale-105 duration-300"
          >
            Learn More
          </button>
        </motion.div>

        {/* Right Image with Red Border */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative border-4 border-[#C62828] rounded-3xl p-2 shadow-xl"
        >
          <img
            src={storyImg}
            alt="Gurukirpa Relocation Story"
            className="rounded-2xl object-cover w-full h-full"
          />
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative">
                <button
                  className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-[#C62828] transition"
                  onClick={() => setIsOpen(false)}
                >
                  <IoClose />
                </button>
                <h3 className="text-2xl font-bold text-[#C62828] mb-4">More About Our Journey</h3>
                <p className="text-gray-700 mb-4">
                  Since 1999, Gurukirpa Relocation has grown into one of India’s most trusted moving brands, handling over 3,000 successful relocations with a reputation built on professionalism, integrity, and care.
                </p>
                <p className="text-gray-700 mb-4">
                  Our staff is trained, our vehicles are GPS-enabled, and our packing standards meet international benchmarks — ensuring your move is handled with the utmost care.
                </p>
                <p className="text-gray-700">
                  From city-to-city moves to corporate relocations, we're driven by a single mission: to move your world effortlessly.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OurStory;
