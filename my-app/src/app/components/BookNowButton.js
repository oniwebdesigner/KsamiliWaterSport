import React from 'react';

export default function CustomButton({ label = "Book Now", href = "#", className = "" }) {
  return (
    <a
      href={href}
      className={`px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-yellow-500 text-sm sm:text-base md:text-xl text-white font-semibold text-center hover:bg-yellow-600 transition-all duration-300 rounded-md shadow-lg ${className}`}
    >
      {label}
    </a>
  );
}
