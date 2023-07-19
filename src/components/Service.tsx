import { RiBubbleChartFill, RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { TbBrandEdge } from "react-icons/tb";

import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <ServiceCard
          icon={<TbBrandEdge size={30} className="text-base-color" />}
          title="Original Products"
          description="We offer a 100% money-back guarantee in the event that the products
          are found to be non-original."
        />
        <ServiceCard
          icon={<RiBubbleChartFill size={30} className="text-base-color" />}
          title="Satisfaction Guarantee"
          description="If the product you've purchased doesn't fit, you can easily exchange
          it for the right size."
        />
        <ServiceCard
          icon={<FaShippingFast size={30} className="text-base-color" />}
          title="New Arrival Everyday"
          description="We update our collections almost every single day, ensuring that
          you'll discover new items and fresh styles regularly."
        />
        <ServiceCard
          icon={
            <RiMoneyDollarCircleFill size={30} className="text-base-color" />
          }
          title="Fast & Free Shipping"
          description="We provide expedited and complimentary shipping services exclusively
          for our loyal customers."
        />
      </div>
    </>
  );
};

export default Service;
