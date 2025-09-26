import React from "react";
import { CiHeart } from "react-icons/ci";
import { TbPhoneCall } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const PropertyBookingForm = () => {
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.2 } },
    tap: { scale: 0.98, transition: { duration: 0.1 } }
  };

 

  return (
    <motion.div
      className="w-full md:w-[530px] rounded-[20px] border border-[#6B728033] p-4 sm:p-6 shadow-sm bg-white"
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col space-y-4 sm:space-y-6">
        <motion.button
          className="flex gap-3 cursor-pointer items-center justify-center h-[54px] sm:h-[62px] px-4 sm:px-6 w-full rounded-lg border border-gray-200 bg-white text-gray-800 font-medium"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <CiHeart className="w-[22px] h-[22px]" />
          <span>Save to Favorites</span>
        </motion.button>

        <motion.button
          className="flex gap-3 cursor-pointer items-center justify-center h-[54px] sm:h-[62px] px-4 sm:px-6 w-full rounded-lg border border-gray-200 bg-white text-gray-800 font-medium"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <TbPhoneCall className="w-[22px] h-[22px]" />
          <span>Contact Seller</span>
        </motion.button>

        <motion.button
          className="flex gap-3 cursor-pointer items-center justify-center h-[54px] sm:h-[62px] px-4 sm:px-6 w-full rounded-lg bg-[#4F46E5] text-white font-medium shadow-md"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <FaCalendarAlt className="w-[20px] h-[20px]" />
          <span>Book a Visit</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PropertyBookingForm;

