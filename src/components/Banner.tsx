import { useEffect, useRef, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { motion } from "framer-motion";

const Banner = () => {
  const timerRef = useRef<any>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const [isLeft, setIsLeft] = useState(true);
  const [isRight, setisRight] = useState(true);

  const [translateX, setTranslatex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1675108657868-de290421805a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1432712641917-22ce322ab531?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
  ];

  const handleNext = async () => {
    if (divRef.current) {
      if (currentIndex + 1 < images.length) {
        console.log(currentIndex, translateX);
        let x;
        setTranslatex(() => {
          x = (currentIndex + 1) * -100;
          return x;
        });
        setCurrentIndex(() => currentIndex + 1);
      }
    }
  };

  const handlePrev = () => {
    if (divRef.current) {
      if (currentIndex - 1 >= 0) {
        let x;
        setTranslatex(() => {
          x = currentIndex - 1 === 0 ? 0 : (currentIndex - 1) * -100;
          return x;
        });
        setCurrentIndex(() => currentIndex - 1);
      }
    }
  };

  const addStyle = () => {
    if (divRef.current) {
      divRef.current.style.transform = `translateX(${translateX}%)`;
    }
  };

  const dotClicker = (key: any) => {
    setCurrentIndex(key);
  };

  useEffect(() => {
    addStyle();
  }, [translateX]);

  useEffect(() => {
    if (currentIndex === 0) {
      setIsLeft(false);
      setisRight(true);
    } else {
      setIsLeft(true);
    }
    if (currentIndex === images.length - 1) {
      setisRight(false);
      setIsLeft(true);
    } else {
      setisRight(true);
    }
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRight) {
        handleNext();
      } else {
        setCurrentIndex(0);
        setTranslatex(0);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, isRight]);

  return (
    <motion.div
      initial={{
        width: "0",
        opacity: 0,
      }}
      animate={{
        width: "100%",
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      }}
      className=" relative w-full h-full  bg-black rounded-2xl  group overflow-hidden"
    >
      <div className="w-full h-full flex justify-start  ">
        <button
          className={` hidden ${
            isLeft && "group-hover:block"
          } absolute border-2 bg-gray-100  opacity-50 rounded-md z-10 top-[43%] left-2 h-24 px-5 hover:bg-gray-300 font-bold duration-150`}
          onClick={handlePrev}
        >
          {"<"}
        </button>
        <div
          ref={divRef}
          // style={() => getSliderStyles()}
          className={`w-full h-full flex justify-start transition-transform duration-500`}
        >
          {images.map((img, imgIndex) => (
            <img
              className="w-full min-w-full h-full object-cover brightness-[55%] transition-all duration-500"
              src={`${images[imgIndex]?.url}`}
              alt=""
            />
          ))}
        </div>
        <button
          className={`hidden ${
            isRight && "group-hover:block"
          } absolute border-2 bg-gray-100  opacity-50 rounded-md  z-10 top-[43%] right-2 h-24 px-5 hover:bg-gray-300 font-bold duration-150`}
          onClick={handleNext}
        >
          {">"}
        </button>
        <div className="absolute w-full bottom-2 justify-center left-0 z-[100] flex gap-5 items-center">
          {images.map((img, imageIndex) =>
            imageIndex === currentIndex ? (
              <div className="w-4 h-4 border-2 rounded-[50%] flex items-center justify-center border-gray-300 transition-transform duration-500">
                <div className="w-2 h-2 bg-gray-300  rounded-[50%]"></div>
              </div>
            ) : (
              <div className="w-2 h-2 bg-gray-300 rounded-[50%]"></div>
            )
          )}
        </div>
      </div>
      <div className="w-[95%] md:[80%] mx-auto absolute h-[90%] top-[6%] left-0 right-0 flex flex-col justify-center items-center gap-10">
        <motion.div
          initial={{
            x: "-100%",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.8,
              duration: 0.8,
              ease: "easeOut",
            },
          }}
          className="text-4xl  md:text-5xl xl:text-7xl text-center text-white font-semibold"
        >
          Elevate Your Style to New Heights with Our Sizzling Summer
          Collections!
        </motion.div>
        <motion.button
          initial={{
            y: "100%",
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 1.6,
              duration: 0.5,
              ease: "easeOut",
            },
          }}
          className="flex items-center bg-white rounded-md gap-4 py-4 px-6 font-semibold cursor-pointer hover:bg-[#1D242D] hover:text-white duration-150"
        >
          Show now <AiOutlineShoppingCart />{" "}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Banner;
