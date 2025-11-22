import React from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import MapSection from "../components/MapSection";

const ContactPage = () => {
  return (
    <>
      <section className="w-full bg-gradient-to-b from-[#f5f2ef] via-[#e9dbd5] to-[#f3decc] font-sans py-1">
        {/* Hero */}
        <div className="w-full bg-[#B21B27] text-white text-center px-6 py-20 relative overflow-hidden">
          <h1 className="text-5xl md:text-6xl font-[Great_Vibes] mb-4">
            We’d Love To Hear From You
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Whether you have a question about services, partnerships, or anything else — our team is ready to assist.
          </p>
          <div className="absolute w-64 h-64 bg-white opacity-20 rounded-full bottom-[-80px] right-[-80px] z-0"></div>
        </div>

        {/* Contact Box */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl mt-[-60px] z-10 relative flex flex-col md:flex-row overflow-hidden px-6 md:px-12 py-12 md:py-16">
          {/* Left Info */}
          <div className="bg-[#B21B27] text-white px-8 py-12 relative md:w-1/2 w-full rounded-2xl md:rounded-r-none">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-white/90 text-base mb-6">
              We’re here to help and answer any question you might have.
            </p>

            <div className="flex items-start gap-4 text-base mb-4">
              <HiOutlinePhone className="mt-1 text-white text-2xl" />
              <div>
                +91 9009078333 <br />
                +91 9300178333 <br />
                +91 7440223233
              </div>
            </div>

            <div className="flex items-start gap-4 text-base mb-4">
              <AiOutlineMail className="mt-1 text-white text-2xl" />
              <div>
                Info@gkpackers.in <br />
                gkpackers@gmail.com <br />
                helpgurukriparelocation@gmail.com
              </div>
            </div>

            <div className="flex items-start gap-4 text-base mb-4">
              <BiMap className="mt-1 text-white text-2xl" />
              <div>
                Shop No. 75/1, Ground Floor, Lasudia Mori, Opp. Teja Ji Maharaz Temple, <br />
                Talab Road, Dewas Naka, Indore, Madhya Pradesh 453771, India
              </div>
            </div>

            <p className="text-white/80 text-sm mt-4">
              GST No: 23AEBPT8935L1Z0 <br />
              UDYAM: UDYAM-MP-23-0026241
            </p>

            <div className="absolute w-80 h-80 bg-white opacity-20 rounded-full bottom-[-100px] right-[-100px] z-0"></div>
          </div>

          {/* Right Form */}
          <div className="px-8 py-12 md:w-1/2 w-full">
            <form
              className="w-full"
              action="https://formsubmit.co/helpgurukriparelocation@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://gkpackers.in"
              />

              {/* Name + Email */}
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="flex-1">
                  <label className="block text-lg text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full border-b-2 border-gray-300 focus:border-[#B21B27] outline-none py-3 text-base"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-lg text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full border-b-2 border-gray-300 focus:border-[#B21B27] outline-none py-3 text-base"
                  />
                </div>
              </div>
              <div className="mb-8">
  <label className="block text-lg text-gray-700 mb-2">
    Mobile Number
  </label>
  <input
    type="tel"
    name="phone"
    required
    placeholder="+91 "
    pattern="[0-9]{10}"
    className="w-full border-b-2 border-gray-300 focus:border-[#B21B27] outline-none py-3 text-base"
  />
</div>

              {/* Subject */}
              <div className="mb-8">
                <label className="block text-lg text-gray-700 mb-2">
                  Your Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="How can we help you?"
                  className="w-full border-b-2 border-gray-300 focus:border-[#B21B27] outline-none py-3 text-base"
                />
              </div>

              {/* From - To Fields */}
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="flex-1">
                  <label className="block text-lg text-gray-700 mb-2">
                    From
                  </label>
                  <input
                    type="text"
                    name="from"
                    required
                    placeholder="Starting Location"
                    className="w-full border-b-2 border-gray-300 focus:border-[#B21B27] outline-none py-3 text-base"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-lg text-gray-700 mb-2">
                    To
                  </label>
                  <input
                    type="text"
                    name="to"
                    required
                    placeholder="Destination"
                    className="w-full border-b-2 border-gray-300 focus:border-[#B21B27] outline-none py-3 text-base"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="block text-lg text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  placeholder="Write your message here"
                  className="w-full border-b-2 border-gray-300 focus:border-[#B21B27] outline-none py-3 text-base resize-none"
                ></textarea>
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="bg-[#B21B27] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#98131f] transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <MapSection/>
    </>
  );
};

export default ContactPage;
