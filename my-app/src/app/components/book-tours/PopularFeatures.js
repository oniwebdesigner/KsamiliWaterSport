import React from 'react';
import { FaRocket, FaDivide, FaSun, FaSwimmer } from 'react-icons/fa';

export default function PopularFeatures({ featuresToShow }) {
  const allFeatures = [
    { icon: <FaRocket className="text-blue-500 text-lg" />, label: 'Adrenalines' },
    { icon: <FaDivide className="text-blue-500 text-lg" />, label: 'Snorkeling' },
    { icon: <FaSun className="text-blue-500 text-lg" />, label: 'Relaxing' },
    { icon: <FaSwimmer className="text-blue-500 text-lg" />, label: 'Swimming' },
  ];

  const displayedFeatures = featuresToShow 
    ? allFeatures.filter(feature => featuresToShow.includes(feature.label))
    : allFeatures;

  return (
    <section className='mb-6 text-black'>
      <h1 className='text-2xl font-semibold mb-2 mt-5'>Popular Features</h1>
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {displayedFeatures.map((feature, index) => (
          <div key={index} className='flex items-center space-x-4 p-4 bg-gray-100 shadow-md rounded-lg'>
            {feature.icon}
            <p className='bg-gray-50'>{feature.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
