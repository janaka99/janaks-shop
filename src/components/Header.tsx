import { motion } from "framer-motion";
import { useThemeContext } from "../themeContext/ThemeContext";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { CiBurger, CiDark, CiMenuBurger } from "react-icons/ci";
import { TiLightbulb } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Header = () => {
  const { setTheme, theme } = useThemeContext();

  const [dropdownActive, setdropdownActive] = useState(false);

  const slideInVariants = {
    hidden: {
      y: "-100%", // Initially positioned to the top
      opacity: 0, // Initially transparent
    },
    visible: {
      y: 0, // Slides to 0 (center)
      opacity: 1, // Fades in
      transition: {
        duration: 0.8, // Animation duration
        ease: "easeOut", // Easing function
      },
    },
  };

  const handleTheme = () => {
    setTheme((prev: boolean) => !prev);
  };

  const handleDropDown = () => {
    setdropdownActive((prev) => !prev);
  };

  return (
    <header className="flex w-screen h-20 bg-primary-color  anim over relative z-[201] ">
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={slideInVariants}
        className={` w-screen px-[5%] md:w-[90%] md:px-[0] flex mx-auto justify-between items-center `}
      >
        <div className="text-xl md:2xl text-base-color  font-bold tracking-tighter transfor subpixel-antialiased anim">
          JANAKA'S SHOP
          {/* w-fit flex items-center  */}
          {/* flex gap-10 text-md items-center */}
        </div>
        <div
          id="div"
          className={` ${
            dropdownActive
              ? "h-[300px] transition-all duration-1000 overflow-hidden"
              : "h-0  overflow-hidden transition-all duration-700 "
          }  bg-secondary  absolute top-full w-screen left-0  z-[20000] drop-shadow-2xl md:border-none md:drop-shadow-none  md:static md:flex md:items-center md:w-fit `}
        >
          <ul className=" w-[90%] mx-auto my-16  flex flex-col md:my-0 md:w-fit  gap-10 md:flex-row md:items-center ">
            <li>
              <a className="text-base-color anim" href="/">
                Most Wanted
              </a>
            </li>
            <li>
              <a className="text-base-color anim" href="/">
                New Arrival
              </a>
            </li>
            <li>
              <a className="text-base-color anim" href="/">
                Brands
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-3 md:gap-5  items-center">
          <div className="gap-3 md:gap-5 flex items-center">
            <div className="gap-3 md:gap-5 flex items-center">
              {theme ? (
                <CiDark
                  onClick={handleTheme}
                  className="text-base-color anim cursor-pointer"
                  size={25}
                />
              ) : (
                <TiLightbulb
                  onClick={handleTheme}
                  className="text-base-color anim cursor-pointer"
                  size={25}
                />
              )}
            </div>
            <AiOutlineShoppingCart className="text-base-color anim" size={25} />
            <AiOutlineUser className="text-base-color anim" size={25} />
          </div>
          <div className="md:hidden">
            <GiHamburgerMenu
              className="text-base-color anim cursor-pointer"
              size={25}
              onClick={handleDropDown}
            />
          </div>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
