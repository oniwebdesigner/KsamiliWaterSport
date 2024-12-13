'use client';
import { useState, useRef, useEffect } from "react";
import { FaTimes, FaAngleDown } from "react-icons/fa";

export default function BurgerMenu({
  isMenuOpen,
  toggleMenu,
  activePage,
  handleSetActivePage,
}) {
  // State for dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Ref for dropdown
  const dropdownRef = useRef(null);

  // Handle dropdown state toggle
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown on click
  };

  // Close dropdown when clicking outside
  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  // Click outside event listener
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        handleDropdownClose();
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-black text-white w-64 z-30 transform transition-transform duration-500 ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        onClick={toggleMenu}
        aria-label="Close menu"
        className="absolute top-4 right-4 text-2xl"
      >
        <FaTimes />
      </button>
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
        <li>
          <a
            href="#"
            className="hover:text-yellow-400 cursor-pointer flex items-center justify-center"
            onClick={handleDropdownToggle}
          >
            Water Sports <FaAngleDown className="ml-2" />
          </a>
          {isDropdownOpen && (
            <ul
              ref={dropdownRef}
              className="mt-2 bg-white text-black border border-gray-700 p-4 rounded-md space-y-2 shadow-lg absolute top-full right-0 w-64"
            >
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
    </div>
  );
}
