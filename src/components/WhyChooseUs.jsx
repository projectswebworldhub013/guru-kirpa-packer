import React from "react";
import { FiUserCheck, FiShield, FiTruck } from "react-icons/fi";
import bgImage from "../assets/images/home/bgw.jpg";
import { Link } from "react-router-dom";

export default function WhyChooseUs() {
  return (
    <section className="relative w-full py-20 px-4 md:px-12 font-[Poppins] text-[#1B2A41]">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Top Heading */}
        <div className="text-center mb-10">
          <h3 className="text-sm uppercase tracking-widest text-[#C62828] font-semibold mb-2">
            Why People Trust Us
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Why <span className="text-[#C62828]">Gurukirpa Relocation</span> is the Right Choice
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            “From the first box to the final destination, we move your world with care.”
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {[
            {
              icon: <FiUserCheck />,
              title: "Verified & Trained Staff",
              desc: "Our movers are background-checked, experienced, and trained to handle goods with utmost care.",
            },
            {
              icon: <FiShield />,
              title: "Safety & Insurance",
              desc: "Your belongings are packed securely with multilayer materials. Insurance available on request.",
            },
            {
              icon: <FiTruck />,
              title: "1000+ Successful Moves",
              desc: "We've helped relocate families & businesses across India with speed and precision.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E5E5] rounded-xl p-6 shadow hover:shadow-md transition-all"
            >
              <div className="text-2xl mb-4 text-[#C62828]">{item.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}

          {/* Full Width Call to Action Box */}
          <div className="md:col-span-2 lg:col-span-3 bg-[#C62828] text-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">Punctual & Flexible Scheduling</h4>
              <p className="text-sm text-white/90 max-w-2xl">
                We value your time. Whether it's early morning, weekends, or holidays — we adapt to your availability.
              </p>
            </div>
            <Link to="/contact">
              <button className="mt-4 md:mt-0 bg-white text-[#C62828] font-semibold px-6 py-2 rounded-full text-sm hover:bg-[#f8f8f8] transition-all">
                Book Free Survey →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
