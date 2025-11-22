import React from "react";
import { MapPin } from "lucide-react";
import relocationImage from "../assets/images/home/man.avif";

const cities = [
  "Khargone","Khandwa","Harda","Ujjain","Burhanpur","Barwani","Nepanagar","Sanawad",
  "Jhabua","Neemuch","Mandsaur","Ratlam","Nagda","Manawar","Kukshi","Alirajpur",
  "Dewas","Sehore","Ashta","Shajapur","Bhopal","Gwalior","Guna","Shivpuri",
  "Ashok Nagar","Sagar","Tikamgarh","Chatarpur","Jabalpur","Pipariya","Gadarwara",
  "Narsinghpur","Narmadapuram","Itarsi","Rewa","Satna","Katni","Singrauli","Rajgarh",
  "Biaora","Petlawad","Kareli","Chindwara","Vidisha","Betul","Agar Malwa","Datia",
  "Maihar","Sidhi","Dhar","Pithampur","Mhow","Sanwer","Manasa"
];

const GurukirpaSection = () => {
  return (
    <div className="w-full bg-[#f9f9f9] text-gray-900 flex flex-col items-center font-sans py-12 px-4">
      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 text-center mb-4 drop-shadow-lg">
        Gurukirpa Relocation Packers & Movers
      </h2>

      {/* Center Quote */}
      <p className="text-lg md:text-xl text-gray-700 italic text-center mb-12 drop-shadow-sm">
        "Trusted Shifting, Every Time – Making Every Move Stress-Free"
      </p>

      <div className="w-full flex flex-col md:flex-row gap-8 max-w-8xl">
        {/* Left Side - Scrollable Cities */}
        <div className="md:w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-sm shadow-sm h-[600px] overflow-y-auto scrollbar-none">
          <h3 className="text-2xl font-bold mb-6 text-red-600 flex items-center">
            <MapPin className="mr-2" /> Our Service Cities
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {cities.map((city, idx) => (
              <div
                key={idx}
                className="bg-red-50 text-red-700 font-semibold px-4 py-2 rounded-xl shadow-md hover:bg-red-800 hover:text-white transition transform hover:-translate-y-1 cursor-pointer text-center"
              >
                {city}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center items-start hidden md:flex">
          <img
            src={relocationImage}
            alt="Relocation"
            className="rounded-2xl shadow-2xl w-full max-w-md h-auto object-cover border-4 border-red-800 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default GurukirpaSection;
