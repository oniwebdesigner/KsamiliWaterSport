import React from 'react';
import { FaClock, FaUsers, FaLanguage } from 'react-icons/fa';

export default function TourInfo({ hours, people }) {
  return (
    <>
      <section className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-black'>
        <div className="p-4 bg-gray-100 shadow-lg flex items-center space-x-4">
          <FaClock className="text-blue-500 text-lg" />
          <div>
            <h1 className='text-gray-800 font-semibold'>Duration</h1>
            <p className='text-gray-700'>{hours}</p>
          </div>
        </div>

        <div className="p-4 bg-gray-100 shadow-lg flex items-center space-x-4">
          <FaUsers className="text-blue-500 text-lg" />
          <div>
            <h1 className='text-gray-800 font-semibold'>Tour Type</h1>
            <p className='text-gray-700'>Group Tour</p>
          </div>
        </div>

        <div className="p-4 bg-gray-100 shadow-lg flex items-center space-x-4">
          <FaUsers className="text-blue-500 text-lg" />
          <div>
            <h1 className='text-gray-800 font-semibold'>Group Size</h1>
            <p className='text-gray-700'>{people}</p>
          </div>
        </div>

        <div className="p-4 bg-gray-100 shadow-lg flex items-center space-x-4">
          <FaLanguage className="text-blue-500 text-lg" />
          <div>
            <h1 className='text-gray-800 font-semibold'>Language</h1>
            <p className='text-gray-700'>English, Albanian</p>
          </div>
        </div>
      </section>
    </>
  );
}
