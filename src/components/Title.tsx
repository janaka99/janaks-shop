import { motion } from "framer-motion";
type props = {
  title1: string;
  title2: string;
};

const Title = ({ title1, title2 }: props) => {
  const slideInVariants = {
    hidden: {
      x: "-100%", // Initially positioned to the top
      opacity: 0, // Initially transparent
    },
    visible: {
      x: 0, // Slides to 0 (center)
      opacity: 1, // Fades in
      transition: {
        delay: 0.2,
        duration: 0.8, // Animation duration
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
      className="text-base-color text-center sm:text-start text-4xl"
    >
      {title1} <br /> {title2}
    </motion.div>
  );
};

export default Title;
