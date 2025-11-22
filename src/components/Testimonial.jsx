import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Yadav',
    date: '12 Jan, 2023',
    rating: '4.8',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    review:
      'Gurukirpa Relocation made our shifting experience smooth and reliable. Their attention to detail was truly exceptional.',
  },
  {
    name: 'Neha Shukla',
    date: '5 Feb, 2023',
    rating: '4.9',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    review:
      'From packing to delivery, the team was professional and responsive. Highly recommend them for stress-free relocation!',
  },
  {
    name: 'Vikram Singh',
    date: '20 Mar, 2023',
    rating: '5.0',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
    review:
      'We trust Gurukirpa for all our office relocations. On time, efficient, and very careful with goods.',
  },
  {
    name: 'Priyanka Verma',
    date: '8 Apr, 2023',
    rating: '4.7',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    review:
      'I was amazed by the professionalism. They made the whole moving process feel effortless.',
  },
  {
    name: 'Amit Tiwari',
    date: '15 May, 2023',
    rating: '4.9',
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
    review:
      'Consistently dependable service. They treat every item with care and precision.',
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-10 px-6 overflow-hidden text-white font-[Poppins]">
      {/* Decorative Red Hollow Circle SVG */}
      <svg
        className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] opacity-10 z-0"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="300" cy="300" r="250" stroke="#C62828" strokeWidth="40" fill="none" />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold  text-black mb-12 border-l-4 border-[#C62828] pl-4">
          What Our Clients Say <span className="block text-[#C62828]">Gurukirpa Relocation</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left: Reviewer List */}
          <div className="w-full md:w-1/2 space-y-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 transition-all duration-500 ${
                  index === currentIndex ? 'opacity-100 scale-105' : 'opacity-40 scale-95'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full border-2 border-gray-500"
                />
                <div>
                  <p className="font-semibold text-black">{item.name}</p>
                  <div className="flex items-center text-sm text-gray-800">
                    <Star className="text-[#C62828] w-4 h-4 mr-1" />
                    {item.rating} on {item.date}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Testimonial Display */}
          <div className="w-full md:w-1/2 relative flex flex-col gap-6">
            <p className="text-lg sm:text-xl font-semibold italic text-gray-700 leading-snug border-l-4 border-[#C62828] pl-4">
              “Excellence in motion — where every move matters.”
            </p>

            {/* Testimonial Box */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#C62828] opacity-20 rounded-full blur-3xl z-0" />
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={testimonials[currentIndex].name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="relative bg-[#121212] text-gray-300 shadow-xl rounded-2xl p-6 sm:p-8 border-l-4 border-[#C62828] text-base sm:text-lg leading-relaxed z-10"
                >
                  <svg
                    className="absolute top-[-10px] left-[-10px] w-10 h-10 text-[#C62828]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.17 6A5.001 5.001 0 002 11v3a3 3 0 003 3h3a3 3 0 003-3v-2a3 3 0 00-3-3H6.83a5.001 5.001 0 01.34-2zM17.17 6A5.001 5.001 0 0012 11v3a3 3 0 003 3h3a3 3 0 003-3v-2a3 3 0 00-3-3h-.17a5.001 5.001 0 01.34-2z" />
                  </svg>
                  “{testimonials[currentIndex].review}”
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Tagline */}
            <p className="text-center text-[#C62828] font-bold text-xl pt-6">
              "We Move With Care. We Move With Heart."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
