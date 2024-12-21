'use client';
import React, { useState } from "react";
import Image from "next/image";
import SocialMedia from "./SocialMedia";
import Logo from "../../public/kids4.png";
import MapComponent from "./map";

export default function Footer() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 relative">
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
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
          <figcaption className="text-gray-300 text-sm mt-4 mb-5">
            Jet ski rental,<br />
            pedal boat rental,<br />
            kayak rental, SUP – stand up paddle,<br />
            and group tours with speed boat in Ksamil.
          </figcaption>
          <SocialMedia />
        </figure>

        {/* Footer Links */}
        <nav className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="font-semibold mb-3 text-lg">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/home" className="text-gray-300 hover:text-yellow-400">
                Home
              </a>
            </li>
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-gray-800 shadow-lg rounded-md py-2">
                  <li>
                    <a
                      href="/jet-ski"
                      className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
                    >
                      Jet Ski Rental
                    </a>
                  </li>
                  <li>
                    <a
                      href="/kayak"
                      className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
                    >
                      Kayak & Pedal Boat Rental
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="/boat-tours" className="text-gray-300 hover:text-yellow-400">
                Boat Tours
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-300 hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact Section */}
        <aside className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="font-semibold mb-3 text-lg">Get In Touch</h2>
          <p className="text-gray-300">Phone: +35569 522 3077</p>
        </aside>

        {/* Map Section */}
        <section className="flex flex-col items-center md:items-start text-center md:text-left">
  <section className="relative w-full h-[250px] overflow-hidden shadow-md">
    <div className="w-full h-full -mt-20">
    <MapComponent/>
    </div>

    <div className="absolute inset-0 bg-gray-500 opacity-50 pointer-events-none"></div>
  </section>
</section>
</section>

      {/* Footer Bottom Section */}
      <section className="bg-yellow-500 text-center text-sm text-gray-900 py-4 mt-6">
        <p>&copy; 2024 Ksamil Water Sports. Designed by AlbaniaSoftware.</p>
      </section>
    </footer>
  );
}
