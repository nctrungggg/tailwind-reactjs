import React, { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import useDarkMode from "../../hooks/useDarkMode";

function Navbar({ isMobile }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const menuLink = ["Features", "Menu", "  Out Story", "Contact"];
  return (
    <nav className="flex items-center">
      <div className="flex gap-x-3 xl:gap-x-6">
        <div className="text-20 font-medium  xl:text-28 ">NerdCard</div>
        <div className="flex items-center ">
          {isDarkMode ? (
            <BsSunFill
              fontSize="24px"
              color="#e9c46a"
              className="cursor-pointer xl:text-3xl "
              onClick={() => toggleDarkMode(!isDarkMode)}
            />
          ) : (
            <FaMoon
              fontSize="24px"
              color="#e9c46a"
              className="cursor-pointer xl:text-3xl "
              onClick={() => toggleDarkMode(!isDarkMode)}
            />
          )}
        </div>
      </div>

      <div className="ml-auto  ">
        {openMenu && isMobile ? (
          <div
            className="text-white 
          bg-gradient-to-b from-purple-900 to-transparent
          
          fixed top-0 right-0 w-[70%] max-w-[300px]   bottom-0 b shadow-lg shadow-indigo-500/50   py-7 px-6 "
          >
            <MdOutlineClose
              size="24px"
              className="cursor-pointer z-10 absolute top-10 right-8 "
              onClick={handleMenu}
            />
            <ul className="mt-10 flex flex-col gap-y-4 ">
              {menuLink.map((item, idx) => (
                <li key={idx}>
                  <a
                    className="block text-14  cursor-pointer rounded-[50px] py-3 px-5 transition-all hover:bg-pink-500 
                    "
                    href="##"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu
            size="24px"
            className="cursor-pointer  "
            onClick={handleMenu}
          />
        ) : (
          <ul className="flex gap-x-10  ">
            {menuLink.map((item, idx) => (
              <li key={idx}>
                <a
                  className="block text-14 cursor-pointer transition-all hover:text-pink-500 xl:text-18"
                  href="##"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
