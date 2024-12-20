import React from 'react';
import { FaRocket,FaDivide , FaSun, FaSwimmer } from 'react-icons/fa';

export default function PopularFeatures() {
  return (
    <>
      <section className='mb-6 text-black'>
        <h1 className='text-2xl font-semibold mb-2 mt-5'>Popular Features</h1>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='flex items-center space-x-4 p-4 bg-gray-100 shadow-md rounded-lg'>
            <FaRocket className="text-blue-500 text-lg" />
            <p className='bg-gray-50'>Adrenalines</p>
          </div>
          <div className='flex items-center space-x-4 p-4 bg-gray-100 shadow-md rounded-lg'>
            <FaDivide className="text-blue-500 text-lg" />
            <p className='bg-gray-50'>Snorkeling </p>
          </div>
          <div className='flex items-center space-x-4 p-4 bg-gray-100 shadow-md rounded-lg'>
            <FaSun className="text-blue-500 text-lg" />
            <p className='bg-gray-50'>Relaxing </p>
          </div>
          <div className='flex items-center space-x-4 p-4 bg-gray-100 shadow-md rounded-lg'>
            <FaSwimmer className="text-blue-500 text-lg" />
            <p className='bg-gray-50'>Swimming</p>
          </div>
        </div>
      </section>
    </>
  );
}
