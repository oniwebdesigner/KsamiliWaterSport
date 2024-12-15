'use client';
import { useState, useRef } from "react";
import { FaTimes, FaAngleDown } from "react-icons/fa";

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
      className={`fixed top-0 right-0 h-full bg-black text-white w-64 z-30 transform transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
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
          <a
            href="#"
            className="block hover:text-yellow-400"
            onClick={() => handleSetActivePage("Home")}
          >
            Home
          </a>
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
            className="block hover:text-yellow-400"
            onClick={() => handleSetActivePage("Boat Tours")}
          >
            Boat Tours
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block hover:text-yellow-400"
            onClick={() => handleSetActivePage("Contact")}
          >
            Contact
          </a>
        </li>
      </ul>
    </section>
  );
}
