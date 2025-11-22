import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import GalleryHero from "../components/GalleryHero";



// Gallery Images
import img1 from "../assets/images/gallery/img1.jpg";
import img2 from "../assets/images/gallery/img2.jpg";
import img3 from "../assets/images/gallery/img3.jpg";
import img4 from "../assets/images/gallery/img4.jpg";
import img5 from "../assets/images/gallery/img5.jpg";
import img6 from "../assets/images/gallery/img6.jpg";
import img7 from "../assets/images/gallery/img7.jpg";
import img8 from "../assets/images/home/h1.jpg";
import img9 from "../assets/images/home/h2.avif";
import img10 from "../assets/images/home/h3.avif";



const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev - 1 + images.length) % images.length;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  };

  const nextImage = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev + 1) % images.length;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  };

  return (
    <>
      {/* ---------- Hero Section ---------- */}
      <GalleryHero />

      {/* ---------- Premium Gallery Section ---------- */}
      <section className="relative py-10 px-6 bg-[#e9e6e6] font-[Poppins] text-white overflow-hidden">
        {/* SVG Background Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="absolute w-[400px] h-[400px] opacity-10 animate-pulse top-10 left-10" fill="none" stroke="#C62828" strokeWidth="2">
            <circle cx="200" cy="200" r="180" />
          </svg>
          <svg className="absolute w-[300px] h-[300px] opacity-10 animate-spin-slow bottom-10 right-10" fill="none" stroke="#FFF" strokeWidth="1">
            <circle cx="150" cy="150" r="140" />
          </svg>
        </div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center mb-4"
        >
          <h2 className="text-5xl font-extrabold text-[#C62828] drop-shadow-md">Our Gallery</h2>
          <p className="text-gray-900 mt-4 max-w-3xl mx-auto">
            A glimpse into our operations, team, and seamless relocation services that reflect trust and excellence.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-xl shadow-xl cursor-pointer"
              whileHover={{ scale: 1.03 }}
              onClick={() => openImage(i)}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">View Image</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Viewer */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                key={selectedImage}
                className="relative w-full max-w-5xl mx-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Enlarged"
                  className="w-full max-h-[80vh] object-contain rounded-xl"
                />

                {/* Close Button */}
                <button
                  className="absolute top-3 right-3 text-white text-xl bg-red-700 hover:bg-red-600 p-2 rounded-full transition"
                  onClick={closeModal}
                >
                  <FaTimes />
                </button>

                {/* Navigation Buttons */}
                <button
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-xl bg-black/50 hover:bg-[#C62828] p-2 rounded-full transition"
                  onClick={prevImage}
                >
                  <FaArrowLeft />
                </button>
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-xl bg-black/50 hover:bg-[#C62828] p-2 rounded-full transition"
                  onClick={nextImage}
                >
                  <FaArrowRight />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
