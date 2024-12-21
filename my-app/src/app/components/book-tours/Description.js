import React from 'react';

export default function Description({ title, paragraphs=[], bold }) {
  return (
    <section className="p-4 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      {bold && <p className="font-bold text-gray-900">{bold}</p>}
      <div className="text-gray-600">
        {paragraphs && paragraphs.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
            {index < paragraphs.length - 1 && <br />}
          </p>
        ))}
      </div>
    </section>
  );
}
