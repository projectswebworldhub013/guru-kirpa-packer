import React from "react";
import { FaDownload, FaEye } from "react-icons/fa";
import udyam from "../assets/images/certificates/udyam.pdf";
import gst from "../assets/images/certificates/gst.pdf";

const certificates = [
  {
    title: "Udyam Registration Certificate",
    file: udyam,
  },
  {
    title: "Gst Registration Certificate",
    file: gst,
  },
];

export default function Certificate() {
  return (
    <div className="bg-white text-[#1C1C1C]">
      {/* Hero Section */}
      <div className="w-full bg-[#B21B27] text-white text-center px-6 py-20 relative overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-[Great_Vibes] mb-4">
          Our Official Certifications
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
          We’re recognized for our trust, service quality, and compliance. Explore our official certifications below.
        </p>
        <div className="absolute w-64 h-64 bg-white opacity-20 rounded-full bottom-[-80px] right-[-80px] z-0"></div>
      </div>

      {/* Certificates Section */}
      <section className="py-16 px-4 md:px-12 bg-[#F9F9F9]">
        <h2 className="text-3xl md:text-4xl font-[popins] font-semibold text-center text-[#C62828] mb-8">
          Recognized & Verified
        </h2>
        <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12">
          These certifications reflect our unwavering commitment to quality, customer trust, and professional relocation services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg p-6 text-center border hover:shadow-xl transition-all duration-300"
            >
              <h3 className="font-semibold text-xl text-[#1C1C1C] mb-4">{cert.title}</h3>
              <div className="flex justify-center items-center gap-4 mt-2">
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#C62828] text-white rounded hover:bg-[#a31d1d] transition-all"
                >
                  <FaEye /> View
                </a>
                <a
                  href={cert.file}
                  download
                  className="flex items-center gap-2 px-4 py-2 border border-[#C62828] text-[#C62828] rounded hover:bg-[#C62828] hover:text-white transition-all"
                >
                  <FaDownload /> Download
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Final Line */}
        <p className="mt-16 text-center text-gray-700 text-lg font-medium">
          We don’t just promise — we’re certified to deliver excellence.
        </p>
      </section>
    </div>
  );
}
