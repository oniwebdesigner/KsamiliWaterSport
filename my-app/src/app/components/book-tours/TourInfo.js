import React from 'react';
import { FaClock, FaUsers, FaLanguage } from 'react-icons/fa';

export default function TourInfo({ hours, people, options }) {
  return (
    <>
      <section className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-black'>
        {options.includes('duration') && (
          <section className="p-4 bg-gray-100 shadow-lg flex items-center space-x-4">
            <FaClock className="text-blue-500 text-lg" />
            <section>
              <h1 className='text-gray-800 font-semibold'>Duration</h1>
              <p className='text-gray-700'>{hours}</p>
            </section>
          </section>
        )}

        {options.includes('tourType') && (
          <section className="p-4 bg-gray-100 shadow-lg flex items-center space-x-4">
            <FaUsers className="text-blue-500 text-lg" />
            <section>
              <h1 className='text-gray-800 font-semibold'>Tour Type</h1>
              <p className='text-gray-700'>Group Tour</p>
            </section>
          </section>
        )}

        {options.includes('groupSize') && (
          <section className="p-4 bg-gray-100 shadow-lg flex items-center space-x-4">
            <FaUsers className="text-blue-500 text-lg" />
            <section>
              <h1 className='text-gray-800 font-semibold'>Group Size</h1>
              <p className='text-gray-700'>{people}</p>
            </section>
          </section>
        )}

        {options.includes('language') && (
          <section className="p-4 bg-gray-100 shadow-lg flex items-center space-x-4">
            <FaLanguage className="text-blue-500 text-lg" />
            <section>
              <h1 className='text-gray-800 font-semibold'>Language</h1>
              <p className='text-gray-700'>English, Albanian</p>
            </section>
          </section>
        )}
      </section>
    </>
  );
}
