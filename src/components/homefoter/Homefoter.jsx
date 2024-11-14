import "./Homefoter.css";
import Downlode from "./../../assets/download.png";
import Downlode1 from "./../../assets/download 5.png";
import Downlode2 from "./../../assets/download 2.png";
import Downlode3 from "./../../assets/download 3.png";
import { motion } from "framer-motion";

function Homefoter() {
  return (
    <>
      <div className="px-6 text-center md:px-12 md:text-left lg:px-24">
        <div className="grid grid-cols-2 gap-4 py-6 md:grid-cols-4 md:gap-8">
          {/* Icon Text Blocks */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start"
          >
            <img
              src={Downlode}
              alt="Our History Icon"
              className="mb-2 h-20 w-20"
            />
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-4 mt-10 text-3xl font-bold text-black"
            >
              EASY RETURNS
            </motion.h2>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 text-sm text-gray-600"
            >
              Choose Order Pickup for your item Then when your order is ready.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start"
          >
            <img
              src={Downlode1}
              alt="Take a Tour Icon"
              className="mb-2 h-20 w-20"
            />
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-4 mt-10 text-3xl font-bold text-black"
            >
              50% CASHBACK
            </motion.h2>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 text-sm text-gray-600"
            >
              Earn every day on xstore.com, Start your free trial now. Terms
              apply.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start"
          >
            <img
              src={Downlode2}
              alt="Routes Available Icon"
              className="mb-2 h-20 w-20"
            />
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-4 mt-10 text-3xl font-bold text-black"
            >
              FREE SHIPPING
            </motion.h2>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 text-sm text-gray-600"
            >
              Your Shipt shopper will leave your order right ot your doorstep
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start"
          >
            <img
              src={Downlode3}
              alt="Success Story Icon"
              className="mb-2 h-20 w-20"
            />
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-4 mt-10 text-3xl font-bold text-black"
            >
              CURBSIDE DELIVER
            </motion.h2>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 text-sm text-gray-600"
            >
              When order is ready, switch to curbside Drive Up in the Xstore
              opp.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Homefoter;
