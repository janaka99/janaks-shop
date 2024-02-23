import { useState } from "react";
import { PiArrowBendUpRightFill } from "react-icons/pi";
import { motion } from "framer-motion";
import { Props } from "./TopCategoriesCard";

export const TopCategoriesCard = ({ imageSrc, text }: Props) => {
  const [isHover, setisHover] = useState(false);

  const handleMouseEnter = () => {
    setisHover(true);
  };
  const handleMouseLeave = () => {
    setisHover(false);
  };

  const slideInVariants = {
    hidden: {
      y: "100%", // Initially positioned to the top
      opacity: 0, // Initially transparent
    },
    visible: {
      y: 0, // Slides to 0 (center)
      opacity: 1, // Fades in
      transition: {
        delay: 0.2,
        duration: 0.5, // Animation duration
        ease: "easeOut", // Easing function
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={slideInVariants}
      className="w-full aspect-[8/7] rounded-md overflow-hidden relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className={`group w-full h-full rounded-md overflow-hidden object-cover brightness-[80%] duration-300 ${
          isHover && "scale-[1.1]"
        }`}
        src={`${imageSrc}`}
        alt=""
      />
      <div className="absolute w-full flex justify-center top-[65%] hover:scale-[1.05]">
        <button className="flex items-center justify-between gap-4 bg-white font-semibold py-3 px-5 rounded-md cursor-pointer hover:bg-[#1D242D] hover:text-white duration-150  ">
          {text} <PiArrowBendUpRightFill size={25} />
        </button>
      </div>
    </motion.div>
  );
};
