import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, title, description }: Props) => {
  const slideInVariants = {
    hidden: {
      x: "100%", // Initially positioned to the top
      opacity: 0, // Initially transparent
    },
    visible: {
      x: 0, // Slides to 0 (center)
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
      className="flex flex-col justify-start gap-2"
    >
      <div className="p-2">{icon}</div>
      <div className="text-base-color text-lg font-semibold">{title}</div>
      <div className="text-sm text-muted-color">{description}</div>
    </motion.div>
  );
};

export default ServiceCard;
