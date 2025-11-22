import React, { useEffect, useState } from "react";

const statsData = [
  { label: "Years of Experience", value: 25, suffix: "+" },
  { label: "Projects Completed", value: 3200, suffix: "+" },
  { label: "Happy Clients", value: 2950, suffix: "+" },
  { label: "Cities Served", value: 85, suffix: "+" },
];

const keyPoints = [
  "ISO Certified",
  "IBA Certified",
  "24/7 Customer Support",
  "100+ Skilled Employees",
];

const DynamicStatsCounter = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const intervalTime = 20;
    const increments = statsData.map(stat => stat.value / (duration / intervalTime));

    const interval = setInterval(() => {
      setCounts(prevCounts =>
        prevCounts.map((count, i) => {
          if (count < statsData[i].value) {
            const next = count + increments[i];
            return next > statsData[i].value ? statsData[i].value : next;
          }
          return count;
        })
      );

      if (counts.every((count, i) => count >= statsData[i].value)) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-14 px-6 bg-[#F9F9F()] text-black overflow-hidden">
      {/* Decorative SVG Circles (Hollow shimmer style) */}
      <svg className="absolute -top-20 -left-20 w-[300px] h-[300px] animate-pulse opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="90" stroke="#C62828" strokeWidth="8" fill="none" />
      </svg>
      <svg className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] animate-pulse opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="80" stroke="#C62828" strokeWidth="6" fill="none" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-sm uppercase font-semibold tracking-widest text-[#C62828] mb-2">
            Gurukripa Relocation
          </h2>
          <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Relocation That Feels <span className="text-[#C62828]">Effortless</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by families and businesses since 1999. We move your world with care, speed, and professionalism.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {statsData.map(({ label, suffix }, idx) => (
            <div key={label} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold text-[#C62828] drop-shadow-sm">
                {Math.floor(counts[idx])}
                {suffix}
              </span>
              <p className="mt-2 text-base md:text-lg text-gray-700 font-medium">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {keyPoints.map((point, i) => (
            <div
              key={i}
              className="border border-[#C62828] text-[#C62828] bg-white font-semibold py-3 px-4 rounded-xl shadow hover:shadow-md text-sm md:text-base transition"
            >
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicStatsCounter;
