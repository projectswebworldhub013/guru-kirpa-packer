import React from "react";
import { FaBox, FaTruckMoving, FaMotorcycle, FaExchangeAlt, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import img1 from "../assets/images/service/packing.jpg";
import img2 from "../assets/images/service/moving.jpg";
import img3 from "../assets/images/service/car.jpg";
import img4 from "../assets/images/service/shifting.jpg";
import img5 from "../assets/images/service/relocation.jpg";
import bg from "../assets/images/service/bg.jpg"; // Background image



const services = [
  {
    icon: <FaBox className="text-4xl text-[#C62828]" />,
    title: "Packaging Services",
    description: "Provider of a wide range of services which include Corrugated Box Packing Services and Transport Packaging Services.",
    imgSrc: img1,
  },
  {
    icon: <FaTruckMoving className="text-4xl text-[#C62828]" />,
    title: "Project Cargo Service",
    description: "We are a leading Service Provider of Logistic Cargo Service from Indore, India.",
    imgSrc: img2,
  },
  {
    icon: <FaMotorcycle className="text-4xl text-[#C62828]" />,
    title: "Transportation Services",
    description: "Pioneers in the industry, we offer Household Item Transportation Services, Bike Transport Service, Packaging Moving Transport Services, Car Transportation Services and Goods Transport Services from India.",
    imgSrc: img3,
  },
  {
    icon: <FaExchangeAlt className="text-4xl text-[#C62828]" />,
    title: "Local Shifting Services",
    description: "Our service range includes a wide range of Local Shifting Services.",
    imgSrc: img4,
  },
  {
    icon: <FaHome className="text-4xl text-[#C62828]" />,
    title: "Relocation Services",
    description: "Our range of services include International Relocation Services, Domestic Relocation Service, Door To Door Relocation Services, Commercial Relocation Service and Office Relocation Services",
    imgSrc: img5,
  },

   {
    icon: <FaHome className="text-4xl text-[#C62828]" />,
    title: "Loading Service",
    description: "Loading Service Provider of Goods Loading Service and Loading Unloading Services from Indore.",
    imgSrc: img5,
  },
   {
    icon: <FaHome className="text-4xl text-[#C62828]" />,
    title: "Risk Management Services",
    description: "Pioneers in the industry, we offer Risk Protection Coverage from India.",
    imgSrc: img5,
  },
   {
    icon: <FaHome className="text-4xl text-[#C62828]" />,
    title: "Goods Warehousing Service",
    description: "Prominent & Leading Service Provider from Indore, we offer Goods Warehousing Service. Goods Warehousing Service",
    imgSrc: img5,
  },
];

export default function Service() {
  return (
    <section
      className="relative py-20 text-center text-white bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0  z-0"></div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-6xl mx-auto">
        <h2 className="uppercase tracking-wider text-sm font-semibold text-[#C62828]">
          Premium Moving with Heart
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-black mt-3">
          <span className="text-[#C62828]">Gurukripa Packers & Movers</span>
        </h3>
        <p className="text-gray-800 max-w-3xl mx-auto mt-4 mb-10 text-sm sm:text-base">
         Gurukripa Packers & Movers offers expert relocation solutions tailored to your needs. From packing to delivery, we ensure safety, speed, and satisfaction every step of the way.
        </p>
        {/* Service Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white text-black shadow-md rounded-xl p-5 w-80 flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={service.imgSrc}
                alt={service.title}
                className="w-full relative  h-44 object-cover rounded-lg mb-4"
              />
              {service.icon}
              <h4 className="text-lg font-bold text-[#1B2A41] mt-3 uppercase">
                {service.title}
              </h4>
              <p className="text-sm text-gray-600 mt-1">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <p className="mt-10 text-gray-700 text-sm sm:text-base">
          Ready to shift smoothly with zero stress?{" "}
          <Link
            to="/contact"
            className="text-[#C62828] cursor-pointer underline hover:text-[#2e9a64] transition"
          >
            Book Your Move Now
          </Link>
        </p>
      </div>
    </section>
  );
}
