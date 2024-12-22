'use client';
import Image from 'next/image';
import { FaRegClock } from 'react-icons/fa';
import React, { useState } from 'react';



export default function TravelItinerary({ itineraries }) {
  const [selectedItinerary, setSelectedItinerary] = useState(null);

  const toggleItinerary = (itinerary) => {
    setSelectedItinerary((prev) => (prev === itinerary ? null : itinerary));
  };

  return (
    <section className="p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-8 bg-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Travel Itinerary</h2>

      <div className="flex flex-col space-y-4">
        {Object.entries(itineraries).map(([key, itinerary]) => (
          <div key={key} className="border-b border-gray-300 pb-4">
            {/* Radio Button */}
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="itinerary"
                value={key}
                checked={selectedItinerary === key}
                onChange={() => toggleItinerary(key)}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="text-lg font-semibold text-gray-800">
                {itinerary.title}
              </span>
            </label>

            {/* Itinerary Details */}
            <div
              className={`transition-all duration-700 ease-in-out overflow-hidden ${
                selectedItinerary === key ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="mt-4 p-10 rounded-lg shadow-inner">
                <Image
                  src={itinerary.image}
                  alt={itinerary.title}
                  className="w-full h-full object-cover rounded-lg mx-auto"
                  width={500}
                  height={500}
                  quality={100}
                />
                <p className="text-gray-700 text-sm leading-relaxed mt-4">
                  {itinerary.description}
                </p>
                <div className="flex items-center justify-center text-gray-800 mt-2">
                  <FaRegClock className="text-gray-600 mr-2" />
                  <span className="text-sm">{itinerary.duration}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
