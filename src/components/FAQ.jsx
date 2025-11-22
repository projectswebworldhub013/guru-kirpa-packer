import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuestionCircle } from "react-icons/fa";
import bgImage from "../assets/gurukirpa.jpg"; // background image

const faqs = [
  {
    question:
      "Will GuruKirpa Packers & Movers in Vijay Nagar transport my belongings inside the furniture itself?",
    answer:
      "Clothes and other movable items are removed and packed separately in boxes. This also makes them lighter to carry furniture away.",
  },
  {
    question: "Should I pre-pack everything for them to carry away to the transport facility?",
    answer:
      "No, you do not need to pre-pack things. But, if you wish to be better prepared, you can do that too.",
  },
  {
    question: "What will GuruKirpa Packers & Movers in Indore not pack?",
    answer:
      "Ideally, you should never pack dangerous items that come under the 'dangerous goods' list. If you are unsure, please check with the representative who visits your home to assess your requirements.",
  },
  {
    question:
      "Can I call them directly on the day of shifting or do I need an earlier appointment?",
    answer:
      "Personnel from the company need to visit your home to assess the weight and capacity of your belongings so they can plan to bring adequate supplies and transport them accordingly. GuruKirpa Packers & Movers are available during Monday–Sunday: Open 24 Hrs. So, schedule a house call accordingly.",
  },
  {
    question: "Will they transport my plants safely?",
    answer:
      "Some movers and packers refuse to transport plants because of the risk of damage and death involved. Please ask them to provide clarity if they agree to the request.",
  },
  {
    question: "Can I send my pets with the packers and movers?",
    answer: "No, they only transport movable items and properties.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      className="relative w-full py-16 px-4 md:px-8 text-white flex justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0,0,0,0.7)",
      }}
    >
      {/* Overlay Glow Effect */}
      <div className="absolute -top-32 right-0 w-[400px] h-[400px] bg-red-600 opacity-20 rounded-full blur-3xl z-0 animate-pulse" />

      <div className="relative z-10 w-full max-w-4xl lg:max-w-5xl mx-auto bg-black/40 backdrop-blur-md rounded-3xl shadow-lg p-6 sm:p-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-red-500 mb-3 tracking-wide">
            <FaQuestionCircle className="inline mr-2 text-red-500" />
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            Common queries answered to help you understand our packing & moving process better.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border border-gray-700 hover:border-red-500 transition-all"
            >
              <button
                className="w-full flex justify-between items-center text-left text-white text-base md:text-lg font-semibold"
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
              >
                {faq.question}
                <span className="text-red-500 text-xl md:text-2xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300 mt-3 text-sm md:text-base leading-relaxed overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
