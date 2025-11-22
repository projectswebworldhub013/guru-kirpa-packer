import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaSearchLocation,
  FaHome,
  FaTruck,
  FaImage,
  FaInfoCircle,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";
import bgImg from "../assets/images/home/footer3.avif";


const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="relative bg-cover bg-center bg-no-repeat text-black pt-20 pb-10 px-6 md:px-16 overflow-hidden font-sans font-semibold"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0" />

      {/* Glow accents */}
      <div className="absolute -top-20 left-[-100px] w-[300px] h-[300px] bg-[#C62828]/10 blur-[130px] opacity-20 rounded-full z-0" />
      <div className="absolute -bottom-20 right-[-100px] w-[300px] h-[300px] bg-[#C62828]/10 blur-[150px] opacity-20 rounded-full z-0" />

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm">
        {/* About */}
        <div className="flex flex-col space-y-1">
          {/* <img src={logo} alt="Gurukirpa Packers Logo" className="w-[100px] md:w-[150px]" /> */}
          <h4 className="font-bold mb-2 text-3xl text-[#C62828]">About Us</h4>
          <p className="leading-relaxed text-black">
            Gurukirpa Relocation Packers and Movers has been a trusted name since 1999, offering secure and professional relocation services across India with care and reliability.
          </p>
          <div className="mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 border border-[#C62828] text-[#C62828] rounded hover:bg-white hover:text-black transition duration-300 text-sm font-medium"
            >
              Find us on Google
            </a>
          </div>
        </div>

        {/* page Links */}
        <div>
          <h4 className="font-bold text-2xl mb-4 text-[#C62828]">Page Links</h4>
          <ul className="space-y-2 text-black">
            {[
              ["Home", "/", <FaHome />],
              ["About Us", "/about", <FaInfoCircle />],
              ["Our Service", "/services", <FaTruck />],
              ["Gallery", "/gallery", <FaImage />],
              ["Contact Us", "/contact", <FaPhoneAlt />],
            ].map(([text, link, icon], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 hover:text-[#C62828] transition duration-300"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="mt-6 font-bold text-2xl text-[#C62828]">Emails</h4>
          <ul className="mt-2 space-y-2 text-black">
            {[
              "Info@gkpackers.in",
              "gkpackers@gmail.com",
              "helpgurukriparelocation@gmail.com",
            ].map((email, i) => (
              <li key={i}>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center space-x-2 hover:text-[#C62828] transition duration-300"
                >
                  <FaEnvelope className="text-[#C62828]" />
                  <span>{email}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

       {/* Quick Links Section */}
{/* Quick Links Section */}
<div>
  <h4 className="font-bold text-2xl mb-4 text-[#C62828]">Quick Links</h4>
  <ul className="space-y-2 text-black">
    <li>
      <Link to="/certificates" className="hover:text-[#C62828] transition duration-300">
        Our Certificates
      </Link>
    </li>
    <li>
      <Link to="/disclaimer" className="hover:text-[#C62828] transition duration-300">
        Disclaimer
      </Link>
    </li>
    <li>
      <Link to="/privacy-policy" className="hover:text-[#C62828] transition duration-300">
        Privacy Policy
      </Link>
    </li>
  </ul>

  {/* Phone Numbers Below Quick Links */}
  <div className="mt-8">
    <h4 className="font-bold text-2xl text-[#C62828] mb-4">Phone</h4>
    <ul className="space-y-2 text-black">
      {[
        { number: "+91 9009078333" },
        { number: "+91 9300178333" },
        { number: "+91 7440223233" },
      ].map((phone, i) => (
        <li key={i}>
          <a
            href={`tel:${phone.number.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 hover:text-[#C62828] transition"
          >
            <FaPhoneAlt className="text-[#C62828]" />
            {phone.number}
          </a>
        </li>
      ))}
    </ul>
  </div>
</div>



        {/* Address & Social */}
        <div>
          <h4 className="font-bold text-2xl mb-4 text-[#C62828]">Contact Info</h4>
          <address className="not-italic leading-relaxed mb-4 text-black">
            Shop No. 75/1 Ground Floor, Lasudia Mori,<br />
            Opposite Teja Ji Maharaz Temple,<br />
            Talab Road, Dewas Naka,<br />
            Indore, Madhya Pradesh 453771, India
          </address>
          <p className="text-black">
            GST No: 23AEBPT8935L1Z0<br />
            UDYAM-MP-23-0026241
          </p>

          <div className="mb-4 flex justify-center items-center mt-4">
            <div>

            <Translator />
            </div>
          </div>

          <div className="mt-6 flex space-x-4">
            {[FaInstagram, FaFacebookF, FaYoutube, FaSearchLocation].map((Icon, i) => (
              <a key={i} href="#" className="text-[#C62828] hover:text-black transition">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-xs text-black border-t border-gray-700 pt-6 space-y-2 relative z-10">
        <VisitorCounter />
        <p>© {new Date().getFullYear()} Gurukirpa Relocation Packers and Movers. All rights reserved.</p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-black transition"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
