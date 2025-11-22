import { useEffect, useState } from "react";
import { ChevronDown, X, User, Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import vid from "../assets/images/home/vid.mp4";

const quotes = [
  "We Move, You Relax 🛋️",
  "Trusted Shifting, Every Time ✅",
  "Making Every Move Stress-Free 📦",
  "Your Belongings, Our Responsibility 💪",
  "Relocate the Smart Way 🚚✨"
];

const Hero = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden font-sans">
        {/* Background Video */}
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover z-0" src={vid} />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Red shimmer */}
        <div className="absolute top-1/3 left-1/2 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full animate-pulse z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        {/* Hero Content */}
        <div className="relative text-white z-20 w-full h-full flex flex-col items-center justify-center text-center px-4">
          <TypeAnimation
            sequence={[
              "Swift. Smart. Secure.",
              1500,
              "Moving Dreams, Not Just Boxes.",
              2000,
              "Effortless Relocation Experts.",
              2000,
              "Delivering Care with Every Move.",
              2000
            ]}
            wrapper="h1"
            speed={50}
            repeat={Infinity}
            className="text-white text-5xl sm:text-6xl md:text-6xl font-extrabold uppercase tracking-wide drop-shadow-md"
          />

          {/* Animated Quote */}
          <div className="h-12 mt-4 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={quotes[currentQuote]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-red-400 text-base md:text-xl font-medium"
              >
                {quotes[currentQuote]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-gray-100 text-md md:text-lg mt-5 max-w-3xl leading-relaxed"
          >
            Your Trusted Partner for Hassle-Free Relocation – Local & Nationwide Packers and Movers.
            Serving Since 1999 – Indore’s Most Reliable Shifting Partner.
          </motion.p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <motion.button
              onClick={() => setShowModal(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-red-800 transition"
            >
              Get a Free Quote
            </motion.button>

            <motion.a
              href="/about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-white hover:text-black transition"
            >
              Explore More
            </motion.a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
        >
          <ChevronDown className="text-white" size={32} />
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -50 }}
              transition={{ duration: 0.3 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-2xl shadow-2xl w-[90%] max-w-lg z-50 border border-red-600/30"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-300 hover:text-white transition"
              >
                <X size={24} />
              </button>

              <h2 className="text-3xl font-bold mb-6 text-red-500">Get a Free Quote</h2>

              {/* FormSubmit Form */}
              <form
                className="space-y-4"
                action="https://formsubmit.co/helpgurukriparelocation@gmail.com"
                method="POST"
              >
                {/* Hidden Inputs */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://gkpackers.in" />

                <div className="flex items-center bg-gray-800/50 rounded-lg p-3">
                  <User className="text-red-500 mr-3" />
                  <input type="text" name="name" placeholder="Full Name" required className="bg-transparent outline-none w-full text-white placeholder-gray-400" />
                </div>

                <div className="flex items-center bg-gray-800/50 rounded-lg p-3">
                  <Mail className="text-red-500 mr-3" />
                  <input type="email" name="email" placeholder="Email Address" required className="bg-transparent outline-none w-full text-white placeholder-gray-400" />
                </div>

                <div className="flex items-center bg-gray-800/50 rounded-lg p-3">
                  <Phone className="text-red-500 mr-3" />
                  <input type="tel" name="mobile" placeholder="Mobile Number" required className="bg-transparent outline-none w-full text-white placeholder-gray-400" />
                </div>

                <div className="flex items-center bg-gray-800/50 rounded-lg p-3">
                  <MapPin className="text-red-500 mr-3" />
                  <input type="text" name="destination" placeholder="Destination" required className="bg-transparent outline-none w-full text-white placeholder-gray-400" />
                </div>

                <div className="flex items-start bg-gray-800/50 rounded-lg p-3">
                  <MessageSquare className="text-red-500 mr-3 mt-1" />
                  <textarea name="message" placeholder="Your Message" className="bg-transparent outline-none w-full text-white placeholder-gray-400 resize-none" rows={3}></textarea>
                </div>

                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 transition font-bold py-3 rounded-lg shadow-md">
                  Submit Request
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
