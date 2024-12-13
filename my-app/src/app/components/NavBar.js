'use client';
import { useState } from "react";
import { FaBars, FaAngleDown, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu"; // Import BurgerMenu
import Logo from "../../public/kids4.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility
  const [activePage, setActivePage] = useState("Home"); // State for active page
  const [hoverTimeout, setHoverTimeout] = useState(null); // State for hover timeout

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSetActivePage = (page) => {
    setActivePage(page);
    setIsMenuOpen(false); // Close menu after selecting a page
  };

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 2000); // Dropdown stays open for 2 seconds
    setHoverTimeout(timeout);
  };

  return (
    <header className="bg-black text-white">
      <nav className="p-4">
        <section className="grid grid-cols-3 items-center">
          {/* Logo */}
          <figure style={{ position: "relative", width: "70px", height: "70px" }}>
            <Image
              src={Logo}
              alt="Logo"
              layout="fill"
              quality={100}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </figure>

          {/* Navbar for Desktop */}
          <ul className="hidden lg:flex items-center justify-center space-x-8 z-20">
            <li>
              <a
                href="#"
                className={`hover:text-yellow-400 ${
                  activePage === "Home" ? "border-b-2 border-yellow-400" : "border-none"
                }`}
                onClick={() => handleSetActivePage("Home")}
              >
                Home
              </a>
            </li>
            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className={`hover:text-yellow-400 ${
                  activePage === "Water Sports" ? "border-b-2 border-yellow-400" : "border-none"
                } flex items-center`}
              >
                Water Sports <FaAngleDown className="ml-2" />
              </a>
              {isDropdownOpen && (
                <ul className="absolute top-full left-0 mt-2 bg-white text-black border border-gray-700 p-4 rounded-md flex flex-col w-48 shadow-lg">
                  <li>
                    <a
                      href="#"
                      className="block hover:bg-gray-200 px-4 py-2 rounded-md"
                      onClick={() => handleSetActivePage("Jet Ski Rental")}
                    >
                      Jet Ski Rental
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block hover:bg-gray-200 px-4 py-2 rounded-md"
                      onClick={() => handleSetActivePage("Kayak & Pedal Boat Rental")}
                    >
                      Kayak & Pedal Boat Rental
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="#"
                className={`hover:text-yellow-400 ${
                  activePage === "Boat Tours" ? "border-b-2 border-yellow-400" : "border-none"
                }`}
                onClick={() => handleSetActivePage("Boat Tours")}
              >
                Boat Tours
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`hover:text-yellow-400 ${
                  activePage === "Contact" ? "border-b-2 border-yellow-400" : "border-none"
                }`}
                onClick={() => handleSetActivePage("Contact")}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Book Now Button for Desktop */}
          <div className="flex items-center justify-end space-x-4">
            <a
              href="#book-now"
              className="bg-yellow-400 text-black px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-yellow-500 transition-all text-sm md:text-base lg:text-lg"
            >
              <span>Book Now</span>
              <FaShoppingCart />
            </a>
          </div>

          {/* Button for Burger Menu */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="lg:hidden flex justify-end items-center"
          >
            <FaBars className="text-2xl" />
          </button>

          {/* Burger Menu Component */}
          <BurgerMenu
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            activePage={activePage}
            handleSetActivePage={handleSetActivePage}
            isDropdownOpen={isDropdownOpen}
            toggleDropdownMobile={() => setIsDropdownOpen(!isDropdownOpen)}
          />
        </section>
      </nav>
    </header>
  );
}
