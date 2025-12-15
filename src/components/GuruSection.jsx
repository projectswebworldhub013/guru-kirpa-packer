import React, { useState } from "react";

const cities = [
  "Khargone","Khandwa","Harda","Ujjain","Burhanpur","Barwani","Nepanagar","Sanawad",
  "Jhabua","Neemuch","Mandsaur","Ratlam","Nagda","Manawar","Kukshi","Alirajpur",
  "Dewas","Sehore","Ashta","Shajapur","Bhopal","Gwalior","Guna","Shivpuri",
  "Ashok Nagar","Sagar","Tikamgarh","Chatarpur","Jabalpur","Pipariya","Gadarwara",
  "Narsinghpur","Narmadapuram","Itarsi","Rewa","Satna","Katni","Singrauli","Rajgarh",
  "Biaora","Petlawad","Kareli","Chindwara","Vidisha","Betul","Agar Malwa","Datia",
  "Maihar","Sidhi","Dhar","Pithampur","Mhow","Sanwer","Manasa"
];

const STEP = 12; // 2 rows (6 x 2)

const GurukirpaSection = () => {
  const [visibleCount, setVisibleCount] = useState(STEP);

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + STEP, cities.length));
  };

  const handleShowLess = () => {
    setVisibleCount(prev => Math.max(prev - STEP, STEP));
  };

  return (
    <section className="relative w-full py-8 px-4 bg-[#F7F7F7] text-black font-sans overflow-hidden">

      {/* Red Hollow Circle SVG BG */}
      <svg
        className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] opacity-10"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="180" stroke="#C1272D" strokeWidth="3" />
      </svg>

      <svg
        className="absolute bottom-[-140px] right-[-140px] w-[450px] h-[450px] opacity-10"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="190" stroke="#C1272D" strokeWidth="3" />
      </svg>

      {/* Heading */}
      <div className="relative z-10 text-center max-w-5xl mx-auto mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#C1272D] tracking-wide">
          Gurukirpa Relocation Packers & Movers
        </h2>

        <p className="mt-4 text-gray-700 text-lg md:text-xl italic">
          Trusted Shifting, Every Time  
          <br className="hidden md:block" />
          Making Every Move Stress-Free & Secure
        </p>
      </div>

      {/* Cities Grid */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {cities.slice(0, visibleCount).map((city, idx) => (
            <div
              key={idx}
              className="text-center px-4 py-2 rounded-full text-sm font-semibold
              bg-white border border-gray-300 text-gray-800
              hover:border-[#C1272D] hover:text-[#C1272D]
              transition-all duration-300 cursor-pointer"
            >
              {city}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-5 flex justify-center gap-4 flex-wrap">
          {visibleCount < cities.length && (
            <button
              onClick={handleShowMore}
              className="px-8 py-3 cursor-pointer rounded-full text-sm font-light
              bg-[#C1272D] text-white
              hover:bg-black transition-all duration-300 shadow-md"
            >
              Show More Cities
            </button>
          )}

          {visibleCount > STEP && (
            <button
              onClick={handleShowLess}
              className="px-8 py-3  cursor-pointer rounded-full text-sm font-light
              border border-gray-400 text-gray-700 bg-white
              hover:border-[#C1272D] hover:text-[#C1272D]
              transition-all duration-300 shadow-sm"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default GurukirpaSection;
