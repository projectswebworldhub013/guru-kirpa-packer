import { useParams } from "react-router-dom";
import { servicesData } from "./servicesData";
import { useState } from "react";
import Modal from "./ServiceModal";

export default function SingleServicePage() {
  const { slug } = useParams();
  const selectedService = servicesData.find(
    (s) => s.category.toLowerCase().replace(/\s+/g, "-") === slug
  );

  const [selectedSubService, setSelectedSubService] = useState(null);

  if (!selectedService) {
    return (
      <div className="p-10 text-center text-xl font-bold text-red-600">
        Service Not Found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-[#1a1a1a] to-gray-900 text-white py-16 font-[Poppins] relative overflow-hidden">
      {/* Red Circle Background */}
      <div className="absolute w-[600px] h-[600px] bg-red-700/10 border border-red-600 rounded-full top-[-150px] left-[-150px] blur-3xl opacity-60 animate-pulse z-0" />

      {/* TOP SECTION (Image + Content) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-start gap-12">
        {/* IMAGE */}
        <div className="lg:w-1/2 w-full relative">
          <img
            src={selectedService.image}
            alt={selectedService.category}
            className="w-full h-auto object-cover rounded-lg shadow-2xl border-4 border-red-600"
          />
        </div>

        {/* CONTENT */}
        <div className="lg:w-1/2 w-full space-y-8">
          <h1 className="text-5xl font-bold text-red-500">
            {selectedService.category}
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed">
            {selectedService.description}
          </p>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-white">Our Services</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedService.subServices.map((sub, i) => (
                <li key={i}>
                  <button
                    className="w-full text-left px-4 py-3 bg-gray-800 border border-gray-700 hover:bg-red-600 hover:text-white transition-all duration-300 rounded-md shadow"
                    onClick={() => setSelectedSubService(sub)}
                  >
                    {sub}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* NEW BOTTOM SECTION */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* WHY CHOOSE US */}
        <div className="space-y-3 border-t border-gray-700 pt-6">
          <h2 className="text-2xl font-semibold text-red-500">
            Why Choose Gurukirpa?
          </h2>
          <p className="text-gray-300">{selectedService.whyChoose}</p>
        </div>

        {/* WHAT MAKES US SUPERIOR */}
        <div className="space-y-3 border-t border-gray-700 pt-6">
          <h2 className="text-2xl font-semibold text-white">
            What Makes Us Superior?
          </h2>
          <p className="text-gray-400">{selectedService.superiority}</p>
        </div>
      </div>

      {/* MODAL */}
      {selectedSubService && (
        <Modal
          title={selectedSubService}
          onClose={() => setSelectedSubService(null)}
        />
      )}
    </section>
  );
}
