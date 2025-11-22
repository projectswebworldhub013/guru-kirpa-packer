import React from "react";
import { motion } from "framer-motion";
import { FaUserCircle, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const teamMembers = [
  { name: "Ravindra Singh", position: "Founder & CEO", linkedin: "#" },
  { name: "Sunita Mehra", position: "Operations Manager", linkedin: "#" },
  { name: "Deepak Chauhan", position: "Logistics Head", linkedin: "#" },
  { name: "Neha Soni", position: "Customer Relations", linkedin: "#" },
  { name: "Vikas Yadav", position: "Packaging Supervisor", linkedin: "#" },
  { name: "Kiran Patel", position: "Accounts & Finance", linkedin: "#" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function OurTeam() {
  return (
    <section className="py-20 px-4 md:px-20 bg-gradient-to-br from-[#f5f2ef] via-[#e9dbd5] to-[#ffffff] text-[#0B1F3A] relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative z-10 w-full mx-auto text-center"
      >
        <motion.h4
          variants={itemVariants}
          className="text-[#B21B27] font-semibold mb-2 text-md uppercase"
        >
          Dedicated Team
        </motion.h4>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-[Great_Vibes] text-[#B21B27] mb-4"
        >
          Meet Our Team
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-[#0B1F3A] max-w-3xl mx-auto mb-8 text-lg"
        >
          The professionals at Gurukirpa Relocation bring passion, experience, and commitment
          to make your moving journey smooth, safe, and stress-free.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <Link to="/contact">
            <button className="bg-gradient-to-r from-[#B21B27] to-[#0B1F3A] text-white px-7 py-3 rounded-full hover:from-[#98131f] hover:to-[#0A1630] transition text-lg shadow-lg">
              Get Started
            </button>
          </Link>
          <Link to="/services">
            <button className="border border-[#B21B27] text-[#B21B27] px-7 py-3 rounded-full hover:bg-[#B21B27] hover:text-white transition text-lg shadow-lg">
              Explore Services
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Mobile Slider */}
      <div className="md:hidden relative z-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <ProfileCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Laptop Grid */}
      <div className="hidden md:flex flex-wrap justify-center gap-10 relative z-10">
        {teamMembers.map((member, index) => (
          <ProfileCard key={index} member={member} />
        ))}
      </div>
    </section>
  );
}

function ProfileCard({ member }) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
      className="flex flex-col items-center space-y-3"
    >
      <motion.div
        {...floatAnimation}
        className="w-28 h-28 rounded-full border-2 border-[#B21B27] shadow-xl flex items-center justify-center bg-[#0B1F3A]/10"
      >
        <FaUserCircle className="text-6xl text-[#B21B27]" />
      </motion.div>
      <h4 className="font-semibold text-2xl">{member.name}</h4>
      <p className="text-base">{member.position}</p>
      <div className="flex gap-6 text-2xl text-[#0B1F3A] hover:text-[#B21B27] transition">
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </motion.div>
  );
}
