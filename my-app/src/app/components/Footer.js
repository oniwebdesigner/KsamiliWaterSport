'use client'
import React, { useState } from "react";
import Image from "next/image";
import SocialMedia from "./SocialMedia";
import Logo from "../../public/kids4.png";

export default function Footer() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Logo and Description */}
        <figure className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src={Logo}
            alt="Logo"
            width={70}
            height={70}
            quality={100}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ width: "70px", height: "70px", position: "relative" }}
          />
          <figcaption className="text-gray-300 text-sm mt-4">
            Jet ski rental,<br />
            pedal boat rental,<br />
            kayak rental, SUP – stand up paddle,<br />
            and group tours with speed boat in Ksamil.
          </figcaption>
        </figure>

        {/* Footer Links */}
        <nav className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="font-semibold mb-3 text-lg">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/home" className="text-gray-300 hover:text-yellow-400">Home</a></li>
            <li className="relative">
              <button 
                className="flex items-center text-gray-300 hover:text-yellow-400 focus:outline-none" 
                onClick={toggleDropdown}
              >
                Water Sports
                <svg
                  className="w-4 h-4 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-gray-800 shadow-lg rounded-md py-2">
                  <li><a href="/jet-ski" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">Jet Ski Rental</a></li>
                  <li><a href="/kayak" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">Kayak & Pedal Boat Rental</a></li>
                </ul>
              )}
            </li>
            <li><a href="/boat-tours" className="text-gray-300 hover:text-yellow-400">Boat Tours</a></li>
            <li><a href="/contact" className="text-gray-300 hover:text-yellow-400">Contact</a></li>
          </ul>
        </nav>

        {/* Contact Section */}
        <aside className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="font-semibold mb-3 text-lg">Get In Touch</h2>
          <p className="text-gray-300">Phone: +35569 522 3077</p>
        </aside>
      </section>

      {/* Social Media Icons */}
      <section className="flex justify-center gap-6 mt-6 mb-10 sm:mb-6">
        <SocialMedia />
      </section>

      {/* Footer Bottom Section */}
      <footer className="bg-yellow-500 text-center text-sm text-gray-900 py-4 mt-6 absolute bottom-0 w-full">
        <p>&copy; 2024 Ksamil Water Sports. Designed by AlbaniaSoftware.</p>
      </footer>
    </footer>
  );
}  
