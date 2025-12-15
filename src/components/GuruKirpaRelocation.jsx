// src/components/GurukirpaRelocation.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTruckMoving } from "react-icons/fa";

const cityData = [
  {
    city: "Ujjain",
    services: [
      "Packers And Movers Ujjain Madhya Pradesh India",
      "Best Packers And Movers Ujjain Madhya Pradesh India",
      "Packers And Movers Nearby Ujjain Madhya Pradesh India",
      "Local Packers And Movers Ujjain Madhya Pradesh India",
    ],
  },
  {
    city: "Dewas",
    services: [
      "Packers And Movers Dewas Madhya Pradesh India",
      "Best Packers And Movers Dewas Madhya Pradesh India",
      "Packers And Movers Nearby Dewas Madhya Pradesh India",
      "Local Packers And Movers Dewas Madhya Pradesh India",
    ],
  },
  {
    city: "Khargone",
    services: [
      "Packers And Movers Khargone Madhya Pradesh India",
      "Best Packers And Movers Khargone Madhya Pradesh India",
      "Packers And Movers Nearby Khargone Madhya Pradesh India",
      "Local Packers And Movers Khargone Madhya Pradesh India",
    ],
  },
  {
    city: "Dhar",
    services: [
      "Packers And Movers Dhar Madhya Pradesh India",
      "Best Packers And Movers Dhar Madhya Pradesh India",
      "Packers And Movers Nearby Dhar Madhya Pradesh India",
      "Local Packers And Movers Dhar Madhya Pradesh India",
    ],
  },
  {
    city: "Nagda",
    services: [
      "Packers And Movers Nagda Madhya Pradesh India",
      "Best Packers And Movers Nagda Madhya Pradesh India",
      "Packers And Movers Nearby Nagda Madhya Pradesh India",
      "Local Packers And Movers Nagda Madhya Pradesh India",
    ],
  },
  {
    city: "Neemuch",
    services: [
      "Packers And Movers Neemuch Madhya Pradesh India",
      "Best Packers And Movers Neemuch Madhya Pradesh India",
      "Packers And Movers Nearby Neemuch Madhya Pradesh India",
      "Local Packers And Movers Neemuch Madhya Pradesh India",
    ],
  },
  {
    city: "Mandsaur",
    services: [
      "Packers And Movers Mandsaur Madhya Pradesh India",
      "Best Packers And Movers Mandsaur Madhya Pradesh India",
      "Packers And Movers Nearby Mandsaur Madhya Pradesh India",
      "Local Packers And Movers Mandsaur Madhya Pradesh India",
    ],
  },
  {
    city: "Bhopal",
    services: [
      "Packers And Movers Bhopal Madhya Pradesh India",
      "Best Packers And Movers Bhopal Madhya Pradesh India",
      "Packers And Movers Nearby Bhopal Madhya Pradesh India",
      "Local Packers And Movers Bhopal Madhya Pradesh India",
    ],
  },
  {
    city: "Jabalpur",
    services: [
      "Packers And Movers Jabalpur Madhya Pradesh India",
      "Best Packers And Movers Jabalpur Madhya Pradesh India",
      "Packers And Movers Nearby Jabalpur Madhya Pradesh India",
      "Local Packers And Movers Jabalpur Madhya Pradesh India",
    ],
  },
  {
    city: "Khandwa",
    services: [
      "Packers And Movers Khandwa Madhya Pradesh India",
      "Best Packers And Movers Khandwa Madhya Pradesh India",
      "Packers And Movers Nearby Khandwa Madhya Pradesh India",
      "Local Packers And Movers Khandwa Madhya Pradesh India",
    ],
  },
  {
    city: "Shajapur",
    services: [
      "Packers And Movers Shajapur Madhya Pradesh India",
      "Best Packers And Movers Shajapur Madhya Pradesh India",
      "Packers And Movers Nearby Shajapur Madhya Pradesh India",
      "Local Packers And Movers Shajapur Madhya Pradesh India",
    ],
  },
  {
    city: "Kukshi",
    services: [
      "Packers And Movers Kukshi Madhya Pradesh India",
      "Best Packers And Movers Kukshi Madhya Pradesh India",
      "Packers And Movers Nearby Kukshi Madhya Pradesh India",
      "Local Packers And Movers Kukshi Madhya Pradesh India",
    ],
  },
  {
    city: "Alirajpur",
    services: [
      "Packers And Movers Alirajpur Madhya Pradesh India",
      "Best Packers And Movers Alirajpur Madhya Pradesh India",
      "Packers And Movers Nearby Alirajpur Madhya Pradesh India",
      "Local Packers And Movers Alirajpur Madhya Pradesh India",
    ],
  },
  {
    city: "Barwani",
    services: [
      "Packers And Movers Barwani Madhya Pradesh India",
      "Best Packers And Movers Barwani Madhya Pradesh India",
      "Packers And Movers Nearby Barwani Madhya Pradesh India",
      "Local Packers And Movers Barwani Madhya Pradesh India",
    ],
  },
  {
    city: "Harda",
    services: [
      "Packers And Movers Harda Madhya Pradesh India",
      "Best Packers And Movers Harda Madhya Pradesh India",
      "Packers And Movers Nearby Harda Madhya Pradesh India",
      "Local Packers And Movers Harda Madhya Pradesh India",
    ],
  },
  {
    city: "Narmadapuram",
    services: [
      "Packers And Movers Narmadapurm Madhya Pradesh India",
      "Best Packers And Movers Narmadapurm Madhya Pradesh India",
      "Packers And Movers Nearby Narmadapurm Madhya Pradesh India",
      "Local Packers And Movers Narmadapurm Madhya Pradesh India",
    ],
  },
  {
    city: "Itarsi",
    services: [
      "Packers And Movers Itarsi Madhya Pradesh India",
      "Best Packers And Movers Itarsi Madhya Pradesh India",
      "Packers And Movers Nearby Itarsi Madhya Pradesh India",
      "Local Packers And Movers Itarsi Madhya Pradesh India",
    ],
  },
  {
    city: "Gwalior",
    services: [
      "Packers And Movers Gwalior Madhya Pradesh India",
      "Best Packers And Movers Gwalior Madhya Pradesh India",
      "Packers And Movers Nearby Gwalior Madhya Pradesh India",
      "Local Packers And Movers Gwalior Madhya Pradesh India",
    ],
  },
  {
    city: "Guna",
    services: [
      "Packers And Movers Guna Madhya Pradesh India",
      "Best Packers And Movers Guna Madhya Pradesh India",
      "Packers And Movers Nearby Guna Madhya Pradesh India",
      "Local Packers And Movers Guna Madhya Pradesh India",
    ],
  },
  {
    city: "Ashok Nagar",
    services: [
      "Packers And Movers Ashok Nagar Madhya Pradesh India",
      "Best Packers And Movers Ashok Nagar Madhya Pradesh India",
      "Packers And Movers Nearby Ashok Nagar Madhya Pradesh India",
      "Local Packers And Movers Ashok Nagar Madhya Pradesh India",
    ],
  },
  {
    city: "Burhanpur",
    services: [
      "Packers And Movers Burhanpur Madhya Pradesh India",
      "Best Packers And Movers Burhanpur Madhya Pradesh India",
      "Packers And Movers Nearby Burhanpur Madhya Pradesh India",
      "Local Packers And Movers Burhanpur Madhya Pradesh India",
    ],
  },
  {
    city: "Indore",
    services: [
      "Packers And Movers Indore Madhya Pradesh India",
      "Best Packers And Movers Indore Madhya Pradesh India",
      "Packers And Movers Nearby Indore Madhya Pradesh India",
      "Local Packers And Movers Indore Madhya Pradesh India",
    ],
  },
  {
    city: "Satna",
    services: [
      "Packers And Movers Satna Madhya Pradesh India",
      "Best Packers And Movers Satna Madhya Pradesh India",
      "Packers And Movers Nearby Satna Madhya Pradesh India",
      "Local Packers And Movers Satna Madhya Pradesh India",
    ],
  },
  {
    city: "Sagar",
    services: [
      "Packers And Movers Sagar Madhya Pradesh India",
      "Best Packers And Movers Sagar Madhya Pradesh India",
      "Packers And Movers Nearby Sagar Madhya Pradesh India",
      "Local Packers And Movers Sagar Madhya Pradesh India",
    ],
  },
  {
    city: "Panchmari",
    services: [
      "Packers And Movers Panchmari Madhya Pradesh India",
      "Best Packers And Movers Panchmari Madhya Pradesh India",
      "Packers And Movers Nearby Panchmari Madhya Pradesh India",
      "Local Packers And Movers Panchmari Madhya Pradesh India",
    ],
  },
  {
    city: "Mhow",
    services: [
      "Packers And Movers Mhow Madhya Pradesh India",
      "Best Packers And Movers Mhow Madhya Pradesh India",
      "Packers And Movers Nearby Mhow Madhya Pradesh India",
      "Local Packers And Movers Mhow Madhya Pradesh India",
    ],
  },
  {
    city: "Pithampur",
    services: [
      "Packers And Movers Pithampur Madhya Pradesh India",
      "Best Packers And Movers Pithampur Madhya Pradesh India",
      "Packers And Movers Nearby Pithampur Madhya Pradesh India",
      "Local Packers And Movers Pithampur PithampurMadhya Pradesh India",
    ],
  },
  {
    city: "Sanawad",
    services: [
      "Packers And Movers Sanawad Madhya Pradesh India",
      "Best Packers And Movers Sanawad Madhya Pradesh India",
      "Packers And Movers Nearby Sanawad Madhya Pradesh India",
      "Local Packers And Movers Sanawad Madhya Pradesh India",
    ],
  },
  {
    city: "Barwah",
    services: [
      "Packers And Movers Barwah Madhya Pradesh India",
      "Best Packers And Movers Barwah Madhya Pradesh India",
      "Packers And Movers Nearby Barwah Madhya Pradesh India",
      "Local Packers And Movers Barwah Madhya Pradesh India",
    ],
  },
];

export default function GurukirpaRelocation() {
  const [visibleRows, setVisibleRows] = useState(2); // initial 3 rows
  const rows = Math.ceil(cityData.length / 2);
  const visibleCities = cityData.slice(0, visibleRows * 2);

  const showMore = () => setVisibleRows(prev => Math.min(prev + 2, rows));
  const showLess = () => setVisibleRows(3); // reset to initial

  return (
    <section className="w-full bg-[#FAFAFA] py-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#C62828] mb-4 text-center">
          Gurukirpa Relocation - Madhya Pradesh
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          We provide top-notch relocation services across Madhya Pradesh. Our expert team ensures a safe, hassle-free move for your home, office, or business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {visibleCities.map((city, idx) => (
              <motion.div
                key={city.city}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative p-6 bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                {/* Hollow SVG Circle */}
                <svg
                  className="absolute -top-6 -right-6 w-20 h-20 text-[#C62828]/20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 100 100"
                >
                  <circle cx="50" cy="50" r="48" strokeWidth="4" />
                </svg>

                <h3 className="text-2xl font-semibold text-black flex items-center gap-3 mb-4">
                  <FaTruckMoving className="text-[#C62828]" /> {city.city}
                </h3>

                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  {city.services.map((service, i) => (
                    <li key={i}>{service}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          {visibleRows * 2 < cityData.length && (
            <button
              onClick={showMore}
              className="px-6 py-3 cursor-pointer rounded-full bg-[#C62828] text-white font-semibold hover:bg-red-700 transition"
            >
              Show More
            </button>
          )}
          {visibleRows > 3 && (
            <button
              onClick={showLess}
              className="px-6 py-3 cursor-pointer rounded-full bg-gray-200 text-black font-semibold hover:bg-gray-300 transition"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
