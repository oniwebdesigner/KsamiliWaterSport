'use client';
import Image from 'next/image'; // Importing Image from Next.js
import ksamil from '../../../public/ksamil.jpg'; // Import the image
import { FaRegClock } from 'react-icons/fa'; // Import clock icon

import React, { useState } from 'react';

export default function TravelItinerary() {
  const [selectedItinerary, setSelectedItinerary] = useState(null); // Initially, no itinerary is selected

  const itineraries = {
    speedboat: {
      title: '9:00 am - SpeedBoat ride',
      image: ksamil, // Use the imported image here
      description:
        'You will meet your skipper at our starting point and hop on board a comfortable speedboat. We will cruise around the islands where you can enjoy the adrenaline of the speedboat and take some amazing photos.',
      duration: '20 Minutes', // Set the correct duration
    },
    threeIslands: {
      title: '9:20 am - Three Islands Exploration',
      image: ksamil, // Use the same imported image or another image if needed
      description:
        'Explore the stunning beauty of the Three Islands. Relax on the beach, swim in crystal-clear waters, and enjoy the serene environment.',
      duration: '2 Hours', // Set the correct duration
    },
  };

  const toggleItinerary = (itinerary) => {
    // Toggle the selected itinerary: if it's already selected, set it to null (close it).
    setSelectedItinerary((prev) => (prev === itinerary ? null : itinerary));
  };

  return (
    <section className="p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Travel Itinerary</h2>

      {/* Radio Buttons */}
      <div className="flex flex-col space-y-4 mb-6">
        <label className="flex items-center space-x-3">
          <input
            type="radio"
            name="itinerary"
            value="speedboat"
            checked={selectedItinerary === 'speedboat'}
            onChange={() => toggleItinerary('speedboat')}
            className="form-radio h-5 w-5 text-blue-600"
          />
          <span className="text-gray-800">SpeedBoat Ride</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="radio"
            name="itinerary"
            value="threeIslands"
            checked={selectedItinerary === 'threeIslands'}
            onChange={() => toggleItinerary('threeIslands')}
            className="form-radio h-5 w-5 text-blue-600"
          />
          <span className="text-gray-800">Three Islands Exploration</span>
        </label>
      </div>

      {/* Itinerary Details */}
      <div className=" p-6">
        {/* Speedboat Itinerary */}
        <div className="mb-4">
          <h3
            onClick={() => toggleItinerary('speedboat')}
            className="text-xl font-semibold text-gray-800 mb-2 cursor-pointer"
          >
            {itineraries.speedboat.title}
          </h3>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              selectedItinerary === 'speedboat' ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <Image
              src={itineraries.speedboat.image}
              alt={itineraries.speedboat.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
              width={500}
              height={300}
            />
            <p className="text-gray-700 leading-relaxed mb-4">
              {itineraries.speedboat.description}
            </p>
            <div className="flex items-center justify-start text-gray-800">
              <FaRegClock className="text-gray-600 mr-2" />
              <span>{itineraries.speedboat.duration}</span> {/* Correct duration */}
            </div>
          </div>
        </div>

        {/* Three Islands Itinerary */}
        <div>
          <h3
            onClick={() => toggleItinerary('threeIslands')}
            className="text-xl font-semibold text-gray-800 mb-2 cursor-pointer"
          >
            {itineraries.threeIslands.title}
          </h3>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              selectedItinerary === 'threeIslands' ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <Image
              src={itineraries.threeIslands.image}
              alt={itineraries.threeIslands.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
              width={500}
              height={300}
            />
            <p className="text-gray-700 leading-relaxed mb-4">
              {itineraries.threeIslands.description}
            </p>
            <div className="flex items-center justify-start text-gray-800">
              <FaRegClock className="text-gray-600 mr-2" />
              <span>{itineraries.threeIslands.duration}</span> {/* Correct duration */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
