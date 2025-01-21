import React from 'react';
import { FaClock, FaUsers, FaUser, FaChild, FaBaby, FaUserFriends } from 'react-icons/fa';

const TourDetails = ({ price, MaxCapacity, hours, displayOptions }) => {
  return (
    <section className="bg-gray-50 p-4 shadow-lg">
      <section className="flex flex-col md:flex-row md:justify-between items-start md:items-center space-y-4 md:space-y-0">
        <section className="space-y-2">
          <section className="flex items-center space-x-2">
            <FaClock className="text-blue-500 text-lg" />
            <span className="text-gray-800 text-base">{hours}</span>
          </section>
          <section className="flex items-center space-x-2">
            <FaUsers className="text-blue-500 text-lg" />
            <span className="text-gray-800 text-base">{MaxCapacity}</span>
          </section>
        </section>

        <section className="flex flex-wrap items-center justify-start md:justify-center space-x-4 space-y-2 md:space-y-0">
          {displayOptions.includes('adult') && (
           <button className="flex items-center space-x-2 px-3 py-3 bg-white border border-gray-300 rounded shadow hover:bg-gray-100 mt-2 sm:mt-0">

              <FaUser className="text-blue-500" />
              <span className="text-gray-800">Adult</span>
            </button>
          )}
          {displayOptions.includes('child') && (
            <button className="flex items-center space-x-2 px-3 py-3 bg-white border border-gray-300 rounded shadow hover:bg-gray-100">
              <FaChild className="text-blue-500" />
              <span className="text-gray-800">Child</span>
            </button>
          )}
          {displayOptions.includes('infant') && (
            <button className="flex items-center space-x-2 px-3 py-3 bg-white border border-gray-300 rounded shadow hover:bg-gray-100">
              <FaBaby className="text-blue-500" />
              <span className="text-gray-800">Infant</span>
            </button>
          )}
          {displayOptions.includes('group') && (
            <button className="flex items-center space-x-2 px-3 py-3 bg-white border border-gray-300 rounded shadow hover:bg-gray-100">
              <FaUserFriends className="text-blue-500" />
              <span className="text-gray-800">Group</span>
            </button>
          )}
        </section>

        <section className="text-left md:text-right">
          <section className="text-gray-800 text-sm">From</section>
          <section className="text-green-500 text-2xl font-bold">{price}</section>
          <section className="text-gray-800 text-sm">Per Adult</section>
        </section>
      </section>
    </section>
  );
};

export default TourDetails;
