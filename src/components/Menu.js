import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Menu() {
  const [activeItem, setActiveItem] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleItemClick = (index) => {
    setActiveItem(index);
    closeMenu();
  };

  const handleLogoClick = () => {
    scrollToTop();
    closeMenu();
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-[#1F1F1F] lg:flex lg:justify-between lg:items-center lg:w-full lg:p-4 lg:fixed lg:z-10 hidden">
        <Fade cascade damping={0.5}>
          <button
            className="h-10 w-10 invert ml-20 cursor-pointer"
            onClick={handleLogoClick}
          >
            <img src="/logo.png" alt="logo" />
          </button>
          <div
            className={`mr-10 font-bold text-lg ${
              isMenuOpen ? "hidden" : "block"
            }`}
          >
            <ul
              className={`text-gray-200 flex space-x-4 ${
                isMenuOpen ? "flex-col" : "flex-row"
              }`}
            >
              {menuItems.map((menuItem, index) => (
                <li key={index}>
                  <Link
                    to={menuItem.id}
                    smooth={true}
                    offset={menuItem.offset}
                    duration={500}
                    className={`hover:text-red-400 cursor-pointer ${
                      activeItem === index ? "text-red-400" : ""
                    }`}
                    onClick={() => handleItemClick(index)}
                  >
                    {menuItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Fade>
      </nav>
      <nav className="lg:hidden bg-[#1F1F1F] flex justify-between items-center w-full p-4 fixed z-10">
        <div className="flex items-start ml-2 flex-col">
          <button className="text-white cursor-pointer" onClick={toggleMenu}>
            ☰
          </button>
        </div>
        <button
          className="h-10 w-10 mr-8 invert cursor-pointer"
          onClick={handleLogoClick}
        >
          <img src="/logo.png" alt="logo" />
        </button>
      </nav>
      <div
        className={`font-bold mt-20 ml-6 z-20 fixed bg-black pr-10 pb-4 rounded-lg ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="text-gray-200 flex flex-col space-y-4">
          {menuItems.map((menuItem, index) => (
            <li key={index}>
              <Link
                to={menuItem.id}
                smooth={true}
                offset={menuItem.offset}
                duration={500}
                className={`hover:text-red-400 cursor-pointer ${
                  activeItem === index ? "text-red-400" : ""
                }`}
                onClick={() => handleItemClick(index)}
              >
                {menuItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const menuItems = [
  { id: "Home", label: "Home", offset: -200 },
  { id: "About", label: "About", offset: -300 },
  { id: "Skills", label: "Skills", offset: -200 },
  { id: "Projects", label: "Projects", offset: -250 },
  { id: "Contact", label: "Contact", offset: -70 },
];
