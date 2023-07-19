import { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { motion } from "framer-motion";

type props = {
  imageSrc: string;
  text: string;
};

const FeaturedProductCard = ({ imageSrc, text }: props) => {
  const [isHover, setisHover] = useState(false);

  const handleMouseEnter = () => {
    setisHover(true);
  };
  const handleMouseLeave = () => {
    setisHover(false);
  };

  const slideInVariants = {
    hidden: {
      x: "100%", // Initially positioned to the top
      opacity: 0, // Initially transparent
    },
    visible: {
      x: 0, // Slides to 0 (center)
      opacity: 1, // Fades in
      transition: {
        delay: 0.5,
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
      className="w-full flex flex-col h-full rounded-md overflow-hidden   "
    >
      <div
        className="w-full aspect-[7/8] rounded-md overflow-hidden relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className={`absolute rounded-md w-full h-full rotate-0  object-cover object-center transition-transform brightness-[80%] duration-300 origin-center translate-z-0 ${
            isHover && "scale-[1.05] "
          }`}
          src={`${imageSrc}`}
          alt=""
        />
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="flex flex-col gap-2">
          <div className="text-base-color">{text}</div>
          <div className="font-bold text-2xl text-base-color">$48</div>
        </div>
        <div className="w-[50px] h-[50px]  bg-base-color rounded-md  overflow-hidden">
          <div className="w-full h-full flex cursor-pointer justify-center items-center hover:scale-[1.1] duration-200">
            <HiOutlineShoppingCart className=" text-primary-color " size={25} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProductCard;
