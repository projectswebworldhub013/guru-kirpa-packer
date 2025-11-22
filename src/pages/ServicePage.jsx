import { useState } from "react";
import { servicesData } from "./servicesData";
import Modal from "./ServiceModal";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(servicesData[0]);
  const [selectedSubService, setSelectedSubService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (subService) => {
    setSelectedSubService(subService);
    setIsModalOpen(true);
  };

  return (
    <section className="min-h-screen flex bg-white text-gray-900 font-[Poppins]">
      {/* Left Side - Service List */}
      <aside className="w-1/4 bg-black text-white p-5 space-y-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2">
          Our Services
        </h2>
        {servicesData.map((service, i) => (
          <div
            key={i}
            onClick={() => setSelectedService(service)}
            className={`cursor-pointer p-3 rounded-md hover:bg-red-600 transition-all ${
              selectedService.category === service.category
                ? "bg-red-700"
                : "bg-gray-900"
            }`}
          >
            <h3 className="text-base font-semibold">{service.category}</h3>
          </div>
        ))}
      </aside>

      {/* Right Side - Details */}
      <main className="w-3/4 p-10 space-y-6 bg-white">
        <div className="flex items-start gap-8">
          <img
            src={selectedService.image}
            alt={selectedService.category}
            className="w-1/2 rounded-lg shadow-lg border border-gray-200"
          />
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              {selectedService.category}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {selectedService.description}
            </p>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              Sub Services:
            </h4>
            <ul className="space-y-2">
              {selectedService.subServices.map((sub, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => openModal(sub)}
                    className="text-left w-full text-gray-900 hover:text-red-600 underline underline-offset-4"
                  >
                    {sub}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <Modal
          title={selectedSubService}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
}
