// src/components/GurukirpaQuotePopup.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const GurukirpaQuotePopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] px-3 sm:px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative w-full max-w-md sm:max-w-lg md:max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#C62828]/20 
                   p-4 sm:p-6 md:p-8
                   max-h-[90vh] sm:max-h-[85vh] md:max-h-[80vh] overflow-y-auto"
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-700 hover:text-[#C62828] transition"
        >
          <FaTimes size={20} />
        </button>

        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl font-light text-center text-[#1C1C1C]">
          Get Your <span className="text-[#C62828]">Relocation Quote</span>
        </h2>
        <p className="text-center text-gray-600 mt-1 mb-6 text-xs sm:text-sm">
          Gurukirpa Packers & Movers – Professional & Trusted Services
        </p>

        {/* FORM */}
        <form
          action="https://formsubmit.co/gkpackers@gmail.com"
          method="POST"
          className="grid grid-cols-2 gap-3 w-full"
        >
          {/* Hidden Inputs */}
          <input type="hidden" name="_subject" value="New Gurukirpa Relocation Quote" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://gkpackers.in" />

          {/* Row 1: Name | Mobile */}
          <input
            name="name"
            required
            placeholder="Full Name"
            className="border border-gray-300 rounded-lg p-3 text-sm w-full focus:border-[#C62828] focus:ring-1 focus:ring-[#C62828]/30 transition"
          />
          <input
            name="mobile"
            required
            placeholder="Mobile Number"
            className="border border-gray-300 rounded-lg p-3 text-sm w-full focus:border-[#C62828] focus:ring-1 focus:ring-[#C62828]/30 transition"
          />

          {/* Row 2: Email | Alternate Email */}
          <input
            name="email"
            type="email"
            required
            placeholder="Email Address"
            className="border border-gray-300 rounded-lg p-3 text-sm w-full focus:border-[#C62828] focus:ring-1 focus:ring-[#C62828]/30 transition"
          />
          <input
            name="altEmail"
            type="email"
            placeholder="Alternate Email"
            className="border border-gray-300 rounded-lg p-3 text-sm w-full focus:border-[#C62828] focus:ring-1 focus:ring-[#C62828]/30 transition"
          />

          {/* Row 3: Pickup Address | From Location */}
          <input
            name="pickupAddress"
            required
            placeholder="Pickup Address"
            className="border border-gray-300 rounded-lg p-3 text-sm w-full focus:border-[#C62828] focus:ring-1 focus:ring-[#C62828]/30 transition"
          />
          <input
            name="fromLocation"
            required
            placeholder="From Location"
            className="border border-gray-300 rounded-lg p-3 text-sm w-full focus:border-[#C62828] focus:ring-1 focus:ring-[#C62828]/30 transition"
          />

          {/* Row 4: To Location | Empty */}
          <input
            name="toLocation"
            required
            placeholder="To Location"
            className="border border-gray-300 rounded-lg p-3 text-sm w-full focus:border-[#C62828] focus:ring-1 focus:ring-[#C62828]/30 transition"
          />
          <div></div>

          {/* Row 5: Service Dropdown */}
          <select
            name="service"
            required
            className="border border-gray-300 rounded-lg p-3 text-sm w-full col-span-2 bg-white focus:border-[#C62828] focus:ring-1 focus:ring-[#C62828]/30 transition"
          >
            <option value="">Select Service</option>
            <option value="Household Shifting">Household Shifting</option>
            <option value="Office Shifting">Office Shifting</option>
            <option value="Bank Shifting">Bank Shifting</option>
            <option value="Car & Bike Transport">Car & Bike Transport</option>
            <option value="Loading & Unloading">Loading & Unloading</option>
            <option value="Packing & Unpacking">Packing & Unpacking</option>
            <option value="Other Relocation Service">Other Relocation Service</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="col-span-2 bg-[#C62828] text-white py-3 rounded-lg text-sm font-medium hover:bg-[#a11b1b] transition shadow-md w-full"
          >
            Submit Quote
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default GurukirpaQuotePopup;
