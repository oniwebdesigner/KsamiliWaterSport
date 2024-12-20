'use client';
import { useState, useRef } from "react";
import Link from "next/link";
import { FaTimes, FaAngleDown } from "react-icons/fa";
import BookNowButton from '../components/BookNowButton'

export default function BurgerMenu({
  isMenuOpen,
  toggleMenu,
  activePage,
  handleSetActivePage,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const burgerButtonRef = useRef(null);

  // Function to toggle the dropdown visibility
  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <section
      className={`fixed top-0 right-0 h-full bg-gray-900 text-white w-64 z-30 transform transition-transform duration-500 ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Button to close the menu */}
      <button
        ref={burgerButtonRef}
        onClick={() => toggleMenu(false)}
        aria-label="Close menu"
        className="absolute top-4 right-4 text-2xl"
      >
        <FaTimes />
      </button>

      {/* Menu items */}
      <ul className="mt-16 space-y-4 text-center">
        <li>
          <Link
            href="/"
            className="block hover:text-yellow-400"
            onClick={() => handleSetActivePage("Home")}
          >
            Home
          </Link>
        </li>
        <li className="relative">
          {/* Dropdown button */}
          <button
            onClick={handleDropdownToggle}
            className="hover:text-yellow-400 cursor-pointer flex items-center justify-center w-full"
          >
            Water Sports <FaAngleDown className="ml-2" />
          </button>

          {/* Dropdown content */}
          {isDropdownOpen && (
            <ul className="mt-2 bg-white text-black border border-gray-700 p-4 rounded-md space-y-2 shadow-lg">
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
                  onClick={() =>
                    handleSetActivePage("Kayak & Pedal Boat Rental")
                  }
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
            className="block hover:text-yellow-400"
            onClick={() => handleSetActivePage("Boat Tours")}
          >
            Boat Tours
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="block hover:text-yellow-400"
            onClick={() => handleSetActivePage("Contact")}
          >
            Contact
          </Link>
        </li>
        {/* <section className="relative items-center space-x-4">
            <BookNowButton />
          </section> */}
      </ul>
     
    </section>
  );
}
