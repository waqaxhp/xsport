import React, { useState } from "react";
import Header from "../../components/header/Header";
import { motion } from "framer-motion";

function Contactus() {
  const [latitude, setLatitude] = useState(33.621265);
  const [longitude, setLongitude] = useState(73.142517);
  return (
    <>
      <Header name="CONTACT US" />
      <iframe
        title="Google Map"
        src={`https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
        frameBorder="0"
        width="100%"
        height="500px"
        allowFullScreen="true"
        aria-hidden="false"
        tabIndex="0"
      ></iframe>

      <div className="bg-white px-4 py-10 md:px-10 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-10 md:flex-row">
          {/* Left Side - Contact Information */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="mb-4 text-4xl font-bold text-black">
              GET IN TOUCH.
            </h2>
            <p className="mb-8 text-base text-gray-700">
              We’re here to assist you with any questions or issues you might
              have regarding your recent shoe purchase. Whether it’s a sizing
              concern, a defect, or any other problem, our customer support team
              is ready to help. Please provide your order number and a brief
              description of the issue, and we’ll get back to you as soon as
              possible. Your satisfaction is our top priority!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="mr-2 text-lg font-semibold text-black">
                  OFFICE IN UK:
                </span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <span className="text-gray-700">+44 79 9955 7583</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📍</span>
                <span className="text-gray-700">UK</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✉️</span>
                <span className="text-gray-700">support@abc.com</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">🕒</span>
                <span className="text-gray-700">
                  Monday to Saturday: 8am to 7pm
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            {/* <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <textarea
                placeholder="Your message"
                rows="4"
                className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
              ></textarea>
              <button
                type="submit"
                className="w-full rounded-md bg-black p-3 text-white transition duration-300 hover:bg-gray-800"
              >
                SEND MESSAGE
              </button>
            </form> */}
            <form className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border-b-2 border-gray-300 pb-2 text-lg focus:border-gray-500 focus:outline-none"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full border-b-2 border-gray-300 pb-2 text-lg focus:border-gray-500 focus:outline-none"
                />
              </div>
              <div className="relative">
                <textarea
                  placeholder="Your message"
                  className="h-32 w-full resize-none border-b-2 border-gray-300 pb-2 text-lg focus:border-gray-500 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-black px-6 py-3 font-semibold text-white transition duration-300 hover:bg-gray-700"
              >
                SEND MESSAGE
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
