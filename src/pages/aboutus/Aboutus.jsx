import React from "react";
import Header from "../../components/header/Header";
import { motion } from "framer-motion";
import Aboutusimg from "./../../assets/image-7.jpg";
import icone from "./../../assets/Icon.png";
import icone2 from "./../../assets/Icon-2.png";
import icone1 from "./../../assets/Icon-1.png";
import icone4 from "./../../assets/Vector.png";

function Aboutus() {
  return (
    <>
      <Header name="ABOUT US" />
      <div className="bg-white pb-10">
        <div className="relative p-5">
          {/* Image */}
          <img
            src={Aboutusimg}
            alt="Runner tying shoes"
            className="w-full object-cover"
            style={{ maxHeight: "500px" }}
          />
        </div>

        {/* Text and Icons Section */}
        <div className="px-6 text-center md:px-12 md:text-left lg:px-24">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4 mt-10 text-3xl font-bold text-black"
          >
            MAKE A DIFFERENCE
          </motion.h2>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-sm text-gray-600"
          >
            Contemporary running shoes sample authentic styles, modern men and
            women. Follow us for the latest deals. Tag us and get featured.
          </motion.p>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            {/* Icon Text Blocks */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center md:items-start"
            >
              <img
                src={icone}
                alt="Our History Icon"
                className="mb-2 h-10 w-10"
              />
              <span className="font-semibold text-black">OUR HISTORY</span>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center md:items-start"
            >
              <img
                src={icone2}
                alt="Take a Tour Icon"
                className="mb-2 h-10 w-10"
              />
              <span className="font-semibold text-black">TAKE A TOUR</span>
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center md:items-start"
            >
              <img
                src={icone1}
                alt="Routes Available Icon"
                className="mb-2 h-10 w-10"
              />
              <span className="font-semibold text-black">ROUTES AVAILABLE</span>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center md:items-start"
            >
              <img
                src={icone4}
                alt="Success Story Icon"
                className="mb-2 h-10 w-10"
              />
              <span className="font-semibold text-black">SUCCESS STORY</span>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
