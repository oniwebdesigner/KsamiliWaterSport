import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function SocialMedia() {
  return (
    <section className="flex space-x-6 justify-center items-center">
      {/* Facebook Icon */}
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-blue-600 text-3xl hover:text-blue-800 transition duration-300" />
      </a>

      {/* Instagram Icon */}
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-pink-500 text-3xl hover:text-pink-700 transition duration-300" />
      </a>

      {/* TikTok Icon */}
      <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
        <FaTiktok className="text-white text-3xl hover:text-gray-800 transition duration-300" />
      </a>
    </section>
  );
}
