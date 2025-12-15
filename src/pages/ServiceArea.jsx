// src/components/ServiceArea.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import indiaFlag from "../assets/images/home/flag.avif";
import FAQGurukirpa from "../components/FAQ";

// Cities list
const cities = [
  "Khargone","Khandwa","Harda","Ujjain","Burhanpur","Barwani","Nepanagar","Sanawad",
  "Jhabua","Neemuch","Mandsaur","Ratlam","Nagda","Manawar","Kukshi","Alirajpur",
  "Dewas","Sehore","Ashta","Shajapur","Bhopal","Gwalior","Guna","Shivpuri",
  "Ashok Nagar","Sagar","Tikamgarh","Chatarpur","Jabalpur","Pipariya","Gadarwara",
  "Narmadapurm","Itarsi","Rewa","Satna","Katni","Singrauli","Rajgarh","Biaora",
  "Petlawad","Kareli","Chindwara","Vidisha","Betul","Agar Malwa","Datia",
  "Maihar","Sidhi","Dhar","Pithampur","Mhow"
];

// Sample services per city (you can replace/add actual services)
const cityServices = {
  Ujjain: [
    "Packers And Movers Ujjain",
    "Local Relocation Services",
    "Car & Bike Transportation",
    "Packing & Unpacking Services",
  ],
  Bhopal: [
    "Packers And Movers Bhopal",
    "Household Shifting",
    "Office Relocation",
    "Loading & Unloading",
  ],
  // Add other cities as needed
};

const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-");

export default function ServiceArea() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <>
    
    <section className="w-full bg-[#F7F7F7] text-black font-[Poppins]">

      {/* PREMIUM HERO */}
      <div className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FAFAFA] via-[#F5F5F5] to-[#EFEFEF]">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full border border-[#C62828]/20 blur-[1px]" />
        <div className="absolute -bottom-44 -right-44 w-[560px] h-[560px] rounded-full border border-[#1B2A41]/20 blur-[1px]" />
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#C62828] rounded-full animate-pulse" />
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-[#1B2A41] rounded-full animate-pulse" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-2 px-6 py-2 text-sm tracking-widest uppercase font-semibold rounded-full 
            bg-[#C62828]/10 text-[#C62828]"
          >
            Our Nationwide Presence
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-[#1C1C1C]"
          >
            Service Areas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-3 max-w-3xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            Delivering trusted <span className="font-semibold text-[#1B2A41]">packers & movers services</span>  
            across <span className="font-semibold text-[#C62828]">Madhya Pradesh</span> with safety, care and professional excellence.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mt-10 h-[3px] w-24 bg-gradient-to-r from-[#C62828] to-[#1B2A41] rounded-full"
          />
        </div>
      </div>

      {/* CITY GRID */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {cities.map((city, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div
                onClick={() => setSelectedCity(city)}
                className="group relative cursor-pointer bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-3 right-3">
                  <img
                    src={indiaFlag}
                    alt="India Flag"
                    className="w-7 h-5 object-cover rounded-sm"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-base font-semibold text-[#1C1C1C] group-hover:text-[#C62828] transition">
                    {city}
                  </h3>
                  <p className="mt-2 text-xs text-gray-500">
                    Packers & Movers Services
                  </p>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-[#C62828] to-[#1B2A41] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {selectedCity && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedCity(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 font-bold text-lg"
              >
                &times;
              </button>

              <h2 className="text-2xl font-bold text-[#C62828] mb-4">{selectedCity}</h2>
              <p className="text-gray-700 mb-4">
                We provide the following services in <span className="font-semibold">{selectedCity}</span>:
              </p>

              <ul className="list-disc list-inside mb-6 text-gray-700">
                {(cityServices[selectedCity] || [
                  "Packers & Movers",
                  " Movers & Packers",
                  "Household Relocation",
                  "Office Shifting",
                  "Bank Shifting",
                  "Car & Bike Transport",
                  "Loading & Unloading",
                  "Packing & Unpacking"
                ]).map((service, idx) => (
                  <li key={idx}>{service}</li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="block text-center bg-[#C62828] hover:bg-red-700 text-white font-semibold py-3 rounded-full transition"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
    <FAQGurukirpa/>
    </>
  );
}
