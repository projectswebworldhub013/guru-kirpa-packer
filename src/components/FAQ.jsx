// src/components/FAQGurukirpa.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTruckMoving,
  FaShieldAlt,
  FaWarehouse,
  FaTools,
  FaPlus,
} from "react-icons/fa";

const colors = {
  red: "#C1272D",
  blue: "#1D4ED8", // blue-700
  black: "#1C1C1C",
  gray: "#9CA3AF",
  lightGray: "#F5F5F5",
  white: "#FFFFFF",
};

const faqCategories = {
  "Safety & Insurance": {
    icon: <FaShieldAlt className="text-xl text-blue-700" />,
    faqs: [
      {
        question: "How safe is my household or office goods during shifting?",
        answer:
          "At Gurukirpa Relocation, we use premium packing materials, double-layer wrapping, and trained professionals to ensure complete safety of your goods during transit.",
      },
      {
        question: "Do you provide insurance coverage?",
        answer:
          "Yes, we offer transit insurance options to safeguard your belongings against any unforeseen circumstances during relocation.",
      },
    ],
  },
  "Packing & Moving Process": {
    icon: <FaTruckMoving className="text-xl text-blue-700" />,
    faqs: [
      {
        question: "What packing materials do you use?",
        answer:
          "We use high-quality cartons, bubble wrap, stretch films, corrugated sheets, and customized wooden crates for fragile items.",
      },
      {
        question: "Do you handle local and long-distance moves?",
        answer:
          "Absolutely. We specialize in local shifting, intercity moves, and long-distance relocation across India.",
      },
    ],
  },
  "Storage & Warehousing": {
    icon: <FaWarehouse className="text-xl text-blue-700" />,
    faqs: [
      {
        question: "Do you offer warehousing services?",
        answer:
          "Yes, we provide secure, clean, and monitored storage facilities for short-term and long-term requirements.",
      },
    ],
  },
  "Support & Service": {
    icon: <FaTools className="text-xl text-blue-700" />,
    faqs: [
      {
        question: "Is customer support available during shifting?",
        answer:
          "Yes, our support team stays connected throughout the moving process to provide real-time updates and assistance.",
      },
      {
        question: "Why choose Gurukirpa Relocation Packers & Movers?",
        answer:
          "With years of experience, transparent pricing, skilled manpower, and timely delivery, Gurukirpa ensures stress-free relocation every time.",
      },
    ],
  },
};

export default function FAQGurukirpa() {
  const [activeTab, setActiveTab] = useState("Safety & Insurance");
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative w-full py-8 px-6 overflow-hidden font-[Poppins] bg-[#F9FAFB]">

      {/* SVG BACKGROUND */}
      <svg
        className="absolute top-[-120px] left-[-120px] w-[420px] opacity-10"
        viewBox="0 0 200 200"
      >
        <path
          fill={colors.red}
          d="M47.5,-66.2C60.5,-56.1,69.4,-41.3,73.6,-25.3C77.8,-9.4,77.2,7.6,69.3,20.9C61.4,34.3,46.2,44,30.2,53.4C14.3,62.9,-2.5,72.1,-19.4,71.3C-36.2,70.5,-53.1,59.7,-62.4,45.2C-71.7,30.7,-73.4,12.6,-69.2,-3.5C-65,-19.6,-54.9,-33.7,-42.1,-44.2C-29.3,-54.7,-14.7,-61.6,1.2,-63.2C17.1,-64.8,34.2,-61.1,47.5,-66.2Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* HEADING */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1C1C1C]">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about{" "}
          <span className="text-[#C1272D] font-semibold">
            Gurukirpa Relocation Packers & Movers
          </span>
        </p>
      </div>

      {/* FAQ CONTAINER */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row rounded-3xl overflow-hidden bg-white shadow-xl border border-gray-200">

        {/* LEFT TABS */}
        <div className="md:w-1/3 bg-[#F5F5F5] p-6 space-y-4 border-r">
          {Object.keys(faqCategories).map((tab, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.04 }}
              onClick={() => {
                setActiveTab(tab);
                setOpenIndex(null);
              }}
              className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl font-semibold transition ${
                activeTab === tab
                  ? "bg-[#C1272D] text-white shadow-lg"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              {faqCategories[tab].icon}
              {tab}
            </motion.button>
          ))}
        </div>

        {/* RIGHT FAQ */}
        <div className="md:w-2/3 p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              {faqCategories[activeTab].faqs.map((faq, index) => (
                <div key={index} className="border-b py-5">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex justify-between items-center text-left"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-black">
                      {faq.question}
                    </h3>
                    <motion.span
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      className="text-[#C1272D]"
                    >
                      <FaPlus />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="mt-3 text-gray-600 leading-relaxed"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
