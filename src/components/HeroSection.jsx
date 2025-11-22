import React, { useEffect, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import img1 from "../assets/images/home/h1.jpg";
import img2 from "../assets/images/home/h2.avif";
import img3 from "../assets/images/home/h3.avif";
import brickBg from "../assets/images/home/bg4.avif";

const sliderImages = [img1, img2, img3];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full pt-16 pb-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${brickBg})`,
      }}
    >
      {/* Glassy Overlay */}
      <div className="absolute inset-0  z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center text-[#1C1C1C]">
        {/* Left Content */}
        <div className="space-y-4 font-[Poppins]">
          <h3 className="text-sm font-medium text-gray-700 tracking-wide uppercase">
            Gurukirpa Relocation | Est. 1999
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#C62828]">
          Premium Packers & Movers 
          </h1>

          <p className="text-base sm:text-lg text-gray-800 max-w-xl">
            Trusted since 1999, Gurukirpa Relocation offers professional and affordable home, office, and vehicle shifting solutions with guaranteed safety.
          </p>

          {/* Features */}
          <ul className="space-y-4 text-sm sm:text-base text-[#1C1C1C]">
            {[
              ["Verified Companies", "Only safe, certified, and trusted movers are listed."],
              ["Free Quotation in 5 mins", "Get transparent and instant relocation quotes."],
              ["Low-Cost Services", "Affordable packages without compromising quality."],
            ].map(([title, desc], i) => (
              <li key={i} className="flex items-start gap-3">
                <FiCheckCircle className="text-[#C62828] mt-1 text-lg" />
                <span>
                  <strong>{title}:</strong> {desc}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            {["Within City", "Outside City"].map((item, i) => (
              <button
                key={i}
                className="px-5 py-2 text-sm rounded-full font-semibold border-2 border-[#C62828] text-[#C62828] hover:bg-[#C62828] hover:text-white transition duration-300 shadow-md hover:shadow-xl"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Right Image Slider */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden transition duration-500 ease-in-out border-4 border-[#C62828] shadow-2xl hover:scale-105">
            <img
              src={sliderImages[current]}
              alt="Relocation Service"
              className="w-full h-[25rem] object-cover transition-all duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
