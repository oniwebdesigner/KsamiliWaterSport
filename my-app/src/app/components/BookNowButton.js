import React from 'react';

export default function BookNowButton() {
  return (
    <a 
      href="/book-now" 
      className="px-8 py-4 bg-yellow-500 text-white font-semibold text-xl text-center hover:bg-yellow-600 transition-all duration-300 rounded-md shadow-lg"
    >
      Book Now
    </a>
  );
}
