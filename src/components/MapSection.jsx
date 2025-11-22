import React from "react";

const MapSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#f3f3f3] via-[#e0f7ec] to-[#f3f5f3] py-16 px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-red-800 font-[Poppins] mb-3">
          "Your Trusted Move Starts Here"
        </h2>
        <p className="text-lg md:text-xl text-[#1B2A41] font-medium">
          Visit our office — We’re just one move away from your destination.
        </p>
      </div>

      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-[#B21B27]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d117713.04385296108!2d75.82747098756897!3d22.78272004475569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39631de49c48564b%3A0xeb29a2ec04436b3!2sGround%20Floor%2C%20Shop%20No%2C%2075%2F1%2C%20Talab%20Rd%2C%20opposite%20Teja%20Ji%20Maharaz%20Temple%2C%20Dewas%20Naka%2C%20Lasudia%20Mori%2C%20Indore%2C%20Madhya%20Pradesh%20452010!3m2!1d22.7827412!2d75.9098726!5e0!3m2!1sen!2sin!4v1754914281463!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Gurukirpa Relocation pavker and Mover"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;

