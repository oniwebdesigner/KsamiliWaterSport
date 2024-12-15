// FeatureCard.js
import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 items-center p-4 text-center">
      <section className="text-4xl mb-4">{icon}</section>
      <h3 className="text-2xl font-semibold text-blue-600 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </section>
  );
};

export default FeatureCard;
