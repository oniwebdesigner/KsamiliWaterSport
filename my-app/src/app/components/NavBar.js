'use client';
import { useState, useEffect, useRef } from "react";
import { FaBars, FaAngleDown } from "react-icons/fa";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";
import Logo from "../../public/kids4.png";
import BookNowButton from "./BookNowButton";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility
  const [activePage, setActivePage] = useState("Home"); // State for active page
  const [hoverTimeout, setHoverTimeout] = useState(null); // State for hover timeout

  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleSetActivePage = (page) => {
    setActivePage(page);
    setIsMenuOpen(false);
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
    }, 2000);
    setHoverTimeout(timeout);
  };

  return (
    <header className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50">
      <nav className="p-4" ref={menuRef}>
        <section className="grid grid-cols-3 items-center">
          {/* Logo */}
          <figure style={{ position: "relative", width: "70px", height: "70px" }}>
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                layout="fill"
                quality={100}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </Link>
          </figure>

          {/* Navbar for Desktop */}
          <ul className="hidden lg:flex items-center justify-center space-x-8 z-20">
            <li>
              <Link
                href="/"
                className={`hover:text-yellow-400 ${
                  activePage === "Home" ? "border-b-2 border-yellow-400" : "border-none"
                }`}
                onClick={() => handleSetActivePage("Home")}
              >
                Home
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`hover:text-yellow-400 ${
                  activePage === "Water Sports" ? "border-b-2 border-yellow-400" : "border-none"
                } flex items-center`}
              >
                Water Sports <FaAngleDown className="ml-2" />
              </div>
              {isDropdownOpen && (
                <ul className="absolute top-full left-0 mt-2 bg-white text-black border border-gray-700 p-4 rounded-md flex flex-col w-48 shadow-lg">
                  <li>
                    <Link
                      href="/jet-ski-rental"
                      className="block hover:bg-gray-200 px-4 py-2 rounded-md"
                      onClick={() => handleSetActivePage("Jet Ski Rental")}
                    >
                      Jet Ski Rental
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pedal-boat-rental"
                      className="block hover:bg-gray-200 px-4 py-2 rounded-md"
                      onClick={() => handleSetActivePage("Kayak & Pedal Boat Rental")}
                    >
                      Kayak & Pedal Boat Rental
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/boat-tours"
                className={`hover:text-yellow-400 ${
                  activePage === "Boat Tours" ? "border-b-2 border-yellow-400" : "border-none"
                }`}
                onClick={() => handleSetActivePage("Boat Tours")}
              >
                Boat Tours
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`hover:text-yellow-400 ${
                  activePage === "Contact" ? "border-b-2 border-yellow-400" : "border-none"
                }`}
                onClick={() => handleSetActivePage("contact")}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Book Now Button for Desktop */}
          <section className="flex items-center justify-end space-x-4">
            <BookNowButton />
          </section>

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
            toggleMenu={setIsMenuOpen}
            activePage={activePage}
            handleSetActivePage={handleSetActivePage}
          />
        </section>
      </nav>
    </header>
  );
}
