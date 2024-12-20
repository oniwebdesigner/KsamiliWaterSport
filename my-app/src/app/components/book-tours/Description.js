import React from 'react';

export default function Description({ title, paragraph }) {
  return (
    <section className="p-4 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{paragraph}</p>
    </section>
  );
}
