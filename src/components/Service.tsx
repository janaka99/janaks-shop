import { RiBubbleChartFill, RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { TbBrandEdge } from "react-icons/tb";

import ServiceCard from "./ServiceCard";

const Service = () => {
  const cards = [
    {
      icon: TbBrandEdge,
      title: "Original Products",
      description:
        "We offer a 100% money-back guarantee in the event that the products are found to be non-original",
    },
    {
      icon: RiBubbleChartFill,
      title: "Satisfaction Guarantee",
      description:
        "If the product you've purchased doesn't fit, you can easily exchange it for the right size.",
    },
    {
      icon: FaShippingFast,
      title: "New Arrival Everyday",
      description:
        "We update our collections almost every single day, ensuring that you'll discover new items and fresh styles regularly.",
    },
    {
      icon: RiMoneyDollarCircleFill,
      title: "Fast & Free Shipping",
      description:
        "We provide expedited and complimentary shipping services exclusively for our loyal customers.",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card, i) => {
          return (
            <ServiceCard
              key={i}
              icon={<card.icon size={30} className="text-base-color" />}
              title={card.title}
              description={card.description}
            />
          );
        })}
      </div>
    </>
  );
};

export default Service;
