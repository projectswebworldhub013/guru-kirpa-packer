import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import img1 from "../assets/images/home/gk4.jpg";
import img2 from "../assets/images/home/gk5.jpg";
import img3 from "../assets/images/home/gk6.jpg";

const slides = [img1, img2, img3];

const quotes = [
  "Safe • Fast • Reliable Relocation 🚚",
  "Your Belongings, Our Responsibility 📦",
  "Stress-Free Moving Experience ✅",
  "Trusted Packers & Movers Since Years",
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => {
      clearInterval(slideInterval);
      clearInterval(quoteInterval);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden font-sans">
      {/* Image Slider */}
      <AnimatePresence>
        <motion.img
          key={currentSlide}
          src={slides[currentSlide]}
          alt="Gurukirpa Relocation Packers Movers"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65 z-10" />

      {/* Red + Purple Glow */}
      {/* <div className="absolute top-1/2 left-1/2 w-[480px] h-[480px] bg-[#6D28D9]/15 blur-[130px] rounded-full z-10 -translate-x-1/2 -translate-y-1/2" /> */}
      {/* <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-[#C1272D]/15 blur-[120px] rounded-full z-10" /> */}

      {/* Top Right Info */}
      <div className="absolute top-6 right-6 z-20 max-w-xs text-right hidden md:block">
        <p className="text-sm text-gray-300">
          Gurukirpa Relocation
        </p>
        <p className="text-xs text-blue-800 tracking-wide">
          Packers • Movers • Logistics
        </p>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-4">
        <TypeAnimation
          sequence={[
            "GURUKIRPA RELOCATION",
            2000,
            "PACKERS & MOVERS EXPERTS",
            2000,
            "SAFE & HASSLE-FREE SHIFTING",
            2000,
          ]}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
          className="text-white text-3xl sm:text-4xl md:text-6xl font-extrabold uppercase tracking-wide"
        />

        {/* Quote */}
        <div className="h-10 mt-4 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={quotes[currentQuote]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-purple-400 text-sm sm:text-base md:text-lg font-medium"
            >
              {quotes[currentQuote]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Description */}
        <p className="text-gray-200 text-sm sm:text-base md:text-lg mt-5 max-w-3xl leading-relaxed">
          Gurukirpa Relocation provides professional packing, moving and logistics
          services for homes and businesses. We ensure safe handling, timely
          delivery, and complete peace of mind.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#C1272D] text-white font-semibold px-6 py-3 rounded-full text-sm sm:text-base shadow-md text-center"
          >
            Get Free Quote
          </motion.a>

          <motion.a
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white text-white font-semibold px-6 py-3 rounded-full text-sm sm:text-base text-center hover:bg-white hover:text-black transition"
          >
            Our Services
          </motion.a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
      >
        <ChevronDown className="text-white" size={28} />
      </motion.div>
    </section>
  );
};

export default Hero;
