import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

const locations = [
  "Packers And Movers Barwani",
  "Packers And Movers Alirajpur",
  "Packers And Movers Itarsi",
  "Packers And Movers Narmadapuram",
  "Packers And Movers Jabalpur",
  "Packers And Movers Ashok Nagar",
  "Packers And Movers Guna",
  "Packers And Movers Gwalior",
  "Packers And Movers Shivpuri",
  "Packers And Movers Nagda",
  "Packers And Movers Sanwer",
  "Packers And Movers Mhow",
  "Packers And Movers Pithampur",
  "Packers And Movers Pipariya",
  "Packers And Movers Gadarwara",
  "Packers And Movers Kareli",
];

export default function MarqueeStrip() {
  return (
    <div className="overflow-hidden bg-[#C62828] text-white py-2">
      <div className="whitespace-nowrap animate-marquee flex gap-10">
        {[...locations, ...locations].map((location, index) => (
          <div key={index} className="flex items-center gap-2 text-sm font-medium hover:text-yellow-300 transition-all">
            <HiOutlineLocationMarker className="text-lg" />
            <span>{location}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
