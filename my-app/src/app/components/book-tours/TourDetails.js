import React from 'react';
import { FaClock, FaUsers, FaUser, FaChild, FaBaby } from 'react-icons/fa';

const TourDetails = ({price, MaxCapacity, hours}) => {
  return (
    <div className="bg-gray-50 p-4 shadow-lg">
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center space-y-4 md:space-y-0">
        {/* Seksioni majtas */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <FaClock className="text-blue-500 text-lg" />
            <span className="text-gray-800 text-base">{hours}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaUsers className="text-blue-500 text-lg" />
            <span className="text-gray-800 text-base">{MaxCapacity}</span>
          </div>
        </div>

        {/* Seksioni qendra */}
        <div className="flex flex-wrap items-center justify-start md:justify-center space-x-4 space-y-2 md:space-y-0">
          <button className="flex items-center space-x-2 px-3 py-3 bg-white border border-gray-300 rounded shadow hover:bg-gray-100">
            <FaUser className="text-blue-500" />
            <span className="text-gray-800">Adult</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-3 bg-white border border-gray-300 rounded shadow hover:bg-gray-100">
            <FaChild className="text-blue-500" />
            <span className="text-gray-800">Child</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-3 bg-white border border-gray-300 rounded shadow hover:bg-gray-100">
            <FaBaby className="text-blue-500" />
            <span className="text-gray-800">Infant</span>
          </button>
        </div>

        {/* Seksioni djathtas */}
        <div className="text-left md:text-right">
          <div className="text-gray-800 text-sm">From</div>
          <div className="text-green-500 text-2xl font-bold">{price}</div>
          <div className="text-gray-800 text-sm">Per Adult</div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
