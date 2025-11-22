import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiPhone,
  FiMail,
  FiHome,
  FiInfo,
  FiImage,
  FiBriefcase,
  FiPhoneCall,
  FiChevronDown,
} from "react-icons/fi";
import logo from "../assets/gklogo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // for desktop
  const [showMobileDropdown, setShowMobileDropdown] = useState(false); // for mobile

  const navLinks = [
    { name: "HOME", path: "", icon: <FiHome /> },
    { name: "ABOUT", path: "about", icon: <FiInfo /> },
    { name: "SERVICES", dropdown: true, icon: <FiBriefcase /> },
    { name: "GALLERY", path: "gallery", icon: <FiImage /> },
    { name: "CONTACT", path: "contact", icon: <FiPhoneCall /> },
  ];

  const servicesList = [
    { title: "Relocation Services", slug: "relocation-services" },
    { title: "Transportation Services", slug: "transportation-services" },
    { title: "Loading Services", slug: "loading-services" },
    { title: "Packaging Services", slug: "packaging-services" },
    { title: "Local Shifting Services", slug: "local-shifting-services" },
    { title: "Project Cargo Service", slug: "project-cargo-service" },
    { title: "Risk Management Services", slug: "risk-management-services" },
    { title: "Goods Warehousing Service", slug: "goods-warehousing-service" },
  ];

  return (
    <>
      {/* Top Header */}
      <div className="w-full bg-[#1B2A41] text-[#F9F9F9] text-xs py-2 px-4 hidden md:flex justify-between items-center font-[Poppins] tracking-wide">
        <div className="flex items-center gap-4 flex-wrap">
          <a href="mailto:gkpackers@gmail.com" className="flex items-center gap-1 hover:text-[#C62828] transition duration-200">
            <FiMail /> gkpackers@gmail.com
          </a>
          <a href="mailto:Info@gkpackers.in" className="flex items-center gap-1 hover:text-[#C62828] transition duration-200">
            <FiMail /> Info@gkpackers.in
          </a>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <a href="tel:+919009078333" className="flex items-center gap-1 hover:text-[#C62828] transition duration-200">
            <FiPhone /> +91 9009078333
          </a>
          <a href="tel:+917440223233" className="flex items-center gap-1 hover:text-[#C62828] transition duration-200">
            <FiPhone /> +91 7440223233
          </a>
          <span>GST No: 23AEBPT8935L1Z0</span>
          <span>UDYAM-MP-23-0026241</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="w-full bg-[#FAFAF0] shadow-md z-50 relative font-[Poppins]">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" onClick={() => setIsOpen(false)}>
  <img
    src={logo} // Change to your actual logo path
    alt="G.K Relocation Logo"
    className="h-14 w-auto object-contain"
  />
</Link>


          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center font-semibold text-[#1B2A41] relative">
            {navLinks.map((link, i) =>
              link.dropdown ? (
                <div key={i} className="relative">
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center gap-1 hover:text-[#C62828] transition duration-300"
                  >
                    {link.icon} {link.name} <FiChevronDown />
                  </button>
                  {showDropdown && (
                    <div className="absolute top-full left-0 w-64 mt-2 bg-white border shadow-lg rounded-md z-50">
                      {servicesList.map((service, idx) => (
                        <Link
                          to={`/services/${service.slug}`}
                          key={idx}
                          className="block px-4 py-2 text-sm text-[#1B2A41] hover:bg-[#F5F5F5] hover:text-[#C62828]"
                          onClick={() => setShowDropdown(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={i}
                  to={`/${link.path}`}
                  className="relative group flex items-center gap-1"
                >
                  <span className="group-hover:text-[#C62828] transition-all duration-300 flex items-center gap-1">
                    {link.icon} {link.name}
                  </span>
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#C62828] group-hover:w-full transition-all duration-300"></span>
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="bg-[#C62828] hover:bg-[#98131f] text-white text-sm font-semibold px-6 py-2 rounded-full shadow-lg transition ring-2 ring-[#C62828]/40 hover:ring-[#C62828]"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-3xl text-[#1B2A41] cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <FiMenu />
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-[#FAFAF0] z-[100] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } shadow-xl flex flex-col py-8 px-6 font-[Poppins]`}
      >
        <div className="absolute top-4 right-4 text-2xl text-[#C62828] cursor-pointer">
          <FiX onClick={() => setIsOpen(false)} />
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col gap-4 text-[#1B2A41] font-semibold mt-6 text-lg">
          {navLinks.map((link, i) =>
            link.dropdown ? (
              <div key={i}>
                <button
                  onClick={() => setShowMobileDropdown(!showMobileDropdown)}
                  className="flex items-center gap-2 hover:text-[#C62828] transition-all duration-300"
                >
                  {link.icon} {link.name} <FiChevronDown />
                </button>
                {showMobileDropdown && (
                  <div className="ml-5 mt-2 flex flex-col gap-1 text-sm">
                    {servicesList.map((service, idx) => (
                      <Link
                        to={`/services/${service.slug}`}
                        key={idx}
                        onClick={() => {
                          setShowMobileDropdown(false);
                          setIsOpen(false);
                        }}
                        className="hover:text-[#C62828]"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={i}
                to={`/${link.path}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-[#C62828] transition-all duration-300 flex items-center gap-2"
              >
                {link.icon} {link.name}
              </Link>
            )
          )}

          {/* CTA */}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-6 bg-[#C62828] hover:bg-[#98131f] text-white text-sm font-semibold px-5 py-2 rounded-full text-center shadow-md transition ring-2 ring-[#C62828]/40 hover:ring-[#C62828]"
          >
            Enquire Now
          </Link>

          {/* Mobile Contact Info */}
          <div className="flex flex-col gap-2 text-xs mt-8 text-[#1B2A41]">
            <a href="mailto:gkpackers@gmail.com" className="flex items-center gap-1 hover:text-[#C62828]">
              <FiMail /> gkpackers@gmail.com
            </a>
            <a href="mailto:Info@gkpackers.in" className="flex items-center gap-1 hover:text-[#C62828]">
              <FiMail /> Info@gkpackers.in
            </a>
             <a href="tel:+917440223233" className="flex items-center gap-1 hover:text-[#C62828]">
              <FiPhone /> +91 7440223233
            </a>
            <a href="tel:+919009078333" className="flex items-center gap-1 hover:text-[#C62828]">
              <FiPhone /> +91 9009078333
            </a>
            <a href="tel:+919300178333" className="flex items-center gap-1 hover:text-[#C62828]">
              <FiPhone /> +91 9300178333
            </a>
            
            <span className="mt-1">GST No: 23AEBPT8935L1Z0</span>
            <span>UDYAM-MP-23-0026241</span>
          </div>
        </nav>
      </div>
    </>
  );
}
